"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddInstanceFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.AddInstanceFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddInstanceFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddInstanceFleetCommand = serializeAws_json1_1AddInstanceFleetCommand;
async function serializeAws_json1_1AddInstanceGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.AddInstanceGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddInstanceGroupsCommand = serializeAws_json1_1AddInstanceGroupsCommand;
async function serializeAws_json1_1AddJobFlowStepsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.AddJobFlowSteps";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddJobFlowStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddJobFlowStepsCommand = serializeAws_json1_1AddJobFlowStepsCommand;
async function serializeAws_json1_1AddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.AddTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
async function serializeAws_json1_1CancelStepsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.CancelSteps";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelStepsCommand = serializeAws_json1_1CancelStepsCommand;
async function serializeAws_json1_1CreateSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.CreateSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSecurityConfigurationCommand = serializeAws_json1_1CreateSecurityConfigurationCommand;
async function serializeAws_json1_1DeleteSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.DeleteSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = serializeAws_json1_1DeleteSecurityConfigurationCommand;
async function serializeAws_json1_1DescribeClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.DescribeCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClusterInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClusterCommand = serializeAws_json1_1DescribeClusterCommand;
async function serializeAws_json1_1DescribeJobFlowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.DescribeJobFlows";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeJobFlowsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeJobFlowsCommand = serializeAws_json1_1DescribeJobFlowsCommand;
async function serializeAws_json1_1DescribeSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.DescribeSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSecurityConfigurationCommand = serializeAws_json1_1DescribeSecurityConfigurationCommand;
async function serializeAws_json1_1DescribeStepCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.DescribeStep";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStepCommand = serializeAws_json1_1DescribeStepCommand;
async function serializeAws_json1_1GetBlockPublicAccessConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ElasticMapReduce.GetBlockPublicAccessConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = serializeAws_json1_1GetBlockPublicAccessConfigurationCommand;
async function serializeAws_json1_1ListBootstrapActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListBootstrapActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBootstrapActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBootstrapActionsCommand = serializeAws_json1_1ListBootstrapActionsCommand;
async function serializeAws_json1_1ListClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
async function serializeAws_json1_1ListInstanceFleetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListInstanceFleets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceFleetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInstanceFleetsCommand = serializeAws_json1_1ListInstanceFleetsCommand;
async function serializeAws_json1_1ListInstanceGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListInstanceGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInstanceGroupsCommand = serializeAws_json1_1ListInstanceGroupsCommand;
async function serializeAws_json1_1ListInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInstancesCommand = serializeAws_json1_1ListInstancesCommand;
async function serializeAws_json1_1ListSecurityConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListSecurityConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecurityConfigurationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSecurityConfigurationsCommand = serializeAws_json1_1ListSecurityConfigurationsCommand;
async function serializeAws_json1_1ListStepsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ListSteps";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListStepsCommand = serializeAws_json1_1ListStepsCommand;
async function serializeAws_json1_1ModifyClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ModifyCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyClusterInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyClusterCommand = serializeAws_json1_1ModifyClusterCommand;
async function serializeAws_json1_1ModifyInstanceFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ModifyInstanceFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyInstanceFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyInstanceFleetCommand = serializeAws_json1_1ModifyInstanceFleetCommand;
async function serializeAws_json1_1ModifyInstanceGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.ModifyInstanceGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyInstanceGroupsCommand = serializeAws_json1_1ModifyInstanceGroupsCommand;
async function serializeAws_json1_1PutAutoScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.PutAutoScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAutoScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAutoScalingPolicyCommand = serializeAws_json1_1PutAutoScalingPolicyCommand;
async function serializeAws_json1_1PutBlockPublicAccessConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ElasticMapReduce.PutBlockPublicAccessConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = serializeAws_json1_1PutBlockPublicAccessConfigurationCommand;
async function serializeAws_json1_1RemoveAutoScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.RemoveAutoScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveAutoScalingPolicyCommand = serializeAws_json1_1RemoveAutoScalingPolicyCommand;
async function serializeAws_json1_1RemoveTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.RemoveTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
async function serializeAws_json1_1RunJobFlowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.RunJobFlow";
    let body;
    body = JSON.stringify(serializeAws_json1_1RunJobFlowInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RunJobFlowCommand = serializeAws_json1_1RunJobFlowCommand;
async function serializeAws_json1_1SetTerminationProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.SetTerminationProtection";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTerminationProtectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetTerminationProtectionCommand = serializeAws_json1_1SetTerminationProtectionCommand;
async function serializeAws_json1_1SetVisibleToAllUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.SetVisibleToAllUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetVisibleToAllUsersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetVisibleToAllUsersCommand = serializeAws_json1_1SetVisibleToAllUsersCommand;
async function serializeAws_json1_1TerminateJobFlowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ElasticMapReduce.TerminateJobFlows";
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateJobFlowsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TerminateJobFlowsCommand = serializeAws_json1_1TerminateJobFlowsCommand;
async function deserializeAws_json1_1AddInstanceFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddInstanceFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddInstanceFleetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddInstanceFleetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddInstanceFleetCommand = deserializeAws_json1_1AddInstanceFleetCommand;
async function deserializeAws_json1_1AddInstanceFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AddInstanceGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddInstanceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddInstanceGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddInstanceGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddInstanceGroupsCommand = deserializeAws_json1_1AddInstanceGroupsCommand;
async function deserializeAws_json1_1AddInstanceGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AddJobFlowStepsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddJobFlowStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddJobFlowStepsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddJobFlowStepsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddJobFlowStepsCommand = deserializeAws_json1_1AddJobFlowStepsCommand;
async function deserializeAws_json1_1AddJobFlowStepsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
async function deserializeAws_json1_1AddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelStepsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelStepsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelStepsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelStepsCommand = deserializeAws_json1_1CancelStepsCommand;
async function deserializeAws_json1_1CancelStepsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecurityConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSecurityConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = deserializeAws_json1_1CreateSecurityConfigurationCommand;
async function deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecurityConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSecurityConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = deserializeAws_json1_1DeleteSecurityConfigurationCommand;
async function deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1DescribeClusterOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClusterOutput" }, contents);
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
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeJobFlowsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeJobFlowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeJobFlowsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeJobFlowsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeJobFlowsCommand = deserializeAws_json1_1DescribeJobFlowsCommand;
async function deserializeAws_json1_1DescribeJobFlowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSecurityConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSecurityConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSecurityConfigurationCommand = deserializeAws_json1_1DescribeSecurityConfigurationCommand;
async function deserializeAws_json1_1DescribeSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeStepCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStepCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStepOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStepOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStepCommand = deserializeAws_json1_1DescribeStepCommand;
async function deserializeAws_json1_1DescribeStepCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBlockPublicAccessConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand;
async function deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListBootstrapActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBootstrapActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBootstrapActionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBootstrapActionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBootstrapActionsCommand = deserializeAws_json1_1ListBootstrapActionsCommand;
async function deserializeAws_json1_1ListBootstrapActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1ListClustersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListClustersOutput" }, contents);
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
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListInstanceFleetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListInstanceFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceFleetsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstanceFleetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListInstanceFleetsCommand = deserializeAws_json1_1ListInstanceFleetsCommand;
async function deserializeAws_json1_1ListInstanceFleetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListInstanceGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListInstanceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstanceGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListInstanceGroupsCommand = deserializeAws_json1_1ListInstanceGroupsCommand;
async function deserializeAws_json1_1ListInstanceGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1ListInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstancesOutput" }, contents);
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
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSecurityConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSecurityConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecurityConfigurationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSecurityConfigurationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSecurityConfigurationsCommand = deserializeAws_json1_1ListSecurityConfigurationsCommand;
async function deserializeAws_json1_1ListSecurityConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListStepsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStepsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStepsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListStepsCommand = deserializeAws_json1_1ListStepsCommand;
async function deserializeAws_json1_1ListStepsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyClusterOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyClusterCommand = deserializeAws_json1_1ModifyClusterCommand;
async function deserializeAws_json1_1ModifyClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyInstanceFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyInstanceFleetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyInstanceFleetCommand = deserializeAws_json1_1ModifyInstanceFleetCommand;
async function deserializeAws_json1_1ModifyInstanceFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyInstanceGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyInstanceGroupsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyInstanceGroupsCommand = deserializeAws_json1_1ModifyInstanceGroupsCommand;
async function deserializeAws_json1_1ModifyInstanceGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutAutoScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAutoScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAutoScalingPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAutoScalingPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAutoScalingPolicyCommand = deserializeAws_json1_1PutAutoScalingPolicyCommand;
async function deserializeAws_json1_1PutAutoScalingPolicyCommandError(output, context) {
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
async function deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutBlockPublicAccessConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand;
async function deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RemoveAutoScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveAutoScalingPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveAutoScalingPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveAutoScalingPolicyCommand = deserializeAws_json1_1RemoveAutoScalingPolicyCommand;
async function deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(output, context) {
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
async function deserializeAws_json1_1RemoveTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
async function deserializeAws_json1_1RemoveTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "elasticmapreduce.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "elasticmapreduce.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RunJobFlowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RunJobFlowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RunJobFlowOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RunJobFlowOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RunJobFlowCommand = deserializeAws_json1_1RunJobFlowCommand;
async function deserializeAws_json1_1RunJobFlowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SetTerminationProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetTerminationProtectionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetTerminationProtectionCommand = deserializeAws_json1_1SetTerminationProtectionCommand;
async function deserializeAws_json1_1SetTerminationProtectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SetVisibleToAllUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetVisibleToAllUsersCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetVisibleToAllUsersCommand = deserializeAws_json1_1SetVisibleToAllUsersCommand;
async function deserializeAws_json1_1SetVisibleToAllUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TerminateJobFlowsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TerminateJobFlowsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TerminateJobFlowsCommand = deserializeAws_json1_1TerminateJobFlowsCommand;
async function deserializeAws_json1_1TerminateJobFlowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "elasticmapreduce.webservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddInstanceFleetInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceFleet !== undefined) {
        bodyParams["InstanceFleet"] = serializeAws_json1_1InstanceFleetConfig(input.InstanceFleet, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddInstanceGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.InstanceGroups !== undefined) {
        bodyParams["InstanceGroups"] = serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context);
    }
    if (input.JobFlowId !== undefined) {
        bodyParams["JobFlowId"] = input.JobFlowId;
    }
    return bodyParams;
};
const serializeAws_json1_1AddJobFlowStepsInput = (input, context) => {
    const bodyParams = {};
    if (input.JobFlowId !== undefined) {
        bodyParams["JobFlowId"] = input.JobFlowId;
    }
    if (input.Steps !== undefined) {
        bodyParams["Steps"] = serializeAws_json1_1StepConfigList(input.Steps, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Application = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalInfo !== undefined) {
        bodyParams["AdditionalInfo"] = serializeAws_json1_1StringMap(input.AdditionalInfo, context);
    }
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1StringList(input.Args, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Application(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AutoScalingPolicy = (input, context) => {
    const bodyParams = {};
    if (input.Constraints !== undefined) {
        bodyParams["Constraints"] = serializeAws_json1_1ScalingConstraints(input.Constraints, context);
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1ScalingRuleList(input.Rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BlockPublicAccessConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BlockPublicSecurityGroupRules !== undefined) {
        bodyParams["BlockPublicSecurityGroupRules"] =
            input.BlockPublicSecurityGroupRules;
    }
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.PermittedPublicSecurityGroupRuleRanges !== undefined) {
        bodyParams["PermittedPublicSecurityGroupRuleRanges"] = serializeAws_json1_1PortRanges(input.PermittedPublicSecurityGroupRuleRanges, context);
    }
    if (input.Properties !== undefined) {
        bodyParams["Properties"] = serializeAws_json1_1StringMap(input.Properties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BootstrapActionConfig = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScriptBootstrapAction !== undefined) {
        bodyParams["ScriptBootstrapAction"] = serializeAws_json1_1ScriptBootstrapActionConfig(input.ScriptBootstrapAction, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BootstrapActionConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1BootstrapActionConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CancelStepsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.StepCancellationOption !== undefined) {
        bodyParams["StepCancellationOption"] = input.StepCancellationOption;
    }
    if (input.StepIds !== undefined) {
        bodyParams["StepIds"] = serializeAws_json1_1StepIdsList(input.StepIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchAlarmDefinition = (input, context) => {
    const bodyParams = {};
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.Dimensions !== undefined) {
        bodyParams["Dimensions"] = serializeAws_json1_1MetricDimensionList(input.Dimensions, context);
    }
    if (input.EvaluationPeriods !== undefined) {
        bodyParams["EvaluationPeriods"] = input.EvaluationPeriods;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        bodyParams["Namespace"] = input.Namespace;
    }
    if (input.Period !== undefined) {
        bodyParams["Period"] = input.Period;
    }
    if (input.Statistic !== undefined) {
        bodyParams["Statistic"] = input.Statistic;
    }
    if (input.Threshold !== undefined) {
        bodyParams["Threshold"] = input.Threshold;
    }
    if (input.Unit !== undefined) {
        bodyParams["Unit"] = input.Unit;
    }
    return bodyParams;
};
const serializeAws_json1_1ClusterStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Configuration = (input, context) => {
    const bodyParams = {};
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.Properties !== undefined) {
        bodyParams["Properties"] = serializeAws_json1_1StringMap(input.Properties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigurationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Configuration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateSecurityConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSecurityConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeClusterInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeJobFlowsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.JobFlowIds !== undefined) {
        bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(input.JobFlowIds, context);
    }
    if (input.JobFlowStates !== undefined) {
        bodyParams["JobFlowStates"] = serializeAws_json1_1JobFlowExecutionStateList(input.JobFlowStates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSecurityConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStepInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.StepId !== undefined) {
        bodyParams["StepId"] = input.StepId;
    }
    return bodyParams;
};
const serializeAws_json1_1EC2InstanceIdsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EC2InstanceIdsToTerminateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EbsBlockDeviceConfig = (input, context) => {
    const bodyParams = {};
    if (input.VolumeSpecification !== undefined) {
        bodyParams["VolumeSpecification"] = serializeAws_json1_1VolumeSpecification(input.VolumeSpecification, context);
    }
    if (input.VolumesPerInstance !== undefined) {
        bodyParams["VolumesPerInstance"] = input.VolumesPerInstance;
    }
    return bodyParams;
};
const serializeAws_json1_1EbsBlockDeviceConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EbsBlockDeviceConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1EbsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EbsBlockDeviceConfigs !== undefined) {
        bodyParams["EbsBlockDeviceConfigs"] = serializeAws_json1_1EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context);
    }
    if (input.EbsOptimized !== undefined) {
        bodyParams["EbsOptimized"] = input.EbsOptimized;
    }
    return bodyParams;
};
const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1HadoopJarStepConfig = (input, context) => {
    const bodyParams = {};
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
    }
    if (input.Jar !== undefined) {
        bodyParams["Jar"] = input.Jar;
    }
    if (input.MainClass !== undefined) {
        bodyParams["MainClass"] = input.MainClass;
    }
    if (input.Properties !== undefined) {
        bodyParams["Properties"] = serializeAws_json1_1KeyValueList(input.Properties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceFleetConfig = (input, context) => {
    const bodyParams = {};
    if (input.InstanceFleetType !== undefined) {
        bodyParams["InstanceFleetType"] = input.InstanceFleetType;
    }
    if (input.InstanceTypeConfigs !== undefined) {
        bodyParams["InstanceTypeConfigs"] = serializeAws_json1_1InstanceTypeConfigList(input.InstanceTypeConfigs, context);
    }
    if (input.LaunchSpecifications !== undefined) {
        bodyParams["LaunchSpecifications"] = serializeAws_json1_1InstanceFleetProvisioningSpecifications(input.LaunchSpecifications, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.TargetOnDemandCapacity !== undefined) {
        bodyParams["TargetOnDemandCapacity"] = input.TargetOnDemandCapacity;
    }
    if (input.TargetSpotCapacity !== undefined) {
        bodyParams["TargetSpotCapacity"] = input.TargetSpotCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceFleetConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceFleetConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstanceFleetModifyConfig = (input, context) => {
    const bodyParams = {};
    if (input.InstanceFleetId !== undefined) {
        bodyParams["InstanceFleetId"] = input.InstanceFleetId;
    }
    if (input.TargetOnDemandCapacity !== undefined) {
        bodyParams["TargetOnDemandCapacity"] = input.TargetOnDemandCapacity;
    }
    if (input.TargetSpotCapacity !== undefined) {
        bodyParams["TargetSpotCapacity"] = input.TargetSpotCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (input, context) => {
    const bodyParams = {};
    if (input.SpotSpecification !== undefined) {
        bodyParams["SpotSpecification"] = serializeAws_json1_1SpotProvisioningSpecification(input.SpotSpecification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceGroupConfig = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingPolicy !== undefined) {
        bodyParams["AutoScalingPolicy"] = serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context);
    }
    if (input.BidPrice !== undefined) {
        bodyParams["BidPrice"] = input.BidPrice;
    }
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.EbsConfiguration !== undefined) {
        bodyParams["EbsConfiguration"] = serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context);
    }
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceRole !== undefined) {
        bodyParams["InstanceRole"] = input.InstanceRole;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.Market !== undefined) {
        bodyParams["Market"] = input.Market;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceGroupConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceGroupConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstanceGroupModifyConfig = (input, context) => {
    const bodyParams = {};
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.EC2InstanceIdsToTerminate !== undefined) {
        bodyParams["EC2InstanceIdsToTerminate"] = serializeAws_json1_1EC2InstanceIdsToTerminateList(input.EC2InstanceIdsToTerminate, context);
    }
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceGroupId !== undefined) {
        bodyParams["InstanceGroupId"] = input.InstanceGroupId;
    }
    if (input.ShrinkPolicy !== undefined) {
        bodyParams["ShrinkPolicy"] = serializeAws_json1_1ShrinkPolicy(input.ShrinkPolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceGroupModifyConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceGroupModifyConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstanceGroupTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceResizePolicy = (input, context) => {
    const bodyParams = {};
    if (input.InstanceTerminationTimeout !== undefined) {
        bodyParams["InstanceTerminationTimeout"] = input.InstanceTerminationTimeout;
    }
    if (input.InstancesToProtect !== undefined) {
        bodyParams["InstancesToProtect"] = serializeAws_json1_1EC2InstanceIdsList(input.InstancesToProtect, context);
    }
    if (input.InstancesToTerminate !== undefined) {
        bodyParams["InstancesToTerminate"] = serializeAws_json1_1EC2InstanceIdsList(input.InstancesToTerminate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceTypeConfig = (input, context) => {
    const bodyParams = {};
    if (input.BidPrice !== undefined) {
        bodyParams["BidPrice"] = input.BidPrice;
    }
    if (input.BidPriceAsPercentageOfOnDemandPrice !== undefined) {
        bodyParams["BidPriceAsPercentageOfOnDemandPrice"] =
            input.BidPriceAsPercentageOfOnDemandPrice;
    }
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.EbsConfiguration !== undefined) {
        bodyParams["EbsConfiguration"] = serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context);
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.WeightedCapacity !== undefined) {
        bodyParams["WeightedCapacity"] = input.WeightedCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceTypeConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceTypeConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1JobFlowExecutionStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1JobFlowInstancesConfig = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalMasterSecurityGroups !== undefined) {
        bodyParams["AdditionalMasterSecurityGroups"] = serializeAws_json1_1SecurityGroupsList(input.AdditionalMasterSecurityGroups, context);
    }
    if (input.AdditionalSlaveSecurityGroups !== undefined) {
        bodyParams["AdditionalSlaveSecurityGroups"] = serializeAws_json1_1SecurityGroupsList(input.AdditionalSlaveSecurityGroups, context);
    }
    if (input.Ec2KeyName !== undefined) {
        bodyParams["Ec2KeyName"] = input.Ec2KeyName;
    }
    if (input.Ec2SubnetId !== undefined) {
        bodyParams["Ec2SubnetId"] = input.Ec2SubnetId;
    }
    if (input.Ec2SubnetIds !== undefined) {
        bodyParams["Ec2SubnetIds"] = serializeAws_json1_1XmlStringMaxLen256List(input.Ec2SubnetIds, context);
    }
    if (input.EmrManagedMasterSecurityGroup !== undefined) {
        bodyParams["EmrManagedMasterSecurityGroup"] =
            input.EmrManagedMasterSecurityGroup;
    }
    if (input.EmrManagedSlaveSecurityGroup !== undefined) {
        bodyParams["EmrManagedSlaveSecurityGroup"] =
            input.EmrManagedSlaveSecurityGroup;
    }
    if (input.HadoopVersion !== undefined) {
        bodyParams["HadoopVersion"] = input.HadoopVersion;
    }
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceFleets !== undefined) {
        bodyParams["InstanceFleets"] = serializeAws_json1_1InstanceFleetConfigList(input.InstanceFleets, context);
    }
    if (input.InstanceGroups !== undefined) {
        bodyParams["InstanceGroups"] = serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context);
    }
    if (input.KeepJobFlowAliveWhenNoSteps !== undefined) {
        bodyParams["KeepJobFlowAliveWhenNoSteps"] =
            input.KeepJobFlowAliveWhenNoSteps;
    }
    if (input.MasterInstanceType !== undefined) {
        bodyParams["MasterInstanceType"] = input.MasterInstanceType;
    }
    if (input.Placement !== undefined) {
        bodyParams["Placement"] = serializeAws_json1_1PlacementType(input.Placement, context);
    }
    if (input.ServiceAccessSecurityGroup !== undefined) {
        bodyParams["ServiceAccessSecurityGroup"] = input.ServiceAccessSecurityGroup;
    }
    if (input.SlaveInstanceType !== undefined) {
        bodyParams["SlaveInstanceType"] = input.SlaveInstanceType;
    }
    if (input.TerminationProtected !== undefined) {
        bodyParams["TerminationProtected"] = input.TerminationProtected;
    }
    return bodyParams;
};
const serializeAws_json1_1KerberosAttributes = (input, context) => {
    const bodyParams = {};
    if (input.ADDomainJoinPassword !== undefined) {
        bodyParams["ADDomainJoinPassword"] = input.ADDomainJoinPassword;
    }
    if (input.ADDomainJoinUser !== undefined) {
        bodyParams["ADDomainJoinUser"] = input.ADDomainJoinUser;
    }
    if (input.CrossRealmTrustPrincipalPassword !== undefined) {
        bodyParams["CrossRealmTrustPrincipalPassword"] =
            input.CrossRealmTrustPrincipalPassword;
    }
    if (input.KdcAdminPassword !== undefined) {
        bodyParams["KdcAdminPassword"] = input.KdcAdminPassword;
    }
    if (input.Realm !== undefined) {
        bodyParams["Realm"] = input.Realm;
    }
    return bodyParams;
};
const serializeAws_json1_1KeyValue = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1KeyValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1KeyValue(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListBootstrapActionsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListClustersInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterStates !== undefined) {
        bodyParams["ClusterStates"] = serializeAws_json1_1ClusterStateList(input.ClusterStates, context);
    }
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListInstanceFleetsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListInstanceGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceFleetId !== undefined) {
        bodyParams["InstanceFleetId"] = input.InstanceFleetId;
    }
    if (input.InstanceFleetType !== undefined) {
        bodyParams["InstanceFleetType"] = input.InstanceFleetType;
    }
    if (input.InstanceGroupId !== undefined) {
        bodyParams["InstanceGroupId"] = input.InstanceGroupId;
    }
    if (input.InstanceGroupTypes !== undefined) {
        bodyParams["InstanceGroupTypes"] = serializeAws_json1_1InstanceGroupTypeList(input.InstanceGroupTypes, context);
    }
    if (input.InstanceStates !== undefined) {
        bodyParams["InstanceStates"] = serializeAws_json1_1InstanceStateList(input.InstanceStates, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSecurityConfigurationsInput = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListStepsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.StepIds !== undefined) {
        bodyParams["StepIds"] = serializeAws_json1_1XmlStringList(input.StepIds, context);
    }
    if (input.StepStates !== undefined) {
        bodyParams["StepStates"] = serializeAws_json1_1StepStateList(input.StepStates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MetricDimension = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricDimensionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MetricDimension(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ModifyClusterInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.StepConcurrencyLevel !== undefined) {
        bodyParams["StepConcurrencyLevel"] = input.StepConcurrencyLevel;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyInstanceFleetInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceFleet !== undefined) {
        bodyParams["InstanceFleet"] = serializeAws_json1_1InstanceFleetModifyConfig(input.InstanceFleet, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyInstanceGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceGroups !== undefined) {
        bodyParams["InstanceGroups"] = serializeAws_json1_1InstanceGroupModifyConfigList(input.InstanceGroups, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NewSupportedProductsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SupportedProductConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlacementType = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.AvailabilityZones !== undefined) {
        bodyParams["AvailabilityZones"] = serializeAws_json1_1XmlStringMaxLen256List(input.AvailabilityZones, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PortRange = (input, context) => {
    const bodyParams = {};
    if (input.MaxRange !== undefined) {
        bodyParams["MaxRange"] = input.MaxRange;
    }
    if (input.MinRange !== undefined) {
        bodyParams["MinRange"] = input.MinRange;
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
const serializeAws_json1_1PutAutoScalingPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingPolicy !== undefined) {
        bodyParams["AutoScalingPolicy"] = serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context);
    }
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceGroupId !== undefined) {
        bodyParams["InstanceGroupId"] = input.InstanceGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.BlockPublicAccessConfiguration !== undefined) {
        bodyParams["BlockPublicAccessConfiguration"] = serializeAws_json1_1BlockPublicAccessConfiguration(input.BlockPublicAccessConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveAutoScalingPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.InstanceGroupId !== undefined) {
        bodyParams["InstanceGroupId"] = input.InstanceGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1StringList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RunJobFlowInput = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalInfo !== undefined) {
        bodyParams["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.AmiVersion !== undefined) {
        bodyParams["AmiVersion"] = input.AmiVersion;
    }
    if (input.Applications !== undefined) {
        bodyParams["Applications"] = serializeAws_json1_1ApplicationList(input.Applications, context);
    }
    if (input.AutoScalingRole !== undefined) {
        bodyParams["AutoScalingRole"] = input.AutoScalingRole;
    }
    if (input.BootstrapActions !== undefined) {
        bodyParams["BootstrapActions"] = serializeAws_json1_1BootstrapActionConfigList(input.BootstrapActions, context);
    }
    if (input.Configurations !== undefined) {
        bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(input.Configurations, context);
    }
    if (input.CustomAmiId !== undefined) {
        bodyParams["CustomAmiId"] = input.CustomAmiId;
    }
    if (input.EbsRootVolumeSize !== undefined) {
        bodyParams["EbsRootVolumeSize"] = input.EbsRootVolumeSize;
    }
    if (input.Instances !== undefined) {
        bodyParams["Instances"] = serializeAws_json1_1JobFlowInstancesConfig(input.Instances, context);
    }
    if (input.JobFlowRole !== undefined) {
        bodyParams["JobFlowRole"] = input.JobFlowRole;
    }
    if (input.KerberosAttributes !== undefined) {
        bodyParams["KerberosAttributes"] = serializeAws_json1_1KerberosAttributes(input.KerberosAttributes, context);
    }
    if (input.LogUri !== undefined) {
        bodyParams["LogUri"] = input.LogUri;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NewSupportedProducts !== undefined) {
        bodyParams["NewSupportedProducts"] = serializeAws_json1_1NewSupportedProductsList(input.NewSupportedProducts, context);
    }
    if (input.ReleaseLabel !== undefined) {
        bodyParams["ReleaseLabel"] = input.ReleaseLabel;
    }
    if (input.RepoUpgradeOnBoot !== undefined) {
        bodyParams["RepoUpgradeOnBoot"] = input.RepoUpgradeOnBoot;
    }
    if (input.ScaleDownBehavior !== undefined) {
        bodyParams["ScaleDownBehavior"] = input.ScaleDownBehavior;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.ServiceRole !== undefined) {
        bodyParams["ServiceRole"] = input.ServiceRole;
    }
    if (input.StepConcurrencyLevel !== undefined) {
        bodyParams["StepConcurrencyLevel"] = input.StepConcurrencyLevel;
    }
    if (input.Steps !== undefined) {
        bodyParams["Steps"] = serializeAws_json1_1StepConfigList(input.Steps, context);
    }
    if (input.SupportedProducts !== undefined) {
        bodyParams["SupportedProducts"] = serializeAws_json1_1SupportedProductsList(input.SupportedProducts, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VisibleToAllUsers !== undefined) {
        bodyParams["VisibleToAllUsers"] = input.VisibleToAllUsers;
    }
    return bodyParams;
};
const serializeAws_json1_1ScalingAction = (input, context) => {
    const bodyParams = {};
    if (input.Market !== undefined) {
        bodyParams["Market"] = input.Market;
    }
    if (input.SimpleScalingPolicyConfiguration !== undefined) {
        bodyParams["SimpleScalingPolicyConfiguration"] = serializeAws_json1_1SimpleScalingPolicyConfiguration(input.SimpleScalingPolicyConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ScalingConstraints = (input, context) => {
    const bodyParams = {};
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MinCapacity !== undefined) {
        bodyParams["MinCapacity"] = input.MinCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1ScalingRule = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = serializeAws_json1_1ScalingAction(input.Action, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Trigger !== undefined) {
        bodyParams["Trigger"] = serializeAws_json1_1ScalingTrigger(input.Trigger, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ScalingRuleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ScalingRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ScalingTrigger = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchAlarmDefinition !== undefined) {
        bodyParams["CloudWatchAlarmDefinition"] = serializeAws_json1_1CloudWatchAlarmDefinition(input.CloudWatchAlarmDefinition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ScriptBootstrapActionConfig = (input, context) => {
    const bodyParams = {};
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SetTerminationProtectionInput = (input, context) => {
    const bodyParams = {};
    if (input.JobFlowIds !== undefined) {
        bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(input.JobFlowIds, context);
    }
    if (input.TerminationProtected !== undefined) {
        bodyParams["TerminationProtected"] = input.TerminationProtected;
    }
    return bodyParams;
};
const serializeAws_json1_1SetVisibleToAllUsersInput = (input, context) => {
    const bodyParams = {};
    if (input.JobFlowIds !== undefined) {
        bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(input.JobFlowIds, context);
    }
    if (input.VisibleToAllUsers !== undefined) {
        bodyParams["VisibleToAllUsers"] = input.VisibleToAllUsers;
    }
    return bodyParams;
};
const serializeAws_json1_1ShrinkPolicy = (input, context) => {
    const bodyParams = {};
    if (input.DecommissionTimeout !== undefined) {
        bodyParams["DecommissionTimeout"] = input.DecommissionTimeout;
    }
    if (input.InstanceResizePolicy !== undefined) {
        bodyParams["InstanceResizePolicy"] = serializeAws_json1_1InstanceResizePolicy(input.InstanceResizePolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SimpleScalingPolicyConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AdjustmentType !== undefined) {
        bodyParams["AdjustmentType"] = input.AdjustmentType;
    }
    if (input.CoolDown !== undefined) {
        bodyParams["CoolDown"] = input.CoolDown;
    }
    if (input.ScalingAdjustment !== undefined) {
        bodyParams["ScalingAdjustment"] = input.ScalingAdjustment;
    }
    return bodyParams;
};
const serializeAws_json1_1SpotProvisioningSpecification = (input, context) => {
    const bodyParams = {};
    if (input.BlockDurationMinutes !== undefined) {
        bodyParams["BlockDurationMinutes"] = input.BlockDurationMinutes;
    }
    if (input.TimeoutAction !== undefined) {
        bodyParams["TimeoutAction"] = input.TimeoutAction;
    }
    if (input.TimeoutDurationMinutes !== undefined) {
        bodyParams["TimeoutDurationMinutes"] = input.TimeoutDurationMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1StepConfig = (input, context) => {
    const bodyParams = {};
    if (input.ActionOnFailure !== undefined) {
        bodyParams["ActionOnFailure"] = input.ActionOnFailure;
    }
    if (input.HadoopJarStep !== undefined) {
        bodyParams["HadoopJarStep"] = serializeAws_json1_1HadoopJarStepConfig(input.HadoopJarStep, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StepConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StepConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StepIdsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StepStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StringMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1SupportedProductConfig = (input, context) => {
    const bodyParams = {};
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1SupportedProductsList = (input, context) => {
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
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TerminateJobFlowsInput = (input, context) => {
    const bodyParams = {};
    if (input.JobFlowIds !== undefined) {
        bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(input.JobFlowIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VolumeSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Iops !== undefined) {
        bodyParams["Iops"] = input.Iops;
    }
    if (input.SizeInGB !== undefined) {
        bodyParams["SizeInGB"] = input.SizeInGB;
    }
    if (input.VolumeType !== undefined) {
        bodyParams["VolumeType"] = input.VolumeType;
    }
    return bodyParams;
};
const serializeAws_json1_1XmlStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1XmlStringMaxLen256List = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1AddInstanceFleetOutput = (output, context) => {
    let contents = {
        __type: "AddInstanceFleetOutput",
        ClusterArn: undefined,
        ClusterId: undefined,
        InstanceFleetId: undefined
    };
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.InstanceFleetId !== undefined && output.InstanceFleetId !== null) {
        contents.InstanceFleetId = output.InstanceFleetId;
    }
    return contents;
};
const deserializeAws_json1_1AddInstanceGroupsOutput = (output, context) => {
    let contents = {
        __type: "AddInstanceGroupsOutput",
        ClusterArn: undefined,
        InstanceGroupIds: undefined,
        JobFlowId: undefined
    };
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.InstanceGroupIds !== undefined &&
        output.InstanceGroupIds !== null) {
        contents.InstanceGroupIds = deserializeAws_json1_1InstanceGroupIdsList(output.InstanceGroupIds, context);
    }
    if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
        contents.JobFlowId = output.JobFlowId;
    }
    return contents;
};
const deserializeAws_json1_1AddJobFlowStepsOutput = (output, context) => {
    let contents = {
        __type: "AddJobFlowStepsOutput",
        StepIds: undefined
    };
    if (output.StepIds !== undefined && output.StepIds !== null) {
        contents.StepIds = deserializeAws_json1_1StepIdsList(output.StepIds, context);
    }
    return contents;
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput"
    };
    return contents;
};
const deserializeAws_json1_1Application = (output, context) => {
    let contents = {
        __type: "Application",
        AdditionalInfo: undefined,
        Args: undefined,
        Name: undefined,
        Version: undefined
    };
    if (output.AdditionalInfo !== undefined && output.AdditionalInfo !== null) {
        contents.AdditionalInfo = deserializeAws_json1_1StringMap(output.AdditionalInfo, context);
    }
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1StringList(output.Args, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Application(entry, context));
};
const deserializeAws_json1_1AutoScalingPolicyDescription = (output, context) => {
    let contents = {
        __type: "AutoScalingPolicyDescription",
        Constraints: undefined,
        Rules: undefined,
        Status: undefined
    };
    if (output.Constraints !== undefined && output.Constraints !== null) {
        contents.Constraints = deserializeAws_json1_1ScalingConstraints(output.Constraints, context);
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1ScalingRuleList(output.Rules, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1AutoScalingPolicyStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (output, context) => {
    let contents = {
        __type: "AutoScalingPolicyStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutoScalingPolicyStatus = (output, context) => {
    let contents = {
        __type: "AutoScalingPolicyStatus",
        State: undefined,
        StateChangeReason: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1AutoScalingPolicyStateChangeReason(output.StateChangeReason, context);
    }
    return contents;
};
const deserializeAws_json1_1BlockPublicAccessConfiguration = (output, context) => {
    let contents = {
        __type: "BlockPublicAccessConfiguration",
        BlockPublicSecurityGroupRules: undefined,
        Classification: undefined,
        Configurations: undefined,
        PermittedPublicSecurityGroupRuleRanges: undefined,
        Properties: undefined
    };
    if (output.BlockPublicSecurityGroupRules !== undefined &&
        output.BlockPublicSecurityGroupRules !== null) {
        contents.BlockPublicSecurityGroupRules =
            output.BlockPublicSecurityGroupRules;
    }
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1ConfigurationList(output.Configurations, context);
    }
    if (output.PermittedPublicSecurityGroupRuleRanges !== undefined &&
        output.PermittedPublicSecurityGroupRuleRanges !== null) {
        contents.PermittedPublicSecurityGroupRuleRanges = deserializeAws_json1_1PortRanges(output.PermittedPublicSecurityGroupRuleRanges, context);
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1StringMap(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (output, context) => {
    let contents = {
        __type: "BlockPublicAccessConfigurationMetadata",
        CreatedByArn: undefined,
        CreationDateTime: undefined
    };
    if (output.CreatedByArn !== undefined && output.CreatedByArn !== null) {
        contents.CreatedByArn = output.CreatedByArn;
    }
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1BootstrapActionConfig = (output, context) => {
    let contents = {
        __type: "BootstrapActionConfig",
        Name: undefined,
        ScriptBootstrapAction: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScriptBootstrapAction !== undefined &&
        output.ScriptBootstrapAction !== null) {
        contents.ScriptBootstrapAction = deserializeAws_json1_1ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context);
    }
    return contents;
};
const deserializeAws_json1_1BootstrapActionDetail = (output, context) => {
    let contents = {
        __type: "BootstrapActionDetail",
        BootstrapActionConfig: undefined
    };
    if (output.BootstrapActionConfig !== undefined &&
        output.BootstrapActionConfig !== null) {
        contents.BootstrapActionConfig = deserializeAws_json1_1BootstrapActionConfig(output.BootstrapActionConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1BootstrapActionDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BootstrapActionDetail(entry, context));
};
const deserializeAws_json1_1CancelStepsInfo = (output, context) => {
    let contents = {
        __type: "CancelStepsInfo",
        Reason: undefined,
        Status: undefined,
        StepId: undefined
    };
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StepId !== undefined && output.StepId !== null) {
        contents.StepId = output.StepId;
    }
    return contents;
};
const deserializeAws_json1_1CancelStepsInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CancelStepsInfo(entry, context));
};
const deserializeAws_json1_1CancelStepsOutput = (output, context) => {
    let contents = {
        __type: "CancelStepsOutput",
        CancelStepsInfoList: undefined
    };
    if (output.CancelStepsInfoList !== undefined &&
        output.CancelStepsInfoList !== null) {
        contents.CancelStepsInfoList = deserializeAws_json1_1CancelStepsInfoList(output.CancelStepsInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchAlarmDefinition = (output, context) => {
    let contents = {
        __type: "CloudWatchAlarmDefinition",
        ComparisonOperator: undefined,
        Dimensions: undefined,
        EvaluationPeriods: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Period: undefined,
        Statistic: undefined,
        Threshold: undefined,
        Unit: undefined
    };
    if (output.ComparisonOperator !== undefined &&
        output.ComparisonOperator !== null) {
        contents.ComparisonOperator = output.ComparisonOperator;
    }
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1MetricDimensionList(output.Dimensions, context);
    }
    if (output.EvaluationPeriods !== undefined &&
        output.EvaluationPeriods !== null) {
        contents.EvaluationPeriods = output.EvaluationPeriods;
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Namespace !== undefined && output.Namespace !== null) {
        contents.Namespace = output.Namespace;
    }
    if (output.Period !== undefined && output.Period !== null) {
        contents.Period = output.Period;
    }
    if (output.Statistic !== undefined && output.Statistic !== null) {
        contents.Statistic = output.Statistic;
    }
    if (output.Threshold !== undefined && output.Threshold !== null) {
        contents.Threshold = output.Threshold;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1Cluster = (output, context) => {
    let contents = {
        __type: "Cluster",
        Applications: undefined,
        AutoScalingRole: undefined,
        AutoTerminate: undefined,
        ClusterArn: undefined,
        Configurations: undefined,
        CustomAmiId: undefined,
        EbsRootVolumeSize: undefined,
        Ec2InstanceAttributes: undefined,
        Id: undefined,
        InstanceCollectionType: undefined,
        KerberosAttributes: undefined,
        LogUri: undefined,
        MasterPublicDnsName: undefined,
        Name: undefined,
        NormalizedInstanceHours: undefined,
        OutpostArn: undefined,
        ReleaseLabel: undefined,
        RepoUpgradeOnBoot: undefined,
        RequestedAmiVersion: undefined,
        RunningAmiVersion: undefined,
        ScaleDownBehavior: undefined,
        SecurityConfiguration: undefined,
        ServiceRole: undefined,
        Status: undefined,
        StepConcurrencyLevel: undefined,
        Tags: undefined,
        TerminationProtected: undefined,
        VisibleToAllUsers: undefined
    };
    if (output.Applications !== undefined && output.Applications !== null) {
        contents.Applications = deserializeAws_json1_1ApplicationList(output.Applications, context);
    }
    if (output.AutoScalingRole !== undefined && output.AutoScalingRole !== null) {
        contents.AutoScalingRole = output.AutoScalingRole;
    }
    if (output.AutoTerminate !== undefined && output.AutoTerminate !== null) {
        contents.AutoTerminate = output.AutoTerminate;
    }
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1ConfigurationList(output.Configurations, context);
    }
    if (output.CustomAmiId !== undefined && output.CustomAmiId !== null) {
        contents.CustomAmiId = output.CustomAmiId;
    }
    if (output.EbsRootVolumeSize !== undefined &&
        output.EbsRootVolumeSize !== null) {
        contents.EbsRootVolumeSize = output.EbsRootVolumeSize;
    }
    if (output.Ec2InstanceAttributes !== undefined &&
        output.Ec2InstanceAttributes !== null) {
        contents.Ec2InstanceAttributes = deserializeAws_json1_1Ec2InstanceAttributes(output.Ec2InstanceAttributes, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceCollectionType !== undefined &&
        output.InstanceCollectionType !== null) {
        contents.InstanceCollectionType = output.InstanceCollectionType;
    }
    if (output.KerberosAttributes !== undefined &&
        output.KerberosAttributes !== null) {
        contents.KerberosAttributes = deserializeAws_json1_1KerberosAttributes(output.KerberosAttributes, context);
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.MasterPublicDnsName !== undefined &&
        output.MasterPublicDnsName !== null) {
        contents.MasterPublicDnsName = output.MasterPublicDnsName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NormalizedInstanceHours !== undefined &&
        output.NormalizedInstanceHours !== null) {
        contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
    }
    if (output.OutpostArn !== undefined && output.OutpostArn !== null) {
        contents.OutpostArn = output.OutpostArn;
    }
    if (output.ReleaseLabel !== undefined && output.ReleaseLabel !== null) {
        contents.ReleaseLabel = output.ReleaseLabel;
    }
    if (output.RepoUpgradeOnBoot !== undefined &&
        output.RepoUpgradeOnBoot !== null) {
        contents.RepoUpgradeOnBoot = output.RepoUpgradeOnBoot;
    }
    if (output.RequestedAmiVersion !== undefined &&
        output.RequestedAmiVersion !== null) {
        contents.RequestedAmiVersion = output.RequestedAmiVersion;
    }
    if (output.RunningAmiVersion !== undefined &&
        output.RunningAmiVersion !== null) {
        contents.RunningAmiVersion = output.RunningAmiVersion;
    }
    if (output.ScaleDownBehavior !== undefined &&
        output.ScaleDownBehavior !== null) {
        contents.ScaleDownBehavior = output.ScaleDownBehavior;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1ClusterStatus(output.Status, context);
    }
    if (output.StepConcurrencyLevel !== undefined &&
        output.StepConcurrencyLevel !== null) {
        contents.StepConcurrencyLevel = output.StepConcurrencyLevel;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TerminationProtected !== undefined &&
        output.TerminationProtected !== null) {
        contents.TerminationProtected = output.TerminationProtected;
    }
    if (output.VisibleToAllUsers !== undefined &&
        output.VisibleToAllUsers !== null) {
        contents.VisibleToAllUsers = output.VisibleToAllUsers;
    }
    return contents;
};
const deserializeAws_json1_1ClusterStateChangeReason = (output, context) => {
    let contents = {
        __type: "ClusterStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterStatus = (output, context) => {
    let contents = {
        __type: "ClusterStatus",
        State: undefined,
        StateChangeReason: undefined,
        Timeline: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1ClusterStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Timeline !== undefined && output.Timeline !== null) {
        contents.Timeline = deserializeAws_json1_1ClusterTimeline(output.Timeline, context);
    }
    return contents;
};
const deserializeAws_json1_1ClusterSummary = (output, context) => {
    let contents = {
        __type: "ClusterSummary",
        ClusterArn: undefined,
        Id: undefined,
        Name: undefined,
        NormalizedInstanceHours: undefined,
        OutpostArn: undefined,
        Status: undefined
    };
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NormalizedInstanceHours !== undefined &&
        output.NormalizedInstanceHours !== null) {
        contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
    }
    if (output.OutpostArn !== undefined && output.OutpostArn !== null) {
        contents.OutpostArn = output.OutpostArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1ClusterStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1ClusterSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ClusterSummary(entry, context));
};
const deserializeAws_json1_1ClusterTimeline = (output, context) => {
    let contents = {
        __type: "ClusterTimeline",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        ReadyDateTime: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1Command = (output, context) => {
    let contents = {
        __type: "Command",
        Args: undefined,
        Name: undefined,
        ScriptPath: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1StringList(output.Args, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScriptPath !== undefined && output.ScriptPath !== null) {
        contents.ScriptPath = output.ScriptPath;
    }
    return contents;
};
const deserializeAws_json1_1CommandList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Command(entry, context));
};
const deserializeAws_json1_1Configuration = (output, context) => {
    let contents = {
        __type: "Configuration",
        Classification: undefined,
        Configurations: undefined,
        Properties: undefined
    };
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1ConfigurationList(output.Configurations, context);
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1StringMap(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Configuration(entry, context));
};
const deserializeAws_json1_1CreateSecurityConfigurationOutput = (output, context) => {
    let contents = {
        __type: "CreateSecurityConfigurationOutput",
        CreationDateTime: undefined,
        Name: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (output, context) => {
    let contents = {
        __type: "DeleteSecurityConfigurationOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeClusterOutput = (output, context) => {
    let contents = {
        __type: "DescribeClusterOutput",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeJobFlowsOutput = (output, context) => {
    let contents = {
        __type: "DescribeJobFlowsOutput",
        JobFlows: undefined
    };
    if (output.JobFlows !== undefined && output.JobFlows !== null) {
        contents.JobFlows = deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (output, context) => {
    let contents = {
        __type: "DescribeSecurityConfigurationOutput",
        CreationDateTime: undefined,
        Name: undefined,
        SecurityConfiguration: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    return contents;
};
const deserializeAws_json1_1DescribeStepOutput = (output, context) => {
    let contents = {
        __type: "DescribeStepOutput",
        Step: undefined
    };
    if (output.Step !== undefined && output.Step !== null) {
        contents.Step = deserializeAws_json1_1Step(output.Step, context);
    }
    return contents;
};
const deserializeAws_json1_1EC2InstanceIdsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EbsBlockDevice = (output, context) => {
    let contents = {
        __type: "EbsBlockDevice",
        Device: undefined,
        VolumeSpecification: undefined
    };
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = output.Device;
    }
    if (output.VolumeSpecification !== undefined &&
        output.VolumeSpecification !== null) {
        contents.VolumeSpecification = deserializeAws_json1_1VolumeSpecification(output.VolumeSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_1EbsBlockDeviceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EbsBlockDevice(entry, context));
};
const deserializeAws_json1_1EbsVolume = (output, context) => {
    let contents = {
        __type: "EbsVolume",
        Device: undefined,
        VolumeId: undefined
    };
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = output.Device;
    }
    if (output.VolumeId !== undefined && output.VolumeId !== null) {
        contents.VolumeId = output.VolumeId;
    }
    return contents;
};
const deserializeAws_json1_1EbsVolumeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EbsVolume(entry, context));
};
const deserializeAws_json1_1Ec2InstanceAttributes = (output, context) => {
    let contents = {
        __type: "Ec2InstanceAttributes",
        AdditionalMasterSecurityGroups: undefined,
        AdditionalSlaveSecurityGroups: undefined,
        Ec2AvailabilityZone: undefined,
        Ec2KeyName: undefined,
        Ec2SubnetId: undefined,
        EmrManagedMasterSecurityGroup: undefined,
        EmrManagedSlaveSecurityGroup: undefined,
        IamInstanceProfile: undefined,
        RequestedEc2AvailabilityZones: undefined,
        RequestedEc2SubnetIds: undefined,
        ServiceAccessSecurityGroup: undefined
    };
    if (output.AdditionalMasterSecurityGroups !== undefined &&
        output.AdditionalMasterSecurityGroups !== null) {
        contents.AdditionalMasterSecurityGroups = deserializeAws_json1_1StringList(output.AdditionalMasterSecurityGroups, context);
    }
    if (output.AdditionalSlaveSecurityGroups !== undefined &&
        output.AdditionalSlaveSecurityGroups !== null) {
        contents.AdditionalSlaveSecurityGroups = deserializeAws_json1_1StringList(output.AdditionalSlaveSecurityGroups, context);
    }
    if (output.Ec2AvailabilityZone !== undefined &&
        output.Ec2AvailabilityZone !== null) {
        contents.Ec2AvailabilityZone = output.Ec2AvailabilityZone;
    }
    if (output.Ec2KeyName !== undefined && output.Ec2KeyName !== null) {
        contents.Ec2KeyName = output.Ec2KeyName;
    }
    if (output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null) {
        contents.Ec2SubnetId = output.Ec2SubnetId;
    }
    if (output.EmrManagedMasterSecurityGroup !== undefined &&
        output.EmrManagedMasterSecurityGroup !== null) {
        contents.EmrManagedMasterSecurityGroup =
            output.EmrManagedMasterSecurityGroup;
    }
    if (output.EmrManagedSlaveSecurityGroup !== undefined &&
        output.EmrManagedSlaveSecurityGroup !== null) {
        contents.EmrManagedSlaveSecurityGroup = output.EmrManagedSlaveSecurityGroup;
    }
    if (output.IamInstanceProfile !== undefined &&
        output.IamInstanceProfile !== null) {
        contents.IamInstanceProfile = output.IamInstanceProfile;
    }
    if (output.RequestedEc2AvailabilityZones !== undefined &&
        output.RequestedEc2AvailabilityZones !== null) {
        contents.RequestedEc2AvailabilityZones = deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2AvailabilityZones, context);
    }
    if (output.RequestedEc2SubnetIds !== undefined &&
        output.RequestedEc2SubnetIds !== null) {
        contents.RequestedEc2SubnetIds = deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2SubnetIds, context);
    }
    if (output.ServiceAccessSecurityGroup !== undefined &&
        output.ServiceAccessSecurityGroup !== null) {
        contents.ServiceAccessSecurityGroup = output.ServiceAccessSecurityGroup;
    }
    return contents;
};
const deserializeAws_json1_1FailureDetails = (output, context) => {
    let contents = {
        __type: "FailureDetails",
        LogFile: undefined,
        Message: undefined,
        Reason: undefined
    };
    if (output.LogFile !== undefined && output.LogFile !== null) {
        contents.LogFile = output.LogFile;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (output, context) => {
    let contents = {
        __type: "GetBlockPublicAccessConfigurationOutput",
        BlockPublicAccessConfiguration: undefined,
        BlockPublicAccessConfigurationMetadata: undefined
    };
    if (output.BlockPublicAccessConfiguration !== undefined &&
        output.BlockPublicAccessConfiguration !== null) {
        contents.BlockPublicAccessConfiguration = deserializeAws_json1_1BlockPublicAccessConfiguration(output.BlockPublicAccessConfiguration, context);
    }
    if (output.BlockPublicAccessConfigurationMetadata !== undefined &&
        output.BlockPublicAccessConfigurationMetadata !== null) {
        contents.BlockPublicAccessConfigurationMetadata = deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(output.BlockPublicAccessConfigurationMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1HadoopJarStepConfig = (output, context) => {
    let contents = {
        __type: "HadoopJarStepConfig",
        Args: undefined,
        Jar: undefined,
        MainClass: undefined,
        Properties: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1XmlStringList(output.Args, context);
    }
    if (output.Jar !== undefined && output.Jar !== null) {
        contents.Jar = output.Jar;
    }
    if (output.MainClass !== undefined && output.MainClass !== null) {
        contents.MainClass = output.MainClass;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1KeyValueList(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1HadoopStepConfig = (output, context) => {
    let contents = {
        __type: "HadoopStepConfig",
        Args: undefined,
        Jar: undefined,
        MainClass: undefined,
        Properties: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1StringList(output.Args, context);
    }
    if (output.Jar !== undefined && output.Jar !== null) {
        contents.Jar = output.Jar;
    }
    if (output.MainClass !== undefined && output.MainClass !== null) {
        contents.MainClass = output.MainClass;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1StringMap(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        EbsVolumes: undefined,
        Ec2InstanceId: undefined,
        Id: undefined,
        InstanceFleetId: undefined,
        InstanceGroupId: undefined,
        InstanceType: undefined,
        Market: undefined,
        PrivateDnsName: undefined,
        PrivateIpAddress: undefined,
        PublicDnsName: undefined,
        PublicIpAddress: undefined,
        Status: undefined
    };
    if (output.EbsVolumes !== undefined && output.EbsVolumes !== null) {
        contents.EbsVolumes = deserializeAws_json1_1EbsVolumeList(output.EbsVolumes, context);
    }
    if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
        contents.Ec2InstanceId = output.Ec2InstanceId;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceFleetId !== undefined && output.InstanceFleetId !== null) {
        contents.InstanceFleetId = output.InstanceFleetId;
    }
    if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
        contents.InstanceGroupId = output.InstanceGroupId;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.Market !== undefined && output.Market !== null) {
        contents.Market = output.Market;
    }
    if (output.PrivateDnsName !== undefined && output.PrivateDnsName !== null) {
        contents.PrivateDnsName = output.PrivateDnsName;
    }
    if (output.PrivateIpAddress !== undefined &&
        output.PrivateIpAddress !== null) {
        contents.PrivateIpAddress = output.PrivateIpAddress;
    }
    if (output.PublicDnsName !== undefined && output.PublicDnsName !== null) {
        contents.PublicDnsName = output.PublicDnsName;
    }
    if (output.PublicIpAddress !== undefined && output.PublicIpAddress !== null) {
        contents.PublicIpAddress = output.PublicIpAddress;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1InstanceStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceFleet = (output, context) => {
    let contents = {
        __type: "InstanceFleet",
        Id: undefined,
        InstanceFleetType: undefined,
        InstanceTypeSpecifications: undefined,
        LaunchSpecifications: undefined,
        Name: undefined,
        ProvisionedOnDemandCapacity: undefined,
        ProvisionedSpotCapacity: undefined,
        Status: undefined,
        TargetOnDemandCapacity: undefined,
        TargetSpotCapacity: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceFleetType !== undefined &&
        output.InstanceFleetType !== null) {
        contents.InstanceFleetType = output.InstanceFleetType;
    }
    if (output.InstanceTypeSpecifications !== undefined &&
        output.InstanceTypeSpecifications !== null) {
        contents.InstanceTypeSpecifications = deserializeAws_json1_1InstanceTypeSpecificationList(output.InstanceTypeSpecifications, context);
    }
    if (output.LaunchSpecifications !== undefined &&
        output.LaunchSpecifications !== null) {
        contents.LaunchSpecifications = deserializeAws_json1_1InstanceFleetProvisioningSpecifications(output.LaunchSpecifications, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ProvisionedOnDemandCapacity !== undefined &&
        output.ProvisionedOnDemandCapacity !== null) {
        contents.ProvisionedOnDemandCapacity = output.ProvisionedOnDemandCapacity;
    }
    if (output.ProvisionedSpotCapacity !== undefined &&
        output.ProvisionedSpotCapacity !== null) {
        contents.ProvisionedSpotCapacity = output.ProvisionedSpotCapacity;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1InstanceFleetStatus(output.Status, context);
    }
    if (output.TargetOnDemandCapacity !== undefined &&
        output.TargetOnDemandCapacity !== null) {
        contents.TargetOnDemandCapacity = output.TargetOnDemandCapacity;
    }
    if (output.TargetSpotCapacity !== undefined &&
        output.TargetSpotCapacity !== null) {
        contents.TargetSpotCapacity = output.TargetSpotCapacity;
    }
    return contents;
};
const deserializeAws_json1_1InstanceFleetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceFleet(entry, context));
};
const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (output, context) => {
    let contents = {
        __type: "InstanceFleetProvisioningSpecifications",
        SpotSpecification: undefined
    };
    if (output.SpotSpecification !== undefined &&
        output.SpotSpecification !== null) {
        contents.SpotSpecification = deserializeAws_json1_1SpotProvisioningSpecification(output.SpotSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceFleetStateChangeReason = (output, context) => {
    let contents = {
        __type: "InstanceFleetStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceFleetStatus = (output, context) => {
    let contents = {
        __type: "InstanceFleetStatus",
        State: undefined,
        StateChangeReason: undefined,
        Timeline: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1InstanceFleetStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Timeline !== undefined && output.Timeline !== null) {
        contents.Timeline = deserializeAws_json1_1InstanceFleetTimeline(output.Timeline, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceFleetTimeline = (output, context) => {
    let contents = {
        __type: "InstanceFleetTimeline",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        ReadyDateTime: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1InstanceGroup = (output, context) => {
    let contents = {
        __type: "InstanceGroup",
        AutoScalingPolicy: undefined,
        BidPrice: undefined,
        Configurations: undefined,
        ConfigurationsVersion: undefined,
        EbsBlockDevices: undefined,
        EbsOptimized: undefined,
        Id: undefined,
        InstanceGroupType: undefined,
        InstanceType: undefined,
        LastSuccessfullyAppliedConfigurations: undefined,
        LastSuccessfullyAppliedConfigurationsVersion: undefined,
        Market: undefined,
        Name: undefined,
        RequestedInstanceCount: undefined,
        RunningInstanceCount: undefined,
        ShrinkPolicy: undefined,
        Status: undefined
    };
    if (output.AutoScalingPolicy !== undefined &&
        output.AutoScalingPolicy !== null) {
        contents.AutoScalingPolicy = deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context);
    }
    if (output.BidPrice !== undefined && output.BidPrice !== null) {
        contents.BidPrice = output.BidPrice;
    }
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1ConfigurationList(output.Configurations, context);
    }
    if (output.ConfigurationsVersion !== undefined &&
        output.ConfigurationsVersion !== null) {
        contents.ConfigurationsVersion = output.ConfigurationsVersion;
    }
    if (output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null) {
        contents.EbsBlockDevices = deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context);
    }
    if (output.EbsOptimized !== undefined && output.EbsOptimized !== null) {
        contents.EbsOptimized = output.EbsOptimized;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.InstanceGroupType !== undefined &&
        output.InstanceGroupType !== null) {
        contents.InstanceGroupType = output.InstanceGroupType;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LastSuccessfullyAppliedConfigurations !== undefined &&
        output.LastSuccessfullyAppliedConfigurations !== null) {
        contents.LastSuccessfullyAppliedConfigurations = deserializeAws_json1_1ConfigurationList(output.LastSuccessfullyAppliedConfigurations, context);
    }
    if (output.LastSuccessfullyAppliedConfigurationsVersion !== undefined &&
        output.LastSuccessfullyAppliedConfigurationsVersion !== null) {
        contents.LastSuccessfullyAppliedConfigurationsVersion =
            output.LastSuccessfullyAppliedConfigurationsVersion;
    }
    if (output.Market !== undefined && output.Market !== null) {
        contents.Market = output.Market;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RequestedInstanceCount !== undefined &&
        output.RequestedInstanceCount !== null) {
        contents.RequestedInstanceCount = output.RequestedInstanceCount;
    }
    if (output.RunningInstanceCount !== undefined &&
        output.RunningInstanceCount !== null) {
        contents.RunningInstanceCount = output.RunningInstanceCount;
    }
    if (output.ShrinkPolicy !== undefined && output.ShrinkPolicy !== null) {
        contents.ShrinkPolicy = deserializeAws_json1_1ShrinkPolicy(output.ShrinkPolicy, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1InstanceGroupStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceGroupDetail = (output, context) => {
    let contents = {
        __type: "InstanceGroupDetail",
        BidPrice: undefined,
        CreationDateTime: undefined,
        EndDateTime: undefined,
        InstanceGroupId: undefined,
        InstanceRequestCount: undefined,
        InstanceRole: undefined,
        InstanceRunningCount: undefined,
        InstanceType: undefined,
        LastStateChangeReason: undefined,
        Market: undefined,
        Name: undefined,
        ReadyDateTime: undefined,
        StartDateTime: undefined,
        State: undefined
    };
    if (output.BidPrice !== undefined && output.BidPrice !== null) {
        contents.BidPrice = output.BidPrice;
    }
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
        contents.InstanceGroupId = output.InstanceGroupId;
    }
    if (output.InstanceRequestCount !== undefined &&
        output.InstanceRequestCount !== null) {
        contents.InstanceRequestCount = output.InstanceRequestCount;
    }
    if (output.InstanceRole !== undefined && output.InstanceRole !== null) {
        contents.InstanceRole = output.InstanceRole;
    }
    if (output.InstanceRunningCount !== undefined &&
        output.InstanceRunningCount !== null) {
        contents.InstanceRunningCount = output.InstanceRunningCount;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LastStateChangeReason !== undefined &&
        output.LastStateChangeReason !== null) {
        contents.LastStateChangeReason = output.LastStateChangeReason;
    }
    if (output.Market !== undefined && output.Market !== null) {
        contents.Market = output.Market;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
        contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1InstanceGroupDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceGroupDetail(entry, context));
};
const deserializeAws_json1_1InstanceGroupIdsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InstanceGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceGroup(entry, context));
};
const deserializeAws_json1_1InstanceGroupStateChangeReason = (output, context) => {
    let contents = {
        __type: "InstanceGroupStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceGroupStatus = (output, context) => {
    let contents = {
        __type: "InstanceGroupStatus",
        State: undefined,
        StateChangeReason: undefined,
        Timeline: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1InstanceGroupStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Timeline !== undefined && output.Timeline !== null) {
        contents.Timeline = deserializeAws_json1_1InstanceGroupTimeline(output.Timeline, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceGroupTimeline = (output, context) => {
    let contents = {
        __type: "InstanceGroupTimeline",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        ReadyDateTime: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1InstanceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Instance(entry, context));
};
const deserializeAws_json1_1InstanceResizePolicy = (output, context) => {
    let contents = {
        __type: "InstanceResizePolicy",
        InstanceTerminationTimeout: undefined,
        InstancesToProtect: undefined,
        InstancesToTerminate: undefined
    };
    if (output.InstanceTerminationTimeout !== undefined &&
        output.InstanceTerminationTimeout !== null) {
        contents.InstanceTerminationTimeout = output.InstanceTerminationTimeout;
    }
    if (output.InstancesToProtect !== undefined &&
        output.InstancesToProtect !== null) {
        contents.InstancesToProtect = deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToProtect, context);
    }
    if (output.InstancesToTerminate !== undefined &&
        output.InstancesToTerminate !== null) {
        contents.InstancesToTerminate = deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToTerminate, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceStateChangeReason = (output, context) => {
    let contents = {
        __type: "InstanceStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceStatus = (output, context) => {
    let contents = {
        __type: "InstanceStatus",
        State: undefined,
        StateChangeReason: undefined,
        Timeline: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1InstanceStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Timeline !== undefined && output.Timeline !== null) {
        contents.Timeline = deserializeAws_json1_1InstanceTimeline(output.Timeline, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceTimeline = (output, context) => {
    let contents = {
        __type: "InstanceTimeline",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        ReadyDateTime: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1InstanceTypeSpecification = (output, context) => {
    let contents = {
        __type: "InstanceTypeSpecification",
        BidPrice: undefined,
        BidPriceAsPercentageOfOnDemandPrice: undefined,
        Configurations: undefined,
        EbsBlockDevices: undefined,
        EbsOptimized: undefined,
        InstanceType: undefined,
        WeightedCapacity: undefined
    };
    if (output.BidPrice !== undefined && output.BidPrice !== null) {
        contents.BidPrice = output.BidPrice;
    }
    if (output.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
        output.BidPriceAsPercentageOfOnDemandPrice !== null) {
        contents.BidPriceAsPercentageOfOnDemandPrice =
            output.BidPriceAsPercentageOfOnDemandPrice;
    }
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1ConfigurationList(output.Configurations, context);
    }
    if (output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null) {
        contents.EbsBlockDevices = deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context);
    }
    if (output.EbsOptimized !== undefined && output.EbsOptimized !== null) {
        contents.EbsOptimized = output.EbsOptimized;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.WeightedCapacity !== undefined &&
        output.WeightedCapacity !== null) {
        contents.WeightedCapacity = output.WeightedCapacity;
    }
    return contents;
};
const deserializeAws_json1_1InstanceTypeSpecificationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceTypeSpecification(entry, context));
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError"
    };
    return contents;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
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
        ErrorCode: undefined,
        Message: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1JobFlowDetail = (output, context) => {
    let contents = {
        __type: "JobFlowDetail",
        AmiVersion: undefined,
        AutoScalingRole: undefined,
        BootstrapActions: undefined,
        ExecutionStatusDetail: undefined,
        Instances: undefined,
        JobFlowId: undefined,
        JobFlowRole: undefined,
        LogUri: undefined,
        Name: undefined,
        ScaleDownBehavior: undefined,
        ServiceRole: undefined,
        Steps: undefined,
        SupportedProducts: undefined,
        VisibleToAllUsers: undefined
    };
    if (output.AmiVersion !== undefined && output.AmiVersion !== null) {
        contents.AmiVersion = output.AmiVersion;
    }
    if (output.AutoScalingRole !== undefined && output.AutoScalingRole !== null) {
        contents.AutoScalingRole = output.AutoScalingRole;
    }
    if (output.BootstrapActions !== undefined &&
        output.BootstrapActions !== null) {
        contents.BootstrapActions = deserializeAws_json1_1BootstrapActionDetailList(output.BootstrapActions, context);
    }
    if (output.ExecutionStatusDetail !== undefined &&
        output.ExecutionStatusDetail !== null) {
        contents.ExecutionStatusDetail = deserializeAws_json1_1JobFlowExecutionStatusDetail(output.ExecutionStatusDetail, context);
    }
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1JobFlowInstancesDetail(output.Instances, context);
    }
    if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
        contents.JobFlowId = output.JobFlowId;
    }
    if (output.JobFlowRole !== undefined && output.JobFlowRole !== null) {
        contents.JobFlowRole = output.JobFlowRole;
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScaleDownBehavior !== undefined &&
        output.ScaleDownBehavior !== null) {
        contents.ScaleDownBehavior = output.ScaleDownBehavior;
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    if (output.Steps !== undefined && output.Steps !== null) {
        contents.Steps = deserializeAws_json1_1StepDetailList(output.Steps, context);
    }
    if (output.SupportedProducts !== undefined &&
        output.SupportedProducts !== null) {
        contents.SupportedProducts = deserializeAws_json1_1SupportedProductsList(output.SupportedProducts, context);
    }
    if (output.VisibleToAllUsers !== undefined &&
        output.VisibleToAllUsers !== null) {
        contents.VisibleToAllUsers = output.VisibleToAllUsers;
    }
    return contents;
};
const deserializeAws_json1_1JobFlowDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1JobFlowDetail(entry, context));
};
const deserializeAws_json1_1JobFlowExecutionStatusDetail = (output, context) => {
    let contents = {
        __type: "JobFlowExecutionStatusDetail",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        LastStateChangeReason: undefined,
        ReadyDateTime: undefined,
        StartDateTime: undefined,
        State: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.LastStateChangeReason !== undefined &&
        output.LastStateChangeReason !== null) {
        contents.LastStateChangeReason = output.LastStateChangeReason;
    }
    if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
        contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
    }
    if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
        contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1JobFlowInstancesDetail = (output, context) => {
    let contents = {
        __type: "JobFlowInstancesDetail",
        Ec2KeyName: undefined,
        Ec2SubnetId: undefined,
        HadoopVersion: undefined,
        InstanceCount: undefined,
        InstanceGroups: undefined,
        KeepJobFlowAliveWhenNoSteps: undefined,
        MasterInstanceId: undefined,
        MasterInstanceType: undefined,
        MasterPublicDnsName: undefined,
        NormalizedInstanceHours: undefined,
        Placement: undefined,
        SlaveInstanceType: undefined,
        TerminationProtected: undefined
    };
    if (output.Ec2KeyName !== undefined && output.Ec2KeyName !== null) {
        contents.Ec2KeyName = output.Ec2KeyName;
    }
    if (output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null) {
        contents.Ec2SubnetId = output.Ec2SubnetId;
    }
    if (output.HadoopVersion !== undefined && output.HadoopVersion !== null) {
        contents.HadoopVersion = output.HadoopVersion;
    }
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.InstanceGroups !== undefined && output.InstanceGroups !== null) {
        contents.InstanceGroups = deserializeAws_json1_1InstanceGroupDetailList(output.InstanceGroups, context);
    }
    if (output.KeepJobFlowAliveWhenNoSteps !== undefined &&
        output.KeepJobFlowAliveWhenNoSteps !== null) {
        contents.KeepJobFlowAliveWhenNoSteps = output.KeepJobFlowAliveWhenNoSteps;
    }
    if (output.MasterInstanceId !== undefined &&
        output.MasterInstanceId !== null) {
        contents.MasterInstanceId = output.MasterInstanceId;
    }
    if (output.MasterInstanceType !== undefined &&
        output.MasterInstanceType !== null) {
        contents.MasterInstanceType = output.MasterInstanceType;
    }
    if (output.MasterPublicDnsName !== undefined &&
        output.MasterPublicDnsName !== null) {
        contents.MasterPublicDnsName = output.MasterPublicDnsName;
    }
    if (output.NormalizedInstanceHours !== undefined &&
        output.NormalizedInstanceHours !== null) {
        contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
    }
    if (output.Placement !== undefined && output.Placement !== null) {
        contents.Placement = deserializeAws_json1_1PlacementType(output.Placement, context);
    }
    if (output.SlaveInstanceType !== undefined &&
        output.SlaveInstanceType !== null) {
        contents.SlaveInstanceType = output.SlaveInstanceType;
    }
    if (output.TerminationProtected !== undefined &&
        output.TerminationProtected !== null) {
        contents.TerminationProtected = output.TerminationProtected;
    }
    return contents;
};
const deserializeAws_json1_1KerberosAttributes = (output, context) => {
    let contents = {
        __type: "KerberosAttributes",
        ADDomainJoinPassword: undefined,
        ADDomainJoinUser: undefined,
        CrossRealmTrustPrincipalPassword: undefined,
        KdcAdminPassword: undefined,
        Realm: undefined
    };
    if (output.ADDomainJoinPassword !== undefined &&
        output.ADDomainJoinPassword !== null) {
        contents.ADDomainJoinPassword = output.ADDomainJoinPassword;
    }
    if (output.ADDomainJoinUser !== undefined &&
        output.ADDomainJoinUser !== null) {
        contents.ADDomainJoinUser = output.ADDomainJoinUser;
    }
    if (output.CrossRealmTrustPrincipalPassword !== undefined &&
        output.CrossRealmTrustPrincipalPassword !== null) {
        contents.CrossRealmTrustPrincipalPassword =
            output.CrossRealmTrustPrincipalPassword;
    }
    if (output.KdcAdminPassword !== undefined &&
        output.KdcAdminPassword !== null) {
        contents.KdcAdminPassword = output.KdcAdminPassword;
    }
    if (output.Realm !== undefined && output.Realm !== null) {
        contents.Realm = output.Realm;
    }
    return contents;
};
const deserializeAws_json1_1KeyValue = (output, context) => {
    let contents = {
        __type: "KeyValue",
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
const deserializeAws_json1_1KeyValueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyValue(entry, context));
};
const deserializeAws_json1_1ListBootstrapActionsOutput = (output, context) => {
    let contents = {
        __type: "ListBootstrapActionsOutput",
        BootstrapActions: undefined,
        Marker: undefined
    };
    if (output.BootstrapActions !== undefined &&
        output.BootstrapActions !== null) {
        contents.BootstrapActions = deserializeAws_json1_1CommandList(output.BootstrapActions, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListClustersOutput = (output, context) => {
    let contents = {
        __type: "ListClustersOutput",
        Clusters: undefined,
        Marker: undefined
    };
    if (output.Clusters !== undefined && output.Clusters !== null) {
        contents.Clusters = deserializeAws_json1_1ClusterSummaryList(output.Clusters, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListInstanceFleetsOutput = (output, context) => {
    let contents = {
        __type: "ListInstanceFleetsOutput",
        InstanceFleets: undefined,
        Marker: undefined
    };
    if (output.InstanceFleets !== undefined && output.InstanceFleets !== null) {
        contents.InstanceFleets = deserializeAws_json1_1InstanceFleetList(output.InstanceFleets, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListInstanceGroupsOutput = (output, context) => {
    let contents = {
        __type: "ListInstanceGroupsOutput",
        InstanceGroups: undefined,
        Marker: undefined
    };
    if (output.InstanceGroups !== undefined && output.InstanceGroups !== null) {
        contents.InstanceGroups = deserializeAws_json1_1InstanceGroupList(output.InstanceGroups, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListInstancesOutput = (output, context) => {
    let contents = {
        __type: "ListInstancesOutput",
        Instances: undefined,
        Marker: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1InstanceList(output.Instances, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListSecurityConfigurationsOutput = (output, context) => {
    let contents = {
        __type: "ListSecurityConfigurationsOutput",
        Marker: undefined,
        SecurityConfigurations: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.SecurityConfigurations !== undefined &&
        output.SecurityConfigurations !== null) {
        contents.SecurityConfigurations = deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1ListStepsOutput = (output, context) => {
    let contents = {
        __type: "ListStepsOutput",
        Marker: undefined,
        Steps: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.Steps !== undefined && output.Steps !== null) {
        contents.Steps = deserializeAws_json1_1StepSummaryList(output.Steps, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricDimension = (output, context) => {
    let contents = {
        __type: "MetricDimension",
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
const deserializeAws_json1_1MetricDimensionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricDimension(entry, context));
};
const deserializeAws_json1_1ModifyClusterOutput = (output, context) => {
    let contents = {
        __type: "ModifyClusterOutput",
        StepConcurrencyLevel: undefined
    };
    if (output.StepConcurrencyLevel !== undefined &&
        output.StepConcurrencyLevel !== null) {
        contents.StepConcurrencyLevel = output.StepConcurrencyLevel;
    }
    return contents;
};
const deserializeAws_json1_1PlacementType = (output, context) => {
    let contents = {
        __type: "PlacementType",
        AvailabilityZone: undefined,
        AvailabilityZones: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.AvailabilityZones !== undefined &&
        output.AvailabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_json1_1XmlStringMaxLen256List(output.AvailabilityZones, context);
    }
    return contents;
};
const deserializeAws_json1_1PortRange = (output, context) => {
    let contents = {
        __type: "PortRange",
        MaxRange: undefined,
        MinRange: undefined
    };
    if (output.MaxRange !== undefined && output.MaxRange !== null) {
        contents.MaxRange = output.MaxRange;
    }
    if (output.MinRange !== undefined && output.MinRange !== null) {
        contents.MinRange = output.MinRange;
    }
    return contents;
};
const deserializeAws_json1_1PortRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PortRange(entry, context));
};
const deserializeAws_json1_1PutAutoScalingPolicyOutput = (output, context) => {
    let contents = {
        __type: "PutAutoScalingPolicyOutput",
        AutoScalingPolicy: undefined,
        ClusterArn: undefined,
        ClusterId: undefined,
        InstanceGroupId: undefined
    };
    if (output.AutoScalingPolicy !== undefined &&
        output.AutoScalingPolicy !== null) {
        contents.AutoScalingPolicy = deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context);
    }
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
        contents.InstanceGroupId = output.InstanceGroupId;
    }
    return contents;
};
const deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = (output, context) => {
    let contents = {
        __type: "PutBlockPublicAccessConfigurationOutput"
    };
    return contents;
};
const deserializeAws_json1_1RemoveAutoScalingPolicyOutput = (output, context) => {
    let contents = {
        __type: "RemoveAutoScalingPolicyOutput"
    };
    return contents;
};
const deserializeAws_json1_1RemoveTagsOutput = (output, context) => {
    let contents = {
        __type: "RemoveTagsOutput"
    };
    return contents;
};
const deserializeAws_json1_1RunJobFlowOutput = (output, context) => {
    let contents = {
        __type: "RunJobFlowOutput",
        ClusterArn: undefined,
        JobFlowId: undefined
    };
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
        contents.JobFlowId = output.JobFlowId;
    }
    return contents;
};
const deserializeAws_json1_1ScalingAction = (output, context) => {
    let contents = {
        __type: "ScalingAction",
        Market: undefined,
        SimpleScalingPolicyConfiguration: undefined
    };
    if (output.Market !== undefined && output.Market !== null) {
        contents.Market = output.Market;
    }
    if (output.SimpleScalingPolicyConfiguration !== undefined &&
        output.SimpleScalingPolicyConfiguration !== null) {
        contents.SimpleScalingPolicyConfiguration = deserializeAws_json1_1SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1ScalingConstraints = (output, context) => {
    let contents = {
        __type: "ScalingConstraints",
        MaxCapacity: undefined,
        MinCapacity: undefined
    };
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
        contents.MinCapacity = output.MinCapacity;
    }
    return contents;
};
const deserializeAws_json1_1ScalingRule = (output, context) => {
    let contents = {
        __type: "ScalingRule",
        Action: undefined,
        Description: undefined,
        Name: undefined,
        Trigger: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = deserializeAws_json1_1ScalingAction(output.Action, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Trigger !== undefined && output.Trigger !== null) {
        contents.Trigger = deserializeAws_json1_1ScalingTrigger(output.Trigger, context);
    }
    return contents;
};
const deserializeAws_json1_1ScalingRuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScalingRule(entry, context));
};
const deserializeAws_json1_1ScalingTrigger = (output, context) => {
    let contents = {
        __type: "ScalingTrigger",
        CloudWatchAlarmDefinition: undefined
    };
    if (output.CloudWatchAlarmDefinition !== undefined &&
        output.CloudWatchAlarmDefinition !== null) {
        contents.CloudWatchAlarmDefinition = deserializeAws_json1_1CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1ScriptBootstrapActionConfig = (output, context) => {
    let contents = {
        __type: "ScriptBootstrapActionConfig",
        Args: undefined,
        Path: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1XmlStringList(output.Args, context);
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    return contents;
};
const deserializeAws_json1_1SecurityConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecurityConfigurationSummary(entry, context));
};
const deserializeAws_json1_1SecurityConfigurationSummary = (output, context) => {
    let contents = {
        __type: "SecurityConfigurationSummary",
        CreationDateTime: undefined,
        Name: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ShrinkPolicy = (output, context) => {
    let contents = {
        __type: "ShrinkPolicy",
        DecommissionTimeout: undefined,
        InstanceResizePolicy: undefined
    };
    if (output.DecommissionTimeout !== undefined &&
        output.DecommissionTimeout !== null) {
        contents.DecommissionTimeout = output.DecommissionTimeout;
    }
    if (output.InstanceResizePolicy !== undefined &&
        output.InstanceResizePolicy !== null) {
        contents.InstanceResizePolicy = deserializeAws_json1_1InstanceResizePolicy(output.InstanceResizePolicy, context);
    }
    return contents;
};
const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (output, context) => {
    let contents = {
        __type: "SimpleScalingPolicyConfiguration",
        AdjustmentType: undefined,
        CoolDown: undefined,
        ScalingAdjustment: undefined
    };
    if (output.AdjustmentType !== undefined && output.AdjustmentType !== null) {
        contents.AdjustmentType = output.AdjustmentType;
    }
    if (output.CoolDown !== undefined && output.CoolDown !== null) {
        contents.CoolDown = output.CoolDown;
    }
    if (output.ScalingAdjustment !== undefined &&
        output.ScalingAdjustment !== null) {
        contents.ScalingAdjustment = output.ScalingAdjustment;
    }
    return contents;
};
const deserializeAws_json1_1SpotProvisioningSpecification = (output, context) => {
    let contents = {
        __type: "SpotProvisioningSpecification",
        BlockDurationMinutes: undefined,
        TimeoutAction: undefined,
        TimeoutDurationMinutes: undefined
    };
    if (output.BlockDurationMinutes !== undefined &&
        output.BlockDurationMinutes !== null) {
        contents.BlockDurationMinutes = output.BlockDurationMinutes;
    }
    if (output.TimeoutAction !== undefined && output.TimeoutAction !== null) {
        contents.TimeoutAction = output.TimeoutAction;
    }
    if (output.TimeoutDurationMinutes !== undefined &&
        output.TimeoutDurationMinutes !== null) {
        contents.TimeoutDurationMinutes = output.TimeoutDurationMinutes;
    }
    return contents;
};
const deserializeAws_json1_1Step = (output, context) => {
    let contents = {
        __type: "Step",
        ActionOnFailure: undefined,
        Config: undefined,
        Id: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
        contents.ActionOnFailure = output.ActionOnFailure;
    }
    if (output.Config !== undefined && output.Config !== null) {
        contents.Config = deserializeAws_json1_1HadoopStepConfig(output.Config, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1StepStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1StepConfig = (output, context) => {
    let contents = {
        __type: "StepConfig",
        ActionOnFailure: undefined,
        HadoopJarStep: undefined,
        Name: undefined
    };
    if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
        contents.ActionOnFailure = output.ActionOnFailure;
    }
    if (output.HadoopJarStep !== undefined && output.HadoopJarStep !== null) {
        contents.HadoopJarStep = deserializeAws_json1_1HadoopJarStepConfig(output.HadoopJarStep, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1StepDetail = (output, context) => {
    let contents = {
        __type: "StepDetail",
        ExecutionStatusDetail: undefined,
        StepConfig: undefined
    };
    if (output.ExecutionStatusDetail !== undefined &&
        output.ExecutionStatusDetail !== null) {
        contents.ExecutionStatusDetail = deserializeAws_json1_1StepExecutionStatusDetail(output.ExecutionStatusDetail, context);
    }
    if (output.StepConfig !== undefined && output.StepConfig !== null) {
        contents.StepConfig = deserializeAws_json1_1StepConfig(output.StepConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1StepDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StepDetail(entry, context));
};
const deserializeAws_json1_1StepExecutionStatusDetail = (output, context) => {
    let contents = {
        __type: "StepExecutionStatusDetail",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        LastStateChangeReason: undefined,
        StartDateTime: undefined,
        State: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.LastStateChangeReason !== undefined &&
        output.LastStateChangeReason !== null) {
        contents.LastStateChangeReason = output.LastStateChangeReason;
    }
    if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
        contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1StepIdsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StepStateChangeReason = (output, context) => {
    let contents = {
        __type: "StepStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1StepStatus = (output, context) => {
    let contents = {
        __type: "StepStatus",
        FailureDetails: undefined,
        State: undefined,
        StateChangeReason: undefined,
        Timeline: undefined
    };
    if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
        contents.FailureDetails = deserializeAws_json1_1FailureDetails(output.FailureDetails, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1StepStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Timeline !== undefined && output.Timeline !== null) {
        contents.Timeline = deserializeAws_json1_1StepTimeline(output.Timeline, context);
    }
    return contents;
};
const deserializeAws_json1_1StepSummary = (output, context) => {
    let contents = {
        __type: "StepSummary",
        ActionOnFailure: undefined,
        Config: undefined,
        Id: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
        contents.ActionOnFailure = output.ActionOnFailure;
    }
    if (output.Config !== undefined && output.Config !== null) {
        contents.Config = deserializeAws_json1_1HadoopStepConfig(output.Config, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1StepStatus(output.Status, context);
    }
    return contents;
};
const deserializeAws_json1_1StepSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StepSummary(entry, context));
};
const deserializeAws_json1_1StepTimeline = (output, context) => {
    let contents = {
        __type: "StepTimeline",
        CreationDateTime: undefined,
        EndDateTime: undefined,
        StartDateTime: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
        contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StringMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1SupportedProductsList = (output, context) => {
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
const deserializeAws_json1_1VolumeSpecification = (output, context) => {
    let contents = {
        __type: "VolumeSpecification",
        Iops: undefined,
        SizeInGB: undefined,
        VolumeType: undefined
    };
    if (output.Iops !== undefined && output.Iops !== null) {
        contents.Iops = output.Iops;
    }
    if (output.SizeInGB !== undefined && output.SizeInGB !== null) {
        contents.SizeInGB = output.SizeInGB;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1XmlStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1XmlStringMaxLen256List = (output, context) => {
    return (output || []).map((entry) => entry);
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