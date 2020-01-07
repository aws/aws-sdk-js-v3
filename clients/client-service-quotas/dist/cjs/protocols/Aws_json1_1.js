"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateServiceQuotaTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.AssociateServiceQuotaTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateServiceQuotaTemplateCommand = serializeAws_json1_1AssociateServiceQuotaTemplateCommand;
async function serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
async function serializeAws_json1_1DisassociateServiceQuotaTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = serializeAws_json1_1DisassociateServiceQuotaTemplateCommand;
async function serializeAws_json1_1GetAWSDefaultServiceQuotaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAWSDefaultServiceQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = serializeAws_json1_1GetAWSDefaultServiceQuotaCommand;
async function serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand;
async function serializeAws_json1_1GetRequestedServiceQuotaChangeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.GetRequestedServiceQuotaChange";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRequestedServiceQuotaChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = serializeAws_json1_1GetRequestedServiceQuotaChangeCommand;
async function serializeAws_json1_1GetServiceQuotaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ServiceQuotasV20190624.GetServiceQuota";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServiceQuotaCommand = serializeAws_json1_1GetServiceQuotaCommand;
async function serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand;
async function serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAWSDefaultServiceQuotasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = serializeAws_json1_1ListAWSDefaultServiceQuotasCommand;
async function serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand;
async function serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand;
async function serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand;
async function serializeAws_json1_1ListServiceQuotasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ServiceQuotasV20190624.ListServiceQuotas";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceQuotasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServiceQuotasCommand = serializeAws_json1_1ListServiceQuotasCommand;
async function serializeAws_json1_1ListServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ServiceQuotasV20190624.ListServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
async function serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand;
async function serializeAws_json1_1RequestServiceQuotaIncreaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ServiceQuotasV20190624.RequestServiceQuotaIncrease";
    let body;
    body = JSON.stringify(serializeAws_json1_1RequestServiceQuotaIncreaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RequestServiceQuotaIncreaseCommand = serializeAws_json1_1RequestServiceQuotaIncreaseCommand;
async function deserializeAws_json1_1AssociateServiceQuotaTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateServiceQuotaTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateServiceQuotaTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = deserializeAws_json1_1AssociateServiceQuotaTemplateCommand;
async function deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.servicequotas#OrganizationNotInAllFeaturesModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
async function deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateServiceQuotaTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand;
async function deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaTemplateNotInUseException":
        case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAWSDefaultServiceQuotaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand;
async function deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAssociationForServiceQuotaTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand;
async function deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaTemplateNotInUseException":
        case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRequestedServiceQuotaChangeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand;
async function deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetServiceQuotaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServiceQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceQuotaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceQuotaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServiceQuotaCommand = deserializeAws_json1_1GetServiceQuotaCommand;
async function deserializeAws_json1_1GetServiceQuotaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceQuotaIncreaseRequestFromTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand;
async function deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAWSDefaultServiceQuotasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand;
async function deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRequestedServiceQuotaChangeHistoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand;
async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand;
async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServiceQuotaIncreaseRequestsInTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand;
async function deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListServiceQuotasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServiceQuotasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceQuotasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServiceQuotasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServiceQuotasCommand = deserializeAws_json1_1ListServiceQuotasCommand;
async function deserializeAws_json1_1ListServiceQuotasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListServicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServicesCommand = deserializeAws_json1_1ListServicesCommand;
async function deserializeAws_json1_1ListServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutServiceQuotaIncreaseRequestIntoTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand;
async function deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QuotaExceededException":
        case "com.amazonaws.servicequotas#QuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RequestServiceQuotaIncreaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RequestServiceQuotaIncreaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = deserializeAws_json1_1RequestServiceQuotaIncreaseCommand;
async function deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.servicequotas#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QuotaExceededException":
        case "com.amazonaws.servicequotas#QuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.servicequotas#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AWSServiceAccessNotEnabledException(body, context);
    const contents = Object.assign({ name: "AWSServiceAccessNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DependencyAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DependencyAccessDeniedException(body, context);
    const contents = Object.assign({ name: "DependencyAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IllegalArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IllegalArgumentException(body, context);
    const contents = Object.assign({ name: "IllegalArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
    const contents = Object.assign({ name: "InvalidPaginationTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = Object.assign({ name: "InvalidResourceStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
    const contents = Object.assign({ name: "NoAvailableOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchResourceException(body, context);
    const contents = Object.assign({ name: "NoSuchResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
    const contents = Object.assign({ name: "OrganizationNotInAllFeaturesModeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1QuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1QuotaExceededException(body, context);
    const contents = Object.assign({ name: "QuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = Object.assign({ name: "ServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaTemplateNotInUseException(body, context);
    const contents = Object.assign({ name: "ServiceQuotaTemplateNotInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TemplatesNotAvailableInRegionException(body, context);
    const contents = Object.assign({ name: "TemplatesNotAvailableInRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateServiceQuotaTemplateRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateServiceQuotaTemplateRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetAWSDefaultServiceQuotaRequest = (input, context) => {
    const bodyParams = {};
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetRequestedServiceQuotaChangeRequest = (input, context) => {
    const bodyParams = {};
    if (input.RequestId !== undefined) {
        bodyParams["RequestId"] = input.RequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServiceQuotaRequest = (input, context) => {
    const bodyParams = {};
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAWSDefaultServiceQuotasRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServiceQuotasRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.DesiredValue !== undefined) {
        bodyParams["DesiredValue"] = input.DesiredValue;
    }
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const serializeAws_json1_1RequestServiceQuotaIncreaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.DesiredValue !== undefined) {
        bodyParams["DesiredValue"] = input.DesiredValue;
    }
    if (input.QuotaCode !== undefined) {
        bodyParams["QuotaCode"] = input.QuotaCode;
    }
    if (input.ServiceCode !== undefined) {
        bodyParams["ServiceCode"] = input.ServiceCode;
    }
    return bodyParams;
};
const deserializeAws_json1_1AWSServiceAccessNotEnabledException = (output, context) => {
    let contents = {
        __type: "AWSServiceAccessNotEnabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociateServiceQuotaTemplateResponse = (output, context) => {
    let contents = {
        __type: "AssociateServiceQuotaTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1DependencyAccessDeniedException = (output, context) => {
    let contents = {
        __type: "DependencyAccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse = (output, context) => {
    let contents = {
        __type: "DisassociateServiceQuotaTemplateResponse"
    };
    return contents;
};
const deserializeAws_json1_1ErrorReason = (output, context) => {
    let contents = {
        __type: "ErrorReason",
        ErrorCode: undefined,
        ErrorMessage: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    return contents;
};
const deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse = (output, context) => {
    let contents = {
        __type: "GetAWSDefaultServiceQuotaResponse",
        Quota: undefined
    };
    if (output.Quota !== undefined && output.Quota !== null) {
        contents.Quota = deserializeAws_json1_1ServiceQuota(output.Quota, context);
    }
    return contents;
};
const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetAssociationForServiceQuotaTemplateResponse",
        ServiceQuotaTemplateAssociationStatus: undefined
    };
    if (output.ServiceQuotaTemplateAssociationStatus !== undefined &&
        output.ServiceQuotaTemplateAssociationStatus !== null) {
        contents.ServiceQuotaTemplateAssociationStatus =
            output.ServiceQuotaTemplateAssociationStatus;
    }
    return contents;
};
const deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse = (output, context) => {
    let contents = {
        __type: "GetRequestedServiceQuotaChangeResponse",
        RequestedQuota: undefined
    };
    if (output.RequestedQuota !== undefined && output.RequestedQuota !== null) {
        contents.RequestedQuota = deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetServiceQuotaIncreaseRequestFromTemplateResponse",
        ServiceQuotaIncreaseRequestInTemplate: undefined
    };
    if (output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
        output.ServiceQuotaIncreaseRequestInTemplate !== null) {
        contents.ServiceQuotaIncreaseRequestInTemplate = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServiceQuotaResponse = (output, context) => {
    let contents = {
        __type: "GetServiceQuotaResponse",
        Quota: undefined
    };
    if (output.Quota !== undefined && output.Quota !== null) {
        contents.Quota = deserializeAws_json1_1ServiceQuota(output.Quota, context);
    }
    return contents;
};
const deserializeAws_json1_1IllegalArgumentException = (output, context) => {
    let contents = {
        __type: "IllegalArgumentException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenException = (output, context) => {
    let contents = {
        __type: "InvalidPaginationTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    let contents = {
        __type: "InvalidResourceStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse = (output, context) => {
    let contents = {
        __type: "ListAWSDefaultServiceQuotasResponse",
        NextToken: undefined,
        Quotas: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Quotas !== undefined && output.Quotas !== null) {
        contents.Quotas = deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (output, context) => {
    let contents = {
        __type: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse",
        NextToken: undefined,
        RequestedQuotas: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RequestedQuotas !== undefined && output.RequestedQuotas !== null) {
        contents.RequestedQuotas = deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse = (output, context) => {
    let contents = {
        __type: "ListRequestedServiceQuotaChangeHistoryResponse",
        NextToken: undefined,
        RequestedQuotas: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RequestedQuotas !== undefined && output.RequestedQuotas !== null) {
        contents.RequestedQuotas = deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context);
    }
    return contents;
};
const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse = (output, context) => {
    let contents = {
        __type: "ListServiceQuotaIncreaseRequestsInTemplateResponse",
        NextToken: undefined,
        ServiceQuotaIncreaseRequestInTemplateList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ServiceQuotaIncreaseRequestInTemplateList !== undefined &&
        output.ServiceQuotaIncreaseRequestInTemplateList !== null) {
        contents.ServiceQuotaIncreaseRequestInTemplateList = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList(output.ServiceQuotaIncreaseRequestInTemplateList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListServiceQuotasResponse = (output, context) => {
    let contents = {
        __type: "ListServiceQuotasResponse",
        NextToken: undefined,
        Quotas: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Quotas !== undefined && output.Quotas !== null) {
        contents.Quotas = deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context);
    }
    return contents;
};
const deserializeAws_json1_1ListServicesResponse = (output, context) => {
    let contents = {
        __type: "ListServicesResponse",
        NextToken: undefined,
        Services: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Services !== undefined && output.Services !== null) {
        contents.Services = deserializeAws_json1_1ServiceInfoListDefinition(output.Services, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricDimensionsMapDefinition = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1MetricInfo = (output, context) => {
    let contents = {
        __type: "MetricInfo",
        MetricDimensions: undefined,
        MetricName: undefined,
        MetricNamespace: undefined,
        MetricStatisticRecommendation: undefined
    };
    if (output.MetricDimensions !== undefined &&
        output.MetricDimensions !== null) {
        contents.MetricDimensions = deserializeAws_json1_1MetricDimensionsMapDefinition(output.MetricDimensions, context);
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.MetricNamespace !== undefined && output.MetricNamespace !== null) {
        contents.MetricNamespace = output.MetricNamespace;
    }
    if (output.MetricStatisticRecommendation !== undefined &&
        output.MetricStatisticRecommendation !== null) {
        contents.MetricStatisticRecommendation =
            output.MetricStatisticRecommendation;
    }
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationException = (output, context) => {
    let contents = {
        __type: "NoAvailableOrganizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchResourceException = (output, context) => {
    let contents = {
        __type: "NoSuchResourceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (output, context) => {
    let contents = {
        __type: "OrganizationNotInAllFeaturesModeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse = (output, context) => {
    let contents = {
        __type: "PutServiceQuotaIncreaseRequestIntoTemplateResponse",
        ServiceQuotaIncreaseRequestInTemplate: undefined
    };
    if (output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
        output.ServiceQuotaIncreaseRequestInTemplate !== null) {
        contents.ServiceQuotaIncreaseRequestInTemplate = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1QuotaExceededException = (output, context) => {
    let contents = {
        __type: "QuotaExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1QuotaPeriod = (output, context) => {
    let contents = {
        __type: "QuotaPeriod",
        PeriodUnit: undefined,
        PeriodValue: undefined
    };
    if (output.PeriodUnit !== undefined && output.PeriodUnit !== null) {
        contents.PeriodUnit = output.PeriodUnit;
    }
    if (output.PeriodValue !== undefined && output.PeriodValue !== null) {
        contents.PeriodValue = output.PeriodValue;
    }
    return contents;
};
const deserializeAws_json1_1RequestServiceQuotaIncreaseResponse = (output, context) => {
    let contents = {
        __type: "RequestServiceQuotaIncreaseResponse",
        RequestedQuota: undefined
    };
    if (output.RequestedQuota !== undefined && output.RequestedQuota !== null) {
        contents.RequestedQuota = deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context);
    }
    return contents;
};
const deserializeAws_json1_1RequestedServiceQuotaChange = (output, context) => {
    let contents = {
        __type: "RequestedServiceQuotaChange",
        CaseId: undefined,
        Created: undefined,
        DesiredValue: undefined,
        GlobalQuota: undefined,
        Id: undefined,
        LastUpdated: undefined,
        QuotaArn: undefined,
        QuotaCode: undefined,
        QuotaName: undefined,
        Requester: undefined,
        ServiceCode: undefined,
        ServiceName: undefined,
        Status: undefined,
        Unit: undefined
    };
    if (output.CaseId !== undefined && output.CaseId !== null) {
        contents.CaseId = output.CaseId;
    }
    if (output.Created !== undefined && output.Created !== null) {
        contents.Created = new Date(Math.round(output.Created * 1000));
    }
    if (output.DesiredValue !== undefined && output.DesiredValue !== null) {
        contents.DesiredValue = output.DesiredValue;
    }
    if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
        contents.GlobalQuota = output.GlobalQuota;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.QuotaArn !== undefined && output.QuotaArn !== null) {
        contents.QuotaArn = output.QuotaArn;
    }
    if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
        contents.QuotaCode = output.QuotaCode;
    }
    if (output.QuotaName !== undefined && output.QuotaName !== null) {
        contents.QuotaName = output.QuotaName;
    }
    if (output.Requester !== undefined && output.Requester !== null) {
        contents.Requester = output.Requester;
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    if (output.ServiceName !== undefined && output.ServiceName !== null) {
        contents.ServiceName = output.ServiceName;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RequestedServiceQuotaChange(entry, context));
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    let contents = {
        __type: "ServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceInfo = (output, context) => {
    let contents = {
        __type: "ServiceInfo",
        ServiceCode: undefined,
        ServiceName: undefined
    };
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    if (output.ServiceName !== undefined && output.ServiceName !== null) {
        contents.ServiceName = output.ServiceName;
    }
    return contents;
};
const deserializeAws_json1_1ServiceInfoListDefinition = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceInfo(entry, context));
};
const deserializeAws_json1_1ServiceQuota = (output, context) => {
    let contents = {
        __type: "ServiceQuota",
        Adjustable: undefined,
        ErrorReason: undefined,
        GlobalQuota: undefined,
        Period: undefined,
        QuotaArn: undefined,
        QuotaCode: undefined,
        QuotaName: undefined,
        ServiceCode: undefined,
        ServiceName: undefined,
        Unit: undefined,
        UsageMetric: undefined,
        Value: undefined
    };
    if (output.Adjustable !== undefined && output.Adjustable !== null) {
        contents.Adjustable = output.Adjustable;
    }
    if (output.ErrorReason !== undefined && output.ErrorReason !== null) {
        contents.ErrorReason = deserializeAws_json1_1ErrorReason(output.ErrorReason, context);
    }
    if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
        contents.GlobalQuota = output.GlobalQuota;
    }
    if (output.Period !== undefined && output.Period !== null) {
        contents.Period = deserializeAws_json1_1QuotaPeriod(output.Period, context);
    }
    if (output.QuotaArn !== undefined && output.QuotaArn !== null) {
        contents.QuotaArn = output.QuotaArn;
    }
    if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
        contents.QuotaCode = output.QuotaCode;
    }
    if (output.QuotaName !== undefined && output.QuotaName !== null) {
        contents.QuotaName = output.QuotaName;
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    if (output.ServiceName !== undefined && output.ServiceName !== null) {
        contents.ServiceName = output.ServiceName;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    if (output.UsageMetric !== undefined && output.UsageMetric !== null) {
        contents.UsageMetric = deserializeAws_json1_1MetricInfo(output.UsageMetric, context);
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate = (output, context) => {
    let contents = {
        __type: "ServiceQuotaIncreaseRequestInTemplate",
        AwsRegion: undefined,
        DesiredValue: undefined,
        GlobalQuota: undefined,
        QuotaCode: undefined,
        QuotaName: undefined,
        ServiceCode: undefined,
        ServiceName: undefined,
        Unit: undefined
    };
    if (output.AwsRegion !== undefined && output.AwsRegion !== null) {
        contents.AwsRegion = output.AwsRegion;
    }
    if (output.DesiredValue !== undefined && output.DesiredValue !== null) {
        contents.DesiredValue = output.DesiredValue;
    }
    if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
        contents.GlobalQuota = output.GlobalQuota;
    }
    if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
        contents.QuotaCode = output.QuotaCode;
    }
    if (output.QuotaName !== undefined && output.QuotaName !== null) {
        contents.QuotaName = output.QuotaName;
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    if (output.ServiceName !== undefined && output.ServiceName !== null) {
        contents.ServiceName = output.ServiceName;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(entry, context));
};
const deserializeAws_json1_1ServiceQuotaListDefinition = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceQuota(entry, context));
};
const deserializeAws_json1_1ServiceQuotaTemplateNotInUseException = (output, context) => {
    let contents = {
        __type: "ServiceQuotaTemplateNotInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TemplatesNotAvailableInRegionException = (output, context) => {
    let contents = {
        __type: "TemplatesNotAvailableInRegionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
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