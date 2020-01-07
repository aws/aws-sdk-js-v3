"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1ConfigureAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/profilingGroups/{profilingGroupName}/configureAgent";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    let body;
    const bodyParams = {};
    if (input.fleetInstanceId !== undefined) {
        bodyParams["fleetInstanceId"] = input.fleetInstanceId;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ConfigureAgentCommand = serializeAws_restJson1_1ConfigureAgentCommand;
async function serializeAws_restJson1_1CreateProfilingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/profilingGroups";
    const query = {};
    if (input.clientToken !== undefined) {
        query["clientToken"] = input.clientToken;
    }
    let body;
    const bodyParams = {};
    if (input.agentOrchestrationConfig !== undefined) {
        bodyParams["agentOrchestrationConfig"] = serializeAws_restJson1_1AgentOrchestrationConfig(input.agentOrchestrationConfig, context);
    }
    if (input.profilingGroupName !== undefined) {
        bodyParams["profilingGroupName"] = input.profilingGroupName;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restJson1_1CreateProfilingGroupCommand = serializeAws_restJson1_1CreateProfilingGroupCommand;
async function serializeAws_restJson1_1DeleteProfilingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteProfilingGroupCommand = serializeAws_restJson1_1DeleteProfilingGroupCommand;
async function serializeAws_restJson1_1DescribeProfilingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeProfilingGroupCommand = serializeAws_restJson1_1DescribeProfilingGroupCommand;
async function serializeAws_restJson1_1ListProfilingGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/profilingGroups";
    const query = {};
    if (input.includeDescription !== undefined) {
        query["includeDescription"] = input.includeDescription.toString();
    }
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListProfilingGroupsCommand = serializeAws_restJson1_1ListProfilingGroupsCommand;
async function serializeAws_restJson1_1UpdateProfilingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    let body;
    const bodyParams = {};
    if (input.agentOrchestrationConfig !== undefined) {
        bodyParams["agentOrchestrationConfig"] = serializeAws_restJson1_1AgentOrchestrationConfig(input.agentOrchestrationConfig, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateProfilingGroupCommand = serializeAws_restJson1_1UpdateProfilingGroupCommand;
async function serializeAws_restJson1_1GetProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.accept !== undefined) {
        headers["Accept"] = input.accept;
    }
    let resolvedPath = "/profilingGroups/{profilingGroupName}/profile";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {};
    if (input.endTime !== undefined) {
        query["endTime"] = (input.endTime.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.maxDepth !== undefined) {
        query["maxDepth"] = input.maxDepth.toString();
    }
    if (input.period !== undefined) {
        query["period"] = input.period;
    }
    if (input.startTime !== undefined) {
        query["startTime"] = (input.startTime.toISOString().split(".")[0] + "Z").toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetProfileCommand = serializeAws_restJson1_1GetProfileCommand;
async function serializeAws_restJson1_1ListProfileTimesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/profilingGroups/{profilingGroupName}/profileTimes";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {};
    if (input.endTime !== undefined) {
        query["endTime"] = (input.endTime.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    if (input.orderBy !== undefined) {
        query["orderBy"] = input.orderBy;
    }
    if (input.period !== undefined) {
        query["period"] = input.period;
    }
    if (input.startTime !== undefined) {
        query["startTime"] = (input.startTime.toISOString().split(".")[0] + "Z").toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListProfileTimesCommand = serializeAws_restJson1_1ListProfileTimesCommand;
async function serializeAws_restJson1_1PostAgentProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/octet-stream";
    if (input.contentType !== undefined) {
        headers["Content-Type"] = input.contentType;
    }
    let resolvedPath = "/profilingGroups/{profilingGroupName}/agentProfile";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {};
    if (input.profileToken !== undefined) {
        query["profileToken"] = input.profileToken;
    }
    let body;
    if (input.agentProfile !== undefined) {
        body = input.agentProfile;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restJson1_1PostAgentProfileCommand = serializeAws_restJson1_1PostAgentProfileCommand;
async function deserializeAws_restJson1_1ConfigureAgentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ConfigureAgentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ConfigureAgentResponse",
        configuration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.configuration = deserializeAws_restJson1_1AgentConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ConfigureAgentCommand = deserializeAws_restJson1_1ConfigureAgentCommand;
async function deserializeAws_restJson1_1ConfigureAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateProfilingGroupCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateProfilingGroupResponse",
        profilingGroup: undefined
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateProfilingGroupCommand = deserializeAws_restJson1_1CreateProfilingGroupCommand;
async function deserializeAws_restJson1_1CreateProfilingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.aws.skysail#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.aws.skysail#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteProfilingGroupCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteProfilingGroupResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteProfilingGroupCommand = deserializeAws_restJson1_1DeleteProfilingGroupCommand;
async function deserializeAws_restJson1_1DeleteProfilingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeProfilingGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeProfilingGroupResponse",
        profilingGroup: undefined
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeProfilingGroupCommand = deserializeAws_restJson1_1DescribeProfilingGroupCommand;
async function deserializeAws_restJson1_1DescribeProfilingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListProfilingGroupsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListProfilingGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListProfilingGroupsResponse",
        nextToken: undefined,
        profilingGroupNames: undefined,
        profilingGroups: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.profilingGroupNames !== undefined &&
        data.profilingGroupNames !== null) {
        contents.profilingGroupNames = deserializeAws_restJson1_1ProfilingGroupNames(data.profilingGroupNames, context);
    }
    if (data.profilingGroups !== undefined && data.profilingGroups !== null) {
        contents.profilingGroups = deserializeAws_restJson1_1ProfilingGroupDescriptions(data.profilingGroups, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListProfilingGroupsCommand = deserializeAws_restJson1_1ListProfilingGroupsCommand;
async function deserializeAws_restJson1_1ListProfilingGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateProfilingGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateProfilingGroupResponse",
        profilingGroup: undefined
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateProfilingGroupCommand = deserializeAws_restJson1_1UpdateProfilingGroupCommand;
async function deserializeAws_restJson1_1UpdateProfilingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.aws.skysail#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetProfileResponse",
        contentEncoding: undefined,
        contentType: undefined,
        profile: undefined
    };
    if (output.headers["content-encoding"] !== undefined) {
        contents.contentEncoding = output.headers["content-encoding"];
    }
    if (output.headers["content-type"] !== undefined) {
        contents.contentType = output.headers["content-type"];
    }
    const data = await collectBody(output.body, context);
    contents.profile = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetProfileCommand = deserializeAws_restJson1_1GetProfileCommand;
async function deserializeAws_restJson1_1GetProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListProfileTimesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListProfileTimesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListProfileTimesResponse",
        nextToken: undefined,
        profileTimes: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.profileTimes !== undefined && data.profileTimes !== null) {
        contents.profileTimes = deserializeAws_restJson1_1ProfileTimes(data.profileTimes, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListProfileTimesCommand = deserializeAws_restJson1_1ListProfileTimesCommand;
async function deserializeAws_restJson1_1ListProfileTimesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1PostAgentProfileCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1PostAgentProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PostAgentProfileResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1PostAgentProfileCommand = deserializeAws_restJson1_1PostAgentProfileCommand;
async function deserializeAws_restJson1_1PostAgentProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.aws.skysail#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.aws.skysail#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.aws.skysail#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.aws.skysail#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restJson1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1_1AgentOrchestrationConfig = (input, context) => {
    const bodyParams = {};
    if (input.profilingEnabled !== undefined) {
        bodyParams["profilingEnabled"] = input.profilingEnabled;
    }
    return bodyParams;
};
const deserializeAws_restJson1_1AggregatedProfileTime = (output, context) => {
    let contents = {
        __type: "AggregatedProfileTime",
        period: undefined,
        start: undefined
    };
    if (output.period !== undefined && output.period !== null) {
        contents.period = output.period;
    }
    if (output.start !== undefined && output.start !== null) {
        contents.start = new Date(output.start);
    }
    return contents;
};
const deserializeAws_restJson1_1AgentConfiguration = (output, context) => {
    let contents = {
        __type: "AgentConfiguration",
        periodInSeconds: undefined,
        shouldProfile: undefined
    };
    if (output.periodInSeconds !== undefined && output.periodInSeconds !== null) {
        contents.periodInSeconds = output.periodInSeconds;
    }
    if (output.shouldProfile !== undefined && output.shouldProfile !== null) {
        contents.shouldProfile = output.shouldProfile;
    }
    return contents;
};
const deserializeAws_restJson1_1AgentOrchestrationConfig = (output, context) => {
    let contents = {
        __type: "AgentOrchestrationConfig",
        profilingEnabled: undefined
    };
    if (output.profilingEnabled !== undefined &&
        output.profilingEnabled !== null) {
        contents.profilingEnabled = output.profilingEnabled;
    }
    return contents;
};
const deserializeAws_restJson1_1ProfilingGroupDescription = (output, context) => {
    let contents = {
        __type: "ProfilingGroupDescription",
        agentOrchestrationConfig: undefined,
        arn: undefined,
        createdAt: undefined,
        name: undefined,
        profilingStatus: undefined,
        updatedAt: undefined
    };
    if (output.agentOrchestrationConfig !== undefined &&
        output.agentOrchestrationConfig !== null) {
        contents.agentOrchestrationConfig = deserializeAws_restJson1_1AgentOrchestrationConfig(output.agentOrchestrationConfig, context);
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.profilingStatus !== undefined && output.profilingStatus !== null) {
        contents.profilingStatus = deserializeAws_restJson1_1ProfilingStatus(output.profilingStatus, context);
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(output.updatedAt);
    }
    return contents;
};
const deserializeAws_restJson1_1ProfilingGroupDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ProfilingGroupDescription(entry, context));
};
const deserializeAws_restJson1_1ProfilingGroupNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1ProfilingStatus = (output, context) => {
    let contents = {
        __type: "ProfilingStatus",
        latestAgentOrchestratedAt: undefined,
        latestAgentProfileReportedAt: undefined,
        latestAggregatedProfile: undefined
    };
    if (output.latestAgentOrchestratedAt !== undefined &&
        output.latestAgentOrchestratedAt !== null) {
        contents.latestAgentOrchestratedAt = new Date(output.latestAgentOrchestratedAt);
    }
    if (output.latestAgentProfileReportedAt !== undefined &&
        output.latestAgentProfileReportedAt !== null) {
        contents.latestAgentProfileReportedAt = new Date(output.latestAgentProfileReportedAt);
    }
    if (output.latestAggregatedProfile !== undefined &&
        output.latestAggregatedProfile !== null) {
        contents.latestAggregatedProfile = deserializeAws_restJson1_1AggregatedProfileTime(output.latestAggregatedProfile, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ProfileTime = (output, context) => {
    let contents = {
        __type: "ProfileTime",
        start: undefined
    };
    if (output.start !== undefined && output.start !== null) {
        contents.start = new Date(output.start);
    }
    return contents;
};
const deserializeAws_restJson1_1ProfileTimes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ProfileTime(entry, context));
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