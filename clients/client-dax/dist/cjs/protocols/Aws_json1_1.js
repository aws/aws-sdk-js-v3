"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.CreateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
async function serializeAws_json1_1CreateParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.CreateParameterGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateParameterGroupCommand = serializeAws_json1_1CreateParameterGroupCommand;
async function serializeAws_json1_1CreateSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.CreateSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSubnetGroupCommand = serializeAws_json1_1CreateSubnetGroupCommand;
async function serializeAws_json1_1DecreaseReplicationFactorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DecreaseReplicationFactor";
    let body;
    body = JSON.stringify(serializeAws_json1_1DecreaseReplicationFactorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DecreaseReplicationFactorCommand = serializeAws_json1_1DecreaseReplicationFactorCommand;
async function serializeAws_json1_1DeleteClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DeleteCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteClusterCommand = serializeAws_json1_1DeleteClusterCommand;
async function serializeAws_json1_1DeleteParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DeleteParameterGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteParameterGroupCommand = serializeAws_json1_1DeleteParameterGroupCommand;
async function serializeAws_json1_1DeleteSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DeleteSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSubnetGroupCommand = serializeAws_json1_1DeleteSubnetGroupCommand;
async function serializeAws_json1_1DescribeClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClustersCommand = serializeAws_json1_1DescribeClustersCommand;
async function serializeAws_json1_1DescribeDefaultParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeDefaultParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDefaultParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDefaultParametersCommand = serializeAws_json1_1DescribeDefaultParametersCommand;
async function serializeAws_json1_1DescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
async function serializeAws_json1_1DescribeParameterGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeParameterGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParameterGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeParameterGroupsCommand = serializeAws_json1_1DescribeParameterGroupsCommand;
async function serializeAws_json1_1DescribeParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeParametersCommand = serializeAws_json1_1DescribeParametersCommand;
async function serializeAws_json1_1DescribeSubnetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.DescribeSubnetGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubnetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSubnetGroupsCommand = serializeAws_json1_1DescribeSubnetGroupsCommand;
async function serializeAws_json1_1IncreaseReplicationFactorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.IncreaseReplicationFactor";
    let body;
    body = JSON.stringify(serializeAws_json1_1IncreaseReplicationFactorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1IncreaseReplicationFactorCommand = serializeAws_json1_1IncreaseReplicationFactorCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1RebootNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.RebootNode";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootNodeCommand = serializeAws_json1_1RebootNodeCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.UpdateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateClusterCommand = serializeAws_json1_1UpdateClusterCommand;
async function serializeAws_json1_1UpdateParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.UpdateParameterGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateParameterGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateParameterGroupCommand = serializeAws_json1_1UpdateParameterGroupCommand;
async function serializeAws_json1_1UpdateSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDAXV3.UpdateSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSubnetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSubnetGroupCommand = serializeAws_json1_1UpdateSubnetGroupCommand;
async function deserializeAws_json1_1CreateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterResponse" }, contents);
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
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterAlreadyExistsFault":
        case "elmo.admin#ClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "elmo.admin#ClusterQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "elmo.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterGroupStateFault":
        case "elmo.admin#InvalidParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupNotFoundFault":
        case "elmo.admin#SubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagQuotaPerResourceExceeded":
        case "elmo.admin#TagQuotaPerResourceExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateParameterGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateParameterGroupCommand = deserializeAws_json1_1CreateParameterGroupCommand;
async function deserializeAws_json1_1CreateParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterGroupStateFault":
        case "elmo.admin#InvalidParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupAlreadyExistsFault":
        case "elmo.admin#ParameterGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupQuotaExceededFault":
        case "elmo.admin#ParameterGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSubnetGroupCommand = deserializeAws_json1_1CreateSubnetGroupCommand;
async function deserializeAws_json1_1CreateSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidSubnet":
        case "elmo.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupAlreadyExistsFault":
        case "elmo.admin#SubnetGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupQuotaExceededFault":
        case "elmo.admin#SubnetGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetQuotaExceededFault":
        case "elmo.admin#SubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DecreaseReplicationFactorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DecreaseReplicationFactorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DecreaseReplicationFactorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DecreaseReplicationFactorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DecreaseReplicationFactorCommand = deserializeAws_json1_1DecreaseReplicationFactorCommand;
async function deserializeAws_json1_1DecreaseReplicationFactorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeNotFoundFault":
        case "elmo.admin#NodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteClusterCommand = deserializeAws_json1_1DeleteClusterCommand;
async function deserializeAws_json1_1DeleteClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteParameterGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteParameterGroupCommand = deserializeAws_json1_1DeleteParameterGroupCommand;
async function deserializeAws_json1_1DeleteParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterGroupStateFault":
        case "elmo.admin#InvalidParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSubnetGroupCommand = deserializeAws_json1_1DeleteSubnetGroupCommand;
async function deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupInUseFault":
        case "elmo.admin#SubnetGroupInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupNotFoundFault":
        case "elmo.admin#SubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClustersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeClustersCommand = deserializeAws_json1_1DescribeClustersCommand;
async function deserializeAws_json1_1DescribeClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDefaultParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDefaultParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDefaultParametersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDefaultParametersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDefaultParametersCommand = deserializeAws_json1_1DescribeDefaultParametersCommand;
async function deserializeAws_json1_1DescribeDefaultParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
async function deserializeAws_json1_1DescribeEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeParameterGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParameterGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeParameterGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeParameterGroupsCommand = deserializeAws_json1_1DescribeParameterGroupsCommand;
async function deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeParametersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeParametersCommand = deserializeAws_json1_1DescribeParametersCommand;
async function deserializeAws_json1_1DescribeParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSubnetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSubnetGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSubnetGroupsCommand = deserializeAws_json1_1DescribeSubnetGroupsCommand;
async function deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupNotFoundFault":
        case "elmo.admin#SubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1IncreaseReplicationFactorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1IncreaseReplicationFactorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IncreaseReplicationFactorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IncreaseReplicationFactorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1IncreaseReplicationFactorCommand = deserializeAws_json1_1IncreaseReplicationFactorCommand;
async function deserializeAws_json1_1IncreaseReplicationFactorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "elmo.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RebootNodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootNodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootNodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootNodeCommand = deserializeAws_json1_1RebootNodeCommand;
async function deserializeAws_json1_1RebootNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeNotFoundFault":
        case "elmo.admin#NodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagQuotaPerResourceExceeded":
        case "elmo.admin#TagQuotaPerResourceExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagNotFoundFault":
        case "elmo.admin#TagNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateClusterResponse" }, contents);
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
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "elmo.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "elmo.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterGroupStateFault":
        case "elmo.admin#InvalidParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateParameterGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateParameterGroupCommand = deserializeAws_json1_1UpdateParameterGroupCommand;
