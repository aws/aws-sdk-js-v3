"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateContainerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.CreateContainer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateContainerCommand = serializeAws_json1_1CreateContainerCommand;
async function serializeAws_json1_1DeleteContainerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.DeleteContainer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteContainerCommand = serializeAws_json1_1DeleteContainerCommand;
async function serializeAws_json1_1DeleteContainerPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.DeleteContainerPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteContainerPolicyCommand = serializeAws_json1_1DeleteContainerPolicyCommand;
async function serializeAws_json1_1DeleteCorsPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.DeleteCorsPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCorsPolicyCommand = serializeAws_json1_1DeleteCorsPolicyCommand;
async function serializeAws_json1_1DeleteLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.DeleteLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLifecyclePolicyCommand = serializeAws_json1_1DeleteLifecyclePolicyCommand;
async function serializeAws_json1_1DescribeContainerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.DescribeContainer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeContainerCommand = serializeAws_json1_1DescribeContainerCommand;
async function serializeAws_json1_1GetContainerPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.GetContainerPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetContainerPolicyCommand = serializeAws_json1_1GetContainerPolicyCommand;
async function serializeAws_json1_1GetCorsPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.GetCorsPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCorsPolicyCommand = serializeAws_json1_1GetCorsPolicyCommand;
async function serializeAws_json1_1GetLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.GetLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLifecyclePolicyCommand = serializeAws_json1_1GetLifecyclePolicyCommand;
async function serializeAws_json1_1ListContainersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.ListContainers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContainersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListContainersCommand = serializeAws_json1_1ListContainersCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutContainerPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.PutContainerPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutContainerPolicyCommand = serializeAws_json1_1PutContainerPolicyCommand;
async function serializeAws_json1_1PutCorsPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.PutCorsPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutCorsPolicyCommand = serializeAws_json1_1PutCorsPolicyCommand;
async function serializeAws_json1_1PutLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.PutLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLifecyclePolicyCommand = serializeAws_json1_1PutLifecyclePolicyCommand;
async function serializeAws_json1_1StartAccessLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.StartAccessLogging";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAccessLoggingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAccessLoggingCommand = serializeAws_json1_1StartAccessLoggingCommand;
async function serializeAws_json1_1StopAccessLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.StopAccessLogging";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAccessLoggingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopAccessLoggingCommand = serializeAws_json1_1StopAccessLoggingCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MediaStore_20170901.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1CreateContainerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContainerOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateContainerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateContainerCommand = deserializeAws_json1_1CreateContainerCommand;
async function deserializeAws_json1_1CreateContainerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.mediastore#LimitExceededException":
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
async function deserializeAws_json1_1DeleteContainerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteContainerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteContainerCommand = deserializeAws_json1_1DeleteContainerCommand;
async function deserializeAws_json1_1DeleteContainerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1DeleteContainerPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteContainerPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteContainerPolicyCommand = deserializeAws_json1_1DeleteContainerPolicyCommand;
async function deserializeAws_json1_1DeleteContainerPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCorsPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCorsPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCorsPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCorsPolicyCommand = deserializeAws_json1_1DeleteCorsPolicyCommand;
async function deserializeAws_json1_1DeleteCorsPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CorsPolicyNotFoundException":
        case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1DeleteLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLifecyclePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLifecyclePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLifecyclePolicyCommand = deserializeAws_json1_1DeleteLifecyclePolicyCommand;
async function deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeContainerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeContainerOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeContainerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeContainerCommand = deserializeAws_json1_1DescribeContainerCommand;
async function deserializeAws_json1_1DescribeContainerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1GetContainerPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContainerPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetContainerPolicyCommand = deserializeAws_json1_1GetContainerPolicyCommand;
async function deserializeAws_json1_1GetContainerPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCorsPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCorsPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCorsPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCorsPolicyCommand = deserializeAws_json1_1GetCorsPolicyCommand;
async function deserializeAws_json1_1GetCorsPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CorsPolicyNotFoundException":
        case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1GetLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLifecyclePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLifecyclePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLifecyclePolicyCommand = deserializeAws_json1_1GetLifecyclePolicyCommand;
