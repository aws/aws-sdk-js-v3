"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Resolver.AssociateResolverEndpointIpAddress";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateResolverEndpointIpAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateResolverEndpointIpAddressCommand = serializeAws_json1_1AssociateResolverEndpointIpAddressCommand;
async function serializeAws_json1_1AssociateResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.AssociateResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateResolverRuleCommand = serializeAws_json1_1AssociateResolverRuleCommand;
async function serializeAws_json1_1CreateResolverEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.CreateResolverEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResolverEndpointCommand = serializeAws_json1_1CreateResolverEndpointCommand;
async function serializeAws_json1_1CreateResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.CreateResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResolverRuleCommand = serializeAws_json1_1CreateResolverRuleCommand;
async function serializeAws_json1_1DeleteResolverEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.DeleteResolverEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResolverEndpointCommand = serializeAws_json1_1DeleteResolverEndpointCommand;
async function serializeAws_json1_1DeleteResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.DeleteResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResolverRuleCommand = serializeAws_json1_1DeleteResolverRuleCommand;
async function serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Resolver.DisassociateResolverEndpointIpAddress";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand;
async function serializeAws_json1_1DisassociateResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.DisassociateResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateResolverRuleCommand = serializeAws_json1_1DisassociateResolverRuleCommand;
async function serializeAws_json1_1GetResolverEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.GetResolverEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResolverEndpointCommand = serializeAws_json1_1GetResolverEndpointCommand;
async function serializeAws_json1_1GetResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.GetResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResolverRuleCommand = serializeAws_json1_1GetResolverRuleCommand;
async function serializeAws_json1_1GetResolverRuleAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.GetResolverRuleAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRuleAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResolverRuleAssociationCommand = serializeAws_json1_1GetResolverRuleAssociationCommand;
async function serializeAws_json1_1GetResolverRulePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.GetResolverRulePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRulePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResolverRulePolicyCommand = serializeAws_json1_1GetResolverRulePolicyCommand;
async function serializeAws_json1_1ListResolverEndpointIpAddressesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.ListResolverEndpointIpAddresses";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverEndpointIpAddressesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResolverEndpointIpAddressesCommand = serializeAws_json1_1ListResolverEndpointIpAddressesCommand;
async function serializeAws_json1_1ListResolverEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.ListResolverEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResolverEndpointsCommand = serializeAws_json1_1ListResolverEndpointsCommand;
async function serializeAws_json1_1ListResolverRuleAssociationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.ListResolverRuleAssociations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverRuleAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResolverRuleAssociationsCommand = serializeAws_json1_1ListResolverRuleAssociationsCommand;
async function serializeAws_json1_1ListResolverRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.ListResolverRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResolverRulesCommand = serializeAws_json1_1ListResolverRulesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutResolverRulePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.PutResolverRulePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResolverRulePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResolverRulePolicyCommand = serializeAws_json1_1PutResolverRulePolicyCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateResolverEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.UpdateResolverEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResolverEndpointCommand = serializeAws_json1_1UpdateResolverEndpointCommand;
async function serializeAws_json1_1UpdateResolverRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Resolver.UpdateResolverRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResolverRuleCommand = serializeAws_json1_1UpdateResolverRuleCommand;
async function deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateResolverEndpointIpAddressResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand = deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand;
async function deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1AssociateResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateResolverRuleCommand = deserializeAws_json1_1AssociateResolverRuleCommand;
async function deserializeAws_json1_1AssociateResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1CreateResolverEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResolverEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResolverEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResolverEndpointCommand = deserializeAws_json1_1CreateResolverEndpointCommand;
async function deserializeAws_json1_1CreateResolverEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1CreateResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResolverRuleCommand = deserializeAws_json1_1CreateResolverRuleCommand;
async function deserializeAws_json1_1CreateResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1DeleteResolverEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResolverEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResolverEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResolverEndpointCommand = deserializeAws_json1_1DeleteResolverEndpointCommand;
async function deserializeAws_json1_1DeleteResolverEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1DeleteResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResolverRuleCommand = deserializeAws_json1_1DeleteResolverRuleCommand;
async function deserializeAws_json1_1DeleteResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.route53resolver#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateResolverEndpointIpAddressResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand;
async function deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1DisassociateResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateResolverRuleCommand = deserializeAws_json1_1DisassociateResolverRuleCommand;
async function deserializeAws_json1_1DisassociateResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1GetResolverEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResolverEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResolverEndpointCommand = deserializeAws_json1_1GetResolverEndpointCommand;
async function deserializeAws_json1_1GetResolverEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1GetResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResolverRuleCommand = deserializeAws_json1_1GetResolverRuleCommand;
async function deserializeAws_json1_1GetResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1GetResolverRuleAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResolverRuleAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRuleAssociationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResolverRuleAssociationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResolverRuleAssociationCommand = deserializeAws_json1_1GetResolverRuleAssociationCommand;
async function deserializeAws_json1_1GetResolverRuleAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1GetResolverRulePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResolverRulePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRulePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResolverRulePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResolverRulePolicyCommand = deserializeAws_json1_1GetResolverRulePolicyCommand;
async function deserializeAws_json1_1GetResolverRulePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListResolverEndpointIpAddressesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverEndpointIpAddressesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResolverEndpointIpAddressesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResolverEndpointIpAddressesCommand = deserializeAws_json1_1ListResolverEndpointIpAddressesCommand;
async function deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1ListResolverEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResolverEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResolverEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResolverEndpointsCommand = deserializeAws_json1_1ListResolverEndpointsCommand;
async function deserializeAws_json1_1ListResolverEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1ListResolverRuleAssociationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResolverRuleAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverRuleAssociationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResolverRuleAssociationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResolverRuleAssociationsCommand = deserializeAws_json1_1ListResolverRuleAssociationsCommand;
async function deserializeAws_json1_1ListResolverRuleAssociationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1ListResolverRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResolverRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResolverRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResolverRulesCommand = deserializeAws_json1_1ListResolverRulesCommand;
async function deserializeAws_json1_1ListResolverRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1PutResolverRulePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResolverRulePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResolverRulePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResolverRulePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResolverRulePolicyCommand = deserializeAws_json1_1PutResolverRulePolicyCommand;
async function deserializeAws_json1_1PutResolverRulePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPolicyDocument":
        case "com.amazonaws.route53resolver#InvalidPolicyDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPolicyDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.route53resolver#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1UpdateResolverEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResolverEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateResolverEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateResolverEndpointCommand = deserializeAws_json1_1UpdateResolverEndpointCommand;
