"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.AssociateNode";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateNodeCommand = serializeAws_json1_1AssociateNodeCommand;
async function serializeAws_json1_1CreateBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.CreateBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBackupCommand = serializeAws_json1_1CreateBackupCommand;
async function serializeAws_json1_1CreateServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.CreateServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateServerCommand = serializeAws_json1_1CreateServerCommand;
async function serializeAws_json1_1DeleteBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DeleteBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBackupCommand = serializeAws_json1_1DeleteBackupCommand;
async function serializeAws_json1_1DeleteServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DeleteServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServerCommand = serializeAws_json1_1DeleteServerCommand;
async function serializeAws_json1_1DescribeAccountAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeAccountAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAccountAttributesCommand = serializeAws_json1_1DescribeAccountAttributesCommand;
async function serializeAws_json1_1DescribeBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBackupsCommand = serializeAws_json1_1DescribeBackupsCommand;
async function serializeAws_json1_1DescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
async function serializeAws_json1_1DescribeNodeAssociationStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNodeAssociationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNodeAssociationStatusCommand = serializeAws_json1_1DescribeNodeAssociationStatusCommand;
async function serializeAws_json1_1DescribeServersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeServers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServersCommand = serializeAws_json1_1DescribeServersCommand;
async function serializeAws_json1_1DisassociateNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DisassociateNode";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateNodeCommand = serializeAws_json1_1DisassociateNodeCommand;
async function serializeAws_json1_1ExportServerEngineAttributeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExportServerEngineAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExportServerEngineAttributeCommand = serializeAws_json1_1ExportServerEngineAttributeCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1RestoreServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.RestoreServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreServerCommand = serializeAws_json1_1RestoreServerCommand;
async function serializeAws_json1_1StartMaintenanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.StartMaintenance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMaintenanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMaintenanceCommand = serializeAws_json1_1StartMaintenanceCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.UpdateServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServerCommand = serializeAws_json1_1UpdateServerCommand;
async function serializeAws_json1_1UpdateServerEngineAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerEngineAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServerEngineAttributesCommand = serializeAws_json1_1UpdateServerEngineAttributesCommand;
async function deserializeAws_json1_1AssociateNodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateNodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateNodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateNodeCommand = deserializeAws_json1_1AssociateNodeCommand;
async function deserializeAws_json1_1AssociateNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.opsworkscm#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateServerCommand = deserializeAws_json1_1CreateServerCommand;
async function deserializeAws_json1_1CreateServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.opsworkscm#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.opsworkscm#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServerCommand = deserializeAws_json1_1DeleteServerCommand;
async function deserializeAws_json1_1DeleteServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAccountAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAccountAttributesCommand = deserializeAws_json1_1DescribeAccountAttributesCommand;
async function deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context) {
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
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
async function deserializeAws_json1_1DescribeEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeNodeAssociationStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNodeAssociationStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNodeAssociationStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNodeAssociationStatusCommand = deserializeAws_json1_1DescribeNodeAssociationStatusCommand;
async function deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeServersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServersCommand = deserializeAws_json1_1DescribeServersCommand;
async function deserializeAws_json1_1DescribeServersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateNodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateNodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateNodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateNodeCommand = deserializeAws_json1_1DisassociateNodeCommand;
async function deserializeAws_json1_1DisassociateNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ExportServerEngineAttributeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExportServerEngineAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportServerEngineAttributeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExportServerEngineAttributeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExportServerEngineAttributeCommand = deserializeAws_json1_1ExportServerEngineAttributeCommand;
async function deserializeAws_json1_1ExportServerEngineAttributeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RestoreServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreServerCommand = deserializeAws_json1_1RestoreServerCommand;
async function deserializeAws_json1_1RestoreServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartMaintenanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMaintenanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMaintenanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMaintenanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMaintenanceCommand = deserializeAws_json1_1StartMaintenanceCommand;
async function deserializeAws_json1_1StartMaintenanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServerCommand = deserializeAws_json1_1UpdateServerCommand;
async function deserializeAws_json1_1UpdateServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateServerEngineAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServerEngineAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServerEngineAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServerEngineAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServerEngineAttributesCommand = deserializeAws_json1_1UpdateServerEngineAttributesCommand;
async function deserializeAws_json1_1UpdateServerEngineAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = Object.assign({ name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateNodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.EngineAttributes !== undefined) {
        bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(input.EngineAttributes, context);
    }
    if (input.NodeName !== undefined) {
        bodyParams["NodeName"] = input.NodeName;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociatePublicIpAddress !== undefined) {
        bodyParams["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
    }
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.BackupRetentionCount !== undefined) {
        bodyParams["BackupRetentionCount"] = input.BackupRetentionCount;
    }
    if (input.CustomCertificate !== undefined) {
        bodyParams["CustomCertificate"] = input.CustomCertificate;
    }
    if (input.CustomDomain !== undefined) {
        bodyParams["CustomDomain"] = input.CustomDomain;
    }
    if (input.CustomPrivateKey !== undefined) {
        bodyParams["CustomPrivateKey"] = input.CustomPrivateKey;
    }
    if (input.DisableAutomatedBackup !== undefined) {
        bodyParams["DisableAutomatedBackup"] = input.DisableAutomatedBackup;
    }
    if (input.Engine !== undefined) {
        bodyParams["Engine"] = input.Engine;
    }
    if (input.EngineAttributes !== undefined) {
        bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(input.EngineAttributes, context);
    }
    if (input.EngineModel !== undefined) {
        bodyParams["EngineModel"] = input.EngineModel;
    }
    if (input.EngineVersion !== undefined) {
        bodyParams["EngineVersion"] = input.EngineVersion;
    }
    if (input.InstanceProfileArn !== undefined) {
        bodyParams["InstanceProfileArn"] = input.InstanceProfileArn;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.KeyPair !== undefined) {
        bodyParams["KeyPair"] = input.KeyPair;
    }
    if (input.PreferredBackupWindow !== undefined) {
        bodyParams["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1Strings(input.SecurityGroupIds, context);
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1Strings(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAccountAttributesRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeBackupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNodeAssociationStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.NodeAssociationStatusToken !== undefined) {
        bodyParams["NodeAssociationStatusToken"] = input.NodeAssociationStatusToken;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateNodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.EngineAttributes !== undefined) {
        bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(input.EngineAttributes, context);
    }
    if (input.NodeName !== undefined) {
        bodyParams["NodeName"] = input.NodeName;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1EngineAttribute = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1EngineAttributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EngineAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ExportServerEngineAttributeRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExportAttributeName !== undefined) {
        bodyParams["ExportAttributeName"] = input.ExportAttributeName;
    }
    if (input.InputAttributes !== undefined) {
        bodyParams["InputAttributes"] = serializeAws_json1_1EngineAttributes(input.InputAttributes, context);
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RestoreServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.KeyPair !== undefined) {
        bodyParams["KeyPair"] = input.KeyPair;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartMaintenanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.EngineAttributes !== undefined) {
        bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(input.EngineAttributes, context);
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1Strings = (input, context) => {
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServerEngineAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined) {
        bodyParams["AttributeValue"] = input.AttributeValue;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupRetentionCount !== undefined) {
        bodyParams["BackupRetentionCount"] = input.BackupRetentionCount;
    }
    if (input.DisableAutomatedBackup !== undefined) {
        bodyParams["DisableAutomatedBackup"] = input.DisableAutomatedBackup;
    }
    if (input.PreferredBackupWindow !== undefined) {
        bodyParams["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccountAttribute = (output, context) => {
    let contents = {
        __type: "AccountAttribute",
        Maximum: undefined,
        Name: undefined,
        Used: undefined
    };
    if (output.Maximum !== undefined && output.Maximum !== null) {
        contents.Maximum = output.Maximum;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Used !== undefined && output.Used !== null) {
        contents.Used = output.Used;
    }
    return contents;
};
const deserializeAws_json1_1AccountAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccountAttribute(entry, context));
};
const deserializeAws_json1_1AssociateNodeResponse = (output, context) => {
    let contents = {
        __type: "AssociateNodeResponse",
        NodeAssociationStatusToken: undefined
    };
    if (output.NodeAssociationStatusToken !== undefined &&
        output.NodeAssociationStatusToken !== null) {
        contents.NodeAssociationStatusToken = output.NodeAssociationStatusToken;
    }
    return contents;
};
const deserializeAws_json1_1Backup = (output, context) => {
    let contents = {
        __type: "Backup",
        BackupArn: undefined,
        BackupId: undefined,
        BackupType: undefined,
        CreatedAt: undefined,
        Description: undefined,
        Engine: undefined,
        EngineModel: undefined,
        EngineVersion: undefined,
        InstanceProfileArn: undefined,
        InstanceType: undefined,
        KeyPair: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        S3DataSize: undefined,
        S3DataUrl: undefined,
        S3LogUrl: undefined,
        SecurityGroupIds: undefined,
        ServerName: undefined,
        ServiceRoleArn: undefined,
        Status: undefined,
        StatusDescription: undefined,
        SubnetIds: undefined,
        ToolsVersion: undefined,
        UserArn: undefined
    };
    if (output.BackupArn !== undefined && output.BackupArn !== null) {
        contents.BackupArn = output.BackupArn;
    }
    if (output.BackupId !== undefined && output.BackupId !== null) {
        contents.BackupId = output.BackupId;
    }
    if (output.BackupType !== undefined && output.BackupType !== null) {
        contents.BackupType = output.BackupType;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Engine !== undefined && output.Engine !== null) {
        contents.Engine = output.Engine;
    }
    if (output.EngineModel !== undefined && output.EngineModel !== null) {
        contents.EngineModel = output.EngineModel;
    }
    if (output.EngineVersion !== undefined && output.EngineVersion !== null) {
        contents.EngineVersion = output.EngineVersion;
    }
    if (output.InstanceProfileArn !== undefined &&
        output.InstanceProfileArn !== null) {
        contents.InstanceProfileArn = output.InstanceProfileArn;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.KeyPair !== undefined && output.KeyPair !== null) {
        contents.KeyPair = output.KeyPair;
    }
    if (output.PreferredBackupWindow !== undefined &&
        output.PreferredBackupWindow !== null) {
        contents.PreferredBackupWindow = output.PreferredBackupWindow;
    }
    if (output.PreferredMaintenanceWindow !== undefined &&
        output.PreferredMaintenanceWindow !== null) {
        contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
    }
    if (output.S3DataSize !== undefined && output.S3DataSize !== null) {
        contents.S3DataSize = output.S3DataSize;
    }
    if (output.S3DataUrl !== undefined && output.S3DataUrl !== null) {
        contents.S3DataUrl = output.S3DataUrl;
    }
    if (output.S3LogUrl !== undefined && output.S3LogUrl !== null) {
        contents.S3LogUrl = output.S3LogUrl;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1Strings(output.SecurityGroupIds, context);
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDescription !== undefined &&
        output.StatusDescription !== null) {
        contents.StatusDescription = output.StatusDescription;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1Strings(output.SubnetIds, context);
    }
    if (output.ToolsVersion !== undefined && output.ToolsVersion !== null) {
        contents.ToolsVersion = output.ToolsVersion;
    }
    if (output.UserArn !== undefined && output.UserArn !== null) {
        contents.UserArn = output.UserArn;
    }
    return contents;
};
const deserializeAws_json1_1Backups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Backup(entry, context));
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
const deserializeAws_json1_1CreateServerResponse = (output, context) => {
    let contents = {
        __type: "CreateServerResponse",
        Server: undefined
    };
    if (output.Server !== undefined && output.Server !== null) {
        contents.Server = deserializeAws_json1_1Server(output.Server, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteBackupResponse = (output, context) => {
    let contents = {
        __type: "DeleteBackupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteServerResponse = (output, context) => {
    let contents = {
        __type: "DeleteServerResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAccountAttributesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAccountAttributesResponse",
        Attributes: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1AccountAttributes(output.Attributes, context);
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
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventsResponse",
        NextToken: undefined,
        ServerEvents: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ServerEvents !== undefined && output.ServerEvents !== null) {
        contents.ServerEvents = deserializeAws_json1_1ServerEvents(output.ServerEvents, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeNodeAssociationStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeNodeAssociationStatusResponse",
        EngineAttributes: undefined,
        NodeAssociationStatus: undefined
    };
    if (output.EngineAttributes !== undefined &&
        output.EngineAttributes !== null) {
        contents.EngineAttributes = deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context);
    }
    if (output.NodeAssociationStatus !== undefined &&
        output.NodeAssociationStatus !== null) {
        contents.NodeAssociationStatus = output.NodeAssociationStatus;
    }
    return contents;
};
const deserializeAws_json1_1DescribeServersResponse = (output, context) => {
    let contents = {
        __type: "DescribeServersResponse",
        NextToken: undefined,
        Servers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Servers !== undefined && output.Servers !== null) {
        contents.Servers = deserializeAws_json1_1Servers(output.Servers, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateNodeResponse = (output, context) => {
    let contents = {
        __type: "DisassociateNodeResponse",
        NodeAssociationStatusToken: undefined
    };
    if (output.NodeAssociationStatusToken !== undefined &&
        output.NodeAssociationStatusToken !== null) {
        contents.NodeAssociationStatusToken = output.NodeAssociationStatusToken;
    }
    return contents;
};
const deserializeAws_json1_1EngineAttribute = (output, context) => {
    let contents = {
        __type: "EngineAttribute",
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
const deserializeAws_json1_1EngineAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EngineAttribute(entry, context));
};
const deserializeAws_json1_1ExportServerEngineAttributeResponse = (output, context) => {
    let contents = {
        __type: "ExportServerEngineAttributeResponse",
        EngineAttribute: undefined,
        ServerName: undefined
    };
    if (output.EngineAttribute !== undefined && output.EngineAttribute !== null) {
        contents.EngineAttribute = deserializeAws_json1_1EngineAttribute(output.EngineAttribute, context);
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    let contents = {
        __type: "InvalidStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
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
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1RestoreServerResponse = (output, context) => {
    let contents = {
        __type: "RestoreServerResponse"
    };
    return contents;
};
const deserializeAws_json1_1Server = (output, context) => {
    let contents = {
        __type: "Server",
        AssociatePublicIpAddress: undefined,
        BackupRetentionCount: undefined,
        CloudFormationStackArn: undefined,
        CreatedAt: undefined,
        CustomDomain: undefined,
        DisableAutomatedBackup: undefined,
        Endpoint: undefined,
        Engine: undefined,
        EngineAttributes: undefined,
        EngineModel: undefined,
        EngineVersion: undefined,
        InstanceProfileArn: undefined,
        InstanceType: undefined,
        KeyPair: undefined,
        MaintenanceStatus: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        SecurityGroupIds: undefined,
        ServerArn: undefined,
        ServerName: undefined,
        ServiceRoleArn: undefined,
        Status: undefined,
        StatusReason: undefined,
        SubnetIds: undefined
    };
    if (output.AssociatePublicIpAddress !== undefined &&
        output.AssociatePublicIpAddress !== null) {
        contents.AssociatePublicIpAddress = output.AssociatePublicIpAddress;
    }
    if (output.BackupRetentionCount !== undefined &&
        output.BackupRetentionCount !== null) {
        contents.BackupRetentionCount = output.BackupRetentionCount;
    }
    if (output.CloudFormationStackArn !== undefined &&
        output.CloudFormationStackArn !== null) {
        contents.CloudFormationStackArn = output.CloudFormationStackArn;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CustomDomain !== undefined && output.CustomDomain !== null) {
        contents.CustomDomain = output.CustomDomain;
    }
    if (output.DisableAutomatedBackup !== undefined &&
        output.DisableAutomatedBackup !== null) {
        contents.DisableAutomatedBackup = output.DisableAutomatedBackup;
    }
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = output.Endpoint;
    }
    if (output.Engine !== undefined && output.Engine !== null) {
        contents.Engine = output.Engine;
    }
    if (output.EngineAttributes !== undefined &&
        output.EngineAttributes !== null) {
        contents.EngineAttributes = deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context);
    }
    if (output.EngineModel !== undefined && output.EngineModel !== null) {
        contents.EngineModel = output.EngineModel;
    }
    if (output.EngineVersion !== undefined && output.EngineVersion !== null) {
        contents.EngineVersion = output.EngineVersion;
    }
    if (output.InstanceProfileArn !== undefined &&
        output.InstanceProfileArn !== null) {
        contents.InstanceProfileArn = output.InstanceProfileArn;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.KeyPair !== undefined && output.KeyPair !== null) {
        contents.KeyPair = output.KeyPair;
    }
    if (output.MaintenanceStatus !== undefined &&
        output.MaintenanceStatus !== null) {
        contents.MaintenanceStatus = output.MaintenanceStatus;
    }
    if (output.PreferredBackupWindow !== undefined &&
        output.PreferredBackupWindow !== null) {
        contents.PreferredBackupWindow = output.PreferredBackupWindow;
    }
    if (output.PreferredMaintenanceWindow !== undefined &&
        output.PreferredMaintenanceWindow !== null) {
        contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1Strings(output.SecurityGroupIds, context);
    }
    if (output.ServerArn !== undefined && output.ServerArn !== null) {
        contents.ServerArn = output.ServerArn;
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusReason !== undefined && output.StatusReason !== null) {
        contents.StatusReason = output.StatusReason;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1Strings(output.SubnetIds, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerEvent = (output, context) => {
    let contents = {
        __type: "ServerEvent",
        CreatedAt: undefined,
        LogUrl: undefined,
        Message: undefined,
        ServerName: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.LogUrl !== undefined && output.LogUrl !== null) {
        contents.LogUrl = output.LogUrl;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    return contents;
};
const deserializeAws_json1_1ServerEvents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerEvent(entry, context));
};
const deserializeAws_json1_1Servers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Server(entry, context));
};
const deserializeAws_json1_1StartMaintenanceResponse = (output, context) => {
    let contents = {
        __type: "StartMaintenanceResponse",
        Server: undefined
    };
    if (output.Server !== undefined && output.Server !== null) {
        contents.Server = deserializeAws_json1_1Server(output.Server, context);
    }
    return contents;
};
const deserializeAws_json1_1Strings = (output, context) => {
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateServerEngineAttributesResponse = (output, context) => {
    let contents = {
        __type: "UpdateServerEngineAttributesResponse",
        Server: undefined
    };
    if (output.Server !== undefined && output.Server !== null) {
        contents.Server = deserializeAws_json1_1Server(output.Server, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateServerResponse = (output, context) => {
    let contents = {
        __type: "UpdateServerResponse",
        Server: undefined
    };
    if (output.Server !== undefined && output.Server !== null) {
        contents.Server = deserializeAws_json1_1Server(output.Server, context);
    }
    return contents;
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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