async function deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListContainersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListContainersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContainersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListContainersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListContainersCommand = deserializeAws_json1_1ListContainersCommand;
async function deserializeAws_json1_1ListContainersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1PutContainerPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutContainerPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutContainerPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutContainerPolicyCommand = deserializeAws_json1_1PutContainerPolicyCommand;
async function deserializeAws_json1_1PutContainerPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1PutCorsPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutCorsPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutCorsPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutCorsPolicyCommand = deserializeAws_json1_1PutCorsPolicyCommand;
async function deserializeAws_json1_1PutCorsPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1PutLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLifecyclePolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLifecyclePolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutLifecyclePolicyCommand = deserializeAws_json1_1PutLifecyclePolicyCommand;
async function deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1StartAccessLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAccessLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAccessLoggingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAccessLoggingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAccessLoggingCommand = deserializeAws_json1_1StartAccessLoggingCommand;
async function deserializeAws_json1_1StartAccessLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1StopAccessLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopAccessLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAccessLoggingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopAccessLoggingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopAccessLoggingCommand = deserializeAws_json1_1StopAccessLoggingCommand;
async function deserializeAws_json1_1StopAccessLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceOutput" }, contents);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceOutput" }, contents);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1ContainerInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ContainerInUseException(body, context);
    const contents = Object.assign({ name: "ContainerInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ContainerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ContainerNotFoundException(body, context);
    const contents = Object.assign({ name: "ContainerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CorsPolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "CorsPolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "PolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AllowedHeaders = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AllowedMethods = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AllowedOrigins = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CorsPolicy = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CorsRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CorsRule = (input, context) => {
    const bodyParams = {};
    if (input.AllowedHeaders !== undefined) {
        bodyParams["AllowedHeaders"] = serializeAws_json1_1AllowedHeaders(input.AllowedHeaders, context);
    }
    if (input.AllowedMethods !== undefined) {
        bodyParams["AllowedMethods"] = serializeAws_json1_1AllowedMethods(input.AllowedMethods, context);
    }
    if (input.AllowedOrigins !== undefined) {
        bodyParams["AllowedOrigins"] = serializeAws_json1_1AllowedOrigins(input.AllowedOrigins, context);
    }
    if (input.ExposeHeaders !== undefined) {
        bodyParams["ExposeHeaders"] = serializeAws_json1_1ExposeHeaders(input.ExposeHeaders, context);
    }
    if (input.MaxAgeSeconds !== undefined) {
        bodyParams["MaxAgeSeconds"] = input.MaxAgeSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateContainerInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteContainerInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteContainerPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCorsPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLifecyclePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeContainerInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1ExposeHeaders = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetContainerPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCorsPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLifecyclePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListContainersInput = (input, context) => {
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
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = input.Resource;
    }
    return bodyParams;
};
const serializeAws_json1_1PutContainerPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    return bodyParams;
};
const serializeAws_json1_1PutCorsPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    if (input.CorsPolicy !== undefined) {
        bodyParams["CorsPolicy"] = serializeAws_json1_1CorsPolicy(input.CorsPolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutLifecyclePolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    if (input.LifecyclePolicy !== undefined) {
        bodyParams["LifecyclePolicy"] = input.LifecyclePolicy;
    }
    return bodyParams;
};
const serializeAws_json1_1StartAccessLoggingInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopAccessLoggingInput = (input, context) => {
    const bodyParams = {};
    if (input.ContainerName !== undefined) {
        bodyParams["ContainerName"] = input.ContainerName;
    }
    return bodyParams;
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = input.Resource;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = input.Resource;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AllowedHeaders = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AllowedMethods = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AllowedOrigins = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Container = (output, context) => {
    let contents = {
        __type: "Container",
        ARN: undefined,
        AccessLoggingEnabled: undefined,
        CreationTime: undefined,
        Endpoint: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.AccessLoggingEnabled !== undefined &&
        output.AccessLoggingEnabled !== null) {
        contents.AccessLoggingEnabled = output.AccessLoggingEnabled;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = output.Endpoint;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ContainerInUseException = (output, context) => {
    let contents = {
        __type: "ContainerInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ContainerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Container(entry, context));
};
const deserializeAws_json1_1ContainerNotFoundException = (output, context) => {
    let contents = {
        __type: "ContainerNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CorsPolicy = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CorsRule(entry, context));
};
const deserializeAws_json1_1CorsPolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "CorsPolicyNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CorsRule = (output, context) => {
    let contents = {
        __type: "CorsRule",
        AllowedHeaders: undefined,
        AllowedMethods: undefined,
        AllowedOrigins: undefined,
        ExposeHeaders: undefined,
        MaxAgeSeconds: undefined
    };
    if (output.AllowedHeaders !== undefined && output.AllowedHeaders !== null) {
        contents.AllowedHeaders = deserializeAws_json1_1AllowedHeaders(output.AllowedHeaders, context);
    }
    if (output.AllowedMethods !== undefined && output.AllowedMethods !== null) {
        contents.AllowedMethods = deserializeAws_json1_1AllowedMethods(output.AllowedMethods, context);
    }
    if (output.AllowedOrigins !== undefined && output.AllowedOrigins !== null) {
        contents.AllowedOrigins = deserializeAws_json1_1AllowedOrigins(output.AllowedOrigins, context);
    }
    if (output.ExposeHeaders !== undefined && output.ExposeHeaders !== null) {
        contents.ExposeHeaders = deserializeAws_json1_1ExposeHeaders(output.ExposeHeaders, context);
    }
    if (output.MaxAgeSeconds !== undefined && output.MaxAgeSeconds !== null) {
        contents.MaxAgeSeconds = output.MaxAgeSeconds;
    }
    return contents;
};
const deserializeAws_json1_1CreateContainerOutput = (output, context) => {
    let contents = {
        __type: "CreateContainerOutput",
        Container: undefined
    };
    if (output.Container !== undefined && output.Container !== null) {
        contents.Container = deserializeAws_json1_1Container(output.Container, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteContainerOutput = (output, context) => {
    let contents = {
        __type: "DeleteContainerOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteContainerPolicyOutput = (output, context) => {
    let contents = {
        __type: "DeleteContainerPolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteCorsPolicyOutput = (output, context) => {
    let contents = {
        __type: "DeleteCorsPolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteLifecyclePolicyOutput = (output, context) => {
    let contents = {
        __type: "DeleteLifecyclePolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeContainerOutput = (output, context) => {
    let contents = {
        __type: "DescribeContainerOutput",
        Container: undefined
    };
    if (output.Container !== undefined && output.Container !== null) {
        contents.Container = deserializeAws_json1_1Container(output.Container, context);
    }
    return contents;
};
const deserializeAws_json1_1ExposeHeaders = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GetContainerPolicyOutput = (output, context) => {
    let contents = {
        __type: "GetContainerPolicyOutput",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    return contents;
};
const deserializeAws_json1_1GetCorsPolicyOutput = (output, context) => {
    let contents = {
        __type: "GetCorsPolicyOutput",
        CorsPolicy: undefined
    };
    if (output.CorsPolicy !== undefined && output.CorsPolicy !== null) {
        contents.CorsPolicy = deserializeAws_json1_1CorsPolicy(output.CorsPolicy, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLifecyclePolicyOutput = (output, context) => {
    let contents = {
        __type: "GetLifecyclePolicyOutput",
        LifecyclePolicy: undefined
    };
    if (output.LifecyclePolicy !== undefined && output.LifecyclePolicy !== null) {
        contents.LifecyclePolicy = output.LifecyclePolicy;
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
const deserializeAws_json1_1ListContainersOutput = (output, context) => {
    let contents = {
        __type: "ListContainersOutput",
        Containers: undefined,
        NextToken: undefined
    };
    if (output.Containers !== undefined && output.Containers !== null) {
        contents.Containers = deserializeAws_json1_1ContainerList(output.Containers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1PolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "PolicyNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PutContainerPolicyOutput = (output, context) => {
    let contents = {
        __type: "PutContainerPolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1PutCorsPolicyOutput = (output, context) => {
    let contents = {
        __type: "PutCorsPolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1PutLifecyclePolicyOutput = (output, context) => {
    let contents = {
        __type: "PutLifecyclePolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1StartAccessLoggingOutput = (output, context) => {
    let contents = {
        __type: "StartAccessLoggingOutput"
    };
    return contents;
};
const deserializeAws_json1_1StopAccessLoggingOutput = (output, context) => {
    let contents = {
        __type: "StopAccessLoggingOutput"
    };
    return contents;
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
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
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