"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "ComputeOptimizerService.GetAutoScalingGroupRecommendations";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand;
async function serializeAws_json1_0GetEC2InstanceRecommendationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "ComputeOptimizerService.GetEC2InstanceRecommendations";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEC2InstanceRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetEC2InstanceRecommendationsCommand = serializeAws_json1_0GetEC2InstanceRecommendationsCommand;
async function serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand;
async function serializeAws_json1_0GetEnrollmentStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "ComputeOptimizerService.GetEnrollmentStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEnrollmentStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetEnrollmentStatusCommand = serializeAws_json1_0GetEnrollmentStatusCommand;
async function serializeAws_json1_0GetRecommendationSummariesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "ComputeOptimizerService.GetRecommendationSummaries";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetRecommendationSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetRecommendationSummariesCommand = serializeAws_json1_0GetRecommendationSummariesCommand;
async function serializeAws_json1_0UpdateEnrollmentStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "ComputeOptimizerService.UpdateEnrollmentStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateEnrollmentStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateEnrollmentStatusCommand = serializeAws_json1_0UpdateEnrollmentStatusCommand;
async function deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAutoScalingGroupRecommendationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand;
async function deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetEC2InstanceRecommendationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEC2InstanceRecommendationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = deserializeAws_json1_0GetEC2InstanceRecommendationsCommand;
async function deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEC2RecommendationProjectedMetricsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand;
async function deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetEnrollmentStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetEnrollmentStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEnrollmentStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEnrollmentStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetEnrollmentStatusCommand = deserializeAws_json1_0GetEnrollmentStatusCommand;
async function deserializeAws_json1_0GetEnrollmentStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetRecommendationSummariesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetRecommendationSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetRecommendationSummariesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRecommendationSummariesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetRecommendationSummariesCommand = deserializeAws_json1_0GetRecommendationSummariesCommand;
async function deserializeAws_json1_0GetRecommendationSummariesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateEnrollmentStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateEnrollmentStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEnrollmentStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateEnrollmentStatusCommand = deserializeAws_json1_0UpdateEnrollmentStatusCommand;
async function deserializeAws_json1_0UpdateEnrollmentStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_0AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0MissingAuthenticationTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0MissingAuthenticationToken(body, context);
    const contents = Object.assign({ name: "MissingAuthenticationToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0OptInRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OptInRequiredException(body, context);
    const contents = Object.assign({ name: "OptInRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0AccountIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0AutoScalingGroupArns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0Filter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_0FilterValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_0FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.accountIds !== undefined) {
        bodyParams["accountIds"] = serializeAws_json1_0AccountIds(input.accountIds, context);
    }
    if (input.autoScalingGroupArns !== undefined) {
        bodyParams["autoScalingGroupArns"] = serializeAws_json1_0AutoScalingGroupArns(input.autoScalingGroupArns, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_0Filters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_0GetEC2InstanceRecommendationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.accountIds !== undefined) {
        bodyParams["accountIds"] = serializeAws_json1_0AccountIds(input.accountIds, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_0Filters(input.filters, context);
    }
    if (input.instanceArns !== undefined) {
        bodyParams["instanceArns"] = serializeAws_json1_0InstanceArns(input.instanceArns, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.instanceArn !== undefined) {
        bodyParams["instanceArn"] = input.instanceArn;
    }
    if (input.period !== undefined) {
        bodyParams["period"] = input.period;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.stat !== undefined) {
        bodyParams["stat"] = input.stat;
    }
    return bodyParams;
};
const serializeAws_json1_0GetEnrollmentStatusRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0GetRecommendationSummariesRequest = (input, context) => {
    const bodyParams = {};
    if (input.accountIds !== undefined) {
        bodyParams["accountIds"] = serializeAws_json1_0AccountIds(input.accountIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_0InstanceArns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0UpdateEnrollmentStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeMemberAccounts !== undefined) {
        bodyParams["includeMemberAccounts"] = input.includeMemberAccounts;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const deserializeAws_json1_0AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingGroupConfiguration = (output, context) => {
    let contents = {
        __type: "AutoScalingGroupConfiguration",
        desiredCapacity: undefined,
        instanceType: undefined,
        maxSize: undefined,
        minSize: undefined
    };
    if (output.desiredCapacity !== undefined && output.desiredCapacity !== null) {
        contents.desiredCapacity = output.desiredCapacity;
    }
    if (output.instanceType !== undefined && output.instanceType !== null) {
        contents.instanceType = output.instanceType;
    }
    if (output.maxSize !== undefined && output.maxSize !== null) {
        contents.maxSize = output.maxSize;
    }
    if (output.minSize !== undefined && output.minSize !== null) {
        contents.minSize = output.minSize;
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingGroupRecommendation = (output, context) => {
    let contents = {
        __type: "AutoScalingGroupRecommendation",
        accountId: undefined,
        autoScalingGroupArn: undefined,
        autoScalingGroupName: undefined,
        currentConfiguration: undefined,
        finding: undefined,
        lastRefreshTimestamp: undefined,
        lookBackPeriodInDays: undefined,
        recommendationOptions: undefined,
        utilizationMetrics: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.autoScalingGroupArn !== undefined &&
        output.autoScalingGroupArn !== null) {
        contents.autoScalingGroupArn = output.autoScalingGroupArn;
    }
    if (output.autoScalingGroupName !== undefined &&
        output.autoScalingGroupName !== null) {
        contents.autoScalingGroupName = output.autoScalingGroupName;
    }
    if (output.currentConfiguration !== undefined &&
        output.currentConfiguration !== null) {
        contents.currentConfiguration = deserializeAws_json1_0AutoScalingGroupConfiguration(output.currentConfiguration, context);
    }
    if (output.finding !== undefined && output.finding !== null) {
        contents.finding = output.finding;
    }
    if (output.lastRefreshTimestamp !== undefined &&
        output.lastRefreshTimestamp !== null) {
        contents.lastRefreshTimestamp = new Date(Math.round(output.lastRefreshTimestamp * 1000));
    }
    if (output.lookBackPeriodInDays !== undefined &&
        output.lookBackPeriodInDays !== null) {
        contents.lookBackPeriodInDays = output.lookBackPeriodInDays;
    }
    if (output.recommendationOptions !== undefined &&
        output.recommendationOptions !== null) {
        contents.recommendationOptions = deserializeAws_json1_0AutoScalingGroupRecommendationOptions(output.recommendationOptions, context);
    }
    if (output.utilizationMetrics !== undefined &&
        output.utilizationMetrics !== null) {
        contents.utilizationMetrics = deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingGroupRecommendationOption = (output, context) => {
    let contents = {
        __type: "AutoScalingGroupRecommendationOption",
        configuration: undefined,
        performanceRisk: undefined,
        projectedUtilizationMetrics: undefined,
        rank: undefined
    };
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_0AutoScalingGroupConfiguration(output.configuration, context);
    }
    if (output.performanceRisk !== undefined && output.performanceRisk !== null) {
        contents.performanceRisk = output.performanceRisk;
    }
    if (output.projectedUtilizationMetrics !== undefined &&
        output.projectedUtilizationMetrics !== null) {
        contents.projectedUtilizationMetrics = deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context);
    }
    if (output.rank !== undefined && output.rank !== null) {
        contents.rank = output.rank;
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingGroupRecommendationOptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context));
};
const deserializeAws_json1_0AutoScalingGroupRecommendations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context));
};
const deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = (output, context) => {
    let contents = {
        __type: "GetAutoScalingGroupRecommendationsResponse",
        autoScalingGroupRecommendations: undefined,
        errors: undefined,
        nextToken: undefined
    };
    if (output.autoScalingGroupRecommendations !== undefined &&
        output.autoScalingGroupRecommendations !== null) {
        contents.autoScalingGroupRecommendations = deserializeAws_json1_0AutoScalingGroupRecommendations(output.autoScalingGroupRecommendations, context);
    }
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_0GetRecommendationErrors(output.errors, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = (output, context) => {
    let contents = {
        __type: "GetEC2InstanceRecommendationsResponse",
        errors: undefined,
        instanceRecommendations: undefined,
        nextToken: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_0GetRecommendationErrors(output.errors, context);
    }
    if (output.instanceRecommendations !== undefined &&
        output.instanceRecommendations !== null) {
        contents.instanceRecommendations = deserializeAws_json1_0InstanceRecommendations(output.instanceRecommendations, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = (output, context) => {
    let contents = {
        __type: "GetEC2RecommendationProjectedMetricsResponse",
        recommendedOptionProjectedMetrics: undefined
    };
    if (output.recommendedOptionProjectedMetrics !== undefined &&
        output.recommendedOptionProjectedMetrics !== null) {
        contents.recommendedOptionProjectedMetrics = deserializeAws_json1_0RecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0GetEnrollmentStatusResponse = (output, context) => {
    let contents = {
        __type: "GetEnrollmentStatusResponse",
        memberAccountsEnrolled: undefined,
        status: undefined,
        statusReason: undefined
    };
    if (output.memberAccountsEnrolled !== undefined &&
        output.memberAccountsEnrolled !== null) {
        contents.memberAccountsEnrolled = output.memberAccountsEnrolled;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusReason !== undefined && output.statusReason !== null) {
        contents.statusReason = output.statusReason;
    }
    return contents;
};
const deserializeAws_json1_0GetRecommendationError = (output, context) => {
    let contents = {
        __type: "GetRecommendationError",
        code: undefined,
        identifier: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.identifier !== undefined && output.identifier !== null) {
        contents.identifier = output.identifier;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0GetRecommendationErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0GetRecommendationError(entry, context));
};
const deserializeAws_json1_0GetRecommendationSummariesResponse = (output, context) => {
    let contents = {
        __type: "GetRecommendationSummariesResponse",
        nextToken: undefined,
        recommendationSummaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.recommendationSummaries !== undefined &&
        output.recommendationSummaries !== null) {
        contents.recommendationSummaries = deserializeAws_json1_0RecommendationSummaries(output.recommendationSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_0InstanceRecommendation = (output, context) => {
    let contents = {
        __type: "InstanceRecommendation",
        accountId: undefined,
        currentInstanceType: undefined,
        finding: undefined,
        instanceArn: undefined,
        instanceName: undefined,
        lastRefreshTimestamp: undefined,
        lookBackPeriodInDays: undefined,
        recommendationOptions: undefined,
        recommendationSources: undefined,
        utilizationMetrics: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.currentInstanceType !== undefined &&
        output.currentInstanceType !== null) {
        contents.currentInstanceType = output.currentInstanceType;
    }
    if (output.finding !== undefined && output.finding !== null) {
        contents.finding = output.finding;
    }
    if (output.instanceArn !== undefined && output.instanceArn !== null) {
        contents.instanceArn = output.instanceArn;
    }
    if (output.instanceName !== undefined && output.instanceName !== null) {
        contents.instanceName = output.instanceName;
    }
    if (output.lastRefreshTimestamp !== undefined &&
        output.lastRefreshTimestamp !== null) {
        contents.lastRefreshTimestamp = new Date(Math.round(output.lastRefreshTimestamp * 1000));
    }
    if (output.lookBackPeriodInDays !== undefined &&
        output.lookBackPeriodInDays !== null) {
        contents.lookBackPeriodInDays = output.lookBackPeriodInDays;
    }
    if (output.recommendationOptions !== undefined &&
        output.recommendationOptions !== null) {
        contents.recommendationOptions = deserializeAws_json1_0RecommendationOptions(output.recommendationOptions, context);
    }
    if (output.recommendationSources !== undefined &&
        output.recommendationSources !== null) {
        contents.recommendationSources = deserializeAws_json1_0RecommendationSources(output.recommendationSources, context);
    }
    if (output.utilizationMetrics !== undefined &&
        output.utilizationMetrics !== null) {
        contents.utilizationMetrics = deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0InstanceRecommendationOption = (output, context) => {
    let contents = {
        __type: "InstanceRecommendationOption",
        instanceType: undefined,
        performanceRisk: undefined,
        projectedUtilizationMetrics: undefined,
        rank: undefined
    };
    if (output.instanceType !== undefined && output.instanceType !== null) {
        contents.instanceType = output.instanceType;
    }
    if (output.performanceRisk !== undefined && output.performanceRisk !== null) {
        contents.performanceRisk = output.performanceRisk;
    }
    if (output.projectedUtilizationMetrics !== undefined &&
        output.projectedUtilizationMetrics !== null) {
        contents.projectedUtilizationMetrics = deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context);
    }
    if (output.rank !== undefined && output.rank !== null) {
        contents.rank = output.rank;
    }
    return contents;
};
const deserializeAws_json1_0InstanceRecommendations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0InstanceRecommendation(entry, context));
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0MetricValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0MissingAuthenticationToken = (output, context) => {
    let contents = {
        __type: "MissingAuthenticationToken",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0OptInRequiredException = (output, context) => {
    let contents = {
        __type: "OptInRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ProjectedMetric = (output, context) => {
    let contents = {
        __type: "ProjectedMetric",
        name: undefined,
        timestamps: undefined,
        values: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.timestamps !== undefined && output.timestamps !== null) {
        contents.timestamps = deserializeAws_json1_0Timestamps(output.timestamps, context);
    }
    if (output.values !== undefined && output.values !== null) {
        contents.values = deserializeAws_json1_0MetricValues(output.values, context);
    }
    return contents;
};
const deserializeAws_json1_0ProjectedMetrics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ProjectedMetric(entry, context));
};
const deserializeAws_json1_0ProjectedUtilizationMetrics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0UtilizationMetric(entry, context));
};
const deserializeAws_json1_0RecommendationOptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0InstanceRecommendationOption(entry, context));
};
const deserializeAws_json1_0RecommendationSource = (output, context) => {
    let contents = {
        __type: "RecommendationSource",
        recommendationSourceArn: undefined,
        recommendationSourceType: undefined
    };
    if (output.recommendationSourceArn !== undefined &&
        output.recommendationSourceArn !== null) {
        contents.recommendationSourceArn = output.recommendationSourceArn;
    }
    if (output.recommendationSourceType !== undefined &&
        output.recommendationSourceType !== null) {
        contents.recommendationSourceType = output.recommendationSourceType;
    }
    return contents;
};
const deserializeAws_json1_0RecommendationSources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0RecommendationSource(entry, context));
};
const deserializeAws_json1_0RecommendationSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0RecommendationSummary(entry, context));
};
const deserializeAws_json1_0RecommendationSummary = (output, context) => {
    let contents = {
        __type: "RecommendationSummary",
        accountId: undefined,
        recommendationResourceType: undefined,
        summaries: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.recommendationResourceType !== undefined &&
        output.recommendationResourceType !== null) {
        contents.recommendationResourceType = output.recommendationResourceType;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_0Summaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_0RecommendedOptionProjectedMetric = (output, context) => {
    let contents = {
        __type: "RecommendedOptionProjectedMetric",
        projectedMetrics: undefined,
        rank: undefined,
        recommendedInstanceType: undefined
    };
    if (output.projectedMetrics !== undefined &&
        output.projectedMetrics !== null) {
        contents.projectedMetrics = deserializeAws_json1_0ProjectedMetrics(output.projectedMetrics, context);
    }
    if (output.rank !== undefined && output.rank !== null) {
        contents.rank = output.rank;
    }
    if (output.recommendedInstanceType !== undefined &&
        output.recommendedInstanceType !== null) {
        contents.recommendedInstanceType = output.recommendedInstanceType;
    }
    return contents;
};
const deserializeAws_json1_0RecommendedOptionProjectedMetrics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context));
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0Summaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Summary(entry, context));
};
const deserializeAws_json1_0Summary = (output, context) => {
    let contents = {
        __type: "Summary",
        name: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0Timestamps = (output, context) => {
    return (output || []).map((entry) => new Date(Math.round(entry * 1000)));
};
const deserializeAws_json1_0UpdateEnrollmentStatusResponse = (output, context) => {
    let contents = {
        __type: "UpdateEnrollmentStatusResponse",
        status: undefined,
        statusReason: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusReason !== undefined && output.statusReason !== null) {
        contents.statusReason = output.statusReason;
    }
    return contents;
};
const deserializeAws_json1_0UtilizationMetric = (output, context) => {
    let contents = {
        __type: "UtilizationMetric",
        name: undefined,
        statistic: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.statistic !== undefined && output.statistic !== null) {
        contents.statistic = output.statistic;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_0UtilizationMetrics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0UtilizationMetric(entry, context));
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
//# sourceMappingURL=Aws_json1_0.js.map