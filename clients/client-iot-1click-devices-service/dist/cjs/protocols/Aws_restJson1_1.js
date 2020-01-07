"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1ClaimDevicesByClaimCodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/claims/{ClaimCode}";
    if (input.ClaimCode !== undefined) {
        const labelValue = input.ClaimCode;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ClaimCode.");
        }
        resolvedPath = resolvedPath.replace("{ClaimCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ClaimCode.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ClaimDevicesByClaimCodeCommand = serializeAws_restJson1_1ClaimDevicesByClaimCodeCommand;
async function serializeAws_restJson1_1DescribeDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices/{DeviceId}";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeDeviceCommand = serializeAws_restJson1_1DescribeDeviceCommand;
async function serializeAws_restJson1_1FinalizeDeviceClaimCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/devices/{DeviceId}/finalize-claim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    const bodyParams = {};
    if (input.Tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(input.Tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1FinalizeDeviceClaimCommand = serializeAws_restJson1_1FinalizeDeviceClaimCommand;
async function serializeAws_restJson1_1GetDeviceMethodsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices/{DeviceId}/methods";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetDeviceMethodsCommand = serializeAws_restJson1_1GetDeviceMethodsCommand;
async function serializeAws_restJson1_1InitiateDeviceClaimCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices/{DeviceId}/initiate-claim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1InitiateDeviceClaimCommand = serializeAws_restJson1_1InitiateDeviceClaimCommand;
async function serializeAws_restJson1_1InvokeDeviceMethodCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/devices/{DeviceId}/methods";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    const bodyParams = {};
    if (input.DeviceMethod !== undefined) {
        bodyParams["deviceMethod"] = serializeAws_restJson1_1DeviceMethod(input.DeviceMethod, context);
    }
    if (input.DeviceMethodParameters !== undefined) {
        bodyParams["deviceMethodParameters"] = input.DeviceMethodParameters;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1InvokeDeviceMethodCommand = serializeAws_restJson1_1InvokeDeviceMethodCommand;
async function serializeAws_restJson1_1ListDeviceEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices/{DeviceId}/events";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    const query = {};
    if (input.FromTimeStamp !== undefined) {
        query["fromTimeStamp"] = (input.FromTimeStamp.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    if (input.ToTimeStamp !== undefined) {
        query["toTimeStamp"] = (input.ToTimeStamp.toISOString().split(".")[0] + "Z").toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDeviceEventsCommand = serializeAws_restJson1_1ListDeviceEventsCommand;
async function serializeAws_restJson1_1ListDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices";
    const query = {};
    if (input.DeviceType !== undefined) {
        query["deviceType"] = input.DeviceType;
    }
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDevicesCommand = serializeAws_restJson1_1ListDevicesCommand;
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
async function serializeAws_restJson1_1UnclaimDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/devices/{DeviceId}/unclaim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1UnclaimDeviceCommand = serializeAws_restJson1_1UnclaimDeviceCommand;
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
async function serializeAws_restJson1_1UpdateDeviceStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/devices/{DeviceId}/state";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["enabled"] = input.Enabled;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateDeviceStateCommand = serializeAws_restJson1_1UpdateDeviceStateCommand;
async function deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ClaimDevicesByClaimCodeResponse",
        ClaimCode: undefined,
        Total: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.claimCode !== undefined && data.claimCode !== null) {
        contents.ClaimCode = data.claimCode;
    }
    if (data.total !== undefined && data.total !== null) {
        contents.Total = data.total;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommand = deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommand;
async function deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.iot_1click_devices_service#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeDeviceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeDeviceResponse",
        DeviceDescription: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.deviceDescription !== undefined && data.deviceDescription !== null) {
        contents.DeviceDescription = deserializeAws_restJson1_1DeviceDescription(data.deviceDescription, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeDeviceCommand = deserializeAws_restJson1_1DescribeDeviceCommand;
async function deserializeAws_restJson1_1DescribeDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1FinalizeDeviceClaimCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1FinalizeDeviceClaimCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "FinalizeDeviceClaimResponse",
        State: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1FinalizeDeviceClaimCommand = deserializeAws_restJson1_1FinalizeDeviceClaimCommand;
async function deserializeAws_restJson1_1FinalizeDeviceClaimCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.iot_1click_devices_service#PreconditionFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1GetDeviceMethodsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetDeviceMethodsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDeviceMethodsResponse",
        DeviceMethods: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.deviceMethods !== undefined && data.deviceMethods !== null) {
        contents.DeviceMethods = deserializeAws_restJson1_1__listOfDeviceMethod(data.deviceMethods, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetDeviceMethodsCommand = deserializeAws_restJson1_1GetDeviceMethodsCommand;
async function deserializeAws_restJson1_1GetDeviceMethodsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1InitiateDeviceClaimCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1InitiateDeviceClaimCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "InitiateDeviceClaimResponse",
        State: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1InitiateDeviceClaimCommand = deserializeAws_restJson1_1InitiateDeviceClaimCommand;
async function deserializeAws_restJson1_1InitiateDeviceClaimCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1InvokeDeviceMethodCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1InvokeDeviceMethodCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "InvokeDeviceMethodResponse",
        DeviceMethodResponse: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.deviceMethodResponse !== undefined &&
        data.deviceMethodResponse !== null) {
        contents.DeviceMethodResponse = data.deviceMethodResponse;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1InvokeDeviceMethodCommand = deserializeAws_restJson1_1InvokeDeviceMethodCommand;
async function deserializeAws_restJson1_1InvokeDeviceMethodCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.iot_1click_devices_service#PreconditionFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1ListDeviceEventsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDeviceEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDeviceEventsResponse",
        Events: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.events !== undefined && data.events !== null) {
        contents.Events = deserializeAws_restJson1_1__listOfDeviceEvent(data.events, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDeviceEventsCommand = deserializeAws_restJson1_1ListDeviceEventsCommand;
async function deserializeAws_restJson1_1ListDeviceEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1ListDevicesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDevicesResponse",
        Devices: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.devices !== undefined && data.devices !== null) {
        contents.Devices = deserializeAws_restJson1_1__listOfDeviceDescription(data.devices, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDevicesCommand = deserializeAws_restJson1_1ListDevicesCommand;
async function deserializeAws_restJson1_1ListDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1UnclaimDeviceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UnclaimDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UnclaimDeviceResponse",
        State: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UnclaimDeviceCommand = deserializeAws_restJson1_1UnclaimDeviceCommand;
async function deserializeAws_restJson1_1UnclaimDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
async function deserializeAws_restJson1_1UpdateDeviceStateCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateDeviceStateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateDeviceStateResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateDeviceStateCommand = deserializeAws_restJson1_1UpdateDeviceStateCommand;
async function deserializeAws_restJson1_1UpdateDeviceStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1PreconditionFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RangeNotSatisfiableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const serializeAws_restJson1_1DeviceMethod = (input, context) => {
    const bodyParams = {};
    if (input.DeviceType !== undefined) {
        bodyParams["deviceType"] = input.DeviceType;
    }
    if (input.MethodName !== undefined) {
        bodyParams["methodName"] = input.MethodName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1__mapOf__string = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1Attributes = (output, context) => {
    let contents = {
        __type: "Attributes"
    };
    return contents;
};
const deserializeAws_restJson1_1Device = (output, context) => {
    let contents = {
        __type: "Device",
        Attributes: undefined,
        DeviceId: undefined,
        Type: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.Attributes = deserializeAws_restJson1_1Attributes(output.attributes, context);
    }
    if (output.deviceId !== undefined && output.deviceId !== null) {
        contents.DeviceId = output.deviceId;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.Type = output.type;
    }
    return contents;
};
const deserializeAws_restJson1_1DeviceAttributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1DeviceDescription = (output, context) => {
    let contents = {
        __type: "DeviceDescription",
        Arn: undefined,
        Attributes: undefined,
        DeviceId: undefined,
        Enabled: undefined,
        RemainingLife: undefined,
        Tags: undefined,
        Type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.Arn = output.arn;
    }
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.Attributes = deserializeAws_restJson1_1DeviceAttributes(output.attributes, context);
    }
    if (output.deviceId !== undefined && output.deviceId !== null) {
        contents.DeviceId = output.deviceId;
    }
    if (output.enabled !== undefined && output.enabled !== null) {
        contents.Enabled = output.enabled;
    }
    if (output.remainingLife !== undefined && output.remainingLife !== null) {
        contents.RemainingLife = output.remainingLife;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.Tags = deserializeAws_restJson1_1__mapOf__string(output.tags, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.Type = output.type;
    }
    return contents;
};
const deserializeAws_restJson1_1DeviceEvent = (output, context) => {
    let contents = {
        __type: "DeviceEvent",
        Device: undefined,
        StdEvent: undefined
    };
    if (output.device !== undefined && output.device !== null) {
        contents.Device = deserializeAws_restJson1_1Device(output.device, context);
    }
    if (output.stdEvent !== undefined && output.stdEvent !== null) {
        contents.StdEvent = output.stdEvent;
    }
    return contents;
};
const deserializeAws_restJson1_1DeviceMethod = (output, context) => {
    let contents = {
        __type: "DeviceMethod",
        DeviceType: undefined,
        MethodName: undefined
    };
    if (output.deviceType !== undefined && output.deviceType !== null) {
        contents.DeviceType = output.deviceType;
    }
    if (output.methodName !== undefined && output.methodName !== null) {
        contents.MethodName = output.methodName;
    }
    return contents;
};
const deserializeAws_restJson1_1__listOfDeviceDescription = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DeviceDescription(entry, context));
};
const deserializeAws_restJson1_1__listOfDeviceEvent = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DeviceEvent(entry, context));
};
const deserializeAws_restJson1_1__listOfDeviceMethod = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DeviceMethod(entry, context));
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