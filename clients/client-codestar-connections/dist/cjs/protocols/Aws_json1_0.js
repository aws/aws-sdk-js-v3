"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0CreateConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "CodeStar_connections_20191201.CreateConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateConnectionCommand = serializeAws_json1_0CreateConnectionCommand;
async function serializeAws_json1_0DeleteConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "CodeStar_connections_20191201.DeleteConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteConnectionCommand = serializeAws_json1_0DeleteConnectionCommand;
async function serializeAws_json1_0GetConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "CodeStar_connections_20191201.GetConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetConnectionCommand = serializeAws_json1_0GetConnectionCommand;
async function serializeAws_json1_0ListConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "CodeStar_connections_20191201.ListConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListConnectionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListConnectionsCommand = serializeAws_json1_0ListConnectionsCommand;
async function deserializeAws_json1_0CreateConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateConnectionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConnectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateConnectionCommand = deserializeAws_json1_0CreateConnectionCommand;
async function deserializeAws_json1_0CreateConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.codestar.connections#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DeleteConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteConnectionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConnectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteConnectionCommand = deserializeAws_json1_0DeleteConnectionCommand;
async function deserializeAws_json1_0DeleteConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestar.connections#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetConnectionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConnectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetConnectionCommand = deserializeAws_json1_0GetConnectionCommand;
async function deserializeAws_json1_0GetConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestar.connections#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListConnectionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConnectionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListConnectionsCommand = deserializeAws_json1_0ListConnectionsCommand;
async function deserializeAws_json1_0ListConnectionsCommandError(output, context) {
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
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0CreateConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionName !== undefined) {
        bodyParams["ConnectionName"] = input.ConnectionName;
    }
    if (input.ProviderType !== undefined) {
        bodyParams["ProviderType"] = input.ProviderType;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionArn !== undefined) {
        bodyParams["ConnectionArn"] = input.ConnectionArn;
    }
    return bodyParams;
};
const serializeAws_json1_0GetConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionArn !== undefined) {
        bodyParams["ConnectionArn"] = input.ConnectionArn;
    }
    return bodyParams;
};
const serializeAws_json1_0ListConnectionsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ProviderTypeFilter !== undefined) {
        bodyParams["ProviderTypeFilter"] = input.ProviderTypeFilter;
    }
    return bodyParams;
};
const deserializeAws_json1_0Connection = (output, context) => {
    let contents = {
        __type: "Connection",
        ConnectionArn: undefined,
        ConnectionName: undefined,
        ConnectionStatus: undefined,
        OwnerAccountId: undefined,
        ProviderType: undefined
    };
    if (output.ConnectionArn !== undefined && output.ConnectionArn !== null) {
        contents.ConnectionArn = output.ConnectionArn;
    }
    if (output.ConnectionName !== undefined && output.ConnectionName !== null) {
        contents.ConnectionName = output.ConnectionName;
    }
    if (output.ConnectionStatus !== undefined &&
        output.ConnectionStatus !== null) {
        contents.ConnectionStatus = output.ConnectionStatus;
    }
    if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
        contents.OwnerAccountId = output.OwnerAccountId;
    }
    if (output.ProviderType !== undefined && output.ProviderType !== null) {
        contents.ProviderType = output.ProviderType;
    }
    return contents;
};
const deserializeAws_json1_0ConnectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Connection(entry, context));
};
const deserializeAws_json1_0CreateConnectionOutput = (output, context) => {
    let contents = {
        __type: "CreateConnectionOutput",
        ConnectionArn: undefined
    };
    if (output.ConnectionArn !== undefined && output.ConnectionArn !== null) {
        contents.ConnectionArn = output.ConnectionArn;
    }
    return contents;
};
const deserializeAws_json1_0DeleteConnectionOutput = (output, context) => {
    let contents = {
        __type: "DeleteConnectionOutput"
    };
    return contents;
};
const deserializeAws_json1_0GetConnectionOutput = (output, context) => {
    let contents = {
        __type: "GetConnectionOutput",
        Connection: undefined
    };
    if (output.Connection !== undefined && output.Connection !== null) {
        contents.Connection = deserializeAws_json1_0Connection(output.Connection, context);
    }
    return contents;
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0ListConnectionsOutput = (output, context) => {
    let contents = {
        __type: "ListConnectionsOutput",
        Connections: undefined,
        NextToken: undefined
    };
    if (output.Connections !== undefined && output.Connections !== null) {
        contents.Connections = deserializeAws_json1_0ConnectionList(output.Connections, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
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
//# sourceMappingURL=Aws_json1_0.js.map