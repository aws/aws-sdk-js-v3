"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CancelClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CancelCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelClusterCommand = serializeAws_json1_1CancelClusterCommand;
async function serializeAws_json1_1CancelJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CancelJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelJobCommand = serializeAws_json1_1CancelJobCommand;
async function serializeAws_json1_1CreateAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateAddress";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAddressCommand = serializeAws_json1_1CreateAddressCommand;
async function serializeAws_json1_1CreateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
async function serializeAws_json1_1CreateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateJobCommand = serializeAws_json1_1CreateJobCommand;
async function serializeAws_json1_1DescribeAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeAddress";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAddressCommand = serializeAws_json1_1DescribeAddressCommand;
async function serializeAws_json1_1DescribeAddressesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSIESnowballJobManagementService.DescribeAddresses";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAddressesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAddressesCommand = serializeAws_json1_1DescribeAddressesCommand;
async function serializeAws_json1_1DescribeClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClusterCommand = serializeAws_json1_1DescribeClusterCommand;
async function serializeAws_json1_1DescribeJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeJobCommand = serializeAws_json1_1DescribeJobCommand;
async function serializeAws_json1_1GetJobManifestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.GetJobManifest";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobManifestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobManifestCommand = serializeAws_json1_1GetJobManifestCommand;
async function serializeAws_json1_1GetJobUnlockCodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSIESnowballJobManagementService.GetJobUnlockCode";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobUnlockCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobUnlockCodeCommand = serializeAws_json1_1GetJobUnlockCodeCommand;
async function serializeAws_json1_1GetSnowballUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSIESnowballJobManagementService.GetSnowballUsage";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSnowballUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSnowballUsageCommand = serializeAws_json1_1GetSnowballUsageCommand;
async function serializeAws_json1_1GetSoftwareUpdatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSIESnowballJobManagementService.GetSoftwareUpdates";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSoftwareUpdatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSoftwareUpdatesCommand = serializeAws_json1_1GetSoftwareUpdatesCommand;
async function serializeAws_json1_1ListClusterJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListClusterJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClusterJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListClusterJobsCommand = serializeAws_json1_1ListClusterJobsCommand;
async function serializeAws_json1_1ListClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
async function serializeAws_json1_1ListCompatibleImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSIESnowballJobManagementService.ListCompatibleImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCompatibleImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCompatibleImagesCommand = serializeAws_json1_1ListCompatibleImagesCommand;
async function serializeAws_json1_1ListJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
async function serializeAws_json1_1UpdateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.UpdateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateClusterCommand = serializeAws_json1_1UpdateClusterCommand;
async function serializeAws_json1_1UpdateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.UpdateJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateJobCommand = serializeAws_json1_1UpdateJobCommand;
async function deserializeAws_json1_1CancelClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelClusterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelClusterCommand = deserializeAws_json1_1CancelClusterCommand;
async function deserializeAws_json1_1CancelClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelJobCommand = deserializeAws_json1_1CancelJobCommand;
async function deserializeAws_json1_1CancelJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAddressResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAddressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAddressCommand = deserializeAws_json1_1CreateAddressCommand;
async function deserializeAws_json1_1CreateAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAddressException":
        case "com.amazonaws.snowball#InvalidAddressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAddressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAddressException":
        case "com.amazonaws.snowball#UnsupportedAddressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAddressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateClusterCommand = deserializeAws_json1_1CreateClusterCommand;
async function deserializeAws_json1_1CreateClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateJobCommand = deserializeAws_json1_1CreateJobCommand;
async function deserializeAws_json1_1CreateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClusterLimitExceededException":
        case "com.amazonaws.snowball#ClusterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAddressResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAddressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAddressCommand = deserializeAws_json1_1DescribeAddressCommand;
