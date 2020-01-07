"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateAcceleratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateAccelerator";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAcceleratorCommand = serializeAws_json1_1CreateAcceleratorCommand;
async function serializeAws_json1_1CreateEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateEndpointGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEndpointGroupCommand = serializeAws_json1_1CreateEndpointGroupCommand;
async function serializeAws_json1_1CreateListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateListener";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateListenerCommand = serializeAws_json1_1CreateListenerCommand;
async function serializeAws_json1_1DeleteAcceleratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteAccelerator";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAcceleratorCommand = serializeAws_json1_1DeleteAcceleratorCommand;
async function serializeAws_json1_1DeleteEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteEndpointGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEndpointGroupCommand = serializeAws_json1_1DeleteEndpointGroupCommand;
async function serializeAws_json1_1DeleteListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteListener";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteListenerCommand = serializeAws_json1_1DeleteListenerCommand;
async function serializeAws_json1_1DescribeAcceleratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeAccelerator";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAcceleratorCommand = serializeAws_json1_1DescribeAcceleratorCommand;
async function serializeAws_json1_1DescribeAcceleratorAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAcceleratorAttributesCommand = serializeAws_json1_1DescribeAcceleratorAttributesCommand;
async function serializeAws_json1_1DescribeEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeEndpointGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointGroupCommand = serializeAws_json1_1DescribeEndpointGroupCommand;
async function serializeAws_json1_1DescribeListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeListener";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeListenerCommand = serializeAws_json1_1DescribeListenerCommand;
async function serializeAws_json1_1ListAcceleratorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListAccelerators";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAcceleratorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAcceleratorsCommand = serializeAws_json1_1ListAcceleratorsCommand;
async function serializeAws_json1_1ListEndpointGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListEndpointGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEndpointGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEndpointGroupsCommand = serializeAws_json1_1ListEndpointGroupsCommand;
async function serializeAws_json1_1ListListenersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListListeners";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListListenersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListListenersCommand = serializeAws_json1_1ListListenersCommand;
async function serializeAws_json1_1UpdateAcceleratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateAccelerator";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAcceleratorCommand = serializeAws_json1_1UpdateAcceleratorCommand;
async function serializeAws_json1_1UpdateAcceleratorAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAcceleratorAttributesCommand = serializeAws_json1_1UpdateAcceleratorAttributesCommand;
async function serializeAws_json1_1UpdateEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateEndpointGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEndpointGroupCommand = serializeAws_json1_1UpdateEndpointGroupCommand;
async function serializeAws_json1_1UpdateListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateListener";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateListenerCommand = serializeAws_json1_1UpdateListenerCommand;
async function deserializeAws_json1_1CreateAcceleratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAcceleratorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAcceleratorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAcceleratorCommand = deserializeAws_json1_1CreateAcceleratorCommand;
async function deserializeAws_json1_1CreateAcceleratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEndpointGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEndpointGroupCommand = deserializeAws_json1_1CreateEndpointGroupCommand;
async function deserializeAws_json1_1CreateEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EndpointGroupAlreadyExistsException":
        case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateListenerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateListenerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateListenerCommand = deserializeAws_json1_1CreateListenerCommand;
