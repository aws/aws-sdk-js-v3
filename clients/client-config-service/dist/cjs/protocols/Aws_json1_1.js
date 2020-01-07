"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchGetAggregateResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.BatchGetAggregateResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetAggregateResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetAggregateResourceConfigCommand = serializeAws_json1_1BatchGetAggregateResourceConfigCommand;
async function serializeAws_json1_1BatchGetResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.BatchGetResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetResourceConfigCommand = serializeAws_json1_1BatchGetResourceConfigCommand;
async function serializeAws_json1_1DeleteAggregationAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DeleteAggregationAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAggregationAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAggregationAuthorizationCommand = serializeAws_json1_1DeleteAggregationAuthorizationCommand;
async function serializeAws_json1_1DeleteConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConfigRuleCommand = serializeAws_json1_1DeleteConfigRuleCommand;
async function serializeAws_json1_1DeleteConfigurationAggregatorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteConfigurationAggregator";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigurationAggregatorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConfigurationAggregatorCommand = serializeAws_json1_1DeleteConfigurationAggregatorCommand;
async function serializeAws_json1_1DeleteConfigurationRecorderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteConfigurationRecorder";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConfigurationRecorderCommand = serializeAws_json1_1DeleteConfigurationRecorderCommand;
async function serializeAws_json1_1DeleteConformancePackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteConformancePack";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConformancePackCommand = serializeAws_json1_1DeleteConformancePackCommand;
async function serializeAws_json1_1DeleteDeliveryChannelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteDeliveryChannel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeliveryChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeliveryChannelCommand = serializeAws_json1_1DeleteDeliveryChannelCommand;
async function serializeAws_json1_1DeleteEvaluationResultsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteEvaluationResults";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEvaluationResultsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEvaluationResultsCommand = serializeAws_json1_1DeleteEvaluationResultsCommand;
async function serializeAws_json1_1DeleteOrganizationConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteOrganizationConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteOrganizationConfigRuleCommand = serializeAws_json1_1DeleteOrganizationConfigRuleCommand;
async function serializeAws_json1_1DeleteOrganizationConformancePackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DeleteOrganizationConformancePack";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteOrganizationConformancePackCommand = serializeAws_json1_1DeleteOrganizationConformancePackCommand;
async function serializeAws_json1_1DeletePendingAggregationRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DeletePendingAggregationRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePendingAggregationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePendingAggregationRequestCommand = serializeAws_json1_1DeletePendingAggregationRequestCommand;
async function serializeAws_json1_1DeleteRemediationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DeleteRemediationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemediationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRemediationConfigurationCommand = serializeAws_json1_1DeleteRemediationConfigurationCommand;
async function serializeAws_json1_1DeleteRemediationExceptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteRemediationExceptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRemediationExceptionsCommand = serializeAws_json1_1DeleteRemediationExceptionsCommand;
async function serializeAws_json1_1DeleteResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourceConfigCommand = serializeAws_json1_1DeleteResourceConfigCommand;
async function serializeAws_json1_1DeleteRetentionConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeleteRetentionConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRetentionConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRetentionConfigurationCommand = serializeAws_json1_1DeleteRetentionConfigurationCommand;
async function serializeAws_json1_1DeliverConfigSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DeliverConfigSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeliverConfigSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeliverConfigSnapshotCommand = serializeAws_json1_1DeliverConfigSnapshotCommand;
async function serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeAggregateComplianceByConfigRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand;
async function serializeAws_json1_1DescribeAggregationAuthorizationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeAggregationAuthorizations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAggregationAuthorizationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAggregationAuthorizationsCommand = serializeAws_json1_1DescribeAggregationAuthorizationsCommand;
async function serializeAws_json1_1DescribeComplianceByConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeComplianceByConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComplianceByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeComplianceByConfigRuleCommand = serializeAws_json1_1DescribeComplianceByConfigRuleCommand;
async function serializeAws_json1_1DescribeComplianceByResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeComplianceByResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComplianceByResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeComplianceByResourceCommand = serializeAws_json1_1DescribeComplianceByResourceCommand;
async function serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConfigRuleEvaluationStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand;
async function serializeAws_json1_1DescribeConfigRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeConfigRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigRulesCommand = serializeAws_json1_1DescribeConfigRulesCommand;
async function serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand;
async function serializeAws_json1_1DescribeConfigurationAggregatorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConfigurationAggregators";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigurationAggregatorsCommand = serializeAws_json1_1DescribeConfigurationAggregatorsCommand;
async function serializeAws_json1_1DescribeConfigurationRecorderStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConfigurationRecorderStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecorderStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = serializeAws_json1_1DescribeConfigurationRecorderStatusCommand;
async function serializeAws_json1_1DescribeConfigurationRecordersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConfigurationRecorders";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecordersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigurationRecordersCommand = serializeAws_json1_1DescribeConfigurationRecordersCommand;
async function serializeAws_json1_1DescribeConformancePackComplianceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeConformancePackCompliance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePackComplianceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConformancePackComplianceCommand = serializeAws_json1_1DescribeConformancePackComplianceCommand;
async function serializeAws_json1_1DescribeConformancePackStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeConformancePackStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePackStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConformancePackStatusCommand = serializeAws_json1_1DescribeConformancePackStatusCommand;
async function serializeAws_json1_1DescribeConformancePacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeConformancePacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConformancePacksCommand = serializeAws_json1_1DescribeConformancePacksCommand;
async function serializeAws_json1_1DescribeDeliveryChannelStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeDeliveryChannelStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDeliveryChannelStatusCommand = serializeAws_json1_1DescribeDeliveryChannelStatusCommand;
async function serializeAws_json1_1DescribeDeliveryChannelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeDeliveryChannels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDeliveryChannelsCommand = serializeAws_json1_1DescribeDeliveryChannelsCommand;
async function serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeOrganizationConfigRuleStatuses";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand;
async function serializeAws_json1_1DescribeOrganizationConfigRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeOrganizationConfigRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationConfigRulesCommand = serializeAws_json1_1DescribeOrganizationConfigRulesCommand;
async function serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeOrganizationConformancePackStatuses";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand;
async function serializeAws_json1_1DescribeOrganizationConformancePacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeOrganizationConformancePacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationConformancePacksCommand = serializeAws_json1_1DescribeOrganizationConformancePacksCommand;
async function serializeAws_json1_1DescribePendingAggregationRequestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribePendingAggregationRequests";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePendingAggregationRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePendingAggregationRequestsCommand = serializeAws_json1_1DescribePendingAggregationRequestsCommand;
async function serializeAws_json1_1DescribeRemediationConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeRemediationConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRemediationConfigurationsCommand = serializeAws_json1_1DescribeRemediationConfigurationsCommand;
async function serializeAws_json1_1DescribeRemediationExceptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.DescribeRemediationExceptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRemediationExceptionsCommand = serializeAws_json1_1DescribeRemediationExceptionsCommand;
async function serializeAws_json1_1DescribeRemediationExecutionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeRemediationExecutionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationExecutionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRemediationExecutionStatusCommand = serializeAws_json1_1DescribeRemediationExecutionStatusCommand;
async function serializeAws_json1_1DescribeRetentionConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.DescribeRetentionConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRetentionConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRetentionConfigurationsCommand = serializeAws_json1_1DescribeRetentionConfigurationsCommand;
async function serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand;
async function serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetAggregateConfigRuleComplianceSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand;
async function serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetAggregateDiscoveredResourceCounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand;
async function serializeAws_json1_1GetAggregateResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.GetAggregateResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAggregateResourceConfigCommand = serializeAws_json1_1GetAggregateResourceConfigCommand;
async function serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetComplianceDetailsByConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand;
async function serializeAws_json1_1GetComplianceDetailsByResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetComplianceDetailsByResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetComplianceDetailsByResourceCommand = serializeAws_json1_1GetComplianceDetailsByResourceCommand;
async function serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetComplianceSummaryByConfigRule";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand;
async function serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetComplianceSummaryByResourceType";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand;
async function serializeAws_json1_1GetConformancePackComplianceDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetConformancePackComplianceDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConformancePackComplianceDetailsCommand = serializeAws_json1_1GetConformancePackComplianceDetailsCommand;
async function serializeAws_json1_1GetConformancePackComplianceSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetConformancePackComplianceSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConformancePackComplianceSummaryCommand = serializeAws_json1_1GetConformancePackComplianceSummaryCommand;
async function serializeAws_json1_1GetDiscoveredResourceCountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.GetDiscoveredResourceCounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiscoveredResourceCountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDiscoveredResourceCountsCommand = serializeAws_json1_1GetDiscoveredResourceCountsCommand;
async function serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand;
async function serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.GetOrganizationConformancePackDetailedStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand;
async function serializeAws_json1_1GetResourceConfigHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.GetResourceConfigHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourceConfigHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourceConfigHistoryCommand = serializeAws_json1_1GetResourceConfigHistoryCommand;
async function serializeAws_json1_1ListAggregateDiscoveredResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.ListAggregateDiscoveredResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAggregateDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = serializeAws_json1_1ListAggregateDiscoveredResourcesCommand;
async function serializeAws_json1_1ListDiscoveredResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.ListDiscoveredResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDiscoveredResourcesCommand = serializeAws_json1_1ListDiscoveredResourcesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutAggregationAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutAggregationAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAggregationAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAggregationAuthorizationCommand = serializeAws_json1_1PutAggregationAuthorizationCommand;
async function serializeAws_json1_1PutConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutConfigRuleCommand = serializeAws_json1_1PutConfigRuleCommand;
async function serializeAws_json1_1PutConfigurationAggregatorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutConfigurationAggregator";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigurationAggregatorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutConfigurationAggregatorCommand = serializeAws_json1_1PutConfigurationAggregatorCommand;
async function serializeAws_json1_1PutConfigurationRecorderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutConfigurationRecorder";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutConfigurationRecorderCommand = serializeAws_json1_1PutConfigurationRecorderCommand;
async function serializeAws_json1_1PutConformancePackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutConformancePack";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutConformancePackCommand = serializeAws_json1_1PutConformancePackCommand;
async function serializeAws_json1_1PutDeliveryChannelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutDeliveryChannel";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDeliveryChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDeliveryChannelCommand = serializeAws_json1_1PutDeliveryChannelCommand;
async function serializeAws_json1_1PutEvaluationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutEvaluations";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEvaluationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutEvaluationsCommand = serializeAws_json1_1PutEvaluationsCommand;
async function serializeAws_json1_1PutOrganizationConfigRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutOrganizationConfigRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOrganizationConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutOrganizationConfigRuleCommand = serializeAws_json1_1PutOrganizationConfigRuleCommand;
async function serializeAws_json1_1PutOrganizationConformancePackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StarlingDoveService.PutOrganizationConformancePack";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOrganizationConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutOrganizationConformancePackCommand = serializeAws_json1_1PutOrganizationConformancePackCommand;
async function serializeAws_json1_1PutRemediationConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutRemediationConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRemediationConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRemediationConfigurationsCommand = serializeAws_json1_1PutRemediationConfigurationsCommand;
async function serializeAws_json1_1PutRemediationExceptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutRemediationExceptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRemediationExceptionsCommand = serializeAws_json1_1PutRemediationExceptionsCommand;
async function serializeAws_json1_1PutResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourceConfigCommand = serializeAws_json1_1PutResourceConfigCommand;
async function serializeAws_json1_1PutRetentionConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.PutRetentionConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRetentionConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRetentionConfigurationCommand = serializeAws_json1_1PutRetentionConfigurationCommand;
async function serializeAws_json1_1SelectResourceConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.SelectResourceConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1SelectResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SelectResourceConfigCommand = serializeAws_json1_1SelectResourceConfigCommand;
async function serializeAws_json1_1StartConfigRulesEvaluationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.StartConfigRulesEvaluation";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartConfigRulesEvaluationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartConfigRulesEvaluationCommand = serializeAws_json1_1StartConfigRulesEvaluationCommand;
async function serializeAws_json1_1StartConfigurationRecorderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.StartConfigurationRecorder";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartConfigurationRecorderCommand = serializeAws_json1_1StartConfigurationRecorderCommand;
async function serializeAws_json1_1StartRemediationExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.StartRemediationExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartRemediationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartRemediationExecutionCommand = serializeAws_json1_1StartRemediationExecutionCommand;
async function serializeAws_json1_1StopConfigurationRecorderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.StopConfigurationRecorder";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopConfigurationRecorderCommand = serializeAws_json1_1StopConfigurationRecorderCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StarlingDoveService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1BatchGetAggregateResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetAggregateResourceConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetAggregateResourceConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = deserializeAws_json1_1BatchGetAggregateResourceConfigCommand;
async function deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetResourceConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetResourceConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetResourceConfigCommand = deserializeAws_json1_1BatchGetResourceConfigCommand;
async function deserializeAws_json1_1BatchGetResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteAggregationAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAggregationAuthorizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAggregationAuthorizationCommand = deserializeAws_json1_1DeleteAggregationAuthorizationCommand;
async function deserializeAws_json1_1DeleteAggregationAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConfigRuleCommand = deserializeAws_json1_1DeleteConfigRuleCommand;
async function deserializeAws_json1_1DeleteConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConfigurationAggregatorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConfigurationAggregatorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConfigurationAggregatorCommand = deserializeAws_json1_1DeleteConfigurationAggregatorCommand;
async function deserializeAws_json1_1DeleteConfigurationAggregatorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConfigurationRecorderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConfigurationRecorderCommand = deserializeAws_json1_1DeleteConfigurationRecorderCommand;
async function deserializeAws_json1_1DeleteConfigurationRecorderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConformancePackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConformancePackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConformancePackCommand = deserializeAws_json1_1DeleteConformancePackCommand;
async function deserializeAws_json1_1DeleteConformancePackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDeliveryChannelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeliveryChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeliveryChannelCommand = deserializeAws_json1_1DeleteDeliveryChannelCommand;
async function deserializeAws_json1_1DeleteDeliveryChannelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LastDeliveryChannelDeleteFailedException":
        case "com.amazonaws.starling.dove#LastDeliveryChannelDeleteFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.starling.dove#NoSuchDeliveryChannelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEvaluationResultsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEvaluationResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEvaluationResultsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEvaluationResultsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEvaluationResultsCommand = deserializeAws_json1_1DeleteEvaluationResultsCommand;
async function deserializeAws_json1_1DeleteEvaluationResultsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteOrganizationConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = deserializeAws_json1_1DeleteOrganizationConfigRuleCommand;
async function deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteOrganizationConformancePackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteOrganizationConformancePackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteOrganizationConformancePackCommand = deserializeAws_json1_1DeleteOrganizationConformancePackCommand;
async function deserializeAws_json1_1DeleteOrganizationConformancePackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeletePendingAggregationRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePendingAggregationRequestCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePendingAggregationRequestCommand = deserializeAws_json1_1DeletePendingAggregationRequestCommand;
async function deserializeAws_json1_1DeletePendingAggregationRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRemediationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRemediationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemediationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRemediationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRemediationConfigurationCommand = deserializeAws_json1_1DeleteRemediationConfigurationCommand;
async function deserializeAws_json1_1DeleteRemediationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.starling.dove#NoSuchRemediationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RemediationInProgressException":
        case "com.amazonaws.starling.dove#RemediationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RemediationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRemediationExceptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemediationExceptionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRemediationExceptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRemediationExceptionsCommand = deserializeAws_json1_1DeleteRemediationExceptionsCommand;
async function deserializeAws_json1_1DeleteRemediationExceptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchRemediationExceptionException":
        case "com.amazonaws.starling.dove#NoSuchRemediationExceptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourceConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourceConfigCommand = deserializeAws_json1_1DeleteResourceConfigCommand;
async function deserializeAws_json1_1DeleteResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoRunningConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRetentionConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRetentionConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRetentionConfigurationCommand = deserializeAws_json1_1DeleteRetentionConfigurationCommand;
async function deserializeAws_json1_1DeleteRetentionConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchRetentionConfigurationException":
        case "com.amazonaws.starling.dove#NoSuchRetentionConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeliverConfigSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeliverConfigSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeliverConfigSnapshotResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeliverConfigSnapshotResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeliverConfigSnapshotCommand = deserializeAws_json1_1DeliverConfigSnapshotCommand;
