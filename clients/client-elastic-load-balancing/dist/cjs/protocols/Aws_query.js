"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddTags", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddTagsCommand = serializeAws_queryAddTagsCommand;
async function serializeAws_queryApplySecurityGroupsToLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryApplySecurityGroupsToLoadBalancerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ApplySecurityGroupsToLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = serializeAws_queryApplySecurityGroupsToLoadBalancerCommand;
async function serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachLoadBalancerToSubnetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachLoadBalancerToSubnets", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachLoadBalancerToSubnetsCommand = serializeAws_queryAttachLoadBalancerToSubnetsCommand;
async function serializeAws_queryConfigureHealthCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryConfigureHealthCheckInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ConfigureHealthCheck", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryConfigureHealthCheckCommand = serializeAws_queryConfigureHealthCheckCommand;
async function serializeAws_queryCreateAppCookieStickinessPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateAppCookieStickinessPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateAppCookieStickinessPolicy", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateAppCookieStickinessPolicyCommand = serializeAws_queryCreateAppCookieStickinessPolicyCommand;
async function serializeAws_queryCreateLBCookieStickinessPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLBCookieStickinessPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLBCookieStickinessPolicy", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLBCookieStickinessPolicyCommand = serializeAws_queryCreateLBCookieStickinessPolicyCommand;
async function serializeAws_queryCreateLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateAccessPointInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLoadBalancerCommand = serializeAws_queryCreateLoadBalancerCommand;
async function serializeAws_queryCreateLoadBalancerListenersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLoadBalancerListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLoadBalancerListeners", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLoadBalancerListenersCommand = serializeAws_queryCreateLoadBalancerListenersCommand;
async function serializeAws_queryCreateLoadBalancerPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLoadBalancerPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLoadBalancerPolicy", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLoadBalancerPolicyCommand = serializeAws_queryCreateLoadBalancerPolicyCommand;
async function serializeAws_queryDeleteLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAccessPointInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLoadBalancerCommand = serializeAws_queryDeleteLoadBalancerCommand;
async function serializeAws_queryDeleteLoadBalancerListenersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteLoadBalancerListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLoadBalancerListeners", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLoadBalancerListenersCommand = serializeAws_queryDeleteLoadBalancerListenersCommand;
async function serializeAws_queryDeleteLoadBalancerPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteLoadBalancerPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLoadBalancerPolicy", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLoadBalancerPolicyCommand = serializeAws_queryDeleteLoadBalancerPolicyCommand;
async function serializeAws_queryDeregisterInstancesFromLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeregisterEndPointsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeregisterInstancesFromLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = serializeAws_queryDeregisterInstancesFromLoadBalancerCommand;
async function serializeAws_queryDescribeAccountLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAccountLimits", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
async function serializeAws_queryDescribeInstanceHealthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEndPointStateInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeInstanceHealth", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeInstanceHealthCommand = serializeAws_queryDescribeInstanceHealthCommand;
async function serializeAws_queryDescribeLoadBalancerAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancerAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancerAttributes", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = serializeAws_queryDescribeLoadBalancerAttributesCommand;
async function serializeAws_queryDescribeLoadBalancerPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancerPoliciesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancerPolicies", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancerPoliciesCommand = serializeAws_queryDescribeLoadBalancerPoliciesCommand;
async function serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancerPolicyTypesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancerPolicyTypes", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = serializeAws_queryDescribeLoadBalancerPolicyTypesCommand;
async function serializeAws_queryDescribeLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccessPointsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancers", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
async function serializeAws_queryDescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTags", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
async function serializeAws_queryDetachLoadBalancerFromSubnetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachLoadBalancerFromSubnetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachLoadBalancerFromSubnets", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachLoadBalancerFromSubnetsCommand = serializeAws_queryDetachLoadBalancerFromSubnetsCommand;
async function serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveAvailabilityZonesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableAvailabilityZonesForLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand;
async function serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddAvailabilityZonesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableAvailabilityZonesForLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand;
async function serializeAws_queryModifyLoadBalancerAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyLoadBalancerAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyLoadBalancerAttributes", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyLoadBalancerAttributesCommand = serializeAws_queryModifyLoadBalancerAttributesCommand;
async function serializeAws_queryRegisterInstancesWithLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRegisterEndPointsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RegisterInstancesWithLoadBalancer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRegisterInstancesWithLoadBalancerCommand = serializeAws_queryRegisterInstancesWithLoadBalancerCommand;
async function serializeAws_queryRemoveTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveTags", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveTagsCommand = serializeAws_queryRemoveTagsCommand;
async function serializeAws_querySetLoadBalancerListenerSSLCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetLoadBalancerListenerSSLCertificateInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetLoadBalancerListenerSSLCertificate", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = serializeAws_querySetLoadBalancerListenerSSLCertificateCommand;
async function serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetLoadBalancerPoliciesForBackendServerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetLoadBalancerPoliciesForBackendServer", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand;
async function serializeAws_querySetLoadBalancerPoliciesOfListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetLoadBalancerPoliciesOfListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetLoadBalancerPoliciesOfListener", Version: "2012-06-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = serializeAws_querySetLoadBalancerPoliciesOfListenerCommand;
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
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.elb.version_2012_06_01#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.elb.version_2012_06_01#TooManyTagsException":
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
async function deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput(data.ApplySecurityGroupsToLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplySecurityGroupsToLoadBalancerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand;
async function deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityGroupException":
        case "com.amazon.elb.version_2012_06_01#InvalidSecurityGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAttachLoadBalancerToSubnetsOutput(data.AttachLoadBalancerToSubnetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachLoadBalancerToSubnetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachLoadBalancerToSubnetsCommand = deserializeAws_queryAttachLoadBalancerToSubnetsCommand;
async function deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnetException":
        case "com.amazon.elb.version_2012_06_01#InvalidSubnetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetNotFoundException":
        case "com.amazon.elb.version_2012_06_01#SubnetNotFoundException":
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
async function deserializeAws_queryConfigureHealthCheckCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryConfigureHealthCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigureHealthCheckOutput(data.ConfigureHealthCheckResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigureHealthCheckOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryConfigureHealthCheckCommand = deserializeAws_queryConfigureHealthCheckCommand;
async function deserializeAws_queryConfigureHealthCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateAppCookieStickinessPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateAppCookieStickinessPolicyOutput(data.CreateAppCookieStickinessPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAppCookieStickinessPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateAppCookieStickinessPolicyCommand = deserializeAws_queryCreateAppCookieStickinessPolicyCommand;
async function deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyNameException":
        case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyPoliciesException":
        case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateLBCookieStickinessPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLBCookieStickinessPolicyOutput(data.CreateLBCookieStickinessPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLBCookieStickinessPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLBCookieStickinessPolicyCommand = deserializeAws_queryCreateLBCookieStickinessPolicyCommand;
async function deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyNameException":
        case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyPoliciesException":
        case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryCreateAccessPointOutput(data.CreateLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAccessPointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLoadBalancerCommand = deserializeAws_queryCreateLoadBalancerCommand;
async function deserializeAws_queryCreateLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateAccessPointNameException":
        case "com.amazon.elb.version_2012_06_01#DuplicateAccessPointNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateAccessPointNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.elb.version_2012_06_01#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSchemeException":
        case "com.amazon.elb.version_2012_06_01#InvalidSchemeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityGroupException":
        case "com.amazon.elb.version_2012_06_01#InvalidSecurityGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnetException":
        case "com.amazon.elb.version_2012_06_01#InvalidSubnetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2012_06_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetNotFoundException":
        case "com.amazon.elb.version_2012_06_01#SubnetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyAccessPointsException":
        case "com.amazon.elb.version_2012_06_01#TooManyAccessPointsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyAccessPointsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.elb.version_2012_06_01#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
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
async function deserializeAws_queryCreateLoadBalancerListenersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLoadBalancerListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerListenerOutput(data.CreateLoadBalancerListenersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoadBalancerListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLoadBalancerListenersCommand = deserializeAws_queryCreateLoadBalancerListenersCommand;
async function deserializeAws_queryCreateLoadBalancerListenersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateListenerException":
        case "com.amazon.elb.version_2012_06_01#DuplicateListenerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
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
async function deserializeAws_queryCreateLoadBalancerPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLoadBalancerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerPolicyOutput(data.CreateLoadBalancerPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoadBalancerPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLoadBalancerPolicyCommand = deserializeAws_queryCreateLoadBalancerPolicyCommand;
async function deserializeAws_queryCreateLoadBalancerPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyNameException":
        case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeNotFoundException":
        case "com.amazon.elb.version_2012_06_01#PolicyTypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyPoliciesException":
        case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryDeleteAccessPointOutput(data.DeleteLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAccessPointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLoadBalancerCommand = deserializeAws_queryDeleteLoadBalancerCommand;
async function deserializeAws_queryDeleteLoadBalancerCommandError(output, context) {
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
async function deserializeAws_queryDeleteLoadBalancerListenersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLoadBalancerListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerListenerOutput(data.DeleteLoadBalancerListenersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoadBalancerListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLoadBalancerListenersCommand = deserializeAws_queryDeleteLoadBalancerListenersCommand;
async function deserializeAws_queryDeleteLoadBalancerListenersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteLoadBalancerPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLoadBalancerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerPolicyOutput(data.DeleteLoadBalancerPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoadBalancerPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLoadBalancerPolicyCommand = deserializeAws_queryDeleteLoadBalancerPolicyCommand;
async function deserializeAws_queryDeleteLoadBalancerPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterEndPointsOutput(data.DeregisterInstancesFromLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterEndPointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand;
async function deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEndPointException":
        case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeInstanceHealthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeInstanceHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEndPointStateOutput(data.DescribeInstanceHealthResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndPointStateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeInstanceHealthCommand = deserializeAws_queryDescribeInstanceHealthCommand;
async function deserializeAws_queryDescribeInstanceHealthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEndPointException":
        case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerAttributeNotFoundException":
        case "com.amazon.elb.version_2012_06_01#LoadBalancerAttributeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLoadBalancerPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerPoliciesOutput(data.DescribeLoadBalancerPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancerPoliciesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancerPoliciesCommand = deserializeAws_queryDescribeLoadBalancerPoliciesCommand;
async function deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput(data.DescribeLoadBalancerPolicyTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancerPolicyTypesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand;
async function deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PolicyTypeNotFoundException":
        case "com.amazon.elb.version_2012_06_01#PolicyTypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryDescribeAccessPointsOutput(data.DescribeLoadBalancersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccessPointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancersCommand = deserializeAws_queryDescribeLoadBalancersCommand;
async function deserializeAws_queryDescribeLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyThrottleException":
        case "com.amazon.elb.version_2012_06_01#DependencyThrottleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependencyThrottleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetachLoadBalancerFromSubnetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetachLoadBalancerFromSubnetsOutput(data.DetachLoadBalancerFromSubnetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachLoadBalancerFromSubnetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = deserializeAws_queryDetachLoadBalancerFromSubnetsCommand;
async function deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveAvailabilityZonesOutput(data.DisableAvailabilityZonesForLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveAvailabilityZonesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand;
async function deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddAvailabilityZonesOutput(data.EnableAvailabilityZonesForLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddAvailabilityZonesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand;
async function deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerAttributeNotFoundException":
        case "com.amazon.elb.version_2012_06_01#LoadBalancerAttributeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRegisterInstancesWithLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterEndPointsOutput(data.RegisterInstancesWithLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterEndPointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = deserializeAws_queryRegisterInstancesWithLoadBalancerCommand;
async function deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEndPointException":
        case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput(data.SetLoadBalancerListenerSSLCertificateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetLoadBalancerListenerSSLCertificateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand;
async function deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2012_06_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
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
async function deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput(data.SetLoadBalancerPoliciesForBackendServerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetLoadBalancerPoliciesForBackendServerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand;
async function deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput(data.SetLoadBalancerPoliciesOfListenerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetLoadBalancerPoliciesOfListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand;
async function deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2012_06_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAccessPointNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccessPointNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "AccessPointNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCertificateNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "CertificateNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDependencyThrottleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependencyThrottleException(body.Error, context);
    const contents = Object.assign({ name: "DependencyThrottleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateAccessPointNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateAccessPointNameException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateAccessPointNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateListenerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateListenerException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateListenerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicatePolicyNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicatePolicyNameException(body.Error, context);
    const contents = Object.assign({ name: "DuplicatePolicyNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
    const contents = Object.assign({ name: "InvalidConfigurationRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidEndPointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidEndPointException(body.Error, context);
    const contents = Object.assign({ name: "InvalidEndPointException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryListenerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryListenerNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ListenerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLoadBalancerAttributeNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "LoadBalancerAttributeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationNotPermittedException(body.Error, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "PolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPolicyTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyTypeNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "PolicyTypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubnetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "SubnetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyAccessPointsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyAccessPointsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyAccessPointsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyPoliciesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyPoliciesException(body.Error, context);
    const contents = Object.assign({ name: "TooManyPoliciesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
    const contents = Object.assign({ name: "UnsupportedProtocolException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAccessLog = (input, context) => {
    const entries = {};
    if (input.EmitInterval !== undefined) {
        entries["EmitInterval"] = input.EmitInterval;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.S3BucketName !== undefined) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3BucketPrefix !== undefined) {
        entries["S3BucketPrefix"] = input.S3BucketPrefix;
    }
    return entries;
};
const serializeAws_queryAddAvailabilityZonesInput = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryAddTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
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
const serializeAws_queryAdditionalAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryAdditionalAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryAdditionalAttribute(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryApplySecurityGroupsToLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
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
const serializeAws_queryAttachLoadBalancerToSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
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
const serializeAws_queryAvailabilityZones = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryConfigureHealthCheckInput = (input, context) => {
    const entries = {};
    if (input.HealthCheck !== undefined) {
        const memberEntries = serializeAws_queryHealthCheck(input.HealthCheck, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `HealthCheck.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryConnectionDraining = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Timeout !== undefined) {
        entries["Timeout"] = input.Timeout;
    }
    return entries;
};
const serializeAws_queryConnectionSettings = (input, context) => {
    const entries = {};
    if (input.IdleTimeout !== undefined) {
        entries["IdleTimeout"] = input.IdleTimeout;
    }
    return entries;
};
const serializeAws_queryCreateAccessPointInput = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Listeners !== undefined) {
        const memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Listeners.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
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
    return entries;
};
const serializeAws_queryCreateAppCookieStickinessPolicyInput = (input, context) => {
    const entries = {};
    if (input.CookieName !== undefined) {
        entries["CookieName"] = input.CookieName;
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryCreateLBCookieStickinessPolicyInput = (input, context) => {
    const entries = {};
    if (input.CookieExpirationPeriod !== undefined) {
        entries["CookieExpirationPeriod"] = input.CookieExpirationPeriod;
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryCreateLoadBalancerListenerInput = (input, context) => {
    const entries = {};
    if (input.Listeners !== undefined) {
        const memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Listeners.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryCreateLoadBalancerPolicyInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyAttributes !== undefined) {
        const memberEntries = serializeAws_queryPolicyAttributes(input.PolicyAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyAttributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyTypeName !== undefined) {
        entries["PolicyTypeName"] = input.PolicyTypeName;
    }
    return entries;
};
const serializeAws_queryCrossZoneLoadBalancing = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryDeleteAccessPointInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerListenerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPorts !== undefined) {
        const memberEntries = serializeAws_queryPorts(input.LoadBalancerPorts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerPorts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerPolicyInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeregisterEndPointsInput = (input, context) => {
    const entries = {};
    if (input.Instances !== undefined) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Instances.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDescribeAccessPointsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
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
const serializeAws_queryDescribeEndPointStateInput = (input, context) => {
    const entries = {};
    if (input.Instances !== undefined) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Instances.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerPoliciesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerPolicyTypesInput = (input, context) => {
    const entries = {};
    if (input.PolicyTypeNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyTypeNames(input.PolicyTypeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyTypeNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNamesMax20(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDetachLoadBalancerFromSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
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
const serializeAws_queryHealthCheck = (input, context) => {
    const entries = {};
    if (input.HealthyThreshold !== undefined) {
        entries["HealthyThreshold"] = input.HealthyThreshold;
    }
    if (input.Interval !== undefined) {
        entries["Interval"] = input.Interval;
    }
    if (input.Target !== undefined) {
        entries["Target"] = input.Target;
    }
    if (input.Timeout !== undefined) {
        entries["Timeout"] = input.Timeout;
    }
    if (input.UnhealthyThreshold !== undefined) {
        entries["UnhealthyThreshold"] = input.UnhealthyThreshold;
    }
    return entries;
};
const serializeAws_queryInstance = (input, context) => {
    const entries = {};
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    return entries;
};
const serializeAws_queryInstances = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryInstance(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryListener = (input, context) => {
    const entries = {};
    if (input.InstancePort !== undefined) {
        entries["InstancePort"] = input.InstancePort;
    }
    if (input.InstanceProtocol !== undefined) {
        entries["InstanceProtocol"] = input.InstanceProtocol;
    }
    if (input.LoadBalancerPort !== undefined) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.SSLCertificateId !== undefined) {
        entries["SSLCertificateId"] = input.SSLCertificateId;
    }
    return entries;
};
const serializeAws_queryListeners = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryListener(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttributes = (input, context) => {
    const entries = {};
    if (input.AccessLog !== undefined) {
        const memberEntries = serializeAws_queryAccessLog(input.AccessLog, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AccessLog.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AdditionalAttributes !== undefined) {
        const memberEntries = serializeAws_queryAdditionalAttributes(input.AdditionalAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AdditionalAttributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ConnectionDraining !== undefined) {
        const memberEntries = serializeAws_queryConnectionDraining(input.ConnectionDraining, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ConnectionDraining.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ConnectionSettings !== undefined) {
        const memberEntries = serializeAws_queryConnectionSettings(input.ConnectionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ConnectionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CrossZoneLoadBalancing !== undefined) {
        const memberEntries = serializeAws_queryCrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CrossZoneLoadBalancing.${key}`;
            entries[loc] = memberEntries[key];
        });
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
const serializeAws_queryLoadBalancerNamesMax20 = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryModifyLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerAttributes !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerAttributes(input.LoadBalancerAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerAttributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryPolicyAttribute = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const serializeAws_queryPolicyAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryPolicyAttribute(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyTypeNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPorts = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRegisterEndPointsInput = (input, context) => {
    const entries = {};
    if (input.Instances !== undefined) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Instances.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryRemoveAvailabilityZonesInput = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryRemoveTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
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
const serializeAws_querySetLoadBalancerListenerSSLCertificateInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPort !== undefined) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.SSLCertificateId !== undefined) {
        entries["SSLCertificateId"] = input.SSLCertificateId;
    }
    return entries;
};
const serializeAws_querySetLoadBalancerPoliciesForBackendServerInput = (input, context) => {
    const entries = {};
    if (input.InstancePort !== undefined) {
        entries["InstancePort"] = input.InstancePort;
    }
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySetLoadBalancerPoliciesOfListenerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPort !== undefined) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.PolicyNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = memberEntries[key];
        });
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
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTagKeyOnly(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagKeyOnly = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
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
const deserializeAws_queryAccessLog = (output, context) => {
    let contents = {
        __type: "AccessLog",
        EmitInterval: undefined,
        Enabled: undefined,
        S3BucketName: undefined,
        S3BucketPrefix: undefined
    };
    if (output["EmitInterval"] !== undefined) {
        contents.EmitInterval = parseInt(output["EmitInterval"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["S3BucketName"] !== undefined) {
        contents.S3BucketName = output["S3BucketName"];
    }
    if (output["S3BucketPrefix"] !== undefined) {
        contents.S3BucketPrefix = output["S3BucketPrefix"];
    }
    return contents;
};
const deserializeAws_queryAccessPointNotFoundException = (output, context) => {
    let contents = {
        __type: "AccessPointNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAddAvailabilityZonesOutput = (output, context) => {
    let contents = {
        __type: "AddAvailabilityZonesOutput",
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
const deserializeAws_queryAddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput"
    };
    return contents;
};
const deserializeAws_queryAdditionalAttribute = (output, context) => {
    let contents = {
        __type: "AdditionalAttribute",
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
const deserializeAws_queryAdditionalAttributes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAdditionalAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryAppCookieStickinessPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAppCookieStickinessPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_queryAppCookieStickinessPolicy = (output, context) => {
    let contents = {
        __type: "AppCookieStickinessPolicy",
        CookieName: undefined,
        PolicyName: undefined
    };
    if (output["CookieName"] !== undefined) {
        contents.CookieName = output["CookieName"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    return contents;
};
const deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput = (output, context) => {
    let contents = {
        __type: "ApplySecurityGroupsToLoadBalancerOutput",
        SecurityGroups: undefined
    };
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
    return contents;
};
const deserializeAws_queryAttachLoadBalancerToSubnetsOutput = (output, context) => {
    let contents = {
        __type: "AttachLoadBalancerToSubnetsOutput",
        Subnets: undefined
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined &&
        output["Subnets"]["member"] !== undefined) {
        const wrappedItem = output["Subnets"]["member"] instanceof Array
            ? output["Subnets"]["member"]
            : [output["Subnets"]["member"]];
        contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryBackendServerDescription = (output, context) => {
    let contents = {
        __type: "BackendServerDescription",
        InstancePort: undefined,
        PolicyNames: undefined
    };
    if (output["InstancePort"] !== undefined) {
        contents.InstancePort = parseInt(output["InstancePort"]);
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_queryPolicyNames(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryBackendServerDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryBackendServerDescription(entry, context));
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
const deserializeAws_queryConfigureHealthCheckOutput = (output, context) => {
    let contents = {
        __type: "ConfigureHealthCheckOutput",
        HealthCheck: undefined
    };
    if (output["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
    }
    return contents;
};
const deserializeAws_queryConnectionDraining = (output, context) => {
    let contents = {
        __type: "ConnectionDraining",
        Enabled: undefined,
        Timeout: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Timeout"] !== undefined) {
        contents.Timeout = parseInt(output["Timeout"]);
    }
    return contents;
};
const deserializeAws_queryConnectionSettings = (output, context) => {
    let contents = {
        __type: "ConnectionSettings",
        IdleTimeout: undefined
    };
    if (output["IdleTimeout"] !== undefined) {
        contents.IdleTimeout = parseInt(output["IdleTimeout"]);
    }
    return contents;
};
const deserializeAws_queryCreateAccessPointOutput = (output, context) => {
    let contents = {
        __type: "CreateAccessPointOutput",
        DNSName: undefined
    };
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    return contents;
};
const deserializeAws_queryCreateAppCookieStickinessPolicyOutput = (output, context) => {
    let contents = {
        __type: "CreateAppCookieStickinessPolicyOutput"
    };
    return contents;
};
const deserializeAws_queryCreateLBCookieStickinessPolicyOutput = (output, context) => {
    let contents = {
        __type: "CreateLBCookieStickinessPolicyOutput"
    };
    return contents;
};
const deserializeAws_queryCreateLoadBalancerListenerOutput = (output, context) => {
    let contents = {
        __type: "CreateLoadBalancerListenerOutput"
    };
    return contents;
};
const deserializeAws_queryCreateLoadBalancerPolicyOutput = (output, context) => {
    let contents = {
        __type: "CreateLoadBalancerPolicyOutput"
    };
    return contents;
};
const deserializeAws_queryCrossZoneLoadBalancing = (output, context) => {
    let contents = {
        __type: "CrossZoneLoadBalancing",
        Enabled: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryDeleteAccessPointOutput = (output, context) => {
    let contents = {
        __type: "DeleteAccessPointOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerListenerOutput = (output, context) => {
    let contents = {
        __type: "DeleteLoadBalancerListenerOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerPolicyOutput = (output, context) => {
    let contents = {
        __type: "DeleteLoadBalancerPolicyOutput"
    };
    return contents;
};
const deserializeAws_queryDependencyThrottleException = (output, context) => {
    let contents = {
        __type: "DependencyThrottleException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDeregisterEndPointsOutput = (output, context) => {
    let contents = {
        __type: "DeregisterEndPointsOutput",
        Instances: undefined
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined &&
        output["Instances"]["member"] !== undefined) {
        const wrappedItem = output["Instances"]["member"] instanceof Array
            ? output["Instances"]["member"]
            : [output["Instances"]["member"]];
        contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeAccessPointsOutput = (output, context) => {
    let contents = {
        __type: "DescribeAccessPointsOutput",
        LoadBalancerDescriptions: undefined,
        NextMarker: undefined
    };
    if (output.LoadBalancerDescriptions === "") {
        contents.LoadBalancerDescriptions = [];
    }
    if (output["LoadBalancerDescriptions"] !== undefined &&
        output["LoadBalancerDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancerDescriptions"]["member"] instanceof Array
            ? output["LoadBalancerDescriptions"]["member"]
            : [output["LoadBalancerDescriptions"]["member"]];
        contents.LoadBalancerDescriptions = deserializeAws_queryLoadBalancerDescriptions(wrappedItem, context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
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
const deserializeAws_queryDescribeEndPointStateOutput = (output, context) => {
    let contents = {
        __type: "DescribeEndPointStateOutput",
        InstanceStates: undefined
    };
    if (output.InstanceStates === "") {
        contents.InstanceStates = [];
    }
    if (output["InstanceStates"] !== undefined &&
        output["InstanceStates"]["member"] !== undefined) {
        const wrappedItem = output["InstanceStates"]["member"] instanceof Array
            ? output["InstanceStates"]["member"]
            : [output["InstanceStates"]["member"]];
        contents.InstanceStates = deserializeAws_queryInstanceStates(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancerAttributesOutput",
        LoadBalancerAttributes: undefined
    };
    if (output["LoadBalancerAttributes"] !== undefined) {
        contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(output["LoadBalancerAttributes"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerPoliciesOutput = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancerPoliciesOutput",
        PolicyDescriptions: undefined
    };
    if (output.PolicyDescriptions === "") {
        contents.PolicyDescriptions = [];
    }
    if (output["PolicyDescriptions"] !== undefined &&
        output["PolicyDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["PolicyDescriptions"]["member"] instanceof Array
            ? output["PolicyDescriptions"]["member"]
            : [output["PolicyDescriptions"]["member"]];
        contents.PolicyDescriptions = deserializeAws_queryPolicyDescriptions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancerPolicyTypesOutput",
        PolicyTypeDescriptions: undefined
    };
    if (output.PolicyTypeDescriptions === "") {
        contents.PolicyTypeDescriptions = [];
    }
    if (output["PolicyTypeDescriptions"] !== undefined &&
        output["PolicyTypeDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["PolicyTypeDescriptions"]["member"] instanceof Array
            ? output["PolicyTypeDescriptions"]["member"]
            : [output["PolicyTypeDescriptions"]["member"]];
        contents.PolicyTypeDescriptions = deserializeAws_queryPolicyTypeDescriptions(wrappedItem, context);
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
const deserializeAws_queryDetachLoadBalancerFromSubnetsOutput = (output, context) => {
    let contents = {
        __type: "DetachLoadBalancerFromSubnetsOutput",
        Subnets: undefined
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined &&
        output["Subnets"]["member"] !== undefined) {
        const wrappedItem = output["Subnets"]["member"] instanceof Array
            ? output["Subnets"]["member"]
            : [output["Subnets"]["member"]];
        contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDuplicateAccessPointNameException = (output, context) => {
    let contents = {
        __type: "DuplicateAccessPointNameException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
const deserializeAws_queryDuplicatePolicyNameException = (output, context) => {
    let contents = {
        __type: "DuplicatePolicyNameException",
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
const deserializeAws_queryHealthCheck = (output, context) => {
    let contents = {
        __type: "HealthCheck",
        HealthyThreshold: undefined,
        Interval: undefined,
        Target: undefined,
        Timeout: undefined,
        UnhealthyThreshold: undefined
    };
    if (output["HealthyThreshold"] !== undefined) {
        contents.HealthyThreshold = parseInt(output["HealthyThreshold"]);
    }
    if (output["Interval"] !== undefined) {
        contents.Interval = parseInt(output["Interval"]);
    }
    if (output["Target"] !== undefined) {
        contents.Target = output["Target"];
    }
    if (output["Timeout"] !== undefined) {
        contents.Timeout = parseInt(output["Timeout"]);
    }
    if (output["UnhealthyThreshold"] !== undefined) {
        contents.UnhealthyThreshold = parseInt(output["UnhealthyThreshold"]);
    }
    return contents;
};
const deserializeAws_queryInstance = (output, context) => {
    let contents = {
        __type: "Instance",
        InstanceId: undefined
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    return contents;
};
const deserializeAws_queryInstanceState = (output, context) => {
    let contents = {
        __type: "InstanceState",
        Description: undefined,
        InstanceId: undefined,
        ReasonCode: undefined,
        State: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["ReasonCode"] !== undefined) {
        contents.ReasonCode = output["ReasonCode"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryInstanceStates = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstanceState(entry, context));
    });
    return contents;
};
const deserializeAws_queryInstances = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstance(entry, context));
    });
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
const deserializeAws_queryInvalidEndPointException = (output, context) => {
    let contents = {
        __type: "InvalidEndPointException",
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
const deserializeAws_queryLBCookieStickinessPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLBCookieStickinessPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_queryLBCookieStickinessPolicy = (output, context) => {
    let contents = {
        __type: "LBCookieStickinessPolicy",
        CookieExpirationPeriod: undefined,
        PolicyName: undefined
    };
    if (output["CookieExpirationPeriod"] !== undefined) {
        contents.CookieExpirationPeriod = parseInt(output["CookieExpirationPeriod"]);
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
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
const deserializeAws_queryListener = (output, context) => {
    let contents = {
        __type: "Listener",
        InstancePort: undefined,
        InstanceProtocol: undefined,
        LoadBalancerPort: undefined,
        Protocol: undefined,
        SSLCertificateId: undefined
    };
    if (output["InstancePort"] !== undefined) {
        contents.InstancePort = parseInt(output["InstancePort"]);
    }
    if (output["InstanceProtocol"] !== undefined) {
        contents.InstanceProtocol = output["InstanceProtocol"];
    }
    if (output["LoadBalancerPort"] !== undefined) {
        contents.LoadBalancerPort = parseInt(output["LoadBalancerPort"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["SSLCertificateId"] !== undefined) {
        contents.SSLCertificateId = output["SSLCertificateId"];
    }
    return contents;
};
const deserializeAws_queryListenerDescription = (output, context) => {
    let contents = {
        __type: "ListenerDescription",
        Listener: undefined,
        PolicyNames: undefined
    };
    if (output["Listener"] !== undefined) {
        contents.Listener = deserializeAws_queryListener(output["Listener"], context);
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_queryPolicyNames(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListenerDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryListenerDescription(entry, context));
    });
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
const deserializeAws_queryLoadBalancerAttributeNotFoundException = (output, context) => {
    let contents = {
        __type: "LoadBalancerAttributeNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAttributes = (output, context) => {
    let contents = {
        __type: "LoadBalancerAttributes",
        AccessLog: undefined,
        AdditionalAttributes: undefined,
        ConnectionDraining: undefined,
        ConnectionSettings: undefined,
        CrossZoneLoadBalancing: undefined
    };
    if (output["AccessLog"] !== undefined) {
        contents.AccessLog = deserializeAws_queryAccessLog(output["AccessLog"], context);
    }
    if (output.AdditionalAttributes === "") {
        contents.AdditionalAttributes = [];
    }
    if (output["AdditionalAttributes"] !== undefined &&
        output["AdditionalAttributes"]["member"] !== undefined) {
        const wrappedItem = output["AdditionalAttributes"]["member"] instanceof Array
            ? output["AdditionalAttributes"]["member"]
            : [output["AdditionalAttributes"]["member"]];
        contents.AdditionalAttributes = deserializeAws_queryAdditionalAttributes(wrappedItem, context);
    }
    if (output["ConnectionDraining"] !== undefined) {
        contents.ConnectionDraining = deserializeAws_queryConnectionDraining(output["ConnectionDraining"], context);
    }
    if (output["ConnectionSettings"] !== undefined) {
        contents.ConnectionSettings = deserializeAws_queryConnectionSettings(output["ConnectionSettings"], context);
    }
    if (output["CrossZoneLoadBalancing"] !== undefined) {
        contents.CrossZoneLoadBalancing = deserializeAws_queryCrossZoneLoadBalancing(output["CrossZoneLoadBalancing"], context);
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescription = (output, context) => {
    let contents = {
        __type: "LoadBalancerDescription",
        AvailabilityZones: undefined,
        BackendServerDescriptions: undefined,
        CanonicalHostedZoneName: undefined,
        CanonicalHostedZoneNameID: undefined,
        CreatedTime: undefined,
        DNSName: undefined,
        HealthCheck: undefined,
        Instances: undefined,
        ListenerDescriptions: undefined,
        LoadBalancerName: undefined,
        Policies: undefined,
        Scheme: undefined,
        SecurityGroups: undefined,
        SourceSecurityGroup: undefined,
        Subnets: undefined,
        VPCId: undefined
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
    if (output.BackendServerDescriptions === "") {
        contents.BackendServerDescriptions = [];
    }
    if (output["BackendServerDescriptions"] !== undefined &&
        output["BackendServerDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["BackendServerDescriptions"]["member"] instanceof Array
            ? output["BackendServerDescriptions"]["member"]
            : [output["BackendServerDescriptions"]["member"]];
        contents.BackendServerDescriptions = deserializeAws_queryBackendServerDescriptions(wrappedItem, context);
    }
    if (output["CanonicalHostedZoneName"] !== undefined) {
        contents.CanonicalHostedZoneName = output["CanonicalHostedZoneName"];
    }
    if (output["CanonicalHostedZoneNameID"] !== undefined) {
        contents.CanonicalHostedZoneNameID = output["CanonicalHostedZoneNameID"];
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined &&
        output["Instances"]["member"] !== undefined) {
        const wrappedItem = output["Instances"]["member"] instanceof Array
            ? output["Instances"]["member"]
            : [output["Instances"]["member"]];
        contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
    }
    if (output.ListenerDescriptions === "") {
        contents.ListenerDescriptions = [];
    }
    if (output["ListenerDescriptions"] !== undefined &&
        output["ListenerDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["ListenerDescriptions"]["member"] instanceof Array
            ? output["ListenerDescriptions"]["member"]
            : [output["ListenerDescriptions"]["member"]];
        contents.ListenerDescriptions = deserializeAws_queryListenerDescriptions(wrappedItem, context);
    }
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["Policies"] !== undefined) {
        contents.Policies = deserializeAws_queryPolicies(output["Policies"], context);
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
    if (output["SourceSecurityGroup"] !== undefined) {
        contents.SourceSecurityGroup = deserializeAws_querySourceSecurityGroup(output["SourceSecurityGroup"], context);
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined &&
        output["Subnets"]["member"] !== undefined) {
        const wrappedItem = output["Subnets"]["member"] instanceof Array
            ? output["Subnets"]["member"]
            : [output["Subnets"]["member"]];
        contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
    }
    if (output["VPCId"] !== undefined) {
        contents.VPCId = output["VPCId"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancerDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryModifyLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        __type: "ModifyLoadBalancerAttributesOutput",
        LoadBalancerAttributes: undefined,
        LoadBalancerName: undefined
    };
    if (output["LoadBalancerAttributes"] !== undefined) {
        contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(output["LoadBalancerAttributes"], context);
    }
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
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
const deserializeAws_queryPolicies = (output, context) => {
    let contents = {
        __type: "Policies",
        AppCookieStickinessPolicies: undefined,
        LBCookieStickinessPolicies: undefined,
        OtherPolicies: undefined
    };
    if (output.AppCookieStickinessPolicies === "") {
        contents.AppCookieStickinessPolicies = [];
    }
    if (output["AppCookieStickinessPolicies"] !== undefined &&
        output["AppCookieStickinessPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AppCookieStickinessPolicies"]["member"] instanceof Array
            ? output["AppCookieStickinessPolicies"]["member"]
            : [output["AppCookieStickinessPolicies"]["member"]];
        contents.AppCookieStickinessPolicies = deserializeAws_queryAppCookieStickinessPolicies(wrappedItem, context);
    }
    if (output.LBCookieStickinessPolicies === "") {
        contents.LBCookieStickinessPolicies = [];
    }
    if (output["LBCookieStickinessPolicies"] !== undefined &&
        output["LBCookieStickinessPolicies"]["member"] !== undefined) {
        const wrappedItem = output["LBCookieStickinessPolicies"]["member"] instanceof Array
            ? output["LBCookieStickinessPolicies"]["member"]
            : [output["LBCookieStickinessPolicies"]["member"]];
        contents.LBCookieStickinessPolicies = deserializeAws_queryLBCookieStickinessPolicies(wrappedItem, context);
    }
    if (output.OtherPolicies === "") {
        contents.OtherPolicies = [];
    }
    if (output["OtherPolicies"] !== undefined &&
        output["OtherPolicies"]["member"] !== undefined) {
        const wrappedItem = output["OtherPolicies"]["member"] instanceof Array
            ? output["OtherPolicies"]["member"]
            : [output["OtherPolicies"]["member"]];
        contents.OtherPolicies = deserializeAws_queryPolicyNames(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPolicyAttributeDescription = (output, context) => {
    let contents = {
        __type: "PolicyAttributeDescription",
        AttributeName: undefined,
        AttributeValue: undefined
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output["AttributeValue"] !== undefined) {
        contents.AttributeValue = output["AttributeValue"];
    }
    return contents;
};
const deserializeAws_queryPolicyAttributeDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyAttributeDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyAttributeTypeDescription = (output, context) => {
    let contents = {
        __type: "PolicyAttributeTypeDescription",
        AttributeName: undefined,
        AttributeType: undefined,
        Cardinality: undefined,
        DefaultValue: undefined,
        Description: undefined
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output["AttributeType"] !== undefined) {
        contents.AttributeType = output["AttributeType"];
    }
    if (output["Cardinality"] !== undefined) {
        contents.Cardinality = output["Cardinality"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryPolicyAttributeTypeDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyAttributeTypeDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyDescription = (output, context) => {
    let contents = {
        __type: "PolicyDescription",
        PolicyAttributeDescriptions: undefined,
        PolicyName: undefined,
        PolicyTypeName: undefined
    };
    if (output.PolicyAttributeDescriptions === "") {
        contents.PolicyAttributeDescriptions = [];
    }
    if (output["PolicyAttributeDescriptions"] !== undefined &&
        output["PolicyAttributeDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["PolicyAttributeDescriptions"]["member"] instanceof Array
            ? output["PolicyAttributeDescriptions"]["member"]
            : [output["PolicyAttributeDescriptions"]["member"]];
        contents.PolicyAttributeDescriptions = deserializeAws_queryPolicyAttributeDescriptions(wrappedItem, context);
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyTypeName"] !== undefined) {
        contents.PolicyTypeName = output["PolicyTypeName"];
    }
    return contents;
};
const deserializeAws_queryPolicyDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyNames = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryPolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "PolicyNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryPolicyTypeDescription = (output, context) => {
    let contents = {
        __type: "PolicyTypeDescription",
        Description: undefined,
        PolicyAttributeTypeDescriptions: undefined,
        PolicyTypeName: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.PolicyAttributeTypeDescriptions === "") {
        contents.PolicyAttributeTypeDescriptions = [];
    }
    if (output["PolicyAttributeTypeDescriptions"] !== undefined &&
        output["PolicyAttributeTypeDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["PolicyAttributeTypeDescriptions"]["member"] instanceof Array
            ? output["PolicyAttributeTypeDescriptions"]["member"]
            : [output["PolicyAttributeTypeDescriptions"]["member"]];
        contents.PolicyAttributeTypeDescriptions = deserializeAws_queryPolicyAttributeTypeDescriptions(wrappedItem, context);
    }
    if (output["PolicyTypeName"] !== undefined) {
        contents.PolicyTypeName = output["PolicyTypeName"];
    }
    return contents;
};
const deserializeAws_queryPolicyTypeDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyTypeDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyTypeNotFoundException = (output, context) => {
    let contents = {
        __type: "PolicyTypeNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRegisterEndPointsOutput = (output, context) => {
    let contents = {
        __type: "RegisterEndPointsOutput",
        Instances: undefined
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined &&
        output["Instances"]["member"] !== undefined) {
        const wrappedItem = output["Instances"]["member"] instanceof Array
            ? output["Instances"]["member"]
            : [output["Instances"]["member"]];
        contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRemoveAvailabilityZonesOutput = (output, context) => {
    let contents = {
        __type: "RemoveAvailabilityZonesOutput",
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
const deserializeAws_queryRemoveTagsOutput = (output, context) => {
    let contents = {
        __type: "RemoveTagsOutput"
    };
    return contents;
};
const deserializeAws_querySecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput = (output, context) => {
    let contents = {
        __type: "SetLoadBalancerListenerSSLCertificateOutput"
    };
    return contents;
};
const deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput = (output, context) => {
    let contents = {
        __type: "SetLoadBalancerPoliciesForBackendServerOutput"
    };
    return contents;
};
const deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput = (output, context) => {
    let contents = {
        __type: "SetLoadBalancerPoliciesOfListenerOutput"
    };
    return contents;
};
const deserializeAws_querySourceSecurityGroup = (output, context) => {
    let contents = {
        __type: "SourceSecurityGroup",
        GroupName: undefined,
        OwnerAlias: undefined
    };
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["OwnerAlias"] !== undefined) {
        contents.OwnerAlias = output["OwnerAlias"];
    }
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
const deserializeAws_querySubnets = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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
        LoadBalancerName: undefined,
        Tags: undefined
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
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
const deserializeAws_queryTooManyAccessPointsException = (output, context) => {
    let contents = {
        __type: "TooManyAccessPointsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyPoliciesException = (output, context) => {
    let contents = {
        __type: "TooManyPoliciesException",
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