"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAssumeRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAssumeRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AssumeRole", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAssumeRoleCommand = serializeAws_queryAssumeRoleCommand;
async function serializeAws_queryAssumeRoleWithSAMLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAssumeRoleWithSAMLRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AssumeRoleWithSAML", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAssumeRoleWithSAMLCommand = serializeAws_queryAssumeRoleWithSAMLCommand;
async function serializeAws_queryAssumeRoleWithWebIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AssumeRoleWithWebIdentity", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAssumeRoleWithWebIdentityCommand = serializeAws_queryAssumeRoleWithWebIdentityCommand;
async function serializeAws_queryDecodeAuthorizationMessageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDecodeAuthorizationMessageRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DecodeAuthorizationMessage", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDecodeAuthorizationMessageCommand = serializeAws_queryDecodeAuthorizationMessageCommand;
async function serializeAws_queryGetAccessKeyInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetAccessKeyInfoRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetAccessKeyInfo", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccessKeyInfoCommand = serializeAws_queryGetAccessKeyInfoCommand;
async function serializeAws_queryGetCallerIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetCallerIdentityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetCallerIdentity", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetCallerIdentityCommand = serializeAws_queryGetCallerIdentityCommand;
async function serializeAws_queryGetFederationTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetFederationTokenRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetFederationToken", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetFederationTokenCommand = serializeAws_queryGetFederationTokenCommand;
async function serializeAws_queryGetSessionTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetSessionTokenRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetSessionToken", Version: "2011-06-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSessionTokenCommand = serializeAws_queryGetSessionTokenCommand;
async function deserializeAws_queryAssumeRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAssumeRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssumeRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAssumeRoleCommand = deserializeAws_queryAssumeRoleCommand;
async function deserializeAws_queryAssumeRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocumentException":
        case "com.amazon.its#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PackedPolicyTooLargeException":
        case "com.amazon.its#PackedPolicyTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RegionDisabledException":
        case "com.amazon.its#RegionDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAssumeRoleWithSAMLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssumeRoleWithSAMLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAssumeRoleWithSAMLCommand = deserializeAws_queryAssumeRoleWithSAMLCommand;
async function deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazon.its#ExpiredTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IDPRejectedClaimException":
        case "com.amazon.its#IDPRejectedClaimException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIdentityTokenException":
        case "com.amazon.its#InvalidIdentityTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.its#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PackedPolicyTooLargeException":
        case "com.amazon.its#PackedPolicyTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RegionDisabledException":
        case "com.amazon.its#RegionDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAssumeRoleWithWebIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssumeRoleWithWebIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAssumeRoleWithWebIdentityCommand = deserializeAws_queryAssumeRoleWithWebIdentityCommand;
async function deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazon.its#ExpiredTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IDPCommunicationErrorException":
        case "com.amazon.its#IDPCommunicationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IDPRejectedClaimException":
        case "com.amazon.its#IDPRejectedClaimException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIdentityTokenException":
        case "com.amazon.its#InvalidIdentityTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.its#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PackedPolicyTooLargeException":
        case "com.amazon.its#PackedPolicyTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RegionDisabledException":
        case "com.amazon.its#RegionDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDecodeAuthorizationMessageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DecodeAuthorizationMessageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDecodeAuthorizationMessageCommand = deserializeAws_queryDecodeAuthorizationMessageCommand;
