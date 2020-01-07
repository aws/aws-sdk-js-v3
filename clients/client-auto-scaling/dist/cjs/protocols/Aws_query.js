"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAttachInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachInstancesQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachInstances", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachInstancesCommand = serializeAws_queryAttachInstancesCommand;
async function serializeAws_queryAttachLoadBalancerTargetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachLoadBalancerTargetGroupsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachLoadBalancerTargetGroups", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachLoadBalancerTargetGroupsCommand = serializeAws_queryAttachLoadBalancerTargetGroupsCommand;
async function serializeAws_queryAttachLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachLoadBalancersType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachLoadBalancers", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachLoadBalancersCommand = serializeAws_queryAttachLoadBalancersCommand;
async function serializeAws_queryBatchDeleteScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchDeleteScheduledActionType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchDeleteScheduledAction", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchDeleteScheduledActionCommand = serializeAws_queryBatchDeleteScheduledActionCommand;
async function serializeAws_queryBatchPutScheduledUpdateGroupActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchPutScheduledUpdateGroupActionType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchPutScheduledUpdateGroupAction", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchPutScheduledUpdateGroupActionCommand = serializeAws_queryBatchPutScheduledUpdateGroupActionCommand;
async function serializeAws_queryCompleteLifecycleActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCompleteLifecycleActionType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CompleteLifecycleAction", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCompleteLifecycleActionCommand = serializeAws_queryCompleteLifecycleActionCommand;
async function serializeAws_queryCreateAutoScalingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateAutoScalingGroupType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateAutoScalingGroup", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateAutoScalingGroupCommand = serializeAws_queryCreateAutoScalingGroupCommand;
async function serializeAws_queryCreateLaunchConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLaunchConfigurationType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLaunchConfiguration", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLaunchConfigurationCommand = serializeAws_queryCreateLaunchConfigurationCommand;
async function serializeAws_queryCreateOrUpdateTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateOrUpdateTagsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateOrUpdateTags", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateOrUpdateTagsCommand = serializeAws_queryCreateOrUpdateTagsCommand;
async function serializeAws_queryDeleteAutoScalingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAutoScalingGroupType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAutoScalingGroup", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAutoScalingGroupCommand = serializeAws_queryDeleteAutoScalingGroupCommand;
async function serializeAws_queryDeleteLaunchConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryLaunchConfigurationNameType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLaunchConfiguration", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLaunchConfigurationCommand = serializeAws_queryDeleteLaunchConfigurationCommand;
async function serializeAws_queryDeleteLifecycleHookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteLifecycleHookType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLifecycleHook", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLifecycleHookCommand = serializeAws_queryDeleteLifecycleHookCommand;
async function serializeAws_queryDeleteNotificationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteNotificationConfigurationType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteNotificationConfiguration", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteNotificationConfigurationCommand = serializeAws_queryDeleteNotificationConfigurationCommand;
async function serializeAws_queryDeletePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeletePolicyType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeletePolicy", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeletePolicyCommand = serializeAws_queryDeletePolicyCommand;
async function serializeAws_queryDeleteScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteScheduledActionType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteScheduledAction", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteScheduledActionCommand = serializeAws_queryDeleteScheduledActionCommand;
async function serializeAws_queryDeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteTagsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteTags", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteTagsCommand = serializeAws_queryDeleteTagsCommand;
async function serializeAws_queryDescribeAccountLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeAccountLimits",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
async function serializeAws_queryDescribeAdjustmentTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeAdjustmentTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAdjustmentTypesCommand = serializeAws_queryDescribeAdjustmentTypesCommand;
async function serializeAws_queryDescribeAutoScalingGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAutoScalingGroupNamesType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAutoScalingGroups", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAutoScalingGroupsCommand = serializeAws_queryDescribeAutoScalingGroupsCommand;
async function serializeAws_queryDescribeAutoScalingInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAutoScalingInstancesType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAutoScalingInstances", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAutoScalingInstancesCommand = serializeAws_queryDescribeAutoScalingInstancesCommand;
async function serializeAws_queryDescribeAutoScalingNotificationTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeAutoScalingNotificationTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAutoScalingNotificationTypesCommand = serializeAws_queryDescribeAutoScalingNotificationTypesCommand;
async function serializeAws_queryDescribeLaunchConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryLaunchConfigurationNamesType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLaunchConfigurations", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLaunchConfigurationsCommand = serializeAws_queryDescribeLaunchConfigurationsCommand;
async function serializeAws_queryDescribeLifecycleHookTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeLifecycleHookTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLifecycleHookTypesCommand = serializeAws_queryDescribeLifecycleHookTypesCommand;
async function serializeAws_queryDescribeLifecycleHooksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLifecycleHooksType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLifecycleHooks", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLifecycleHooksCommand = serializeAws_queryDescribeLifecycleHooksCommand;
async function serializeAws_queryDescribeLoadBalancerTargetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancerTargetGroupsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancerTargetGroups", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancerTargetGroupsCommand = serializeAws_queryDescribeLoadBalancerTargetGroupsCommand;
async function serializeAws_queryDescribeLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancers", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
async function serializeAws_queryDescribeMetricCollectionTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeMetricCollectionTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeMetricCollectionTypesCommand = serializeAws_queryDescribeMetricCollectionTypesCommand;
async function serializeAws_queryDescribeNotificationConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeNotificationConfigurationsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeNotificationConfigurations", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeNotificationConfigurationsCommand = serializeAws_queryDescribeNotificationConfigurationsCommand;
async function serializeAws_queryDescribePoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribePoliciesType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribePolicies", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribePoliciesCommand = serializeAws_queryDescribePoliciesCommand;
async function serializeAws_queryDescribeScalingActivitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeScalingActivitiesType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeScalingActivities", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeScalingActivitiesCommand = serializeAws_queryDescribeScalingActivitiesCommand;
async function serializeAws_queryDescribeScalingProcessTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeScalingProcessTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeScalingProcessTypesCommand = serializeAws_queryDescribeScalingProcessTypesCommand;
async function serializeAws_queryDescribeScheduledActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeScheduledActionsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeScheduledActions", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeScheduledActionsCommand = serializeAws_queryDescribeScheduledActionsCommand;
async function serializeAws_queryDescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTagsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTags", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
async function serializeAws_queryDescribeTerminationPolicyTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeTerminationPolicyTypes",
        Version: "2011-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTerminationPolicyTypesCommand = serializeAws_queryDescribeTerminationPolicyTypesCommand;
