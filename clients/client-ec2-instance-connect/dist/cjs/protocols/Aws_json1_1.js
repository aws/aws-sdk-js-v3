"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1SendSSHPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEC2InstanceConnectService.SendSSHPublicKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendSSHPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendSSHPublicKeyCommand = serializeAws_json1_1SendSSHPublicKeyCommand;
async function deserializeAws_json1_1SendSSHPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendSSHPublicKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendSSHPublicKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendSSHPublicKeyCommand = deserializeAws_json1_1SendSSHPublicKeyCommand;
async function deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthException":
        case "com.amazon.aws.sshaccessproxyservice#AuthException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EC2InstanceNotFoundException":
        case "com.amazon.aws.sshaccessproxyservice#EC2InstanceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgsException":
        case "com.amazon.aws.sshaccessproxyservice#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.aws.sshaccessproxyservice#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.aws.sshaccessproxyservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AuthExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthException(body, context);
    const contents = Object.assign({ name: "AuthException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EC2InstanceNotFoundException(body, context);
    const contents = Object.assign({ name: "EC2InstanceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgsException(body, context);
    const contents = Object.assign({ name: "InvalidArgsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = Object.assign({ name: "ServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1SendSSHPublicKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.InstanceOSUser !== undefined) {
        bodyParams["InstanceOSUser"] = input.InstanceOSUser;
    }
    if (input.SSHPublicKey !== undefined) {
        bodyParams["SSHPublicKey"] = input.SSHPublicKey;
    }
    return bodyParams;
};
const deserializeAws_json1_1AuthException = (output, context) => {
    let contents = {
        __type: "AuthException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EC2InstanceNotFoundException = (output, context) => {
    let contents = {
        __type: "EC2InstanceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArgsException = (output, context) => {
    let contents = {
        __type: "InvalidArgsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SendSSHPublicKeyResponse = (output, context) => {
    let contents = {
        __type: "SendSSHPublicKeyResponse",
        RequestId: undefined,
        Success: undefined
    };
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    if (output.Success !== undefined && output.Success !== null) {
        contents.Success = output.Success;
    }
    return contents;
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    let contents = {
        __type: "ServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
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