"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
const uuid_1 = require("uuid");
async function serializeAws_queryCancelUpdateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCancelUpdateStackInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CancelUpdateStack", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCancelUpdateStackCommand = serializeAws_queryCancelUpdateStackCommand;
async function serializeAws_queryContinueUpdateRollbackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryContinueUpdateRollbackInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ContinueUpdateRollback", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryContinueUpdateRollbackCommand = serializeAws_queryContinueUpdateRollbackCommand;
async function serializeAws_queryCreateChangeSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateChangeSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateChangeSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateChangeSetCommand = serializeAws_queryCreateChangeSetCommand;
async function serializeAws_queryCreateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateStackInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateStack", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateStackCommand = serializeAws_queryCreateStackCommand;
async function serializeAws_queryDeleteChangeSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteChangeSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteChangeSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteChangeSetCommand = serializeAws_queryDeleteChangeSetCommand;
async function serializeAws_queryDeleteStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteStackInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteStack", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteStackCommand = serializeAws_queryDeleteStackCommand;
async function serializeAws_queryDeregisterTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeregisterTypeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeregisterType", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeregisterTypeCommand = serializeAws_queryDeregisterTypeCommand;
async function serializeAws_queryDescribeAccountLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAccountLimits", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
async function serializeAws_queryDescribeChangeSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeChangeSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeChangeSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeChangeSetCommand = serializeAws_queryDescribeChangeSetCommand;
async function serializeAws_queryDescribeStackDriftDetectionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackDriftDetectionStatusInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackDriftDetectionStatus", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackDriftDetectionStatusCommand = serializeAws_queryDescribeStackDriftDetectionStatusCommand;
async function serializeAws_queryDescribeStackEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackEventsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackEvents", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackEventsCommand = serializeAws_queryDescribeStackEventsCommand;
async function serializeAws_queryDescribeStackResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackResourceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackResource", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackResourceCommand = serializeAws_queryDescribeStackResourceCommand;
async function serializeAws_queryDescribeStackResourceDriftsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackResourceDriftsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackResourceDrifts", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackResourceDriftsCommand = serializeAws_queryDescribeStackResourceDriftsCommand;
async function serializeAws_queryDescribeStackResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackResourcesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackResources", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackResourcesCommand = serializeAws_queryDescribeStackResourcesCommand;
async function serializeAws_queryDescribeStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStacksInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStacks", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStacksCommand = serializeAws_queryDescribeStacksCommand;
async function serializeAws_queryDescribeTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTypeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeType", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTypeCommand = serializeAws_queryDescribeTypeCommand;
async function serializeAws_queryDescribeTypeRegistrationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTypeRegistrationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTypeRegistration", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTypeRegistrationCommand = serializeAws_queryDescribeTypeRegistrationCommand;
async function serializeAws_queryDetectStackDriftCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetectStackDriftInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetectStackDrift", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetectStackDriftCommand = serializeAws_queryDetectStackDriftCommand;
async function serializeAws_queryDetectStackResourceDriftCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetectStackResourceDriftInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetectStackResourceDrift", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetectStackResourceDriftCommand = serializeAws_queryDetectStackResourceDriftCommand;
async function serializeAws_queryEstimateTemplateCostCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEstimateTemplateCostInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EstimateTemplateCost", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEstimateTemplateCostCommand = serializeAws_queryEstimateTemplateCostCommand;
async function serializeAws_queryExecuteChangeSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryExecuteChangeSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ExecuteChangeSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryExecuteChangeSetCommand = serializeAws_queryExecuteChangeSetCommand;
async function serializeAws_queryGetStackPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetStackPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetStackPolicy", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetStackPolicyCommand = serializeAws_queryGetStackPolicyCommand;
async function serializeAws_queryGetTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetTemplateInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetTemplate", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetTemplateCommand = serializeAws_queryGetTemplateCommand;
async function serializeAws_queryGetTemplateSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetTemplateSummaryInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetTemplateSummary", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetTemplateSummaryCommand = serializeAws_queryGetTemplateSummaryCommand;
async function serializeAws_queryListChangeSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListChangeSetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListChangeSets", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListChangeSetsCommand = serializeAws_queryListChangeSetsCommand;
async function serializeAws_queryListExportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListExportsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListExports", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListExportsCommand = serializeAws_queryListExportsCommand;
async function serializeAws_queryListImportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListImportsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListImports", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListImportsCommand = serializeAws_queryListImportsCommand;
async function serializeAws_queryListStackResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStackResourcesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStackResources", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStackResourcesCommand = serializeAws_queryListStackResourcesCommand;
async function serializeAws_queryListStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStacksInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStacks", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStacksCommand = serializeAws_queryListStacksCommand;
async function serializeAws_queryListTypeRegistrationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTypeRegistrationsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTypeRegistrations", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTypeRegistrationsCommand = serializeAws_queryListTypeRegistrationsCommand;
async function serializeAws_queryListTypeVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTypeVersionsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTypeVersions", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTypeVersionsCommand = serializeAws_queryListTypeVersionsCommand;
async function serializeAws_queryListTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTypesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTypes", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTypesCommand = serializeAws_queryListTypesCommand;
async function serializeAws_queryRecordHandlerProgressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRecordHandlerProgressInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RecordHandlerProgress", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRecordHandlerProgressCommand = serializeAws_queryRecordHandlerProgressCommand;
async function serializeAws_queryRegisterTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRegisterTypeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RegisterType", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRegisterTypeCommand = serializeAws_queryRegisterTypeCommand;
async function serializeAws_querySetStackPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetStackPolicyInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetStackPolicy", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetStackPolicyCommand = serializeAws_querySetStackPolicyCommand;
async function serializeAws_querySetTypeDefaultVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetTypeDefaultVersionInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetTypeDefaultVersion", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetTypeDefaultVersionCommand = serializeAws_querySetTypeDefaultVersionCommand;
async function serializeAws_querySignalResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySignalResourceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SignalResource", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySignalResourceCommand = serializeAws_querySignalResourceCommand;
async function serializeAws_queryUpdateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateStackInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateStack", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateStackCommand = serializeAws_queryUpdateStackCommand;
async function serializeAws_queryUpdateTerminationProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateTerminationProtectionInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateTerminationProtection", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateTerminationProtectionCommand = serializeAws_queryUpdateTerminationProtectionCommand;
async function serializeAws_queryValidateTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryValidateTemplateInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ValidateTemplate", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryValidateTemplateCommand = serializeAws_queryValidateTemplateCommand;
async function serializeAws_queryCreateStackInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateStackInstancesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateStackInstances", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateStackInstancesCommand = serializeAws_queryCreateStackInstancesCommand;
async function serializeAws_queryCreateStackSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateStackSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateStackSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateStackSetCommand = serializeAws_queryCreateStackSetCommand;
async function serializeAws_queryDeleteStackInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteStackInstancesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteStackInstances", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteStackInstancesCommand = serializeAws_queryDeleteStackInstancesCommand;
async function serializeAws_queryDeleteStackSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteStackSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteStackSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteStackSetCommand = serializeAws_queryDeleteStackSetCommand;
async function serializeAws_queryDescribeStackInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackInstanceInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackInstance", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackInstanceCommand = serializeAws_queryDescribeStackInstanceCommand;
async function serializeAws_queryDescribeStackSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackSetCommand = serializeAws_queryDescribeStackSetCommand;
async function serializeAws_queryDescribeStackSetOperationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeStackSetOperationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeStackSetOperation", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStackSetOperationCommand = serializeAws_queryDescribeStackSetOperationCommand;
async function serializeAws_queryDetectStackSetDriftCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetectStackSetDriftInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetectStackSetDrift", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetectStackSetDriftCommand = serializeAws_queryDetectStackSetDriftCommand;
async function serializeAws_queryListStackInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStackInstancesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStackInstances", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStackInstancesCommand = serializeAws_queryListStackInstancesCommand;
async function serializeAws_queryListStackSetOperationResultsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStackSetOperationResultsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStackSetOperationResults", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStackSetOperationResultsCommand = serializeAws_queryListStackSetOperationResultsCommand;
async function serializeAws_queryListStackSetOperationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStackSetOperationsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStackSetOperations", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStackSetOperationsCommand = serializeAws_queryListStackSetOperationsCommand;
async function serializeAws_queryListStackSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListStackSetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListStackSets", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListStackSetsCommand = serializeAws_queryListStackSetsCommand;
async function serializeAws_queryStopStackSetOperationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStopStackSetOperationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StopStackSetOperation", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStopStackSetOperationCommand = serializeAws_queryStopStackSetOperationCommand;
async function serializeAws_queryUpdateStackInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateStackInstancesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateStackInstances", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateStackInstancesCommand = serializeAws_queryUpdateStackInstancesCommand;
async function serializeAws_queryUpdateStackSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateStackSetInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateStackSet", Version: "2010-05-15" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateStackSetCommand = serializeAws_queryUpdateStackSetCommand;
async function deserializeAws_queryCancelUpdateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCancelUpdateStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCancelUpdateStackCommand = deserializeAws_queryCancelUpdateStackCommand;
async function deserializeAws_queryCancelUpdateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryContinueUpdateRollbackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryContinueUpdateRollbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryContinueUpdateRollbackOutput(data.ContinueUpdateRollbackResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ContinueUpdateRollbackOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryContinueUpdateRollbackCommand = deserializeAws_queryContinueUpdateRollbackCommand;
async function deserializeAws_queryContinueUpdateRollbackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateChangeSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateChangeSetOutput(data.CreateChangeSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateChangeSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateChangeSetCommand = deserializeAws_queryCreateChangeSetCommand;
async function deserializeAws_queryCreateChangeSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "amzn.aws21.activities#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCapabilitiesException":
        case "amzn.aws21.activities#InsufficientCapabilitiesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "amzn.aws21.activities#LimitExceededException":
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
async function deserializeAws_queryCreateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateStackOutput(data.CreateStackResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStackOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateStackCommand = deserializeAws_queryCreateStackCommand;
async function deserializeAws_queryCreateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "amzn.aws21.activities#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCapabilitiesException":
        case "amzn.aws21.activities#InsufficientCapabilitiesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "amzn.aws21.activities#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteChangeSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteChangeSetOutput(data.DeleteChangeSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteChangeSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteChangeSetCommand = deserializeAws_queryDeleteChangeSetCommand;
async function deserializeAws_queryDeleteChangeSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidChangeSetStatusException":
        case "amzn.aws21.activities#InvalidChangeSetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteStackCommand = deserializeAws_queryDeleteStackCommand;
async function deserializeAws_queryDeleteStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeregisterTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeregisterTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterTypeOutput(data.DeregisterTypeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeregisterTypeCommand = deserializeAws_queryDeregisterTypeCommand;
async function deserializeAws_queryDeregisterTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeNotFoundException":
        case "amzn.aws21.activities#TypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAccountLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountLimitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAccountLimitsCommand = deserializeAws_queryDescribeAccountLimitsCommand;
async function deserializeAws_queryDescribeAccountLimitsCommandError(output, context) {
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
async function deserializeAws_queryDescribeChangeSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeChangeSetOutput(data.DescribeChangeSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeChangeSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeChangeSetCommand = deserializeAws_queryDescribeChangeSetCommand;
async function deserializeAws_queryDescribeChangeSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ChangeSetNotFoundException":
        case "amzn.aws21.activities#ChangeSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeStackDriftDetectionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackDriftDetectionStatusOutput(data.DescribeStackDriftDetectionStatusResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackDriftDetectionStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackDriftDetectionStatusCommand = deserializeAws_queryDescribeStackDriftDetectionStatusCommand;
async function deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(output, context) {
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
async function deserializeAws_queryDescribeStackEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackEventsOutput(data.DescribeStackEventsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackEventsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackEventsCommand = deserializeAws_queryDescribeStackEventsCommand;
async function deserializeAws_queryDescribeStackEventsCommandError(output, context) {
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
async function deserializeAws_queryDescribeStackResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackResourceOutput(data.DescribeStackResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackResourceCommand = deserializeAws_queryDescribeStackResourceCommand;
async function deserializeAws_queryDescribeStackResourceCommandError(output, context) {
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
async function deserializeAws_queryDescribeStackResourceDriftsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackResourceDriftsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackResourceDriftsOutput(data.DescribeStackResourceDriftsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackResourceDriftsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackResourceDriftsCommand = deserializeAws_queryDescribeStackResourceDriftsCommand;
async function deserializeAws_queryDescribeStackResourceDriftsCommandError(output, context) {
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
async function deserializeAws_queryDescribeStackResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackResourcesOutput(data.DescribeStackResourcesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackResourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackResourcesCommand = deserializeAws_queryDescribeStackResourcesCommand;
async function deserializeAws_queryDescribeStackResourcesCommandError(output, context) {
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
async function deserializeAws_queryDescribeStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStacksOutput(data.DescribeStacksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStacksOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStacksCommand = deserializeAws_queryDescribeStacksCommand;
async function deserializeAws_queryDescribeStacksCommandError(output, context) {
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
async function deserializeAws_queryDescribeTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTypeOutput(data.DescribeTypeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTypeCommand = deserializeAws_queryDescribeTypeCommand;
async function deserializeAws_queryDescribeTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeNotFoundException":
        case "amzn.aws21.activities#TypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeTypeRegistrationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTypeRegistrationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTypeRegistrationOutput(data.DescribeTypeRegistrationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTypeRegistrationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTypeRegistrationCommand = deserializeAws_queryDescribeTypeRegistrationCommand;
async function deserializeAws_queryDescribeTypeRegistrationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetectStackDriftCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetectStackDriftCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetectStackDriftOutput(data.DetectStackDriftResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectStackDriftOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetectStackDriftCommand = deserializeAws_queryDetectStackDriftCommand;
async function deserializeAws_queryDetectStackDriftCommandError(output, context) {
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
async function deserializeAws_queryDetectStackResourceDriftCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetectStackResourceDriftCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetectStackResourceDriftOutput(data.DetectStackResourceDriftResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectStackResourceDriftOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetectStackResourceDriftCommand = deserializeAws_queryDetectStackResourceDriftCommand;
async function deserializeAws_queryDetectStackResourceDriftCommandError(output, context) {
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
async function deserializeAws_queryEstimateTemplateCostCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEstimateTemplateCostCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEstimateTemplateCostOutput(data.EstimateTemplateCostResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EstimateTemplateCostOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEstimateTemplateCostCommand = deserializeAws_queryEstimateTemplateCostCommand;
async function deserializeAws_queryEstimateTemplateCostCommandError(output, context) {
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
async function deserializeAws_queryExecuteChangeSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryExecuteChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryExecuteChangeSetOutput(data.ExecuteChangeSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExecuteChangeSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryExecuteChangeSetCommand = deserializeAws_queryExecuteChangeSetCommand;
async function deserializeAws_queryExecuteChangeSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ChangeSetNotFoundException":
        case "amzn.aws21.activities#ChangeSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCapabilitiesException":
        case "amzn.aws21.activities#InsufficientCapabilitiesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidChangeSetStatusException":
        case "amzn.aws21.activities#InvalidChangeSetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetStackPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetStackPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetStackPolicyOutput(data.GetStackPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetStackPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetStackPolicyCommand = deserializeAws_queryGetStackPolicyCommand;
async function deserializeAws_queryGetStackPolicyCommandError(output, context) {
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
async function deserializeAws_queryGetTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTemplateOutput(data.GetTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetTemplateCommand = deserializeAws_queryGetTemplateCommand;
async function deserializeAws_queryGetTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ChangeSetNotFoundException":
        case "amzn.aws21.activities#ChangeSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetTemplateSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetTemplateSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTemplateSummaryOutput(data.GetTemplateSummaryResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTemplateSummaryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetTemplateSummaryCommand = deserializeAws_queryGetTemplateSummaryCommand;
async function deserializeAws_queryGetTemplateSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListChangeSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListChangeSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListChangeSetsOutput(data.ListChangeSetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListChangeSetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListChangeSetsCommand = deserializeAws_queryListChangeSetsCommand;
async function deserializeAws_queryListChangeSetsCommandError(output, context) {
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
async function deserializeAws_queryListExportsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListExportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListExportsOutput(data.ListExportsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListExportsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListExportsCommand = deserializeAws_queryListExportsCommand;
async function deserializeAws_queryListExportsCommandError(output, context) {
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
async function deserializeAws_queryListImportsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListImportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListImportsOutput(data.ListImportsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListImportsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListImportsCommand = deserializeAws_queryListImportsCommand;
async function deserializeAws_queryListImportsCommandError(output, context) {
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
async function deserializeAws_queryListStackResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStackResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStackResourcesOutput(data.ListStackResourcesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackResourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStackResourcesCommand = deserializeAws_queryListStackResourcesCommand;
async function deserializeAws_queryListStackResourcesCommandError(output, context) {
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
async function deserializeAws_queryListStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStacksOutput(data.ListStacksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStacksOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStacksCommand = deserializeAws_queryListStacksCommand;
async function deserializeAws_queryListStacksCommandError(output, context) {
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
async function deserializeAws_queryListTypeRegistrationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTypeRegistrationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTypeRegistrationsOutput(data.ListTypeRegistrationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTypeRegistrationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTypeRegistrationsCommand = deserializeAws_queryListTypeRegistrationsCommand;
async function deserializeAws_queryListTypeRegistrationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListTypeVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTypeVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTypeVersionsOutput(data.ListTypeVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTypeVersionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTypeVersionsCommand = deserializeAws_queryListTypeVersionsCommand;
async function deserializeAws_queryListTypeVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTypesOutput(data.ListTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTypesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTypesCommand = deserializeAws_queryListTypesCommand;
async function deserializeAws_queryListTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRecordHandlerProgressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRecordHandlerProgressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRecordHandlerProgressOutput(data.RecordHandlerProgressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RecordHandlerProgressOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRecordHandlerProgressCommand = deserializeAws_queryRecordHandlerProgressCommand;
async function deserializeAws_queryRecordHandlerProgressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateTransitionException":
        case "amzn.aws21.activities#InvalidStateTransitionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidStateTransitionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationStatusCheckFailedException":
        case "amzn.aws21.activities#OperationStatusCheckFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationStatusCheckFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRegisterTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRegisterTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterTypeOutput(data.RegisterTypeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRegisterTypeCommand = deserializeAws_queryRegisterTypeCommand;
async function deserializeAws_queryRegisterTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetStackPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetStackPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetStackPolicyCommand = deserializeAws_querySetStackPolicyCommand;
async function deserializeAws_querySetStackPolicyCommandError(output, context) {
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
async function deserializeAws_querySetTypeDefaultVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetTypeDefaultVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetTypeDefaultVersionOutput(data.SetTypeDefaultVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetTypeDefaultVersionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetTypeDefaultVersionCommand = deserializeAws_querySetTypeDefaultVersionCommand;
async function deserializeAws_querySetTypeDefaultVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CFNRegistryException":
        case "amzn.aws21.activities#CFNRegistryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeNotFoundException":
        case "amzn.aws21.activities#TypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySignalResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySignalResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySignalResourceCommand = deserializeAws_querySignalResourceCommand;
async function deserializeAws_querySignalResourceCommandError(output, context) {
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
async function deserializeAws_queryUpdateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateStackOutput(data.UpdateStackResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateStackOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateStackCommand = deserializeAws_queryUpdateStackCommand;
async function deserializeAws_queryUpdateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapabilitiesException":
        case "amzn.aws21.activities#InsufficientCapabilitiesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TokenAlreadyExistsException":
        case "amzn.aws21.activities#TokenAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateTerminationProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateTerminationProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateTerminationProtectionOutput(data.UpdateTerminationProtectionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTerminationProtectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateTerminationProtectionCommand = deserializeAws_queryUpdateTerminationProtectionCommand;
async function deserializeAws_queryUpdateTerminationProtectionCommandError(output, context) {
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
async function deserializeAws_queryValidateTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryValidateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryValidateTemplateOutput(data.ValidateTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ValidateTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryValidateTemplateCommand = deserializeAws_queryValidateTemplateCommand;
async function deserializeAws_queryValidateTemplateCommandError(output, context) {
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
async function deserializeAws_queryCreateStackInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateStackInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateStackInstancesOutput(data.CreateStackInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStackInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateStackInstancesCommand = deserializeAws_queryCreateStackInstancesCommand;
async function deserializeAws_queryCreateStackInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "amzn.aws21.activities#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationIdAlreadyExistsException":
        case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleRequestException":
        case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateStackSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateStackSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateStackSetOutput(data.CreateStackSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStackSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateStackSetCommand = deserializeAws_queryCreateStackSetCommand;
async function deserializeAws_queryCreateStackSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "amzn.aws21.activities#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreatedButModifiedException":
        case "com.amazonaws.maestro.service.v20160713#CreatedButModifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCreatedButModifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameAlreadyExistsException":
        case "com.amazonaws.maestro.service.v20160713#NameAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNameAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteStackInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteStackInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteStackInstancesOutput(data.DeleteStackInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteStackInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteStackInstancesCommand = deserializeAws_queryDeleteStackInstancesCommand;
async function deserializeAws_queryDeleteStackInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationIdAlreadyExistsException":
        case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleRequestException":
        case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteStackSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteStackSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteStackSetOutput(data.DeleteStackSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteStackSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteStackSetCommand = deserializeAws_queryDeleteStackSetCommand;
async function deserializeAws_queryDeleteStackSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StackSetNotEmptyException":
        case "com.amazonaws.maestro.service.v20160713#StackSetNotEmptyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotEmptyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeStackInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackInstanceOutput(data.DescribeStackInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackInstanceCommand = deserializeAws_queryDescribeStackInstanceCommand;
async function deserializeAws_queryDescribeStackInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StackInstanceNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeStackSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackSetOutput(data.DescribeStackSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackSetCommand = deserializeAws_queryDescribeStackSetCommand;
async function deserializeAws_queryDescribeStackSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeStackSetOperationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStackSetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeStackSetOperationOutput(data.DescribeStackSetOperationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackSetOperationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStackSetOperationCommand = deserializeAws_queryDescribeStackSetOperationCommand;
async function deserializeAws_queryDescribeStackSetOperationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetectStackSetDriftCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetectStackSetDriftCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetectStackSetDriftOutput(data.DetectStackSetDriftResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectStackSetDriftOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetectStackSetDriftCommand = deserializeAws_queryDetectStackSetDriftCommand;
async function deserializeAws_queryDetectStackSetDriftCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListStackInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStackInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStackInstancesOutput(data.ListStackInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStackInstancesCommand = deserializeAws_queryListStackInstancesCommand;
async function deserializeAws_queryListStackInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListStackSetOperationResultsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStackSetOperationResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStackSetOperationResultsOutput(data.ListStackSetOperationResultsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackSetOperationResultsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStackSetOperationResultsCommand = deserializeAws_queryListStackSetOperationResultsCommand;
async function deserializeAws_queryListStackSetOperationResultsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListStackSetOperationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStackSetOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStackSetOperationsOutput(data.ListStackSetOperationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackSetOperationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStackSetOperationsCommand = deserializeAws_queryListStackSetOperationsCommand;
async function deserializeAws_queryListStackSetOperationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListStackSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListStackSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListStackSetsOutput(data.ListStackSetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackSetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListStackSetsCommand = deserializeAws_queryListStackSetsCommand;
async function deserializeAws_queryListStackSetsCommandError(output, context) {
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
async function deserializeAws_queryStopStackSetOperationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStopStackSetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopStackSetOperationOutput(data.StopStackSetOperationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopStackSetOperationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStopStackSetOperationCommand = deserializeAws_queryStopStackSetOperationCommand;
async function deserializeAws_queryStopStackSetOperationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#OperationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateStackInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateStackInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateStackInstancesOutput(data.UpdateStackInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateStackInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateStackInstancesCommand = deserializeAws_queryUpdateStackInstancesCommand;
async function deserializeAws_queryUpdateStackInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationIdAlreadyExistsException":
        case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StackInstanceNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleRequestException":
        case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateStackSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateStackSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateStackSetOutput(data.UpdateStackSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateStackSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateStackSetCommand = deserializeAws_queryUpdateStackSetCommand;
async function deserializeAws_queryUpdateStackSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "StackSetNotFoundException":
        case "amzn.aws21.activities#StackSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.maestro.service.v20160713#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationIdAlreadyExistsException":
        case "com.amazonaws.maestro.service.v20160713#OperationIdAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.maestro.service.v20160713#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StackInstanceNotFoundException":
        case "com.amazonaws.maestro.service.v20160713#StackInstanceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleRequestException":
        case "com.amazonaws.maestro.service.v20160713#StaleRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCFNRegistryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCFNRegistryException(body.Error, context);
    const contents = Object.assign({ name: "CFNRegistryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryChangeSetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryChangeSetNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ChangeSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientCapabilitiesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientCapabilitiesException(body.Error, context);
    const contents = Object.assign({ name: "InsufficientCapabilitiesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidChangeSetStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidChangeSetStatusException(body.Error, context);
    const contents = Object.assign({ name: "InvalidChangeSetStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidStateTransitionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidStateTransitionException(body.Error, context);
    const contents = Object.assign({ name: "InvalidStateTransitionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationStatusCheckFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationStatusCheckFailedException(body.Error, context);
    const contents = Object.assign({ name: "OperationStatusCheckFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStackSetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStackSetNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "StackSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTokenAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTokenAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "TokenAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTypeNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "TypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCreatedButModifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCreatedButModifiedException(body.Error, context);
    const contents = Object.assign({ name: "CreatedButModifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidOperationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNameAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "NameAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationIdAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationIdAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "OperationIdAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
    const contents = Object.assign({ name: "OperationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "OperationNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStackInstanceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStackInstanceNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "StackInstanceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStackSetNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStackSetNotEmptyException(body.Error, context);
    const contents = Object.assign({ name: "StackSetNotEmptyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStaleRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStaleRequestException(body.Error, context);
    const contents = Object.assign({ name: "StaleRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryCancelUpdateStackInput = (input, context) => {
    const entries = {};
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryCapabilities = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryContinueUpdateRollbackInput = (input, context) => {
    const entries = {};
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.ResourcesToSkip !== undefined) {
        const memberEntries = serializeAws_queryResourcesToSkip(input.ResourcesToSkip, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourcesToSkip.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryCreateChangeSetInput = (input, context) => {
    const entries = {};
    if (input.Capabilities !== undefined) {
        const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Capabilities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ChangeSetName !== undefined) {
        entries["ChangeSetName"] = input.ChangeSetName;
    }
    if (input.ChangeSetType !== undefined) {
        entries["ChangeSetType"] = input.ChangeSetType;
    }
    if (input.ClientToken !== undefined) {
        entries["ClientToken"] = input.ClientToken;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.NotificationARNs !== undefined) {
        const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NotificationARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceTypes !== undefined) {
        const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourcesToImport !== undefined) {
        const memberEntries = serializeAws_queryResourcesToImport(input.ResourcesToImport, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourcesToImport.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    if (input.RollbackConfiguration !== undefined) {
        const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RollbackConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    if (input.UsePreviousTemplate !== undefined) {
        entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
    }
    return entries;
};
const serializeAws_queryCreateStackInput = (input, context) => {
    const entries = {};
    if (input.Capabilities !== undefined) {
        const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Capabilities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DisableRollback !== undefined) {
        entries["DisableRollback"] = input.DisableRollback;
    }
    if (input.EnableTerminationProtection !== undefined) {
        entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
    }
    if (input.NotificationARNs !== undefined) {
        const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NotificationARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OnFailure !== undefined) {
        entries["OnFailure"] = input.OnFailure;
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceTypes !== undefined) {
        const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    if (input.RollbackConfiguration !== undefined) {
        const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RollbackConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.StackPolicyBody !== undefined) {
        entries["StackPolicyBody"] = input.StackPolicyBody;
    }
    if (input.StackPolicyURL !== undefined) {
        entries["StackPolicyURL"] = input.StackPolicyURL;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    if (input.TimeoutInMinutes !== undefined) {
        entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
    }
    return entries;
};
const serializeAws_queryDeleteChangeSetInput = (input, context) => {
    const entries = {};
    if (input.ChangeSetName !== undefined) {
        entries["ChangeSetName"] = input.ChangeSetName;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDeleteStackInput = (input, context) => {
    const entries = {};
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.RetainResources !== undefined) {
        const memberEntries = serializeAws_queryRetainResources(input.RetainResources, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RetainResources.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDeregisterTypeInput = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryDescribeAccountLimitsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeChangeSetInput = (input, context) => {
    const entries = {};
    if (input.ChangeSetName !== undefined) {
        entries["ChangeSetName"] = input.ChangeSetName;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDescribeStackDriftDetectionStatusInput = (input, context) => {
    const entries = {};
    if (input.StackDriftDetectionId !== undefined) {
        entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
    }
    return entries;
};
const serializeAws_queryDescribeStackEventsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDescribeStackResourceDriftsInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.StackResourceDriftStatusFilters !== undefined) {
        const memberEntries = serializeAws_queryStackResourceDriftStatusFilters(input.StackResourceDriftStatusFilters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StackResourceDriftStatusFilters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeStackResourceInput = (input, context) => {
    const entries = {};
    if (input.LogicalResourceId !== undefined) {
        entries["LogicalResourceId"] = input.LogicalResourceId;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDescribeStackResourcesInput = (input, context) => {
    const entries = {};
    if (input.LogicalResourceId !== undefined) {
        entries["LogicalResourceId"] = input.LogicalResourceId;
    }
    if (input.PhysicalResourceId !== undefined) {
        entries["PhysicalResourceId"] = input.PhysicalResourceId;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDescribeStacksInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDescribeTypeInput = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryDescribeTypeRegistrationInput = (input, context) => {
    const entries = {};
    if (input.RegistrationToken !== undefined) {
        entries["RegistrationToken"] = input.RegistrationToken;
    }
    return entries;
};
const serializeAws_queryDetectStackDriftInput = (input, context) => {
    const entries = {};
    if (input.LogicalResourceIds !== undefined) {
        const memberEntries = serializeAws_queryLogicalResourceIds(input.LogicalResourceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LogicalResourceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryDetectStackResourceDriftInput = (input, context) => {
    const entries = {};
    if (input.LogicalResourceId !== undefined) {
        entries["LogicalResourceId"] = input.LogicalResourceId;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryEstimateTemplateCostInput = (input, context) => {
    const entries = {};
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    return entries;
};
const serializeAws_queryExecuteChangeSetInput = (input, context) => {
    const entries = {};
    if (input.ChangeSetName !== undefined) {
        entries["ChangeSetName"] = input.ChangeSetName;
    }
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryGetStackPolicyInput = (input, context) => {
    const entries = {};
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryGetTemplateInput = (input, context) => {
    const entries = {};
    if (input.ChangeSetName !== undefined) {
        entries["ChangeSetName"] = input.ChangeSetName;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.TemplateStage !== undefined) {
        entries["TemplateStage"] = input.TemplateStage;
    }
    return entries;
};
const serializeAws_queryGetTemplateSummaryInput = (input, context) => {
    const entries = {};
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    return entries;
};
const serializeAws_queryListChangeSetsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryListExportsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListImportsInput = (input, context) => {
    const entries = {};
    if (input.ExportName !== undefined) {
        entries["ExportName"] = input.ExportName;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListStackResourcesInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryListStacksInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackStatusFilter !== undefined) {
        const memberEntries = serializeAws_queryStackStatusFilter(input.StackStatusFilter, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StackStatusFilter.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryListTypeRegistrationsInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.RegistrationStatusFilter !== undefined) {
        entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeArn !== undefined) {
        entries["TypeArn"] = input.TypeArn;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    return entries;
};
const serializeAws_queryListTypeVersionsInput = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.DeprecatedStatus !== undefined) {
        entries["DeprecatedStatus"] = input.DeprecatedStatus;
    }
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    return entries;
};
const serializeAws_queryListTypesInput = (input, context) => {
    const entries = {};
    if (input.DeprecatedStatus !== undefined) {
        entries["DeprecatedStatus"] = input.DeprecatedStatus;
    }
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ProvisioningType !== undefined) {
        entries["ProvisioningType"] = input.ProvisioningType;
    }
    if (input.Visibility !== undefined) {
        entries["Visibility"] = input.Visibility;
    }
    return entries;
};
const serializeAws_queryLoggingConfig = (input, context) => {
    const entries = {};
    if (input.LogGroupName !== undefined) {
        entries["LogGroupName"] = input.LogGroupName;
    }
    if (input.LogRoleArn !== undefined) {
        entries["LogRoleArn"] = input.LogRoleArn;
    }
    return entries;
};
const serializeAws_queryLogicalResourceIds = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryNotificationARNs = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryParameter = (input, context) => {
    const entries = {};
    if (input.ParameterKey !== undefined) {
        entries["ParameterKey"] = input.ParameterKey;
    }
    if (input.ParameterValue !== undefined) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    if (input.ResolvedValue !== undefined) {
        entries["ResolvedValue"] = input.ResolvedValue;
    }
    if (input.UsePreviousValue !== undefined) {
        entries["UsePreviousValue"] = input.UsePreviousValue;
    }
    return entries;
};
const serializeAws_queryParameters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryParameter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRecordHandlerProgressInput = (input, context) => {
    const entries = {};
    if (input.BearerToken !== undefined) {
        entries["BearerToken"] = input.BearerToken;
    }
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.CurrentOperationStatus !== undefined) {
        entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
    }
    if (input.ErrorCode !== undefined) {
        entries["ErrorCode"] = input.ErrorCode;
    }
    if (input.OperationStatus !== undefined) {
        entries["OperationStatus"] = input.OperationStatus;
    }
    if (input.ResourceModel !== undefined) {
        entries["ResourceModel"] = input.ResourceModel;
    }
    if (input.StatusMessage !== undefined) {
        entries["StatusMessage"] = input.StatusMessage;
    }
    return entries;
};
const serializeAws_queryRegisterTypeInput = (input, context) => {
    const entries = {};
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.ExecutionRoleArn !== undefined) {
        entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
    }
    if (input.LoggingConfig !== undefined) {
        const memberEntries = serializeAws_queryLoggingConfig(input.LoggingConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoggingConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SchemaHandlerPackage !== undefined) {
        entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    return entries;
};
const serializeAws_queryResourceIdentifierProperties = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryResourceToImport = (input, context) => {
    const entries = {};
    if (input.LogicalResourceId !== undefined) {
        entries["LogicalResourceId"] = input.LogicalResourceId;
    }
    if (input.ResourceIdentifier !== undefined) {
        const memberEntries = serializeAws_queryResourceIdentifierProperties(input.ResourceIdentifier, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceIdentifier.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceType !== undefined) {
        entries["ResourceType"] = input.ResourceType;
    }
    return entries;
};
const serializeAws_queryResourceTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryResourcesToImport = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryResourceToImport(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryResourcesToSkip = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRetainResources = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRollbackConfiguration = (input, context) => {
    const entries = {};
    if (input.MonitoringTimeInMinutes !== undefined) {
        entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
    }
    if (input.RollbackTriggers !== undefined) {
        const memberEntries = serializeAws_queryRollbackTriggers(input.RollbackTriggers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RollbackTriggers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRollbackTrigger = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    return entries;
};
const serializeAws_queryRollbackTriggers = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryRollbackTrigger(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySetStackPolicyInput = (input, context) => {
    const entries = {};
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.StackPolicyBody !== undefined) {
        entries["StackPolicyBody"] = input.StackPolicyBody;
    }
    if (input.StackPolicyURL !== undefined) {
        entries["StackPolicyURL"] = input.StackPolicyURL;
    }
    return entries;
};
const serializeAws_querySetTypeDefaultVersionInput = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    if (input.TypeName !== undefined) {
        entries["TypeName"] = input.TypeName;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_querySignalResourceInput = (input, context) => {
    const entries = {};
    if (input.LogicalResourceId !== undefined) {
        entries["LogicalResourceId"] = input.LogicalResourceId;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    if (input.UniqueId !== undefined) {
        entries["UniqueId"] = input.UniqueId;
    }
    return entries;
};
const serializeAws_queryStackResourceDriftStatusFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStackStatusFilter = (input, context) => {
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
const serializeAws_queryTags = (input, context) => {
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
const serializeAws_queryUpdateStackInput = (input, context) => {
    const entries = {};
    if (input.Capabilities !== undefined) {
        const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Capabilities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.NotificationARNs !== undefined) {
        const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NotificationARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceTypes !== undefined) {
        const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    if (input.RollbackConfiguration !== undefined) {
        const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RollbackConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    if (input.StackPolicyBody !== undefined) {
        entries["StackPolicyBody"] = input.StackPolicyBody;
    }
    if (input.StackPolicyDuringUpdateBody !== undefined) {
        entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
    }
    if (input.StackPolicyDuringUpdateURL !== undefined) {
        entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
    }
    if (input.StackPolicyURL !== undefined) {
        entries["StackPolicyURL"] = input.StackPolicyURL;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    if (input.UsePreviousTemplate !== undefined) {
        entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
    }
    return entries;
};
const serializeAws_queryUpdateTerminationProtectionInput = (input, context) => {
    const entries = {};
    if (input.EnableTerminationProtection !== undefined) {
        entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
    }
    if (input.StackName !== undefined) {
        entries["StackName"] = input.StackName;
    }
    return entries;
};
const serializeAws_queryValidateTemplateInput = (input, context) => {
    const entries = {};
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    return entries;
};
const serializeAws_queryAccountList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateStackInstancesInput = (input, context) => {
    const entries = {};
    if (input.Accounts !== undefined) {
        const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Accounts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OperationId === undefined) {
        input.OperationId = uuid_1.v4();
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.OperationPreferences !== undefined) {
        const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OperationPreferences.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ParameterOverrides !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ParameterOverrides.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Regions !== undefined) {
        const memberEntries = serializeAws_queryRegionList(input.Regions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Regions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryCreateStackSetInput = (input, context) => {
    const entries = {};
    if (input.AdministrationRoleARN !== undefined) {
        entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
    }
    if (input.Capabilities !== undefined) {
        const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Capabilities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        entries["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.ExecutionRoleName !== undefined) {
        entries["ExecutionRoleName"] = input.ExecutionRoleName;
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    return entries;
};
const serializeAws_queryDeleteStackInstancesInput = (input, context) => {
    const entries = {};
    if (input.Accounts !== undefined) {
        const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Accounts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OperationId === undefined) {
        input.OperationId = uuid_1.v4();
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.OperationPreferences !== undefined) {
        const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OperationPreferences.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Regions !== undefined) {
        const memberEntries = serializeAws_queryRegionList(input.Regions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Regions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RetainStacks !== undefined) {
        entries["RetainStacks"] = input.RetainStacks;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryDeleteStackSetInput = (input, context) => {
    const entries = {};
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryDescribeStackInstanceInput = (input, context) => {
    const entries = {};
    if (input.StackInstanceAccount !== undefined) {
        entries["StackInstanceAccount"] = input.StackInstanceAccount;
    }
    if (input.StackInstanceRegion !== undefined) {
        entries["StackInstanceRegion"] = input.StackInstanceRegion;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryDescribeStackSetInput = (input, context) => {
    const entries = {};
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryDescribeStackSetOperationInput = (input, context) => {
    const entries = {};
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryDetectStackSetDriftInput = (input, context) => {
    const entries = {};
    if (input.OperationId === undefined) {
        input.OperationId = uuid_1.v4();
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.OperationPreferences !== undefined) {
        const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OperationPreferences.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryListStackInstancesInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackInstanceAccount !== undefined) {
        entries["StackInstanceAccount"] = input.StackInstanceAccount;
    }
    if (input.StackInstanceRegion !== undefined) {
        entries["StackInstanceRegion"] = input.StackInstanceRegion;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryListStackSetOperationResultsInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryListStackSetOperationsInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryListStackSetsInput = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    return entries;
};
const serializeAws_queryRegionList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStackSetOperationPreferences = (input, context) => {
    const entries = {};
    if (input.FailureToleranceCount !== undefined) {
        entries["FailureToleranceCount"] = input.FailureToleranceCount;
    }
    if (input.FailureTolerancePercentage !== undefined) {
        entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
    }
    if (input.MaxConcurrentCount !== undefined) {
        entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
    }
    if (input.MaxConcurrentPercentage !== undefined) {
        entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
    }
    if (input.RegionOrder !== undefined) {
        const memberEntries = serializeAws_queryRegionList(input.RegionOrder, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RegionOrder.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryStopStackSetOperationInput = (input, context) => {
    const entries = {};
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryUpdateStackInstancesInput = (input, context) => {
    const entries = {};
    if (input.Accounts !== undefined) {
        const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Accounts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OperationId === undefined) {
        input.OperationId = uuid_1.v4();
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.OperationPreferences !== undefined) {
        const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OperationPreferences.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ParameterOverrides !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ParameterOverrides.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Regions !== undefined) {
        const memberEntries = serializeAws_queryRegionList(input.Regions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Regions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    return entries;
};
const serializeAws_queryUpdateStackSetInput = (input, context) => {
    const entries = {};
    if (input.Accounts !== undefined) {
        const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Accounts.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AdministrationRoleARN !== undefined) {
        entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
    }
    if (input.Capabilities !== undefined) {
        const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Capabilities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.ExecutionRoleName !== undefined) {
        entries["ExecutionRoleName"] = input.ExecutionRoleName;
    }
    if (input.OperationId === undefined) {
        input.OperationId = uuid_1.v4();
    }
    if (input.OperationId !== undefined) {
        entries["OperationId"] = input.OperationId;
    }
    if (input.OperationPreferences !== undefined) {
        const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OperationPreferences.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParameters(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Regions !== undefined) {
        const memberEntries = serializeAws_queryRegionList(input.Regions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Regions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StackSetName !== undefined) {
        entries["StackSetName"] = input.StackSetName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TemplateBody !== undefined) {
        entries["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateURL !== undefined) {
        entries["TemplateURL"] = input.TemplateURL;
    }
    if (input.UsePreviousTemplate !== undefined) {
        entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
    }
    return entries;
};
const deserializeAws_queryAccountLimit = (output, context) => {
    let contents = {
        __type: "AccountLimit",
        Name: undefined,
        Value: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_queryAccountLimitList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccountLimit(entry, context));
    });
    return contents;
};
const deserializeAws_queryAllowedValues = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryCFNRegistryException = (output, context) => {
    let contents = {
        __type: "CFNRegistryException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryCapabilities = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryChange = (output, context) => {
    let contents = {
        __type: "Change",
        ResourceChange: undefined,
        Type: undefined
    };
    if (output["ResourceChange"] !== undefined) {
        contents.ResourceChange = deserializeAws_queryResourceChange(output["ResourceChange"], context);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_queryChangeSetNotFoundException = (output, context) => {
    let contents = {
        __type: "ChangeSetNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryChangeSetSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryChangeSetSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryChangeSetSummary = (output, context) => {
    let contents = {
        __type: "ChangeSetSummary",
        ChangeSetId: undefined,
        ChangeSetName: undefined,
        CreationTime: undefined,
        Description: undefined,
        ExecutionStatus: undefined,
        StackId: undefined,
        StackName: undefined,
        Status: undefined,
        StatusReason: undefined
    };
    if (output["ChangeSetId"] !== undefined) {
        contents.ChangeSetId = output["ChangeSetId"];
    }
    if (output["ChangeSetName"] !== undefined) {
        contents.ChangeSetName = output["ChangeSetName"];
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ExecutionStatus"] !== undefined) {
        contents.ExecutionStatus = output["ExecutionStatus"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    return contents;
};
const deserializeAws_queryChanges = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryChange(entry, context));
    });
    return contents;
};
const deserializeAws_queryContinueUpdateRollbackOutput = (output, context) => {
    let contents = {
        __type: "ContinueUpdateRollbackOutput"
    };
    return contents;
};
const deserializeAws_queryCreateChangeSetOutput = (output, context) => {
    let contents = {
        __type: "CreateChangeSetOutput",
        Id: undefined,
        StackId: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    return contents;
};
const deserializeAws_queryCreateStackOutput = (output, context) => {
    let contents = {
        __type: "CreateStackOutput",
        StackId: undefined
    };
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    return contents;
};
const deserializeAws_queryDeleteChangeSetOutput = (output, context) => {
    let contents = {
        __type: "DeleteChangeSetOutput"
    };
    return contents;
};
const deserializeAws_queryDeregisterTypeOutput = (output, context) => {
    let contents = {
        __type: "DeregisterTypeOutput"
    };
    return contents;
};
const deserializeAws_queryDescribeAccountLimitsOutput = (output, context) => {
    let contents = {
        __type: "DescribeAccountLimitsOutput",
        AccountLimits: undefined,
        NextToken: undefined
    };
    if (output.AccountLimits === "") {
        contents.AccountLimits = [];
    }
    if (output["AccountLimits"] !== undefined &&
        output["AccountLimits"]["member"] !== undefined) {
        const wrappedItem = output["AccountLimits"]["member"] instanceof Array
            ? output["AccountLimits"]["member"]
            : [output["AccountLimits"]["member"]];
        contents.AccountLimits = deserializeAws_queryAccountLimitList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeChangeSetOutput = (output, context) => {
    let contents = {
        __type: "DescribeChangeSetOutput",
        Capabilities: undefined,
        ChangeSetId: undefined,
        ChangeSetName: undefined,
        Changes: undefined,
        CreationTime: undefined,
        Description: undefined,
        ExecutionStatus: undefined,
        NextToken: undefined,
        NotificationARNs: undefined,
        Parameters: undefined,
        RollbackConfiguration: undefined,
        StackId: undefined,
        StackName: undefined,
        Status: undefined,
        StatusReason: undefined,
        Tags: undefined
    };
    if (output.Capabilities === "") {
        contents.Capabilities = [];
    }
    if (output["Capabilities"] !== undefined &&
        output["Capabilities"]["member"] !== undefined) {
        const wrappedItem = output["Capabilities"]["member"] instanceof Array
            ? output["Capabilities"]["member"]
            : [output["Capabilities"]["member"]];
        contents.Capabilities = deserializeAws_queryCapabilities(wrappedItem, context);
    }
    if (output["ChangeSetId"] !== undefined) {
        contents.ChangeSetId = output["ChangeSetId"];
    }
    if (output["ChangeSetName"] !== undefined) {
        contents.ChangeSetName = output["ChangeSetName"];
    }
    if (output.Changes === "") {
        contents.Changes = [];
    }
    if (output["Changes"] !== undefined &&
        output["Changes"]["member"] !== undefined) {
        const wrappedItem = output["Changes"]["member"] instanceof Array
            ? output["Changes"]["member"]
            : [output["Changes"]["member"]];
        contents.Changes = deserializeAws_queryChanges(wrappedItem, context);
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ExecutionStatus"] !== undefined) {
        contents.ExecutionStatus = output["ExecutionStatus"];
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.NotificationARNs === "") {
        contents.NotificationARNs = [];
    }
    if (output["NotificationARNs"] !== undefined &&
        output["NotificationARNs"]["member"] !== undefined) {
        const wrappedItem = output["NotificationARNs"]["member"] instanceof Array
            ? output["NotificationARNs"]["member"]
            : [output["NotificationARNs"]["member"]];
        contents.NotificationARNs = deserializeAws_queryNotificationARNs(wrappedItem, context);
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["member"] !== undefined) {
        const wrappedItem = output["Parameters"]["member"] instanceof Array
            ? output["Parameters"]["member"]
            : [output["Parameters"]["member"]];
        contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
    }
    if (output["RollbackConfiguration"] !== undefined) {
        contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(output["RollbackConfiguration"], context);
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTags(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackDriftDetectionStatusOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackDriftDetectionStatusOutput",
        DetectionStatus: undefined,
        DetectionStatusReason: undefined,
        DriftedStackResourceCount: undefined,
        StackDriftDetectionId: undefined,
        StackDriftStatus: undefined,
        StackId: undefined,
        Timestamp: undefined
    };
    if (output["DetectionStatus"] !== undefined) {
        contents.DetectionStatus = output["DetectionStatus"];
    }
    if (output["DetectionStatusReason"] !== undefined) {
        contents.DetectionStatusReason = output["DetectionStatusReason"];
    }
    if (output["DriftedStackResourceCount"] !== undefined) {
        contents.DriftedStackResourceCount = parseInt(output["DriftedStackResourceCount"]);
    }
    if (output["StackDriftDetectionId"] !== undefined) {
        contents.StackDriftDetectionId = output["StackDriftDetectionId"];
    }
    if (output["StackDriftStatus"] !== undefined) {
        contents.StackDriftStatus = output["StackDriftStatus"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryDescribeStackEventsOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackEventsOutput",
        NextToken: undefined,
        StackEvents: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.StackEvents === "") {
        contents.StackEvents = [];
    }
    if (output["StackEvents"] !== undefined &&
        output["StackEvents"]["member"] !== undefined) {
        const wrappedItem = output["StackEvents"]["member"] instanceof Array
            ? output["StackEvents"]["member"]
            : [output["StackEvents"]["member"]];
        contents.StackEvents = deserializeAws_queryStackEvents(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackResourceDriftsOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackResourceDriftsOutput",
        NextToken: undefined,
        StackResourceDrifts: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.StackResourceDrifts === "") {
        contents.StackResourceDrifts = [];
    }
    if (output["StackResourceDrifts"] !== undefined &&
        output["StackResourceDrifts"]["member"] !== undefined) {
        const wrappedItem = output["StackResourceDrifts"]["member"] instanceof Array
            ? output["StackResourceDrifts"]["member"]
            : [output["StackResourceDrifts"]["member"]];
        contents.StackResourceDrifts = deserializeAws_queryStackResourceDrifts(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackResourceOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackResourceOutput",
        StackResourceDetail: undefined
    };
    if (output["StackResourceDetail"] !== undefined) {
        contents.StackResourceDetail = deserializeAws_queryStackResourceDetail(output["StackResourceDetail"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackResourcesOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackResourcesOutput",
        StackResources: undefined
    };
    if (output.StackResources === "") {
        contents.StackResources = [];
    }
    if (output["StackResources"] !== undefined &&
        output["StackResources"]["member"] !== undefined) {
        const wrappedItem = output["StackResources"]["member"] instanceof Array
            ? output["StackResources"]["member"]
            : [output["StackResources"]["member"]];
        contents.StackResources = deserializeAws_queryStackResources(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeStacksOutput = (output, context) => {
    let contents = {
        __type: "DescribeStacksOutput",
        NextToken: undefined,
        Stacks: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Stacks === "") {
        contents.Stacks = [];
    }
    if (output["Stacks"] !== undefined &&
        output["Stacks"]["member"] !== undefined) {
        const wrappedItem = output["Stacks"]["member"] instanceof Array
            ? output["Stacks"]["member"]
            : [output["Stacks"]["member"]];
        contents.Stacks = deserializeAws_queryStacks(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTypeOutput = (output, context) => {
    let contents = {
        __type: "DescribeTypeOutput",
        Arn: undefined,
        DefaultVersionId: undefined,
        DeprecatedStatus: undefined,
        Description: undefined,
        DocumentationUrl: undefined,
        ExecutionRoleArn: undefined,
        LastUpdated: undefined,
        LoggingConfig: undefined,
        ProvisioningType: undefined,
        Schema: undefined,
        SourceUrl: undefined,
        TimeCreated: undefined,
        Type: undefined,
        TypeName: undefined,
        Visibility: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["DeprecatedStatus"] !== undefined) {
        contents.DeprecatedStatus = output["DeprecatedStatus"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DocumentationUrl"] !== undefined) {
        contents.DocumentationUrl = output["DocumentationUrl"];
    }
    if (output["ExecutionRoleArn"] !== undefined) {
        contents.ExecutionRoleArn = output["ExecutionRoleArn"];
    }
    if (output["LastUpdated"] !== undefined) {
        contents.LastUpdated = new Date(output["LastUpdated"]);
    }
    if (output["LoggingConfig"] !== undefined) {
        contents.LoggingConfig = deserializeAws_queryLoggingConfig(output["LoggingConfig"], context);
    }
    if (output["ProvisioningType"] !== undefined) {
        contents.ProvisioningType = output["ProvisioningType"];
    }
    if (output["Schema"] !== undefined) {
        contents.Schema = output["Schema"];
    }
    if (output["SourceUrl"] !== undefined) {
        contents.SourceUrl = output["SourceUrl"];
    }
    if (output["TimeCreated"] !== undefined) {
        contents.TimeCreated = new Date(output["TimeCreated"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["TypeName"] !== undefined) {
        contents.TypeName = output["TypeName"];
    }
    if (output["Visibility"] !== undefined) {
        contents.Visibility = output["Visibility"];
    }
    return contents;
};
const deserializeAws_queryDescribeTypeRegistrationOutput = (output, context) => {
    let contents = {
        __type: "DescribeTypeRegistrationOutput",
        Description: undefined,
        ProgressStatus: undefined,
        TypeArn: undefined,
        TypeVersionArn: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ProgressStatus"] !== undefined) {
        contents.ProgressStatus = output["ProgressStatus"];
    }
    if (output["TypeArn"] !== undefined) {
        contents.TypeArn = output["TypeArn"];
    }
    if (output["TypeVersionArn"] !== undefined) {
        contents.TypeVersionArn = output["TypeVersionArn"];
    }
    return contents;
};
const deserializeAws_queryDetectStackDriftOutput = (output, context) => {
    let contents = {
        __type: "DetectStackDriftOutput",
        StackDriftDetectionId: undefined
    };
    if (output["StackDriftDetectionId"] !== undefined) {
        contents.StackDriftDetectionId = output["StackDriftDetectionId"];
    }
    return contents;
};
const deserializeAws_queryDetectStackResourceDriftOutput = (output, context) => {
    let contents = {
        __type: "DetectStackResourceDriftOutput",
        StackResourceDrift: undefined
    };
    if (output["StackResourceDrift"] !== undefined) {
        contents.StackResourceDrift = deserializeAws_queryStackResourceDrift(output["StackResourceDrift"], context);
    }
    return contents;
};
const deserializeAws_queryEstimateTemplateCostOutput = (output, context) => {
    let contents = {
        __type: "EstimateTemplateCostOutput",
        Url: undefined
    };
    if (output["Url"] !== undefined) {
        contents.Url = output["Url"];
    }
    return contents;
};
const deserializeAws_queryExecuteChangeSetOutput = (output, context) => {
    let contents = {
        __type: "ExecuteChangeSetOutput"
    };
    return contents;
};
const deserializeAws_queryExport = (output, context) => {
    let contents = {
        __type: "Export",
        ExportingStackId: undefined,
        Name: undefined,
        Value: undefined
    };
    if (output["ExportingStackId"] !== undefined) {
        contents.ExportingStackId = output["ExportingStackId"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryExports = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryExport(entry, context));
    });
    return contents;
};
const deserializeAws_queryGetStackPolicyOutput = (output, context) => {
    let contents = {
        __type: "GetStackPolicyOutput",
        StackPolicyBody: undefined
    };
    if (output["StackPolicyBody"] !== undefined) {
        contents.StackPolicyBody = output["StackPolicyBody"];
    }
    return contents;
};
const deserializeAws_queryGetTemplateOutput = (output, context) => {
    let contents = {
        __type: "GetTemplateOutput",
        StagesAvailable: undefined,
        TemplateBody: undefined
    };
    if (output.StagesAvailable === "") {
        contents.StagesAvailable = [];
    }
    if (output["StagesAvailable"] !== undefined &&
        output["StagesAvailable"]["member"] !== undefined) {
        const wrappedItem = output["StagesAvailable"]["member"] instanceof Array
            ? output["StagesAvailable"]["member"]
            : [output["StagesAvailable"]["member"]];
        contents.StagesAvailable = deserializeAws_queryStageList(wrappedItem, context);
    }
    if (output["TemplateBody"] !== undefined) {
        contents.TemplateBody = output["TemplateBody"];
    }
    return contents;
};
const deserializeAws_queryGetTemplateSummaryOutput = (output, context) => {
    let contents = {
        __type: "GetTemplateSummaryOutput",
        Capabilities: undefined,
        CapabilitiesReason: undefined,
        DeclaredTransforms: undefined,
        Description: undefined,
        Metadata: undefined,
        Parameters: undefined,
        ResourceIdentifierSummaries: undefined,
        ResourceTypes: undefined,
        Version: undefined
    };
    if (output.Capabilities === "") {
        contents.Capabilities = [];
    }
    if (output["Capabilities"] !== undefined &&
        output["Capabilities"]["member"] !== undefined) {
        const wrappedItem = output["Capabilities"]["member"] instanceof Array
            ? output["Capabilities"]["member"]
            : [output["Capabilities"]["member"]];
        contents.Capabilities = deserializeAws_queryCapabilities(wrappedItem, context);
    }
    if (output["CapabilitiesReason"] !== undefined) {
        contents.CapabilitiesReason = output["CapabilitiesReason"];
    }
    if (output.DeclaredTransforms === "") {
        contents.DeclaredTransforms = [];
    }
    if (output["DeclaredTransforms"] !== undefined &&
        output["DeclaredTransforms"]["member"] !== undefined) {
        const wrappedItem = output["DeclaredTransforms"]["member"] instanceof Array
            ? output["DeclaredTransforms"]["member"]
            : [output["DeclaredTransforms"]["member"]];
        contents.DeclaredTransforms = deserializeAws_queryTransformsList(wrappedItem, context);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Metadata"] !== undefined) {
        contents.Metadata = output["Metadata"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["member"] !== undefined) {
        const wrappedItem = output["Parameters"]["member"] instanceof Array
            ? output["Parameters"]["member"]
            : [output["Parameters"]["member"]];
        contents.Parameters = deserializeAws_queryParameterDeclarations(wrappedItem, context);
    }
    if (output.ResourceIdentifierSummaries === "") {
        contents.ResourceIdentifierSummaries = [];
    }
    if (output["ResourceIdentifierSummaries"] !== undefined &&
        output["ResourceIdentifierSummaries"]["member"] !== undefined) {
        const wrappedItem = output["ResourceIdentifierSummaries"]["member"] instanceof Array
            ? output["ResourceIdentifierSummaries"]["member"]
            : [output["ResourceIdentifierSummaries"]["member"]];
        contents.ResourceIdentifierSummaries = deserializeAws_queryResourceIdentifierSummaries(wrappedItem, context);
    }
    if (output.ResourceTypes === "") {
        contents.ResourceTypes = [];
    }
    if (output["ResourceTypes"] !== undefined &&
        output["ResourceTypes"]["member"] !== undefined) {
        const wrappedItem = output["ResourceTypes"]["member"] instanceof Array
            ? output["ResourceTypes"]["member"]
            : [output["ResourceTypes"]["member"]];
        contents.ResourceTypes = deserializeAws_queryResourceTypes(wrappedItem, context);
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryImports = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryInsufficientCapabilitiesException = (output, context) => {
    let contents = {
        __type: "InsufficientCapabilitiesException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidChangeSetStatusException = (output, context) => {
    let contents = {
        __type: "InvalidChangeSetStatusException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidStateTransitionException = (output, context) => {
    let contents = {
        __type: "InvalidStateTransitionException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
const deserializeAws_queryListChangeSetsOutput = (output, context) => {
    let contents = {
        __type: "ListChangeSetsOutput",
        NextToken: undefined,
        Summaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Summaries === "") {
        contents.Summaries = [];
    }
    if (output["Summaries"] !== undefined &&
        output["Summaries"]["member"] !== undefined) {
        const wrappedItem = output["Summaries"]["member"] instanceof Array
            ? output["Summaries"]["member"]
            : [output["Summaries"]["member"]];
        contents.Summaries = deserializeAws_queryChangeSetSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListExportsOutput = (output, context) => {
    let contents = {
        __type: "ListExportsOutput",
        Exports: undefined,
        NextToken: undefined
    };
    if (output.Exports === "") {
        contents.Exports = [];
    }
    if (output["Exports"] !== undefined &&
        output["Exports"]["member"] !== undefined) {
        const wrappedItem = output["Exports"]["member"] instanceof Array
            ? output["Exports"]["member"]
            : [output["Exports"]["member"]];
        contents.Exports = deserializeAws_queryExports(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListImportsOutput = (output, context) => {
    let contents = {
        __type: "ListImportsOutput",
        Imports: undefined,
        NextToken: undefined
    };
    if (output.Imports === "") {
        contents.Imports = [];
    }
    if (output["Imports"] !== undefined &&
        output["Imports"]["member"] !== undefined) {
        const wrappedItem = output["Imports"]["member"] instanceof Array
            ? output["Imports"]["member"]
            : [output["Imports"]["member"]];
        contents.Imports = deserializeAws_queryImports(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListStackResourcesOutput = (output, context) => {
    let contents = {
        __type: "ListStackResourcesOutput",
        NextToken: undefined,
        StackResourceSummaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.StackResourceSummaries === "") {
        contents.StackResourceSummaries = [];
    }
    if (output["StackResourceSummaries"] !== undefined &&
        output["StackResourceSummaries"]["member"] !== undefined) {
        const wrappedItem = output["StackResourceSummaries"]["member"] instanceof Array
            ? output["StackResourceSummaries"]["member"]
            : [output["StackResourceSummaries"]["member"]];
        contents.StackResourceSummaries = deserializeAws_queryStackResourceSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListStacksOutput = (output, context) => {
    let contents = {
        __type: "ListStacksOutput",
        NextToken: undefined,
        StackSummaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.StackSummaries === "") {
        contents.StackSummaries = [];
    }
    if (output["StackSummaries"] !== undefined &&
        output["StackSummaries"]["member"] !== undefined) {
        const wrappedItem = output["StackSummaries"]["member"] instanceof Array
            ? output["StackSummaries"]["member"]
            : [output["StackSummaries"]["member"]];
        contents.StackSummaries = deserializeAws_queryStackSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTypeRegistrationsOutput = (output, context) => {
    let contents = {
        __type: "ListTypeRegistrationsOutput",
        NextToken: undefined,
        RegistrationTokenList: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.RegistrationTokenList === "") {
        contents.RegistrationTokenList = [];
    }
    if (output["RegistrationTokenList"] !== undefined &&
        output["RegistrationTokenList"]["member"] !== undefined) {
        const wrappedItem = output["RegistrationTokenList"]["member"] instanceof Array
            ? output["RegistrationTokenList"]["member"]
            : [output["RegistrationTokenList"]["member"]];
        contents.RegistrationTokenList = deserializeAws_queryRegistrationTokenList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTypeVersionsOutput = (output, context) => {
    let contents = {
        __type: "ListTypeVersionsOutput",
        NextToken: undefined,
        TypeVersionSummaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.TypeVersionSummaries === "") {
        contents.TypeVersionSummaries = [];
    }
    if (output["TypeVersionSummaries"] !== undefined &&
        output["TypeVersionSummaries"]["member"] !== undefined) {
        const wrappedItem = output["TypeVersionSummaries"]["member"] instanceof Array
            ? output["TypeVersionSummaries"]["member"]
            : [output["TypeVersionSummaries"]["member"]];
        contents.TypeVersionSummaries = deserializeAws_queryTypeVersionSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTypesOutput = (output, context) => {
    let contents = {
        __type: "ListTypesOutput",
        NextToken: undefined,
        TypeSummaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.TypeSummaries === "") {
        contents.TypeSummaries = [];
    }
    if (output["TypeSummaries"] !== undefined &&
        output["TypeSummaries"]["member"] !== undefined) {
        const wrappedItem = output["TypeSummaries"]["member"] instanceof Array
            ? output["TypeSummaries"]["member"]
            : [output["TypeSummaries"]["member"]];
        contents.TypeSummaries = deserializeAws_queryTypeSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryLoggingConfig = (output, context) => {
    let contents = {
        __type: "LoggingConfig",
        LogGroupName: undefined,
        LogRoleArn: undefined
    };
    if (output["LogGroupName"] !== undefined) {
        contents.LogGroupName = output["LogGroupName"];
    }
    if (output["LogRoleArn"] !== undefined) {
        contents.LogRoleArn = output["LogRoleArn"];
    }
    return contents;
};
const deserializeAws_queryLogicalResourceIds = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryNotificationARNs = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryOperationStatusCheckFailedException = (output, context) => {
    let contents = {
        __type: "OperationStatusCheckFailedException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryOutput = (output, context) => {
    let contents = {
        __type: "Output",
        Description: undefined,
        ExportName: undefined,
        OutputKey: undefined,
        OutputValue: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ExportName"] !== undefined) {
        contents.ExportName = output["ExportName"];
    }
    if (output["OutputKey"] !== undefined) {
        contents.OutputKey = output["OutputKey"];
    }
    if (output["OutputValue"] !== undefined) {
        contents.OutputValue = output["OutputValue"];
    }
    return contents;
};
const deserializeAws_queryOutputs = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOutput(entry, context));
    });
    return contents;
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        ParameterKey: undefined,
        ParameterValue: undefined,
        ResolvedValue: undefined,
        UsePreviousValue: undefined
    };
    if (output["ParameterKey"] !== undefined) {
        contents.ParameterKey = output["ParameterKey"];
    }
    if (output["ParameterValue"] !== undefined) {
        contents.ParameterValue = output["ParameterValue"];
    }
    if (output["ResolvedValue"] !== undefined) {
        contents.ResolvedValue = output["ResolvedValue"];
    }
    if (output["UsePreviousValue"] !== undefined) {
        contents.UsePreviousValue = output["UsePreviousValue"] == "true";
    }
    return contents;
};
const deserializeAws_queryParameterConstraints = (output, context) => {
    let contents = {
        __type: "ParameterConstraints",
        AllowedValues: undefined
    };
    if (output.AllowedValues === "") {
        contents.AllowedValues = [];
    }
    if (output["AllowedValues"] !== undefined &&
        output["AllowedValues"]["member"] !== undefined) {
        const wrappedItem = output["AllowedValues"]["member"] instanceof Array
            ? output["AllowedValues"]["member"]
            : [output["AllowedValues"]["member"]];
        contents.AllowedValues = deserializeAws_queryAllowedValues(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryParameterDeclaration = (output, context) => {
    let contents = {
        __type: "ParameterDeclaration",
        DefaultValue: undefined,
        Description: undefined,
        NoEcho: undefined,
        ParameterConstraints: undefined,
        ParameterKey: undefined,
        ParameterType: undefined
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["NoEcho"] !== undefined) {
        contents.NoEcho = output["NoEcho"] == "true";
    }
    if (output["ParameterConstraints"] !== undefined) {
        contents.ParameterConstraints = deserializeAws_queryParameterConstraints(output["ParameterConstraints"], context);
    }
    if (output["ParameterKey"] !== undefined) {
        contents.ParameterKey = output["ParameterKey"];
    }
    if (output["ParameterType"] !== undefined) {
        contents.ParameterType = output["ParameterType"];
    }
    return contents;
};
const deserializeAws_queryParameterDeclarations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryParameterDeclaration(entry, context));
    });
    return contents;
};
const deserializeAws_queryParameters = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryPhysicalResourceIdContext = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPhysicalResourceIdContextKeyValuePair(entry, context));
    });
    return contents;
};
const deserializeAws_queryPhysicalResourceIdContextKeyValuePair = (output, context) => {
    let contents = {
        __type: "PhysicalResourceIdContextKeyValuePair",
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
const deserializeAws_queryPropertyDifference = (output, context) => {
    let contents = {
        __type: "PropertyDifference",
        ActualValue: undefined,
        DifferenceType: undefined,
        ExpectedValue: undefined,
        PropertyPath: undefined
    };
    if (output["ActualValue"] !== undefined) {
        contents.ActualValue = output["ActualValue"];
    }
    if (output["DifferenceType"] !== undefined) {
        contents.DifferenceType = output["DifferenceType"];
    }
    if (output["ExpectedValue"] !== undefined) {
        contents.ExpectedValue = output["ExpectedValue"];
    }
    if (output["PropertyPath"] !== undefined) {
        contents.PropertyPath = output["PropertyPath"];
    }
    return contents;
};
const deserializeAws_queryPropertyDifferences = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPropertyDifference(entry, context));
    });
    return contents;
};
const deserializeAws_queryRecordHandlerProgressOutput = (output, context) => {
    let contents = {
        __type: "RecordHandlerProgressOutput"
    };
    return contents;
};
const deserializeAws_queryRegisterTypeOutput = (output, context) => {
    let contents = {
        __type: "RegisterTypeOutput",
        RegistrationToken: undefined
    };
    if (output["RegistrationToken"] !== undefined) {
        contents.RegistrationToken = output["RegistrationToken"];
    }
    return contents;
};
const deserializeAws_queryRegistrationTokenList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryResourceChange = (output, context) => {
    let contents = {
        __type: "ResourceChange",
        Action: undefined,
        Details: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        Replacement: undefined,
        ResourceType: undefined,
        Scope: undefined
    };
    if (output["Action"] !== undefined) {
        contents.Action = output["Action"];
    }
    if (output.Details === "") {
        contents.Details = [];
    }
    if (output["Details"] !== undefined &&
        output["Details"]["member"] !== undefined) {
        const wrappedItem = output["Details"]["member"] instanceof Array
            ? output["Details"]["member"]
            : [output["Details"]["member"]];
        contents.Details = deserializeAws_queryResourceChangeDetails(wrappedItem, context);
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output["Replacement"] !== undefined) {
        contents.Replacement = output["Replacement"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output.Scope === "") {
        contents.Scope = [];
    }
    if (output["Scope"] !== undefined &&
        output["Scope"]["member"] !== undefined) {
        const wrappedItem = output["Scope"]["member"] instanceof Array
            ? output["Scope"]["member"]
            : [output["Scope"]["member"]];
        contents.Scope = deserializeAws_queryScope(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryResourceChangeDetail = (output, context) => {
    let contents = {
        __type: "ResourceChangeDetail",
        CausingEntity: undefined,
        ChangeSource: undefined,
        Evaluation: undefined,
        Target: undefined
    };
    if (output["CausingEntity"] !== undefined) {
        contents.CausingEntity = output["CausingEntity"];
    }
    if (output["ChangeSource"] !== undefined) {
        contents.ChangeSource = output["ChangeSource"];
    }
    if (output["Evaluation"] !== undefined) {
        contents.Evaluation = output["Evaluation"];
    }
    if (output["Target"] !== undefined) {
        contents.Target = deserializeAws_queryResourceTargetDefinition(output["Target"], context);
    }
    return contents;
};
const deserializeAws_queryResourceChangeDetails = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryResourceChangeDetail(entry, context));
    });
    return contents;
};
const deserializeAws_queryResourceIdentifierSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryResourceIdentifierSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryResourceIdentifierSummary = (output, context) => {
    let contents = {
        __type: "ResourceIdentifierSummary",
        LogicalResourceIds: undefined,
        ResourceIdentifiers: undefined,
        ResourceType: undefined
    };
    if (output.LogicalResourceIds === "") {
        contents.LogicalResourceIds = [];
    }
    if (output["LogicalResourceIds"] !== undefined &&
        output["LogicalResourceIds"]["member"] !== undefined) {
        const wrappedItem = output["LogicalResourceIds"]["member"] instanceof Array
            ? output["LogicalResourceIds"]["member"]
            : [output["LogicalResourceIds"]["member"]];
        contents.LogicalResourceIds = deserializeAws_queryLogicalResourceIds(wrappedItem, context);
    }
    if (output.ResourceIdentifiers === "") {
        contents.ResourceIdentifiers = [];
    }
    if (output["ResourceIdentifiers"] !== undefined &&
        output["ResourceIdentifiers"]["member"] !== undefined) {
        const wrappedItem = output["ResourceIdentifiers"]["member"] instanceof Array
            ? output["ResourceIdentifiers"]["member"]
            : [output["ResourceIdentifiers"]["member"]];
        contents.ResourceIdentifiers = deserializeAws_queryResourceIdentifiers(wrappedItem, context);
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    return contents;
};
const deserializeAws_queryResourceIdentifiers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryResourceTargetDefinition = (output, context) => {
    let contents = {
        __type: "ResourceTargetDefinition",
        Attribute: undefined,
        Name: undefined,
        RequiresRecreation: undefined
    };
    if (output["Attribute"] !== undefined) {
        contents.Attribute = output["Attribute"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["RequiresRecreation"] !== undefined) {
        contents.RequiresRecreation = output["RequiresRecreation"];
    }
    return contents;
};
const deserializeAws_queryResourceTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryRollbackConfiguration = (output, context) => {
    let contents = {
        __type: "RollbackConfiguration",
        MonitoringTimeInMinutes: undefined,
        RollbackTriggers: undefined
    };
    if (output["MonitoringTimeInMinutes"] !== undefined) {
        contents.MonitoringTimeInMinutes = parseInt(output["MonitoringTimeInMinutes"]);
    }
    if (output.RollbackTriggers === "") {
        contents.RollbackTriggers = [];
    }
    if (output["RollbackTriggers"] !== undefined &&
        output["RollbackTriggers"]["member"] !== undefined) {
        const wrappedItem = output["RollbackTriggers"]["member"] instanceof Array
            ? output["RollbackTriggers"]["member"]
            : [output["RollbackTriggers"]["member"]];
        contents.RollbackTriggers = deserializeAws_queryRollbackTriggers(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRollbackTrigger = (output, context) => {
    let contents = {
        __type: "RollbackTrigger",
        Arn: undefined,
        Type: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_queryRollbackTriggers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRollbackTrigger(entry, context));
    });
    return contents;
};
const deserializeAws_queryScope = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySetTypeDefaultVersionOutput = (output, context) => {
    let contents = {
        __type: "SetTypeDefaultVersionOutput"
    };
    return contents;
};
const deserializeAws_queryStack = (output, context) => {
    let contents = {
        __type: "Stack",
        Capabilities: undefined,
        ChangeSetId: undefined,
        CreationTime: undefined,
        DeletionTime: undefined,
        Description: undefined,
        DisableRollback: undefined,
        DriftInformation: undefined,
        EnableTerminationProtection: undefined,
        LastUpdatedTime: undefined,
        NotificationARNs: undefined,
        Outputs: undefined,
        Parameters: undefined,
        ParentId: undefined,
        RoleARN: undefined,
        RollbackConfiguration: undefined,
        RootId: undefined,
        StackId: undefined,
        StackName: undefined,
        StackStatus: undefined,
        StackStatusReason: undefined,
        Tags: undefined,
        TimeoutInMinutes: undefined
    };
    if (output.Capabilities === "") {
        contents.Capabilities = [];
    }
    if (output["Capabilities"] !== undefined &&
        output["Capabilities"]["member"] !== undefined) {
        const wrappedItem = output["Capabilities"]["member"] instanceof Array
            ? output["Capabilities"]["member"]
            : [output["Capabilities"]["member"]];
        contents.Capabilities = deserializeAws_queryCapabilities(wrappedItem, context);
    }
    if (output["ChangeSetId"] !== undefined) {
        contents.ChangeSetId = output["ChangeSetId"];
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["DeletionTime"] !== undefined) {
        contents.DeletionTime = new Date(output["DeletionTime"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DisableRollback"] !== undefined) {
        contents.DisableRollback = output["DisableRollback"] == "true";
    }
    if (output["DriftInformation"] !== undefined) {
        contents.DriftInformation = deserializeAws_queryStackDriftInformation(output["DriftInformation"], context);
    }
    if (output["EnableTerminationProtection"] !== undefined) {
        contents.EnableTerminationProtection =
            output["EnableTerminationProtection"] == "true";
    }
    if (output["LastUpdatedTime"] !== undefined) {
        contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
    }
    if (output.NotificationARNs === "") {
        contents.NotificationARNs = [];
    }
    if (output["NotificationARNs"] !== undefined &&
        output["NotificationARNs"]["member"] !== undefined) {
        const wrappedItem = output["NotificationARNs"]["member"] instanceof Array
            ? output["NotificationARNs"]["member"]
            : [output["NotificationARNs"]["member"]];
        contents.NotificationARNs = deserializeAws_queryNotificationARNs(wrappedItem, context);
    }
    if (output.Outputs === "") {
        contents.Outputs = [];
    }
    if (output["Outputs"] !== undefined &&
        output["Outputs"]["member"] !== undefined) {
        const wrappedItem = output["Outputs"]["member"] instanceof Array
            ? output["Outputs"]["member"]
            : [output["Outputs"]["member"]];
        contents.Outputs = deserializeAws_queryOutputs(wrappedItem, context);
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["member"] !== undefined) {
        const wrappedItem = output["Parameters"]["member"] instanceof Array
            ? output["Parameters"]["member"]
            : [output["Parameters"]["member"]];
        contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
    }
    if (output["ParentId"] !== undefined) {
        contents.ParentId = output["ParentId"];
    }
    if (output["RoleARN"] !== undefined) {
        contents.RoleARN = output["RoleARN"];
    }
    if (output["RollbackConfiguration"] !== undefined) {
        contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(output["RollbackConfiguration"], context);
    }
    if (output["RootId"] !== undefined) {
        contents.RootId = output["RootId"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["StackStatus"] !== undefined) {
        contents.StackStatus = output["StackStatus"];
    }
    if (output["StackStatusReason"] !== undefined) {
        contents.StackStatusReason = output["StackStatusReason"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTags(wrappedItem, context);
    }
    if (output["TimeoutInMinutes"] !== undefined) {
        contents.TimeoutInMinutes = parseInt(output["TimeoutInMinutes"]);
    }
    return contents;
};
const deserializeAws_queryStackDriftInformation = (output, context) => {
    let contents = {
        __type: "StackDriftInformation",
        LastCheckTimestamp: undefined,
        StackDriftStatus: undefined
    };
    if (output["LastCheckTimestamp"] !== undefined) {
        contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
    }
    if (output["StackDriftStatus"] !== undefined) {
        contents.StackDriftStatus = output["StackDriftStatus"];
    }
    return contents;
};
const deserializeAws_queryStackDriftInformationSummary = (output, context) => {
    let contents = {
        __type: "StackDriftInformationSummary",
        LastCheckTimestamp: undefined,
        StackDriftStatus: undefined
    };
    if (output["LastCheckTimestamp"] !== undefined) {
        contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
    }
    if (output["StackDriftStatus"] !== undefined) {
        contents.StackDriftStatus = output["StackDriftStatus"];
    }
    return contents;
};
const deserializeAws_queryStackEvent = (output, context) => {
    let contents = {
        __type: "StackEvent",
        ClientRequestToken: undefined,
        EventId: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        ResourceProperties: undefined,
        ResourceStatus: undefined,
        ResourceStatusReason: undefined,
        ResourceType: undefined,
        StackId: undefined,
        StackName: undefined,
        Timestamp: undefined
    };
    if (output["ClientRequestToken"] !== undefined) {
        contents.ClientRequestToken = output["ClientRequestToken"];
    }
    if (output["EventId"] !== undefined) {
        contents.EventId = output["EventId"];
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output["ResourceProperties"] !== undefined) {
        contents.ResourceProperties = output["ResourceProperties"];
    }
    if (output["ResourceStatus"] !== undefined) {
        contents.ResourceStatus = output["ResourceStatus"];
    }
    if (output["ResourceStatusReason"] !== undefined) {
        contents.ResourceStatusReason = output["ResourceStatusReason"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryStackEvents = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackEvent(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackResource = (output, context) => {
    let contents = {
        __type: "StackResource",
        Description: undefined,
        DriftInformation: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        ResourceStatus: undefined,
        ResourceStatusReason: undefined,
        ResourceType: undefined,
        StackId: undefined,
        StackName: undefined,
        Timestamp: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DriftInformation"] !== undefined) {
        contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output["ResourceStatus"] !== undefined) {
        contents.ResourceStatus = output["ResourceStatus"];
    }
    if (output["ResourceStatusReason"] !== undefined) {
        contents.ResourceStatusReason = output["ResourceStatusReason"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryStackResourceDetail = (output, context) => {
    let contents = {
        __type: "StackResourceDetail",
        Description: undefined,
        DriftInformation: undefined,
        LastUpdatedTimestamp: undefined,
        LogicalResourceId: undefined,
        Metadata: undefined,
        PhysicalResourceId: undefined,
        ResourceStatus: undefined,
        ResourceStatusReason: undefined,
        ResourceType: undefined,
        StackId: undefined,
        StackName: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DriftInformation"] !== undefined) {
        contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
    }
    if (output["LastUpdatedTimestamp"] !== undefined) {
        contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["Metadata"] !== undefined) {
        contents.Metadata = output["Metadata"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output["ResourceStatus"] !== undefined) {
        contents.ResourceStatus = output["ResourceStatus"];
    }
    if (output["ResourceStatusReason"] !== undefined) {
        contents.ResourceStatusReason = output["ResourceStatusReason"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    return contents;
};
const deserializeAws_queryStackResourceDrift = (output, context) => {
    let contents = {
        __type: "StackResourceDrift",
        ActualProperties: undefined,
        ExpectedProperties: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        PhysicalResourceIdContext: undefined,
        PropertyDifferences: undefined,
        ResourceType: undefined,
        StackId: undefined,
        StackResourceDriftStatus: undefined,
        Timestamp: undefined
    };
    if (output["ActualProperties"] !== undefined) {
        contents.ActualProperties = output["ActualProperties"];
    }
    if (output["ExpectedProperties"] !== undefined) {
        contents.ExpectedProperties = output["ExpectedProperties"];
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output.PhysicalResourceIdContext === "") {
        contents.PhysicalResourceIdContext = [];
    }
    if (output["PhysicalResourceIdContext"] !== undefined &&
        output["PhysicalResourceIdContext"]["member"] !== undefined) {
        const wrappedItem = output["PhysicalResourceIdContext"]["member"] instanceof Array
            ? output["PhysicalResourceIdContext"]["member"]
            : [output["PhysicalResourceIdContext"]["member"]];
        contents.PhysicalResourceIdContext = deserializeAws_queryPhysicalResourceIdContext(wrappedItem, context);
    }
    if (output.PropertyDifferences === "") {
        contents.PropertyDifferences = [];
    }
    if (output["PropertyDifferences"] !== undefined &&
        output["PropertyDifferences"]["member"] !== undefined) {
        const wrappedItem = output["PropertyDifferences"]["member"] instanceof Array
            ? output["PropertyDifferences"]["member"]
            : [output["PropertyDifferences"]["member"]];
        contents.PropertyDifferences = deserializeAws_queryPropertyDifferences(wrappedItem, context);
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackResourceDriftStatus"] !== undefined) {
        contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_queryStackResourceDriftInformation = (output, context) => {
    let contents = {
        __type: "StackResourceDriftInformation",
        LastCheckTimestamp: undefined,
        StackResourceDriftStatus: undefined
    };
    if (output["LastCheckTimestamp"] !== undefined) {
        contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
    }
    if (output["StackResourceDriftStatus"] !== undefined) {
        contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
    }
    return contents;
};
const deserializeAws_queryStackResourceDriftInformationSummary = (output, context) => {
    let contents = {
        __type: "StackResourceDriftInformationSummary",
        LastCheckTimestamp: undefined,
        StackResourceDriftStatus: undefined
    };
    if (output["LastCheckTimestamp"] !== undefined) {
        contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
    }
    if (output["StackResourceDriftStatus"] !== undefined) {
        contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
    }
    return contents;
};
const deserializeAws_queryStackResourceDrifts = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackResourceDrift(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackResourceSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackResourceSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackResourceSummary = (output, context) => {
    let contents = {
        __type: "StackResourceSummary",
        DriftInformation: undefined,
        LastUpdatedTimestamp: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        ResourceStatus: undefined,
        ResourceStatusReason: undefined,
        ResourceType: undefined
    };
    if (output["DriftInformation"] !== undefined) {
        contents.DriftInformation = deserializeAws_queryStackResourceDriftInformationSummary(output["DriftInformation"], context);
    }
    if (output["LastUpdatedTimestamp"] !== undefined) {
        contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
    }
    if (output["LogicalResourceId"] !== undefined) {
        contents.LogicalResourceId = output["LogicalResourceId"];
    }
    if (output["PhysicalResourceId"] !== undefined) {
        contents.PhysicalResourceId = output["PhysicalResourceId"];
    }
    if (output["ResourceStatus"] !== undefined) {
        contents.ResourceStatus = output["ResourceStatus"];
    }
    if (output["ResourceStatusReason"] !== undefined) {
        contents.ResourceStatusReason = output["ResourceStatusReason"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    return contents;
};
const deserializeAws_queryStackResources = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackResource(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackSetNotFoundException = (output, context) => {
    let contents = {
        __type: "StackSetNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryStackSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackSummary = (output, context) => {
    let contents = {
        __type: "StackSummary",
        CreationTime: undefined,
        DeletionTime: undefined,
        DriftInformation: undefined,
        LastUpdatedTime: undefined,
        ParentId: undefined,
        RootId: undefined,
        StackId: undefined,
        StackName: undefined,
        StackStatus: undefined,
        StackStatusReason: undefined,
        TemplateDescription: undefined
    };
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["DeletionTime"] !== undefined) {
        contents.DeletionTime = new Date(output["DeletionTime"]);
    }
    if (output["DriftInformation"] !== undefined) {
        contents.DriftInformation = deserializeAws_queryStackDriftInformationSummary(output["DriftInformation"], context);
    }
    if (output["LastUpdatedTime"] !== undefined) {
        contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
    }
    if (output["ParentId"] !== undefined) {
        contents.ParentId = output["ParentId"];
    }
    if (output["RootId"] !== undefined) {
        contents.RootId = output["RootId"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackName"] !== undefined) {
        contents.StackName = output["StackName"];
    }
    if (output["StackStatus"] !== undefined) {
        contents.StackStatus = output["StackStatus"];
    }
    if (output["StackStatusReason"] !== undefined) {
        contents.StackStatusReason = output["StackStatusReason"];
    }
    if (output["TemplateDescription"] !== undefined) {
        contents.TemplateDescription = output["TemplateDescription"];
    }
    return contents;
};
const deserializeAws_queryStacks = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStack(entry, context));
    });
    return contents;
};
const deserializeAws_queryStageList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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
const deserializeAws_queryTags = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_queryTemplateParameter = (output, context) => {
    let contents = {
        __type: "TemplateParameter",
        DefaultValue: undefined,
        Description: undefined,
        NoEcho: undefined,
        ParameterKey: undefined
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["NoEcho"] !== undefined) {
        contents.NoEcho = output["NoEcho"] == "true";
    }
    if (output["ParameterKey"] !== undefined) {
        contents.ParameterKey = output["ParameterKey"];
    }
    return contents;
};
const deserializeAws_queryTemplateParameters = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTemplateParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryTokenAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "TokenAlreadyExistsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTransformsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryTypeNotFoundException = (output, context) => {
    let contents = {
        __type: "TypeNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTypeSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTypeSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryTypeSummary = (output, context) => {
    let contents = {
        __type: "TypeSummary",
        DefaultVersionId: undefined,
        Description: undefined,
        LastUpdated: undefined,
        Type: undefined,
        TypeArn: undefined,
        TypeName: undefined
    };
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["LastUpdated"] !== undefined) {
        contents.LastUpdated = new Date(output["LastUpdated"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["TypeArn"] !== undefined) {
        contents.TypeArn = output["TypeArn"];
    }
    if (output["TypeName"] !== undefined) {
        contents.TypeName = output["TypeName"];
    }
    return contents;
};
const deserializeAws_queryTypeVersionSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTypeVersionSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryTypeVersionSummary = (output, context) => {
    let contents = {
        __type: "TypeVersionSummary",
        Arn: undefined,
        Description: undefined,
        TimeCreated: undefined,
        Type: undefined,
        TypeName: undefined,
        VersionId: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["TimeCreated"] !== undefined) {
        contents.TimeCreated = new Date(output["TimeCreated"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["TypeName"] !== undefined) {
        contents.TypeName = output["TypeName"];
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_queryUpdateStackOutput = (output, context) => {
    let contents = {
        __type: "UpdateStackOutput",
        StackId: undefined
    };
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    return contents;
};
const deserializeAws_queryUpdateTerminationProtectionOutput = (output, context) => {
    let contents = {
        __type: "UpdateTerminationProtectionOutput",
        StackId: undefined
    };
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    return contents;
};
const deserializeAws_queryValidateTemplateOutput = (output, context) => {
    let contents = {
        __type: "ValidateTemplateOutput",
        Capabilities: undefined,
        CapabilitiesReason: undefined,
        DeclaredTransforms: undefined,
        Description: undefined,
        Parameters: undefined
    };
    if (output.Capabilities === "") {
        contents.Capabilities = [];
    }
    if (output["Capabilities"] !== undefined &&
        output["Capabilities"]["member"] !== undefined) {
        const wrappedItem = output["Capabilities"]["member"] instanceof Array
            ? output["Capabilities"]["member"]
            : [output["Capabilities"]["member"]];
        contents.Capabilities = deserializeAws_queryCapabilities(wrappedItem, context);
    }
    if (output["CapabilitiesReason"] !== undefined) {
        contents.CapabilitiesReason = output["CapabilitiesReason"];
    }
    if (output.DeclaredTransforms === "") {
        contents.DeclaredTransforms = [];
    }
    if (output["DeclaredTransforms"] !== undefined &&
        output["DeclaredTransforms"]["member"] !== undefined) {
        const wrappedItem = output["DeclaredTransforms"]["member"] instanceof Array
            ? output["DeclaredTransforms"]["member"]
            : [output["DeclaredTransforms"]["member"]];
        contents.DeclaredTransforms = deserializeAws_queryTransformsList(wrappedItem, context);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["member"] !== undefined) {
        const wrappedItem = output["Parameters"]["member"] instanceof Array
            ? output["Parameters"]["member"]
            : [output["Parameters"]["member"]];
        contents.Parameters = deserializeAws_queryTemplateParameters(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAccountGateResult = (output, context) => {
    let contents = {
        __type: "AccountGateResult",
        Status: undefined,
        StatusReason: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    return contents;
};
const deserializeAws_queryCreateStackInstancesOutput = (output, context) => {
    let contents = {
        __type: "CreateStackInstancesOutput",
        OperationId: undefined
    };
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    return contents;
};
const deserializeAws_queryCreateStackSetOutput = (output, context) => {
    let contents = {
        __type: "CreateStackSetOutput",
        StackSetId: undefined
    };
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    return contents;
};
const deserializeAws_queryCreatedButModifiedException = (output, context) => {
    let contents = {
        __type: "CreatedButModifiedException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDeleteStackInstancesOutput = (output, context) => {
    let contents = {
        __type: "DeleteStackInstancesOutput",
        OperationId: undefined
    };
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    return contents;
};
const deserializeAws_queryDeleteStackSetOutput = (output, context) => {
    let contents = {
        __type: "DeleteStackSetOutput"
    };
    return contents;
};
const deserializeAws_queryDescribeStackInstanceOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackInstanceOutput",
        StackInstance: undefined
    };
    if (output["StackInstance"] !== undefined) {
        contents.StackInstance = deserializeAws_queryStackInstance(output["StackInstance"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackSetOperationOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackSetOperationOutput",
        StackSetOperation: undefined
    };
    if (output["StackSetOperation"] !== undefined) {
        contents.StackSetOperation = deserializeAws_queryStackSetOperation(output["StackSetOperation"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeStackSetOutput = (output, context) => {
    let contents = {
        __type: "DescribeStackSetOutput",
        StackSet: undefined
    };
    if (output["StackSet"] !== undefined) {
        contents.StackSet = deserializeAws_queryStackSet(output["StackSet"], context);
    }
    return contents;
};
const deserializeAws_queryDetectStackSetDriftOutput = (output, context) => {
    let contents = {
        __type: "DetectStackSetDriftOutput",
        OperationId: undefined
    };
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    return contents;
};
const deserializeAws_queryInvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryListStackInstancesOutput = (output, context) => {
    let contents = {
        __type: "ListStackInstancesOutput",
        NextToken: undefined,
        Summaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Summaries === "") {
        contents.Summaries = [];
    }
    if (output["Summaries"] !== undefined &&
        output["Summaries"]["member"] !== undefined) {
        const wrappedItem = output["Summaries"]["member"] instanceof Array
            ? output["Summaries"]["member"]
            : [output["Summaries"]["member"]];
        contents.Summaries = deserializeAws_queryStackInstanceSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListStackSetOperationResultsOutput = (output, context) => {
    let contents = {
        __type: "ListStackSetOperationResultsOutput",
        NextToken: undefined,
        Summaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Summaries === "") {
        contents.Summaries = [];
    }
    if (output["Summaries"] !== undefined &&
        output["Summaries"]["member"] !== undefined) {
        const wrappedItem = output["Summaries"]["member"] instanceof Array
            ? output["Summaries"]["member"]
            : [output["Summaries"]["member"]];
        contents.Summaries = deserializeAws_queryStackSetOperationResultSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListStackSetOperationsOutput = (output, context) => {
    let contents = {
        __type: "ListStackSetOperationsOutput",
        NextToken: undefined,
        Summaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Summaries === "") {
        contents.Summaries = [];
    }
    if (output["Summaries"] !== undefined &&
        output["Summaries"]["member"] !== undefined) {
        const wrappedItem = output["Summaries"]["member"] instanceof Array
            ? output["Summaries"]["member"]
            : [output["Summaries"]["member"]];
        contents.Summaries = deserializeAws_queryStackSetOperationSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListStackSetsOutput = (output, context) => {
    let contents = {
        __type: "ListStackSetsOutput",
        NextToken: undefined,
        Summaries: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Summaries === "") {
        contents.Summaries = [];
    }
    if (output["Summaries"] !== undefined &&
        output["Summaries"]["member"] !== undefined) {
        const wrappedItem = output["Summaries"]["member"] instanceof Array
            ? output["Summaries"]["member"]
            : [output["Summaries"]["member"]];
        contents.Summaries = deserializeAws_queryStackSetSummaries(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryNameAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "NameAlreadyExistsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryOperationIdAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "OperationIdAlreadyExistsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryOperationInProgressException = (output, context) => {
    let contents = {
        __type: "OperationInProgressException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryOperationNotFoundException = (output, context) => {
    let contents = {
        __type: "OperationNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRegionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryStackInstance = (output, context) => {
    let contents = {
        __type: "StackInstance",
        Account: undefined,
        DriftStatus: undefined,
        LastDriftCheckTimestamp: undefined,
        ParameterOverrides: undefined,
        Region: undefined,
        StackId: undefined,
        StackSetId: undefined,
        Status: undefined,
        StatusReason: undefined
    };
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    if (output["DriftStatus"] !== undefined) {
        contents.DriftStatus = output["DriftStatus"];
    }
    if (output["LastDriftCheckTimestamp"] !== undefined) {
        contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
    }
    if (output.ParameterOverrides === "") {
        contents.ParameterOverrides = [];
    }
    if (output["ParameterOverrides"] !== undefined &&
        output["ParameterOverrides"]["member"] !== undefined) {
        const wrappedItem = output["ParameterOverrides"]["member"] instanceof Array
            ? output["ParameterOverrides"]["member"]
            : [output["ParameterOverrides"]["member"]];
        contents.ParameterOverrides = deserializeAws_queryParameters(wrappedItem, context);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    return contents;
};
const deserializeAws_queryStackInstanceNotFoundException = (output, context) => {
    let contents = {
        __type: "StackInstanceNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryStackInstanceSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackInstanceSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackInstanceSummary = (output, context) => {
    let contents = {
        __type: "StackInstanceSummary",
        Account: undefined,
        DriftStatus: undefined,
        LastDriftCheckTimestamp: undefined,
        Region: undefined,
        StackId: undefined,
        StackSetId: undefined,
        Status: undefined,
        StatusReason: undefined
    };
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    if (output["DriftStatus"] !== undefined) {
        contents.DriftStatus = output["DriftStatus"];
    }
    if (output["LastDriftCheckTimestamp"] !== undefined) {
        contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["StackId"] !== undefined) {
        contents.StackId = output["StackId"];
    }
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    return contents;
};
const deserializeAws_queryStackSet = (output, context) => {
    let contents = {
        __type: "StackSet",
        AdministrationRoleARN: undefined,
        Capabilities: undefined,
        Description: undefined,
        ExecutionRoleName: undefined,
        Parameters: undefined,
        StackSetARN: undefined,
        StackSetDriftDetectionDetails: undefined,
        StackSetId: undefined,
        StackSetName: undefined,
        Status: undefined,
        Tags: undefined,
        TemplateBody: undefined
    };
    if (output["AdministrationRoleARN"] !== undefined) {
        contents.AdministrationRoleARN = output["AdministrationRoleARN"];
    }
    if (output.Capabilities === "") {
        contents.Capabilities = [];
    }
    if (output["Capabilities"] !== undefined &&
        output["Capabilities"]["member"] !== undefined) {
        const wrappedItem = output["Capabilities"]["member"] instanceof Array
            ? output["Capabilities"]["member"]
            : [output["Capabilities"]["member"]];
        contents.Capabilities = deserializeAws_queryCapabilities(wrappedItem, context);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ExecutionRoleName"] !== undefined) {
        contents.ExecutionRoleName = output["ExecutionRoleName"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["member"] !== undefined) {
        const wrappedItem = output["Parameters"]["member"] instanceof Array
            ? output["Parameters"]["member"]
            : [output["Parameters"]["member"]];
        contents.Parameters = deserializeAws_queryParameters(wrappedItem, context);
    }
    if (output["StackSetARN"] !== undefined) {
        contents.StackSetARN = output["StackSetARN"];
    }
    if (output["StackSetDriftDetectionDetails"] !== undefined) {
        contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(output["StackSetDriftDetectionDetails"], context);
    }
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    if (output["StackSetName"] !== undefined) {
        contents.StackSetName = output["StackSetName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTags(wrappedItem, context);
    }
    if (output["TemplateBody"] !== undefined) {
        contents.TemplateBody = output["TemplateBody"];
    }
    return contents;
};
const deserializeAws_queryStackSetDriftDetectionDetails = (output, context) => {
    let contents = {
        __type: "StackSetDriftDetectionDetails",
        DriftDetectionStatus: undefined,
        DriftStatus: undefined,
        DriftedStackInstancesCount: undefined,
        FailedStackInstancesCount: undefined,
        InProgressStackInstancesCount: undefined,
        InSyncStackInstancesCount: undefined,
        LastDriftCheckTimestamp: undefined,
        TotalStackInstancesCount: undefined
    };
    if (output["DriftDetectionStatus"] !== undefined) {
        contents.DriftDetectionStatus = output["DriftDetectionStatus"];
    }
    if (output["DriftStatus"] !== undefined) {
        contents.DriftStatus = output["DriftStatus"];
    }
    if (output["DriftedStackInstancesCount"] !== undefined) {
        contents.DriftedStackInstancesCount = parseInt(output["DriftedStackInstancesCount"]);
    }
    if (output["FailedStackInstancesCount"] !== undefined) {
        contents.FailedStackInstancesCount = parseInt(output["FailedStackInstancesCount"]);
    }
    if (output["InProgressStackInstancesCount"] !== undefined) {
        contents.InProgressStackInstancesCount = parseInt(output["InProgressStackInstancesCount"]);
    }
    if (output["InSyncStackInstancesCount"] !== undefined) {
        contents.InSyncStackInstancesCount = parseInt(output["InSyncStackInstancesCount"]);
    }
    if (output["LastDriftCheckTimestamp"] !== undefined) {
        contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
    }
    if (output["TotalStackInstancesCount"] !== undefined) {
        contents.TotalStackInstancesCount = parseInt(output["TotalStackInstancesCount"]);
    }
    return contents;
};
const deserializeAws_queryStackSetNotEmptyException = (output, context) => {
    let contents = {
        __type: "StackSetNotEmptyException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryStackSetOperation = (output, context) => {
    let contents = {
        __type: "StackSetOperation",
        Action: undefined,
        AdministrationRoleARN: undefined,
        CreationTimestamp: undefined,
        EndTimestamp: undefined,
        ExecutionRoleName: undefined,
        OperationId: undefined,
        OperationPreferences: undefined,
        RetainStacks: undefined,
        StackSetDriftDetectionDetails: undefined,
        StackSetId: undefined,
        Status: undefined
    };
    if (output["Action"] !== undefined) {
        contents.Action = output["Action"];
    }
    if (output["AdministrationRoleARN"] !== undefined) {
        contents.AdministrationRoleARN = output["AdministrationRoleARN"];
    }
    if (output["CreationTimestamp"] !== undefined) {
        contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
    }
    if (output["EndTimestamp"] !== undefined) {
        contents.EndTimestamp = new Date(output["EndTimestamp"]);
    }
    if (output["ExecutionRoleName"] !== undefined) {
        contents.ExecutionRoleName = output["ExecutionRoleName"];
    }
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    if (output["OperationPreferences"] !== undefined) {
        contents.OperationPreferences = deserializeAws_queryStackSetOperationPreferences(output["OperationPreferences"], context);
    }
    if (output["RetainStacks"] !== undefined) {
        contents.RetainStacks = output["RetainStacks"] == "true";
    }
    if (output["StackSetDriftDetectionDetails"] !== undefined) {
        contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(output["StackSetDriftDetectionDetails"], context);
    }
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryStackSetOperationPreferences = (output, context) => {
    let contents = {
        __type: "StackSetOperationPreferences",
        FailureToleranceCount: undefined,
        FailureTolerancePercentage: undefined,
        MaxConcurrentCount: undefined,
        MaxConcurrentPercentage: undefined,
        RegionOrder: undefined
    };
    if (output["FailureToleranceCount"] !== undefined) {
        contents.FailureToleranceCount = parseInt(output["FailureToleranceCount"]);
    }
    if (output["FailureTolerancePercentage"] !== undefined) {
        contents.FailureTolerancePercentage = parseInt(output["FailureTolerancePercentage"]);
    }
    if (output["MaxConcurrentCount"] !== undefined) {
        contents.MaxConcurrentCount = parseInt(output["MaxConcurrentCount"]);
    }
    if (output["MaxConcurrentPercentage"] !== undefined) {
        contents.MaxConcurrentPercentage = parseInt(output["MaxConcurrentPercentage"]);
    }
    if (output.RegionOrder === "") {
        contents.RegionOrder = [];
    }
    if (output["RegionOrder"] !== undefined &&
        output["RegionOrder"]["member"] !== undefined) {
        const wrappedItem = output["RegionOrder"]["member"] instanceof Array
            ? output["RegionOrder"]["member"]
            : [output["RegionOrder"]["member"]];
        contents.RegionOrder = deserializeAws_queryRegionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryStackSetOperationResultSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackSetOperationResultSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackSetOperationResultSummary = (output, context) => {
    let contents = {
        __type: "StackSetOperationResultSummary",
        Account: undefined,
        AccountGateResult: undefined,
        Region: undefined,
        Status: undefined,
        StatusReason: undefined
    };
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    if (output["AccountGateResult"] !== undefined) {
        contents.AccountGateResult = deserializeAws_queryAccountGateResult(output["AccountGateResult"], context);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusReason"] !== undefined) {
        contents.StatusReason = output["StatusReason"];
    }
    return contents;
};
const deserializeAws_queryStackSetOperationSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackSetOperationSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackSetOperationSummary = (output, context) => {
    let contents = {
        __type: "StackSetOperationSummary",
        Action: undefined,
        CreationTimestamp: undefined,
        EndTimestamp: undefined,
        OperationId: undefined,
        Status: undefined
    };
    if (output["Action"] !== undefined) {
        contents.Action = output["Action"];
    }
    if (output["CreationTimestamp"] !== undefined) {
        contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
    }
    if (output["EndTimestamp"] !== undefined) {
        contents.EndTimestamp = new Date(output["EndTimestamp"]);
    }
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryStackSetSummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStackSetSummary(entry, context));
    });
    return contents;
};
const deserializeAws_queryStackSetSummary = (output, context) => {
    let contents = {
        __type: "StackSetSummary",
        Description: undefined,
        DriftStatus: undefined,
        LastDriftCheckTimestamp: undefined,
        StackSetId: undefined,
        StackSetName: undefined,
        Status: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DriftStatus"] !== undefined) {
        contents.DriftStatus = output["DriftStatus"];
    }
    if (output["LastDriftCheckTimestamp"] !== undefined) {
        contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
    }
    if (output["StackSetId"] !== undefined) {
        contents.StackSetId = output["StackSetId"];
    }
    if (output["StackSetName"] !== undefined) {
        contents.StackSetName = output["StackSetName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryStaleRequestException = (output, context) => {
    let contents = {
        __type: "StaleRequestException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryStopStackSetOperationOutput = (output, context) => {
    let contents = {
        __type: "StopStackSetOperationOutput"
    };
    return contents;
};
const deserializeAws_queryUpdateStackInstancesOutput = (output, context) => {
    let contents = {
        __type: "UpdateStackInstancesOutput",
        OperationId: undefined
    };
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
    }
    return contents;
};
const deserializeAws_queryUpdateStackSetOutput = (output, context) => {
    let contents = {
        __type: "UpdateStackSetOutput",
        OperationId: undefined
    };
    if (output["OperationId"] !== undefined) {
        contents.OperationId = output["OperationId"];
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