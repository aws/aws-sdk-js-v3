"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchCheckLayerAvailabilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCheckLayerAvailabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchCheckLayerAvailabilityCommand = serializeAws_json1_1BatchCheckLayerAvailabilityCommand;
async function serializeAws_json1_1BatchDeleteImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteImageCommand = serializeAws_json1_1BatchDeleteImageCommand;
async function serializeAws_json1_1BatchGetImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.BatchGetImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetImageCommand = serializeAws_json1_1BatchGetImageCommand;
async function serializeAws_json1_1CompleteLayerUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1CompleteLayerUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CompleteLayerUploadCommand = serializeAws_json1_1CompleteLayerUploadCommand;
async function serializeAws_json1_1CreateRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.CreateRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRepositoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRepositoryCommand = serializeAws_json1_1CreateRepositoryCommand;
async function serializeAws_json1_1DeleteLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLifecyclePolicyCommand = serializeAws_json1_1DeleteLifecyclePolicyCommand;
async function serializeAws_json1_1DeleteRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DeleteRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRepositoryCommand = serializeAws_json1_1DeleteRepositoryCommand;
async function serializeAws_json1_1DeleteRepositoryPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRepositoryPolicyCommand = serializeAws_json1_1DeleteRepositoryPolicyCommand;
async function serializeAws_json1_1DescribeImageScanFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImageScanFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImageScanFindingsCommand = serializeAws_json1_1DescribeImageScanFindingsCommand;
async function serializeAws_json1_1DescribeImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DescribeImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImagesCommand = serializeAws_json1_1DescribeImagesCommand;
async function serializeAws_json1_1DescribeRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRepositoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRepositoriesCommand = serializeAws_json1_1DescribeRepositoriesCommand;
async function serializeAws_json1_1GetAuthorizationTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAuthorizationTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAuthorizationTokenCommand = serializeAws_json1_1GetAuthorizationTokenCommand;
async function serializeAws_json1_1GetDownloadUrlForLayerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDownloadUrlForLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDownloadUrlForLayerCommand = serializeAws_json1_1GetDownloadUrlForLayerCommand;
async function serializeAws_json1_1GetLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLifecyclePolicyCommand = serializeAws_json1_1GetLifecyclePolicyCommand;
async function serializeAws_json1_1GetLifecyclePolicyPreviewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLifecyclePolicyPreviewCommand = serializeAws_json1_1GetLifecyclePolicyPreviewCommand;
async function serializeAws_json1_1GetRepositoryPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRepositoryPolicyCommand = serializeAws_json1_1GetRepositoryPolicyCommand;
async function serializeAws_json1_1InitiateLayerUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1InitiateLayerUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InitiateLayerUploadCommand = serializeAws_json1_1InitiateLayerUploadCommand;
async function serializeAws_json1_1ListImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.ListImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListImagesCommand = serializeAws_json1_1ListImagesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.PutImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutImageCommand = serializeAws_json1_1PutImageCommand;
async function serializeAws_json1_1PutImageScanningConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutImageScanningConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutImageScanningConfigurationCommand = serializeAws_json1_1PutImageScanningConfigurationCommand;
async function serializeAws_json1_1PutImageTagMutabilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutImageTagMutabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutImageTagMutabilityCommand = serializeAws_json1_1PutImageTagMutabilityCommand;
async function serializeAws_json1_1PutLifecyclePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLifecyclePolicyCommand = serializeAws_json1_1PutLifecyclePolicyCommand;
async function serializeAws_json1_1SetRepositoryPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetRepositoryPolicyCommand = serializeAws_json1_1SetRepositoryPolicyCommand;
async function serializeAws_json1_1StartImageScanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.StartImageScan";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartImageScanRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartImageScanCommand = serializeAws_json1_1StartImageScanCommand;
async function serializeAws_json1_1StartLifecyclePolicyPreviewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartLifecyclePolicyPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartLifecyclePolicyPreviewCommand = serializeAws_json1_1StartLifecyclePolicyPreviewCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UploadLayerPartCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart";
    let body;
    body = JSON.stringify(serializeAws_json1_1UploadLayerPartRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UploadLayerPartCommand = serializeAws_json1_1UploadLayerPartCommand;
async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCheckLayerAvailabilityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchCheckLayerAvailabilityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchCheckLayerAvailabilityCommand = deserializeAws_json1_1BatchCheckLayerAvailabilityCommand;
async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeleteImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteImageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteImageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteImageCommand = deserializeAws_json1_1BatchDeleteImageCommand;
async function deserializeAws_json1_1BatchDeleteImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetImageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetImageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetImageCommand = deserializeAws_json1_1BatchGetImageCommand;
async function deserializeAws_json1_1BatchGetImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CompleteLayerUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CompleteLayerUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CompleteLayerUploadResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CompleteLayerUploadResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CompleteLayerUploadCommand = deserializeAws_json1_1CompleteLayerUploadCommand;
async function deserializeAws_json1_1CompleteLayerUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EmptyUploadException":
        case "com.amazonaws.starport.frontend#EmptyUploadException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EmptyUploadExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLayerException":
        case "com.amazonaws.starport.frontend#InvalidLayerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLayerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LayerAlreadyExistsException":
        case "com.amazonaws.starport.frontend#LayerAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LayerPartTooSmallException":
        case "com.amazonaws.starport.frontend#LayerPartTooSmallException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UploadNotFoundException":
        case "com.amazonaws.starport.frontend#UploadNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRepositoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRepositoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRepositoryCommand = deserializeAws_json1_1CreateRepositoryCommand;
async function deserializeAws_json1_1CreateRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.starport.frontend#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.starport.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryAlreadyExistsException":
        case "com.amazonaws.starport.frontend#RepositoryAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.starport.frontend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLifecyclePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLifecyclePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLifecyclePolicyCommand = deserializeAws_json1_1DeleteLifecyclePolicyCommand;
async function deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecyclePolicyNotFoundException":
        case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRepositoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRepositoryCommand = deserializeAws_json1_1DeleteRepositoryCommand;
async function deserializeAws_json1_1DeleteRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotEmptyException":
        case "com.amazonaws.starport.frontend#RepositoryNotEmptyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRepositoryPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRepositoryPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRepositoryPolicyCommand = deserializeAws_json1_1DeleteRepositoryPolicyCommand;
async function deserializeAws_json1_1DeleteRepositoryPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryPolicyNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeImageScanFindingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImageScanFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImageScanFindingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImageScanFindingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImageScanFindingsCommand = deserializeAws_json1_1DescribeImageScanFindingsCommand;
async function deserializeAws_json1_1DescribeImageScanFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ImageNotFoundException":
        case "com.amazonaws.starport.frontend#ImageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScanNotFoundException":
        case "com.amazonaws.starport.frontend#ScanNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ScanNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImagesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImagesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImagesCommand = deserializeAws_json1_1DescribeImagesCommand;
async function deserializeAws_json1_1DescribeImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ImageNotFoundException":
        case "com.amazonaws.starport.frontend#ImageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRepositoriesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRepositoriesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRepositoriesCommand = deserializeAws_json1_1DescribeRepositoriesCommand;
async function deserializeAws_json1_1DescribeRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAuthorizationTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAuthorizationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAuthorizationTokenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAuthorizationTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAuthorizationTokenCommand = deserializeAws_json1_1GetAuthorizationTokenCommand;
async function deserializeAws_json1_1GetAuthorizationTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDownloadUrlForLayerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDownloadUrlForLayerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDownloadUrlForLayerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDownloadUrlForLayerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDownloadUrlForLayerCommand = deserializeAws_json1_1GetDownloadUrlForLayerCommand;
async function deserializeAws_json1_1GetDownloadUrlForLayerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LayerInaccessibleException":
        case "com.amazonaws.starport.frontend#LayerInaccessibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LayerInaccessibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LayersNotFoundException":
        case "com.amazonaws.starport.frontend#LayersNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLifecyclePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLifecyclePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLifecyclePolicyCommand = deserializeAws_json1_1GetLifecyclePolicyCommand;
async function deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecyclePolicyNotFoundException":
        case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLifecyclePolicyPreviewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLifecyclePolicyPreviewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLifecyclePolicyPreviewCommand = deserializeAws_json1_1GetLifecyclePolicyPreviewCommand;
async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecyclePolicyPreviewNotFoundException":
        case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRepositoryPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRepositoryPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRepositoryPolicyCommand = deserializeAws_json1_1GetRepositoryPolicyCommand;
async function deserializeAws_json1_1GetRepositoryPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryPolicyNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1InitiateLayerUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InitiateLayerUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InitiateLayerUploadResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InitiateLayerUploadResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InitiateLayerUploadCommand = deserializeAws_json1_1InitiateLayerUploadCommand;
async function deserializeAws_json1_1InitiateLayerUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListImagesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListImagesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListImagesCommand = deserializeAws_json1_1ListImagesCommand;
async function deserializeAws_json1_1ListImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutImageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutImageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutImageCommand = deserializeAws_json1_1PutImageCommand;
async function deserializeAws_json1_1PutImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ImageAlreadyExistsException":
        case "com.amazonaws.starport.frontend#ImageAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTagAlreadyExistsException":
        case "com.amazonaws.starport.frontend#ImageTagAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LayersNotFoundException":
        case "com.amazonaws.starport.frontend#LayersNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.starport.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutImageScanningConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutImageScanningConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutImageScanningConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutImageScanningConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutImageScanningConfigurationCommand = deserializeAws_json1_1PutImageScanningConfigurationCommand;
async function deserializeAws_json1_1PutImageScanningConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutImageTagMutabilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutImageTagMutabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutImageTagMutabilityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutImageTagMutabilityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutImageTagMutabilityCommand = deserializeAws_json1_1PutImageTagMutabilityCommand;
async function deserializeAws_json1_1PutImageTagMutabilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutLifecyclePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLifecyclePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLifecyclePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutLifecyclePolicyCommand = deserializeAws_json1_1PutLifecyclePolicyCommand;
async function deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SetRepositoryPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetRepositoryPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetRepositoryPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetRepositoryPolicyCommand = deserializeAws_json1_1SetRepositoryPolicyCommand;
async function deserializeAws_json1_1SetRepositoryPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartImageScanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartImageScanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartImageScanResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartImageScanResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartImageScanCommand = deserializeAws_json1_1StartImageScanCommand;
async function deserializeAws_json1_1StartImageScanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ImageNotFoundException":
        case "com.amazonaws.starport.frontend#ImageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartLifecyclePolicyPreviewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartLifecyclePolicyPreviewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartLifecyclePolicyPreviewCommand = deserializeAws_json1_1StartLifecyclePolicyPreviewCommand;
async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecyclePolicyNotFoundException":
        case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecyclePolicyPreviewInProgressException":
        case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.starport.frontend#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.starport.frontend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.starport.frontend#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.starport.frontend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UploadLayerPartCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UploadLayerPartCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UploadLayerPartResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UploadLayerPartResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UploadLayerPartCommand = deserializeAws_json1_1UploadLayerPartCommand;
async function deserializeAws_json1_1UploadLayerPartCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLayerPartException":
        case "com.amazonaws.starport.frontend#InvalidLayerPartException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLayerPartExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.starport.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.starport.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.starport.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UploadNotFoundException":
        case "com.amazonaws.starport.frontend#UploadNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1EmptyUploadExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EmptyUploadException(body, context);
    const contents = Object.assign({ name: "EmptyUploadException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ImageAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageNotFoundException(body, context);
    const contents = Object.assign({ name: "ImageNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageTagAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ImageTagAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLayerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLayerException(body, context);
    const contents = Object.assign({ name: "InvalidLayerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLayerPartException(body, context);
    const contents = Object.assign({ name: "InvalidLayerPartException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagParameterException(body, context);
    const contents = Object.assign({ name: "InvalidTagParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayerAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "LayerAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LayerInaccessibleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayerInaccessibleException(body, context);
    const contents = Object.assign({ name: "LayerInaccessibleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayerPartTooSmallException(body, context);
    const contents = Object.assign({ name: "LayerPartTooSmallException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayersNotFoundException(body, context);
    const contents = Object.assign({ name: "LayersNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecyclePolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "LifecyclePolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecyclePolicyPreviewInProgressException(body, context);
    const contents = Object.assign({ name: "LifecyclePolicyPreviewInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException(body, context);
    const contents = Object.assign({ name: "LifecyclePolicyPreviewNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "RepositoryAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotEmptyException(body, context);
    const contents = Object.assign({ name: "RepositoryNotEmptyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotFoundException(body, context);
    const contents = Object.assign({ name: "RepositoryNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryPolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "RepositoryPolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ScanNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ScanNotFoundException(body, context);
    const contents = Object.assign({ name: "ScanNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerException(body, context);
    const contents = Object.assign({ name: "ServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UploadNotFoundException(body, context);
    const contents = Object.assign({ name: "UploadNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (input, context) => {
    const bodyParams = {};
    if (input.layerDigests !== undefined) {
        bodyParams["layerDigests"] = serializeAws_json1_1BatchedOperationLayerDigestList(input.layerDigests, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeleteImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageIds !== undefined) {
        bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(input.imageIds, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.acceptedMediaTypes !== undefined) {
        bodyParams["acceptedMediaTypes"] = serializeAws_json1_1MediaTypeList(input.acceptedMediaTypes, context);
    }
    if (input.imageIds !== undefined) {
        bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(input.imageIds, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchedOperationLayerDigestList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CompleteLayerUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.layerDigests !== undefined) {
        bodyParams["layerDigests"] = serializeAws_json1_1LayerDigestList(input.layerDigests, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.uploadId !== undefined) {
        bodyParams["uploadId"] = input.uploadId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRepositoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageScanningConfiguration !== undefined) {
        bodyParams["imageScanningConfiguration"] = serializeAws_json1_1ImageScanningConfiguration(input.imageScanningConfiguration, context);
    }
    if (input.imageTagMutability !== undefined) {
        bodyParams["imageTagMutability"] = input.imageTagMutability;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLifecyclePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRepositoryPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRepositoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImageScanFindingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageId !== undefined) {
        bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(input.imageId, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImagesFilter = (input, context) => {
    const bodyParams = {};
    if (input.tagStatus !== undefined) {
        bodyParams["tagStatus"] = input.tagStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1DescribeImagesFilter(input.filter, context);
    }
    if (input.imageIds !== undefined) {
        bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(input.imageIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRepositoriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryNames !== undefined) {
        bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(input.repositoryNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetAuthorizationTokenRegistryIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetAuthorizationTokenRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryIds !== undefined) {
        bodyParams["registryIds"] = serializeAws_json1_1GetAuthorizationTokenRegistryIdList(input.registryIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetDownloadUrlForLayerRequest = (input, context) => {
    const bodyParams = {};
    if (input.layerDigest !== undefined) {
        bodyParams["layerDigest"] = input.layerDigest;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLifecyclePolicyPreviewRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1LifecyclePolicyPreviewFilter(input.filter, context);
    }
    if (input.imageIds !== undefined) {
        bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(input.imageIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLifecyclePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRepositoryPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ImageIdentifier = (input, context) => {
    const bodyParams = {};
    if (input.imageDigest !== undefined) {
        bodyParams["imageDigest"] = input.imageDigest;
    }
    if (input.imageTag !== undefined) {
        bodyParams["imageTag"] = input.imageTag;
    }
    return bodyParams;
};
const serializeAws_json1_1ImageIdentifierList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ImageIdentifier(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ImageScanningConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.scanOnPush !== undefined) {
        bodyParams["scanOnPush"] = input.scanOnPush;
    }
    return bodyParams;
};
const serializeAws_json1_1InitiateLayerUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1LayerDigestList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1LifecyclePolicyPreviewFilter = (input, context) => {
    const bodyParams = {};
    if (input.tagStatus !== undefined) {
        bodyParams["tagStatus"] = input.tagStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1ListImagesFilter = (input, context) => {
    const bodyParams = {};
    if (input.tagStatus !== undefined) {
        bodyParams["tagStatus"] = input.tagStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1ListImagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1ListImagesFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1MediaTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PutImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageManifest !== undefined) {
        bodyParams["imageManifest"] = input.imageManifest;
    }
    if (input.imageTag !== undefined) {
        bodyParams["imageTag"] = input.imageTag;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutImageScanningConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageScanningConfiguration !== undefined) {
        bodyParams["imageScanningConfiguration"] = serializeAws_json1_1ImageScanningConfiguration(input.imageScanningConfiguration, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutImageTagMutabilityRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageTagMutability !== undefined) {
        bodyParams["imageTagMutability"] = input.imageTagMutability;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutLifecyclePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.lifecyclePolicyText !== undefined) {
        bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1RepositoryNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SetRepositoryPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.policyText !== undefined) {
        bodyParams["policyText"] = input.policyText;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartImageScanRequest = (input, context) => {
    const bodyParams = {};
    if (input.imageId !== undefined) {
        bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(input.imageId, context);
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartLifecyclePolicyPreviewRequest = (input, context) => {
    const bodyParams = {};
    if (input.lifecyclePolicyText !== undefined) {
        bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
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
const serializeAws_json1_1UploadLayerPartRequest = (input, context) => {
    const bodyParams = {};
    if (input.layerPartBlob !== undefined) {
        bodyParams["layerPartBlob"] = Buffer.from(input.layerPartBlob).toString("utf-8");
    }
    if (input.partFirstByte !== undefined) {
        bodyParams["partFirstByte"] = input.partFirstByte;
    }
    if (input.partLastByte !== undefined) {
        bodyParams["partLastByte"] = input.partLastByte;
    }
    if (input.registryId !== undefined) {
        bodyParams["registryId"] = input.registryId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.uploadId !== undefined) {
        bodyParams["uploadId"] = input.uploadId;
    }
    return bodyParams;
};
const deserializeAws_json1_1Attribute = (output, context) => {
    let contents = {
        __type: "Attribute",
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
const deserializeAws_json1_1AttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1AuthorizationData = (output, context) => {
    let contents = {
        __type: "AuthorizationData",
        authorizationToken: undefined,
        expiresAt: undefined,
        proxyEndpoint: undefined
    };
    if (output.authorizationToken !== undefined &&
        output.authorizationToken !== null) {
        contents.authorizationToken = output.authorizationToken;
    }
    if (output.expiresAt !== undefined && output.expiresAt !== null) {
        contents.expiresAt = new Date(Math.round(output.expiresAt * 1000));
    }
    if (output.proxyEndpoint !== undefined && output.proxyEndpoint !== null) {
        contents.proxyEndpoint = output.proxyEndpoint;
    }
    return contents;
};
const deserializeAws_json1_1AuthorizationDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AuthorizationData(entry, context));
};
const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (output, context) => {
    let contents = {
        __type: "BatchCheckLayerAvailabilityResponse",
        failures: undefined,
        layers: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1LayerFailureList(output.failures, context);
    }
    if (output.layers !== undefined && output.layers !== null) {
        contents.layers = deserializeAws_json1_1LayerList(output.layers, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteImageResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteImageResponse",
        failures: undefined,
        imageIds: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1ImageFailureList(output.failures, context);
    }
    if (output.imageIds !== undefined && output.imageIds !== null) {
        contents.imageIds = deserializeAws_json1_1ImageIdentifierList(output.imageIds, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetImageResponse = (output, context) => {
    let contents = {
        __type: "BatchGetImageResponse",
        failures: undefined,
        images: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1ImageFailureList(output.failures, context);
    }
    if (output.images !== undefined && output.images !== null) {
        contents.images = deserializeAws_json1_1ImageList(output.images, context);
    }
    return contents;
};
const deserializeAws_json1_1CompleteLayerUploadResponse = (output, context) => {
    let contents = {
        __type: "CompleteLayerUploadResponse",
        layerDigest: undefined,
        registryId: undefined,
        repositoryName: undefined,
        uploadId: undefined
    };
    if (output.layerDigest !== undefined && output.layerDigest !== null) {
        contents.layerDigest = output.layerDigest;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    return contents;
};
const deserializeAws_json1_1CreateRepositoryResponse = (output, context) => {
    let contents = {
        __type: "CreateRepositoryResponse",
        repository: undefined
    };
    if (output.repository !== undefined && output.repository !== null) {
        contents.repository = deserializeAws_json1_1Repository(output.repository, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteLifecyclePolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteLifecyclePolicyResponse",
        lastEvaluatedAt: undefined,
        lifecyclePolicyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null) {
        contents.lastEvaluatedAt = new Date(Math.round(output.lastEvaluatedAt * 1000));
    }
    if (output.lifecyclePolicyText !== undefined &&
        output.lifecyclePolicyText !== null) {
        contents.lifecyclePolicyText = output.lifecyclePolicyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteRepositoryPolicyResponse",
        policyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.policyText !== undefined && output.policyText !== null) {
        contents.policyText = output.policyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRepositoryResponse = (output, context) => {
    let contents = {
        __type: "DeleteRepositoryResponse",
        repository: undefined
    };
    if (output.repository !== undefined && output.repository !== null) {
        contents.repository = deserializeAws_json1_1Repository(output.repository, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeImageScanFindingsResponse = (output, context) => {
    let contents = {
        __type: "DescribeImageScanFindingsResponse",
        imageId: undefined,
        imageScanFindings: undefined,
        imageScanStatus: undefined,
        nextToken: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageId !== undefined && output.imageId !== null) {
        contents.imageId = deserializeAws_json1_1ImageIdentifier(output.imageId, context);
    }
    if (output.imageScanFindings !== undefined &&
        output.imageScanFindings !== null) {
        contents.imageScanFindings = deserializeAws_json1_1ImageScanFindings(output.imageScanFindings, context);
    }
    if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
        contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeImagesResponse = (output, context) => {
    let contents = {
        __type: "DescribeImagesResponse",
        imageDetails: undefined,
        nextToken: undefined
    };
    if (output.imageDetails !== undefined && output.imageDetails !== null) {
        contents.imageDetails = deserializeAws_json1_1ImageDetailList(output.imageDetails, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeRepositoriesResponse = (output, context) => {
    let contents = {
        __type: "DescribeRepositoriesResponse",
        nextToken: undefined,
        repositories: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.repositories !== undefined && output.repositories !== null) {
        contents.repositories = deserializeAws_json1_1RepositoryList(output.repositories, context);
    }
    return contents;
};
const deserializeAws_json1_1EmptyUploadException = (output, context) => {
    let contents = {
        __type: "EmptyUploadException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FindingSeverityCounts = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1GetAuthorizationTokenResponse = (output, context) => {
    let contents = {
        __type: "GetAuthorizationTokenResponse",
        authorizationData: undefined
    };
    if (output.authorizationData !== undefined &&
        output.authorizationData !== null) {
        contents.authorizationData = deserializeAws_json1_1AuthorizationDataList(output.authorizationData, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDownloadUrlForLayerResponse = (output, context) => {
    let contents = {
        __type: "GetDownloadUrlForLayerResponse",
        downloadUrl: undefined,
        layerDigest: undefined
    };
    if (output.downloadUrl !== undefined && output.downloadUrl !== null) {
        contents.downloadUrl = output.downloadUrl;
    }
    if (output.layerDigest !== undefined && output.layerDigest !== null) {
        contents.layerDigest = output.layerDigest;
    }
    return contents;
};
const deserializeAws_json1_1GetLifecyclePolicyPreviewResponse = (output, context) => {
    let contents = {
        __type: "GetLifecyclePolicyPreviewResponse",
        lifecyclePolicyText: undefined,
        nextToken: undefined,
        previewResults: undefined,
        registryId: undefined,
        repositoryName: undefined,
        status: undefined,
        summary: undefined
    };
    if (output.lifecyclePolicyText !== undefined &&
        output.lifecyclePolicyText !== null) {
        contents.lifecyclePolicyText = output.lifecyclePolicyText;
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.previewResults !== undefined && output.previewResults !== null) {
        contents.previewResults = deserializeAws_json1_1LifecyclePolicyPreviewResultList(output.previewResults, context);
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = deserializeAws_json1_1LifecyclePolicyPreviewSummary(output.summary, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLifecyclePolicyResponse = (output, context) => {
    let contents = {
        __type: "GetLifecyclePolicyResponse",
        lastEvaluatedAt: undefined,
        lifecyclePolicyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null) {
        contents.lastEvaluatedAt = new Date(Math.round(output.lastEvaluatedAt * 1000));
    }
    if (output.lifecyclePolicyText !== undefined &&
        output.lifecyclePolicyText !== null) {
        contents.lifecyclePolicyText = output.lifecyclePolicyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1GetRepositoryPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetRepositoryPolicyResponse",
        policyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.policyText !== undefined && output.policyText !== null) {
        contents.policyText = output.policyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1Image = (output, context) => {
    let contents = {
        __type: "Image",
        imageId: undefined,
        imageManifest: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageId !== undefined && output.imageId !== null) {
        contents.imageId = deserializeAws_json1_1ImageIdentifier(output.imageId, context);
    }
    if (output.imageManifest !== undefined && output.imageManifest !== null) {
        contents.imageManifest = output.imageManifest;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1ImageAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ImageAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ImageDetail = (output, context) => {
    let contents = {
        __type: "ImageDetail",
        imageDigest: undefined,
        imagePushedAt: undefined,
        imageScanFindingsSummary: undefined,
        imageScanStatus: undefined,
        imageSizeInBytes: undefined,
        imageTags: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageDigest !== undefined && output.imageDigest !== null) {
        contents.imageDigest = output.imageDigest;
    }
    if (output.imagePushedAt !== undefined && output.imagePushedAt !== null) {
        contents.imagePushedAt = new Date(Math.round(output.imagePushedAt * 1000));
    }
    if (output.imageScanFindingsSummary !== undefined &&
        output.imageScanFindingsSummary !== null) {
        contents.imageScanFindingsSummary = deserializeAws_json1_1ImageScanFindingsSummary(output.imageScanFindingsSummary, context);
    }
    if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
        contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context);
    }
    if (output.imageSizeInBytes !== undefined &&
        output.imageSizeInBytes !== null) {
        contents.imageSizeInBytes = output.imageSizeInBytes;
    }
    if (output.imageTags !== undefined && output.imageTags !== null) {
        contents.imageTags = deserializeAws_json1_1ImageTagList(output.imageTags, context);
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1ImageDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImageDetail(entry, context));
};
const deserializeAws_json1_1ImageFailure = (output, context) => {
    let contents = {
        __type: "ImageFailure",
        failureCode: undefined,
        failureReason: undefined,
        imageId: undefined
    };
    if (output.failureCode !== undefined && output.failureCode !== null) {
        contents.failureCode = output.failureCode;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.imageId !== undefined && output.imageId !== null) {
        contents.imageId = deserializeAws_json1_1ImageIdentifier(output.imageId, context);
    }
    return contents;
};
const deserializeAws_json1_1ImageFailureList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImageFailure(entry, context));
};
const deserializeAws_json1_1ImageIdentifier = (output, context) => {
    let contents = {
        __type: "ImageIdentifier",
        imageDigest: undefined,
        imageTag: undefined
    };
    if (output.imageDigest !== undefined && output.imageDigest !== null) {
        contents.imageDigest = output.imageDigest;
    }
    if (output.imageTag !== undefined && output.imageTag !== null) {
        contents.imageTag = output.imageTag;
    }
    return contents;
};
const deserializeAws_json1_1ImageIdentifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImageIdentifier(entry, context));
};
const deserializeAws_json1_1ImageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Image(entry, context));
};
const deserializeAws_json1_1ImageNotFoundException = (output, context) => {
    let contents = {
        __type: "ImageNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ImageScanFinding = (output, context) => {
    let contents = {
        __type: "ImageScanFinding",
        attributes: undefined,
        description: undefined,
        name: undefined,
        severity: undefined,
        uri: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1AttributeList(output.attributes, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.severity !== undefined && output.severity !== null) {
        contents.severity = output.severity;
    }
    if (output.uri !== undefined && output.uri !== null) {
        contents.uri = output.uri;
    }
    return contents;
};
const deserializeAws_json1_1ImageScanFindingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImageScanFinding(entry, context));
};
const deserializeAws_json1_1ImageScanFindings = (output, context) => {
    let contents = {
        __type: "ImageScanFindings",
        findingSeverityCounts: undefined,
        findings: undefined,
        imageScanCompletedAt: undefined,
        vulnerabilitySourceUpdatedAt: undefined
    };
    if (output.findingSeverityCounts !== undefined &&
        output.findingSeverityCounts !== null) {
        contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context);
    }
    if (output.findings !== undefined && output.findings !== null) {
        contents.findings = deserializeAws_json1_1ImageScanFindingList(output.findings, context);
    }
    if (output.imageScanCompletedAt !== undefined &&
        output.imageScanCompletedAt !== null) {
        contents.imageScanCompletedAt = new Date(Math.round(output.imageScanCompletedAt * 1000));
    }
    if (output.vulnerabilitySourceUpdatedAt !== undefined &&
        output.vulnerabilitySourceUpdatedAt !== null) {
        contents.vulnerabilitySourceUpdatedAt = new Date(Math.round(output.vulnerabilitySourceUpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ImageScanFindingsSummary = (output, context) => {
    let contents = {
        __type: "ImageScanFindingsSummary",
        findingSeverityCounts: undefined,
        imageScanCompletedAt: undefined,
        vulnerabilitySourceUpdatedAt: undefined
    };
    if (output.findingSeverityCounts !== undefined &&
        output.findingSeverityCounts !== null) {
        contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context);
    }
    if (output.imageScanCompletedAt !== undefined &&
        output.imageScanCompletedAt !== null) {
        contents.imageScanCompletedAt = new Date(Math.round(output.imageScanCompletedAt * 1000));
    }
    if (output.vulnerabilitySourceUpdatedAt !== undefined &&
        output.vulnerabilitySourceUpdatedAt !== null) {
        contents.vulnerabilitySourceUpdatedAt = new Date(Math.round(output.vulnerabilitySourceUpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ImageScanStatus = (output, context) => {
    let contents = {
        __type: "ImageScanStatus",
        description: undefined,
        status: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1ImageScanningConfiguration = (output, context) => {
    let contents = {
        __type: "ImageScanningConfiguration",
        scanOnPush: undefined
    };
    if (output.scanOnPush !== undefined && output.scanOnPush !== null) {
        contents.scanOnPush = output.scanOnPush;
    }
    return contents;
};
const deserializeAws_json1_1ImageTagAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ImageTagAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ImageTagList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InitiateLayerUploadResponse = (output, context) => {
    let contents = {
        __type: "InitiateLayerUploadResponse",
        partSize: undefined,
        uploadId: undefined
    };
    if (output.partSize !== undefined && output.partSize !== null) {
        contents.partSize = output.partSize;
    }
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLayerException = (output, context) => {
    let contents = {
        __type: "InvalidLayerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLayerPartException = (output, context) => {
    let contents = {
        __type: "InvalidLayerPartException",
        lastValidByteReceived: undefined,
        message: undefined,
        registryId: undefined,
        repositoryName: undefined,
        uploadId: undefined
    };
    if (output.lastValidByteReceived !== undefined &&
        output.lastValidByteReceived !== null) {
        contents.lastValidByteReceived = output.lastValidByteReceived;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagParameterException = (output, context) => {
    let contents = {
        __type: "InvalidTagParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Layer = (output, context) => {
    let contents = {
        __type: "Layer",
        layerAvailability: undefined,
        layerDigest: undefined,
        layerSize: undefined,
        mediaType: undefined
    };
    if (output.layerAvailability !== undefined &&
        output.layerAvailability !== null) {
        contents.layerAvailability = output.layerAvailability;
    }
    if (output.layerDigest !== undefined && output.layerDigest !== null) {
        contents.layerDigest = output.layerDigest;
    }
    if (output.layerSize !== undefined && output.layerSize !== null) {
        contents.layerSize = output.layerSize;
    }
    if (output.mediaType !== undefined && output.mediaType !== null) {
        contents.mediaType = output.mediaType;
    }
    return contents;
};
const deserializeAws_json1_1LayerAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "LayerAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LayerFailure = (output, context) => {
    let contents = {
        __type: "LayerFailure",
        failureCode: undefined,
        failureReason: undefined,
        layerDigest: undefined
    };
    if (output.failureCode !== undefined && output.failureCode !== null) {
        contents.failureCode = output.failureCode;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.layerDigest !== undefined && output.layerDigest !== null) {
        contents.layerDigest = output.layerDigest;
    }
    return contents;
};
const deserializeAws_json1_1LayerFailureList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LayerFailure(entry, context));
};
const deserializeAws_json1_1LayerInaccessibleException = (output, context) => {
    let contents = {
        __type: "LayerInaccessibleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LayerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Layer(entry, context));
};
const deserializeAws_json1_1LayerPartTooSmallException = (output, context) => {
    let contents = {
        __type: "LayerPartTooSmallException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LayersNotFoundException = (output, context) => {
    let contents = {
        __type: "LayersNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewInProgressException = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyPreviewInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyPreviewNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewResult = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyPreviewResult",
        action: undefined,
        appliedRulePriority: undefined,
        imageDigest: undefined,
        imagePushedAt: undefined,
        imageTags: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_json1_1LifecyclePolicyRuleAction(output.action, context);
    }
    if (output.appliedRulePriority !== undefined &&
        output.appliedRulePriority !== null) {
        contents.appliedRulePriority = output.appliedRulePriority;
    }
    if (output.imageDigest !== undefined && output.imageDigest !== null) {
        contents.imageDigest = output.imageDigest;
    }
    if (output.imagePushedAt !== undefined && output.imagePushedAt !== null) {
        contents.imagePushedAt = new Date(Math.round(output.imagePushedAt * 1000));
    }
    if (output.imageTags !== undefined && output.imageTags !== null) {
        contents.imageTags = deserializeAws_json1_1ImageTagList(output.imageTags, context);
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyPreviewResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LifecyclePolicyPreviewResult(entry, context));
};
const deserializeAws_json1_1LifecyclePolicyPreviewSummary = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyPreviewSummary",
        expiringImageTotalCount: undefined
    };
    if (output.expiringImageTotalCount !== undefined &&
        output.expiringImageTotalCount !== null) {
        contents.expiringImageTotalCount = output.expiringImageTotalCount;
    }
    return contents;
};
const deserializeAws_json1_1LifecyclePolicyRuleAction = (output, context) => {
    let contents = {
        __type: "LifecyclePolicyRuleAction",
        type: undefined
    };
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
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
const deserializeAws_json1_1ListImagesResponse = (output, context) => {
    let contents = {
        __type: "ListImagesResponse",
        imageIds: undefined,
        nextToken: undefined
    };
    if (output.imageIds !== undefined && output.imageIds !== null) {
        contents.imageIds = deserializeAws_json1_1ImageIdentifierList(output.imageIds, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1PutImageResponse = (output, context) => {
    let contents = {
        __type: "PutImageResponse",
        image: undefined
    };
    if (output.image !== undefined && output.image !== null) {
        contents.image = deserializeAws_json1_1Image(output.image, context);
    }
    return contents;
};
const deserializeAws_json1_1PutImageScanningConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutImageScanningConfigurationResponse",
        imageScanningConfiguration: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageScanningConfiguration !== undefined &&
        output.imageScanningConfiguration !== null) {
        contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context);
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PutImageTagMutabilityResponse = (output, context) => {
    let contents = {
        __type: "PutImageTagMutabilityResponse",
        imageTagMutability: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageTagMutability !== undefined &&
        output.imageTagMutability !== null) {
        contents.imageTagMutability = output.imageTagMutability;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PutLifecyclePolicyResponse = (output, context) => {
    let contents = {
        __type: "PutLifecyclePolicyResponse",
        lifecyclePolicyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.lifecyclePolicyText !== undefined &&
        output.lifecyclePolicyText !== null) {
        contents.lifecyclePolicyText = output.lifecyclePolicyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1Repository = (output, context) => {
    let contents = {
        __type: "Repository",
        createdAt: undefined,
        imageScanningConfiguration: undefined,
        imageTagMutability: undefined,
        registryId: undefined,
        repositoryArn: undefined,
        repositoryName: undefined,
        repositoryUri: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.imageScanningConfiguration !== undefined &&
        output.imageScanningConfiguration !== null) {
        contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context);
    }
    if (output.imageTagMutability !== undefined &&
        output.imageTagMutability !== null) {
        contents.imageTagMutability = output.imageTagMutability;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryArn !== undefined && output.repositoryArn !== null) {
        contents.repositoryArn = output.repositoryArn;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.repositoryUri !== undefined && output.repositoryUri !== null) {
        contents.repositoryUri = output.repositoryUri;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "RepositoryAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Repository(entry, context));
};
const deserializeAws_json1_1RepositoryNotEmptyException = (output, context) => {
    let contents = {
        __type: "RepositoryNotEmptyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNotFoundException = (output, context) => {
    let contents = {
        __type: "RepositoryNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryPolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "RepositoryPolicyNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ScanNotFoundException = (output, context) => {
    let contents = {
        __type: "ScanNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServerException = (output, context) => {
    let contents = {
        __type: "ServerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SetRepositoryPolicyResponse = (output, context) => {
    let contents = {
        __type: "SetRepositoryPolicyResponse",
        policyText: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.policyText !== undefined && output.policyText !== null) {
        contents.policyText = output.policyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1StartImageScanResponse = (output, context) => {
    let contents = {
        __type: "StartImageScanResponse",
        imageId: undefined,
        imageScanStatus: undefined,
        registryId: undefined,
        repositoryName: undefined
    };
    if (output.imageId !== undefined && output.imageId !== null) {
        contents.imageId = deserializeAws_json1_1ImageIdentifier(output.imageId, context);
    }
    if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
        contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context);
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1StartLifecyclePolicyPreviewResponse = (output, context) => {
    let contents = {
        __type: "StartLifecyclePolicyPreviewResponse",
        lifecyclePolicyText: undefined,
        registryId: undefined,
        repositoryName: undefined,
        status: undefined
    };
    if (output.lifecyclePolicyText !== undefined &&
        output.lifecyclePolicyText !== null) {
        contents.lifecyclePolicyText = output.lifecyclePolicyText;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UploadLayerPartResponse = (output, context) => {
    let contents = {
        __type: "UploadLayerPartResponse",
        lastByteReceived: undefined,
        registryId: undefined,
        repositoryName: undefined,
        uploadId: undefined
    };
    if (output.lastByteReceived !== undefined &&
        output.lastByteReceived !== null) {
        contents.lastByteReceived = output.lastByteReceived;
    }
    if (output.registryId !== undefined && output.registryId !== null) {
        contents.registryId = output.registryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.uploadId !== undefined && output.uploadId !== null) {
        contents.uploadId = output.uploadId;
    }
    return contents;
};
const deserializeAws_json1_1UploadNotFoundException = (output, context) => {
    let contents = {
        __type: "UploadNotFoundException",
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