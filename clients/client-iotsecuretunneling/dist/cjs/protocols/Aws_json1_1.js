"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CloseTunnelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.CloseTunnel";
    let body;
    body = JSON.stringify(serializeAws_json1_1CloseTunnelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CloseTunnelCommand = serializeAws_json1_1CloseTunnelCommand;
async function serializeAws_json1_1DescribeTunnelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.DescribeTunnel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTunnelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTunnelCommand = serializeAws_json1_1DescribeTunnelCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTunnelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.ListTunnels";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTunnelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTunnelsCommand = serializeAws_json1_1ListTunnelsCommand;
async function serializeAws_json1_1OpenTunnelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.OpenTunnel";
    let body;
    body = JSON.stringify(serializeAws_json1_1OpenTunnelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1OpenTunnelCommand = serializeAws_json1_1OpenTunnelCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IoTSecuredTunneling.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1CloseTunnelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CloseTunnelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CloseTunnelResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CloseTunnelResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CloseTunnelCommand = deserializeAws_json1_1CloseTunnelCommand;
async function deserializeAws_json1_1CloseTunnelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeTunnelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTunnelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTunnelResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTunnelResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTunnelCommand = deserializeAws_json1_1DescribeTunnelCommand;
async function deserializeAws_json1_1DescribeTunnelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
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
        case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListTunnelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTunnelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTunnelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTunnelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTunnelsCommand = deserializeAws_json1_1ListTunnelsCommand;
async function deserializeAws_json1_1ListTunnelsCommandError(output, context) {
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
async function deserializeAws_json1_1OpenTunnelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1OpenTunnelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1OpenTunnelResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OpenTunnelResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1OpenTunnelCommand = deserializeAws_json1_1OpenTunnelCommand;
async function deserializeAws_json1_1OpenTunnelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.envoy.frontend#LimitExceededException":
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
        case "ResourceNotFoundException":
        case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
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
        case "ResourceNotFoundException":
        case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
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
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CloseTunnelRequest = (input, context) => {
    const bodyParams = {};
    if (input.delete !== undefined) {
        bodyParams["delete"] = input.delete;
    }
    if (input.tunnelId !== undefined) {
        bodyParams["tunnelId"] = input.tunnelId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTunnelRequest = (input, context) => {
    const bodyParams = {};
    if (input.tunnelId !== undefined) {
        bodyParams["tunnelId"] = input.tunnelId;
    }
    return bodyParams;
};
const serializeAws_json1_1DestinationConfig = (input, context) => {
    const bodyParams = {};
    if (input.services !== undefined) {
        bodyParams["services"] = serializeAws_json1_1ServiceList(input.services, context);
    }
    if (input.thingName !== undefined) {
        bodyParams["thingName"] = input.thingName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTunnelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.thingName !== undefined) {
        bodyParams["thingName"] = input.thingName;
    }
    return bodyParams;
};
const serializeAws_json1_1OpenTunnelRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.destinationConfig !== undefined) {
        bodyParams["destinationConfig"] = serializeAws_json1_1DestinationConfig(input.destinationConfig, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.timeoutConfig !== undefined) {
        bodyParams["timeoutConfig"] = serializeAws_json1_1TimeoutConfig(input.timeoutConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceList = (input, context) => {
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
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TimeoutConfig = (input, context) => {
    const bodyParams = {};
    if (input.maxLifetimeTimeoutMinutes !== undefined) {
        bodyParams["maxLifetimeTimeoutMinutes"] = input.maxLifetimeTimeoutMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1CloseTunnelResponse = (output, context) => {
    let contents = {
        __type: "CloseTunnelResponse"
    };
    return contents;
};
const deserializeAws_json1_1ConnectionState = (output, context) => {
    let contents = {
        __type: "ConnectionState",
        lastUpdatedAt: undefined,
        status: undefined
    };
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeTunnelResponse = (output, context) => {
    let contents = {
        __type: "DescribeTunnelResponse",
        tunnel: undefined
    };
    if (output.tunnel !== undefined && output.tunnel !== null) {
        contents.tunnel = deserializeAws_json1_1Tunnel(output.tunnel, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationConfig = (output, context) => {
    let contents = {
        __type: "DestinationConfig",
        services: undefined,
        thingName: undefined
    };
    if (output.services !== undefined && output.services !== null) {
        contents.services = deserializeAws_json1_1ServiceList(output.services, context);
    }
    if (output.thingName !== undefined && output.thingName !== null) {
        contents.thingName = output.thingName;
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
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTunnelsResponse = (output, context) => {
    let contents = {
        __type: "ListTunnelsResponse",
        nextToken: undefined,
        tunnelSummaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tunnelSummaries !== undefined && output.tunnelSummaries !== null) {
        contents.tunnelSummaries = deserializeAws_json1_1TunnelSummaryList(output.tunnelSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1OpenTunnelResponse = (output, context) => {
    let contents = {
        __type: "OpenTunnelResponse",
        destinationAccessToken: undefined,
        sourceAccessToken: undefined,
        tunnelArn: undefined,
        tunnelId: undefined
    };
    if (output.destinationAccessToken !== undefined &&
        output.destinationAccessToken !== null) {
        contents.destinationAccessToken = output.destinationAccessToken;
    }
    if (output.sourceAccessToken !== undefined &&
        output.sourceAccessToken !== null) {
        contents.sourceAccessToken = output.sourceAccessToken;
    }
    if (output.tunnelArn !== undefined && output.tunnelArn !== null) {
        contents.tunnelArn = output.tunnelArn;
    }
    if (output.tunnelId !== undefined && output.tunnelId !== null) {
        contents.tunnelId = output.tunnelId;
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
const deserializeAws_json1_1ServiceList = (output, context) => {
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TimeoutConfig = (output, context) => {
    let contents = {
        __type: "TimeoutConfig",
        maxLifetimeTimeoutMinutes: undefined
    };
    if (output.maxLifetimeTimeoutMinutes !== undefined &&
        output.maxLifetimeTimeoutMinutes !== null) {
        contents.maxLifetimeTimeoutMinutes = output.maxLifetimeTimeoutMinutes;
    }
    return contents;
};
const deserializeAws_json1_1Tunnel = (output, context) => {
    let contents = {
        __type: "Tunnel",
        createdAt: undefined,
        description: undefined,
        destinationConfig: undefined,
        destinationConnectionState: undefined,
        lastUpdatedAt: undefined,
        sourceConnectionState: undefined,
        status: undefined,
        tags: undefined,
        timeoutConfig: undefined,
        tunnelArn: undefined,
        tunnelId: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.destinationConfig !== undefined &&
        output.destinationConfig !== null) {
        contents.destinationConfig = deserializeAws_json1_1DestinationConfig(output.destinationConfig, context);
    }
    if (output.destinationConnectionState !== undefined &&
        output.destinationConnectionState !== null) {
        contents.destinationConnectionState = deserializeAws_json1_1ConnectionState(output.destinationConnectionState, context);
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.sourceConnectionState !== undefined &&
        output.sourceConnectionState !== null) {
        contents.sourceConnectionState = deserializeAws_json1_1ConnectionState(output.sourceConnectionState, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.timeoutConfig !== undefined && output.timeoutConfig !== null) {
        contents.timeoutConfig = deserializeAws_json1_1TimeoutConfig(output.timeoutConfig, context);
    }
    if (output.tunnelArn !== undefined && output.tunnelArn !== null) {
        contents.tunnelArn = output.tunnelArn;
    }
    if (output.tunnelId !== undefined && output.tunnelId !== null) {
        contents.tunnelId = output.tunnelId;
    }
    return contents;
};
const deserializeAws_json1_1TunnelSummary = (output, context) => {
    let contents = {
        __type: "TunnelSummary",
        createdAt: undefined,
        description: undefined,
        lastUpdatedAt: undefined,
        status: undefined,
        tunnelArn: undefined,
        tunnelId: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.tunnelArn !== undefined && output.tunnelArn !== null) {
        contents.tunnelArn = output.tunnelArn;
    }
    if (output.tunnelId !== undefined && output.tunnelId !== null) {
        contents.tunnelId = output.tunnelId;
    }
    return contents;
};
const deserializeAws_json1_1TunnelSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TunnelSummary(entry, context));
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