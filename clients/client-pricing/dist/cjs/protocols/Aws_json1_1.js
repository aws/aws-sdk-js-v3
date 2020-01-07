"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_json1_1DescribeServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPriceListService.DescribeServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServicesCommand = serializeAws_json1_1DescribeServicesCommand;
async function serializeAws_json1_1GetAttributeValuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPriceListService.GetAttributeValues";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAttributeValuesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAttributeValuesCommand = serializeAws_json1_1GetAttributeValuesCommand;
async function serializeAws_json1_1GetProductsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPriceListService.GetProducts";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProductsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetProductsCommand = serializeAws_json1_1GetProductsCommand;
async function deserializeAws_json1_1DescribeServicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServicesCommand = deserializeAws_json1_1DescribeServicesCommand;
async function deserializeAws_json1_1DescribeServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awspricelistservice#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awspricelistservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awspricelistservice#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAttributeValuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAttributeValuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAttributeValuesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAttributeValuesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAttributeValuesCommand = deserializeAws_json1_1GetAttributeValuesCommand;
async function deserializeAws_json1_1GetAttributeValuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awspricelistservice#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awspricelistservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awspricelistservice#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetProductsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProductsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetProductsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetProductsCommand = deserializeAws_json1_1GetProductsCommand;
async function deserializeAws_json1_1GetProductsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awspricelistservice#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awspricelistservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awspricelistservice#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
    const contents = Object.assign({ name: "ExpiredNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1DescribeServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.FormatVersion !== undefined) {
        bodyParams["FormatVersion"] = input.FormatVersion;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Field !== undefined) {
        bodyParams["Field"] = input.Field;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetAttributeValuesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1GetProductsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.FormatVersion !== undefined) {
        bodyParams["FormatVersion"] = input.FormatVersion;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const deserializeAws_json1_1AttributeNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AttributeValue = (output, context) => {
    let contents = {
        __type: "AttributeValue",
        Value: undefined
    };
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1AttributeValueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttributeValue(entry, context));
};
const deserializeAws_json1_1DescribeServicesResponse = (output, context) => {
    let contents = {
        __type: "DescribeServicesResponse",
        FormatVersion: undefined,
        NextToken: undefined,
        Services: undefined
    };
    if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
        contents.FormatVersion = output.FormatVersion;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Services !== undefined && output.Services !== null) {
        contents.Services = deserializeAws_json1_1ServiceList(output.Services, context);
    }
    return contents;
};
const deserializeAws_json1_1ExpiredNextTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetAttributeValuesResponse = (output, context) => {
    let contents = {
        __type: "GetAttributeValuesResponse",
        AttributeValues: undefined,
        NextToken: undefined
    };
    if (output.AttributeValues !== undefined && output.AttributeValues !== null) {
        contents.AttributeValues = deserializeAws_json1_1AttributeValueList(output.AttributeValues, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetProductsResponse = (output, context) => {
    let contents = {
        __type: "GetProductsResponse",
        FormatVersion: undefined,
        NextToken: undefined,
        PriceList: undefined
    };
    if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
        contents.FormatVersion = output.FormatVersion;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PriceList !== undefined && output.PriceList !== null) {
        contents.PriceList = deserializeAws_json1_1PriceList(output.PriceList, context);
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
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PriceList = (output, context) => {
    return (output || []).map((entry) => new smithy_client_1.LazyJsonString(entry));
};
const deserializeAws_json1_1Service = (output, context) => {
    let contents = {
        __type: "Service",
        AttributeNames: undefined,
        ServiceCode: undefined
    };
    if (output.AttributeNames !== undefined && output.AttributeNames !== null) {
        contents.AttributeNames = deserializeAws_json1_1AttributeNameList(output.AttributeNames, context);
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    return contents;
};
const deserializeAws_json1_1ServiceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Service(entry, context));
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