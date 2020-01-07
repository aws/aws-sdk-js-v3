"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateMemberAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.AssociateMemberAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateMemberAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateMemberAccountCommand = serializeAws_json1_1AssociateMemberAccountCommand;
async function serializeAws_json1_1AssociateS3ResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.AssociateS3Resources";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateS3ResourcesCommand = serializeAws_json1_1AssociateS3ResourcesCommand;
async function serializeAws_json1_1DisassociateMemberAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.DisassociateMemberAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateMemberAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateMemberAccountCommand = serializeAws_json1_1DisassociateMemberAccountCommand;
async function serializeAws_json1_1DisassociateS3ResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.DisassociateS3Resources";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateS3ResourcesCommand = serializeAws_json1_1DisassociateS3ResourcesCommand;
async function serializeAws_json1_1ListMemberAccountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.ListMemberAccounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMemberAccountsCommand = serializeAws_json1_1ListMemberAccountsCommand;
async function serializeAws_json1_1ListS3ResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.ListS3Resources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListS3ResourcesCommand = serializeAws_json1_1ListS3ResourcesCommand;
async function serializeAws_json1_1UpdateS3ResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MacieService.UpdateS3Resources";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateS3ResourcesCommand = serializeAws_json1_1UpdateS3ResourcesCommand;
async function deserializeAws_json1_1AssociateMemberAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateMemberAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateMemberAccountCommand = deserializeAws_json1_1AssociateMemberAccountCommand;
async function deserializeAws_json1_1AssociateMemberAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.macie.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AssociateS3ResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateS3ResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateS3ResourcesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateS3ResourcesCommand = deserializeAws_json1_1AssociateS3ResourcesCommand;
async function deserializeAws_json1_1AssociateS3ResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie.service#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.macie.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateMemberAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateMemberAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateMemberAccountCommand = deserializeAws_json1_1DisassociateMemberAccountCommand;
async function deserializeAws_json1_1DisassociateMemberAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
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
async function deserializeAws_json1_1DisassociateS3ResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateS3ResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateS3ResourcesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateS3ResourcesCommand = deserializeAws_json1_1DisassociateS3ResourcesCommand;
async function deserializeAws_json1_1DisassociateS3ResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie.service#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
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
async function deserializeAws_json1_1ListMemberAccountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMemberAccountsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMemberAccountsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMemberAccountsCommand = deserializeAws_json1_1ListMemberAccountsCommand;
async function deserializeAws_json1_1ListMemberAccountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
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
async function deserializeAws_json1_1ListS3ResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListS3ResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListS3ResourcesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListS3ResourcesCommand = deserializeAws_json1_1ListS3ResourcesCommand;
async function deserializeAws_json1_1ListS3ResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie.service#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
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
async function deserializeAws_json1_1UpdateS3ResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateS3ResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateS3ResourcesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateS3ResourcesCommand = deserializeAws_json1_1UpdateS3ResourcesCommand;
async function deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie.service#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.macie.service#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie.service#InvalidInputException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = Object.assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateMemberAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateS3ResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    if (input.s3Resources !== undefined) {
        bodyParams["s3Resources"] = serializeAws_json1_1S3ResourcesClassification(input.s3Resources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ClassificationType = (input, context) => {
    const bodyParams = {};
    if (input.continuous !== undefined) {
        bodyParams["continuous"] = input.continuous;
    }
    if (input.oneTime !== undefined) {
        bodyParams["oneTime"] = input.oneTime;
    }
    return bodyParams;
};
const serializeAws_json1_1ClassificationTypeUpdate = (input, context) => {
    const bodyParams = {};
    if (input.continuous !== undefined) {
        bodyParams["continuous"] = input.continuous;
    }
    if (input.oneTime !== undefined) {
        bodyParams["oneTime"] = input.oneTime;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateMemberAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateS3ResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.associatedS3Resources !== undefined) {
        bodyParams["associatedS3Resources"] = serializeAws_json1_1S3Resources(input.associatedS3Resources, context);
    }
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMemberAccountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListS3ResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Resource = (input, context) => {
    const bodyParams = {};
    if (input.bucketName !== undefined) {
        bodyParams["bucketName"] = input.bucketName;
    }
    if (input.prefix !== undefined) {
        bodyParams["prefix"] = input.prefix;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ResourceClassification = (input, context) => {
    const bodyParams = {};
    if (input.bucketName !== undefined) {
        bodyParams["bucketName"] = input.bucketName;
    }
    if (input.classificationType !== undefined) {
        bodyParams["classificationType"] = serializeAws_json1_1ClassificationType(input.classificationType, context);
    }
    if (input.prefix !== undefined) {
        bodyParams["prefix"] = input.prefix;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ResourceClassificationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.bucketName !== undefined) {
        bodyParams["bucketName"] = input.bucketName;
    }
    if (input.classificationTypeUpdate !== undefined) {
        bodyParams["classificationTypeUpdate"] = serializeAws_json1_1ClassificationTypeUpdate(input.classificationTypeUpdate, context);
    }
    if (input.prefix !== undefined) {
        bodyParams["prefix"] = input.prefix;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Resources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3Resource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1S3ResourcesClassification = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3ResourceClassification(entry, context));
    }
    return contents;
};
const serializeAws_json1_1S3ResourcesClassificationUpdate = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3ResourceClassificationUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateS3ResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.memberAccountId !== undefined) {
        bodyParams["memberAccountId"] = input.memberAccountId;
    }
    if (input.s3ResourcesUpdate !== undefined) {
        bodyParams["s3ResourcesUpdate"] = serializeAws_json1_1S3ResourcesClassificationUpdate(input.s3ResourcesUpdate, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        message: undefined,
        resourceType: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1AssociateS3ResourcesResult = (output, context) => {
    let contents = {
        __type: "AssociateS3ResourcesResult",
        failedS3Resources: undefined
    };
    if (output.failedS3Resources !== undefined &&
        output.failedS3Resources !== null) {
        contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context);
    }
    return contents;
};
const deserializeAws_json1_1ClassificationType = (output, context) => {
    let contents = {
        __type: "ClassificationType",
        continuous: undefined,
        oneTime: undefined
    };
    if (output.continuous !== undefined && output.continuous !== null) {
        contents.continuous = output.continuous;
    }
    if (output.oneTime !== undefined && output.oneTime !== null) {
        contents.oneTime = output.oneTime;
    }
    return contents;
};
const deserializeAws_json1_1DisassociateS3ResourcesResult = (output, context) => {
    let contents = {
        __type: "DisassociateS3ResourcesResult",
        failedS3Resources: undefined
    };
    if (output.failedS3Resources !== undefined &&
        output.failedS3Resources !== null) {
        contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context);
    }
    return contents;
};
const deserializeAws_json1_1FailedS3Resource = (output, context) => {
    let contents = {
        __type: "FailedS3Resource",
        errorCode: undefined,
        errorMessage: undefined,
        failedItem: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.failedItem !== undefined && output.failedItem !== null) {
        contents.failedItem = deserializeAws_json1_1S3Resource(output.failedItem, context);
    }
    return contents;
};
const deserializeAws_json1_1FailedS3Resources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedS3Resource(entry, context));
};
const deserializeAws_json1_1InternalException = (output, context) => {
    let contents = {
        __type: "InternalException",
        errorCode: undefined,
        message: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        errorCode: undefined,
        fieldName: undefined,
        message: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.fieldName !== undefined && output.fieldName !== null) {
        contents.fieldName = output.fieldName;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        errorCode: undefined,
        message: undefined,
        resourceType: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1ListMemberAccountsResult = (output, context) => {
    let contents = {
        __type: "ListMemberAccountsResult",
        memberAccounts: undefined,
        nextToken: undefined
    };
    if (output.memberAccounts !== undefined && output.memberAccounts !== null) {
        contents.memberAccounts = deserializeAws_json1_1MemberAccounts(output.memberAccounts, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListS3ResourcesResult = (output, context) => {
    let contents = {
        __type: "ListS3ResourcesResult",
        nextToken: undefined,
        s3Resources: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.s3Resources !== undefined && output.s3Resources !== null) {
        contents.s3Resources = deserializeAws_json1_1S3ResourcesClassification(output.s3Resources, context);
    }
    return contents;
};
const deserializeAws_json1_1MemberAccount = (output, context) => {
    let contents = {
        __type: "MemberAccount",
        accountId: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    return contents;
};
const deserializeAws_json1_1MemberAccounts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MemberAccount(entry, context));
};
const deserializeAws_json1_1S3Resource = (output, context) => {
    let contents = {
        __type: "S3Resource",
        bucketName: undefined,
        prefix: undefined
    };
    if (output.bucketName !== undefined && output.bucketName !== null) {
        contents.bucketName = output.bucketName;
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        contents.prefix = output.prefix;
    }
    return contents;
};
const deserializeAws_json1_1S3ResourceClassification = (output, context) => {
    let contents = {
        __type: "S3ResourceClassification",
        bucketName: undefined,
        classificationType: undefined,
        prefix: undefined
    };
    if (output.bucketName !== undefined && output.bucketName !== null) {
        contents.bucketName = output.bucketName;
    }
    if (output.classificationType !== undefined &&
        output.classificationType !== null) {
        contents.classificationType = deserializeAws_json1_1ClassificationType(output.classificationType, context);
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        contents.prefix = output.prefix;
    }
    return contents;
};
const deserializeAws_json1_1S3ResourcesClassification = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1S3ResourceClassification(entry, context));
};
const deserializeAws_json1_1UpdateS3ResourcesResult = (output, context) => {
    let contents = {
        __type: "UpdateS3ResourcesResult",
        failedS3Resources: undefined
    };
    if (output.failedS3Resources !== undefined &&
        output.failedS3Resources !== null) {
        contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context);
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