async function deserializeAws_json1_1DeliverConfigSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoRunningConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.starling.dove#NoSuchDeliveryChannelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAggregateComplianceByConfigRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand;
async function deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAggregationAuthorizationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAggregationAuthorizationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAggregationAuthorizationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = deserializeAws_json1_1DescribeAggregationAuthorizationsCommand;
async function deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeComplianceByConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComplianceByConfigRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeComplianceByConfigRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = deserializeAws_json1_1DescribeComplianceByConfigRuleCommand;
async function deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeComplianceByResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeComplianceByResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComplianceByResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeComplianceByResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeComplianceByResourceCommand = deserializeAws_json1_1DescribeComplianceByResourceCommand;
async function deserializeAws_json1_1DescribeComplianceByResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigRuleEvaluationStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand;
async function deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigRulesCommand = deserializeAws_json1_1DescribeConfigRulesCommand;
async function deserializeAws_json1_1DescribeConfigRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationAggregatorSourcesStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand;
async function deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigurationAggregatorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationAggregatorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationAggregatorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = deserializeAws_json1_1DescribeConfigurationAggregatorsCommand;
async function deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationRecorderStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand;
async function deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigurationRecordersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigurationRecordersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationRecordersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationRecordersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigurationRecordersCommand = deserializeAws_json1_1DescribeConfigurationRecordersCommand;
async function deserializeAws_json1_1DescribeConfigurationRecordersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConformancePackComplianceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConformancePackComplianceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePackComplianceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConformancePackComplianceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConformancePackComplianceCommand = deserializeAws_json1_1DescribeConformancePackComplianceCommand;
async function deserializeAws_json1_1DescribeConformancePackComplianceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleInConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleInConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConformancePackStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConformancePackStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePackStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConformancePackStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConformancePackStatusCommand = deserializeAws_json1_1DescribeConformancePackStatusCommand;
async function deserializeAws_json1_1DescribeConformancePackStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
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
async function deserializeAws_json1_1DescribeConformancePacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConformancePacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePacksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConformancePacksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConformancePacksCommand = deserializeAws_json1_1DescribeConformancePacksCommand;
async function deserializeAws_json1_1DescribeConformancePacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDeliveryChannelStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeliveryChannelStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDeliveryChannelStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = deserializeAws_json1_1DescribeDeliveryChannelStatusCommand;
async function deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.starling.dove#NoSuchDeliveryChannelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDeliveryChannelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDeliveryChannelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeliveryChannelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDeliveryChannelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDeliveryChannelsCommand = deserializeAws_json1_1DescribeDeliveryChannelsCommand;
async function deserializeAws_json1_1DescribeDeliveryChannelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.starling.dove#NoSuchDeliveryChannelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationConfigRuleStatusesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand;
async function deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationConfigRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConfigRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationConfigRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = deserializeAws_json1_1DescribeOrganizationConfigRulesCommand;
async function deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationConformancePackStatusesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand;
async function deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationConformancePacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConformancePacksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationConformancePacksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = deserializeAws_json1_1DescribeOrganizationConformancePacksCommand;
async function deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePendingAggregationRequestsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePendingAggregationRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePendingAggregationRequestsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePendingAggregationRequestsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePendingAggregationRequestsCommand = deserializeAws_json1_1DescribePendingAggregationRequestsCommand;
async function deserializeAws_json1_1DescribePendingAggregationRequestsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeRemediationConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRemediationConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRemediationConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRemediationConfigurationsCommand = deserializeAws_json1_1DescribeRemediationConfigurationsCommand;
async function deserializeAws_json1_1DescribeRemediationConfigurationsCommandError(output, context) {
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
async function deserializeAws_json1_1DescribeRemediationExceptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationExceptionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRemediationExceptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRemediationExceptionsCommand = deserializeAws_json1_1DescribeRemediationExceptionsCommand;
async function deserializeAws_json1_1DescribeRemediationExceptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeRemediationExecutionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationExecutionStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRemediationExecutionStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = deserializeAws_json1_1DescribeRemediationExecutionStatusCommand;
async function deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.starling.dove#NoSuchRemediationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeRetentionConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRetentionConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRetentionConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRetentionConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRetentionConfigurationsCommand = deserializeAws_json1_1DescribeRetentionConfigurationsCommand;
async function deserializeAws_json1_1DescribeRetentionConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchRetentionConfigurationException":
        case "com.amazonaws.starling.dove#NoSuchRetentionConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAggregateComplianceDetailsByConfigRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand;
async function deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAggregateConfigRuleComplianceSummaryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand;
async function deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAggregateDiscoveredResourceCountsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand;
async function deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAggregateResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAggregateResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateResourceConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAggregateResourceConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAggregateResourceConfigCommand = deserializeAws_json1_1GetAggregateResourceConfigCommand;
async function deserializeAws_json1_1GetAggregateResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OversizedConfigurationItemException":
        case "com.amazonaws.starling.dove#OversizedConfigurationItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OversizedConfigurationItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotDiscoveredException":
        case "com.amazonaws.starling.dove#ResourceNotDiscoveredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceDetailsByConfigRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand;
async function deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetComplianceDetailsByResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceDetailsByResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailsByResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceDetailsByResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceDetailsByResourceCommand = deserializeAws_json1_1GetComplianceDetailsByResourceCommand;
async function deserializeAws_json1_1GetComplianceDetailsByResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceSummaryByConfigRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand;
async function deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError(output, context) {
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
async function deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceSummaryByResourceTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand;
async function deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetConformancePackComplianceDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConformancePackComplianceDetailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConformancePackComplianceDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = deserializeAws_json1_1GetConformancePackComplianceDetailsCommand;
async function deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleInConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleInConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetConformancePackComplianceSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConformancePackComplianceSummaryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConformancePackComplianceSummaryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = deserializeAws_json1_1GetConformancePackComplianceSummaryCommand;
async function deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDiscoveredResourceCountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDiscoveredResourceCountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiscoveredResourceCountsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDiscoveredResourceCountsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDiscoveredResourceCountsCommand = deserializeAws_json1_1GetDiscoveredResourceCountsCommand;
async function deserializeAws_json1_1GetDiscoveredResourceCountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOrganizationConfigRuleDetailedStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand;
async function deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOrganizationConformancePackDetailedStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand;
async function deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.starling.dove#NoSuchOrganizationConformancePackException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetResourceConfigHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourceConfigHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourceConfigHistoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourceConfigHistoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourceConfigHistoryCommand = deserializeAws_json1_1GetResourceConfigHistoryCommand;
async function deserializeAws_json1_1GetResourceConfigHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.starling.dove#InvalidTimeRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotDiscoveredException":
        case "com.amazonaws.starling.dove#ResourceNotDiscoveredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAggregateDiscoveredResourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand;
async function deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDiscoveredResourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDiscoveredResourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = deserializeAws_json1_1ListDiscoveredResourcesCommand;
async function deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.starling.dove#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutAggregationAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAggregationAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAggregationAuthorizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAggregationAuthorizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAggregationAuthorizationCommand = deserializeAws_json1_1PutAggregationAuthorizationCommand;
async function deserializeAws_json1_1PutAggregationAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutConfigRuleCommand = deserializeAws_json1_1PutConfigRuleCommand;
async function deserializeAws_json1_1PutConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfConfigRulesExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfConfigRulesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutConfigurationAggregatorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutConfigurationAggregatorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutConfigurationAggregatorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutConfigurationAggregatorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutConfigurationAggregatorCommand = deserializeAws_json1_1PutConfigurationAggregatorCommand;
async function deserializeAws_json1_1PutConfigurationAggregatorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.starling.dove#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.starling.dove#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.starling.dove#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.starling.dove#OrganizationAllFeaturesNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutConfigurationRecorderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutConfigurationRecorderCommand = deserializeAws_json1_1PutConfigurationRecorderCommand;
async function deserializeAws_json1_1PutConfigurationRecorderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidConfigurationRecorderNameException":
        case "com.amazonaws.starling.dove#InvalidConfigurationRecorderNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRecordingGroupException":
        case "com.amazonaws.starling.dove#InvalidRecordingGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRecordingGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.starling.dove#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfConfigurationRecordersExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfConfigurationRecordersExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutConformancePackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutConformancePackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutConformancePackResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutConformancePackResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutConformancePackCommand = deserializeAws_json1_1PutConformancePackCommand;
async function deserializeAws_json1_1PutConformancePackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConformancePackTemplateValidationException":
        case "com.amazonaws.starling.dove#ConformancePackTemplateValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfConformancePacksExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfConformancePacksExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutDeliveryChannelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDeliveryChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDeliveryChannelCommand = deserializeAws_json1_1PutDeliveryChannelCommand;
async function deserializeAws_json1_1PutDeliveryChannelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientDeliveryPolicyException":
        case "com.amazonaws.starling.dove#InsufficientDeliveryPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeliveryChannelNameException":
        case "com.amazonaws.starling.dove#InvalidDeliveryChannelNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3KeyPrefixException":
        case "com.amazonaws.starling.dove#InvalidS3KeyPrefixException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSNSTopicARNException":
        case "com.amazonaws.starling.dove#InvalidSNSTopicARNException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfDeliveryChannelsExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfDeliveryChannelsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoAvailableConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchBucketException":
        case "com.amazonaws.starling.dove#NoSuchBucketException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchBucketExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutEvaluationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutEvaluationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEvaluationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutEvaluationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutEvaluationsCommand = deserializeAws_json1_1PutEvaluationsCommand;
async function deserializeAws_json1_1PutEvaluationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResultTokenException":
        case "com.amazonaws.starling.dove#InvalidResultTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResultTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutOrganizationConfigRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutOrganizationConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOrganizationConfigRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutOrganizationConfigRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutOrganizationConfigRuleCommand = deserializeAws_json1_1PutOrganizationConfigRuleCommand;
async function deserializeAws_json1_1PutOrganizationConfigRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfOrganizationConfigRulesExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfOrganizationConfigRulesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.starling.dove#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.starling.dove#OrganizationAllFeaturesNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutOrganizationConformancePackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutOrganizationConformancePackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOrganizationConformancePackResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutOrganizationConformancePackResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutOrganizationConformancePackCommand = deserializeAws_json1_1PutOrganizationConformancePackCommand;
async function deserializeAws_json1_1PutOrganizationConformancePackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfOrganizationConformancePacksExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfOrganizationConformancePacksExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.starling.dove#NoAvailableOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.starling.dove#OrganizationAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.starling.dove#OrganizationAllFeaturesNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationConformancePackTemplateValidationException":
        case "com.amazonaws.starling.dove#OrganizationConformancePackTemplateValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutRemediationConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRemediationConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRemediationConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRemediationConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRemediationConfigurationsCommand = deserializeAws_json1_1PutRemediationConfigurationsCommand;
async function deserializeAws_json1_1PutRemediationConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutRemediationExceptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRemediationExceptionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRemediationExceptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRemediationExceptionsCommand = deserializeAws_json1_1PutRemediationExceptionsCommand;
async function deserializeAws_json1_1PutRemediationExceptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourceConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourceConfigCommand = deserializeAws_json1_1PutResourceConfigCommand;
async function deserializeAws_json1_1PutResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxActiveResourcesExceededException":
        case "com.amazonaws.starling.dove#MaxActiveResourcesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoRunningConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutRetentionConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRetentionConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRetentionConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRetentionConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRetentionConfigurationCommand = deserializeAws_json1_1PutRetentionConfigurationCommand;
async function deserializeAws_json1_1PutRetentionConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxNumberOfRetentionConfigurationsExceededException":
        case "com.amazonaws.starling.dove#MaxNumberOfRetentionConfigurationsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SelectResourceConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SelectResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SelectResourceConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SelectResourceConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SelectResourceConfigCommand = deserializeAws_json1_1SelectResourceConfigCommand;
async function deserializeAws_json1_1SelectResourceConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidExpressionException":
        case "com.amazonaws.starling.dove#InvalidExpressionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLimitException":
        case "com.amazonaws.starling.dove#InvalidLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.starling.dove#InvalidNextTokenException":
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
async function deserializeAws_json1_1StartConfigRulesEvaluationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartConfigRulesEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartConfigRulesEvaluationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartConfigRulesEvaluationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartConfigRulesEvaluationCommand = deserializeAws_json1_1StartConfigRulesEvaluationCommand;
async function deserializeAws_json1_1StartConfigRulesEvaluationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.starling.dove#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.starling.dove#NoSuchConfigRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.starling.dove#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartConfigurationRecorderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartConfigurationRecorderCommand = deserializeAws_json1_1StartConfigurationRecorderCommand;
async function deserializeAws_json1_1StartConfigurationRecorderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoAvailableDeliveryChannelException":
        case "com.amazonaws.starling.dove#NoAvailableDeliveryChannelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartRemediationExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartRemediationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartRemediationExecutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartRemediationExecutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartRemediationExecutionCommand = deserializeAws_json1_1StartRemediationExecutionCommand;
async function deserializeAws_json1_1StartRemediationExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.starling.dove#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.starling.dove#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.starling.dove#NoSuchRemediationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopConfigurationRecorderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopConfigurationRecorderCommand = deserializeAws_json1_1StopConfigurationRecorderCommand;
async function deserializeAws_json1_1StopConfigurationRecorderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.starling.dove#NoSuchConfigurationRecorderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ResourceNotFoundException":
        case "com.amazonaws.starling.dove#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.starling.dove#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ResourceNotFoundException":
        case "com.amazonaws.starling.dove#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.starling.dove#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConformancePackTemplateValidationException(body, context);
    const contents = Object.assign({ name: "ConformancePackTemplateValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientDeliveryPolicyException(body, context);
    const contents = Object.assign({ name: "InsufficientDeliveryPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientPermissionsException(body, context);
    const contents = Object.assign({ name: "InsufficientPermissionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConfigurationRecorderNameException(body, context);
    const contents = Object.assign({ name: "InvalidConfigurationRecorderNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeliveryChannelNameException(body, context);
    const contents = Object.assign({ name: "InvalidDeliveryChannelNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidExpressionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidExpressionException(body, context);
    const contents = Object.assign({ name: "InvalidExpressionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLimitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLimitException(body, context);
    const contents = Object.assign({ name: "InvalidLimitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRecordingGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRecordingGroupException(body, context);
    const contents = Object.assign({ name: "InvalidRecordingGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResultTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResultTokenException(body, context);
    const contents = Object.assign({ name: "InvalidResultTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
    const contents = Object.assign({ name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3KeyPrefixException(body, context);
    const contents = Object.assign({ name: "InvalidS3KeyPrefixException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSNSTopicARNException(body, context);
    const contents = Object.assign({ name: "InvalidSNSTopicARNException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = Object.assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LastDeliveryChannelDeleteFailedException(body, context);
    const contents = Object.assign({ name: "LastDeliveryChannelDeleteFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxActiveResourcesExceededException(body, context);
    const contents = Object.assign({ name: "MaxActiveResourcesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConfigRulesExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfConfigRulesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfConfigurationRecordersExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConformancePacksExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfConformancePacksExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfDeliveryChannelsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfOrganizationConfigRulesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfOrganizationConformancePacksExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException(body, context);
    const contents = Object.assign({ name: "MaxNumberOfRetentionConfigurationsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableConfigurationRecorderException(body, context);
    const contents = Object.assign({ name: "NoAvailableConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableDeliveryChannelException(body, context);
    const contents = Object.assign({ name: "NoAvailableDeliveryChannelException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
    const contents = Object.assign({ name: "NoAvailableOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoRunningConfigurationRecorderException(body, context);
    const contents = Object.assign({ name: "NoRunningConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchBucketExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchBucketException(body, context);
    const contents = Object.assign({ name: "NoSuchBucketException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigRuleException(body, context);
    const contents = Object.assign({ name: "NoSuchConfigRuleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigRuleInConformancePackException(body, context);
    const contents = Object.assign({ name: "NoSuchConfigRuleInConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigurationAggregatorException(body, context);
    const contents = Object.assign({ name: "NoSuchConfigurationAggregatorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigurationRecorderException(body, context);
    const contents = Object.assign({ name: "NoSuchConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConformancePackException(body, context);
    const contents = Object.assign({ name: "NoSuchConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchDeliveryChannelException(body, context);
    const contents = Object.assign({ name: "NoSuchDeliveryChannelException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchOrganizationConfigRuleException(body, context);
    const contents = Object.assign({ name: "NoSuchOrganizationConfigRuleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchOrganizationConformancePackException(body, context);
    const contents = Object.assign({ name: "NoSuchOrganizationConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRemediationConfigurationException(body, context);
    const contents = Object.assign({ name: "NoSuchRemediationConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRemediationExceptionException(body, context);
    const contents = Object.assign({ name: "NoSuchRemediationExceptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRetentionConfigurationException(body, context);
    const contents = Object.assign({ name: "NoSuchRetentionConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationAccessDeniedException(body, context);
    const contents = Object.assign({ name: "OrganizationAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException(body, context);
    const contents = Object.assign({ name: "OrganizationAllFeaturesNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationConformancePackTemplateValidationException(body, context);
    const contents = Object.assign({ name: "OrganizationConformancePackTemplateValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OversizedConfigurationItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OversizedConfigurationItemException(body, context);
    const contents = Object.assign({ name: "OversizedConfigurationItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RemediationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RemediationInProgressException(body, context);
    const contents = Object.assign({ name: "RemediationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotDiscoveredException(body, context);
    const contents = Object.assign({ name: "ResourceNotDiscoveredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AccountAggregationSource = (input, context) => {
    const bodyParams = {};
    if (input.AccountIds !== undefined) {
        bodyParams["AccountIds"] = serializeAws_json1_1AccountAggregationSourceAccountList(input.AccountIds, context);
    }
    if (input.AllAwsRegions !== undefined) {
        bodyParams["AllAwsRegions"] = input.AllAwsRegions;
    }
    if (input.AwsRegions !== undefined) {
        bodyParams["AwsRegions"] = serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AccountAggregationSourceAccountList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AccountAggregationSourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AccountAggregationSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AggregateResourceIdentifier = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.SourceAccountId !== undefined) {
        bodyParams["SourceAccountId"] = input.SourceAccountId;
    }
    if (input.SourceRegion !== undefined) {
        bodyParams["SourceRegion"] = input.SourceRegion;
    }
    return bodyParams;
};
const serializeAws_json1_1AggregatedSourceStatusTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AggregatorRegionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchGetAggregateResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.ResourceIdentifiers !== undefined) {
        bodyParams["ResourceIdentifiers"] = serializeAws_json1_1ResourceIdentifiersList(input.ResourceIdentifiers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceKeys !== undefined) {
        bodyParams["resourceKeys"] = serializeAws_json1_1ResourceKeys(input.resourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ComplianceResourceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ComplianceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConfigRule = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleArn !== undefined) {
        bodyParams["ConfigRuleArn"] = input.ConfigRuleArn;
    }
    if (input.ConfigRuleId !== undefined) {
        bodyParams["ConfigRuleId"] = input.ConfigRuleId;
    }
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ConfigRuleState !== undefined) {
        bodyParams["ConfigRuleState"] = input.ConfigRuleState;
    }
    if (input.CreatedBy !== undefined) {
        bodyParams["CreatedBy"] = input.CreatedBy;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.InputParameters !== undefined) {
        bodyParams["InputParameters"] = input.InputParameters;
    }
    if (input.MaximumExecutionFrequency !== undefined) {
        bodyParams["MaximumExecutionFrequency"] = input.MaximumExecutionFrequency;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = serializeAws_json1_1Scope(input.Scope, context);
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = serializeAws_json1_1Source(input.Source, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigRuleComplianceFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigRuleComplianceSummaryFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigRuleNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConfigSnapshotDeliveryProperties = (input, context) => {
    const bodyParams = {};
    if (input.deliveryFrequency !== undefined) {
        bodyParams["deliveryFrequency"] = input.deliveryFrequency;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigurationAggregatorNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConfigurationRecorder = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.recordingGroup !== undefined) {
        bodyParams["recordingGroup"] = serializeAws_json1_1RecordingGroup(input.recordingGroup, context);
    }
    if (input.roleARN !== undefined) {
        bodyParams["roleARN"] = input.roleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigurationRecorderNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConformancePackComplianceFilters = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConformancePackComplianceResourceIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConformancePackConfigRuleNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConformancePackEvaluationFilters = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context);
    }
    if (input.ResourceIds !== undefined) {
        bodyParams["ResourceIds"] = serializeAws_json1_1ConformancePackComplianceResourceIds(input.ResourceIds, context);
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ConformancePackInputParameter = (input, context) => {
    const bodyParams = {};
    if (input.ParameterName !== undefined) {
        bodyParams["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined) {
        bodyParams["ParameterValue"] = input.ParameterValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ConformancePackInputParameters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ConformancePackInputParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ConformancePackNamesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConformancePackNamesToSummarizeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteAggregationAuthorizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthorizedAccountId !== undefined) {
        bodyParams["AuthorizedAccountId"] = input.AuthorizedAccountId;
    }
    if (input.AuthorizedAwsRegion !== undefined) {
        bodyParams["AuthorizedAwsRegion"] = input.AuthorizedAwsRegion;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConfigurationAggregatorRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConfigurationRecorderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorderName !== undefined) {
        bodyParams["ConfigurationRecorderName"] = input.ConfigurationRecorderName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConformancePackRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackName !== undefined) {
        bodyParams["ConformancePackName"] = input.ConformancePackName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDeliveryChannelRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryChannelName !== undefined) {
        bodyParams["DeliveryChannelName"] = input.DeliveryChannelName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEvaluationResultsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteOrganizationConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationConfigRuleName !== undefined) {
        bodyParams["OrganizationConfigRuleName"] = input.OrganizationConfigRuleName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteOrganizationConformancePackRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationConformancePackName !== undefined) {
        bodyParams["OrganizationConformancePackName"] =
            input.OrganizationConformancePackName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePendingAggregationRequestRequest = (input, context) => {
    const bodyParams = {};
    if (input.RequesterAccountId !== undefined) {
        bodyParams["RequesterAccountId"] = input.RequesterAccountId;
    }
    if (input.RequesterAwsRegion !== undefined) {
        bodyParams["RequesterAwsRegion"] = input.RequesterAwsRegion;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRemediationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRemediationExceptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ResourceKeys !== undefined) {
        bodyParams["ResourceKeys"] = serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRetentionConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.RetentionConfigurationName !== undefined) {
        bodyParams["RetentionConfigurationName"] = input.RetentionConfigurationName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeliverConfigSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.deliveryChannelName !== undefined) {
        bodyParams["deliveryChannelName"] = input.deliveryChannelName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeliveryChannel = (input, context) => {
    const bodyParams = {};
    if (input.configSnapshotDeliveryProperties !== undefined) {
        bodyParams["configSnapshotDeliveryProperties"] = serializeAws_json1_1ConfigSnapshotDeliveryProperties(input.configSnapshotDeliveryProperties, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.s3BucketName !== undefined) {
        bodyParams["s3BucketName"] = input.s3BucketName;
    }
    if (input.s3KeyPrefix !== undefined) {
        bodyParams["s3KeyPrefix"] = input.s3KeyPrefix;
    }
    if (input.snsTopicARN !== undefined) {
        bodyParams["snsTopicARN"] = input.snsTopicARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DeliveryChannelNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ConfigRuleComplianceFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAggregationAuthorizationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeComplianceByConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceTypes !== undefined) {
        bodyParams["ComplianceTypes"] = serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context);
    }
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeComplianceByResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceTypes !== undefined) {
        bodyParams["ComplianceTypes"] = serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UpdateStatus !== undefined) {
        bodyParams["UpdateStatus"] = serializeAws_json1_1AggregatedSourceStatusTypeList(input.UpdateStatus, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigurationAggregatorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorNames !== undefined) {
        bodyParams["ConfigurationAggregatorNames"] = serializeAws_json1_1ConfigurationAggregatorNameList(input.ConfigurationAggregatorNames, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigurationRecorderStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorderNames !== undefined) {
        bodyParams["ConfigurationRecorderNames"] = serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigurationRecordersRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorderNames !== undefined) {
        bodyParams["ConfigurationRecorderNames"] = serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConformancePackComplianceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackName !== undefined) {
        bodyParams["ConformancePackName"] = input.ConformancePackName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ConformancePackComplianceFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConformancePackStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackNames !== undefined) {
        bodyParams["ConformancePackNames"] = serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConformancePacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackNames !== undefined) {
        bodyParams["ConformancePackNames"] = serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDeliveryChannelStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryChannelNames !== undefined) {
        bodyParams["DeliveryChannelNames"] = serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDeliveryChannelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryChannelNames !== undefined) {
        bodyParams["DeliveryChannelNames"] = serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConfigRuleNames !== undefined) {
        bodyParams["OrganizationConfigRuleNames"] = serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationConfigRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConfigRuleNames !== undefined) {
        bodyParams["OrganizationConfigRuleNames"] = serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConformancePackNames !== undefined) {
        bodyParams["OrganizationConformancePackNames"] = serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationConformancePacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConformancePackNames !== undefined) {
        bodyParams["OrganizationConformancePackNames"] = serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePendingAggregationRequestsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRemediationConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRemediationExceptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceKeys !== undefined) {
        bodyParams["ResourceKeys"] = serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRemediationExecutionStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceKeys !== undefined) {
        bodyParams["ResourceKeys"] = serializeAws_json1_1ResourceKeys(input.ResourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRetentionConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.RetentionConfigurationNames !== undefined) {
        bodyParams["RetentionConfigurationNames"] = serializeAws_json1_1RetentionConfigurationNameList(input.RetentionConfigurationNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Evaluation = (input, context) => {
    const bodyParams = {};
    if (input.Annotation !== undefined) {
        bodyParams["Annotation"] = input.Annotation;
    }
    if (input.ComplianceResourceId !== undefined) {
        bodyParams["ComplianceResourceId"] = input.ComplianceResourceId;
    }
    if (input.ComplianceResourceType !== undefined) {
        bodyParams["ComplianceResourceType"] = input.ComplianceResourceType;
    }
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.OrderingTimestamp !== undefined) {
        bodyParams["OrderingTimestamp"] = Math.round(input.OrderingTimestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1Evaluations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Evaluation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ExcludedAccounts = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ExecutionControls = (input, context) => {
    const bodyParams = {};
    if (input.SsmControls !== undefined) {
        bodyParams["SsmControls"] = serializeAws_json1_1SsmControls(input.SsmControls, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.AwsRegion !== undefined) {
        bodyParams["AwsRegion"] = input.AwsRegion;
    }
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ConfigRuleComplianceSummaryFilters(input.Filters, context);
    }
    if (input.GroupByKey !== undefined) {
        bodyParams["GroupByKey"] = input.GroupByKey;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ResourceCountFilters(input.Filters, context);
    }
    if (input.GroupByKey !== undefined) {
        bodyParams["GroupByKey"] = input.GroupByKey;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAggregateResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.ResourceIdentifier !== undefined) {
        bodyParams["ResourceIdentifier"] = serializeAws_json1_1AggregateResourceIdentifier(input.ResourceIdentifier, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceTypes !== undefined) {
        bodyParams["ComplianceTypes"] = serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context);
    }
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetComplianceDetailsByResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceTypes !== undefined) {
        bodyParams["ComplianceTypes"] = serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceTypes !== undefined) {
        bodyParams["ResourceTypes"] = serializeAws_json1_1ResourceTypes(input.ResourceTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetConformancePackComplianceDetailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackName !== undefined) {
        bodyParams["ConformancePackName"] = input.ConformancePackName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ConformancePackEvaluationFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConformancePackComplianceSummaryRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackNames !== undefined) {
        bodyParams["ConformancePackNames"] = serializeAws_json1_1ConformancePackNamesToSummarizeList(input.ConformancePackNames, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDiscoveredResourceCountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceTypes !== undefined) {
        bodyParams["resourceTypes"] = serializeAws_json1_1ResourceTypes(input.resourceTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1StatusDetailFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConfigRuleName !== undefined) {
        bodyParams["OrganizationConfigRuleName"] = input.OrganizationConfigRuleName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1OrganizationResourceDetailedStatusFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationConformancePackName !== undefined) {
        bodyParams["OrganizationConformancePackName"] =
            input.OrganizationConformancePackName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResourceConfigHistoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.chronologicalOrder !== undefined) {
        bodyParams["chronologicalOrder"] = input.chronologicalOrder;
    }
    if (input.earlierTime !== undefined) {
        bodyParams["earlierTime"] = Math.round(input.earlierTime.getTime() / 1000);
    }
    if (input.laterTime !== undefined) {
        bodyParams["laterTime"] = Math.round(input.laterTime.getTime() / 1000);
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceId !== undefined) {
        bodyParams["resourceId"] = input.resourceId;
    }
    if (input.resourceType !== undefined) {
        bodyParams["resourceType"] = input.resourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAggregateDiscoveredResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ResourceFilters(input.Filters, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDiscoveredResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeDeletedResources !== undefined) {
        bodyParams["includeDeletedResources"] = input.includeDeletedResources;
    }
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceIds !== undefined) {
        bodyParams["resourceIds"] = serializeAws_json1_1ResourceIdList(input.resourceIds, context);
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    if (input.resourceType !== undefined) {
        bodyParams["resourceType"] = input.resourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationAggregationSource = (input, context) => {
    const bodyParams = {};
    if (input.AllAwsRegions !== undefined) {
        bodyParams["AllAwsRegions"] = input.AllAwsRegions;
    }
    if (input.AwsRegions !== undefined) {
        bodyParams["AwsRegions"] = serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationConfigRuleNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OrganizationConfigRuleTriggerTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OrganizationConformancePackNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OrganizationCustomRuleMetadata = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.InputParameters !== undefined) {
        bodyParams["InputParameters"] = input.InputParameters;
    }
    if (input.LambdaFunctionArn !== undefined) {
        bodyParams["LambdaFunctionArn"] = input.LambdaFunctionArn;
    }
    if (input.MaximumExecutionFrequency !== undefined) {
        bodyParams["MaximumExecutionFrequency"] = input.MaximumExecutionFrequency;
    }
    if (input.OrganizationConfigRuleTriggerTypes !== undefined) {
        bodyParams["OrganizationConfigRuleTriggerTypes"] = serializeAws_json1_1OrganizationConfigRuleTriggerTypes(input.OrganizationConfigRuleTriggerTypes, context);
    }
    if (input.ResourceIdScope !== undefined) {
        bodyParams["ResourceIdScope"] = input.ResourceIdScope;
    }
    if (input.ResourceTypesScope !== undefined) {
        bodyParams["ResourceTypesScope"] = serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context);
    }
    if (input.TagKeyScope !== undefined) {
        bodyParams["TagKeyScope"] = input.TagKeyScope;
    }
    if (input.TagValueScope !== undefined) {
        bodyParams["TagValueScope"] = input.TagValueScope;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationManagedRuleMetadata = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.InputParameters !== undefined) {
        bodyParams["InputParameters"] = input.InputParameters;
    }
    if (input.MaximumExecutionFrequency !== undefined) {
        bodyParams["MaximumExecutionFrequency"] = input.MaximumExecutionFrequency;
    }
    if (input.ResourceIdScope !== undefined) {
        bodyParams["ResourceIdScope"] = input.ResourceIdScope;
    }
    if (input.ResourceTypesScope !== undefined) {
        bodyParams["ResourceTypesScope"] = serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context);
    }
    if (input.RuleIdentifier !== undefined) {
        bodyParams["RuleIdentifier"] = input.RuleIdentifier;
    }
    if (input.TagKeyScope !== undefined) {
        bodyParams["TagKeyScope"] = input.TagKeyScope;
    }
    if (input.TagValueScope !== undefined) {
        bodyParams["TagValueScope"] = input.TagValueScope;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationResourceDetailedStatusFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1PutAggregationAuthorizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthorizedAccountId !== undefined) {
        bodyParams["AuthorizedAccountId"] = input.AuthorizedAccountId;
    }
    if (input.AuthorizedAwsRegion !== undefined) {
        bodyParams["AuthorizedAwsRegion"] = input.AuthorizedAwsRegion;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRule !== undefined) {
        bodyParams["ConfigRule"] = serializeAws_json1_1ConfigRule(input.ConfigRule, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutConfigurationAggregatorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountAggregationSources !== undefined) {
        bodyParams["AccountAggregationSources"] = serializeAws_json1_1AccountAggregationSourceList(input.AccountAggregationSources, context);
    }
    if (input.ConfigurationAggregatorName !== undefined) {
        bodyParams["ConfigurationAggregatorName"] =
            input.ConfigurationAggregatorName;
    }
    if (input.OrganizationAggregationSource !== undefined) {
        bodyParams["OrganizationAggregationSource"] = serializeAws_json1_1OrganizationAggregationSource(input.OrganizationAggregationSource, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutConfigurationRecorderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorder !== undefined) {
        bodyParams["ConfigurationRecorder"] = serializeAws_json1_1ConfigurationRecorder(input.ConfigurationRecorder, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutConformancePackRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackInputParameters !== undefined) {
        bodyParams["ConformancePackInputParameters"] = serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context);
    }
    if (input.ConformancePackName !== undefined) {
        bodyParams["ConformancePackName"] = input.ConformancePackName;
    }
    if (input.DeliveryS3Bucket !== undefined) {
        bodyParams["DeliveryS3Bucket"] = input.DeliveryS3Bucket;
    }
    if (input.DeliveryS3KeyPrefix !== undefined) {
        bodyParams["DeliveryS3KeyPrefix"] = input.DeliveryS3KeyPrefix;
    }
    if (input.TemplateBody !== undefined) {
        bodyParams["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateS3Uri !== undefined) {
        bodyParams["TemplateS3Uri"] = input.TemplateS3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1PutDeliveryChannelRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryChannel !== undefined) {
        bodyParams["DeliveryChannel"] = serializeAws_json1_1DeliveryChannel(input.DeliveryChannel, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutEvaluationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Evaluations !== undefined) {
        bodyParams["Evaluations"] = serializeAws_json1_1Evaluations(input.Evaluations, context);
    }
    if (input.ResultToken !== undefined) {
        bodyParams["ResultToken"] = input.ResultToken;
    }
    if (input.TestMode !== undefined) {
        bodyParams["TestMode"] = input.TestMode;
    }
    return bodyParams;
};
const serializeAws_json1_1PutOrganizationConfigRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExcludedAccounts !== undefined) {
        bodyParams["ExcludedAccounts"] = serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context);
    }
    if (input.OrganizationConfigRuleName !== undefined) {
        bodyParams["OrganizationConfigRuleName"] = input.OrganizationConfigRuleName;
    }
    if (input.OrganizationCustomRuleMetadata !== undefined) {
        bodyParams["OrganizationCustomRuleMetadata"] = serializeAws_json1_1OrganizationCustomRuleMetadata(input.OrganizationCustomRuleMetadata, context);
    }
    if (input.OrganizationManagedRuleMetadata !== undefined) {
        bodyParams["OrganizationManagedRuleMetadata"] = serializeAws_json1_1OrganizationManagedRuleMetadata(input.OrganizationManagedRuleMetadata, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutOrganizationConformancePackRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConformancePackInputParameters !== undefined) {
        bodyParams["ConformancePackInputParameters"] = serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context);
    }
    if (input.DeliveryS3Bucket !== undefined) {
        bodyParams["DeliveryS3Bucket"] = input.DeliveryS3Bucket;
    }
    if (input.DeliveryS3KeyPrefix !== undefined) {
        bodyParams["DeliveryS3KeyPrefix"] = input.DeliveryS3KeyPrefix;
    }
    if (input.ExcludedAccounts !== undefined) {
        bodyParams["ExcludedAccounts"] = serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context);
    }
    if (input.OrganizationConformancePackName !== undefined) {
        bodyParams["OrganizationConformancePackName"] =
            input.OrganizationConformancePackName;
    }
    if (input.TemplateBody !== undefined) {
        bodyParams["TemplateBody"] = input.TemplateBody;
    }
    if (input.TemplateS3Uri !== undefined) {
        bodyParams["TemplateS3Uri"] = input.TemplateS3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRemediationConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.RemediationConfigurations !== undefined) {
        bodyParams["RemediationConfigurations"] = serializeAws_json1_1RemediationConfigurations(input.RemediationConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutRemediationExceptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ExpirationTime !== undefined) {
        bodyParams["ExpirationTime"] = Math.round(input.ExpirationTime.getTime() / 1000);
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = input.Message;
    }
    if (input.ResourceKeys !== undefined) {
        bodyParams["ResourceKeys"] = serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = input.Configuration;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.SchemaVersionId !== undefined) {
        bodyParams["SchemaVersionId"] = input.SchemaVersionId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutRetentionConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.RetentionPeriodInDays !== undefined) {
        bodyParams["RetentionPeriodInDays"] = input.RetentionPeriodInDays;
    }
    return bodyParams;
};
const serializeAws_json1_1RecordingGroup = (input, context) => {
    const bodyParams = {};
    if (input.allSupported !== undefined) {
        bodyParams["allSupported"] = input.allSupported;
    }
    if (input.includeGlobalResourceTypes !== undefined) {
        bodyParams["includeGlobalResourceTypes"] = input.includeGlobalResourceTypes;
    }
    if (input.resourceTypes !== undefined) {
        bodyParams["resourceTypes"] = serializeAws_json1_1ResourceTypeList(input.resourceTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ReevaluateConfigRuleNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RemediationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.Automatic !== undefined) {
        bodyParams["Automatic"] = input.Automatic;
    }
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.CreatedByService !== undefined) {
        bodyParams["CreatedByService"] = input.CreatedByService;
    }
    if (input.ExecutionControls !== undefined) {
        bodyParams["ExecutionControls"] = serializeAws_json1_1ExecutionControls(input.ExecutionControls, context);
    }
    if (input.MaximumAutomaticAttempts !== undefined) {
        bodyParams["MaximumAutomaticAttempts"] = input.MaximumAutomaticAttempts;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1RemediationParameters(input.Parameters, context);
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.RetryAttemptSeconds !== undefined) {
        bodyParams["RetryAttemptSeconds"] = input.RetryAttemptSeconds;
    }
    if (input.TargetId !== undefined) {
        bodyParams["TargetId"] = input.TargetId;
    }
    if (input.TargetType !== undefined) {
        bodyParams["TargetType"] = input.TargetType;
    }
    if (input.TargetVersion !== undefined) {
        bodyParams["TargetVersion"] = input.TargetVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1RemediationConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RemediationConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RemediationExceptionResourceKey = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1RemediationExceptionResourceKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RemediationExceptionResourceKey(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RemediationParameterValue = (input, context) => {
    const bodyParams = {};
    if (input.ResourceValue !== undefined) {
        bodyParams["ResourceValue"] = serializeAws_json1_1ResourceValue(input.ResourceValue, context);
    }
    if (input.StaticValue !== undefined) {
        bodyParams["StaticValue"] = serializeAws_json1_1StaticValue(input.StaticValue, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RemediationParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1RemediationParameterValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ResourceCountFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceIdentifiersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AggregateResourceIdentifier(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResourceKey = (input, context) => {
    const bodyParams = {};
    if (input.resourceId !== undefined) {
        bodyParams["resourceId"] = input.resourceId;
    }
    if (input.resourceType !== undefined) {
        bodyParams["resourceType"] = input.resourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceKey(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResourceTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceTypesScope = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceValue = (input, context) => {
    const bodyParams = {};
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1RetentionConfigurationNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Scope = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceResourceId !== undefined) {
        bodyParams["ComplianceResourceId"] = input.ComplianceResourceId;
    }
    if (input.ComplianceResourceTypes !== undefined) {
        bodyParams["ComplianceResourceTypes"] = serializeAws_json1_1ComplianceResourceTypes(input.ComplianceResourceTypes, context);
    }
    if (input.TagKey !== undefined) {
        bodyParams["TagKey"] = input.TagKey;
    }
    if (input.TagValue !== undefined) {
        bodyParams["TagValue"] = input.TagValue;
    }
    return bodyParams;
};
const serializeAws_json1_1SelectResourceConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.Expression !== undefined) {
        bodyParams["Expression"] = input.Expression;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Source = (input, context) => {
    const bodyParams = {};
    if (input.Owner !== undefined) {
        bodyParams["Owner"] = input.Owner;
    }
    if (input.SourceDetails !== undefined) {
        bodyParams["SourceDetails"] = serializeAws_json1_1SourceDetails(input.SourceDetails, context);
    }
    if (input.SourceIdentifier !== undefined) {
        bodyParams["SourceIdentifier"] = input.SourceIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceDetail = (input, context) => {
    const bodyParams = {};
    if (input.EventSource !== undefined) {
        bodyParams["EventSource"] = input.EventSource;
    }
    if (input.MaximumExecutionFrequency !== undefined) {
        bodyParams["MaximumExecutionFrequency"] = input.MaximumExecutionFrequency;
    }
    if (input.MessageType !== undefined) {
        bodyParams["MessageType"] = input.MessageType;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceDetails = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SourceDetail(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SsmControls = (input, context) => {
    const bodyParams = {};
    if (input.ConcurrentExecutionRatePercentage !== undefined) {
        bodyParams["ConcurrentExecutionRatePercentage"] =
            input.ConcurrentExecutionRatePercentage;
    }
    if (input.ErrorPercentage !== undefined) {
        bodyParams["ErrorPercentage"] = input.ErrorPercentage;
    }
    return bodyParams;
};
const serializeAws_json1_1StartConfigRulesEvaluationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleNames !== undefined) {
        bodyParams["ConfigRuleNames"] = serializeAws_json1_1ReevaluateConfigRuleNames(input.ConfigRuleNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartConfigurationRecorderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorderName !== undefined) {
        bodyParams["ConfigurationRecorderName"] = input.ConfigurationRecorderName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartRemediationExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigRuleName !== undefined) {
        bodyParams["ConfigRuleName"] = input.ConfigRuleName;
    }
    if (input.ResourceKeys !== undefined) {
        bodyParams["ResourceKeys"] = serializeAws_json1_1ResourceKeys(input.ResourceKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StaticParameterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StaticValue = (input, context) => {
    const bodyParams = {};
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1StaticParameterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StatusDetailFilters = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.MemberAccountRuleStatus !== undefined) {
        bodyParams["MemberAccountRuleStatus"] = input.MemberAccountRuleStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1StopConfigurationRecorderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationRecorderName !== undefined) {
        bodyParams["ConfigurationRecorderName"] = input.ConfigurationRecorderName;
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
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
const serializeAws_json1_1TagsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
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
const deserializeAws_json1_1AccountAggregationSource = (output, context) => {
    let contents = {
        __type: "AccountAggregationSource",
        AccountIds: undefined,
        AllAwsRegions: undefined,
        AwsRegions: undefined
    };
    if (output.AccountIds !== undefined && output.AccountIds !== null) {
        contents.AccountIds = deserializeAws_json1_1AccountAggregationSourceAccountList(output.AccountIds, context);
    }
    if (output.AllAwsRegions !== undefined && output.AllAwsRegions !== null) {
        contents.AllAwsRegions = output.AllAwsRegions;
    }
    if (output.AwsRegions !== undefined && output.AwsRegions !== null) {
        contents.AwsRegions = deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context);
    }
    return contents;
};
const deserializeAws_json1_1AccountAggregationSourceAccountList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AccountAggregationSourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccountAggregationSource(entry, context));
};
const deserializeAws_json1_1AggregateComplianceByConfigRule = (output, context) => {
    let contents = {
        __type: "AggregateComplianceByConfigRule",
        AccountId: undefined,
        AwsRegion: undefined,
        Compliance: undefined,
        ConfigRuleName: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.AwsRegion !== undefined && output.AwsRegion !== null) {
        contents.AwsRegion = output.AwsRegion;
    }
    if (output.Compliance !== undefined && output.Compliance !== null) {
        contents.Compliance = deserializeAws_json1_1Compliance(output.Compliance, context);
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    return contents;
};
const deserializeAws_json1_1AggregateComplianceByConfigRuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregateComplianceByConfigRule(entry, context));
};
const deserializeAws_json1_1AggregateComplianceCount = (output, context) => {
    let contents = {
        __type: "AggregateComplianceCount",
        ComplianceSummary: undefined,
        GroupName: undefined
    };
    if (output.ComplianceSummary !== undefined &&
        output.ComplianceSummary !== null) {
        contents.ComplianceSummary = deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context);
    }
    if (output.GroupName !== undefined && output.GroupName !== null) {
        contents.GroupName = output.GroupName;
    }
    return contents;
};
const deserializeAws_json1_1AggregateComplianceCountList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregateComplianceCount(entry, context));
};
const deserializeAws_json1_1AggregateEvaluationResult = (output, context) => {
    let contents = {
        __type: "AggregateEvaluationResult",
        AccountId: undefined,
        Annotation: undefined,
        AwsRegion: undefined,
        ComplianceType: undefined,
        ConfigRuleInvokedTime: undefined,
        EvaluationResultIdentifier: undefined,
        ResultRecordedTime: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.Annotation !== undefined && output.Annotation !== null) {
        contents.Annotation = output.Annotation;
    }
    if (output.AwsRegion !== undefined && output.AwsRegion !== null) {
        contents.AwsRegion = output.AwsRegion;
    }
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.ConfigRuleInvokedTime !== undefined &&
        output.ConfigRuleInvokedTime !== null) {
        contents.ConfigRuleInvokedTime = new Date(Math.round(output.ConfigRuleInvokedTime * 1000));
    }
    if (output.EvaluationResultIdentifier !== undefined &&
        output.EvaluationResultIdentifier !== null) {
        contents.EvaluationResultIdentifier = deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context);
    }
    if (output.ResultRecordedTime !== undefined &&
        output.ResultRecordedTime !== null) {
        contents.ResultRecordedTime = new Date(Math.round(output.ResultRecordedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AggregateEvaluationResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregateEvaluationResult(entry, context));
};
const deserializeAws_json1_1AggregateResourceIdentifier = (output, context) => {
    let contents = {
        __type: "AggregateResourceIdentifier",
        ResourceId: undefined,
        ResourceName: undefined,
        ResourceType: undefined,
        SourceAccountId: undefined,
        SourceRegion: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceName !== undefined && output.ResourceName !== null) {
        contents.ResourceName = output.ResourceName;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.SourceAccountId !== undefined && output.SourceAccountId !== null) {
        contents.SourceAccountId = output.SourceAccountId;
    }
    if (output.SourceRegion !== undefined && output.SourceRegion !== null) {
        contents.SourceRegion = output.SourceRegion;
    }
    return contents;
};
const deserializeAws_json1_1AggregatedSourceStatus = (output, context) => {
    let contents = {
        __type: "AggregatedSourceStatus",
        AwsRegion: undefined,
        LastErrorCode: undefined,
        LastErrorMessage: undefined,
        LastUpdateStatus: undefined,
        LastUpdateTime: undefined,
        SourceId: undefined,
        SourceType: undefined
    };
    if (output.AwsRegion !== undefined && output.AwsRegion !== null) {
        contents.AwsRegion = output.AwsRegion;
    }
    if (output.LastErrorCode !== undefined && output.LastErrorCode !== null) {
        contents.LastErrorCode = output.LastErrorCode;
    }
    if (output.LastErrorMessage !== undefined &&
        output.LastErrorMessage !== null) {
        contents.LastErrorMessage = output.LastErrorMessage;
    }
    if (output.LastUpdateStatus !== undefined &&
        output.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = output.LastUpdateStatus;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.SourceId !== undefined && output.SourceId !== null) {
        contents.SourceId = output.SourceId;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1AggregatedSourceStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregatedSourceStatus(entry, context));
};
const deserializeAws_json1_1AggregationAuthorization = (output, context) => {
    let contents = {
        __type: "AggregationAuthorization",
        AggregationAuthorizationArn: undefined,
        AuthorizedAccountId: undefined,
        AuthorizedAwsRegion: undefined,
        CreationTime: undefined
    };
    if (output.AggregationAuthorizationArn !== undefined &&
        output.AggregationAuthorizationArn !== null) {
        contents.AggregationAuthorizationArn = output.AggregationAuthorizationArn;
    }
    if (output.AuthorizedAccountId !== undefined &&
        output.AuthorizedAccountId !== null) {
        contents.AuthorizedAccountId = output.AuthorizedAccountId;
    }
    if (output.AuthorizedAwsRegion !== undefined &&
        output.AuthorizedAwsRegion !== null) {
        contents.AuthorizedAwsRegion = output.AuthorizedAwsRegion;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AggregationAuthorizationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregationAuthorization(entry, context));
};
const deserializeAws_json1_1AggregatorRegionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BaseConfigurationItem = (output, context) => {
    let contents = {
        __type: "BaseConfigurationItem",
        accountId: undefined,
        arn: undefined,
        availabilityZone: undefined,
        awsRegion: undefined,
        configuration: undefined,
        configurationItemCaptureTime: undefined,
        configurationItemStatus: undefined,
        configurationStateId: undefined,
        resourceCreationTime: undefined,
        resourceId: undefined,
        resourceName: undefined,
        resourceType: undefined,
        supplementaryConfiguration: undefined,
        version: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.availabilityZone = output.availabilityZone;
    }
    if (output.awsRegion !== undefined && output.awsRegion !== null) {
        contents.awsRegion = output.awsRegion;
    }
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = output.configuration;
    }
    if (output.configurationItemCaptureTime !== undefined &&
        output.configurationItemCaptureTime !== null) {
        contents.configurationItemCaptureTime = new Date(Math.round(output.configurationItemCaptureTime * 1000));
    }
    if (output.configurationItemStatus !== undefined &&
        output.configurationItemStatus !== null) {
        contents.configurationItemStatus = output.configurationItemStatus;
    }
    if (output.configurationStateId !== undefined &&
        output.configurationStateId !== null) {
        contents.configurationStateId = output.configurationStateId;
    }
    if (output.resourceCreationTime !== undefined &&
        output.resourceCreationTime !== null) {
        contents.resourceCreationTime = new Date(Math.round(output.resourceCreationTime * 1000));
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.supplementaryConfiguration !== undefined &&
        output.supplementaryConfiguration !== null) {
        contents.supplementaryConfiguration = deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context);
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1BaseConfigurationItems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BaseConfigurationItem(entry, context));
};
const deserializeAws_json1_1BatchGetAggregateResourceConfigResponse = (output, context) => {
    let contents = {
        __type: "BatchGetAggregateResourceConfigResponse",
        BaseConfigurationItems: undefined,
        UnprocessedResourceIdentifiers: undefined
    };
    if (output.BaseConfigurationItems !== undefined &&
        output.BaseConfigurationItems !== null) {
        contents.BaseConfigurationItems = deserializeAws_json1_1BaseConfigurationItems(output.BaseConfigurationItems, context);
    }
    if (output.UnprocessedResourceIdentifiers !== undefined &&
        output.UnprocessedResourceIdentifiers !== null) {
        contents.UnprocessedResourceIdentifiers = deserializeAws_json1_1UnprocessedResourceIdentifierList(output.UnprocessedResourceIdentifiers, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetResourceConfigResponse = (output, context) => {
    let contents = {
        __type: "BatchGetResourceConfigResponse",
        baseConfigurationItems: undefined,
        unprocessedResourceKeys: undefined
    };
    if (output.baseConfigurationItems !== undefined &&
        output.baseConfigurationItems !== null) {
        contents.baseConfigurationItems = deserializeAws_json1_1BaseConfigurationItems(output.baseConfigurationItems, context);
    }
    if (output.unprocessedResourceKeys !== undefined &&
        output.unprocessedResourceKeys !== null) {
        contents.unprocessedResourceKeys = deserializeAws_json1_1ResourceKeys(output.unprocessedResourceKeys, context);
    }
    return contents;
};
const deserializeAws_json1_1Compliance = (output, context) => {
    let contents = {
        __type: "Compliance",
        ComplianceContributorCount: undefined,
        ComplianceType: undefined
    };
    if (output.ComplianceContributorCount !== undefined &&
        output.ComplianceContributorCount !== null) {
        contents.ComplianceContributorCount = deserializeAws_json1_1ComplianceContributorCount(output.ComplianceContributorCount, context);
    }
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceByConfigRule = (output, context) => {
    let contents = {
        __type: "ComplianceByConfigRule",
        Compliance: undefined,
        ConfigRuleName: undefined
    };
    if (output.Compliance !== undefined && output.Compliance !== null) {
        contents.Compliance = deserializeAws_json1_1Compliance(output.Compliance, context);
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceByConfigRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceByConfigRule(entry, context));
};
const deserializeAws_json1_1ComplianceByResource = (output, context) => {
    let contents = {
        __type: "ComplianceByResource",
        Compliance: undefined,
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.Compliance !== undefined && output.Compliance !== null) {
        contents.Compliance = deserializeAws_json1_1Compliance(output.Compliance, context);
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceByResources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceByResource(entry, context));
};
const deserializeAws_json1_1ComplianceContributorCount = (output, context) => {
    let contents = {
        __type: "ComplianceContributorCount",
        CapExceeded: undefined,
        CappedCount: undefined
    };
    if (output.CapExceeded !== undefined && output.CapExceeded !== null) {
        contents.CapExceeded = output.CapExceeded;
    }
    if (output.CappedCount !== undefined && output.CappedCount !== null) {
        contents.CappedCount = output.CappedCount;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceResourceTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ComplianceSummariesByResourceType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceSummaryByResourceType(entry, context));
};
const deserializeAws_json1_1ComplianceSummary = (output, context) => {
    let contents = {
        __type: "ComplianceSummary",
        ComplianceSummaryTimestamp: undefined,
        CompliantResourceCount: undefined,
        NonCompliantResourceCount: undefined
    };
    if (output.ComplianceSummaryTimestamp !== undefined &&
        output.ComplianceSummaryTimestamp !== null) {
        contents.ComplianceSummaryTimestamp = new Date(Math.round(output.ComplianceSummaryTimestamp * 1000));
    }
    if (output.CompliantResourceCount !== undefined &&
        output.CompliantResourceCount !== null) {
        contents.CompliantResourceCount = deserializeAws_json1_1ComplianceContributorCount(output.CompliantResourceCount, context);
    }
    if (output.NonCompliantResourceCount !== undefined &&
        output.NonCompliantResourceCount !== null) {
        contents.NonCompliantResourceCount = deserializeAws_json1_1ComplianceContributorCount(output.NonCompliantResourceCount, context);
    }
    return contents;
};
const deserializeAws_json1_1ComplianceSummaryByResourceType = (output, context) => {
    let contents = {
        __type: "ComplianceSummaryByResourceType",
        ComplianceSummary: undefined,
        ResourceType: undefined
    };
    if (output.ComplianceSummary !== undefined &&
        output.ComplianceSummary !== null) {
        contents.ComplianceSummary = deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context);
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ConfigExportDeliveryInfo = (output, context) => {
    let contents = {
        __type: "ConfigExportDeliveryInfo",
        lastAttemptTime: undefined,
        lastErrorCode: undefined,
        lastErrorMessage: undefined,
        lastStatus: undefined,
        lastSuccessfulTime: undefined,
        nextDeliveryTime: undefined
    };
    if (output.lastAttemptTime !== undefined && output.lastAttemptTime !== null) {
        contents.lastAttemptTime = new Date(Math.round(output.lastAttemptTime * 1000));
    }
    if (output.lastErrorCode !== undefined && output.lastErrorCode !== null) {
        contents.lastErrorCode = output.lastErrorCode;
    }
    if (output.lastErrorMessage !== undefined &&
        output.lastErrorMessage !== null) {
        contents.lastErrorMessage = output.lastErrorMessage;
    }
    if (output.lastStatus !== undefined && output.lastStatus !== null) {
        contents.lastStatus = output.lastStatus;
    }
    if (output.lastSuccessfulTime !== undefined &&
        output.lastSuccessfulTime !== null) {
        contents.lastSuccessfulTime = new Date(Math.round(output.lastSuccessfulTime * 1000));
    }
    if (output.nextDeliveryTime !== undefined &&
        output.nextDeliveryTime !== null) {
        contents.nextDeliveryTime = new Date(Math.round(output.nextDeliveryTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConfigRule = (output, context) => {
    let contents = {
        __type: "ConfigRule",
        ConfigRuleArn: undefined,
        ConfigRuleId: undefined,
        ConfigRuleName: undefined,
        ConfigRuleState: undefined,
        CreatedBy: undefined,
        Description: undefined,
        InputParameters: undefined,
        MaximumExecutionFrequency: undefined,
        Scope: undefined,
        Source: undefined
    };
    if (output.ConfigRuleArn !== undefined && output.ConfigRuleArn !== null) {
        contents.ConfigRuleArn = output.ConfigRuleArn;
    }
    if (output.ConfigRuleId !== undefined && output.ConfigRuleId !== null) {
        contents.ConfigRuleId = output.ConfigRuleId;
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.ConfigRuleState !== undefined && output.ConfigRuleState !== null) {
        contents.ConfigRuleState = output.ConfigRuleState;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.InputParameters !== undefined && output.InputParameters !== null) {
        contents.InputParameters = output.InputParameters;
    }
    if (output.MaximumExecutionFrequency !== undefined &&
        output.MaximumExecutionFrequency !== null) {
        contents.MaximumExecutionFrequency = output.MaximumExecutionFrequency;
    }
    if (output.Scope !== undefined && output.Scope !== null) {
        contents.Scope = deserializeAws_json1_1Scope(output.Scope, context);
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1Source(output.Source, context);
    }
    return contents;
};
const deserializeAws_json1_1ConfigRuleEvaluationStatus = (output, context) => {
    let contents = {
        __type: "ConfigRuleEvaluationStatus",
        ConfigRuleArn: undefined,
        ConfigRuleId: undefined,
        ConfigRuleName: undefined,
        FirstActivatedTime: undefined,
        FirstEvaluationStarted: undefined,
        LastErrorCode: undefined,
        LastErrorMessage: undefined,
        LastFailedEvaluationTime: undefined,
        LastFailedInvocationTime: undefined,
        LastSuccessfulEvaluationTime: undefined,
        LastSuccessfulInvocationTime: undefined
    };
    if (output.ConfigRuleArn !== undefined && output.ConfigRuleArn !== null) {
        contents.ConfigRuleArn = output.ConfigRuleArn;
    }
    if (output.ConfigRuleId !== undefined && output.ConfigRuleId !== null) {
        contents.ConfigRuleId = output.ConfigRuleId;
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.FirstActivatedTime !== undefined &&
        output.FirstActivatedTime !== null) {
        contents.FirstActivatedTime = new Date(Math.round(output.FirstActivatedTime * 1000));
    }
    if (output.FirstEvaluationStarted !== undefined &&
        output.FirstEvaluationStarted !== null) {
        contents.FirstEvaluationStarted = output.FirstEvaluationStarted;
    }
    if (output.LastErrorCode !== undefined && output.LastErrorCode !== null) {
        contents.LastErrorCode = output.LastErrorCode;
    }
    if (output.LastErrorMessage !== undefined &&
        output.LastErrorMessage !== null) {
        contents.LastErrorMessage = output.LastErrorMessage;
    }
    if (output.LastFailedEvaluationTime !== undefined &&
        output.LastFailedEvaluationTime !== null) {
        contents.LastFailedEvaluationTime = new Date(Math.round(output.LastFailedEvaluationTime * 1000));
    }
    if (output.LastFailedInvocationTime !== undefined &&
        output.LastFailedInvocationTime !== null) {
        contents.LastFailedInvocationTime = new Date(Math.round(output.LastFailedInvocationTime * 1000));
    }
    if (output.LastSuccessfulEvaluationTime !== undefined &&
        output.LastSuccessfulEvaluationTime !== null) {
        contents.LastSuccessfulEvaluationTime = new Date(Math.round(output.LastSuccessfulEvaluationTime * 1000));
    }
    if (output.LastSuccessfulInvocationTime !== undefined &&
        output.LastSuccessfulInvocationTime !== null) {
        contents.LastSuccessfulInvocationTime = new Date(Math.round(output.LastSuccessfulInvocationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConfigRuleEvaluationStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigRuleEvaluationStatus(entry, context));
};
const deserializeAws_json1_1ConfigRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigRule(entry, context));
};
const deserializeAws_json1_1ConfigSnapshotDeliveryProperties = (output, context) => {
    let contents = {
        __type: "ConfigSnapshotDeliveryProperties",
        deliveryFrequency: undefined
    };
    if (output.deliveryFrequency !== undefined &&
        output.deliveryFrequency !== null) {
        contents.deliveryFrequency = output.deliveryFrequency;
    }
    return contents;
};
const deserializeAws_json1_1ConfigStreamDeliveryInfo = (output, context) => {
    let contents = {
        __type: "ConfigStreamDeliveryInfo",
        lastErrorCode: undefined,
        lastErrorMessage: undefined,
        lastStatus: undefined,
        lastStatusChangeTime: undefined
    };
    if (output.lastErrorCode !== undefined && output.lastErrorCode !== null) {
        contents.lastErrorCode = output.lastErrorCode;
    }
    if (output.lastErrorMessage !== undefined &&
        output.lastErrorMessage !== null) {
        contents.lastErrorMessage = output.lastErrorMessage;
    }
    if (output.lastStatus !== undefined && output.lastStatus !== null) {
        contents.lastStatus = output.lastStatus;
    }
    if (output.lastStatusChangeTime !== undefined &&
        output.lastStatusChangeTime !== null) {
        contents.lastStatusChangeTime = new Date(Math.round(output.lastStatusChangeTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationAggregator = (output, context) => {
    let contents = {
        __type: "ConfigurationAggregator",
        AccountAggregationSources: undefined,
        ConfigurationAggregatorArn: undefined,
        ConfigurationAggregatorName: undefined,
        CreationTime: undefined,
        LastUpdatedTime: undefined,
        OrganizationAggregationSource: undefined
    };
    if (output.AccountAggregationSources !== undefined &&
        output.AccountAggregationSources !== null) {
        contents.AccountAggregationSources = deserializeAws_json1_1AccountAggregationSourceList(output.AccountAggregationSources, context);
    }
    if (output.ConfigurationAggregatorArn !== undefined &&
        output.ConfigurationAggregatorArn !== null) {
        contents.ConfigurationAggregatorArn = output.ConfigurationAggregatorArn;
    }
    if (output.ConfigurationAggregatorName !== undefined &&
        output.ConfigurationAggregatorName !== null) {
        contents.ConfigurationAggregatorName = output.ConfigurationAggregatorName;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.OrganizationAggregationSource !== undefined &&
        output.OrganizationAggregationSource !== null) {
        contents.OrganizationAggregationSource = deserializeAws_json1_1OrganizationAggregationSource(output.OrganizationAggregationSource, context);
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationAggregatorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationAggregator(entry, context));
};
const deserializeAws_json1_1ConfigurationItem = (output, context) => {
    let contents = {
        __type: "ConfigurationItem",
        accountId: undefined,
        arn: undefined,
        availabilityZone: undefined,
        awsRegion: undefined,
        configuration: undefined,
        configurationItemCaptureTime: undefined,
        configurationItemMD5Hash: undefined,
        configurationItemStatus: undefined,
        configurationStateId: undefined,
        relatedEvents: undefined,
        relationships: undefined,
        resourceCreationTime: undefined,
        resourceId: undefined,
        resourceName: undefined,
        resourceType: undefined,
        supplementaryConfiguration: undefined,
        tags: undefined,
        version: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.availabilityZone = output.availabilityZone;
    }
    if (output.awsRegion !== undefined && output.awsRegion !== null) {
        contents.awsRegion = output.awsRegion;
    }
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = output.configuration;
    }
    if (output.configurationItemCaptureTime !== undefined &&
        output.configurationItemCaptureTime !== null) {
        contents.configurationItemCaptureTime = new Date(Math.round(output.configurationItemCaptureTime * 1000));
    }
    if (output.configurationItemMD5Hash !== undefined &&
        output.configurationItemMD5Hash !== null) {
        contents.configurationItemMD5Hash = output.configurationItemMD5Hash;
    }
    if (output.configurationItemStatus !== undefined &&
        output.configurationItemStatus !== null) {
        contents.configurationItemStatus = output.configurationItemStatus;
    }
    if (output.configurationStateId !== undefined &&
        output.configurationStateId !== null) {
        contents.configurationStateId = output.configurationStateId;
    }
    if (output.relatedEvents !== undefined && output.relatedEvents !== null) {
        contents.relatedEvents = deserializeAws_json1_1RelatedEventList(output.relatedEvents, context);
    }
    if (output.relationships !== undefined && output.relationships !== null) {
        contents.relationships = deserializeAws_json1_1RelationshipList(output.relationships, context);
    }
    if (output.resourceCreationTime !== undefined &&
        output.resourceCreationTime !== null) {
        contents.resourceCreationTime = new Date(Math.round(output.resourceCreationTime * 1000));
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.supplementaryConfiguration !== undefined &&
        output.supplementaryConfiguration !== null) {
        contents.supplementaryConfiguration = deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationItem(entry, context));
};
const deserializeAws_json1_1ConfigurationRecorder = (output, context) => {
    let contents = {
        __type: "ConfigurationRecorder",
        name: undefined,
        recordingGroup: undefined,
        roleARN: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.recordingGroup !== undefined && output.recordingGroup !== null) {
        contents.recordingGroup = deserializeAws_json1_1RecordingGroup(output.recordingGroup, context);
    }
    if (output.roleARN !== undefined && output.roleARN !== null) {
        contents.roleARN = output.roleARN;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationRecorderList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationRecorder(entry, context));
};
const deserializeAws_json1_1ConfigurationRecorderStatus = (output, context) => {
    let contents = {
        __type: "ConfigurationRecorderStatus",
        lastErrorCode: undefined,
        lastErrorMessage: undefined,
        lastStartTime: undefined,
        lastStatus: undefined,
        lastStatusChangeTime: undefined,
        lastStopTime: undefined,
        name: undefined,
        recording: undefined
    };
    if (output.lastErrorCode !== undefined && output.lastErrorCode !== null) {
        contents.lastErrorCode = output.lastErrorCode;
    }
    if (output.lastErrorMessage !== undefined &&
        output.lastErrorMessage !== null) {
        contents.lastErrorMessage = output.lastErrorMessage;
    }
    if (output.lastStartTime !== undefined && output.lastStartTime !== null) {
        contents.lastStartTime = new Date(Math.round(output.lastStartTime * 1000));
    }
    if (output.lastStatus !== undefined && output.lastStatus !== null) {
        contents.lastStatus = output.lastStatus;
    }
    if (output.lastStatusChangeTime !== undefined &&
        output.lastStatusChangeTime !== null) {
        contents.lastStatusChangeTime = new Date(Math.round(output.lastStatusChangeTime * 1000));
    }
    if (output.lastStopTime !== undefined && output.lastStopTime !== null) {
        contents.lastStopTime = new Date(Math.round(output.lastStopTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.recording !== undefined && output.recording !== null) {
        contents.recording = output.recording;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationRecorderStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationRecorderStatus(entry, context));
};
const deserializeAws_json1_1ConformancePackComplianceSummary = (output, context) => {
    let contents = {
        __type: "ConformancePackComplianceSummary",
        ConformancePackComplianceStatus: undefined,
        ConformancePackName: undefined
    };
    if (output.ConformancePackComplianceStatus !== undefined &&
        output.ConformancePackComplianceStatus !== null) {
        contents.ConformancePackComplianceStatus =
            output.ConformancePackComplianceStatus;
    }
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackComplianceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackComplianceSummary(entry, context));
};
const deserializeAws_json1_1ConformancePackDetail = (output, context) => {
    let contents = {
        __type: "ConformancePackDetail",
        ConformancePackArn: undefined,
        ConformancePackId: undefined,
        ConformancePackInputParameters: undefined,
        ConformancePackName: undefined,
        CreatedBy: undefined,
        DeliveryS3Bucket: undefined,
        DeliveryS3KeyPrefix: undefined,
        LastUpdateRequestedTime: undefined
    };
    if (output.ConformancePackArn !== undefined &&
        output.ConformancePackArn !== null) {
        contents.ConformancePackArn = output.ConformancePackArn;
    }
    if (output.ConformancePackId !== undefined &&
        output.ConformancePackId !== null) {
        contents.ConformancePackId = output.ConformancePackId;
    }
    if (output.ConformancePackInputParameters !== undefined &&
        output.ConformancePackInputParameters !== null) {
        contents.ConformancePackInputParameters = deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context);
    }
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.DeliveryS3Bucket !== undefined &&
        output.DeliveryS3Bucket !== null) {
        contents.DeliveryS3Bucket = output.DeliveryS3Bucket;
    }
    if (output.DeliveryS3KeyPrefix !== undefined &&
        output.DeliveryS3KeyPrefix !== null) {
        contents.DeliveryS3KeyPrefix = output.DeliveryS3KeyPrefix;
    }
    if (output.LastUpdateRequestedTime !== undefined &&
        output.LastUpdateRequestedTime !== null) {
        contents.LastUpdateRequestedTime = new Date(Math.round(output.LastUpdateRequestedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackDetail(entry, context));
};
const deserializeAws_json1_1ConformancePackEvaluationResult = (output, context) => {
    let contents = {
        __type: "ConformancePackEvaluationResult",
        Annotation: undefined,
        ComplianceType: undefined,
        ConfigRuleInvokedTime: undefined,
        EvaluationResultIdentifier: undefined,
        ResultRecordedTime: undefined
    };
    if (output.Annotation !== undefined && output.Annotation !== null) {
        contents.Annotation = output.Annotation;
    }
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.ConfigRuleInvokedTime !== undefined &&
        output.ConfigRuleInvokedTime !== null) {
        contents.ConfigRuleInvokedTime = new Date(Math.round(output.ConfigRuleInvokedTime * 1000));
    }
    if (output.EvaluationResultIdentifier !== undefined &&
        output.EvaluationResultIdentifier !== null) {
        contents.EvaluationResultIdentifier = deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context);
    }
    if (output.ResultRecordedTime !== undefined &&
        output.ResultRecordedTime !== null) {
        contents.ResultRecordedTime = new Date(Math.round(output.ResultRecordedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackInputParameter = (output, context) => {
    let contents = {
        __type: "ConformancePackInputParameter",
        ParameterName: undefined,
        ParameterValue: undefined
    };
    if (output.ParameterName !== undefined && output.ParameterName !== null) {
        contents.ParameterName = output.ParameterName;
    }
    if (output.ParameterValue !== undefined && output.ParameterValue !== null) {
        contents.ParameterValue = output.ParameterValue;
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackInputParameters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackInputParameter(entry, context));
};
const deserializeAws_json1_1ConformancePackRuleCompliance = (output, context) => {
    let contents = {
        __type: "ConformancePackRuleCompliance",
        ComplianceType: undefined,
        ConfigRuleName: undefined
    };
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackRuleComplianceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackRuleCompliance(entry, context));
};
const deserializeAws_json1_1ConformancePackRuleEvaluationResultsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackEvaluationResult(entry, context));
};
const deserializeAws_json1_1ConformancePackStatusDetail = (output, context) => {
    let contents = {
        __type: "ConformancePackStatusDetail",
        ConformancePackArn: undefined,
        ConformancePackId: undefined,
        ConformancePackName: undefined,
        ConformancePackState: undefined,
        ConformancePackStatusReason: undefined,
        LastUpdateCompletedTime: undefined,
        LastUpdateRequestedTime: undefined,
        StackArn: undefined
    };
    if (output.ConformancePackArn !== undefined &&
        output.ConformancePackArn !== null) {
        contents.ConformancePackArn = output.ConformancePackArn;
    }
    if (output.ConformancePackId !== undefined &&
        output.ConformancePackId !== null) {
        contents.ConformancePackId = output.ConformancePackId;
    }
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    if (output.ConformancePackState !== undefined &&
        output.ConformancePackState !== null) {
        contents.ConformancePackState = output.ConformancePackState;
    }
    if (output.ConformancePackStatusReason !== undefined &&
        output.ConformancePackStatusReason !== null) {
        contents.ConformancePackStatusReason = output.ConformancePackStatusReason;
    }
    if (output.LastUpdateCompletedTime !== undefined &&
        output.LastUpdateCompletedTime !== null) {
        contents.LastUpdateCompletedTime = new Date(Math.round(output.LastUpdateCompletedTime * 1000));
    }
    if (output.LastUpdateRequestedTime !== undefined &&
        output.LastUpdateRequestedTime !== null) {
        contents.LastUpdateRequestedTime = new Date(Math.round(output.LastUpdateRequestedTime * 1000));
    }
    if (output.StackArn !== undefined && output.StackArn !== null) {
        contents.StackArn = output.StackArn;
    }
    return contents;
};
const deserializeAws_json1_1ConformancePackStatusDetailsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConformancePackStatusDetail(entry, context));
};
const deserializeAws_json1_1ConformancePackTemplateValidationException = (output, context) => {
    let contents = {
        __type: "ConformancePackTemplateValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteEvaluationResultsResponse = (output, context) => {
    let contents = {
        __type: "DeleteEvaluationResultsResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRemediationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteRemediationConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRemediationExceptionsResponse = (output, context) => {
    let contents = {
        __type: "DeleteRemediationExceptionsResponse",
        FailedBatches: undefined
    };
    if (output.FailedBatches !== undefined && output.FailedBatches !== null) {
        contents.FailedBatches = deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches(output.FailedBatches, context);
    }
    return contents;
};
const deserializeAws_json1_1DeliverConfigSnapshotResponse = (output, context) => {
    let contents = {
        __type: "DeliverConfigSnapshotResponse",
        configSnapshotId: undefined
    };
    if (output.configSnapshotId !== undefined &&
        output.configSnapshotId !== null) {
        contents.configSnapshotId = output.configSnapshotId;
    }
    return contents;
};
const deserializeAws_json1_1DeliveryChannel = (output, context) => {
    let contents = {
        __type: "DeliveryChannel",
        configSnapshotDeliveryProperties: undefined,
        name: undefined,
        s3BucketName: undefined,
        s3KeyPrefix: undefined,
        snsTopicARN: undefined
    };
    if (output.configSnapshotDeliveryProperties !== undefined &&
        output.configSnapshotDeliveryProperties !== null) {
        contents.configSnapshotDeliveryProperties = deserializeAws_json1_1ConfigSnapshotDeliveryProperties(output.configSnapshotDeliveryProperties, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.s3BucketName !== undefined && output.s3BucketName !== null) {
        contents.s3BucketName = output.s3BucketName;
    }
    if (output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null) {
        contents.s3KeyPrefix = output.s3KeyPrefix;
    }
    if (output.snsTopicARN !== undefined && output.snsTopicARN !== null) {
        contents.snsTopicARN = output.snsTopicARN;
    }
    return contents;
};
const deserializeAws_json1_1DeliveryChannelList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeliveryChannel(entry, context));
};
const deserializeAws_json1_1DeliveryChannelStatus = (output, context) => {
    let contents = {
        __type: "DeliveryChannelStatus",
        configHistoryDeliveryInfo: undefined,
        configSnapshotDeliveryInfo: undefined,
        configStreamDeliveryInfo: undefined,
        name: undefined
    };
    if (output.configHistoryDeliveryInfo !== undefined &&
        output.configHistoryDeliveryInfo !== null) {
        contents.configHistoryDeliveryInfo = deserializeAws_json1_1ConfigExportDeliveryInfo(output.configHistoryDeliveryInfo, context);
    }
    if (output.configSnapshotDeliveryInfo !== undefined &&
        output.configSnapshotDeliveryInfo !== null) {
        contents.configSnapshotDeliveryInfo = deserializeAws_json1_1ConfigExportDeliveryInfo(output.configSnapshotDeliveryInfo, context);
    }
    if (output.configStreamDeliveryInfo !== undefined &&
        output.configStreamDeliveryInfo !== null) {
        contents.configStreamDeliveryInfo = deserializeAws_json1_1ConfigStreamDeliveryInfo(output.configStreamDeliveryInfo, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1DeliveryChannelStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeliveryChannelStatus(entry, context));
};
const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAggregateComplianceByConfigRulesResponse",
        AggregateComplianceByConfigRules: undefined,
        NextToken: undefined
    };
    if (output.AggregateComplianceByConfigRules !== undefined &&
        output.AggregateComplianceByConfigRules !== null) {
        contents.AggregateComplianceByConfigRules = deserializeAws_json1_1AggregateComplianceByConfigRuleList(output.AggregateComplianceByConfigRules, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAggregationAuthorizationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeAggregationAuthorizationsResponse",
        AggregationAuthorizations: undefined,
        NextToken: undefined
    };
    if (output.AggregationAuthorizations !== undefined &&
        output.AggregationAuthorizations !== null) {
        contents.AggregationAuthorizations = deserializeAws_json1_1AggregationAuthorizationList(output.AggregationAuthorizations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeComplianceByConfigRuleResponse = (output, context) => {
    let contents = {
        __type: "DescribeComplianceByConfigRuleResponse",
        ComplianceByConfigRules: undefined,
        NextToken: undefined
    };
    if (output.ComplianceByConfigRules !== undefined &&
        output.ComplianceByConfigRules !== null) {
        contents.ComplianceByConfigRules = deserializeAws_json1_1ComplianceByConfigRules(output.ComplianceByConfigRules, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeComplianceByResourceResponse = (output, context) => {
    let contents = {
        __type: "DescribeComplianceByResourceResponse",
        ComplianceByResources: undefined,
        NextToken: undefined
    };
    if (output.ComplianceByResources !== undefined &&
        output.ComplianceByResources !== null) {
        contents.ComplianceByResources = deserializeAws_json1_1ComplianceByResources(output.ComplianceByResources, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigRuleEvaluationStatusResponse",
        ConfigRulesEvaluationStatus: undefined,
        NextToken: undefined
    };
    if (output.ConfigRulesEvaluationStatus !== undefined &&
        output.ConfigRulesEvaluationStatus !== null) {
        contents.ConfigRulesEvaluationStatus = deserializeAws_json1_1ConfigRuleEvaluationStatusList(output.ConfigRulesEvaluationStatus, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigRulesResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigRulesResponse",
        ConfigRules: undefined,
        NextToken: undefined
    };
    if (output.ConfigRules !== undefined && output.ConfigRules !== null) {
        contents.ConfigRules = deserializeAws_json1_1ConfigRules(output.ConfigRules, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationAggregatorSourcesStatusResponse",
        AggregatedSourceStatusList: undefined,
        NextToken: undefined
    };
    if (output.AggregatedSourceStatusList !== undefined &&
        output.AggregatedSourceStatusList !== null) {
        contents.AggregatedSourceStatusList = deserializeAws_json1_1AggregatedSourceStatusList(output.AggregatedSourceStatusList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigurationAggregatorsResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationAggregatorsResponse",
        ConfigurationAggregators: undefined,
        NextToken: undefined
    };
    if (output.ConfigurationAggregators !== undefined &&
        output.ConfigurationAggregators !== null) {
        contents.ConfigurationAggregators = deserializeAws_json1_1ConfigurationAggregatorList(output.ConfigurationAggregators, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationRecorderStatusResponse",
        ConfigurationRecordersStatus: undefined
    };
    if (output.ConfigurationRecordersStatus !== undefined &&
        output.ConfigurationRecordersStatus !== null) {
        contents.ConfigurationRecordersStatus = deserializeAws_json1_1ConfigurationRecorderStatusList(output.ConfigurationRecordersStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigurationRecordersResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationRecordersResponse",
        ConfigurationRecorders: undefined
    };
    if (output.ConfigurationRecorders !== undefined &&
        output.ConfigurationRecorders !== null) {
        contents.ConfigurationRecorders = deserializeAws_json1_1ConfigurationRecorderList(output.ConfigurationRecorders, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeConformancePackComplianceResponse = (output, context) => {
    let contents = {
        __type: "DescribeConformancePackComplianceResponse",
        ConformancePackName: undefined,
        ConformancePackRuleComplianceList: undefined,
        NextToken: undefined
    };
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    if (output.ConformancePackRuleComplianceList !== undefined &&
        output.ConformancePackRuleComplianceList !== null) {
        contents.ConformancePackRuleComplianceList = deserializeAws_json1_1ConformancePackRuleComplianceList(output.ConformancePackRuleComplianceList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConformancePackStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeConformancePackStatusResponse",
        ConformancePackStatusDetails: undefined,
        NextToken: undefined
    };
    if (output.ConformancePackStatusDetails !== undefined &&
        output.ConformancePackStatusDetails !== null) {
        contents.ConformancePackStatusDetails = deserializeAws_json1_1ConformancePackStatusDetailsList(output.ConformancePackStatusDetails, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConformancePacksResponse = (output, context) => {
    let contents = {
        __type: "DescribeConformancePacksResponse",
        ConformancePackDetails: undefined,
        NextToken: undefined
    };
    if (output.ConformancePackDetails !== undefined &&
        output.ConformancePackDetails !== null) {
        contents.ConformancePackDetails = deserializeAws_json1_1ConformancePackDetailList(output.ConformancePackDetails, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDeliveryChannelStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeDeliveryChannelStatusResponse",
        DeliveryChannelsStatus: undefined
    };
    if (output.DeliveryChannelsStatus !== undefined &&
        output.DeliveryChannelsStatus !== null) {
        contents.DeliveryChannelsStatus = deserializeAws_json1_1DeliveryChannelStatusList(output.DeliveryChannelsStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDeliveryChannelsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDeliveryChannelsResponse",
        DeliveryChannels: undefined
    };
    if (output.DeliveryChannels !== undefined &&
        output.DeliveryChannels !== null) {
        contents.DeliveryChannels = deserializeAws_json1_1DeliveryChannelList(output.DeliveryChannels, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationConfigRuleStatusesResponse",
        NextToken: undefined,
        OrganizationConfigRuleStatuses: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConfigRuleStatuses !== undefined &&
        output.OrganizationConfigRuleStatuses !== null) {
        contents.OrganizationConfigRuleStatuses = deserializeAws_json1_1OrganizationConfigRuleStatuses(output.OrganizationConfigRuleStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationConfigRulesResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationConfigRulesResponse",
        NextToken: undefined,
        OrganizationConfigRules: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConfigRules !== undefined &&
        output.OrganizationConfigRules !== null) {
        contents.OrganizationConfigRules = deserializeAws_json1_1OrganizationConfigRules(output.OrganizationConfigRules, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationConformancePackStatusesResponse",
        NextToken: undefined,
        OrganizationConformancePackStatuses: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConformancePackStatuses !== undefined &&
        output.OrganizationConformancePackStatuses !== null) {
        contents.OrganizationConformancePackStatuses = deserializeAws_json1_1OrganizationConformancePackStatuses(output.OrganizationConformancePackStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationConformancePacksResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationConformancePacksResponse",
        NextToken: undefined,
        OrganizationConformancePacks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConformancePacks !== undefined &&
        output.OrganizationConformancePacks !== null) {
        contents.OrganizationConformancePacks = deserializeAws_json1_1OrganizationConformancePacks(output.OrganizationConformancePacks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePendingAggregationRequestsResponse = (output, context) => {
    let contents = {
        __type: "DescribePendingAggregationRequestsResponse",
        NextToken: undefined,
        PendingAggregationRequests: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PendingAggregationRequests !== undefined &&
        output.PendingAggregationRequests !== null) {
        contents.PendingAggregationRequests = deserializeAws_json1_1PendingAggregationRequestList(output.PendingAggregationRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRemediationConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeRemediationConfigurationsResponse",
        RemediationConfigurations: undefined
    };
    if (output.RemediationConfigurations !== undefined &&
        output.RemediationConfigurations !== null) {
        contents.RemediationConfigurations = deserializeAws_json1_1RemediationConfigurations(output.RemediationConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRemediationExceptionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeRemediationExceptionsResponse",
        NextToken: undefined,
        RemediationExceptions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RemediationExceptions !== undefined &&
        output.RemediationExceptions !== null) {
        contents.RemediationExceptions = deserializeAws_json1_1RemediationExceptions(output.RemediationExceptions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRemediationExecutionStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeRemediationExecutionStatusResponse",
        NextToken: undefined,
        RemediationExecutionStatuses: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RemediationExecutionStatuses !== undefined &&
        output.RemediationExecutionStatuses !== null) {
        contents.RemediationExecutionStatuses = deserializeAws_json1_1RemediationExecutionStatuses(output.RemediationExecutionStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRetentionConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeRetentionConfigurationsResponse",
        NextToken: undefined,
        RetentionConfigurations: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RetentionConfigurations !== undefined &&
        output.RetentionConfigurations !== null) {
        contents.RetentionConfigurations = deserializeAws_json1_1RetentionConfigurationList(output.RetentionConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DiscoveredResourceIdentifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregateResourceIdentifier(entry, context));
};
const deserializeAws_json1_1Evaluation = (output, context) => {
    let contents = {
        __type: "Evaluation",
        Annotation: undefined,
        ComplianceResourceId: undefined,
        ComplianceResourceType: undefined,
        ComplianceType: undefined,
        OrderingTimestamp: undefined
    };
    if (output.Annotation !== undefined && output.Annotation !== null) {
        contents.Annotation = output.Annotation;
    }
    if (output.ComplianceResourceId !== undefined &&
        output.ComplianceResourceId !== null) {
        contents.ComplianceResourceId = output.ComplianceResourceId;
    }
    if (output.ComplianceResourceType !== undefined &&
        output.ComplianceResourceType !== null) {
        contents.ComplianceResourceType = output.ComplianceResourceType;
    }
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.OrderingTimestamp !== undefined &&
        output.OrderingTimestamp !== null) {
        contents.OrderingTimestamp = new Date(Math.round(output.OrderingTimestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    let contents = {
        __type: "EvaluationResult",
        Annotation: undefined,
        ComplianceType: undefined,
        ConfigRuleInvokedTime: undefined,
        EvaluationResultIdentifier: undefined,
        ResultRecordedTime: undefined,
        ResultToken: undefined
    };
    if (output.Annotation !== undefined && output.Annotation !== null) {
        contents.Annotation = output.Annotation;
    }
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.ConfigRuleInvokedTime !== undefined &&
        output.ConfigRuleInvokedTime !== null) {
        contents.ConfigRuleInvokedTime = new Date(Math.round(output.ConfigRuleInvokedTime * 1000));
    }
    if (output.EvaluationResultIdentifier !== undefined &&
        output.EvaluationResultIdentifier !== null) {
        contents.EvaluationResultIdentifier = deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context);
    }
    if (output.ResultRecordedTime !== undefined &&
        output.ResultRecordedTime !== null) {
        contents.ResultRecordedTime = new Date(Math.round(output.ResultRecordedTime * 1000));
    }
    if (output.ResultToken !== undefined && output.ResultToken !== null) {
        contents.ResultToken = output.ResultToken;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResultIdentifier = (output, context) => {
    let contents = {
        __type: "EvaluationResultIdentifier",
        EvaluationResultQualifier: undefined,
        OrderingTimestamp: undefined
    };
    if (output.EvaluationResultQualifier !== undefined &&
        output.EvaluationResultQualifier !== null) {
        contents.EvaluationResultQualifier = deserializeAws_json1_1EvaluationResultQualifier(output.EvaluationResultQualifier, context);
    }
    if (output.OrderingTimestamp !== undefined &&
        output.OrderingTimestamp !== null) {
        contents.OrderingTimestamp = new Date(Math.round(output.OrderingTimestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResultQualifier = (output, context) => {
    let contents = {
        __type: "EvaluationResultQualifier",
        ConfigRuleName: undefined,
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EvaluationResult(entry, context));
};
const deserializeAws_json1_1Evaluations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Evaluation(entry, context));
};
const deserializeAws_json1_1ExcludedAccounts = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ExecutionControls = (output, context) => {
    let contents = {
        __type: "ExecutionControls",
        SsmControls: undefined
    };
    if (output.SsmControls !== undefined && output.SsmControls !== null) {
        contents.SsmControls = deserializeAws_json1_1SsmControls(output.SsmControls, context);
    }
    return contents;
};
const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch = (output, context) => {
    let contents = {
        __type: "FailedDeleteRemediationExceptionsBatch",
        FailedItems: undefined,
        FailureMessage: undefined
    };
    if (output.FailedItems !== undefined && output.FailedItems !== null) {
        contents.FailedItems = deserializeAws_json1_1RemediationExceptionResourceKeys(output.FailedItems, context);
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    return contents;
};
const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch(entry, context));
};
const deserializeAws_json1_1FailedRemediationBatch = (output, context) => {
    let contents = {
        __type: "FailedRemediationBatch",
        FailedItems: undefined,
        FailureMessage: undefined
    };
    if (output.FailedItems !== undefined && output.FailedItems !== null) {
        contents.FailedItems = deserializeAws_json1_1RemediationConfigurations(output.FailedItems, context);
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    return contents;
};
const deserializeAws_json1_1FailedRemediationBatches = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedRemediationBatch(entry, context));
};
const deserializeAws_json1_1FailedRemediationExceptionBatch = (output, context) => {
    let contents = {
        __type: "FailedRemediationExceptionBatch",
        FailedItems: undefined,
        FailureMessage: undefined
    };
    if (output.FailedItems !== undefined && output.FailedItems !== null) {
        contents.FailedItems = deserializeAws_json1_1RemediationExceptions(output.FailedItems, context);
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    return contents;
};
const deserializeAws_json1_1FailedRemediationExceptionBatches = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedRemediationExceptionBatch(entry, context));
};
const deserializeAws_json1_1FieldInfo = (output, context) => {
    let contents = {
        __type: "FieldInfo",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1FieldInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FieldInfo(entry, context));
};
const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse = (output, context) => {
    let contents = {
        __type: "GetAggregateComplianceDetailsByConfigRuleResponse",
        AggregateEvaluationResults: undefined,
        NextToken: undefined
    };
    if (output.AggregateEvaluationResults !== undefined &&
        output.AggregateEvaluationResults !== null) {
        contents.AggregateEvaluationResults = deserializeAws_json1_1AggregateEvaluationResultList(output.AggregateEvaluationResults, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse = (output, context) => {
    let contents = {
        __type: "GetAggregateConfigRuleComplianceSummaryResponse",
        AggregateComplianceCounts: undefined,
        GroupByKey: undefined,
        NextToken: undefined
    };
    if (output.AggregateComplianceCounts !== undefined &&
        output.AggregateComplianceCounts !== null) {
        contents.AggregateComplianceCounts = deserializeAws_json1_1AggregateComplianceCountList(output.AggregateComplianceCounts, context);
    }
    if (output.GroupByKey !== undefined && output.GroupByKey !== null) {
        contents.GroupByKey = output.GroupByKey;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse = (output, context) => {
    let contents = {
        __type: "GetAggregateDiscoveredResourceCountsResponse",
        GroupByKey: undefined,
        GroupedResourceCounts: undefined,
        NextToken: undefined,
        TotalDiscoveredResources: undefined
    };
    if (output.GroupByKey !== undefined && output.GroupByKey !== null) {
        contents.GroupByKey = output.GroupByKey;
    }
    if (output.GroupedResourceCounts !== undefined &&
        output.GroupedResourceCounts !== null) {
        contents.GroupedResourceCounts = deserializeAws_json1_1GroupedResourceCountList(output.GroupedResourceCounts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalDiscoveredResources !== undefined &&
        output.TotalDiscoveredResources !== null) {
        contents.TotalDiscoveredResources = output.TotalDiscoveredResources;
    }
    return contents;
};
const deserializeAws_json1_1GetAggregateResourceConfigResponse = (output, context) => {
    let contents = {
        __type: "GetAggregateResourceConfigResponse",
        ConfigurationItem: undefined
    };
    if (output.ConfigurationItem !== undefined &&
        output.ConfigurationItem !== null) {
        contents.ConfigurationItem = deserializeAws_json1_1ConfigurationItem(output.ConfigurationItem, context);
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse = (output, context) => {
    let contents = {
        __type: "GetComplianceDetailsByConfigRuleResponse",
        EvaluationResults: undefined,
        NextToken: undefined
    };
    if (output.EvaluationResults !== undefined &&
        output.EvaluationResults !== null) {
        contents.EvaluationResults = deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceDetailsByResourceResponse = (output, context) => {
    let contents = {
        __type: "GetComplianceDetailsByResourceResponse",
        EvaluationResults: undefined,
        NextToken: undefined
    };
    if (output.EvaluationResults !== undefined &&
        output.EvaluationResults !== null) {
        contents.EvaluationResults = deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse = (output, context) => {
    let contents = {
        __type: "GetComplianceSummaryByConfigRuleResponse",
        ComplianceSummary: undefined
    };
    if (output.ComplianceSummary !== undefined &&
        output.ComplianceSummary !== null) {
        contents.ComplianceSummary = deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse = (output, context) => {
    let contents = {
        __type: "GetComplianceSummaryByResourceTypeResponse",
        ComplianceSummariesByResourceType: undefined
    };
    if (output.ComplianceSummariesByResourceType !== undefined &&
        output.ComplianceSummariesByResourceType !== null) {
        contents.ComplianceSummariesByResourceType = deserializeAws_json1_1ComplianceSummariesByResourceType(output.ComplianceSummariesByResourceType, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConformancePackComplianceDetailsResponse = (output, context) => {
    let contents = {
        __type: "GetConformancePackComplianceDetailsResponse",
        ConformancePackName: undefined,
        ConformancePackRuleEvaluationResults: undefined,
        NextToken: undefined
    };
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    if (output.ConformancePackRuleEvaluationResults !== undefined &&
        output.ConformancePackRuleEvaluationResults !== null) {
        contents.ConformancePackRuleEvaluationResults = deserializeAws_json1_1ConformancePackRuleEvaluationResultsList(output.ConformancePackRuleEvaluationResults, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetConformancePackComplianceSummaryResponse = (output, context) => {
    let contents = {
        __type: "GetConformancePackComplianceSummaryResponse",
        ConformancePackComplianceSummaryList: undefined,
        NextToken: undefined
    };
    if (output.ConformancePackComplianceSummaryList !== undefined &&
        output.ConformancePackComplianceSummaryList !== null) {
        contents.ConformancePackComplianceSummaryList = deserializeAws_json1_1ConformancePackComplianceSummaryList(output.ConformancePackComplianceSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDiscoveredResourceCountsResponse = (output, context) => {
    let contents = {
        __type: "GetDiscoveredResourceCountsResponse",
        nextToken: undefined,
        resourceCounts: undefined,
        totalDiscoveredResources: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.resourceCounts !== undefined && output.resourceCounts !== null) {
        contents.resourceCounts = deserializeAws_json1_1ResourceCounts(output.resourceCounts, context);
    }
    if (output.totalDiscoveredResources !== undefined &&
        output.totalDiscoveredResources !== null) {
        contents.totalDiscoveredResources = output.totalDiscoveredResources;
    }
    return contents;
};
const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse = (output, context) => {
    let contents = {
        __type: "GetOrganizationConfigRuleDetailedStatusResponse",
        NextToken: undefined,
        OrganizationConfigRuleDetailedStatus: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConfigRuleDetailedStatus !== undefined &&
        output.OrganizationConfigRuleDetailedStatus !== null) {
        contents.OrganizationConfigRuleDetailedStatus = deserializeAws_json1_1OrganizationConfigRuleDetailedStatus(output.OrganizationConfigRuleDetailedStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse = (output, context) => {
    let contents = {
        __type: "GetOrganizationConformancePackDetailedStatusResponse",
        NextToken: undefined,
        OrganizationConformancePackDetailedStatuses: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationConformancePackDetailedStatuses !== undefined &&
        output.OrganizationConformancePackDetailedStatuses !== null) {
        contents.OrganizationConformancePackDetailedStatuses = deserializeAws_json1_1OrganizationConformancePackDetailedStatuses(output.OrganizationConformancePackDetailedStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResourceConfigHistoryResponse = (output, context) => {
    let contents = {
        __type: "GetResourceConfigHistoryResponse",
        configurationItems: undefined,
        nextToken: undefined
    };
    if (output.configurationItems !== undefined &&
        output.configurationItems !== null) {
        contents.configurationItems = deserializeAws_json1_1ConfigurationItemList(output.configurationItems, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GroupedResourceCount = (output, context) => {
    let contents = {
        __type: "GroupedResourceCount",
        GroupName: undefined,
        ResourceCount: undefined
    };
    if (output.GroupName !== undefined && output.GroupName !== null) {
        contents.GroupName = output.GroupName;
    }
    if (output.ResourceCount !== undefined && output.ResourceCount !== null) {
        contents.ResourceCount = output.ResourceCount;
    }
    return contents;
};
const deserializeAws_json1_1GroupedResourceCountList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GroupedResourceCount(entry, context));
};
const deserializeAws_json1_1InsufficientDeliveryPolicyException = (output, context) => {
    let contents = {
        __type: "InsufficientDeliveryPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsException = (output, context) => {
    let contents = {
        __type: "InsufficientPermissionsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidConfigurationRecorderNameException = (output, context) => {
    let contents = {
        __type: "InvalidConfigurationRecorderNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeliveryChannelNameException = (output, context) => {
    let contents = {
        __type: "InvalidDeliveryChannelNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidExpressionException = (output, context) => {
    let contents = {
        __type: "InvalidExpressionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLimitException = (output, context) => {
    let contents = {
        __type: "InvalidLimitException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
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
const deserializeAws_json1_1InvalidRecordingGroupException = (output, context) => {
    let contents = {
        __type: "InvalidRecordingGroupException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResultTokenException = (output, context) => {
    let contents = {
        __type: "InvalidResultTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
    let contents = {
        __type: "InvalidRoleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidS3KeyPrefixException = (output, context) => {
    let contents = {
        __type: "InvalidS3KeyPrefixException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSNSTopicARNException = (output, context) => {
    let contents = {
        __type: "InvalidSNSTopicARNException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    let contents = {
        __type: "InvalidTimeRangeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LastDeliveryChannelDeleteFailedException = (output, context) => {
    let contents = {
        __type: "LastDeliveryChannelDeleteFailedException",
        message: undefined
    };
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
const deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse = (output, context) => {
    let contents = {
        __type: "ListAggregateDiscoveredResourcesResponse",
        NextToken: undefined,
        ResourceIdentifiers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceIdentifiers !== undefined &&
        output.ResourceIdentifiers !== null) {
        contents.ResourceIdentifiers = deserializeAws_json1_1DiscoveredResourceIdentifierList(output.ResourceIdentifiers, context);
    }
    return contents;
};
const deserializeAws_json1_1ListDiscoveredResourcesResponse = (output, context) => {
    let contents = {
        __type: "ListDiscoveredResourcesResponse",
        nextToken: undefined,
        resourceIdentifiers: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.resourceIdentifiers !== undefined &&
        output.resourceIdentifiers !== null) {
        contents.resourceIdentifiers = deserializeAws_json1_1ResourceIdentifierList(output.resourceIdentifiers, context);
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
const deserializeAws_json1_1MaxActiveResourcesExceededException = (output, context) => {
    let contents = {
        __type: "MaxActiveResourcesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigRulesExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfConfigRulesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfConfigurationRecordersExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConformancePacksExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfConformancePacksExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfDeliveryChannelsExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfOrganizationConfigRulesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfOrganizationConformancePacksExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException = (output, context) => {
    let contents = {
        __type: "MaxNumberOfRetentionConfigurationsExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MemberAccountStatus = (output, context) => {
    let contents = {
        __type: "MemberAccountStatus",
        AccountId: undefined,
        ConfigRuleName: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        LastUpdateTime: undefined,
        MemberAccountRuleStatus: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.MemberAccountRuleStatus !== undefined &&
        output.MemberAccountRuleStatus !== null) {
        contents.MemberAccountRuleStatus = output.MemberAccountRuleStatus;
    }
    return contents;
};
const deserializeAws_json1_1NoAvailableConfigurationRecorderException = (output, context) => {
    let contents = {
        __type: "NoAvailableConfigurationRecorderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoAvailableDeliveryChannelException = (output, context) => {
    let contents = {
        __type: "NoAvailableDeliveryChannelException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationException = (output, context) => {
    let contents = {
        __type: "NoAvailableOrganizationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoRunningConfigurationRecorderException = (output, context) => {
    let contents = {
        __type: "NoRunningConfigurationRecorderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchBucketException = (output, context) => {
    let contents = {
        __type: "NoSuchBucketException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleException = (output, context) => {
    let contents = {
        __type: "NoSuchConfigRuleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleInConformancePackException = (output, context) => {
    let contents = {
        __type: "NoSuchConfigRuleInConformancePackException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationAggregatorException = (output, context) => {
    let contents = {
        __type: "NoSuchConfigurationAggregatorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationRecorderException = (output, context) => {
    let contents = {
        __type: "NoSuchConfigurationRecorderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchConformancePackException = (output, context) => {
    let contents = {
        __type: "NoSuchConformancePackException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchDeliveryChannelException = (output, context) => {
    let contents = {
        __type: "NoSuchDeliveryChannelException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConfigRuleException = (output, context) => {
    let contents = {
        __type: "NoSuchOrganizationConfigRuleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConformancePackException = (output, context) => {
    let contents = {
        __type: "NoSuchOrganizationConformancePackException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationConfigurationException = (output, context) => {
    let contents = {
        __type: "NoSuchRemediationConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationExceptionException = (output, context) => {
    let contents = {
        __type: "NoSuchRemediationExceptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoSuchRetentionConfigurationException = (output, context) => {
    let contents = {
        __type: "NoSuchRetentionConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationAccessDeniedException = (output, context) => {
    let contents = {
        __type: "OrganizationAccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationAggregationSource = (output, context) => {
    let contents = {
        __type: "OrganizationAggregationSource",
        AllAwsRegions: undefined,
        AwsRegions: undefined,
        RoleArn: undefined
    };
    if (output.AllAwsRegions !== undefined && output.AllAwsRegions !== null) {
        contents.AllAwsRegions = output.AllAwsRegions;
    }
    if (output.AwsRegions !== undefined && output.AwsRegions !== null) {
        contents.AwsRegions = deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException = (output, context) => {
    let contents = {
        __type: "OrganizationAllFeaturesNotEnabledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConfigRule = (output, context) => {
    let contents = {
        __type: "OrganizationConfigRule",
        ExcludedAccounts: undefined,
        LastUpdateTime: undefined,
        OrganizationConfigRuleArn: undefined,
        OrganizationConfigRuleName: undefined,
        OrganizationCustomRuleMetadata: undefined,
        OrganizationManagedRuleMetadata: undefined
    };
    if (output.ExcludedAccounts !== undefined &&
        output.ExcludedAccounts !== null) {
        contents.ExcludedAccounts = deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context);
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.OrganizationConfigRuleArn !== undefined &&
        output.OrganizationConfigRuleArn !== null) {
        contents.OrganizationConfigRuleArn = output.OrganizationConfigRuleArn;
    }
    if (output.OrganizationConfigRuleName !== undefined &&
        output.OrganizationConfigRuleName !== null) {
        contents.OrganizationConfigRuleName = output.OrganizationConfigRuleName;
    }
    if (output.OrganizationCustomRuleMetadata !== undefined &&
        output.OrganizationCustomRuleMetadata !== null) {
        contents.OrganizationCustomRuleMetadata = deserializeAws_json1_1OrganizationCustomRuleMetadata(output.OrganizationCustomRuleMetadata, context);
    }
    if (output.OrganizationManagedRuleMetadata !== undefined &&
        output.OrganizationManagedRuleMetadata !== null) {
        contents.OrganizationManagedRuleMetadata = deserializeAws_json1_1OrganizationManagedRuleMetadata(output.OrganizationManagedRuleMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConfigRuleDetailedStatus = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MemberAccountStatus(entry, context));
};
const deserializeAws_json1_1OrganizationConfigRuleStatus = (output, context) => {
    let contents = {
        __type: "OrganizationConfigRuleStatus",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        LastUpdateTime: undefined,
        OrganizationConfigRuleName: undefined,
        OrganizationRuleStatus: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.OrganizationConfigRuleName !== undefined &&
        output.OrganizationConfigRuleName !== null) {
        contents.OrganizationConfigRuleName = output.OrganizationConfigRuleName;
    }
    if (output.OrganizationRuleStatus !== undefined &&
        output.OrganizationRuleStatus !== null) {
        contents.OrganizationRuleStatus = output.OrganizationRuleStatus;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConfigRuleStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationConfigRuleStatus(entry, context));
};
const deserializeAws_json1_1OrganizationConfigRuleTriggerTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1OrganizationConfigRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationConfigRule(entry, context));
};
const deserializeAws_json1_1OrganizationConformancePack = (output, context) => {
    let contents = {
        __type: "OrganizationConformancePack",
        ConformancePackInputParameters: undefined,
        DeliveryS3Bucket: undefined,
        DeliveryS3KeyPrefix: undefined,
        ExcludedAccounts: undefined,
        LastUpdateTime: undefined,
        OrganizationConformancePackArn: undefined,
        OrganizationConformancePackName: undefined
    };
    if (output.ConformancePackInputParameters !== undefined &&
        output.ConformancePackInputParameters !== null) {
        contents.ConformancePackInputParameters = deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context);
    }
    if (output.DeliveryS3Bucket !== undefined &&
        output.DeliveryS3Bucket !== null) {
        contents.DeliveryS3Bucket = output.DeliveryS3Bucket;
    }
    if (output.DeliveryS3KeyPrefix !== undefined &&
        output.DeliveryS3KeyPrefix !== null) {
        contents.DeliveryS3KeyPrefix = output.DeliveryS3KeyPrefix;
    }
    if (output.ExcludedAccounts !== undefined &&
        output.ExcludedAccounts !== null) {
        contents.ExcludedAccounts = deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context);
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.OrganizationConformancePackArn !== undefined &&
        output.OrganizationConformancePackArn !== null) {
        contents.OrganizationConformancePackArn =
            output.OrganizationConformancePackArn;
    }
    if (output.OrganizationConformancePackName !== undefined &&
        output.OrganizationConformancePackName !== null) {
        contents.OrganizationConformancePackName =
            output.OrganizationConformancePackName;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePackDetailedStatus = (output, context) => {
    let contents = {
        __type: "OrganizationConformancePackDetailedStatus",
        AccountId: undefined,
        ConformancePackName: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        LastUpdateTime: undefined,
        Status: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.ConformancePackName !== undefined &&
        output.ConformancePackName !== null) {
        contents.ConformancePackName = output.ConformancePackName;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePackDetailedStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationConformancePackDetailedStatus(entry, context));
};
const deserializeAws_json1_1OrganizationConformancePackStatus = (output, context) => {
    let contents = {
        __type: "OrganizationConformancePackStatus",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        LastUpdateTime: undefined,
        OrganizationConformancePackName: undefined,
        Status: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.OrganizationConformancePackName !== undefined &&
        output.OrganizationConformancePackName !== null) {
        contents.OrganizationConformancePackName =
            output.OrganizationConformancePackName;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePackStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationConformancePackStatus(entry, context));
};
const deserializeAws_json1_1OrganizationConformancePackTemplateValidationException = (output, context) => {
    let contents = {
        __type: "OrganizationConformancePackTemplateValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePacks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationConformancePack(entry, context));
};
const deserializeAws_json1_1OrganizationCustomRuleMetadata = (output, context) => {
    let contents = {
        __type: "OrganizationCustomRuleMetadata",
        Description: undefined,
        InputParameters: undefined,
        LambdaFunctionArn: undefined,
        MaximumExecutionFrequency: undefined,
        OrganizationConfigRuleTriggerTypes: undefined,
        ResourceIdScope: undefined,
        ResourceTypesScope: undefined,
        TagKeyScope: undefined,
        TagValueScope: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.InputParameters !== undefined && output.InputParameters !== null) {
        contents.InputParameters = output.InputParameters;
    }
    if (output.LambdaFunctionArn !== undefined &&
        output.LambdaFunctionArn !== null) {
        contents.LambdaFunctionArn = output.LambdaFunctionArn;
    }
    if (output.MaximumExecutionFrequency !== undefined &&
        output.MaximumExecutionFrequency !== null) {
        contents.MaximumExecutionFrequency = output.MaximumExecutionFrequency;
    }
    if (output.OrganizationConfigRuleTriggerTypes !== undefined &&
        output.OrganizationConfigRuleTriggerTypes !== null) {
        contents.OrganizationConfigRuleTriggerTypes = deserializeAws_json1_1OrganizationConfigRuleTriggerTypes(output.OrganizationConfigRuleTriggerTypes, context);
    }
    if (output.ResourceIdScope !== undefined && output.ResourceIdScope !== null) {
        contents.ResourceIdScope = output.ResourceIdScope;
    }
    if (output.ResourceTypesScope !== undefined &&
        output.ResourceTypesScope !== null) {
        contents.ResourceTypesScope = deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context);
    }
    if (output.TagKeyScope !== undefined && output.TagKeyScope !== null) {
        contents.TagKeyScope = output.TagKeyScope;
    }
    if (output.TagValueScope !== undefined && output.TagValueScope !== null) {
        contents.TagValueScope = output.TagValueScope;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationManagedRuleMetadata = (output, context) => {
    let contents = {
        __type: "OrganizationManagedRuleMetadata",
        Description: undefined,
        InputParameters: undefined,
        MaximumExecutionFrequency: undefined,
        ResourceIdScope: undefined,
        ResourceTypesScope: undefined,
        RuleIdentifier: undefined,
        TagKeyScope: undefined,
        TagValueScope: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.InputParameters !== undefined && output.InputParameters !== null) {
        contents.InputParameters = output.InputParameters;
    }
    if (output.MaximumExecutionFrequency !== undefined &&
        output.MaximumExecutionFrequency !== null) {
        contents.MaximumExecutionFrequency = output.MaximumExecutionFrequency;
    }
    if (output.ResourceIdScope !== undefined && output.ResourceIdScope !== null) {
        contents.ResourceIdScope = output.ResourceIdScope;
    }
    if (output.ResourceTypesScope !== undefined &&
        output.ResourceTypesScope !== null) {
        contents.ResourceTypesScope = deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context);
    }
    if (output.RuleIdentifier !== undefined && output.RuleIdentifier !== null) {
        contents.RuleIdentifier = output.RuleIdentifier;
    }
    if (output.TagKeyScope !== undefined && output.TagKeyScope !== null) {
        contents.TagKeyScope = output.TagKeyScope;
    }
    if (output.TagValueScope !== undefined && output.TagValueScope !== null) {
        contents.TagValueScope = output.TagValueScope;
    }
    return contents;
};
const deserializeAws_json1_1OversizedConfigurationItemException = (output, context) => {
    let contents = {
        __type: "OversizedConfigurationItemException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PendingAggregationRequest = (output, context) => {
    let contents = {
        __type: "PendingAggregationRequest",
        RequesterAccountId: undefined,
        RequesterAwsRegion: undefined
    };
    if (output.RequesterAccountId !== undefined &&
        output.RequesterAccountId !== null) {
        contents.RequesterAccountId = output.RequesterAccountId;
    }
    if (output.RequesterAwsRegion !== undefined &&
        output.RequesterAwsRegion !== null) {
        contents.RequesterAwsRegion = output.RequesterAwsRegion;
    }
    return contents;
};
const deserializeAws_json1_1PendingAggregationRequestList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PendingAggregationRequest(entry, context));
};
const deserializeAws_json1_1PutAggregationAuthorizationResponse = (output, context) => {
    let contents = {
        __type: "PutAggregationAuthorizationResponse",
        AggregationAuthorization: undefined
    };
    if (output.AggregationAuthorization !== undefined &&
        output.AggregationAuthorization !== null) {
        contents.AggregationAuthorization = deserializeAws_json1_1AggregationAuthorization(output.AggregationAuthorization, context);
    }
    return contents;
};
const deserializeAws_json1_1PutConfigurationAggregatorResponse = (output, context) => {
    let contents = {
        __type: "PutConfigurationAggregatorResponse",
        ConfigurationAggregator: undefined
    };
    if (output.ConfigurationAggregator !== undefined &&
        output.ConfigurationAggregator !== null) {
        contents.ConfigurationAggregator = deserializeAws_json1_1ConfigurationAggregator(output.ConfigurationAggregator, context);
    }
    return contents;
};
const deserializeAws_json1_1PutConformancePackResponse = (output, context) => {
    let contents = {
        __type: "PutConformancePackResponse",
        ConformancePackArn: undefined
    };
    if (output.ConformancePackArn !== undefined &&
        output.ConformancePackArn !== null) {
        contents.ConformancePackArn = output.ConformancePackArn;
    }
    return contents;
};
const deserializeAws_json1_1PutEvaluationsResponse = (output, context) => {
    let contents = {
        __type: "PutEvaluationsResponse",
        FailedEvaluations: undefined
    };
    if (output.FailedEvaluations !== undefined &&
        output.FailedEvaluations !== null) {
        contents.FailedEvaluations = deserializeAws_json1_1Evaluations(output.FailedEvaluations, context);
    }
    return contents;
};
const deserializeAws_json1_1PutOrganizationConfigRuleResponse = (output, context) => {
    let contents = {
        __type: "PutOrganizationConfigRuleResponse",
        OrganizationConfigRuleArn: undefined
    };
    if (output.OrganizationConfigRuleArn !== undefined &&
        output.OrganizationConfigRuleArn !== null) {
        contents.OrganizationConfigRuleArn = output.OrganizationConfigRuleArn;
    }
    return contents;
};
const deserializeAws_json1_1PutOrganizationConformancePackResponse = (output, context) => {
    let contents = {
        __type: "PutOrganizationConformancePackResponse",
        OrganizationConformancePackArn: undefined
    };
    if (output.OrganizationConformancePackArn !== undefined &&
        output.OrganizationConformancePackArn !== null) {
        contents.OrganizationConformancePackArn =
            output.OrganizationConformancePackArn;
    }
    return contents;
};
const deserializeAws_json1_1PutRemediationConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "PutRemediationConfigurationsResponse",
        FailedBatches: undefined
    };
    if (output.FailedBatches !== undefined && output.FailedBatches !== null) {
        contents.FailedBatches = deserializeAws_json1_1FailedRemediationBatches(output.FailedBatches, context);
    }
    return contents;
};
const deserializeAws_json1_1PutRemediationExceptionsResponse = (output, context) => {
    let contents = {
        __type: "PutRemediationExceptionsResponse",
        FailedBatches: undefined
    };
    if (output.FailedBatches !== undefined && output.FailedBatches !== null) {
        contents.FailedBatches = deserializeAws_json1_1FailedRemediationExceptionBatches(output.FailedBatches, context);
    }
    return contents;
};
const deserializeAws_json1_1PutRetentionConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutRetentionConfigurationResponse",
        RetentionConfiguration: undefined
    };
    if (output.RetentionConfiguration !== undefined &&
        output.RetentionConfiguration !== null) {
        contents.RetentionConfiguration = deserializeAws_json1_1RetentionConfiguration(output.RetentionConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1QueryInfo = (output, context) => {
    let contents = {
        __type: "QueryInfo",
        SelectFields: undefined
    };
    if (output.SelectFields !== undefined && output.SelectFields !== null) {
        contents.SelectFields = deserializeAws_json1_1FieldInfoList(output.SelectFields, context);
    }
    return contents;
};
const deserializeAws_json1_1RecordingGroup = (output, context) => {
    let contents = {
        __type: "RecordingGroup",
        allSupported: undefined,
        includeGlobalResourceTypes: undefined,
        resourceTypes: undefined
    };
    if (output.allSupported !== undefined && output.allSupported !== null) {
        contents.allSupported = output.allSupported;
    }
    if (output.includeGlobalResourceTypes !== undefined &&
        output.includeGlobalResourceTypes !== null) {
        contents.includeGlobalResourceTypes = output.includeGlobalResourceTypes;
    }
    if (output.resourceTypes !== undefined && output.resourceTypes !== null) {
        contents.resourceTypes = deserializeAws_json1_1ResourceTypeList(output.resourceTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1RelatedEventList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Relationship = (output, context) => {
    let contents = {
        __type: "Relationship",
        relationshipName: undefined,
        resourceId: undefined,
        resourceName: undefined,
        resourceType: undefined
    };
    if (output.relationshipName !== undefined &&
        output.relationshipName !== null) {
        contents.relationshipName = output.relationshipName;
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1RelationshipList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Relationship(entry, context));
};
const deserializeAws_json1_1RemediationConfiguration = (output, context) => {
    let contents = {
        __type: "RemediationConfiguration",
        Arn: undefined,
        Automatic: undefined,
        ConfigRuleName: undefined,
        CreatedByService: undefined,
        ExecutionControls: undefined,
        MaximumAutomaticAttempts: undefined,
        Parameters: undefined,
        ResourceType: undefined,
        RetryAttemptSeconds: undefined,
        TargetId: undefined,
        TargetType: undefined,
        TargetVersion: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Automatic !== undefined && output.Automatic !== null) {
        contents.Automatic = output.Automatic;
    }
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.CreatedByService !== undefined &&
        output.CreatedByService !== null) {
        contents.CreatedByService = output.CreatedByService;
    }
    if (output.ExecutionControls !== undefined &&
        output.ExecutionControls !== null) {
        contents.ExecutionControls = deserializeAws_json1_1ExecutionControls(output.ExecutionControls, context);
    }
    if (output.MaximumAutomaticAttempts !== undefined &&
        output.MaximumAutomaticAttempts !== null) {
        contents.MaximumAutomaticAttempts = output.MaximumAutomaticAttempts;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1RemediationParameters(output.Parameters, context);
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.RetryAttemptSeconds !== undefined &&
        output.RetryAttemptSeconds !== null) {
        contents.RetryAttemptSeconds = output.RetryAttemptSeconds;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    if (output.TargetType !== undefined && output.TargetType !== null) {
        contents.TargetType = output.TargetType;
    }
    if (output.TargetVersion !== undefined && output.TargetVersion !== null) {
        contents.TargetVersion = output.TargetVersion;
    }
    return contents;
};
const deserializeAws_json1_1RemediationConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemediationConfiguration(entry, context));
};
const deserializeAws_json1_1RemediationException = (output, context) => {
    let contents = {
        __type: "RemediationException",
        ConfigRuleName: undefined,
        ExpirationTime: undefined,
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.ConfigRuleName !== undefined && output.ConfigRuleName !== null) {
        contents.ConfigRuleName = output.ConfigRuleName;
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1RemediationExceptionResourceKey = (output, context) => {
    let contents = {
        __type: "RemediationExceptionResourceKey",
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1RemediationExceptionResourceKeys = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemediationExceptionResourceKey(entry, context));
};
const deserializeAws_json1_1RemediationExceptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemediationException(entry, context));
};
const deserializeAws_json1_1RemediationExecutionStatus = (output, context) => {
    let contents = {
        __type: "RemediationExecutionStatus",
        InvocationTime: undefined,
        LastUpdatedTime: undefined,
        ResourceKey: undefined,
        State: undefined,
        StepDetails: undefined
    };
    if (output.InvocationTime !== undefined && output.InvocationTime !== null) {
        contents.InvocationTime = new Date(Math.round(output.InvocationTime * 1000));
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.ResourceKey !== undefined && output.ResourceKey !== null) {
        contents.ResourceKey = deserializeAws_json1_1ResourceKey(output.ResourceKey, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StepDetails !== undefined && output.StepDetails !== null) {
        contents.StepDetails = deserializeAws_json1_1RemediationExecutionSteps(output.StepDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1RemediationExecutionStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemediationExecutionStatus(entry, context));
};
const deserializeAws_json1_1RemediationExecutionStep = (output, context) => {
    let contents = {
        __type: "RemediationExecutionStep",
        ErrorMessage: undefined,
        Name: undefined,
        StartTime: undefined,
        State: undefined,
        StopTime: undefined
    };
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StopTime !== undefined && output.StopTime !== null) {
        contents.StopTime = new Date(Math.round(output.StopTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1RemediationExecutionSteps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemediationExecutionStep(entry, context));
};
const deserializeAws_json1_1RemediationInProgressException = (output, context) => {
    let contents = {
        __type: "RemediationInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RemediationParameterValue = (output, context) => {
    let contents = {
        __type: "RemediationParameterValue",
        ResourceValue: undefined,
        StaticValue: undefined
    };
    if (output.ResourceValue !== undefined && output.ResourceValue !== null) {
        contents.ResourceValue = deserializeAws_json1_1ResourceValue(output.ResourceValue, context);
    }
    if (output.StaticValue !== undefined && output.StaticValue !== null) {
        contents.StaticValue = deserializeAws_json1_1StaticValue(output.StaticValue, context);
    }
    return contents;
};
const deserializeAws_json1_1RemediationParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1RemediationParameterValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1ResourceCount = (output, context) => {
    let contents = {
        __type: "ResourceCount",
        count: undefined,
        resourceType: undefined
    };
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceCounts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceCount(entry, context));
};
const deserializeAws_json1_1ResourceIdentifier = (output, context) => {
    let contents = {
        __type: "ResourceIdentifier",
        resourceDeletionTime: undefined,
        resourceId: undefined,
        resourceName: undefined,
        resourceType: undefined
    };
    if (output.resourceDeletionTime !== undefined &&
        output.resourceDeletionTime !== null) {
        contents.resourceDeletionTime = new Date(Math.round(output.resourceDeletionTime * 1000));
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceIdentifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceIdentifier(entry, context));
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceKey = (output, context) => {
    let contents = {
        __type: "ResourceKey",
        resourceId: undefined,
        resourceType: undefined
    };
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceKeys = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceKey(entry, context));
};
const deserializeAws_json1_1ResourceNotDiscoveredException = (output, context) => {
    let contents = {
        __type: "ResourceNotDiscoveredException",
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
const deserializeAws_json1_1ResourceTypeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceTypesScope = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceValue = (output, context) => {
    let contents = {
        __type: "ResourceValue",
        Value: undefined
    };
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Results = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RetentionConfiguration = (output, context) => {
    let contents = {
        __type: "RetentionConfiguration",
        Name: undefined,
        RetentionPeriodInDays: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RetentionPeriodInDays !== undefined &&
        output.RetentionPeriodInDays !== null) {
        contents.RetentionPeriodInDays = output.RetentionPeriodInDays;
    }
    return contents;
};
const deserializeAws_json1_1RetentionConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RetentionConfiguration(entry, context));
};
const deserializeAws_json1_1Scope = (output, context) => {
    let contents = {
        __type: "Scope",
        ComplianceResourceId: undefined,
        ComplianceResourceTypes: undefined,
        TagKey: undefined,
        TagValue: undefined
    };
    if (output.ComplianceResourceId !== undefined &&
        output.ComplianceResourceId !== null) {
        contents.ComplianceResourceId = output.ComplianceResourceId;
    }
    if (output.ComplianceResourceTypes !== undefined &&
        output.ComplianceResourceTypes !== null) {
        contents.ComplianceResourceTypes = deserializeAws_json1_1ComplianceResourceTypes(output.ComplianceResourceTypes, context);
    }
    if (output.TagKey !== undefined && output.TagKey !== null) {
        contents.TagKey = output.TagKey;
    }
    if (output.TagValue !== undefined && output.TagValue !== null) {
        contents.TagValue = output.TagValue;
    }
    return contents;
};
const deserializeAws_json1_1SelectResourceConfigResponse = (output, context) => {
    let contents = {
        __type: "SelectResourceConfigResponse",
        NextToken: undefined,
        QueryInfo: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.QueryInfo !== undefined && output.QueryInfo !== null) {
        contents.QueryInfo = deserializeAws_json1_1QueryInfo(output.QueryInfo, context);
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1Results(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1Source = (output, context) => {
    let contents = {
        __type: "Source",
        Owner: undefined,
        SourceDetails: undefined,
        SourceIdentifier: undefined
    };
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.SourceDetails !== undefined && output.SourceDetails !== null) {
        contents.SourceDetails = deserializeAws_json1_1SourceDetails(output.SourceDetails, context);
    }
    if (output.SourceIdentifier !== undefined &&
        output.SourceIdentifier !== null) {
        contents.SourceIdentifier = output.SourceIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1SourceDetail = (output, context) => {
    let contents = {
        __type: "SourceDetail",
        EventSource: undefined,
        MaximumExecutionFrequency: undefined,
        MessageType: undefined
    };
    if (output.EventSource !== undefined && output.EventSource !== null) {
        contents.EventSource = output.EventSource;
    }
    if (output.MaximumExecutionFrequency !== undefined &&
        output.MaximumExecutionFrequency !== null) {
        contents.MaximumExecutionFrequency = output.MaximumExecutionFrequency;
    }
    if (output.MessageType !== undefined && output.MessageType !== null) {
        contents.MessageType = output.MessageType;
    }
    return contents;
};
const deserializeAws_json1_1SourceDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SourceDetail(entry, context));
};
const deserializeAws_json1_1SsmControls = (output, context) => {
    let contents = {
        __type: "SsmControls",
        ConcurrentExecutionRatePercentage: undefined,
        ErrorPercentage: undefined
    };
    if (output.ConcurrentExecutionRatePercentage !== undefined &&
        output.ConcurrentExecutionRatePercentage !== null) {
        contents.ConcurrentExecutionRatePercentage =
            output.ConcurrentExecutionRatePercentage;
    }
    if (output.ErrorPercentage !== undefined && output.ErrorPercentage !== null) {
        contents.ErrorPercentage = output.ErrorPercentage;
    }
    return contents;
};
const deserializeAws_json1_1StartConfigRulesEvaluationResponse = (output, context) => {
    let contents = {
        __type: "StartConfigRulesEvaluationResponse"
    };
    return contents;
};
const deserializeAws_json1_1StartRemediationExecutionResponse = (output, context) => {
    let contents = {
        __type: "StartRemediationExecutionResponse",
        FailedItems: undefined,
        FailureMessage: undefined
    };
    if (output.FailedItems !== undefined && output.FailedItems !== null) {
        contents.FailedItems = deserializeAws_json1_1ResourceKeys(output.FailedItems, context);
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    return contents;
};
const deserializeAws_json1_1StaticParameterValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StaticValue = (output, context) => {
    let contents = {
        __type: "StaticValue",
        Values: undefined
    };
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1StaticParameterValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1SupplementaryConfiguration = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
const deserializeAws_json1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
const deserializeAws_json1_1UnprocessedResourceIdentifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AggregateResourceIdentifier(entry, context));
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
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