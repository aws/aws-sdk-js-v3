"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1DeleteThingShadowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/things/{thingName}/shadow";
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteThingShadowCommand = serializeAws_restJson1_1DeleteThingShadowCommand;
async function serializeAws_restJson1_1GetThingShadowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/things/{thingName}/shadow";
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetThingShadowCommand = serializeAws_restJson1_1GetThingShadowCommand;
async function serializeAws_restJson1_1PublishCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/octet-stream";
    let resolvedPath = "/topics/{topic}";
    if (input.topic !== undefined) {
        const labelValue = input.topic;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: topic.");
        }
        resolvedPath = resolvedPath.replace("{topic}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: topic.");
    }
    const query = {};
    if (input.qos !== undefined) {
        query["qos"] = input.qos.toString();
    }
    let body;
    if (input.payload !== undefined) {
        body = input.payload;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restJson1_1PublishCommand = serializeAws_restJson1_1PublishCommand;
async function serializeAws_restJson1_1UpdateThingShadowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/octet-stream";
    let resolvedPath = "/things/{thingName}/shadow";
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    let body;
    if (input.payload !== undefined) {
        body = input.payload;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateThingShadowCommand = serializeAws_restJson1_1UpdateThingShadowCommand;
async function deserializeAws_restJson1_1DeleteThingShadowCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteThingShadowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteThingShadowResponse",
        payload: undefined
    };
    const data = await collectBody(output.body, context);
    contents.payload = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteThingShadowCommand = deserializeAws_restJson1_1DeleteThingShadowCommand;
async function deserializeAws_restJson1_1DeleteThingShadowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.common.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.common.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.common.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iot.common.types#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.common.types#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iot.common.types#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentEncodingException":
        case "com.amazonaws.iot.common.types#UnsupportedDocumentEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnsupportedDocumentEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.iot.moonraker#MethodNotAllowedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetThingShadowCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetThingShadowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetThingShadowResponse",
        payload: undefined
    };
    const data = await collectBody(output.body, context);
    contents.payload = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetThingShadowCommand = deserializeAws_restJson1_1GetThingShadowCommand;
async function deserializeAws_restJson1_1GetThingShadowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.common.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.common.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.common.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iot.common.types#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.common.types#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iot.common.types#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentEncodingException":
        case "com.amazonaws.iot.common.types#UnsupportedDocumentEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnsupportedDocumentEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.iot.moonraker#MethodNotAllowedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1PublishCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1PublishCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1PublishCommand = deserializeAws_restJson1_1PublishCommand;
async function deserializeAws_restJson1_1PublishCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.common.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.common.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iot.common.types#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.iot.moonraker#MethodNotAllowedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateThingShadowCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateThingShadowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateThingShadowResponse",
        payload: undefined
    };
    const data = await collectBody(output.body, context);
    contents.payload = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateThingShadowCommand = deserializeAws_restJson1_1UpdateThingShadowCommand;
async function deserializeAws_restJson1_1UpdateThingShadowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.common.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.common.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iot.common.types#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.common.types#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iot.common.types#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentEncodingException":
        case "com.amazonaws.iot.common.types#UnsupportedDocumentEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1UnsupportedDocumentEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.iot.moonraker#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.iot.moonraker#MethodNotAllowedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestEntityTooLargeException":
        case "com.amazonaws.iot.moonraker#RequestEntityTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1RequestEntityTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1UnsupportedDocumentEncodingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedDocumentEncodingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1MethodNotAllowedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MethodNotAllowedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1RequestEntityTooLargeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestEntityTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
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
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1_1.js.map