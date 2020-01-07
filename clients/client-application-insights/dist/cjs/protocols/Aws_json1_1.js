"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
async function serializeAws_json1_1CreateComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateComponentCommand = serializeAws_json1_1CreateComponentCommand;
async function serializeAws_json1_1CreateLogPatternCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateLogPattern";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLogPatternCommand = serializeAws_json1_1CreateLogPatternCommand;
async function serializeAws_json1_1DeleteApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
async function serializeAws_json1_1DeleteComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteComponentCommand = serializeAws_json1_1DeleteComponentCommand;
async function serializeAws_json1_1DeleteLogPatternCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteLogPattern";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLogPatternCommand = serializeAws_json1_1DeleteLogPatternCommand;
async function serializeAws_json1_1DescribeApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
async function serializeAws_json1_1DescribeComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeComponentCommand = serializeAws_json1_1DescribeComponentCommand;
async function serializeAws_json1_1DescribeComponentConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "EC2WindowsBarleyService.DescribeComponentConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeComponentConfigurationCommand = serializeAws_json1_1DescribeComponentConfigurationCommand;
async function serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand;
async function serializeAws_json1_1DescribeLogPatternCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeLogPattern";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLogPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLogPatternCommand = serializeAws_json1_1DescribeLogPatternCommand;
async function serializeAws_json1_1DescribeObservationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeObservation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeObservationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeObservationCommand = serializeAws_json1_1DescribeObservationCommand;
async function serializeAws_json1_1DescribeProblemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeProblem";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProblemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProblemCommand = serializeAws_json1_1DescribeProblemCommand;
async function serializeAws_json1_1DescribeProblemObservationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "EC2WindowsBarleyService.DescribeProblemObservations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProblemObservationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProblemObservationsCommand = serializeAws_json1_1DescribeProblemObservationsCommand;
async function serializeAws_json1_1ListApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
async function serializeAws_json1_1ListComponentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListComponents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComponentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListComponentsCommand = serializeAws_json1_1ListComponentsCommand;
async function serializeAws_json1_1ListConfigurationHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListConfigurationHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConfigurationHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListConfigurationHistoryCommand = serializeAws_json1_1ListConfigurationHistoryCommand;
async function serializeAws_json1_1ListLogPatternSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListLogPatternSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLogPatternSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLogPatternSetsCommand = serializeAws_json1_1ListLogPatternSetsCommand;
async function serializeAws_json1_1ListLogPatternsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListLogPatterns";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLogPatternsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLogPatternsCommand = serializeAws_json1_1ListLogPatternsCommand;
async function serializeAws_json1_1ListProblemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListProblems";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProblemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProblemsCommand = serializeAws_json1_1ListProblemsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
async function serializeAws_json1_1UpdateComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateComponentCommand = serializeAws_json1_1UpdateComponentCommand;
async function serializeAws_json1_1UpdateComponentConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "EC2WindowsBarleyService.UpdateComponentConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateComponentConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateComponentConfigurationCommand = serializeAws_json1_1UpdateComponentConfigurationCommand;
async function serializeAws_json1_1UpdateLogPatternCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateLogPattern";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLogPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLogPatternCommand = serializeAws_json1_1UpdateLogPatternCommand;
async function deserializeAws_json1_1CreateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
async function deserializeAws_json1_1CreateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagsAlreadyExistException":
        case "com.amazonaws.ec2windowsbarley#TagsAlreadyExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagsAlreadyExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1CreateComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateComponentCommand = deserializeAws_json1_1CreateComponentCommand;
