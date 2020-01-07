"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1DeleteReportDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrigamiServiceGatewayService.DeleteReportDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReportDefinitionCommand = serializeAws_json1_1DeleteReportDefinitionCommand;
async function serializeAws_json1_1DescribeReportDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrigamiServiceGatewayService.DescribeReportDefinitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReportDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReportDefinitionsCommand = serializeAws_json1_1DescribeReportDefinitionsCommand;
async function serializeAws_json1_1ModifyReportDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrigamiServiceGatewayService.ModifyReportDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyReportDefinitionCommand = serializeAws_json1_1ModifyReportDefinitionCommand;
async function serializeAws_json1_1PutReportDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrigamiServiceGatewayService.PutReportDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutReportDefinitionCommand = serializeAws_json1_1PutReportDefinitionCommand;
async function deserializeAws_json1_1DeleteReportDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReportDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReportDefinitionCommand = deserializeAws_json1_1DeleteReportDefinitionCommand;
async function deserializeAws_json1_1DeleteReportDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.awsorigamiservicegateway#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReportDefinitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReportDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReportDefinitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReportDefinitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReportDefinitionsCommand = deserializeAws_json1_1DescribeReportDefinitionsCommand;
async function deserializeAws_json1_1DescribeReportDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyReportDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReportDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReportDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyReportDefinitionCommand = deserializeAws_json1_1ModifyReportDefinitionCommand;
async function deserializeAws_json1_1ModifyReportDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.awsorigamiservicegateway#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutReportDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutReportDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutReportDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutReportDefinitionCommand = deserializeAws_json1_1PutReportDefinitionCommand;
async function deserializeAws_json1_1PutReportDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateReportNameException":
        case "com.amazonaws.awsorigamiservicegateway#DuplicateReportNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateReportNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReportLimitReachedException":
        case "com.amazonaws.awsorigamiservicegateway#ReportLimitReachedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReportLimitReachedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.awsorigamiservicegateway#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1DuplicateReportNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateReportNameException(body, context);
    const contents = Object.assign({ name: "DuplicateReportNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReportLimitReachedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReportLimitReachedException(body, context);
    const contents = Object.assign({ name: "ReportLimitReachedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AdditionalArtifactList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteReportDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ReportName !== undefined) {
        bodyParams["ReportName"] = input.ReportName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReportDefinitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyReportDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ReportDefinition !== undefined) {
        bodyParams["ReportDefinition"] = serializeAws_json1_1ReportDefinition(input.ReportDefinition, context);
    }
    if (input.ReportName !== undefined) {
        bodyParams["ReportName"] = input.ReportName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutReportDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ReportDefinition !== undefined) {
        bodyParams["ReportDefinition"] = serializeAws_json1_1ReportDefinition(input.ReportDefinition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ReportDefinition = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalArtifacts !== undefined) {
        bodyParams["AdditionalArtifacts"] = serializeAws_json1_1AdditionalArtifactList(input.AdditionalArtifacts, context);
    }
    if (input.AdditionalSchemaElements !== undefined) {
        bodyParams["AdditionalSchemaElements"] = serializeAws_json1_1SchemaElementList(input.AdditionalSchemaElements, context);
    }
    if (input.Compression !== undefined) {
        bodyParams["Compression"] = input.Compression;
    }
    if (input.Format !== undefined) {
        bodyParams["Format"] = input.Format;
    }
    if (input.RefreshClosedReports !== undefined) {
        bodyParams["RefreshClosedReports"] = input.RefreshClosedReports;
    }
    if (input.ReportName !== undefined) {
        bodyParams["ReportName"] = input.ReportName;
    }
    if (input.ReportVersioning !== undefined) {
        bodyParams["ReportVersioning"] = input.ReportVersioning;
    }
    if (input.S3Bucket !== undefined) {
        bodyParams["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Prefix !== undefined) {
        bodyParams["S3Prefix"] = input.S3Prefix;
    }
    if (input.S3Region !== undefined) {
        bodyParams["S3Region"] = input.S3Region;
    }
    if (input.TimeUnit !== undefined) {
        bodyParams["TimeUnit"] = input.TimeUnit;
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaElementList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1AdditionalArtifactList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeleteReportDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DeleteReportDefinitionResponse",
        ResponseMessage: undefined
    };
    if (output.ResponseMessage !== undefined && output.ResponseMessage !== null) {
        contents.ResponseMessage = output.ResponseMessage;
    }
    return contents;
};
const deserializeAws_json1_1DescribeReportDefinitionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeReportDefinitionsResponse",
        NextToken: undefined,
        ReportDefinitions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ReportDefinitions !== undefined &&
        output.ReportDefinitions !== null) {
        contents.ReportDefinitions = deserializeAws_json1_1ReportDefinitionList(output.ReportDefinitions, context);
    }
    return contents;
};
const deserializeAws_json1_1DuplicateReportNameException = (output, context) => {
    let contents = {
        __type: "DuplicateReportNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ModifyReportDefinitionResponse = (output, context) => {
    let contents = {
        __type: "ModifyReportDefinitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutReportDefinitionResponse = (output, context) => {
    let contents = {
        __type: "PutReportDefinitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1ReportDefinition = (output, context) => {
    let contents = {
        __type: "ReportDefinition",
        AdditionalArtifacts: undefined,
        AdditionalSchemaElements: undefined,
        Compression: undefined,
        Format: undefined,
        RefreshClosedReports: undefined,
        ReportName: undefined,
        ReportVersioning: undefined,
        S3Bucket: undefined,
        S3Prefix: undefined,
        S3Region: undefined,
        TimeUnit: undefined
    };
    if (output.AdditionalArtifacts !== undefined &&
        output.AdditionalArtifacts !== null) {
        contents.AdditionalArtifacts = deserializeAws_json1_1AdditionalArtifactList(output.AdditionalArtifacts, context);
    }
    if (output.AdditionalSchemaElements !== undefined &&
        output.AdditionalSchemaElements !== null) {
        contents.AdditionalSchemaElements = deserializeAws_json1_1SchemaElementList(output.AdditionalSchemaElements, context);
    }
    if (output.Compression !== undefined && output.Compression !== null) {
        contents.Compression = output.Compression;
    }
    if (output.Format !== undefined && output.Format !== null) {
        contents.Format = output.Format;
    }
    if (output.RefreshClosedReports !== undefined &&
        output.RefreshClosedReports !== null) {
        contents.RefreshClosedReports = output.RefreshClosedReports;
    }
    if (output.ReportName !== undefined && output.ReportName !== null) {
        contents.ReportName = output.ReportName;
    }
    if (output.ReportVersioning !== undefined &&
        output.ReportVersioning !== null) {
        contents.ReportVersioning = output.ReportVersioning;
    }
    if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
        contents.S3Bucket = output.S3Bucket;
    }
    if (output.S3Prefix !== undefined && output.S3Prefix !== null) {
        contents.S3Prefix = output.S3Prefix;
    }
    if (output.S3Region !== undefined && output.S3Region !== null) {
        contents.S3Region = output.S3Region;
    }
    if (output.TimeUnit !== undefined && output.TimeUnit !== null) {
        contents.TimeUnit = output.TimeUnit;
    }
    return contents;
};
const deserializeAws_json1_1ReportDefinitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReportDefinition(entry, context));
};
const deserializeAws_json1_1ReportLimitReachedException = (output, context) => {
    let contents = {
        __type: "ReportLimitReachedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SchemaElementList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
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