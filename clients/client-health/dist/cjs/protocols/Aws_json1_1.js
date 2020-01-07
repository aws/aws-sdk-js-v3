"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.DescribeAffectedAccountsForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand;
async function serializeAws_json1_1DescribeAffectedEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeAffectedEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAffectedEntitiesCommand = serializeAws_json1_1DescribeAffectedEntitiesCommand;
async function serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand;
async function serializeAws_json1_1DescribeEntityAggregatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEntityAggregates";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntityAggregatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEntityAggregatesCommand = serializeAws_json1_1DescribeEntityAggregatesCommand;
async function serializeAws_json1_1DescribeEventAggregatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventAggregates";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventAggregatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventAggregatesCommand = serializeAws_json1_1DescribeEventAggregatesCommand;
async function serializeAws_json1_1DescribeEventDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventDetailsCommand = serializeAws_json1_1DescribeEventDetailsCommand;
async function serializeAws_json1_1DescribeEventDetailsForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.DescribeEventDetailsForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = serializeAws_json1_1DescribeEventDetailsForOrganizationCommand;
async function serializeAws_json1_1DescribeEventTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventTypesCommand = serializeAws_json1_1DescribeEventTypesCommand;
async function serializeAws_json1_1DescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
async function serializeAws_json1_1DescribeEventsForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventsForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventsForOrganizationCommand = serializeAws_json1_1DescribeEventsForOrganizationCommand;
async function serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand;
async function serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.DisableHealthServiceAccessForOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand;
async function serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHealth_20160804.EnableHealthServiceAccessForOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand;
async function deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAffectedAccountsForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand;
async function deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAffectedEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAffectedEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAffectedEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAffectedEntitiesCommand = deserializeAws_json1_1DescribeAffectedEntitiesCommand;
async function deserializeAws_json1_1DescribeAffectedEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAffectedEntitiesForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand;
async function deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEntityAggregatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEntityAggregatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntityAggregatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEntityAggregatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEntityAggregatesCommand = deserializeAws_json1_1DescribeEntityAggregatesCommand;
async function deserializeAws_json1_1DescribeEntityAggregatesCommandError(output, context) {
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
async function deserializeAws_json1_1DescribeEventAggregatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventAggregatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventAggregatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventAggregatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventAggregatesCommand = deserializeAws_json1_1DescribeEventAggregatesCommand;
async function deserializeAws_json1_1DescribeEventAggregatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventDetailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventDetailsCommand = deserializeAws_json1_1DescribeEventDetailsCommand;
async function deserializeAws_json1_1DescribeEventDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventDetailsForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand;
async function deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTypesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventTypesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventTypesCommand = deserializeAws_json1_1DescribeEventTypesCommand;
async function deserializeAws_json1_1DescribeEventTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
async function deserializeAws_json1_1DescribeEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventsForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventsForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventsForOrganizationCommand = deserializeAws_json1_1DescribeEventsForOrganizationCommand;
async function deserializeAws_json1_1DescribeEventsForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHealthServiceStatusForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand;
async function deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(output, context) {
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
async function deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand;
async function deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand;
async function deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.silvermineunifiedapi.v20160804.error#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationToken(body, context);
    const contents = Object.assign({ name: "InvalidPaginationToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedLocaleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedLocale(body, context);
    const contents = Object.assign({ name: "UnsupportedLocale", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1availabilityZones = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1awsAccountIdsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1entityArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1entityStatusCodeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1entityValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1eventArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1eventStatusCodeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1eventTypeCategoryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1eventTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1regionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1serviceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1tagFilter = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1tagSet(entry, context));
    }
    return contents;
};
const serializeAws_json1_1tagSet = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventArn !== undefined) {
        bodyParams["eventArn"] = input.eventArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.organizationEntityFilters !== undefined) {
        bodyParams["organizationEntityFilters"] = serializeAws_json1_1OrganizationEntityFiltersList(input.organizationEntityFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAffectedEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1EntityFilter(input.filter, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEntityAggregatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventArns !== undefined) {
        bodyParams["eventArns"] = serializeAws_json1_1EventArnsList(input.eventArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventAggregatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.aggregateField !== undefined) {
        bodyParams["aggregateField"] = input.aggregateField;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1EventFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.organizationEventDetailFilters !== undefined) {
        bodyParams["organizationEventDetailFilters"] = serializeAws_json1_1OrganizationEventDetailFiltersList(input.organizationEventDetailFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventDetailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventArns !== undefined) {
        bodyParams["eventArns"] = serializeAws_json1_1eventArnList(input.eventArns, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventTypesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1EventTypeFilter(input.filter, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventsForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1OrganizationEventFilter(input.filter, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1EventFilter(input.filter, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1EventArnsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OrganizationEntityFiltersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EventAccountFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OrganizationEventDetailFiltersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EventAccountFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DateTimeRange = (input, context) => {
    const bodyParams = {};
    if (input.from !== undefined) {
        bodyParams["from"] = Math.round(input.from.getTime() / 1000);
    }
    if (input.to !== undefined) {
        bodyParams["to"] = Math.round(input.to.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1EntityFilter = (input, context) => {
    const bodyParams = {};
    if (input.entityArns !== undefined) {
        bodyParams["entityArns"] = serializeAws_json1_1entityArnList(input.entityArns, context);
    }
    if (input.entityValues !== undefined) {
        bodyParams["entityValues"] = serializeAws_json1_1entityValueList(input.entityValues, context);
    }
    if (input.eventArns !== undefined) {
        bodyParams["eventArns"] = serializeAws_json1_1eventArnList(input.eventArns, context);
    }
    if (input.lastUpdatedTimes !== undefined) {
        bodyParams["lastUpdatedTimes"] = serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context);
    }
    if (input.statusCodes !== undefined) {
        bodyParams["statusCodes"] = serializeAws_json1_1entityStatusCodeList(input.statusCodes, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1tagFilter(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EventAccountFilter = (input, context) => {
    const bodyParams = {};
    if (input.awsAccountId !== undefined) {
        bodyParams["awsAccountId"] = input.awsAccountId;
    }
    if (input.eventArn !== undefined) {
        bodyParams["eventArn"] = input.eventArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EventFilter = (input, context) => {
    const bodyParams = {};
    if (input.availabilityZones !== undefined) {
        bodyParams["availabilityZones"] = serializeAws_json1_1availabilityZones(input.availabilityZones, context);
    }
    if (input.endTimes !== undefined) {
        bodyParams["endTimes"] = serializeAws_json1_1dateTimeRangeList(input.endTimes, context);
    }
    if (input.entityArns !== undefined) {
        bodyParams["entityArns"] = serializeAws_json1_1entityArnList(input.entityArns, context);
    }
    if (input.entityValues !== undefined) {
        bodyParams["entityValues"] = serializeAws_json1_1entityValueList(input.entityValues, context);
    }
    if (input.eventArns !== undefined) {
        bodyParams["eventArns"] = serializeAws_json1_1eventArnList(input.eventArns, context);
    }
    if (input.eventStatusCodes !== undefined) {
        bodyParams["eventStatusCodes"] = serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context);
    }
    if (input.eventTypeCategories !== undefined) {
        bodyParams["eventTypeCategories"] = serializeAws_json1_1eventTypeCategoryList(input.eventTypeCategories, context);
    }
    if (input.eventTypeCodes !== undefined) {
        bodyParams["eventTypeCodes"] = serializeAws_json1_1eventTypeList(input.eventTypeCodes, context);
    }
    if (input.lastUpdatedTimes !== undefined) {
        bodyParams["lastUpdatedTimes"] = serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context);
    }
    if (input.regions !== undefined) {
        bodyParams["regions"] = serializeAws_json1_1regionList(input.regions, context);
    }
    if (input.services !== undefined) {
        bodyParams["services"] = serializeAws_json1_1serviceList(input.services, context);
    }
    if (input.startTimes !== undefined) {
        bodyParams["startTimes"] = serializeAws_json1_1dateTimeRangeList(input.startTimes, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1tagFilter(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EventTypeCategoryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EventTypeCodeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EventTypeFilter = (input, context) => {
    const bodyParams = {};
    if (input.eventTypeCategories !== undefined) {
        bodyParams["eventTypeCategories"] = serializeAws_json1_1EventTypeCategoryList(input.eventTypeCategories, context);
    }
    if (input.eventTypeCodes !== undefined) {
        bodyParams["eventTypeCodes"] = serializeAws_json1_1EventTypeCodeList(input.eventTypeCodes, context);
    }
    if (input.services !== undefined) {
        bodyParams["services"] = serializeAws_json1_1serviceList(input.services, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationEventFilter = (input, context) => {
    const bodyParams = {};
    if (input.awsAccountIds !== undefined) {
        bodyParams["awsAccountIds"] = serializeAws_json1_1awsAccountIdsList(input.awsAccountIds, context);
    }
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = serializeAws_json1_1DateTimeRange(input.endTime, context);
    }
    if (input.entityArns !== undefined) {
        bodyParams["entityArns"] = serializeAws_json1_1entityArnList(input.entityArns, context);
    }
    if (input.entityValues !== undefined) {
        bodyParams["entityValues"] = serializeAws_json1_1entityValueList(input.entityValues, context);
    }
    if (input.eventStatusCodes !== undefined) {
        bodyParams["eventStatusCodes"] = serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context);
    }
    if (input.eventTypeCategories !== undefined) {
        bodyParams["eventTypeCategories"] = serializeAws_json1_1eventTypeCategoryList(input.eventTypeCategories, context);
    }
    if (input.eventTypeCodes !== undefined) {
        bodyParams["eventTypeCodes"] = serializeAws_json1_1eventTypeList(input.eventTypeCodes, context);
    }
    if (input.lastUpdatedTime !== undefined) {
        bodyParams["lastUpdatedTime"] = serializeAws_json1_1DateTimeRange(input.lastUpdatedTime, context);
    }
    if (input.regions !== undefined) {
        bodyParams["regions"] = serializeAws_json1_1regionList(input.regions, context);
    }
    if (input.services !== undefined) {
        bodyParams["services"] = serializeAws_json1_1serviceList(input.services, context);
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = serializeAws_json1_1DateTimeRange(input.startTime, context);
    }
    return bodyParams;
};
const serializeAws_json1_1dateTimeRangeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DateTimeRange(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1eventMetadata = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1tagSet = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPaginationToken = (output, context) => {
    let contents = {
        __type: "InvalidPaginationToken",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedLocale = (output, context) => {
    let contents = {
        __type: "UnsupportedLocale",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeAffectedAccountsForOrganizationResponse",
        affectedAccounts: undefined,
        nextToken: undefined
    };
    if (output.affectedAccounts !== undefined &&
        output.affectedAccounts !== null) {
        contents.affectedAccounts = deserializeAws_json1_1affectedAccountsList(output.affectedAccounts, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context));
};
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeAffectedEntitiesForOrganizationResponse",
        entities: undefined,
        failedSet: undefined,
        nextToken: undefined
    };
    if (output.entities !== undefined && output.entities !== null) {
        contents.entities = deserializeAws_json1_1EntityList(output.entities, context);
    }
    if (output.failedSet !== undefined && output.failedSet !== null) {
        contents.failedSet = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(output.failedSet, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAffectedEntitiesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAffectedEntitiesResponse",
        entities: undefined,
        nextToken: undefined
    };
    if (output.entities !== undefined && output.entities !== null) {
        contents.entities = deserializeAws_json1_1EntityList(output.entities, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEntityAggregatesResponse = (output, context) => {
    let contents = {
        __type: "DescribeEntityAggregatesResponse",
        entityAggregates: undefined
    };
    if (output.entityAggregates !== undefined &&
        output.entityAggregates !== null) {
        contents.entityAggregates = deserializeAws_json1_1EntityAggregateList(output.entityAggregates, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventAggregatesResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventAggregatesResponse",
        eventAggregates: undefined,
        nextToken: undefined
    };
    if (output.eventAggregates !== undefined && output.eventAggregates !== null) {
        contents.eventAggregates = deserializeAws_json1_1EventAggregateList(output.eventAggregates, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventDetailsFailedSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventDetailsErrorItem(entry, context));
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context));
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventDetailsForOrganizationResponse",
        failedSet: undefined,
        successfulSet: undefined
    };
    if (output.failedSet !== undefined && output.failedSet !== null) {
        contents.failedSet = deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(output.failedSet, context);
    }
    if (output.successfulSet !== undefined && output.successfulSet !== null) {
        contents.successfulSet = deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(output.successfulSet, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationEventDetails(entry, context));
};
const deserializeAws_json1_1DescribeEventDetailsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventDetailsResponse",
        failedSet: undefined,
        successfulSet: undefined
    };
    if (output.failedSet !== undefined && output.failedSet !== null) {
        contents.failedSet = deserializeAws_json1_1DescribeEventDetailsFailedSet(output.failedSet, context);
    }
    if (output.successfulSet !== undefined && output.successfulSet !== null) {
        contents.successfulSet = deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(output.successfulSet, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventDetails(entry, context));
};
const deserializeAws_json1_1DescribeEventTypesResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventTypesResponse",
        eventTypes: undefined,
        nextToken: undefined
    };
    if (output.eventTypes !== undefined && output.eventTypes !== null) {
        contents.eventTypes = deserializeAws_json1_1EventTypeList(output.eventTypes, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventsForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventsForOrganizationResponse",
        events: undefined,
        nextToken: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1OrganizationEventList(output.events, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventsResponse",
        events: undefined,
        nextToken: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1EventList(output.events, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeHealthServiceStatusForOrganizationResponse",
        healthServiceAccessStatusForOrganization: undefined
    };
    if (output.healthServiceAccessStatusForOrganization !== undefined &&
        output.healthServiceAccessStatusForOrganization !== null) {
        contents.healthServiceAccessStatusForOrganization =
            output.healthServiceAccessStatusForOrganization;
    }
    return contents;
};
const deserializeAws_json1_1EntityAggregateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntityAggregate(entry, context));
};
const deserializeAws_json1_1EntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AffectedEntity(entry, context));
};
const deserializeAws_json1_1EventAggregateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventAggregate(entry, context));
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Event(entry, context));
};
const deserializeAws_json1_1EventTypeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventType(entry, context));
};
const deserializeAws_json1_1OrganizationEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationEvent(entry, context));
};
const deserializeAws_json1_1affectedAccountsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AffectedEntity = (output, context) => {
    let contents = {
        __type: "AffectedEntity",
        awsAccountId: undefined,
        entityArn: undefined,
        entityUrl: undefined,
        entityValue: undefined,
        eventArn: undefined,
        lastUpdatedTime: undefined,
        statusCode: undefined,
        tags: undefined
    };
    if (output.awsAccountId !== undefined && output.awsAccountId !== null) {
        contents.awsAccountId = output.awsAccountId;
    }
    if (output.entityArn !== undefined && output.entityArn !== null) {
        contents.entityArn = output.entityArn;
    }
    if (output.entityUrl !== undefined && output.entityUrl !== null) {
        contents.entityUrl = output.entityUrl;
    }
    if (output.entityValue !== undefined && output.entityValue !== null) {
        contents.entityValue = output.entityValue;
    }
    if (output.eventArn !== undefined && output.eventArn !== null) {
        contents.eventArn = output.eventArn;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = new Date(Math.round(output.lastUpdatedTime * 1000));
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1tagSet(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1EntityAggregate = (output, context) => {
    let contents = {
        __type: "EntityAggregate",
        count: undefined,
        eventArn: undefined
    };
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    if (output.eventArn !== undefined && output.eventArn !== null) {
        contents.eventArn = output.eventArn;
    }
    return contents;
};
const deserializeAws_json1_1Event = (output, context) => {
    let contents = {
        __type: "Event",
        arn: undefined,
        availabilityZone: undefined,
        endTime: undefined,
        eventTypeCategory: undefined,
        eventTypeCode: undefined,
        lastUpdatedTime: undefined,
        region: undefined,
        service: undefined,
        startTime: undefined,
        statusCode: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.availabilityZone = output.availabilityZone;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.eventTypeCategory !== undefined &&
        output.eventTypeCategory !== null) {
        contents.eventTypeCategory = output.eventTypeCategory;
    }
    if (output.eventTypeCode !== undefined && output.eventTypeCode !== null) {
        contents.eventTypeCode = output.eventTypeCode;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = new Date(Math.round(output.lastUpdatedTime * 1000));
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.service !== undefined && output.service !== null) {
        contents.service = output.service;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    return contents;
};
const deserializeAws_json1_1EventAggregate = (output, context) => {
    let contents = {
        __type: "EventAggregate",
        aggregateValue: undefined,
        count: undefined
    };
    if (output.aggregateValue !== undefined && output.aggregateValue !== null) {
        contents.aggregateValue = output.aggregateValue;
    }
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    return contents;
};
const deserializeAws_json1_1EventDescription = (output, context) => {
    let contents = {
        __type: "EventDescription",
        latestDescription: undefined
    };
    if (output.latestDescription !== undefined &&
        output.latestDescription !== null) {
        contents.latestDescription = output.latestDescription;
    }
    return contents;
};
const deserializeAws_json1_1EventDetails = (output, context) => {
    let contents = {
        __type: "EventDetails",
        event: undefined,
        eventDescription: undefined,
        eventMetadata: undefined
    };
    if (output.event !== undefined && output.event !== null) {
        contents.event = deserializeAws_json1_1Event(output.event, context);
    }
    if (output.eventDescription !== undefined &&
        output.eventDescription !== null) {
        contents.eventDescription = deserializeAws_json1_1EventDescription(output.eventDescription, context);
    }
    if (output.eventMetadata !== undefined && output.eventMetadata !== null) {
        contents.eventMetadata = deserializeAws_json1_1eventMetadata(output.eventMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1EventDetailsErrorItem = (output, context) => {
    let contents = {
        __type: "EventDetailsErrorItem",
        errorMessage: undefined,
        errorName: undefined,
        eventArn: undefined
    };
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.errorName !== undefined && output.errorName !== null) {
        contents.errorName = output.errorName;
    }
    if (output.eventArn !== undefined && output.eventArn !== null) {
        contents.eventArn = output.eventArn;
    }
    return contents;
};
const deserializeAws_json1_1EventType = (output, context) => {
    let contents = {
        __type: "EventType",
        category: undefined,
        code: undefined,
        service: undefined
    };
    if (output.category !== undefined && output.category !== null) {
        contents.category = output.category;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.service !== undefined && output.service !== null) {
        contents.service = output.service;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = (output, context) => {
    let contents = {
        __type: "OrganizationAffectedEntitiesErrorItem",
        awsAccountId: undefined,
        errorMessage: undefined,
        errorName: undefined,
        eventArn: undefined
    };
    if (output.awsAccountId !== undefined && output.awsAccountId !== null) {
        contents.awsAccountId = output.awsAccountId;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.errorName !== undefined && output.errorName !== null) {
        contents.errorName = output.errorName;
    }
    if (output.eventArn !== undefined && output.eventArn !== null) {
        contents.eventArn = output.eventArn;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationEvent = (output, context) => {
    let contents = {
        __type: "OrganizationEvent",
        arn: undefined,
        endTime: undefined,
        eventTypeCategory: undefined,
        eventTypeCode: undefined,
        lastUpdatedTime: undefined,
        region: undefined,
        service: undefined,
        startTime: undefined,
        statusCode: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.eventTypeCategory !== undefined &&
        output.eventTypeCategory !== null) {
        contents.eventTypeCategory = output.eventTypeCategory;
    }
    if (output.eventTypeCode !== undefined && output.eventTypeCode !== null) {
        contents.eventTypeCode = output.eventTypeCode;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = new Date(Math.round(output.lastUpdatedTime * 1000));
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.service !== undefined && output.service !== null) {
        contents.service = output.service;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationEventDetails = (output, context) => {
    let contents = {
        __type: "OrganizationEventDetails",
        awsAccountId: undefined,
        event: undefined,
        eventDescription: undefined,
        eventMetadata: undefined
    };
    if (output.awsAccountId !== undefined && output.awsAccountId !== null) {
        contents.awsAccountId = output.awsAccountId;
    }
    if (output.event !== undefined && output.event !== null) {
        contents.event = deserializeAws_json1_1Event(output.event, context);
    }
    if (output.eventDescription !== undefined &&
        output.eventDescription !== null) {
        contents.eventDescription = deserializeAws_json1_1EventDescription(output.eventDescription, context);
    }
    if (output.eventMetadata !== undefined && output.eventMetadata !== null) {
        contents.eventMetadata = deserializeAws_json1_1eventMetadata(output.eventMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1OrganizationEventDetailsErrorItem = (output, context) => {
    let contents = {
        __type: "OrganizationEventDetailsErrorItem",
        awsAccountId: undefined,
        errorMessage: undefined,
        errorName: undefined,
        eventArn: undefined
    };
    if (output.awsAccountId !== undefined && output.awsAccountId !== null) {
        contents.awsAccountId = output.awsAccountId;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.errorName !== undefined && output.errorName !== null) {
        contents.errorName = output.errorName;
    }
    if (output.eventArn !== undefined && output.eventArn !== null) {
        contents.eventArn = output.eventArn;
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