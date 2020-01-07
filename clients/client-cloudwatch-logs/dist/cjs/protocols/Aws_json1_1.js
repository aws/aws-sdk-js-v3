"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateKmsKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.AssociateKmsKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateKmsKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateKmsKeyCommand = serializeAws_json1_1AssociateKmsKeyCommand;
async function serializeAws_json1_1CancelExportTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.CancelExportTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelExportTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelExportTaskCommand = serializeAws_json1_1CancelExportTaskCommand;
async function serializeAws_json1_1CreateExportTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.CreateExportTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateExportTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateExportTaskCommand = serializeAws_json1_1CreateExportTaskCommand;
async function serializeAws_json1_1CreateLogGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.CreateLogGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLogGroupCommand = serializeAws_json1_1CreateLogGroupCommand;
async function serializeAws_json1_1CreateLogStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.CreateLogStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLogStreamCommand = serializeAws_json1_1CreateLogStreamCommand;
async function serializeAws_json1_1DeleteDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteDestination";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDestinationCommand = serializeAws_json1_1DeleteDestinationCommand;
async function serializeAws_json1_1DeleteLogGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteLogGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLogGroupCommand = serializeAws_json1_1DeleteLogGroupCommand;
async function serializeAws_json1_1DeleteLogStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteLogStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLogStreamCommand = serializeAws_json1_1DeleteLogStreamCommand;
async function serializeAws_json1_1DeleteMetricFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteMetricFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMetricFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMetricFilterCommand = serializeAws_json1_1DeleteMetricFilterCommand;
async function serializeAws_json1_1DeleteResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
async function serializeAws_json1_1DeleteRetentionPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteRetentionPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRetentionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRetentionPolicyCommand = serializeAws_json1_1DeleteRetentionPolicyCommand;
async function serializeAws_json1_1DeleteSubscriptionFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DeleteSubscriptionFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSubscriptionFilterCommand = serializeAws_json1_1DeleteSubscriptionFilterCommand;
async function serializeAws_json1_1DescribeDestinationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeDestinations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDestinationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDestinationsCommand = serializeAws_json1_1DescribeDestinationsCommand;
async function serializeAws_json1_1DescribeExportTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeExportTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeExportTasksCommand = serializeAws_json1_1DescribeExportTasksCommand;
async function serializeAws_json1_1DescribeLogGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeLogGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLogGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLogGroupsCommand = serializeAws_json1_1DescribeLogGroupsCommand;
async function serializeAws_json1_1DescribeLogStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeLogStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLogStreamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLogStreamsCommand = serializeAws_json1_1DescribeLogStreamsCommand;
async function serializeAws_json1_1DescribeMetricFiltersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeMetricFilters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMetricFiltersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMetricFiltersCommand = serializeAws_json1_1DescribeMetricFiltersCommand;
async function serializeAws_json1_1DescribeQueriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeQueries";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeQueriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeQueriesCommand = serializeAws_json1_1DescribeQueriesCommand;
async function serializeAws_json1_1DescribeResourcePoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeResourcePolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourcePoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeResourcePoliciesCommand = serializeAws_json1_1DescribeResourcePoliciesCommand;
async function serializeAws_json1_1DescribeSubscriptionFiltersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DescribeSubscriptionFilters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionFiltersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSubscriptionFiltersCommand = serializeAws_json1_1DescribeSubscriptionFiltersCommand;
async function serializeAws_json1_1DisassociateKmsKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.DisassociateKmsKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateKmsKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateKmsKeyCommand = serializeAws_json1_1DisassociateKmsKeyCommand;
async function serializeAws_json1_1FilterLogEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.FilterLogEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1FilterLogEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1FilterLogEventsCommand = serializeAws_json1_1FilterLogEventsCommand;
async function serializeAws_json1_1GetLogEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.GetLogEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLogEventsCommand = serializeAws_json1_1GetLogEventsCommand;
async function serializeAws_json1_1GetLogGroupFieldsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.GetLogGroupFields";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogGroupFieldsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLogGroupFieldsCommand = serializeAws_json1_1GetLogGroupFieldsCommand;
async function serializeAws_json1_1GetLogRecordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.GetLogRecord";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogRecordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLogRecordCommand = serializeAws_json1_1GetLogRecordCommand;
async function serializeAws_json1_1GetQueryResultsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.GetQueryResults";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQueryResultsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetQueryResultsCommand = serializeAws_json1_1GetQueryResultsCommand;
async function serializeAws_json1_1ListTagsLogGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.ListTagsLogGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsLogGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsLogGroupCommand = serializeAws_json1_1ListTagsLogGroupCommand;
async function serializeAws_json1_1PutDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutDestination";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDestinationCommand = serializeAws_json1_1PutDestinationCommand;
async function serializeAws_json1_1PutDestinationPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutDestinationPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDestinationPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDestinationPolicyCommand = serializeAws_json1_1PutDestinationPolicyCommand;
async function serializeAws_json1_1PutLogEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutLogEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLogEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLogEventsCommand = serializeAws_json1_1PutLogEventsCommand;
async function serializeAws_json1_1PutMetricFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutMetricFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutMetricFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutMetricFilterCommand = serializeAws_json1_1PutMetricFilterCommand;
async function serializeAws_json1_1PutResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
async function serializeAws_json1_1PutRetentionPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutRetentionPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRetentionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRetentionPolicyCommand = serializeAws_json1_1PutRetentionPolicyCommand;
async function serializeAws_json1_1PutSubscriptionFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.PutSubscriptionFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSubscriptionFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutSubscriptionFilterCommand = serializeAws_json1_1PutSubscriptionFilterCommand;
async function serializeAws_json1_1StartQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.StartQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartQueryCommand = serializeAws_json1_1StartQueryCommand;
async function serializeAws_json1_1StopQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.StopQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopQueryCommand = serializeAws_json1_1StopQueryCommand;
async function serializeAws_json1_1TagLogGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.TagLogGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagLogGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagLogGroupCommand = serializeAws_json1_1TagLogGroupCommand;
async function serializeAws_json1_1TestMetricFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.TestMetricFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1TestMetricFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TestMetricFilterCommand = serializeAws_json1_1TestMetricFilterCommand;
async function serializeAws_json1_1UntagLogGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Logs_20140328.UntagLogGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagLogGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagLogGroupCommand = serializeAws_json1_1UntagLogGroupCommand;
async function deserializeAws_json1_1AssociateKmsKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateKmsKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateKmsKeyCommand = deserializeAws_json1_1AssociateKmsKeyCommand;
async function deserializeAws_json1_1AssociateKmsKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelExportTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelExportTaskCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelExportTaskCommand = deserializeAws_json1_1CancelExportTaskCommand;
async function deserializeAws_json1_1CancelExportTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidOperationException":
        case "com.amazonaws.logs.v20140328#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateExportTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateExportTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateExportTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateExportTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateExportTaskCommand = deserializeAws_json1_1CreateExportTaskCommand;
