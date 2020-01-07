"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1CreateHttpNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.CreateHttpNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHttpNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHttpNamespaceCommand = serializeAws_json1_1CreateHttpNamespaceCommand;
async function serializeAws_json1_1CreatePrivateDnsNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePrivateDnsNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePrivateDnsNamespaceCommand = serializeAws_json1_1CreatePrivateDnsNamespaceCommand;
async function serializeAws_json1_1CreatePublicDnsNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53AutoNaming_v20170314.CreatePublicDnsNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePublicDnsNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePublicDnsNamespaceCommand = serializeAws_json1_1CreatePublicDnsNamespaceCommand;
async function serializeAws_json1_1CreateServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.CreateService";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateServiceCommand = serializeAws_json1_1CreateServiceCommand;
async function serializeAws_json1_1DeleteNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeleteNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNamespaceCommand = serializeAws_json1_1DeleteNamespaceCommand;
async function serializeAws_json1_1DeleteServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeleteService";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServiceCommand = serializeAws_json1_1DeleteServiceCommand;
async function serializeAws_json1_1DeregisterInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeregisterInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterInstanceCommand = serializeAws_json1_1DeregisterInstanceCommand;
async function serializeAws_json1_1DiscoverInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DiscoverInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInstancesRequest(input, context));
    let resolvedHostname = context.endpoint.hostname;
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data-" + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
}
exports.serializeAws_json1_1DiscoverInstancesCommand = serializeAws_json1_1DiscoverInstancesCommand;
async function serializeAws_json1_1GetInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceCommand = serializeAws_json1_1GetInstanceCommand;
async function serializeAws_json1_1GetInstancesHealthStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53AutoNaming_v20170314.GetInstancesHealthStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancesHealthStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstancesHealthStatusCommand = serializeAws_json1_1GetInstancesHealthStatusCommand;
async function serializeAws_json1_1GetNamespaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetNamespace";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNamespaceCommand = serializeAws_json1_1GetNamespaceCommand;
async function serializeAws_json1_1GetOperationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetOperation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOperationCommand = serializeAws_json1_1GetOperationCommand;
async function serializeAws_json1_1GetServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetService";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServiceCommand = serializeAws_json1_1GetServiceCommand;
async function serializeAws_json1_1ListInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInstancesCommand = serializeAws_json1_1ListInstancesCommand;
async function serializeAws_json1_1ListNamespacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListNamespaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNamespacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListNamespacesCommand = serializeAws_json1_1ListNamespacesCommand;
async function serializeAws_json1_1ListOperationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListOperations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOperationsCommand = serializeAws_json1_1ListOperationsCommand;
async function serializeAws_json1_1ListServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
async function serializeAws_json1_1RegisterInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.RegisterInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterInstanceCommand = serializeAws_json1_1RegisterInstanceCommand;
async function serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand;
async function serializeAws_json1_1UpdateServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.UpdateService";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServiceCommand = serializeAws_json1_1UpdateServiceCommand;
async function deserializeAws_json1_1CreateHttpNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHttpNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHttpNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHttpNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHttpNamespaceCommand = deserializeAws_json1_1CreateHttpNamespaceCommand;
async function deserializeAws_json1_1CreateHttpNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePrivateDnsNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePrivateDnsNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePrivateDnsNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePrivateDnsNamespaceCommand = deserializeAws_json1_1CreatePrivateDnsNamespaceCommand;
async function deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePublicDnsNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePublicDnsNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePublicDnsNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePublicDnsNamespaceCommand = deserializeAws_json1_1CreatePublicDnsNamespaceCommand;
async function deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateServiceCommand = deserializeAws_json1_1CreateServiceCommand;
async function deserializeAws_json1_1CreateServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAlreadyExists":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUse":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServiceCommand = deserializeAws_json1_1DeleteServiceCommand;
async function deserializeAws_json1_1DeleteServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUse":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterInstanceCommand = deserializeAws_json1_1DeregisterInstanceCommand;
async function deserializeAws_json1_1DeregisterInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUse":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DiscoverInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DiscoverInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DiscoverInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DiscoverInstancesCommand = deserializeAws_json1_1DiscoverInstancesCommand;
async function deserializeAws_json1_1DiscoverInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceCommand = deserializeAws_json1_1GetInstanceCommand;
async function deserializeAws_json1_1GetInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstancesHealthStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstancesHealthStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancesHealthStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstancesHealthStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstancesHealthStatusCommand = deserializeAws_json1_1GetInstancesHealthStatusCommand;
async function deserializeAws_json1_1GetInstancesHealthStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetNamespaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNamespaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNamespaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNamespaceCommand = deserializeAws_json1_1GetNamespaceCommand;
async function deserializeAws_json1_1GetNamespaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOperationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOperationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOperationCommand = deserializeAws_json1_1GetOperationCommand;
async function deserializeAws_json1_1GetOperationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#OperationNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServiceCommand = deserializeAws_json1_1GetServiceCommand;
async function deserializeAws_json1_1GetServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListInstancesCommand = deserializeAws_json1_1ListInstancesCommand;
async function deserializeAws_json1_1ListInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListNamespacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListNamespacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNamespacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListNamespacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListNamespacesCommand = deserializeAws_json1_1ListNamespacesCommand;
async function deserializeAws_json1_1ListNamespacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListOperationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOperationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOperationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOperationsCommand = deserializeAws_json1_1ListOperationsCommand;
async function deserializeAws_json1_1ListOperationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterInstanceCommand = deserializeAws_json1_1RegisterInstanceCommand;
async function deserializeAws_json1_1RegisterInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUse":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand;
async function deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomHealthNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#CustomHealthNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomHealthNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServiceCommand = deserializeAws_json1_1UpdateServiceCommand;
async function deserializeAws_json1_1UpdateServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFound":
        case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1CustomHealthNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomHealthNotFound(body, context);
    const contents = Object.assign({ name: "CustomHealthNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequest(body, context);
    const contents = Object.assign({ name: "DuplicateRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNotFound(body, context);
    const contents = Object.assign({ name: "InstanceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInput(body, context);
    const contents = Object.assign({ name: "InvalidInput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NamespaceAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NamespaceAlreadyExists(body, context);
    const contents = Object.assign({ name: "NamespaceAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NamespaceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NamespaceNotFound(body, context);
    const contents = Object.assign({ name: "NamespaceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotFound(body, context);
    const contents = Object.assign({ name: "OperationNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUse(body, context);
    const contents = Object.assign({ name: "ResourceInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceeded(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceAlreadyExists(body, context);
    const contents = Object.assign({ name: "ServiceAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotFound(body, context);
    const contents = Object.assign({ name: "ServiceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Attributes = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1CreateHttpNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId === undefined) {
        input.CreatorRequestId = uuid_1.v4();
    }
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePrivateDnsNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId === undefined) {
        input.CreatorRequestId = uuid_1.v4();
    }
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Vpc !== undefined) {
        bodyParams["Vpc"] = input.Vpc;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePublicDnsNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId === undefined) {
        input.CreatorRequestId = uuid_1.v4();
    }
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId === undefined) {
        input.CreatorRequestId = uuid_1.v4();
    }
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DnsConfig !== undefined) {
        bodyParams["DnsConfig"] = serializeAws_json1_1DnsConfig(input.DnsConfig, context);
    }
    if (input.HealthCheckConfig !== undefined) {
        bodyParams["HealthCheckConfig"] = serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context);
    }
    if (input.HealthCheckCustomConfig !== undefined) {
        bodyParams["HealthCheckCustomConfig"] = serializeAws_json1_1HealthCheckCustomConfig(input.HealthCheckCustomConfig, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NamespaceId !== undefined) {
        bodyParams["NamespaceId"] = input.NamespaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DiscoverInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.HealthStatus !== undefined) {
        bodyParams["HealthStatus"] = input.HealthStatus;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NamespaceName !== undefined) {
        bodyParams["NamespaceName"] = input.NamespaceName;
    }
    if (input.QueryParameters !== undefined) {
        bodyParams["QueryParameters"] = serializeAws_json1_1Attributes(input.QueryParameters, context);
    }
    if (input.ServiceName !== undefined) {
        bodyParams["ServiceName"] = input.ServiceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DnsConfig = (input, context) => {
    const bodyParams = {};
    if (input.DnsRecords !== undefined) {
        bodyParams["DnsRecords"] = serializeAws_json1_1DnsRecordList(input.DnsRecords, context);
    }
    if (input.NamespaceId !== undefined) {
        bodyParams["NamespaceId"] = input.NamespaceId;
    }
    if (input.RoutingPolicy !== undefined) {
        bodyParams["RoutingPolicy"] = input.RoutingPolicy;
    }
    return bodyParams;
};
const serializeAws_json1_1DnsConfigChange = (input, context) => {
    const bodyParams = {};
    if (input.DnsRecords !== undefined) {
        bodyParams["DnsRecords"] = serializeAws_json1_1DnsRecordList(input.DnsRecords, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DnsRecord = (input, context) => {
    const bodyParams = {};
    if (input.TTL !== undefined) {
        bodyParams["TTL"] = input.TTL;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DnsRecordList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DnsRecord(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstancesHealthStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Instances !== undefined) {
        bodyParams["Instances"] = serializeAws_json1_1InstanceIdList(input.Instances, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetNamespaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOperationRequest = (input, context) => {
    const bodyParams = {};
    if (input.OperationId !== undefined) {
        bodyParams["OperationId"] = input.OperationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1HealthCheckConfig = (input, context) => {
    const bodyParams = {};
    if (input.FailureThreshold !== undefined) {
        bodyParams["FailureThreshold"] = input.FailureThreshold;
    }
    if (input.ResourcePath !== undefined) {
        bodyParams["ResourcePath"] = input.ResourcePath;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1HealthCheckCustomConfig = (input, context) => {
    const bodyParams = {};
    if (input.FailureThreshold !== undefined) {
        bodyParams["FailureThreshold"] = input.FailureThreshold;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListNamespacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1NamespaceFilters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOperationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1OperationFilters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ServiceFilters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NamespaceFilter = (input, context) => {
    const bodyParams = {};
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = input.Condition;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NamespaceFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1NamespaceFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OperationFilter = (input, context) => {
    const bodyParams = {};
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = input.Condition;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OperationFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OperationFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RegisterInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1Attributes(input.Attributes, context);
    }
    if (input.CreatorRequestId === undefined) {
        input.CreatorRequestId = uuid_1.v4();
    }
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceChange = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DnsConfig !== undefined) {
        bodyParams["DnsConfig"] = serializeAws_json1_1DnsConfigChange(input.DnsConfig, context);
    }
    if (input.HealthCheckConfig !== undefined) {
        bodyParams["HealthCheckConfig"] = serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceFilter = (input, context) => {
    const bodyParams = {};
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = input.Condition;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServiceFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ServiceId !== undefined) {
        bodyParams["ServiceId"] = input.ServiceId;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Service !== undefined) {
        bodyParams["Service"] = serializeAws_json1_1ServiceChange(input.Service, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1Attributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1CreateHttpNamespaceResponse = (output, context) => {
    let contents = {
        __type: "CreateHttpNamespaceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1CreatePrivateDnsNamespaceResponse = (output, context) => {
    let contents = {
        __type: "CreatePrivateDnsNamespaceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1CreatePublicDnsNamespaceResponse = (output, context) => {
    let contents = {
        __type: "CreatePublicDnsNamespaceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1CreateServiceResponse = (output, context) => {
    let contents = {
        __type: "CreateServiceResponse",
        Service: undefined
    };
    if (output.Service !== undefined && output.Service !== null) {
        contents.Service = deserializeAws_json1_1Service(output.Service, context);
    }
    return contents;
};
const deserializeAws_json1_1CustomHealthNotFound = (output, context) => {
    let contents = {
        __type: "CustomHealthNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteNamespaceResponse = (output, context) => {
    let contents = {
        __type: "DeleteNamespaceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteServiceResponse = (output, context) => {
    let contents = {
        __type: "DeleteServiceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterInstanceResponse = (output, context) => {
    let contents = {
        __type: "DeregisterInstanceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1DiscoverInstancesResponse = (output, context) => {
    let contents = {
        __type: "DiscoverInstancesResponse",
        Instances: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1HttpInstanceSummaryList(output.Instances, context);
    }
    return contents;
};
const deserializeAws_json1_1DnsConfig = (output, context) => {
    let contents = {
        __type: "DnsConfig",
        DnsRecords: undefined,
        NamespaceId: undefined,
        RoutingPolicy: undefined
    };
    if (output.DnsRecords !== undefined && output.DnsRecords !== null) {
        contents.DnsRecords = deserializeAws_json1_1DnsRecordList(output.DnsRecords, context);
    }
    if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
        contents.NamespaceId = output.NamespaceId;
    }
    if (output.RoutingPolicy !== undefined && output.RoutingPolicy !== null) {
        contents.RoutingPolicy = output.RoutingPolicy;
    }
    return contents;
};
const deserializeAws_json1_1DnsProperties = (output, context) => {
    let contents = {
        __type: "DnsProperties",
        HostedZoneId: undefined
    };
    if (output.HostedZoneId !== undefined && output.HostedZoneId !== null) {
        contents.HostedZoneId = output.HostedZoneId;
    }
    return contents;
};
const deserializeAws_json1_1DnsRecord = (output, context) => {
    let contents = {
        __type: "DnsRecord",
        TTL: undefined,
        Type: undefined
    };
    if (output.TTL !== undefined && output.TTL !== null) {
        contents.TTL = output.TTL;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DnsRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DnsRecord(entry, context));
};
const deserializeAws_json1_1DuplicateRequest = (output, context) => {
    let contents = {
        __type: "DuplicateRequest",
        DuplicateOperationId: undefined,
        Message: undefined
    };
    if (output.DuplicateOperationId !== undefined &&
        output.DuplicateOperationId !== null) {
        contents.DuplicateOperationId = output.DuplicateOperationId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceResponse = (output, context) => {
    let contents = {
        __type: "GetInstanceResponse",
        Instance: undefined
    };
    if (output.Instance !== undefined && output.Instance !== null) {
        contents.Instance = deserializeAws_json1_1Instance(output.Instance, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstancesHealthStatusResponse = (output, context) => {
    let contents = {
        __type: "GetInstancesHealthStatusResponse",
        NextToken: undefined,
        Status: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1InstanceHealthStatusMap(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1GetNamespaceResponse = (output, context) => {
    let contents = {
        __type: "GetNamespaceResponse",
        Namespace: undefined
    };
    if (output.Namespace !== undefined && output.Namespace !== null) {
        contents.Namespace = deserializeAws_json1_1Namespace(output.Namespace, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOperationResponse = (output, context) => {
    let contents = {
        __type: "GetOperationResponse",
        Operation: undefined
    };
    if (output.Operation !== undefined && output.Operation !== null) {
        contents.Operation = deserializeAws_json1_1Operation(output.Operation, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServiceResponse = (output, context) => {
    let contents = {
        __type: "GetServiceResponse",
        Service: undefined
    };
    if (output.Service !== undefined && output.Service !== null) {
        contents.Service = deserializeAws_json1_1Service(output.Service, context);
    }
    return contents;
};
const deserializeAws_json1_1HealthCheckConfig = (output, context) => {
    let contents = {
        __type: "HealthCheckConfig",
        FailureThreshold: undefined,
        ResourcePath: undefined,
        Type: undefined
    };
    if (output.FailureThreshold !== undefined &&
        output.FailureThreshold !== null) {
        contents.FailureThreshold = output.FailureThreshold;
    }
    if (output.ResourcePath !== undefined && output.ResourcePath !== null) {
        contents.ResourcePath = output.ResourcePath;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1HealthCheckCustomConfig = (output, context) => {
    let contents = {
        __type: "HealthCheckCustomConfig",
        FailureThreshold: undefined
    };
    if (output.FailureThreshold !== undefined &&
        output.FailureThreshold !== null) {
        contents.FailureThreshold = output.FailureThreshold;
    }
    return contents;
};
const deserializeAws_json1_1HttpInstanceSummary = (output, context) => {
    let contents = {
        __type: "HttpInstanceSummary",
        Attributes: undefined,
        HealthStatus: undefined,
        InstanceId: undefined,
        NamespaceName: undefined,
        ServiceName: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.HealthStatus !== undefined && output.HealthStatus !== null) {
        contents.HealthStatus = output.HealthStatus;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.NamespaceName !== undefined && output.NamespaceName !== null) {
        contents.NamespaceName = output.NamespaceName;
    }
    if (output.ServiceName !== undefined && output.ServiceName !== null) {
        contents.ServiceName = output.ServiceName;
    }
    return contents;
};
const deserializeAws_json1_1HttpInstanceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HttpInstanceSummary(entry, context));
};
const deserializeAws_json1_1HttpProperties = (output, context) => {
    let contents = {
        __type: "HttpProperties",
        HttpName: undefined
    };
    if (output.HttpName !== undefined && output.HttpName !== null) {
        contents.HttpName = output.HttpName;
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        Attributes: undefined,
        CreatorRequestId: undefined,
        Id: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1InstanceHealthStatusMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InstanceNotFound = (output, context) => {
    let contents = {
        __type: "InstanceNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceSummary = (output, context) => {
    let contents = {
        __type: "InstanceSummary",
        Attributes: undefined,
        Id: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1InstanceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceSummary(entry, context));
};
const deserializeAws_json1_1InvalidInput = (output, context) => {
    let contents = {
        __type: "InvalidInput",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListInstancesResponse = (output, context) => {
    let contents = {
        __type: "ListInstancesResponse",
        Instances: undefined,
        NextToken: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1InstanceSummaryList(output.Instances, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListNamespacesResponse = (output, context) => {
    let contents = {
        __type: "ListNamespacesResponse",
        Namespaces: undefined,
        NextToken: undefined
    };
    if (output.Namespaces !== undefined && output.Namespaces !== null) {
        contents.Namespaces = deserializeAws_json1_1NamespaceSummariesList(output.Namespaces, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListOperationsResponse = (output, context) => {
    let contents = {
        __type: "ListOperationsResponse",
        NextToken: undefined,
        Operations: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Operations !== undefined && output.Operations !== null) {
        contents.Operations = deserializeAws_json1_1OperationSummaryList(output.Operations, context);
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
        contents.Services = deserializeAws_json1_1ServiceSummariesList(output.Services, context);
    }
    return contents;
};
const deserializeAws_json1_1Namespace = (output, context) => {
    let contents = {
        __type: "Namespace",
        Arn: undefined,
        CreateDate: undefined,
        CreatorRequestId: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Properties: undefined,
        ServiceCount: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1NamespaceProperties(output.Properties, context);
    }
    if (output.ServiceCount !== undefined && output.ServiceCount !== null) {
        contents.ServiceCount = output.ServiceCount;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1NamespaceAlreadyExists = (output, context) => {
    let contents = {
        __type: "NamespaceAlreadyExists",
        CreatorRequestId: undefined,
        Message: undefined,
        NamespaceId: undefined
    };
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
        contents.NamespaceId = output.NamespaceId;
    }
    return contents;
};
const deserializeAws_json1_1NamespaceNotFound = (output, context) => {
    let contents = {
        __type: "NamespaceNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NamespaceProperties = (output, context) => {
    let contents = {
        __type: "NamespaceProperties",
        DnsProperties: undefined,
        HttpProperties: undefined
    };
    if (output.DnsProperties !== undefined && output.DnsProperties !== null) {
        contents.DnsProperties = deserializeAws_json1_1DnsProperties(output.DnsProperties, context);
    }
    if (output.HttpProperties !== undefined && output.HttpProperties !== null) {
        contents.HttpProperties = deserializeAws_json1_1HttpProperties(output.HttpProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1NamespaceSummariesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NamespaceSummary(entry, context));
};
const deserializeAws_json1_1NamespaceSummary = (output, context) => {
    let contents = {
        __type: "NamespaceSummary",
        Arn: undefined,
        CreateDate: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Properties: undefined,
        ServiceCount: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1NamespaceProperties(output.Properties, context);
    }
    if (output.ServiceCount !== undefined && output.ServiceCount !== null) {
        contents.ServiceCount = output.ServiceCount;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Operation = (output, context) => {
    let contents = {
        __type: "Operation",
        CreateDate: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        Id: undefined,
        Status: undefined,
        Targets: undefined,
        Type: undefined,
        UpdateDate: undefined
    };
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1OperationTargetsMap(output.Targets, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UpdateDate !== undefined && output.UpdateDate !== null) {
        contents.UpdateDate = new Date(Math.round(output.UpdateDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_1OperationNotFound = (output, context) => {
    let contents = {
        __type: "OperationNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OperationSummary = (output, context) => {
    let contents = {
        __type: "OperationSummary",
        Id: undefined,
        Status: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1OperationSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OperationSummary(entry, context));
};
const deserializeAws_json1_1OperationTargetsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1RegisterInstanceResponse = (output, context) => {
    let contents = {
        __type: "RegisterInstanceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUse = (output, context) => {
    let contents = {
        __type: "ResourceInUse",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceeded = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Service = (output, context) => {
    let contents = {
        __type: "Service",
        Arn: undefined,
        CreateDate: undefined,
        CreatorRequestId: undefined,
        Description: undefined,
        DnsConfig: undefined,
        HealthCheckConfig: undefined,
        HealthCheckCustomConfig: undefined,
        Id: undefined,
        InstanceCount: undefined,
        Name: undefined,
        NamespaceId: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DnsConfig !== undefined && output.DnsConfig !== null) {
        contents.DnsConfig = deserializeAws_json1_1DnsConfig(output.DnsConfig, context);
    }
    if (output.HealthCheckConfig !== undefined &&
        output.HealthCheckConfig !== null) {
        contents.HealthCheckConfig = deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context);
    }
    if (output.HealthCheckCustomConfig !== undefined &&
        output.HealthCheckCustomConfig !== null) {
        contents.HealthCheckCustomConfig = deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
        contents.NamespaceId = output.NamespaceId;
    }
    return contents;
};
const deserializeAws_json1_1ServiceAlreadyExists = (output, context) => {
    let contents = {
        __type: "ServiceAlreadyExists",
        CreatorRequestId: undefined,
        Message: undefined,
        ServiceId: undefined
    };
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ServiceId !== undefined && output.ServiceId !== null) {
        contents.ServiceId = output.ServiceId;
    }
    return contents;
};
const deserializeAws_json1_1ServiceNotFound = (output, context) => {
    let contents = {
        __type: "ServiceNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceSummariesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceSummary(entry, context));
};
const deserializeAws_json1_1ServiceSummary = (output, context) => {
    let contents = {
        __type: "ServiceSummary",
        Arn: undefined,
        CreateDate: undefined,
        Description: undefined,
        DnsConfig: undefined,
        HealthCheckConfig: undefined,
        HealthCheckCustomConfig: undefined,
        Id: undefined,
        InstanceCount: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DnsConfig !== undefined && output.DnsConfig !== null) {
        contents.DnsConfig = deserializeAws_json1_1DnsConfig(output.DnsConfig, context);
    }
    if (output.HealthCheckConfig !== undefined &&
        output.HealthCheckConfig !== null) {
        contents.HealthCheckConfig = deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context);
    }
    if (output.HealthCheckCustomConfig !== undefined &&
        output.HealthCheckCustomConfig !== null) {
        contents.HealthCheckCustomConfig = deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1UpdateServiceResponse = (output, context) => {
    let contents = {
        __type: "UpdateServiceResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
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