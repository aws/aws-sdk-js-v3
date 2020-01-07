"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_restJson1_1GetIceServerConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/get-ice-server-config";
    let body;
    const bodyParams = {};
    if (input.ChannelARN !== undefined) {
        bodyParams["ChannelARN"] = input.ChannelARN;
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.Service !== undefined) {
        bodyParams["Service"] = input.Service;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1GetIceServerConfigCommand = serializeAws_restJson1_1GetIceServerConfigCommand;
async function serializeAws_restJson1_1SendAlexaOfferToMasterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/send-alexa-offer-to-master";
    let body;
    const bodyParams = {};
    if (input.ChannelARN !== undefined) {
        bodyParams["ChannelARN"] = input.ChannelARN;
    }
    if (input.MessagePayload !== undefined) {
        bodyParams["MessagePayload"] = input.MessagePayload;
    }
    if (input.SenderClientId !== undefined) {
        bodyParams["SenderClientId"] = input.SenderClientId;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1SendAlexaOfferToMasterCommand = serializeAws_restJson1_1SendAlexaOfferToMasterCommand;
async function deserializeAws_restJson1_1GetIceServerConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetIceServerConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetIceServerConfigResponse",
        IceServerList: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.IceServerList !== undefined && data.IceServerList !== null) {
        contents.IceServerList = deserializeAws_restJson1_1IceServerList(data.IceServerList, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetIceServerConfigCommand = deserializeAws_restJson1_1GetIceServerConfigCommand;
async function deserializeAws_restJson1_1GetIceServerConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClientException":
        case "com.amazonaws.kinesisvideo.signaling#InvalidClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SessionExpiredException":
        case "com.amazonaws.kinesisvideo.signaling#SessionExpiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1SessionExpiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1SendAlexaOfferToMasterCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1SendAlexaOfferToMasterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "SendAlexaOfferToMasterResponse",
        Answer: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Answer !== undefined && data.Answer !== null) {
        contents.Answer = data.Answer;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1SendAlexaOfferToMasterCommand = deserializeAws_restJson1_1SendAlexaOfferToMasterCommand;
async function deserializeAws_restJson1_1SendAlexaOfferToMasterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restJson1_1ClientLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ClientLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1InvalidClientExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidClientException",
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
const deserializeAws_restJson1_1SessionExpiredExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SessionExpiredException",
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
const deserializeAws_restJson1_1IceServer = (output, context) => {
    let contents = {
        __type: "IceServer",
        Password: undefined,
        Ttl: undefined,
        Uris: undefined,
        Username: undefined
    };
    if (output.Password !== undefined && output.Password !== null) {
        contents.Password = output.Password;
    }
    if (output.Ttl !== undefined && output.Ttl !== null) {
        contents.Ttl = output.Ttl;
    }
    if (output.Uris !== undefined && output.Uris !== null) {
        contents.Uris = deserializeAws_restJson1_1Uris(output.Uris, context);
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_restJson1_1IceServerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1IceServer(entry, context));
};
const deserializeAws_restJson1_1Uris = (output, context) => {
    return (output || []).map((entry) => entry);
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