"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchMeterUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMPMeteringService.BatchMeterUsage";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchMeterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchMeterUsageCommand = serializeAws_json1_1BatchMeterUsageCommand;
async function serializeAws_json1_1MeterUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMPMeteringService.MeterUsage";
    let body;
    body = JSON.stringify(serializeAws_json1_1MeterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MeterUsageCommand = serializeAws_json1_1MeterUsageCommand;
async function serializeAws_json1_1RegisterUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMPMeteringService.RegisterUsage";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterUsageCommand = serializeAws_json1_1RegisterUsageCommand;
async function serializeAws_json1_1ResolveCustomerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMPMeteringService.ResolveCustomer";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveCustomerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResolveCustomerCommand = serializeAws_json1_1ResolveCustomerCommand;
async function deserializeAws_json1_1BatchMeterUsageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchMeterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchMeterUsageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchMeterUsageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchMeterUsageCommand = deserializeAws_json1_1BatchMeterUsageCommand;
async function deserializeAws_json1_1BatchMeterUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DisabledApiException":
        case "com.amazonaws.marketplace.metering#DisabledApiException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCustomerIdentifierException":
        case "com.amazonaws.marketplace.metering#InvalidCustomerIdentifierException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUsageDimensionException":
        case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplace.metering#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TimestampOutOfBoundsException":
        case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1MeterUsageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MeterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MeterUsageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MeterUsageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MeterUsageCommand = deserializeAws_json1_1MeterUsageCommand;
async function deserializeAws_json1_1MeterUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomerNotEntitledException":
        case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRequestException":
        case "com.amazonaws.marketplace.metering#DuplicateRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEndpointRegionException":
        case "com.amazonaws.marketplace.metering#InvalidEndpointRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUsageDimensionException":
        case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplace.metering#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TimestampOutOfBoundsException":
        case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterUsageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterUsageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterUsageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterUsageCommand = deserializeAws_json1_1RegisterUsageCommand;
async function deserializeAws_json1_1RegisterUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomerNotEntitledException":
        case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledApiException":
        case "com.amazonaws.marketplace.metering#DisabledApiException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPublicKeyVersionException":
        case "com.amazonaws.marketplace.metering#InvalidPublicKeyVersionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRegionException":
        case "com.amazonaws.marketplace.metering#InvalidRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformNotSupportedException":
        case "com.amazonaws.marketplace.metering#PlatformNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplace.metering#ThrottlingException":
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
async function deserializeAws_json1_1ResolveCustomerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResolveCustomerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveCustomerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResolveCustomerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResolveCustomerCommand = deserializeAws_json1_1ResolveCustomerCommand;
async function deserializeAws_json1_1ResolveCustomerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DisabledApiException":
        case "com.amazonaws.marketplace.metering#DisabledApiException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredTokenException":
        case "com.amazonaws.marketplace.metering#ExpiredTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTokenException":
        case "com.amazonaws.marketplace.metering#InvalidTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplace.metering#ThrottlingException":
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
const deserializeAws_json1_1CustomerNotEntitledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomerNotEntitledException(body, context);
    const contents = Object.assign({ name: "CustomerNotEntitledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DisabledApiExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DisabledApiException(body, context);
    const contents = Object.assign({ name: "DisabledApiException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequestException(body, context);
    const contents = Object.assign({ name: "DuplicateRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredTokenException(body, context);
    const contents = Object.assign({ name: "ExpiredTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = Object.assign({ name: "InternalServiceErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCustomerIdentifierException(body, context);
    const contents = Object.assign({ name: "InvalidCustomerIdentifierException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEndpointRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEndpointRegionException(body, context);
    const contents = Object.assign({ name: "InvalidEndpointRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidProductCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidProductCodeException(body, context);
    const contents = Object.assign({ name: "InvalidProductCodeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPublicKeyVersionException(body, context);
    const contents = Object.assign({ name: "InvalidPublicKeyVersionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRegionException(body, context);
    const contents = Object.assign({ name: "InvalidRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTokenException(body, context);
    const contents = Object.assign({ name: "InvalidTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidUsageDimensionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUsageDimensionException(body, context);
    const contents = Object.assign({ name: "InvalidUsageDimensionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PlatformNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformNotSupportedException(body, context);
    const contents = Object.assign({ name: "PlatformNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TimestampOutOfBoundsException(body, context);
    const contents = Object.assign({ name: "TimestampOutOfBoundsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchMeterUsageRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProductCode !== undefined) {
        bodyParams["ProductCode"] = input.ProductCode;
    }
    if (input.UsageRecords !== undefined) {
        bodyParams["UsageRecords"] = serializeAws_json1_1UsageRecordList(input.UsageRecords, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MeterUsageRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.ProductCode !== undefined) {
        bodyParams["ProductCode"] = input.ProductCode;
    }
    if (input.Timestamp !== undefined) {
        bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
    }
    if (input.UsageDimension !== undefined) {
        bodyParams["UsageDimension"] = input.UsageDimension;
    }
    if (input.UsageQuantity !== undefined) {
        bodyParams["UsageQuantity"] = input.UsageQuantity;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterUsageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Nonce !== undefined) {
        bodyParams["Nonce"] = input.Nonce;
    }
    if (input.ProductCode !== undefined) {
        bodyParams["ProductCode"] = input.ProductCode;
    }
    if (input.PublicKeyVersion !== undefined) {
        bodyParams["PublicKeyVersion"] = input.PublicKeyVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1ResolveCustomerRequest = (input, context) => {
    const bodyParams = {};
    if (input.RegistrationToken !== undefined) {
        bodyParams["RegistrationToken"] = input.RegistrationToken;
    }
    return bodyParams;
};
const serializeAws_json1_1UsageRecord = (input, context) => {
    const bodyParams = {};
    if (input.CustomerIdentifier !== undefined) {
        bodyParams["CustomerIdentifier"] = input.CustomerIdentifier;
    }
    if (input.Dimension !== undefined) {
        bodyParams["Dimension"] = input.Dimension;
    }
    if (input.Quantity !== undefined) {
        bodyParams["Quantity"] = input.Quantity;
    }
    if (input.Timestamp !== undefined) {
        bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UsageRecordList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1UsageRecord(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1BatchMeterUsageResult = (output, context) => {
    let contents = {
        __type: "BatchMeterUsageResult",
        Results: undefined,
        UnprocessedRecords: undefined
    };
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1UsageRecordResultList(output.Results, context);
    }
    if (output.UnprocessedRecords !== undefined &&
        output.UnprocessedRecords !== null) {
        contents.UnprocessedRecords = deserializeAws_json1_1UsageRecordList(output.UnprocessedRecords, context);
    }
    return contents;
};
const deserializeAws_json1_1CustomerNotEntitledException = (output, context) => {
    let contents = {
        __type: "CustomerNotEntitledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DisabledApiException = (output, context) => {
    let contents = {
        __type: "DisabledApiException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateRequestException = (output, context) => {
    let contents = {
        __type: "DuplicateRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ExpiredTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1InvalidCustomerIdentifierException = (output, context) => {
    let contents = {
        __type: "InvalidCustomerIdentifierException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEndpointRegionException = (output, context) => {
    let contents = {
        __type: "InvalidEndpointRegionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidProductCodeException = (output, context) => {
    let contents = {
        __type: "InvalidProductCodeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPublicKeyVersionException = (output, context) => {
    let contents = {
        __type: "InvalidPublicKeyVersionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRegionException = (output, context) => {
    let contents = {
        __type: "InvalidRegionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTokenException = (output, context) => {
    let contents = {
        __type: "InvalidTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidUsageDimensionException = (output, context) => {
    let contents = {
        __type: "InvalidUsageDimensionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MeterUsageResult = (output, context) => {
    let contents = {
        __type: "MeterUsageResult",
        MeteringRecordId: undefined
    };
    if (output.MeteringRecordId !== undefined &&
        output.MeteringRecordId !== null) {
        contents.MeteringRecordId = output.MeteringRecordId;
    }
    return contents;
};
const deserializeAws_json1_1PlatformNotSupportedException = (output, context) => {
    let contents = {
        __type: "PlatformNotSupportedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RegisterUsageResult = (output, context) => {
    let contents = {
        __type: "RegisterUsageResult",
        PublicKeyRotationTimestamp: undefined,
        Signature: undefined
    };
    if (output.PublicKeyRotationTimestamp !== undefined &&
        output.PublicKeyRotationTimestamp !== null) {
        contents.PublicKeyRotationTimestamp = new Date(Math.round(output.PublicKeyRotationTimestamp * 1000));
    }
    if (output.Signature !== undefined && output.Signature !== null) {
        contents.Signature = output.Signature;
    }
    return contents;
};
const deserializeAws_json1_1ResolveCustomerResult = (output, context) => {
    let contents = {
        __type: "ResolveCustomerResult",
        CustomerIdentifier: undefined,
        ProductCode: undefined
    };
    if (output.CustomerIdentifier !== undefined &&
        output.CustomerIdentifier !== null) {
        contents.CustomerIdentifier = output.CustomerIdentifier;
    }
    if (output.ProductCode !== undefined && output.ProductCode !== null) {
        contents.ProductCode = output.ProductCode;
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
const deserializeAws_json1_1TimestampOutOfBoundsException = (output, context) => {
    let contents = {
        __type: "TimestampOutOfBoundsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UsageRecord = (output, context) => {
    let contents = {
        __type: "UsageRecord",
        CustomerIdentifier: undefined,
        Dimension: undefined,
        Quantity: undefined,
        Timestamp: undefined
    };
    if (output.CustomerIdentifier !== undefined &&
        output.CustomerIdentifier !== null) {
        contents.CustomerIdentifier = output.CustomerIdentifier;
    }
    if (output.Dimension !== undefined && output.Dimension !== null) {
        contents.Dimension = output.Dimension;
    }
    if (output.Quantity !== undefined && output.Quantity !== null) {
        contents.Quantity = output.Quantity;
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1UsageRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UsageRecord(entry, context));
};
const deserializeAws_json1_1UsageRecordResult = (output, context) => {
    let contents = {
        __type: "UsageRecordResult",
        MeteringRecordId: undefined,
        Status: undefined,
        UsageRecord: undefined
    };
    if (output.MeteringRecordId !== undefined &&
        output.MeteringRecordId !== null) {
        contents.MeteringRecordId = output.MeteringRecordId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UsageRecord !== undefined && output.UsageRecord !== null) {
        contents.UsageRecord = deserializeAws_json1_1UsageRecord(output.UsageRecord, context);
    }
    return contents;
};
const deserializeAws_json1_1UsageRecordResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UsageRecordResult(entry, context));
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