async function deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazon.its#InvalidAuthorizationMessageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetAccessKeyInfoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccessKeyInfoResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccessKeyInfoCommand = deserializeAws_queryGetAccessKeyInfoCommand;
async function deserializeAws_queryGetAccessKeyInfoCommandError(output, context) {
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
async function deserializeAws_queryGetCallerIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetCallerIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCallerIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetCallerIdentityCommand = deserializeAws_queryGetCallerIdentityCommand;
async function deserializeAws_queryGetCallerIdentityCommandError(output, context) {
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
async function deserializeAws_queryGetFederationTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetFederationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFederationTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetFederationTokenCommand = deserializeAws_queryGetFederationTokenCommand;
async function deserializeAws_queryGetFederationTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocumentException":
        case "com.amazon.its#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PackedPolicyTooLargeException":
        case "com.amazon.its#PackedPolicyTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RegionDisabledException":
        case "com.amazon.its#RegionDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetSessionTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSessionTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSessionTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSessionTokenCommand = deserializeAws_queryGetSessionTokenCommand;
async function deserializeAws_queryGetSessionTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazon.its#RegionDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExpiredTokenException(body.Error, context);
    const contents = Object.assign({ name: "ExpiredTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
    const contents = Object.assign({ name: "IDPCommunicationErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
    const contents = Object.assign({ name: "IDPRejectedClaimException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthorizationMessageException(body.Error, context);
    const contents = Object.assign({ name: "InvalidAuthorizationMessageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
    const contents = Object.assign({ name: "InvalidIdentityTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const contents = Object.assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
    const contents = Object.assign({ name: "PackedPolicyTooLargeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryRegionDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRegionDisabledException(body.Error, context);
    const contents = Object.assign({ name: "RegionDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.ExternalId !== undefined) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns !== undefined) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TokenCode !== undefined) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.TransitiveTagKeys !== undefined) {
        const memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns !== undefined) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PrincipalArn !== undefined) {
        entries["PrincipalArn"] = input.PrincipalArn;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.SAMLAssertion !== undefined) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns !== undefined) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ProviderId !== undefined) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken !== undefined) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    return entries;
};
const serializeAws_queryDecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input.EncodedMessage !== undefined) {
        entries["EncodedMessage"] = input.EncodedMessage;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryGetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns !== undefined) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode !== undefined) {
        entries["TokenCode"] = input.TokenCode;
    }
    return entries;
};
const serializeAws_queryPolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input.arn !== undefined) {
        entries["arn"] = input.arn;
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
const serializeAws_querypolicyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
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
const deserializeAws_queryAssumeRoleResponse = (output, context) => {
    let contents = {
        __type: "AssumeRoleResponse",
        AssumedRoleUser: undefined,
        Credentials: undefined,
        PackedPolicySize: undefined
    };
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithSAMLResponse = (output, context) => {
    let contents = {
        __type: "AssumeRoleWithSAMLResponse",
        AssumedRoleUser: undefined,
        Audience: undefined,
        Credentials: undefined,
        Issuer: undefined,
        NameQualifier: undefined,
        PackedPolicySize: undefined,
        Subject: undefined,
        SubjectType: undefined
    };
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = output["Audience"];
    }
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = output["Issuer"];
    }
    if (output["NameQualifier"] !== undefined) {
        contents.NameQualifier = output["NameQualifier"];
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
    }
    if (output["Subject"] !== undefined) {
        contents.Subject = output["Subject"];
    }
    if (output["SubjectType"] !== undefined) {
        contents.SubjectType = output["SubjectType"];
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (output, context) => {
    let contents = {
        __type: "AssumeRoleWithWebIdentityResponse",
        AssumedRoleUser: undefined,
        Audience: undefined,
        Credentials: undefined,
        PackedPolicySize: undefined,
        Provider: undefined,
        SubjectFromWebIdentityToken: undefined
    };
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = output["Audience"];
    }
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = output["Provider"];
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken =
            output["SubjectFromWebIdentityToken"];
    }
    return contents;
};
const deserializeAws_queryAssumedRoleUser = (output, context) => {
    let contents = {
        __type: "AssumedRoleUser",
        Arn: undefined,
        AssumedRoleId: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = output["AssumedRoleId"];
    }
    return contents;
};
const deserializeAws_queryCredentials = (output, context) => {
    let contents = {
        __type: "Credentials",
        AccessKeyId: undefined,
        Expiration: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = output["AccessKeyId"];
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = new Date(output["Expiration"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = output["SecretAccessKey"];
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = output["SessionToken"];
    }
    return contents;
};
const deserializeAws_queryDecodeAuthorizationMessageResponse = (output, context) => {
    let contents = {
        __type: "DecodeAuthorizationMessageResponse",
        DecodedMessage: undefined
    };
    if (output["DecodedMessage"] !== undefined) {
        contents.DecodedMessage = output["DecodedMessage"];
    }
    return contents;
};
const deserializeAws_queryExpiredTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredTokenException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryFederatedUser = (output, context) => {
    let contents = {
        __type: "FederatedUser",
        Arn: undefined,
        FederatedUserId: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["FederatedUserId"] !== undefined) {
        contents.FederatedUserId = output["FederatedUserId"];
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyInfoResponse = (output, context) => {
    let contents = {
        __type: "GetAccessKeyInfoResponse",
        Account: undefined
    };
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    return contents;
};
const deserializeAws_queryGetCallerIdentityResponse = (output, context) => {
    let contents = {
        __type: "GetCallerIdentityResponse",
        Account: undefined,
        Arn: undefined,
        UserId: undefined
    };
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    return contents;
};
const deserializeAws_queryGetFederationTokenResponse = (output, context) => {
    let contents = {
        __type: "GetFederationTokenResponse",
        Credentials: undefined,
        FederatedUser: undefined,
        PackedPolicySize: undefined
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["FederatedUser"] !== undefined) {
        contents.FederatedUser = deserializeAws_queryFederatedUser(output["FederatedUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
    }
    return contents;
};
const deserializeAws_queryGetSessionTokenResponse = (output, context) => {
    let contents = {
        __type: "GetSessionTokenResponse",
        Credentials: undefined
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    return contents;
};
const deserializeAws_queryIDPCommunicationErrorException = (output, context) => {
    let contents = {
        __type: "IDPCommunicationErrorException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryIDPRejectedClaimException = (output, context) => {
    let contents = {
        __type: "IDPRejectedClaimException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidAuthorizationMessageException = (output, context) => {
    let contents = {
        __type: "InvalidAuthorizationMessageException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidIdentityTokenException = (output, context) => {
    let contents = {
        __type: "InvalidIdentityTokenException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    let contents = {
        __type: "MalformedPolicyDocumentException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPackedPolicyTooLargeException = (output, context) => {
    let contents = {
        __type: "PackedPolicyTooLargeException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRegionDisabledException = (output, context) => {
    let contents = {
        __type: "RegionDisabledException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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