"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1GetEntitlementsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMPEntitlementService.GetEntitlements";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEntitlementsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetEntitlementsCommand = serializeAws_json1_1GetEntitlementsCommand;
async function deserializeAws_json1_1GetEntitlementsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetEntitlementsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEntitlementsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEntitlementsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetEntitlementsCommand = deserializeAws_json1_1GetEntitlementsCommand;
async function deserializeAws_json1_1GetEntitlementsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplace.entitlement#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.marketplace.entitlement#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplace.entitlement#ThrottlingException":
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
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = Object.assign({ name: "InternalServiceErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetEntitlementFilters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1GetEntitlementsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1GetEntitlementFilters(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ProductCode !== undefined) {
        bodyParams["ProductCode"] = input.ProductCode;
    }
    return bodyParams;
};
const deserializeAws_json1_1Entitlement = (output, context) => {
    let contents = {
        __type: "Entitlement",
        CustomerIdentifier: undefined,
        Dimension: undefined,
        ExpirationDate: undefined,
        ProductCode: undefined,
        Value: undefined
    };
    if (output.CustomerIdentifier !== undefined &&
        output.CustomerIdentifier !== null) {
        contents.CustomerIdentifier = output.CustomerIdentifier;
    }
    if (output.Dimension !== undefined && output.Dimension !== null) {
        contents.Dimension = output.Dimension;
    }
    if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
        contents.ExpirationDate = new Date(Math.round(output.ExpirationDate * 1000));
    }
    if (output.ProductCode !== undefined && output.ProductCode !== null) {
        contents.ProductCode = output.ProductCode;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = deserializeAws_json1_1EntitlementValue(output.Value, context);
    }
    return contents;
};
const deserializeAws_json1_1EntitlementList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Entitlement(entry, context));
};
const deserializeAws_json1_1EntitlementValue = (output, context) => {
    let contents = {
        __type: "EntitlementValue",
        BooleanValue: undefined,
        DoubleValue: undefined,
        IntegerValue: undefined,
        StringValue: undefined
    };
    if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
        contents.BooleanValue = output.BooleanValue;
    }
    if (output.DoubleValue !== undefined && output.DoubleValue !== null) {
        contents.DoubleValue = output.DoubleValue;
    }
    if (output.IntegerValue !== undefined && output.IntegerValue !== null) {
        contents.IntegerValue = output.IntegerValue;
    }
    if (output.StringValue !== undefined && output.StringValue !== null) {
        contents.StringValue = output.StringValue;
    }
    return contents;
};
const deserializeAws_json1_1GetEntitlementsResult = (output, context) => {
    let contents = {
        __type: "GetEntitlementsResult",
        Entitlements: undefined,
        NextToken: undefined
    };
    if (output.Entitlements !== undefined && output.Entitlements !== null) {
        contents.Entitlements = deserializeAws_json1_1EntitlementList(output.Entitlements, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorException = (output, context) => {
    let contents = {
        __type: "InternalServiceErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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