async function deserializeAws_json1_1CreateExportTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateLogGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLogGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLogGroupCommand = deserializeAws_json1_1CreateLogGroupCommand;
async function deserializeAws_json1_1CreateLogGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateLogStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLogStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLogStreamCommand = deserializeAws_json1_1CreateLogStreamCommand;
async function deserializeAws_json1_1CreateLogStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDestinationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDestinationCommand = deserializeAws_json1_1DeleteDestinationCommand;
async function deserializeAws_json1_1DeleteDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLogGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLogGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLogGroupCommand = deserializeAws_json1_1DeleteLogGroupCommand;
async function deserializeAws_json1_1DeleteLogGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLogStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLogStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLogStreamCommand = deserializeAws_json1_1DeleteLogStreamCommand;
async function deserializeAws_json1_1DeleteLogStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteMetricFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMetricFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMetricFilterCommand = deserializeAws_json1_1DeleteMetricFilterCommand;
async function deserializeAws_json1_1DeleteMetricFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
async function deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRetentionPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRetentionPolicyCommand = deserializeAws_json1_1DeleteRetentionPolicyCommand;
async function deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSubscriptionFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSubscriptionFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSubscriptionFilterCommand = deserializeAws_json1_1DeleteSubscriptionFilterCommand;
async function deserializeAws_json1_1DeleteSubscriptionFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDestinationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDestinationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDestinationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDestinationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDestinationsCommand = deserializeAws_json1_1DescribeDestinationsCommand;
async function deserializeAws_json1_1DescribeDestinationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeExportTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExportTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeExportTasksCommand = deserializeAws_json1_1DescribeExportTasksCommand;
async function deserializeAws_json1_1DescribeExportTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeLogGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLogGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLogGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLogGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLogGroupsCommand = deserializeAws_json1_1DescribeLogGroupsCommand;
async function deserializeAws_json1_1DescribeLogGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeLogStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLogStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLogStreamsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLogStreamsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLogStreamsCommand = deserializeAws_json1_1DescribeLogStreamsCommand;
async function deserializeAws_json1_1DescribeLogStreamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMetricFiltersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMetricFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMetricFiltersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMetricFiltersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMetricFiltersCommand = deserializeAws_json1_1DescribeMetricFiltersCommand;
async function deserializeAws_json1_1DescribeMetricFiltersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeQueriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeQueriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeQueriesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeQueriesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeQueriesCommand = deserializeAws_json1_1DescribeQueriesCommand;
async function deserializeAws_json1_1DescribeQueriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeResourcePoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeResourcePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourcePoliciesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeResourcePoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeResourcePoliciesCommand = deserializeAws_json1_1DescribeResourcePoliciesCommand;
async function deserializeAws_json1_1DescribeResourcePoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSubscriptionFiltersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscriptionFiltersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSubscriptionFiltersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSubscriptionFiltersCommand = deserializeAws_json1_1DescribeSubscriptionFiltersCommand;
async function deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateKmsKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateKmsKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateKmsKeyCommand = deserializeAws_json1_1DisassociateKmsKeyCommand;
async function deserializeAws_json1_1DisassociateKmsKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1FilterLogEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1FilterLogEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1FilterLogEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "FilterLogEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1FilterLogEventsCommand = deserializeAws_json1_1FilterLogEventsCommand;
async function deserializeAws_json1_1FilterLogEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLogEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLogEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLogEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLogEventsCommand = deserializeAws_json1_1GetLogEventsCommand;
async function deserializeAws_json1_1GetLogEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLogGroupFieldsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLogGroupFieldsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogGroupFieldsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLogGroupFieldsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLogGroupFieldsCommand = deserializeAws_json1_1GetLogGroupFieldsCommand;
async function deserializeAws_json1_1GetLogGroupFieldsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLogRecordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLogRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogRecordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLogRecordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLogRecordCommand = deserializeAws_json1_1GetLogRecordCommand;
async function deserializeAws_json1_1GetLogRecordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetQueryResultsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQueryResultsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQueryResultsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetQueryResultsCommand = deserializeAws_json1_1GetQueryResultsCommand;
async function deserializeAws_json1_1GetQueryResultsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsLogGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsLogGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsLogGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsLogGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsLogGroupCommand = deserializeAws_json1_1ListTagsLogGroupCommand;
async function deserializeAws_json1_1ListTagsLogGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDestinationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutDestinationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDestinationCommand = deserializeAws_json1_1PutDestinationCommand;
async function deserializeAws_json1_1PutDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutDestinationPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDestinationPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDestinationPolicyCommand = deserializeAws_json1_1PutDestinationPolicyCommand;
async function deserializeAws_json1_1PutDestinationPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutLogEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutLogEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLogEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLogEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutLogEventsCommand = deserializeAws_json1_1PutLogEventsCommand;
async function deserializeAws_json1_1PutLogEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataAlreadyAcceptedException":
        case "com.amazonaws.logs.v20140328#DataAlreadyAcceptedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSequenceTokenException":
        case "com.amazonaws.logs.v20140328#InvalidSequenceTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnrecognizedClientException":
        case "com.amazonaws.logs.v20140328#UnrecognizedClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnrecognizedClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutMetricFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutMetricFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutMetricFilterCommand = deserializeAws_json1_1PutMetricFilterCommand;
