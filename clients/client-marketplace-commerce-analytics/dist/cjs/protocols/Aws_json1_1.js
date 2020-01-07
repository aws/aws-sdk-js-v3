"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1GenerateDataSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateDataSetCommand = serializeAws_json1_1GenerateDataSetCommand;
async function serializeAws_json1_1StartSupportDataExportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MarketplaceCommerceAnalytics20150701.StartSupportDataExport";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSupportDataExportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartSupportDataExportCommand = serializeAws_json1_1StartSupportDataExportCommand;
async function deserializeAws_json1_1GenerateDataSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateDataSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataSetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateDataSetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateDataSetCommand = deserializeAws_json1_1GenerateDataSetCommand;
async function deserializeAws_json1_1GenerateDataSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "MarketplaceCommerceAnalyticsException":
        case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartSupportDataExportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartSupportDataExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSupportDataExportResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartSupportDataExportResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartSupportDataExportCommand = deserializeAws_json1_1StartSupportDataExportCommand;
async function deserializeAws_json1_1StartSupportDataExportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "MarketplaceCommerceAnalyticsException":
        case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MarketplaceCommerceAnalyticsException(body, context);
    const contents = Object.assign({ name: "MarketplaceCommerceAnalyticsException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CustomerDefinedValues = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1GenerateDataSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.customerDefinedValues !== undefined) {
        bodyParams["customerDefinedValues"] = serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context);
    }
    if (input.dataSetPublicationDate !== undefined) {
        bodyParams["dataSetPublicationDate"] = Math.round(input.dataSetPublicationDate.getTime() / 1000);
    }
    if (input.dataSetType !== undefined) {
        bodyParams["dataSetType"] = input.dataSetType;
    }
    if (input.destinationS3BucketName !== undefined) {
        bodyParams["destinationS3BucketName"] = input.destinationS3BucketName;
    }
    if (input.destinationS3Prefix !== undefined) {
        bodyParams["destinationS3Prefix"] = input.destinationS3Prefix;
    }
    if (input.roleNameArn !== undefined) {
        bodyParams["roleNameArn"] = input.roleNameArn;
    }
    if (input.snsTopicArn !== undefined) {
        bodyParams["snsTopicArn"] = input.snsTopicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartSupportDataExportRequest = (input, context) => {
    const bodyParams = {};
    if (input.customerDefinedValues !== undefined) {
        bodyParams["customerDefinedValues"] = serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context);
    }
    if (input.dataSetType !== undefined) {
        bodyParams["dataSetType"] = input.dataSetType;
    }
    if (input.destinationS3BucketName !== undefined) {
        bodyParams["destinationS3BucketName"] = input.destinationS3BucketName;
    }
    if (input.destinationS3Prefix !== undefined) {
        bodyParams["destinationS3Prefix"] = input.destinationS3Prefix;
    }
    if (input.fromDate !== undefined) {
        bodyParams["fromDate"] = Math.round(input.fromDate.getTime() / 1000);
    }
    if (input.roleNameArn !== undefined) {
        bodyParams["roleNameArn"] = input.roleNameArn;
    }
    if (input.snsTopicArn !== undefined) {
        bodyParams["snsTopicArn"] = input.snsTopicArn;
    }
    return bodyParams;
};
const deserializeAws_json1_1GenerateDataSetResult = (output, context) => {
    let contents = {
        __type: "GenerateDataSetResult",
        dataSetRequestId: undefined
    };
    if (output.dataSetRequestId !== undefined &&
        output.dataSetRequestId !== null) {
        contents.dataSetRequestId = output.dataSetRequestId;
    }
    return contents;
};
const deserializeAws_json1_1MarketplaceCommerceAnalyticsException = (output, context) => {
    let contents = {
        __type: "MarketplaceCommerceAnalyticsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StartSupportDataExportResult = (output, context) => {
    let contents = {
        __type: "StartSupportDataExportResult",
        dataSetRequestId: undefined
    };
    if (output.dataSetRequestId !== undefined &&
        output.dataSetRequestId !== null) {
        contents.dataSetRequestId = output.dataSetRequestId;
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