async function deserializeAws_json1_1UpdateResolverEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
async function deserializeAws_json1_1UpdateResolverRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResolverRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateResolverRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateResolverRuleCommand = deserializeAws_json1_1UpdateResolverRuleCommand;
async function deserializeAws_json1_1UpdateResolverRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
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
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = Object.assign({ name: "InternalServiceErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPolicyDocumentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyDocument(body, context);
    const contents = Object.assign({ name: "InvalidPolicyDocument", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = Object.assign({ name: "InvalidTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceExistsException(body, context);
    const contents = Object.assign({ name: "ResourceExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = Object.assign({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnknownResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnknownResourceException(body, context);
    const contents = Object.assign({ name: "UnknownResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateResolverEndpointIpAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.IpAddress !== undefined) {
        bodyParams["IpAddress"] = serializeAws_json1_1IpAddressUpdate(input.IpAddress, context);
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResolverRuleId !== undefined) {
        bodyParams["ResolverRuleId"] = input.ResolverRuleId;
    }
    if (input.VPCId !== undefined) {
        bodyParams["VPCId"] = input.VPCId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResolverEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.Direction !== undefined) {
        bodyParams["Direction"] = input.Direction;
    }
    if (input.IpAddresses !== undefined) {
        bodyParams["IpAddresses"] = serializeAws_json1_1IpAddressesRequest(input.IpAddresses, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatorRequestId !== undefined) {
        bodyParams["CreatorRequestId"] = input.CreatorRequestId;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    if (input.RuleType !== undefined) {
        bodyParams["RuleType"] = input.RuleType;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TargetIps !== undefined) {
        bodyParams["TargetIps"] = serializeAws_json1_1TargetList(input.TargetIps, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResolverEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverRuleId !== undefined) {
        bodyParams["ResolverRuleId"] = input.ResolverRuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.IpAddress !== undefined) {
        bodyParams["IpAddress"] = serializeAws_json1_1IpAddressUpdate(input.IpAddress, context);
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverRuleId !== undefined) {
        bodyParams["ResolverRuleId"] = input.ResolverRuleId;
    }
    if (input.VPCId !== undefined) {
        bodyParams["VPCId"] = input.VPCId;
    }
    return bodyParams;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetResolverEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResolverRuleAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverRuleAssociationId !== undefined) {
        bodyParams["ResolverRuleAssociationId"] = input.ResolverRuleAssociationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResolverRulePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResolverRuleId !== undefined) {
        bodyParams["ResolverRuleId"] = input.ResolverRuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1IpAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.Ip !== undefined) {
        bodyParams["Ip"] = input.Ip;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    return bodyParams;
};
const serializeAws_json1_1IpAddressUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Ip !== undefined) {
        bodyParams["Ip"] = input.Ip;
    }
    if (input.IpId !== undefined) {
        bodyParams["IpId"] = input.IpId;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    return bodyParams;
};
const serializeAws_json1_1IpAddressesRequest = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IpAddressRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListResolverEndpointIpAddressesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResolverEndpointsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResolverRuleAssociationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResolverRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1PutResolverRulePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.ResolverRulePolicy !== undefined) {
        bodyParams["ResolverRulePolicy"] = input.ResolverRulePolicy;
    }
    return bodyParams;
};
const serializeAws_json1_1ResolverRuleConfig = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    if (input.TargetIps !== undefined) {
        bodyParams["TargetIps"] = serializeAws_json1_1TargetList(input.TargetIps, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetAddress = (input, context) => {
    const bodyParams = {};
    if (input.Ip !== undefined) {
        bodyParams["Ip"] = input.Ip;
    }
    if (input.Port !== undefined) {
        bodyParams["Port"] = input.Port;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TargetAddress(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResolverEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResolverEndpointId !== undefined) {
        bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResolverRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.Config !== undefined) {
        bodyParams["Config"] = serializeAws_json1_1ResolverRuleConfig(input.Config, context);
    }
    if (input.ResolverRuleId !== undefined) {
        bodyParams["ResolverRuleId"] = input.ResolverRuleId;
    }
    return bodyParams;
};
const deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse = (output, context) => {
    let contents = {
        __type: "AssociateResolverEndpointIpAddressResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociateResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "AssociateResolverRuleResponse",
        ResolverRuleAssociation: undefined
    };
    if (output.ResolverRuleAssociation !== undefined &&
        output.ResolverRuleAssociation !== null) {
        contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateResolverEndpointResponse = (output, context) => {
    let contents = {
        __type: "CreateResolverEndpointResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "CreateResolverRuleResponse",
        ResolverRule: undefined
    };
    if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
        contents.ResolverRule = deserializeAws_json1_1ResolverRule(output.ResolverRule, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteResolverEndpointResponse = (output, context) => {
    let contents = {
        __type: "DeleteResolverEndpointResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "DeleteResolverRuleResponse",
        ResolverRule: undefined
    };
    if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
        contents.ResolverRule = deserializeAws_json1_1ResolverRule(output.ResolverRule, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse = (output, context) => {
    let contents = {
        __type: "DisassociateResolverEndpointIpAddressResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "DisassociateResolverRuleResponse",
        ResolverRuleAssociation: undefined
    };
    if (output.ResolverRuleAssociation !== undefined &&
        output.ResolverRuleAssociation !== null) {
        contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResolverEndpointResponse = (output, context) => {
    let contents = {
        __type: "GetResolverEndpointResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResolverRuleAssociationResponse = (output, context) => {
    let contents = {
        __type: "GetResolverRuleAssociationResponse",
        ResolverRuleAssociation: undefined
    };
    if (output.ResolverRuleAssociation !== undefined &&
        output.ResolverRuleAssociation !== null) {
        contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResolverRulePolicyResponse = (output, context) => {
    let contents = {
        __type: "GetResolverRulePolicyResponse",
        ResolverRulePolicy: undefined
    };
    if (output.ResolverRulePolicy !== undefined &&
        output.ResolverRulePolicy !== null) {
        contents.ResolverRulePolicy = output.ResolverRulePolicy;
    }
    return contents;
};
const deserializeAws_json1_1GetResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "GetResolverRuleResponse",
        ResolverRule: undefined
    };
    if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
        contents.ResolverRule = deserializeAws_json1_1ResolverRule(output.ResolverRule, context);
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorException = (output, context) => {
    let contents = {
        __type: "InternalServiceErrorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        FieldName: undefined,
        Message: undefined
    };
    if (output.FieldName !== undefined && output.FieldName !== null) {
        contents.FieldName = output.FieldName;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPolicyDocument = (output, context) => {
    let contents = {
        __type: "InvalidPolicyDocument",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    let contents = {
        __type: "InvalidTagException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IpAddressResponse = (output, context) => {
    let contents = {
        __type: "IpAddressResponse",
        CreationTime: undefined,
        Ip: undefined,
        IpId: undefined,
        ModificationTime: undefined,
        Status: undefined,
        StatusMessage: undefined,
        SubnetId: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = output.CreationTime;
    }
    if (output.Ip !== undefined && output.Ip !== null) {
        contents.Ip = output.Ip;
    }
    if (output.IpId !== undefined && output.IpId !== null) {
        contents.IpId = output.IpId;
    }
    if (output.ModificationTime !== undefined &&
        output.ModificationTime !== null) {
        contents.ModificationTime = output.ModificationTime;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    return contents;
};
const deserializeAws_json1_1IpAddressesResponse = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IpAddressResponse(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ListResolverEndpointIpAddressesResponse = (output, context) => {
    let contents = {
        __type: "ListResolverEndpointIpAddressesResponse",
        IpAddresses: undefined,
        MaxResults: undefined,
        NextToken: undefined
    };
    if (output.IpAddresses !== undefined && output.IpAddresses !== null) {
        contents.IpAddresses = deserializeAws_json1_1IpAddressesResponse(output.IpAddresses, context);
    }
    if (output.MaxResults !== undefined && output.MaxResults !== null) {
        contents.MaxResults = output.MaxResults;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListResolverEndpointsResponse = (output, context) => {
    let contents = {
        __type: "ListResolverEndpointsResponse",
        MaxResults: undefined,
        NextToken: undefined,
        ResolverEndpoints: undefined
    };
    if (output.MaxResults !== undefined && output.MaxResults !== null) {
        contents.MaxResults = output.MaxResults;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResolverEndpoints !== undefined &&
        output.ResolverEndpoints !== null) {
        contents.ResolverEndpoints = deserializeAws_json1_1ResolverEndpoints(output.ResolverEndpoints, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResolverRuleAssociationsResponse = (output, context) => {
    let contents = {
        __type: "ListResolverRuleAssociationsResponse",
        MaxResults: undefined,
        NextToken: undefined,
        ResolverRuleAssociations: undefined
    };
    if (output.MaxResults !== undefined && output.MaxResults !== null) {
        contents.MaxResults = output.MaxResults;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResolverRuleAssociations !== undefined &&
        output.ResolverRuleAssociations !== null) {
        contents.ResolverRuleAssociations = deserializeAws_json1_1ResolverRuleAssociations(output.ResolverRuleAssociations, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResolverRulesResponse = (output, context) => {
    let contents = {
        __type: "ListResolverRulesResponse",
        MaxResults: undefined,
        NextToken: undefined,
        ResolverRules: undefined
    };
    if (output.MaxResults !== undefined && output.MaxResults !== null) {
        contents.MaxResults = output.MaxResults;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResolverRules !== undefined && output.ResolverRules !== null) {
        contents.ResolverRules = deserializeAws_json1_1ResolverRules(output.ResolverRules, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1PutResolverRulePolicyResponse = (output, context) => {
    let contents = {
        __type: "PutResolverRulePolicyResponse",
        ReturnValue: undefined
    };
    if (output.ReturnValue !== undefined && output.ReturnValue !== null) {
        contents.ReturnValue = output.ReturnValue;
    }
    return contents;
};
const deserializeAws_json1_1ResolverEndpoint = (output, context) => {
    let contents = {
        __type: "ResolverEndpoint",
        Arn: undefined,
        CreationTime: undefined,
        CreatorRequestId: undefined,
        Direction: undefined,
        HostVPCId: undefined,
        Id: undefined,
        IpAddressCount: undefined,
        ModificationTime: undefined,
        Name: undefined,
        SecurityGroupIds: undefined,
        Status: undefined,
        StatusMessage: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = output.CreationTime;
    }
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.Direction !== undefined && output.Direction !== null) {
        contents.Direction = output.Direction;
    }
    if (output.HostVPCId !== undefined && output.HostVPCId !== null) {
        contents.HostVPCId = output.HostVPCId;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IpAddressCount !== undefined && output.IpAddressCount !== null) {
        contents.IpAddressCount = output.IpAddressCount;
    }
    if (output.ModificationTime !== undefined &&
        output.ModificationTime !== null) {
        contents.ModificationTime = output.ModificationTime;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    return contents;
};
const deserializeAws_json1_1ResolverEndpoints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResolverEndpoint(entry, context));
};
const deserializeAws_json1_1ResolverRule = (output, context) => {
    let contents = {
        __type: "ResolverRule",
        Arn: undefined,
        CreatorRequestId: undefined,
        DomainName: undefined,
        Id: undefined,
        Name: undefined,
        OwnerId: undefined,
        ResolverEndpointId: undefined,
        RuleType: undefined,
        ShareStatus: undefined,
        Status: undefined,
        StatusMessage: undefined,
        TargetIps: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatorRequestId !== undefined &&
        output.CreatorRequestId !== null) {
        contents.CreatorRequestId = output.CreatorRequestId;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerId !== undefined && output.OwnerId !== null) {
        contents.OwnerId = output.OwnerId;
    }
    if (output.ResolverEndpointId !== undefined &&
        output.ResolverEndpointId !== null) {
        contents.ResolverEndpointId = output.ResolverEndpointId;
    }
    if (output.RuleType !== undefined && output.RuleType !== null) {
        contents.RuleType = output.RuleType;
    }
    if (output.ShareStatus !== undefined && output.ShareStatus !== null) {
        contents.ShareStatus = output.ShareStatus;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.TargetIps !== undefined && output.TargetIps !== null) {
        contents.TargetIps = deserializeAws_json1_1TargetList(output.TargetIps, context);
    }
    return contents;
};
const deserializeAws_json1_1ResolverRuleAssociation = (output, context) => {
    let contents = {
        __type: "ResolverRuleAssociation",
        Id: undefined,
        Name: undefined,
        ResolverRuleId: undefined,
        Status: undefined,
        StatusMessage: undefined,
        VPCId: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ResolverRuleId !== undefined && output.ResolverRuleId !== null) {
        contents.ResolverRuleId = output.ResolverRuleId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VPCId !== undefined && output.VPCId !== null) {
        contents.VPCId = output.VPCId;
    }
    return contents;
};
const deserializeAws_json1_1ResolverRuleAssociations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResolverRuleAssociation(entry, context));
};
const deserializeAws_json1_1ResolverRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResolverRule(entry, context));
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    let contents = {
        __type: "ResourceExistsException",
        Message: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    let contents = {
        __type: "ResourceUnavailableException",
        Message: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1TargetAddress = (output, context) => {
    let contents = {
        __type: "TargetAddress",
        Ip: undefined,
        Port: undefined
    };
    if (output.Ip !== undefined && output.Ip !== null) {
        contents.Ip = output.Ip;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    return contents;
};
const deserializeAws_json1_1TargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetAddress(entry, context));
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnknownResourceException = (output, context) => {
    let contents = {
        __type: "UnknownResourceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateResolverEndpointResponse = (output, context) => {
    let contents = {
        __type: "UpdateResolverEndpointResponse",
        ResolverEndpoint: undefined
    };
    if (output.ResolverEndpoint !== undefined &&
        output.ResolverEndpoint !== null) {
        contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateResolverRuleResponse = (output, context) => {
    let contents = {
        __type: "UpdateResolverRuleResponse",
        ResolverRule: undefined
    };
    if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
        contents.ResolverRule = deserializeAws_json1_1ResolverRule(output.ResolverRule, context);
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