async function deserializeAws_json1_1PutMetricFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
async function deserializeAws_json1_1PutResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutRetentionPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRetentionPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRetentionPolicyCommand = deserializeAws_json1_1PutRetentionPolicyCommand;
async function deserializeAws_json1_1PutRetentionPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutSubscriptionFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutSubscriptionFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutSubscriptionFilterCommand = deserializeAws_json1_1PutSubscriptionFilterCommand;
async function deserializeAws_json1_1PutSubscriptionFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationAbortedException":
        case "com.amazonaws.logs.v20140328#OperationAbortedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartQueryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartQueryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartQueryCommand = deserializeAws_json1_1StartQueryCommand;
async function deserializeAws_json1_1StartQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.logs.v20140328#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedQueryException":
        case "com.amazonaws.logs.v20140328#MalformedQueryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedQueryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopQueryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopQueryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopQueryCommand = deserializeAws_json1_1StopQueryCommand;
async function deserializeAws_json1_1StopQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TagLogGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagLogGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagLogGroupCommand = deserializeAws_json1_1TagLogGroupCommand;
async function deserializeAws_json1_1TagLogGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TestMetricFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TestMetricFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestMetricFilterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestMetricFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TestMetricFilterCommand = deserializeAws_json1_1TestMetricFilterCommand;
async function deserializeAws_json1_1TestMetricFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.logs.v20140328#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UntagLogGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagLogGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagLogGroupCommand = deserializeAws_json1_1UntagLogGroupCommand;
async function deserializeAws_json1_1UntagLogGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataAlreadyAcceptedException(body, context);
    const contents = Object.assign({ name: "DataAlreadyAcceptedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSequenceTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSequenceTokenException(body, context);
    const contents = Object.assign({ name: "InvalidSequenceTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MalformedQueryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedQueryException(body, context);
    const contents = Object.assign({ name: "MalformedQueryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationAbortedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationAbortedException(body, context);
    const contents = Object.assign({ name: "OperationAbortedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnrecognizedClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnrecognizedClientException(body, context);
    const contents = Object.assign({ name: "UnrecognizedClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateKmsKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.kmsKeyId !== undefined) {
        bodyParams["kmsKeyId"] = input.kmsKeyId;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelExportTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.taskId !== undefined) {
        bodyParams["taskId"] = input.taskId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateExportTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.destination !== undefined) {
        bodyParams["destination"] = input.destination;
    }
    if (input.destinationPrefix !== undefined) {
        bodyParams["destinationPrefix"] = input.destinationPrefix;
    }
    if (input.from !== undefined) {
        bodyParams["from"] = input.from;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamNamePrefix !== undefined) {
        bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
    }
    if (input.taskName !== undefined) {
        bodyParams["taskName"] = input.taskName;
    }
    if (input.to !== undefined) {
        bodyParams["to"] = input.to;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLogGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.kmsKeyId !== undefined) {
        bodyParams["kmsKeyId"] = input.kmsKeyId;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLogStreamRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamName !== undefined) {
        bodyParams["logStreamName"] = input.logStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDestinationRequest = (input, context) => {
    const bodyParams = {};
    if (input.destinationName !== undefined) {
        bodyParams["destinationName"] = input.destinationName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLogGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLogStreamRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamName !== undefined) {
        bodyParams["logStreamName"] = input.logStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMetricFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterName !== undefined) {
        bodyParams["filterName"] = input.filterName;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.policyName !== undefined) {
        bodyParams["policyName"] = input.policyName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRetentionPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSubscriptionFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterName !== undefined) {
        bodyParams["filterName"] = input.filterName;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDestinationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DestinationNamePrefix !== undefined) {
        bodyParams["DestinationNamePrefix"] = input.DestinationNamePrefix;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeExportTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.statusCode !== undefined) {
        bodyParams["statusCode"] = input.statusCode;
    }
    if (input.taskId !== undefined) {
        bodyParams["taskId"] = input.taskId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLogGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupNamePrefix !== undefined) {
        bodyParams["logGroupNamePrefix"] = input.logGroupNamePrefix;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLogStreamsRequest = (input, context) => {
    const bodyParams = {};
    if (input.descending !== undefined) {
        bodyParams["descending"] = input.descending;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamNamePrefix !== undefined) {
        bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.orderBy !== undefined) {
        bodyParams["orderBy"] = input.orderBy;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMetricFiltersRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterNamePrefix !== undefined) {
        bodyParams["filterNamePrefix"] = input.filterNamePrefix;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.metricNamespace !== undefined) {
        bodyParams["metricNamespace"] = input.metricNamespace;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeQueriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeResourcePoliciesRequest = (input, context) => {
    const bodyParams = {};
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSubscriptionFiltersRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterNamePrefix !== undefined) {
        bodyParams["filterNamePrefix"] = input.filterNamePrefix;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateKmsKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1FilterLogEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = input.endTime;
    }
    if (input.filterPattern !== undefined) {
        bodyParams["filterPattern"] = input.filterPattern;
    }
    if (input.interleaved !== undefined) {
        bodyParams["interleaved"] = input.interleaved;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamNamePrefix !== undefined) {
        bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
    }
    if (input.logStreamNames !== undefined) {
        bodyParams["logStreamNames"] = serializeAws_json1_1InputLogStreamNames(input.logStreamNames, context);
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = input.startTime;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLogEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = input.endTime;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamName !== undefined) {
        bodyParams["logStreamName"] = input.logStreamName;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.startFromHead !== undefined) {
        bodyParams["startFromHead"] = input.startFromHead;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = input.startTime;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLogGroupFieldsRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.time !== undefined) {
        bodyParams["time"] = input.time;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLogRecordRequest = (input, context) => {
    const bodyParams = {};
    if (input.logRecordPointer !== undefined) {
        bodyParams["logRecordPointer"] = input.logRecordPointer;
    }
    return bodyParams;
};
const serializeAws_json1_1GetQueryResultsRequest = (input, context) => {
    const bodyParams = {};
    if (input.queryId !== undefined) {
        bodyParams["queryId"] = input.queryId;
    }
    return bodyParams;
};
const serializeAws_json1_1InputLogEvent = (input, context) => {
    const bodyParams = {};
    if (input.message !== undefined) {
        bodyParams["message"] = input.message;
    }
    if (input.timestamp !== undefined) {
        bodyParams["timestamp"] = input.timestamp;
    }
    return bodyParams;
};
const serializeAws_json1_1InputLogEvents = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InputLogEvent(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InputLogStreamNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListTagsLogGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1LogGroupNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MetricTransformation = (input, context) => {
    const bodyParams = {};
    if (input.defaultValue !== undefined) {
        bodyParams["defaultValue"] = input.defaultValue;
    }
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.metricNamespace !== undefined) {
        bodyParams["metricNamespace"] = input.metricNamespace;
    }
    if (input.metricValue !== undefined) {
        bodyParams["metricValue"] = input.metricValue;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricTransformations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MetricTransformation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutDestinationPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.accessPolicy !== undefined) {
        bodyParams["accessPolicy"] = input.accessPolicy;
    }
    if (input.destinationName !== undefined) {
        bodyParams["destinationName"] = input.destinationName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutDestinationRequest = (input, context) => {
    const bodyParams = {};
    if (input.destinationName !== undefined) {
        bodyParams["destinationName"] = input.destinationName;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.targetArn !== undefined) {
        bodyParams["targetArn"] = input.targetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1PutLogEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.logEvents !== undefined) {
        bodyParams["logEvents"] = serializeAws_json1_1InputLogEvents(input.logEvents, context);
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logStreamName !== undefined) {
        bodyParams["logStreamName"] = input.logStreamName;
    }
    if (input.sequenceToken !== undefined) {
        bodyParams["sequenceToken"] = input.sequenceToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PutMetricFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterName !== undefined) {
        bodyParams["filterName"] = input.filterName;
    }
    if (input.filterPattern !== undefined) {
        bodyParams["filterPattern"] = input.filterPattern;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.metricTransformations !== undefined) {
        bodyParams["metricTransformations"] = serializeAws_json1_1MetricTransformations(input.metricTransformations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.policyDocument !== undefined) {
        bodyParams["policyDocument"] = input.policyDocument;
    }
    if (input.policyName !== undefined) {
        bodyParams["policyName"] = input.policyName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRetentionPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.retentionInDays !== undefined) {
        bodyParams["retentionInDays"] = input.retentionInDays;
    }
    return bodyParams;
};
const serializeAws_json1_1PutSubscriptionFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.destinationArn !== undefined) {
        bodyParams["destinationArn"] = input.destinationArn;
    }
    if (input.distribution !== undefined) {
        bodyParams["distribution"] = input.distribution;
    }
    if (input.filterName !== undefined) {
        bodyParams["filterName"] = input.filterName;
    }
    if (input.filterPattern !== undefined) {
        bodyParams["filterPattern"] = input.filterPattern;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartQueryRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = input.endTime;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.logGroupNames !== undefined) {
        bodyParams["logGroupNames"] = serializeAws_json1_1LogGroupNames(input.logGroupNames, context);
    }
    if (input.queryString !== undefined) {
        bodyParams["queryString"] = input.queryString;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = input.startTime;
    }
    return bodyParams;
};
const serializeAws_json1_1StopQueryRequest = (input, context) => {
    const bodyParams = {};
    if (input.queryId !== undefined) {
        bodyParams["queryId"] = input.queryId;
    }
    return bodyParams;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagLogGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1TestEventMessages = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TestMetricFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.filterPattern !== undefined) {
        bodyParams["filterPattern"] = input.filterPattern;
    }
    if (input.logEventMessages !== undefined) {
        bodyParams["logEventMessages"] = serializeAws_json1_1TestEventMessages(input.logEventMessages, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagLogGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.logGroupName !== undefined) {
        bodyParams["logGroupName"] = input.logGroupName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1CreateExportTaskResponse = (output, context) => {
    let contents = {
        __type: "CreateExportTaskResponse",
        taskId: undefined
    };
    if (output.taskId !== undefined && output.taskId !== null) {
        contents.taskId = output.taskId;
    }
    return contents;
};
const deserializeAws_json1_1DataAlreadyAcceptedException = (output, context) => {
    let contents = {
        __type: "DataAlreadyAcceptedException",
        expectedSequenceToken: undefined,
        message: undefined
    };
    if (output.expectedSequenceToken !== undefined &&
        output.expectedSequenceToken !== null) {
        contents.expectedSequenceToken = output.expectedSequenceToken;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDestinationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDestinationsResponse",
        destinations: undefined,
        nextToken: undefined
    };
    if (output.destinations !== undefined && output.destinations !== null) {
        contents.destinations = deserializeAws_json1_1Destinations(output.destinations, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeExportTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeExportTasksResponse",
        exportTasks: undefined,
        nextToken: undefined
    };
    if (output.exportTasks !== undefined && output.exportTasks !== null) {
        contents.exportTasks = deserializeAws_json1_1ExportTasks(output.exportTasks, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLogGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeLogGroupsResponse",
        logGroups: undefined,
        nextToken: undefined
    };
    if (output.logGroups !== undefined && output.logGroups !== null) {
        contents.logGroups = deserializeAws_json1_1LogGroups(output.logGroups, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLogStreamsResponse = (output, context) => {
    let contents = {
        __type: "DescribeLogStreamsResponse",
        logStreams: undefined,
        nextToken: undefined
    };
    if (output.logStreams !== undefined && output.logStreams !== null) {
        contents.logStreams = deserializeAws_json1_1LogStreams(output.logStreams, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeMetricFiltersResponse = (output, context) => {
    let contents = {
        __type: "DescribeMetricFiltersResponse",
        metricFilters: undefined,
        nextToken: undefined
    };
    if (output.metricFilters !== undefined && output.metricFilters !== null) {
        contents.metricFilters = deserializeAws_json1_1MetricFilters(output.metricFilters, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeQueriesResponse = (output, context) => {
    let contents = {
        __type: "DescribeQueriesResponse",
        nextToken: undefined,
        queries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.queries !== undefined && output.queries !== null) {
        contents.queries = deserializeAws_json1_1QueryInfoList(output.queries, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeResourcePoliciesResponse = (output, context) => {
    let contents = {
        __type: "DescribeResourcePoliciesResponse",
        nextToken: undefined,
        resourcePolicies: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.resourcePolicies !== undefined &&
        output.resourcePolicies !== null) {
        contents.resourcePolicies = deserializeAws_json1_1ResourcePolicies(output.resourcePolicies, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSubscriptionFiltersResponse = (output, context) => {
    let contents = {
        __type: "DescribeSubscriptionFiltersResponse",
        nextToken: undefined,
        subscriptionFilters: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.subscriptionFilters !== undefined &&
        output.subscriptionFilters !== null) {
        contents.subscriptionFilters = deserializeAws_json1_1SubscriptionFilters(output.subscriptionFilters, context);
    }
    return contents;
};
const deserializeAws_json1_1Destination = (output, context) => {
    let contents = {
        __type: "Destination",
        accessPolicy: undefined,
        arn: undefined,
        creationTime: undefined,
        destinationName: undefined,
        roleArn: undefined,
        targetArn: undefined
    };
    if (output.accessPolicy !== undefined && output.accessPolicy !== null) {
        contents.accessPolicy = output.accessPolicy;
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    if (output.destinationName !== undefined && output.destinationName !== null) {
        contents.destinationName = output.destinationName;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.targetArn !== undefined && output.targetArn !== null) {
        contents.targetArn = output.targetArn;
    }
    return contents;
};
const deserializeAws_json1_1Destinations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Destination(entry, context));
};
const deserializeAws_json1_1ExportTask = (output, context) => {
    let contents = {
        __type: "ExportTask",
        destination: undefined,
        destinationPrefix: undefined,
        executionInfo: undefined,
        from: undefined,
        logGroupName: undefined,
        status: undefined,
        taskId: undefined,
        taskName: undefined,
        to: undefined
    };
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.destinationPrefix !== undefined &&
        output.destinationPrefix !== null) {
        contents.destinationPrefix = output.destinationPrefix;
    }
    if (output.executionInfo !== undefined && output.executionInfo !== null) {
        contents.executionInfo = deserializeAws_json1_1ExportTaskExecutionInfo(output.executionInfo, context);
    }
    if (output.from !== undefined && output.from !== null) {
        contents.from = output.from;
    }
    if (output.logGroupName !== undefined && output.logGroupName !== null) {
        contents.logGroupName = output.logGroupName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_json1_1ExportTaskStatus(output.status, context);
    }
    if (output.taskId !== undefined && output.taskId !== null) {
        contents.taskId = output.taskId;
    }
    if (output.taskName !== undefined && output.taskName !== null) {
        contents.taskName = output.taskName;
    }
    if (output.to !== undefined && output.to !== null) {
        contents.to = output.to;
    }
    return contents;
};
const deserializeAws_json1_1ExportTaskExecutionInfo = (output, context) => {
    let contents = {
        __type: "ExportTaskExecutionInfo",
        completionTime: undefined,
        creationTime: undefined
    };
    if (output.completionTime !== undefined && output.completionTime !== null) {
        contents.completionTime = output.completionTime;
    }
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    return contents;
};
const deserializeAws_json1_1ExportTaskStatus = (output, context) => {
    let contents = {
        __type: "ExportTaskStatus",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ExportTasks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExportTask(entry, context));
};
const deserializeAws_json1_1ExtractedValues = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1FilterLogEventsResponse = (output, context) => {
    let contents = {
        __type: "FilterLogEventsResponse",
        events: undefined,
        nextToken: undefined,
        searchedLogStreams: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1FilteredLogEvents(output.events, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.searchedLogStreams !== undefined &&
        output.searchedLogStreams !== null) {
        contents.searchedLogStreams = deserializeAws_json1_1SearchedLogStreams(output.searchedLogStreams, context);
    }
    return contents;
};
const deserializeAws_json1_1FilteredLogEvent = (output, context) => {
    let contents = {
        __type: "FilteredLogEvent",
        eventId: undefined,
        ingestionTime: undefined,
        logStreamName: undefined,
        message: undefined,
        timestamp: undefined
    };
    if (output.eventId !== undefined && output.eventId !== null) {
        contents.eventId = output.eventId;
    }
    if (output.ingestionTime !== undefined && output.ingestionTime !== null) {
        contents.ingestionTime = output.ingestionTime;
    }
    if (output.logStreamName !== undefined && output.logStreamName !== null) {
        contents.logStreamName = output.logStreamName;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = output.timestamp;
    }
    return contents;
};
const deserializeAws_json1_1FilteredLogEvents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FilteredLogEvent(entry, context));
};
const deserializeAws_json1_1GetLogEventsResponse = (output, context) => {
    let contents = {
        __type: "GetLogEventsResponse",
        events: undefined,
        nextBackwardToken: undefined,
        nextForwardToken: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1OutputLogEvents(output.events, context);
    }
    if (output.nextBackwardToken !== undefined &&
        output.nextBackwardToken !== null) {
        contents.nextBackwardToken = output.nextBackwardToken;
    }
    if (output.nextForwardToken !== undefined &&
        output.nextForwardToken !== null) {
        contents.nextForwardToken = output.nextForwardToken;
    }
    return contents;
};
const deserializeAws_json1_1GetLogGroupFieldsResponse = (output, context) => {
    let contents = {
        __type: "GetLogGroupFieldsResponse",
        logGroupFields: undefined
    };
    if (output.logGroupFields !== undefined && output.logGroupFields !== null) {
        contents.logGroupFields = deserializeAws_json1_1LogGroupFieldList(output.logGroupFields, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLogRecordResponse = (output, context) => {
    let contents = {
        __type: "GetLogRecordResponse",
        logRecord: undefined
    };
    if (output.logRecord !== undefined && output.logRecord !== null) {
        contents.logRecord = deserializeAws_json1_1LogRecord(output.logRecord, context);
    }
    return contents;
};
const deserializeAws_json1_1GetQueryResultsResponse = (output, context) => {
    let contents = {
        __type: "GetQueryResultsResponse",
        results: undefined,
        statistics: undefined,
        status: undefined
    };
    if (output.results !== undefined && output.results !== null) {
        contents.results = deserializeAws_json1_1QueryResults(output.results, context);
    }
    if (output.statistics !== undefined && output.statistics !== null) {
        contents.statistics = deserializeAws_json1_1QueryStatistics(output.statistics, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1InvalidSequenceTokenException = (output, context) => {
    let contents = {
        __type: "InvalidSequenceTokenException",
        expectedSequenceToken: undefined,
        message: undefined
    };
    if (output.expectedSequenceToken !== undefined &&
        output.expectedSequenceToken !== null) {
        contents.expectedSequenceToken = output.expectedSequenceToken;
    }
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
const deserializeAws_json1_1ListTagsLogGroupResponse = (output, context) => {
    let contents = {
        __type: "ListTagsLogGroupResponse",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LogGroup = (output, context) => {
    let contents = {
        __type: "LogGroup",
        arn: undefined,
        creationTime: undefined,
        kmsKeyId: undefined,
        logGroupName: undefined,
        metricFilterCount: undefined,
        retentionInDays: undefined,
        storedBytes: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
        contents.kmsKeyId = output.kmsKeyId;
    }
    if (output.logGroupName !== undefined && output.logGroupName !== null) {
        contents.logGroupName = output.logGroupName;
    }
    if (output.metricFilterCount !== undefined &&
        output.metricFilterCount !== null) {
        contents.metricFilterCount = output.metricFilterCount;
    }
    if (output.retentionInDays !== undefined && output.retentionInDays !== null) {
        contents.retentionInDays = output.retentionInDays;
    }
    if (output.storedBytes !== undefined && output.storedBytes !== null) {
        contents.storedBytes = output.storedBytes;
    }
    return contents;
};
const deserializeAws_json1_1LogGroupField = (output, context) => {
    let contents = {
        __type: "LogGroupField",
        name: undefined,
        percent: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.percent !== undefined && output.percent !== null) {
        contents.percent = output.percent;
    }
    return contents;
};
const deserializeAws_json1_1LogGroupFieldList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogGroupField(entry, context));
};
const deserializeAws_json1_1LogGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogGroup(entry, context));
};
const deserializeAws_json1_1LogRecord = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1LogStream = (output, context) => {
    let contents = {
        __type: "LogStream",
        arn: undefined,
        creationTime: undefined,
        firstEventTimestamp: undefined,
        lastEventTimestamp: undefined,
        lastIngestionTime: undefined,
        logStreamName: undefined,
        storedBytes: undefined,
        uploadSequenceToken: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    if (output.firstEventTimestamp !== undefined &&
        output.firstEventTimestamp !== null) {
        contents.firstEventTimestamp = output.firstEventTimestamp;
    }
    if (output.lastEventTimestamp !== undefined &&
        output.lastEventTimestamp !== null) {
        contents.lastEventTimestamp = output.lastEventTimestamp;
    }
    if (output.lastIngestionTime !== undefined &&
        output.lastIngestionTime !== null) {
        contents.lastIngestionTime = output.lastIngestionTime;
    }
    if (output.logStreamName !== undefined && output.logStreamName !== null) {
        contents.logStreamName = output.logStreamName;
    }
    if (output.storedBytes !== undefined && output.storedBytes !== null) {
        contents.storedBytes = output.storedBytes;
    }
    if (output.uploadSequenceToken !== undefined &&
        output.uploadSequenceToken !== null) {
        contents.uploadSequenceToken = output.uploadSequenceToken;
    }
    return contents;
};
const deserializeAws_json1_1LogStreams = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogStream(entry, context));
};
const deserializeAws_json1_1MalformedQueryException = (output, context) => {
    let contents = {
        __type: "MalformedQueryException",
        message: undefined,
        queryCompileError: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.queryCompileError !== undefined &&
        output.queryCompileError !== null) {
        contents.queryCompileError = deserializeAws_json1_1QueryCompileError(output.queryCompileError, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricFilter = (output, context) => {
    let contents = {
        __type: "MetricFilter",
        creationTime: undefined,
        filterName: undefined,
        filterPattern: undefined,
        logGroupName: undefined,
        metricTransformations: undefined
    };
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    if (output.filterName !== undefined && output.filterName !== null) {
        contents.filterName = output.filterName;
    }
    if (output.filterPattern !== undefined && output.filterPattern !== null) {
        contents.filterPattern = output.filterPattern;
    }
    if (output.logGroupName !== undefined && output.logGroupName !== null) {
        contents.logGroupName = output.logGroupName;
    }
    if (output.metricTransformations !== undefined &&
        output.metricTransformations !== null) {
        contents.metricTransformations = deserializeAws_json1_1MetricTransformations(output.metricTransformations, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricFilterMatchRecord = (output, context) => {
    let contents = {
        __type: "MetricFilterMatchRecord",
        eventMessage: undefined,
        eventNumber: undefined,
        extractedValues: undefined
    };
    if (output.eventMessage !== undefined && output.eventMessage !== null) {
        contents.eventMessage = output.eventMessage;
    }
    if (output.eventNumber !== undefined && output.eventNumber !== null) {
        contents.eventNumber = output.eventNumber;
    }
    if (output.extractedValues !== undefined && output.extractedValues !== null) {
        contents.extractedValues = deserializeAws_json1_1ExtractedValues(output.extractedValues, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricFilterMatches = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricFilterMatchRecord(entry, context));
};
const deserializeAws_json1_1MetricFilters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricFilter(entry, context));
};
const deserializeAws_json1_1MetricTransformation = (output, context) => {
    let contents = {
        __type: "MetricTransformation",
        defaultValue: undefined,
        metricName: undefined,
        metricNamespace: undefined,
        metricValue: undefined
    };
    if (output.defaultValue !== undefined && output.defaultValue !== null) {
        contents.defaultValue = output.defaultValue;
    }
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    if (output.metricNamespace !== undefined && output.metricNamespace !== null) {
        contents.metricNamespace = output.metricNamespace;
    }
    if (output.metricValue !== undefined && output.metricValue !== null) {
        contents.metricValue = output.metricValue;
    }
    return contents;
};
const deserializeAws_json1_1MetricTransformations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricTransformation(entry, context));
};
const deserializeAws_json1_1OperationAbortedException = (output, context) => {
    let contents = {
        __type: "OperationAbortedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OutputLogEvent = (output, context) => {
    let contents = {
        __type: "OutputLogEvent",
        ingestionTime: undefined,
        message: undefined,
        timestamp: undefined
    };
    if (output.ingestionTime !== undefined && output.ingestionTime !== null) {
        contents.ingestionTime = output.ingestionTime;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = output.timestamp;
    }
    return contents;
};
const deserializeAws_json1_1OutputLogEvents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OutputLogEvent(entry, context));
};
const deserializeAws_json1_1PutDestinationResponse = (output, context) => {
    let contents = {
        __type: "PutDestinationResponse",
        destination: undefined
    };
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = deserializeAws_json1_1Destination(output.destination, context);
    }
    return contents;
};
const deserializeAws_json1_1PutLogEventsResponse = (output, context) => {
    let contents = {
        __type: "PutLogEventsResponse",
        nextSequenceToken: undefined,
        rejectedLogEventsInfo: undefined
    };
    if (output.nextSequenceToken !== undefined &&
        output.nextSequenceToken !== null) {
        contents.nextSequenceToken = output.nextSequenceToken;
    }
    if (output.rejectedLogEventsInfo !== undefined &&
        output.rejectedLogEventsInfo !== null) {
        contents.rejectedLogEventsInfo = deserializeAws_json1_1RejectedLogEventsInfo(output.rejectedLogEventsInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "PutResourcePolicyResponse",
        resourcePolicy: undefined
    };
    if (output.resourcePolicy !== undefined && output.resourcePolicy !== null) {
        contents.resourcePolicy = deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context);
    }
    return contents;
};
const deserializeAws_json1_1QueryCompileError = (output, context) => {
    let contents = {
        __type: "QueryCompileError",
        location: undefined,
        message: undefined
    };
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1QueryCompileErrorLocation(output.location, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1QueryCompileErrorLocation = (output, context) => {
    let contents = {
        __type: "QueryCompileErrorLocation",
        endCharOffset: undefined,
        startCharOffset: undefined
    };
    if (output.endCharOffset !== undefined && output.endCharOffset !== null) {
        contents.endCharOffset = output.endCharOffset;
    }
    if (output.startCharOffset !== undefined && output.startCharOffset !== null) {
        contents.startCharOffset = output.startCharOffset;
    }
    return contents;
};
const deserializeAws_json1_1QueryInfo = (output, context) => {
    let contents = {
        __type: "QueryInfo",
        createTime: undefined,
        logGroupName: undefined,
        queryId: undefined,
        queryString: undefined,
        status: undefined
    };
    if (output.createTime !== undefined && output.createTime !== null) {
        contents.createTime = output.createTime;
    }
    if (output.logGroupName !== undefined && output.logGroupName !== null) {
        contents.logGroupName = output.logGroupName;
    }
    if (output.queryId !== undefined && output.queryId !== null) {
        contents.queryId = output.queryId;
    }
    if (output.queryString !== undefined && output.queryString !== null) {
        contents.queryString = output.queryString;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1QueryInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QueryInfo(entry, context));
};
const deserializeAws_json1_1QueryResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResultRows(entry, context));
};
const deserializeAws_json1_1QueryStatistics = (output, context) => {
    let contents = {
        __type: "QueryStatistics",
        bytesScanned: undefined,
        recordsMatched: undefined,
        recordsScanned: undefined
    };
    if (output.bytesScanned !== undefined && output.bytesScanned !== null) {
        contents.bytesScanned = output.bytesScanned;
    }
    if (output.recordsMatched !== undefined && output.recordsMatched !== null) {
        contents.recordsMatched = output.recordsMatched;
    }
    if (output.recordsScanned !== undefined && output.recordsScanned !== null) {
        contents.recordsScanned = output.recordsScanned;
    }
    return contents;
};
const deserializeAws_json1_1RejectedLogEventsInfo = (output, context) => {
    let contents = {
        __type: "RejectedLogEventsInfo",
        expiredLogEventEndIndex: undefined,
        tooNewLogEventStartIndex: undefined,
        tooOldLogEventEndIndex: undefined
    };
    if (output.expiredLogEventEndIndex !== undefined &&
        output.expiredLogEventEndIndex !== null) {
        contents.expiredLogEventEndIndex = output.expiredLogEventEndIndex;
    }
    if (output.tooNewLogEventStartIndex !== undefined &&
        output.tooNewLogEventStartIndex !== null) {
        contents.tooNewLogEventStartIndex = output.tooNewLogEventStartIndex;
    }
    if (output.tooOldLogEventEndIndex !== undefined &&
        output.tooOldLogEventEndIndex !== null) {
        contents.tooOldLogEventEndIndex = output.tooOldLogEventEndIndex;
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
const deserializeAws_json1_1ResourcePolicies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourcePolicy(entry, context));
};
const deserializeAws_json1_1ResourcePolicy = (output, context) => {
    let contents = {
        __type: "ResourcePolicy",
        lastUpdatedTime: undefined,
        policyDocument: undefined,
        policyName: undefined
    };
    if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
        contents.lastUpdatedTime = output.lastUpdatedTime;
    }
    if (output.policyDocument !== undefined && output.policyDocument !== null) {
        contents.policyDocument = output.policyDocument;
    }
    if (output.policyName !== undefined && output.policyName !== null) {
        contents.policyName = output.policyName;
    }
    return contents;
};
const deserializeAws_json1_1ResultField = (output, context) => {
    let contents = {
        __type: "ResultField",
        field: undefined,
        value: undefined
    };
    if (output.field !== undefined && output.field !== null) {
        contents.field = output.field;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1ResultRows = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResultField(entry, context));
};
const deserializeAws_json1_1SearchedLogStream = (output, context) => {
    let contents = {
        __type: "SearchedLogStream",
        logStreamName: undefined,
        searchedCompletely: undefined
    };
    if (output.logStreamName !== undefined && output.logStreamName !== null) {
        contents.logStreamName = output.logStreamName;
    }
    if (output.searchedCompletely !== undefined &&
        output.searchedCompletely !== null) {
        contents.searchedCompletely = output.searchedCompletely;
    }
    return contents;
};
const deserializeAws_json1_1SearchedLogStreams = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SearchedLogStream(entry, context));
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StartQueryResponse = (output, context) => {
    let contents = {
        __type: "StartQueryResponse",
        queryId: undefined
    };
    if (output.queryId !== undefined && output.queryId !== null) {
        contents.queryId = output.queryId;
    }
    return contents;
};
const deserializeAws_json1_1StopQueryResponse = (output, context) => {
    let contents = {
        __type: "StopQueryResponse",
        success: undefined
    };
    if (output.success !== undefined && output.success !== null) {
        contents.success = output.success;
    }
    return contents;
};
const deserializeAws_json1_1SubscriptionFilter = (output, context) => {
    let contents = {
        __type: "SubscriptionFilter",
        creationTime: undefined,
        destinationArn: undefined,
        distribution: undefined,
        filterName: undefined,
        filterPattern: undefined,
        logGroupName: undefined,
        roleArn: undefined
    };
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = output.creationTime;
    }
    if (output.destinationArn !== undefined && output.destinationArn !== null) {
        contents.destinationArn = output.destinationArn;
    }
    if (output.distribution !== undefined && output.distribution !== null) {
        contents.distribution = output.distribution;
    }
    if (output.filterName !== undefined && output.filterName !== null) {
        contents.filterName = output.filterName;
    }
    if (output.filterPattern !== undefined && output.filterPattern !== null) {
        contents.filterPattern = output.filterPattern;
    }
    if (output.logGroupName !== undefined && output.logGroupName !== null) {
        contents.logGroupName = output.logGroupName;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    return contents;
};
const deserializeAws_json1_1SubscriptionFilters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubscriptionFilter(entry, context));
};
const deserializeAws_json1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1TestMetricFilterResponse = (output, context) => {
    let contents = {
        __type: "TestMetricFilterResponse",
        matches: undefined
    };
    if (output.matches !== undefined && output.matches !== null) {
        contents.matches = deserializeAws_json1_1MetricFilterMatches(output.matches, context);
    }
    return contents;
};
const deserializeAws_json1_1UnrecognizedClientException = (output, context) => {
    let contents = {
        __type: "UnrecognizedClientException",
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