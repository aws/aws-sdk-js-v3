"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateIdentityPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.CreateIdentityPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIdentityPoolCommand = serializeAws_json1_1CreateIdentityPoolCommand;
async function serializeAws_json1_1DeleteIdentitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.DeleteIdentities";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIdentitiesCommand = serializeAws_json1_1DeleteIdentitiesCommand;
async function serializeAws_json1_1DeleteIdentityPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.DeleteIdentityPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIdentityPoolCommand = serializeAws_json1_1DeleteIdentityPoolCommand;
async function serializeAws_json1_1DescribeIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.DescribeIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeIdentityCommand = serializeAws_json1_1DescribeIdentityCommand;
async function serializeAws_json1_1DescribeIdentityPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.DescribeIdentityPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeIdentityPoolCommand = serializeAws_json1_1DescribeIdentityPoolCommand;
async function serializeAws_json1_1GetCredentialsForIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityService.GetCredentialsForIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCredentialsForIdentityCommand = serializeAws_json1_1GetCredentialsForIdentityCommand;
async function serializeAws_json1_1GetIdCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetId";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetIdCommand = serializeAws_json1_1GetIdCommand;
async function serializeAws_json1_1GetIdentityPoolRolesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetIdentityPoolRoles";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetIdentityPoolRolesCommand = serializeAws_json1_1GetIdentityPoolRolesCommand;
async function serializeAws_json1_1GetOpenIdTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetOpenIdToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOpenIdTokenCommand = serializeAws_json1_1GetOpenIdTokenCommand;
async function serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand;
async function serializeAws_json1_1ListIdentitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListIdentities";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIdentitiesCommand = serializeAws_json1_1ListIdentitiesCommand;
async function serializeAws_json1_1ListIdentityPoolsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListIdentityPools";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentityPoolsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIdentityPoolsCommand = serializeAws_json1_1ListIdentityPoolsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1LookupDeveloperIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.LookupDeveloperIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1LookupDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1LookupDeveloperIdentityCommand = serializeAws_json1_1LookupDeveloperIdentityCommand;
async function serializeAws_json1_1MergeDeveloperIdentitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityService.MergeDeveloperIdentities";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeDeveloperIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergeDeveloperIdentitiesCommand = serializeAws_json1_1MergeDeveloperIdentitiesCommand;
async function serializeAws_json1_1SetIdentityPoolRolesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.SetIdentityPoolRoles";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetIdentityPoolRolesCommand = serializeAws_json1_1SetIdentityPoolRolesCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UnlinkDeveloperIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.UnlinkDeveloperIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnlinkDeveloperIdentityCommand = serializeAws_json1_1UnlinkDeveloperIdentityCommand;
async function serializeAws_json1_1UnlinkIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.UnlinkIdentity";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnlinkIdentityCommand = serializeAws_json1_1UnlinkIdentityCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateIdentityPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityService.UpdateIdentityPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1IdentityPool(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateIdentityPoolCommand = serializeAws_json1_1UpdateIdentityPoolCommand;
async function deserializeAws_json1_1CreateIdentityPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IdentityPool" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateIdentityPoolCommand = deserializeAws_json1_1CreateIdentityPoolCommand;
async function deserializeAws_json1_1CreateIdentityPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteIdentitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIdentitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIdentitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIdentitiesCommand = deserializeAws_json1_1DeleteIdentitiesCommand;
async function deserializeAws_json1_1DeleteIdentitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteIdentityPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIdentityPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIdentityPoolCommand = deserializeAws_json1_1DeleteIdentityPoolCommand;
async function deserializeAws_json1_1DeleteIdentityPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityDescription(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IdentityDescription" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeIdentityCommand = deserializeAws_json1_1DescribeIdentityCommand;
async function deserializeAws_json1_1DescribeIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeIdentityPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IdentityPool" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeIdentityPoolCommand = deserializeAws_json1_1DescribeIdentityPoolCommand;
async function deserializeAws_json1_1DescribeIdentityPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCredentialsForIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCredentialsForIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCredentialsForIdentityCommand = deserializeAws_json1_1GetCredentialsForIdentityCommand;
async function deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognito.identity.model#ExternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognito.identity.model#InvalidIdentityPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetIdCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetIdCommand = deserializeAws_json1_1GetIdCommand;
async function deserializeAws_json1_1GetIdCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognito.identity.model#ExternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetIdentityPoolRolesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetIdentityPoolRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdentityPoolRolesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityPoolRolesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetIdentityPoolRolesCommand = deserializeAws_json1_1GetIdentityPoolRolesCommand;
async function deserializeAws_json1_1GetIdentityPoolRolesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOpenIdTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOpenIdTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOpenIdTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOpenIdTokenCommand = deserializeAws_json1_1GetOpenIdTokenCommand;
async function deserializeAws_json1_1GetOpenIdTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognito.identity.model#ExternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOpenIdTokenForDeveloperIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand;
async function deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognito.identity.model#DeveloperUserAlreadyRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListIdentitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIdentitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIdentitiesCommand = deserializeAws_json1_1ListIdentitiesCommand;
async function deserializeAws_json1_1ListIdentitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListIdentityPoolsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIdentityPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentityPoolsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIdentityPoolsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIdentityPoolsCommand = deserializeAws_json1_1ListIdentityPoolsCommand;
async function deserializeAws_json1_1ListIdentityPoolsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1LookupDeveloperIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1LookupDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LookupDeveloperIdentityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LookupDeveloperIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1LookupDeveloperIdentityCommand = deserializeAws_json1_1LookupDeveloperIdentityCommand;
async function deserializeAws_json1_1LookupDeveloperIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1MergeDeveloperIdentitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeDeveloperIdentitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergeDeveloperIdentitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergeDeveloperIdentitiesCommand = deserializeAws_json1_1MergeDeveloperIdentitiesCommand;
async function deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SetIdentityPoolRolesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetIdentityPoolRolesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetIdentityPoolRolesCommand = deserializeAws_json1_1SetIdentityPoolRolesCommand;
async function deserializeAws_json1_1SetIdentityPoolRolesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognito.identity.model#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UnlinkDeveloperIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnlinkDeveloperIdentityCommand = deserializeAws_json1_1UnlinkDeveloperIdentityCommand;
async function deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UnlinkIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnlinkIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnlinkIdentityCommand = deserializeAws_json1_1UnlinkIdentityCommand;
async function deserializeAws_json1_1UnlinkIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognito.identity.model#ExternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateIdentityPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IdentityPool" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateIdentityPoolCommand = deserializeAws_json1_1UpdateIdentityPoolCommand;
async function deserializeAws_json1_1UpdateIdentityPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognito.identity.model#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognito.identity.model#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeveloperUserAlreadyRegisteredException(body, context);
    const contents = Object.assign({ name: "DeveloperUserAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExternalServiceException(body, context);
    const contents = Object.assign({ name: "ExternalServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = Object.assign({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceConflictException(body, context);
    const contents = Object.assign({ name: "ResourceConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CognitoIdentityProvider = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.ServerSideTokenCheck !== undefined) {
        bodyParams["ServerSideTokenCheck"] = input.ServerSideTokenCheck;
    }
    return bodyParams;
};
const serializeAws_json1_1CognitoIdentityProviderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CognitoIdentityProvider(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateIdentityPoolInput = (input, context) => {
    const bodyParams = {};
    if (input.AllowClassicFlow !== undefined) {
        bodyParams["AllowClassicFlow"] = input.AllowClassicFlow;
    }
    if (input.AllowUnauthenticatedIdentities !== undefined) {
        bodyParams["AllowUnauthenticatedIdentities"] =
            input.AllowUnauthenticatedIdentities;
    }
    if (input.CognitoIdentityProviders !== undefined) {
        bodyParams["CognitoIdentityProviders"] = serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context);
    }
    if (input.DeveloperProviderName !== undefined) {
        bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
    }
    if (input.IdentityPoolName !== undefined) {
        bodyParams["IdentityPoolName"] = input.IdentityPoolName;
    }
    if (input.IdentityPoolTags !== undefined) {
        bodyParams["IdentityPoolTags"] = serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context);
    }
    if (input.OpenIdConnectProviderARNs !== undefined) {
        bodyParams["OpenIdConnectProviderARNs"] = serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context);
    }
    if (input.SamlProviderARNs !== undefined) {
        bodyParams["SamlProviderARNs"] = serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context);
    }
    if (input.SupportedLoginProviders !== undefined) {
        bodyParams["SupportedLoginProviders"] = serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIdentitiesInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityIdsToDelete !== undefined) {
        bodyParams["IdentityIdsToDelete"] = serializeAws_json1_1IdentityIdList(input.IdentityIdsToDelete, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIdentityPoolInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeIdentityPoolInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCredentialsForIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.CustomRoleArn !== undefined) {
        bodyParams["CustomRoleArn"] = input.CustomRoleArn;
    }
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.Logins !== undefined) {
        bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetIdInput = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.Logins !== undefined) {
        bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetIdentityPoolRolesInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.Logins !== undefined) {
        bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
    }
    if (input.TokenDuration !== undefined) {
        bodyParams["TokenDuration"] = input.TokenDuration;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOpenIdTokenInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.Logins !== undefined) {
        bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IdentityIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IdentityPool = (input, context) => {
    const bodyParams = {};
    if (input.AllowClassicFlow !== undefined) {
        bodyParams["AllowClassicFlow"] = input.AllowClassicFlow;
    }
    if (input.AllowUnauthenticatedIdentities !== undefined) {
        bodyParams["AllowUnauthenticatedIdentities"] =
            input.AllowUnauthenticatedIdentities;
    }
    if (input.CognitoIdentityProviders !== undefined) {
        bodyParams["CognitoIdentityProviders"] = serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context);
    }
    if (input.DeveloperProviderName !== undefined) {
        bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.IdentityPoolName !== undefined) {
        bodyParams["IdentityPoolName"] = input.IdentityPoolName;
    }
    if (input.IdentityPoolTags !== undefined) {
        bodyParams["IdentityPoolTags"] = serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context);
    }
    if (input.OpenIdConnectProviderARNs !== undefined) {
        bodyParams["OpenIdConnectProviderARNs"] = serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context);
    }
    if (input.SamlProviderARNs !== undefined) {
        bodyParams["SamlProviderARNs"] = serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context);
    }
    if (input.SupportedLoginProviders !== undefined) {
        bodyParams["SupportedLoginProviders"] = serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IdentityPoolTagsListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IdentityPoolTagsType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1IdentityProviders = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ListIdentitiesInput = (input, context) => {
    const bodyParams = {};
    if (input.HideDisabled !== undefined) {
        bodyParams["HideDisabled"] = input.HideDisabled;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListIdentityPoolsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1LoginsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1LoginsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1LookupDeveloperIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.DeveloperUserIdentifier !== undefined) {
        bodyParams["DeveloperUserIdentifier"] = input.DeveloperUserIdentifier;
    }
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1MappingRule = (input, context) => {
    const bodyParams = {};
    if (input.Claim !== undefined) {
        bodyParams["Claim"] = input.Claim;
    }
    if (input.MatchType !== undefined) {
        bodyParams["MatchType"] = input.MatchType;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1MappingRulesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MappingRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MergeDeveloperIdentitiesInput = (input, context) => {
    const bodyParams = {};
    if (input.DestinationUserIdentifier !== undefined) {
        bodyParams["DestinationUserIdentifier"] = input.DestinationUserIdentifier;
    }
    if (input.DeveloperProviderName !== undefined) {
        bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.SourceUserIdentifier !== undefined) {
        bodyParams["SourceUserIdentifier"] = input.SourceUserIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1OIDCProviderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RoleMapping = (input, context) => {
    const bodyParams = {};
    if (input.AmbiguousRoleResolution !== undefined) {
        bodyParams["AmbiguousRoleResolution"] = input.AmbiguousRoleResolution;
    }
    if (input.RulesConfiguration !== undefined) {
        bodyParams["RulesConfiguration"] = serializeAws_json1_1RulesConfigurationType(input.RulesConfiguration, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1RoleMappingMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1RoleMapping(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1RolesMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1RulesConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1MappingRulesList(input.Rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SAMLProviderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SetIdentityPoolRolesInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    if (input.RoleMappings !== undefined) {
        bodyParams["RoleMappings"] = serializeAws_json1_1RoleMappingMap(input.RoleMappings, context);
    }
    if (input.Roles !== undefined) {
        bodyParams["Roles"] = serializeAws_json1_1RolesMap(input.Roles, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1IdentityPoolTagsType(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UnlinkDeveloperIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.DeveloperProviderName !== undefined) {
        bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
    }
    if (input.DeveloperUserIdentifier !== undefined) {
        bodyParams["DeveloperUserIdentifier"] = input.DeveloperUserIdentifier;
    }
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.IdentityPoolId !== undefined) {
        bodyParams["IdentityPoolId"] = input.IdentityPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1UnlinkIdentityInput = (input, context) => {
    const bodyParams = {};
    if (input.IdentityId !== undefined) {
        bodyParams["IdentityId"] = input.IdentityId;
    }
    if (input.Logins !== undefined) {
        bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
    }
    if (input.LoginsToRemove !== undefined) {
        bodyParams["LoginsToRemove"] = serializeAws_json1_1LoginsList(input.LoginsToRemove, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1IdentityPoolTagsListType(input.TagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1CognitoIdentityProvider = (output, context) => {
    let contents = {
        __type: "CognitoIdentityProvider",
        ClientId: undefined,
        ProviderName: undefined,
        ServerSideTokenCheck: undefined
    };
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.ProviderName !== undefined && output.ProviderName !== null) {
        contents.ProviderName = output.ProviderName;
    }
    if (output.ServerSideTokenCheck !== undefined &&
        output.ServerSideTokenCheck !== null) {
        contents.ServerSideTokenCheck = output.ServerSideTokenCheck;
    }
    return contents;
};
const deserializeAws_json1_1CognitoIdentityProviderList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CognitoIdentityProvider(entry, context));
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Credentials = (output, context) => {
    let contents = {
        __type: "Credentials",
        AccessKeyId: undefined,
        Expiration: undefined,
        SecretKey: undefined,
        SessionToken: undefined
    };
    if (output.AccessKeyId !== undefined && output.AccessKeyId !== null) {
        contents.AccessKeyId = output.AccessKeyId;
    }
    if (output.Expiration !== undefined && output.Expiration !== null) {
        contents.Expiration = new Date(Math.round(output.Expiration * 1000));
    }
    if (output.SecretKey !== undefined && output.SecretKey !== null) {
        contents.SecretKey = output.SecretKey;
    }
    if (output.SessionToken !== undefined && output.SessionToken !== null) {
        contents.SessionToken = output.SessionToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteIdentitiesResponse = (output, context) => {
    let contents = {
        __type: "DeleteIdentitiesResponse",
        UnprocessedIdentityIds: undefined
    };
    if (output.UnprocessedIdentityIds !== undefined &&
        output.UnprocessedIdentityIds !== null) {
        contents.UnprocessedIdentityIds = deserializeAws_json1_1UnprocessedIdentityIdList(output.UnprocessedIdentityIds, context);
    }
    return contents;
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredException = (output, context) => {
    let contents = {
        __type: "DeveloperUserAlreadyRegisteredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeveloperUserIdentifierList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ExternalServiceException = (output, context) => {
    let contents = {
        __type: "ExternalServiceException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GetCredentialsForIdentityResponse = (output, context) => {
    let contents = {
        __type: "GetCredentialsForIdentityResponse",
        Credentials: undefined,
        IdentityId: undefined
    };
    if (output.Credentials !== undefined && output.Credentials !== null) {
        contents.Credentials = deserializeAws_json1_1Credentials(output.Credentials, context);
    }
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    return contents;
};
const deserializeAws_json1_1GetIdResponse = (output, context) => {
    let contents = {
        __type: "GetIdResponse",
        IdentityId: undefined
    };
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    return contents;
};
const deserializeAws_json1_1GetIdentityPoolRolesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityPoolRolesResponse",
        IdentityPoolId: undefined,
        RoleMappings: undefined,
        Roles: undefined
    };
    if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
        contents.IdentityPoolId = output.IdentityPoolId;
    }
    if (output.RoleMappings !== undefined && output.RoleMappings !== null) {
        contents.RoleMappings = deserializeAws_json1_1RoleMappingMap(output.RoleMappings, context);
    }
    if (output.Roles !== undefined && output.Roles !== null) {
        contents.Roles = deserializeAws_json1_1RolesMap(output.Roles, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse = (output, context) => {
    let contents = {
        __type: "GetOpenIdTokenForDeveloperIdentityResponse",
        IdentityId: undefined,
        Token: undefined
    };
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    if (output.Token !== undefined && output.Token !== null) {
        contents.Token = output.Token;
    }
    return contents;
};
const deserializeAws_json1_1GetOpenIdTokenResponse = (output, context) => {
    let contents = {
        __type: "GetOpenIdTokenResponse",
        IdentityId: undefined,
        Token: undefined
    };
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    if (output.Token !== undefined && output.Token !== null) {
        contents.Token = output.Token;
    }
    return contents;
};
const deserializeAws_json1_1IdentitiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IdentityDescription(entry, context));
};
const deserializeAws_json1_1IdentityDescription = (output, context) => {
    let contents = {
        __type: "IdentityDescription",
        CreationDate: undefined,
        IdentityId: undefined,
        LastModifiedDate: undefined,
        Logins: undefined
    };
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.Logins !== undefined && output.Logins !== null) {
        contents.Logins = deserializeAws_json1_1LoginsList(output.Logins, context);
    }
    return contents;
};
const deserializeAws_json1_1IdentityPool = (output, context) => {
    let contents = {
        __type: "IdentityPool",
        AllowClassicFlow: undefined,
        AllowUnauthenticatedIdentities: undefined,
        CognitoIdentityProviders: undefined,
        DeveloperProviderName: undefined,
        IdentityPoolId: undefined,
        IdentityPoolName: undefined,
        IdentityPoolTags: undefined,
        OpenIdConnectProviderARNs: undefined,
        SamlProviderARNs: undefined,
        SupportedLoginProviders: undefined
    };
    if (output.AllowClassicFlow !== undefined &&
        output.AllowClassicFlow !== null) {
        contents.AllowClassicFlow = output.AllowClassicFlow;
    }
    if (output.AllowUnauthenticatedIdentities !== undefined &&
        output.AllowUnauthenticatedIdentities !== null) {
        contents.AllowUnauthenticatedIdentities =
            output.AllowUnauthenticatedIdentities;
    }
    if (output.CognitoIdentityProviders !== undefined &&
        output.CognitoIdentityProviders !== null) {
        contents.CognitoIdentityProviders = deserializeAws_json1_1CognitoIdentityProviderList(output.CognitoIdentityProviders, context);
    }
    if (output.DeveloperProviderName !== undefined &&
        output.DeveloperProviderName !== null) {
        contents.DeveloperProviderName = output.DeveloperProviderName;
    }
    if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
        contents.IdentityPoolId = output.IdentityPoolId;
    }
    if (output.IdentityPoolName !== undefined &&
        output.IdentityPoolName !== null) {
        contents.IdentityPoolName = output.IdentityPoolName;
    }
    if (output.IdentityPoolTags !== undefined &&
        output.IdentityPoolTags !== null) {
        contents.IdentityPoolTags = deserializeAws_json1_1IdentityPoolTagsType(output.IdentityPoolTags, context);
    }
    if (output.OpenIdConnectProviderARNs !== undefined &&
        output.OpenIdConnectProviderARNs !== null) {
        contents.OpenIdConnectProviderARNs = deserializeAws_json1_1OIDCProviderList(output.OpenIdConnectProviderARNs, context);
    }
    if (output.SamlProviderARNs !== undefined &&
        output.SamlProviderARNs !== null) {
        contents.SamlProviderARNs = deserializeAws_json1_1SAMLProviderList(output.SamlProviderARNs, context);
    }
    if (output.SupportedLoginProviders !== undefined &&
        output.SupportedLoginProviders !== null) {
        contents.SupportedLoginProviders = deserializeAws_json1_1IdentityProviders(output.SupportedLoginProviders, context);
    }
    return contents;
};
const deserializeAws_json1_1IdentityPoolShortDescription = (output, context) => {
    let contents = {
        __type: "IdentityPoolShortDescription",
        IdentityPoolId: undefined,
        IdentityPoolName: undefined
    };
    if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
        contents.IdentityPoolId = output.IdentityPoolId;
    }
    if (output.IdentityPoolName !== undefined &&
        output.IdentityPoolName !== null) {
        contents.IdentityPoolName = output.IdentityPoolName;
    }
    return contents;
};
const deserializeAws_json1_1IdentityPoolTagsType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1IdentityPoolsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IdentityPoolShortDescription(entry, context));
};
const deserializeAws_json1_1IdentityProviders = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidIdentityPoolConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListIdentitiesResponse = (output, context) => {
    let contents = {
        __type: "ListIdentitiesResponse",
        Identities: undefined,
        IdentityPoolId: undefined,
        NextToken: undefined
    };
    if (output.Identities !== undefined && output.Identities !== null) {
        contents.Identities = deserializeAws_json1_1IdentitiesList(output.Identities, context);
    }
    if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
        contents.IdentityPoolId = output.IdentityPoolId;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListIdentityPoolsResponse = (output, context) => {
    let contents = {
        __type: "ListIdentityPoolsResponse",
        IdentityPools: undefined,
        NextToken: undefined
    };
    if (output.IdentityPools !== undefined && output.IdentityPools !== null) {
        contents.IdentityPools = deserializeAws_json1_1IdentityPoolsList(output.IdentityPools, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1IdentityPoolTagsType(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LoginsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1LookupDeveloperIdentityResponse = (output, context) => {
    let contents = {
        __type: "LookupDeveloperIdentityResponse",
        DeveloperUserIdentifierList: undefined,
        IdentityId: undefined,
        NextToken: undefined
    };
    if (output.DeveloperUserIdentifierList !== undefined &&
        output.DeveloperUserIdentifierList !== null) {
        contents.DeveloperUserIdentifierList = deserializeAws_json1_1DeveloperUserIdentifierList(output.DeveloperUserIdentifierList, context);
    }
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MappingRule = (output, context) => {
    let contents = {
        __type: "MappingRule",
        Claim: undefined,
        MatchType: undefined,
        RoleARN: undefined,
        Value: undefined
    };
    if (output.Claim !== undefined && output.Claim !== null) {
        contents.Claim = output.Claim;
    }
    if (output.MatchType !== undefined && output.MatchType !== null) {
        contents.MatchType = output.MatchType;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1MappingRulesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MappingRule(entry, context));
};
const deserializeAws_json1_1MergeDeveloperIdentitiesResponse = (output, context) => {
    let contents = {
        __type: "MergeDeveloperIdentitiesResponse",
        IdentityId: undefined
    };
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    return contents;
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    let contents = {
        __type: "NotAuthorizedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OIDCProviderList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceConflictException = (output, context) => {
    let contents = {
        __type: "ResourceConflictException",
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
const deserializeAws_json1_1RoleMapping = (output, context) => {
    let contents = {
        __type: "RoleMapping",
        AmbiguousRoleResolution: undefined,
        RulesConfiguration: undefined,
        Type: undefined
    };
    if (output.AmbiguousRoleResolution !== undefined &&
        output.AmbiguousRoleResolution !== null) {
        contents.AmbiguousRoleResolution = output.AmbiguousRoleResolution;
    }
    if (output.RulesConfiguration !== undefined &&
        output.RulesConfiguration !== null) {
        contents.RulesConfiguration = deserializeAws_json1_1RulesConfigurationType(output.RulesConfiguration, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1RoleMappingMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1RoleMapping(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1RolesMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1RulesConfigurationType = (output, context) => {
    let contents = {
        __type: "RulesConfigurationType",
        Rules: undefined
    };
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1MappingRulesList(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1SAMLProviderList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnprocessedIdentityId = (output, context) => {
    let contents = {
        __type: "UnprocessedIdentityId",
        ErrorCode: undefined,
        IdentityId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.IdentityId !== undefined && output.IdentityId !== null) {
        contents.IdentityId = output.IdentityId;
    }
    return contents;
};
const deserializeAws_json1_1UnprocessedIdentityIdList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UnprocessedIdentityId(entry, context));
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
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