"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchDeleteBuildsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.BatchDeleteBuilds";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteBuildsCommand = serializeAws_json1_1BatchDeleteBuildsCommand;
async function serializeAws_json1_1BatchGetBuildsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.BatchGetBuilds";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetBuildsCommand = serializeAws_json1_1BatchGetBuildsCommand;
async function serializeAws_json1_1BatchGetProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.BatchGetProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetProjectsCommand = serializeAws_json1_1BatchGetProjectsCommand;
async function serializeAws_json1_1BatchGetReportGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.BatchGetReportGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetReportGroupsCommand = serializeAws_json1_1BatchGetReportGroupsCommand;
async function serializeAws_json1_1BatchGetReportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.BatchGetReports";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetReportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetReportsCommand = serializeAws_json1_1BatchGetReportsCommand;
async function serializeAws_json1_1CreateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.CreateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
async function serializeAws_json1_1CreateReportGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.CreateReportGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateReportGroupCommand = serializeAws_json1_1CreateReportGroupCommand;
async function serializeAws_json1_1CreateWebhookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.CreateWebhook";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWebhookCommand = serializeAws_json1_1CreateWebhookCommand;
async function serializeAws_json1_1DeleteProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
async function serializeAws_json1_1DeleteReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteReport";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReportCommand = serializeAws_json1_1DeleteReportCommand;
async function serializeAws_json1_1DeleteReportGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteReportGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReportGroupCommand = serializeAws_json1_1DeleteReportGroupCommand;
async function serializeAws_json1_1DeleteResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
async function serializeAws_json1_1DeleteSourceCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteSourceCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSourceCredentialsCommand = serializeAws_json1_1DeleteSourceCredentialsCommand;
async function serializeAws_json1_1DeleteWebhookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DeleteWebhook";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWebhookCommand = serializeAws_json1_1DeleteWebhookCommand;
async function serializeAws_json1_1DescribeTestCasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.DescribeTestCases";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTestCasesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTestCasesCommand = serializeAws_json1_1DescribeTestCasesCommand;
async function serializeAws_json1_1GetResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.GetResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
async function serializeAws_json1_1ImportSourceCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ImportSourceCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportSourceCredentialsCommand = serializeAws_json1_1ImportSourceCredentialsCommand;
async function serializeAws_json1_1InvalidateProjectCacheCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.InvalidateProjectCache";
    let body;
    body = JSON.stringify(serializeAws_json1_1InvalidateProjectCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InvalidateProjectCacheCommand = serializeAws_json1_1InvalidateProjectCacheCommand;
async function serializeAws_json1_1ListBuildsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListBuilds";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBuildsCommand = serializeAws_json1_1ListBuildsCommand;
async function serializeAws_json1_1ListBuildsForProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListBuildsForProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsForProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBuildsForProjectCommand = serializeAws_json1_1ListBuildsForProjectCommand;
async function serializeAws_json1_1ListCuratedEnvironmentImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListCuratedEnvironmentImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCuratedEnvironmentImagesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCuratedEnvironmentImagesCommand = serializeAws_json1_1ListCuratedEnvironmentImagesCommand;
async function serializeAws_json1_1ListProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
async function serializeAws_json1_1ListReportGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListReportGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListReportGroupsCommand = serializeAws_json1_1ListReportGroupsCommand;
async function serializeAws_json1_1ListReportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListReports";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListReportsCommand = serializeAws_json1_1ListReportsCommand;
async function serializeAws_json1_1ListReportsForReportGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListReportsForReportGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportsForReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListReportsForReportGroupCommand = serializeAws_json1_1ListReportsForReportGroupCommand;
async function serializeAws_json1_1ListSharedProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListSharedProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSharedProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSharedProjectsCommand = serializeAws_json1_1ListSharedProjectsCommand;
async function serializeAws_json1_1ListSharedReportGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListSharedReportGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSharedReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSharedReportGroupsCommand = serializeAws_json1_1ListSharedReportGroupsCommand;
async function serializeAws_json1_1ListSourceCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.ListSourceCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSourceCredentialsCommand = serializeAws_json1_1ListSourceCredentialsCommand;
async function serializeAws_json1_1PutResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.PutResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
async function serializeAws_json1_1StartBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.StartBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartBuildCommand = serializeAws_json1_1StartBuildCommand;
async function serializeAws_json1_1StopBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.StopBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopBuildCommand = serializeAws_json1_1StopBuildCommand;
async function serializeAws_json1_1UpdateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.UpdateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
async function serializeAws_json1_1UpdateReportGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.UpdateReportGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateReportGroupCommand = serializeAws_json1_1UpdateReportGroupCommand;
async function serializeAws_json1_1UpdateWebhookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeBuild_20161006.UpdateWebhook";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWebhookCommand = serializeAws_json1_1UpdateWebhookCommand;
async function deserializeAws_json1_1BatchDeleteBuildsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteBuildsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteBuildsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteBuildsCommand = deserializeAws_json1_1BatchDeleteBuildsCommand;
async function deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetBuildsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetBuildsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetBuildsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetBuildsCommand = deserializeAws_json1_1BatchGetBuildsCommand;
async function deserializeAws_json1_1BatchGetBuildsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetProjectsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetProjectsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetProjectsCommand = deserializeAws_json1_1BatchGetProjectsCommand;
async function deserializeAws_json1_1BatchGetProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetReportGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetReportGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetReportGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetReportGroupsCommand = deserializeAws_json1_1BatchGetReportGroupsCommand;
async function deserializeAws_json1_1BatchGetReportGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetReportsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetReportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetReportsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetReportsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetReportsCommand = deserializeAws_json1_1BatchGetReportsCommand;
async function deserializeAws_json1_1BatchGetReportsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProjectOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
async function deserializeAws_json1_1CreateProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateReportGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReportGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReportGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateReportGroupCommand = deserializeAws_json1_1CreateReportGroupCommand;
async function deserializeAws_json1_1CreateReportGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateWebhookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWebhookOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWebhookOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWebhookCommand = deserializeAws_json1_1CreateWebhookCommand;
async function deserializeAws_json1_1CreateWebhookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProjectOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProjectOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProjectCommand = deserializeAws_json1_1DeleteProjectCommand;
async function deserializeAws_json1_1DeleteProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReportOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReportCommand = deserializeAws_json1_1DeleteReportCommand;
async function deserializeAws_json1_1DeleteReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteReportGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReportGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReportGroupCommand = deserializeAws_json1_1DeleteReportGroupCommand;
async function deserializeAws_json1_1DeleteReportGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResourcePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
async function deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSourceCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSourceCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSourceCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSourceCredentialsCommand = deserializeAws_json1_1DeleteSourceCredentialsCommand;
async function deserializeAws_json1_1DeleteSourceCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteWebhookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWebhookOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWebhookCommand = deserializeAws_json1_1DeleteWebhookCommand;
async function deserializeAws_json1_1DeleteWebhookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTestCasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTestCasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTestCasesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTestCasesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTestCasesCommand = deserializeAws_json1_1DescribeTestCasesCommand;
async function deserializeAws_json1_1DescribeTestCasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourcePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
async function deserializeAws_json1_1GetResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ImportSourceCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportSourceCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportSourceCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportSourceCredentialsCommand = deserializeAws_json1_1ImportSourceCredentialsCommand;
async function deserializeAws_json1_1ImportSourceCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1InvalidateProjectCacheCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InvalidateProjectCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InvalidateProjectCacheOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InvalidateProjectCacheOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InvalidateProjectCacheCommand = deserializeAws_json1_1InvalidateProjectCacheCommand;
async function deserializeAws_json1_1InvalidateProjectCacheCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListBuildsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBuildsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBuildsCommand = deserializeAws_json1_1ListBuildsCommand;
async function deserializeAws_json1_1ListBuildsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListBuildsForProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBuildsForProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsForProjectOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBuildsForProjectOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBuildsForProjectCommand = deserializeAws_json1_1ListBuildsForProjectCommand;
async function deserializeAws_json1_1ListBuildsForProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCuratedEnvironmentImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCuratedEnvironmentImagesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCuratedEnvironmentImagesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = deserializeAws_json1_1ListCuratedEnvironmentImagesCommand;
async function deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
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
async function deserializeAws_json1_1ListProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProjectsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProjectsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProjectsCommand = deserializeAws_json1_1ListProjectsCommand;
async function deserializeAws_json1_1ListProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListReportGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReportGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListReportGroupsCommand = deserializeAws_json1_1ListReportGroupsCommand;
async function deserializeAws_json1_1ListReportGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListReportsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListReportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReportsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListReportsCommand = deserializeAws_json1_1ListReportsCommand;
async function deserializeAws_json1_1ListReportsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListReportsForReportGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListReportsForReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportsForReportGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReportsForReportGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListReportsForReportGroupCommand = deserializeAws_json1_1ListReportsForReportGroupCommand;
async function deserializeAws_json1_1ListReportsForReportGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSharedProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSharedProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSharedProjectsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSharedProjectsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSharedProjectsCommand = deserializeAws_json1_1ListSharedProjectsCommand;
async function deserializeAws_json1_1ListSharedProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSharedReportGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSharedReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSharedReportGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSharedReportGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSharedReportGroupsCommand = deserializeAws_json1_1ListSharedReportGroupsCommand;
async function deserializeAws_json1_1ListSharedReportGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSourceCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSourceCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSourceCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSourceCredentialsCommand = deserializeAws_json1_1ListSourceCredentialsCommand;
async function deserializeAws_json1_1ListSourceCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
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
async function deserializeAws_json1_1PutResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResourcePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
async function deserializeAws_json1_1PutResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartBuildOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartBuildOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartBuildCommand = deserializeAws_json1_1StartBuildCommand;
async function deserializeAws_json1_1StartBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopBuildOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopBuildOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopBuildCommand = deserializeAws_json1_1StopBuildCommand;
async function deserializeAws_json1_1StopBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProjectOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProjectOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProjectCommand = deserializeAws_json1_1UpdateProjectCommand;
async function deserializeAws_json1_1UpdateProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateReportGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateReportGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateReportGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateReportGroupCommand = deserializeAws_json1_1UpdateReportGroupCommand;
async function deserializeAws_json1_1UpdateReportGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateWebhookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWebhookOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWebhookOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWebhookCommand = deserializeAws_json1_1UpdateWebhookCommand;
async function deserializeAws_json1_1UpdateWebhookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AccountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountLimitExceededException(body, context);
    const contents = Object.assign({ name: "AccountLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OAuthProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OAuthProviderException(body, context);
    const contents = Object.assign({ name: "OAuthProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchDeleteBuildsInput = (input, context) => {
    const bodyParams = {};
    if (input.ids !== undefined) {
        bodyParams["ids"] = serializeAws_json1_1BuildIds(input.ids, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetBuildsInput = (input, context) => {
    const bodyParams = {};
    if (input.ids !== undefined) {
        bodyParams["ids"] = serializeAws_json1_1BuildIds(input.ids, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetProjectsInput = (input, context) => {
    const bodyParams = {};
    if (input.names !== undefined) {
        bodyParams["names"] = serializeAws_json1_1ProjectNames(input.names, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetReportGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.reportGroupArns !== undefined) {
        bodyParams["reportGroupArns"] = serializeAws_json1_1ReportGroupArns(input.reportGroupArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetReportsInput = (input, context) => {
    const bodyParams = {};
    if (input.reportArns !== undefined) {
        bodyParams["reportArns"] = serializeAws_json1_1ReportArns(input.reportArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BuildIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CloudWatchLogsConfig = (input, context) => {
    const bodyParams = {};
    if (input.groupName !== undefined) {
        bodyParams["groupName"] = input.groupName;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    if (input.streamName !== undefined) {
        bodyParams["streamName"] = input.streamName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProjectInput = (input, context) => {
    const bodyParams = {};
    if (input.artifacts !== undefined) {
        bodyParams["artifacts"] = serializeAws_json1_1ProjectArtifacts(input.artifacts, context);
    }
    if (input.badgeEnabled !== undefined) {
        bodyParams["badgeEnabled"] = input.badgeEnabled;
    }
    if (input.cache !== undefined) {
        bodyParams["cache"] = serializeAws_json1_1ProjectCache(input.cache, context);
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.encryptionKey !== undefined) {
        bodyParams["encryptionKey"] = input.encryptionKey;
    }
    if (input.environment !== undefined) {
        bodyParams["environment"] = serializeAws_json1_1ProjectEnvironment(input.environment, context);
    }
    if (input.logsConfig !== undefined) {
        bodyParams["logsConfig"] = serializeAws_json1_1LogsConfig(input.logsConfig, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.queuedTimeoutInMinutes !== undefined) {
        bodyParams["queuedTimeoutInMinutes"] = input.queuedTimeoutInMinutes;
    }
    if (input.secondaryArtifacts !== undefined) {
        bodyParams["secondaryArtifacts"] = serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context);
    }
    if (input.secondarySourceVersions !== undefined) {
        bodyParams["secondarySourceVersions"] = serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context);
    }
    if (input.secondarySources !== undefined) {
        bodyParams["secondarySources"] = serializeAws_json1_1ProjectSources(input.secondarySources, context);
    }
    if (input.serviceRole !== undefined) {
        bodyParams["serviceRole"] = input.serviceRole;
    }
    if (input.source !== undefined) {
        bodyParams["source"] = serializeAws_json1_1ProjectSource(input.source, context);
    }
    if (input.sourceVersion !== undefined) {
        bodyParams["sourceVersion"] = input.sourceVersion;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.timeoutInMinutes !== undefined) {
        bodyParams["timeoutInMinutes"] = input.timeoutInMinutes;
    }
    if (input.vpcConfig !== undefined) {
        bodyParams["vpcConfig"] = serializeAws_json1_1VpcConfig(input.vpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateReportGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.exportConfig !== undefined) {
        bodyParams["exportConfig"] = serializeAws_json1_1ReportExportConfig(input.exportConfig, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWebhookInput = (input, context) => {
    const bodyParams = {};
    if (input.branchFilter !== undefined) {
        bodyParams["branchFilter"] = input.branchFilter;
    }
    if (input.filterGroups !== undefined) {
        bodyParams["filterGroups"] = serializeAws_json1_1FilterGroups(input.filterGroups, context);
    }
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProjectInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReportGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReportInput = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourcePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSourceCredentialsInput = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWebhookInput = (input, context) => {
    const bodyParams = {};
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTestCasesInput = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1TestCaseFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.reportArn !== undefined) {
        bodyParams["reportArn"] = input.reportArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentVariable = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EnvironmentVariable(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterGroup = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1WebhookFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterGroups = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FilterGroup(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetResourcePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GitSubmodulesConfig = (input, context) => {
    const bodyParams = {};
    if (input.fetchSubmodules !== undefined) {
        bodyParams["fetchSubmodules"] = input.fetchSubmodules;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportSourceCredentialsInput = (input, context) => {
    const bodyParams = {};
    if (input.authType !== undefined) {
        bodyParams["authType"] = input.authType;
    }
    if (input.serverType !== undefined) {
        bodyParams["serverType"] = input.serverType;
    }
    if (input.shouldOverwrite !== undefined) {
        bodyParams["shouldOverwrite"] = input.shouldOverwrite;
    }
    if (input.token !== undefined) {
        bodyParams["token"] = input.token;
    }
    if (input.username !== undefined) {
        bodyParams["username"] = input.username;
    }
    return bodyParams;
};
const serializeAws_json1_1InvalidateProjectCacheInput = (input, context) => {
    const bodyParams = {};
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBuildsForProjectInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBuildsInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCuratedEnvironmentImagesInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ListProjectsInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListReportGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListReportsForReportGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1ReportFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.reportGroupArn !== undefined) {
        bodyParams["reportGroupArn"] = input.reportGroupArn;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListReportsInput = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1ReportFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSharedProjectsInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSharedReportGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSourceCredentialsInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1LogsConfig = (input, context) => {
    const bodyParams = {};
    if (input.cloudWatchLogs !== undefined) {
        bodyParams["cloudWatchLogs"] = serializeAws_json1_1CloudWatchLogsConfig(input.cloudWatchLogs, context);
    }
    if (input.s3Logs !== undefined) {
        bodyParams["s3Logs"] = serializeAws_json1_1S3LogsConfig(input.s3Logs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectArtifacts = (input, context) => {
    const bodyParams = {};
    if (input.artifactIdentifier !== undefined) {
        bodyParams["artifactIdentifier"] = input.artifactIdentifier;
    }
    if (input.encryptionDisabled !== undefined) {
        bodyParams["encryptionDisabled"] = input.encryptionDisabled;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.namespaceType !== undefined) {
        bodyParams["namespaceType"] = input.namespaceType;
    }
    if (input.overrideArtifactName !== undefined) {
        bodyParams["overrideArtifactName"] = input.overrideArtifactName;
    }
    if (input.packaging !== undefined) {
        bodyParams["packaging"] = input.packaging;
    }
    if (input.path !== undefined) {
        bodyParams["path"] = input.path;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectArtifactsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProjectArtifacts(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProjectCache = (input, context) => {
    const bodyParams = {};
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.modes !== undefined) {
        bodyParams["modes"] = serializeAws_json1_1ProjectCacheModes(input.modes, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectCacheModes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ProjectEnvironment = (input, context) => {
    const bodyParams = {};
    if (input.certificate !== undefined) {
        bodyParams["certificate"] = input.certificate;
    }
    if (input.computeType !== undefined) {
        bodyParams["computeType"] = input.computeType;
    }
    if (input.environmentVariables !== undefined) {
        bodyParams["environmentVariables"] = serializeAws_json1_1EnvironmentVariables(input.environmentVariables, context);
    }
    if (input.image !== undefined) {
        bodyParams["image"] = input.image;
    }
    if (input.imagePullCredentialsType !== undefined) {
        bodyParams["imagePullCredentialsType"] = input.imagePullCredentialsType;
    }
    if (input.privilegedMode !== undefined) {
        bodyParams["privilegedMode"] = input.privilegedMode;
    }
    if (input.registryCredential !== undefined) {
        bodyParams["registryCredential"] = serializeAws_json1_1RegistryCredential(input.registryCredential, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ProjectSecondarySourceVersions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProjectSourceVersion(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProjectSource = (input, context) => {
    const bodyParams = {};
    if (input.auth !== undefined) {
        bodyParams["auth"] = serializeAws_json1_1SourceAuth(input.auth, context);
    }
    if (input.buildspec !== undefined) {
        bodyParams["buildspec"] = input.buildspec;
    }
    if (input.gitCloneDepth !== undefined) {
        bodyParams["gitCloneDepth"] = input.gitCloneDepth;
    }
    if (input.gitSubmodulesConfig !== undefined) {
        bodyParams["gitSubmodulesConfig"] = serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfig, context);
    }
    if (input.insecureSsl !== undefined) {
        bodyParams["insecureSsl"] = input.insecureSsl;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.reportBuildStatus !== undefined) {
        bodyParams["reportBuildStatus"] = input.reportBuildStatus;
    }
    if (input.sourceIdentifier !== undefined) {
        bodyParams["sourceIdentifier"] = input.sourceIdentifier;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectSourceVersion = (input, context) => {
    const bodyParams = {};
    if (input.sourceIdentifier !== undefined) {
        bodyParams["sourceIdentifier"] = input.sourceIdentifier;
    }
    if (input.sourceVersion !== undefined) {
        bodyParams["sourceVersion"] = input.sourceVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1ProjectSources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProjectSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutResourcePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.policy !== undefined) {
        bodyParams["policy"] = input.policy;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RegistryCredential = (input, context) => {
    const bodyParams = {};
    if (input.credential !== undefined) {
        bodyParams["credential"] = input.credential;
    }
    if (input.credentialProvider !== undefined) {
        bodyParams["credentialProvider"] = input.credentialProvider;
    }
    return bodyParams;
};
const serializeAws_json1_1ReportArns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ReportExportConfig = (input, context) => {
    const bodyParams = {};
    if (input.exportConfigType !== undefined) {
        bodyParams["exportConfigType"] = input.exportConfigType;
    }
    if (input.s3Destination !== undefined) {
        bodyParams["s3Destination"] = serializeAws_json1_1S3ReportExportConfig(input.s3Destination, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ReportFilter = (input, context) => {
    const bodyParams = {};
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ReportGroupArns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1S3LogsConfig = (input, context) => {
    const bodyParams = {};
    if (input.encryptionDisabled !== undefined) {
        bodyParams["encryptionDisabled"] = input.encryptionDisabled;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ReportExportConfig = (input, context) => {
    const bodyParams = {};
    if (input.bucket !== undefined) {
        bodyParams["bucket"] = input.bucket;
    }
    if (input.encryptionDisabled !== undefined) {
        bodyParams["encryptionDisabled"] = input.encryptionDisabled;
    }
    if (input.encryptionKey !== undefined) {
        bodyParams["encryptionKey"] = input.encryptionKey;
    }
    if (input.packaging !== undefined) {
        bodyParams["packaging"] = input.packaging;
    }
    if (input.path !== undefined) {
        bodyParams["path"] = input.path;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SourceAuth = (input, context) => {
    const bodyParams = {};
    if (input.resource !== undefined) {
        bodyParams["resource"] = input.resource;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1StartBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.artifactsOverride !== undefined) {
        bodyParams["artifactsOverride"] = serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context);
    }
    if (input.buildspecOverride !== undefined) {
        bodyParams["buildspecOverride"] = input.buildspecOverride;
    }
    if (input.cacheOverride !== undefined) {
        bodyParams["cacheOverride"] = serializeAws_json1_1ProjectCache(input.cacheOverride, context);
    }
    if (input.certificateOverride !== undefined) {
        bodyParams["certificateOverride"] = input.certificateOverride;
    }
    if (input.computeTypeOverride !== undefined) {
        bodyParams["computeTypeOverride"] = input.computeTypeOverride;
    }
    if (input.encryptionKeyOverride !== undefined) {
        bodyParams["encryptionKeyOverride"] = input.encryptionKeyOverride;
    }
    if (input.environmentTypeOverride !== undefined) {
        bodyParams["environmentTypeOverride"] = input.environmentTypeOverride;
    }
    if (input.environmentVariablesOverride !== undefined) {
        bodyParams["environmentVariablesOverride"] = serializeAws_json1_1EnvironmentVariables(input.environmentVariablesOverride, context);
    }
    if (input.gitCloneDepthOverride !== undefined) {
        bodyParams["gitCloneDepthOverride"] = input.gitCloneDepthOverride;
    }
    if (input.gitSubmodulesConfigOverride !== undefined) {
        bodyParams["gitSubmodulesConfigOverride"] = serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context);
    }
    if (input.idempotencyToken !== undefined) {
        bodyParams["idempotencyToken"] = input.idempotencyToken;
    }
    if (input.imageOverride !== undefined) {
        bodyParams["imageOverride"] = input.imageOverride;
    }
    if (input.imagePullCredentialsTypeOverride !== undefined) {
        bodyParams["imagePullCredentialsTypeOverride"] =
            input.imagePullCredentialsTypeOverride;
    }
    if (input.insecureSslOverride !== undefined) {
        bodyParams["insecureSslOverride"] = input.insecureSslOverride;
    }
    if (input.logsConfigOverride !== undefined) {
        bodyParams["logsConfigOverride"] = serializeAws_json1_1LogsConfig(input.logsConfigOverride, context);
    }
    if (input.privilegedModeOverride !== undefined) {
        bodyParams["privilegedModeOverride"] = input.privilegedModeOverride;
    }
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    if (input.queuedTimeoutInMinutesOverride !== undefined) {
        bodyParams["queuedTimeoutInMinutesOverride"] =
            input.queuedTimeoutInMinutesOverride;
    }
    if (input.registryCredentialOverride !== undefined) {
        bodyParams["registryCredentialOverride"] = serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context);
    }
    if (input.reportBuildStatusOverride !== undefined) {
        bodyParams["reportBuildStatusOverride"] = input.reportBuildStatusOverride;
    }
    if (input.secondaryArtifactsOverride !== undefined) {
        bodyParams["secondaryArtifactsOverride"] = serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context);
    }
    if (input.secondarySourcesOverride !== undefined) {
        bodyParams["secondarySourcesOverride"] = serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context);
    }
    if (input.secondarySourcesVersionOverride !== undefined) {
        bodyParams["secondarySourcesVersionOverride"] = serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourcesVersionOverride, context);
    }
    if (input.serviceRoleOverride !== undefined) {
        bodyParams["serviceRoleOverride"] = input.serviceRoleOverride;
    }
    if (input.sourceAuthOverride !== undefined) {
        bodyParams["sourceAuthOverride"] = serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context);
    }
    if (input.sourceLocationOverride !== undefined) {
        bodyParams["sourceLocationOverride"] = input.sourceLocationOverride;
    }
    if (input.sourceTypeOverride !== undefined) {
        bodyParams["sourceTypeOverride"] = input.sourceTypeOverride;
    }
    if (input.sourceVersion !== undefined) {
        bodyParams["sourceVersion"] = input.sourceVersion;
    }
    if (input.timeoutInMinutesOverride !== undefined) {
        bodyParams["timeoutInMinutesOverride"] = input.timeoutInMinutesOverride;
    }
    return bodyParams;
};
const serializeAws_json1_1StopBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1Subnets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TestCaseFilter = (input, context) => {
    const bodyParams = {};
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProjectInput = (input, context) => {
    const bodyParams = {};
    if (input.artifacts !== undefined) {
        bodyParams["artifacts"] = serializeAws_json1_1ProjectArtifacts(input.artifacts, context);
    }
    if (input.badgeEnabled !== undefined) {
        bodyParams["badgeEnabled"] = input.badgeEnabled;
    }
    if (input.cache !== undefined) {
        bodyParams["cache"] = serializeAws_json1_1ProjectCache(input.cache, context);
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.encryptionKey !== undefined) {
        bodyParams["encryptionKey"] = input.encryptionKey;
    }
    if (input.environment !== undefined) {
        bodyParams["environment"] = serializeAws_json1_1ProjectEnvironment(input.environment, context);
    }
    if (input.logsConfig !== undefined) {
        bodyParams["logsConfig"] = serializeAws_json1_1LogsConfig(input.logsConfig, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.queuedTimeoutInMinutes !== undefined) {
        bodyParams["queuedTimeoutInMinutes"] = input.queuedTimeoutInMinutes;
    }
    if (input.secondaryArtifacts !== undefined) {
        bodyParams["secondaryArtifacts"] = serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context);
    }
    if (input.secondarySourceVersions !== undefined) {
        bodyParams["secondarySourceVersions"] = serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context);
    }
    if (input.secondarySources !== undefined) {
        bodyParams["secondarySources"] = serializeAws_json1_1ProjectSources(input.secondarySources, context);
    }
    if (input.serviceRole !== undefined) {
        bodyParams["serviceRole"] = input.serviceRole;
    }
    if (input.source !== undefined) {
        bodyParams["source"] = serializeAws_json1_1ProjectSource(input.source, context);
    }
    if (input.sourceVersion !== undefined) {
        bodyParams["sourceVersion"] = input.sourceVersion;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.timeoutInMinutes !== undefined) {
        bodyParams["timeoutInMinutes"] = input.timeoutInMinutes;
    }
    if (input.vpcConfig !== undefined) {
        bodyParams["vpcConfig"] = serializeAws_json1_1VpcConfig(input.vpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateReportGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.exportConfig !== undefined) {
        bodyParams["exportConfig"] = serializeAws_json1_1ReportExportConfig(input.exportConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWebhookInput = (input, context) => {
    const bodyParams = {};
    if (input.branchFilter !== undefined) {
        bodyParams["branchFilter"] = input.branchFilter;
    }
    if (input.filterGroups !== undefined) {
        bodyParams["filterGroups"] = serializeAws_json1_1FilterGroups(input.filterGroups, context);
    }
    if (input.projectName !== undefined) {
        bodyParams["projectName"] = input.projectName;
    }
    if (input.rotateSecret !== undefined) {
        bodyParams["rotateSecret"] = input.rotateSecret;
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfig = (input, context) => {
    const bodyParams = {};
    if (input.securityGroupIds !== undefined) {
        bodyParams["securityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context);
    }
    if (input.subnets !== undefined) {
        bodyParams["subnets"] = serializeAws_json1_1Subnets(input.subnets, context);
    }
    if (input.vpcId !== undefined) {
        bodyParams["vpcId"] = input.vpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1WebhookFilter = (input, context) => {
    const bodyParams = {};
    if (input.excludeMatchedPattern !== undefined) {
        bodyParams["excludeMatchedPattern"] = input.excludeMatchedPattern;
    }
    if (input.pattern !== undefined) {
        bodyParams["pattern"] = input.pattern;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccountLimitExceededException = (output, context) => {
    let contents = {
        __type: "AccountLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteBuildsOutput = (output, context) => {
    let contents = {
        __type: "BatchDeleteBuildsOutput",
        buildsDeleted: undefined,
        buildsNotDeleted: undefined
    };
    if (output.buildsDeleted !== undefined && output.buildsDeleted !== null) {
        contents.buildsDeleted = deserializeAws_json1_1BuildIds(output.buildsDeleted, context);
    }
    if (output.buildsNotDeleted !== undefined &&
        output.buildsNotDeleted !== null) {
        contents.buildsNotDeleted = deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetBuildsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetBuildsOutput",
        builds: undefined,
        buildsNotFound: undefined
    };
    if (output.builds !== undefined && output.builds !== null) {
        contents.builds = deserializeAws_json1_1Builds(output.builds, context);
    }
    if (output.buildsNotFound !== undefined && output.buildsNotFound !== null) {
        contents.buildsNotFound = deserializeAws_json1_1BuildIds(output.buildsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetProjectsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetProjectsOutput",
        projects: undefined,
        projectsNotFound: undefined
    };
    if (output.projects !== undefined && output.projects !== null) {
        contents.projects = deserializeAws_json1_1Projects(output.projects, context);
    }
    if (output.projectsNotFound !== undefined &&
        output.projectsNotFound !== null) {
        contents.projectsNotFound = deserializeAws_json1_1ProjectNames(output.projectsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetReportGroupsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetReportGroupsOutput",
        reportGroups: undefined,
        reportGroupsNotFound: undefined
    };
    if (output.reportGroups !== undefined && output.reportGroups !== null) {
        contents.reportGroups = deserializeAws_json1_1ReportGroups(output.reportGroups, context);
    }
    if (output.reportGroupsNotFound !== undefined &&
        output.reportGroupsNotFound !== null) {
        contents.reportGroupsNotFound = deserializeAws_json1_1ReportGroupArns(output.reportGroupsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetReportsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetReportsOutput",
        reports: undefined,
        reportsNotFound: undefined
    };
    if (output.reports !== undefined && output.reports !== null) {
        contents.reports = deserializeAws_json1_1Reports(output.reports, context);
    }
    if (output.reportsNotFound !== undefined && output.reportsNotFound !== null) {
        contents.reportsNotFound = deserializeAws_json1_1ReportArns(output.reportsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1Build = (output, context) => {
    let contents = {
        __type: "Build",
        arn: undefined,
        artifacts: undefined,
        buildComplete: undefined,
        buildNumber: undefined,
        buildStatus: undefined,
        cache: undefined,
        currentPhase: undefined,
        encryptionKey: undefined,
        endTime: undefined,
        environment: undefined,
        exportedEnvironmentVariables: undefined,
        id: undefined,
        initiator: undefined,
        logs: undefined,
        networkInterface: undefined,
        phases: undefined,
        projectName: undefined,
        queuedTimeoutInMinutes: undefined,
        reportArns: undefined,
        resolvedSourceVersion: undefined,
        secondaryArtifacts: undefined,
        secondarySourceVersions: undefined,
        secondarySources: undefined,
        serviceRole: undefined,
        source: undefined,
        sourceVersion: undefined,
        startTime: undefined,
        timeoutInMinutes: undefined,
        vpcConfig: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.artifacts !== undefined && output.artifacts !== null) {
        contents.artifacts = deserializeAws_json1_1BuildArtifacts(output.artifacts, context);
    }
    if (output.buildComplete !== undefined && output.buildComplete !== null) {
        contents.buildComplete = output.buildComplete;
    }
    if (output.buildNumber !== undefined && output.buildNumber !== null) {
        contents.buildNumber = output.buildNumber;
    }
    if (output.buildStatus !== undefined && output.buildStatus !== null) {
        contents.buildStatus = output.buildStatus;
    }
    if (output.cache !== undefined && output.cache !== null) {
        contents.cache = deserializeAws_json1_1ProjectCache(output.cache, context);
    }
    if (output.currentPhase !== undefined && output.currentPhase !== null) {
        contents.currentPhase = output.currentPhase;
    }
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = output.encryptionKey;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.environment !== undefined && output.environment !== null) {
        contents.environment = deserializeAws_json1_1ProjectEnvironment(output.environment, context);
    }
    if (output.exportedEnvironmentVariables !== undefined &&
        output.exportedEnvironmentVariables !== null) {
        contents.exportedEnvironmentVariables = deserializeAws_json1_1ExportedEnvironmentVariables(output.exportedEnvironmentVariables, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.initiator !== undefined && output.initiator !== null) {
        contents.initiator = output.initiator;
    }
    if (output.logs !== undefined && output.logs !== null) {
        contents.logs = deserializeAws_json1_1LogsLocation(output.logs, context);
    }
    if (output.networkInterface !== undefined &&
        output.networkInterface !== null) {
        contents.networkInterface = deserializeAws_json1_1NetworkInterface(output.networkInterface, context);
    }
    if (output.phases !== undefined && output.phases !== null) {
        contents.phases = deserializeAws_json1_1BuildPhases(output.phases, context);
    }
    if (output.projectName !== undefined && output.projectName !== null) {
        contents.projectName = output.projectName;
    }
    if (output.queuedTimeoutInMinutes !== undefined &&
        output.queuedTimeoutInMinutes !== null) {
        contents.queuedTimeoutInMinutes = output.queuedTimeoutInMinutes;
    }
    if (output.reportArns !== undefined && output.reportArns !== null) {
        contents.reportArns = deserializeAws_json1_1BuildReportArns(output.reportArns, context);
    }
    if (output.resolvedSourceVersion !== undefined &&
        output.resolvedSourceVersion !== null) {
        contents.resolvedSourceVersion = output.resolvedSourceVersion;
    }
    if (output.secondaryArtifacts !== undefined &&
        output.secondaryArtifacts !== null) {
        contents.secondaryArtifacts = deserializeAws_json1_1BuildArtifactsList(output.secondaryArtifacts, context);
    }
    if (output.secondarySourceVersions !== undefined &&
        output.secondarySourceVersions !== null) {
        contents.secondarySourceVersions = deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context);
    }
    if (output.secondarySources !== undefined &&
        output.secondarySources !== null) {
        contents.secondarySources = deserializeAws_json1_1ProjectSources(output.secondarySources, context);
    }
    if (output.serviceRole !== undefined && output.serviceRole !== null) {
        contents.serviceRole = output.serviceRole;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = deserializeAws_json1_1ProjectSource(output.source, context);
    }
    if (output.sourceVersion !== undefined && output.sourceVersion !== null) {
        contents.sourceVersion = output.sourceVersion;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.timeoutInMinutes !== undefined &&
        output.timeoutInMinutes !== null) {
        contents.timeoutInMinutes = output.timeoutInMinutes;
    }
    if (output.vpcConfig !== undefined && output.vpcConfig !== null) {
        contents.vpcConfig = deserializeAws_json1_1VpcConfig(output.vpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1BuildArtifacts = (output, context) => {
    let contents = {
        __type: "BuildArtifacts",
        artifactIdentifier: undefined,
        encryptionDisabled: undefined,
        location: undefined,
        md5sum: undefined,
        overrideArtifactName: undefined,
        sha256sum: undefined
    };
    if (output.artifactIdentifier !== undefined &&
        output.artifactIdentifier !== null) {
        contents.artifactIdentifier = output.artifactIdentifier;
    }
    if (output.encryptionDisabled !== undefined &&
        output.encryptionDisabled !== null) {
        contents.encryptionDisabled = output.encryptionDisabled;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.md5sum !== undefined && output.md5sum !== null) {
        contents.md5sum = output.md5sum;
    }
    if (output.overrideArtifactName !== undefined &&
        output.overrideArtifactName !== null) {
        contents.overrideArtifactName = output.overrideArtifactName;
    }
    if (output.sha256sum !== undefined && output.sha256sum !== null) {
        contents.sha256sum = output.sha256sum;
    }
    return contents;
};
const deserializeAws_json1_1BuildArtifactsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BuildArtifacts(entry, context));
};
const deserializeAws_json1_1BuildIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BuildNotDeleted = (output, context) => {
    let contents = {
        __type: "BuildNotDeleted",
        id: undefined,
        statusCode: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    return contents;
};
const deserializeAws_json1_1BuildPhase = (output, context) => {
    let contents = {
        __type: "BuildPhase",
        contexts: undefined,
        durationInSeconds: undefined,
        endTime: undefined,
        phaseStatus: undefined,
        phaseType: undefined,
        startTime: undefined
    };
    if (output.contexts !== undefined && output.contexts !== null) {
        contents.contexts = deserializeAws_json1_1PhaseContexts(output.contexts, context);
    }
    if (output.durationInSeconds !== undefined &&
        output.durationInSeconds !== null) {
        contents.durationInSeconds = output.durationInSeconds;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.phaseStatus !== undefined && output.phaseStatus !== null) {
        contents.phaseStatus = output.phaseStatus;
    }
    if (output.phaseType !== undefined && output.phaseType !== null) {
        contents.phaseType = output.phaseType;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1BuildPhases = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BuildPhase(entry, context));
};
const deserializeAws_json1_1BuildReportArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Builds = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Build(entry, context));
};
const deserializeAws_json1_1BuildsNotDeleted = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BuildNotDeleted(entry, context));
};
const deserializeAws_json1_1CloudWatchLogsConfig = (output, context) => {
    let contents = {
        __type: "CloudWatchLogsConfig",
        groupName: undefined,
        status: undefined,
        streamName: undefined
    };
    if (output.groupName !== undefined && output.groupName !== null) {
        contents.groupName = output.groupName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.streamName !== undefined && output.streamName !== null) {
        contents.streamName = output.streamName;
    }
    return contents;
};
const deserializeAws_json1_1CreateProjectOutput = (output, context) => {
    let contents = {
        __type: "CreateProjectOutput",
        project: undefined
    };
    if (output.project !== undefined && output.project !== null) {
        contents.project = deserializeAws_json1_1Project(output.project, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateReportGroupOutput = (output, context) => {
    let contents = {
        __type: "CreateReportGroupOutput",
        reportGroup: undefined
    };
    if (output.reportGroup !== undefined && output.reportGroup !== null) {
        contents.reportGroup = deserializeAws_json1_1ReportGroup(output.reportGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateWebhookOutput = (output, context) => {
    let contents = {
        __type: "CreateWebhookOutput",
        webhook: undefined
    };
    if (output.webhook !== undefined && output.webhook !== null) {
        contents.webhook = deserializeAws_json1_1Webhook(output.webhook, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteProjectOutput = (output, context) => {
    let contents = {
        __type: "DeleteProjectOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteReportGroupOutput = (output, context) => {
    let contents = {
        __type: "DeleteReportGroupOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteReportOutput = (output, context) => {
    let contents = {
        __type: "DeleteReportOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteResourcePolicyOutput = (output, context) => {
    let contents = {
        __type: "DeleteResourcePolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSourceCredentialsOutput = (output, context) => {
    let contents = {
        __type: "DeleteSourceCredentialsOutput",
        arn: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteWebhookOutput = (output, context) => {
    let contents = {
        __type: "DeleteWebhookOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeTestCasesOutput = (output, context) => {
    let contents = {
        __type: "DescribeTestCasesOutput",
        nextToken: undefined,
        testCases: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.testCases !== undefined && output.testCases !== null) {
        contents.testCases = deserializeAws_json1_1TestCases(output.testCases, context);
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentImage = (output, context) => {
    let contents = {
        __type: "EnvironmentImage",
        description: undefined,
        name: undefined,
        versions: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.versions !== undefined && output.versions !== null) {
        contents.versions = deserializeAws_json1_1ImageVersions(output.versions, context);
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentImages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentImage(entry, context));
};
const deserializeAws_json1_1EnvironmentLanguage = (output, context) => {
    let contents = {
        __type: "EnvironmentLanguage",
        images: undefined,
        language: undefined
    };
    if (output.images !== undefined && output.images !== null) {
        contents.images = deserializeAws_json1_1EnvironmentImages(output.images, context);
    }
    if (output.language !== undefined && output.language !== null) {
        contents.language = output.language;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentLanguages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentLanguage(entry, context));
};
const deserializeAws_json1_1EnvironmentPlatform = (output, context) => {
    let contents = {
        __type: "EnvironmentPlatform",
        languages: undefined,
        platform: undefined
    };
    if (output.languages !== undefined && output.languages !== null) {
        contents.languages = deserializeAws_json1_1EnvironmentLanguages(output.languages, context);
    }
    if (output.platform !== undefined && output.platform !== null) {
        contents.platform = output.platform;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentPlatforms = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentPlatform(entry, context));
};
const deserializeAws_json1_1EnvironmentVariable = (output, context) => {
    let contents = {
        __type: "EnvironmentVariable",
        name: undefined,
        type: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentVariable(entry, context));
};
const deserializeAws_json1_1ExportedEnvironmentVariable = (output, context) => {
    let contents = {
        __type: "ExportedEnvironmentVariable",
        name: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1ExportedEnvironmentVariables = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExportedEnvironmentVariable(entry, context));
};
const deserializeAws_json1_1FilterGroup = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WebhookFilter(entry, context));
};
const deserializeAws_json1_1FilterGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FilterGroup(entry, context));
};
const deserializeAws_json1_1GetResourcePolicyOutput = (output, context) => {
    let contents = {
        __type: "GetResourcePolicyOutput",
        policy: undefined
    };
    if (output.policy !== undefined && output.policy !== null) {
        contents.policy = output.policy;
    }
    return contents;
};
const deserializeAws_json1_1GitSubmodulesConfig = (output, context) => {
    let contents = {
        __type: "GitSubmodulesConfig",
        fetchSubmodules: undefined
    };
    if (output.fetchSubmodules !== undefined && output.fetchSubmodules !== null) {
        contents.fetchSubmodules = output.fetchSubmodules;
    }
    return contents;
};
const deserializeAws_json1_1ImageVersions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ImportSourceCredentialsOutput = (output, context) => {
    let contents = {
        __type: "ImportSourceCredentialsOutput",
        arn: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidateProjectCacheOutput = (output, context) => {
    let contents = {
        __type: "InvalidateProjectCacheOutput"
    };
    return contents;
};
const deserializeAws_json1_1ListBuildsForProjectOutput = (output, context) => {
    let contents = {
        __type: "ListBuildsForProjectOutput",
        ids: undefined,
        nextToken: undefined
    };
    if (output.ids !== undefined && output.ids !== null) {
        contents.ids = deserializeAws_json1_1BuildIds(output.ids, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListBuildsOutput = (output, context) => {
    let contents = {
        __type: "ListBuildsOutput",
        ids: undefined,
        nextToken: undefined
    };
    if (output.ids !== undefined && output.ids !== null) {
        contents.ids = deserializeAws_json1_1BuildIds(output.ids, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCuratedEnvironmentImagesOutput = (output, context) => {
    let contents = {
        __type: "ListCuratedEnvironmentImagesOutput",
        platforms: undefined
    };
    if (output.platforms !== undefined && output.platforms !== null) {
        contents.platforms = deserializeAws_json1_1EnvironmentPlatforms(output.platforms, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProjectsOutput = (output, context) => {
    let contents = {
        __type: "ListProjectsOutput",
        nextToken: undefined,
        projects: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.projects !== undefined && output.projects !== null) {
        contents.projects = deserializeAws_json1_1ProjectNames(output.projects, context);
    }
    return contents;
};
const deserializeAws_json1_1ListReportGroupsOutput = (output, context) => {
    let contents = {
        __type: "ListReportGroupsOutput",
        nextToken: undefined,
        reportGroups: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.reportGroups !== undefined && output.reportGroups !== null) {
        contents.reportGroups = deserializeAws_json1_1ReportGroupArns(output.reportGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1ListReportsForReportGroupOutput = (output, context) => {
    let contents = {
        __type: "ListReportsForReportGroupOutput",
        nextToken: undefined,
        reports: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.reports !== undefined && output.reports !== null) {
        contents.reports = deserializeAws_json1_1ReportArns(output.reports, context);
    }
    return contents;
};
const deserializeAws_json1_1ListReportsOutput = (output, context) => {
    let contents = {
        __type: "ListReportsOutput",
        nextToken: undefined,
        reports: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.reports !== undefined && output.reports !== null) {
        contents.reports = deserializeAws_json1_1ReportArns(output.reports, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSharedProjectsOutput = (output, context) => {
    let contents = {
        __type: "ListSharedProjectsOutput",
        nextToken: undefined,
        projects: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.projects !== undefined && output.projects !== null) {
        contents.projects = deserializeAws_json1_1ProjectArns(output.projects, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSharedReportGroupsOutput = (output, context) => {
    let contents = {
        __type: "ListSharedReportGroupsOutput",
        nextToken: undefined,
        reportGroups: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.reportGroups !== undefined && output.reportGroups !== null) {
        contents.reportGroups = deserializeAws_json1_1ReportGroupArns(output.reportGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSourceCredentialsOutput = (output, context) => {
    let contents = {
        __type: "ListSourceCredentialsOutput",
        sourceCredentialsInfos: undefined
    };
    if (output.sourceCredentialsInfos !== undefined &&
        output.sourceCredentialsInfos !== null) {
        contents.sourceCredentialsInfos = deserializeAws_json1_1SourceCredentialsInfos(output.sourceCredentialsInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1LogsConfig = (output, context) => {
    let contents = {
        __type: "LogsConfig",
        cloudWatchLogs: undefined,
        s3Logs: undefined
    };
    if (output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null) {
        contents.cloudWatchLogs = deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context);
    }
    if (output.s3Logs !== undefined && output.s3Logs !== null) {
        contents.s3Logs = deserializeAws_json1_1S3LogsConfig(output.s3Logs, context);
    }
    return contents;
};
const deserializeAws_json1_1LogsLocation = (output, context) => {
    let contents = {
        __type: "LogsLocation",
        cloudWatchLogs: undefined,
        cloudWatchLogsArn: undefined,
        deepLink: undefined,
        groupName: undefined,
        s3DeepLink: undefined,
        s3Logs: undefined,
        s3LogsArn: undefined,
        streamName: undefined
    };
    if (output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null) {
        contents.cloudWatchLogs = deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context);
    }
    if (output.cloudWatchLogsArn !== undefined &&
        output.cloudWatchLogsArn !== null) {
        contents.cloudWatchLogsArn = output.cloudWatchLogsArn;
    }
    if (output.deepLink !== undefined && output.deepLink !== null) {
        contents.deepLink = output.deepLink;
    }
    if (output.groupName !== undefined && output.groupName !== null) {
        contents.groupName = output.groupName;
    }
    if (output.s3DeepLink !== undefined && output.s3DeepLink !== null) {
        contents.s3DeepLink = output.s3DeepLink;
    }
    if (output.s3Logs !== undefined && output.s3Logs !== null) {
        contents.s3Logs = deserializeAws_json1_1S3LogsConfig(output.s3Logs, context);
    }
    if (output.s3LogsArn !== undefined && output.s3LogsArn !== null) {
        contents.s3LogsArn = output.s3LogsArn;
    }
    if (output.streamName !== undefined && output.streamName !== null) {
        contents.streamName = output.streamName;
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    let contents = {
        __type: "NetworkInterface",
        networkInterfaceId: undefined,
        subnetId: undefined
    };
    if (output.networkInterfaceId !== undefined &&
        output.networkInterfaceId !== null) {
        contents.networkInterfaceId = output.networkInterfaceId;
    }
    if (output.subnetId !== undefined && output.subnetId !== null) {
        contents.subnetId = output.subnetId;
    }
    return contents;
};
const deserializeAws_json1_1OAuthProviderException = (output, context) => {
    let contents = {
        __type: "OAuthProviderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PhaseContext = (output, context) => {
    let contents = {
        __type: "PhaseContext",
        message: undefined,
        statusCode: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    return contents;
};
const deserializeAws_json1_1PhaseContexts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PhaseContext(entry, context));
};
const deserializeAws_json1_1Project = (output, context) => {
    let contents = {
        __type: "Project",
        arn: undefined,
        artifacts: undefined,
        badge: undefined,
        cache: undefined,
        created: undefined,
        description: undefined,
        encryptionKey: undefined,
        environment: undefined,
        lastModified: undefined,
        logsConfig: undefined,
        name: undefined,
        queuedTimeoutInMinutes: undefined,
        secondaryArtifacts: undefined,
        secondarySourceVersions: undefined,
        secondarySources: undefined,
        serviceRole: undefined,
        source: undefined,
        sourceVersion: undefined,
        tags: undefined,
        timeoutInMinutes: undefined,
        vpcConfig: undefined,
        webhook: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.artifacts !== undefined && output.artifacts !== null) {
        contents.artifacts = deserializeAws_json1_1ProjectArtifacts(output.artifacts, context);
    }
    if (output.badge !== undefined && output.badge !== null) {
        contents.badge = deserializeAws_json1_1ProjectBadge(output.badge, context);
    }
    if (output.cache !== undefined && output.cache !== null) {
        contents.cache = deserializeAws_json1_1ProjectCache(output.cache, context);
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = output.encryptionKey;
    }
    if (output.environment !== undefined && output.environment !== null) {
        contents.environment = deserializeAws_json1_1ProjectEnvironment(output.environment, context);
    }
    if (output.lastModified !== undefined && output.lastModified !== null) {
        contents.lastModified = new Date(Math.round(output.lastModified * 1000));
    }
    if (output.logsConfig !== undefined && output.logsConfig !== null) {
        contents.logsConfig = deserializeAws_json1_1LogsConfig(output.logsConfig, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.queuedTimeoutInMinutes !== undefined &&
        output.queuedTimeoutInMinutes !== null) {
        contents.queuedTimeoutInMinutes = output.queuedTimeoutInMinutes;
    }
    if (output.secondaryArtifacts !== undefined &&
        output.secondaryArtifacts !== null) {
        contents.secondaryArtifacts = deserializeAws_json1_1ProjectArtifactsList(output.secondaryArtifacts, context);
    }
    if (output.secondarySourceVersions !== undefined &&
        output.secondarySourceVersions !== null) {
        contents.secondarySourceVersions = deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context);
    }
    if (output.secondarySources !== undefined &&
        output.secondarySources !== null) {
        contents.secondarySources = deserializeAws_json1_1ProjectSources(output.secondarySources, context);
    }
    if (output.serviceRole !== undefined && output.serviceRole !== null) {
        contents.serviceRole = output.serviceRole;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = deserializeAws_json1_1ProjectSource(output.source, context);
    }
    if (output.sourceVersion !== undefined && output.sourceVersion !== null) {
        contents.sourceVersion = output.sourceVersion;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.timeoutInMinutes !== undefined &&
        output.timeoutInMinutes !== null) {
        contents.timeoutInMinutes = output.timeoutInMinutes;
    }
    if (output.vpcConfig !== undefined && output.vpcConfig !== null) {
        contents.vpcConfig = deserializeAws_json1_1VpcConfig(output.vpcConfig, context);
    }
    if (output.webhook !== undefined && output.webhook !== null) {
        contents.webhook = deserializeAws_json1_1Webhook(output.webhook, context);
    }
    return contents;
};
const deserializeAws_json1_1ProjectArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ProjectArtifacts = (output, context) => {
    let contents = {
        __type: "ProjectArtifacts",
        artifactIdentifier: undefined,
        encryptionDisabled: undefined,
        location: undefined,
        name: undefined,
        namespaceType: undefined,
        overrideArtifactName: undefined,
        packaging: undefined,
        path: undefined,
        type: undefined
    };
    if (output.artifactIdentifier !== undefined &&
        output.artifactIdentifier !== null) {
        contents.artifactIdentifier = output.artifactIdentifier;
    }
    if (output.encryptionDisabled !== undefined &&
        output.encryptionDisabled !== null) {
        contents.encryptionDisabled = output.encryptionDisabled;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.namespaceType !== undefined && output.namespaceType !== null) {
        contents.namespaceType = output.namespaceType;
    }
    if (output.overrideArtifactName !== undefined &&
        output.overrideArtifactName !== null) {
        contents.overrideArtifactName = output.overrideArtifactName;
    }
    if (output.packaging !== undefined && output.packaging !== null) {
        contents.packaging = output.packaging;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ProjectArtifactsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectArtifacts(entry, context));
};
const deserializeAws_json1_1ProjectBadge = (output, context) => {
    let contents = {
        __type: "ProjectBadge",
        badgeEnabled: undefined,
        badgeRequestUrl: undefined
    };
    if (output.badgeEnabled !== undefined && output.badgeEnabled !== null) {
        contents.badgeEnabled = output.badgeEnabled;
    }
    if (output.badgeRequestUrl !== undefined && output.badgeRequestUrl !== null) {
        contents.badgeRequestUrl = output.badgeRequestUrl;
    }
    return contents;
};
const deserializeAws_json1_1ProjectCache = (output, context) => {
    let contents = {
        __type: "ProjectCache",
        location: undefined,
        modes: undefined,
        type: undefined
    };
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.modes !== undefined && output.modes !== null) {
        contents.modes = deserializeAws_json1_1ProjectCacheModes(output.modes, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ProjectCacheModes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ProjectEnvironment = (output, context) => {
    let contents = {
        __type: "ProjectEnvironment",
        certificate: undefined,
        computeType: undefined,
        environmentVariables: undefined,
        image: undefined,
        imagePullCredentialsType: undefined,
        privilegedMode: undefined,
        registryCredential: undefined,
        type: undefined
    };
    if (output.certificate !== undefined && output.certificate !== null) {
        contents.certificate = output.certificate;
    }
    if (output.computeType !== undefined && output.computeType !== null) {
        contents.computeType = output.computeType;
    }
    if (output.environmentVariables !== undefined &&
        output.environmentVariables !== null) {
        contents.environmentVariables = deserializeAws_json1_1EnvironmentVariables(output.environmentVariables, context);
    }
    if (output.image !== undefined && output.image !== null) {
        contents.image = output.image;
    }
    if (output.imagePullCredentialsType !== undefined &&
        output.imagePullCredentialsType !== null) {
        contents.imagePullCredentialsType = output.imagePullCredentialsType;
    }
    if (output.privilegedMode !== undefined && output.privilegedMode !== null) {
        contents.privilegedMode = output.privilegedMode;
    }
    if (output.registryCredential !== undefined &&
        output.registryCredential !== null) {
        contents.registryCredential = deserializeAws_json1_1RegistryCredential(output.registryCredential, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ProjectNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ProjectSecondarySourceVersions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectSourceVersion(entry, context));
};
const deserializeAws_json1_1ProjectSource = (output, context) => {
    let contents = {
        __type: "ProjectSource",
        auth: undefined,
        buildspec: undefined,
        gitCloneDepth: undefined,
        gitSubmodulesConfig: undefined,
        insecureSsl: undefined,
        location: undefined,
        reportBuildStatus: undefined,
        sourceIdentifier: undefined,
        type: undefined
    };
    if (output.auth !== undefined && output.auth !== null) {
        contents.auth = deserializeAws_json1_1SourceAuth(output.auth, context);
    }
    if (output.buildspec !== undefined && output.buildspec !== null) {
        contents.buildspec = output.buildspec;
    }
    if (output.gitCloneDepth !== undefined && output.gitCloneDepth !== null) {
        contents.gitCloneDepth = output.gitCloneDepth;
    }
    if (output.gitSubmodulesConfig !== undefined &&
        output.gitSubmodulesConfig !== null) {
        contents.gitSubmodulesConfig = deserializeAws_json1_1GitSubmodulesConfig(output.gitSubmodulesConfig, context);
    }
    if (output.insecureSsl !== undefined && output.insecureSsl !== null) {
        contents.insecureSsl = output.insecureSsl;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.reportBuildStatus !== undefined &&
        output.reportBuildStatus !== null) {
        contents.reportBuildStatus = output.reportBuildStatus;
    }
    if (output.sourceIdentifier !== undefined &&
        output.sourceIdentifier !== null) {
        contents.sourceIdentifier = output.sourceIdentifier;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ProjectSourceVersion = (output, context) => {
    let contents = {
        __type: "ProjectSourceVersion",
        sourceIdentifier: undefined,
        sourceVersion: undefined
    };
    if (output.sourceIdentifier !== undefined &&
        output.sourceIdentifier !== null) {
        contents.sourceIdentifier = output.sourceIdentifier;
    }
    if (output.sourceVersion !== undefined && output.sourceVersion !== null) {
        contents.sourceVersion = output.sourceVersion;
    }
    return contents;
};
const deserializeAws_json1_1ProjectSources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectSource(entry, context));
};
const deserializeAws_json1_1Projects = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Project(entry, context));
};
const deserializeAws_json1_1PutResourcePolicyOutput = (output, context) => {
    let contents = {
        __type: "PutResourcePolicyOutput",
        resourceArn: undefined
    };
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    return contents;
};
const deserializeAws_json1_1RegistryCredential = (output, context) => {
    let contents = {
        __type: "RegistryCredential",
        credential: undefined,
        credentialProvider: undefined
    };
    if (output.credential !== undefined && output.credential !== null) {
        contents.credential = output.credential;
    }
    if (output.credentialProvider !== undefined &&
        output.credentialProvider !== null) {
        contents.credentialProvider = output.credentialProvider;
    }
    return contents;
};
const deserializeAws_json1_1Report = (output, context) => {
    let contents = {
        __type: "Report",
        arn: undefined,
        created: undefined,
        executionId: undefined,
        expired: undefined,
        exportConfig: undefined,
        name: undefined,
        reportGroupArn: undefined,
        status: undefined,
        testSummary: undefined,
        truncated: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.executionId !== undefined && output.executionId !== null) {
        contents.executionId = output.executionId;
    }
    if (output.expired !== undefined && output.expired !== null) {
        contents.expired = new Date(Math.round(output.expired * 1000));
    }
    if (output.exportConfig !== undefined && output.exportConfig !== null) {
        contents.exportConfig = deserializeAws_json1_1ReportExportConfig(output.exportConfig, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.reportGroupArn !== undefined && output.reportGroupArn !== null) {
        contents.reportGroupArn = output.reportGroupArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.testSummary !== undefined && output.testSummary !== null) {
        contents.testSummary = deserializeAws_json1_1TestReportSummary(output.testSummary, context);
    }
    if (output.truncated !== undefined && output.truncated !== null) {
        contents.truncated = output.truncated;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ReportArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ReportExportConfig = (output, context) => {
    let contents = {
        __type: "ReportExportConfig",
        exportConfigType: undefined,
        s3Destination: undefined
    };
    if (output.exportConfigType !== undefined &&
        output.exportConfigType !== null) {
        contents.exportConfigType = output.exportConfigType;
    }
    if (output.s3Destination !== undefined && output.s3Destination !== null) {
        contents.s3Destination = deserializeAws_json1_1S3ReportExportConfig(output.s3Destination, context);
    }
    return contents;
};
const deserializeAws_json1_1ReportGroup = (output, context) => {
    let contents = {
        __type: "ReportGroup",
        arn: undefined,
        created: undefined,
        exportConfig: undefined,
        lastModified: undefined,
        name: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.exportConfig !== undefined && output.exportConfig !== null) {
        contents.exportConfig = deserializeAws_json1_1ReportExportConfig(output.exportConfig, context);
    }
    if (output.lastModified !== undefined && output.lastModified !== null) {
        contents.lastModified = new Date(Math.round(output.lastModified * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ReportGroupArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ReportGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReportGroup(entry, context));
};
const deserializeAws_json1_1ReportStatusCounts = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Reports = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Report(entry, context));
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1S3LogsConfig = (output, context) => {
    let contents = {
        __type: "S3LogsConfig",
        encryptionDisabled: undefined,
        location: undefined,
        status: undefined
    };
    if (output.encryptionDisabled !== undefined &&
        output.encryptionDisabled !== null) {
        contents.encryptionDisabled = output.encryptionDisabled;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1S3ReportExportConfig = (output, context) => {
    let contents = {
        __type: "S3ReportExportConfig",
        bucket: undefined,
        encryptionDisabled: undefined,
        encryptionKey: undefined,
        packaging: undefined,
        path: undefined
    };
    if (output.bucket !== undefined && output.bucket !== null) {
        contents.bucket = output.bucket;
    }
    if (output.encryptionDisabled !== undefined &&
        output.encryptionDisabled !== null) {
        contents.encryptionDisabled = output.encryptionDisabled;
    }
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = output.encryptionKey;
    }
    if (output.packaging !== undefined && output.packaging !== null) {
        contents.packaging = output.packaging;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SourceAuth = (output, context) => {
    let contents = {
        __type: "SourceAuth",
        resource: undefined,
        type: undefined
    };
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1SourceCredentialsInfo = (output, context) => {
    let contents = {
        __type: "SourceCredentialsInfo",
        arn: undefined,
        authType: undefined,
        serverType: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.authType !== undefined && output.authType !== null) {
        contents.authType = output.authType;
    }
    if (output.serverType !== undefined && output.serverType !== null) {
        contents.serverType = output.serverType;
    }
    return contents;
};
const deserializeAws_json1_1SourceCredentialsInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SourceCredentialsInfo(entry, context));
};
const deserializeAws_json1_1StartBuildOutput = (output, context) => {
    let contents = {
        __type: "StartBuildOutput",
        build: undefined
    };
    if (output.build !== undefined && output.build !== null) {
        contents.build = deserializeAws_json1_1Build(output.build, context);
    }
    return contents;
};
const deserializeAws_json1_1StopBuildOutput = (output, context) => {
    let contents = {
        __type: "StopBuildOutput",
        build: undefined
    };
    if (output.build !== undefined && output.build !== null) {
        contents.build = deserializeAws_json1_1Build(output.build, context);
    }
    return contents;
};
const deserializeAws_json1_1Subnets = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TestCase = (output, context) => {
    let contents = {
        __type: "TestCase",
        durationInNanoSeconds: undefined,
        expired: undefined,
        message: undefined,
        name: undefined,
        prefix: undefined,
        reportArn: undefined,
        status: undefined,
        testRawDataPath: undefined
    };
    if (output.durationInNanoSeconds !== undefined &&
        output.durationInNanoSeconds !== null) {
        contents.durationInNanoSeconds = output.durationInNanoSeconds;
    }
    if (output.expired !== undefined && output.expired !== null) {
        contents.expired = new Date(Math.round(output.expired * 1000));
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        contents.prefix = output.prefix;
    }
    if (output.reportArn !== undefined && output.reportArn !== null) {
        contents.reportArn = output.reportArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.testRawDataPath !== undefined && output.testRawDataPath !== null) {
        contents.testRawDataPath = output.testRawDataPath;
    }
    return contents;
};
const deserializeAws_json1_1TestCases = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestCase(entry, context));
};
const deserializeAws_json1_1TestReportSummary = (output, context) => {
    let contents = {
        __type: "TestReportSummary",
        durationInNanoSeconds: undefined,
        statusCounts: undefined,
        total: undefined
    };
    if (output.durationInNanoSeconds !== undefined &&
        output.durationInNanoSeconds !== null) {
        contents.durationInNanoSeconds = output.durationInNanoSeconds;
    }
    if (output.statusCounts !== undefined && output.statusCounts !== null) {
        contents.statusCounts = deserializeAws_json1_1ReportStatusCounts(output.statusCounts, context);
    }
    if (output.total !== undefined && output.total !== null) {
        contents.total = output.total;
    }
    return contents;
};
const deserializeAws_json1_1UpdateProjectOutput = (output, context) => {
    let contents = {
        __type: "UpdateProjectOutput",
        project: undefined
    };
    if (output.project !== undefined && output.project !== null) {
        contents.project = deserializeAws_json1_1Project(output.project, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateReportGroupOutput = (output, context) => {
    let contents = {
        __type: "UpdateReportGroupOutput",
        reportGroup: undefined
    };
    if (output.reportGroup !== undefined && output.reportGroup !== null) {
        contents.reportGroup = deserializeAws_json1_1ReportGroup(output.reportGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateWebhookOutput = (output, context) => {
    let contents = {
        __type: "UpdateWebhookOutput",
        webhook: undefined
    };
    if (output.webhook !== undefined && output.webhook !== null) {
        contents.webhook = deserializeAws_json1_1Webhook(output.webhook, context);
    }
    return contents;
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
    let contents = {
        __type: "VpcConfig",
        securityGroupIds: undefined,
        subnets: undefined,
        vpcId: undefined
    };
    if (output.securityGroupIds !== undefined &&
        output.securityGroupIds !== null) {
        contents.securityGroupIds = deserializeAws_json1_1SecurityGroupIds(output.securityGroupIds, context);
    }
    if (output.subnets !== undefined && output.subnets !== null) {
        contents.subnets = deserializeAws_json1_1Subnets(output.subnets, context);
    }
    if (output.vpcId !== undefined && output.vpcId !== null) {
        contents.vpcId = output.vpcId;
    }
    return contents;
};
const deserializeAws_json1_1Webhook = (output, context) => {
    let contents = {
        __type: "Webhook",
        branchFilter: undefined,
        filterGroups: undefined,
        lastModifiedSecret: undefined,
        payloadUrl: undefined,
        secret: undefined,
        url: undefined
    };
    if (output.branchFilter !== undefined && output.branchFilter !== null) {
        contents.branchFilter = output.branchFilter;
    }
    if (output.filterGroups !== undefined && output.filterGroups !== null) {
        contents.filterGroups = deserializeAws_json1_1FilterGroups(output.filterGroups, context);
    }
    if (output.lastModifiedSecret !== undefined &&
        output.lastModifiedSecret !== null) {
        contents.lastModifiedSecret = new Date(Math.round(output.lastModifiedSecret * 1000));
    }
    if (output.payloadUrl !== undefined && output.payloadUrl !== null) {
        contents.payloadUrl = output.payloadUrl;
    }
    if (output.secret !== undefined && output.secret !== null) {
        contents.secret = output.secret;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1WebhookFilter = (output, context) => {
    let contents = {
        __type: "WebhookFilter",
        excludeMatchedPattern: undefined,
        pattern: undefined,
        type: undefined
    };
    if (output.excludeMatchedPattern !== undefined &&
        output.excludeMatchedPattern !== null) {
        contents.excludeMatchedPattern = output.excludeMatchedPattern;
    }
    if (output.pattern !== undefined && output.pattern !== null) {
        contents.pattern = output.pattern;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
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