async function deserializeAws_json1_1CreateComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1CreateLogPatternCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLogPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLogPatternResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLogPatternResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLogPatternCommand = deserializeAws_json1_1CreateLogPatternCommand;
async function deserializeAws_json1_1CreateLogPatternCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DeleteApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
async function deserializeAws_json1_1DeleteApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.ec2windowsbarley#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DeleteComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteComponentCommand = deserializeAws_json1_1DeleteComponentCommand;
async function deserializeAws_json1_1DeleteComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DeleteLogPatternCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLogPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLogPatternResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLogPatternResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLogPatternCommand = deserializeAws_json1_1DeleteLogPatternCommand;
async function deserializeAws_json1_1DeleteLogPatternCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.ec2windowsbarley#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeApplicationCommand = deserializeAws_json1_1DescribeApplicationCommand;
async function deserializeAws_json1_1DescribeApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeComponentCommand = deserializeAws_json1_1DescribeComponentCommand;
async function deserializeAws_json1_1DescribeComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeComponentConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeComponentConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComponentConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeComponentConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeComponentConfigurationCommand = deserializeAws_json1_1DescribeComponentConfigurationCommand;
async function deserializeAws_json1_1DescribeComponentConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeComponentConfigurationRecommendationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand;
async function deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeLogPatternCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLogPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLogPatternResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLogPatternResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLogPatternCommand = deserializeAws_json1_1DescribeLogPatternCommand;
async function deserializeAws_json1_1DescribeLogPatternCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeObservationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeObservationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeObservationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeObservationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeObservationCommand = deserializeAws_json1_1DescribeObservationCommand;
async function deserializeAws_json1_1DescribeObservationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeProblemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProblemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProblemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProblemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProblemCommand = deserializeAws_json1_1DescribeProblemCommand;
async function deserializeAws_json1_1DescribeProblemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1DescribeProblemObservationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProblemObservationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProblemObservationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProblemObservationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProblemObservationsCommand = deserializeAws_json1_1DescribeProblemObservationsCommand;
async function deserializeAws_json1_1DescribeProblemObservationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
async function deserializeAws_json1_1ListApplicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListComponentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListComponentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComponentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListComponentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListComponentsCommand = deserializeAws_json1_1ListComponentsCommand;
async function deserializeAws_json1_1ListComponentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListConfigurationHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListConfigurationHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConfigurationHistoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConfigurationHistoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListConfigurationHistoryCommand = deserializeAws_json1_1ListConfigurationHistoryCommand;
async function deserializeAws_json1_1ListConfigurationHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListLogPatternSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLogPatternSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLogPatternSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLogPatternSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLogPatternSetsCommand = deserializeAws_json1_1ListLogPatternSetsCommand;
async function deserializeAws_json1_1ListLogPatternSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListLogPatternsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLogPatternsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLogPatternsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLogPatternsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLogPatternsCommand = deserializeAws_json1_1ListLogPatternsCommand;
async function deserializeAws_json1_1ListLogPatternsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListProblemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProblemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProblemsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProblemsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProblemsCommand = deserializeAws_json1_1ListProblemsCommand;
async function deserializeAws_json1_1ListProblemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.ec2windowsbarley#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1UpdateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1UpdateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1UpdateComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateComponentCommand = deserializeAws_json1_1UpdateComponentCommand;
async function deserializeAws_json1_1UpdateComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1UpdateComponentConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateComponentConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateComponentConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateComponentConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateComponentConfigurationCommand = deserializeAws_json1_1UpdateComponentConfigurationCommand;
async function deserializeAws_json1_1UpdateComponentConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
async function deserializeAws_json1_1UpdateLogPatternCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLogPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLogPatternResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateLogPatternResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLogPatternCommand = deserializeAws_json1_1UpdateLogPatternCommand;
async function deserializeAws_json1_1UpdateLogPatternCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ec2windowsbarley#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.ec2windowsbarley#ValidationException":
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
const deserializeAws_json1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequestException(body, context);
    const contents = Object.assign({ name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagsAlreadyExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagsAlreadyExistException(body, context);
    const contents = Object.assign({ name: "TagsAlreadyExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.OpsCenterEnabled !== undefined) {
        bodyParams["OpsCenterEnabled"] = input.OpsCenterEnabled;
    }
    if (input.OpsItemSNSTopicArn !== undefined) {
        bodyParams["OpsItemSNSTopicArn"] = input.OpsItemSNSTopicArn;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.ResourceList !== undefined) {
        bodyParams["ResourceList"] = serializeAws_json1_1ResourceList(input.ResourceList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLogPatternRequest = (input, context) => {
    const bodyParams = {};
    if (input.Pattern !== undefined) {
        bodyParams["Pattern"] = input.Pattern;
    }
    if (input.PatternName !== undefined) {
        bodyParams["PatternName"] = input.PatternName;
    }
    if (input.PatternSetName !== undefined) {
        bodyParams["PatternSetName"] = input.PatternSetName;
    }
    if (input.Rank !== undefined) {
        bodyParams["Rank"] = input.Rank;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLogPatternRequest = (input, context) => {
    const bodyParams = {};
    if (input.PatternName !== undefined) {
        bodyParams["PatternName"] = input.PatternName;
    }
    if (input.PatternSetName !== undefined) {
        bodyParams["PatternSetName"] = input.PatternSetName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.Tier !== undefined) {
        bodyParams["Tier"] = input.Tier;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeComponentConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLogPatternRequest = (input, context) => {
    const bodyParams = {};
    if (input.PatternName !== undefined) {
        bodyParams["PatternName"] = input.PatternName;
    }
    if (input.PatternSetName !== undefined) {
        bodyParams["PatternSetName"] = input.PatternSetName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeObservationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ObservationId !== undefined) {
        bodyParams["ObservationId"] = input.ObservationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProblemObservationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProblemId !== undefined) {
        bodyParams["ProblemId"] = input.ProblemId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProblemRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProblemId !== undefined) {
        bodyParams["ProblemId"] = input.ProblemId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListComponentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListConfigurationHistoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.EventStatus !== undefined) {
        bodyParams["EventStatus"] = input.EventStatus;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListLogPatternSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLogPatternsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PatternSetName !== undefined) {
        bodyParams["PatternSetName"] = input.PatternSetName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProblemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.OpsCenterEnabled !== undefined) {
        bodyParams["OpsCenterEnabled"] = input.OpsCenterEnabled;
    }
    if (input.OpsItemSNSTopicArn !== undefined) {
        bodyParams["OpsItemSNSTopicArn"] = input.OpsItemSNSTopicArn;
    }
    if (input.RemoveSNSTopic !== undefined) {
        bodyParams["RemoveSNSTopic"] = input.RemoveSNSTopic;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateComponentConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentConfiguration !== undefined) {
        bodyParams["ComponentConfiguration"] = input.ComponentConfiguration;
    }
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.Monitor !== undefined) {
        bodyParams["Monitor"] = input.Monitor;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.Tier !== undefined) {
        bodyParams["Tier"] = input.Tier;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComponentName !== undefined) {
        bodyParams["ComponentName"] = input.ComponentName;
    }
    if (input.NewComponentName !== undefined) {
        bodyParams["NewComponentName"] = input.NewComponentName;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    if (input.ResourceList !== undefined) {
        bodyParams["ResourceList"] = serializeAws_json1_1ResourceList(input.ResourceList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateLogPatternRequest = (input, context) => {
    const bodyParams = {};
    if (input.Pattern !== undefined) {
        bodyParams["Pattern"] = input.Pattern;
    }
    if (input.PatternName !== undefined) {
        bodyParams["PatternName"] = input.PatternName;
    }
    if (input.PatternSetName !== undefined) {
        bodyParams["PatternSetName"] = input.PatternSetName;
    }
    if (input.Rank !== undefined) {
        bodyParams["Rank"] = input.Rank;
    }
    if (input.ResourceGroupName !== undefined) {
        bodyParams["ResourceGroupName"] = input.ResourceGroupName;
    }
    return bodyParams;
};
const deserializeAws_json1_1ApplicationComponent = (output, context) => {
    let contents = {
        __type: "ApplicationComponent",
        ComponentName: undefined,
        Monitor: undefined,
        ResourceType: undefined,
        Tier: undefined
    };
    if (output.ComponentName !== undefined && output.ComponentName !== null) {
        contents.ComponentName = output.ComponentName;
    }
    if (output.Monitor !== undefined && output.Monitor !== null) {
        contents.Monitor = output.Monitor;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Tier !== undefined && output.Tier !== null) {
        contents.Tier = output.Tier;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationComponentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApplicationComponent(entry, context));
};
const deserializeAws_json1_1ApplicationInfo = (output, context) => {
    let contents = {
        __type: "ApplicationInfo",
        LifeCycle: undefined,
        OpsCenterEnabled: undefined,
        OpsItemSNSTopicArn: undefined,
        Remarks: undefined,
        ResourceGroupName: undefined
    };
    if (output.LifeCycle !== undefined && output.LifeCycle !== null) {
        contents.LifeCycle = output.LifeCycle;
    }
    if (output.OpsCenterEnabled !== undefined &&
        output.OpsCenterEnabled !== null) {
        contents.OpsCenterEnabled = output.OpsCenterEnabled;
    }
    if (output.OpsItemSNSTopicArn !== undefined &&
        output.OpsItemSNSTopicArn !== null) {
        contents.OpsItemSNSTopicArn = output.OpsItemSNSTopicArn;
    }
    if (output.Remarks !== undefined && output.Remarks !== null) {
        contents.Remarks = output.Remarks;
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApplicationInfo(entry, context));
};
const deserializeAws_json1_1BadRequestException = (output, context) => {
    let contents = {
        __type: "BadRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationEvent = (output, context) => {
    let contents = {
        __type: "ConfigurationEvent",
        EventDetail: undefined,
        EventResourceName: undefined,
        EventResourceType: undefined,
        EventStatus: undefined,
        EventTime: undefined,
        MonitoredResourceARN: undefined
    };
    if (output.EventDetail !== undefined && output.EventDetail !== null) {
        contents.EventDetail = output.EventDetail;
    }
    if (output.EventResourceName !== undefined &&
        output.EventResourceName !== null) {
        contents.EventResourceName = output.EventResourceName;
    }
    if (output.EventResourceType !== undefined &&
        output.EventResourceType !== null) {
        contents.EventResourceType = output.EventResourceType;
    }
    if (output.EventStatus !== undefined && output.EventStatus !== null) {
        contents.EventStatus = output.EventStatus;
    }
    if (output.EventTime !== undefined && output.EventTime !== null) {
        contents.EventTime = new Date(Math.round(output.EventTime * 1000));
    }
    if (output.MonitoredResourceARN !== undefined &&
        output.MonitoredResourceARN !== null) {
        contents.MonitoredResourceARN = output.MonitoredResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationEvent(entry, context));
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    let contents = {
        __type: "CreateApplicationResponse",
        ApplicationInfo: undefined
    };
    if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
        contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateComponentResponse = (output, context) => {
    let contents = {
        __type: "CreateComponentResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateLogPatternResponse = (output, context) => {
    let contents = {
        __type: "CreateLogPatternResponse",
        LogPattern: undefined,
        ResourceGroupName: undefined
    };
    if (output.LogPattern !== undefined && output.LogPattern !== null) {
        contents.LogPattern = deserializeAws_json1_1LogPattern(output.LogPattern, context);
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteComponentResponse = (output, context) => {
    let contents = {
        __type: "DeleteComponentResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteLogPatternResponse = (output, context) => {
    let contents = {
        __type: "DeleteLogPatternResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeApplicationResponse = (output, context) => {
    let contents = {
        __type: "DescribeApplicationResponse",
        ApplicationInfo: undefined
    };
    if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
        contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse = (output, context) => {
    let contents = {
        __type: "DescribeComponentConfigurationRecommendationResponse",
        ComponentConfiguration: undefined
    };
    if (output.ComponentConfiguration !== undefined &&
        output.ComponentConfiguration !== null) {
        contents.ComponentConfiguration = output.ComponentConfiguration;
    }
    return contents;
};
const deserializeAws_json1_1DescribeComponentConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DescribeComponentConfigurationResponse",
        ComponentConfiguration: undefined,
        Monitor: undefined,
        Tier: undefined
    };
    if (output.ComponentConfiguration !== undefined &&
        output.ComponentConfiguration !== null) {
        contents.ComponentConfiguration = output.ComponentConfiguration;
    }
    if (output.Monitor !== undefined && output.Monitor !== null) {
        contents.Monitor = output.Monitor;
    }
    if (output.Tier !== undefined && output.Tier !== null) {
        contents.Tier = output.Tier;
    }
    return contents;
};
const deserializeAws_json1_1DescribeComponentResponse = (output, context) => {
    let contents = {
        __type: "DescribeComponentResponse",
        ApplicationComponent: undefined,
        ResourceList: undefined
    };
    if (output.ApplicationComponent !== undefined &&
        output.ApplicationComponent !== null) {
        contents.ApplicationComponent = deserializeAws_json1_1ApplicationComponent(output.ApplicationComponent, context);
    }
    if (output.ResourceList !== undefined && output.ResourceList !== null) {
        contents.ResourceList = deserializeAws_json1_1ResourceList(output.ResourceList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLogPatternResponse = (output, context) => {
    let contents = {
        __type: "DescribeLogPatternResponse",
        LogPattern: undefined,
        ResourceGroupName: undefined
    };
    if (output.LogPattern !== undefined && output.LogPattern !== null) {
        contents.LogPattern = deserializeAws_json1_1LogPattern(output.LogPattern, context);
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeObservationResponse = (output, context) => {
    let contents = {
        __type: "DescribeObservationResponse",
        Observation: undefined
    };
    if (output.Observation !== undefined && output.Observation !== null) {
        contents.Observation = deserializeAws_json1_1Observation(output.Observation, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProblemObservationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeProblemObservationsResponse",
        RelatedObservations: undefined
    };
    if (output.RelatedObservations !== undefined &&
        output.RelatedObservations !== null) {
        contents.RelatedObservations = deserializeAws_json1_1RelatedObservations(output.RelatedObservations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProblemResponse = (output, context) => {
    let contents = {
        __type: "DescribeProblemResponse",
        Problem: undefined
    };
    if (output.Problem !== undefined && output.Problem !== null) {
        contents.Problem = deserializeAws_json1_1Problem(output.Problem, context);
    }
    return contents;
};
const deserializeAws_json1_1Feedback = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
    let contents = {
        __type: "ListApplicationsResponse",
        ApplicationInfoList: undefined,
        NextToken: undefined
    };
    if (output.ApplicationInfoList !== undefined &&
        output.ApplicationInfoList !== null) {
        contents.ApplicationInfoList = deserializeAws_json1_1ApplicationInfoList(output.ApplicationInfoList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListComponentsResponse = (output, context) => {
    let contents = {
        __type: "ListComponentsResponse",
        ApplicationComponentList: undefined,
        NextToken: undefined
    };
    if (output.ApplicationComponentList !== undefined &&
        output.ApplicationComponentList !== null) {
        contents.ApplicationComponentList = deserializeAws_json1_1ApplicationComponentList(output.ApplicationComponentList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListConfigurationHistoryResponse = (output, context) => {
    let contents = {
        __type: "ListConfigurationHistoryResponse",
        EventList: undefined,
        NextToken: undefined
    };
    if (output.EventList !== undefined && output.EventList !== null) {
        contents.EventList = deserializeAws_json1_1ConfigurationEventList(output.EventList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLogPatternSetsResponse = (output, context) => {
    let contents = {
        __type: "ListLogPatternSetsResponse",
        LogPatternSets: undefined,
        NextToken: undefined,
        ResourceGroupName: undefined
    };
    if (output.LogPatternSets !== undefined && output.LogPatternSets !== null) {
        contents.LogPatternSets = deserializeAws_json1_1LogPatternSetList(output.LogPatternSets, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
};
const deserializeAws_json1_1ListLogPatternsResponse = (output, context) => {
    let contents = {
        __type: "ListLogPatternsResponse",
        LogPatterns: undefined,
        NextToken: undefined,
        ResourceGroupName: undefined
    };
    if (output.LogPatterns !== undefined && output.LogPatterns !== null) {
        contents.LogPatterns = deserializeAws_json1_1LogPatternList(output.LogPatterns, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
};
const deserializeAws_json1_1ListProblemsResponse = (output, context) => {
    let contents = {
        __type: "ListProblemsResponse",
        NextToken: undefined,
        ProblemList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ProblemList !== undefined && output.ProblemList !== null) {
        contents.ProblemList = deserializeAws_json1_1ProblemList(output.ProblemList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LogPattern = (output, context) => {
    let contents = {
        __type: "LogPattern",
        Pattern: undefined,
        PatternName: undefined,
        PatternSetName: undefined,
        Rank: undefined
    };
    if (output.Pattern !== undefined && output.Pattern !== null) {
        contents.Pattern = output.Pattern;
    }
    if (output.PatternName !== undefined && output.PatternName !== null) {
        contents.PatternName = output.PatternName;
    }
    if (output.PatternSetName !== undefined && output.PatternSetName !== null) {
        contents.PatternSetName = output.PatternSetName;
    }
    if (output.Rank !== undefined && output.Rank !== null) {
        contents.Rank = output.Rank;
    }
    return contents;
};
const deserializeAws_json1_1LogPatternList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogPattern(entry, context));
};
const deserializeAws_json1_1LogPatternSetList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Observation = (output, context) => {
    let contents = {
        __type: "Observation",
        EndTime: undefined,
        Id: undefined,
        LineTime: undefined,
        LogFilter: undefined,
        LogGroup: undefined,
        LogText: undefined,
        MetricName: undefined,
        MetricNamespace: undefined,
        SourceARN: undefined,
        SourceType: undefined,
        StartTime: undefined,
        Unit: undefined,
        Value: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LineTime !== undefined && output.LineTime !== null) {
        contents.LineTime = new Date(Math.round(output.LineTime * 1000));
    }
    if (output.LogFilter !== undefined && output.LogFilter !== null) {
        contents.LogFilter = output.LogFilter;
    }
    if (output.LogGroup !== undefined && output.LogGroup !== null) {
        contents.LogGroup = output.LogGroup;
    }
    if (output.LogText !== undefined && output.LogText !== null) {
        contents.LogText = output.LogText;
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.MetricNamespace !== undefined && output.MetricNamespace !== null) {
        contents.MetricNamespace = output.MetricNamespace;
    }
    if (output.SourceARN !== undefined && output.SourceARN !== null) {
        contents.SourceARN = output.SourceARN;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ObservationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Observation(entry, context));
};
const deserializeAws_json1_1Problem = (output, context) => {
    let contents = {
        __type: "Problem",
        AffectedResource: undefined,
        EndTime: undefined,
        Feedback: undefined,
        Id: undefined,
        Insights: undefined,
        ResourceGroupName: undefined,
        SeverityLevel: undefined,
        StartTime: undefined,
        Status: undefined,
        Title: undefined
    };
    if (output.AffectedResource !== undefined &&
        output.AffectedResource !== null) {
        contents.AffectedResource = output.AffectedResource;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.Feedback !== undefined && output.Feedback !== null) {
        contents.Feedback = deserializeAws_json1_1Feedback(output.Feedback, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Insights !== undefined && output.Insights !== null) {
        contents.Insights = output.Insights;
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    if (output.SeverityLevel !== undefined && output.SeverityLevel !== null) {
        contents.SeverityLevel = output.SeverityLevel;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1ProblemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Problem(entry, context));
};
const deserializeAws_json1_1RelatedObservations = (output, context) => {
    let contents = {
        __type: "RelatedObservations",
        ObservationList: undefined
    };
    if (output.ObservationList !== undefined && output.ObservationList !== null) {
        contents.ObservationList = deserializeAws_json1_1ObservationList(output.ObservationList, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TagsAlreadyExistException = (output, context) => {
    let contents = {
        __type: "TagsAlreadyExistException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        Message: undefined,
        ResourceName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceName !== undefined && output.ResourceName !== null) {
        contents.ResourceName = output.ResourceName;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
    let contents = {
        __type: "UpdateApplicationResponse",
        ApplicationInfo: undefined
    };
    if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
        contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateComponentConfigurationResponse = (output, context) => {
    let contents = {
        __type: "UpdateComponentConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateComponentResponse = (output, context) => {
    let contents = {
        __type: "UpdateComponentResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateLogPatternResponse = (output, context) => {
    let contents = {
        __type: "UpdateLogPatternResponse",
        LogPattern: undefined,
        ResourceGroupName: undefined
    };
    if (output.LogPattern !== undefined && output.LogPattern !== null) {
        contents.LogPattern = deserializeAws_json1_1LogPattern(output.LogPattern, context);
    }
    if (output.ResourceGroupName !== undefined &&
        output.ResourceGroupName !== null) {
        contents.ResourceGroupName = output.ResourceGroupName;
    }
    return contents;
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