async function deserializeAws_json1_1CreateListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidPortRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteAcceleratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAcceleratorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAcceleratorCommand = deserializeAws_json1_1DeleteAcceleratorCommand;
async function deserializeAws_json1_1DeleteAcceleratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotDisabledException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssociatedListenerFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AssociatedListenerFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEndpointGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEndpointGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEndpointGroupCommand = deserializeAws_json1_1DeleteEndpointGroupCommand;
async function deserializeAws_json1_1DeleteEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteListenerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteListenerCommand = deserializeAws_json1_1DeleteListenerCommand;
async function deserializeAws_json1_1DeleteListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociatedEndpointGroupFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AssociatedEndpointGroupFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAcceleratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAcceleratorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAcceleratorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAcceleratorCommand = deserializeAws_json1_1DescribeAcceleratorCommand;
async function deserializeAws_json1_1DescribeAcceleratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAcceleratorAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAcceleratorAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAcceleratorAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAcceleratorAttributesCommand = deserializeAws_json1_1DescribeAcceleratorAttributesCommand;
async function deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEndpointGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointGroupCommand = deserializeAws_json1_1DescribeEndpointGroupCommand;
async function deserializeAws_json1_1DescribeEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeListenerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeListenerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeListenerCommand = deserializeAws_json1_1DescribeListenerCommand;
async function deserializeAws_json1_1DescribeListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAcceleratorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAcceleratorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAcceleratorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAcceleratorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAcceleratorsCommand = deserializeAws_json1_1ListAcceleratorsCommand;
async function deserializeAws_json1_1ListAcceleratorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListEndpointGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEndpointGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEndpointGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEndpointGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEndpointGroupsCommand = deserializeAws_json1_1ListEndpointGroupsCommand;
async function deserializeAws_json1_1ListEndpointGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListListenersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListListenersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListListenersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListListenersCommand = deserializeAws_json1_1ListListenersCommand;
async function deserializeAws_json1_1ListListenersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateAcceleratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAcceleratorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAcceleratorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAcceleratorCommand = deserializeAws_json1_1UpdateAcceleratorCommand;
async function deserializeAws_json1_1UpdateAcceleratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateAcceleratorAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAcceleratorAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAcceleratorAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAcceleratorAttributesCommand = deserializeAws_json1_1UpdateAcceleratorAttributesCommand;
async function deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateEndpointGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEndpointGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEndpointGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEndpointGroupCommand = deserializeAws_json1_1UpdateEndpointGroupCommand;
async function deserializeAws_json1_1UpdateEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateListenerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateListenerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateListenerCommand = deserializeAws_json1_1UpdateListenerCommand;
async function deserializeAws_json1_1UpdateListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator.v20180706#InvalidPortRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AcceleratorNotDisabledException(body, context);
    const contents = Object.assign({ name: "AcceleratorNotDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AcceleratorNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AcceleratorNotFoundException(body, context);
    const contents = Object.assign({ name: "AcceleratorNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedEndpointGroupFoundException(body, context);
    const contents = Object.assign({ name: "AssociatedEndpointGroupFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociatedListenerFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedListenerFoundException(body, context);
    const contents = Object.assign({ name: "AssociatedListenerFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointGroupAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "EndpointGroupAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointGroupNotFoundException(body, context);
    const contents = Object.assign({ name: "EndpointGroupNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = Object.assign({ name: "InternalServiceErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = Object.assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPortRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPortRangeException(body, context);
    const contents = Object.assign({ name: "InvalidPortRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ListenerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ListenerNotFoundException(body, context);
    const contents = Object.assign({ name: "ListenerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CreateAcceleratorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.IpAddressType !== undefined) {
        bodyParams["IpAddressType"] = input.IpAddressType;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndpointGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigurations !== undefined) {
        bodyParams["EndpointConfigurations"] = serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context);
    }
    if (input.EndpointGroupRegion !== undefined) {
        bodyParams["EndpointGroupRegion"] = input.EndpointGroupRegion;
    }
    if (input.HealthCheckIntervalSeconds !== undefined) {
        bodyParams["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckPath !== undefined) {
        bodyParams["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckPort !== undefined) {
        bodyParams["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckProtocol !== undefined) {
        bodyParams["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.ListenerArn !== undefined) {
        bodyParams["ListenerArn"] = input.ListenerArn;
    }
    if (input.ThresholdCount !== undefined) {
        bodyParams["ThresholdCount"] = input.ThresholdCount;
    }
    if (input.TrafficDialPercentage !== undefined) {
        bodyParams["TrafficDialPercentage"] = input.TrafficDialPercentage;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateListenerRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    if (input.ClientAffinity !== undefined) {
        bodyParams["ClientAffinity"] = input.ClientAffinity;
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.PortRanges !== undefined) {
        bodyParams["PortRanges"] = serializeAws_json1_1PortRanges(input.PortRanges, context);
    }
    if (input.Protocol !== undefined) {
        bodyParams["Protocol"] = input.Protocol;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAcceleratorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEndpointGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointGroupArn !== undefined) {
        bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteListenerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ListenerArn !== undefined) {
        bodyParams["ListenerArn"] = input.ListenerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAcceleratorAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAcceleratorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointGroupArn !== undefined) {
        bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeListenerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ListenerArn !== undefined) {
        bodyParams["ListenerArn"] = input.ListenerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EndpointConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ClientIPPreservationEnabled !== undefined) {
        bodyParams["ClientIPPreservationEnabled"] =
            input.ClientIPPreservationEnabled;
    }
    if (input.EndpointId !== undefined) {
        bodyParams["EndpointId"] = input.EndpointId;
    }
    if (input.Weight !== undefined) {
        bodyParams["Weight"] = input.Weight;
    }
    return bodyParams;
};
const serializeAws_json1_1EndpointConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EndpointConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListAcceleratorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEndpointGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ListenerArn !== undefined) {
        bodyParams["ListenerArn"] = input.ListenerArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListListenersRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PortRange = (input, context) => {
    const bodyParams = {};
    if (input.FromPort !== undefined) {
        bodyParams["FromPort"] = input.FromPort;
    }
    if (input.ToPort !== undefined) {
        bodyParams["ToPort"] = input.ToPort;
    }
    return bodyParams;
};
const serializeAws_json1_1PortRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PortRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateAcceleratorAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    if (input.FlowLogsEnabled !== undefined) {
        bodyParams["FlowLogsEnabled"] = input.FlowLogsEnabled;
    }
    if (input.FlowLogsS3Bucket !== undefined) {
        bodyParams["FlowLogsS3Bucket"] = input.FlowLogsS3Bucket;
    }
    if (input.FlowLogsS3Prefix !== undefined) {
        bodyParams["FlowLogsS3Prefix"] = input.FlowLogsS3Prefix;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAcceleratorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorArn !== undefined) {
        bodyParams["AcceleratorArn"] = input.AcceleratorArn;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.IpAddressType !== undefined) {
        bodyParams["IpAddressType"] = input.IpAddressType;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEndpointGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigurations !== undefined) {
        bodyParams["EndpointConfigurations"] = serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context);
    }
    if (input.EndpointGroupArn !== undefined) {
        bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
    }
    if (input.HealthCheckIntervalSeconds !== undefined) {
        bodyParams["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckPath !== undefined) {
        bodyParams["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckPort !== undefined) {
        bodyParams["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckProtocol !== undefined) {
        bodyParams["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.ThresholdCount !== undefined) {
        bodyParams["ThresholdCount"] = input.ThresholdCount;
    }
    if (input.TrafficDialPercentage !== undefined) {
        bodyParams["TrafficDialPercentage"] = input.TrafficDialPercentage;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateListenerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientAffinity !== undefined) {
        bodyParams["ClientAffinity"] = input.ClientAffinity;
    }
    if (input.ListenerArn !== undefined) {
        bodyParams["ListenerArn"] = input.ListenerArn;
    }
    if (input.PortRanges !== undefined) {
        bodyParams["PortRanges"] = serializeAws_json1_1PortRanges(input.PortRanges, context);
    }
    if (input.Protocol !== undefined) {
        bodyParams["Protocol"] = input.Protocol;
    }
    return bodyParams;
};
const deserializeAws_json1_1Accelerator = (output, context) => {
    let contents = {
        __type: "Accelerator",
        AcceleratorArn: undefined,
        CreatedTime: undefined,
        DnsName: undefined,
        Enabled: undefined,
        IpAddressType: undefined,
        IpSets: undefined,
        LastModifiedTime: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.AcceleratorArn !== undefined && output.AcceleratorArn !== null) {
        contents.AcceleratorArn = output.AcceleratorArn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.IpAddressType !== undefined && output.IpAddressType !== null) {
        contents.IpAddressType = output.IpAddressType;
    }
    if (output.IpSets !== undefined && output.IpSets !== null) {
        contents.IpSets = deserializeAws_json1_1IpSets(output.IpSets, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AcceleratorAttributes = (output, context) => {
    let contents = {
        __type: "AcceleratorAttributes",
        FlowLogsEnabled: undefined,
        FlowLogsS3Bucket: undefined,
        FlowLogsS3Prefix: undefined
    };
    if (output.FlowLogsEnabled !== undefined && output.FlowLogsEnabled !== null) {
        contents.FlowLogsEnabled = output.FlowLogsEnabled;
    }
    if (output.FlowLogsS3Bucket !== undefined &&
        output.FlowLogsS3Bucket !== null) {
        contents.FlowLogsS3Bucket = output.FlowLogsS3Bucket;
    }
    if (output.FlowLogsS3Prefix !== undefined &&
        output.FlowLogsS3Prefix !== null) {
        contents.FlowLogsS3Prefix = output.FlowLogsS3Prefix;
    }
    return contents;
};
const deserializeAws_json1_1AcceleratorNotDisabledException = (output, context) => {
    let contents = {
        __type: "AcceleratorNotDisabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AcceleratorNotFoundException = (output, context) => {
    let contents = {
        __type: "AcceleratorNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Accelerators = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Accelerator(entry, context));
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
const deserializeAws_json1_1AssociatedEndpointGroupFoundException = (output, context) => {
    let contents = {
        __type: "AssociatedEndpointGroupFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociatedListenerFoundException = (output, context) => {
    let contents = {
        __type: "AssociatedListenerFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateAcceleratorResponse = (output, context) => {
    let contents = {
        __type: "CreateAcceleratorResponse",
        Accelerator: undefined
    };
    if (output.Accelerator !== undefined && output.Accelerator !== null) {
        contents.Accelerator = deserializeAws_json1_1Accelerator(output.Accelerator, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateEndpointGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateEndpointGroupResponse",
        EndpointGroup: undefined
    };
    if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
        contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateListenerResponse = (output, context) => {
    let contents = {
        __type: "CreateListenerResponse",
        Listener: undefined
    };
    if (output.Listener !== undefined && output.Listener !== null) {
        contents.Listener = deserializeAws_json1_1Listener(output.Listener, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAcceleratorAttributesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAcceleratorAttributesResponse",
        AcceleratorAttributes: undefined
    };
    if (output.AcceleratorAttributes !== undefined &&
        output.AcceleratorAttributes !== null) {
        contents.AcceleratorAttributes = deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAcceleratorResponse = (output, context) => {
    let contents = {
        __type: "DescribeAcceleratorResponse",
        Accelerator: undefined
    };
    if (output.Accelerator !== undefined && output.Accelerator !== null) {
        contents.Accelerator = deserializeAws_json1_1Accelerator(output.Accelerator, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointGroupResponse = (output, context) => {
    let contents = {
        __type: "DescribeEndpointGroupResponse",
        EndpointGroup: undefined
    };
    if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
        contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeListenerResponse = (output, context) => {
    let contents = {
        __type: "DescribeListenerResponse",
        Listener: undefined
    };
    if (output.Listener !== undefined && output.Listener !== null) {
        contents.Listener = deserializeAws_json1_1Listener(output.Listener, context);
    }
    return contents;
};
const deserializeAws_json1_1EndpointDescription = (output, context) => {
    let contents = {
        __type: "EndpointDescription",
        ClientIPPreservationEnabled: undefined,
        EndpointId: undefined,
        HealthReason: undefined,
        HealthState: undefined,
        Weight: undefined
    };
    if (output.ClientIPPreservationEnabled !== undefined &&
        output.ClientIPPreservationEnabled !== null) {
        contents.ClientIPPreservationEnabled = output.ClientIPPreservationEnabled;
    }
    if (output.EndpointId !== undefined && output.EndpointId !== null) {
        contents.EndpointId = output.EndpointId;
    }
    if (output.HealthReason !== undefined && output.HealthReason !== null) {
        contents.HealthReason = output.HealthReason;
    }
    if (output.HealthState !== undefined && output.HealthState !== null) {
        contents.HealthState = output.HealthState;
    }
    if (output.Weight !== undefined && output.Weight !== null) {
        contents.Weight = output.Weight;
    }
    return contents;
};
const deserializeAws_json1_1EndpointDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EndpointDescription(entry, context));
};
const deserializeAws_json1_1EndpointGroup = (output, context) => {
    let contents = {
        __type: "EndpointGroup",
        EndpointDescriptions: undefined,
        EndpointGroupArn: undefined,
        EndpointGroupRegion: undefined,
        HealthCheckIntervalSeconds: undefined,
        HealthCheckPath: undefined,
        HealthCheckPort: undefined,
        HealthCheckProtocol: undefined,
        ThresholdCount: undefined,
        TrafficDialPercentage: undefined
    };
    if (output.EndpointDescriptions !== undefined &&
        output.EndpointDescriptions !== null) {
        contents.EndpointDescriptions = deserializeAws_json1_1EndpointDescriptions(output.EndpointDescriptions, context);
    }
    if (output.EndpointGroupArn !== undefined &&
        output.EndpointGroupArn !== null) {
        contents.EndpointGroupArn = output.EndpointGroupArn;
    }
    if (output.EndpointGroupRegion !== undefined &&
        output.EndpointGroupRegion !== null) {
        contents.EndpointGroupRegion = output.EndpointGroupRegion;
    }
    if (output.HealthCheckIntervalSeconds !== undefined &&
        output.HealthCheckIntervalSeconds !== null) {
        contents.HealthCheckIntervalSeconds = output.HealthCheckIntervalSeconds;
    }
    if (output.HealthCheckPath !== undefined && output.HealthCheckPath !== null) {
        contents.HealthCheckPath = output.HealthCheckPath;
    }
    if (output.HealthCheckPort !== undefined && output.HealthCheckPort !== null) {
        contents.HealthCheckPort = output.HealthCheckPort;
    }
    if (output.HealthCheckProtocol !== undefined &&
        output.HealthCheckProtocol !== null) {
        contents.HealthCheckProtocol = output.HealthCheckProtocol;
    }
    if (output.ThresholdCount !== undefined && output.ThresholdCount !== null) {
        contents.ThresholdCount = output.ThresholdCount;
    }
    if (output.TrafficDialPercentage !== undefined &&
        output.TrafficDialPercentage !== null) {
        contents.TrafficDialPercentage = output.TrafficDialPercentage;
    }
    return contents;
};
const deserializeAws_json1_1EndpointGroupAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "EndpointGroupAlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EndpointGroupNotFoundException = (output, context) => {
    let contents = {
        __type: "EndpointGroupNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EndpointGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EndpointGroup(entry, context));
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
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    let contents = {
        __type: "InvalidArgumentException",
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
const deserializeAws_json1_1InvalidPortRangeException = (output, context) => {
    let contents = {
        __type: "InvalidPortRangeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IpAddresses = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IpSet = (output, context) => {
    let contents = {
        __type: "IpSet",
        IpAddresses: undefined,
        IpFamily: undefined
    };
    if (output.IpAddresses !== undefined && output.IpAddresses !== null) {
        contents.IpAddresses = deserializeAws_json1_1IpAddresses(output.IpAddresses, context);
    }
    if (output.IpFamily !== undefined && output.IpFamily !== null) {
        contents.IpFamily = output.IpFamily;
    }
    return contents;
};
const deserializeAws_json1_1IpSets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IpSet(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAcceleratorsResponse = (output, context) => {
    let contents = {
        __type: "ListAcceleratorsResponse",
        Accelerators: undefined,
        NextToken: undefined
    };
    if (output.Accelerators !== undefined && output.Accelerators !== null) {
        contents.Accelerators = deserializeAws_json1_1Accelerators(output.Accelerators, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEndpointGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListEndpointGroupsResponse",
        EndpointGroups: undefined,
        NextToken: undefined
    };
    if (output.EndpointGroups !== undefined && output.EndpointGroups !== null) {
        contents.EndpointGroups = deserializeAws_json1_1EndpointGroups(output.EndpointGroups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListListenersResponse = (output, context) => {
    let contents = {
        __type: "ListListenersResponse",
        Listeners: undefined,
        NextToken: undefined
    };
    if (output.Listeners !== undefined && output.Listeners !== null) {
        contents.Listeners = deserializeAws_json1_1Listeners(output.Listeners, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1Listener = (output, context) => {
    let contents = {
        __type: "Listener",
        ClientAffinity: undefined,
        ListenerArn: undefined,
        PortRanges: undefined,
        Protocol: undefined
    };
    if (output.ClientAffinity !== undefined && output.ClientAffinity !== null) {
        contents.ClientAffinity = output.ClientAffinity;
    }
    if (output.ListenerArn !== undefined && output.ListenerArn !== null) {
        contents.ListenerArn = output.ListenerArn;
    }
    if (output.PortRanges !== undefined && output.PortRanges !== null) {
        contents.PortRanges = deserializeAws_json1_1PortRanges(output.PortRanges, context);
    }
    if (output.Protocol !== undefined && output.Protocol !== null) {
        contents.Protocol = output.Protocol;
    }
    return contents;
};
const deserializeAws_json1_1ListenerNotFoundException = (output, context) => {
    let contents = {
        __type: "ListenerNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Listeners = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Listener(entry, context));
};
const deserializeAws_json1_1PortRange = (output, context) => {
    let contents = {
        __type: "PortRange",
        FromPort: undefined,
        ToPort: undefined
    };
    if (output.FromPort !== undefined && output.FromPort !== null) {
        contents.FromPort = output.FromPort;
    }
    if (output.ToPort !== undefined && output.ToPort !== null) {
        contents.ToPort = output.ToPort;
    }
    return contents;
};
const deserializeAws_json1_1PortRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PortRange(entry, context));
};
const deserializeAws_json1_1UpdateAcceleratorAttributesResponse = (output, context) => {
    let contents = {
        __type: "UpdateAcceleratorAttributesResponse",
        AcceleratorAttributes: undefined
    };
    if (output.AcceleratorAttributes !== undefined &&
        output.AcceleratorAttributes !== null) {
        contents.AcceleratorAttributes = deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateAcceleratorResponse = (output, context) => {
    let contents = {
        __type: "UpdateAcceleratorResponse",
        Accelerator: undefined
    };
    if (output.Accelerator !== undefined && output.Accelerator !== null) {
        contents.Accelerator = deserializeAws_json1_1Accelerator(output.Accelerator, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateEndpointGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateEndpointGroupResponse",
        EndpointGroup: undefined
    };
    if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
        contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateListenerResponse = (output, context) => {
    let contents = {
        __type: "UpdateListenerResponse",
        Listener: undefined
    };
    if (output.Listener !== undefined && output.Listener !== null) {
        contents.Listener = deserializeAws_json1_1Listener(output.Listener, context);
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