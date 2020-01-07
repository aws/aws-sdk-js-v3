"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CheckDomainAvailabilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.CheckDomainAvailability";
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckDomainAvailabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CheckDomainAvailabilityCommand = serializeAws_json1_1CheckDomainAvailabilityCommand;
async function serializeAws_json1_1CheckDomainTransferabilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Domains_v20140515.CheckDomainTransferability";
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckDomainTransferabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CheckDomainTransferabilityCommand = serializeAws_json1_1CheckDomainTransferabilityCommand;
async function serializeAws_json1_1DeleteTagsForDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.DeleteTagsForDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagsForDomainCommand = serializeAws_json1_1DeleteTagsForDomainCommand;
async function serializeAws_json1_1DisableDomainAutoRenewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.DisableDomainAutoRenew";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableDomainAutoRenewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableDomainAutoRenewCommand = serializeAws_json1_1DisableDomainAutoRenewCommand;
async function serializeAws_json1_1DisableDomainTransferLockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Domains_v20140515.DisableDomainTransferLock";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableDomainTransferLockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableDomainTransferLockCommand = serializeAws_json1_1DisableDomainTransferLockCommand;
async function serializeAws_json1_1EnableDomainAutoRenewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.EnableDomainAutoRenew";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableDomainAutoRenewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableDomainAutoRenewCommand = serializeAws_json1_1EnableDomainAutoRenewCommand;
async function serializeAws_json1_1EnableDomainTransferLockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.EnableDomainTransferLock";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableDomainTransferLockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableDomainTransferLockCommand = serializeAws_json1_1EnableDomainTransferLockCommand;
async function serializeAws_json1_1GetContactReachabilityStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Domains_v20140515.GetContactReachabilityStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactReachabilityStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetContactReachabilityStatusCommand = serializeAws_json1_1GetContactReachabilityStatusCommand;
async function serializeAws_json1_1GetDomainDetailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.GetDomainDetail";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDomainDetailCommand = serializeAws_json1_1GetDomainDetailCommand;
async function serializeAws_json1_1GetDomainSuggestionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.GetDomainSuggestions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainSuggestionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDomainSuggestionsCommand = serializeAws_json1_1GetDomainSuggestionsCommand;
async function serializeAws_json1_1GetOperationDetailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.GetOperationDetail";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOperationDetailCommand = serializeAws_json1_1GetOperationDetailCommand;
async function serializeAws_json1_1ListDomainsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.ListDomains";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDomainsCommand = serializeAws_json1_1ListDomainsCommand;
async function serializeAws_json1_1ListOperationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.ListOperations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOperationsCommand = serializeAws_json1_1ListOperationsCommand;
async function serializeAws_json1_1ListTagsForDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.ListTagsForDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForDomainCommand = serializeAws_json1_1ListTagsForDomainCommand;
async function serializeAws_json1_1RegisterDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.RegisterDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterDomainCommand = serializeAws_json1_1RegisterDomainCommand;
async function serializeAws_json1_1RenewDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.RenewDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1RenewDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RenewDomainCommand = serializeAws_json1_1RenewDomainCommand;
async function serializeAws_json1_1ResendContactReachabilityEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Domains_v20140515.ResendContactReachabilityEmail";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResendContactReachabilityEmailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResendContactReachabilityEmailCommand = serializeAws_json1_1ResendContactReachabilityEmailCommand;
async function serializeAws_json1_1RetrieveDomainAuthCodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.RetrieveDomainAuthCode";
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveDomainAuthCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RetrieveDomainAuthCodeCommand = serializeAws_json1_1RetrieveDomainAuthCodeCommand;
async function serializeAws_json1_1TransferDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.TransferDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1TransferDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TransferDomainCommand = serializeAws_json1_1TransferDomainCommand;
async function serializeAws_json1_1UpdateDomainContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateDomainContact";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDomainContactCommand = serializeAws_json1_1UpdateDomainContactCommand;
async function serializeAws_json1_1UpdateDomainContactPrivacyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Route53Domains_v20140515.UpdateDomainContactPrivacy";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainContactPrivacyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDomainContactPrivacyCommand = serializeAws_json1_1UpdateDomainContactPrivacyCommand;
async function serializeAws_json1_1UpdateDomainNameserversCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateDomainNameservers";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainNameserversRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDomainNameserversCommand = serializeAws_json1_1UpdateDomainNameserversCommand;
async function serializeAws_json1_1UpdateTagsForDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateTagsForDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTagsForDomainCommand = serializeAws_json1_1UpdateTagsForDomainCommand;
async function serializeAws_json1_1ViewBillingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Route53Domains_v20140515.ViewBilling";
    let body;
    body = JSON.stringify(serializeAws_json1_1ViewBillingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ViewBillingCommand = serializeAws_json1_1ViewBillingCommand;
async function deserializeAws_json1_1CheckDomainAvailabilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CheckDomainAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckDomainAvailabilityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CheckDomainAvailabilityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CheckDomainAvailabilityCommand = deserializeAws_json1_1CheckDomainAvailabilityCommand;
async function deserializeAws_json1_1CheckDomainAvailabilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CheckDomainTransferabilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CheckDomainTransferabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckDomainTransferabilityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CheckDomainTransferabilityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CheckDomainTransferabilityCommand = deserializeAws_json1_1CheckDomainTransferabilityCommand;
async function deserializeAws_json1_1CheckDomainTransferabilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTagsForDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsForDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagsForDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTagsForDomainCommand = deserializeAws_json1_1DeleteTagsForDomainCommand;
async function deserializeAws_json1_1DeleteTagsForDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableDomainAutoRenewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableDomainAutoRenewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableDomainAutoRenewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableDomainAutoRenewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableDomainAutoRenewCommand = deserializeAws_json1_1DisableDomainAutoRenewCommand;
async function deserializeAws_json1_1DisableDomainAutoRenewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableDomainTransferLockCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableDomainTransferLockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableDomainTransferLockResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableDomainTransferLockResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableDomainTransferLockCommand = deserializeAws_json1_1DisableDomainTransferLockCommand;
async function deserializeAws_json1_1DisableDomainTransferLockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableDomainAutoRenewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableDomainAutoRenewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableDomainAutoRenewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableDomainAutoRenewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableDomainAutoRenewCommand = deserializeAws_json1_1EnableDomainAutoRenewCommand;
async function deserializeAws_json1_1EnableDomainAutoRenewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableDomainTransferLockCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableDomainTransferLockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableDomainTransferLockResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableDomainTransferLockResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableDomainTransferLockCommand = deserializeAws_json1_1EnableDomainTransferLockCommand;
async function deserializeAws_json1_1EnableDomainTransferLockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetContactReachabilityStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetContactReachabilityStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactReachabilityStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContactReachabilityStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetContactReachabilityStatusCommand = deserializeAws_json1_1GetContactReachabilityStatusCommand;
async function deserializeAws_json1_1GetContactReachabilityStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDomainDetailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDomainDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainDetailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDomainDetailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDomainDetailCommand = deserializeAws_json1_1GetDomainDetailCommand;
async function deserializeAws_json1_1GetDomainDetailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDomainSuggestionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDomainSuggestionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainSuggestionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDomainSuggestionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDomainSuggestionsCommand = deserializeAws_json1_1GetDomainSuggestionsCommand;
async function deserializeAws_json1_1GetDomainSuggestionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOperationDetailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOperationDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationDetailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOperationDetailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOperationDetailCommand = deserializeAws_json1_1GetOperationDetailCommand;
async function deserializeAws_json1_1GetOperationDetailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
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
async function deserializeAws_json1_1ListDomainsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDomainsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDomainsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDomainsCommand = deserializeAws_json1_1ListDomainsCommand;
async function deserializeAws_json1_1ListDomainsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
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
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
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
async function deserializeAws_json1_1ListTagsForDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForDomainCommand = deserializeAws_json1_1ListTagsForDomainCommand;
async function deserializeAws_json1_1ListTagsForDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterDomainCommand = deserializeAws_json1_1RegisterDomainCommand;
async function deserializeAws_json1_1RegisterDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DomainLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#DomainLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RenewDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RenewDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RenewDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RenewDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RenewDomainCommand = deserializeAws_json1_1RenewDomainCommand;
async function deserializeAws_json1_1RenewDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResendContactReachabilityEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResendContactReachabilityEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResendContactReachabilityEmailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResendContactReachabilityEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResendContactReachabilityEmailCommand = deserializeAws_json1_1ResendContactReachabilityEmailCommand;
async function deserializeAws_json1_1ResendContactReachabilityEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RetrieveDomainAuthCodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveDomainAuthCodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RetrieveDomainAuthCodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RetrieveDomainAuthCodeCommand = deserializeAws_json1_1RetrieveDomainAuthCodeCommand;
async function deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TransferDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TransferDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TransferDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TransferDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TransferDomainCommand = deserializeAws_json1_1TransferDomainCommand;
async function deserializeAws_json1_1TransferDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DomainLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#DomainLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDomainContactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDomainContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainContactResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainContactResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDomainContactCommand = deserializeAws_json1_1UpdateDomainContactCommand;
async function deserializeAws_json1_1UpdateDomainContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDomainContactPrivacyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainContactPrivacyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainContactPrivacyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDomainContactPrivacyCommand = deserializeAws_json1_1UpdateDomainContactPrivacyCommand;
async function deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDomainNameserversCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDomainNameserversCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainNameserversResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainNameserversResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDomainNameserversCommand = deserializeAws_json1_1UpdateDomainNameserversCommand;
async function deserializeAws_json1_1UpdateDomainNameserversCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateTagsForDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTagsForDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTagsForDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTagsForDomainCommand = deserializeAws_json1_1UpdateTagsForDomainCommand;
async function deserializeAws_json1_1UpdateTagsForDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ViewBillingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ViewBillingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ViewBillingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ViewBillingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ViewBillingCommand = deserializeAws_json1_1ViewBillingCommand;
async function deserializeAws_json1_1ViewBillingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains.v20140515#InvalidInput":
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
const deserializeAws_json1_1DomainLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DomainLimitExceeded(body, context);
    const contents = Object.assign({ name: "DomainLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequest(body, context);
    const contents = Object.assign({ name: "DuplicateRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInput(body, context);
    const contents = Object.assign({ name: "InvalidInput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationLimitExceeded(body, context);
    const contents = Object.assign({ name: "OperationLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TLDRulesViolationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TLDRulesViolation(body, context);
    const contents = Object.assign({ name: "TLDRulesViolation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedTLDResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedTLD(body, context);
    const contents = Object.assign({ name: "UnsupportedTLD", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CheckDomainAvailabilityRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.IdnLangCode !== undefined) {
        bodyParams["IdnLangCode"] = input.IdnLangCode;
    }
    return bodyParams;
};
const serializeAws_json1_1CheckDomainTransferabilityRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthCode !== undefined) {
        bodyParams["AuthCode"] = input.AuthCode;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1ContactDetail = (input, context) => {
    const bodyParams = {};
    if (input.AddressLine1 !== undefined) {
        bodyParams["AddressLine1"] = input.AddressLine1;
    }
    if (input.AddressLine2 !== undefined) {
        bodyParams["AddressLine2"] = input.AddressLine2;
    }
    if (input.City !== undefined) {
        bodyParams["City"] = input.City;
    }
    if (input.ContactType !== undefined) {
        bodyParams["ContactType"] = input.ContactType;
    }
    if (input.CountryCode !== undefined) {
        bodyParams["CountryCode"] = input.CountryCode;
    }
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.ExtraParams !== undefined) {
        bodyParams["ExtraParams"] = serializeAws_json1_1ExtraParamList(input.ExtraParams, context);
    }
    if (input.Fax !== undefined) {
        bodyParams["Fax"] = input.Fax;
    }
    if (input.FirstName !== undefined) {
        bodyParams["FirstName"] = input.FirstName;
    }
    if (input.LastName !== undefined) {
        bodyParams["LastName"] = input.LastName;
    }
    if (input.OrganizationName !== undefined) {
        bodyParams["OrganizationName"] = input.OrganizationName;
    }
    if (input.PhoneNumber !== undefined) {
        bodyParams["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    if (input.ZipCode !== undefined) {
        bodyParams["ZipCode"] = input.ZipCode;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagsForDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.TagsToDelete !== undefined) {
        bodyParams["TagsToDelete"] = serializeAws_json1_1TagKeyList(input.TagsToDelete, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DisableDomainAutoRenewRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableDomainTransferLockRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableDomainAutoRenewRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableDomainTransferLockRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1ExtraParam = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ExtraParamList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ExtraParam(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetContactReachabilityStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDomainDetailRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDomainSuggestionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.OnlyAvailable !== undefined) {
        bodyParams["OnlyAvailable"] = input.OnlyAvailable;
    }
    if (input.SuggestionCount !== undefined) {
        bodyParams["SuggestionCount"] = input.SuggestionCount;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOperationDetailRequest = (input, context) => {
    const bodyParams = {};
    if (input.OperationId !== undefined) {
        bodyParams["OperationId"] = input.OperationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GlueIpList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListDomainsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOperationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    if (input.SubmittedSince !== undefined) {
        bodyParams["SubmittedSince"] = Math.round(input.SubmittedSince.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1Nameserver = (input, context) => {
    const bodyParams = {};
    if (input.GlueIps !== undefined) {
        bodyParams["GlueIps"] = serializeAws_json1_1GlueIpList(input.GlueIps, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1NameserverList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Nameserver(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RegisterDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.AdminContact !== undefined) {
        bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(input.AdminContact, context);
    }
    if (input.AutoRenew !== undefined) {
        bodyParams["AutoRenew"] = input.AutoRenew;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.DurationInYears !== undefined) {
        bodyParams["DurationInYears"] = input.DurationInYears;
    }
    if (input.IdnLangCode !== undefined) {
        bodyParams["IdnLangCode"] = input.IdnLangCode;
    }
    if (input.PrivacyProtectAdminContact !== undefined) {
        bodyParams["PrivacyProtectAdminContact"] = input.PrivacyProtectAdminContact;
    }
    if (input.PrivacyProtectRegistrantContact !== undefined) {
        bodyParams["PrivacyProtectRegistrantContact"] =
            input.PrivacyProtectRegistrantContact;
    }
    if (input.PrivacyProtectTechContact !== undefined) {
        bodyParams["PrivacyProtectTechContact"] = input.PrivacyProtectTechContact;
    }
    if (input.RegistrantContact !== undefined) {
        bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(input.RegistrantContact, context);
    }
    if (input.TechContact !== undefined) {
        bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(input.TechContact, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RenewDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.CurrentExpiryYear !== undefined) {
        bodyParams["CurrentExpiryYear"] = input.CurrentExpiryYear;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.DurationInYears !== undefined) {
        bodyParams["DurationInYears"] = input.DurationInYears;
    }
    return bodyParams;
};
const serializeAws_json1_1ResendContactReachabilityEmailRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1RetrieveDomainAuthCodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    return bodyParams;
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
const serializeAws_json1_1TransferDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.AdminContact !== undefined) {
        bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(input.AdminContact, context);
    }
    if (input.AuthCode !== undefined) {
        bodyParams["AuthCode"] = input.AuthCode;
    }
    if (input.AutoRenew !== undefined) {
        bodyParams["AutoRenew"] = input.AutoRenew;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.DurationInYears !== undefined) {
        bodyParams["DurationInYears"] = input.DurationInYears;
    }
    if (input.IdnLangCode !== undefined) {
        bodyParams["IdnLangCode"] = input.IdnLangCode;
    }
    if (input.Nameservers !== undefined) {
        bodyParams["Nameservers"] = serializeAws_json1_1NameserverList(input.Nameservers, context);
    }
    if (input.PrivacyProtectAdminContact !== undefined) {
        bodyParams["PrivacyProtectAdminContact"] = input.PrivacyProtectAdminContact;
    }
    if (input.PrivacyProtectRegistrantContact !== undefined) {
        bodyParams["PrivacyProtectRegistrantContact"] =
            input.PrivacyProtectRegistrantContact;
    }
    if (input.PrivacyProtectTechContact !== undefined) {
        bodyParams["PrivacyProtectTechContact"] = input.PrivacyProtectTechContact;
    }
    if (input.RegistrantContact !== undefined) {
        bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(input.RegistrantContact, context);
    }
    if (input.TechContact !== undefined) {
        bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(input.TechContact, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDomainContactPrivacyRequest = (input, context) => {
    const bodyParams = {};
    if (input.AdminPrivacy !== undefined) {
        bodyParams["AdminPrivacy"] = input.AdminPrivacy;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.RegistrantPrivacy !== undefined) {
        bodyParams["RegistrantPrivacy"] = input.RegistrantPrivacy;
    }
    if (input.TechPrivacy !== undefined) {
        bodyParams["TechPrivacy"] = input.TechPrivacy;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDomainContactRequest = (input, context) => {
    const bodyParams = {};
    if (input.AdminContact !== undefined) {
        bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(input.AdminContact, context);
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.RegistrantContact !== undefined) {
        bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(input.RegistrantContact, context);
    }
    if (input.TechContact !== undefined) {
        bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(input.TechContact, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDomainNameserversRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.FIAuthKey !== undefined) {
        bodyParams["FIAuthKey"] = input.FIAuthKey;
    }
    if (input.Nameservers !== undefined) {
        bodyParams["Nameservers"] = serializeAws_json1_1NameserverList(input.Nameservers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTagsForDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.TagsToUpdate !== undefined) {
        bodyParams["TagsToUpdate"] = serializeAws_json1_1TagList(input.TagsToUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ViewBillingRequest = (input, context) => {
    const bodyParams = {};
    if (input.End !== undefined) {
        bodyParams["End"] = Math.round(input.End.getTime() / 1000);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    if (input.Start !== undefined) {
        bodyParams["Start"] = Math.round(input.Start.getTime() / 1000);
    }
    return bodyParams;
};
const deserializeAws_json1_1BillingRecord = (output, context) => {
    let contents = {
        __type: "BillingRecord",
        BillDate: undefined,
        DomainName: undefined,
        InvoiceId: undefined,
        Operation: undefined,
        Price: undefined
    };
    if (output.BillDate !== undefined && output.BillDate !== null) {
        contents.BillDate = new Date(Math.round(output.BillDate * 1000));
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.InvoiceId !== undefined && output.InvoiceId !== null) {
        contents.InvoiceId = output.InvoiceId;
    }
    if (output.Operation !== undefined && output.Operation !== null) {
        contents.Operation = output.Operation;
    }
    if (output.Price !== undefined && output.Price !== null) {
        contents.Price = output.Price;
    }
    return contents;
};
const deserializeAws_json1_1BillingRecords = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BillingRecord(entry, context));
};
const deserializeAws_json1_1CheckDomainAvailabilityResponse = (output, context) => {
    let contents = {
        __type: "CheckDomainAvailabilityResponse",
        Availability: undefined
    };
    if (output.Availability !== undefined && output.Availability !== null) {
        contents.Availability = output.Availability;
    }
    return contents;
};
const deserializeAws_json1_1CheckDomainTransferabilityResponse = (output, context) => {
    let contents = {
        __type: "CheckDomainTransferabilityResponse",
        Transferability: undefined
    };
    if (output.Transferability !== undefined && output.Transferability !== null) {
        contents.Transferability = deserializeAws_json1_1DomainTransferability(output.Transferability, context);
    }
    return contents;
};
const deserializeAws_json1_1ContactDetail = (output, context) => {
    let contents = {
        __type: "ContactDetail",
        AddressLine1: undefined,
        AddressLine2: undefined,
        City: undefined,
        ContactType: undefined,
        CountryCode: undefined,
        Email: undefined,
        ExtraParams: undefined,
        Fax: undefined,
        FirstName: undefined,
        LastName: undefined,
        OrganizationName: undefined,
        PhoneNumber: undefined,
        State: undefined,
        ZipCode: undefined
    };
    if (output.AddressLine1 !== undefined && output.AddressLine1 !== null) {
        contents.AddressLine1 = output.AddressLine1;
    }
    if (output.AddressLine2 !== undefined && output.AddressLine2 !== null) {
        contents.AddressLine2 = output.AddressLine2;
    }
    if (output.City !== undefined && output.City !== null) {
        contents.City = output.City;
    }
    if (output.ContactType !== undefined && output.ContactType !== null) {
        contents.ContactType = output.ContactType;
    }
    if (output.CountryCode !== undefined && output.CountryCode !== null) {
        contents.CountryCode = output.CountryCode;
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.ExtraParams !== undefined && output.ExtraParams !== null) {
        contents.ExtraParams = deserializeAws_json1_1ExtraParamList(output.ExtraParams, context);
    }
    if (output.Fax !== undefined && output.Fax !== null) {
        contents.Fax = output.Fax;
    }
    if (output.FirstName !== undefined && output.FirstName !== null) {
        contents.FirstName = output.FirstName;
    }
    if (output.LastName !== undefined && output.LastName !== null) {
        contents.LastName = output.LastName;
    }
    if (output.OrganizationName !== undefined &&
        output.OrganizationName !== null) {
        contents.OrganizationName = output.OrganizationName;
    }
    if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
        contents.PhoneNumber = output.PhoneNumber;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.ZipCode !== undefined && output.ZipCode !== null) {
        contents.ZipCode = output.ZipCode;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTagsForDomainResponse = (output, context) => {
    let contents = {
        __type: "DeleteTagsForDomainResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisableDomainAutoRenewResponse = (output, context) => {
    let contents = {
        __type: "DisableDomainAutoRenewResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisableDomainTransferLockResponse = (output, context) => {
    let contents = {
        __type: "DisableDomainTransferLockResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1DomainLimitExceeded = (output, context) => {
    let contents = {
        __type: "DomainLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DomainStatusList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DomainSuggestion = (output, context) => {
    let contents = {
        __type: "DomainSuggestion",
        Availability: undefined,
        DomainName: undefined
    };
    if (output.Availability !== undefined && output.Availability !== null) {
        contents.Availability = output.Availability;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    return contents;
};
const deserializeAws_json1_1DomainSuggestionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainSuggestion(entry, context));
};
const deserializeAws_json1_1DomainSummary = (output, context) => {
    let contents = {
        __type: "DomainSummary",
        AutoRenew: undefined,
        DomainName: undefined,
        Expiry: undefined,
        TransferLock: undefined
    };
    if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
        contents.AutoRenew = output.AutoRenew;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.Expiry !== undefined && output.Expiry !== null) {
        contents.Expiry = new Date(Math.round(output.Expiry * 1000));
    }
    if (output.TransferLock !== undefined && output.TransferLock !== null) {
        contents.TransferLock = output.TransferLock;
    }
    return contents;
};
const deserializeAws_json1_1DomainSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainSummary(entry, context));
};
const deserializeAws_json1_1DomainTransferability = (output, context) => {
    let contents = {
        __type: "DomainTransferability",
        Transferable: undefined
    };
    if (output.Transferable !== undefined && output.Transferable !== null) {
        contents.Transferable = output.Transferable;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateRequest = (output, context) => {
    let contents = {
        __type: "DuplicateRequest",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EnableDomainAutoRenewResponse = (output, context) => {
    let contents = {
        __type: "EnableDomainAutoRenewResponse"
    };
    return contents;
};
const deserializeAws_json1_1EnableDomainTransferLockResponse = (output, context) => {
    let contents = {
        __type: "EnableDomainTransferLockResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1ExtraParam = (output, context) => {
    let contents = {
        __type: "ExtraParam",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ExtraParamList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExtraParam(entry, context));
};
const deserializeAws_json1_1GetContactReachabilityStatusResponse = (output, context) => {
    let contents = {
        __type: "GetContactReachabilityStatusResponse",
        domainName: undefined,
        status: undefined
    };
    if (output.domainName !== undefined && output.domainName !== null) {
        contents.domainName = output.domainName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1GetDomainDetailResponse = (output, context) => {
    let contents = {
        __type: "GetDomainDetailResponse",
        AbuseContactEmail: undefined,
        AbuseContactPhone: undefined,
        AdminContact: undefined,
        AdminPrivacy: undefined,
        AutoRenew: undefined,
        CreationDate: undefined,
        DnsSec: undefined,
        DomainName: undefined,
        ExpirationDate: undefined,
        Nameservers: undefined,
        RegistrantContact: undefined,
        RegistrantPrivacy: undefined,
        RegistrarName: undefined,
        RegistrarUrl: undefined,
        RegistryDomainId: undefined,
        Reseller: undefined,
        StatusList: undefined,
        TechContact: undefined,
        TechPrivacy: undefined,
        UpdatedDate: undefined,
        WhoIsServer: undefined
    };
    if (output.AbuseContactEmail !== undefined &&
        output.AbuseContactEmail !== null) {
        contents.AbuseContactEmail = output.AbuseContactEmail;
    }
    if (output.AbuseContactPhone !== undefined &&
        output.AbuseContactPhone !== null) {
        contents.AbuseContactPhone = output.AbuseContactPhone;
    }
    if (output.AdminContact !== undefined && output.AdminContact !== null) {
        contents.AdminContact = deserializeAws_json1_1ContactDetail(output.AdminContact, context);
    }
    if (output.AdminPrivacy !== undefined && output.AdminPrivacy !== null) {
        contents.AdminPrivacy = output.AdminPrivacy;
    }
    if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
        contents.AutoRenew = output.AutoRenew;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.DnsSec !== undefined && output.DnsSec !== null) {
        contents.DnsSec = output.DnsSec;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
        contents.ExpirationDate = new Date(Math.round(output.ExpirationDate * 1000));
    }
    if (output.Nameservers !== undefined && output.Nameservers !== null) {
        contents.Nameservers = deserializeAws_json1_1NameserverList(output.Nameservers, context);
    }
    if (output.RegistrantContact !== undefined &&
        output.RegistrantContact !== null) {
        contents.RegistrantContact = deserializeAws_json1_1ContactDetail(output.RegistrantContact, context);
    }
    if (output.RegistrantPrivacy !== undefined &&
        output.RegistrantPrivacy !== null) {
        contents.RegistrantPrivacy = output.RegistrantPrivacy;
    }
    if (output.RegistrarName !== undefined && output.RegistrarName !== null) {
        contents.RegistrarName = output.RegistrarName;
    }
    if (output.RegistrarUrl !== undefined && output.RegistrarUrl !== null) {
        contents.RegistrarUrl = output.RegistrarUrl;
    }
    if (output.RegistryDomainId !== undefined &&
        output.RegistryDomainId !== null) {
        contents.RegistryDomainId = output.RegistryDomainId;
    }
    if (output.Reseller !== undefined && output.Reseller !== null) {
        contents.Reseller = output.Reseller;
    }
    if (output.StatusList !== undefined && output.StatusList !== null) {
        contents.StatusList = deserializeAws_json1_1DomainStatusList(output.StatusList, context);
    }
    if (output.TechContact !== undefined && output.TechContact !== null) {
        contents.TechContact = deserializeAws_json1_1ContactDetail(output.TechContact, context);
    }
    if (output.TechPrivacy !== undefined && output.TechPrivacy !== null) {
        contents.TechPrivacy = output.TechPrivacy;
    }
    if (output.UpdatedDate !== undefined && output.UpdatedDate !== null) {
        contents.UpdatedDate = new Date(Math.round(output.UpdatedDate * 1000));
    }
    if (output.WhoIsServer !== undefined && output.WhoIsServer !== null) {
        contents.WhoIsServer = output.WhoIsServer;
    }
    return contents;
};
const deserializeAws_json1_1GetDomainSuggestionsResponse = (output, context) => {
    let contents = {
        __type: "GetDomainSuggestionsResponse",
        SuggestionsList: undefined
    };
    if (output.SuggestionsList !== undefined && output.SuggestionsList !== null) {
        contents.SuggestionsList = deserializeAws_json1_1DomainSuggestionsList(output.SuggestionsList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOperationDetailResponse = (output, context) => {
    let contents = {
        __type: "GetOperationDetailResponse",
        DomainName: undefined,
        Message: undefined,
        OperationId: undefined,
        Status: undefined,
        SubmittedDate: undefined,
        Type: undefined
    };
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubmittedDate !== undefined && output.SubmittedDate !== null) {
        contents.SubmittedDate = new Date(Math.round(output.SubmittedDate * 1000));
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1GlueIpList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InvalidInput = (output, context) => {
    let contents = {
        __type: "InvalidInput",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListDomainsResponse = (output, context) => {
    let contents = {
        __type: "ListDomainsResponse",
        Domains: undefined,
        NextPageMarker: undefined
    };
    if (output.Domains !== undefined && output.Domains !== null) {
        contents.Domains = deserializeAws_json1_1DomainSummaryList(output.Domains, context);
    }
    if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
        contents.NextPageMarker = output.NextPageMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListOperationsResponse = (output, context) => {
    let contents = {
        __type: "ListOperationsResponse",
        NextPageMarker: undefined,
        Operations: undefined
    };
    if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
        contents.NextPageMarker = output.NextPageMarker;
    }
    if (output.Operations !== undefined && output.Operations !== null) {
        contents.Operations = deserializeAws_json1_1OperationSummaryList(output.Operations, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForDomainResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForDomainResponse",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1Nameserver = (output, context) => {
    let contents = {
        __type: "Nameserver",
        GlueIps: undefined,
        Name: undefined
    };
    if (output.GlueIps !== undefined && output.GlueIps !== null) {
        contents.GlueIps = deserializeAws_json1_1GlueIpList(output.GlueIps, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1NameserverList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Nameserver(entry, context));
};
const deserializeAws_json1_1OperationLimitExceeded = (output, context) => {
    let contents = {
        __type: "OperationLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OperationSummary = (output, context) => {
    let contents = {
        __type: "OperationSummary",
        OperationId: undefined,
        Status: undefined,
        SubmittedDate: undefined,
        Type: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubmittedDate !== undefined && output.SubmittedDate !== null) {
        contents.SubmittedDate = new Date(Math.round(output.SubmittedDate * 1000));
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1OperationSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OperationSummary(entry, context));
};
const deserializeAws_json1_1RegisterDomainResponse = (output, context) => {
    let contents = {
        __type: "RegisterDomainResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1RenewDomainResponse = (output, context) => {
    let contents = {
        __type: "RenewDomainResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1ResendContactReachabilityEmailResponse = (output, context) => {
    let contents = {
        __type: "ResendContactReachabilityEmailResponse",
        domainName: undefined,
        emailAddress: undefined,
        isAlreadyVerified: undefined
    };
    if (output.domainName !== undefined && output.domainName !== null) {
        contents.domainName = output.domainName;
    }
    if (output.emailAddress !== undefined && output.emailAddress !== null) {
        contents.emailAddress = output.emailAddress;
    }
    if (output.isAlreadyVerified !== undefined &&
        output.isAlreadyVerified !== null) {
        contents.isAlreadyVerified = output.isAlreadyVerified;
    }
    return contents;
};
const deserializeAws_json1_1RetrieveDomainAuthCodeResponse = (output, context) => {
    let contents = {
        __type: "RetrieveDomainAuthCodeResponse",
        AuthCode: undefined
    };
    if (output.AuthCode !== undefined && output.AuthCode !== null) {
        contents.AuthCode = output.AuthCode;
    }
    return contents;
};
const deserializeAws_json1_1TLDRulesViolation = (output, context) => {
    let contents = {
        __type: "TLDRulesViolation",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1TransferDomainResponse = (output, context) => {
    let contents = {
        __type: "TransferDomainResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedTLD = (output, context) => {
    let contents = {
        __type: "UnsupportedTLD",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDomainContactPrivacyResponse = (output, context) => {
    let contents = {
        __type: "UpdateDomainContactPrivacyResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDomainContactResponse = (output, context) => {
    let contents = {
        __type: "UpdateDomainContactResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDomainNameserversResponse = (output, context) => {
    let contents = {
        __type: "UpdateDomainNameserversResponse",
        OperationId: undefined
    };
    if (output.OperationId !== undefined && output.OperationId !== null) {
        contents.OperationId = output.OperationId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateTagsForDomainResponse = (output, context) => {
    let contents = {
        __type: "UpdateTagsForDomainResponse"
    };
    return contents;
};
const deserializeAws_json1_1ViewBillingResponse = (output, context) => {
    let contents = {
        __type: "ViewBillingResponse",
        BillingRecords: undefined,
        NextPageMarker: undefined
    };
    if (output.BillingRecords !== undefined && output.BillingRecords !== null) {
        contents.BillingRecords = deserializeAws_json1_1BillingRecords(output.BillingRecords, context);
    }
    if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
        contents.NextPageMarker = output.NextPageMarker;
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