async function serializeAws_queryDetachInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachInstancesQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachInstances", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachInstancesCommand = serializeAws_queryDetachInstancesCommand;
async function serializeAws_queryDetachLoadBalancerTargetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachLoadBalancerTargetGroupsType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachLoadBalancerTargetGroups", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachLoadBalancerTargetGroupsCommand = serializeAws_queryDetachLoadBalancerTargetGroupsCommand;
async function serializeAws_queryDetachLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachLoadBalancersType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachLoadBalancers", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachLoadBalancersCommand = serializeAws_queryDetachLoadBalancersCommand;
async function serializeAws_queryDisableMetricsCollectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDisableMetricsCollectionQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableMetricsCollection", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableMetricsCollectionCommand = serializeAws_queryDisableMetricsCollectionCommand;
async function serializeAws_queryEnableMetricsCollectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableMetricsCollectionQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableMetricsCollection", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableMetricsCollectionCommand = serializeAws_queryEnableMetricsCollectionCommand;
async function serializeAws_queryEnterStandbyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnterStandbyQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnterStandby", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnterStandbyCommand = serializeAws_queryEnterStandbyCommand;
async function serializeAws_queryExecutePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryExecutePolicyType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ExecutePolicy", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryExecutePolicyCommand = serializeAws_queryExecutePolicyCommand;
async function serializeAws_queryExitStandbyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryExitStandbyQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ExitStandby", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryExitStandbyCommand = serializeAws_queryExitStandbyCommand;
async function serializeAws_queryPutLifecycleHookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutLifecycleHookType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutLifecycleHook", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutLifecycleHookCommand = serializeAws_queryPutLifecycleHookCommand;
async function serializeAws_queryPutNotificationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutNotificationConfigurationType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutNotificationConfiguration", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutNotificationConfigurationCommand = serializeAws_queryPutNotificationConfigurationCommand;
async function serializeAws_queryPutScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutScalingPolicyType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutScalingPolicy", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutScalingPolicyCommand = serializeAws_queryPutScalingPolicyCommand;
async function serializeAws_queryPutScheduledUpdateGroupActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutScheduledUpdateGroupActionType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutScheduledUpdateGroupAction", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutScheduledUpdateGroupActionCommand = serializeAws_queryPutScheduledUpdateGroupActionCommand;
async function serializeAws_queryRecordLifecycleActionHeartbeatCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRecordLifecycleActionHeartbeatType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RecordLifecycleActionHeartbeat", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRecordLifecycleActionHeartbeatCommand = serializeAws_queryRecordLifecycleActionHeartbeatCommand;
async function serializeAws_queryResumeProcessesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryScalingProcessQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResumeProcesses", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResumeProcessesCommand = serializeAws_queryResumeProcessesCommand;
async function serializeAws_querySetDesiredCapacityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetDesiredCapacityType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetDesiredCapacity", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetDesiredCapacityCommand = serializeAws_querySetDesiredCapacityCommand;
async function serializeAws_querySetInstanceHealthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetInstanceHealthQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetInstanceHealth", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetInstanceHealthCommand = serializeAws_querySetInstanceHealthCommand;
async function serializeAws_querySetInstanceProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetInstanceProtectionQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetInstanceProtection", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetInstanceProtectionCommand = serializeAws_querySetInstanceProtectionCommand;
async function serializeAws_querySuspendProcessesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryScalingProcessQuery(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SuspendProcesses", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySuspendProcessesCommand = serializeAws_querySuspendProcessesCommand;
async function serializeAws_queryTerminateInstanceInAutoScalingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTerminateInstanceInAutoScalingGroupType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TerminateInstanceInAutoScalingGroup", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTerminateInstanceInAutoScalingGroupCommand = serializeAws_queryTerminateInstanceInAutoScalingGroupCommand;
async function serializeAws_queryUpdateAutoScalingGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAutoScalingGroupType(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAutoScalingGroup", Version: "2011-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAutoScalingGroupCommand = serializeAws_queryUpdateAutoScalingGroupCommand;
async function deserializeAws_queryAttachInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachInstancesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachInstancesCommand = deserializeAws_queryAttachInstancesCommand;
async function deserializeAws_queryAttachInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAttachLoadBalancerTargetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAttachLoadBalancerTargetGroupsResultType(data.AttachLoadBalancerTargetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachLoadBalancerTargetGroupsResultType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachLoadBalancerTargetGroupsCommand = deserializeAws_queryAttachLoadBalancerTargetGroupsCommand;
async function deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAttachLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAttachLoadBalancersResultType(data.AttachLoadBalancersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachLoadBalancersResultType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachLoadBalancersCommand = deserializeAws_queryAttachLoadBalancersCommand;
async function deserializeAws_queryAttachLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryBatchDeleteScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchDeleteScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchDeleteScheduledActionAnswer(data.BatchDeleteScheduledActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteScheduledActionAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchDeleteScheduledActionCommand = deserializeAws_queryBatchDeleteScheduledActionCommand;
async function deserializeAws_queryBatchDeleteScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer(data.BatchPutScheduledUpdateGroupActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchPutScheduledUpdateGroupActionAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand = deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand;
async function deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsFault":
        case "com.amazon.fws.csls.version_2011_01_01#AlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCompleteLifecycleActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCompleteLifecycleActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCompleteLifecycleActionAnswer(data.CompleteLifecycleActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CompleteLifecycleActionAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCompleteLifecycleActionCommand = deserializeAws_queryCompleteLifecycleActionCommand;
async function deserializeAws_queryCompleteLifecycleActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateAutoScalingGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateAutoScalingGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateAutoScalingGroupCommand = deserializeAws_queryCreateAutoScalingGroupCommand;
async function deserializeAws_queryCreateAutoScalingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsFault":
        case "com.amazon.fws.csls.version_2011_01_01#AlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateLaunchConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLaunchConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLaunchConfigurationCommand = deserializeAws_queryCreateLaunchConfigurationCommand;
async function deserializeAws_queryCreateLaunchConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsFault":
        case "com.amazon.fws.csls.version_2011_01_01#AlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateOrUpdateTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateOrUpdateTagsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateOrUpdateTagsCommand = deserializeAws_queryCreateOrUpdateTagsCommand;
async function deserializeAws_queryCreateOrUpdateTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsFault":
        case "com.amazon.fws.csls.version_2011_01_01#AlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteAutoScalingGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAutoScalingGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAutoScalingGroupCommand = deserializeAws_queryDeleteAutoScalingGroupCommand;
async function deserializeAws_queryDeleteAutoScalingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScalingActivityInProgressFault":
        case "com.amazon.fws.csls.version_2011_01_01#ScalingActivityInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteLaunchConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLaunchConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLaunchConfigurationCommand = deserializeAws_queryDeleteLaunchConfigurationCommand;
async function deserializeAws_queryDeleteLaunchConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteLifecycleHookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLifecycleHookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLifecycleHookAnswer(data.DeleteLifecycleHookResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLifecycleHookAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLifecycleHookCommand = deserializeAws_queryDeleteLifecycleHookCommand;
async function deserializeAws_queryDeleteLifecycleHookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteNotificationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteNotificationConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteNotificationConfigurationCommand = deserializeAws_queryDeleteNotificationConfigurationCommand;
async function deserializeAws_queryDeleteNotificationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeletePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeletePolicyCommand = deserializeAws_queryDeletePolicyCommand;
async function deserializeAws_queryDeletePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteScheduledActionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteScheduledActionCommand = deserializeAws_queryDeleteScheduledActionCommand;
async function deserializeAws_queryDeleteScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteTagsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteTagsCommand = deserializeAws_queryDeleteTagsCommand;
async function deserializeAws_queryDeleteTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryDescribeAccountLimitsAnswer(data.DescribeAccountLimitsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountLimitsAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAccountLimitsCommand = deserializeAws_queryDescribeAccountLimitsCommand;
async function deserializeAws_queryDescribeAccountLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAdjustmentTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAdjustmentTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAdjustmentTypesAnswer(data.DescribeAdjustmentTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAdjustmentTypesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAdjustmentTypesCommand = deserializeAws_queryDescribeAdjustmentTypesCommand;
async function deserializeAws_queryDescribeAdjustmentTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAutoScalingGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAutoScalingGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAutoScalingGroupsType(data.DescribeAutoScalingGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AutoScalingGroupsType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAutoScalingGroupsCommand = deserializeAws_queryDescribeAutoScalingGroupsCommand;
async function deserializeAws_queryDescribeAutoScalingGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAutoScalingInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAutoScalingInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAutoScalingInstancesType(data.DescribeAutoScalingInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AutoScalingInstancesType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAutoScalingInstancesCommand = deserializeAws_queryDescribeAutoScalingInstancesCommand;
async function deserializeAws_queryDescribeAutoScalingInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAutoScalingNotificationTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer(data.DescribeAutoScalingNotificationTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAutoScalingNotificationTypesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAutoScalingNotificationTypesCommand = deserializeAws_queryDescribeAutoScalingNotificationTypesCommand;
async function deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLaunchConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLaunchConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLaunchConfigurationsType(data.DescribeLaunchConfigurationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LaunchConfigurationsType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLaunchConfigurationsCommand = deserializeAws_queryDescribeLaunchConfigurationsCommand;
async function deserializeAws_queryDescribeLaunchConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLifecycleHookTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLifecycleHookTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLifecycleHookTypesAnswer(data.DescribeLifecycleHookTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLifecycleHookTypesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLifecycleHookTypesCommand = deserializeAws_queryDescribeLifecycleHookTypesCommand;
async function deserializeAws_queryDescribeLifecycleHookTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLifecycleHooksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLifecycleHooksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLifecycleHooksAnswer(data.DescribeLifecycleHooksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLifecycleHooksAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLifecycleHooksCommand = deserializeAws_queryDescribeLifecycleHooksCommand;
async function deserializeAws_queryDescribeLifecycleHooksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse(data.DescribeLoadBalancerTargetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancerTargetGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand = deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand;
async function deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancersResponse(data.DescribeLoadBalancersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancersCommand = deserializeAws_queryDescribeLoadBalancersCommand;
async function deserializeAws_queryDescribeLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeMetricCollectionTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeMetricCollectionTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeMetricCollectionTypesAnswer(data.DescribeMetricCollectionTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMetricCollectionTypesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeMetricCollectionTypesCommand = deserializeAws_queryDescribeMetricCollectionTypesCommand;
async function deserializeAws_queryDescribeMetricCollectionTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeNotificationConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeNotificationConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeNotificationConfigurationsAnswer(data.DescribeNotificationConfigurationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNotificationConfigurationsAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeNotificationConfigurationsCommand = deserializeAws_queryDescribeNotificationConfigurationsCommand;
async function deserializeAws_queryDescribeNotificationConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribePoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPoliciesType(data.DescribePoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PoliciesType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribePoliciesCommand = deserializeAws_queryDescribePoliciesCommand;
async function deserializeAws_queryDescribePoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeScalingActivitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeScalingActivitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryActivitiesType(data.DescribeScalingActivitiesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivitiesType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeScalingActivitiesCommand = deserializeAws_queryDescribeScalingActivitiesCommand;
async function deserializeAws_queryDescribeScalingActivitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeScalingProcessTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeScalingProcessTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryProcessesType(data.DescribeScalingProcessTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ProcessesType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeScalingProcessTypesCommand = deserializeAws_queryDescribeScalingProcessTypesCommand;
async function deserializeAws_queryDescribeScalingProcessTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeScheduledActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeScheduledActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledActionsType(data.DescribeScheduledActionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduledActionsType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeScheduledActionsCommand = deserializeAws_queryDescribeScheduledActionsCommand;
async function deserializeAws_queryDescribeScheduledActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagsType(data.DescribeTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagsType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
async function deserializeAws_queryDescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazon.fws.csls.version_2011_01_01#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeTerminationPolicyTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTerminationPolicyTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTerminationPolicyTypesAnswer(data.DescribeTerminationPolicyTypesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTerminationPolicyTypesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTerminationPolicyTypesCommand = deserializeAws_queryDescribeTerminationPolicyTypesCommand;
async function deserializeAws_queryDescribeTerminationPolicyTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetachInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetachInstancesAnswer(data.DetachInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachInstancesAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachInstancesCommand = deserializeAws_queryDetachInstancesCommand;
async function deserializeAws_queryDetachInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetachLoadBalancerTargetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetachLoadBalancerTargetGroupsResultType(data.DetachLoadBalancerTargetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachLoadBalancerTargetGroupsResultType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachLoadBalancerTargetGroupsCommand = deserializeAws_queryDetachLoadBalancerTargetGroupsCommand;
async function deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDetachLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetachLoadBalancersResultType(data.DetachLoadBalancersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachLoadBalancersResultType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachLoadBalancersCommand = deserializeAws_queryDetachLoadBalancersCommand;
async function deserializeAws_queryDetachLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDisableMetricsCollectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableMetricsCollectionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableMetricsCollectionCommand = deserializeAws_queryDisableMetricsCollectionCommand;
async function deserializeAws_queryDisableMetricsCollectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryEnableMetricsCollectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableMetricsCollectionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableMetricsCollectionCommand = deserializeAws_queryEnableMetricsCollectionCommand;
async function deserializeAws_queryEnableMetricsCollectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryEnterStandbyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnterStandbyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnterStandbyAnswer(data.EnterStandbyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnterStandbyAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnterStandbyCommand = deserializeAws_queryEnterStandbyCommand;
async function deserializeAws_queryEnterStandbyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryExecutePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryExecutePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryExecutePolicyCommand = deserializeAws_queryExecutePolicyCommand;
async function deserializeAws_queryExecutePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScalingActivityInProgressFault":
        case "com.amazon.fws.csls.version_2011_01_01#ScalingActivityInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryExitStandbyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryExitStandbyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryExitStandbyAnswer(data.ExitStandbyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExitStandbyAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryExitStandbyCommand = deserializeAws_queryExitStandbyCommand;
async function deserializeAws_queryExitStandbyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPutLifecycleHookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutLifecycleHookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutLifecycleHookAnswer(data.PutLifecycleHookResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLifecycleHookAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutLifecycleHookCommand = deserializeAws_queryPutLifecycleHookCommand;
async function deserializeAws_queryPutLifecycleHookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPutNotificationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutNotificationConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutNotificationConfigurationCommand = deserializeAws_queryPutNotificationConfigurationCommand;
async function deserializeAws_queryPutNotificationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPutScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPolicyARNType(data.PutScalingPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PolicyARNType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutScalingPolicyCommand = deserializeAws_queryPutScalingPolicyCommand;
async function deserializeAws_queryPutScalingPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPutScheduledUpdateGroupActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutScheduledUpdateGroupActionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutScheduledUpdateGroupActionCommand = deserializeAws_queryPutScheduledUpdateGroupActionCommand;
async function deserializeAws_queryPutScheduledUpdateGroupActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsFault":
        case "com.amazon.fws.csls.version_2011_01_01#AlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRecordLifecycleActionHeartbeatCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRecordLifecycleActionHeartbeatAnswer(data.RecordLifecycleActionHeartbeatResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RecordLifecycleActionHeartbeatAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRecordLifecycleActionHeartbeatCommand = deserializeAws_queryRecordLifecycleActionHeartbeatCommand;
async function deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryResumeProcessesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResumeProcessesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryResumeProcessesCommand = deserializeAws_queryResumeProcessesCommand;
async function deserializeAws_queryResumeProcessesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetDesiredCapacityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetDesiredCapacityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetDesiredCapacityCommand = deserializeAws_querySetDesiredCapacityCommand;
async function deserializeAws_querySetDesiredCapacityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScalingActivityInProgressFault":
        case "com.amazon.fws.csls.version_2011_01_01#ScalingActivityInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetInstanceHealthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetInstanceHealthCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetInstanceHealthCommand = deserializeAws_querySetInstanceHealthCommand;
async function deserializeAws_querySetInstanceHealthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetInstanceProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetInstanceProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetInstanceProtectionAnswer(data.SetInstanceProtectionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetInstanceProtectionAnswer" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetInstanceProtectionCommand = deserializeAws_querySetInstanceProtectionCommand;
async function deserializeAws_querySetInstanceProtectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazon.fws.csls.version_2011_01_01#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySuspendProcessesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySuspendProcessesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySuspendProcessesCommand = deserializeAws_querySuspendProcessesCommand;
async function deserializeAws_querySuspendProcessesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceInUseFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryActivityType(data.TerminateInstanceInAutoScalingGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivityType" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand = deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand;
async function deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScalingActivityInProgressFault":
        case "com.amazon.fws.csls.version_2011_01_01#ScalingActivityInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUpdateAutoScalingGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAutoScalingGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAutoScalingGroupCommand = deserializeAws_queryUpdateAutoScalingGroupCommand;
async function deserializeAws_queryUpdateAutoScalingGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceContentionFault":
        case "com.amazon.fws.csls.version_2011_01_01#ResourceContentionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScalingActivityInProgressFault":
        case "com.amazon.fws.csls.version_2011_01_01#ScalingActivityInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleFailure":
        case "com.amazon.fws.csls.version_2011_01_01#ServiceLinkedRoleFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "AlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidNextTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidNextToken(body.Error, context);
    const contents = Object.assign({ name: "InvalidNextToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceContentionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceContentionFault(body.Error, context);
    const contents = Object.assign({ name: "ResourceContentionFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceInUseFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceInUseFault(body.Error, context);
    const contents = Object.assign({ name: "ResourceInUseFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScalingActivityInProgressFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScalingActivityInProgressFault(body.Error, context);
    const contents = Object.assign({ name: "ScalingActivityInProgressFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryServiceLinkedRoleFailureResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceLinkedRoleFailure(body.Error, context);
    const contents = Object.assign({ name: "ServiceLinkedRoleFailure", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryActivityIds = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAttachInstancesQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryAttachLoadBalancerTargetGroupsType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.TargetGroupARNs !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroupARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryAttachLoadBalancersType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryAutoScalingGroupNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAutoScalingGroupNamesType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupNames !== undefined) {
        const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AutoScalingGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryAutoScalingNotificationTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAvailabilityZones = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBatchDeleteScheduledActionType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.ScheduledActionNames !== undefined) {
        const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScheduledActionNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryBatchPutScheduledUpdateGroupActionType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.ScheduledUpdateGroupActions !== undefined) {
        const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequests(input.ScheduledUpdateGroupActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScheduledUpdateGroupActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryBlockDeviceMapping = (input, context) => {
    const entries = {};
    if (input.DeviceName !== undefined) {
        entries["DeviceName"] = input.DeviceName;
    }
    if (input.Ebs !== undefined) {
        const memberEntries = serializeAws_queryEbs(input.Ebs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Ebs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NoDevice !== undefined) {
        entries["NoDevice"] = input.NoDevice;
    }
    if (input.VirtualName !== undefined) {
        entries["VirtualName"] = input.VirtualName;
    }
    return entries;
};
const serializeAws_queryBlockDeviceMappings = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryBlockDeviceMapping(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryClassicLinkVPCSecurityGroups = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCompleteLifecycleActionType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.LifecycleActionResult !== undefined) {
        entries["LifecycleActionResult"] = input.LifecycleActionResult;
    }
    if (input.LifecycleActionToken !== undefined) {
        entries["LifecycleActionToken"] = input.LifecycleActionToken;
    }
    if (input.LifecycleHookName !== undefined) {
        entries["LifecycleHookName"] = input.LifecycleHookName;
    }
    return entries;
};
const serializeAws_queryCreateAutoScalingGroupType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DefaultCooldown !== undefined) {
        entries["DefaultCooldown"] = input.DefaultCooldown;
    }
    if (input.DesiredCapacity !== undefined) {
        entries["DesiredCapacity"] = input.DesiredCapacity;
    }
    if (input.HealthCheckGracePeriod !== undefined) {
        entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
    }
    if (input.HealthCheckType !== undefined) {
        entries["HealthCheckType"] = input.HealthCheckType;
    }
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.LaunchConfigurationName !== undefined) {
        entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
    }
    if (input.LaunchTemplate !== undefined) {
        const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LaunchTemplate.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LifecycleHookSpecificationList !== undefined) {
        const memberEntries = serializeAws_queryLifecycleHookSpecifications(input.LifecycleHookSpecificationList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LifecycleHookSpecificationList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxInstanceLifetime !== undefined) {
        entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
    }
    if (input.MaxSize !== undefined) {
        entries["MaxSize"] = input.MaxSize;
    }
    if (input.MinSize !== undefined) {
        entries["MinSize"] = input.MinSize;
    }
    if (input.MixedInstancesPolicy !== undefined) {
        const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MixedInstancesPolicy.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NewInstancesProtectedFromScaleIn !== undefined) {
        entries["NewInstancesProtectedFromScaleIn"] =
            input.NewInstancesProtectedFromScaleIn;
    }
    if (input.PlacementGroup !== undefined) {
        entries["PlacementGroup"] = input.PlacementGroup;
    }
    if (input.ServiceLinkedRoleARN !== undefined) {
        entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetGroupARNs !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroupARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TerminationPolicies !== undefined) {
        const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TerminationPolicies.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VPCZoneIdentifier !== undefined) {
        entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
    }
    return entries;
};
const serializeAws_queryCreateLaunchConfigurationType = (input, context) => {
    const entries = {};
    if (input.AssociatePublicIpAddress !== undefined) {
        entries["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
    }
    if (input.BlockDeviceMappings !== undefined) {
        const memberEntries = serializeAws_queryBlockDeviceMappings(input.BlockDeviceMappings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BlockDeviceMappings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClassicLinkVPCId !== undefined) {
        entries["ClassicLinkVPCId"] = input.ClassicLinkVPCId;
    }
    if (input.ClassicLinkVPCSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryClassicLinkVPCSecurityGroups(input.ClassicLinkVPCSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ClassicLinkVPCSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EbsOptimized !== undefined) {
        entries["EbsOptimized"] = input.EbsOptimized;
    }
    if (input.IamInstanceProfile !== undefined) {
        entries["IamInstanceProfile"] = input.IamInstanceProfile;
    }
    if (input.ImageId !== undefined) {
        entries["ImageId"] = input.ImageId;
    }
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.InstanceMonitoring !== undefined) {
        const memberEntries = serializeAws_queryInstanceMonitoring(input.InstanceMonitoring, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceMonitoring.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.InstanceType !== undefined) {
        entries["InstanceType"] = input.InstanceType;
    }
    if (input.KernelId !== undefined) {
        entries["KernelId"] = input.KernelId;
    }
    if (input.KeyName !== undefined) {
        entries["KeyName"] = input.KeyName;
    }
    if (input.LaunchConfigurationName !== undefined) {
        entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
    }
    if (input.PlacementTenancy !== undefined) {
        entries["PlacementTenancy"] = input.PlacementTenancy;
    }
    if (input.RamdiskId !== undefined) {
        entries["RamdiskId"] = input.RamdiskId;
    }
    if (input.SecurityGroups !== undefined) {
        const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SpotPrice !== undefined) {
        entries["SpotPrice"] = input.SpotPrice;
    }
    if (input.UserData !== undefined) {
        entries["UserData"] = input.UserData;
    }
    return entries;
};
const serializeAws_queryCreateOrUpdateTagsType = (input, context) => {
    const entries = {};
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCustomizedMetricSpecification = (input, context) => {
    const entries = {};
    if (input.Dimensions !== undefined) {
        const memberEntries = serializeAws_queryMetricDimensions(input.Dimensions, context);
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
    if (input.Statistic !== undefined) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.Unit !== undefined) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryDeleteAutoScalingGroupType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.ForceDelete !== undefined) {
        entries["ForceDelete"] = input.ForceDelete;
    }
    return entries;
};
const serializeAws_queryDeleteLifecycleHookType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.LifecycleHookName !== undefined) {
        entries["LifecycleHookName"] = input.LifecycleHookName;
    }
    return entries;
};
const serializeAws_queryDeleteNotificationConfigurationType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.TopicARN !== undefined) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
const serializeAws_queryDeletePolicyType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteScheduledActionType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    return entries;
};
const serializeAws_queryDeleteTagsType = (input, context) => {
    const entries = {};
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeAutoScalingInstancesType = (input, context) => {
    const entries = {};
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeLifecycleHooksType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.LifecycleHookNames !== undefined) {
        const memberEntries = serializeAws_queryLifecycleHookNames(input.LifecycleHookNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LifecycleHookNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerTargetGroupsRequest = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancersRequest = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeNotificationConfigurationsType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupNames !== undefined) {
        const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AutoScalingGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribePoliciesType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.PolicyNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PolicyTypes !== undefined) {
        const memberEntries = serializeAws_queryPolicyTypes(input.PolicyTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeScalingActivitiesType = (input, context) => {
    const entries = {};
    if (input.ActivityIds !== undefined) {
        const memberEntries = serializeAws_queryActivityIds(input.ActivityIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ActivityIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeScheduledActionsType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScheduledActionNames !== undefined) {
        const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScheduledActionNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryDescribeTagsType = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilters(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDetachInstancesQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ShouldDecrementDesiredCapacity !== undefined) {
        entries["ShouldDecrementDesiredCapacity"] =
            input.ShouldDecrementDesiredCapacity;
    }
    return entries;
};
const serializeAws_queryDetachLoadBalancerTargetGroupsType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.TargetGroupARNs !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroupARNs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDetachLoadBalancersType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.LoadBalancerNames !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDisableMetricsCollectionQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.Metrics !== undefined) {
        const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Metrics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEbs = (input, context) => {
    const entries = {};
    if (input.DeleteOnTermination !== undefined) {
        entries["DeleteOnTermination"] = input.DeleteOnTermination;
    }
    if (input.Encrypted !== undefined) {
        entries["Encrypted"] = input.Encrypted;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.SnapshotId !== undefined) {
        entries["SnapshotId"] = input.SnapshotId;
    }
    if (input.VolumeSize !== undefined) {
        entries["VolumeSize"] = input.VolumeSize;
    }
    if (input.VolumeType !== undefined) {
        entries["VolumeType"] = input.VolumeType;
    }
    return entries;
};
const serializeAws_queryEnableMetricsCollectionQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.Granularity !== undefined) {
        entries["Granularity"] = input.Granularity;
    }
    if (input.Metrics !== undefined) {
        const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Metrics.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEnterStandbyQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ShouldDecrementDesiredCapacity !== undefined) {
        entries["ShouldDecrementDesiredCapacity"] =
            input.ShouldDecrementDesiredCapacity;
    }
    return entries;
};
const serializeAws_queryExecutePolicyType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.BreachThreshold !== undefined) {
        entries["BreachThreshold"] = input.BreachThreshold;
    }
    if (input.HonorCooldown !== undefined) {
        entries["HonorCooldown"] = input.HonorCooldown;
    }
    if (input.MetricValue !== undefined) {
        entries["MetricValue"] = input.MetricValue;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryExitStandbyQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
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
const serializeAws_queryFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryInstanceIds = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryInstanceMonitoring = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryInstancesDistribution = (input, context) => {
    const entries = {};
    if (input.OnDemandAllocationStrategy !== undefined) {
        entries["OnDemandAllocationStrategy"] = input.OnDemandAllocationStrategy;
    }
    if (input.OnDemandBaseCapacity !== undefined) {
        entries["OnDemandBaseCapacity"] = input.OnDemandBaseCapacity;
    }
    if (input.OnDemandPercentageAboveBaseCapacity !== undefined) {
        entries["OnDemandPercentageAboveBaseCapacity"] =
            input.OnDemandPercentageAboveBaseCapacity;
    }
    if (input.SpotAllocationStrategy !== undefined) {
        entries["SpotAllocationStrategy"] = input.SpotAllocationStrategy;
    }
    if (input.SpotInstancePools !== undefined) {
        entries["SpotInstancePools"] = input.SpotInstancePools;
    }
    if (input.SpotMaxPrice !== undefined) {
        entries["SpotMaxPrice"] = input.SpotMaxPrice;
    }
    return entries;
};
const serializeAws_queryLaunchConfigurationNameType = (input, context) => {
    const entries = {};
    if (input.LaunchConfigurationName !== undefined) {
        entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
    }
    return entries;
};
const serializeAws_queryLaunchConfigurationNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLaunchConfigurationNamesType = (input, context) => {
    const entries = {};
    if (input.LaunchConfigurationNames !== undefined) {
        const memberEntries = serializeAws_queryLaunchConfigurationNames(input.LaunchConfigurationNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LaunchConfigurationNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryLaunchTemplate = (input, context) => {
    const entries = {};
    if (input.LaunchTemplateSpecification !== undefined) {
        const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LaunchTemplateSpecification.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Overrides !== undefined) {
        const memberEntries = serializeAws_queryOverrides(input.Overrides, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Overrides.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryLaunchTemplateOverrides = (input, context) => {
    const entries = {};
    if (input.InstanceType !== undefined) {
        entries["InstanceType"] = input.InstanceType;
    }
    if (input.WeightedCapacity !== undefined) {
        entries["WeightedCapacity"] = input.WeightedCapacity;
    }
    return entries;
};
const serializeAws_queryLaunchTemplateSpecification = (input, context) => {
    const entries = {};
    if (input.LaunchTemplateId !== undefined) {
        entries["LaunchTemplateId"] = input.LaunchTemplateId;
    }
    if (input.LaunchTemplateName !== undefined) {
        entries["LaunchTemplateName"] = input.LaunchTemplateName;
    }
    if (input.Version !== undefined) {
        entries["Version"] = input.Version;
    }
    return entries;
};
const serializeAws_queryLifecycleHookNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLifecycleHookSpecification = (input, context) => {
    const entries = {};
    if (input.DefaultResult !== undefined) {
        entries["DefaultResult"] = input.DefaultResult;
    }
    if (input.HeartbeatTimeout !== undefined) {
        entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
    }
    if (input.LifecycleHookName !== undefined) {
        entries["LifecycleHookName"] = input.LifecycleHookName;
    }
    if (input.LifecycleTransition !== undefined) {
        entries["LifecycleTransition"] = input.LifecycleTransition;
    }
    if (input.NotificationMetadata !== undefined) {
        entries["NotificationMetadata"] = input.NotificationMetadata;
    }
    if (input.NotificationTargetARN !== undefined) {
        entries["NotificationTargetARN"] = input.NotificationTargetARN;
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    return entries;
};
const serializeAws_queryLifecycleHookSpecifications = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryLifecycleHookSpecification(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricDimension = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryMetricDimensions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryMetricDimension(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetrics = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryMixedInstancesPolicy = (input, context) => {
    const entries = {};
    if (input.InstancesDistribution !== undefined) {
        const memberEntries = serializeAws_queryInstancesDistribution(input.InstancesDistribution, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstancesDistribution.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LaunchTemplate !== undefined) {
        const memberEntries = serializeAws_queryLaunchTemplate(input.LaunchTemplate, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LaunchTemplate.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryOverrides = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryLaunchTemplateOverrides(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPredefinedMetricSpecification = (input, context) => {
    const entries = {};
    if (input.PredefinedMetricType !== undefined) {
        entries["PredefinedMetricType"] = input.PredefinedMetricType;
    }
    if (input.ResourceLabel !== undefined) {
        entries["ResourceLabel"] = input.ResourceLabel;
    }
    return entries;
};
const serializeAws_queryProcessNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPutLifecycleHookType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.DefaultResult !== undefined) {
        entries["DefaultResult"] = input.DefaultResult;
    }
    if (input.HeartbeatTimeout !== undefined) {
        entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
    }
    if (input.LifecycleHookName !== undefined) {
        entries["LifecycleHookName"] = input.LifecycleHookName;
    }
    if (input.LifecycleTransition !== undefined) {
        entries["LifecycleTransition"] = input.LifecycleTransition;
    }
    if (input.NotificationMetadata !== undefined) {
        entries["NotificationMetadata"] = input.NotificationMetadata;
    }
    if (input.NotificationTargetARN !== undefined) {
        entries["NotificationTargetARN"] = input.NotificationTargetARN;
    }
    if (input.RoleARN !== undefined) {
        entries["RoleARN"] = input.RoleARN;
    }
    return entries;
};
const serializeAws_queryPutNotificationConfigurationType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.NotificationTypes !== undefined) {
        const memberEntries = serializeAws_queryAutoScalingNotificationTypes(input.NotificationTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NotificationTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TopicARN !== undefined) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
const serializeAws_queryPutScalingPolicyType = (input, context) => {
    const entries = {};
    if (input.AdjustmentType !== undefined) {
        entries["AdjustmentType"] = input.AdjustmentType;
    }
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.Cooldown !== undefined) {
        entries["Cooldown"] = input.Cooldown;
    }
    if (input.EstimatedInstanceWarmup !== undefined) {
        entries["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
    }
    if (input.MetricAggregationType !== undefined) {
        entries["MetricAggregationType"] = input.MetricAggregationType;
    }
    if (input.MinAdjustmentMagnitude !== undefined) {
        entries["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
    }
    if (input.MinAdjustmentStep !== undefined) {
        entries["MinAdjustmentStep"] = input.MinAdjustmentStep;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyType !== undefined) {
        entries["PolicyType"] = input.PolicyType;
    }
    if (input.ScalingAdjustment !== undefined) {
        entries["ScalingAdjustment"] = input.ScalingAdjustment;
    }
    if (input.StepAdjustments !== undefined) {
        const memberEntries = serializeAws_queryStepAdjustments(input.StepAdjustments, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StepAdjustments.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetTrackingConfiguration !== undefined) {
        const memberEntries = serializeAws_queryTargetTrackingConfiguration(input.TargetTrackingConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetTrackingConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryPutScheduledUpdateGroupActionType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.DesiredCapacity !== undefined) {
        entries["DesiredCapacity"] = input.DesiredCapacity;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxSize !== undefined) {
        entries["MaxSize"] = input.MaxSize;
    }
    if (input.MinSize !== undefined) {
        entries["MinSize"] = input.MinSize;
    }
    if (input.Recurrence !== undefined) {
        entries["Recurrence"] = input.Recurrence;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Time !== undefined) {
        entries["Time"] = input.Time.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryRecordLifecycleActionHeartbeatType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.LifecycleActionToken !== undefined) {
        entries["LifecycleActionToken"] = input.LifecycleActionToken;
    }
    if (input.LifecycleHookName !== undefined) {
        entries["LifecycleHookName"] = input.LifecycleHookName;
    }
    return entries;
};
const serializeAws_queryScalingProcessQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.ScalingProcesses !== undefined) {
        const memberEntries = serializeAws_queryProcessNames(input.ScalingProcesses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScalingProcesses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryScheduledActionNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryScheduledUpdateGroupActionRequest = (input, context) => {
    const entries = {};
    if (input.DesiredCapacity !== undefined) {
        entries["DesiredCapacity"] = input.DesiredCapacity;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxSize !== undefined) {
        entries["MaxSize"] = input.MaxSize;
    }
    if (input.MinSize !== undefined) {
        entries["MinSize"] = input.MinSize;
    }
    if (input.Recurrence !== undefined) {
        entries["Recurrence"] = input.Recurrence;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryScheduledUpdateGroupActionRequests = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequest(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySecurityGroups = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetDesiredCapacityType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.DesiredCapacity !== undefined) {
        entries["DesiredCapacity"] = input.DesiredCapacity;
    }
    if (input.HonorCooldown !== undefined) {
        entries["HonorCooldown"] = input.HonorCooldown;
    }
    return entries;
};
const serializeAws_querySetInstanceHealthQuery = (input, context) => {
    const entries = {};
    if (input.HealthStatus !== undefined) {
        entries["HealthStatus"] = input.HealthStatus;
    }
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.ShouldRespectGracePeriod !== undefined) {
        entries["ShouldRespectGracePeriod"] = input.ShouldRespectGracePeriod;
    }
    return entries;
};
const serializeAws_querySetInstanceProtectionQuery = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.InstanceIds !== undefined) {
        const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `InstanceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ProtectedFromScaleIn !== undefined) {
        entries["ProtectedFromScaleIn"] = input.ProtectedFromScaleIn;
    }
    return entries;
};
const serializeAws_queryStepAdjustment = (input, context) => {
    const entries = {};
    if (input.MetricIntervalLowerBound !== undefined) {
        entries["MetricIntervalLowerBound"] = input.MetricIntervalLowerBound;
    }
    if (input.MetricIntervalUpperBound !== undefined) {
        entries["MetricIntervalUpperBound"] = input.MetricIntervalUpperBound;
    }
    if (input.ScalingAdjustment !== undefined) {
        entries["ScalingAdjustment"] = input.ScalingAdjustment;
    }
    return entries;
};
const serializeAws_queryStepAdjustments = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryStepAdjustment(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.PropagateAtLaunch !== undefined) {
        entries["PropagateAtLaunch"] = input.PropagateAtLaunch;
    }
    if (input.ResourceId !== undefined) {
        entries["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        entries["ResourceType"] = input.ResourceType;
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
const serializeAws_queryTargetGroupARNs = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetTrackingConfiguration = (input, context) => {
    const entries = {};
    if (input.CustomizedMetricSpecification !== undefined) {
        const memberEntries = serializeAws_queryCustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CustomizedMetricSpecification.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DisableScaleIn !== undefined) {
        entries["DisableScaleIn"] = input.DisableScaleIn;
    }
    if (input.PredefinedMetricSpecification !== undefined) {
        const memberEntries = serializeAws_queryPredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PredefinedMetricSpecification.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetValue !== undefined) {
        entries["TargetValue"] = input.TargetValue;
    }
    return entries;
};
const serializeAws_queryTerminateInstanceInAutoScalingGroupType = (input, context) => {
    const entries = {};
    if (input.InstanceId !== undefined) {
        entries["InstanceId"] = input.InstanceId;
    }
    if (input.ShouldDecrementDesiredCapacity !== undefined) {
        entries["ShouldDecrementDesiredCapacity"] =
            input.ShouldDecrementDesiredCapacity;
    }
    return entries;
};
const serializeAws_queryTerminationPolicies = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUpdateAutoScalingGroupType = (input, context) => {
    const entries = {};
    if (input.AutoScalingGroupName !== undefined) {
        entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
    }
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DefaultCooldown !== undefined) {
        entries["DefaultCooldown"] = input.DefaultCooldown;
    }
    if (input.DesiredCapacity !== undefined) {
        entries["DesiredCapacity"] = input.DesiredCapacity;
    }
    if (input.HealthCheckGracePeriod !== undefined) {
        entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
    }
    if (input.HealthCheckType !== undefined) {
        entries["HealthCheckType"] = input.HealthCheckType;
    }
    if (input.LaunchConfigurationName !== undefined) {
        entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
    }
    if (input.LaunchTemplate !== undefined) {
        const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LaunchTemplate.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxInstanceLifetime !== undefined) {
        entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
    }
    if (input.MaxSize !== undefined) {
        entries["MaxSize"] = input.MaxSize;
    }
    if (input.MinSize !== undefined) {
        entries["MinSize"] = input.MinSize;
    }
    if (input.MixedInstancesPolicy !== undefined) {
        const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MixedInstancesPolicy.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NewInstancesProtectedFromScaleIn !== undefined) {
        entries["NewInstancesProtectedFromScaleIn"] =
            input.NewInstancesProtectedFromScaleIn;
    }
    if (input.PlacementGroup !== undefined) {
        entries["PlacementGroup"] = input.PlacementGroup;
    }
    if (input.ServiceLinkedRoleARN !== undefined) {
        entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
    }
    if (input.TerminationPolicies !== undefined) {
        const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TerminationPolicies.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VPCZoneIdentifier !== undefined) {
        entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
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
const deserializeAws_queryActivities = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryActivity(entry, context));
    });
    return contents;
};
const deserializeAws_queryActivitiesType = (output, context) => {
    let contents = {
        __type: "ActivitiesType",
        Activities: undefined,
        NextToken: undefined
    };
    if (output.Activities === "") {
        contents.Activities = [];
    }
    if (output["Activities"] !== undefined &&
        output["Activities"]["member"] !== undefined) {
        const wrappedItem = output["Activities"]["member"] instanceof Array
            ? output["Activities"]["member"]
            : [output["Activities"]["member"]];
        contents.Activities = deserializeAws_queryActivities(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryActivity = (output, context) => {
    let contents = {
        __type: "Activity",
        ActivityId: undefined,
        AutoScalingGroupName: undefined,
        Cause: undefined,
        Description: undefined,
        Details: undefined,
        EndTime: undefined,
        Progress: undefined,
        StartTime: undefined,
        StatusCode: undefined,
        StatusMessage: undefined
    };
    if (output["ActivityId"] !== undefined) {
        contents.ActivityId = output["ActivityId"];
    }
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["Cause"] !== undefined) {
        contents.Cause = output["Cause"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Details"] !== undefined) {
        contents.Details = output["Details"];
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    if (output["Progress"] !== undefined) {
        contents.Progress = parseInt(output["Progress"]);
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output["StatusMessage"] !== undefined) {
        contents.StatusMessage = output["StatusMessage"];
    }
    return contents;
};
const deserializeAws_queryActivityType = (output, context) => {
    let contents = {
        __type: "ActivityType",
        Activity: undefined
    };
    if (output["Activity"] !== undefined) {
        contents.Activity = deserializeAws_queryActivity(output["Activity"], context);
    }
    return contents;
};
const deserializeAws_queryAdjustmentType = (output, context) => {
    let contents = {
        __type: "AdjustmentType",
        AdjustmentType: undefined
    };
    if (output["AdjustmentType"] !== undefined) {
        contents.AdjustmentType = output["AdjustmentType"];
    }
    return contents;
};
const deserializeAws_queryAdjustmentTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAdjustmentType(entry, context));
    });
    return contents;
};
const deserializeAws_queryAlarm = (output, context) => {
    let contents = {
        __type: "Alarm",
        AlarmARN: undefined,
        AlarmName: undefined
    };
    if (output["AlarmARN"] !== undefined) {
        contents.AlarmARN = output["AlarmARN"];
    }
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    return contents;
};
const deserializeAws_queryAlarms = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAlarm(entry, context));
    });
    return contents;
};
const deserializeAws_queryAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "AlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAttachLoadBalancerTargetGroupsResultType = (output, context) => {
    let contents = {
        __type: "AttachLoadBalancerTargetGroupsResultType"
    };
    return contents;
};
const deserializeAws_queryAttachLoadBalancersResultType = (output, context) => {
    let contents = {
        __type: "AttachLoadBalancersResultType"
    };
    return contents;
};
const deserializeAws_queryAutoScalingGroup = (output, context) => {
    let contents = {
        __type: "AutoScalingGroup",
        AutoScalingGroupARN: undefined,
        AutoScalingGroupName: undefined,
        AvailabilityZones: undefined,
        CreatedTime: undefined,
        DefaultCooldown: undefined,
        DesiredCapacity: undefined,
        EnabledMetrics: undefined,
        HealthCheckGracePeriod: undefined,
        HealthCheckType: undefined,
        Instances: undefined,
        LaunchConfigurationName: undefined,
        LaunchTemplate: undefined,
        LoadBalancerNames: undefined,
        MaxInstanceLifetime: undefined,
        MaxSize: undefined,
        MinSize: undefined,
        MixedInstancesPolicy: undefined,
        NewInstancesProtectedFromScaleIn: undefined,
        PlacementGroup: undefined,
        ServiceLinkedRoleARN: undefined,
        Status: undefined,
        SuspendedProcesses: undefined,
        Tags: undefined,
        TargetGroupARNs: undefined,
        TerminationPolicies: undefined,
        VPCZoneIdentifier: undefined
    };
    if (output["AutoScalingGroupARN"] !== undefined) {
        contents.AutoScalingGroupARN = output["AutoScalingGroupARN"];
    }
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["member"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["member"] instanceof Array
            ? output["AvailabilityZones"]["member"]
            : [output["AvailabilityZones"]["member"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(wrappedItem, context);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["DefaultCooldown"] !== undefined) {
        contents.DefaultCooldown = parseInt(output["DefaultCooldown"]);
    }
    if (output["DesiredCapacity"] !== undefined) {
        contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
    }
    if (output.EnabledMetrics === "") {
        contents.EnabledMetrics = [];
    }
    if (output["EnabledMetrics"] !== undefined &&
        output["EnabledMetrics"]["member"] !== undefined) {
        const wrappedItem = output["EnabledMetrics"]["member"] instanceof Array
            ? output["EnabledMetrics"]["member"]
            : [output["EnabledMetrics"]["member"]];
        contents.EnabledMetrics = deserializeAws_queryEnabledMetrics(wrappedItem, context);
    }
    if (output["HealthCheckGracePeriod"] !== undefined) {
        contents.HealthCheckGracePeriod = parseInt(output["HealthCheckGracePeriod"]);
    }
    if (output["HealthCheckType"] !== undefined) {
        contents.HealthCheckType = output["HealthCheckType"];
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined &&
        output["Instances"]["member"] !== undefined) {
        const wrappedItem = output["Instances"]["member"] instanceof Array
            ? output["Instances"]["member"]
            : [output["Instances"]["member"]];
        contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
    }
    if (output["LaunchConfigurationName"] !== undefined) {
        contents.LaunchConfigurationName = output["LaunchConfigurationName"];
    }
    if (output["LaunchTemplate"] !== undefined) {
        contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
    }
    if (output.LoadBalancerNames === "") {
        contents.LoadBalancerNames = [];
    }
    if (output["LoadBalancerNames"] !== undefined &&
        output["LoadBalancerNames"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancerNames"]["member"] instanceof Array
            ? output["LoadBalancerNames"]["member"]
            : [output["LoadBalancerNames"]["member"]];
        contents.LoadBalancerNames = deserializeAws_queryLoadBalancerNames(wrappedItem, context);
    }
    if (output["MaxInstanceLifetime"] !== undefined) {
        contents.MaxInstanceLifetime = parseInt(output["MaxInstanceLifetime"]);
    }
    if (output["MaxSize"] !== undefined) {
        contents.MaxSize = parseInt(output["MaxSize"]);
    }
    if (output["MinSize"] !== undefined) {
        contents.MinSize = parseInt(output["MinSize"]);
    }
    if (output["MixedInstancesPolicy"] !== undefined) {
        contents.MixedInstancesPolicy = deserializeAws_queryMixedInstancesPolicy(output["MixedInstancesPolicy"], context);
    }
    if (output["NewInstancesProtectedFromScaleIn"] !== undefined) {
        contents.NewInstancesProtectedFromScaleIn =
            output["NewInstancesProtectedFromScaleIn"] == "true";
    }
    if (output["PlacementGroup"] !== undefined) {
        contents.PlacementGroup = output["PlacementGroup"];
    }
    if (output["ServiceLinkedRoleARN"] !== undefined) {
        contents.ServiceLinkedRoleARN = output["ServiceLinkedRoleARN"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.SuspendedProcesses === "") {
        contents.SuspendedProcesses = [];
    }
    if (output["SuspendedProcesses"] !== undefined &&
        output["SuspendedProcesses"]["member"] !== undefined) {
        const wrappedItem = output["SuspendedProcesses"]["member"] instanceof Array
            ? output["SuspendedProcesses"]["member"]
            : [output["SuspendedProcesses"]["member"]];
        contents.SuspendedProcesses = deserializeAws_querySuspendedProcesses(wrappedItem, context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTagDescriptionList(wrappedItem, context);
    }
    if (output.TargetGroupARNs === "") {
        contents.TargetGroupARNs = [];
    }
    if (output["TargetGroupARNs"] !== undefined &&
        output["TargetGroupARNs"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroupARNs"]["member"] instanceof Array
            ? output["TargetGroupARNs"]["member"]
            : [output["TargetGroupARNs"]["member"]];
        contents.TargetGroupARNs = deserializeAws_queryTargetGroupARNs(wrappedItem, context);
    }
    if (output.TerminationPolicies === "") {
        contents.TerminationPolicies = [];
    }
    if (output["TerminationPolicies"] !== undefined &&
        output["TerminationPolicies"]["member"] !== undefined) {
        const wrappedItem = output["TerminationPolicies"]["member"] instanceof Array
            ? output["TerminationPolicies"]["member"]
            : [output["TerminationPolicies"]["member"]];
        contents.TerminationPolicies = deserializeAws_queryTerminationPolicies(wrappedItem, context);
    }
    if (output["VPCZoneIdentifier"] !== undefined) {
        contents.VPCZoneIdentifier = output["VPCZoneIdentifier"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAutoScalingGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryAutoScalingGroupsType = (output, context) => {
    let contents = {
        __type: "AutoScalingGroupsType",
        AutoScalingGroups: undefined,
        NextToken: undefined
    };
    if (output.AutoScalingGroups === "") {
        contents.AutoScalingGroups = [];
    }
    if (output["AutoScalingGroups"] !== undefined &&
        output["AutoScalingGroups"]["member"] !== undefined) {
        const wrappedItem = output["AutoScalingGroups"]["member"] instanceof Array
            ? output["AutoScalingGroups"]["member"]
            : [output["AutoScalingGroups"]["member"]];
        contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroups(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingInstanceDetails = (output, context) => {
    let contents = {
        __type: "AutoScalingInstanceDetails",
        AutoScalingGroupName: undefined,
        AvailabilityZone: undefined,
        HealthStatus: undefined,
        InstanceId: undefined,
        InstanceType: undefined,
        LaunchConfigurationName: undefined,
        LaunchTemplate: undefined,
        LifecycleState: undefined,
        ProtectedFromScaleIn: undefined,
        WeightedCapacity: undefined
    };
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    if (output["LaunchConfigurationName"] !== undefined) {
        contents.LaunchConfigurationName = output["LaunchConfigurationName"];
    }
    if (output["LaunchTemplate"] !== undefined) {
        contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
    }
    if (output["LifecycleState"] !== undefined) {
        contents.LifecycleState = output["LifecycleState"];
    }
    if (output["ProtectedFromScaleIn"] !== undefined) {
        contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
    }
    if (output["WeightedCapacity"] !== undefined) {
        contents.WeightedCapacity = output["WeightedCapacity"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingInstances = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAutoScalingInstanceDetails(entry, context));
    });
    return contents;
};
const deserializeAws_queryAutoScalingInstancesType = (output, context) => {
    let contents = {
        __type: "AutoScalingInstancesType",
        AutoScalingInstances: undefined,
        NextToken: undefined
    };
    if (output.AutoScalingInstances === "") {
        contents.AutoScalingInstances = [];
    }
    if (output["AutoScalingInstances"] !== undefined &&
        output["AutoScalingInstances"]["member"] !== undefined) {
        const wrappedItem = output["AutoScalingInstances"]["member"] instanceof Array
            ? output["AutoScalingInstances"]["member"]
            : [output["AutoScalingInstances"]["member"]];
        contents.AutoScalingInstances = deserializeAws_queryAutoScalingInstances(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingNotificationTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryBatchDeleteScheduledActionAnswer = (output, context) => {
    let contents = {
        __type: "BatchDeleteScheduledActionAnswer",
        FailedScheduledActions: undefined
    };
    if (output.FailedScheduledActions === "") {
        contents.FailedScheduledActions = [];
    }
    if (output["FailedScheduledActions"] !== undefined &&
        output["FailedScheduledActions"]["member"] !== undefined) {
        const wrappedItem = output["FailedScheduledActions"]["member"] instanceof Array
            ? output["FailedScheduledActions"]["member"]
            : [output["FailedScheduledActions"]["member"]];
        contents.FailedScheduledActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer = (output, context) => {
    let contents = {
        __type: "BatchPutScheduledUpdateGroupActionAnswer",
        FailedScheduledUpdateGroupActions: undefined
    };
    if (output.FailedScheduledUpdateGroupActions === "") {
        contents.FailedScheduledUpdateGroupActions = [];
    }
    if (output["FailedScheduledUpdateGroupActions"] !== undefined &&
        output["FailedScheduledUpdateGroupActions"]["member"] !== undefined) {
        const wrappedItem = output["FailedScheduledUpdateGroupActions"]["member"] instanceof Array
            ? output["FailedScheduledUpdateGroupActions"]["member"]
            : [output["FailedScheduledUpdateGroupActions"]["member"]];
        contents.FailedScheduledUpdateGroupActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryBlockDeviceMapping = (output, context) => {
    let contents = {
        __type: "BlockDeviceMapping",
        DeviceName: undefined,
        Ebs: undefined,
        NoDevice: undefined,
        VirtualName: undefined
    };
    if (output["DeviceName"] !== undefined) {
        contents.DeviceName = output["DeviceName"];
    }
    if (output["Ebs"] !== undefined) {
        contents.Ebs = deserializeAws_queryEbs(output["Ebs"], context);
    }
    if (output["NoDevice"] !== undefined) {
        contents.NoDevice = output["NoDevice"] == "true";
    }
    if (output["VirtualName"] !== undefined) {
        contents.VirtualName = output["VirtualName"];
    }
    return contents;
};
const deserializeAws_queryBlockDeviceMappings = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryBlockDeviceMapping(entry, context));
    });
    return contents;
};
const deserializeAws_queryClassicLinkVPCSecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCompleteLifecycleActionAnswer = (output, context) => {
    let contents = {
        __type: "CompleteLifecycleActionAnswer"
    };
    return contents;
};
const deserializeAws_queryCustomizedMetricSpecification = (output, context) => {
    let contents = {
        __type: "CustomizedMetricSpecification",
        Dimensions: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Statistic: undefined,
        Unit: undefined
    };
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined &&
        output["Dimensions"]["member"] !== undefined) {
        const wrappedItem = output["Dimensions"]["member"] instanceof Array
            ? output["Dimensions"]["member"]
            : [output["Dimensions"]["member"]];
        contents.Dimensions = deserializeAws_queryMetricDimensions(wrappedItem, context);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
const deserializeAws_queryDeleteLifecycleHookAnswer = (output, context) => {
    let contents = {
        __type: "DeleteLifecycleHookAnswer"
    };
    return contents;
};
const deserializeAws_queryDescribeAccountLimitsAnswer = (output, context) => {
    let contents = {
        __type: "DescribeAccountLimitsAnswer",
        MaxNumberOfAutoScalingGroups: undefined,
        MaxNumberOfLaunchConfigurations: undefined,
        NumberOfAutoScalingGroups: undefined,
        NumberOfLaunchConfigurations: undefined
    };
    if (output["MaxNumberOfAutoScalingGroups"] !== undefined) {
        contents.MaxNumberOfAutoScalingGroups = parseInt(output["MaxNumberOfAutoScalingGroups"]);
    }
    if (output["MaxNumberOfLaunchConfigurations"] !== undefined) {
        contents.MaxNumberOfLaunchConfigurations = parseInt(output["MaxNumberOfLaunchConfigurations"]);
    }
    if (output["NumberOfAutoScalingGroups"] !== undefined) {
        contents.NumberOfAutoScalingGroups = parseInt(output["NumberOfAutoScalingGroups"]);
    }
    if (output["NumberOfLaunchConfigurations"] !== undefined) {
        contents.NumberOfLaunchConfigurations = parseInt(output["NumberOfLaunchConfigurations"]);
    }
    return contents;
};
const deserializeAws_queryDescribeAdjustmentTypesAnswer = (output, context) => {
    let contents = {
        __type: "DescribeAdjustmentTypesAnswer",
        AdjustmentTypes: undefined
    };
    if (output.AdjustmentTypes === "") {
        contents.AdjustmentTypes = [];
    }
    if (output["AdjustmentTypes"] !== undefined &&
        output["AdjustmentTypes"]["member"] !== undefined) {
        const wrappedItem = output["AdjustmentTypes"]["member"] instanceof Array
            ? output["AdjustmentTypes"]["member"]
            : [output["AdjustmentTypes"]["member"]];
        contents.AdjustmentTypes = deserializeAws_queryAdjustmentTypes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer = (output, context) => {
    let contents = {
        __type: "DescribeAutoScalingNotificationTypesAnswer",
        AutoScalingNotificationTypes: undefined
    };
    if (output.AutoScalingNotificationTypes === "") {
        contents.AutoScalingNotificationTypes = [];
    }
    if (output["AutoScalingNotificationTypes"] !== undefined &&
        output["AutoScalingNotificationTypes"]["member"] !== undefined) {
        const wrappedItem = output["AutoScalingNotificationTypes"]["member"] instanceof Array
            ? output["AutoScalingNotificationTypes"]["member"]
            : [output["AutoScalingNotificationTypes"]["member"]];
        contents.AutoScalingNotificationTypes = deserializeAws_queryAutoScalingNotificationTypes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLifecycleHookTypesAnswer = (output, context) => {
    let contents = {
        __type: "DescribeLifecycleHookTypesAnswer",
        LifecycleHookTypes: undefined
    };
    if (output.LifecycleHookTypes === "") {
        contents.LifecycleHookTypes = [];
    }
    if (output["LifecycleHookTypes"] !== undefined &&
        output["LifecycleHookTypes"]["member"] !== undefined) {
        const wrappedItem = output["LifecycleHookTypes"]["member"] instanceof Array
            ? output["LifecycleHookTypes"]["member"]
            : [output["LifecycleHookTypes"]["member"]];
        contents.LifecycleHookTypes = deserializeAws_queryAutoScalingNotificationTypes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLifecycleHooksAnswer = (output, context) => {
    let contents = {
        __type: "DescribeLifecycleHooksAnswer",
        LifecycleHooks: undefined
    };
    if (output.LifecycleHooks === "") {
        contents.LifecycleHooks = [];
    }
    if (output["LifecycleHooks"] !== undefined &&
        output["LifecycleHooks"]["member"] !== undefined) {
        const wrappedItem = output["LifecycleHooks"]["member"] instanceof Array
            ? output["LifecycleHooks"]["member"]
            : [output["LifecycleHooks"]["member"]];
        contents.LifecycleHooks = deserializeAws_queryLifecycleHooks(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancerTargetGroupsResponse",
        LoadBalancerTargetGroups: undefined,
        NextToken: undefined
    };
    if (output.LoadBalancerTargetGroups === "") {
        contents.LoadBalancerTargetGroups = [];
    }
    if (output["LoadBalancerTargetGroups"] !== undefined &&
        output["LoadBalancerTargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancerTargetGroups"]["member"] instanceof Array
            ? output["LoadBalancerTargetGroups"]["member"]
            : [output["LoadBalancerTargetGroups"]["member"]];
        contents.LoadBalancerTargetGroups = deserializeAws_queryLoadBalancerTargetGroupStates(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancersResponse = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancersResponse",
        LoadBalancers: undefined,
        NextToken: undefined
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined &&
        output["LoadBalancers"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancers"]["member"] instanceof Array
            ? output["LoadBalancers"]["member"]
            : [output["LoadBalancers"]["member"]];
        contents.LoadBalancers = deserializeAws_queryLoadBalancerStates(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeMetricCollectionTypesAnswer = (output, context) => {
    let contents = {
        __type: "DescribeMetricCollectionTypesAnswer",
        Granularities: undefined,
        Metrics: undefined
    };
    if (output.Granularities === "") {
        contents.Granularities = [];
    }
    if (output["Granularities"] !== undefined &&
        output["Granularities"]["member"] !== undefined) {
        const wrappedItem = output["Granularities"]["member"] instanceof Array
            ? output["Granularities"]["member"]
            : [output["Granularities"]["member"]];
        contents.Granularities = deserializeAws_queryMetricGranularityTypes(wrappedItem, context);
    }
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined &&
        output["Metrics"]["member"] !== undefined) {
        const wrappedItem = output["Metrics"]["member"] instanceof Array
            ? output["Metrics"]["member"]
            : [output["Metrics"]["member"]];
        contents.Metrics = deserializeAws_queryMetricCollectionTypes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeNotificationConfigurationsAnswer = (output, context) => {
    let contents = {
        __type: "DescribeNotificationConfigurationsAnswer",
        NextToken: undefined,
        NotificationConfigurations: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.NotificationConfigurations === "") {
        contents.NotificationConfigurations = [];
    }
    if (output["NotificationConfigurations"] !== undefined &&
        output["NotificationConfigurations"]["member"] !== undefined) {
        const wrappedItem = output["NotificationConfigurations"]["member"] instanceof Array
            ? output["NotificationConfigurations"]["member"]
            : [output["NotificationConfigurations"]["member"]];
        contents.NotificationConfigurations = deserializeAws_queryNotificationConfigurations(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTerminationPolicyTypesAnswer = (output, context) => {
    let contents = {
        __type: "DescribeTerminationPolicyTypesAnswer",
        TerminationPolicyTypes: undefined
    };
    if (output.TerminationPolicyTypes === "") {
        contents.TerminationPolicyTypes = [];
    }
    if (output["TerminationPolicyTypes"] !== undefined &&
        output["TerminationPolicyTypes"]["member"] !== undefined) {
        const wrappedItem = output["TerminationPolicyTypes"]["member"] instanceof Array
            ? output["TerminationPolicyTypes"]["member"]
            : [output["TerminationPolicyTypes"]["member"]];
        contents.TerminationPolicyTypes = deserializeAws_queryTerminationPolicies(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDetachInstancesAnswer = (output, context) => {
    let contents = {
        __type: "DetachInstancesAnswer",
        Activities: undefined
    };
    if (output.Activities === "") {
        contents.Activities = [];
    }
    if (output["Activities"] !== undefined &&
        output["Activities"]["member"] !== undefined) {
        const wrappedItem = output["Activities"]["member"] instanceof Array
            ? output["Activities"]["member"]
            : [output["Activities"]["member"]];
        contents.Activities = deserializeAws_queryActivities(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDetachLoadBalancerTargetGroupsResultType = (output, context) => {
    let contents = {
        __type: "DetachLoadBalancerTargetGroupsResultType"
    };
    return contents;
};
const deserializeAws_queryDetachLoadBalancersResultType = (output, context) => {
    let contents = {
        __type: "DetachLoadBalancersResultType"
    };
    return contents;
};
const deserializeAws_queryEbs = (output, context) => {
    let contents = {
        __type: "Ebs",
        DeleteOnTermination: undefined,
        Encrypted: undefined,
        Iops: undefined,
        SnapshotId: undefined,
        VolumeSize: undefined,
        VolumeType: undefined
    };
    if (output["DeleteOnTermination"] !== undefined) {
        contents.DeleteOnTermination = output["DeleteOnTermination"] == "true";
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["SnapshotId"] !== undefined) {
        contents.SnapshotId = output["SnapshotId"];
    }
    if (output["VolumeSize"] !== undefined) {
        contents.VolumeSize = parseInt(output["VolumeSize"]);
    }
    if (output["VolumeType"] !== undefined) {
        contents.VolumeType = output["VolumeType"];
    }
    return contents;
};
const deserializeAws_queryEnabledMetric = (output, context) => {
    let contents = {
        __type: "EnabledMetric",
        Granularity: undefined,
        Metric: undefined
    };
    if (output["Granularity"] !== undefined) {
        contents.Granularity = output["Granularity"];
    }
    if (output["Metric"] !== undefined) {
        contents.Metric = output["Metric"];
    }
    return contents;
};
const deserializeAws_queryEnabledMetrics = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEnabledMetric(entry, context));
    });
    return contents;
};
const deserializeAws_queryEnterStandbyAnswer = (output, context) => {
    let contents = {
        __type: "EnterStandbyAnswer",
        Activities: undefined
    };
    if (output.Activities === "") {
        contents.Activities = [];
    }
    if (output["Activities"] !== undefined &&
        output["Activities"]["member"] !== undefined) {
        const wrappedItem = output["Activities"]["member"] instanceof Array
            ? output["Activities"]["member"]
            : [output["Activities"]["member"]];
        contents.Activities = deserializeAws_queryActivities(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryExitStandbyAnswer = (output, context) => {
    let contents = {
        __type: "ExitStandbyAnswer",
        Activities: undefined
    };
    if (output.Activities === "") {
        contents.Activities = [];
    }
    if (output["Activities"] !== undefined &&
        output["Activities"]["member"] !== undefined) {
        const wrappedItem = output["Activities"]["member"] instanceof Array
            ? output["Activities"]["member"]
            : [output["Activities"]["member"]];
        contents.Activities = deserializeAws_queryActivities(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryFailedScheduledUpdateGroupActionRequest = (output, context) => {
    let contents = {
        __type: "FailedScheduledUpdateGroupActionRequest",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ScheduledActionName: undefined
    };
    if (output["ErrorCode"] !== undefined) {
        contents.ErrorCode = output["ErrorCode"];
    }
    if (output["ErrorMessage"] !== undefined) {
        contents.ErrorMessage = output["ErrorMessage"];
    }
    if (output["ScheduledActionName"] !== undefined) {
        contents.ScheduledActionName = output["ScheduledActionName"];
    }
    return contents;
};
const deserializeAws_queryFailedScheduledUpdateGroupActionRequests = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryFailedScheduledUpdateGroupActionRequest(entry, context));
    });
    return contents;
};
const deserializeAws_queryInstance = (output, context) => {
    let contents = {
        __type: "Instance",
        AvailabilityZone: undefined,
        HealthStatus: undefined,
        InstanceId: undefined,
        InstanceType: undefined,
        LaunchConfigurationName: undefined,
        LaunchTemplate: undefined,
        LifecycleState: undefined,
        ProtectedFromScaleIn: undefined,
        WeightedCapacity: undefined
    };
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    if (output["LaunchConfigurationName"] !== undefined) {
        contents.LaunchConfigurationName = output["LaunchConfigurationName"];
    }
    if (output["LaunchTemplate"] !== undefined) {
        contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
    }
    if (output["LifecycleState"] !== undefined) {
        contents.LifecycleState = output["LifecycleState"];
    }
    if (output["ProtectedFromScaleIn"] !== undefined) {
        contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
    }
    if (output["WeightedCapacity"] !== undefined) {
        contents.WeightedCapacity = output["WeightedCapacity"];
    }
    return contents;
};
const deserializeAws_queryInstanceMonitoring = (output, context) => {
    let contents = {
        __type: "InstanceMonitoring",
        Enabled: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryInstances = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstance(entry, context));
    });
    return contents;
};
const deserializeAws_queryInstancesDistribution = (output, context) => {
    let contents = {
        __type: "InstancesDistribution",
        OnDemandAllocationStrategy: undefined,
        OnDemandBaseCapacity: undefined,
        OnDemandPercentageAboveBaseCapacity: undefined,
        SpotAllocationStrategy: undefined,
        SpotInstancePools: undefined,
        SpotMaxPrice: undefined
    };
    if (output["OnDemandAllocationStrategy"] !== undefined) {
        contents.OnDemandAllocationStrategy = output["OnDemandAllocationStrategy"];
    }
    if (output["OnDemandBaseCapacity"] !== undefined) {
        contents.OnDemandBaseCapacity = parseInt(output["OnDemandBaseCapacity"]);
    }
    if (output["OnDemandPercentageAboveBaseCapacity"] !== undefined) {
        contents.OnDemandPercentageAboveBaseCapacity = parseInt(output["OnDemandPercentageAboveBaseCapacity"]);
    }
    if (output["SpotAllocationStrategy"] !== undefined) {
        contents.SpotAllocationStrategy = output["SpotAllocationStrategy"];
    }
    if (output["SpotInstancePools"] !== undefined) {
        contents.SpotInstancePools = parseInt(output["SpotInstancePools"]);
    }
    if (output["SpotMaxPrice"] !== undefined) {
        contents.SpotMaxPrice = output["SpotMaxPrice"];
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
const deserializeAws_queryLaunchConfiguration = (output, context) => {
    let contents = {
        __type: "LaunchConfiguration",
        AssociatePublicIpAddress: undefined,
        BlockDeviceMappings: undefined,
        ClassicLinkVPCId: undefined,
        ClassicLinkVPCSecurityGroups: undefined,
        CreatedTime: undefined,
        EbsOptimized: undefined,
        IamInstanceProfile: undefined,
        ImageId: undefined,
        InstanceMonitoring: undefined,
        InstanceType: undefined,
        KernelId: undefined,
        KeyName: undefined,
        LaunchConfigurationARN: undefined,
        LaunchConfigurationName: undefined,
        PlacementTenancy: undefined,
        RamdiskId: undefined,
        SecurityGroups: undefined,
        SpotPrice: undefined,
        UserData: undefined
    };
    if (output["AssociatePublicIpAddress"] !== undefined) {
        contents.AssociatePublicIpAddress =
            output["AssociatePublicIpAddress"] == "true";
    }
    if (output.BlockDeviceMappings === "") {
        contents.BlockDeviceMappings = [];
    }
    if (output["BlockDeviceMappings"] !== undefined &&
        output["BlockDeviceMappings"]["member"] !== undefined) {
        const wrappedItem = output["BlockDeviceMappings"]["member"] instanceof Array
            ? output["BlockDeviceMappings"]["member"]
            : [output["BlockDeviceMappings"]["member"]];
        contents.BlockDeviceMappings = deserializeAws_queryBlockDeviceMappings(wrappedItem, context);
    }
    if (output["ClassicLinkVPCId"] !== undefined) {
        contents.ClassicLinkVPCId = output["ClassicLinkVPCId"];
    }
    if (output.ClassicLinkVPCSecurityGroups === "") {
        contents.ClassicLinkVPCSecurityGroups = [];
    }
    if (output["ClassicLinkVPCSecurityGroups"] !== undefined &&
        output["ClassicLinkVPCSecurityGroups"]["member"] !== undefined) {
        const wrappedItem = output["ClassicLinkVPCSecurityGroups"]["member"] instanceof Array
            ? output["ClassicLinkVPCSecurityGroups"]["member"]
            : [output["ClassicLinkVPCSecurityGroups"]["member"]];
        contents.ClassicLinkVPCSecurityGroups = deserializeAws_queryClassicLinkVPCSecurityGroups(wrappedItem, context);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["EbsOptimized"] !== undefined) {
        contents.EbsOptimized = output["EbsOptimized"] == "true";
    }
    if (output["IamInstanceProfile"] !== undefined) {
        contents.IamInstanceProfile = output["IamInstanceProfile"];
    }
    if (output["ImageId"] !== undefined) {
        contents.ImageId = output["ImageId"];
    }
    if (output["InstanceMonitoring"] !== undefined) {
        contents.InstanceMonitoring = deserializeAws_queryInstanceMonitoring(output["InstanceMonitoring"], context);
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    if (output["KernelId"] !== undefined) {
        contents.KernelId = output["KernelId"];
    }
    if (output["KeyName"] !== undefined) {
        contents.KeyName = output["KeyName"];
    }
    if (output["LaunchConfigurationARN"] !== undefined) {
        contents.LaunchConfigurationARN = output["LaunchConfigurationARN"];
    }
    if (output["LaunchConfigurationName"] !== undefined) {
        contents.LaunchConfigurationName = output["LaunchConfigurationName"];
    }
    if (output["PlacementTenancy"] !== undefined) {
        contents.PlacementTenancy = output["PlacementTenancy"];
    }
    if (output["RamdiskId"] !== undefined) {
        contents.RamdiskId = output["RamdiskId"];
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined &&
        output["SecurityGroups"]["member"] !== undefined) {
        const wrappedItem = output["SecurityGroups"]["member"] instanceof Array
            ? output["SecurityGroups"]["member"]
            : [output["SecurityGroups"]["member"]];
        contents.SecurityGroups = deserializeAws_querySecurityGroups(wrappedItem, context);
    }
    if (output["SpotPrice"] !== undefined) {
        contents.SpotPrice = output["SpotPrice"];
    }
    if (output["UserData"] !== undefined) {
        contents.UserData = output["UserData"];
    }
    return contents;
};
const deserializeAws_queryLaunchConfigurations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLaunchConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_queryLaunchConfigurationsType = (output, context) => {
    let contents = {
        __type: "LaunchConfigurationsType",
        LaunchConfigurations: undefined,
        NextToken: undefined
    };
    if (output.LaunchConfigurations === "") {
        contents.LaunchConfigurations = [];
    }
    if (output["LaunchConfigurations"] !== undefined &&
        output["LaunchConfigurations"]["member"] !== undefined) {
        const wrappedItem = output["LaunchConfigurations"]["member"] instanceof Array
            ? output["LaunchConfigurations"]["member"]
            : [output["LaunchConfigurations"]["member"]];
        contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurations(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryLaunchTemplate = (output, context) => {
    let contents = {
        __type: "LaunchTemplate",
        LaunchTemplateSpecification: undefined,
        Overrides: undefined
    };
    if (output["LaunchTemplateSpecification"] !== undefined) {
        contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplateSpecification"], context);
    }
    if (output.Overrides === "") {
        contents.Overrides = [];
    }
    if (output["Overrides"] !== undefined &&
        output["Overrides"]["member"] !== undefined) {
        const wrappedItem = output["Overrides"]["member"] instanceof Array
            ? output["Overrides"]["member"]
            : [output["Overrides"]["member"]];
        contents.Overrides = deserializeAws_queryOverrides(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryLaunchTemplateOverrides = (output, context) => {
    let contents = {
        __type: "LaunchTemplateOverrides",
        InstanceType: undefined,
        WeightedCapacity: undefined
    };
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    if (output["WeightedCapacity"] !== undefined) {
        contents.WeightedCapacity = output["WeightedCapacity"];
    }
    return contents;
};
const deserializeAws_queryLaunchTemplateSpecification = (output, context) => {
    let contents = {
        __type: "LaunchTemplateSpecification",
        LaunchTemplateId: undefined,
        LaunchTemplateName: undefined,
        Version: undefined
    };
    if (output["LaunchTemplateId"] !== undefined) {
        contents.LaunchTemplateId = output["LaunchTemplateId"];
    }
    if (output["LaunchTemplateName"] !== undefined) {
        contents.LaunchTemplateName = output["LaunchTemplateName"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryLifecycleHook = (output, context) => {
    let contents = {
        __type: "LifecycleHook",
        AutoScalingGroupName: undefined,
        DefaultResult: undefined,
        GlobalTimeout: undefined,
        HeartbeatTimeout: undefined,
        LifecycleHookName: undefined,
        LifecycleTransition: undefined,
        NotificationMetadata: undefined,
        NotificationTargetARN: undefined,
        RoleARN: undefined
    };
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["DefaultResult"] !== undefined) {
        contents.DefaultResult = output["DefaultResult"];
    }
    if (output["GlobalTimeout"] !== undefined) {
        contents.GlobalTimeout = parseInt(output["GlobalTimeout"]);
    }
    if (output["HeartbeatTimeout"] !== undefined) {
        contents.HeartbeatTimeout = parseInt(output["HeartbeatTimeout"]);
    }
    if (output["LifecycleHookName"] !== undefined) {
        contents.LifecycleHookName = output["LifecycleHookName"];
    }
    if (output["LifecycleTransition"] !== undefined) {
        contents.LifecycleTransition = output["LifecycleTransition"];
    }
    if (output["NotificationMetadata"] !== undefined) {
        contents.NotificationMetadata = output["NotificationMetadata"];
    }
    if (output["NotificationTargetARN"] !== undefined) {
        contents.NotificationTargetARN = output["NotificationTargetARN"];
    }
    if (output["RoleARN"] !== undefined) {
        contents.RoleARN = output["RoleARN"];
    }
    return contents;
};
const deserializeAws_queryLifecycleHooks = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLifecycleHook(entry, context));
    });
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
const deserializeAws_queryLoadBalancerNames = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryLoadBalancerState = (output, context) => {
    let contents = {
        __type: "LoadBalancerState",
        LoadBalancerName: undefined,
        State: undefined
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerStates = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancerState(entry, context));
    });
    return contents;
};
const deserializeAws_queryLoadBalancerTargetGroupState = (output, context) => {
    let contents = {
        __type: "LoadBalancerTargetGroupState",
        LoadBalancerTargetGroupARN: undefined,
        State: undefined
    };
    if (output["LoadBalancerTargetGroupARN"] !== undefined) {
        contents.LoadBalancerTargetGroupARN = output["LoadBalancerTargetGroupARN"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerTargetGroupStates = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancerTargetGroupState(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricCollectionType = (output, context) => {
    let contents = {
        __type: "MetricCollectionType",
        Metric: undefined
    };
    if (output["Metric"] !== undefined) {
        contents.Metric = output["Metric"];
    }
    return contents;
};
const deserializeAws_queryMetricCollectionTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricCollectionType(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricDimension = (output, context) => {
    let contents = {
        __type: "MetricDimension",
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
const deserializeAws_queryMetricDimensions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricDimension(entry, context));
    });
    return contents;
};
const deserializeAws_queryMetricGranularityType = (output, context) => {
    let contents = {
        __type: "MetricGranularityType",
        Granularity: undefined
    };
    if (output["Granularity"] !== undefined) {
        contents.Granularity = output["Granularity"];
    }
    return contents;
};
const deserializeAws_queryMetricGranularityTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMetricGranularityType(entry, context));
    });
    return contents;
};
const deserializeAws_queryMixedInstancesPolicy = (output, context) => {
    let contents = {
        __type: "MixedInstancesPolicy",
        InstancesDistribution: undefined,
        LaunchTemplate: undefined
    };
    if (output["InstancesDistribution"] !== undefined) {
        contents.InstancesDistribution = deserializeAws_queryInstancesDistribution(output["InstancesDistribution"], context);
    }
    if (output["LaunchTemplate"] !== undefined) {
        contents.LaunchTemplate = deserializeAws_queryLaunchTemplate(output["LaunchTemplate"], context);
    }
    return contents;
};
const deserializeAws_queryNotificationConfiguration = (output, context) => {
    let contents = {
        __type: "NotificationConfiguration",
        AutoScalingGroupName: undefined,
        NotificationType: undefined,
        TopicARN: undefined
    };
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["NotificationType"] !== undefined) {
        contents.NotificationType = output["NotificationType"];
    }
    if (output["TopicARN"] !== undefined) {
        contents.TopicARN = output["TopicARN"];
    }
    return contents;
};
const deserializeAws_queryNotificationConfigurations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNotificationConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_queryOverrides = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLaunchTemplateOverrides(entry, context));
    });
    return contents;
};
const deserializeAws_queryPoliciesType = (output, context) => {
    let contents = {
        __type: "PoliciesType",
        NextToken: undefined,
        ScalingPolicies: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.ScalingPolicies === "") {
        contents.ScalingPolicies = [];
    }
    if (output["ScalingPolicies"] !== undefined &&
        output["ScalingPolicies"]["member"] !== undefined) {
        const wrappedItem = output["ScalingPolicies"]["member"] instanceof Array
            ? output["ScalingPolicies"]["member"]
            : [output["ScalingPolicies"]["member"]];
        contents.ScalingPolicies = deserializeAws_queryScalingPolicies(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPolicyARNType = (output, context) => {
    let contents = {
        __type: "PolicyARNType",
        Alarms: undefined,
        PolicyARN: undefined
    };
    if (output.Alarms === "") {
        contents.Alarms = [];
    }
    if (output["Alarms"] !== undefined &&
        output["Alarms"]["member"] !== undefined) {
        const wrappedItem = output["Alarms"]["member"] instanceof Array
            ? output["Alarms"]["member"]
            : [output["Alarms"]["member"]];
        contents.Alarms = deserializeAws_queryAlarms(wrappedItem, context);
    }
    if (output["PolicyARN"] !== undefined) {
        contents.PolicyARN = output["PolicyARN"];
    }
    return contents;
};
const deserializeAws_queryPredefinedMetricSpecification = (output, context) => {
    let contents = {
        __type: "PredefinedMetricSpecification",
        PredefinedMetricType: undefined,
        ResourceLabel: undefined
    };
    if (output["PredefinedMetricType"] !== undefined) {
        contents.PredefinedMetricType = output["PredefinedMetricType"];
    }
    if (output["ResourceLabel"] !== undefined) {
        contents.ResourceLabel = output["ResourceLabel"];
    }
    return contents;
};
const deserializeAws_queryProcessType = (output, context) => {
    let contents = {
        __type: "ProcessType",
        ProcessName: undefined
    };
    if (output["ProcessName"] !== undefined) {
        contents.ProcessName = output["ProcessName"];
    }
    return contents;
};
const deserializeAws_queryProcesses = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryProcessType(entry, context));
    });
    return contents;
};
const deserializeAws_queryProcessesType = (output, context) => {
    let contents = {
        __type: "ProcessesType",
        Processes: undefined
    };
    if (output.Processes === "") {
        contents.Processes = [];
    }
    if (output["Processes"] !== undefined &&
        output["Processes"]["member"] !== undefined) {
        const wrappedItem = output["Processes"]["member"] instanceof Array
            ? output["Processes"]["member"]
            : [output["Processes"]["member"]];
        contents.Processes = deserializeAws_queryProcesses(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPutLifecycleHookAnswer = (output, context) => {
    let contents = {
        __type: "PutLifecycleHookAnswer"
    };
    return contents;
};
const deserializeAws_queryRecordLifecycleActionHeartbeatAnswer = (output, context) => {
    let contents = {
        __type: "RecordLifecycleActionHeartbeatAnswer"
    };
    return contents;
};
const deserializeAws_queryResourceContentionFault = (output, context) => {
    let contents = {
        __type: "ResourceContentionFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceInUseFault = (output, context) => {
    let contents = {
        __type: "ResourceInUseFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScalingActivityInProgressFault = (output, context) => {
    let contents = {
        __type: "ScalingActivityInProgressFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScalingPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryScalingPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_queryScalingPolicy = (output, context) => {
    let contents = {
        __type: "ScalingPolicy",
        AdjustmentType: undefined,
        Alarms: undefined,
        AutoScalingGroupName: undefined,
        Cooldown: undefined,
        EstimatedInstanceWarmup: undefined,
        MetricAggregationType: undefined,
        MinAdjustmentMagnitude: undefined,
        MinAdjustmentStep: undefined,
        PolicyARN: undefined,
        PolicyName: undefined,
        PolicyType: undefined,
        ScalingAdjustment: undefined,
        StepAdjustments: undefined,
        TargetTrackingConfiguration: undefined
    };
    if (output["AdjustmentType"] !== undefined) {
        contents.AdjustmentType = output["AdjustmentType"];
    }
    if (output.Alarms === "") {
        contents.Alarms = [];
    }
    if (output["Alarms"] !== undefined &&
        output["Alarms"]["member"] !== undefined) {
        const wrappedItem = output["Alarms"]["member"] instanceof Array
            ? output["Alarms"]["member"]
            : [output["Alarms"]["member"]];
        contents.Alarms = deserializeAws_queryAlarms(wrappedItem, context);
    }
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["Cooldown"] !== undefined) {
        contents.Cooldown = parseInt(output["Cooldown"]);
    }
    if (output["EstimatedInstanceWarmup"] !== undefined) {
        contents.EstimatedInstanceWarmup = parseInt(output["EstimatedInstanceWarmup"]);
    }
    if (output["MetricAggregationType"] !== undefined) {
        contents.MetricAggregationType = output["MetricAggregationType"];
    }
    if (output["MinAdjustmentMagnitude"] !== undefined) {
        contents.MinAdjustmentMagnitude = parseInt(output["MinAdjustmentMagnitude"]);
    }
    if (output["MinAdjustmentStep"] !== undefined) {
        contents.MinAdjustmentStep = parseInt(output["MinAdjustmentStep"]);
    }
    if (output["PolicyARN"] !== undefined) {
        contents.PolicyARN = output["PolicyARN"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyType"] !== undefined) {
        contents.PolicyType = output["PolicyType"];
    }
    if (output["ScalingAdjustment"] !== undefined) {
        contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
    }
    if (output.StepAdjustments === "") {
        contents.StepAdjustments = [];
    }
    if (output["StepAdjustments"] !== undefined &&
        output["StepAdjustments"]["member"] !== undefined) {
        const wrappedItem = output["StepAdjustments"]["member"] instanceof Array
            ? output["StepAdjustments"]["member"]
            : [output["StepAdjustments"]["member"]];
        contents.StepAdjustments = deserializeAws_queryStepAdjustments(wrappedItem, context);
    }
    if (output["TargetTrackingConfiguration"] !== undefined) {
        contents.TargetTrackingConfiguration = deserializeAws_queryTargetTrackingConfiguration(output["TargetTrackingConfiguration"], context);
    }
    return contents;
};
const deserializeAws_queryScheduledActionsType = (output, context) => {
    let contents = {
        __type: "ScheduledActionsType",
        NextToken: undefined,
        ScheduledUpdateGroupActions: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.ScheduledUpdateGroupActions === "") {
        contents.ScheduledUpdateGroupActions = [];
    }
    if (output["ScheduledUpdateGroupActions"] !== undefined &&
        output["ScheduledUpdateGroupActions"]["member"] !== undefined) {
        const wrappedItem = output["ScheduledUpdateGroupActions"]["member"] instanceof Array
            ? output["ScheduledUpdateGroupActions"]["member"]
            : [output["ScheduledUpdateGroupActions"]["member"]];
        contents.ScheduledUpdateGroupActions = deserializeAws_queryScheduledUpdateGroupActions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryScheduledUpdateGroupAction = (output, context) => {
    let contents = {
        __type: "ScheduledUpdateGroupAction",
        AutoScalingGroupName: undefined,
        DesiredCapacity: undefined,
        EndTime: undefined,
        MaxSize: undefined,
        MinSize: undefined,
        Recurrence: undefined,
        ScheduledActionARN: undefined,
        ScheduledActionName: undefined,
        StartTime: undefined,
        Time: undefined
    };
    if (output["AutoScalingGroupName"] !== undefined) {
        contents.AutoScalingGroupName = output["AutoScalingGroupName"];
    }
    if (output["DesiredCapacity"] !== undefined) {
        contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    if (output["MaxSize"] !== undefined) {
        contents.MaxSize = parseInt(output["MaxSize"]);
    }
    if (output["MinSize"] !== undefined) {
        contents.MinSize = parseInt(output["MinSize"]);
    }
    if (output["Recurrence"] !== undefined) {
        contents.Recurrence = output["Recurrence"];
    }
    if (output["ScheduledActionARN"] !== undefined) {
        contents.ScheduledActionARN = output["ScheduledActionARN"];
    }
    if (output["ScheduledActionName"] !== undefined) {
        contents.ScheduledActionName = output["ScheduledActionName"];
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["Time"] !== undefined) {
        contents.Time = new Date(output["Time"]);
    }
    return contents;
};
const deserializeAws_queryScheduledUpdateGroupActions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryScheduledUpdateGroupAction(entry, context));
    });
    return contents;
};
const deserializeAws_querySecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryServiceLinkedRoleFailure = (output, context) => {
    let contents = {
        __type: "ServiceLinkedRoleFailure",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySetInstanceProtectionAnswer = (output, context) => {
    let contents = {
        __type: "SetInstanceProtectionAnswer"
    };
    return contents;
};
const deserializeAws_queryStepAdjustment = (output, context) => {
    let contents = {
        __type: "StepAdjustment",
        MetricIntervalLowerBound: undefined,
        MetricIntervalUpperBound: undefined,
        ScalingAdjustment: undefined
    };
    if (output["MetricIntervalLowerBound"] !== undefined) {
        contents.MetricIntervalLowerBound = parseFloat(output["MetricIntervalLowerBound"]);
    }
    if (output["MetricIntervalUpperBound"] !== undefined) {
        contents.MetricIntervalUpperBound = parseFloat(output["MetricIntervalUpperBound"]);
    }
    if (output["ScalingAdjustment"] !== undefined) {
        contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
    }
    return contents;
};
const deserializeAws_queryStepAdjustments = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStepAdjustment(entry, context));
    });
    return contents;
};
const deserializeAws_querySuspendedProcess = (output, context) => {
    let contents = {
        __type: "SuspendedProcess",
        ProcessName: undefined,
        SuspensionReason: undefined
    };
    if (output["ProcessName"] !== undefined) {
        contents.ProcessName = output["ProcessName"];
    }
    if (output["SuspensionReason"] !== undefined) {
        contents.SuspensionReason = output["SuspensionReason"];
    }
    return contents;
};
const deserializeAws_querySuspendedProcesses = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySuspendedProcess(entry, context));
    });
    return contents;
};
const deserializeAws_queryTagDescription = (output, context) => {
    let contents = {
        __type: "TagDescription",
        Key: undefined,
        PropagateAtLaunch: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["PropagateAtLaunch"] !== undefined) {
        contents.PropagateAtLaunch = output["PropagateAtLaunch"] == "true";
    }
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagDescriptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTagDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryTagsType = (output, context) => {
    let contents = {
        __type: "TagsType",
        NextToken: undefined,
        Tags: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTagDescriptionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryTargetGroupARNs = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryTargetTrackingConfiguration = (output, context) => {
    let contents = {
        __type: "TargetTrackingConfiguration",
        CustomizedMetricSpecification: undefined,
        DisableScaleIn: undefined,
        PredefinedMetricSpecification: undefined,
        TargetValue: undefined
    };
    if (output["CustomizedMetricSpecification"] !== undefined) {
        contents.CustomizedMetricSpecification = deserializeAws_queryCustomizedMetricSpecification(output["CustomizedMetricSpecification"], context);
    }
    if (output["DisableScaleIn"] !== undefined) {
        contents.DisableScaleIn = output["DisableScaleIn"] == "true";
    }
    if (output["PredefinedMetricSpecification"] !== undefined) {
        contents.PredefinedMetricSpecification = deserializeAws_queryPredefinedMetricSpecification(output["PredefinedMetricSpecification"], context);
    }
    if (output["TargetValue"] !== undefined) {
        contents.TargetValue = parseFloat(output["TargetValue"]);
    }
    return contents;
};
const deserializeAws_queryTerminationPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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