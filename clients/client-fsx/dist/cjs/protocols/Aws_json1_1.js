"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1CancelDataRepositoryTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelDataRepositoryTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelDataRepositoryTaskCommand = serializeAws_json1_1CancelDataRepositoryTaskCommand;
async function serializeAws_json1_1CreateBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.CreateBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBackupCommand = serializeAws_json1_1CreateBackupCommand;
async function serializeAws_json1_1CreateDataRepositoryTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDataRepositoryTaskCommand = serializeAws_json1_1CreateDataRepositoryTaskCommand;
async function serializeAws_json1_1CreateFileSystemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.CreateFileSystem";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFileSystemCommand = serializeAws_json1_1CreateFileSystemCommand;
async function serializeAws_json1_1CreateFileSystemFromBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFileSystemFromBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFileSystemFromBackupCommand = serializeAws_json1_1CreateFileSystemFromBackupCommand;
async function serializeAws_json1_1DeleteBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DeleteBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBackupCommand = serializeAws_json1_1DeleteBackupCommand;
async function serializeAws_json1_1DeleteFileSystemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DeleteFileSystem";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFileSystemCommand = serializeAws_json1_1DeleteFileSystemCommand;
async function serializeAws_json1_1DescribeBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DescribeBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBackupsCommand = serializeAws_json1_1DescribeBackupsCommand;
async function serializeAws_json1_1DescribeDataRepositoryTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDataRepositoryTasksCommand = serializeAws_json1_1DescribeDataRepositoryTasksCommand;
async function serializeAws_json1_1DescribeFileSystemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DescribeFileSystems";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFileSystemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFileSystemsCommand = serializeAws_json1_1DescribeFileSystemsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateFileSystemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.UpdateFileSystem";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFileSystemCommand = serializeAws_json1_1UpdateFileSystemCommand;
async function deserializeAws_json1_1CancelDataRepositoryTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelDataRepositoryTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelDataRepositoryTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelDataRepositoryTaskCommand = deserializeAws_json1_1CancelDataRepositoryTaskCommand;
async function deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataRepositoryTaskEnded":
        case "com.amazonaws.simba.api.v20180301#DataRepositoryTaskEnded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataRepositoryTaskEndedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataRepositoryTaskNotFound":
        case "com.amazonaws.simba.api.v20180301#DataRepositoryTaskNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBackupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBackupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBackupCommand = deserializeAws_json1_1CreateBackupCommand;
async function deserializeAws_json1_1CreateBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BackupInProgress":
        case "com.amazonaws.simba.api.v20180301#BackupInProgress":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDataRepositoryTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataRepositoryTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDataRepositoryTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDataRepositoryTaskCommand = deserializeAws_json1_1CreateDataRepositoryTaskCommand;
async function deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataRepositoryTaskExecuting":
        case "com.amazonaws.simba.api.v20180301#DataRepositoryTaskExecuting":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataRepositoryTaskExecutingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateFileSystemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFileSystemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFileSystemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFileSystemCommand = deserializeAws_json1_1CreateFileSystemCommand;
async function deserializeAws_json1_1CreateFileSystemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActiveDirectoryError":
        case "com.amazonaws.simba.api.v20180301#ActiveDirectoryError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidExportPath":
        case "com.amazonaws.simba.api.v20180301#InvalidExportPath":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidExportPathResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImportPath":
        case "com.amazonaws.simba.api.v20180301#InvalidImportPath":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImportPathResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNetworkSettings":
        case "com.amazonaws.simba.api.v20180301#InvalidNetworkSettings":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateFileSystemFromBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFileSystemFromBackupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFileSystemFromBackupCommand = deserializeAws_json1_1CreateFileSystemFromBackupCommand;
async function deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActiveDirectoryError":
        case "com.amazonaws.simba.api.v20180301#ActiveDirectoryError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupNotFound":
        case "com.amazonaws.simba.api.v20180301#BackupNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNetworkSettings":
        case "com.amazonaws.simba.api.v20180301#InvalidNetworkSettings":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBackupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBackupCommand = deserializeAws_json1_1DeleteBackupCommand;