async function deserializeAws_json1_1UpdateParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterGroupStateFault":
        case "elmo.admin#InvalidParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterGroupNotFoundFault":
        case "elmo.admin#ParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSubnetGroupCommand = deserializeAws_json1_1UpdateSubnetGroupCommand;
async function deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidSubnet":
        case "elmo.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetGroupNotFoundFault":
        case "elmo.admin#SubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetInUse":
        case "elmo.admin#SubnetInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetQuotaExceededFault":
        case "elmo.admin#SubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "ClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterNotFoundFault(body, context);
    const contents = Object.assign({ name: "ClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
    const contents = Object.assign({ name: "ClusterQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
    const contents = Object.assign({ name: "InsufficientClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidARNFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidARNFault(body, context);
    const contents = Object.assign({ name: "InvalidARNFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClusterStateFault(body, context);
    const contents = Object.assign({ name: "InvalidClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
    const contents = Object.assign({ name: "InvalidParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
    const contents = Object.assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
    const contents = Object.assign({ name: "InvalidVPCNetworkStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeNotFoundFault(body, context);
    const contents = Object.assign({ name: "NodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
    const contents = Object.assign({ name: "NodeQuotaForClusterExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
    const contents = Object.assign({ name: "NodeQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "ParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
    const contents = Object.assign({ name: "ParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
    const contents = Object.assign({ name: "ParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
    const contents = Object.assign({ name: "ServiceLinkedRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "SubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
    const contents = Object.assign({ name: "SubnetGroupInUseFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
    const contents = Object.assign({ name: "SubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
    const contents = Object.assign({ name: "SubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetInUse(body, context);
    const contents = Object.assign({ name: "SubnetInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
    const contents = Object.assign({ name: "SubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagNotFoundFault(body, context);
    const contents = Object.assign({ name: "TagNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
    const contents = Object.assign({ name: "TagQuotaPerResourceExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AvailabilityZoneList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ClusterNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZones !== undefined) {
        bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context);
    }
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.NodeType !== undefined) {
        bodyParams["NodeType"] = input.NodeType;
    }
    if (input.NotificationTopicArn !== undefined) {
        bodyParams["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ReplicationFactor !== undefined) {
        bodyParams["ReplicationFactor"] = input.ReplicationFactor;
    }
    if (input.SSESpecification !== undefined) {
        bodyParams["SSESpecification"] = serializeAws_json1_1SSESpecification(input.SSESpecification, context);
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context);
    }
    if (input.SubnetGroupName !== undefined) {
        bodyParams["SubnetGroupName"] = input.SubnetGroupName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateParameterGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSubnetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.SubnetGroupName !== undefined) {
        bodyParams["SubnetGroupName"] = input.SubnetGroupName;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DecreaseReplicationFactorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZones !== undefined) {
        bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context);
    }
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    if (input.NewReplicationFactor !== undefined) {
        bodyParams["NewReplicationFactor"] = input.NewReplicationFactor;
    }
    if (input.NodeIdsToRemove !== undefined) {
        bodyParams["NodeIdsToRemove"] = serializeAws_json1_1NodeIdentifierList(input.NodeIdsToRemove, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteParameterGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSubnetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.SubnetGroupName !== undefined) {
        bodyParams["SubnetGroupName"] = input.SubnetGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterNames !== undefined) {
        bodyParams["ClusterNames"] = serializeAws_json1_1ClusterNameList(input.ClusterNames, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDefaultParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Duration !== undefined) {
        bodyParams["Duration"] = input.Duration;
    }
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SourceName !== undefined) {
        bodyParams["SourceName"] = input.SourceName;
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeParameterGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParameterGroupNames !== undefined) {
        bodyParams["ParameterGroupNames"] = serializeAws_json1_1ParameterGroupNameList(input.ParameterGroupNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSubnetGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SubnetGroupNames !== undefined) {
        bodyParams["SubnetGroupNames"] = serializeAws_json1_1SubnetGroupNameList(input.SubnetGroupNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IncreaseReplicationFactorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZones !== undefined) {
        bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context);
    }
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    if (input.NewReplicationFactor !== undefined) {
        bodyParams["NewReplicationFactor"] = input.NewReplicationFactor;
    }
    return bodyParams;
};
const serializeAws_json1_1KeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1NodeIdentifierList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParameterGroupNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParameterNameValue = (input, context) => {
    const bodyParams = {};
    if (input.ParameterName !== undefined) {
        bodyParams["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined) {
        bodyParams["ParameterValue"] = input.ParameterValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterNameValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterNameValue(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RebootNodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    if (input.NodeId !== undefined) {
        bodyParams["NodeId"] = input.NodeId;
    }
    return bodyParams;
};
const serializeAws_json1_1SSESpecification = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIdentifierList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SubnetGroupNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SubnetIdentifierList = (input, context) => {
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1KeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterName !== undefined) {
        bodyParams["ClusterName"] = input.ClusterName;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.NotificationTopicArn !== undefined) {
        bodyParams["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.NotificationTopicStatus !== undefined) {
        bodyParams["NotificationTopicStatus"] = input.NotificationTopicStatus;
    }
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateParameterGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ParameterGroupName !== undefined) {
        bodyParams["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.ParameterNameValues !== undefined) {
        bodyParams["ParameterNameValues"] = serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSubnetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.SubnetGroupName !== undefined) {
        bodyParams["SubnetGroupName"] = input.SubnetGroupName;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidParameterCombinationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Cluster = (output, context) => {
    let contents = {
        __type: "Cluster",
        ActiveNodes: undefined,
        ClusterArn: undefined,
        ClusterDiscoveryEndpoint: undefined,
        ClusterName: undefined,
        Description: undefined,
        IamRoleArn: undefined,
        NodeIdsToRemove: undefined,
        NodeType: undefined,
        Nodes: undefined,
        NotificationConfiguration: undefined,
        ParameterGroup: undefined,
        PreferredMaintenanceWindow: undefined,
        SSEDescription: undefined,
        SecurityGroups: undefined,
        Status: undefined,
        SubnetGroup: undefined,
        TotalNodes: undefined
    };
    if (output.ActiveNodes !== undefined && output.ActiveNodes !== null) {
        contents.ActiveNodes = output.ActiveNodes;
    }
    if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
        contents.ClusterArn = output.ClusterArn;
    }
    if (output.ClusterDiscoveryEndpoint !== undefined &&
        output.ClusterDiscoveryEndpoint !== null) {
        contents.ClusterDiscoveryEndpoint = deserializeAws_json1_1Endpoint(output.ClusterDiscoveryEndpoint, context);
    }
    if (output.ClusterName !== undefined && output.ClusterName !== null) {
        contents.ClusterName = output.ClusterName;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
        contents.IamRoleArn = output.IamRoleArn;
    }
    if (output.NodeIdsToRemove !== undefined && output.NodeIdsToRemove !== null) {
        contents.NodeIdsToRemove = deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToRemove, context);
    }
    if (output.NodeType !== undefined && output.NodeType !== null) {
        contents.NodeType = output.NodeType;
    }
    if (output.Nodes !== undefined && output.Nodes !== null) {
        contents.Nodes = deserializeAws_json1_1NodeList(output.Nodes, context);
    }
    if (output.NotificationConfiguration !== undefined &&
        output.NotificationConfiguration !== null) {
        contents.NotificationConfiguration = deserializeAws_json1_1NotificationConfiguration(output.NotificationConfiguration, context);
    }
    if (output.ParameterGroup !== undefined && output.ParameterGroup !== null) {
        contents.ParameterGroup = deserializeAws_json1_1ParameterGroupStatus(output.ParameterGroup, context);
    }
    if (output.PreferredMaintenanceWindow !== undefined &&
        output.PreferredMaintenanceWindow !== null) {
        contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
    }
    if (output.SSEDescription !== undefined && output.SSEDescription !== null) {
        contents.SSEDescription = deserializeAws_json1_1SSEDescription(output.SSEDescription, context);
    }
    if (output.SecurityGroups !== undefined && output.SecurityGroups !== null) {
        contents.SecurityGroups = deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubnetGroup !== undefined && output.SubnetGroup !== null) {
        contents.SubnetGroup = output.SubnetGroup;
    }
    if (output.TotalNodes !== undefined && output.TotalNodes !== null) {
        contents.TotalNodes = output.TotalNodes;
    }
    return contents;
};
const deserializeAws_json1_1ClusterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Cluster(entry, context));
};
const deserializeAws_json1_1CreateClusterResponse = (output, context) => {
    let contents = {
        __type: "CreateClusterResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateParameterGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateParameterGroupResponse",
        ParameterGroup: undefined
    };
    if (output.ParameterGroup !== undefined && output.ParameterGroup !== null) {
        contents.ParameterGroup = deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateSubnetGroupResponse",
        SubnetGroup: undefined
    };
    if (output.SubnetGroup !== undefined && output.SubnetGroup !== null) {
        contents.SubnetGroup = deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1DecreaseReplicationFactorResponse = (output, context) => {
    let contents = {
        __type: "DecreaseReplicationFactorResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteClusterResponse = (output, context) => {
    let contents = {
        __type: "DeleteClusterResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteParameterGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteParameterGroupResponse",
        DeletionMessage: undefined
    };
    if (output.DeletionMessage !== undefined && output.DeletionMessage !== null) {
        contents.DeletionMessage = output.DeletionMessage;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteSubnetGroupResponse",
        DeletionMessage: undefined
    };
    if (output.DeletionMessage !== undefined && output.DeletionMessage !== null) {
        contents.DeletionMessage = output.DeletionMessage;
    }
    return contents;
};
const deserializeAws_json1_1DescribeClustersResponse = (output, context) => {
    let contents = {
        __type: "DescribeClustersResponse",
        Clusters: undefined,
        NextToken: undefined
    };
    if (output.Clusters !== undefined && output.Clusters !== null) {
        contents.Clusters = deserializeAws_json1_1ClusterList(output.Clusters, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDefaultParametersResponse = (output, context) => {
    let contents = {
        __type: "DescribeDefaultParametersResponse",
        NextToken: undefined,
        Parameters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventsResponse",
        Events: undefined,
        NextToken: undefined
    };
    if (output.Events !== undefined && output.Events !== null) {
        contents.Events = deserializeAws_json1_1EventList(output.Events, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeParameterGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeParameterGroupsResponse",
        NextToken: undefined,
        ParameterGroups: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ParameterGroups !== undefined && output.ParameterGroups !== null) {
        contents.ParameterGroups = deserializeAws_json1_1ParameterGroupList(output.ParameterGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeParametersResponse = (output, context) => {
    let contents = {
        __type: "DescribeParametersResponse",
        NextToken: undefined,
        Parameters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSubnetGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeSubnetGroupsResponse",
        NextToken: undefined,
        SubnetGroups: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SubnetGroups !== undefined && output.SubnetGroups !== null) {
        contents.SubnetGroups = deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1Endpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        Address: undefined,
        Port: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    return contents;
};
const deserializeAws_json1_1Event = (output, context) => {
    let contents = {
        __type: "Event",
        Date: undefined,
        Message: undefined,
        SourceName: undefined,
        SourceType: undefined
    };
    if (output.Date !== undefined && output.Date !== null) {
        contents.Date = new Date(Math.round(output.Date * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.SourceName !== undefined && output.SourceName !== null) {
        contents.SourceName = output.SourceName;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Event(entry, context));
};
const deserializeAws_json1_1IncreaseReplicationFactorResponse = (output, context) => {
    let contents = {
        __type: "IncreaseReplicationFactorResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    let contents = {
        __type: "ListTagsResponse",
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
const deserializeAws_json1_1Node = (output, context) => {
    let contents = {
        __type: "Node",
        AvailabilityZone: undefined,
        Endpoint: undefined,
        NodeCreateTime: undefined,
        NodeId: undefined,
        NodeStatus: undefined,
        ParameterGroupStatus: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = deserializeAws_json1_1Endpoint(output.Endpoint, context);
    }
    if (output.NodeCreateTime !== undefined && output.NodeCreateTime !== null) {
        contents.NodeCreateTime = new Date(Math.round(output.NodeCreateTime * 1000));
    }
    if (output.NodeId !== undefined && output.NodeId !== null) {
        contents.NodeId = output.NodeId;
    }
    if (output.NodeStatus !== undefined && output.NodeStatus !== null) {
        contents.NodeStatus = output.NodeStatus;
    }
    if (output.ParameterGroupStatus !== undefined &&
        output.ParameterGroupStatus !== null) {
        contents.ParameterGroupStatus = output.ParameterGroupStatus;
    }
    return contents;
};
const deserializeAws_json1_1NodeIdentifierList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NodeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Node(entry, context));
};
const deserializeAws_json1_1NodeTypeSpecificValue = (output, context) => {
    let contents = {
        __type: "NodeTypeSpecificValue",
        NodeType: undefined,
        Value: undefined
    };
    if (output.NodeType !== undefined && output.NodeType !== null) {
        contents.NodeType = output.NodeType;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1NodeTypeSpecificValueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NodeTypeSpecificValue(entry, context));
};
const deserializeAws_json1_1NotificationConfiguration = (output, context) => {
    let contents = {
        __type: "NotificationConfiguration",
        TopicArn: undefined,
        TopicStatus: undefined
    };
    if (output.TopicArn !== undefined && output.TopicArn !== null) {
        contents.TopicArn = output.TopicArn;
    }
    if (output.TopicStatus !== undefined && output.TopicStatus !== null) {
        contents.TopicStatus = output.TopicStatus;
    }
    return contents;
};
const deserializeAws_json1_1Parameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        AllowedValues: undefined,
        ChangeType: undefined,
        DataType: undefined,
        Description: undefined,
        IsModifiable: undefined,
        NodeTypeSpecificValues: undefined,
        ParameterName: undefined,
        ParameterType: undefined,
        ParameterValue: undefined,
        Source: undefined
    };
    if (output.AllowedValues !== undefined && output.AllowedValues !== null) {
        contents.AllowedValues = output.AllowedValues;
    }
    if (output.ChangeType !== undefined && output.ChangeType !== null) {
        contents.ChangeType = output.ChangeType;
    }
    if (output.DataType !== undefined && output.DataType !== null) {
        contents.DataType = output.DataType;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsModifiable !== undefined && output.IsModifiable !== null) {
        contents.IsModifiable = output.IsModifiable;
    }
    if (output.NodeTypeSpecificValues !== undefined &&
        output.NodeTypeSpecificValues !== null) {
        contents.NodeTypeSpecificValues = deserializeAws_json1_1NodeTypeSpecificValueList(output.NodeTypeSpecificValues, context);
    }
    if (output.ParameterName !== undefined && output.ParameterName !== null) {
        contents.ParameterName = output.ParameterName;
    }
    if (output.ParameterType !== undefined && output.ParameterType !== null) {
        contents.ParameterType = output.ParameterType;
    }
    if (output.ParameterValue !== undefined && output.ParameterValue !== null) {
        contents.ParameterValue = output.ParameterValue;
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = output.Source;
    }
    return contents;
};
const deserializeAws_json1_1ParameterGroup = (output, context) => {
    let contents = {
        __type: "ParameterGroup",
        Description: undefined,
        ParameterGroupName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ParameterGroupName !== undefined &&
        output.ParameterGroupName !== null) {
        contents.ParameterGroupName = output.ParameterGroupName;
    }
    return contents;
};
const deserializeAws_json1_1ParameterGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterGroup(entry, context));
};
const deserializeAws_json1_1ParameterGroupStatus = (output, context) => {
    let contents = {
        __type: "ParameterGroupStatus",
        NodeIdsToReboot: undefined,
        ParameterApplyStatus: undefined,
        ParameterGroupName: undefined
    };
    if (output.NodeIdsToReboot !== undefined && output.NodeIdsToReboot !== null) {
        contents.NodeIdsToReboot = deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToReboot, context);
    }
    if (output.ParameterApplyStatus !== undefined &&
        output.ParameterApplyStatus !== null) {
        contents.ParameterApplyStatus = output.ParameterApplyStatus;
    }
    if (output.ParameterGroupName !== undefined &&
        output.ParameterGroupName !== null) {
        contents.ParameterGroupName = output.ParameterGroupName;
    }
    return contents;
};
const deserializeAws_json1_1ParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Parameter(entry, context));
};
const deserializeAws_json1_1RebootNodeResponse = (output, context) => {
    let contents = {
        __type: "RebootNodeResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1SSEDescription = (output, context) => {
    let contents = {
        __type: "SSEDescription",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "SecurityGroupMembership",
        SecurityGroupIdentifier: undefined,
        Status: undefined
    };
    if (output.SecurityGroupIdentifier !== undefined &&
        output.SecurityGroupIdentifier !== null) {
        contents.SecurityGroupIdentifier = output.SecurityGroupIdentifier;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupMembershipList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecurityGroupMembership(entry, context));
};
const deserializeAws_json1_1Subnet = (output, context) => {
    let contents = {
        __type: "Subnet",
        SubnetAvailabilityZone: undefined,
        SubnetIdentifier: undefined
    };
    if (output.SubnetAvailabilityZone !== undefined &&
        output.SubnetAvailabilityZone !== null) {
        contents.SubnetAvailabilityZone = output.SubnetAvailabilityZone;
    }
    if (output.SubnetIdentifier !== undefined &&
        output.SubnetIdentifier !== null) {
        contents.SubnetIdentifier = output.SubnetIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroup = (output, context) => {
    let contents = {
        __type: "SubnetGroup",
        Description: undefined,
        SubnetGroupName: undefined,
        Subnets: undefined,
        VpcId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.SubnetGroupName !== undefined && output.SubnetGroupName !== null) {
        contents.SubnetGroupName = output.SubnetGroupName;
    }
    if (output.Subnets !== undefined && output.Subnets !== null) {
        contents.Subnets = deserializeAws_json1_1SubnetList(output.Subnets, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubnetGroup(entry, context));
};
const deserializeAws_json1_1SubnetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Subnet(entry, context));
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
        __type: "TagResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateClusterResponse = (output, context) => {
    let contents = {
        __type: "UpdateClusterResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateParameterGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateParameterGroupResponse",
        ParameterGroup: undefined
    };
    if (output.ParameterGroup !== undefined && output.ParameterGroup !== null) {
        contents.ParameterGroup = deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateSubnetGroupResponse",
        SubnetGroup: undefined
    };
    if (output.SubnetGroup !== undefined && output.SubnetGroup !== null) {
        contents.SubnetGroup = deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1ClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterAlreadyExistsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterQuotaForCustomerExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientClusterCapacityFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidARNFault = (output, context) => {
    let contents = {
        __type: "InvalidARNFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidClusterStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterStateFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidParameterGroupStateFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSubnet = (output, context) => {
    let contents = {
        __type: "InvalidSubnet",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidVPCNetworkStateFault = (output, context) => {
    let contents = {
        __type: "InvalidVPCNetworkStateFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NodeNotFoundFault = (output, context) => {
    let contents = {
        __type: "NodeNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (output, context) => {
    let contents = {
        __type: "NodeQuotaForClusterExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        __type: "NodeQuotaForCustomerExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ParameterGroupAlreadyExistsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "ParameterGroupNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ParameterGroupQuotaExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (output, context) => {
    let contents = {
        __type: "ServiceLinkedRoleNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "SubnetGroupAlreadyExistsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroupInUseFault = (output, context) => {
    let contents = {
        __type: "SubnetGroupInUseFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "SubnetGroupNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SubnetGroupQuotaExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetInUse = (output, context) => {
    let contents = {
        __type: "SubnetInUse",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SubnetQuotaExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagNotFoundFault = (output, context) => {
    let contents = {
        __type: "TagNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagQuotaPerResourceExceeded = (output, context) => {
    let contents = {
        __type: "TagQuotaPerResourceExceeded",
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