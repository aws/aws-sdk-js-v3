"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1AddFlowOutputsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows/{FlowArn}/outputs";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    const bodyParams = {};
    if (input.Outputs !== undefined) {
        bodyParams["outputs"] = serializeAws_restJson1_1__listOfAddOutputRequest(input.Outputs, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1AddFlowOutputsCommand = serializeAws_restJson1_1AddFlowOutputsCommand;
async function serializeAws_restJson1_1CreateFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows";
    let body;
    const bodyParams = {};
    if (input.AvailabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.AvailabilityZone;
    }
    if (input.Entitlements !== undefined) {
        bodyParams["entitlements"] = serializeAws_restJson1_1__listOfGrantEntitlementRequest(input.Entitlements, context);
    }
    if (input.Name !== undefined) {
        bodyParams["name"] = input.Name;
    }
    if (input.Outputs !== undefined) {
        bodyParams["outputs"] = serializeAws_restJson1_1__listOfAddOutputRequest(input.Outputs, context);
    }
    if (input.Source !== undefined) {
        bodyParams["source"] = serializeAws_restJson1_1SetSourceRequest(input.Source, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateFlowCommand = serializeAws_restJson1_1CreateFlowCommand;
async function serializeAws_restJson1_1DeleteFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteFlowCommand = serializeAws_restJson1_1DeleteFlowCommand;
async function serializeAws_restJson1_1DescribeFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeFlowCommand = serializeAws_restJson1_1DescribeFlowCommand;
async function serializeAws_restJson1_1GrantFlowEntitlementsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    const bodyParams = {};
    if (input.Entitlements !== undefined) {
        bodyParams["entitlements"] = serializeAws_restJson1_1__listOfGrantEntitlementRequest(input.Entitlements, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1GrantFlowEntitlementsCommand = serializeAws_restJson1_1GrantFlowEntitlementsCommand;
async function serializeAws_restJson1_1ListEntitlementsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/entitlements";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListEntitlementsCommand = serializeAws_restJson1_1ListEntitlementsCommand;
async function serializeAws_restJson1_1ListFlowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListFlowsCommand = serializeAws_restJson1_1ListFlowsCommand;
async function serializeAws_restJson1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ListTagsForResourceCommand = serializeAws_restJson1_1ListTagsForResourceCommand;
async function serializeAws_restJson1_1RemoveFlowOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.OutputArn !== undefined) {
        const labelValue = input.OutputArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OutputArn.");
        }
        resolvedPath = resolvedPath.replace("{OutputArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OutputArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1RemoveFlowOutputCommand = serializeAws_restJson1_1RemoveFlowOutputCommand;
async function serializeAws_restJson1_1RevokeFlowEntitlementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
    if (input.EntitlementArn !== undefined) {
        const labelValue = input.EntitlementArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
        }
        resolvedPath = resolvedPath.replace("{EntitlementArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EntitlementArn.");
    }
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1RevokeFlowEntitlementCommand = serializeAws_restJson1_1RevokeFlowEntitlementCommand;
async function serializeAws_restJson1_1StartFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/start/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1StartFlowCommand = serializeAws_restJson1_1StartFlowCommand;
async function serializeAws_restJson1_1StopFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v1/flows/stop/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1StopFlowCommand = serializeAws_restJson1_1StopFlowCommand;
async function serializeAws_restJson1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    const bodyParams = {};
    if (input.Tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(input.Tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1TagResourceCommand = serializeAws_restJson1_1TagResourceCommand;
async function serializeAws_restJson1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {};
    if (input.TagKeys !== undefined) {
        query["tagKeys"] = (input.TagKeys || []).map(_entry => _entry);
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1UntagResourceCommand = serializeAws_restJson1_1UntagResourceCommand;
async function serializeAws_restJson1_1UpdateFlowEntitlementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
    if (input.EntitlementArn !== undefined) {
        const labelValue = input.EntitlementArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
        }
        resolvedPath = resolvedPath.replace("{EntitlementArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EntitlementArn.");
    }
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.Encryption !== undefined) {
        bodyParams["encryption"] = serializeAws_restJson1_1UpdateEncryption(input.Encryption, context);
    }
    if (input.Subscribers !== undefined) {
        bodyParams["subscribers"] = serializeAws_restJson1_1__listOf__string(input.Subscribers, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateFlowEntitlementCommand = serializeAws_restJson1_1UpdateFlowEntitlementCommand;
async function serializeAws_restJson1_1UpdateFlowOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.OutputArn !== undefined) {
        const labelValue = input.OutputArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OutputArn.");
        }
        resolvedPath = resolvedPath.replace("{OutputArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OutputArn.");
    }
    let body;
    const bodyParams = {};
    if (input.CidrAllowList !== undefined) {
        bodyParams["cidrAllowList"] = serializeAws_restJson1_1__listOf__string(input.CidrAllowList, context);
    }
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.Destination !== undefined) {
        bodyParams["destination"] = input.Destination;
    }
    if (input.Encryption !== undefined) {
        bodyParams["encryption"] = serializeAws_restJson1_1UpdateEncryption(input.Encryption, context);
    }
    if (input.MaxLatency !== undefined) {
        bodyParams["maxLatency"] = input.MaxLatency;
    }
    if (input.Port !== undefined) {
        bodyParams["port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        bodyParams["protocol"] = input.Protocol;
    }
    if (input.RemoteId !== undefined) {
        bodyParams["remoteId"] = input.RemoteId;
    }
    if (input.SmoothingLatency !== undefined) {
        bodyParams["smoothingLatency"] = input.SmoothingLatency;
    }
    if (input.StreamId !== undefined) {
        bodyParams["streamId"] = input.StreamId;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateFlowOutputCommand = serializeAws_restJson1_1UpdateFlowOutputCommand;
async function serializeAws_restJson1_1UpdateFlowSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.SourceArn !== undefined) {
        const labelValue = input.SourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceArn.");
        }
        resolvedPath = resolvedPath.replace("{SourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceArn.");
    }
    let body;
    const bodyParams = {};
    if (input.Decryption !== undefined) {
        bodyParams["decryption"] = serializeAws_restJson1_1UpdateEncryption(input.Decryption, context);
    }
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.EntitlementArn !== undefined) {
        bodyParams["entitlementArn"] = input.EntitlementArn;
    }
    if (input.IngestPort !== undefined) {
        bodyParams["ingestPort"] = input.IngestPort;
    }
    if (input.MaxBitrate !== undefined) {
        bodyParams["maxBitrate"] = input.MaxBitrate;
    }
    if (input.MaxLatency !== undefined) {
        bodyParams["maxLatency"] = input.MaxLatency;
    }
    if (input.Protocol !== undefined) {
        bodyParams["protocol"] = input.Protocol;
    }
    if (input.StreamId !== undefined) {
        bodyParams["streamId"] = input.StreamId;
    }
    if (input.WhitelistCidr !== undefined) {
        bodyParams["whitelistCidr"] = input.WhitelistCidr;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateFlowSourceCommand = serializeAws_restJson1_1UpdateFlowSourceCommand;
async function deserializeAws_restJson1_1AddFlowOutputsCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1AddFlowOutputsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "AddFlowOutputsResponse",
        FlowArn: undefined,
        Outputs: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.outputs !== undefined && data.outputs !== null) {
        contents.Outputs = deserializeAws_restJson1_1__listOfOutput(data.outputs, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1AddFlowOutputsCommand = deserializeAws_restJson1_1AddFlowOutputsCommand;
async function deserializeAws_restJson1_1AddFlowOutputsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AddFlowOutputs420Exception":
        case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AddFlowOutputs420ExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateFlowCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateFlowResponse",
        Flow: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flow !== undefined && data.flow !== null) {
        contents.Flow = deserializeAws_restJson1_1Flow(data.flow, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateFlowCommand = deserializeAws_restJson1_1CreateFlowCommand;
async function deserializeAws_restJson1_1CreateFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreateFlow420Exception":
        case "com.amazonaws.mediaconnect#CreateFlow420Exception":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1CreateFlow420ExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteFlowCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteFlowResponse",
        FlowArn: undefined,
        Status: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteFlowCommand = deserializeAws_restJson1_1DeleteFlowCommand;
async function deserializeAws_restJson1_1DeleteFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeFlowCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeFlowResponse",
        Flow: undefined,
        Messages: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flow !== undefined && data.flow !== null) {
        contents.Flow = deserializeAws_restJson1_1Flow(data.flow, context);
    }
    if (data.messages !== undefined && data.messages !== null) {
        contents.Messages = deserializeAws_restJson1_1Messages(data.messages, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeFlowCommand = deserializeAws_restJson1_1DescribeFlowCommand;
async function deserializeAws_restJson1_1DescribeFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GrantFlowEntitlementsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GrantFlowEntitlementsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GrantFlowEntitlementsResponse",
        Entitlements: undefined,
        FlowArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.entitlements !== undefined && data.entitlements !== null) {
        contents.Entitlements = deserializeAws_restJson1_1__listOfEntitlement(data.entitlements, context);
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GrantFlowEntitlementsCommand = deserializeAws_restJson1_1GrantFlowEntitlementsCommand;
async function deserializeAws_restJson1_1GrantFlowEntitlementsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GrantFlowEntitlements420Exception":
        case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1GrantFlowEntitlements420ExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListEntitlementsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListEntitlementsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListEntitlementsResponse",
        Entitlements: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.entitlements !== undefined && data.entitlements !== null) {
        contents.Entitlements = deserializeAws_restJson1_1__listOfListedEntitlement(data.entitlements, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListEntitlementsCommand = deserializeAws_restJson1_1ListEntitlementsCommand;
async function deserializeAws_restJson1_1ListEntitlementsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListFlowsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListFlowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFlowsResponse",
        Flows: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flows !== undefined && data.flows !== null) {
        contents.Flows = deserializeAws_restJson1_1__listOfListedFlow(data.flows, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListFlowsCommand = deserializeAws_restJson1_1ListFlowsCommand;
async function deserializeAws_restJson1_1ListFlowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1_1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListTagsForResourceCommand = deserializeAws_restJson1_1ListTagsForResourceCommand;
async function deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1RemoveFlowOutputCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1RemoveFlowOutputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "RemoveFlowOutputResponse",
        FlowArn: undefined,
        OutputArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.outputArn !== undefined && data.outputArn !== null) {
        contents.OutputArn = data.outputArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1RemoveFlowOutputCommand = deserializeAws_restJson1_1RemoveFlowOutputCommand;
async function deserializeAws_restJson1_1RemoveFlowOutputCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1RevokeFlowEntitlementCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1RevokeFlowEntitlementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "RevokeFlowEntitlementResponse",
        EntitlementArn: undefined,
        FlowArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.entitlementArn !== undefined && data.entitlementArn !== null) {
        contents.EntitlementArn = data.entitlementArn;
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1RevokeFlowEntitlementCommand = deserializeAws_restJson1_1RevokeFlowEntitlementCommand;
async function deserializeAws_restJson1_1RevokeFlowEntitlementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1StartFlowCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1StartFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "StartFlowResponse",
        FlowArn: undefined,
        Status: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1StartFlowCommand = deserializeAws_restJson1_1StartFlowCommand;
async function deserializeAws_restJson1_1StartFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1StopFlowCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1StopFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "StopFlowResponse",
        FlowArn: undefined,
        Status: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1StopFlowCommand = deserializeAws_restJson1_1StopFlowCommand;
async function deserializeAws_restJson1_1StopFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1TagResourceCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1TagResourceCommand = deserializeAws_restJson1_1TagResourceCommand;
async function deserializeAws_restJson1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UntagResourceCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UntagResourceCommand = deserializeAws_restJson1_1UntagResourceCommand;
async function deserializeAws_restJson1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateFlowEntitlementCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateFlowEntitlementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFlowEntitlementResponse",
        Entitlement: undefined,
        FlowArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.entitlement !== undefined && data.entitlement !== null) {
        contents.Entitlement = deserializeAws_restJson1_1Entitlement(data.entitlement, context);
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateFlowEntitlementCommand = deserializeAws_restJson1_1UpdateFlowEntitlementCommand;
async function deserializeAws_restJson1_1UpdateFlowEntitlementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateFlowOutputCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateFlowOutputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFlowOutputResponse",
        FlowArn: undefined,
        Output: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.output !== undefined && data.output !== null) {
        contents.Output = deserializeAws_restJson1_1Output(data.output, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateFlowOutputCommand = deserializeAws_restJson1_1UpdateFlowOutputCommand;
async function deserializeAws_restJson1_1UpdateFlowOutputCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateFlowSourceCommand(output, context) {
    if (output.statusCode !== 202 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateFlowSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFlowSourceResponse",
        FlowArn: undefined,
        Source: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.source !== undefined && data.source !== null) {
        contents.Source = deserializeAws_restJson1_1Source(data.source, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateFlowSourceCommand = deserializeAws_restJson1_1UpdateFlowSourceCommand;
async function deserializeAws_restJson1_1UpdateFlowSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restJson1_1AddFlowOutputs420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AddFlowOutputs420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1CreateFlow420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CreateFlow420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1GrantFlowEntitlements420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "GrantFlowEntitlements420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const serializeAws_restJson1_1AddOutputRequest = (input, context) => {
    const bodyParams = {};
    if (input.CidrAllowList !== undefined) {
        bodyParams["cidrAllowList"] = serializeAws_restJson1_1__listOf__string(input.CidrAllowList, context);
    }
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.Destination !== undefined) {
        bodyParams["destination"] = input.Destination;
    }
    if (input.Encryption !== undefined) {
        bodyParams["encryption"] = serializeAws_restJson1_1Encryption(input.Encryption, context);
    }
    if (input.MaxLatency !== undefined) {
        bodyParams["maxLatency"] = input.MaxLatency;
    }
    if (input.Name !== undefined) {
        bodyParams["name"] = input.Name;
    }
    if (input.Port !== undefined) {
        bodyParams["port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        bodyParams["protocol"] = input.Protocol;
    }
    if (input.RemoteId !== undefined) {
        bodyParams["remoteId"] = input.RemoteId;
    }
    if (input.SmoothingLatency !== undefined) {
        bodyParams["smoothingLatency"] = input.SmoothingLatency;
    }
    if (input.StreamId !== undefined) {
        bodyParams["streamId"] = input.StreamId;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Encryption = (input, context) => {
    const bodyParams = {};
    if (input.Algorithm !== undefined) {
        bodyParams["algorithm"] = input.Algorithm;
    }
    if (input.ConstantInitializationVector !== undefined) {
        bodyParams["constantInitializationVector"] =
            input.ConstantInitializationVector;
    }
    if (input.DeviceId !== undefined) {
        bodyParams["deviceId"] = input.DeviceId;
    }
    if (input.KeyType !== undefined) {
        bodyParams["keyType"] = input.KeyType;
    }
    if (input.Region !== undefined) {
        bodyParams["region"] = input.Region;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["resourceId"] = input.ResourceId;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["roleArn"] = input.RoleArn;
    }
    if (input.SecretArn !== undefined) {
        bodyParams["secretArn"] = input.SecretArn;
    }
    if (input.Url !== undefined) {
        bodyParams["url"] = input.Url;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrantEntitlementRequest = (input, context) => {
    const bodyParams = {};
    if (input.DataTransferSubscriberFeePercent !== undefined) {
        bodyParams["dataTransferSubscriberFeePercent"] =
            input.DataTransferSubscriberFeePercent;
    }
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.Encryption !== undefined) {
        bodyParams["encryption"] = serializeAws_restJson1_1Encryption(input.Encryption, context);
    }
    if (input.Name !== undefined) {
        bodyParams["name"] = input.Name;
    }
    if (input.Subscribers !== undefined) {
        bodyParams["subscribers"] = serializeAws_restJson1_1__listOf__string(input.Subscribers, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1SetSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Decryption !== undefined) {
        bodyParams["decryption"] = serializeAws_restJson1_1Encryption(input.Decryption, context);
    }
    if (input.Description !== undefined) {
        bodyParams["description"] = input.Description;
    }
    if (input.EntitlementArn !== undefined) {
        bodyParams["entitlementArn"] = input.EntitlementArn;
    }
    if (input.IngestPort !== undefined) {
        bodyParams["ingestPort"] = input.IngestPort;
    }
    if (input.MaxBitrate !== undefined) {
        bodyParams["maxBitrate"] = input.MaxBitrate;
    }
    if (input.MaxLatency !== undefined) {
        bodyParams["maxLatency"] = input.MaxLatency;
    }
    if (input.Name !== undefined) {
        bodyParams["name"] = input.Name;
    }
    if (input.Protocol !== undefined) {
        bodyParams["protocol"] = input.Protocol;
    }
    if (input.StreamId !== undefined) {
        bodyParams["streamId"] = input.StreamId;
    }
    if (input.WhitelistCidr !== undefined) {
        bodyParams["whitelistCidr"] = input.WhitelistCidr;
    }
    return bodyParams;
};
const serializeAws_restJson1_1UpdateEncryption = (input, context) => {
    const bodyParams = {};
    if (input.Algorithm !== undefined) {
        bodyParams["algorithm"] = input.Algorithm;
    }
    if (input.ConstantInitializationVector !== undefined) {
        bodyParams["constantInitializationVector"] =
            input.ConstantInitializationVector;
    }
    if (input.DeviceId !== undefined) {
        bodyParams["deviceId"] = input.DeviceId;
    }
    if (input.KeyType !== undefined) {
        bodyParams["keyType"] = input.KeyType;
    }
    if (input.Region !== undefined) {
        bodyParams["region"] = input.Region;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["resourceId"] = input.ResourceId;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["roleArn"] = input.RoleArn;
    }
    if (input.SecretArn !== undefined) {
        bodyParams["secretArn"] = input.SecretArn;
    }
    if (input.Url !== undefined) {
        bodyParams["url"] = input.Url;
    }
    return bodyParams;
};
const serializeAws_restJson1_1__listOfAddOutputRequest = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1AddOutputRequest(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfGrantEntitlementRequest = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1GrantEntitlementRequest(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOf__string = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1__mapOf__string = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1Encryption = (output, context) => {
    let contents = {
        __type: "Encryption",
        Algorithm: undefined,
        ConstantInitializationVector: undefined,
        DeviceId: undefined,
        KeyType: undefined,
        Region: undefined,
        ResourceId: undefined,
        RoleArn: undefined,
        SecretArn: undefined,
        Url: undefined
    };
    if (output.algorithm !== undefined && output.algorithm !== null) {
        contents.Algorithm = output.algorithm;
    }
    if (output.constantInitializationVector !== undefined &&
        output.constantInitializationVector !== null) {
        contents.ConstantInitializationVector = output.constantInitializationVector;
    }
    if (output.deviceId !== undefined && output.deviceId !== null) {
        contents.DeviceId = output.deviceId;
    }
    if (output.keyType !== undefined && output.keyType !== null) {
        contents.KeyType = output.keyType;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.Region = output.region;
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.ResourceId = output.resourceId;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.RoleArn = output.roleArn;
    }
    if (output.secretArn !== undefined && output.secretArn !== null) {
        contents.SecretArn = output.secretArn;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.Url = output.url;
    }
    return contents;
};
const deserializeAws_restJson1_1Entitlement = (output, context) => {
    let contents = {
        __type: "Entitlement",
        DataTransferSubscriberFeePercent: undefined,
        Description: undefined,
        Encryption: undefined,
        EntitlementArn: undefined,
        Name: undefined,
        Subscribers: undefined
    };
    if (output.dataTransferSubscriberFeePercent !== undefined &&
        output.dataTransferSubscriberFeePercent !== null) {
        contents.DataTransferSubscriberFeePercent =
            output.dataTransferSubscriberFeePercent;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.Description = output.description;
    }
    if (output.encryption !== undefined && output.encryption !== null) {
        contents.Encryption = deserializeAws_restJson1_1Encryption(output.encryption, context);
    }
    if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
        contents.EntitlementArn = output.entitlementArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.Name = output.name;
    }
    if (output.subscribers !== undefined && output.subscribers !== null) {
        contents.Subscribers = deserializeAws_restJson1_1__listOf__string(output.subscribers, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Flow = (output, context) => {
    let contents = {
        __type: "Flow",
        AvailabilityZone: undefined,
        Description: undefined,
        EgressIp: undefined,
        Entitlements: undefined,
        FlowArn: undefined,
        Name: undefined,
        Outputs: undefined,
        Source: undefined,
        Status: undefined
    };
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.AvailabilityZone = output.availabilityZone;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.Description = output.description;
    }
    if (output.egressIp !== undefined && output.egressIp !== null) {
        contents.EgressIp = output.egressIp;
    }
    if (output.entitlements !== undefined && output.entitlements !== null) {
        contents.Entitlements = deserializeAws_restJson1_1__listOfEntitlement(output.entitlements, context);
    }
    if (output.flowArn !== undefined && output.flowArn !== null) {
        contents.FlowArn = output.flowArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.Name = output.name;
    }
    if (output.outputs !== undefined && output.outputs !== null) {
        contents.Outputs = deserializeAws_restJson1_1__listOfOutput(output.outputs, context);
    }
    if (output.source !== undefined && output.source !== null) {
        contents.Source = deserializeAws_restJson1_1Source(output.source, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.Status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1ListedEntitlement = (output, context) => {
    let contents = {
        __type: "ListedEntitlement",
        DataTransferSubscriberFeePercent: undefined,
        EntitlementArn: undefined,
        EntitlementName: undefined
    };
    if (output.dataTransferSubscriberFeePercent !== undefined &&
        output.dataTransferSubscriberFeePercent !== null) {
        contents.DataTransferSubscriberFeePercent =
            output.dataTransferSubscriberFeePercent;
    }
    if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
        contents.EntitlementArn = output.entitlementArn;
    }
    if (output.entitlementName !== undefined && output.entitlementName !== null) {
        contents.EntitlementName = output.entitlementName;
    }
    return contents;
};
const deserializeAws_restJson1_1ListedFlow = (output, context) => {
    let contents = {
        __type: "ListedFlow",
        AvailabilityZone: undefined,
        Description: undefined,
        FlowArn: undefined,
        Name: undefined,
        SourceType: undefined,
        Status: undefined
    };
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.AvailabilityZone = output.availabilityZone;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.Description = output.description;
    }
    if (output.flowArn !== undefined && output.flowArn !== null) {
        contents.FlowArn = output.flowArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.Name = output.name;
    }
    if (output.sourceType !== undefined && output.sourceType !== null) {
        contents.SourceType = output.sourceType;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.Status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1Messages = (output, context) => {
    let contents = {
        __type: "Messages",
        Errors: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.Errors = deserializeAws_restJson1_1__listOf__string(output.errors, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Output = (output, context) => {
    let contents = {
        __type: "Output",
        DataTransferSubscriberFeePercent: undefined,
        Description: undefined,
        Destination: undefined,
        Encryption: undefined,
        EntitlementArn: undefined,
        MediaLiveInputArn: undefined,
        Name: undefined,
        OutputArn: undefined,
        Port: undefined,
        Transport: undefined
    };
    if (output.dataTransferSubscriberFeePercent !== undefined &&
        output.dataTransferSubscriberFeePercent !== null) {
        contents.DataTransferSubscriberFeePercent =
            output.dataTransferSubscriberFeePercent;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.Description = output.description;
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.Destination = output.destination;
    }
    if (output.encryption !== undefined && output.encryption !== null) {
        contents.Encryption = deserializeAws_restJson1_1Encryption(output.encryption, context);
    }
    if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
        contents.EntitlementArn = output.entitlementArn;
    }
    if (output.mediaLiveInputArn !== undefined &&
        output.mediaLiveInputArn !== null) {
        contents.MediaLiveInputArn = output.mediaLiveInputArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.Name = output.name;
    }
    if (output.outputArn !== undefined && output.outputArn !== null) {
        contents.OutputArn = output.outputArn;
    }
    if (output.port !== undefined && output.port !== null) {
        contents.Port = output.port;
    }
    if (output.transport !== undefined && output.transport !== null) {
        contents.Transport = deserializeAws_restJson1_1Transport(output.transport, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Source = (output, context) => {
    let contents = {
        __type: "Source",
        DataTransferSubscriberFeePercent: undefined,
        Decryption: undefined,
        Description: undefined,
        EntitlementArn: undefined,
        IngestIp: undefined,
        IngestPort: undefined,
        Name: undefined,
        SourceArn: undefined,
        Transport: undefined,
        WhitelistCidr: undefined
    };
    if (output.dataTransferSubscriberFeePercent !== undefined &&
        output.dataTransferSubscriberFeePercent !== null) {
        contents.DataTransferSubscriberFeePercent =
            output.dataTransferSubscriberFeePercent;
    }
    if (output.decryption !== undefined && output.decryption !== null) {
        contents.Decryption = deserializeAws_restJson1_1Encryption(output.decryption, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.Description = output.description;
    }
    if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
        contents.EntitlementArn = output.entitlementArn;
    }
    if (output.ingestIp !== undefined && output.ingestIp !== null) {
        contents.IngestIp = output.ingestIp;
    }
    if (output.ingestPort !== undefined && output.ingestPort !== null) {
        contents.IngestPort = output.ingestPort;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.Name = output.name;
    }
    if (output.sourceArn !== undefined && output.sourceArn !== null) {
        contents.SourceArn = output.sourceArn;
    }
    if (output.transport !== undefined && output.transport !== null) {
        contents.Transport = deserializeAws_restJson1_1Transport(output.transport, context);
    }
    if (output.whitelistCidr !== undefined && output.whitelistCidr !== null) {
        contents.WhitelistCidr = output.whitelistCidr;
    }
    return contents;
};
const deserializeAws_restJson1_1Transport = (output, context) => {
    let contents = {
        __type: "Transport",
        CidrAllowList: undefined,
        MaxBitrate: undefined,
        MaxLatency: undefined,
        Protocol: undefined,
        RemoteId: undefined,
        SmoothingLatency: undefined,
        StreamId: undefined
    };
    if (output.cidrAllowList !== undefined && output.cidrAllowList !== null) {
        contents.CidrAllowList = deserializeAws_restJson1_1__listOf__string(output.cidrAllowList, context);
    }
    if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
        contents.MaxBitrate = output.maxBitrate;
    }
    if (output.maxLatency !== undefined && output.maxLatency !== null) {
        contents.MaxLatency = output.maxLatency;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.Protocol = output.protocol;
    }
    if (output.remoteId !== undefined && output.remoteId !== null) {
        contents.RemoteId = output.remoteId;
    }
    if (output.smoothingLatency !== undefined &&
        output.smoothingLatency !== null) {
        contents.SmoothingLatency = output.smoothingLatency;
    }
    if (output.streamId !== undefined && output.streamId !== null) {
        contents.StreamId = output.streamId;
    }
    return contents;
};
const deserializeAws_restJson1_1__listOfEntitlement = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Entitlement(entry, context));
};
const deserializeAws_restJson1_1__listOfListedEntitlement = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ListedEntitlement(entry, context));
};
const deserializeAws_restJson1_1__listOfListedFlow = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ListedFlow(entry, context));
};
const deserializeAws_restJson1_1__listOfOutput = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Output(entry, context));
};
const deserializeAws_restJson1_1__listOf__string = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1__mapOf__string = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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