async function deserializeAws_json1_1DeleteBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BackupInProgress":
        case "com.amazonaws.simba.api.v20180301#BackupInProgress":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupNotFound":
        case "com.amazonaws.simba.api.v20180301#BackupNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupRestoring":
        case "com.amazonaws.simba.api.v20180301#BackupRestoring":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupRestoringResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteFileSystemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileSystemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFileSystemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFileSystemCommand = deserializeAws_json1_1DeleteFileSystemCommand;
async function deserializeAws_json1_1DeleteFileSystemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBackupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBackupsCommand = deserializeAws_json1_1DescribeBackupsCommand;
async function deserializeAws_json1_1DescribeBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BackupNotFound":
        case "com.amazonaws.simba.api.v20180301#BackupNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDataRepositoryTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataRepositoryTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDataRepositoryTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDataRepositoryTasksCommand = deserializeAws_json1_1DescribeDataRepositoryTasksCommand;
async function deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataRepositoryTaskNotFound":
        case "com.amazonaws.simba.api.v20180301#DataRepositoryTaskNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeFileSystemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFileSystemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFileSystemsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFileSystemsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFileSystemsCommand = deserializeAws_json1_1DescribeFileSystemsCommand;
async function deserializeAws_json1_1DescribeFileSystemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateFileSystemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFileSystemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFileSystemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFileSystemCommand = deserializeAws_json1_1UpdateFileSystemCommand;
async function deserializeAws_json1_1UpdateFileSystemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.simba.api.v20180301#BadRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.simba.api.v20180301#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ActiveDirectoryErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActiveDirectoryError(body, context);
    const contents = Object.assign({ name: "ActiveDirectoryError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BackupInProgressResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupInProgress(body, context);
    const contents = Object.assign({ name: "BackupInProgress", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BackupNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupNotFound(body, context);
    const contents = Object.assign({ name: "BackupNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BackupRestoringResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupRestoring(body, context);
    const contents = Object.assign({ name: "BackupRestoring", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BadRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequest(body, context);
    const contents = Object.assign({ name: "BadRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskEndedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskEnded(body, context);
    const contents = Object.assign({ name: "DataRepositoryTaskEnded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskExecutingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskExecuting(body, context);
    const contents = Object.assign({ name: "DataRepositoryTaskExecuting", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskNotFound(body, context);
    const contents = Object.assign({ name: "DataRepositoryTaskNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileSystemNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileSystemNotFound(body, context);
    const contents = Object.assign({ name: "FileSystemNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncompatibleParameterErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatibleParameterError(body, context);
    const contents = Object.assign({ name: "IncompatibleParameterError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidExportPathResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidExportPath(body, context);
    const contents = Object.assign({ name: "InvalidExportPath", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidImportPathResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidImportPath(body, context);
    const contents = Object.assign({ name: "InvalidImportPath", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNetworkSettingsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNetworkSettings(body, context);
    const contents = Object.assign({ name: "InvalidNetworkSettings", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MissingFileSystemConfigurationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingFileSystemConfiguration(body, context);
    const contents = Object.assign({ name: "MissingFileSystemConfiguration", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotServiceResourceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotServiceResourceError(body, context);
    const contents = Object.assign({ name: "NotServiceResourceError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDoesNotSupportTagging(body, context);
    const contents = Object.assign({ name: "ResourceDoesNotSupportTagging", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFound(body, context);
    const contents = Object.assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceLimitExceeded(body, context);
    const contents = Object.assign({ name: "ServiceLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperation(body, context);
    const contents = Object.assign({ name: "UnsupportedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BackupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CancelDataRepositoryTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskId !== undefined) {
        bodyParams["TaskId"] = input.TaskId;
    }
    return bodyParams;
};
const serializeAws_json1_1CompletionReport = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.Format !== undefined) {
        bodyParams["Format"] = input.Format;
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FileSystemId !== undefined) {
        bodyParams["FileSystemId"] = input.FileSystemId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDataRepositoryTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FileSystemId !== undefined) {
        bodyParams["FileSystemId"] = input.FileSystemId;
    }
    if (input.Paths !== undefined) {
        bodyParams["Paths"] = serializeAws_json1_1DataRepositoryTaskPaths(input.Paths, context);
    }
    if (input.Report !== undefined) {
        bodyParams["Report"] = serializeAws_json1_1CompletionReport(input.Report, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFileSystemFromBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.WindowsConfiguration !== undefined) {
        bodyParams["WindowsConfiguration"] = serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFileSystemLustreConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ExportPath !== undefined) {
        bodyParams["ExportPath"] = input.ExportPath;
    }
    if (input.ImportPath !== undefined) {
        bodyParams["ImportPath"] = input.ImportPath;
    }
    if (input.ImportedFileChunkSize !== undefined) {
        bodyParams["ImportedFileChunkSize"] = input.ImportedFileChunkSize;
    }
    if (input.WeeklyMaintenanceStartTime !== undefined) {
        bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFileSystemRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FileSystemType !== undefined) {
        bodyParams["FileSystemType"] = input.FileSystemType;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.LustreConfiguration !== undefined) {
        bodyParams["LustreConfiguration"] = serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context);
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.StorageCapacity !== undefined) {
        bodyParams["StorageCapacity"] = input.StorageCapacity;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.WindowsConfiguration !== undefined) {
        bodyParams["WindowsConfiguration"] = serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFileSystemWindowsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ActiveDirectoryId !== undefined) {
        bodyParams["ActiveDirectoryId"] = input.ActiveDirectoryId;
    }
    if (input.AutomaticBackupRetentionDays !== undefined) {
        bodyParams["AutomaticBackupRetentionDays"] =
            input.AutomaticBackupRetentionDays;
    }
    if (input.CopyTagsToBackups !== undefined) {
        bodyParams["CopyTagsToBackups"] = input.CopyTagsToBackups;
    }
    if (input.DailyAutomaticBackupStartTime !== undefined) {
        bodyParams["DailyAutomaticBackupStartTime"] =
            input.DailyAutomaticBackupStartTime;
    }
    if (input.DeploymentType !== undefined) {
        bodyParams["DeploymentType"] = input.DeploymentType;
    }
    if (input.PreferredSubnetId !== undefined) {
        bodyParams["PreferredSubnetId"] = input.PreferredSubnetId;
    }
    if (input.SelfManagedActiveDirectoryConfiguration !== undefined) {
        bodyParams["SelfManagedActiveDirectoryConfiguration"] = serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(input.SelfManagedActiveDirectoryConfiguration, context);
    }
    if (input.ThroughputCapacity !== undefined) {
        bodyParams["ThroughputCapacity"] = input.ThroughputCapacity;
    }
    if (input.WeeklyMaintenanceStartTime !== undefined) {
        bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
    }
    return bodyParams;
};
const serializeAws_json1_1DataRepositoryTaskFilter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1DataRepositoryTaskFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataRepositoryTaskFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DataRepositoryTaskFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DataRepositoryTaskFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DataRepositoryTaskPaths = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFileSystemRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FileSystemId !== undefined) {
        bodyParams["FileSystemId"] = input.FileSystemId;
    }
    if (input.WindowsConfiguration !== undefined) {
        bodyParams["WindowsConfiguration"] = serializeAws_json1_1DeleteFileSystemWindowsConfiguration(input.WindowsConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFileSystemWindowsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.FinalBackupTags !== undefined) {
        bodyParams["FinalBackupTags"] = serializeAws_json1_1Tags(input.FinalBackupTags, context);
    }
    if (input.SkipFinalBackup !== undefined) {
        bodyParams["SkipFinalBackup"] = input.SkipFinalBackup;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBackupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupIds !== undefined) {
        bodyParams["BackupIds"] = serializeAws_json1_1BackupIds(input.BackupIds, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDataRepositoryTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1DataRepositoryTaskFilters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TaskIds !== undefined) {
        bodyParams["TaskIds"] = serializeAws_json1_1TaskIds(input.TaskIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFileSystemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.FileSystemIds !== undefined) {
        bodyParams["FileSystemIds"] = serializeAws_json1_1FileSystemIds(input.FileSystemIds, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DnsIps = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FileSystemIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
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
const serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.DnsIps !== undefined) {
        bodyParams["DnsIps"] = serializeAws_json1_1DnsIps(input.DnsIps, context);
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.FileSystemAdministratorsGroup !== undefined) {
        bodyParams["FileSystemAdministratorsGroup"] =
            input.FileSystemAdministratorsGroup;
    }
    if (input.OrganizationalUnitDistinguishedName !== undefined) {
        bodyParams["OrganizationalUnitDistinguishedName"] =
            input.OrganizationalUnitDistinguishedName;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = (input, context) => {
    const bodyParams = {};
    if (input.DnsIps !== undefined) {
        bodyParams["DnsIps"] = serializeAws_json1_1DnsIps(input.DnsIps, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1SubnetIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
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
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TaskIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFileSystemLustreConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.WeeklyMaintenanceStartTime !== undefined) {
        bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFileSystemRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FileSystemId !== undefined) {
        bodyParams["FileSystemId"] = input.FileSystemId;
    }
    if (input.LustreConfiguration !== undefined) {
        bodyParams["LustreConfiguration"] = serializeAws_json1_1UpdateFileSystemLustreConfiguration(input.LustreConfiguration, context);
    }
    if (input.WindowsConfiguration !== undefined) {
        bodyParams["WindowsConfiguration"] = serializeAws_json1_1UpdateFileSystemWindowsConfiguration(input.WindowsConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFileSystemWindowsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AutomaticBackupRetentionDays !== undefined) {
        bodyParams["AutomaticBackupRetentionDays"] =
            input.AutomaticBackupRetentionDays;
    }
    if (input.DailyAutomaticBackupStartTime !== undefined) {
        bodyParams["DailyAutomaticBackupStartTime"] =
            input.DailyAutomaticBackupStartTime;
    }
    if (input.SelfManagedActiveDirectoryConfiguration !== undefined) {
        bodyParams["SelfManagedActiveDirectoryConfiguration"] = serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(input.SelfManagedActiveDirectoryConfiguration, context);
    }
    if (input.WeeklyMaintenanceStartTime !== undefined) {
        bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
    }
    return bodyParams;
};
const deserializeAws_json1_1ActiveDirectoryBackupAttributes = (output, context) => {
    let contents = {
        __type: "ActiveDirectoryBackupAttributes",
        ActiveDirectoryId: undefined,
        DomainName: undefined
    };
    if (output.ActiveDirectoryId !== undefined &&
        output.ActiveDirectoryId !== null) {
        contents.ActiveDirectoryId = output.ActiveDirectoryId;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    return contents;
};
const deserializeAws_json1_1ActiveDirectoryError = (output, context) => {
    let contents = {
        __type: "ActiveDirectoryError",
        ActiveDirectoryId: undefined,
        Message: undefined,
        Type: undefined
    };
    if (output.ActiveDirectoryId !== undefined &&
        output.ActiveDirectoryId !== null) {
        contents.ActiveDirectoryId = output.ActiveDirectoryId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Backup = (output, context) => {
    let contents = {
        __type: "Backup",
        BackupId: undefined,
        CreationTime: undefined,
        DirectoryInformation: undefined,
        FailureDetails: undefined,
        FileSystem: undefined,
        KmsKeyId: undefined,
        Lifecycle: undefined,
        ProgressPercent: undefined,
        ResourceARN: undefined,
        Tags: undefined,
        Type: undefined
    };
    if (output.BackupId !== undefined && output.BackupId !== null) {
        contents.BackupId = output.BackupId;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DirectoryInformation !== undefined &&
        output.DirectoryInformation !== null) {
        contents.DirectoryInformation = deserializeAws_json1_1ActiveDirectoryBackupAttributes(output.DirectoryInformation, context);
    }
    if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
        contents.FailureDetails = deserializeAws_json1_1BackupFailureDetails(output.FailureDetails, context);
    }
    if (output.FileSystem !== undefined && output.FileSystem !== null) {
        contents.FileSystem = deserializeAws_json1_1FileSystem(output.FileSystem, context);
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
        contents.ProgressPercent = output.ProgressPercent;
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1BackupFailureDetails = (output, context) => {
    let contents = {
        __type: "BackupFailureDetails",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1BackupInProgress = (output, context) => {
    let contents = {
        __type: "BackupInProgress",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1BackupNotFound = (output, context) => {
    let contents = {
        __type: "BackupNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1BackupRestoring = (output, context) => {
    let contents = {
        __type: "BackupRestoring",
        FileSystemId: undefined,
        Message: undefined
    };
    if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
        contents.FileSystemId = output.FileSystemId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Backups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Backup(entry, context));
};
const deserializeAws_json1_1BadRequest = (output, context) => {
    let contents = {
        __type: "BadRequest",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CancelDataRepositoryTaskResponse = (output, context) => {
    let contents = {
        __type: "CancelDataRepositoryTaskResponse",
        Lifecycle: undefined,
        TaskId: undefined
    };
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    if (output.TaskId !== undefined && output.TaskId !== null) {
        contents.TaskId = output.TaskId;
    }
    return contents;
};
const deserializeAws_json1_1CompletionReport = (output, context) => {
    let contents = {
        __type: "CompletionReport",
        Enabled: undefined,
        Format: undefined,
        Path: undefined,
        Scope: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.Format !== undefined && output.Format !== null) {
        contents.Format = output.Format;
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    if (output.Scope !== undefined && output.Scope !== null) {
        contents.Scope = output.Scope;
    }
    return contents;
};
const deserializeAws_json1_1CreateBackupResponse = (output, context) => {
    let contents = {
        __type: "CreateBackupResponse",
        Backup: undefined
    };
    if (output.Backup !== undefined && output.Backup !== null) {
        contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDataRepositoryTaskResponse = (output, context) => {
    let contents = {
        __type: "CreateDataRepositoryTaskResponse",
        DataRepositoryTask: undefined
    };
    if (output.DataRepositoryTask !== undefined &&
        output.DataRepositoryTask !== null) {
        contents.DataRepositoryTask = deserializeAws_json1_1DataRepositoryTask(output.DataRepositoryTask, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateFileSystemFromBackupResponse = (output, context) => {
    let contents = {
        __type: "CreateFileSystemFromBackupResponse",
        FileSystem: undefined
    };
    if (output.FileSystem !== undefined && output.FileSystem !== null) {
        contents.FileSystem = deserializeAws_json1_1FileSystem(output.FileSystem, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateFileSystemResponse = (output, context) => {
    let contents = {
        __type: "CreateFileSystemResponse",
        FileSystem: undefined
    };
    if (output.FileSystem !== undefined && output.FileSystem !== null) {
        contents.FileSystem = deserializeAws_json1_1FileSystem(output.FileSystem, context);
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryConfiguration = (output, context) => {
    let contents = {
        __type: "DataRepositoryConfiguration",
        ExportPath: undefined,
        ImportPath: undefined,
        ImportedFileChunkSize: undefined
    };
    if (output.ExportPath !== undefined && output.ExportPath !== null) {
        contents.ExportPath = output.ExportPath;
    }
    if (output.ImportPath !== undefined && output.ImportPath !== null) {
        contents.ImportPath = output.ImportPath;
    }
    if (output.ImportedFileChunkSize !== undefined &&
        output.ImportedFileChunkSize !== null) {
        contents.ImportedFileChunkSize = output.ImportedFileChunkSize;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTask = (output, context) => {
    let contents = {
        __type: "DataRepositoryTask",
        CreationTime: undefined,
        EndTime: undefined,
        FailureDetails: undefined,
        FileSystemId: undefined,
        Lifecycle: undefined,
        Paths: undefined,
        Report: undefined,
        ResourceARN: undefined,
        StartTime: undefined,
        Status: undefined,
        Tags: undefined,
        TaskId: undefined,
        Type: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
        contents.FailureDetails = deserializeAws_json1_1DataRepositoryTaskFailureDetails(output.FailureDetails, context);
    }
    if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
        contents.FileSystemId = output.FileSystemId;
    }
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    if (output.Paths !== undefined && output.Paths !== null) {
        contents.Paths = deserializeAws_json1_1DataRepositoryTaskPaths(output.Paths, context);
    }
    if (output.Report !== undefined && output.Report !== null) {
        contents.Report = deserializeAws_json1_1CompletionReport(output.Report, context);
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1DataRepositoryTaskStatus(output.Status, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.TaskId !== undefined && output.TaskId !== null) {
        contents.TaskId = output.TaskId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskEnded = (output, context) => {
    let contents = {
        __type: "DataRepositoryTaskEnded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskExecuting = (output, context) => {
    let contents = {
        __type: "DataRepositoryTaskExecuting",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskFailureDetails = (output, context) => {
    let contents = {
        __type: "DataRepositoryTaskFailureDetails",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskNotFound = (output, context) => {
    let contents = {
        __type: "DataRepositoryTaskNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskPaths = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DataRepositoryTaskStatus = (output, context) => {
    let contents = {
        __type: "DataRepositoryTaskStatus",
        FailedCount: undefined,
        LastUpdatedTime: undefined,
        SucceededCount: undefined,
        TotalCount: undefined
    };
    if (output.FailedCount !== undefined && output.FailedCount !== null) {
        contents.FailedCount = output.FailedCount;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.SucceededCount !== undefined && output.SucceededCount !== null) {
        contents.SucceededCount = output.SucceededCount;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1DataRepositoryTasks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataRepositoryTask(entry, context));
};
const deserializeAws_json1_1DeleteBackupResponse = (output, context) => {
    let contents = {
        __type: "DeleteBackupResponse",
        BackupId: undefined,
        Lifecycle: undefined
    };
    if (output.BackupId !== undefined && output.BackupId !== null) {
        contents.BackupId = output.BackupId;
    }
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    return contents;
};
const deserializeAws_json1_1DeleteFileSystemResponse = (output, context) => {
    let contents = {
        __type: "DeleteFileSystemResponse",
        FileSystemId: undefined,
        Lifecycle: undefined,
        WindowsResponse: undefined
    };
    if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
        contents.FileSystemId = output.FileSystemId;
    }
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    if (output.WindowsResponse !== undefined && output.WindowsResponse !== null) {
        contents.WindowsResponse = deserializeAws_json1_1DeleteFileSystemWindowsResponse(output.WindowsResponse, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteFileSystemWindowsResponse = (output, context) => {
    let contents = {
        __type: "DeleteFileSystemWindowsResponse",
        FinalBackupId: undefined,
        FinalBackupTags: undefined
    };
    if (output.FinalBackupId !== undefined && output.FinalBackupId !== null) {
        contents.FinalBackupId = output.FinalBackupId;
    }
    if (output.FinalBackupTags !== undefined && output.FinalBackupTags !== null) {
        contents.FinalBackupTags = deserializeAws_json1_1Tags(output.FinalBackupTags, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeBackupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeBackupsResponse",
        Backups: undefined,
        NextToken: undefined
    };
    if (output.Backups !== undefined && output.Backups !== null) {
        contents.Backups = deserializeAws_json1_1Backups(output.Backups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDataRepositoryTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeDataRepositoryTasksResponse",
        DataRepositoryTasks: undefined,
        NextToken: undefined
    };
    if (output.DataRepositoryTasks !== undefined &&
        output.DataRepositoryTasks !== null) {
        contents.DataRepositoryTasks = deserializeAws_json1_1DataRepositoryTasks(output.DataRepositoryTasks, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeFileSystemsResponse = (output, context) => {
    let contents = {
        __type: "DescribeFileSystemsResponse",
        FileSystems: undefined,
        NextToken: undefined
    };
    if (output.FileSystems !== undefined && output.FileSystems !== null) {
        contents.FileSystems = deserializeAws_json1_1FileSystems(output.FileSystems, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DnsIps = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FileSystem = (output, context) => {
    let contents = {
        __type: "FileSystem",
        CreationTime: undefined,
        DNSName: undefined,
        FailureDetails: undefined,
        FileSystemId: undefined,
        FileSystemType: undefined,
        KmsKeyId: undefined,
        Lifecycle: undefined,
        LustreConfiguration: undefined,
        NetworkInterfaceIds: undefined,
        OwnerId: undefined,
        ResourceARN: undefined,
        StorageCapacity: undefined,
        SubnetIds: undefined,
        Tags: undefined,
        VpcId: undefined,
        WindowsConfiguration: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DNSName !== undefined && output.DNSName !== null) {
        contents.DNSName = output.DNSName;
    }
    if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
        contents.FailureDetails = deserializeAws_json1_1FileSystemFailureDetails(output.FailureDetails, context);
    }
    if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
        contents.FileSystemId = output.FileSystemId;
    }
    if (output.FileSystemType !== undefined && output.FileSystemType !== null) {
        contents.FileSystemType = output.FileSystemType;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
        contents.Lifecycle = output.Lifecycle;
    }
    if (output.LustreConfiguration !== undefined &&
        output.LustreConfiguration !== null) {
        contents.LustreConfiguration = deserializeAws_json1_1LustreFileSystemConfiguration(output.LustreConfiguration, context);
    }
    if (output.NetworkInterfaceIds !== undefined &&
        output.NetworkInterfaceIds !== null) {
        contents.NetworkInterfaceIds = deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context);
    }
    if (output.OwnerId !== undefined && output.OwnerId !== null) {
        contents.OwnerId = output.OwnerId;
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.StorageCapacity !== undefined && output.StorageCapacity !== null) {
        contents.StorageCapacity = output.StorageCapacity;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    if (output.WindowsConfiguration !== undefined &&
        output.WindowsConfiguration !== null) {
        contents.WindowsConfiguration = deserializeAws_json1_1WindowsFileSystemConfiguration(output.WindowsConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1FileSystemFailureDetails = (output, context) => {
    let contents = {
        __type: "FileSystemFailureDetails",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1FileSystemMaintenanceOperations = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FileSystemNotFound = (output, context) => {
    let contents = {
        __type: "FileSystemNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1FileSystems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FileSystem(entry, context));
};
const deserializeAws_json1_1IncompatibleParameterError = (output, context) => {
    let contents = {
        __type: "IncompatibleParameterError",
        Message: undefined,
        Parameter: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Parameter !== undefined && output.Parameter !== null) {
        contents.Parameter = output.Parameter;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidExportPath = (output, context) => {
    let contents = {
        __type: "InvalidExportPath",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidImportPath = (output, context) => {
    let contents = {
        __type: "InvalidImportPath",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNetworkSettings = (output, context) => {
    let contents = {
        __type: "InvalidNetworkSettings",
        InvalidSecurityGroupId: undefined,
        InvalidSubnetId: undefined,
        Message: undefined
    };
    if (output.InvalidSecurityGroupId !== undefined &&
        output.InvalidSecurityGroupId !== null) {
        contents.InvalidSecurityGroupId = output.InvalidSecurityGroupId;
    }
    if (output.InvalidSubnetId !== undefined && output.InvalidSubnetId !== null) {
        contents.InvalidSubnetId = output.InvalidSubnetId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LustreFileSystemConfiguration = (output, context) => {
    let contents = {
        __type: "LustreFileSystemConfiguration",
        DataRepositoryConfiguration: undefined,
        WeeklyMaintenanceStartTime: undefined
    };
    if (output.DataRepositoryConfiguration !== undefined &&
        output.DataRepositoryConfiguration !== null) {
        contents.DataRepositoryConfiguration = deserializeAws_json1_1DataRepositoryConfiguration(output.DataRepositoryConfiguration, context);
    }
    if (output.WeeklyMaintenanceStartTime !== undefined &&
        output.WeeklyMaintenanceStartTime !== null) {
        contents.WeeklyMaintenanceStartTime = output.WeeklyMaintenanceStartTime;
    }
    return contents;
};
const deserializeAws_json1_1MissingFileSystemConfiguration = (output, context) => {
    let contents = {
        __type: "MissingFileSystemConfiguration",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterfaceIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NotServiceResourceError = (output, context) => {
    let contents = {
        __type: "NotServiceResourceError",
        Message: undefined,
        ResourceARN: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDoesNotSupportTagging = (output, context) => {
    let contents = {
        __type: "ResourceDoesNotSupportTagging",
        Message: undefined,
        ResourceARN: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFound = (output, context) => {
    let contents = {
        __type: "ResourceNotFound",
        Message: undefined,
        ResourceARN: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = (output, context) => {
    let contents = {
        __type: "SelfManagedActiveDirectoryAttributes",
        DnsIps: undefined,
        DomainName: undefined,
        FileSystemAdministratorsGroup: undefined,
        OrganizationalUnitDistinguishedName: undefined,
        UserName: undefined
    };
    if (output.DnsIps !== undefined && output.DnsIps !== null) {
        contents.DnsIps = deserializeAws_json1_1DnsIps(output.DnsIps, context);
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.FileSystemAdministratorsGroup !== undefined &&
        output.FileSystemAdministratorsGroup !== null) {
        contents.FileSystemAdministratorsGroup =
            output.FileSystemAdministratorsGroup;
    }
    if (output.OrganizationalUnitDistinguishedName !== undefined &&
        output.OrganizationalUnitDistinguishedName !== null) {
        contents.OrganizationalUnitDistinguishedName =
            output.OrganizationalUnitDistinguishedName;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1ServiceLimitExceeded = (output, context) => {
    let contents = {
        __type: "ServiceLimitExceeded",
        Limit: undefined,
        Message: undefined
    };
    if (output.Limit !== undefined && output.Limit !== null) {
        contents.Limit = output.Limit;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1UnsupportedOperation = (output, context) => {
    let contents = {
        __type: "UnsupportedOperation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateFileSystemResponse = (output, context) => {
    let contents = {
        __type: "UpdateFileSystemResponse",
        FileSystem: undefined
    };
    if (output.FileSystem !== undefined && output.FileSystem !== null) {
        contents.FileSystem = deserializeAws_json1_1FileSystem(output.FileSystem, context);
    }
    return contents;
};
const deserializeAws_json1_1WindowsFileSystemConfiguration = (output, context) => {
    let contents = {
        __type: "WindowsFileSystemConfiguration",
        ActiveDirectoryId: undefined,
        AutomaticBackupRetentionDays: undefined,
        CopyTagsToBackups: undefined,
        DailyAutomaticBackupStartTime: undefined,
        DeploymentType: undefined,
        MaintenanceOperationsInProgress: undefined,
        PreferredFileServerIp: undefined,
        PreferredSubnetId: undefined,
        RemoteAdministrationEndpoint: undefined,
        SelfManagedActiveDirectoryConfiguration: undefined,
        ThroughputCapacity: undefined,
        WeeklyMaintenanceStartTime: undefined
    };
    if (output.ActiveDirectoryId !== undefined &&
        output.ActiveDirectoryId !== null) {
        contents.ActiveDirectoryId = output.ActiveDirectoryId;
    }
    if (output.AutomaticBackupRetentionDays !== undefined &&
        output.AutomaticBackupRetentionDays !== null) {
        contents.AutomaticBackupRetentionDays = output.AutomaticBackupRetentionDays;
    }
    if (output.CopyTagsToBackups !== undefined &&
        output.CopyTagsToBackups !== null) {
        contents.CopyTagsToBackups = output.CopyTagsToBackups;
    }
    if (output.DailyAutomaticBackupStartTime !== undefined &&
        output.DailyAutomaticBackupStartTime !== null) {
        contents.DailyAutomaticBackupStartTime =
            output.DailyAutomaticBackupStartTime;
    }
    if (output.DeploymentType !== undefined && output.DeploymentType !== null) {
        contents.DeploymentType = output.DeploymentType;
    }
    if (output.MaintenanceOperationsInProgress !== undefined &&
        output.MaintenanceOperationsInProgress !== null) {
        contents.MaintenanceOperationsInProgress = deserializeAws_json1_1FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context);
    }
    if (output.PreferredFileServerIp !== undefined &&
        output.PreferredFileServerIp !== null) {
        contents.PreferredFileServerIp = output.PreferredFileServerIp;
    }
    if (output.PreferredSubnetId !== undefined &&
        output.PreferredSubnetId !== null) {
        contents.PreferredSubnetId = output.PreferredSubnetId;
    }
    if (output.RemoteAdministrationEndpoint !== undefined &&
        output.RemoteAdministrationEndpoint !== null) {
        contents.RemoteAdministrationEndpoint = output.RemoteAdministrationEndpoint;
    }
    if (output.SelfManagedActiveDirectoryConfiguration !== undefined &&
        output.SelfManagedActiveDirectoryConfiguration !== null) {
        contents.SelfManagedActiveDirectoryConfiguration = deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(output.SelfManagedActiveDirectoryConfiguration, context);
    }
    if (output.ThroughputCapacity !== undefined &&
        output.ThroughputCapacity !== null) {
        contents.ThroughputCapacity = output.ThroughputCapacity;
    }
    if (output.WeeklyMaintenanceStartTime !== undefined &&
        output.WeeklyMaintenanceStartTime !== null) {
        contents.WeeklyMaintenanceStartTime = output.WeeklyMaintenanceStartTime;
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