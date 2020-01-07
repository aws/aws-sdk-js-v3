"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateEntityToThingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.AssociateEntityToThing";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateEntityToThingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateEntityToThingCommand = serializeAws_json1_1AssociateEntityToThingCommand;
async function serializeAws_json1_1CreateFlowTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.CreateFlowTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFlowTemplateCommand = serializeAws_json1_1CreateFlowTemplateCommand;
async function serializeAws_json1_1CreateSystemInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.CreateSystemInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSystemInstanceCommand = serializeAws_json1_1CreateSystemInstanceCommand;
async function serializeAws_json1_1CreateSystemTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.CreateSystemTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSystemTemplateCommand = serializeAws_json1_1CreateSystemTemplateCommand;
async function serializeAws_json1_1DeleteFlowTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DeleteFlowTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFlowTemplateCommand = serializeAws_json1_1DeleteFlowTemplateCommand;
async function serializeAws_json1_1DeleteNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DeleteNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNamespaceCommand = serializeAws_json1_1DeleteNamespaceCommand;
async function serializeAws_json1_1DeleteSystemInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DeleteSystemInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSystemInstanceCommand = serializeAws_json1_1DeleteSystemInstanceCommand;
async function serializeAws_json1_1DeleteSystemTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DeleteSystemTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSystemTemplateCommand = serializeAws_json1_1DeleteSystemTemplateCommand;
async function serializeAws_json1_1DeploySystemInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DeploySystemInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeploySystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeploySystemInstanceCommand = serializeAws_json1_1DeploySystemInstanceCommand;
async function serializeAws_json1_1DeprecateFlowTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DeprecateFlowTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeprecateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeprecateFlowTemplateCommand = serializeAws_json1_1DeprecateFlowTemplateCommand;
async function serializeAws_json1_1DeprecateSystemTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DeprecateSystemTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeprecateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeprecateSystemTemplateCommand = serializeAws_json1_1DeprecateSystemTemplateCommand;
async function serializeAws_json1_1DescribeNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DescribeNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNamespaceCommand = serializeAws_json1_1DescribeNamespaceCommand;
async function serializeAws_json1_1DissociateEntityFromThingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.DissociateEntityFromThing";
    let body;
    body = JSON.stringify(serializeAws_json1_1DissociateEntityFromThingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DissociateEntityFromThingCommand = serializeAws_json1_1DissociateEntityFromThingCommand;
async function serializeAws_json1_1GetEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetEntitiesCommand = serializeAws_json1_1GetEntitiesCommand;
async function serializeAws_json1_1GetFlowTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetFlowTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFlowTemplateCommand = serializeAws_json1_1GetFlowTemplateCommand;
async function serializeAws_json1_1GetFlowTemplateRevisionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.GetFlowTemplateRevisions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRevisionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFlowTemplateRevisionsCommand = serializeAws_json1_1GetFlowTemplateRevisionsCommand;
async function serializeAws_json1_1GetNamespaceDeletionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNamespaceDeletionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNamespaceDeletionStatusCommand = serializeAws_json1_1GetNamespaceDeletionStatusCommand;
async function serializeAws_json1_1GetSystemInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetSystemInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSystemInstanceCommand = serializeAws_json1_1GetSystemInstanceCommand;
async function serializeAws_json1_1GetSystemTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetSystemTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSystemTemplateCommand = serializeAws_json1_1GetSystemTemplateCommand;
async function serializeAws_json1_1GetSystemTemplateRevisionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.GetSystemTemplateRevisions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRevisionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSystemTemplateRevisionsCommand = serializeAws_json1_1GetSystemTemplateRevisionsCommand;
async function serializeAws_json1_1GetUploadStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetUploadStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUploadStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUploadStatusCommand = serializeAws_json1_1GetUploadStatusCommand;
async function serializeAws_json1_1ListFlowExecutionMessagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.ListFlowExecutionMessages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFlowExecutionMessagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFlowExecutionMessagesCommand = serializeAws_json1_1ListFlowExecutionMessagesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1SearchEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchEntitiesCommand = serializeAws_json1_1SearchEntitiesCommand;
async function serializeAws_json1_1SearchFlowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.SearchFlowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFlowExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchFlowExecutionsCommand = serializeAws_json1_1SearchFlowExecutionsCommand;
async function serializeAws_json1_1SearchFlowTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchFlowTemplates";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFlowTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchFlowTemplatesCommand = serializeAws_json1_1SearchFlowTemplatesCommand;
async function serializeAws_json1_1SearchSystemInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.SearchSystemInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchSystemInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchSystemInstancesCommand = serializeAws_json1_1SearchSystemInstancesCommand;
async function serializeAws_json1_1SearchSystemTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.SearchSystemTemplates";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchSystemTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchSystemTemplatesCommand = serializeAws_json1_1SearchSystemTemplatesCommand;
async function serializeAws_json1_1SearchThingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchThings";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchThingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchThingsCommand = serializeAws_json1_1SearchThingsCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UndeploySystemInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.UndeploySystemInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UndeploySystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UndeploySystemInstanceCommand = serializeAws_json1_1UndeploySystemInstanceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateFlowTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.UpdateFlowTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFlowTemplateCommand = serializeAws_json1_1UpdateFlowTemplateCommand;
async function serializeAws_json1_1UpdateSystemTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.UpdateSystemTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSystemTemplateCommand = serializeAws_json1_1UpdateSystemTemplateCommand;
async function serializeAws_json1_1UploadEntityDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "IotThingsGraphFrontEndService.UploadEntityDefinitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1UploadEntityDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UploadEntityDefinitionsCommand = serializeAws_json1_1UploadEntityDefinitionsCommand;
async function deserializeAws_json1_1AssociateEntityToThingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateEntityToThingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateEntityToThingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateEntityToThingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateEntityToThingCommand = deserializeAws_json1_1AssociateEntityToThingCommand;
async function deserializeAws_json1_1AssociateEntityToThingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1CreateFlowTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFlowTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFlowTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFlowTemplateCommand = deserializeAws_json1_1CreateFlowTemplateCommand;
async function deserializeAws_json1_1CreateFlowTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.iot.thingsgraph.types#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1CreateSystemInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSystemInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSystemInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSystemInstanceCommand = deserializeAws_json1_1CreateSystemInstanceCommand;
async function deserializeAws_json1_1CreateSystemInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.iot.thingsgraph.types#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1CreateSystemTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSystemTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSystemTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSystemTemplateCommand = deserializeAws_json1_1CreateSystemTemplateCommand;
async function deserializeAws_json1_1CreateSystemTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeleteFlowTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFlowTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFlowTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFlowTemplateCommand = deserializeAws_json1_1DeleteFlowTemplateCommand;
async function deserializeAws_json1_1DeleteFlowTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeleteNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNamespaceCommand = deserializeAws_json1_1DeleteNamespaceCommand;
async function deserializeAws_json1_1DeleteNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeleteSystemInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSystemInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSystemInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSystemInstanceCommand = deserializeAws_json1_1DeleteSystemInstanceCommand;
async function deserializeAws_json1_1DeleteSystemInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeleteSystemTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSystemTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSystemTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSystemTemplateCommand = deserializeAws_json1_1DeleteSystemTemplateCommand;
async function deserializeAws_json1_1DeleteSystemTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeploySystemInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeploySystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeploySystemInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeploySystemInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeploySystemInstanceCommand = deserializeAws_json1_1DeploySystemInstanceCommand;
async function deserializeAws_json1_1DeploySystemInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeprecateFlowTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeprecateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeprecateFlowTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeprecateFlowTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeprecateFlowTemplateCommand = deserializeAws_json1_1DeprecateFlowTemplateCommand;
async function deserializeAws_json1_1DeprecateFlowTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DeprecateSystemTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeprecateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeprecateSystemTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeprecateSystemTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeprecateSystemTemplateCommand = deserializeAws_json1_1DeprecateSystemTemplateCommand;
async function deserializeAws_json1_1DeprecateSystemTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DescribeNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNamespaceCommand = deserializeAws_json1_1DescribeNamespaceCommand;
async function deserializeAws_json1_1DescribeNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1DissociateEntityFromThingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DissociateEntityFromThingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DissociateEntityFromThingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DissociateEntityFromThingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DissociateEntityFromThingCommand = deserializeAws_json1_1DissociateEntityFromThingCommand;
async function deserializeAws_json1_1DissociateEntityFromThingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetEntitiesCommand = deserializeAws_json1_1GetEntitiesCommand;
async function deserializeAws_json1_1GetEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetFlowTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFlowTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFlowTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFlowTemplateCommand = deserializeAws_json1_1GetFlowTemplateCommand;
async function deserializeAws_json1_1GetFlowTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetFlowTemplateRevisionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFlowTemplateRevisionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFlowTemplateRevisionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFlowTemplateRevisionsCommand = deserializeAws_json1_1GetFlowTemplateRevisionsCommand;
async function deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetNamespaceDeletionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNamespaceDeletionStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNamespaceDeletionStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNamespaceDeletionStatusCommand = deserializeAws_json1_1GetNamespaceDeletionStatusCommand;
async function deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetSystemInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSystemInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSystemInstanceCommand = deserializeAws_json1_1GetSystemInstanceCommand;
async function deserializeAws_json1_1GetSystemInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetSystemTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSystemTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSystemTemplateCommand = deserializeAws_json1_1GetSystemTemplateCommand;
async function deserializeAws_json1_1GetSystemTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetSystemTemplateRevisionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemTemplateRevisionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSystemTemplateRevisionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSystemTemplateRevisionsCommand = deserializeAws_json1_1GetSystemTemplateRevisionsCommand;
async function deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1GetUploadStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUploadStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUploadStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUploadStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUploadStatusCommand = deserializeAws_json1_1GetUploadStatusCommand;
async function deserializeAws_json1_1GetUploadStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1ListFlowExecutionMessagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFlowExecutionMessagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFlowExecutionMessagesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFlowExecutionMessagesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFlowExecutionMessagesCommand = deserializeAws_json1_1ListFlowExecutionMessagesCommand;
async function deserializeAws_json1_1ListFlowExecutionMessagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchEntitiesCommand = deserializeAws_json1_1SearchEntitiesCommand;
async function deserializeAws_json1_1SearchEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchFlowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchFlowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFlowExecutionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchFlowExecutionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchFlowExecutionsCommand = deserializeAws_json1_1SearchFlowExecutionsCommand;
async function deserializeAws_json1_1SearchFlowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchFlowTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchFlowTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFlowTemplatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchFlowTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchFlowTemplatesCommand = deserializeAws_json1_1SearchFlowTemplatesCommand;
async function deserializeAws_json1_1SearchFlowTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchSystemInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchSystemInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchSystemInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchSystemInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchSystemInstancesCommand = deserializeAws_json1_1SearchSystemInstancesCommand;
async function deserializeAws_json1_1SearchSystemInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchSystemTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchSystemTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchSystemTemplatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchSystemTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchSystemTemplatesCommand = deserializeAws_json1_1SearchSystemTemplatesCommand;
async function deserializeAws_json1_1SearchSystemTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1SearchThingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchThingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchThingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchThingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchThingsCommand = deserializeAws_json1_1SearchThingsCommand;
async function deserializeAws_json1_1SearchThingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1UndeploySystemInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UndeploySystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UndeploySystemInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UndeploySystemInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UndeploySystemInstanceCommand = deserializeAws_json1_1UndeploySystemInstanceCommand;
async function deserializeAws_json1_1UndeploySystemInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1UpdateFlowTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFlowTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFlowTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFlowTemplateCommand = deserializeAws_json1_1UpdateFlowTemplateCommand;
async function deserializeAws_json1_1UpdateFlowTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1UpdateSystemTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSystemTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSystemTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSystemTemplateCommand = deserializeAws_json1_1UpdateSystemTemplateCommand;
async function deserializeAws_json1_1UpdateSystemTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
async function deserializeAws_json1_1UploadEntityDefinitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UploadEntityDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UploadEntityDefinitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UploadEntityDefinitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UploadEntityDefinitionsCommand = deserializeAws_json1_1UploadEntityDefinitionsCommand;
async function deserializeAws_json1_1UploadEntityDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
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
const deserializeAws_json1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalFailureException(body, context);
    const contents = Object.assign({ name: "InternalFailureException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateEntityToThingRequest = (input, context) => {
    const bodyParams = {};
    if (input.entityId !== undefined) {
        bodyParams["entityId"] = input.entityId;
    }
    if (input.namespaceVersion !== undefined) {
        bodyParams["namespaceVersion"] = input.namespaceVersion;
    }
    if (input.thingName !== undefined) {
        bodyParams["thingName"] = input.thingName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFlowTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.compatibleNamespaceVersion !== undefined) {
        bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
    }
    if (input.definition !== undefined) {
        bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(input.definition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSystemInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.definition !== undefined) {
        bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(input.definition, context);
    }
    if (input.flowActionsRoleArn !== undefined) {
        bodyParams["flowActionsRoleArn"] = input.flowActionsRoleArn;
    }
    if (input.greengrassGroupName !== undefined) {
        bodyParams["greengrassGroupName"] = input.greengrassGroupName;
    }
    if (input.metricsConfiguration !== undefined) {
        bodyParams["metricsConfiguration"] = serializeAws_json1_1MetricsConfiguration(input.metricsConfiguration, context);
    }
    if (input.s3BucketName !== undefined) {
        bodyParams["s3BucketName"] = input.s3BucketName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.target !== undefined) {
        bodyParams["target"] = input.target;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSystemTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.compatibleNamespaceVersion !== undefined) {
        bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
    }
    if (input.definition !== undefined) {
        bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(input.definition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFlowTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNamespaceRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DeleteSystemInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSystemTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploySystemInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeprecateFlowTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeprecateSystemTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.namespaceName !== undefined) {
        bodyParams["namespaceName"] = input.namespaceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DissociateEntityFromThingRequest = (input, context) => {
    const bodyParams = {};
    if (input.entityType !== undefined) {
        bodyParams["entityType"] = input.entityType;
    }
    if (input.thingName !== undefined) {
        bodyParams["thingName"] = input.thingName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ids !== undefined) {
        bodyParams["ids"] = serializeAws_json1_1Urns(input.ids, context);
    }
    if (input.namespaceVersion !== undefined) {
        bodyParams["namespaceVersion"] = input.namespaceVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFlowTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.revisionNumber !== undefined) {
        bodyParams["revisionNumber"] = input.revisionNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFlowTemplateRevisionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetNamespaceDeletionStatusRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetSystemInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSystemTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.revisionNumber !== undefined) {
        bodyParams["revisionNumber"] = input.revisionNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSystemTemplateRevisionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUploadStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.uploadId !== undefined) {
        bodyParams["uploadId"] = input.uploadId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFlowExecutionMessagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.flowExecutionId !== undefined) {
        bodyParams["flowExecutionId"] = input.flowExecutionId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.entityTypes !== undefined) {
        bodyParams["entityTypes"] = serializeAws_json1_1EntityTypes(input.entityTypes, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1EntityFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.namespaceVersion !== undefined) {
        bodyParams["namespaceVersion"] = input.namespaceVersion;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchFlowExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.flowExecutionId !== undefined) {
        bodyParams["flowExecutionId"] = input.flowExecutionId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.systemInstanceId !== undefined) {
        bodyParams["systemInstanceId"] = input.systemInstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchFlowTemplatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1FlowTemplateFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchSystemInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1SystemInstanceFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchSystemTemplatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1SystemTemplateFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchThingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.entityId !== undefined) {
        bodyParams["entityId"] = input.entityId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.namespaceVersion !== undefined) {
        bodyParams["namespaceVersion"] = input.namespaceVersion;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UndeploySystemInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFlowTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.compatibleNamespaceVersion !== undefined) {
        bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
    }
    if (input.definition !== undefined) {
        bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(input.definition, context);
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSystemTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.compatibleNamespaceVersion !== undefined) {
        bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
    }
    if (input.definition !== undefined) {
        bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(input.definition, context);
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1UploadEntityDefinitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.deprecateExistingEntities !== undefined) {
        bodyParams["deprecateExistingEntities"] = input.deprecateExistingEntities;
    }
    if (input.document !== undefined) {
        bodyParams["document"] = serializeAws_json1_1DefinitionDocument(input.document, context);
    }
    if (input.syncWithPublicNamespace !== undefined) {
        bodyParams["syncWithPublicNamespace"] = input.syncWithPublicNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
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
const serializeAws_json1_1DefinitionDocument = (input, context) => {
    const bodyParams = {};
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.text !== undefined) {
        bodyParams["text"] = input.text;
    }
    return bodyParams;
};
const serializeAws_json1_1Urns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EntityFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = serializeAws_json1_1EntityFilterValues(input.value, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EntityFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EntityFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EntityFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1EntityTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FlowTemplateFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = serializeAws_json1_1FlowTemplateFilterValues(input.value, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FlowTemplateFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FlowTemplateFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FlowTemplateFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MetricsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.cloudMetricEnabled !== undefined) {
        bodyParams["cloudMetricEnabled"] = input.cloudMetricEnabled;
    }
    if (input.metricRuleRoleArn !== undefined) {
        bodyParams["metricRuleRoleArn"] = input.metricRuleRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SystemInstanceFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = serializeAws_json1_1SystemInstanceFilterValues(input.value, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SystemInstanceFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SystemInstanceFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SystemInstanceFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SystemTemplateFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = serializeAws_json1_1SystemTemplateFilterValues(input.value, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SystemTemplateFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SystemTemplateFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SystemTemplateFilter(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AssociateEntityToThingResponse = (output, context) => {
    let contents = {
        __type: "AssociateEntityToThingResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateFlowTemplateResponse = (output, context) => {
    let contents = {
        __type: "CreateFlowTemplateResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1FlowTemplateSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateSystemInstanceResponse = (output, context) => {
    let contents = {
        __type: "CreateSystemInstanceResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemInstanceSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateSystemTemplateResponse = (output, context) => {
    let contents = {
        __type: "CreateSystemTemplateResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemTemplateSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteFlowTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeleteFlowTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteNamespaceResponse = (output, context) => {
    let contents = {
        __type: "DeleteNamespaceResponse",
        namespaceArn: undefined,
        namespaceName: undefined
    };
    if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
        contents.namespaceArn = output.namespaceArn;
    }
    if (output.namespaceName !== undefined && output.namespaceName !== null) {
        contents.namespaceName = output.namespaceName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSystemInstanceResponse = (output, context) => {
    let contents = {
        __type: "DeleteSystemInstanceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSystemTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeleteSystemTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeploySystemInstanceResponse = (output, context) => {
    let contents = {
        __type: "DeploySystemInstanceResponse",
        greengrassDeploymentId: undefined,
        summary: undefined
    };
    if (output.greengrassDeploymentId !== undefined &&
        output.greengrassDeploymentId !== null) {
        contents.greengrassDeploymentId = output.greengrassDeploymentId;
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemInstanceSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1DeprecateFlowTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeprecateFlowTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeprecateSystemTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeprecateSystemTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeNamespaceResponse = (output, context) => {
    let contents = {
        __type: "DescribeNamespaceResponse",
        namespaceArn: undefined,
        namespaceName: undefined,
        namespaceVersion: undefined,
        trackingNamespaceName: undefined,
        trackingNamespaceVersion: undefined
    };
    if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
        contents.namespaceArn = output.namespaceArn;
    }
    if (output.namespaceName !== undefined && output.namespaceName !== null) {
        contents.namespaceName = output.namespaceName;
    }
    if (output.namespaceVersion !== undefined &&
        output.namespaceVersion !== null) {
        contents.namespaceVersion = output.namespaceVersion;
    }
    if (output.trackingNamespaceName !== undefined &&
        output.trackingNamespaceName !== null) {
        contents.trackingNamespaceName = output.trackingNamespaceName;
    }
    if (output.trackingNamespaceVersion !== undefined &&
        output.trackingNamespaceVersion !== null) {
        contents.trackingNamespaceVersion = output.trackingNamespaceVersion;
    }
    return contents;
};
const deserializeAws_json1_1DissociateEntityFromThingResponse = (output, context) => {
    let contents = {
        __type: "DissociateEntityFromThingResponse"
    };
    return contents;
};
const deserializeAws_json1_1GetEntitiesResponse = (output, context) => {
    let contents = {
        __type: "GetEntitiesResponse",
        descriptions: undefined
    };
    if (output.descriptions !== undefined && output.descriptions !== null) {
        contents.descriptions = deserializeAws_json1_1EntityDescriptions(output.descriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFlowTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetFlowTemplateResponse",
        description: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = deserializeAws_json1_1FlowTemplateDescription(output.description, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFlowTemplateRevisionsResponse = (output, context) => {
    let contents = {
        __type: "GetFlowTemplateRevisionsResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1GetNamespaceDeletionStatusResponse = (output, context) => {
    let contents = {
        __type: "GetNamespaceDeletionStatusResponse",
        errorCode: undefined,
        errorMessage: undefined,
        namespaceArn: undefined,
        namespaceName: undefined,
        status: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
        contents.namespaceArn = output.namespaceArn;
    }
    if (output.namespaceName !== undefined && output.namespaceName !== null) {
        contents.namespaceName = output.namespaceName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1GetSystemInstanceResponse = (output, context) => {
    let contents = {
        __type: "GetSystemInstanceResponse",
        description: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = deserializeAws_json1_1SystemInstanceDescription(output.description, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSystemTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetSystemTemplateResponse",
        description: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = deserializeAws_json1_1SystemTemplateDescription(output.description, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSystemTemplateRevisionsResponse = (output, context) => {
    let contents = {
        __type: "GetSystemTemplateRevisionsResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUploadStatusResponse = (output, context) => {
    let contents = {
        __type: "GetUploadStatusResponse",
        createdDate: undefined,
        failureReason: undefined,
        namespaceArn: undefined,
        namespaceName: undefined,
        namespaceVersion: undefined,
        uploadId: undefined,
        uploadStatus: undefined
    };
    if (output.createdDate !== undefined && output.createdDate !== null) {
        contents.createdDate = new Date(Math.round(output.createdDate * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = deserializeAws_json1_1StringList(output.failureReason, context);
    }
    if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
        contents.namespaceArn = output.namespaceArn;
    }
    if (output.namespaceName !== undefined && output.namespaceName !== null) {
        contents.namespaceName = output.namespaceName;
    }
    if (output.namespaceVersion !== undefined &&
        output.namespaceVersion !== null) {
        contents.namespaceVersion = output.namespaceVersion;
    }
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    if (output.uploadStatus !== undefined && output.uploadStatus !== null) {
        contents.uploadStatus = output.uploadStatus;
    }
    return contents;
};
const deserializeAws_json1_1ListFlowExecutionMessagesResponse = (output, context) => {
    let contents = {
        __type: "ListFlowExecutionMessagesResponse",
        messages: undefined,
        nextToken: undefined
    };
    if (output.messages !== undefined && output.messages !== null) {
        contents.messages = deserializeAws_json1_1FlowExecutionMessages(output.messages, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        nextToken: undefined,
        tags: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchEntitiesResponse = (output, context) => {
    let contents = {
        __type: "SearchEntitiesResponse",
        descriptions: undefined,
        nextToken: undefined
    };
    if (output.descriptions !== undefined && output.descriptions !== null) {
        contents.descriptions = deserializeAws_json1_1EntityDescriptions(output.descriptions, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1SearchFlowExecutionsResponse = (output, context) => {
    let contents = {
        __type: "SearchFlowExecutionsResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1FlowExecutionSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchFlowTemplatesResponse = (output, context) => {
    let contents = {
        __type: "SearchFlowTemplatesResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchSystemInstancesResponse = (output, context) => {
    let contents = {
        __type: "SearchSystemInstancesResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1SystemInstanceSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchSystemTemplatesResponse = (output, context) => {
    let contents = {
        __type: "SearchSystemTemplatesResponse",
        nextToken: undefined,
        summaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchThingsResponse = (output, context) => {
    let contents = {
        __type: "SearchThingsResponse",
        nextToken: undefined,
        things: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.things !== undefined && output.things !== null) {
        contents.things = deserializeAws_json1_1Things(output.things, context);
    }
    return contents;
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UndeploySystemInstanceResponse = (output, context) => {
    let contents = {
        __type: "UndeploySystemInstanceResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemInstanceSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateFlowTemplateResponse = (output, context) => {
    let contents = {
        __type: "UpdateFlowTemplateResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1FlowTemplateSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateSystemTemplateResponse = (output, context) => {
    let contents = {
        __type: "UpdateSystemTemplateResponse",
        summary: undefined
    };
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemTemplateSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1UploadEntityDefinitionsResponse = (output, context) => {
    let contents = {
        __type: "UploadEntityDefinitionsResponse",
        uploadId: undefined
    };
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1DefinitionDocument = (output, context) => {
    let contents = {
        __type: "DefinitionDocument",
        language: undefined,
        text: undefined
    };
    if (output.language !== undefined && output.language !== null) {
        contents.language = output.language;
    }
    if (output.text !== undefined && output.text !== null) {
        contents.text = output.text;
    }
    return contents;
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    let contents = {
        __type: "InternalFailureException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
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
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1EntityDescription = (output, context) => {
    let contents = {
        __type: "EntityDescription",
        arn: undefined,
        createdAt: undefined,
        definition: undefined,
        id: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = deserializeAws_json1_1DefinitionDocument(output.definition, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1EntityDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntityDescription(entry, context));
};
const deserializeAws_json1_1Thing = (output, context) => {
    let contents = {
        __type: "Thing",
        thingArn: undefined,
        thingName: undefined
    };
    if (output.thingArn !== undefined && output.thingArn !== null) {
        contents.thingArn = output.thingArn;
    }
    if (output.thingName !== undefined && output.thingName !== null) {
        contents.thingName = output.thingName;
    }
    return contents;
};
const deserializeAws_json1_1Things = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Thing(entry, context));
};
const deserializeAws_json1_1DependencyRevision = (output, context) => {
    let contents = {
        __type: "DependencyRevision",
        id: undefined,
        revisionNumber: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
        contents.revisionNumber = output.revisionNumber;
    }
    return contents;
};
const deserializeAws_json1_1DependencyRevisions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DependencyRevision(entry, context));
};
const deserializeAws_json1_1FlowExecutionMessage = (output, context) => {
    let contents = {
        __type: "FlowExecutionMessage",
        eventType: undefined,
        messageId: undefined,
        payload: undefined,
        timestamp: undefined
    };
    if (output.eventType !== undefined && output.eventType !== null) {
        contents.eventType = output.eventType;
    }
    if (output.messageId !== undefined && output.messageId !== null) {
        contents.messageId = output.messageId;
    }
    if (output.payload !== undefined && output.payload !== null) {
        contents.payload = output.payload;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = new Date(Math.round(output.timestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1FlowExecutionMessages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FlowExecutionMessage(entry, context));
};
const deserializeAws_json1_1FlowExecutionSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FlowExecutionSummary(entry, context));
};
const deserializeAws_json1_1FlowExecutionSummary = (output, context) => {
    let contents = {
        __type: "FlowExecutionSummary",
        createdAt: undefined,
        flowExecutionId: undefined,
        flowTemplateId: undefined,
        status: undefined,
        systemInstanceId: undefined,
        updatedAt: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.flowExecutionId !== undefined && output.flowExecutionId !== null) {
        contents.flowExecutionId = output.flowExecutionId;
    }
    if (output.flowTemplateId !== undefined && output.flowTemplateId !== null) {
        contents.flowTemplateId = output.flowTemplateId;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.systemInstanceId !== undefined &&
        output.systemInstanceId !== null) {
        contents.systemInstanceId = output.systemInstanceId;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1FlowTemplateDescription = (output, context) => {
    let contents = {
        __type: "FlowTemplateDescription",
        definition: undefined,
        summary: undefined,
        validatedNamespaceVersion: undefined
    };
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = deserializeAws_json1_1DefinitionDocument(output.definition, context);
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1FlowTemplateSummary(output.summary, context);
    }
    if (output.validatedNamespaceVersion !== undefined &&
        output.validatedNamespaceVersion !== null) {
        contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
    }
    return contents;
};
const deserializeAws_json1_1FlowTemplateSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FlowTemplateSummary(entry, context));
};
const deserializeAws_json1_1FlowTemplateSummary = (output, context) => {
    let contents = {
        __type: "FlowTemplateSummary",
        arn: undefined,
        createdAt: undefined,
        id: undefined,
        revisionNumber: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
        contents.revisionNumber = output.revisionNumber;
    }
    return contents;
};
const deserializeAws_json1_1MetricsConfiguration = (output, context) => {
    let contents = {
        __type: "MetricsConfiguration",
        cloudMetricEnabled: undefined,
        metricRuleRoleArn: undefined
    };
    if (output.cloudMetricEnabled !== undefined &&
        output.cloudMetricEnabled !== null) {
        contents.cloudMetricEnabled = output.cloudMetricEnabled;
    }
    if (output.metricRuleRoleArn !== undefined &&
        output.metricRuleRoleArn !== null) {
        contents.metricRuleRoleArn = output.metricRuleRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1SystemInstanceDescription = (output, context) => {
    let contents = {
        __type: "SystemInstanceDescription",
        definition: undefined,
        flowActionsRoleArn: undefined,
        metricsConfiguration: undefined,
        s3BucketName: undefined,
        summary: undefined,
        validatedDependencyRevisions: undefined,
        validatedNamespaceVersion: undefined
    };
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = deserializeAws_json1_1DefinitionDocument(output.definition, context);
    }
    if (output.flowActionsRoleArn !== undefined &&
        output.flowActionsRoleArn !== null) {
        contents.flowActionsRoleArn = output.flowActionsRoleArn;
    }
    if (output.metricsConfiguration !== undefined &&
        output.metricsConfiguration !== null) {
        contents.metricsConfiguration = deserializeAws_json1_1MetricsConfiguration(output.metricsConfiguration, context);
    }
    if (output.s3BucketName !== undefined && output.s3BucketName !== null) {
        contents.s3BucketName = output.s3BucketName;
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemInstanceSummary(output.summary, context);
    }
    if (output.validatedDependencyRevisions !== undefined &&
        output.validatedDependencyRevisions !== null) {
        contents.validatedDependencyRevisions = deserializeAws_json1_1DependencyRevisions(output.validatedDependencyRevisions, context);
    }
    if (output.validatedNamespaceVersion !== undefined &&
        output.validatedNamespaceVersion !== null) {
        contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
    }
    return contents;
};
const deserializeAws_json1_1SystemInstanceSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SystemInstanceSummary(entry, context));
};
const deserializeAws_json1_1SystemInstanceSummary = (output, context) => {
    let contents = {
        __type: "SystemInstanceSummary",
        arn: undefined,
        createdAt: undefined,
        greengrassGroupId: undefined,
        greengrassGroupName: undefined,
        greengrassGroupVersionId: undefined,
        id: undefined,
        status: undefined,
        target: undefined,
        updatedAt: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.greengrassGroupId !== undefined &&
        output.greengrassGroupId !== null) {
        contents.greengrassGroupId = output.greengrassGroupId;
    }
    if (output.greengrassGroupName !== undefined &&
        output.greengrassGroupName !== null) {
        contents.greengrassGroupName = output.greengrassGroupName;
    }
    if (output.greengrassGroupVersionId !== undefined &&
        output.greengrassGroupVersionId !== null) {
        contents.greengrassGroupVersionId = output.greengrassGroupVersionId;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.target !== undefined && output.target !== null) {
        contents.target = output.target;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1SystemTemplateDescription = (output, context) => {
    let contents = {
        __type: "SystemTemplateDescription",
        definition: undefined,
        summary: undefined,
        validatedNamespaceVersion: undefined
    };
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = deserializeAws_json1_1DefinitionDocument(output.definition, context);
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1SystemTemplateSummary(output.summary, context);
    }
    if (output.validatedNamespaceVersion !== undefined &&
        output.validatedNamespaceVersion !== null) {
        contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
    }
    return contents;
};
const deserializeAws_json1_1SystemTemplateSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SystemTemplateSummary(entry, context));
};
const deserializeAws_json1_1SystemTemplateSummary = (output, context) => {
    let contents = {
        __type: "SystemTemplateSummary",
        arn: undefined,
        createdAt: undefined,
        id: undefined,
        revisionNumber: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
        contents.revisionNumber = output.revisionNumber;
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