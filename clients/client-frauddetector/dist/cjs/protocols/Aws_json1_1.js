"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchCreateVariableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.BatchCreateVariable";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCreateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchCreateVariableCommand = serializeAws_json1_1BatchCreateVariableCommand;
async function serializeAws_json1_1BatchGetVariableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.BatchGetVariable";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetVariableCommand = serializeAws_json1_1BatchGetVariableCommand;
async function serializeAws_json1_1CreateDetectorVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateDetectorVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDetectorVersionCommand = serializeAws_json1_1CreateDetectorVersionCommand;
async function serializeAws_json1_1CreateModelVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateModelVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateModelVersionCommand = serializeAws_json1_1CreateModelVersionCommand;
async function serializeAws_json1_1CreateRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRuleCommand = serializeAws_json1_1CreateRuleCommand;
async function serializeAws_json1_1CreateVariableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateVariable";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVariableCommand = serializeAws_json1_1CreateVariableCommand;
async function serializeAws_json1_1DeleteDetectorVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DeleteDetectorVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDetectorVersionCommand = serializeAws_json1_1DeleteDetectorVersionCommand;
async function serializeAws_json1_1DeleteEventCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DeleteEvent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEventCommand = serializeAws_json1_1DeleteEventCommand;
async function serializeAws_json1_1DescribeDetectorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DescribeDetector";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDetectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDetectorCommand = serializeAws_json1_1DescribeDetectorCommand;
async function serializeAws_json1_1DescribeModelVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DescribeModelVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeModelVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeModelVersionsCommand = serializeAws_json1_1DescribeModelVersionsCommand;
async function serializeAws_json1_1GetDetectorVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetDetectorVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDetectorVersionCommand = serializeAws_json1_1GetDetectorVersionCommand;
async function serializeAws_json1_1GetDetectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetDetectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDetectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDetectorsCommand = serializeAws_json1_1GetDetectorsCommand;
async function serializeAws_json1_1GetExternalModelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetExternalModels";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExternalModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetExternalModelsCommand = serializeAws_json1_1GetExternalModelsCommand;
async function serializeAws_json1_1GetModelVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetModelVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetModelVersionCommand = serializeAws_json1_1GetModelVersionCommand;
async function serializeAws_json1_1GetModelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetModels";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetModelsCommand = serializeAws_json1_1GetModelsCommand;
async function serializeAws_json1_1GetOutcomesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetOutcomes";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOutcomesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOutcomesCommand = serializeAws_json1_1GetOutcomesCommand;
async function serializeAws_json1_1GetPredictionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetPrediction";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPredictionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPredictionCommand = serializeAws_json1_1GetPredictionCommand;
async function serializeAws_json1_1GetRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRulesCommand = serializeAws_json1_1GetRulesCommand;
async function serializeAws_json1_1GetVariablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetVariables";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVariablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetVariablesCommand = serializeAws_json1_1GetVariablesCommand;
async function serializeAws_json1_1PutDetectorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutDetector";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDetectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDetectorCommand = serializeAws_json1_1PutDetectorCommand;
async function serializeAws_json1_1PutExternalModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutExternalModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutExternalModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutExternalModelCommand = serializeAws_json1_1PutExternalModelCommand;
async function serializeAws_json1_1PutModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutModelCommand = serializeAws_json1_1PutModelCommand;
async function serializeAws_json1_1PutOutcomeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutOutcome";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOutcomeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutOutcomeCommand = serializeAws_json1_1PutOutcomeCommand;
async function serializeAws_json1_1UpdateDetectorVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateDetectorVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDetectorVersionCommand = serializeAws_json1_1UpdateDetectorVersionCommand;
async function serializeAws_json1_1UpdateDetectorVersionMetadataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDetectorVersionMetadataCommand = serializeAws_json1_1UpdateDetectorVersionMetadataCommand;
async function serializeAws_json1_1UpdateDetectorVersionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSHawksNestServiceFacade.UpdateDetectorVersionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDetectorVersionStatusCommand = serializeAws_json1_1UpdateDetectorVersionStatusCommand;
async function serializeAws_json1_1UpdateModelVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateModelVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateModelVersionCommand = serializeAws_json1_1UpdateModelVersionCommand;
async function serializeAws_json1_1UpdateRuleMetadataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateRuleMetadata";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuleMetadataCommand = serializeAws_json1_1UpdateRuleMetadataCommand;
async function serializeAws_json1_1UpdateRuleVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateRuleVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuleVersionCommand = serializeAws_json1_1UpdateRuleVersionCommand;
async function serializeAws_json1_1UpdateVariableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateVariable";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVariableCommand = serializeAws_json1_1UpdateVariableCommand;
async function deserializeAws_json1_1BatchCreateVariableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchCreateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCreateVariableResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchCreateVariableResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchCreateVariableCommand = deserializeAws_json1_1BatchCreateVariableCommand;
async function deserializeAws_json1_1BatchCreateVariableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1BatchGetVariableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetVariableResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetVariableResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetVariableCommand = deserializeAws_json1_1BatchGetVariableCommand;
async function deserializeAws_json1_1BatchGetVariableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1CreateDetectorVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDetectorVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDetectorVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDetectorVersionCommand = deserializeAws_json1_1CreateDetectorVersionCommand;
async function deserializeAws_json1_1CreateDetectorVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1CreateModelVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateModelVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateModelVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateModelVersionCommand = deserializeAws_json1_1CreateModelVersionCommand;
async function deserializeAws_json1_1CreateModelVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1CreateRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRuleResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRuleCommand = deserializeAws_json1_1CreateRuleCommand;
async function deserializeAws_json1_1CreateRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1CreateVariableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVariableResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVariableResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVariableCommand = deserializeAws_json1_1CreateVariableCommand;
async function deserializeAws_json1_1CreateVariableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1DeleteDetectorVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDetectorVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDetectorVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDetectorVersionCommand = deserializeAws_json1_1DeleteDetectorVersionCommand;
async function deserializeAws_json1_1DeleteDetectorVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1DeleteEventCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEventCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEventResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEventResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEventCommand = deserializeAws_json1_1DeleteEventCommand;
async function deserializeAws_json1_1DeleteEventCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
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
async function deserializeAws_json1_1DescribeDetectorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDetectorResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDetectorResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDetectorCommand = deserializeAws_json1_1DescribeDetectorCommand;
async function deserializeAws_json1_1DescribeDetectorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1DescribeModelVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeModelVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeModelVersionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeModelVersionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeModelVersionsCommand = deserializeAws_json1_1DescribeModelVersionsCommand;
async function deserializeAws_json1_1DescribeModelVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetDetectorVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDetectorVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDetectorVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDetectorVersionCommand = deserializeAws_json1_1GetDetectorVersionCommand;
async function deserializeAws_json1_1GetDetectorVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetDetectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDetectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDetectorsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDetectorsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDetectorsCommand = deserializeAws_json1_1GetDetectorsCommand;
async function deserializeAws_json1_1GetDetectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetExternalModelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetExternalModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExternalModelsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetExternalModelsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetExternalModelsCommand = deserializeAws_json1_1GetExternalModelsCommand;
async function deserializeAws_json1_1GetExternalModelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetModelVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetModelVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetModelVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetModelVersionCommand = deserializeAws_json1_1GetModelVersionCommand;
async function deserializeAws_json1_1GetModelVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetModelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetModelsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetModelsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetModelsCommand = deserializeAws_json1_1GetModelsCommand;
async function deserializeAws_json1_1GetModelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetOutcomesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOutcomesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOutcomesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOutcomesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOutcomesCommand = deserializeAws_json1_1GetOutcomesCommand;
async function deserializeAws_json1_1GetOutcomesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetPredictionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPredictionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPredictionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPredictionCommand = deserializeAws_json1_1GetPredictionCommand;
async function deserializeAws_json1_1GetPredictionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRulesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRulesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRulesCommand = deserializeAws_json1_1GetRulesCommand;
async function deserializeAws_json1_1GetRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetVariablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetVariablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVariablesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetVariablesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetVariablesCommand = deserializeAws_json1_1GetVariablesCommand;
async function deserializeAws_json1_1GetVariablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1PutDetectorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDetectorResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutDetectorResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDetectorCommand = deserializeAws_json1_1PutDetectorCommand;
async function deserializeAws_json1_1PutDetectorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1PutExternalModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutExternalModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutExternalModelResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutExternalModelResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutExternalModelCommand = deserializeAws_json1_1PutExternalModelCommand;
async function deserializeAws_json1_1PutExternalModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1PutModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutModelResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutModelResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutModelCommand = deserializeAws_json1_1PutModelCommand;
async function deserializeAws_json1_1PutModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1PutOutcomeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutOutcomeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOutcomeResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutOutcomeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutOutcomeCommand = deserializeAws_json1_1PutOutcomeCommand;
async function deserializeAws_json1_1PutOutcomeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateDetectorVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDetectorVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDetectorVersionCommand = deserializeAws_json1_1UpdateDetectorVersionCommand;
async function deserializeAws_json1_1UpdateDetectorVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateDetectorVersionMetadataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionMetadataResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDetectorVersionMetadataResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = deserializeAws_json1_1UpdateDetectorVersionMetadataCommand;
async function deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateDetectorVersionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDetectorVersionStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDetectorVersionStatusCommand = deserializeAws_json1_1UpdateDetectorVersionStatusCommand;
async function deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateModelVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateModelVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateModelVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateModelVersionCommand = deserializeAws_json1_1UpdateModelVersionCommand;
async function deserializeAws_json1_1UpdateModelVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateRuleMetadataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRuleMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleMetadataResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRuleMetadataResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRuleMetadataCommand = deserializeAws_json1_1UpdateRuleMetadataCommand;
async function deserializeAws_json1_1UpdateRuleMetadataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateRuleVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRuleVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRuleVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRuleVersionCommand = deserializeAws_json1_1UpdateRuleVersionCommand;
async function deserializeAws_json1_1UpdateRuleVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
async function deserializeAws_json1_1UpdateVariableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVariableResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateVariableResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVariableCommand = deserializeAws_json1_1UpdateVariableCommand;
async function deserializeAws_json1_1UpdateVariableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchCreateVariableRequest = (input, context) => {
    const bodyParams = {};
    if (input.variableEntries !== undefined) {
        bodyParams["variableEntries"] = serializeAws_json1_1VariableEntryList(input.variableEntries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetVariableRequest = (input, context) => {
    const bodyParams = {};
    if (input.names !== undefined) {
        bodyParams["names"] = serializeAws_json1_1NameList(input.names, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDetectorVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.externalModelEndpoints !== undefined) {
        bodyParams["externalModelEndpoints"] = serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context);
    }
    if (input.modelVersions !== undefined) {
        bodyParams["modelVersions"] = serializeAws_json1_1ListOfModelVersions(input.modelVersions, context);
    }
    if (input.rules !== undefined) {
        bodyParams["rules"] = serializeAws_json1_1RuleList(input.rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateModelVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.expression !== undefined) {
        bodyParams["expression"] = input.expression;
    }
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.outcomes !== undefined) {
        bodyParams["outcomes"] = serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context);
    }
    if (input.ruleId !== undefined) {
        bodyParams["ruleId"] = input.ruleId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateVariableRequest = (input, context) => {
    const bodyParams = {};
    if (input.dataSource !== undefined) {
        bodyParams["dataSource"] = input.dataSource;
    }
    if (input.dataType !== undefined) {
        bodyParams["dataType"] = input.dataType;
    }
    if (input.defaultValue !== undefined) {
        bodyParams["defaultValue"] = input.defaultValue;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.variableType !== undefined) {
        bodyParams["variableType"] = input.variableType;
    }
    return bodyParams;
};
const serializeAws_json1_1CsvIndexToVariableMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1DeleteDetectorVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEventRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventId !== undefined) {
        bodyParams["eventId"] = input.eventId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDetectorRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeModelVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.modelVersionNumber !== undefined) {
        bodyParams["modelVersionNumber"] = input.modelVersionNumber;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1EventAttributeMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ExternalModelEndpointDataBlobMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ModelEndpointDataBlob(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1GetDetectorVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDetectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetExternalModelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.modelEndpoint !== undefined) {
        bodyParams["modelEndpoint"] = input.modelEndpoint;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetModelVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.modelVersionNumber !== undefined) {
        bodyParams["modelVersionNumber"] = input.modelVersionNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1GetModelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOutcomesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPredictionRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    if (input.eventAttributes !== undefined) {
        bodyParams["eventAttributes"] = serializeAws_json1_1EventAttributeMap(input.eventAttributes, context);
    }
    if (input.eventId !== undefined) {
        bodyParams["eventId"] = input.eventId;
    }
    if (input.externalModelEndpointDataBlobs !== undefined) {
        bodyParams["externalModelEndpointDataBlobs"] = serializeAws_json1_1ExternalModelEndpointDataBlobMap(input.externalModelEndpointDataBlobs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.ruleId !== undefined) {
        bodyParams["ruleId"] = input.ruleId;
    }
    if (input.ruleVersion !== undefined) {
        bodyParams["ruleVersion"] = input.ruleVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1GetVariablesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1JsonKeyToVariableMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1LabelMapper = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ListOfStrings(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1LabelSchema = (input, context) => {
    const bodyParams = {};
    if (input.labelKey !== undefined) {
        bodyParams["labelKey"] = input.labelKey;
    }
    if (input.labelMapper !== undefined) {
        bodyParams["labelMapper"] = serializeAws_json1_1LabelMapper(input.labelMapper, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListOfModelVersions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ModelVersion(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListOfStrings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ModelEndpointDataBlob = (input, context) => {
    const bodyParams = {};
    if (input.byteBuffer !== undefined) {
        bodyParams["byteBuffer"] = Buffer.from(input.byteBuffer).toString("utf-8");
    }
    if (input.contentType !== undefined) {
        bodyParams["contentType"] = input.contentType;
    }
    return bodyParams;
};
const serializeAws_json1_1ModelInputConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.csvInputTemplate !== undefined) {
        bodyParams["csvInputTemplate"] = input.csvInputTemplate;
    }
    if (input.format !== undefined) {
        bodyParams["format"] = input.format;
    }
    if (input.isOpaque !== undefined) {
        bodyParams["isOpaque"] = input.isOpaque;
    }
    if (input.jsonInputTemplate !== undefined) {
        bodyParams["jsonInputTemplate"] = input.jsonInputTemplate;
    }
    return bodyParams;
};
const serializeAws_json1_1ModelOutputConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.csvIndexToVariableMap !== undefined) {
        bodyParams["csvIndexToVariableMap"] = serializeAws_json1_1CsvIndexToVariableMap(input.csvIndexToVariableMap, context);
    }
    if (input.format !== undefined) {
        bodyParams["format"] = input.format;
    }
    if (input.jsonKeyToVariableMap !== undefined) {
        bodyParams["jsonKeyToVariableMap"] = serializeAws_json1_1JsonKeyToVariableMap(input.jsonKeyToVariableMap, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModelVariable = (input, context) => {
    const bodyParams = {};
    if (input.index !== undefined) {
        bodyParams["index"] = input.index;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1ModelVariablesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ModelVariable(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ModelVersion = (input, context) => {
    const bodyParams = {};
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.modelVersionNumber !== undefined) {
        bodyParams["modelVersionNumber"] = input.modelVersionNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1NameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1NonEmptyListOfStrings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PutDetectorRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutExternalModelRequest = (input, context) => {
    const bodyParams = {};
    if (input.inputConfiguration !== undefined) {
        bodyParams["inputConfiguration"] = serializeAws_json1_1ModelInputConfiguration(input.inputConfiguration, context);
    }
    if (input.modelEndpoint !== undefined) {
        bodyParams["modelEndpoint"] = input.modelEndpoint;
    }
    if (input.modelEndpointStatus !== undefined) {
        bodyParams["modelEndpointStatus"] = input.modelEndpointStatus;
    }
    if (input.modelSource !== undefined) {
        bodyParams["modelSource"] = input.modelSource;
    }
    if (input.outputConfiguration !== undefined) {
        bodyParams["outputConfiguration"] = serializeAws_json1_1ModelOutputConfiguration(input.outputConfiguration, context);
    }
    if (input.role !== undefined) {
        bodyParams["role"] = serializeAws_json1_1Role(input.role, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutModelRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.labelSchema !== undefined) {
        bodyParams["labelSchema"] = serializeAws_json1_1LabelSchema(input.labelSchema, context);
    }
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.modelVariables !== undefined) {
        bodyParams["modelVariables"] = serializeAws_json1_1ModelVariablesList(input.modelVariables, context);
    }
    if (input.trainingDataSource !== undefined) {
        bodyParams["trainingDataSource"] = serializeAws_json1_1TrainingDataSource(input.trainingDataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutOutcomeRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1Role = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1Rule = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.ruleId !== undefined) {
        bodyParams["ruleId"] = input.ruleId;
    }
    if (input.ruleVersion !== undefined) {
        bodyParams["ruleVersion"] = input.ruleVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1RuleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Rule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TrainingDataSource = (input, context) => {
    const bodyParams = {};
    if (input.dataAccessRoleArn !== undefined) {
        bodyParams["dataAccessRoleArn"] = input.dataAccessRoleArn;
    }
    if (input.dataLocation !== undefined) {
        bodyParams["dataLocation"] = input.dataLocation;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDetectorVersionMetadataRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDetectorVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    if (input.externalModelEndpoints !== undefined) {
        bodyParams["externalModelEndpoints"] = serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context);
    }
    if (input.modelVersions !== undefined) {
        bodyParams["modelVersions"] = serializeAws_json1_1ListOfModelVersions(input.modelVersions, context);
    }
    if (input.rules !== undefined) {
        bodyParams["rules"] = serializeAws_json1_1RuleList(input.rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDetectorVersionStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.detectorId !== undefined) {
        bodyParams["detectorId"] = input.detectorId;
    }
    if (input.detectorVersionId !== undefined) {
        bodyParams["detectorVersionId"] = input.detectorVersionId;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateModelVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.modelId !== undefined) {
        bodyParams["modelId"] = input.modelId;
    }
    if (input.modelType !== undefined) {
        bodyParams["modelType"] = input.modelType;
    }
    if (input.modelVersionNumber !== undefined) {
        bodyParams["modelVersionNumber"] = input.modelVersionNumber;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuleMetadataRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.rule !== undefined) {
        bodyParams["rule"] = serializeAws_json1_1Rule(input.rule, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuleVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.expression !== undefined) {
        bodyParams["expression"] = input.expression;
    }
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.outcomes !== undefined) {
        bodyParams["outcomes"] = serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context);
    }
    if (input.rule !== undefined) {
        bodyParams["rule"] = serializeAws_json1_1Rule(input.rule, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVariableRequest = (input, context) => {
    const bodyParams = {};
    if (input.defaultValue !== undefined) {
        bodyParams["defaultValue"] = input.defaultValue;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.variableType !== undefined) {
        bodyParams["variableType"] = input.variableType;
    }
    return bodyParams;
};
const serializeAws_json1_1VariableEntry = (input, context) => {
    const bodyParams = {};
    if (input.dataSource !== undefined) {
        bodyParams["dataSource"] = input.dataSource;
    }
    if (input.dataType !== undefined) {
        bodyParams["dataType"] = input.dataType;
    }
    if (input.defaultValue !== undefined) {
        bodyParams["defaultValue"] = input.defaultValue;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.variableType !== undefined) {
        bodyParams["variableType"] = input.variableType;
    }
    return bodyParams;
};
const serializeAws_json1_1VariableEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VariableEntry(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1BatchCreateVariableError = (output, context) => {
    let contents = {
        __type: "BatchCreateVariableError",
        code: undefined,
        message: undefined,
        name: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1BatchCreateVariableErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchCreateVariableError(entry, context));
};
const deserializeAws_json1_1BatchCreateVariableResult = (output, context) => {
    let contents = {
        __type: "BatchCreateVariableResult",
        errors: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchCreateVariableErrorList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetVariableError = (output, context) => {
    let contents = {
        __type: "BatchGetVariableError",
        code: undefined,
        message: undefined,
        name: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1BatchGetVariableErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchGetVariableError(entry, context));
};
const deserializeAws_json1_1BatchGetVariableResult = (output, context) => {
    let contents = {
        __type: "BatchGetVariableResult",
        errors: undefined,
        variables: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchGetVariableErrorList(output.errors, context);
    }
    if (output.variables !== undefined && output.variables !== null) {
        contents.variables = deserializeAws_json1_1VariableList(output.variables, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDetectorVersionResult = (output, context) => {
    let contents = {
        __type: "CreateDetectorVersionResult",
        detectorId: undefined,
        detectorVersionId: undefined,
        status: undefined
    };
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.detectorVersionId !== undefined &&
        output.detectorVersionId !== null) {
        contents.detectorVersionId = output.detectorVersionId;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1CreateModelVersionResult = (output, context) => {
    let contents = {
        __type: "CreateModelVersionResult",
        modelId: undefined,
        modelType: undefined,
        modelVersionNumber: undefined,
        status: undefined
    };
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.modelType !== undefined && output.modelType !== null) {
        contents.modelType = output.modelType;
    }
    if (output.modelVersionNumber !== undefined &&
        output.modelVersionNumber !== null) {
        contents.modelVersionNumber = output.modelVersionNumber;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1CreateRuleResult = (output, context) => {
    let contents = {
        __type: "CreateRuleResult",
        rule: undefined
    };
    if (output.rule !== undefined && output.rule !== null) {
        contents.rule = deserializeAws_json1_1Rule(output.rule, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateVariableResult = (output, context) => {
    let contents = {
        __type: "CreateVariableResult"
    };
    return contents;
};
const deserializeAws_json1_1CsvIndexToVariableMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1DeleteDetectorVersionResult = (output, context) => {
    let contents = {
        __type: "DeleteDetectorVersionResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteEventResult = (output, context) => {
    let contents = {
        __type: "DeleteEventResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeDetectorResult = (output, context) => {
    let contents = {
        __type: "DescribeDetectorResult",
        detectorId: undefined,
        detectorVersionSummaries: undefined,
        nextToken: undefined
    };
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.detectorVersionSummaries !== undefined &&
        output.detectorVersionSummaries !== null) {
        contents.detectorVersionSummaries = deserializeAws_json1_1DetectorVersionSummaryList(output.detectorVersionSummaries, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeModelVersionsResult = (output, context) => {
    let contents = {
        __type: "DescribeModelVersionsResult",
        modelVersionDetails: undefined,
        nextToken: undefined
    };
    if (output.modelVersionDetails !== undefined &&
        output.modelVersionDetails !== null) {
        contents.modelVersionDetails = deserializeAws_json1_1ModelVersionDetailList(output.modelVersionDetails, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1Detector = (output, context) => {
    let contents = {
        __type: "Detector",
        createdTime: undefined,
        description: undefined,
        detectorId: undefined,
        lastUpdatedTime: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    return contents;
};
const deserializeAws_json1_1DetectorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Detector(entry, context));
};
const deserializeAws_json1_1DetectorVersionSummary = (output, context) => {
    let contents = {
        __type: "DetectorVersionSummary",
        description: undefined,
        detectorVersionId: undefined,
        lastUpdatedTime: undefined,
        status: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.detectorVersionId !== undefined &&
        output.detectorVersionId !== null) {
        contents.detectorVersionId = output.detectorVersionId;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DetectorVersionSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DetectorVersionSummary(entry, context));
};
const deserializeAws_json1_1ExternalModel = (output, context) => {
    let contents = {
        __type: "ExternalModel",
        createdTime: undefined,
        inputConfiguration: undefined,
        lastUpdatedTime: undefined,
        modelEndpoint: undefined,
        modelEndpointStatus: undefined,
        modelSource: undefined,
        outputConfiguration: undefined,
        role: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.inputConfiguration !== undefined &&
        output.inputConfiguration !== null) {
        contents.inputConfiguration = deserializeAws_json1_1ModelInputConfiguration(output.inputConfiguration, context);
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.modelEndpoint !== undefined && output.modelEndpoint !== null) {
        contents.modelEndpoint = output.modelEndpoint;
    }
    if (output.modelEndpointStatus !== undefined &&
        output.modelEndpointStatus !== null) {
        contents.modelEndpointStatus = output.modelEndpointStatus;
    }
    if (output.modelSource !== undefined && output.modelSource !== null) {
        contents.modelSource = output.modelSource;
    }
    if (output.outputConfiguration !== undefined &&
        output.outputConfiguration !== null) {
        contents.outputConfiguration = deserializeAws_json1_1ModelOutputConfiguration(output.outputConfiguration, context);
    }
    if (output.role !== undefined && output.role !== null) {
        contents.role = deserializeAws_json1_1Role(output.role, context);
    }
    return contents;
};
const deserializeAws_json1_1ExternalModelList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExternalModel(entry, context));
};
const deserializeAws_json1_1GetDetectorVersionResult = (output, context) => {
    let contents = {
        __type: "GetDetectorVersionResult",
        createdTime: undefined,
        description: undefined,
        detectorId: undefined,
        detectorVersionId: undefined,
        externalModelEndpoints: undefined,
        lastUpdatedTime: undefined,
        modelVersions: undefined,
        rules: undefined,
        status: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.detectorVersionId !== undefined &&
        output.detectorVersionId !== null) {
        contents.detectorVersionId = output.detectorVersionId;
    }
    if (output.externalModelEndpoints !== undefined &&
        output.externalModelEndpoints !== null) {
        contents.externalModelEndpoints = deserializeAws_json1_1ListOfStrings(output.externalModelEndpoints, context);
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.modelVersions !== undefined && output.modelVersions !== null) {
        contents.modelVersions = deserializeAws_json1_1ListOfModelVersions(output.modelVersions, context);
    }
    if (output.rules !== undefined && output.rules !== null) {
        contents.rules = deserializeAws_json1_1RuleList(output.rules, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1GetDetectorsResult = (output, context) => {
    let contents = {
        __type: "GetDetectorsResult",
        detectors: undefined,
        nextToken: undefined
    };
    if (output.detectors !== undefined && output.detectors !== null) {
        contents.detectors = deserializeAws_json1_1DetectorList(output.detectors, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetExternalModelsResult = (output, context) => {
    let contents = {
        __type: "GetExternalModelsResult",
        externalModels: undefined,
        nextToken: undefined
    };
    if (output.externalModels !== undefined && output.externalModels !== null) {
        contents.externalModels = deserializeAws_json1_1ExternalModelList(output.externalModels, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetModelVersionResult = (output, context) => {
    let contents = {
        __type: "GetModelVersionResult",
        description: undefined,
        modelId: undefined,
        modelType: undefined,
        modelVersionNumber: undefined,
        status: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.modelType !== undefined && output.modelType !== null) {
        contents.modelType = output.modelType;
    }
    if (output.modelVersionNumber !== undefined &&
        output.modelVersionNumber !== null) {
        contents.modelVersionNumber = output.modelVersionNumber;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1GetModelsResult = (output, context) => {
    let contents = {
        __type: "GetModelsResult",
        models: undefined,
        nextToken: undefined
    };
    if (output.models !== undefined && output.models !== null) {
        contents.models = deserializeAws_json1_1ModelList(output.models, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetOutcomesResult = (output, context) => {
    let contents = {
        __type: "GetOutcomesResult",
        nextToken: undefined,
        outcomes: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.outcomes !== undefined && output.outcomes !== null) {
        contents.outcomes = deserializeAws_json1_1OutcomeList(output.outcomes, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPredictionResult = (output, context) => {
    let contents = {
        __type: "GetPredictionResult",
        modelScores: undefined,
        outcomes: undefined
    };
    if (output.modelScores !== undefined && output.modelScores !== null) {
        contents.modelScores = deserializeAws_json1_1ListOfModelScores(output.modelScores, context);
    }
    if (output.outcomes !== undefined && output.outcomes !== null) {
        contents.outcomes = deserializeAws_json1_1ListOfStrings(output.outcomes, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRulesResult = (output, context) => {
    let contents = {
        __type: "GetRulesResult",
        nextToken: undefined,
        ruleDetails: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.ruleDetails !== undefined && output.ruleDetails !== null) {
        contents.ruleDetails = deserializeAws_json1_1RuleDetailList(output.ruleDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1GetVariablesResult = (output, context) => {
    let contents = {
        __type: "GetVariablesResult",
        nextToken: undefined,
        variables: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.variables !== undefined && output.variables !== null) {
        contents.variables = deserializeAws_json1_1VariableList(output.variables, context);
    }
    return contents;
};
const deserializeAws_json1_1JsonKeyToVariableMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1LabelMapper = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1ListOfStrings(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1LabelSchema = (output, context) => {
    let contents = {
        __type: "LabelSchema",
        labelKey: undefined,
        labelMapper: undefined
    };
    if (output.labelKey !== undefined && output.labelKey !== null) {
        contents.labelKey = output.labelKey;
    }
    if (output.labelMapper !== undefined && output.labelMapper !== null) {
        contents.labelMapper = deserializeAws_json1_1LabelMapper(output.labelMapper, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOfModelScores = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelScores(entry, context));
};
const deserializeAws_json1_1ListOfModelVersions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelVersion(entry, context));
};
const deserializeAws_json1_1ListOfStrings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MetricsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Model = (output, context) => {
    let contents = {
        __type: "Model",
        createdTime: undefined,
        description: undefined,
        labelSchema: undefined,
        lastUpdatedTime: undefined,
        modelId: undefined,
        modelType: undefined,
        modelVariables: undefined,
        trainingDataSource: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.labelSchema !== undefined && output.labelSchema !== null) {
        contents.labelSchema = deserializeAws_json1_1LabelSchema(output.labelSchema, context);
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.modelType !== undefined && output.modelType !== null) {
        contents.modelType = output.modelType;
    }
    if (output.modelVariables !== undefined && output.modelVariables !== null) {
        contents.modelVariables = deserializeAws_json1_1ModelVariablesList(output.modelVariables, context);
    }
    if (output.trainingDataSource !== undefined &&
        output.trainingDataSource !== null) {
        contents.trainingDataSource = deserializeAws_json1_1TrainingDataSource(output.trainingDataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelInputConfiguration = (output, context) => {
    let contents = {
        __type: "ModelInputConfiguration",
        csvInputTemplate: undefined,
        format: undefined,
        isOpaque: undefined,
        jsonInputTemplate: undefined
    };
    if (output.csvInputTemplate !== undefined &&
        output.csvInputTemplate !== null) {
        contents.csvInputTemplate = output.csvInputTemplate;
    }
    if (output.format !== undefined && output.format !== null) {
        contents.format = output.format;
    }
    if (output.isOpaque !== undefined && output.isOpaque !== null) {
        contents.isOpaque = output.isOpaque;
    }
    if (output.jsonInputTemplate !== undefined &&
        output.jsonInputTemplate !== null) {
        contents.jsonInputTemplate = output.jsonInputTemplate;
    }
    return contents;
};
const deserializeAws_json1_1ModelList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Model(entry, context));
};
const deserializeAws_json1_1ModelOutputConfiguration = (output, context) => {
    let contents = {
        __type: "ModelOutputConfiguration",
        csvIndexToVariableMap: undefined,
        format: undefined,
        jsonKeyToVariableMap: undefined
    };
    if (output.csvIndexToVariableMap !== undefined &&
        output.csvIndexToVariableMap !== null) {
        contents.csvIndexToVariableMap = deserializeAws_json1_1CsvIndexToVariableMap(output.csvIndexToVariableMap, context);
    }
    if (output.format !== undefined && output.format !== null) {
        contents.format = output.format;
    }
    if (output.jsonKeyToVariableMap !== undefined &&
        output.jsonKeyToVariableMap !== null) {
        contents.jsonKeyToVariableMap = deserializeAws_json1_1JsonKeyToVariableMap(output.jsonKeyToVariableMap, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelPredictionMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ModelScores = (output, context) => {
    let contents = {
        __type: "ModelScores",
        modelVersion: undefined,
        scores: undefined
    };
    if (output.modelVersion !== undefined && output.modelVersion !== null) {
        contents.modelVersion = deserializeAws_json1_1ModelVersion(output.modelVersion, context);
    }
    if (output.scores !== undefined && output.scores !== null) {
        contents.scores = deserializeAws_json1_1ModelPredictionMap(output.scores, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelVariable = (output, context) => {
    let contents = {
        __type: "ModelVariable",
        index: undefined,
        name: undefined
    };
    if (output.index !== undefined && output.index !== null) {
        contents.index = output.index;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ModelVariablesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelVariable(entry, context));
};
const deserializeAws_json1_1ModelVersion = (output, context) => {
    let contents = {
        __type: "ModelVersion",
        modelId: undefined,
        modelType: undefined,
        modelVersionNumber: undefined
    };
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.modelType !== undefined && output.modelType !== null) {
        contents.modelType = output.modelType;
    }
    if (output.modelVersionNumber !== undefined &&
        output.modelVersionNumber !== null) {
        contents.modelVersionNumber = output.modelVersionNumber;
    }
    return contents;
};
const deserializeAws_json1_1ModelVersionDetail = (output, context) => {
    let contents = {
        __type: "ModelVersionDetail",
        createdTime: undefined,
        description: undefined,
        labelSchema: undefined,
        lastUpdatedTime: undefined,
        modelId: undefined,
        modelType: undefined,
        modelVariables: undefined,
        modelVersionNumber: undefined,
        status: undefined,
        trainingDataSource: undefined,
        trainingMetrics: undefined,
        validationMetrics: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.labelSchema !== undefined && output.labelSchema !== null) {
        contents.labelSchema = deserializeAws_json1_1LabelSchema(output.labelSchema, context);
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.modelType !== undefined && output.modelType !== null) {
        contents.modelType = output.modelType;
    }
    if (output.modelVariables !== undefined && output.modelVariables !== null) {
        contents.modelVariables = deserializeAws_json1_1ModelVariablesList(output.modelVariables, context);
    }
    if (output.modelVersionNumber !== undefined &&
        output.modelVersionNumber !== null) {
        contents.modelVersionNumber = output.modelVersionNumber;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.trainingDataSource !== undefined &&
        output.trainingDataSource !== null) {
        contents.trainingDataSource = deserializeAws_json1_1TrainingDataSource(output.trainingDataSource, context);
    }
    if (output.trainingMetrics !== undefined && output.trainingMetrics !== null) {
        contents.trainingMetrics = deserializeAws_json1_1MetricsMap(output.trainingMetrics, context);
    }
    if (output.validationMetrics !== undefined &&
        output.validationMetrics !== null) {
        contents.validationMetrics = deserializeAws_json1_1MetricsMap(output.validationMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelVersionDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelVersionDetail(entry, context));
};
const deserializeAws_json1_1NonEmptyListOfStrings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Outcome = (output, context) => {
    let contents = {
        __type: "Outcome",
        createdTime: undefined,
        description: undefined,
        lastUpdatedTime: undefined,
        name: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1OutcomeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Outcome(entry, context));
};
const deserializeAws_json1_1PutDetectorResult = (output, context) => {
    let contents = {
        __type: "PutDetectorResult"
    };
    return contents;
};
const deserializeAws_json1_1PutExternalModelResult = (output, context) => {
    let contents = {
        __type: "PutExternalModelResult"
    };
    return contents;
};
const deserializeAws_json1_1PutModelResult = (output, context) => {
    let contents = {
        __type: "PutModelResult"
    };
    return contents;
};
const deserializeAws_json1_1PutOutcomeResult = (output, context) => {
    let contents = {
        __type: "PutOutcomeResult"
    };
    return contents;
};
const deserializeAws_json1_1Role = (output, context) => {
    let contents = {
        __type: "Role",
        arn: undefined,
        name: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1Rule = (output, context) => {
    let contents = {
        __type: "Rule",
        detectorId: undefined,
        ruleId: undefined,
        ruleVersion: undefined
    };
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.ruleId !== undefined && output.ruleId !== null) {
        contents.ruleId = output.ruleId;
    }
    if (output.ruleVersion !== undefined && output.ruleVersion !== null) {
        contents.ruleVersion = output.ruleVersion;
    }
    return contents;
};
const deserializeAws_json1_1RuleDetail = (output, context) => {
    let contents = {
        __type: "RuleDetail",
        createdTime: undefined,
        description: undefined,
        detectorId: undefined,
        expression: undefined,
        language: undefined,
        lastUpdatedTime: undefined,
        outcomes: undefined,
        ruleId: undefined,
        ruleVersion: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.detectorId !== undefined && output.detectorId !== null) {
        contents.detectorId = output.detectorId;
    }
    if (output.expression !== undefined && output.expression !== null) {
        contents.expression = output.expression;
    }
    if (output.language !== undefined && output.language !== null) {
        contents.language = output.language;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.outcomes !== undefined && output.outcomes !== null) {
        contents.outcomes = deserializeAws_json1_1NonEmptyListOfStrings(output.outcomes, context);
    }
    if (output.ruleId !== undefined && output.ruleId !== null) {
        contents.ruleId = output.ruleId;
    }
    if (output.ruleVersion !== undefined && output.ruleVersion !== null) {
        contents.ruleVersion = output.ruleVersion;
    }
    return contents;
};
const deserializeAws_json1_1RuleDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RuleDetail(entry, context));
};
const deserializeAws_json1_1RuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Rule(entry, context));
};
const deserializeAws_json1_1TrainingDataSource = (output, context) => {
    let contents = {
        __type: "TrainingDataSource",
        dataAccessRoleArn: undefined,
        dataLocation: undefined
    };
    if (output.dataAccessRoleArn !== undefined &&
        output.dataAccessRoleArn !== null) {
        contents.dataAccessRoleArn = output.dataAccessRoleArn;
    }
    if (output.dataLocation !== undefined && output.dataLocation !== null) {
        contents.dataLocation = output.dataLocation;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDetectorVersionMetadataResult = (output, context) => {
    let contents = {
        __type: "UpdateDetectorVersionMetadataResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDetectorVersionResult = (output, context) => {
    let contents = {
        __type: "UpdateDetectorVersionResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDetectorVersionStatusResult = (output, context) => {
    let contents = {
        __type: "UpdateDetectorVersionStatusResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateModelVersionResult = (output, context) => {
    let contents = {
        __type: "UpdateModelVersionResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateRuleMetadataResult = (output, context) => {
    let contents = {
        __type: "UpdateRuleMetadataResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateRuleVersionResult = (output, context) => {
    let contents = {
        __type: "UpdateRuleVersionResult",
        rule: undefined
    };
    if (output.rule !== undefined && output.rule !== null) {
        contents.rule = deserializeAws_json1_1Rule(output.rule, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateVariableResult = (output, context) => {
    let contents = {
        __type: "UpdateVariableResult"
    };
    return contents;
};
const deserializeAws_json1_1Variable = (output, context) => {
    let contents = {
        __type: "Variable",
        createdTime: undefined,
        dataSource: undefined,
        dataType: undefined,
        defaultValue: undefined,
        description: undefined,
        lastUpdatedTime: undefined,
        name: undefined,
        variableType: undefined
    };
    if (output.createdTime !== undefined && output.createdTime !== null) {
        contents.createdTime = output.createdTime;
    }
    if (output.dataSource !== undefined && output.dataSource !== null) {
        contents.dataSource = output.dataSource;
    }
    if (output.dataType !== undefined && output.dataType !== null) {
        contents.dataType = output.dataType;
    }
    if (output.defaultValue !== undefined && output.defaultValue !== null) {
        contents.defaultValue = output.defaultValue;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.variableType !== undefined && output.variableType !== null) {
        contents.variableType = output.variableType;
    }
    return contents;
};
const deserializeAws_json1_1VariableList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Variable(entry, context));
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
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
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
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