"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAbortEnvironmentUpdateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAbortEnvironmentUpdateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AbortEnvironmentUpdate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAbortEnvironmentUpdateCommand = serializeAws_queryAbortEnvironmentUpdateCommand;
async function serializeAws_queryApplyEnvironmentManagedActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryApplyEnvironmentManagedActionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ApplyEnvironmentManagedAction", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryApplyEnvironmentManagedActionCommand = serializeAws_queryApplyEnvironmentManagedActionCommand;
async function serializeAws_queryCheckDNSAvailabilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCheckDNSAvailabilityMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CheckDNSAvailability", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCheckDNSAvailabilityCommand = serializeAws_queryCheckDNSAvailabilityCommand;
async function serializeAws_queryComposeEnvironmentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryComposeEnvironmentsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ComposeEnvironments", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryComposeEnvironmentsCommand = serializeAws_queryComposeEnvironmentsCommand;
async function serializeAws_queryCreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateApplicationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateApplication", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateApplicationCommand = serializeAws_queryCreateApplicationCommand;
async function serializeAws_queryCreateApplicationVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateApplicationVersionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateApplicationVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateApplicationVersionCommand = serializeAws_queryCreateApplicationVersionCommand;
async function serializeAws_queryCreateConfigurationTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateConfigurationTemplateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateConfigurationTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateConfigurationTemplateCommand = serializeAws_queryCreateConfigurationTemplateCommand;
async function serializeAws_queryCreateEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateEnvironmentMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateEnvironment", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateEnvironmentCommand = serializeAws_queryCreateEnvironmentCommand;
async function serializeAws_queryCreatePlatformVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreatePlatformVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreatePlatformVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreatePlatformVersionCommand = serializeAws_queryCreatePlatformVersionCommand;
async function serializeAws_queryCreateStorageLocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "CreateStorageLocation",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateStorageLocationCommand = serializeAws_queryCreateStorageLocationCommand;
async function serializeAws_queryDeleteApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteApplicationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteApplication", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteApplicationCommand = serializeAws_queryDeleteApplicationCommand;
async function serializeAws_queryDeleteApplicationVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteApplicationVersionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteApplicationVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteApplicationVersionCommand = serializeAws_queryDeleteApplicationVersionCommand;
async function serializeAws_queryDeleteConfigurationTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteConfigurationTemplateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteConfigurationTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteConfigurationTemplateCommand = serializeAws_queryDeleteConfigurationTemplateCommand;
async function serializeAws_queryDeleteEnvironmentConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteEnvironmentConfigurationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteEnvironmentConfiguration", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteEnvironmentConfigurationCommand = serializeAws_queryDeleteEnvironmentConfigurationCommand;
async function serializeAws_queryDeletePlatformVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeletePlatformVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeletePlatformVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeletePlatformVersionCommand = serializeAws_queryDeletePlatformVersionCommand;
async function serializeAws_queryDescribeAccountAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeAccountAttributes",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
async function serializeAws_queryDescribeApplicationVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeApplicationVersionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeApplicationVersions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeApplicationVersionsCommand = serializeAws_queryDescribeApplicationVersionsCommand;
async function serializeAws_queryDescribeApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeApplicationsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeApplications", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeApplicationsCommand = serializeAws_queryDescribeApplicationsCommand;
async function serializeAws_queryDescribeConfigurationOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeConfigurationOptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeConfigurationOptions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeConfigurationOptionsCommand = serializeAws_queryDescribeConfigurationOptionsCommand;
async function serializeAws_queryDescribeConfigurationSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeConfigurationSettingsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeConfigurationSettings", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeConfigurationSettingsCommand = serializeAws_queryDescribeConfigurationSettingsCommand;
async function serializeAws_queryDescribeEnvironmentHealthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEnvironmentHealthRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEnvironmentHealth", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEnvironmentHealthCommand = serializeAws_queryDescribeEnvironmentHealthCommand;
async function serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEnvironmentManagedActionHistory", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand;
async function serializeAws_queryDescribeEnvironmentManagedActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEnvironmentManagedActionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEnvironmentManagedActions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEnvironmentManagedActionsCommand = serializeAws_queryDescribeEnvironmentManagedActionsCommand;
async function serializeAws_queryDescribeEnvironmentResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEnvironmentResourcesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEnvironmentResources", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEnvironmentResourcesCommand = serializeAws_queryDescribeEnvironmentResourcesCommand;
async function serializeAws_queryDescribeEnvironmentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEnvironmentsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEnvironments", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEnvironmentsCommand = serializeAws_queryDescribeEnvironmentsCommand;
async function serializeAws_queryDescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEvents", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
async function serializeAws_queryDescribeInstancesHealthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeInstancesHealthRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeInstancesHealth", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeInstancesHealthCommand = serializeAws_queryDescribeInstancesHealthCommand;
async function serializeAws_queryDescribePlatformVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribePlatformVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribePlatformVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribePlatformVersionCommand = serializeAws_queryDescribePlatformVersionCommand;
async function serializeAws_queryListAvailableSolutionStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "ListAvailableSolutionStacks",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAvailableSolutionStacksCommand = serializeAws_queryListAvailableSolutionStacksCommand;
async function serializeAws_queryListPlatformVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPlatformVersionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPlatformVersions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPlatformVersionsCommand = serializeAws_queryListPlatformVersionsCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryRebuildEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRebuildEnvironmentMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RebuildEnvironment", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRebuildEnvironmentCommand = serializeAws_queryRebuildEnvironmentCommand;
async function serializeAws_queryRequestEnvironmentInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRequestEnvironmentInfoMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RequestEnvironmentInfo", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRequestEnvironmentInfoCommand = serializeAws_queryRequestEnvironmentInfoCommand;
async function serializeAws_queryRestartAppServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestartAppServerMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestartAppServer", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestartAppServerCommand = serializeAws_queryRestartAppServerCommand;
async function serializeAws_queryRetrieveEnvironmentInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRetrieveEnvironmentInfoMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RetrieveEnvironmentInfo", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRetrieveEnvironmentInfoCommand = serializeAws_queryRetrieveEnvironmentInfoCommand;
async function serializeAws_querySwapEnvironmentCNAMEsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySwapEnvironmentCNAMEsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SwapEnvironmentCNAMEs", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySwapEnvironmentCNAMEsCommand = serializeAws_querySwapEnvironmentCNAMEsCommand;
async function serializeAws_queryTerminateEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTerminateEnvironmentMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TerminateEnvironment", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTerminateEnvironmentCommand = serializeAws_queryTerminateEnvironmentCommand;
async function serializeAws_queryUpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateApplicationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateApplication", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateApplicationCommand = serializeAws_queryUpdateApplicationCommand;
async function serializeAws_queryUpdateApplicationResourceLifecycleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateApplicationResourceLifecycleMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateApplicationResourceLifecycle", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateApplicationResourceLifecycleCommand = serializeAws_queryUpdateApplicationResourceLifecycleCommand;
async function serializeAws_queryUpdateApplicationVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateApplicationVersionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateApplicationVersion", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateApplicationVersionCommand = serializeAws_queryUpdateApplicationVersionCommand;
async function serializeAws_queryUpdateConfigurationTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateConfigurationTemplateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateConfigurationTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateConfigurationTemplateCommand = serializeAws_queryUpdateConfigurationTemplateCommand;
async function serializeAws_queryUpdateEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateEnvironmentMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateEnvironment", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateEnvironmentCommand = serializeAws_queryUpdateEnvironmentCommand;
async function serializeAws_queryUpdateTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateTagsForResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateTagsForResource", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateTagsForResourceCommand = serializeAws_queryUpdateTagsForResourceCommand;
async function serializeAws_queryValidateConfigurationSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryValidateConfigurationSettingsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ValidateConfigurationSettings", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryValidateConfigurationSettingsCommand = serializeAws_queryValidateConfigurationSettingsCommand;
async function deserializeAws_queryAbortEnvironmentUpdateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAbortEnvironmentUpdateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAbortEnvironmentUpdateCommand = deserializeAws_queryAbortEnvironmentUpdateCommand;
async function deserializeAws_queryAbortEnvironmentUpdateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryApplyEnvironmentManagedActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryApplyEnvironmentManagedActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplyEnvironmentManagedActionResult(data.ApplyEnvironmentManagedActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplyEnvironmentManagedActionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryApplyEnvironmentManagedActionCommand = deserializeAws_queryApplyEnvironmentManagedActionCommand;
async function deserializeAws_queryApplyEnvironmentManagedActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedActionInvalidStateException":
        case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryManagedActionInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCheckDNSAvailabilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCheckDNSAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCheckDNSAvailabilityResultMessage(data.CheckDNSAvailabilityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CheckDNSAvailabilityResultMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCheckDNSAvailabilityCommand = deserializeAws_queryCheckDNSAvailabilityCommand;
async function deserializeAws_queryCheckDNSAvailabilityCommandError(output, context) {
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
async function deserializeAws_queryComposeEnvironmentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryComposeEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.ComposeEnvironmentsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryComposeEnvironmentsCommand = deserializeAws_queryComposeEnvironmentsCommand;
async function deserializeAws_queryComposeEnvironmentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyEnvironmentsException":
        case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionMessage(data.CreateApplicationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateApplicationCommand = deserializeAws_queryCreateApplicationCommand;
async function deserializeAws_queryCreateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyApplicationsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateApplicationVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateApplicationVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.CreateApplicationVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationVersionDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateApplicationVersionCommand = deserializeAws_queryCreateApplicationVersionCommand;
async function deserializeAws_queryCreateApplicationVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeBuildNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "S3LocationNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyApplicationVersionsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyApplicationVersionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyApplicationsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateConfigurationTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateConfigurationTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescription(data.CreateConfigurationTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigurationSettingsDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateConfigurationTemplateCommand = deserializeAws_queryCreateConfigurationTemplateCommand;
async function deserializeAws_queryCreateConfigurationTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyConfigurationTemplatesException":
        case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.CreateEnvironmentResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateEnvironmentCommand = deserializeAws_queryCreateEnvironmentCommand;
async function deserializeAws_queryCreateEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyEnvironmentsException":
        case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreatePlatformVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreatePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePlatformVersionResult(data.CreatePlatformVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePlatformVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreatePlatformVersionCommand = deserializeAws_queryCreatePlatformVersionCommand;
async function deserializeAws_queryCreatePlatformVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyPlatformsException":
        case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyPlatformsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateStorageLocationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateStorageLocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateStorageLocationResultMessage(data.CreateStorageLocationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStorageLocationResultMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateStorageLocationCommand = deserializeAws_queryCreateStorageLocationCommand;
async function deserializeAws_queryCreateStorageLocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "S3SubscriptionRequiredException":
        case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryS3SubscriptionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteApplicationCommand = deserializeAws_queryDeleteApplicationCommand;
async function deserializeAws_queryDeleteApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteApplicationVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteApplicationVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteApplicationVersionCommand = deserializeAws_queryDeleteApplicationVersionCommand;
async function deserializeAws_queryDeleteApplicationVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "S3LocationNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceBundleDeletionException":
        case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceBundleDeletionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteConfigurationTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteConfigurationTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteConfigurationTemplateCommand = deserializeAws_queryDeleteConfigurationTemplateCommand;
async function deserializeAws_queryDeleteConfigurationTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteEnvironmentConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteEnvironmentConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteEnvironmentConfigurationCommand = deserializeAws_queryDeleteEnvironmentConfigurationCommand;
async function deserializeAws_queryDeleteEnvironmentConfigurationCommandError(output, context) {
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
async function deserializeAws_queryDeletePlatformVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeletePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeletePlatformVersionResult(data.DeletePlatformVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePlatformVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeletePlatformVersionCommand = deserializeAws_queryDeletePlatformVersionCommand;
async function deserializeAws_queryDeletePlatformVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformVersionStillReferencedException":
        case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPlatformVersionStillReferencedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAccountAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAccountAttributesResult(data.DescribeAccountAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountAttributesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAccountAttributesCommand = deserializeAws_queryDescribeAccountAttributesCommand;
async function deserializeAws_queryDescribeAccountAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeApplicationVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeApplicationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionsMessage(data.DescribeApplicationVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationVersionDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeApplicationVersionsCommand = deserializeAws_queryDescribeApplicationVersionsCommand;
async function deserializeAws_queryDescribeApplicationVersionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionsMessage(data.DescribeApplicationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeApplicationsCommand = deserializeAws_queryDescribeApplicationsCommand;
async function deserializeAws_queryDescribeApplicationsCommandError(output, context) {
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
async function deserializeAws_queryDescribeConfigurationOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeConfigurationOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationOptionsDescription(data.DescribeConfigurationOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigurationOptionsDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeConfigurationOptionsCommand = deserializeAws_queryDescribeConfigurationOptionsCommand;
async function deserializeAws_queryDescribeConfigurationOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeConfigurationSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeConfigurationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescriptions(data.DescribeConfigurationSettingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigurationSettingsDescriptions" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeConfigurationSettingsCommand = deserializeAws_queryDescribeConfigurationSettingsCommand;
async function deserializeAws_queryDescribeConfigurationSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEnvironmentHealthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEnvironmentHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentHealthResult(data.DescribeEnvironmentHealthResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentHealthResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEnvironmentHealthCommand = deserializeAws_queryDescribeEnvironmentHealthCommand;
async function deserializeAws_queryDescribeEnvironmentHealthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult(data.DescribeEnvironmentManagedActionHistoryResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentManagedActionHistoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand;
async function deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEnvironmentManagedActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentManagedActionsResult(data.DescribeEnvironmentManagedActionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentManagedActionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEnvironmentManagedActionsCommand = deserializeAws_queryDescribeEnvironmentManagedActionsCommand;
async function deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEnvironmentResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEnvironmentResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentResourceDescriptionsMessage(data.DescribeEnvironmentResourcesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentResourceDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEnvironmentResourcesCommand = deserializeAws_queryDescribeEnvironmentResourcesCommand;
async function deserializeAws_queryDescribeEnvironmentResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEnvironmentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.DescribeEnvironmentsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEnvironmentsCommand = deserializeAws_queryDescribeEnvironmentsCommand;
async function deserializeAws_queryDescribeEnvironmentsCommandError(output, context) {
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
async function deserializeAws_queryDescribeEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventDescriptionsMessage(data.DescribeEventsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EventDescriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEventsCommand = deserializeAws_queryDescribeEventsCommand;
async function deserializeAws_queryDescribeEventsCommandError(output, context) {
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
async function deserializeAws_queryDescribeInstancesHealthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeInstancesHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeInstancesHealthResult(data.DescribeInstancesHealthResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancesHealthResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeInstancesHealthCommand = deserializeAws_queryDescribeInstancesHealthCommand;
async function deserializeAws_queryDescribeInstancesHealthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribePlatformVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribePlatformVersionResult(data.DescribePlatformVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePlatformVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribePlatformVersionCommand = deserializeAws_queryDescribePlatformVersionCommand;
async function deserializeAws_queryDescribePlatformVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListAvailableSolutionStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAvailableSolutionStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAvailableSolutionStacksResultMessage(data.ListAvailableSolutionStacksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAvailableSolutionStacksResultMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAvailableSolutionStacksCommand = deserializeAws_queryListAvailableSolutionStacksCommand;
async function deserializeAws_queryListAvailableSolutionStacksCommandError(output, context) {
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
async function deserializeAws_queryListPlatformVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPlatformVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPlatformVersionsResult(data.ListPlatformVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPlatformVersionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPlatformVersionsCommand = deserializeAws_queryListPlatformVersionsCommand;
async function deserializeAws_queryListPlatformVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResourceTagsDescriptionMessage(data.ListTagsForResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResourceTagsDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
async function deserializeAws_queryListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRebuildEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRebuildEnvironmentCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRebuildEnvironmentCommand = deserializeAws_queryRebuildEnvironmentCommand;
async function deserializeAws_queryRebuildEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRequestEnvironmentInfoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRequestEnvironmentInfoCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRequestEnvironmentInfoCommand = deserializeAws_queryRequestEnvironmentInfoCommand;
async function deserializeAws_queryRequestEnvironmentInfoCommandError(output, context) {
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
async function deserializeAws_queryRestartAppServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestartAppServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestartAppServerCommand = deserializeAws_queryRestartAppServerCommand;
async function deserializeAws_queryRestartAppServerCommandError(output, context) {
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
async function deserializeAws_queryRetrieveEnvironmentInfoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRetrieveEnvironmentInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRetrieveEnvironmentInfoResultMessage(data.RetrieveEnvironmentInfoResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RetrieveEnvironmentInfoResultMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRetrieveEnvironmentInfoCommand = deserializeAws_queryRetrieveEnvironmentInfoCommand;
async function deserializeAws_queryRetrieveEnvironmentInfoCommandError(output, context) {
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
async function deserializeAws_querySwapEnvironmentCNAMEsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySwapEnvironmentCNAMEsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySwapEnvironmentCNAMEsCommand = deserializeAws_querySwapEnvironmentCNAMEsCommand;
async function deserializeAws_querySwapEnvironmentCNAMEsCommandError(output, context) {
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
async function deserializeAws_queryTerminateEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTerminateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.TerminateEnvironmentResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTerminateEnvironmentCommand = deserializeAws_queryTerminateEnvironmentCommand;
async function deserializeAws_queryTerminateEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionMessage(data.UpdateApplicationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateApplicationCommand = deserializeAws_queryUpdateApplicationCommand;
async function deserializeAws_queryUpdateApplicationCommandError(output, context) {
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
async function deserializeAws_queryUpdateApplicationResourceLifecycleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationResourceLifecycleDescriptionMessage(data.UpdateApplicationResourceLifecycleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationResourceLifecycleDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateApplicationResourceLifecycleCommand = deserializeAws_queryUpdateApplicationResourceLifecycleCommand;
async function deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateApplicationVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateApplicationVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.UpdateApplicationVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplicationVersionDescriptionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateApplicationVersionCommand = deserializeAws_queryUpdateApplicationVersionCommand;
async function deserializeAws_queryUpdateApplicationVersionCommandError(output, context) {
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
async function deserializeAws_queryUpdateConfigurationTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateConfigurationTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescription(data.UpdateConfigurationTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigurationSettingsDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateConfigurationTemplateCommand = deserializeAws_queryUpdateConfigurationTemplateCommand;
async function deserializeAws_queryUpdateConfigurationTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.UpdateEnvironmentResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnvironmentDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateEnvironmentCommand = deserializeAws_queryUpdateEnvironmentCommand;
async function deserializeAws_queryUpdateEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateTagsForResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateTagsForResourceCommand = deserializeAws_queryUpdateTagsForResourceCommand;
async function deserializeAws_queryUpdateTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticbeanstalk#TooManyTagsException":
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
async function deserializeAws_queryValidateConfigurationSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryValidateConfigurationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsValidationMessages(data.ValidateConfigurationSettingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfigurationSettingsValidationMessages" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryValidateConfigurationSettingsCommand = deserializeAws_queryValidateConfigurationSettingsCommand;
async function deserializeAws_queryValidateConfigurationSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCodeBuildNotInServiceRegionException(body.Error, context);
    const contents = Object.assign({ name: "CodeBuildNotInServiceRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryElasticBeanstalkServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryElasticBeanstalkServiceException(body.Error, context);
    const contents = Object.assign({ name: "ElasticBeanstalkServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientPrivilegesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientPrivilegesException(body.Error, context);
    const contents = Object.assign({ name: "InsufficientPrivilegesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRequestException(body.Error, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryManagedActionInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryManagedActionInvalidStateException(body.Error, context);
    const contents = Object.assign({ name: "ManagedActionInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
    const contents = Object.assign({ name: "OperationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPlatformVersionStillReferencedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPlatformVersionStillReferencedException(body.Error, context);
    const contents = Object.assign({ name: "PlatformVersionStillReferencedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceTypeNotSupportedException(body.Error, context);
    const contents = Object.assign({ name: "ResourceTypeNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryS3LocationNotInServiceRegionException(body.Error, context);
    const contents = Object.assign({ name: "S3LocationNotInServiceRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryS3SubscriptionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryS3SubscriptionRequiredException(body.Error, context);
    const contents = Object.assign({ name: "S3SubscriptionRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySourceBundleDeletionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySourceBundleDeletionException(body.Error, context);
    const contents = Object.assign({ name: "SourceBundleDeletionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyApplicationVersionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyApplicationVersionsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyApplicationVersionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyApplicationsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyApplicationsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyApplicationsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyBucketsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyBucketsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyBucketsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyConfigurationTemplatesException(body.Error, context);
    const contents = Object.assign({ name: "TooManyConfigurationTemplatesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyEnvironmentsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyEnvironmentsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyEnvironmentsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyPlatformsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyPlatformsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyPlatformsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAbortEnvironmentUpdateMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryApplicationNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryApplicationResourceLifecycleConfig = (input, context) => {
    const entries = {};
    if (input.ServiceRole !== undefined) {
        entries["ServiceRole"] = input.ServiceRole;
    }
    if (input.VersionLifecycleConfig !== undefined) {
        const memberEntries = serializeAws_queryApplicationVersionLifecycleConfig(input.VersionLifecycleConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VersionLifecycleConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryApplicationVersionLifecycleConfig = (input, context) => {
    const entries = {};
    if (input.MaxAgeRule !== undefined) {
        const memberEntries = serializeAws_queryMaxAgeRule(input.MaxAgeRule, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MaxAgeRule.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxCountRule !== undefined) {
        const memberEntries = serializeAws_queryMaxCountRule(input.MaxCountRule, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MaxCountRule.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryApplyEnvironmentManagedActionRequest = (input, context) => {
    const entries = {};
    if (input.ActionId !== undefined) {
        entries["ActionId"] = input.ActionId;
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryBuildConfiguration = (input, context) => {
    const entries = {};
    if (input.ArtifactName !== undefined) {
        entries["ArtifactName"] = input.ArtifactName;
    }
    if (input.CodeBuildServiceRole !== undefined) {
        entries["CodeBuildServiceRole"] = input.CodeBuildServiceRole;
    }
    if (input.ComputeType !== undefined) {
        entries["ComputeType"] = input.ComputeType;
    }
    if (input.Image !== undefined) {
        entries["Image"] = input.Image;
    }
    if (input.TimeoutInMinutes !== undefined) {
        entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
    }
    return entries;
};
const serializeAws_queryCheckDNSAvailabilityMessage = (input, context) => {
    const entries = {};
    if (input.CNAMEPrefix !== undefined) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    return entries;
};
const serializeAws_queryComposeEnvironmentsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.VersionLabels !== undefined) {
        const memberEntries = serializeAws_queryVersionLabels(input.VersionLabels, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VersionLabels.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryConfigurationOptionSetting = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryConfigurationOptionSettingsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryConfigurationOptionSetting(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.ResourceLifecycleConfig !== undefined) {
        const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceLifecycleConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.AutoCreateApplication !== undefined) {
        entries["AutoCreateApplication"] = input.AutoCreateApplication;
    }
    if (input.BuildConfiguration !== undefined) {
        const memberEntries = serializeAws_queryBuildConfiguration(input.BuildConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BuildConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.Process !== undefined) {
        entries["Process"] = input.Process;
    }
    if (input.SourceBuildInformation !== undefined) {
        const memberEntries = serializeAws_querySourceBuildInformation(input.SourceBuildInformation, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceBuildInformation.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SourceBundle !== undefined) {
        const memberEntries = serializeAws_queryS3Location(input.SourceBundle, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceBundle.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryCreateConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SolutionStackName !== undefined) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.SourceConfiguration !== undefined) {
        const memberEntries = serializeAws_querySourceConfiguration(input.SourceConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryCreateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.CNAMEPrefix !== undefined) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionsToRemove !== undefined) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SolutionStackName !== undefined) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.Tier !== undefined) {
        const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tier.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryCreatePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformDefinitionBundle !== undefined) {
        const memberEntries = serializeAws_queryS3Location(input.PlatformDefinitionBundle, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PlatformDefinitionBundle.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformName !== undefined) {
        entries["PlatformName"] = input.PlatformName;
    }
    if (input.PlatformVersion !== undefined) {
        entries["PlatformVersion"] = input.PlatformVersion;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TerminateEnvByForce !== undefined) {
        entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
    }
    return entries;
};
const serializeAws_queryDeleteApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.DeleteSourceBundle !== undefined) {
        entries["DeleteSourceBundle"] = input.DeleteSourceBundle;
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteEnvironmentConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDeletePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
const serializeAws_queryDescribeApplicationVersionsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.VersionLabels !== undefined) {
        const memberEntries = serializeAws_queryVersionLabelsList(input.VersionLabels, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VersionLabels.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeApplicationsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationNames !== undefined) {
        const memberEntries = serializeAws_queryApplicationNamesList(input.ApplicationNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ApplicationNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeConfigurationOptionsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.Options !== undefined) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.Options, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Options.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SolutionStackName !== undefined) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDescribeConfigurationSettingsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentHealthRequest = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined) {
        const memberEntries = serializeAws_queryEnvironmentHealthAttributes(input.AttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentManagedActionsRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentResourcesMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentIds !== undefined) {
        const memberEntries = serializeAws_queryEnvironmentIdList(input.EnvironmentIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnvironmentIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnvironmentNames !== undefined) {
        const memberEntries = serializeAws_queryEnvironmentNamesList(input.EnvironmentNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnvironmentNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.IncludeDeleted !== undefined) {
        entries["IncludeDeleted"] = input.IncludeDeleted;
    }
    if (input.IncludedDeletedBackTo !== undefined) {
        entries["IncludedDeletedBackTo"] =
            input.IncludedDeletedBackTo.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryDescribeEventsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.RequestId !== undefined) {
        entries["RequestId"] = input.RequestId;
    }
    if (input.Severity !== undefined) {
        entries["Severity"] = input.Severity;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryDescribeInstancesHealthRequest = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined) {
        const memberEntries = serializeAws_queryInstancesHealthAttributes(input.AttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
const serializeAws_queryEnvironmentHealthAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryEnvironmentIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryEnvironmentNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryEnvironmentTier = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.Version !== undefined) {
        entries["Version"] = input.Version;
    }
    return entries;
};
const serializeAws_queryInstancesHealthAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListPlatformVersionsRequest = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryPlatformFilters(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const serializeAws_queryMaxAgeRule = (input, context) => {
    const entries = {};
    if (input.DeleteSourceFromS3 !== undefined) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxAgeInDays !== undefined) {
        entries["MaxAgeInDays"] = input.MaxAgeInDays;
    }
    return entries;
};
const serializeAws_queryMaxCountRule = (input, context) => {
    const entries = {};
    if (input.DeleteSourceFromS3 !== undefined) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxCount !== undefined) {
        entries["MaxCount"] = input.MaxCount;
    }
    return entries;
};
const serializeAws_queryOptionSpecification = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    return entries;
};
const serializeAws_queryOptionsSpecifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryOptionSpecification(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPlatformFilter = (input, context) => {
    const entries = {};
    if (input.Operator !== undefined) {
        entries["Operator"] = input.Operator;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryPlatformFilterValueList(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryPlatformFilterValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPlatformFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryPlatformFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRebuildEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryRequestEnvironmentInfoMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
const serializeAws_queryRestartAppServerMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryRetrieveEnvironmentInfoMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
const serializeAws_queryS3Location = (input, context) => {
    const entries = {};
    if (input.S3Bucket !== undefined) {
        entries["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Key !== undefined) {
        entries["S3Key"] = input.S3Key;
    }
    return entries;
};
const serializeAws_querySourceBuildInformation = (input, context) => {
    const entries = {};
    if (input.SourceLocation !== undefined) {
        entries["SourceLocation"] = input.SourceLocation;
    }
    if (input.SourceRepository !== undefined) {
        entries["SourceRepository"] = input.SourceRepository;
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    return entries;
};
const serializeAws_querySourceConfiguration = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_querySwapEnvironmentCNAMEsMessage = (input, context) => {
    const entries = {};
    if (input.DestinationEnvironmentId !== undefined) {
        entries["DestinationEnvironmentId"] = input.DestinationEnvironmentId;
    }
    if (input.DestinationEnvironmentName !== undefined) {
        entries["DestinationEnvironmentName"] = input.DestinationEnvironmentName;
    }
    if (input.SourceEnvironmentId !== undefined) {
        entries["SourceEnvironmentId"] = input.SourceEnvironmentId;
    }
    if (input.SourceEnvironmentName !== undefined) {
        entries["SourceEnvironmentName"] = input.SourceEnvironmentName;
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
const serializeAws_queryTags = (input, context) => {
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
const serializeAws_queryTerminateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.ForceTerminate !== undefined) {
        entries["ForceTerminate"] = input.ForceTerminate;
    }
    if (input.TerminateResources !== undefined) {
        entries["TerminateResources"] = input.TerminateResources;
    }
    return entries;
};
const serializeAws_queryUpdateApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryUpdateApplicationResourceLifecycleMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.ResourceLifecycleConfig !== undefined) {
        const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceLifecycleConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUpdateApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionsToRemove !== undefined) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryUpdateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.EnvironmentId !== undefined) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionsToRemove !== undefined) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformArn !== undefined) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SolutionStackName !== undefined) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.Tier !== undefined) {
        const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tier.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VersionLabel !== undefined) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    return entries;
};
const serializeAws_queryUpdateTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagsToAdd !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.TagsToAdd, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagsToAdd.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagsToRemove !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryValidateConfigurationSettingsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryVersionLabels = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryVersionLabelsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryApplicationDescription = (output, context) => {
    let contents = {
        __type: "ApplicationDescription",
        ApplicationArn: undefined,
        ApplicationName: undefined,
        ConfigurationTemplates: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Description: undefined,
        ResourceLifecycleConfig: undefined,
        Versions: undefined
    };
    if (output["ApplicationArn"] !== undefined) {
        contents.ApplicationArn = output["ApplicationArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output.ConfigurationTemplates === "") {
        contents.ConfigurationTemplates = [];
    }
    if (output["ConfigurationTemplates"] !== undefined &&
        output["ConfigurationTemplates"]["member"] !== undefined) {
        const wrappedItem = output["ConfigurationTemplates"]["member"] instanceof Array
            ? output["ConfigurationTemplates"]["member"]
            : [output["ConfigurationTemplates"]["member"]];
        contents.ConfigurationTemplates = deserializeAws_queryConfigurationTemplateNamesList(wrappedItem, context);
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined &&
        output["Versions"]["member"] !== undefined) {
        const wrappedItem = output["Versions"]["member"] instanceof Array
            ? output["Versions"]["member"]
            : [output["Versions"]["member"]];
        contents.Versions = deserializeAws_queryVersionLabelsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryApplicationDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryApplicationDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryApplicationDescriptionMessage = (output, context) => {
    let contents = {
        __type: "ApplicationDescriptionMessage",
        Application: undefined
    };
    if (output["Application"] !== undefined) {
        contents.Application = deserializeAws_queryApplicationDescription(output["Application"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationDescriptionsMessage = (output, context) => {
    let contents = {
        __type: "ApplicationDescriptionsMessage",
        Applications: undefined
    };
    if (output.Applications === "") {
        contents.Applications = [];
    }
    if (output["Applications"] !== undefined &&
        output["Applications"]["member"] !== undefined) {
        const wrappedItem = output["Applications"]["member"] instanceof Array
            ? output["Applications"]["member"]
            : [output["Applications"]["member"]];
        contents.Applications = deserializeAws_queryApplicationDescriptionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryApplicationMetrics = (output, context) => {
    let contents = {
        __type: "ApplicationMetrics",
        Duration: undefined,
        Latency: undefined,
        RequestCount: undefined,
        StatusCodes: undefined
    };
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["Latency"] !== undefined) {
        contents.Latency = deserializeAws_queryLatency(output["Latency"], context);
    }
    if (output["RequestCount"] !== undefined) {
        contents.RequestCount = parseInt(output["RequestCount"]);
    }
    if (output["StatusCodes"] !== undefined) {
        contents.StatusCodes = deserializeAws_queryStatusCodes(output["StatusCodes"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationResourceLifecycleConfig = (output, context) => {
    let contents = {
        __type: "ApplicationResourceLifecycleConfig",
        ServiceRole: undefined,
        VersionLifecycleConfig: undefined
    };
    if (output["ServiceRole"] !== undefined) {
        contents.ServiceRole = output["ServiceRole"];
    }
    if (output["VersionLifecycleConfig"] !== undefined) {
        contents.VersionLifecycleConfig = deserializeAws_queryApplicationVersionLifecycleConfig(output["VersionLifecycleConfig"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationResourceLifecycleDescriptionMessage = (output, context) => {
    let contents = {
        __type: "ApplicationResourceLifecycleDescriptionMessage",
        ApplicationName: undefined,
        ResourceLifecycleConfig: undefined
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescription = (output, context) => {
    let contents = {
        __type: "ApplicationVersionDescription",
        ApplicationName: undefined,
        ApplicationVersionArn: undefined,
        BuildArn: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Description: undefined,
        SourceBuildInformation: undefined,
        SourceBundle: undefined,
        Status: undefined,
        VersionLabel: undefined
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["ApplicationVersionArn"] !== undefined) {
        contents.ApplicationVersionArn = output["ApplicationVersionArn"];
    }
    if (output["BuildArn"] !== undefined) {
        contents.BuildArn = output["BuildArn"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["SourceBuildInformation"] !== undefined) {
        contents.SourceBuildInformation = deserializeAws_querySourceBuildInformation(output["SourceBuildInformation"], context);
    }
    if (output["SourceBundle"] !== undefined) {
        contents.SourceBundle = deserializeAws_queryS3Location(output["SourceBundle"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryApplicationVersionDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryApplicationVersionDescriptionMessage = (output, context) => {
    let contents = {
        __type: "ApplicationVersionDescriptionMessage",
        ApplicationVersion: undefined
    };
    if (output["ApplicationVersion"] !== undefined) {
        contents.ApplicationVersion = deserializeAws_queryApplicationVersionDescription(output["ApplicationVersion"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescriptionsMessage = (output, context) => {
    let contents = {
        __type: "ApplicationVersionDescriptionsMessage",
        ApplicationVersions: undefined,
        NextToken: undefined
    };
    if (output.ApplicationVersions === "") {
        contents.ApplicationVersions = [];
    }
    if (output["ApplicationVersions"] !== undefined &&
        output["ApplicationVersions"]["member"] !== undefined) {
        const wrappedItem = output["ApplicationVersions"]["member"] instanceof Array
            ? output["ApplicationVersions"]["member"]
            : [output["ApplicationVersions"]["member"]];
        contents.ApplicationVersions = deserializeAws_queryApplicationVersionDescriptionList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryApplicationVersionLifecycleConfig = (output, context) => {
    let contents = {
        __type: "ApplicationVersionLifecycleConfig",
        MaxAgeRule: undefined,
        MaxCountRule: undefined
    };
    if (output["MaxAgeRule"] !== undefined) {
        contents.MaxAgeRule = deserializeAws_queryMaxAgeRule(output["MaxAgeRule"], context);
    }
    if (output["MaxCountRule"] !== undefined) {
        contents.MaxCountRule = deserializeAws_queryMaxCountRule(output["MaxCountRule"], context);
    }
    return contents;
};
const deserializeAws_queryApplyEnvironmentManagedActionResult = (output, context) => {
    let contents = {
        __type: "ApplyEnvironmentManagedActionResult",
        ActionDescription: undefined,
        ActionId: undefined,
        ActionType: undefined,
        Status: undefined
    };
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingGroup = (output, context) => {
    let contents = {
        __type: "AutoScalingGroup",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAutoScalingGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryAvailableSolutionStackDetailsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySolutionStackDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryAvailableSolutionStackNamesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryBuilder = (output, context) => {
    let contents = {
        __type: "Builder",
        ARN: undefined
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryCPUUtilization = (output, context) => {
    let contents = {
        __type: "CPUUtilization",
        IOWait: undefined,
        IRQ: undefined,
        Idle: undefined,
        Nice: undefined,
        Privileged: undefined,
        SoftIRQ: undefined,
        System: undefined,
        User: undefined
    };
    if (output["IOWait"] !== undefined) {
        contents.IOWait = parseFloat(output["IOWait"]);
    }
    if (output["IRQ"] !== undefined) {
        contents.IRQ = parseFloat(output["IRQ"]);
    }
    if (output["Idle"] !== undefined) {
        contents.Idle = parseFloat(output["Idle"]);
    }
    if (output["Nice"] !== undefined) {
        contents.Nice = parseFloat(output["Nice"]);
    }
    if (output["Privileged"] !== undefined) {
        contents.Privileged = parseFloat(output["Privileged"]);
    }
    if (output["SoftIRQ"] !== undefined) {
        contents.SoftIRQ = parseFloat(output["SoftIRQ"]);
    }
    if (output["System"] !== undefined) {
        contents.System = parseFloat(output["System"]);
    }
    if (output["User"] !== undefined) {
        contents.User = parseFloat(output["User"]);
    }
    return contents;
};
const deserializeAws_queryCauses = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCheckDNSAvailabilityResultMessage = (output, context) => {
    let contents = {
        __type: "CheckDNSAvailabilityResultMessage",
        Available: undefined,
        FullyQualifiedCNAME: undefined
    };
    if (output["Available"] !== undefined) {
        contents.Available = output["Available"] == "true";
    }
    if (output["FullyQualifiedCNAME"] !== undefined) {
        contents.FullyQualifiedCNAME = output["FullyQualifiedCNAME"];
    }
    return contents;
};
const deserializeAws_queryCodeBuildNotInServiceRegionException = (output, context) => {
    let contents = {
        __type: "CodeBuildNotInServiceRegionException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionDescription = (output, context) => {
    let contents = {
        __type: "ConfigurationOptionDescription",
        ChangeSeverity: undefined,
        DefaultValue: undefined,
        MaxLength: undefined,
        MaxValue: undefined,
        MinValue: undefined,
        Name: undefined,
        Namespace: undefined,
        Regex: undefined,
        UserDefined: undefined,
        ValueOptions: undefined,
        ValueType: undefined
    };
    if (output["ChangeSeverity"] !== undefined) {
        contents.ChangeSeverity = output["ChangeSeverity"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["MaxLength"] !== undefined) {
        contents.MaxLength = parseInt(output["MaxLength"]);
    }
    if (output["MaxValue"] !== undefined) {
        contents.MaxValue = parseInt(output["MaxValue"]);
    }
    if (output["MinValue"] !== undefined) {
        contents.MinValue = parseInt(output["MinValue"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Regex"] !== undefined) {
        contents.Regex = deserializeAws_queryOptionRestrictionRegex(output["Regex"], context);
    }
    if (output["UserDefined"] !== undefined) {
        contents.UserDefined = output["UserDefined"] == "true";
    }
    if (output.ValueOptions === "") {
        contents.ValueOptions = [];
    }
    if (output["ValueOptions"] !== undefined &&
        output["ValueOptions"]["member"] !== undefined) {
        const wrappedItem = output["ValueOptions"]["member"] instanceof Array
            ? output["ValueOptions"]["member"]
            : [output["ValueOptions"]["member"]];
        contents.ValueOptions = deserializeAws_queryConfigurationOptionPossibleValues(wrappedItem, context);
    }
    if (output["ValueType"] !== undefined) {
        contents.ValueType = output["ValueType"];
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionDescriptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryConfigurationOptionDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryConfigurationOptionPossibleValues = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryConfigurationOptionSetting = (output, context) => {
    let contents = {
        __type: "ConfigurationOptionSetting",
        Namespace: undefined,
        OptionName: undefined,
        ResourceName: undefined,
        Value: undefined
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output["ResourceName"] !== undefined) {
        contents.ResourceName = output["ResourceName"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionSettingsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryConfigurationOptionSetting(entry, context));
    });
    return contents;
};
const deserializeAws_queryConfigurationOptionsDescription = (output, context) => {
    let contents = {
        __type: "ConfigurationOptionsDescription",
        Options: undefined,
        PlatformArn: undefined,
        SolutionStackName: undefined
    };
    if (output.Options === "") {
        contents.Options = [];
    }
    if (output["Options"] !== undefined &&
        output["Options"]["member"] !== undefined) {
        const wrappedItem = output["Options"]["member"] instanceof Array
            ? output["Options"]["member"]
            : [output["Options"]["member"]];
        contents.Options = deserializeAws_queryConfigurationOptionDescriptionsList(wrappedItem, context);
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSettingsDescription = (output, context) => {
    let contents = {
        __type: "ConfigurationSettingsDescription",
        ApplicationName: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        DeploymentStatus: undefined,
        Description: undefined,
        EnvironmentName: undefined,
        OptionSettings: undefined,
        PlatformArn: undefined,
        SolutionStackName: undefined,
        TemplateName: undefined
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["DeploymentStatus"] !== undefined) {
        contents.DeploymentStatus = output["DeploymentStatus"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output.OptionSettings === "") {
        contents.OptionSettings = [];
    }
    if (output["OptionSettings"] !== undefined &&
        output["OptionSettings"]["member"] !== undefined) {
        const wrappedItem = output["OptionSettings"]["member"] instanceof Array
            ? output["OptionSettings"]["member"]
            : [output["OptionSettings"]["member"]];
        contents.OptionSettings = deserializeAws_queryConfigurationOptionSettingsList(wrappedItem, context);
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSettingsDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryConfigurationSettingsDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryConfigurationSettingsDescriptions = (output, context) => {
    let contents = {
        __type: "ConfigurationSettingsDescriptions",
        ConfigurationSettings: undefined
    };
    if (output.ConfigurationSettings === "") {
        contents.ConfigurationSettings = [];
    }
    if (output["ConfigurationSettings"] !== undefined &&
        output["ConfigurationSettings"]["member"] !== undefined) {
        const wrappedItem = output["ConfigurationSettings"]["member"] instanceof Array
            ? output["ConfigurationSettings"]["member"]
            : [output["ConfigurationSettings"]["member"]];
        contents.ConfigurationSettings = deserializeAws_queryConfigurationSettingsDescriptionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryConfigurationSettingsValidationMessages = (output, context) => {
    let contents = {
        __type: "ConfigurationSettingsValidationMessages",
        Messages: undefined
    };
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined &&
        output["Messages"]["member"] !== undefined) {
        const wrappedItem = output["Messages"]["member"] instanceof Array
            ? output["Messages"]["member"]
            : [output["Messages"]["member"]];
        contents.Messages = deserializeAws_queryValidationMessagesList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryConfigurationTemplateNamesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCreatePlatformVersionResult = (output, context) => {
    let contents = {
        __type: "CreatePlatformVersionResult",
        Builder: undefined,
        PlatformSummary: undefined
    };
    if (output["Builder"] !== undefined) {
        contents.Builder = deserializeAws_queryBuilder(output["Builder"], context);
    }
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    return contents;
};
const deserializeAws_queryCreateStorageLocationResultMessage = (output, context) => {
    let contents = {
        __type: "CreateStorageLocationResultMessage",
        S3Bucket: undefined
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    return contents;
};
const deserializeAws_queryCustomAmi = (output, context) => {
    let contents = {
        __type: "CustomAmi",
        ImageId: undefined,
        VirtualizationType: undefined
    };
    if (output["ImageId"] !== undefined) {
        contents.ImageId = output["ImageId"];
    }
    if (output["VirtualizationType"] !== undefined) {
        contents.VirtualizationType = output["VirtualizationType"];
    }
    return contents;
};
const deserializeAws_queryCustomAmiList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCustomAmi(entry, context));
    });
    return contents;
};
const deserializeAws_queryDeletePlatformVersionResult = (output, context) => {
    let contents = {
        __type: "DeletePlatformVersionResult",
        PlatformSummary: undefined
    };
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    return contents;
};
const deserializeAws_queryDeployment = (output, context) => {
    let contents = {
        __type: "Deployment",
        DeploymentId: undefined,
        DeploymentTime: undefined,
        Status: undefined,
        VersionLabel: undefined
    };
    if (output["DeploymentId"] !== undefined) {
        contents.DeploymentId = parseInt(output["DeploymentId"]);
    }
    if (output["DeploymentTime"] !== undefined) {
        contents.DeploymentTime = new Date(output["DeploymentTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    return contents;
};
const deserializeAws_queryDescribeAccountAttributesResult = (output, context) => {
    let contents = {
        __type: "DescribeAccountAttributesResult",
        ResourceQuotas: undefined
    };
    if (output["ResourceQuotas"] !== undefined) {
        contents.ResourceQuotas = deserializeAws_queryResourceQuotas(output["ResourceQuotas"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentHealthResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentHealthResult",
        ApplicationMetrics: undefined,
        Causes: undefined,
        Color: undefined,
        EnvironmentName: undefined,
        HealthStatus: undefined,
        InstancesHealth: undefined,
        RefreshedAt: undefined,
        Status: undefined
    };
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined &&
        output["Causes"]["member"] !== undefined) {
        const wrappedItem = output["Causes"]["member"] instanceof Array
            ? output["Causes"]["member"]
            : [output["Causes"]["member"]];
        contents.Causes = deserializeAws_queryCauses(wrappedItem, context);
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["InstancesHealth"] !== undefined) {
        contents.InstancesHealth = deserializeAws_queryInstanceHealthSummary(output["InstancesHealth"], context);
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentManagedActionHistoryResult",
        ManagedActionHistoryItems: undefined,
        NextToken: undefined
    };
    if (output.ManagedActionHistoryItems === "") {
        contents.ManagedActionHistoryItems = [];
    }
    if (output["ManagedActionHistoryItems"] !== undefined &&
        output["ManagedActionHistoryItems"]["member"] !== undefined) {
        const wrappedItem = output["ManagedActionHistoryItems"]["member"] instanceof Array
            ? output["ManagedActionHistoryItems"]["member"]
            : [output["ManagedActionHistoryItems"]["member"]];
        contents.ManagedActionHistoryItems = deserializeAws_queryManagedActionHistoryItems(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentManagedActionsResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentManagedActionsResult",
        ManagedActions: undefined
    };
    if (output.ManagedActions === "") {
        contents.ManagedActions = [];
    }
    if (output["ManagedActions"] !== undefined &&
        output["ManagedActions"]["member"] !== undefined) {
        const wrappedItem = output["ManagedActions"]["member"] instanceof Array
            ? output["ManagedActions"]["member"]
            : [output["ManagedActions"]["member"]];
        contents.ManagedActions = deserializeAws_queryManagedActions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeInstancesHealthResult = (output, context) => {
    let contents = {
        __type: "DescribeInstancesHealthResult",
        InstanceHealthList: undefined,
        NextToken: undefined,
        RefreshedAt: undefined
    };
    if (output.InstanceHealthList === "") {
        contents.InstanceHealthList = [];
    }
    if (output["InstanceHealthList"] !== undefined &&
        output["InstanceHealthList"]["member"] !== undefined) {
        const wrappedItem = output["InstanceHealthList"]["member"] instanceof Array
            ? output["InstanceHealthList"]["member"]
            : [output["InstanceHealthList"]["member"]];
        contents.InstanceHealthList = deserializeAws_queryInstanceHealthList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    return contents;
};
const deserializeAws_queryDescribePlatformVersionResult = (output, context) => {
    let contents = {
        __type: "DescribePlatformVersionResult",
        PlatformDescription: undefined
    };
    if (output["PlatformDescription"] !== undefined) {
        contents.PlatformDescription = deserializeAws_queryPlatformDescription(output["PlatformDescription"], context);
    }
    return contents;
};
const deserializeAws_queryElasticBeanstalkServiceException = (output, context) => {
    let contents = {
        __type: "ElasticBeanstalkServiceException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentDescription = (output, context) => {
    let contents = {
        __type: "EnvironmentDescription",
        AbortableOperationInProgress: undefined,
        ApplicationName: undefined,
        CNAME: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Description: undefined,
        EndpointURL: undefined,
        EnvironmentArn: undefined,
        EnvironmentId: undefined,
        EnvironmentLinks: undefined,
        EnvironmentName: undefined,
        Health: undefined,
        HealthStatus: undefined,
        PlatformArn: undefined,
        Resources: undefined,
        SolutionStackName: undefined,
        Status: undefined,
        TemplateName: undefined,
        Tier: undefined,
        VersionLabel: undefined
    };
    if (output["AbortableOperationInProgress"] !== undefined) {
        contents.AbortableOperationInProgress =
            output["AbortableOperationInProgress"] == "true";
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["CNAME"] !== undefined) {
        contents.CNAME = output["CNAME"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EndpointURL"] !== undefined) {
        contents.EndpointURL = output["EndpointURL"];
    }
    if (output["EnvironmentArn"] !== undefined) {
        contents.EnvironmentArn = output["EnvironmentArn"];
    }
    if (output["EnvironmentId"] !== undefined) {
        contents.EnvironmentId = output["EnvironmentId"];
    }
    if (output.EnvironmentLinks === "") {
        contents.EnvironmentLinks = [];
    }
    if (output["EnvironmentLinks"] !== undefined &&
        output["EnvironmentLinks"]["member"] !== undefined) {
        const wrappedItem = output["EnvironmentLinks"]["member"] instanceof Array
            ? output["EnvironmentLinks"]["member"]
            : [output["EnvironmentLinks"]["member"]];
        contents.EnvironmentLinks = deserializeAws_queryEnvironmentLinks(wrappedItem, context);
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["Health"] !== undefined) {
        contents.Health = output["Health"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["Resources"] !== undefined) {
        contents.Resources = deserializeAws_queryEnvironmentResourcesDescription(output["Resources"], context);
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["Tier"] !== undefined) {
        contents.Tier = deserializeAws_queryEnvironmentTier(output["Tier"], context);
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentDescriptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEnvironmentDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryEnvironmentDescriptionsMessage = (output, context) => {
    let contents = {
        __type: "EnvironmentDescriptionsMessage",
        Environments: undefined,
        NextToken: undefined
    };
    if (output.Environments === "") {
        contents.Environments = [];
    }
    if (output["Environments"] !== undefined &&
        output["Environments"]["member"] !== undefined) {
        const wrappedItem = output["Environments"]["member"] instanceof Array
            ? output["Environments"]["member"]
            : [output["Environments"]["member"]];
        contents.Environments = deserializeAws_queryEnvironmentDescriptionsList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentInfoDescription = (output, context) => {
    let contents = {
        __type: "EnvironmentInfoDescription",
        Ec2InstanceId: undefined,
        InfoType: undefined,
        Message: undefined,
        SampleTimestamp: undefined
    };
    if (output["Ec2InstanceId"] !== undefined) {
        contents.Ec2InstanceId = output["Ec2InstanceId"];
    }
    if (output["InfoType"] !== undefined) {
        contents.InfoType = output["InfoType"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["SampleTimestamp"] !== undefined) {
        contents.SampleTimestamp = new Date(output["SampleTimestamp"]);
    }
    return contents;
};
const deserializeAws_queryEnvironmentInfoDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEnvironmentInfoDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryEnvironmentLink = (output, context) => {
    let contents = {
        __type: "EnvironmentLink",
        EnvironmentName: undefined,
        LinkName: undefined
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["LinkName"] !== undefined) {
        contents.LinkName = output["LinkName"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentLinks = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEnvironmentLink(entry, context));
    });
    return contents;
};
const deserializeAws_queryEnvironmentResourceDescription = (output, context) => {
    let contents = {
        __type: "EnvironmentResourceDescription",
        AutoScalingGroups: undefined,
        EnvironmentName: undefined,
        Instances: undefined,
        LaunchConfigurations: undefined,
        LaunchTemplates: undefined,
        LoadBalancers: undefined,
        Queues: undefined,
        Triggers: undefined
    };
    if (output.AutoScalingGroups === "") {
        contents.AutoScalingGroups = [];
    }
    if (output["AutoScalingGroups"] !== undefined &&
        output["AutoScalingGroups"]["member"] !== undefined) {
        const wrappedItem = output["AutoScalingGroups"]["member"] instanceof Array
            ? output["AutoScalingGroups"]["member"]
            : [output["AutoScalingGroups"]["member"]];
        contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroupList(wrappedItem, context);
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined &&
        output["Instances"]["member"] !== undefined) {
        const wrappedItem = output["Instances"]["member"] instanceof Array
            ? output["Instances"]["member"]
            : [output["Instances"]["member"]];
        contents.Instances = deserializeAws_queryInstanceList(wrappedItem, context);
    }
    if (output.LaunchConfigurations === "") {
        contents.LaunchConfigurations = [];
    }
    if (output["LaunchConfigurations"] !== undefined &&
        output["LaunchConfigurations"]["member"] !== undefined) {
        const wrappedItem = output["LaunchConfigurations"]["member"] instanceof Array
            ? output["LaunchConfigurations"]["member"]
            : [output["LaunchConfigurations"]["member"]];
        contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurationList(wrappedItem, context);
    }
    if (output.LaunchTemplates === "") {
        contents.LaunchTemplates = [];
    }
    if (output["LaunchTemplates"] !== undefined &&
        output["LaunchTemplates"]["member"] !== undefined) {
        const wrappedItem = output["LaunchTemplates"]["member"] instanceof Array
            ? output["LaunchTemplates"]["member"]
            : [output["LaunchTemplates"]["member"]];
        contents.LaunchTemplates = deserializeAws_queryLaunchTemplateList(wrappedItem, context);
    }
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined &&
        output["LoadBalancers"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancers"]["member"] instanceof Array
            ? output["LoadBalancers"]["member"]
            : [output["LoadBalancers"]["member"]];
        contents.LoadBalancers = deserializeAws_queryLoadBalancerList(wrappedItem, context);
    }
    if (output.Queues === "") {
        contents.Queues = [];
    }
    if (output["Queues"] !== undefined &&
        output["Queues"]["member"] !== undefined) {
        const wrappedItem = output["Queues"]["member"] instanceof Array
            ? output["Queues"]["member"]
            : [output["Queues"]["member"]];
        contents.Queues = deserializeAws_queryQueueList(wrappedItem, context);
    }
    if (output.Triggers === "") {
        contents.Triggers = [];
    }
    if (output["Triggers"] !== undefined &&
        output["Triggers"]["member"] !== undefined) {
        const wrappedItem = output["Triggers"]["member"] instanceof Array
            ? output["Triggers"]["member"]
            : [output["Triggers"]["member"]];
        contents.Triggers = deserializeAws_queryTriggerList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentResourceDescriptionsMessage = (output, context) => {
    let contents = {
        __type: "EnvironmentResourceDescriptionsMessage",
        EnvironmentResources: undefined
    };
    if (output["EnvironmentResources"] !== undefined) {
        contents.EnvironmentResources = deserializeAws_queryEnvironmentResourceDescription(output["EnvironmentResources"], context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentResourcesDescription = (output, context) => {
    let contents = {
        __type: "EnvironmentResourcesDescription",
        LoadBalancer: undefined
    };
    if (output["LoadBalancer"] !== undefined) {
        contents.LoadBalancer = deserializeAws_queryLoadBalancerDescription(output["LoadBalancer"], context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentTier = (output, context) => {
    let contents = {
        __type: "EnvironmentTier",
        Name: undefined,
        Type: undefined,
        Version: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryEventDescription = (output, context) => {
    let contents = {
        __type: "EventDescription",
        ApplicationName: undefined,
        EnvironmentName: undefined,
        EventDate: undefined,
        Message: undefined,
        PlatformArn: undefined,
        RequestId: undefined,
        Severity: undefined,
        TemplateName: undefined,
        VersionLabel: undefined
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["EventDate"] !== undefined) {
        contents.EventDate = new Date(output["EventDate"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["RequestId"] !== undefined) {
        contents.RequestId = output["RequestId"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    return contents;
};
const deserializeAws_queryEventDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEventDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventDescriptionsMessage = (output, context) => {
    let contents = {
        __type: "EventDescriptionsMessage",
        Events: undefined,
        NextToken: undefined
    };
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined &&
        output["Events"]["member"] !== undefined) {
        const wrappedItem = output["Events"]["member"] instanceof Array
            ? output["Events"]["member"]
            : [output["Events"]["member"]];
        contents.Events = deserializeAws_queryEventDescriptionList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryInstance = (output, context) => {
    let contents = {
        __type: "Instance",
        Id: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryInstanceHealthList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySingleInstanceHealth(entry, context));
    });
    return contents;
};
const deserializeAws_queryInstanceHealthSummary = (output, context) => {
    let contents = {
        __type: "InstanceHealthSummary",
        Degraded: undefined,
        Info: undefined,
        NoData: undefined,
        Ok: undefined,
        Pending: undefined,
        Severe: undefined,
        Unknown: undefined,
        Warning: undefined
    };
    if (output["Degraded"] !== undefined) {
        contents.Degraded = parseInt(output["Degraded"]);
    }
    if (output["Info"] !== undefined) {
        contents.Info = parseInt(output["Info"]);
    }
    if (output["NoData"] !== undefined) {
        contents.NoData = parseInt(output["NoData"]);
    }
    if (output["Ok"] !== undefined) {
        contents.Ok = parseInt(output["Ok"]);
    }
    if (output["Pending"] !== undefined) {
        contents.Pending = parseInt(output["Pending"]);
    }
    if (output["Severe"] !== undefined) {
        contents.Severe = parseInt(output["Severe"]);
    }
    if (output["Unknown"] !== undefined) {
        contents.Unknown = parseInt(output["Unknown"]);
    }
    if (output["Warning"] !== undefined) {
        contents.Warning = parseInt(output["Warning"]);
    }
    return contents;
};
const deserializeAws_queryInstanceList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstance(entry, context));
    });
    return contents;
};
const deserializeAws_queryInsufficientPrivilegesException = (output, context) => {
    let contents = {
        __type: "InsufficientPrivilegesException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLatency = (output, context) => {
    let contents = {
        __type: "Latency",
        P10: undefined,
        P50: undefined,
        P75: undefined,
        P85: undefined,
        P90: undefined,
        P95: undefined,
        P99: undefined,
        P999: undefined
    };
    if (output["P10"] !== undefined) {
        contents.P10 = parseFloat(output["P10"]);
    }
    if (output["P50"] !== undefined) {
        contents.P50 = parseFloat(output["P50"]);
    }
    if (output["P75"] !== undefined) {
        contents.P75 = parseFloat(output["P75"]);
    }
    if (output["P85"] !== undefined) {
        contents.P85 = parseFloat(output["P85"]);
    }
    if (output["P90"] !== undefined) {
        contents.P90 = parseFloat(output["P90"]);
    }
    if (output["P95"] !== undefined) {
        contents.P95 = parseFloat(output["P95"]);
    }
    if (output["P99"] !== undefined) {
        contents.P99 = parseFloat(output["P99"]);
    }
    if (output["P999"] !== undefined) {
        contents.P999 = parseFloat(output["P999"]);
    }
    return contents;
};
const deserializeAws_queryLaunchConfiguration = (output, context) => {
    let contents = {
        __type: "LaunchConfiguration",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryLaunchConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLaunchConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_queryLaunchTemplate = (output, context) => {
    let contents = {
        __type: "LaunchTemplate",
        Id: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryLaunchTemplateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLaunchTemplate(entry, context));
    });
    return contents;
};
const deserializeAws_queryListAvailableSolutionStacksResultMessage = (output, context) => {
    let contents = {
        __type: "ListAvailableSolutionStacksResultMessage",
        SolutionStackDetails: undefined,
        SolutionStacks: undefined
    };
    if (output.SolutionStackDetails === "") {
        contents.SolutionStackDetails = [];
    }
    if (output["SolutionStackDetails"] !== undefined &&
        output["SolutionStackDetails"]["member"] !== undefined) {
        const wrappedItem = output["SolutionStackDetails"]["member"] instanceof Array
            ? output["SolutionStackDetails"]["member"]
            : [output["SolutionStackDetails"]["member"]];
        contents.SolutionStackDetails = deserializeAws_queryAvailableSolutionStackDetailsList(wrappedItem, context);
    }
    if (output.SolutionStacks === "") {
        contents.SolutionStacks = [];
    }
    if (output["SolutionStacks"] !== undefined &&
        output["SolutionStacks"]["member"] !== undefined) {
        const wrappedItem = output["SolutionStacks"]["member"] instanceof Array
            ? output["SolutionStacks"]["member"]
            : [output["SolutionStacks"]["member"]];
        contents.SolutionStacks = deserializeAws_queryAvailableSolutionStackNamesList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListPlatformVersionsResult = (output, context) => {
    let contents = {
        __type: "ListPlatformVersionsResult",
        NextToken: undefined,
        PlatformSummaryList: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.PlatformSummaryList === "") {
        contents.PlatformSummaryList = [];
    }
    if (output["PlatformSummaryList"] !== undefined &&
        output["PlatformSummaryList"]["member"] !== undefined) {
        const wrappedItem = output["PlatformSummaryList"]["member"] instanceof Array
            ? output["PlatformSummaryList"]["member"]
            : [output["PlatformSummaryList"]["member"]];
        contents.PlatformSummaryList = deserializeAws_queryPlatformSummaryList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListener = (output, context) => {
    let contents = {
        __type: "Listener",
        Port: undefined,
        Protocol: undefined
    };
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    return contents;
};
const deserializeAws_queryLoadAverage = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(parseFloat(entry));
    });
    return contents;
};
const deserializeAws_queryLoadBalancer = (output, context) => {
    let contents = {
        __type: "LoadBalancer",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescription = (output, context) => {
    let contents = {
        __type: "LoadBalancerDescription",
        Domain: undefined,
        Listeners: undefined,
        LoadBalancerName: undefined
    };
    if (output["Domain"] !== undefined) {
        contents.Domain = output["Domain"];
    }
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined &&
        output["Listeners"]["member"] !== undefined) {
        const wrappedItem = output["Listeners"]["member"] instanceof Array
            ? output["Listeners"]["member"]
            : [output["Listeners"]["member"]];
        contents.Listeners = deserializeAws_queryLoadBalancerListenersDescription(wrappedItem, context);
    }
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancer(entry, context));
    });
    return contents;
};
const deserializeAws_queryLoadBalancerListenersDescription = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryListener(entry, context));
    });
    return contents;
};
const deserializeAws_queryManagedAction = (output, context) => {
    let contents = {
        __type: "ManagedAction",
        ActionDescription: undefined,
        ActionId: undefined,
        ActionType: undefined,
        Status: undefined,
        WindowStartTime: undefined
    };
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["WindowStartTime"] !== undefined) {
        contents.WindowStartTime = new Date(output["WindowStartTime"]);
    }
    return contents;
};
const deserializeAws_queryManagedActionHistoryItem = (output, context) => {
    let contents = {
        __type: "ManagedActionHistoryItem",
        ActionDescription: undefined,
        ActionId: undefined,
        ActionType: undefined,
        ExecutedTime: undefined,
        FailureDescription: undefined,
        FailureType: undefined,
        FinishedTime: undefined,
        Status: undefined
    };
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["ExecutedTime"] !== undefined) {
        contents.ExecutedTime = new Date(output["ExecutedTime"]);
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    if (output["FailureType"] !== undefined) {
        contents.FailureType = output["FailureType"];
    }
    if (output["FinishedTime"] !== undefined) {
        contents.FinishedTime = new Date(output["FinishedTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryManagedActionHistoryItems = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryManagedActionHistoryItem(entry, context));
    });
    return contents;
};
const deserializeAws_queryManagedActionInvalidStateException = (output, context) => {
    let contents = {
        __type: "ManagedActionInvalidStateException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryManagedActions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryManagedAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryMaxAgeRule = (output, context) => {
    let contents = {
        __type: "MaxAgeRule",
        DeleteSourceFromS3: undefined,
        Enabled: undefined,
        MaxAgeInDays: undefined
    };
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxAgeInDays"] !== undefined) {
        contents.MaxAgeInDays = parseInt(output["MaxAgeInDays"]);
    }
    return contents;
};
const deserializeAws_queryMaxCountRule = (output, context) => {
    let contents = {
        __type: "MaxCountRule",
        DeleteSourceFromS3: undefined,
        Enabled: undefined,
        MaxCount: undefined
    };
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxCount"] !== undefined) {
        contents.MaxCount = parseInt(output["MaxCount"]);
    }
    return contents;
};
const deserializeAws_queryOperationInProgressException = (output, context) => {
    let contents = {
        __type: "OperationInProgressException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptionRestrictionRegex = (output, context) => {
    let contents = {
        __type: "OptionRestrictionRegex",
        Label: undefined,
        Pattern: undefined
    };
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output["Pattern"] !== undefined) {
        contents.Pattern = output["Pattern"];
    }
    return contents;
};
const deserializeAws_queryPlatformDescription = (output, context) => {
    let contents = {
        __type: "PlatformDescription",
        CustomAmiList: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Description: undefined,
        Frameworks: undefined,
        Maintainer: undefined,
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        PlatformArn: undefined,
        PlatformCategory: undefined,
        PlatformName: undefined,
        PlatformOwner: undefined,
        PlatformStatus: undefined,
        PlatformVersion: undefined,
        ProgrammingLanguages: undefined,
        SolutionStackName: undefined,
        SupportedAddonList: undefined,
        SupportedTierList: undefined
    };
    if (output.CustomAmiList === "") {
        contents.CustomAmiList = [];
    }
    if (output["CustomAmiList"] !== undefined &&
        output["CustomAmiList"]["member"] !== undefined) {
        const wrappedItem = output["CustomAmiList"]["member"] instanceof Array
            ? output["CustomAmiList"]["member"]
            : [output["CustomAmiList"]["member"]];
        contents.CustomAmiList = deserializeAws_queryCustomAmiList(wrappedItem, context);
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.Frameworks === "") {
        contents.Frameworks = [];
    }
    if (output["Frameworks"] !== undefined &&
        output["Frameworks"]["member"] !== undefined) {
        const wrappedItem = output["Frameworks"]["member"] instanceof Array
            ? output["Frameworks"]["member"]
            : [output["Frameworks"]["member"]];
        contents.Frameworks = deserializeAws_queryPlatformFrameworks(wrappedItem, context);
    }
    if (output["Maintainer"] !== undefined) {
        contents.Maintainer = output["Maintainer"];
    }
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["PlatformName"] !== undefined) {
        contents.PlatformName = output["PlatformName"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output["PlatformVersion"] !== undefined) {
        contents.PlatformVersion = output["PlatformVersion"];
    }
    if (output.ProgrammingLanguages === "") {
        contents.ProgrammingLanguages = [];
    }
    if (output["ProgrammingLanguages"] !== undefined &&
        output["ProgrammingLanguages"]["member"] !== undefined) {
        const wrappedItem = output["ProgrammingLanguages"]["member"] instanceof Array
            ? output["ProgrammingLanguages"]["member"]
            : [output["ProgrammingLanguages"]["member"]];
        contents.ProgrammingLanguages = deserializeAws_queryPlatformProgrammingLanguages(wrappedItem, context);
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined &&
        output["SupportedAddonList"]["member"] !== undefined) {
        const wrappedItem = output["SupportedAddonList"]["member"] instanceof Array
            ? output["SupportedAddonList"]["member"]
            : [output["SupportedAddonList"]["member"]];
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(wrappedItem, context);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined &&
        output["SupportedTierList"]["member"] !== undefined) {
        const wrappedItem = output["SupportedTierList"]["member"] instanceof Array
            ? output["SupportedTierList"]["member"]
            : [output["SupportedTierList"]["member"]];
        contents.SupportedTierList = deserializeAws_querySupportedTierList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPlatformFramework = (output, context) => {
    let contents = {
        __type: "PlatformFramework",
        Name: undefined,
        Version: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryPlatformFrameworks = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPlatformFramework(entry, context));
    });
    return contents;
};
const deserializeAws_queryPlatformProgrammingLanguage = (output, context) => {
    let contents = {
        __type: "PlatformProgrammingLanguage",
        Name: undefined,
        Version: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryPlatformProgrammingLanguages = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPlatformProgrammingLanguage(entry, context));
    });
    return contents;
};
const deserializeAws_queryPlatformSummary = (output, context) => {
    let contents = {
        __type: "PlatformSummary",
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        PlatformArn: undefined,
        PlatformCategory: undefined,
        PlatformOwner: undefined,
        PlatformStatus: undefined,
        SupportedAddonList: undefined,
        SupportedTierList: undefined
    };
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined &&
        output["SupportedAddonList"]["member"] !== undefined) {
        const wrappedItem = output["SupportedAddonList"]["member"] instanceof Array
            ? output["SupportedAddonList"]["member"]
            : [output["SupportedAddonList"]["member"]];
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(wrappedItem, context);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined &&
        output["SupportedTierList"]["member"] !== undefined) {
        const wrappedItem = output["SupportedTierList"]["member"] instanceof Array
            ? output["SupportedTierList"]["member"]
            : [output["SupportedTierList"]["member"]];
        contents.SupportedTierList = deserializeAws_querySupportedTierList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPlatformSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPlatformSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryPlatformVersionStillReferencedException = (output, context) => {
    let contents = {
        __type: "PlatformVersionStillReferencedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryQueue = (output, context) => {
    let contents = {
        __type: "Queue",
        Name: undefined,
        URL: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["URL"] !== undefined) {
        contents.URL = output["URL"];
    }
    return contents;
};
const deserializeAws_queryQueueList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryQueue(entry, context));
    });
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceQuota = (output, context) => {
    let contents = {
        __type: "ResourceQuota",
        Maximum: undefined
    };
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseInt(output["Maximum"]);
    }
    return contents;
};
const deserializeAws_queryResourceQuotas = (output, context) => {
    let contents = {
        __type: "ResourceQuotas",
        ApplicationQuota: undefined,
        ApplicationVersionQuota: undefined,
        ConfigurationTemplateQuota: undefined,
        CustomPlatformQuota: undefined,
        EnvironmentQuota: undefined
    };
    if (output["ApplicationQuota"] !== undefined) {
        contents.ApplicationQuota = deserializeAws_queryResourceQuota(output["ApplicationQuota"], context);
    }
    if (output["ApplicationVersionQuota"] !== undefined) {
        contents.ApplicationVersionQuota = deserializeAws_queryResourceQuota(output["ApplicationVersionQuota"], context);
    }
    if (output["ConfigurationTemplateQuota"] !== undefined) {
        contents.ConfigurationTemplateQuota = deserializeAws_queryResourceQuota(output["ConfigurationTemplateQuota"], context);
    }
    if (output["CustomPlatformQuota"] !== undefined) {
        contents.CustomPlatformQuota = deserializeAws_queryResourceQuota(output["CustomPlatformQuota"], context);
    }
    if (output["EnvironmentQuota"] !== undefined) {
        contents.EnvironmentQuota = deserializeAws_queryResourceQuota(output["EnvironmentQuota"], context);
    }
    return contents;
};
const deserializeAws_queryResourceTagsDescriptionMessage = (output, context) => {
    let contents = {
        __type: "ResourceTagsDescriptionMessage",
        ResourceArn: undefined,
        ResourceTags: undefined
    };
    if (output["ResourceArn"] !== undefined) {
        contents.ResourceArn = output["ResourceArn"];
    }
    if (output.ResourceTags === "") {
        contents.ResourceTags = [];
    }
    if (output["ResourceTags"] !== undefined &&
        output["ResourceTags"]["member"] !== undefined) {
        const wrappedItem = output["ResourceTags"]["member"] instanceof Array
            ? output["ResourceTags"]["member"]
            : [output["ResourceTags"]["member"]];
        contents.ResourceTags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryResourceTypeNotSupportedException = (output, context) => {
    let contents = {
        __type: "ResourceTypeNotSupportedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRetrieveEnvironmentInfoResultMessage = (output, context) => {
    let contents = {
        __type: "RetrieveEnvironmentInfoResultMessage",
        EnvironmentInfo: undefined
    };
    if (output.EnvironmentInfo === "") {
        contents.EnvironmentInfo = [];
    }
    if (output["EnvironmentInfo"] !== undefined &&
        output["EnvironmentInfo"]["member"] !== undefined) {
        const wrappedItem = output["EnvironmentInfo"]["member"] instanceof Array
            ? output["EnvironmentInfo"]["member"]
            : [output["EnvironmentInfo"]["member"]];
        contents.EnvironmentInfo = deserializeAws_queryEnvironmentInfoDescriptionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryS3Location = (output, context) => {
    let contents = {
        __type: "S3Location",
        S3Bucket: undefined,
        S3Key: undefined
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    if (output["S3Key"] !== undefined) {
        contents.S3Key = output["S3Key"];
    }
    return contents;
};
const deserializeAws_queryS3LocationNotInServiceRegionException = (output, context) => {
    let contents = {
        __type: "S3LocationNotInServiceRegionException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryS3SubscriptionRequiredException = (output, context) => {
    let contents = {
        __type: "S3SubscriptionRequiredException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySingleInstanceHealth = (output, context) => {
    let contents = {
        __type: "SingleInstanceHealth",
        ApplicationMetrics: undefined,
        AvailabilityZone: undefined,
        Causes: undefined,
        Color: undefined,
        Deployment: undefined,
        HealthStatus: undefined,
        InstanceId: undefined,
        InstanceType: undefined,
        LaunchedAt: undefined,
        System: undefined
    };
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined &&
        output["Causes"]["member"] !== undefined) {
        const wrappedItem = output["Causes"]["member"] instanceof Array
            ? output["Causes"]["member"]
            : [output["Causes"]["member"]];
        contents.Causes = deserializeAws_queryCauses(wrappedItem, context);
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output["Deployment"] !== undefined) {
        contents.Deployment = deserializeAws_queryDeployment(output["Deployment"], context);
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    if (output["LaunchedAt"] !== undefined) {
        contents.LaunchedAt = new Date(output["LaunchedAt"]);
    }
    if (output["System"] !== undefined) {
        contents.System = deserializeAws_querySystemStatus(output["System"], context);
    }
    return contents;
};
const deserializeAws_querySolutionStackDescription = (output, context) => {
    let contents = {
        __type: "SolutionStackDescription",
        PermittedFileTypes: undefined,
        SolutionStackName: undefined
    };
    if (output.PermittedFileTypes === "") {
        contents.PermittedFileTypes = [];
    }
    if (output["PermittedFileTypes"] !== undefined &&
        output["PermittedFileTypes"]["member"] !== undefined) {
        const wrappedItem = output["PermittedFileTypes"]["member"] instanceof Array
            ? output["PermittedFileTypes"]["member"]
            : [output["PermittedFileTypes"]["member"]];
        contents.PermittedFileTypes = deserializeAws_querySolutionStackFileTypeList(wrappedItem, context);
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    return contents;
};
const deserializeAws_querySolutionStackFileTypeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySourceBuildInformation = (output, context) => {
    let contents = {
        __type: "SourceBuildInformation",
        SourceLocation: undefined,
        SourceRepository: undefined,
        SourceType: undefined
    };
    if (output["SourceLocation"] !== undefined) {
        contents.SourceLocation = output["SourceLocation"];
    }
    if (output["SourceRepository"] !== undefined) {
        contents.SourceRepository = output["SourceRepository"];
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    return contents;
};
const deserializeAws_querySourceBundleDeletionException = (output, context) => {
    let contents = {
        __type: "SourceBundleDeletionException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStatusCodes = (output, context) => {
    let contents = {
        __type: "StatusCodes",
        Status2xx: undefined,
        Status3xx: undefined,
        Status4xx: undefined,
        Status5xx: undefined
    };
    if (output["Status2xx"] !== undefined) {
        contents.Status2xx = parseInt(output["Status2xx"]);
    }
    if (output["Status3xx"] !== undefined) {
        contents.Status3xx = parseInt(output["Status3xx"]);
    }
    if (output["Status4xx"] !== undefined) {
        contents.Status4xx = parseInt(output["Status4xx"]);
    }
    if (output["Status5xx"] !== undefined) {
        contents.Status5xx = parseInt(output["Status5xx"]);
    }
    return contents;
};
const deserializeAws_querySupportedAddonList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySupportedTierList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySystemStatus = (output, context) => {
    let contents = {
        __type: "SystemStatus",
        CPUUtilization: undefined,
        LoadAverage: undefined
    };
    if (output["CPUUtilization"] !== undefined) {
        contents.CPUUtilization = deserializeAws_queryCPUUtilization(output["CPUUtilization"], context);
    }
    if (output.LoadAverage === "") {
        contents.LoadAverage = [];
    }
    if (output["LoadAverage"] !== undefined &&
        output["LoadAverage"]["member"] !== undefined) {
        const wrappedItem = output["LoadAverage"]["member"] instanceof Array
            ? output["LoadAverage"]["member"]
            : [output["LoadAverage"]["member"]];
        contents.LoadAverage = deserializeAws_queryLoadAverage(wrappedItem, context);
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
const deserializeAws_queryTagList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_queryTooManyApplicationVersionsException = (output, context) => {
    let contents = {
        __type: "TooManyApplicationVersionsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyApplicationsException = (output, context) => {
    let contents = {
        __type: "TooManyApplicationsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyBucketsException = (output, context) => {
    let contents = {
        __type: "TooManyBucketsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyConfigurationTemplatesException = (output, context) => {
    let contents = {
        __type: "TooManyConfigurationTemplatesException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyEnvironmentsException = (output, context) => {
    let contents = {
        __type: "TooManyEnvironmentsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyPlatformsException = (output, context) => {
    let contents = {
        __type: "TooManyPlatformsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTrigger = (output, context) => {
    let contents = {
        __type: "Trigger",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryTriggerList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTrigger(entry, context));
    });
    return contents;
};
const deserializeAws_queryValidationMessage = (output, context) => {
    let contents = {
        __type: "ValidationMessage",
        Message: undefined,
        Namespace: undefined,
        OptionName: undefined,
        Severity: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
const deserializeAws_queryValidationMessagesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryValidationMessage(entry, context));
    });
    return contents;
};
const deserializeAws_queryVersionLabelsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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