async function deserializeAws_json1_1DescribeAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAddressesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAddressesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAddressesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAddressesCommand = deserializeAws_json1_1DescribeAddressesCommand;
async function deserializeAws_json1_1DescribeAddressesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClusterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeClusterCommand = deserializeAws_json1_1DescribeClusterCommand;
async function deserializeAws_json1_1DescribeClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeJobCommand = deserializeAws_json1_1DescribeJobCommand;
async function deserializeAws_json1_1DescribeJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobManifestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobManifestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobManifestResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobManifestResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobManifestCommand = deserializeAws_json1_1GetJobManifestCommand;
async function deserializeAws_json1_1GetJobManifestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobUnlockCodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobUnlockCodeResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobUnlockCodeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobUnlockCodeCommand = deserializeAws_json1_1GetJobUnlockCodeCommand;
async function deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetSnowballUsageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSnowballUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSnowballUsageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSnowballUsageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSnowballUsageCommand = deserializeAws_json1_1GetSnowballUsageCommand;
async function deserializeAws_json1_1GetSnowballUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
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
async function deserializeAws_json1_1GetSoftwareUpdatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSoftwareUpdatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSoftwareUpdatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSoftwareUpdatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSoftwareUpdatesCommand = deserializeAws_json1_1GetSoftwareUpdatesCommand;
async function deserializeAws_json1_1GetSoftwareUpdatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListClusterJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListClusterJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClusterJobsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListClusterJobsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListClusterJobsCommand = deserializeAws_json1_1ListClusterJobsCommand;
async function deserializeAws_json1_1ListClusterJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClustersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListClustersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListClustersCommand = deserializeAws_json1_1ListClustersCommand;
async function deserializeAws_json1_1ListClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListCompatibleImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCompatibleImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCompatibleImagesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCompatibleImagesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCompatibleImagesCommand = deserializeAws_json1_1ListCompatibleImagesCommand;
async function deserializeAws_json1_1ListCompatibleImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListJobsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
async function deserializeAws_json1_1ListJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.snowball#InvalidNextTokenException":
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
async function deserializeAws_json1_1UpdateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClusterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateClusterCommand = deserializeAws_json1_1UpdateClusterCommand;
async function deserializeAws_json1_1UpdateClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateJobCommand = deserializeAws_json1_1UpdateJobCommand;
async function deserializeAws_json1_1UpdateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClusterLimitExceededException":
        case "com.amazonaws.snowball#ClusterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "Ec2RequestFailedException":
        case "com.amazonaws.snowball#Ec2RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputCombinationException":
        case "com.amazonaws.snowball#InvalidInputCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.snowball#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.snowball#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSRequestFailedException":
        case "com.amazonaws.snowball#KMSRequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ClusterLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterLimitExceededException(body, context);
    const contents = Object.assign({ name: "ClusterLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1Ec2RequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1Ec2RequestFailedException(body, context);
    const contents = Object.assign({ name: "Ec2RequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAddressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAddressException(body, context);
    const contents = Object.assign({ name: "InvalidAddressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidInputCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
    const contents = Object.assign({ name: "InvalidJobStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceException(body, context);
    const contents = Object.assign({ name: "InvalidResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSRequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSRequestFailedException(body, context);
    const contents = Object.assign({ name: "KMSRequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedAddressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedAddressException(body, context);
    const contents = Object.assign({ name: "UnsupportedAddressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Address = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    if (input.City !== undefined) {
        bodyParams["City"] = input.City;
    }
    if (input.Company !== undefined) {
        bodyParams["Company"] = input.Company;
    }
    if (input.Country !== undefined) {
        bodyParams["Country"] = input.Country;
    }
    if (input.IsRestricted !== undefined) {
        bodyParams["IsRestricted"] = input.IsRestricted;
    }
    if (input.Landmark !== undefined) {
        bodyParams["Landmark"] = input.Landmark;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PhoneNumber !== undefined) {
        bodyParams["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.PostalCode !== undefined) {
        bodyParams["PostalCode"] = input.PostalCode;
    }
    if (input.PrefectureOrDistrict !== undefined) {
        bodyParams["PrefectureOrDistrict"] = input.PrefectureOrDistrict;
    }
    if (input.StateOrProvince !== undefined) {
        bodyParams["StateOrProvince"] = input.StateOrProvince;
    }
    if (input.Street1 !== undefined) {
        bodyParams["Street1"] = input.Street1;
    }
    if (input.Street2 !== undefined) {
        bodyParams["Street2"] = input.Street2;
    }
    if (input.Street3 !== undefined) {
        bodyParams["Street3"] = input.Street3;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.Address !== undefined) {
        bodyParams["Address"] = serializeAws_json1_1Address(input.Address, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ForwardingAddressId !== undefined) {
        bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
    }
    if (input.JobType !== undefined) {
        bodyParams["JobType"] = input.JobType;
    }
    if (input.KmsKeyARN !== undefined) {
        bodyParams["KmsKeyARN"] = input.KmsKeyARN;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1JobResource(input.Resources, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.ShippingOption !== undefined) {
        bodyParams["ShippingOption"] = input.ShippingOption;
    }
    if (input.SnowballType !== undefined) {
        bodyParams["SnowballType"] = input.SnowballType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ForwardingAddressId !== undefined) {
        bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
    }
    if (input.JobType !== undefined) {
        bodyParams["JobType"] = input.JobType;
    }
    if (input.KmsKeyARN !== undefined) {
        bodyParams["KmsKeyARN"] = input.KmsKeyARN;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1JobResource(input.Resources, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.ShippingOption !== undefined) {
        bodyParams["ShippingOption"] = input.ShippingOption;
    }
    if (input.SnowballCapacityPreference !== undefined) {
        bodyParams["SnowballCapacityPreference"] = input.SnowballCapacityPreference;
    }
    if (input.SnowballType !== undefined) {
        bodyParams["SnowballType"] = input.SnowballType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAddressesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1Ec2AmiResource = (input, context) => {
    const bodyParams = {};
    if (input.AmiId !== undefined) {
        bodyParams["AmiId"] = input.AmiId;
    }
    if (input.SnowballAmiId !== undefined) {
        bodyParams["SnowballAmiId"] = input.SnowballAmiId;
    }
    return bodyParams;
};
const serializeAws_json1_1Ec2AmiResourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Ec2AmiResource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1EventTriggerDefinition = (input, context) => {
    const bodyParams = {};
    if (input.EventResourceARN !== undefined) {
        bodyParams["EventResourceARN"] = input.EventResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1EventTriggerDefinitionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EventTriggerDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetJobManifestRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobUnlockCodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSnowballUsageRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetSoftwareUpdatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1JobResource = (input, context) => {
    const bodyParams = {};
    if (input.Ec2AmiResources !== undefined) {
        bodyParams["Ec2AmiResources"] = serializeAws_json1_1Ec2AmiResourceList(input.Ec2AmiResources, context);
    }
    if (input.LambdaResources !== undefined) {
        bodyParams["LambdaResources"] = serializeAws_json1_1LambdaResourceList(input.LambdaResources, context);
    }
    if (input.S3Resources !== undefined) {
        bodyParams["S3Resources"] = serializeAws_json1_1S3ResourceList(input.S3Resources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1JobStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1KeyRange = (input, context) => {
    const bodyParams = {};
    if (input.BeginMarker !== undefined) {
        bodyParams["BeginMarker"] = input.BeginMarker;
    }
    if (input.EndMarker !== undefined) {
        bodyParams["EndMarker"] = input.EndMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaResource = (input, context) => {
    const bodyParams = {};
    if (input.EventTriggers !== undefined) {
        bodyParams["EventTriggers"] = serializeAws_json1_1EventTriggerDefinitionList(input.EventTriggers, context);
    }
    if (input.LambdaArn !== undefined) {
        bodyParams["LambdaArn"] = input.LambdaArn;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaResourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1LambdaResource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListClusterJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCompatibleImagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Notification = (input, context) => {
    const bodyParams = {};
    if (input.JobStatesToNotify !== undefined) {
        bodyParams["JobStatesToNotify"] = serializeAws_json1_1JobStateList(input.JobStatesToNotify, context);
    }
    if (input.NotifyAll !== undefined) {
        bodyParams["NotifyAll"] = input.NotifyAll;
    }
    if (input.SnsTopicARN !== undefined) {
        bodyParams["SnsTopicARN"] = input.SnsTopicARN;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Resource = (input, context) => {
    const bodyParams = {};
    if (input.BucketArn !== undefined) {
        bodyParams["BucketArn"] = input.BucketArn;
    }
    if (input.KeyRange !== undefined) {
        bodyParams["KeyRange"] = serializeAws_json1_1KeyRange(input.KeyRange, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3ResourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3Resource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ForwardingAddressId !== undefined) {
        bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1JobResource(input.Resources, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.ShippingOption !== undefined) {
        bodyParams["ShippingOption"] = input.ShippingOption;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressId !== undefined) {
        bodyParams["AddressId"] = input.AddressId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ForwardingAddressId !== undefined) {
        bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
    }
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1JobResource(input.Resources, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.ShippingOption !== undefined) {
        bodyParams["ShippingOption"] = input.ShippingOption;
    }
    if (input.SnowballCapacityPreference !== undefined) {
        bodyParams["SnowballCapacityPreference"] = input.SnowballCapacityPreference;
    }
    return bodyParams;
};
const deserializeAws_json1_1Address = (output, context) => {
    let contents = {
        __type: "Address",
        AddressId: undefined,
        City: undefined,
        Company: undefined,
        Country: undefined,
        IsRestricted: undefined,
        Landmark: undefined,
        Name: undefined,
        PhoneNumber: undefined,
        PostalCode: undefined,
        PrefectureOrDistrict: undefined,
        StateOrProvince: undefined,
        Street1: undefined,
        Street2: undefined,
        Street3: undefined
    };
    if (output.AddressId !== undefined && output.AddressId !== null) {
        contents.AddressId = output.AddressId;
    }
    if (output.City !== undefined && output.City !== null) {
        contents.City = output.City;
    }
    if (output.Company !== undefined && output.Company !== null) {
        contents.Company = output.Company;
    }
    if (output.Country !== undefined && output.Country !== null) {
        contents.Country = output.Country;
    }
    if (output.IsRestricted !== undefined && output.IsRestricted !== null) {
        contents.IsRestricted = output.IsRestricted;
    }
    if (output.Landmark !== undefined && output.Landmark !== null) {
        contents.Landmark = output.Landmark;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
        contents.PhoneNumber = output.PhoneNumber;
    }
    if (output.PostalCode !== undefined && output.PostalCode !== null) {
        contents.PostalCode = output.PostalCode;
    }
    if (output.PrefectureOrDistrict !== undefined &&
        output.PrefectureOrDistrict !== null) {
        contents.PrefectureOrDistrict = output.PrefectureOrDistrict;
    }
    if (output.StateOrProvince !== undefined && output.StateOrProvince !== null) {
        contents.StateOrProvince = output.StateOrProvince;
    }
    if (output.Street1 !== undefined && output.Street1 !== null) {
        contents.Street1 = output.Street1;
    }
    if (output.Street2 !== undefined && output.Street2 !== null) {
        contents.Street2 = output.Street2;
    }
    if (output.Street3 !== undefined && output.Street3 !== null) {
        contents.Street3 = output.Street3;
    }
    return contents;
};
const deserializeAws_json1_1AddressList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Address(entry, context));
};
const deserializeAws_json1_1CancelClusterResult = (output, context) => {
    let contents = {
        __type: "CancelClusterResult"
    };
    return contents;
};
const deserializeAws_json1_1CancelJobResult = (output, context) => {
    let contents = {
        __type: "CancelJobResult"
    };
    return contents;
};
const deserializeAws_json1_1ClusterLimitExceededException = (output, context) => {
    let contents = {
        __type: "ClusterLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterListEntry = (output, context) => {
    let contents = {
        __type: "ClusterListEntry",
        ClusterId: undefined,
        ClusterState: undefined,
        CreationDate: undefined,
        Description: undefined
    };
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.ClusterState !== undefined && output.ClusterState !== null) {
        contents.ClusterState = output.ClusterState;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    return contents;
};
const deserializeAws_json1_1ClusterListEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ClusterListEntry(entry, context));
};
const deserializeAws_json1_1ClusterMetadata = (output, context) => {
    let contents = {
        __type: "ClusterMetadata",
        AddressId: undefined,
        ClusterId: undefined,
        ClusterState: undefined,
        CreationDate: undefined,
        Description: undefined,
        ForwardingAddressId: undefined,
        JobType: undefined,
        KmsKeyARN: undefined,
        Notification: undefined,
        Resources: undefined,
        RoleARN: undefined,
        ShippingOption: undefined,
        SnowballType: undefined
    };
    if (output.AddressId !== undefined && output.AddressId !== null) {
        contents.AddressId = output.AddressId;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.ClusterState !== undefined && output.ClusterState !== null) {
        contents.ClusterState = output.ClusterState;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ForwardingAddressId !== undefined &&
        output.ForwardingAddressId !== null) {
        contents.ForwardingAddressId = output.ForwardingAddressId;
    }
    if (output.JobType !== undefined && output.JobType !== null) {
        contents.JobType = output.JobType;
    }
    if (output.KmsKeyARN !== undefined && output.KmsKeyARN !== null) {
        contents.KmsKeyARN = output.KmsKeyARN;
    }
    if (output.Notification !== undefined && output.Notification !== null) {
        contents.Notification = deserializeAws_json1_1Notification(output.Notification, context);
    }
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1JobResource(output.Resources, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.ShippingOption !== undefined && output.ShippingOption !== null) {
        contents.ShippingOption = output.ShippingOption;
    }
    if (output.SnowballType !== undefined && output.SnowballType !== null) {
        contents.SnowballType = output.SnowballType;
    }
    return contents;
};
const deserializeAws_json1_1CompatibleImage = (output, context) => {
    let contents = {
        __type: "CompatibleImage",
        AmiId: undefined,
        Name: undefined
    };
    if (output.AmiId !== undefined && output.AmiId !== null) {
        contents.AmiId = output.AmiId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CompatibleImageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CompatibleImage(entry, context));
};
const deserializeAws_json1_1CreateAddressResult = (output, context) => {
    let contents = {
        __type: "CreateAddressResult",
        AddressId: undefined
    };
    if (output.AddressId !== undefined && output.AddressId !== null) {
        contents.AddressId = output.AddressId;
    }
    return contents;
};
const deserializeAws_json1_1CreateClusterResult = (output, context) => {
    let contents = {
        __type: "CreateClusterResult",
        ClusterId: undefined
    };
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    return contents;
};
const deserializeAws_json1_1CreateJobResult = (output, context) => {
    let contents = {
        __type: "CreateJobResult",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1DataTransfer = (output, context) => {
    let contents = {
        __type: "DataTransfer",
        BytesTransferred: undefined,
        ObjectsTransferred: undefined,
        TotalBytes: undefined,
        TotalObjects: undefined
    };
    if (output.BytesTransferred !== undefined &&
        output.BytesTransferred !== null) {
        contents.BytesTransferred = output.BytesTransferred;
    }
    if (output.ObjectsTransferred !== undefined &&
        output.ObjectsTransferred !== null) {
        contents.ObjectsTransferred = output.ObjectsTransferred;
    }
    if (output.TotalBytes !== undefined && output.TotalBytes !== null) {
        contents.TotalBytes = output.TotalBytes;
    }
    if (output.TotalObjects !== undefined && output.TotalObjects !== null) {
        contents.TotalObjects = output.TotalObjects;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAddressResult = (output, context) => {
    let contents = {
        __type: "DescribeAddressResult",
        Address: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = deserializeAws_json1_1Address(output.Address, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAddressesResult = (output, context) => {
    let contents = {
        __type: "DescribeAddressesResult",
        Addresses: undefined,
        NextToken: undefined
    };
    if (output.Addresses !== undefined && output.Addresses !== null) {
        contents.Addresses = deserializeAws_json1_1AddressList(output.Addresses, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeClusterResult = (output, context) => {
    let contents = {
        __type: "DescribeClusterResult",
        ClusterMetadata: undefined
    };
    if (output.ClusterMetadata !== undefined && output.ClusterMetadata !== null) {
        contents.ClusterMetadata = deserializeAws_json1_1ClusterMetadata(output.ClusterMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeJobResult = (output, context) => {
    let contents = {
        __type: "DescribeJobResult",
        JobMetadata: undefined,
        SubJobMetadata: undefined
    };
    if (output.JobMetadata !== undefined && output.JobMetadata !== null) {
        contents.JobMetadata = deserializeAws_json1_1JobMetadata(output.JobMetadata, context);
    }
    if (output.SubJobMetadata !== undefined && output.SubJobMetadata !== null) {
        contents.SubJobMetadata = deserializeAws_json1_1JobMetadataList(output.SubJobMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1Ec2AmiResource = (output, context) => {
    let contents = {
        __type: "Ec2AmiResource",
        AmiId: undefined,
        SnowballAmiId: undefined
    };
    if (output.AmiId !== undefined && output.AmiId !== null) {
        contents.AmiId = output.AmiId;
    }
    if (output.SnowballAmiId !== undefined && output.SnowballAmiId !== null) {
        contents.SnowballAmiId = output.SnowballAmiId;
    }
    return contents;
};
const deserializeAws_json1_1Ec2AmiResourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Ec2AmiResource(entry, context));
};
const deserializeAws_json1_1Ec2RequestFailedException = (output, context) => {
    let contents = {
        __type: "Ec2RequestFailedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EventTriggerDefinition = (output, context) => {
    let contents = {
        __type: "EventTriggerDefinition",
        EventResourceARN: undefined
    };
    if (output.EventResourceARN !== undefined &&
        output.EventResourceARN !== null) {
        contents.EventResourceARN = output.EventResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1EventTriggerDefinitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventTriggerDefinition(entry, context));
};
const deserializeAws_json1_1GetJobManifestResult = (output, context) => {
    let contents = {
        __type: "GetJobManifestResult",
        ManifestURI: undefined
    };
    if (output.ManifestURI !== undefined && output.ManifestURI !== null) {
        contents.ManifestURI = output.ManifestURI;
    }
    return contents;
};
const deserializeAws_json1_1GetJobUnlockCodeResult = (output, context) => {
    let contents = {
        __type: "GetJobUnlockCodeResult",
        UnlockCode: undefined
    };
    if (output.UnlockCode !== undefined && output.UnlockCode !== null) {
        contents.UnlockCode = output.UnlockCode;
    }
    return contents;
};
const deserializeAws_json1_1GetSnowballUsageResult = (output, context) => {
    let contents = {
        __type: "GetSnowballUsageResult",
        SnowballLimit: undefined,
        SnowballsInUse: undefined
    };
    if (output.SnowballLimit !== undefined && output.SnowballLimit !== null) {
        contents.SnowballLimit = output.SnowballLimit;
    }
    if (output.SnowballsInUse !== undefined && output.SnowballsInUse !== null) {
        contents.SnowballsInUse = output.SnowballsInUse;
    }
    return contents;
};
const deserializeAws_json1_1GetSoftwareUpdatesResult = (output, context) => {
    let contents = {
        __type: "GetSoftwareUpdatesResult",
        UpdatesURI: undefined
    };
    if (output.UpdatesURI !== undefined && output.UpdatesURI !== null) {
        contents.UpdatesURI = output.UpdatesURI;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAddressException = (output, context) => {
    let contents = {
        __type: "InvalidAddressException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidInputCombinationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidJobStateException = (output, context) => {
    let contents = {
        __type: "InvalidJobStateException",
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
const deserializeAws_json1_1InvalidResourceException = (output, context) => {
    let contents = {
        __type: "InvalidResourceException",
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
const deserializeAws_json1_1JobListEntry = (output, context) => {
    let contents = {
        __type: "JobListEntry",
        CreationDate: undefined,
        Description: undefined,
        IsMaster: undefined,
        JobId: undefined,
        JobState: undefined,
        JobType: undefined,
        SnowballType: undefined
    };
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsMaster !== undefined && output.IsMaster !== null) {
        contents.IsMaster = output.IsMaster;
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobState !== undefined && output.JobState !== null) {
        contents.JobState = output.JobState;
    }
    if (output.JobType !== undefined && output.JobType !== null) {
        contents.JobType = output.JobType;
    }
    if (output.SnowballType !== undefined && output.SnowballType !== null) {
        contents.SnowballType = output.SnowballType;
    }
    return contents;
};
const deserializeAws_json1_1JobListEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1JobListEntry(entry, context));
};
const deserializeAws_json1_1JobLogs = (output, context) => {
    let contents = {
        __type: "JobLogs",
        JobCompletionReportURI: undefined,
        JobFailureLogURI: undefined,
        JobSuccessLogURI: undefined
    };
    if (output.JobCompletionReportURI !== undefined &&
        output.JobCompletionReportURI !== null) {
        contents.JobCompletionReportURI = output.JobCompletionReportURI;
    }
    if (output.JobFailureLogURI !== undefined &&
        output.JobFailureLogURI !== null) {
        contents.JobFailureLogURI = output.JobFailureLogURI;
    }
    if (output.JobSuccessLogURI !== undefined &&
        output.JobSuccessLogURI !== null) {
        contents.JobSuccessLogURI = output.JobSuccessLogURI;
    }
    return contents;
};
const deserializeAws_json1_1JobMetadata = (output, context) => {
    let contents = {
        __type: "JobMetadata",
        AddressId: undefined,
        ClusterId: undefined,
        CreationDate: undefined,
        DataTransferProgress: undefined,
        Description: undefined,
        ForwardingAddressId: undefined,
        JobId: undefined,
        JobLogInfo: undefined,
        JobState: undefined,
        JobType: undefined,
        KmsKeyARN: undefined,
        Notification: undefined,
        Resources: undefined,
        RoleARN: undefined,
        ShippingDetails: undefined,
        SnowballCapacityPreference: undefined,
        SnowballType: undefined
    };
    if (output.AddressId !== undefined && output.AddressId !== null) {
        contents.AddressId = output.AddressId;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.DataTransferProgress !== undefined &&
        output.DataTransferProgress !== null) {
        contents.DataTransferProgress = deserializeAws_json1_1DataTransfer(output.DataTransferProgress, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ForwardingAddressId !== undefined &&
        output.ForwardingAddressId !== null) {
        contents.ForwardingAddressId = output.ForwardingAddressId;
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobLogInfo !== undefined && output.JobLogInfo !== null) {
        contents.JobLogInfo = deserializeAws_json1_1JobLogs(output.JobLogInfo, context);
    }
    if (output.JobState !== undefined && output.JobState !== null) {
        contents.JobState = output.JobState;
    }
    if (output.JobType !== undefined && output.JobType !== null) {
        contents.JobType = output.JobType;
    }
    if (output.KmsKeyARN !== undefined && output.KmsKeyARN !== null) {
        contents.KmsKeyARN = output.KmsKeyARN;
    }
    if (output.Notification !== undefined && output.Notification !== null) {
        contents.Notification = deserializeAws_json1_1Notification(output.Notification, context);
    }
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1JobResource(output.Resources, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.ShippingDetails !== undefined && output.ShippingDetails !== null) {
        contents.ShippingDetails = deserializeAws_json1_1ShippingDetails(output.ShippingDetails, context);
    }
    if (output.SnowballCapacityPreference !== undefined &&
        output.SnowballCapacityPreference !== null) {
        contents.SnowballCapacityPreference = output.SnowballCapacityPreference;
    }
    if (output.SnowballType !== undefined && output.SnowballType !== null) {
        contents.SnowballType = output.SnowballType;
    }
    return contents;
};
const deserializeAws_json1_1JobMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1JobMetadata(entry, context));
};
const deserializeAws_json1_1JobResource = (output, context) => {
    let contents = {
        __type: "JobResource",
        Ec2AmiResources: undefined,
        LambdaResources: undefined,
        S3Resources: undefined
    };
    if (output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null) {
        contents.Ec2AmiResources = deserializeAws_json1_1Ec2AmiResourceList(output.Ec2AmiResources, context);
    }
    if (output.LambdaResources !== undefined && output.LambdaResources !== null) {
        contents.LambdaResources = deserializeAws_json1_1LambdaResourceList(output.LambdaResources, context);
    }
    if (output.S3Resources !== undefined && output.S3Resources !== null) {
        contents.S3Resources = deserializeAws_json1_1S3ResourceList(output.S3Resources, context);
    }
    return contents;
};
const deserializeAws_json1_1JobStateList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1KMSRequestFailedException = (output, context) => {
    let contents = {
        __type: "KMSRequestFailedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KeyRange = (output, context) => {
    let contents = {
        __type: "KeyRange",
        BeginMarker: undefined,
        EndMarker: undefined
    };
    if (output.BeginMarker !== undefined && output.BeginMarker !== null) {
        contents.BeginMarker = output.BeginMarker;
    }
    if (output.EndMarker !== undefined && output.EndMarker !== null) {
        contents.EndMarker = output.EndMarker;
    }
    return contents;
};
const deserializeAws_json1_1LambdaResource = (output, context) => {
    let contents = {
        __type: "LambdaResource",
        EventTriggers: undefined,
        LambdaArn: undefined
    };
    if (output.EventTriggers !== undefined && output.EventTriggers !== null) {
        contents.EventTriggers = deserializeAws_json1_1EventTriggerDefinitionList(output.EventTriggers, context);
    }
    if (output.LambdaArn !== undefined && output.LambdaArn !== null) {
        contents.LambdaArn = output.LambdaArn;
    }
    return contents;
};
const deserializeAws_json1_1LambdaResourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LambdaResource(entry, context));
};
const deserializeAws_json1_1ListClusterJobsResult = (output, context) => {
    let contents = {
        __type: "ListClusterJobsResult",
        JobListEntries: undefined,
        NextToken: undefined
    };
    if (output.JobListEntries !== undefined && output.JobListEntries !== null) {
        contents.JobListEntries = deserializeAws_json1_1JobListEntryList(output.JobListEntries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListClustersResult = (output, context) => {
    let contents = {
        __type: "ListClustersResult",
        ClusterListEntries: undefined,
        NextToken: undefined
    };
    if (output.ClusterListEntries !== undefined &&
        output.ClusterListEntries !== null) {
        contents.ClusterListEntries = deserializeAws_json1_1ClusterListEntryList(output.ClusterListEntries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCompatibleImagesResult = (output, context) => {
    let contents = {
        __type: "ListCompatibleImagesResult",
        CompatibleImages: undefined,
        NextToken: undefined
    };
    if (output.CompatibleImages !== undefined &&
        output.CompatibleImages !== null) {
        contents.CompatibleImages = deserializeAws_json1_1CompatibleImageList(output.CompatibleImages, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListJobsResult = (output, context) => {
    let contents = {
        __type: "ListJobsResult",
        JobListEntries: undefined,
        NextToken: undefined
    };
    if (output.JobListEntries !== undefined && output.JobListEntries !== null) {
        contents.JobListEntries = deserializeAws_json1_1JobListEntryList(output.JobListEntries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1Notification = (output, context) => {
    let contents = {
        __type: "Notification",
        JobStatesToNotify: undefined,
        NotifyAll: undefined,
        SnsTopicARN: undefined
    };
    if (output.JobStatesToNotify !== undefined &&
        output.JobStatesToNotify !== null) {
        contents.JobStatesToNotify = deserializeAws_json1_1JobStateList(output.JobStatesToNotify, context);
    }
    if (output.NotifyAll !== undefined && output.NotifyAll !== null) {
        contents.NotifyAll = output.NotifyAll;
    }
    if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
        contents.SnsTopicARN = output.SnsTopicARN;
    }
    return contents;
};
const deserializeAws_json1_1S3Resource = (output, context) => {
    let contents = {
        __type: "S3Resource",
        BucketArn: undefined,
        KeyRange: undefined
    };
    if (output.BucketArn !== undefined && output.BucketArn !== null) {
        contents.BucketArn = output.BucketArn;
    }
    if (output.KeyRange !== undefined && output.KeyRange !== null) {
        contents.KeyRange = deserializeAws_json1_1KeyRange(output.KeyRange, context);
    }
    return contents;
};
const deserializeAws_json1_1S3ResourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1S3Resource(entry, context));
};
const deserializeAws_json1_1Shipment = (output, context) => {
    let contents = {
        __type: "Shipment",
        Status: undefined,
        TrackingNumber: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TrackingNumber !== undefined && output.TrackingNumber !== null) {
        contents.TrackingNumber = output.TrackingNumber;
    }
    return contents;
};
const deserializeAws_json1_1ShippingDetails = (output, context) => {
    let contents = {
        __type: "ShippingDetails",
        InboundShipment: undefined,
        OutboundShipment: undefined,
        ShippingOption: undefined
    };
    if (output.InboundShipment !== undefined && output.InboundShipment !== null) {
        contents.InboundShipment = deserializeAws_json1_1Shipment(output.InboundShipment, context);
    }
    if (output.OutboundShipment !== undefined &&
        output.OutboundShipment !== null) {
        contents.OutboundShipment = deserializeAws_json1_1Shipment(output.OutboundShipment, context);
    }
    if (output.ShippingOption !== undefined && output.ShippingOption !== null) {
        contents.ShippingOption = output.ShippingOption;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedAddressException = (output, context) => {
    let contents = {
        __type: "UnsupportedAddressException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateClusterResult = (output, context) => {
    let contents = {
        __type: "UpdateClusterResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateJobResult = (output, context) => {
    let contents = {
        __type: "UpdateJobResult"
    };
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