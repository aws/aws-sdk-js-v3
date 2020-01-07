"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryDeleteAlarmsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAlarmsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAlarms", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAlarmsCommand = serializeAws_queryDeleteAlarmsCommand;
async function serializeAws_queryDeleteAnomalyDetectorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAnomalyDetectorInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAnomalyDetector", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAnomalyDetectorCommand = serializeAws_queryDeleteAnomalyDetectorCommand;
async function serializeAws_queryDeleteDashboardsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDashboardsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDashboards", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDashboardsCommand = serializeAws_queryDeleteDashboardsCommand;
async function serializeAws_queryDeleteInsightRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteInsightRulesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteInsightRules", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteInsightRulesCommand = serializeAws_queryDeleteInsightRulesCommand;
async function serializeAws_queryDescribeAlarmHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAlarmHistoryInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAlarmHistory", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAlarmHistoryCommand = serializeAws_queryDescribeAlarmHistoryCommand;
async function serializeAws_queryDescribeAlarmsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAlarmsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAlarms", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAlarmsCommand = serializeAws_queryDescribeAlarmsCommand;
async function serializeAws_queryDescribeAlarmsForMetricCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAlarmsForMetricInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAlarmsForMetric", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAlarmsForMetricCommand = serializeAws_queryDescribeAlarmsForMetricCommand;
async function serializeAws_queryDescribeAnomalyDetectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAnomalyDetectorsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAnomalyDetectors", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAnomalyDetectorsCommand = serializeAws_queryDescribeAnomalyDetectorsCommand;
async function serializeAws_queryDescribeInsightRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeInsightRulesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeInsightRules", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeInsightRulesCommand = serializeAws_queryDescribeInsightRulesCommand;
async function serializeAws_queryDisableAlarmActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDisableAlarmActionsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableAlarmActions", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableAlarmActionsCommand = serializeAws_queryDisableAlarmActionsCommand;
async function serializeAws_queryDisableInsightRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDisableInsightRulesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableInsightRules", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableInsightRulesCommand = serializeAws_queryDisableInsightRulesCommand;
async function serializeAws_queryEnableAlarmActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableAlarmActionsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableAlarmActions", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableAlarmActionsCommand = serializeAws_queryEnableAlarmActionsCommand;
async function serializeAws_queryEnableInsightRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableInsightRulesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableInsightRules", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableInsightRulesCommand = serializeAws_queryEnableInsightRulesCommand;
async function serializeAws_queryGetDashboardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetDashboardInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetDashboard", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetDashboardCommand = serializeAws_queryGetDashboardCommand;
async function serializeAws_queryGetInsightRuleReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetInsightRuleReportInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetInsightRuleReport", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetInsightRuleReportCommand = serializeAws_queryGetInsightRuleReportCommand;
async function serializeAws_queryGetMetricDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetMetricDataInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetMetricData", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetMetricDataCommand = serializeAws_queryGetMetricDataCommand;
async function serializeAws_queryGetMetricStatisticsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetMetricStatisticsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetMetricStatistics", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetMetricStatisticsCommand = serializeAws_queryGetMetricStatisticsCommand;
async function serializeAws_queryGetMetricWidgetImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetMetricWidgetImageInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetMetricWidgetImage", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetMetricWidgetImageCommand = serializeAws_queryGetMetricWidgetImageCommand;
async function serializeAws_queryListDashboardsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListDashboardsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListDashboards", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListDashboardsCommand = serializeAws_queryListDashboardsCommand;
async function serializeAws_queryListMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListMetricsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListMetrics", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListMetricsCommand = serializeAws_queryListMetricsCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryPutAnomalyDetectorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutAnomalyDetectorInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutAnomalyDetector", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutAnomalyDetectorCommand = serializeAws_queryPutAnomalyDetectorCommand;
async function serializeAws_queryPutDashboardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutDashboardInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutDashboard", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutDashboardCommand = serializeAws_queryPutDashboardCommand;
async function serializeAws_queryPutInsightRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutInsightRuleInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutInsightRule", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutInsightRuleCommand = serializeAws_queryPutInsightRuleCommand;
async function serializeAws_queryPutMetricAlarmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutMetricAlarmInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutMetricAlarm", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutMetricAlarmCommand = serializeAws_queryPutMetricAlarmCommand;
async function serializeAws_queryPutMetricDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutMetricDataInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutMetricData", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutMetricDataCommand = serializeAws_queryPutMetricDataCommand;
async function serializeAws_querySetAlarmStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetAlarmStateInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetAlarmState", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetAlarmStateCommand = serializeAws_querySetAlarmStateCommand;
async function serializeAws_queryTagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTagResourceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TagResource", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTagResourceCommand = serializeAws_queryTagResourceCommand;
async function serializeAws_queryUntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUntagResourceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UntagResource", Version: "2010-08-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUntagResourceCommand = serializeAws_queryUntagResourceCommand;
async function deserializeAws_queryDeleteAlarmsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAlarmsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAlarmsCommand = deserializeAws_queryDeleteAlarmsCommand;
async function deserializeAws_queryDeleteAlarmsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteAnomalyDetectorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAnomalyDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAnomalyDetectorOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAnomalyDetectorCommand = deserializeAws_queryDeleteAnomalyDetectorCommand;
async function deserializeAws_queryDeleteAnomalyDetectorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteDashboardsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDashboardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDashboardsOutput(data.DeleteDashboardsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDashboardsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDashboardsCommand = deserializeAws_queryDeleteDashboardsCommand;
async function deserializeAws_queryDeleteDashboardsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DashboardNotFoundError":
        case "com.amazonaws.cloudwatch.v2010_08_01#DashboardNotFoundError":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteInsightRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInsightRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteInsightRulesCommand = deserializeAws_queryDeleteInsightRulesCommand;
async function deserializeAws_queryDeleteInsightRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAlarmHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAlarmHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAlarmHistoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAlarmHistoryCommand = deserializeAws_queryDescribeAlarmHistoryCommand;
async function deserializeAws_queryDescribeAlarmHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAlarmsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAlarmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmsOutput(data.DescribeAlarmsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAlarmsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAlarmsCommand = deserializeAws_queryDescribeAlarmsCommand;
async function deserializeAws_queryDescribeAlarmsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAlarmsForMetricCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAlarmsForMetricCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAlarmsForMetricOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAlarmsForMetricCommand = deserializeAws_queryDescribeAlarmsForMetricCommand;
async function deserializeAws_queryDescribeAlarmsForMetricCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAnomalyDetectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAnomalyDetectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAnomalyDetectorsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAnomalyDetectorsCommand = deserializeAws_queryDescribeAnomalyDetectorsCommand;
async function deserializeAws_queryDescribeAnomalyDetectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeInsightRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInsightRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeInsightRulesCommand = deserializeAws_queryDescribeInsightRulesCommand;
async function deserializeAws_queryDescribeInsightRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDisableAlarmActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableAlarmActionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableAlarmActionsCommand = deserializeAws_queryDisableAlarmActionsCommand;
async function deserializeAws_queryDisableAlarmActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDisableInsightRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDisableInsightRulesOutput(data.DisableInsightRulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableInsightRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableInsightRulesCommand = deserializeAws_queryDisableInsightRulesCommand;
async function deserializeAws_queryDisableInsightRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryEnableAlarmActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableAlarmActionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableAlarmActionsCommand = deserializeAws_queryEnableAlarmActionsCommand;
async function deserializeAws_queryEnableAlarmActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryEnableInsightRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnableInsightRulesOutput(data.EnableInsightRulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableInsightRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableInsightRulesCommand = deserializeAws_queryEnableInsightRulesCommand;
async function deserializeAws_queryEnableInsightRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch.v2010_08_01#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetDashboardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetDashboardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetDashboardOutput(data.GetDashboardResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDashboardOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetDashboardCommand = deserializeAws_queryGetDashboardCommand;
async function deserializeAws_queryGetDashboardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DashboardNotFoundError":
        case "com.amazonaws.cloudwatch.v2010_08_01#DashboardNotFoundError":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetInsightRuleReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetInsightRuleReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInsightRuleReportOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetInsightRuleReportCommand = deserializeAws_queryGetInsightRuleReportCommand;
async function deserializeAws_queryGetInsightRuleReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetMetricDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricDataOutput(data.GetMetricDataResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMetricDataOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetMetricDataCommand = deserializeAws_queryGetMetricDataCommand;
async function deserializeAws_queryGetMetricDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetMetricStatisticsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetMetricStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMetricStatisticsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetMetricStatisticsCommand = deserializeAws_queryGetMetricStatisticsCommand;
async function deserializeAws_queryGetMetricStatisticsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetMetricWidgetImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetMetricWidgetImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMetricWidgetImageOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetMetricWidgetImageCommand = deserializeAws_queryGetMetricWidgetImageCommand;
async function deserializeAws_queryGetMetricWidgetImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListDashboardsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListDashboardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListDashboardsOutput(data.ListDashboardsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDashboardsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListDashboardsCommand = deserializeAws_queryListDashboardsCommand;
async function deserializeAws_queryListDashboardsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMetricsOutput(data.ListMetricsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMetricsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListMetricsCommand = deserializeAws_queryListMetricsCommand;
async function deserializeAws_queryListMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTagsForResourceOutput(data.ListTagsForResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
async function deserializeAws_queryListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutAnomalyDetectorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutAnomalyDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAnomalyDetectorOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutAnomalyDetectorCommand = deserializeAws_queryPutAnomalyDetectorCommand;
async function deserializeAws_queryPutAnomalyDetectorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch.v2010_08_01#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutDashboardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutDashboardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutDashboardOutput(data.PutDashboardResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutDashboardOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutDashboardCommand = deserializeAws_queryPutDashboardCommand;
async function deserializeAws_queryPutDashboardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DashboardInvalidInputError":
        case "com.amazonaws.cloudwatch.v2010_08_01#DashboardInvalidInputError":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDashboardInvalidInputErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutInsightRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutInsightRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutInsightRuleOutput(data.PutInsightRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutInsightRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutInsightRuleCommand = deserializeAws_queryPutInsightRuleCommand;
async function deserializeAws_queryPutInsightRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch.v2010_08_01#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutMetricAlarmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutMetricAlarmCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutMetricAlarmCommand = deserializeAws_queryPutMetricAlarmCommand;
async function deserializeAws_queryPutMetricAlarmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutMetricDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutMetricDataCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutMetricDataCommand = deserializeAws_queryPutMetricDataCommand;
async function deserializeAws_queryPutMetricDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazon.coral.service#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetAlarmStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetAlarmStateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetAlarmStateCommand = deserializeAws_querySetAlarmStateCommand;
async function deserializeAws_querySetAlarmStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidFormatFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InvalidFormatFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidFormatFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryTagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagResourceOutput(data.TagResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTagResourceCommand = deserializeAws_queryTagResourceCommand;
async function deserializeAws_queryTagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUntagResourceOutput(data.UntagResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUntagResourceCommand = deserializeAws_queryUntagResourceCommand;
async function deserializeAws_queryUntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch.v2010_08_01#InternalServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch.v2010_08_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMissingRequiredParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMissingRequiredParameterException(body.Error, context);
    const contents = Object.assign({ name: "MissingRequiredParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDashboardInvalidInputErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDashboardInvalidInputError(body.Error, context);
    const contents = Object.assign({ name: "DashboardInvalidInputError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDashboardNotFoundErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDashboardNotFoundError(body.Error, context);
    const contents = Object.assign({ name: "DashboardNotFoundError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInternalServiceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalServiceFault(body.Error, context);
    const contents = Object.assign({ name: "InternalServiceFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidFormatFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidFormatFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidFormatFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidNextTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidNextToken(body.Error, context);
    const contents = Object.assign({ name: "InvalidNextToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFound(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAlarmNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAnomalyDetectorConfiguration = (input, context) => {
    const entries = {};
    if (input.ExcludedTimeRanges !== undefined) {
        const memberEntries = serializeAws_queryAnomalyDetectorExcludedTimeRanges(input.ExcludedTimeRanges, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExcludedTimeRanges.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricTimezone !== undefined) {
        entries["MetricTimezone"] = input.MetricTimezone;
    }
    return entries;
};
const serializeAws_queryAnomalyDetectorExcludedTimeRanges = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryRange(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCounts = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDashboardNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteAlarmsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteAnomalyDetectorInput = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Stat !== undefined) {
        entries["Stat"] = input.Stat;
    }
    return entries;
};
const serializeAws_queryDeleteDashboardsInput = (input, context) => {
    const entries = {};
    if (input.DashboardNames !== undefined) {
        const memberEntries = serializeAws_queryDashboardNames(input.DashboardNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DashboardNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RuleNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeAlarmHistoryInput = (input, context) => {
    const entries = {};
    if (input.AlarmName !== undefined) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.EndDate !== undefined) {
        entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
    }
    if (input.HistoryItemType !== undefined) {
        entries["HistoryItemType"] = input.HistoryItemType;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StartDate !== undefined) {
        entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryDescribeAlarmsForMetricInput = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ExtendedStatistic !== undefined) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.Statistic !== undefined) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryDescribeAlarmsInput = (input, context) => {
    const entries = {};
    if (input.ActionPrefix !== undefined) {
        entries["ActionPrefix"] = input.ActionPrefix;
    }
    if (input.AlarmNamePrefix !== undefined) {
        entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
    }
    if (input.AlarmNames !== undefined) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StateValue !== undefined) {
        entries["StateValue"] = input.StateValue;
    }
    return entries;
};
const serializeAws_queryDescribeAnomalyDetectorsInput = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDimension = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryDimensionFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryDimensionFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryDimensionFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDimensions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryDimension(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDisableAlarmActionsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDisableInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RuleNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEnableAlarmActionsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEnableInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RuleNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryExtendedStatistics = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryGetDashboardInput = (input, context) => {
    const entries = {};
    if (input.DashboardName !== undefined) {
        entries["DashboardName"] = input.DashboardName;
    }
    return entries;
};
const serializeAws_queryGetInsightRuleReportInput = (input, context) => {
    const entries = {};
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxContributorCount !== undefined) {
        entries["MaxContributorCount"] = input.MaxContributorCount;
    }
    if (input.Metrics !== undefined) {
        const memberEntries = serializeAws_queryInsightRuleMetricList(input.Metrics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Metrics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OrderBy !== undefined) {
        entries["OrderBy"] = input.OrderBy;
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.RuleName !== undefined) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryGetMetricDataInput = (input, context) => {
    const entries = {};
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxDatapoints !== undefined) {
        entries["MaxDatapoints"] = input.MaxDatapoints;
    }
    if (input.MetricDataQueries !== undefined) {
        const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MetricDataQueries.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScanBy !== undefined) {
        entries["ScanBy"] = input.ScanBy;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryGetMetricStatisticsInput = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtendedStatistics !== undefined) {
        const memberEntries = serializeAws_queryExtendedStatistics(input.ExtendedStatistics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExtendedStatistics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Statistics !== undefined) {
        const memberEntries = serializeAws_queryStatistics(input.Statistics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Statistics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryGetMetricWidgetImageInput = (input, context) => {
    const entries = {};
    if (input.MetricWidget !== undefined) {
        entries["MetricWidget"] = input.MetricWidget;
    }
    if (input.OutputFormat !== undefined) {
        entries["OutputFormat"] = input.OutputFormat;
    }
    return entries;
};
const serializeAws_queryInsightRuleMetricList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryInsightRuleNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListDashboardsInput = (input, context) => {
    const entries = {};
    if (input.DashboardNamePrefix !== undefined) {
        entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListMetricsInput = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensionFilters(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    return entries;
};
const serializeAws_queryMetric = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    return entries;
};
const serializeAws_queryMetricData = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryMetricDatum(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricDataQueries = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryMetricDataQuery(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricDataQuery = (input, context) => {
    const entries = {};
    if (input.Expression !== undefined) {
        entries["Expression"] = input.Expression;
    }
    if (input.Id !== undefined) {
        entries["Id"] = input.Id;
    }
    if (input.Label !== undefined) {
        entries["Label"] = input.Label;
    }
    if (input.MetricStat !== undefined) {
        const memberEntries = serializeAws_queryMetricStat(input.MetricStat, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MetricStat.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.ReturnData !== undefined) {
        entries["ReturnData"] = input.ReturnData;
    }
    return entries;
};
const serializeAws_queryMetricDatum = (input, context) => {
    const entries = {};
    if (input.Counts !== undefined) {
        const memberEntries = serializeAws_queryCounts(input.Counts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Counts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.StatisticValues !== undefined) {
        const memberEntries = serializeAws_queryStatisticSet(input.StatisticValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StatisticValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StorageResolution !== undefined) {
        entries["StorageResolution"] = input.StorageResolution;
    }
    if (input.Timestamp !== undefined) {
        entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryValues(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryMetricStat = (input, context) => {
    const entries = {};
    if (input.Metric !== undefined) {
        const memberEntries = serializeAws_queryMetric(input.Metric, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Metric.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.Stat !== undefined) {
        entries["Stat"] = input.Stat;
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryPutAnomalyDetectorInput = (input, context) => {
    const entries = {};
    if (input.Configuration !== undefined) {
        const memberEntries = serializeAws_queryAnomalyDetectorConfiguration(input.Configuration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Configuration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Stat !== undefined) {
        entries["Stat"] = input.Stat;
    }
    return entries;
};
const serializeAws_queryPutDashboardInput = (input, context) => {
    const entries = {};
    if (input.DashboardBody !== undefined) {
        entries["DashboardBody"] = input.DashboardBody;
    }
    if (input.DashboardName !== undefined) {
        entries["DashboardName"] = input.DashboardName;
    }
    return entries;
};
const serializeAws_queryPutInsightRuleInput = (input, context) => {
    const entries = {};
    if (input.RuleDefinition !== undefined) {
        entries["RuleDefinition"] = input.RuleDefinition;
    }
    if (input.RuleName !== undefined) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleState !== undefined) {
        entries["RuleState"] = input.RuleState;
    }
    return entries;
};
const serializeAws_queryPutMetricAlarmInput = (input, context) => {
    const entries = {};
    if (input.ActionsEnabled !== undefined) {
        entries["ActionsEnabled"] = input.ActionsEnabled;
    }
    if (input.AlarmActions !== undefined) {
        const memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AlarmActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AlarmDescription !== undefined) {
        entries["AlarmDescription"] = input.AlarmDescription;
    }
    if (input.AlarmName !== undefined) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.ComparisonOperator !== undefined) {
        entries["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.DatapointsToAlarm !== undefined) {
        entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
    }
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Dimensions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EvaluateLowSampleCountPercentile !== undefined) {
        entries["EvaluateLowSampleCountPercentile"] =
            input.EvaluateLowSampleCountPercentile;
    }
    if (input.EvaluationPeriods !== undefined) {
        entries["EvaluationPeriods"] = input.EvaluationPeriods;
    }
    if (input.ExtendedStatistic !== undefined) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.InsufficientDataActions !== undefined) {
        const memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InsufficientDataActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MetricName !== undefined) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Metrics !== undefined) {
        const memberEntries = serializeAws_queryMetricDataQueries(input.Metrics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Metrics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OKActions !== undefined) {
        const memberEntries = serializeAws_queryResourceList(input.OKActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OKActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Period !== undefined) {
        entries["Period"] = input.Period;
    }
    if (input.Statistic !== undefined) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Threshold !== undefined) {
        entries["Threshold"] = input.Threshold;
    }
    if (input.ThresholdMetricId !== undefined) {
        entries["ThresholdMetricId"] = input.ThresholdMetricId;
    }
    if (input.TreatMissingData !== undefined) {
        entries["TreatMissingData"] = input.TreatMissingData;
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryPutMetricDataInput = (input, context) => {
    const entries = {};
    if (input.MetricData !== undefined) {
        const memberEntries = serializeAws_queryMetricData(input.MetricData, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MetricData.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Namespace !== undefined) {
        entries["Namespace"] = input.Namespace;
    }
    return entries;
};
const serializeAws_queryRange = (input, context) => {
    const entries = {};
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryResourceList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetAlarmStateInput = (input, context) => {
    const entries = {};
    if (input.AlarmName !== undefined) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.StateReason !== undefined) {
        entries["StateReason"] = input.StateReason;
    }
    if (input.StateReasonData !== undefined) {
        entries["StateReasonData"] = input.StateReasonData;
    }
    if (input.StateValue !== undefined) {
        entries["StateValue"] = input.StateValue;
    }
    return entries;
};
const serializeAws_queryStatisticSet = (input, context) => {
    const entries = {};
    if (input.Maximum !== undefined) {
        entries["Maximum"] = input.Maximum;
    }
    if (input.Minimum !== undefined) {
        entries["Minimum"] = input.Minimum;
    }
    if (input.SampleCount !== undefined) {
        entries["SampleCount"] = input.SampleCount;
    }
    if (input.Sum !== undefined) {
        entries["Sum"] = input.Sum;
    }
    return entries;
};
const serializeAws_queryStatistics = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUntagResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryValues = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryInvalidParameterCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidParameterCombinationException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMissingRequiredParameterException = (output, context) => {
    let contents = {
        __type: "MissingRequiredParameterException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAlarmHistoryItem = (output, context) => {
    let contents = {
        __type: "AlarmHistoryItem",
        AlarmName: undefined,
        HistoryData: undefined,
        HistoryItemType: undefined,
        HistorySummary: undefined,
        Timestamp: undefined
    };
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["HistoryData"] !== undefined) {
        contents.HistoryData = output["HistoryData"];
    }
    if (output["HistoryItemType"] !== undefined) {
        contents.HistoryItemType = output["HistoryItemType"];
    }
    if (output["HistorySummary"] !== undefined) {
        contents.HistorySummary = output["HistorySummary"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryAlarmHistoryItems = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAlarmHistoryItem(entry, context));
    });
    return contents;
};
const deserializeAws_queryAnomalyDetector = (output, context) => {
    let contents = {
        __type: "AnomalyDetector",
        Configuration: undefined,
        Dimensions: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Stat: undefined,
        StateValue: undefined
    };
    if (output["Configuration"] !== undefined) {
        contents.Configuration = deserializeAws_queryAnomalyDetectorConfiguration(output["Configuration"], context);
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined &&
        output["Dimensions"]["member"] !== undefined) {
        const wrappedItem = output["Dimensions"]["member"] instanceof Array
            ? output["Dimensions"]["member"]
            : [output["Dimensions"]["member"]];
        contents.Dimensions = deserializeAws_queryDimensions(wrappedItem, context);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    return contents;
};
const deserializeAws_queryAnomalyDetectorConfiguration = (output, context) => {
    let contents = {
        __type: "AnomalyDetectorConfiguration",
        ExcludedTimeRanges: undefined,
        MetricTimezone: undefined
    };
    if (output.ExcludedTimeRanges === "") {
        contents.ExcludedTimeRanges = [];
    }
    if (output["ExcludedTimeRanges"] !== undefined &&
        output["ExcludedTimeRanges"]["member"] !== undefined) {
        const wrappedItem = output["ExcludedTimeRanges"]["member"] instanceof Array
            ? output["ExcludedTimeRanges"]["member"]
            : [output["ExcludedTimeRanges"]["member"]];
        contents.ExcludedTimeRanges = deserializeAws_queryAnomalyDetectorExcludedTimeRanges(wrappedItem, context);
    }
    if (output["MetricTimezone"] !== undefined) {
        contents.MetricTimezone = output["MetricTimezone"];
    }
    return contents;
};
const deserializeAws_queryAnomalyDetectorExcludedTimeRanges = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRange(entry, context));
    });
    return contents;
};
const deserializeAws_queryAnomalyDetectors = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAnomalyDetector(entry, context));
    });
    return contents;
};
const deserializeAws_queryBatchFailures = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPartialFailure(entry, context));
    });
    return contents;
};
const deserializeAws_queryConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDashboardEntries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDashboardEntry(entry, context));
    });
    return contents;
};
const deserializeAws_queryDashboardEntry = (output, context) => {
    let contents = {
        __type: "DashboardEntry",
        DashboardArn: undefined,
        DashboardName: undefined,
        LastModified: undefined,
        Size: undefined
    };
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
const deserializeAws_queryDashboardInvalidInputError = (output, context) => {
    let contents = {
        __type: "DashboardInvalidInputError",
        dashboardValidationMessages: undefined,
        message: undefined
    };
    if (output.dashboardValidationMessages === "") {
        contents.dashboardValidationMessages = [];
    }
    if (output["dashboardValidationMessages"] !== undefined &&
        output["dashboardValidationMessages"]["member"] !== undefined) {
        const wrappedItem = output["dashboardValidationMessages"]["member"] instanceof Array
            ? output["dashboardValidationMessages"]["member"]
            : [output["dashboardValidationMessages"]["member"]];
        contents.dashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(wrappedItem, context);
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDashboardNotFoundError = (output, context) => {
    let contents = {
        __type: "DashboardNotFoundError",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDashboardValidationMessage = (output, context) => {
    let contents = {
        __type: "DashboardValidationMessage",
        DataPath: undefined,
        Message: undefined
    };
    if (output["DataPath"] !== undefined) {
        contents.DataPath = output["DataPath"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDashboardValidationMessages = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDashboardValidationMessage(entry, context));
    });
    return contents;
};
const deserializeAws_queryDatapoint = (output, context) => {
    let contents = {
        __type: "Datapoint",
        Average: undefined,
        ExtendedStatistics: undefined,
        Maximum: undefined,
        Minimum: undefined,
        SampleCount: undefined,
        Sum: undefined,
        Timestamp: undefined,
        Unit: undefined
    };
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output.ExtendedStatistics === "") {
        contents.ExtendedStatistics = {};
    }
    if (output["ExtendedStatistics"] !== undefined &&
        output["ExtendedStatistics"]["entry"] !== undefined) {
        const wrappedItem = output["ExtendedStatistics"]["entry"] instanceof Array
            ? output["ExtendedStatistics"]["entry"]
            : [output["ExtendedStatistics"]["entry"]];
        contents.ExtendedStatistics = deserializeAws_queryDatapointValueMap(wrappedItem, context);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
const deserializeAws_queryDatapointValueMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = parseFloat(pair["value"]);
    });
    return mapParams;
};
const deserializeAws_queryDatapointValues = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(parseFloat(entry));
    });
    return contents;
};
const deserializeAws_queryDatapoints = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDatapoint(entry, context));
    });
    return contents;
};
const deserializeAws_queryDeleteAnomalyDetectorOutput = (output, context) => {
    let contents = {
        __type: "DeleteAnomalyDetectorOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteDashboardsOutput = (output, context) => {
    let contents = {
        __type: "DeleteDashboardsOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteInsightRulesOutput = (output, context) => {
    let contents = {
        __type: "DeleteInsightRulesOutput",
        Failures: undefined
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined &&
        output["Failures"]["member"] !== undefined) {
        const wrappedItem = output["Failures"]["member"] instanceof Array
            ? output["Failures"]["member"]
            : [output["Failures"]["member"]];
        contents.Failures = deserializeAws_queryBatchFailures(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeAlarmHistoryOutput = (output, context) => {
    let contents = {
        __type: "DescribeAlarmHistoryOutput",
        AlarmHistoryItems: undefined,
        NextToken: undefined
    };
    if (output.AlarmHistoryItems === "") {
        contents.AlarmHistoryItems = [];
    }
    if (output["AlarmHistoryItems"] !== undefined &&
        output["AlarmHistoryItems"]["member"] !== undefined) {
        const wrappedItem = output["AlarmHistoryItems"]["member"] instanceof Array
            ? output["AlarmHistoryItems"]["member"]
            : [output["AlarmHistoryItems"]["member"]];
        contents.AlarmHistoryItems = deserializeAws_queryAlarmHistoryItems(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeAlarmsForMetricOutput = (output, context) => {
    let contents = {
        __type: "DescribeAlarmsForMetricOutput",
        MetricAlarms: undefined
    };
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined &&
        output["MetricAlarms"]["member"] !== undefined) {
        const wrappedItem = output["MetricAlarms"]["member"] instanceof Array
            ? output["MetricAlarms"]["member"]
            : [output["MetricAlarms"]["member"]];
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeAlarmsOutput = (output, context) => {
    let contents = {
        __type: "DescribeAlarmsOutput",
        MetricAlarms: undefined,
        NextToken: undefined
    };
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined &&
        output["MetricAlarms"]["member"] !== undefined) {
        const wrappedItem = output["MetricAlarms"]["member"] instanceof Array
            ? output["MetricAlarms"]["member"]
            : [output["MetricAlarms"]["member"]];
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeAnomalyDetectorsOutput = (output, context) => {
    let contents = {
        __type: "DescribeAnomalyDetectorsOutput",
        AnomalyDetectors: undefined,
        NextToken: undefined
    };
    if (output.AnomalyDetectors === "") {
        contents.AnomalyDetectors = [];
    }
    if (output["AnomalyDetectors"] !== undefined &&
        output["AnomalyDetectors"]["member"] !== undefined) {
        const wrappedItem = output["AnomalyDetectors"]["member"] instanceof Array
            ? output["AnomalyDetectors"]["member"]
            : [output["AnomalyDetectors"]["member"]];
        contents.AnomalyDetectors = deserializeAws_queryAnomalyDetectors(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeInsightRulesOutput = (output, context) => {
    let contents = {
        __type: "DescribeInsightRulesOutput",
        InsightRules: undefined,
        NextToken: undefined
    };
    if (output.InsightRules === "") {
        contents.InsightRules = [];
    }
    if (output["InsightRules"] !== undefined &&
        output["InsightRules"]["member"] !== undefined) {
        const wrappedItem = output["InsightRules"]["member"] instanceof Array
            ? output["InsightRules"]["member"]
            : [output["InsightRules"]["member"]];
        contents.InsightRules = deserializeAws_queryInsightRules(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDimension = (output, context) => {
    let contents = {
        __type: "Dimension",
        Name: undefined,
        Value: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryDimensions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDimension(entry, context));
    });
    return contents;
};
const deserializeAws_queryDisableInsightRulesOutput = (output, context) => {
    let contents = {
        __type: "DisableInsightRulesOutput",
        Failures: undefined
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined &&
        output["Failures"]["member"] !== undefined) {
        const wrappedItem = output["Failures"]["member"] instanceof Array
            ? output["Failures"]["member"]
            : [output["Failures"]["member"]];
        contents.Failures = deserializeAws_queryBatchFailures(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEnableInsightRulesOutput = (output, context) => {
    let contents = {
        __type: "EnableInsightRulesOutput",
        Failures: undefined
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined &&
        output["Failures"]["member"] !== undefined) {
        const wrappedItem = output["Failures"]["member"] instanceof Array
            ? output["Failures"]["member"]
            : [output["Failures"]["member"]];
        contents.Failures = deserializeAws_queryBatchFailures(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetDashboardOutput = (output, context) => {
    let contents = {
        __type: "GetDashboardOutput",
        DashboardArn: undefined,
        DashboardBody: undefined,
        DashboardName: undefined
    };
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["DashboardBody"] !== undefined) {
        contents.DashboardBody = output["DashboardBody"];
    }
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    return contents;
};
const deserializeAws_queryGetInsightRuleReportOutput = (output, context) => {
    let contents = {
        __type: "GetInsightRuleReportOutput",
        AggregateValue: undefined,
        AggregationStatistic: undefined,
        ApproximateUniqueCount: undefined,
        Contributors: undefined,
        KeyLabels: undefined,
        MetricDatapoints: undefined
    };
    if (output["AggregateValue"] !== undefined) {
        contents.AggregateValue = parseFloat(output["AggregateValue"]);
    }
    if (output["AggregationStatistic"] !== undefined) {
        contents.AggregationStatistic = output["AggregationStatistic"];
    }
    if (output["ApproximateUniqueCount"] !== undefined) {
        contents.ApproximateUniqueCount = parseInt(output["ApproximateUniqueCount"]);
    }
    if (output.Contributors === "") {
        contents.Contributors = [];
    }
    if (output["Contributors"] !== undefined &&
        output["Contributors"]["member"] !== undefined) {
        const wrappedItem = output["Contributors"]["member"] instanceof Array
            ? output["Contributors"]["member"]
            : [output["Contributors"]["member"]];
        contents.Contributors = deserializeAws_queryInsightRuleContributors(wrappedItem, context);
    }
    if (output.KeyLabels === "") {
        contents.KeyLabels = [];
    }
    if (output["KeyLabels"] !== undefined &&
        output["KeyLabels"]["member"] !== undefined) {
        const wrappedItem = output["KeyLabels"]["member"] instanceof Array
            ? output["KeyLabels"]["member"]
            : [output["KeyLabels"]["member"]];
        contents.KeyLabels = deserializeAws_queryInsightRuleContributorKeyLabels(wrappedItem, context);
    }
    if (output.MetricDatapoints === "") {
        contents.MetricDatapoints = [];
    }
    if (output["MetricDatapoints"] !== undefined &&
        output["MetricDatapoints"]["member"] !== undefined) {
        const wrappedItem = output["MetricDatapoints"]["member"] instanceof Array
            ? output["MetricDatapoints"]["member"]
            : [output["MetricDatapoints"]["member"]];
        contents.MetricDatapoints = deserializeAws_queryInsightRuleMetricDatapoints(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetMetricDataOutput = (output, context) => {
    let contents = {
        __type: "GetMetricDataOutput",
        Messages: undefined,
        MetricDataResults: undefined,
        NextToken: undefined
    };
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined &&
        output["Messages"]["member"] !== undefined) {
        const wrappedItem = output["Messages"]["member"] instanceof Array
            ? output["Messages"]["member"]
            : [output["Messages"]["member"]];
        contents.Messages = deserializeAws_queryMetricDataResultMessages(wrappedItem, context);
    }
    if (output.MetricDataResults === "") {
        contents.MetricDataResults = [];
    }
    if (output["MetricDataResults"] !== undefined &&
        output["MetricDataResults"]["member"] !== undefined) {
        const wrappedItem = output["MetricDataResults"]["member"] instanceof Array
            ? output["MetricDataResults"]["member"]
            : [output["MetricDataResults"]["member"]];
        contents.MetricDataResults = deserializeAws_queryMetricDataResults(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryGetMetricStatisticsOutput = (output, context) => {
    let contents = {
        __type: "GetMetricStatisticsOutput",
        Datapoints: undefined,
        Label: undefined
    };
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined &&
        output["Datapoints"]["member"] !== undefined) {
        const wrappedItem = output["Datapoints"]["member"] instanceof Array
            ? output["Datapoints"]["member"]
            : [output["Datapoints"]["member"]];
        contents.Datapoints = deserializeAws_queryDatapoints(wrappedItem, context);
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    return contents;
};
const deserializeAws_queryGetMetricWidgetImageOutput = (output, context) => {
    let contents = {
        __type: "GetMetricWidgetImageOutput",
        MetricWidgetImage: undefined
    };
    if (output["MetricWidgetImage"] !== undefined) {
        contents.MetricWidgetImage = context.base64Decoder(output["MetricWidgetImage"]);
    }
    return contents;
};
const deserializeAws_queryInsightRule = (output, context) => {
    let contents = {
        __type: "InsightRule",
        Definition: undefined,
        Name: undefined,
        Schema: undefined,
        State: undefined
    };
    if (output["Definition"] !== undefined) {
        contents.Definition = output["Definition"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Schema"] !== undefined) {
        contents.Schema = output["Schema"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributor = (output, context) => {
    let contents = {
        __type: "InsightRuleContributor",
        ApproximateAggregateValue: undefined,
        Datapoints: undefined,
        Keys: undefined
    };
    if (output["ApproximateAggregateValue"] !== undefined) {
        contents.ApproximateAggregateValue = parseFloat(output["ApproximateAggregateValue"]);
    }
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined &&
        output["Datapoints"]["member"] !== undefined) {
        const wrappedItem = output["Datapoints"]["member"] instanceof Array
            ? output["Datapoints"]["member"]
            : [output["Datapoints"]["member"]];
        contents.Datapoints = deserializeAws_queryInsightRuleContributorDatapoints(wrappedItem, context);
    }
    if (output.Keys === "") {
        contents.Keys = [];
    }
    if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
        const wrappedItem = output["Keys"]["member"] instanceof Array
            ? output["Keys"]["member"]
            : [output["Keys"]["member"]];
        contents.Keys = deserializeAws_queryInsightRuleContributorKeys(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributorDatapoint = (output, context) => {
    let contents = {
        __type: "InsightRuleContributorDatapoint",
        ApproximateValue: undefined,
        Timestamp: undefined
    };
    if (output["ApproximateValue"] !== undefined) {
        contents.ApproximateValue = parseFloat(output["ApproximateValue"]);
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributorDatapoints = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInsightRuleContributorDatapoint(entry, context));
    });
    return contents;
};
const deserializeAws_queryInsightRuleContributorKeyLabels = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryInsightRuleContributorKeys = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryInsightRuleContributors = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInsightRuleContributor(entry, context));
    });
    return contents;
};
const deserializeAws_queryInsightRuleMetricDatapoint = (output, context) => {
    let contents = {
        __type: "InsightRuleMetricDatapoint",
        Average: undefined,
        MaxContributorValue: undefined,
        Maximum: undefined,
        Minimum: undefined,
        SampleCount: undefined,
        Sum: undefined,
        Timestamp: undefined,
        UniqueContributors: undefined
    };
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output["MaxContributorValue"] !== undefined) {
        contents.MaxContributorValue = parseFloat(output["MaxContributorValue"]);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["UniqueContributors"] !== undefined) {
        contents.UniqueContributors = parseFloat(output["UniqueContributors"]);
    }
    return contents;
};
const deserializeAws_queryInsightRuleMetricDatapoints = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInsightRuleMetricDatapoint(entry, context));
    });
    return contents;
};
const deserializeAws_queryInsightRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInsightRule(entry, context));
    });
    return contents;
};
const deserializeAws_queryInternalServiceFault = (output, context) => {
    let contents = {
        __type: "InternalServiceFault",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidFormatFault = (output, context) => {
    let contents = {
        __type: "InvalidFormatFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidNextToken = (output, context) => {
    let contents = {
        __type: "InvalidNextToken",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededFault = (output, context) => {
    let contents = {
        __type: "LimitExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListDashboardsOutput = (output, context) => {
    let contents = {
        __type: "ListDashboardsOutput",
        DashboardEntries: undefined,
        NextToken: undefined
    };
    if (output.DashboardEntries === "") {
        contents.DashboardEntries = [];
    }
    if (output["DashboardEntries"] !== undefined &&
        output["DashboardEntries"]["member"] !== undefined) {
        const wrappedItem = output["DashboardEntries"]["member"] instanceof Array
            ? output["DashboardEntries"]["member"]
            : [output["DashboardEntries"]["member"]];
        contents.DashboardEntries = deserializeAws_queryDashboardEntries(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListMetricsOutput = (output, context) => {
    let contents = {
        __type: "ListMetricsOutput",
        Metrics: undefined,
        NextToken: undefined
    };
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined &&
        output["Metrics"]["member"] !== undefined) {
        const wrappedItem = output["Metrics"]["member"] instanceof Array
            ? output["Metrics"]["member"]
            : [output["Metrics"]["member"]];
        contents.Metrics = deserializeAws_queryMetrics(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        Tags: undefined
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryMessageData = (output, context) => {
    let contents = {
        __type: "MessageData",
        Code: undefined,
        Value: undefined
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryMetric = (output, context) => {
    let contents = {
        __type: "Metric",
        Dimensions: undefined,
        MetricName: undefined,
        Namespace: undefined
    };
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined &&
        output["Dimensions"]["member"] !== undefined) {
        const wrappedItem = output["Dimensions"]["member"] instanceof Array
            ? output["Dimensions"]["member"]
            : [output["Dimensions"]["member"]];
        contents.Dimensions = deserializeAws_queryDimensions(wrappedItem, context);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    return contents;
};
const deserializeAws_queryMetricAlarm = (output, context) => {
    let contents = {
        __type: "MetricAlarm",
        ActionsEnabled: undefined,
        AlarmActions: undefined,
        AlarmArn: undefined,
        AlarmConfigurationUpdatedTimestamp: undefined,
        AlarmDescription: undefined,
        AlarmName: undefined,
        ComparisonOperator: undefined,
        DatapointsToAlarm: undefined,
        Dimensions: undefined,
        EvaluateLowSampleCountPercentile: undefined,
        EvaluationPeriods: undefined,
        ExtendedStatistic: undefined,
        InsufficientDataActions: undefined,
        MetricName: undefined,
        Metrics: undefined,
        Namespace: undefined,
        OKActions: undefined,
        Period: undefined,
        StateReason: undefined,
        StateReasonData: undefined,
        StateUpdatedTimestamp: undefined,
        StateValue: undefined,
        Statistic: undefined,
        Threshold: undefined,
        ThresholdMetricId: undefined,
        TreatMissingData: undefined,
        Unit: undefined
    };
    if (output["ActionsEnabled"] !== undefined) {
        contents.ActionsEnabled = output["ActionsEnabled"] == "true";
    }
    if (output.AlarmActions === "") {
        contents.AlarmActions = [];
    }
    if (output["AlarmActions"] !== undefined &&
        output["AlarmActions"]["member"] !== undefined) {
        const wrappedItem = output["AlarmActions"]["member"] instanceof Array
            ? output["AlarmActions"]["member"]
            : [output["AlarmActions"]["member"]];
        contents.AlarmActions = deserializeAws_queryResourceList(wrappedItem, context);
    }
    if (output["AlarmArn"] !== undefined) {
        contents.AlarmArn = output["AlarmArn"];
    }
    if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
        contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
    }
    if (output["AlarmDescription"] !== undefined) {
        contents.AlarmDescription = output["AlarmDescription"];
    }
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["ComparisonOperator"] !== undefined) {
        contents.ComparisonOperator = output["ComparisonOperator"];
    }
    if (output["DatapointsToAlarm"] !== undefined) {
        contents.DatapointsToAlarm = parseInt(output["DatapointsToAlarm"]);
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined &&
        output["Dimensions"]["member"] !== undefined) {
        const wrappedItem = output["Dimensions"]["member"] instanceof Array
            ? output["Dimensions"]["member"]
            : [output["Dimensions"]["member"]];
        contents.Dimensions = deserializeAws_queryDimensions(wrappedItem, context);
    }
    if (output["EvaluateLowSampleCountPercentile"] !== undefined) {
        contents.EvaluateLowSampleCountPercentile =
            output["EvaluateLowSampleCountPercentile"];
    }
    if (output["EvaluationPeriods"] !== undefined) {
        contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
    }
    if (output["ExtendedStatistic"] !== undefined) {
        contents.ExtendedStatistic = output["ExtendedStatistic"];
    }
    if (output.InsufficientDataActions === "") {
        contents.InsufficientDataActions = [];
    }
    if (output["InsufficientDataActions"] !== undefined &&
        output["InsufficientDataActions"]["member"] !== undefined) {
        const wrappedItem = output["InsufficientDataActions"]["member"] instanceof Array
            ? output["InsufficientDataActions"]["member"]
            : [output["InsufficientDataActions"]["member"]];
        contents.InsufficientDataActions = deserializeAws_queryResourceList(wrappedItem, context);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined &&
        output["Metrics"]["member"] !== undefined) {
        const wrappedItem = output["Metrics"]["member"] instanceof Array
            ? output["Metrics"]["member"]
            : [output["Metrics"]["member"]];
        contents.Metrics = deserializeAws_queryMetricDataQueries(wrappedItem, context);
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output.OKActions === "") {
        contents.OKActions = [];
    }
    if (output["OKActions"] !== undefined &&
        output["OKActions"]["member"] !== undefined) {
        const wrappedItem = output["OKActions"]["member"] instanceof Array
            ? output["OKActions"]["member"]
            : [output["OKActions"]["member"]];
        contents.OKActions = deserializeAws_queryResourceList(wrappedItem, context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["StateReason"] !== undefined) {
        contents.StateReason = output["StateReason"];
    }
    if (output["StateReasonData"] !== undefined) {
        contents.StateReasonData = output["StateReasonData"];
    }
    if (output["StateUpdatedTimestamp"] !== undefined) {
        contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output["Threshold"] !== undefined) {
        contents.Threshold = parseFloat(output["Threshold"]);
    }
    if (output["ThresholdMetricId"] !== undefined) {
        contents.ThresholdMetricId = output["ThresholdMetricId"];
    }
    if (output["TreatMissingData"] !== undefined) {
        contents.TreatMissingData = output["TreatMissingData"];
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
const deserializeAws_queryMetricAlarms = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricAlarm(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricDataQueries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricDataQuery(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricDataQuery = (output, context) => {
    let contents = {
        __type: "MetricDataQuery",
        Expression: undefined,
        Id: undefined,
        Label: undefined,
        MetricStat: undefined,
        Period: undefined,
        ReturnData: undefined
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = output["Expression"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output["MetricStat"] !== undefined) {
        contents.MetricStat = deserializeAws_queryMetricStat(output["MetricStat"], context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["ReturnData"] !== undefined) {
        contents.ReturnData = output["ReturnData"] == "true";
    }
    return contents;
};
const deserializeAws_queryMetricDataResult = (output, context) => {
    let contents = {
        __type: "MetricDataResult",
        Id: undefined,
        Label: undefined,
        Messages: undefined,
        StatusCode: undefined,
        Timestamps: undefined,
        Values: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined &&
        output["Messages"]["member"] !== undefined) {
        const wrappedItem = output["Messages"]["member"] instanceof Array
            ? output["Messages"]["member"]
            : [output["Messages"]["member"]];
        contents.Messages = deserializeAws_queryMetricDataResultMessages(wrappedItem, context);
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output.Timestamps === "") {
        contents.Timestamps = [];
    }
    if (output["Timestamps"] !== undefined &&
        output["Timestamps"]["member"] !== undefined) {
        const wrappedItem = output["Timestamps"]["member"] instanceof Array
            ? output["Timestamps"]["member"]
            : [output["Timestamps"]["member"]];
        contents.Timestamps = deserializeAws_queryTimestamps(wrappedItem, context);
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryDatapointValues(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryMetricDataResultMessages = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMessageData(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricDataResults = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricDataResult(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricStat = (output, context) => {
    let contents = {
        __type: "MetricStat",
        Metric: undefined,
        Period: undefined,
        Stat: undefined,
        Unit: undefined
    };
    if (output["Metric"] !== undefined) {
        contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
const deserializeAws_queryMetrics = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetric(entry, context));
    });
    return contents;
};
const deserializeAws_queryPartialFailure = (output, context) => {
    let contents = {
        __type: "PartialFailure",
        ExceptionType: undefined,
        FailureCode: undefined,
        FailureDescription: undefined,
        FailureResource: undefined
    };
    if (output["ExceptionType"] !== undefined) {
        contents.ExceptionType = output["ExceptionType"];
    }
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    if (output["FailureResource"] !== undefined) {
        contents.FailureResource = output["FailureResource"];
    }
    return contents;
};
const deserializeAws_queryPutAnomalyDetectorOutput = (output, context) => {
    let contents = {
        __type: "PutAnomalyDetectorOutput"
    };
    return contents;
};
const deserializeAws_queryPutDashboardOutput = (output, context) => {
    let contents = {
        __type: "PutDashboardOutput",
        DashboardValidationMessages: undefined
    };
    if (output.DashboardValidationMessages === "") {
        contents.DashboardValidationMessages = [];
    }
    if (output["DashboardValidationMessages"] !== undefined &&
        output["DashboardValidationMessages"]["member"] !== undefined) {
        const wrappedItem = output["DashboardValidationMessages"]["member"] instanceof Array
            ? output["DashboardValidationMessages"]["member"]
            : [output["DashboardValidationMessages"]["member"]];
        contents.DashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPutInsightRuleOutput = (output, context) => {
    let contents = {
        __type: "PutInsightRuleOutput"
    };
    return contents;
};
const deserializeAws_queryRange = (output, context) => {
    let contents = {
        __type: "Range",
        EndTime: undefined,
        StartTime: undefined
    };
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    return contents;
};
const deserializeAws_queryResourceList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryResourceNotFound = (output, context) => {
    let contents = {
        __type: "ResourceNotFound",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_queryTagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_queryTimestamps = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(new Date(entry));
    });
    return contents;
};
const deserializeAws_queryUntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
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
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map