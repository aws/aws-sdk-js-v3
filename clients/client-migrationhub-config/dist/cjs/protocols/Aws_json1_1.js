"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateHomeRegionControlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHomeRegionControlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHomeRegionControlCommand = serializeAws_json1_1CreateHomeRegionControlCommand;
async function serializeAws_json1_1DescribeHomeRegionControlsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHomeRegionControlsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHomeRegionControlsCommand = serializeAws_json1_1DescribeHomeRegionControlsCommand;
async function serializeAws_json1_1GetHomeRegionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHubMultiAccountService.GetHomeRegion";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHomeRegionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetHomeRegionCommand = serializeAws_json1_1GetHomeRegionCommand;
async function deserializeAws_json1_1CreateHomeRegionControlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHomeRegionControlResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHomeRegionControlCommand = deserializeAws_json1_1CreateHomeRegionControlCommand;
async function deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazonaws.awsmigrationhubmultiaccount#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeHomeRegionControlsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHomeRegionControlsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHomeRegionControlsCommand = deserializeAws_json1_1DescribeHomeRegionControlsCommand;
async function deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetHomeRegionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetHomeRegionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetHomeRegionCommand = deserializeAws_json1_1GetHomeRegionCommand;
async function deserializeAws_json1_1GetHomeRegionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1DryRunOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DryRunOperation(body, context);
    const contents = Object.assign({ name: "DryRunOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CreateHomeRegionControlRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.HomeRegion !== undefined) {
        bodyParams["HomeRegion"] = input.HomeRegion;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = serializeAws_json1_1Target(input.Target, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHomeRegionControlsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ControlId !== undefined) {
        bodyParams["ControlId"] = input.ControlId;
    }
    if (input.HomeRegion !== undefined) {
        bodyParams["HomeRegion"] = input.HomeRegion;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = serializeAws_json1_1Target(input.Target, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetHomeRegionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1Target = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateHomeRegionControlResult = (output, context) => {
    let contents = {
        __type: "CreateHomeRegionControlResult",
        HomeRegionControl: undefined
    };
    if (output.HomeRegionControl !== undefined &&
        output.HomeRegionControl !== null) {
        contents.HomeRegionControl = deserializeAws_json1_1HomeRegionControl(output.HomeRegionControl, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeHomeRegionControlsResult = (output, context) => {
    let contents = {
        __type: "DescribeHomeRegionControlsResult",
        HomeRegionControls: undefined,
        NextToken: undefined
    };
    if (output.HomeRegionControls !== undefined &&
        output.HomeRegionControls !== null) {
        contents.HomeRegionControls = deserializeAws_json1_1HomeRegionControls(output.HomeRegionControls, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DryRunOperation = (output, context) => {
    let contents = {
        __type: "DryRunOperation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetHomeRegionResult = (output, context) => {
    let contents = {
        __type: "GetHomeRegionResult",
        HomeRegion: undefined
    };
    if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
        contents.HomeRegion = output.HomeRegion;
    }
    return contents;
};
const deserializeAws_json1_1HomeRegionControl = (output, context) => {
    let contents = {
        __type: "HomeRegionControl",
        ControlId: undefined,
        HomeRegion: undefined,
        RequestedTime: undefined,
        Target: undefined
    };
    if (output.ControlId !== undefined && output.ControlId !== null) {
        contents.ControlId = output.ControlId;
    }
    if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
        contents.HomeRegion = output.HomeRegion;
    }
    if (output.RequestedTime !== undefined && output.RequestedTime !== null) {
        contents.RequestedTime = new Date(Math.round(output.RequestedTime * 1000));
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = deserializeAws_json1_1Target(output.Target, context);
    }
    return contents;
};
const deserializeAws_json1_1HomeRegionControls = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HomeRegionControl(entry, context));
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
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Target = (output, context) => {
    let contents = {
        __type: "Target",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
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