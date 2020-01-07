"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAcceptReservedNodeExchangeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAcceptReservedNodeExchangeInputMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AcceptReservedNodeExchange", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAcceptReservedNodeExchangeCommand = serializeAws_queryAcceptReservedNodeExchangeCommand;
async function serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AuthorizeClusterSecurityGroupIngress", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand;
async function serializeAws_queryAuthorizeSnapshotAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAuthorizeSnapshotAccessMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AuthorizeSnapshotAccess", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAuthorizeSnapshotAccessCommand = serializeAws_queryAuthorizeSnapshotAccessCommand;
async function serializeAws_queryBatchDeleteClusterSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchDeleteClusterSnapshotsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchDeleteClusterSnapshots", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchDeleteClusterSnapshotsCommand = serializeAws_queryBatchDeleteClusterSnapshotsCommand;
async function serializeAws_queryBatchModifyClusterSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchModifyClusterSnapshotsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchModifyClusterSnapshots", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchModifyClusterSnapshotsCommand = serializeAws_queryBatchModifyClusterSnapshotsCommand;
async function serializeAws_queryCancelResizeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCancelResizeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CancelResize", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCancelResizeCommand = serializeAws_queryCancelResizeCommand;
async function serializeAws_queryCopyClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyClusterSnapshotCommand = serializeAws_queryCopyClusterSnapshotCommand;
async function serializeAws_queryCreateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCluster", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateClusterCommand = serializeAws_queryCreateClusterCommand;
async function serializeAws_queryCreateClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateClusterParameterGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateClusterParameterGroupCommand = serializeAws_queryCreateClusterParameterGroupCommand;
async function serializeAws_queryCreateClusterSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateClusterSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateClusterSecurityGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateClusterSecurityGroupCommand = serializeAws_queryCreateClusterSecurityGroupCommand;
async function serializeAws_queryCreateClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateClusterSnapshotCommand = serializeAws_queryCreateClusterSnapshotCommand;
async function serializeAws_queryCreateClusterSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateClusterSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateClusterSubnetGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateClusterSubnetGroupCommand = serializeAws_queryCreateClusterSubnetGroupCommand;
async function serializeAws_queryCreateEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateEventSubscription", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateEventSubscriptionCommand = serializeAws_queryCreateEventSubscriptionCommand;
async function serializeAws_queryCreateHsmClientCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateHsmClientCertificateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateHsmClientCertificate", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateHsmClientCertificateCommand = serializeAws_queryCreateHsmClientCertificateCommand;
async function serializeAws_queryCreateHsmConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateHsmConfigurationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateHsmConfiguration", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateHsmConfigurationCommand = serializeAws_queryCreateHsmConfigurationCommand;
async function serializeAws_queryCreateScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateScheduledActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateScheduledAction", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateScheduledActionCommand = serializeAws_queryCreateScheduledActionCommand;
async function serializeAws_queryCreateSnapshotCopyGrantCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateSnapshotCopyGrantMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateSnapshotCopyGrant", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateSnapshotCopyGrantCommand = serializeAws_queryCreateSnapshotCopyGrantCommand;
async function serializeAws_queryCreateSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateSnapshotScheduleMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateSnapshotSchedule", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateSnapshotScheduleCommand = serializeAws_queryCreateSnapshotScheduleCommand;
async function serializeAws_queryCreateTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateTagsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateTags", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateTagsCommand = serializeAws_queryCreateTagsCommand;
async function serializeAws_queryDeleteClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCluster", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteClusterCommand = serializeAws_queryDeleteClusterCommand;
async function serializeAws_queryDeleteClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteClusterParameterGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteClusterParameterGroupCommand = serializeAws_queryDeleteClusterParameterGroupCommand;
async function serializeAws_queryDeleteClusterSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteClusterSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteClusterSecurityGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteClusterSecurityGroupCommand = serializeAws_queryDeleteClusterSecurityGroupCommand;
async function serializeAws_queryDeleteClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteClusterSnapshotCommand = serializeAws_queryDeleteClusterSnapshotCommand;
async function serializeAws_queryDeleteClusterSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteClusterSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteClusterSubnetGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteClusterSubnetGroupCommand = serializeAws_queryDeleteClusterSubnetGroupCommand;
async function serializeAws_queryDeleteEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteEventSubscription", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteEventSubscriptionCommand = serializeAws_queryDeleteEventSubscriptionCommand;
async function serializeAws_queryDeleteHsmClientCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteHsmClientCertificateMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteHsmClientCertificate", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteHsmClientCertificateCommand = serializeAws_queryDeleteHsmClientCertificateCommand;
async function serializeAws_queryDeleteHsmConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteHsmConfigurationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteHsmConfiguration", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteHsmConfigurationCommand = serializeAws_queryDeleteHsmConfigurationCommand;
async function serializeAws_queryDeleteScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteScheduledActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteScheduledAction", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteScheduledActionCommand = serializeAws_queryDeleteScheduledActionCommand;
async function serializeAws_queryDeleteSnapshotCopyGrantCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSnapshotCopyGrantMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSnapshotCopyGrant", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSnapshotCopyGrantCommand = serializeAws_queryDeleteSnapshotCopyGrantCommand;
async function serializeAws_queryDeleteSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSnapshotScheduleMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSnapshotSchedule", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSnapshotScheduleCommand = serializeAws_queryDeleteSnapshotScheduleCommand;
async function serializeAws_queryDeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteTagsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteTags", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteTagsCommand = serializeAws_queryDeleteTagsCommand;
async function serializeAws_queryDescribeAccountAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccountAttributesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAccountAttributes", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
async function serializeAws_queryDescribeClusterDbRevisionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterDbRevisionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterDbRevisions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterDbRevisionsCommand = serializeAws_queryDescribeClusterDbRevisionsCommand;
async function serializeAws_queryDescribeClusterParameterGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterParameterGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterParameterGroups", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterParameterGroupsCommand = serializeAws_queryDescribeClusterParameterGroupsCommand;
async function serializeAws_queryDescribeClusterParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterParameters", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterParametersCommand = serializeAws_queryDescribeClusterParametersCommand;
async function serializeAws_queryDescribeClusterSecurityGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterSecurityGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterSecurityGroups", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterSecurityGroupsCommand = serializeAws_queryDescribeClusterSecurityGroupsCommand;
async function serializeAws_queryDescribeClusterSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterSnapshotsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterSnapshots", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterSnapshotsCommand = serializeAws_queryDescribeClusterSnapshotsCommand;
async function serializeAws_queryDescribeClusterSubnetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterSubnetGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterSubnetGroups", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterSubnetGroupsCommand = serializeAws_queryDescribeClusterSubnetGroupsCommand;
async function serializeAws_queryDescribeClusterTracksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterTracksMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterTracks", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterTracksCommand = serializeAws_queryDescribeClusterTracksCommand;
async function serializeAws_queryDescribeClusterVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClusterVersionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusterVersions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClusterVersionsCommand = serializeAws_queryDescribeClusterVersionsCommand;
async function serializeAws_queryDescribeClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeClustersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeClusters", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeClustersCommand = serializeAws_queryDescribeClustersCommand;
async function serializeAws_queryDescribeDefaultClusterParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDefaultClusterParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDefaultClusterParameters", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDefaultClusterParametersCommand = serializeAws_queryDescribeDefaultClusterParametersCommand;
async function serializeAws_queryDescribeEventCategoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventCategoriesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEventCategories", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventCategoriesCommand = serializeAws_queryDescribeEventCategoriesCommand;
async function serializeAws_queryDescribeEventSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventSubscriptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEventSubscriptions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventSubscriptionsCommand = serializeAws_queryDescribeEventSubscriptionsCommand;
async function serializeAws_queryDescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEvents", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
async function serializeAws_queryDescribeHsmClientCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeHsmClientCertificatesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeHsmClientCertificates", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeHsmClientCertificatesCommand = serializeAws_queryDescribeHsmClientCertificatesCommand;
async function serializeAws_queryDescribeHsmConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeHsmConfigurationsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeHsmConfigurations", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeHsmConfigurationsCommand = serializeAws_queryDescribeHsmConfigurationsCommand;
async function serializeAws_queryDescribeLoggingStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoggingStatusMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoggingStatus", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoggingStatusCommand = serializeAws_queryDescribeLoggingStatusCommand;
async function serializeAws_queryDescribeNodeConfigurationOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeNodeConfigurationOptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeNodeConfigurationOptions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeNodeConfigurationOptionsCommand = serializeAws_queryDescribeNodeConfigurationOptionsCommand;
async function serializeAws_queryDescribeOrderableClusterOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeOrderableClusterOptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeOrderableClusterOptions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeOrderableClusterOptionsCommand = serializeAws_queryDescribeOrderableClusterOptionsCommand;
async function serializeAws_queryDescribeReservedNodeOfferingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedNodeOfferingsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedNodeOfferings", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedNodeOfferingsCommand = serializeAws_queryDescribeReservedNodeOfferingsCommand;
async function serializeAws_queryDescribeReservedNodesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedNodesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedNodes", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedNodesCommand = serializeAws_queryDescribeReservedNodesCommand;
async function serializeAws_queryDescribeResizeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeResizeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeResize", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeResizeCommand = serializeAws_queryDescribeResizeCommand;
async function serializeAws_queryDescribeScheduledActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeScheduledActionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeScheduledActions", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeScheduledActionsCommand = serializeAws_queryDescribeScheduledActionsCommand;
async function serializeAws_queryDescribeSnapshotCopyGrantsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSnapshotCopyGrantsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSnapshotCopyGrants", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSnapshotCopyGrantsCommand = serializeAws_queryDescribeSnapshotCopyGrantsCommand;
async function serializeAws_queryDescribeSnapshotSchedulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSnapshotSchedulesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSnapshotSchedules", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSnapshotSchedulesCommand = serializeAws_queryDescribeSnapshotSchedulesCommand;
async function serializeAws_queryDescribeStorageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DescribeStorage",
        Version: "2012-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeStorageCommand = serializeAws_queryDescribeStorageCommand;
async function serializeAws_queryDescribeTableRestoreStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTableRestoreStatusMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTableRestoreStatus", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTableRestoreStatusCommand = serializeAws_queryDescribeTableRestoreStatusCommand;
async function serializeAws_queryDescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTagsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTags", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
async function serializeAws_queryDisableLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDisableLoggingMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableLogging", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableLoggingCommand = serializeAws_queryDisableLoggingCommand;
async function serializeAws_queryDisableSnapshotCopyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDisableSnapshotCopyMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DisableSnapshotCopy", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDisableSnapshotCopyCommand = serializeAws_queryDisableSnapshotCopyCommand;
async function serializeAws_queryEnableLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableLoggingMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableLogging", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableLoggingCommand = serializeAws_queryEnableLoggingCommand;
async function serializeAws_queryEnableSnapshotCopyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableSnapshotCopyMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableSnapshotCopy", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableSnapshotCopyCommand = serializeAws_queryEnableSnapshotCopyCommand;
async function serializeAws_queryGetClusterCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetClusterCredentialsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetClusterCredentials", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetClusterCredentialsCommand = serializeAws_queryGetClusterCredentialsCommand;
async function serializeAws_queryGetReservedNodeExchangeOfferingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetReservedNodeExchangeOfferings", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetReservedNodeExchangeOfferingsCommand = serializeAws_queryGetReservedNodeExchangeOfferingsCommand;
async function serializeAws_queryModifyClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCluster", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterCommand = serializeAws_queryModifyClusterCommand;
async function serializeAws_queryModifyClusterDbRevisionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterDbRevisionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterDbRevision", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterDbRevisionCommand = serializeAws_queryModifyClusterDbRevisionCommand;
async function serializeAws_queryModifyClusterIamRolesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterIamRolesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterIamRoles", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterIamRolesCommand = serializeAws_queryModifyClusterIamRolesCommand;
async function serializeAws_queryModifyClusterMaintenanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterMaintenanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterMaintenance", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterMaintenanceCommand = serializeAws_queryModifyClusterMaintenanceCommand;
async function serializeAws_queryModifyClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterParameterGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterParameterGroupCommand = serializeAws_queryModifyClusterParameterGroupCommand;
async function serializeAws_queryModifyClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterSnapshotCommand = serializeAws_queryModifyClusterSnapshotCommand;
async function serializeAws_queryModifyClusterSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterSnapshotScheduleMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterSnapshotSchedule", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterSnapshotScheduleCommand = serializeAws_queryModifyClusterSnapshotScheduleCommand;
async function serializeAws_queryModifyClusterSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyClusterSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyClusterSubnetGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyClusterSubnetGroupCommand = serializeAws_queryModifyClusterSubnetGroupCommand;
async function serializeAws_queryModifyEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyEventSubscription", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyEventSubscriptionCommand = serializeAws_queryModifyEventSubscriptionCommand;
async function serializeAws_queryModifyScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyScheduledActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyScheduledAction", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyScheduledActionCommand = serializeAws_queryModifyScheduledActionCommand;
async function serializeAws_queryModifySnapshotCopyRetentionPeriodCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifySnapshotCopyRetentionPeriodMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifySnapshotCopyRetentionPeriod", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = serializeAws_queryModifySnapshotCopyRetentionPeriodCommand;
async function serializeAws_queryModifySnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifySnapshotScheduleMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifySnapshotSchedule", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifySnapshotScheduleCommand = serializeAws_queryModifySnapshotScheduleCommand;
async function serializeAws_queryPurchaseReservedNodeOfferingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPurchaseReservedNodeOfferingMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PurchaseReservedNodeOffering", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPurchaseReservedNodeOfferingCommand = serializeAws_queryPurchaseReservedNodeOfferingCommand;
async function serializeAws_queryRebootClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRebootClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RebootCluster", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRebootClusterCommand = serializeAws_queryRebootClusterCommand;
async function serializeAws_queryResetClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResetClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResetClusterParameterGroup", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResetClusterParameterGroupCommand = serializeAws_queryResetClusterParameterGroupCommand;
async function serializeAws_queryResizeClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResizeClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResizeCluster", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResizeClusterCommand = serializeAws_queryResizeClusterCommand;
async function serializeAws_queryRestoreFromClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreFromClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreFromClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreFromClusterSnapshotCommand = serializeAws_queryRestoreFromClusterSnapshotCommand;
async function serializeAws_queryRestoreTableFromClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreTableFromClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreTableFromClusterSnapshot", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreTableFromClusterSnapshotCommand = serializeAws_queryRestoreTableFromClusterSnapshotCommand;
async function serializeAws_queryRevokeClusterSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRevokeClusterSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RevokeClusterSecurityGroupIngress", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRevokeClusterSecurityGroupIngressCommand = serializeAws_queryRevokeClusterSecurityGroupIngressCommand;
async function serializeAws_queryRevokeSnapshotAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRevokeSnapshotAccessMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RevokeSnapshotAccess", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRevokeSnapshotAccessCommand = serializeAws_queryRevokeSnapshotAccessCommand;
async function serializeAws_queryRotateEncryptionKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRotateEncryptionKeyMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RotateEncryptionKey", Version: "2012-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRotateEncryptionKeyCommand = serializeAws_queryRotateEncryptionKeyCommand;
async function deserializeAws_queryAcceptReservedNodeExchangeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAcceptReservedNodeExchangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAcceptReservedNodeExchangeOutputMessage(data.AcceptReservedNodeExchangeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptReservedNodeExchangeOutputMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAcceptReservedNodeExchangeCommand = deserializeAws_queryAcceptReservedNodeExchangeCommand;
async function deserializeAws_queryAcceptReservedNodeExchangeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "redshift.admin#DependentServiceUnavailableFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReservedNodeStateFault":
        case "redshift.admin#InvalidReservedNodeStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeAlreadyExistsFault":
        case "redshift.admin#ReservedNodeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeAlreadyMigratedFault":
        case "redshift.admin#ReservedNodeAlreadyMigratedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeNotFoundFault":
        case "redshift.admin#ReservedNodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "redshift.admin#ReservedNodeOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult(data.AuthorizeClusterSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AuthorizeClusterSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand;
async function deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "redshift.admin#AuthorizationAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationQuotaExceededFault":
        case "redshift.admin#AuthorizationQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "redshift.admin#InvalidClusterSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAuthorizeSnapshotAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAuthorizeSnapshotAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeSnapshotAccessResult(data.AuthorizeSnapshotAccessResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AuthorizeSnapshotAccessResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAuthorizeSnapshotAccessCommand = deserializeAws_queryAuthorizeSnapshotAccessCommand;
async function deserializeAws_queryAuthorizeSnapshotAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "redshift.admin#AuthorizationAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationQuotaExceededFault":
        case "redshift.admin#AuthorizationQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
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
async function deserializeAws_queryBatchDeleteClusterSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchDeleteClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchDeleteClusterSnapshotsResult(data.BatchDeleteClusterSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteClusterSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchDeleteClusterSnapshotsCommand = deserializeAws_queryBatchDeleteClusterSnapshotsCommand;
async function deserializeAws_queryBatchDeleteClusterSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchDeleteRequestSizeExceededFault":
        case "redshift.admin#BatchDeleteRequestSizeExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryBatchModifyClusterSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchModifyClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage(data.BatchModifyClusterSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchModifyClusterSnapshotsOutputMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchModifyClusterSnapshotsCommand = deserializeAws_queryBatchModifyClusterSnapshotsCommand;
async function deserializeAws_queryBatchModifyClusterSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchModifyClusterSnapshotsLimitExceededFault":
        case "redshift.admin#BatchModifyClusterSnapshotsLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCancelResizeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCancelResizeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeProgressMessage(data.CancelResizeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResizeProgressMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCancelResizeCommand = deserializeAws_queryCancelResizeCommand;
async function deserializeAws_queryCancelResizeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResizeNotFoundFault":
        case "redshift.admin#ResizeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCopyClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyClusterSnapshotResult(data.CopyClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyClusterSnapshotCommand = deserializeAws_queryCopyClusterSnapshotCommand;
async function deserializeAws_queryCopyClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotAlreadyExistsFault":
        case "redshift.admin#ClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "redshift.admin#ClusterSnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterResult(data.CreateClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateClusterCommand = deserializeAws_queryCreateClusterCommand;
async function deserializeAws_queryCreateClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterAlreadyExistsFault":
        case "redshift.admin#ClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterQuotaExceededFault":
        case "redshift.admin#ClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSubnetGroupNotFoundFault":
        case "redshift.admin#ClusterSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmClientCertificateNotFoundFault":
        case "redshift.admin#HsmClientCertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmConfigurationNotFoundFault":
        case "redshift.admin#HsmConfigurationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "redshift.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "redshift.admin#InvalidClusterSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterTrackFault":
        case "redshift.admin#InvalidClusterTrackFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidElasticIpFault":
        case "redshift.admin#InvalidElasticIpFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "redshift.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "redshift.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "redshift.admin#NumberOfNodesPerClusterLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "redshift.admin#NumberOfNodesQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleNotFoundFault":
        case "redshift.admin#SnapshotScheduleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterParameterGroupResult(data.CreateClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateClusterParameterGroupCommand = deserializeAws_queryCreateClusterParameterGroupCommand;
async function deserializeAws_queryCreateClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupAlreadyExistsFault":
        case "redshift.admin#ClusterParameterGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterParameterGroupQuotaExceededFault":
        case "redshift.admin#ClusterParameterGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateClusterSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateClusterSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSecurityGroupResult(data.CreateClusterSecurityGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterSecurityGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateClusterSecurityGroupCommand = deserializeAws_queryCreateClusterSecurityGroupCommand;
async function deserializeAws_queryCreateClusterSecurityGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupAlreadyExistsFault":
        case "redshift.admin#ClusterSecurityGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupQuotaExceededFault":
        case "redshift.admin#ClusterSecurityGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSnapshotResult(data.CreateClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateClusterSnapshotCommand = deserializeAws_queryCreateClusterSnapshotCommand;
async function deserializeAws_queryCreateClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotAlreadyExistsFault":
        case "redshift.admin#ClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "redshift.admin#ClusterSnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateClusterSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateClusterSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSubnetGroupResult(data.CreateClusterSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateClusterSubnetGroupCommand = deserializeAws_queryCreateClusterSubnetGroupCommand;
async function deserializeAws_queryCreateClusterSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupAlreadyExistsFault":
        case "redshift.admin#ClusterSubnetGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSubnetGroupQuotaExceededFault":
        case "redshift.admin#ClusterSubnetGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSubnetQuotaExceededFault":
        case "redshift.admin#ClusterSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "redshift.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEventSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateEventSubscriptionCommand = deserializeAws_queryCreateEventSubscriptionCommand;
async function deserializeAws_queryCreateEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EventSubscriptionQuotaExceededFault":
        case "redshift.admin#EventSubscriptionQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "redshift.admin#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "redshift.admin#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSTopicArnNotFoundFault":
        case "redshift.admin#SNSTopicArnNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceNotFoundFault":
        case "redshift.admin#SourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionAlreadyExistFault":
        case "redshift.admin#SubscriptionAlreadyExistFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "redshift.admin#SubscriptionCategoryNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionEventIdNotFoundFault":
        case "redshift.admin#SubscriptionEventIdNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionSeverityNotFoundFault":
        case "redshift.admin#SubscriptionSeverityNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateHsmClientCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateHsmClientCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateHsmClientCertificateResult(data.CreateHsmClientCertificateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHsmClientCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateHsmClientCertificateCommand = deserializeAws_queryCreateHsmClientCertificateCommand;
async function deserializeAws_queryCreateHsmClientCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateAlreadyExistsFault":
        case "redshift.admin#HsmClientCertificateAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmClientCertificateQuotaExceededFault":
        case "redshift.admin#HsmClientCertificateQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateHsmConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateHsmConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateHsmConfigurationResult(data.CreateHsmConfigurationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHsmConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateHsmConfigurationCommand = deserializeAws_queryCreateHsmConfigurationCommand;
async function deserializeAws_queryCreateHsmConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationAlreadyExistsFault":
        case "redshift.admin#HsmConfigurationAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmConfigurationQuotaExceededFault":
        case "redshift.admin#HsmConfigurationQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledAction(data.CreateScheduledActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduledAction" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateScheduledActionCommand = deserializeAws_queryCreateScheduledActionCommand;
async function deserializeAws_queryCreateScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "redshift.admin#InvalidScheduleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidScheduledActionFault":
        case "redshift.admin#InvalidScheduledActionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduledActionAlreadyExistsFault":
        case "redshift.admin#ScheduledActionAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduledActionQuotaExceededFault":
        case "redshift.admin#ScheduledActionQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduledActionTypeUnsupportedFault":
        case "redshift.admin#ScheduledActionTypeUnsupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateSnapshotCopyGrantCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateSnapshotCopyGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSnapshotCopyGrantResult(data.CreateSnapshotCopyGrantResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSnapshotCopyGrantResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateSnapshotCopyGrantCommand = deserializeAws_queryCreateSnapshotCopyGrantCommand;
async function deserializeAws_queryCreateSnapshotCopyGrantCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyGrantAlreadyExistsFault":
        case "redshift.admin#SnapshotCopyGrantAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyGrantQuotaExceededFault":
        case "redshift.admin#SnapshotCopyGrantQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotSchedule(data.CreateSnapshotScheduleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SnapshotSchedule" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateSnapshotScheduleCommand = deserializeAws_queryCreateSnapshotScheduleCommand;
async function deserializeAws_queryCreateSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "redshift.admin#InvalidScheduleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduleDefinitionTypeUnsupportedFault":
        case "redshift.admin#ScheduleDefinitionTypeUnsupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleAlreadyExistsFault":
        case "redshift.admin#SnapshotScheduleAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleQuotaExceededFault":
        case "redshift.admin#SnapshotScheduleQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateTagsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateTagsCommand = deserializeAws_queryCreateTagsCommand;
async function deserializeAws_queryCreateTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "redshift.admin#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteClusterResult(data.DeleteClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteClusterCommand = deserializeAws_queryDeleteClusterCommand;
async function deserializeAws_queryDeleteClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotAlreadyExistsFault":
        case "redshift.admin#ClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "redshift.admin#ClusterSnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteClusterParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteClusterParameterGroupCommand = deserializeAws_queryDeleteClusterParameterGroupCommand;
async function deserializeAws_queryDeleteClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "redshift.admin#InvalidClusterParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteClusterSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteClusterSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteClusterSecurityGroupCommand = deserializeAws_queryDeleteClusterSecurityGroupCommand;
async function deserializeAws_queryDeleteClusterSecurityGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "redshift.admin#InvalidClusterSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteClusterSnapshotResult(data.DeleteClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteClusterSnapshotCommand = deserializeAws_queryDeleteClusterSnapshotCommand;
async function deserializeAws_queryDeleteClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteClusterSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteClusterSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteClusterSubnetGroupCommand = deserializeAws_queryDeleteClusterSubnetGroupCommand;
async function deserializeAws_queryDeleteClusterSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "redshift.admin#ClusterSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "redshift.admin#InvalidClusterSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSubnetStateFault":
        case "redshift.admin#InvalidClusterSubnetStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSubnetStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteEventSubscriptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteEventSubscriptionCommand = deserializeAws_queryDeleteEventSubscriptionCommand;
async function deserializeAws_queryDeleteEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSubscriptionStateFault":
        case "redshift.admin#InvalidSubscriptionStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "redshift.admin#SubscriptionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteHsmClientCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteHsmClientCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteHsmClientCertificateCommand = deserializeAws_queryDeleteHsmClientCertificateCommand;
async function deserializeAws_queryDeleteHsmClientCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateNotFoundFault":
        case "redshift.admin#HsmClientCertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHsmClientCertificateStateFault":
        case "redshift.admin#InvalidHsmClientCertificateStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteHsmConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteHsmConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteHsmConfigurationCommand = deserializeAws_queryDeleteHsmConfigurationCommand;
async function deserializeAws_queryDeleteHsmConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationNotFoundFault":
        case "redshift.admin#HsmConfigurationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHsmConfigurationStateFault":
        case "redshift.admin#InvalidHsmConfigurationStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidHsmConfigurationStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "ScheduledActionNotFoundFault":
        case "redshift.admin#ScheduledActionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteSnapshotCopyGrantCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSnapshotCopyGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSnapshotCopyGrantCommand = deserializeAws_queryDeleteSnapshotCopyGrantCommand;
async function deserializeAws_queryDeleteSnapshotCopyGrantCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSnapshotCopyGrantStateFault":
        case "redshift.admin#InvalidSnapshotCopyGrantStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "redshift.admin#SnapshotCopyGrantNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSnapshotScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSnapshotScheduleCommand = deserializeAws_queryDeleteSnapshotScheduleCommand;
async function deserializeAws_queryDeleteSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClusterSnapshotScheduleStateFault":
        case "redshift.admin#InvalidClusterSnapshotScheduleStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleNotFoundFault":
        case "redshift.admin#SnapshotScheduleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "redshift.admin#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeAccountAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAccountAttributeList(data.DescribeAccountAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AccountAttributeList" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAccountAttributesCommand = deserializeAws_queryDescribeAccountAttributesCommand;
async function deserializeAws_queryDescribeAccountAttributesCommandError(output, context) {
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
async function deserializeAws_queryDescribeClusterDbRevisionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterDbRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterDbRevisionsMessage(data.DescribeClusterDbRevisionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterDbRevisionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterDbRevisionsCommand = deserializeAws_queryDescribeClusterDbRevisionsCommand;
async function deserializeAws_queryDescribeClusterDbRevisionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterParameterGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupsMessage(data.DescribeClusterParameterGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterParameterGroupsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterParameterGroupsCommand = deserializeAws_queryDescribeClusterParameterGroupsCommand;
async function deserializeAws_queryDescribeClusterParameterGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupDetails(data.DescribeClusterParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterParameterGroupDetails" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterParametersCommand = deserializeAws_queryDescribeClusterParametersCommand;
async function deserializeAws_queryDescribeClusterParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterSecurityGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterSecurityGroupMessage(data.DescribeClusterSecurityGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterSecurityGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterSecurityGroupsCommand = deserializeAws_queryDescribeClusterSecurityGroupsCommand;
async function deserializeAws_queryDescribeClusterSecurityGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotMessage(data.DescribeClusterSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SnapshotMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterSnapshotsCommand = deserializeAws_queryDescribeClusterSnapshotsCommand;
async function deserializeAws_queryDescribeClusterSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterSubnetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterSubnetGroupMessage(data.DescribeClusterSubnetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterSubnetGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterSubnetGroupsCommand = deserializeAws_queryDescribeClusterSubnetGroupsCommand;
async function deserializeAws_queryDescribeClusterSubnetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "redshift.admin#ClusterSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterTracksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterTracksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTrackListMessage(data.DescribeClusterTracksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TrackListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterTracksCommand = deserializeAws_queryDescribeClusterTracksCommand;
async function deserializeAws_queryDescribeClusterTracksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClusterTrackFault":
        case "redshift.admin#InvalidClusterTrackFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeClusterVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClusterVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterVersionsMessage(data.DescribeClusterVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterVersionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClusterVersionsCommand = deserializeAws_queryDescribeClusterVersionsCommand;
async function deserializeAws_queryDescribeClusterVersionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClustersMessage(data.DescribeClustersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClustersMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeClustersCommand = deserializeAws_queryDescribeClustersCommand;
async function deserializeAws_queryDescribeClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDefaultClusterParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDefaultClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDefaultClusterParametersResult(data.DescribeDefaultClusterParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDefaultClusterParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDefaultClusterParametersCommand = deserializeAws_queryDescribeDefaultClusterParametersCommand;
async function deserializeAws_queryDescribeDefaultClusterParametersCommandError(output, context) {
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
async function deserializeAws_queryDescribeEventCategoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEventCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventCategoriesMessage(data.DescribeEventCategoriesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EventCategoriesMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEventCategoriesCommand = deserializeAws_queryDescribeEventCategoriesCommand;
async function deserializeAws_queryDescribeEventCategoriesCommandError(output, context) {
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
async function deserializeAws_queryDescribeEventSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EventSubscriptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEventSubscriptionsCommand = deserializeAws_queryDescribeEventSubscriptionsCommand;
async function deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "redshift.admin#SubscriptionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventsMessage(data.DescribeEventsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EventsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEventsCommand = deserializeAws_queryDescribeEventsCommand;
async function deserializeAws_queryDescribeEventsCommandError(output, context) {
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
async function deserializeAws_queryDescribeHsmClientCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeHsmClientCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryHsmClientCertificateMessage(data.DescribeHsmClientCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "HsmClientCertificateMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeHsmClientCertificatesCommand = deserializeAws_queryDescribeHsmClientCertificatesCommand;
async function deserializeAws_queryDescribeHsmClientCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateNotFoundFault":
        case "redshift.admin#HsmClientCertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeHsmConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeHsmConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryHsmConfigurationMessage(data.DescribeHsmConfigurationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "HsmConfigurationMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeHsmConfigurationsCommand = deserializeAws_queryDescribeHsmConfigurationsCommand;
async function deserializeAws_queryDescribeHsmConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationNotFoundFault":
        case "redshift.admin#HsmConfigurationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeLoggingStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoggingStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.DescribeLoggingStatusResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LoggingStatus" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoggingStatusCommand = deserializeAws_queryDescribeLoggingStatusCommand;
async function deserializeAws_queryDescribeLoggingStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeNodeConfigurationOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeNodeConfigurationOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryNodeConfigurationOptionsMessage(data.DescribeNodeConfigurationOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "NodeConfigurationOptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeNodeConfigurationOptionsCommand = deserializeAws_queryDescribeNodeConfigurationOptionsCommand;
async function deserializeAws_queryDescribeNodeConfigurationOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "redshift.admin#AccessToSnapshotDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeOrderableClusterOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeOrderableClusterOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOrderableClusterOptionsMessage(data.DescribeOrderableClusterOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OrderableClusterOptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeOrderableClusterOptionsCommand = deserializeAws_queryDescribeOrderableClusterOptionsCommand;
async function deserializeAws_queryDescribeOrderableClusterOptionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeReservedNodeOfferingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedNodeOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedNodeOfferingsMessage(data.DescribeReservedNodeOfferingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedNodeOfferingsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedNodeOfferingsCommand = deserializeAws_queryDescribeReservedNodeOfferingsCommand;
async function deserializeAws_queryDescribeReservedNodeOfferingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "redshift.admin#DependentServiceUnavailableFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "redshift.admin#ReservedNodeOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeReservedNodesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedNodesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedNodesMessage(data.DescribeReservedNodesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedNodesMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedNodesCommand = deserializeAws_queryDescribeReservedNodesCommand;
async function deserializeAws_queryDescribeReservedNodesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "redshift.admin#DependentServiceUnavailableFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeNotFoundFault":
        case "redshift.admin#ReservedNodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeResizeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeResizeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeProgressMessage(data.DescribeResizeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResizeProgressMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeResizeCommand = deserializeAws_queryDescribeResizeCommand;
async function deserializeAws_queryDescribeResizeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResizeNotFoundFault":
        case "redshift.admin#ResizeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryScheduledActionsMessage(data.DescribeScheduledActionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduledActionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeScheduledActionsCommand = deserializeAws_queryDescribeScheduledActionsCommand;
async function deserializeAws_queryDescribeScheduledActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ScheduledActionNotFoundFault":
        case "redshift.admin#ScheduledActionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeSnapshotCopyGrantsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSnapshotCopyGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotCopyGrantMessage(data.DescribeSnapshotCopyGrantsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SnapshotCopyGrantMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSnapshotCopyGrantsCommand = deserializeAws_queryDescribeSnapshotCopyGrantsCommand;
async function deserializeAws_queryDescribeSnapshotCopyGrantsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "redshift.admin#SnapshotCopyGrantNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeSnapshotSchedulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSnapshotSchedulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSnapshotSchedulesOutputMessage(data.DescribeSnapshotSchedulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSnapshotSchedulesOutputMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSnapshotSchedulesCommand = deserializeAws_queryDescribeSnapshotSchedulesCommand;
async function deserializeAws_queryDescribeSnapshotSchedulesCommandError(output, context) {
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
async function deserializeAws_queryDescribeStorageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCustomerStorageMessage(data.DescribeStorageResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CustomerStorageMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeStorageCommand = deserializeAws_queryDescribeStorageCommand;
async function deserializeAws_queryDescribeStorageCommandError(output, context) {
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
async function deserializeAws_queryDescribeTableRestoreStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTableRestoreStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTableRestoreStatusMessage(data.DescribeTableRestoreStatusResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TableRestoreStatusMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTableRestoreStatusCommand = deserializeAws_queryDescribeTableRestoreStatusCommand;
async function deserializeAws_queryDescribeTableRestoreStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableRestoreNotFoundFault":
        case "redshift.admin#TableRestoreNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTableRestoreNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryTaggedResourceListMessage(data.DescribeTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TaggedResourceListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
async function deserializeAws_queryDescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "redshift.admin#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDisableLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.DisableLoggingResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LoggingStatus" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableLoggingCommand = deserializeAws_queryDisableLoggingCommand;
async function deserializeAws_queryDisableLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDisableSnapshotCopyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDisableSnapshotCopyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDisableSnapshotCopyResult(data.DisableSnapshotCopyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableSnapshotCopyResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDisableSnapshotCopyCommand = deserializeAws_queryDisableSnapshotCopyCommand;
async function deserializeAws_queryDisableSnapshotCopyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyAlreadyDisabledFault":
        case "redshift.admin#SnapshotCopyAlreadyDisabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryEnableLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.EnableLoggingResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LoggingStatus" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableLoggingCommand = deserializeAws_queryEnableLoggingCommand;
async function deserializeAws_queryEnableLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BucketNotFoundFault":
        case "redshift.admin#BucketNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBucketNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientS3BucketPolicyFault":
        case "redshift.admin#InsufficientS3BucketPolicyFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientS3BucketPolicyFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3BucketNameFault":
        case "redshift.admin#InvalidS3BucketNameFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3BucketNameFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3KeyPrefixFault":
        case "redshift.admin#InvalidS3KeyPrefixFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3KeyPrefixFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryEnableSnapshotCopyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableSnapshotCopyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnableSnapshotCopyResult(data.EnableSnapshotCopyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableSnapshotCopyResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableSnapshotCopyCommand = deserializeAws_queryEnableSnapshotCopyCommand;
async function deserializeAws_queryEnableSnapshotCopyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CopyToRegionDisabledFault":
        case "redshift.admin#CopyToRegionDisabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCopyToRegionDisabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleOrderableOptions":
        case "redshift.admin#IncompatibleOrderableOptions":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIncompatibleOrderableOptionsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyAlreadyEnabledFault":
        case "redshift.admin#SnapshotCopyAlreadyEnabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "redshift.admin#SnapshotCopyGrantNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownSnapshotCopyRegionFault":
        case "redshift.admin#UnknownSnapshotCopyRegionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetClusterCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetClusterCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterCredentials(data.GetClusterCredentialsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterCredentials" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetClusterCredentialsCommand = deserializeAws_queryGetClusterCredentialsCommand;
async function deserializeAws_queryGetClusterCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetReservedNodeExchangeOfferingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage(data.GetReservedNodeExchangeOfferingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReservedNodeExchangeOfferingsOutputMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = deserializeAws_queryGetReservedNodeExchangeOfferingsCommand;
async function deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "redshift.admin#DependentServiceUnavailableFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReservedNodeStateFault":
        case "redshift.admin#InvalidReservedNodeStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeAlreadyMigratedFault":
        case "redshift.admin#ReservedNodeAlreadyMigratedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeNotFoundFault":
        case "redshift.admin#ReservedNodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "redshift.admin#ReservedNodeOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterResult(data.ModifyClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterCommand = deserializeAws_queryModifyClusterCommand;
async function deserializeAws_queryModifyClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterAlreadyExistsFault":
        case "redshift.admin#ClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmClientCertificateNotFoundFault":
        case "redshift.admin#HsmClientCertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmConfigurationNotFoundFault":
        case "redshift.admin#HsmConfigurationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "redshift.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "redshift.admin#InvalidClusterSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterTrackFault":
        case "redshift.admin#InvalidClusterTrackFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidElasticIpFault":
        case "redshift.admin#InvalidElasticIpFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "redshift.admin#NumberOfNodesPerClusterLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "redshift.admin#NumberOfNodesQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableLimitExceededFault":
        case "redshift.admin#TableLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTableLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOptionFault":
        case "redshift.admin#UnsupportedOptionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterDbRevisionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterDbRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterDbRevisionResult(data.ModifyClusterDbRevisionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterDbRevisionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterDbRevisionCommand = deserializeAws_queryModifyClusterDbRevisionCommand;
async function deserializeAws_queryModifyClusterDbRevisionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterOnLatestRevisionFault":
        case "redshift.admin#ClusterOnLatestRevisionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterOnLatestRevisionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterIamRolesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterIamRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterIamRolesResult(data.ModifyClusterIamRolesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterIamRolesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterIamRolesCommand = deserializeAws_queryModifyClusterIamRolesCommand;
async function deserializeAws_queryModifyClusterIamRolesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterMaintenanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterMaintenanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterMaintenanceResult(data.ModifyClusterMaintenanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterMaintenanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterMaintenanceCommand = deserializeAws_queryModifyClusterMaintenanceCommand;
async function deserializeAws_queryModifyClusterMaintenanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ModifyClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterParameterGroupCommand = deserializeAws_queryModifyClusterParameterGroupCommand;
async function deserializeAws_queryModifyClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "redshift.admin#InvalidClusterParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterSnapshotResult(data.ModifyClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterSnapshotCommand = deserializeAws_queryModifyClusterSnapshotCommand;
async function deserializeAws_queryModifyClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterSnapshotScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterSnapshotScheduleCommand = deserializeAws_queryModifyClusterSnapshotScheduleCommand;
async function deserializeAws_queryModifyClusterSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotScheduleStateFault":
        case "redshift.admin#InvalidClusterSnapshotScheduleStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleNotFoundFault":
        case "redshift.admin#SnapshotScheduleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyClusterSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyClusterSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterSubnetGroupResult(data.ModifyClusterSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClusterSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyClusterSubnetGroupCommand = deserializeAws_queryModifyClusterSubnetGroupCommand;
async function deserializeAws_queryModifyClusterSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "redshift.admin#ClusterSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSubnetQuotaExceededFault":
        case "redshift.admin#ClusterSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "redshift.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetAlreadyInUse":
        case "redshift.admin#SubnetAlreadyInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyEventSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyEventSubscriptionCommand = deserializeAws_queryModifyEventSubscriptionCommand;
async function deserializeAws_queryModifyEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSubscriptionStateFault":
        case "redshift.admin#InvalidSubscriptionStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "redshift.admin#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "redshift.admin#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSTopicArnNotFoundFault":
        case "redshift.admin#SNSTopicArnNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceNotFoundFault":
        case "redshift.admin#SourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "redshift.admin#SubscriptionCategoryNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionEventIdNotFoundFault":
        case "redshift.admin#SubscriptionEventIdNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "redshift.admin#SubscriptionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionSeverityNotFoundFault":
        case "redshift.admin#SubscriptionSeverityNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledAction(data.ModifyScheduledActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduledAction" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyScheduledActionCommand = deserializeAws_queryModifyScheduledActionCommand;
async function deserializeAws_queryModifyScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "redshift.admin#InvalidScheduleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidScheduledActionFault":
        case "redshift.admin#InvalidScheduledActionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduledActionNotFoundFault":
        case "redshift.admin#ScheduledActionNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScheduledActionTypeUnsupportedFault":
        case "redshift.admin#ScheduledActionTypeUnsupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifySnapshotCopyRetentionPeriodResult(data.ModifySnapshotCopyRetentionPeriodResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifySnapshotCopyRetentionPeriodResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand;
async function deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRetentionPeriodFault":
        case "redshift.admin#InvalidRetentionPeriodFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotCopyDisabledFault":
        case "redshift.admin#SnapshotCopyDisabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotCopyDisabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifySnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifySnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotSchedule(data.ModifySnapshotScheduleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SnapshotSchedule" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifySnapshotScheduleCommand = deserializeAws_queryModifySnapshotScheduleCommand;
async function deserializeAws_queryModifySnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "redshift.admin#InvalidScheduleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleNotFoundFault":
        case "redshift.admin#SnapshotScheduleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleUpdateInProgressFault":
        case "redshift.admin#SnapshotScheduleUpdateInProgressFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPurchaseReservedNodeOfferingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPurchaseReservedNodeOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedNodeOfferingResult(data.PurchaseReservedNodeOfferingResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PurchaseReservedNodeOfferingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPurchaseReservedNodeOfferingCommand = deserializeAws_queryPurchaseReservedNodeOfferingCommand;
async function deserializeAws_queryPurchaseReservedNodeOfferingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedNodeAlreadyExistsFault":
        case "redshift.admin#ReservedNodeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "redshift.admin#ReservedNodeOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNodeQuotaExceededFault":
        case "redshift.admin#ReservedNodeQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedNodeQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRebootClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRebootClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootClusterResult(data.RebootClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRebootClusterCommand = deserializeAws_queryRebootClusterCommand;
async function deserializeAws_queryRebootClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryResetClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResetClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ResetClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClusterParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResetClusterParameterGroupCommand = deserializeAws_queryResetClusterParameterGroupCommand;
async function deserializeAws_queryResetClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "redshift.admin#InvalidClusterParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryResizeClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResizeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeClusterResult(data.ResizeClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResizeClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResizeClusterCommand = deserializeAws_queryResizeClusterCommand;
async function deserializeAws_queryResizeClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "redshift.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "redshift.admin#NumberOfNodesPerClusterLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "redshift.admin#NumberOfNodesQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOptionFault":
        case "redshift.admin#UnsupportedOptionFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreFromClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreFromClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreFromClusterSnapshotResult(data.RestoreFromClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreFromClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreFromClusterSnapshotCommand = deserializeAws_queryRestoreFromClusterSnapshotCommand;
async function deserializeAws_queryRestoreFromClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "redshift.admin#AccessToSnapshotDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterAlreadyExistsFault":
        case "redshift.admin#ClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "redshift.admin#ClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterQuotaExceededFault":
        case "redshift.admin#ClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSubnetGroupNotFoundFault":
        case "redshift.admin#ClusterSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmClientCertificateNotFoundFault":
        case "redshift.admin#HsmClientCertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HsmConfigurationNotFoundFault":
        case "redshift.admin#HsmConfigurationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientClusterCapacityFault":
        case "redshift.admin#InsufficientClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "redshift.admin#InvalidClusterSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterTrackFault":
        case "redshift.admin#InvalidClusterTrackFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidElasticIpFault":
        case "redshift.admin#InvalidElasticIpFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRestoreFault":
        case "redshift.admin#InvalidRestoreFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "redshift.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFault":
        case "redshift.admin#InvalidTagFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "redshift.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "redshift.admin#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "redshift.admin#NumberOfNodesPerClusterLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "redshift.admin#NumberOfNodesQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotScheduleNotFoundFault":
        case "redshift.admin#SnapshotScheduleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededFault":
        case "redshift.admin#TagLimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "redshift.admin#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreTableFromClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreTableFromClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreTableFromClusterSnapshotResult(data.RestoreTableFromClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreTableFromClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreTableFromClusterSnapshotCommand = deserializeAws_queryRestoreTableFromClusterSnapshotCommand;
async function deserializeAws_queryRestoreTableFromClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InProgressTableRestoreQuotaExceededFault":
        case "redshift.admin#InProgressTableRestoreQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSnapshotStateFault":
        case "redshift.admin#InvalidClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTableRestoreArgumentFault":
        case "redshift.admin#InvalidTableRestoreArgumentFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTableRestoreArgumentFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationFault":
        case "redshift.admin#UnsupportedOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRevokeClusterSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeClusterSecurityGroupIngressResult(data.RevokeClusterSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeClusterSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = deserializeAws_queryRevokeClusterSecurityGroupIngressCommand;
async function deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "redshift.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "redshift.admin#ClusterSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "redshift.admin#InvalidClusterSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRevokeSnapshotAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRevokeSnapshotAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeSnapshotAccessResult(data.RevokeSnapshotAccessResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeSnapshotAccessResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRevokeSnapshotAccessCommand = deserializeAws_queryRevokeSnapshotAccessCommand;
async function deserializeAws_queryRevokeSnapshotAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "redshift.admin#AccessToSnapshotDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationNotFoundFault":
        case "redshift.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterSnapshotNotFoundFault":
        case "redshift.admin#ClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRotateEncryptionKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRotateEncryptionKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRotateEncryptionKeyResult(data.RotateEncryptionKeyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RotateEncryptionKeyResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRotateEncryptionKeyCommand = deserializeAws_queryRotateEncryptionKeyCommand;
async function deserializeAws_queryRotateEncryptionKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "redshift.admin#ClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependentServiceRequestThrottlingFault":
        case "redshift.admin#DependentServiceRequestThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClusterStateFault":
        case "redshift.admin#InvalidClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAccessToSnapshotDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccessToSnapshotDeniedFault(body.Error, context);
    const contents = Object.assign({ name: "AccessToSnapshotDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "AuthorizationAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "AuthorizationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryAuthorizationQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "AuthorizationQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchDeleteRequestSizeExceededFault(body.Error, context);
    const contents = Object.assign({ name: "BatchDeleteRequestSizeExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "BatchModifyClusterSnapshotsLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryBucketNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBucketNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "BucketNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterOnLatestRevisionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterOnLatestRevisionFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterOnLatestRevisionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSecurityGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSecurityGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCopyToRegionDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCopyToRegionDisabledFault(body.Error, context);
    const contents = Object.assign({ name: "CopyToRegionDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDependentServiceRequestThrottlingFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependentServiceRequestThrottlingFault(body.Error, context);
    const contents = Object.assign({ name: "DependentServiceRequestThrottlingFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDependentServiceUnavailableFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependentServiceUnavailableFault(body.Error, context);
    const contents = Object.assign({ name: "DependentServiceUnavailableFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "EventSubscriptionQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "HsmClientCertificateAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmClientCertificateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "HsmClientCertificateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "HsmClientCertificateQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "HsmConfigurationAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmConfigurationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "HsmConfigurationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "HsmConfigurationQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInProgressTableRestoreQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "InProgressTableRestoreQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryIncompatibleOrderableOptionsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIncompatibleOrderableOptions(body.Error, context);
    const contents = Object.assign({ name: "IncompatibleOrderableOptions", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientClusterCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientS3BucketPolicyFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientS3BucketPolicyFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientS3BucketPolicyFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterParameterGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSecurityGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSnapshotScheduleStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterSnapshotScheduleStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSnapshotStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSubnetGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterSubnetGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSubnetStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterSubnetStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidClusterTrackFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterTrackFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidClusterTrackFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidElasticIpFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidElasticIpFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidElasticIpFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidHsmClientCertificateStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidHsmClientCertificateStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidHsmConfigurationStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidHsmConfigurationStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidHsmConfigurationStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidReservedNodeStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidReservedNodeStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidReservedNodeStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRestoreFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRestoreFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidRestoreFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRetentionPeriodFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRetentionPeriodFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidRetentionPeriodFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidS3BucketNameFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3BucketNameFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidS3BucketNameFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidS3KeyPrefixFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3KeyPrefixFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidS3KeyPrefixFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidScheduleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidScheduleFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidScheduleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidScheduledActionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidScheduledActionFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidScheduledActionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnapshotCopyGrantStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidSnapshotCopyGrantStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubnet(body.Error, context);
    const contents = Object.assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSubscriptionStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubscriptionStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidSubscriptionStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTableRestoreArgumentFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTableRestoreArgumentFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidTableRestoreArgumentFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTagFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTagFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidTagFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidVPCNetworkStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "NumberOfNodesPerClusterLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNumberOfNodesQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "NumberOfNodesQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedNodeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeAlreadyMigratedFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedNodeAlreadyMigratedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedNodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedNodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeOfferingNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedNodeOfferingNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedNodeQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedNodeQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResizeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResizeNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ResizeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySNSInvalidTopicFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSInvalidTopicFault(body.Error, context);
    const contents = Object.assign({ name: "SNSInvalidTopicFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySNSNoAuthorizationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSNoAuthorizationFault(body.Error, context);
    const contents = Object.assign({ name: "SNSNoAuthorizationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySNSTopicArnNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSTopicArnNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SNSTopicArnNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduleDefinitionTypeUnsupportedFault(body.Error, context);
    const contents = Object.assign({ name: "ScheduleDefinitionTypeUnsupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScheduledActionAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ScheduledActionAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScheduledActionNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ScheduledActionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScheduledActionQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ScheduledActionQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionTypeUnsupportedFault(body.Error, context);
    const contents = Object.assign({ name: "ScheduledActionTypeUnsupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyAlreadyDisabledFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyAlreadyDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyAlreadyEnabledFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyAlreadyEnabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyDisabledFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyGrantAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyGrantNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotCopyGrantQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotScheduleAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotScheduleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotScheduleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotScheduleQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleUpdateInProgressFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotScheduleUpdateInProgressFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySourceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubnetAlreadyInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
    const contents = Object.assign({ name: "SubnetAlreadyInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionAlreadyExistFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionAlreadyExistFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionAlreadyExistFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionCategoryNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionCategoryNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionCategoryNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionEventIdNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionEventIdNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionEventIdNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionSeverityNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionSeverityNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionSeverityNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTableLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTableLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "TableLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTableRestoreNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTableRestoreNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "TableRestoreNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTagLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagLimitExceededFault(body.Error, context);
    const contents = Object.assign({ name: "TagLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnauthorizedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnauthorizedOperation(body.Error, context);
    const contents = Object.assign({ name: "UnauthorizedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnknownSnapshotCopyRegionFault(body.Error, context);
    const contents = Object.assign({ name: "UnknownSnapshotCopyRegionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnsupportedOperationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOperationFault(body.Error, context);
    const contents = Object.assign({ name: "UnsupportedOperationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnsupportedOptionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOptionFault(body.Error, context);
    const contents = Object.assign({ name: "UnsupportedOptionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAcceptReservedNodeExchangeInputMessage = (input, context) => {
    const entries = {};
    if (input.ReservedNodeId !== undefined) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    if (input.TargetReservedNodeOfferingId !== undefined) {
        entries["TargetReservedNodeOfferingId"] =
            input.TargetReservedNodeOfferingId;
    }
    return entries;
};
const serializeAws_queryAttributeNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`AttributeName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CIDRIP !== undefined) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.ClusterSecurityGroupName !== undefined) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_queryAuthorizeSnapshotAccessMessage = (input, context) => {
    const entries = {};
    if (input.AccountWithRestoreAccess !== undefined) {
        entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
    }
    if (input.SnapshotClusterIdentifier !== undefined) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryBatchDeleteClusterSnapshotsRequest = (input, context) => {
    const entries = {};
    if (input.Identifiers !== undefined) {
        const memberEntries = serializeAws_queryDeleteClusterSnapshotMessageList(input.Identifiers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Identifiers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryBatchModifyClusterSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.Force !== undefined) {
        entries["Force"] = input.Force;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.SnapshotIdentifierList !== undefined) {
        const memberEntries = serializeAws_querySnapshotIdentifierList(input.SnapshotIdentifierList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SnapshotIdentifierList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCancelResizeMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryClusterSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`ClusterSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCopyClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.SourceSnapshotClusterIdentifier !== undefined) {
        entries["SourceSnapshotClusterIdentifier"] =
            input.SourceSnapshotClusterIdentifier;
    }
    if (input.SourceSnapshotIdentifier !== undefined) {
        entries["SourceSnapshotIdentifier"] = input.SourceSnapshotIdentifier;
    }
    if (input.TargetSnapshotIdentifier !== undefined) {
        entries["TargetSnapshotIdentifier"] = input.TargetSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryCreateClusterMessage = (input, context) => {
    const entries = {};
    if (input.AdditionalInfo !== undefined) {
        entries["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.AllowVersionUpgrade !== undefined) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined) {
        entries["AutomatedSnapshotRetentionPeriod"] =
            input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterParameterGroupName !== undefined) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.ClusterSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ClusterSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.ClusterType !== undefined) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.ClusterVersion !== undefined) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.DBName !== undefined) {
        entries["DBName"] = input.DBName;
    }
    if (input.ElasticIp !== undefined) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.Encrypted !== undefined) {
        entries["Encrypted"] = input.Encrypted;
    }
    if (input.EnhancedVpcRouting !== undefined) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.IamRoles !== undefined) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IamRoles.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MaintenanceTrackName !== undefined) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.MasterUsername !== undefined) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.NodeType !== undefined) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.SnapshotScheduleIdentifier !== undefined) {
        entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.ParameterGroupFamily !== undefined) {
        entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
    }
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
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
const serializeAws_queryCreateClusterSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSecurityGroupName !== undefined) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
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
const serializeAws_queryCreateClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
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
const serializeAws_queryCreateClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.SubnetIds !== undefined) {
        const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SubnetIds.${key}`;
            entries[loc] = memberEntries[key];
        });
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
const serializeAws_queryCreateEventSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.EventCategories !== undefined) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EventCategories.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Severity !== undefined) {
        entries["Severity"] = input.Severity;
    }
    if (input.SnsTopicArn !== undefined) {
        entries["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceIds !== undefined) {
        const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
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
const serializeAws_queryCreateHsmClientCertificateMessage = (input, context) => {
    const entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
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
const serializeAws_queryCreateHsmConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.HsmIpAddress !== undefined) {
        entries["HsmIpAddress"] = input.HsmIpAddress;
    }
    if (input.HsmPartitionName !== undefined) {
        entries["HsmPartitionName"] = input.HsmPartitionName;
    }
    if (input.HsmPartitionPassword !== undefined) {
        entries["HsmPartitionPassword"] = input.HsmPartitionPassword;
    }
    if (input.HsmServerPublicCertificate !== undefined) {
        entries["HsmServerPublicCertificate"] = input.HsmServerPublicCertificate;
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
const serializeAws_queryCreateScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.Enable !== undefined) {
        entries["Enable"] = input.Enable;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.IamRole !== undefined) {
        entries["IamRole"] = input.IamRole;
    }
    if (input.Schedule !== undefined) {
        entries["Schedule"] = input.Schedule;
    }
    if (input.ScheduledActionDescription !== undefined) {
        entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.TargetAction !== undefined) {
        const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateSnapshotCopyGrantMessage = (input, context) => {
    const entries = {};
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.SnapshotCopyGrantName !== undefined) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
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
const serializeAws_queryCreateSnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.DryRun !== undefined) {
        entries["DryRun"] = input.DryRun;
    }
    if (input.NextInvocations !== undefined) {
        entries["NextInvocations"] = input.NextInvocations;
    }
    if (input.ScheduleDefinitions !== undefined) {
        const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScheduleDefinitions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ScheduleDescription !== undefined) {
        entries["ScheduleDescription"] = input.ScheduleDescription;
    }
    if (input.ScheduleIdentifier !== undefined) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
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
const serializeAws_queryCreateTagsMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
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
const serializeAws_queryDbGroupList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`DbGroup.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteClusterMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.FinalClusterSnapshotIdentifier !== undefined) {
        entries["FinalClusterSnapshotIdentifier"] =
            input.FinalClusterSnapshotIdentifier;
    }
    if (input.FinalClusterSnapshotRetentionPeriod !== undefined) {
        entries["FinalClusterSnapshotRetentionPeriod"] =
            input.FinalClusterSnapshotRetentionPeriod;
    }
    if (input.SkipFinalClusterSnapshot !== undefined) {
        entries["SkipFinalClusterSnapshot"] = input.SkipFinalClusterSnapshot;
    }
    return entries;
};
const serializeAws_queryDeleteClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSecurityGroupName !== undefined) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotClusterIdentifier !== undefined) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSnapshotMessageList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryDeleteClusterSnapshotMessage(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`DeleteClusterSnapshotMessage.${counter}.${key}`] =
                memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteEventSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
const serializeAws_queryDeleteHsmClientCertificateMessage = (input, context) => {
    const entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteHsmConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    return entries;
};
const serializeAws_queryDeleteSnapshotCopyGrantMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotCopyGrantName !== undefined) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    return entries;
};
const serializeAws_queryDeleteSnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ScheduleIdentifier !== undefined) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteTagsMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
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
const serializeAws_queryDescribeAccountAttributesMessage = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined) {
        const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterDbRevisionsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeClusterParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    return entries;
};
const serializeAws_queryDescribeClusterSecurityGroupsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSecurityGroupName !== undefined) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterExists !== undefined) {
        entries["ClusterExists"] = input.ClusterExists;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.OwnerAccount !== undefined) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotType !== undefined) {
        entries["SnapshotType"] = input.SnapshotType;
    }
    if (input.SortingEntities !== undefined) {
        const memberEntries = serializeAws_querySnapshotSortingEntityList(input.SortingEntities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SortingEntities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterSubnetGroupsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterTracksMessage = (input, context) => {
    const entries = {};
    if (input.MaintenanceTrackName !== undefined) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeClusterVersionsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterParameterGroupFamily !== undefined) {
        entries["ClusterParameterGroupFamily"] = input.ClusterParameterGroupFamily;
    }
    if (input.ClusterVersion !== undefined) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeClustersMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeDefaultClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ParameterGroupFamily !== undefined) {
        entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
    }
    return entries;
};
const serializeAws_queryDescribeEventCategoriesMessage = (input, context) => {
    const entries = {};
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    return entries;
};
const serializeAws_queryDescribeEventSubscriptionsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeEventsMessage = (input, context) => {
    const entries = {};
    if (input.Duration !== undefined) {
        entries["Duration"] = input.Duration;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.SourceIdentifier !== undefined) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryDescribeHsmClientCertificatesMessage = (input, context) => {
    const entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeHsmConfigurationsMessage = (input, context) => {
    const entries = {};
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoggingStatusMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeNodeConfigurationOptionsMessage = (input, context) => {
    const entries = {};
    if (input.ActionType !== undefined) {
        entries["ActionType"] = input.ActionType;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryNodeConfigurationOptionsFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filter.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.OwnerAccount !== undefined) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeOrderableClusterOptionsMessage = (input, context) => {
    const entries = {};
    if (input.ClusterVersion !== undefined) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NodeType !== undefined) {
        entries["NodeType"] = input.NodeType;
    }
    return entries;
};
const serializeAws_queryDescribeReservedNodeOfferingsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReservedNodeOfferingId !== undefined) {
        entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
    }
    return entries;
};
const serializeAws_queryDescribeReservedNodesMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReservedNodeId !== undefined) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    return entries;
};
const serializeAws_queryDescribeResizeMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeScheduledActionsMessage = (input, context) => {
    const entries = {};
    if (input.Active !== undefined) {
        entries["Active"] = input.Active;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryScheduledActionFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.TargetActionType !== undefined) {
        entries["TargetActionType"] = input.TargetActionType;
    }
    return entries;
};
const serializeAws_queryDescribeSnapshotCopyGrantsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.SnapshotCopyGrantName !== undefined) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeSnapshotSchedulesMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ScheduleIdentifier !== undefined) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeTableRestoreStatusMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.TableRestoreRequestId !== undefined) {
        entries["TableRestoreRequestId"] = input.TableRestoreRequestId;
    }
    return entries;
};
const serializeAws_queryDescribeTagsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.ResourceType !== undefined) {
        entries["ResourceType"] = input.ResourceType;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagValues !== undefined) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDisableLoggingMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDisableSnapshotCopyMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryEnableLoggingMessage = (input, context) => {
    const entries = {};
    if (input.BucketName !== undefined) {
        entries["BucketName"] = input.BucketName;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.S3KeyPrefix !== undefined) {
        entries["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    return entries;
};
const serializeAws_queryEnableSnapshotCopyMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DestinationRegion !== undefined) {
        entries["DestinationRegion"] = input.DestinationRegion;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.RetentionPeriod !== undefined) {
        entries["RetentionPeriod"] = input.RetentionPeriod;
    }
    if (input.SnapshotCopyGrantName !== undefined) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    return entries;
};
const serializeAws_queryEventCategoriesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`EventCategory.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryGetClusterCredentialsMessage = (input, context) => {
    const entries = {};
    if (input.AutoCreate !== undefined) {
        entries["AutoCreate"] = input.AutoCreate;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DbGroups !== undefined) {
        const memberEntries = serializeAws_queryDbGroupList(input.DbGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DbGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DbName !== undefined) {
        entries["DbName"] = input.DbName;
    }
    if (input.DbUser !== undefined) {
        entries["DbUser"] = input.DbUser;
    }
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReservedNodeId !== undefined) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    return entries;
};
const serializeAws_queryIamRoleArnList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`IamRoleArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryModifyClusterDbRevisionMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.RevisionTarget !== undefined) {
        entries["RevisionTarget"] = input.RevisionTarget;
    }
    return entries;
};
const serializeAws_queryModifyClusterIamRolesMessage = (input, context) => {
    const entries = {};
    if (input.AddIamRoles !== undefined) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.AddIamRoles, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AddIamRoles.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.RemoveIamRoles !== undefined) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.RemoveIamRoles, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RemoveIamRoles.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyClusterMaintenanceMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DeferMaintenance !== undefined) {
        entries["DeferMaintenance"] = input.DeferMaintenance;
    }
    if (input.DeferMaintenanceDuration !== undefined) {
        entries["DeferMaintenanceDuration"] = input.DeferMaintenanceDuration;
    }
    if (input.DeferMaintenanceEndTime !== undefined) {
        entries["DeferMaintenanceEndTime"] =
            input.DeferMaintenanceEndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.DeferMaintenanceIdentifier !== undefined) {
        entries["DeferMaintenanceIdentifier"] = input.DeferMaintenanceIdentifier;
    }
    if (input.DeferMaintenanceStartTime !== undefined) {
        entries["DeferMaintenanceStartTime"] =
            input.DeferMaintenanceStartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryModifyClusterMessage = (input, context) => {
    const entries = {};
    if (input.AllowVersionUpgrade !== undefined) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined) {
        entries["AutomatedSnapshotRetentionPeriod"] =
            input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterParameterGroupName !== undefined) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.ClusterSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ClusterSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClusterType !== undefined) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.ClusterVersion !== undefined) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.ElasticIp !== undefined) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.Encrypted !== undefined) {
        entries["Encrypted"] = input.Encrypted;
    }
    if (input.EnhancedVpcRouting !== undefined) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MaintenanceTrackName !== undefined) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.NewClusterIdentifier !== undefined) {
        entries["NewClusterIdentifier"] = input.NewClusterIdentifier;
    }
    if (input.NodeType !== undefined) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.Force !== undefined) {
        entries["Force"] = input.Force;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryModifyClusterSnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DisassociateSchedule !== undefined) {
        entries["DisassociateSchedule"] = input.DisassociateSchedule;
    }
    if (input.ScheduleIdentifier !== undefined) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    return entries;
};
const serializeAws_queryModifyClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.SubnetIds !== undefined) {
        const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SubnetIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyEventSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.EventCategories !== undefined) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EventCategories.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Severity !== undefined) {
        entries["Severity"] = input.Severity;
    }
    if (input.SnsTopicArn !== undefined) {
        entries["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceIds !== undefined) {
        const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
const serializeAws_queryModifyScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.Enable !== undefined) {
        entries["Enable"] = input.Enable;
    }
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.IamRole !== undefined) {
        entries["IamRole"] = input.IamRole;
    }
    if (input.Schedule !== undefined) {
        entries["Schedule"] = input.Schedule;
    }
    if (input.ScheduledActionDescription !== undefined) {
        entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
    }
    if (input.ScheduledActionName !== undefined) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.TargetAction !== undefined) {
        const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifySnapshotCopyRetentionPeriodMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Manual !== undefined) {
        entries["Manual"] = input.Manual;
    }
    if (input.RetentionPeriod !== undefined) {
        entries["RetentionPeriod"] = input.RetentionPeriod;
    }
    return entries;
};
const serializeAws_queryModifySnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ScheduleDefinitions !== undefined) {
        const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScheduleDefinitions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ScheduleIdentifier !== undefined) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    return entries;
};
const serializeAws_queryNodeConfigurationOptionsFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Operator !== undefined) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Value.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryNodeConfigurationOptionsFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryNodeConfigurationOptionsFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`NodeConfigurationOptionsFilter.${counter}.${key}`] =
                memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryParameter = (input, context) => {
    const entries = {};
    if (input.AllowedValues !== undefined) {
        entries["AllowedValues"] = input.AllowedValues;
    }
    if (input.ApplyType !== undefined) {
        entries["ApplyType"] = input.ApplyType;
    }
    if (input.DataType !== undefined) {
        entries["DataType"] = input.DataType;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.IsModifiable !== undefined) {
        entries["IsModifiable"] = input.IsModifiable;
    }
    if (input.MinimumEngineVersion !== undefined) {
        entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
    }
    if (input.ParameterName !== undefined) {
        entries["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    return entries;
};
const serializeAws_queryParametersList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryParameter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`Parameter.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedNodeOfferingMessage = (input, context) => {
    const entries = {};
    if (input.NodeCount !== undefined) {
        entries["NodeCount"] = input.NodeCount;
    }
    if (input.ReservedNodeOfferingId !== undefined) {
        entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
    }
    return entries;
};
const serializeAws_queryRebootClusterMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryResetClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Parameters !== undefined) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Parameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResetAllParameters !== undefined) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    return entries;
};
const serializeAws_queryResizeClusterMessage = (input, context) => {
    const entries = {};
    if (input.Classic !== undefined) {
        entries["Classic"] = input.Classic;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterType !== undefined) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.NodeType !== undefined) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    return entries;
};
const serializeAws_queryRestoreFromClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.AdditionalInfo !== undefined) {
        entries["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.AllowVersionUpgrade !== undefined) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined) {
        entries["AutomatedSnapshotRetentionPeriod"] =
            input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterParameterGroupName !== undefined) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.ClusterSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ClusterSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ClusterSubnetGroupName !== undefined) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.ElasticIp !== undefined) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.EnhancedVpcRouting !== undefined) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.HsmClientCertificateIdentifier !== undefined) {
        entries["HsmClientCertificateIdentifier"] =
            input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.IamRoles !== undefined) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IamRoles.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MaintenanceTrackName !== undefined) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined) {
        entries["ManualSnapshotRetentionPeriod"] =
            input.ManualSnapshotRetentionPeriod;
    }
    if (input.NodeType !== undefined) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.OwnerAccount !== undefined) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.SnapshotClusterIdentifier !== undefined) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotScheduleIdentifier !== undefined) {
        entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRestoreTableFromClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.NewTableName !== undefined) {
        entries["NewTableName"] = input.NewTableName;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SourceDatabaseName !== undefined) {
        entries["SourceDatabaseName"] = input.SourceDatabaseName;
    }
    if (input.SourceSchemaName !== undefined) {
        entries["SourceSchemaName"] = input.SourceSchemaName;
    }
    if (input.SourceTableName !== undefined) {
        entries["SourceTableName"] = input.SourceTableName;
    }
    if (input.TargetDatabaseName !== undefined) {
        entries["TargetDatabaseName"] = input.TargetDatabaseName;
    }
    if (input.TargetSchemaName !== undefined) {
        entries["TargetSchemaName"] = input.TargetSchemaName;
    }
    return entries;
};
const serializeAws_queryRevokeClusterSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CIDRIP !== undefined) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.ClusterSecurityGroupName !== undefined) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_queryRevokeSnapshotAccessMessage = (input, context) => {
    const entries = {};
    if (input.AccountWithRestoreAccess !== undefined) {
        entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
    }
    if (input.SnapshotClusterIdentifier !== undefined) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryRotateEncryptionKeyMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryScheduleDefinitionList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`ScheduleDefinition.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryScheduledActionFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryScheduledActionFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryScheduledActionFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`ScheduledActionFilter.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryScheduledActionType = (input, context) => {
    const entries = {};
    if (input.ResizeCluster !== undefined) {
        const memberEntries = serializeAws_queryResizeClusterMessage(input.ResizeCluster, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResizeCluster.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySnapshotIdentifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`String.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySnapshotSortingEntity = (input, context) => {
    const entries = {};
    if (input.Attribute !== undefined) {
        entries["Attribute"] = input.Attribute;
    }
    if (input.SortOrder !== undefined) {
        entries["SortOrder"] = input.SortOrder;
    }
    return entries;
};
const serializeAws_querySnapshotSortingEntityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_querySnapshotSortingEntity(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`SnapshotSortingEntity.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySourceIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`SourceId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySubnetIdentifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`SubnetIdentifier.${counter}`] = entry;
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
        entries[`TagKey.${counter}`] = entry;
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
            entries[`Tag.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`TagValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryValueStringList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`item.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryVpcSecurityGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`VpcSecurityGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryAccessToSnapshotDeniedFault = (output, context) => {
    let contents = {
        __type: "AccessToSnapshotDeniedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizationAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "AuthorizationAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizationNotFoundFault = (output, context) => {
    let contents = {
        __type: "AuthorizationNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizationQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "AuthorizationQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBatchDeleteRequestSizeExceededFault = (output, context) => {
    let contents = {
        __type: "BatchDeleteRequestSizeExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault = (output, context) => {
    let contents = {
        __type: "BatchModifyClusterSnapshotsLimitExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBucketNotFoundFault = (output, context) => {
    let contents = {
        __type: "BucketNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterOnLatestRevisionFault = (output, context) => {
    let contents = {
        __type: "ClusterOnLatestRevisionFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterSnapshotAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterSnapshotNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterSnapshotQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ClusterSubnetGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "ClusterSubnetGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterSubnetGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterSubnetQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCopyToRegionDisabledFault = (output, context) => {
    let contents = {
        __type: "CopyToRegionDisabledFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDependentServiceRequestThrottlingFault = (output, context) => {
    let contents = {
        __type: "DependentServiceRequestThrottlingFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDependentServiceUnavailableFault = (output, context) => {
    let contents = {
        __type: "DependentServiceUnavailableFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventSubscriptionQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "EventSubscriptionQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "HsmClientCertificateAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateNotFoundFault = (output, context) => {
    let contents = {
        __type: "HsmClientCertificateNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "HsmClientCertificateQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "HsmConfigurationAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationNotFoundFault = (output, context) => {
    let contents = {
        __type: "HsmConfigurationNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "HsmConfigurationQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInProgressTableRestoreQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "InProgressTableRestoreQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryIncompatibleOrderableOptions = (output, context) => {
    let contents = {
        __type: "IncompatibleOrderableOptions",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientClusterCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientS3BucketPolicyFault = (output, context) => {
    let contents = {
        __type: "InsufficientS3BucketPolicyFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterParameterGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterParameterGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSecurityGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterSecurityGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotScheduleStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterSnapshotScheduleStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterSnapshotStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterSubnetGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetStateFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterSubnetStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterTrackFault = (output, context) => {
    let contents = {
        __type: "InvalidClusterTrackFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidElasticIpFault = (output, context) => {
    let contents = {
        __type: "InvalidElasticIpFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidHsmClientCertificateStateFault = (output, context) => {
    let contents = {
        __type: "InvalidHsmClientCertificateStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidHsmConfigurationStateFault = (output, context) => {
    let contents = {
        __type: "InvalidHsmConfigurationStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidReservedNodeStateFault = (output, context) => {
    let contents = {
        __type: "InvalidReservedNodeStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRestoreFault = (output, context) => {
    let contents = {
        __type: "InvalidRestoreFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRetentionPeriodFault = (output, context) => {
    let contents = {
        __type: "InvalidRetentionPeriodFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3BucketNameFault = (output, context) => {
    let contents = {
        __type: "InvalidS3BucketNameFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3KeyPrefixFault = (output, context) => {
    let contents = {
        __type: "InvalidS3KeyPrefixFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidScheduleFault = (output, context) => {
    let contents = {
        __type: "InvalidScheduleFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidScheduledActionFault = (output, context) => {
    let contents = {
        __type: "InvalidScheduledActionFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnapshotCopyGrantStateFault = (output, context) => {
    let contents = {
        __type: "InvalidSnapshotCopyGrantStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSubnet = (output, context) => {
    let contents = {
        __type: "InvalidSubnet",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSubscriptionStateFault = (output, context) => {
    let contents = {
        __type: "InvalidSubscriptionStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTableRestoreArgumentFault = (output, context) => {
    let contents = {
        __type: "InvalidTableRestoreArgumentFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTagFault = (output, context) => {
    let contents = {
        __type: "InvalidTagFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidVPCNetworkStateFault = (output, context) => {
    let contents = {
        __type: "InvalidVPCNetworkStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault = (output, context) => {
    let contents = {
        __type: "NumberOfNodesPerClusterLimitExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNumberOfNodesQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "NumberOfNodesQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ReservedNodeAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyMigratedFault = (output, context) => {
    let contents = {
        __type: "ReservedNodeAlreadyMigratedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedNodeNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeOfferingNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedNodeOfferingNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ReservedNodeQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResizeNotFoundFault = (output, context) => {
    let contents = {
        __type: "ResizeNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundFault = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySNSInvalidTopicFault = (output, context) => {
    let contents = {
        __type: "SNSInvalidTopicFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySNSNoAuthorizationFault = (output, context) => {
    let contents = {
        __type: "SNSNoAuthorizationFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySNSTopicArnNotFoundFault = (output, context) => {
    let contents = {
        __type: "SNSTopicArnNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduleDefinitionTypeUnsupportedFault = (output, context) => {
    let contents = {
        __type: "ScheduleDefinitionTypeUnsupportedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ScheduledActionAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionNotFoundFault = (output, context) => {
    let contents = {
        __type: "ScheduledActionNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ScheduledActionQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionTypeUnsupportedFault = (output, context) => {
    let contents = {
        __type: "ScheduledActionTypeUnsupportedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyDisabledFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyAlreadyDisabledFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyEnabledFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyAlreadyEnabledFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyDisabledFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyDisabledFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyGrantAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantNotFoundFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyGrantNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SnapshotCopyGrantQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "SnapshotScheduleAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleNotFoundFault = (output, context) => {
    let contents = {
        __type: "SnapshotScheduleNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SnapshotScheduleQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleUpdateInProgressFault = (output, context) => {
    let contents = {
        __type: "SnapshotScheduleUpdateInProgressFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySourceNotFoundFault = (output, context) => {
    let contents = {
        __type: "SourceNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubnetAlreadyInUse = (output, context) => {
    let contents = {
        __type: "SubnetAlreadyInUse",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionAlreadyExistFault = (output, context) => {
    let contents = {
        __type: "SubscriptionAlreadyExistFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionCategoryNotFoundFault = (output, context) => {
    let contents = {
        __type: "SubscriptionCategoryNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionEventIdNotFoundFault = (output, context) => {
    let contents = {
        __type: "SubscriptionEventIdNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionNotFoundFault = (output, context) => {
    let contents = {
        __type: "SubscriptionNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionSeverityNotFoundFault = (output, context) => {
    let contents = {
        __type: "SubscriptionSeverityNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTableLimitExceededFault = (output, context) => {
    let contents = {
        __type: "TableLimitExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTableRestoreNotFoundFault = (output, context) => {
    let contents = {
        __type: "TableRestoreNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagLimitExceededFault = (output, context) => {
    let contents = {
        __type: "TagLimitExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnauthorizedOperation = (output, context) => {
    let contents = {
        __type: "UnauthorizedOperation",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnknownSnapshotCopyRegionFault = (output, context) => {
    let contents = {
        __type: "UnknownSnapshotCopyRegionFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedOperationFault = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedOptionFault = (output, context) => {
    let contents = {
        __type: "UnsupportedOptionFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAcceptReservedNodeExchangeOutputMessage = (output, context) => {
    let contents = {
        __type: "AcceptReservedNodeExchangeOutputMessage",
        ExchangedReservedNode: undefined
    };
    if (output["ExchangedReservedNode"] !== undefined) {
        contents.ExchangedReservedNode = deserializeAws_queryReservedNode(output["ExchangedReservedNode"], context);
    }
    return contents;
};
const deserializeAws_queryAccountAttribute = (output, context) => {
    let contents = {
        __type: "AccountAttribute",
        AttributeName: undefined,
        AttributeValues: undefined
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output.AttributeValues === "") {
        contents.AttributeValues = [];
    }
    if (output["AttributeValues"] !== undefined &&
        output["AttributeValues"]["AttributeValueTarget"] !== undefined) {
        const wrappedItem = output["AttributeValues"]["AttributeValueTarget"] instanceof Array
            ? output["AttributeValues"]["AttributeValueTarget"]
            : [output["AttributeValues"]["AttributeValueTarget"]];
        contents.AttributeValues = deserializeAws_queryAttributeValueList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAccountAttributeList = (output, context) => {
    let contents = {
        __type: "AccountAttributeList",
        AccountAttributes: undefined
    };
    if (output.AccountAttributes === "") {
        contents.AccountAttributes = [];
    }
    if (output["AccountAttributes"] !== undefined &&
        output["AccountAttributes"]["AccountAttribute"] !== undefined) {
        const wrappedItem = output["AccountAttributes"]["AccountAttribute"] instanceof Array
            ? output["AccountAttributes"]["AccountAttribute"]
            : [output["AccountAttributes"]["AccountAttribute"]];
        contents.AccountAttributes = deserializeAws_queryAttributeList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAccountWithRestoreAccess = (output, context) => {
    let contents = {
        __type: "AccountWithRestoreAccess",
        AccountAlias: undefined,
        AccountId: undefined
    };
    if (output["AccountAlias"] !== undefined) {
        contents.AccountAlias = output["AccountAlias"];
    }
    if (output["AccountId"] !== undefined) {
        contents.AccountId = output["AccountId"];
    }
    return contents;
};
const deserializeAws_queryAccountsWithRestoreAccessList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccountWithRestoreAccess(entry, context));
    });
    return contents;
};
const deserializeAws_queryAssociatedClusterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterAssociatedToSchedule(entry, context));
    });
    return contents;
};
const deserializeAws_queryAttributeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccountAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryAttributeValueList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAttributeValueTarget(entry, context));
    });
    return contents;
};
const deserializeAws_queryAttributeValueTarget = (output, context) => {
    let contents = {
        __type: "AttributeValueTarget",
        AttributeValue: undefined
    };
    if (output["AttributeValue"] !== undefined) {
        contents.AttributeValue = output["AttributeValue"];
    }
    return contents;
};
const deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "AuthorizeClusterSecurityGroupIngressResult",
        ClusterSecurityGroup: undefined
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryAuthorizeSnapshotAccessResult = (output, context) => {
    let contents = {
        __type: "AuthorizeSnapshotAccessResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
        __type: "AvailabilityZone",
        Name: undefined,
        SupportedPlatforms: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.SupportedPlatforms === "") {
        contents.SupportedPlatforms = [];
    }
    if (output["SupportedPlatforms"] !== undefined &&
        output["SupportedPlatforms"]["SupportedPlatform"] !== undefined) {
        const wrappedItem = output["SupportedPlatforms"]["SupportedPlatform"] instanceof Array
            ? output["SupportedPlatforms"]["SupportedPlatform"]
            : [output["SupportedPlatforms"]["SupportedPlatform"]];
        contents.SupportedPlatforms = deserializeAws_querySupportedPlatformsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZoneList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAvailabilityZone(entry, context));
    });
    return contents;
};
const deserializeAws_queryBatchDeleteClusterSnapshotsResult = (output, context) => {
    let contents = {
        __type: "BatchDeleteClusterSnapshotsResult",
        Errors: undefined,
        Resources: undefined
    };
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined &&
        output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        const wrappedItem = output["Errors"]["SnapshotErrorMessage"] instanceof Array
            ? output["Errors"]["SnapshotErrorMessage"]
            : [output["Errors"]["SnapshotErrorMessage"]];
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrorList(wrappedItem, context);
    }
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined &&
        output["Resources"]["String"] !== undefined) {
        const wrappedItem = output["Resources"]["String"] instanceof Array
            ? output["Resources"]["String"]
            : [output["Resources"]["String"]];
        contents.Resources = deserializeAws_querySnapshotIdentifierList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage = (output, context) => {
    let contents = {
        __type: "BatchModifyClusterSnapshotsOutputMessage",
        Errors: undefined,
        Resources: undefined
    };
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined &&
        output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        const wrappedItem = output["Errors"]["SnapshotErrorMessage"] instanceof Array
            ? output["Errors"]["SnapshotErrorMessage"]
            : [output["Errors"]["SnapshotErrorMessage"]];
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrors(wrappedItem, context);
    }
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined &&
        output["Resources"]["String"] !== undefined) {
        const wrappedItem = output["Resources"]["String"] instanceof Array
            ? output["Resources"]["String"]
            : [output["Resources"]["String"]];
        contents.Resources = deserializeAws_querySnapshotIdentifierList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryBatchSnapshotOperationErrorList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshotErrorMessage(entry, context));
    });
    return contents;
};
const deserializeAws_queryBatchSnapshotOperationErrors = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshotErrorMessage(entry, context));
    });
    return contents;
};
const deserializeAws_queryCluster = (output, context) => {
    let contents = {
        __type: "Cluster",
        AllowVersionUpgrade: undefined,
        AutomatedSnapshotRetentionPeriod: undefined,
        AvailabilityZone: undefined,
        ClusterAvailabilityStatus: undefined,
        ClusterCreateTime: undefined,
        ClusterIdentifier: undefined,
        ClusterNodes: undefined,
        ClusterParameterGroups: undefined,
        ClusterPublicKey: undefined,
        ClusterRevisionNumber: undefined,
        ClusterSecurityGroups: undefined,
        ClusterSnapshotCopyStatus: undefined,
        ClusterStatus: undefined,
        ClusterSubnetGroupName: undefined,
        ClusterVersion: undefined,
        DBName: undefined,
        DataTransferProgress: undefined,
        DeferredMaintenanceWindows: undefined,
        ElasticIpStatus: undefined,
        ElasticResizeNumberOfNodeOptions: undefined,
        Encrypted: undefined,
        Endpoint: undefined,
        EnhancedVpcRouting: undefined,
        ExpectedNextSnapshotScheduleTime: undefined,
        ExpectedNextSnapshotScheduleTimeStatus: undefined,
        HsmStatus: undefined,
        IamRoles: undefined,
        KmsKeyId: undefined,
        MaintenanceTrackName: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        MasterUsername: undefined,
        ModifyStatus: undefined,
        NextMaintenanceWindowStartTime: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        PendingActions: undefined,
        PendingModifiedValues: undefined,
        PreferredMaintenanceWindow: undefined,
        PubliclyAccessible: undefined,
        ResizeInfo: undefined,
        RestoreStatus: undefined,
        SnapshotScheduleIdentifier: undefined,
        SnapshotScheduleState: undefined,
        Tags: undefined,
        VpcId: undefined,
        VpcSecurityGroups: undefined
    };
    if (output["AllowVersionUpgrade"] !== undefined) {
        contents.AllowVersionUpgrade = output["AllowVersionUpgrade"] == "true";
    }
    if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
        contents.AutomatedSnapshotRetentionPeriod = parseInt(output["AutomatedSnapshotRetentionPeriod"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["ClusterAvailabilityStatus"] !== undefined) {
        contents.ClusterAvailabilityStatus = output["ClusterAvailabilityStatus"];
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output.ClusterNodes === "") {
        contents.ClusterNodes = [];
    }
    if (output["ClusterNodes"] !== undefined &&
        output["ClusterNodes"]["member"] !== undefined) {
        const wrappedItem = output["ClusterNodes"]["member"] instanceof Array
            ? output["ClusterNodes"]["member"]
            : [output["ClusterNodes"]["member"]];
        contents.ClusterNodes = deserializeAws_queryClusterNodesList(wrappedItem, context);
    }
    if (output.ClusterParameterGroups === "") {
        contents.ClusterParameterGroups = [];
    }
    if (output["ClusterParameterGroups"] !== undefined &&
        output["ClusterParameterGroups"]["ClusterParameterGroup"] !== undefined) {
        const wrappedItem = output["ClusterParameterGroups"]["ClusterParameterGroup"] instanceof Array
            ? output["ClusterParameterGroups"]["ClusterParameterGroup"]
            : [output["ClusterParameterGroups"]["ClusterParameterGroup"]];
        contents.ClusterParameterGroups = deserializeAws_queryClusterParameterGroupStatusList(wrappedItem, context);
    }
    if (output["ClusterPublicKey"] !== undefined) {
        contents.ClusterPublicKey = output["ClusterPublicKey"];
    }
    if (output["ClusterRevisionNumber"] !== undefined) {
        contents.ClusterRevisionNumber = output["ClusterRevisionNumber"];
    }
    if (output.ClusterSecurityGroups === "") {
        contents.ClusterSecurityGroups = [];
    }
    if (output["ClusterSecurityGroups"] !== undefined &&
        output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined) {
        const wrappedItem = output["ClusterSecurityGroups"]["ClusterSecurityGroup"] instanceof Array
            ? output["ClusterSecurityGroups"]["ClusterSecurityGroup"]
            : [output["ClusterSecurityGroups"]["ClusterSecurityGroup"]];
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroupMembershipList(wrappedItem, context);
    }
    if (output["ClusterSnapshotCopyStatus"] !== undefined) {
        contents.ClusterSnapshotCopyStatus = deserializeAws_queryClusterSnapshotCopyStatus(output["ClusterSnapshotCopyStatus"], context);
    }
    if (output["ClusterStatus"] !== undefined) {
        contents.ClusterStatus = output["ClusterStatus"];
    }
    if (output["ClusterSubnetGroupName"] !== undefined) {
        contents.ClusterSubnetGroupName = output["ClusterSubnetGroupName"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["DBName"] !== undefined) {
        contents.DBName = output["DBName"];
    }
    if (output["DataTransferProgress"] !== undefined) {
        contents.DataTransferProgress = deserializeAws_queryDataTransferProgress(output["DataTransferProgress"], context);
    }
    if (output.DeferredMaintenanceWindows === "") {
        contents.DeferredMaintenanceWindows = [];
    }
    if (output["DeferredMaintenanceWindows"] !== undefined &&
        output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"] !==
            undefined) {
        const wrappedItem = output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"] instanceof Array
            ? output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"]
            : [output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"]];
        contents.DeferredMaintenanceWindows = deserializeAws_queryDeferredMaintenanceWindowsList(wrappedItem, context);
    }
    if (output["ElasticIpStatus"] !== undefined) {
        contents.ElasticIpStatus = deserializeAws_queryElasticIpStatus(output["ElasticIpStatus"], context);
    }
    if (output["ElasticResizeNumberOfNodeOptions"] !== undefined) {
        contents.ElasticResizeNumberOfNodeOptions =
            output["ElasticResizeNumberOfNodeOptions"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output["ExpectedNextSnapshotScheduleTime"] !== undefined) {
        contents.ExpectedNextSnapshotScheduleTime = new Date(output["ExpectedNextSnapshotScheduleTime"]);
    }
    if (output["ExpectedNextSnapshotScheduleTimeStatus"] !== undefined) {
        contents.ExpectedNextSnapshotScheduleTimeStatus =
            output["ExpectedNextSnapshotScheduleTimeStatus"];
    }
    if (output["HsmStatus"] !== undefined) {
        contents.HsmStatus = deserializeAws_queryHsmStatus(output["HsmStatus"], context);
    }
    if (output.IamRoles === "") {
        contents.IamRoles = [];
    }
    if (output["IamRoles"] !== undefined &&
        output["IamRoles"]["ClusterIamRole"] !== undefined) {
        const wrappedItem = output["IamRoles"]["ClusterIamRole"] instanceof Array
            ? output["IamRoles"]["ClusterIamRole"]
            : [output["IamRoles"]["ClusterIamRole"]];
        contents.IamRoles = deserializeAws_queryClusterIamRoleList(wrappedItem, context);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["ModifyStatus"] !== undefined) {
        contents.ModifyStatus = output["ModifyStatus"];
    }
    if (output["NextMaintenanceWindowStartTime"] !== undefined) {
        contents.NextMaintenanceWindowStartTime = new Date(output["NextMaintenanceWindowStartTime"]);
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output.PendingActions === "") {
        contents.PendingActions = [];
    }
    if (output["PendingActions"] !== undefined &&
        output["PendingActions"]["member"] !== undefined) {
        const wrappedItem = output["PendingActions"]["member"] instanceof Array
            ? output["PendingActions"]["member"]
            : [output["PendingActions"]["member"]];
        contents.PendingActions = deserializeAws_queryPendingActionsList(wrappedItem, context);
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output["ResizeInfo"] !== undefined) {
        contents.ResizeInfo = deserializeAws_queryResizeInfo(output["ResizeInfo"], context);
    }
    if (output["RestoreStatus"] !== undefined) {
        contents.RestoreStatus = deserializeAws_queryRestoreStatus(output["RestoreStatus"], context);
    }
    if (output["SnapshotScheduleIdentifier"] !== undefined) {
        contents.SnapshotScheduleIdentifier = output["SnapshotScheduleIdentifier"];
    }
    if (output["SnapshotScheduleState"] !== undefined) {
        contents.SnapshotScheduleState = output["SnapshotScheduleState"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined) {
        const wrappedItem = output["VpcSecurityGroups"]["VpcSecurityGroup"] instanceof Array
            ? output["VpcSecurityGroups"]["VpcSecurityGroup"]
            : [output["VpcSecurityGroups"]["VpcSecurityGroup"]];
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterAssociatedToSchedule = (output, context) => {
    let contents = {
        __type: "ClusterAssociatedToSchedule",
        ClusterIdentifier: undefined,
        ScheduleAssociationState: undefined
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ScheduleAssociationState"] !== undefined) {
        contents.ScheduleAssociationState = output["ScheduleAssociationState"];
    }
    return contents;
};
const deserializeAws_queryClusterCredentials = (output, context) => {
    let contents = {
        __type: "ClusterCredentials",
        DbPassword: undefined,
        DbUser: undefined,
        Expiration: undefined
    };
    if (output["DbPassword"] !== undefined) {
        contents.DbPassword = output["DbPassword"];
    }
    if (output["DbUser"] !== undefined) {
        contents.DbUser = output["DbUser"];
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = new Date(output["Expiration"]);
    }
    return contents;
};
const deserializeAws_queryClusterDbRevision = (output, context) => {
    let contents = {
        __type: "ClusterDbRevision",
        ClusterIdentifier: undefined,
        CurrentDatabaseRevision: undefined,
        DatabaseRevisionReleaseDate: undefined,
        RevisionTargets: undefined
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["CurrentDatabaseRevision"] !== undefined) {
        contents.CurrentDatabaseRevision = output["CurrentDatabaseRevision"];
    }
    if (output["DatabaseRevisionReleaseDate"] !== undefined) {
        contents.DatabaseRevisionReleaseDate = new Date(output["DatabaseRevisionReleaseDate"]);
    }
    if (output.RevisionTargets === "") {
        contents.RevisionTargets = [];
    }
    if (output["RevisionTargets"] !== undefined &&
        output["RevisionTargets"]["RevisionTarget"] !== undefined) {
        const wrappedItem = output["RevisionTargets"]["RevisionTarget"] instanceof Array
            ? output["RevisionTargets"]["RevisionTarget"]
            : [output["RevisionTargets"]["RevisionTarget"]];
        contents.RevisionTargets = deserializeAws_queryRevisionTargetsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterDbRevisionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterDbRevision(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterDbRevisionsMessage = (output, context) => {
    let contents = {
        __type: "ClusterDbRevisionsMessage",
        ClusterDbRevisions: undefined,
        Marker: undefined
    };
    if (output.ClusterDbRevisions === "") {
        contents.ClusterDbRevisions = [];
    }
    if (output["ClusterDbRevisions"] !== undefined &&
        output["ClusterDbRevisions"]["ClusterDbRevision"] !== undefined) {
        const wrappedItem = output["ClusterDbRevisions"]["ClusterDbRevision"] instanceof Array
            ? output["ClusterDbRevisions"]["ClusterDbRevision"]
            : [output["ClusterDbRevisions"]["ClusterDbRevision"]];
        contents.ClusterDbRevisions = deserializeAws_queryClusterDbRevisionsList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryClusterIamRole = (output, context) => {
    let contents = {
        __type: "ClusterIamRole",
        ApplyStatus: undefined,
        IamRoleArn: undefined
    };
    if (output["ApplyStatus"] !== undefined) {
        contents.ApplyStatus = output["ApplyStatus"];
    }
    if (output["IamRoleArn"] !== undefined) {
        contents.IamRoleArn = output["IamRoleArn"];
    }
    return contents;
};
const deserializeAws_queryClusterIamRoleList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterIamRole(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCluster(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterNode = (output, context) => {
    let contents = {
        __type: "ClusterNode",
        NodeRole: undefined,
        PrivateIPAddress: undefined,
        PublicIPAddress: undefined
    };
    if (output["NodeRole"] !== undefined) {
        contents.NodeRole = output["NodeRole"];
    }
    if (output["PrivateIPAddress"] !== undefined) {
        contents.PrivateIPAddress = output["PrivateIPAddress"];
    }
    if (output["PublicIPAddress"] !== undefined) {
        contents.PublicIPAddress = output["PublicIPAddress"];
    }
    return contents;
};
const deserializeAws_queryClusterNodesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterNode(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterParameterGroup = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroup",
        Description: undefined,
        ParameterGroupFamily: undefined,
        ParameterGroupName: undefined,
        Tags: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ParameterGroupFamily"] !== undefined) {
        contents.ParameterGroupFamily = output["ParameterGroupFamily"];
    }
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupDetails = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupDetails",
        Marker: undefined,
        Parameters: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["Parameter"] !== undefined) {
        const wrappedItem = output["Parameters"]["Parameter"] instanceof Array
            ? output["Parameters"]["Parameter"]
            : [output["Parameters"]["Parameter"]];
        contents.Parameters = deserializeAws_queryParametersList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupNameMessage = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupNameMessage",
        ParameterGroupName: undefined,
        ParameterGroupStatus: undefined
    };
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    if (output["ParameterGroupStatus"] !== undefined) {
        contents.ParameterGroupStatus = output["ParameterGroupStatus"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupStatus = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupStatus",
        ClusterParameterStatusList: undefined,
        ParameterApplyStatus: undefined,
        ParameterGroupName: undefined
    };
    if (output.ClusterParameterStatusList === "") {
        contents.ClusterParameterStatusList = [];
    }
    if (output["ClusterParameterStatusList"] !== undefined &&
        output["ClusterParameterStatusList"]["member"] !== undefined) {
        const wrappedItem = output["ClusterParameterStatusList"]["member"] instanceof Array
            ? output["ClusterParameterStatusList"]["member"]
            : [output["ClusterParameterStatusList"]["member"]];
        contents.ClusterParameterStatusList = deserializeAws_queryClusterParameterStatusList(wrappedItem, context);
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterParameterGroupStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterParameterGroupsMessage = (output, context) => {
    let contents = {
        __type: "ClusterParameterGroupsMessage",
        Marker: undefined,
        ParameterGroups: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ParameterGroups === "") {
        contents.ParameterGroups = [];
    }
    if (output["ParameterGroups"] !== undefined &&
        output["ParameterGroups"]["ClusterParameterGroup"] !== undefined) {
        const wrappedItem = output["ParameterGroups"]["ClusterParameterGroup"] instanceof Array
            ? output["ParameterGroups"]["ClusterParameterGroup"]
            : [output["ParameterGroups"]["ClusterParameterGroup"]];
        contents.ParameterGroups = deserializeAws_queryParameterGroupList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterStatus = (output, context) => {
    let contents = {
        __type: "ClusterParameterStatus",
        ParameterApplyErrorDescription: undefined,
        ParameterApplyStatus: undefined,
        ParameterName: undefined
    };
    if (output["ParameterApplyErrorDescription"] !== undefined) {
        contents.ParameterApplyErrorDescription =
            output["ParameterApplyErrorDescription"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    if (output["ParameterName"] !== undefined) {
        contents.ParameterName = output["ParameterName"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterParameterStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterSecurityGroup = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroup",
        ClusterSecurityGroupName: undefined,
        Description: undefined,
        EC2SecurityGroups: undefined,
        IPRanges: undefined,
        Tags: undefined
    };
    if (output["ClusterSecurityGroupName"] !== undefined) {
        contents.ClusterSecurityGroupName = output["ClusterSecurityGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.EC2SecurityGroups === "") {
        contents.EC2SecurityGroups = [];
    }
    if (output["EC2SecurityGroups"] !== undefined &&
        output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined) {
        const wrappedItem = output["EC2SecurityGroups"]["EC2SecurityGroup"] instanceof Array
            ? output["EC2SecurityGroups"]["EC2SecurityGroup"]
            : [output["EC2SecurityGroups"]["EC2SecurityGroup"]];
        contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(wrappedItem, context);
    }
    if (output.IPRanges === "") {
        contents.IPRanges = [];
    }
    if (output["IPRanges"] !== undefined &&
        output["IPRanges"]["IPRange"] !== undefined) {
        const wrappedItem = output["IPRanges"]["IPRange"] instanceof Array
            ? output["IPRanges"]["IPRange"]
            : [output["IPRanges"]["IPRange"]];
        contents.IPRanges = deserializeAws_queryIPRangeList(wrappedItem, context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroupMembership",
        ClusterSecurityGroupName: undefined,
        Status: undefined
    };
    if (output["ClusterSecurityGroupName"] !== undefined) {
        contents.ClusterSecurityGroupName = output["ClusterSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterSecurityGroupMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterSecurityGroupMessage = (output, context) => {
    let contents = {
        __type: "ClusterSecurityGroupMessage",
        ClusterSecurityGroups: undefined,
        Marker: undefined
    };
    if (output.ClusterSecurityGroups === "") {
        contents.ClusterSecurityGroups = [];
    }
    if (output["ClusterSecurityGroups"] !== undefined &&
        output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined) {
        const wrappedItem = output["ClusterSecurityGroups"]["ClusterSecurityGroup"] instanceof Array
            ? output["ClusterSecurityGroups"]["ClusterSecurityGroup"]
            : [output["ClusterSecurityGroups"]["ClusterSecurityGroup"]];
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterSecurityGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterSnapshotCopyStatus = (output, context) => {
    let contents = {
        __type: "ClusterSnapshotCopyStatus",
        DestinationRegion: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        RetentionPeriod: undefined,
        SnapshotCopyGrantName: undefined
    };
    if (output["DestinationRegion"] !== undefined) {
        contents.DestinationRegion = output["DestinationRegion"];
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output["RetentionPeriod"] !== undefined) {
        contents.RetentionPeriod = parseInt(output["RetentionPeriod"]);
    }
    if (output["SnapshotCopyGrantName"] !== undefined) {
        contents.SnapshotCopyGrantName = output["SnapshotCopyGrantName"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroup = (output, context) => {
    let contents = {
        __type: "ClusterSubnetGroup",
        ClusterSubnetGroupName: undefined,
        Description: undefined,
        SubnetGroupStatus: undefined,
        Subnets: undefined,
        Tags: undefined,
        VpcId: undefined
    };
    if (output["ClusterSubnetGroupName"] !== undefined) {
        contents.ClusterSubnetGroupName = output["ClusterSubnetGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["SubnetGroupStatus"] !== undefined) {
        contents.SubnetGroupStatus = output["SubnetGroupStatus"];
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined &&
        output["Subnets"]["Subnet"] !== undefined) {
        const wrappedItem = output["Subnets"]["Subnet"] instanceof Array
            ? output["Subnets"]["Subnet"]
            : [output["Subnets"]["Subnet"]];
        contents.Subnets = deserializeAws_querySubnetList(wrappedItem, context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupMessage = (output, context) => {
    let contents = {
        __type: "ClusterSubnetGroupMessage",
        ClusterSubnetGroups: undefined,
        Marker: undefined
    };
    if (output.ClusterSubnetGroups === "") {
        contents.ClusterSubnetGroups = [];
    }
    if (output["ClusterSubnetGroups"] !== undefined &&
        output["ClusterSubnetGroups"]["ClusterSubnetGroup"] !== undefined) {
        const wrappedItem = output["ClusterSubnetGroups"]["ClusterSubnetGroup"] instanceof Array
            ? output["ClusterSubnetGroups"]["ClusterSubnetGroup"]
            : [output["ClusterSubnetGroups"]["ClusterSubnetGroup"]];
        contents.ClusterSubnetGroups = deserializeAws_queryClusterSubnetGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterSubnetGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterVersion = (output, context) => {
    let contents = {
        __type: "ClusterVersion",
        ClusterParameterGroupFamily: undefined,
        ClusterVersion: undefined,
        Description: undefined
    };
    if (output["ClusterParameterGroupFamily"] !== undefined) {
        contents.ClusterParameterGroupFamily =
            output["ClusterParameterGroupFamily"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryClusterVersionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterVersion(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterVersionsMessage = (output, context) => {
    let contents = {
        __type: "ClusterVersionsMessage",
        ClusterVersions: undefined,
        Marker: undefined
    };
    if (output.ClusterVersions === "") {
        contents.ClusterVersions = [];
    }
    if (output["ClusterVersions"] !== undefined &&
        output["ClusterVersions"]["ClusterVersion"] !== undefined) {
        const wrappedItem = output["ClusterVersions"]["ClusterVersion"] instanceof Array
            ? output["ClusterVersions"]["ClusterVersion"]
            : [output["ClusterVersions"]["ClusterVersion"]];
        contents.ClusterVersions = deserializeAws_queryClusterVersionList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryClustersMessage = (output, context) => {
    let contents = {
        __type: "ClustersMessage",
        Clusters: undefined,
        Marker: undefined
    };
    if (output.Clusters === "") {
        contents.Clusters = [];
    }
    if (output["Clusters"] !== undefined &&
        output["Clusters"]["Cluster"] !== undefined) {
        const wrappedItem = output["Clusters"]["Cluster"] instanceof Array
            ? output["Clusters"]["Cluster"]
            : [output["Clusters"]["Cluster"]];
        contents.Clusters = deserializeAws_queryClusterList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCopyClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "CopyClusterSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CreateClusterParameterGroupResult",
        ClusterParameterGroup: undefined
    };
    if (output["ClusterParameterGroup"] !== undefined) {
        contents.ClusterParameterGroup = deserializeAws_queryClusterParameterGroup(output["ClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterResult = (output, context) => {
    let contents = {
        __type: "CreateClusterResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSecurityGroupResult = (output, context) => {
    let contents = {
        __type: "CreateClusterSecurityGroupResult",
        ClusterSecurityGroup: undefined
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateClusterSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "CreateClusterSubnetGroupResult",
        ClusterSubnetGroup: undefined
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateEventSubscriptionResult = (output, context) => {
    let contents = {
        __type: "CreateEventSubscriptionResult",
        EventSubscription: undefined
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryCreateHsmClientCertificateResult = (output, context) => {
    let contents = {
        __type: "CreateHsmClientCertificateResult",
        HsmClientCertificate: undefined
    };
    if (output["HsmClientCertificate"] !== undefined) {
        contents.HsmClientCertificate = deserializeAws_queryHsmClientCertificate(output["HsmClientCertificate"], context);
    }
    return contents;
};
const deserializeAws_queryCreateHsmConfigurationResult = (output, context) => {
    let contents = {
        __type: "CreateHsmConfigurationResult",
        HsmConfiguration: undefined
    };
    if (output["HsmConfiguration"] !== undefined) {
        contents.HsmConfiguration = deserializeAws_queryHsmConfiguration(output["HsmConfiguration"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSnapshotCopyGrantResult = (output, context) => {
    let contents = {
        __type: "CreateSnapshotCopyGrantResult",
        SnapshotCopyGrant: undefined
    };
    if (output["SnapshotCopyGrant"] !== undefined) {
        contents.SnapshotCopyGrant = deserializeAws_querySnapshotCopyGrant(output["SnapshotCopyGrant"], context);
    }
    return contents;
};
const deserializeAws_queryCustomerStorageMessage = (output, context) => {
    let contents = {
        __type: "CustomerStorageMessage",
        TotalBackupSizeInMegaBytes: undefined,
        TotalProvisionedStorageInMegaBytes: undefined
    };
    if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
        contents.TotalBackupSizeInMegaBytes = parseFloat(output["TotalBackupSizeInMegaBytes"]);
    }
    if (output["TotalProvisionedStorageInMegaBytes"] !== undefined) {
        contents.TotalProvisionedStorageInMegaBytes = parseFloat(output["TotalProvisionedStorageInMegaBytes"]);
    }
    return contents;
};
const deserializeAws_queryDataTransferProgress = (output, context) => {
    let contents = {
        __type: "DataTransferProgress",
        CurrentRateInMegaBytesPerSecond: undefined,
        DataTransferredInMegaBytes: undefined,
        ElapsedTimeInSeconds: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
        Status: undefined,
        TotalDataInMegaBytes: undefined
    };
    if (output["CurrentRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentRateInMegaBytesPerSecond = parseFloat(output["CurrentRateInMegaBytesPerSecond"]);
    }
    if (output["DataTransferredInMegaBytes"] !== undefined) {
        contents.DataTransferredInMegaBytes = parseInt(output["DataTransferredInMegaBytes"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TotalDataInMegaBytes"] !== undefined) {
        contents.TotalDataInMegaBytes = parseInt(output["TotalDataInMegaBytes"]);
    }
    return contents;
};
const deserializeAws_queryDefaultClusterParameters = (output, context) => {
    let contents = {
        __type: "DefaultClusterParameters",
        Marker: undefined,
        ParameterGroupFamily: undefined,
        Parameters: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["ParameterGroupFamily"] !== undefined) {
        contents.ParameterGroupFamily = output["ParameterGroupFamily"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined &&
        output["Parameters"]["Parameter"] !== undefined) {
        const wrappedItem = output["Parameters"]["Parameter"] instanceof Array
            ? output["Parameters"]["Parameter"]
            : [output["Parameters"]["Parameter"]];
        contents.Parameters = deserializeAws_queryParametersList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDeferredMaintenanceWindow = (output, context) => {
    let contents = {
        __type: "DeferredMaintenanceWindow",
        DeferMaintenanceEndTime: undefined,
        DeferMaintenanceIdentifier: undefined,
        DeferMaintenanceStartTime: undefined
    };
    if (output["DeferMaintenanceEndTime"] !== undefined) {
        contents.DeferMaintenanceEndTime = new Date(output["DeferMaintenanceEndTime"]);
    }
    if (output["DeferMaintenanceIdentifier"] !== undefined) {
        contents.DeferMaintenanceIdentifier = output["DeferMaintenanceIdentifier"];
    }
    if (output["DeferMaintenanceStartTime"] !== undefined) {
        contents.DeferMaintenanceStartTime = new Date(output["DeferMaintenanceStartTime"]);
    }
    return contents;
};
const deserializeAws_queryDeferredMaintenanceWindowsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDeferredMaintenanceWindow(entry, context));
    });
    return contents;
};
const deserializeAws_queryDeleteClusterResult = (output, context) => {
    let contents = {
        __type: "DeleteClusterResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteClusterSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDefaultClusterParametersResult = (output, context) => {
    let contents = {
        __type: "DescribeDefaultClusterParametersResult",
        DefaultClusterParameters: undefined
    };
    if (output["DefaultClusterParameters"] !== undefined) {
        contents.DefaultClusterParameters = deserializeAws_queryDefaultClusterParameters(output["DefaultClusterParameters"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeSnapshotSchedulesOutputMessage = (output, context) => {
    let contents = {
        __type: "DescribeSnapshotSchedulesOutputMessage",
        Marker: undefined,
        SnapshotSchedules: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SnapshotSchedules === "") {
        contents.SnapshotSchedules = [];
    }
    if (output["SnapshotSchedules"] !== undefined &&
        output["SnapshotSchedules"]["SnapshotSchedule"] !== undefined) {
        const wrappedItem = output["SnapshotSchedules"]["SnapshotSchedule"] instanceof Array
            ? output["SnapshotSchedules"]["SnapshotSchedule"]
            : [output["SnapshotSchedules"]["SnapshotSchedule"]];
        contents.SnapshotSchedules = deserializeAws_querySnapshotScheduleList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDisableSnapshotCopyResult = (output, context) => {
    let contents = {
        __type: "DisableSnapshotCopyResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
        __type: "EC2SecurityGroup",
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupOwnerId: undefined,
        Status: undefined,
        Tags: undefined
    };
    if (output["EC2SecurityGroupName"] !== undefined) {
        contents.EC2SecurityGroupName = output["EC2SecurityGroupName"];
    }
    if (output["EC2SecurityGroupOwnerId"] !== undefined) {
        contents.EC2SecurityGroupOwnerId = output["EC2SecurityGroupOwnerId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEC2SecurityGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryElasticIpStatus = (output, context) => {
    let contents = {
        __type: "ElasticIpStatus",
        ElasticIp: undefined,
        Status: undefined
    };
    if (output["ElasticIp"] !== undefined) {
        contents.ElasticIp = output["ElasticIp"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryEligibleTracksToUpdateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUpdateTarget(entry, context));
    });
    return contents;
};
const deserializeAws_queryEnableSnapshotCopyResult = (output, context) => {
    let contents = {
        __type: "EnableSnapshotCopyResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        Address: undefined,
        Port: undefined
    };
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
const deserializeAws_queryEvent = (output, context) => {
    let contents = {
        __type: "Event",
        Date: undefined,
        EventCategories: undefined,
        EventId: undefined,
        Message: undefined,
        Severity: undefined,
        SourceIdentifier: undefined,
        SourceType: undefined
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output.EventCategories === "") {
        contents.EventCategories = [];
    }
    if (output["EventCategories"] !== undefined &&
        output["EventCategories"]["EventCategory"] !== undefined) {
        const wrappedItem = output["EventCategories"]["EventCategory"] instanceof Array
            ? output["EventCategories"]["EventCategory"]
            : [output["EventCategories"]["EventCategory"]];
        contents.EventCategories = deserializeAws_queryEventCategoriesList(wrappedItem, context);
    }
    if (output["EventId"] !== undefined) {
        contents.EventId = output["EventId"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["SourceIdentifier"] !== undefined) {
        contents.SourceIdentifier = output["SourceIdentifier"];
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    return contents;
};
const deserializeAws_queryEventCategoriesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryEventCategoriesMap = (output, context) => {
    let contents = {
        __type: "EventCategoriesMap",
        Events: undefined,
        SourceType: undefined
    };
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined &&
        output["Events"]["EventInfoMap"] !== undefined) {
        const wrappedItem = output["Events"]["EventInfoMap"] instanceof Array
            ? output["Events"]["EventInfoMap"]
            : [output["Events"]["EventInfoMap"]];
        contents.Events = deserializeAws_queryEventInfoMapList(wrappedItem, context);
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    return contents;
};
const deserializeAws_queryEventCategoriesMapList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEventCategoriesMap(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventCategoriesMessage = (output, context) => {
    let contents = {
        __type: "EventCategoriesMessage",
        EventCategoriesMapList: undefined
    };
    if (output.EventCategoriesMapList === "") {
        contents.EventCategoriesMapList = [];
    }
    if (output["EventCategoriesMapList"] !== undefined &&
        output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined) {
        const wrappedItem = output["EventCategoriesMapList"]["EventCategoriesMap"] instanceof Array
            ? output["EventCategoriesMapList"]["EventCategoriesMap"]
            : [output["EventCategoriesMapList"]["EventCategoriesMap"]];
        contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEventInfoMap = (output, context) => {
    let contents = {
        __type: "EventInfoMap",
        EventCategories: undefined,
        EventDescription: undefined,
        EventId: undefined,
        Severity: undefined
    };
    if (output.EventCategories === "") {
        contents.EventCategories = [];
    }
    if (output["EventCategories"] !== undefined &&
        output["EventCategories"]["EventCategory"] !== undefined) {
        const wrappedItem = output["EventCategories"]["EventCategory"] instanceof Array
            ? output["EventCategories"]["EventCategory"]
            : [output["EventCategories"]["EventCategory"]];
        contents.EventCategories = deserializeAws_queryEventCategoriesList(wrappedItem, context);
    }
    if (output["EventDescription"] !== undefined) {
        contents.EventDescription = output["EventDescription"];
    }
    if (output["EventId"] !== undefined) {
        contents.EventId = output["EventId"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
const deserializeAws_queryEventInfoMapList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEventInfoMap(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEvent(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventSubscription = (output, context) => {
    let contents = {
        __type: "EventSubscription",
        CustSubscriptionId: undefined,
        CustomerAwsId: undefined,
        Enabled: undefined,
        EventCategoriesList: undefined,
        Severity: undefined,
        SnsTopicArn: undefined,
        SourceIdsList: undefined,
        SourceType: undefined,
        Status: undefined,
        SubscriptionCreationTime: undefined,
        Tags: undefined
    };
    if (output["CustSubscriptionId"] !== undefined) {
        contents.CustSubscriptionId = output["CustSubscriptionId"];
    }
    if (output["CustomerAwsId"] !== undefined) {
        contents.CustomerAwsId = output["CustomerAwsId"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output.EventCategoriesList === "") {
        contents.EventCategoriesList = [];
    }
    if (output["EventCategoriesList"] !== undefined &&
        output["EventCategoriesList"]["EventCategory"] !== undefined) {
        const wrappedItem = output["EventCategoriesList"]["EventCategory"] instanceof Array
            ? output["EventCategoriesList"]["EventCategory"]
            : [output["EventCategoriesList"]["EventCategory"]];
        contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(wrappedItem, context);
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["SnsTopicArn"] !== undefined) {
        contents.SnsTopicArn = output["SnsTopicArn"];
    }
    if (output.SourceIdsList === "") {
        contents.SourceIdsList = [];
    }
    if (output["SourceIdsList"] !== undefined &&
        output["SourceIdsList"]["SourceId"] !== undefined) {
        const wrappedItem = output["SourceIdsList"]["SourceId"] instanceof Array
            ? output["SourceIdsList"]["SourceId"]
            : [output["SourceIdsList"]["SourceId"]];
        contents.SourceIdsList = deserializeAws_querySourceIdsList(wrappedItem, context);
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SubscriptionCreationTime"] !== undefined) {
        contents.SubscriptionCreationTime = new Date(output["SubscriptionCreationTime"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEventSubscriptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEventSubscription(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventSubscriptionsMessage = (output, context) => {
    let contents = {
        __type: "EventSubscriptionsMessage",
        EventSubscriptionsList: undefined,
        Marker: undefined
    };
    if (output.EventSubscriptionsList === "") {
        contents.EventSubscriptionsList = [];
    }
    if (output["EventSubscriptionsList"] !== undefined &&
        output["EventSubscriptionsList"]["EventSubscription"] !== undefined) {
        const wrappedItem = output["EventSubscriptionsList"]["EventSubscription"] instanceof Array
            ? output["EventSubscriptionsList"]["EventSubscription"]
            : [output["EventSubscriptionsList"]["EventSubscription"]];
        contents.EventSubscriptionsList = deserializeAws_queryEventSubscriptionsList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryEventsMessage = (output, context) => {
    let contents = {
        __type: "EventsMessage",
        Events: undefined,
        Marker: undefined
    };
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined &&
        output["Events"]["Event"] !== undefined) {
        const wrappedItem = output["Events"]["Event"] instanceof Array
            ? output["Events"]["Event"]
            : [output["Events"]["Event"]];
        contents.Events = deserializeAws_queryEventList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage = (output, context) => {
    let contents = {
        __type: "GetReservedNodeExchangeOfferingsOutputMessage",
        Marker: undefined,
        ReservedNodeOfferings: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodeOfferings === "") {
        contents.ReservedNodeOfferings = [];
    }
    if (output["ReservedNodeOfferings"] !== undefined &&
        output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined) {
        const wrappedItem = output["ReservedNodeOfferings"]["ReservedNodeOffering"] instanceof Array
            ? output["ReservedNodeOfferings"]["ReservedNodeOffering"]
            : [output["ReservedNodeOfferings"]["ReservedNodeOffering"]];
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificate = (output, context) => {
    let contents = {
        __type: "HsmClientCertificate",
        HsmClientCertificateIdentifier: undefined,
        HsmClientCertificatePublicKey: undefined,
        Tags: undefined
    };
    if (output["HsmClientCertificateIdentifier"] !== undefined) {
        contents.HsmClientCertificateIdentifier =
            output["HsmClientCertificateIdentifier"];
    }
    if (output["HsmClientCertificatePublicKey"] !== undefined) {
        contents.HsmClientCertificatePublicKey =
            output["HsmClientCertificatePublicKey"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryHsmClientCertificate(entry, context));
    });
    return contents;
};
const deserializeAws_queryHsmClientCertificateMessage = (output, context) => {
    let contents = {
        __type: "HsmClientCertificateMessage",
        HsmClientCertificates: undefined,
        Marker: undefined
    };
    if (output.HsmClientCertificates === "") {
        contents.HsmClientCertificates = [];
    }
    if (output["HsmClientCertificates"] !== undefined &&
        output["HsmClientCertificates"]["HsmClientCertificate"] !== undefined) {
        const wrappedItem = output["HsmClientCertificates"]["HsmClientCertificate"] instanceof Array
            ? output["HsmClientCertificates"]["HsmClientCertificate"]
            : [output["HsmClientCertificates"]["HsmClientCertificate"]];
        contents.HsmClientCertificates = deserializeAws_queryHsmClientCertificateList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryHsmConfiguration = (output, context) => {
    let contents = {
        __type: "HsmConfiguration",
        Description: undefined,
        HsmConfigurationIdentifier: undefined,
        HsmIpAddress: undefined,
        HsmPartitionName: undefined,
        Tags: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["HsmConfigurationIdentifier"] !== undefined) {
        contents.HsmConfigurationIdentifier = output["HsmConfigurationIdentifier"];
    }
    if (output["HsmIpAddress"] !== undefined) {
        contents.HsmIpAddress = output["HsmIpAddress"];
    }
    if (output["HsmPartitionName"] !== undefined) {
        contents.HsmPartitionName = output["HsmPartitionName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryHsmConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_queryHsmConfigurationMessage = (output, context) => {
    let contents = {
        __type: "HsmConfigurationMessage",
        HsmConfigurations: undefined,
        Marker: undefined
    };
    if (output.HsmConfigurations === "") {
        contents.HsmConfigurations = [];
    }
    if (output["HsmConfigurations"] !== undefined &&
        output["HsmConfigurations"]["HsmConfiguration"] !== undefined) {
        const wrappedItem = output["HsmConfigurations"]["HsmConfiguration"] instanceof Array
            ? output["HsmConfigurations"]["HsmConfiguration"]
            : [output["HsmConfigurations"]["HsmConfiguration"]];
        contents.HsmConfigurations = deserializeAws_queryHsmConfigurationList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryHsmStatus = (output, context) => {
    let contents = {
        __type: "HsmStatus",
        HsmClientCertificateIdentifier: undefined,
        HsmConfigurationIdentifier: undefined,
        Status: undefined
    };
    if (output["HsmClientCertificateIdentifier"] !== undefined) {
        contents.HsmClientCertificateIdentifier =
            output["HsmClientCertificateIdentifier"];
    }
    if (output["HsmConfigurationIdentifier"] !== undefined) {
        contents.HsmConfigurationIdentifier = output["HsmConfigurationIdentifier"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryIPRange = (output, context) => {
    let contents = {
        __type: "IPRange",
        CIDRIP: undefined,
        Status: undefined,
        Tags: undefined
    };
    if (output["CIDRIP"] !== undefined) {
        contents.CIDRIP = output["CIDRIP"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryIPRangeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryIPRange(entry, context));
    });
    return contents;
};
const deserializeAws_queryImportTablesCompleted = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryImportTablesInProgress = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryImportTablesNotStarted = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryLoggingStatus = (output, context) => {
    let contents = {
        __type: "LoggingStatus",
        BucketName: undefined,
        LastFailureMessage: undefined,
        LastFailureTime: undefined,
        LastSuccessfulDeliveryTime: undefined,
        LoggingEnabled: undefined,
        S3KeyPrefix: undefined
    };
    if (output["BucketName"] !== undefined) {
        contents.BucketName = output["BucketName"];
    }
    if (output["LastFailureMessage"] !== undefined) {
        contents.LastFailureMessage = output["LastFailureMessage"];
    }
    if (output["LastFailureTime"] !== undefined) {
        contents.LastFailureTime = new Date(output["LastFailureTime"]);
    }
    if (output["LastSuccessfulDeliveryTime"] !== undefined) {
        contents.LastSuccessfulDeliveryTime = new Date(output["LastSuccessfulDeliveryTime"]);
    }
    if (output["LoggingEnabled"] !== undefined) {
        contents.LoggingEnabled = output["LoggingEnabled"] == "true";
    }
    if (output["S3KeyPrefix"] !== undefined) {
        contents.S3KeyPrefix = output["S3KeyPrefix"];
    }
    return contents;
};
const deserializeAws_queryMaintenanceTrack = (output, context) => {
    let contents = {
        __type: "MaintenanceTrack",
        DatabaseVersion: undefined,
        MaintenanceTrackName: undefined,
        UpdateTargets: undefined
    };
    if (output["DatabaseVersion"] !== undefined) {
        contents.DatabaseVersion = output["DatabaseVersion"];
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output.UpdateTargets === "") {
        contents.UpdateTargets = [];
    }
    if (output["UpdateTargets"] !== undefined &&
        output["UpdateTargets"]["UpdateTarget"] !== undefined) {
        const wrappedItem = output["UpdateTargets"]["UpdateTarget"] instanceof Array
            ? output["UpdateTargets"]["UpdateTarget"]
            : [output["UpdateTargets"]["UpdateTarget"]];
        contents.UpdateTargets = deserializeAws_queryEligibleTracksToUpdateList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterDbRevisionResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterDbRevisionResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterIamRolesResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterIamRolesResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterMaintenanceResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterMaintenanceResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "ModifyClusterSubnetGroupResult",
        ClusterSubnetGroup: undefined
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyEventSubscriptionResult = (output, context) => {
    let contents = {
        __type: "ModifyEventSubscriptionResult",
        EventSubscription: undefined
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryModifySnapshotCopyRetentionPeriodResult = (output, context) => {
    let contents = {
        __type: "ModifySnapshotCopyRetentionPeriodResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryNodeConfigurationOption = (output, context) => {
    let contents = {
        __type: "NodeConfigurationOption",
        EstimatedDiskUtilizationPercent: undefined,
        Mode: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined
    };
    if (output["EstimatedDiskUtilizationPercent"] !== undefined) {
        contents.EstimatedDiskUtilizationPercent = parseFloat(output["EstimatedDiskUtilizationPercent"]);
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    return contents;
};
const deserializeAws_queryNodeConfigurationOptionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeConfigurationOption(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeConfigurationOptionsMessage = (output, context) => {
    let contents = {
        __type: "NodeConfigurationOptionsMessage",
        Marker: undefined,
        NodeConfigurationOptionList: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.NodeConfigurationOptionList === "") {
        contents.NodeConfigurationOptionList = [];
    }
    if (output["NodeConfigurationOptionList"] !== undefined &&
        output["NodeConfigurationOptionList"]["NodeConfigurationOption"] !==
            undefined) {
        const wrappedItem = output["NodeConfigurationOptionList"]["NodeConfigurationOption"] instanceof Array
            ? output["NodeConfigurationOptionList"]["NodeConfigurationOption"]
            : [output["NodeConfigurationOptionList"]["NodeConfigurationOption"]];
        contents.NodeConfigurationOptionList = deserializeAws_queryNodeConfigurationOptionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryOrderableClusterOption = (output, context) => {
    let contents = {
        __type: "OrderableClusterOption",
        AvailabilityZones: undefined,
        ClusterType: undefined,
        ClusterVersion: undefined,
        NodeType: undefined
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["AvailabilityZone"] instanceof Array
            ? output["AvailabilityZones"]["AvailabilityZone"]
            : [output["AvailabilityZones"]["AvailabilityZone"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(wrappedItem, context);
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    return contents;
};
const deserializeAws_queryOrderableClusterOptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOrderableClusterOption(entry, context));
    });
    return contents;
};
const deserializeAws_queryOrderableClusterOptionsMessage = (output, context) => {
    let contents = {
        __type: "OrderableClusterOptionsMessage",
        Marker: undefined,
        OrderableClusterOptions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.OrderableClusterOptions === "") {
        contents.OrderableClusterOptions = [];
    }
    if (output["OrderableClusterOptions"] !== undefined &&
        output["OrderableClusterOptions"]["OrderableClusterOption"] !== undefined) {
        const wrappedItem = output["OrderableClusterOptions"]["OrderableClusterOption"] instanceof
            Array
            ? output["OrderableClusterOptions"]["OrderableClusterOption"]
            : [output["OrderableClusterOptions"]["OrderableClusterOption"]];
        contents.OrderableClusterOptions = deserializeAws_queryOrderableClusterOptionsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        AllowedValues: undefined,
        ApplyType: undefined,
        DataType: undefined,
        Description: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
        ParameterName: undefined,
        ParameterValue: undefined,
        Source: undefined
    };
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["ApplyType"] !== undefined) {
        contents.ApplyType = output["ApplyType"];
    }
    if (output["DataType"] !== undefined) {
        contents.DataType = output["DataType"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    if (output["ParameterName"] !== undefined) {
        contents.ParameterName = output["ParameterName"];
    }
    if (output["ParameterValue"] !== undefined) {
        contents.ParameterValue = output["ParameterValue"];
    }
    if (output["Source"] !== undefined) {
        contents.Source = output["Source"];
    }
    return contents;
};
const deserializeAws_queryParameterGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryClusterParameterGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryParametersList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryPendingActionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
        __type: "PendingModifiedValues",
        AutomatedSnapshotRetentionPeriod: undefined,
        ClusterIdentifier: undefined,
        ClusterType: undefined,
        ClusterVersion: undefined,
        EncryptionType: undefined,
        EnhancedVpcRouting: undefined,
        MaintenanceTrackName: undefined,
        MasterUserPassword: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        PubliclyAccessible: undefined
    };
    if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
        contents.AutomatedSnapshotRetentionPeriod = parseInt(output["AutomatedSnapshotRetentionPeriod"]);
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["EncryptionType"] !== undefined) {
        contents.EncryptionType = output["EncryptionType"];
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["MasterUserPassword"] !== undefined) {
        contents.MasterUserPassword = output["MasterUserPassword"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    return contents;
};
const deserializeAws_queryPurchaseReservedNodeOfferingResult = (output, context) => {
    let contents = {
        __type: "PurchaseReservedNodeOfferingResult",
        ReservedNode: undefined
    };
    if (output["ReservedNode"] !== undefined) {
        contents.ReservedNode = deserializeAws_queryReservedNode(output["ReservedNode"], context);
    }
    return contents;
};
const deserializeAws_queryRebootClusterResult = (output, context) => {
    let contents = {
        __type: "RebootClusterResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryRecurringCharge = (output, context) => {
    let contents = {
        __type: "RecurringCharge",
        RecurringChargeAmount: undefined,
        RecurringChargeFrequency: undefined
    };
    if (output["RecurringChargeAmount"] !== undefined) {
        contents.RecurringChargeAmount = parseFloat(output["RecurringChargeAmount"]);
    }
    if (output["RecurringChargeFrequency"] !== undefined) {
        contents.RecurringChargeFrequency = output["RecurringChargeFrequency"];
    }
    return contents;
};
const deserializeAws_queryRecurringChargeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRecurringCharge(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedNode = (output, context) => {
    let contents = {
        __type: "ReservedNode",
        CurrencyCode: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        NodeCount: undefined,
        NodeType: undefined,
        OfferingType: undefined,
        RecurringCharges: undefined,
        ReservedNodeId: undefined,
        ReservedNodeOfferingId: undefined,
        ReservedNodeOfferingType: undefined,
        StartTime: undefined,
        State: undefined,
        UsagePrice: undefined
    };
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["NodeCount"] !== undefined) {
        contents.NodeCount = parseInt(output["NodeCount"]);
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined &&
        output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        const wrappedItem = output["RecurringCharges"]["RecurringCharge"] instanceof Array
            ? output["RecurringCharges"]["RecurringCharge"]
            : [output["RecurringCharges"]["RecurringCharge"]];
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(wrappedItem, context);
    }
    if (output["ReservedNodeId"] !== undefined) {
        contents.ReservedNodeId = output["ReservedNodeId"];
    }
    if (output["ReservedNodeOfferingId"] !== undefined) {
        contents.ReservedNodeOfferingId = output["ReservedNodeOfferingId"];
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    return contents;
};
const deserializeAws_queryReservedNodeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedNode(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedNodeOffering = (output, context) => {
    let contents = {
        __type: "ReservedNodeOffering",
        CurrencyCode: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        NodeType: undefined,
        OfferingType: undefined,
        RecurringCharges: undefined,
        ReservedNodeOfferingId: undefined,
        ReservedNodeOfferingType: undefined,
        UsagePrice: undefined
    };
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined &&
        output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        const wrappedItem = output["RecurringCharges"]["RecurringCharge"] instanceof Array
            ? output["RecurringCharges"]["RecurringCharge"]
            : [output["RecurringCharges"]["RecurringCharge"]];
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(wrappedItem, context);
    }
    if (output["ReservedNodeOfferingId"] !== undefined) {
        contents.ReservedNodeOfferingId = output["ReservedNodeOfferingId"];
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    return contents;
};
const deserializeAws_queryReservedNodeOfferingList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedNodeOffering(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedNodeOfferingsMessage = (output, context) => {
    let contents = {
        __type: "ReservedNodeOfferingsMessage",
        Marker: undefined,
        ReservedNodeOfferings: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodeOfferings === "") {
        contents.ReservedNodeOfferings = [];
    }
    if (output["ReservedNodeOfferings"] !== undefined &&
        output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined) {
        const wrappedItem = output["ReservedNodeOfferings"]["ReservedNodeOffering"] instanceof Array
            ? output["ReservedNodeOfferings"]["ReservedNodeOffering"]
            : [output["ReservedNodeOfferings"]["ReservedNodeOffering"]];
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryReservedNodesMessage = (output, context) => {
    let contents = {
        __type: "ReservedNodesMessage",
        Marker: undefined,
        ReservedNodes: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodes === "") {
        contents.ReservedNodes = [];
    }
    if (output["ReservedNodes"] !== undefined &&
        output["ReservedNodes"]["ReservedNode"] !== undefined) {
        const wrappedItem = output["ReservedNodes"]["ReservedNode"] instanceof Array
            ? output["ReservedNodes"]["ReservedNode"]
            : [output["ReservedNodes"]["ReservedNode"]];
        contents.ReservedNodes = deserializeAws_queryReservedNodeList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryResizeClusterMessage = (output, context) => {
    let contents = {
        __type: "ResizeClusterMessage",
        Classic: undefined,
        ClusterIdentifier: undefined,
        ClusterType: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined
    };
    if (output["Classic"] !== undefined) {
        contents.Classic = output["Classic"] == "true";
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    return contents;
};
const deserializeAws_queryResizeClusterResult = (output, context) => {
    let contents = {
        __type: "ResizeClusterResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryResizeInfo = (output, context) => {
    let contents = {
        __type: "ResizeInfo",
        AllowCancelResize: undefined,
        ResizeType: undefined
    };
    if (output["AllowCancelResize"] !== undefined) {
        contents.AllowCancelResize = output["AllowCancelResize"] == "true";
    }
    if (output["ResizeType"] !== undefined) {
        contents.ResizeType = output["ResizeType"];
    }
    return contents;
};
const deserializeAws_queryResizeProgressMessage = (output, context) => {
    let contents = {
        __type: "ResizeProgressMessage",
        AvgResizeRateInMegaBytesPerSecond: undefined,
        DataTransferProgressPercent: undefined,
        ElapsedTimeInSeconds: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
        ImportTablesCompleted: undefined,
        ImportTablesInProgress: undefined,
        ImportTablesNotStarted: undefined,
        Message: undefined,
        ProgressInMegaBytes: undefined,
        ResizeType: undefined,
        Status: undefined,
        TargetClusterType: undefined,
        TargetEncryptionType: undefined,
        TargetNodeType: undefined,
        TargetNumberOfNodes: undefined,
        TotalResizeDataInMegaBytes: undefined
    };
    if (output["AvgResizeRateInMegaBytesPerSecond"] !== undefined) {
        contents.AvgResizeRateInMegaBytesPerSecond = parseFloat(output["AvgResizeRateInMegaBytesPerSecond"]);
    }
    if (output["DataTransferProgressPercent"] !== undefined) {
        contents.DataTransferProgressPercent = parseFloat(output["DataTransferProgressPercent"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    if (output.ImportTablesCompleted === "") {
        contents.ImportTablesCompleted = [];
    }
    if (output["ImportTablesCompleted"] !== undefined &&
        output["ImportTablesCompleted"]["member"] !== undefined) {
        const wrappedItem = output["ImportTablesCompleted"]["member"] instanceof Array
            ? output["ImportTablesCompleted"]["member"]
            : [output["ImportTablesCompleted"]["member"]];
        contents.ImportTablesCompleted = deserializeAws_queryImportTablesCompleted(wrappedItem, context);
    }
    if (output.ImportTablesInProgress === "") {
        contents.ImportTablesInProgress = [];
    }
    if (output["ImportTablesInProgress"] !== undefined &&
        output["ImportTablesInProgress"]["member"] !== undefined) {
        const wrappedItem = output["ImportTablesInProgress"]["member"] instanceof Array
            ? output["ImportTablesInProgress"]["member"]
            : [output["ImportTablesInProgress"]["member"]];
        contents.ImportTablesInProgress = deserializeAws_queryImportTablesInProgress(wrappedItem, context);
    }
    if (output.ImportTablesNotStarted === "") {
        contents.ImportTablesNotStarted = [];
    }
    if (output["ImportTablesNotStarted"] !== undefined &&
        output["ImportTablesNotStarted"]["member"] !== undefined) {
        const wrappedItem = output["ImportTablesNotStarted"]["member"] instanceof Array
            ? output["ImportTablesNotStarted"]["member"]
            : [output["ImportTablesNotStarted"]["member"]];
        contents.ImportTablesNotStarted = deserializeAws_queryImportTablesNotStarted(wrappedItem, context);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["ResizeType"] !== undefined) {
        contents.ResizeType = output["ResizeType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TargetClusterType"] !== undefined) {
        contents.TargetClusterType = output["TargetClusterType"];
    }
    if (output["TargetEncryptionType"] !== undefined) {
        contents.TargetEncryptionType = output["TargetEncryptionType"];
    }
    if (output["TargetNodeType"] !== undefined) {
        contents.TargetNodeType = output["TargetNodeType"];
    }
    if (output["TargetNumberOfNodes"] !== undefined) {
        contents.TargetNumberOfNodes = parseInt(output["TargetNumberOfNodes"]);
    }
    if (output["TotalResizeDataInMegaBytes"] !== undefined) {
        contents.TotalResizeDataInMegaBytes = parseInt(output["TotalResizeDataInMegaBytes"]);
    }
    return contents;
};
const deserializeAws_queryRestorableNodeTypeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryRestoreFromClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "RestoreFromClusterSnapshotResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreStatus = (output, context) => {
    let contents = {
        __type: "RestoreStatus",
        CurrentRestoreRateInMegaBytesPerSecond: undefined,
        ElapsedTimeInSeconds: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
        ProgressInMegaBytes: undefined,
        SnapshotSizeInMegaBytes: undefined,
        Status: undefined
    };
    if (output["CurrentRestoreRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentRestoreRateInMegaBytesPerSecond = parseFloat(output["CurrentRestoreRateInMegaBytesPerSecond"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["SnapshotSizeInMegaBytes"] !== undefined) {
        contents.SnapshotSizeInMegaBytes = parseInt(output["SnapshotSizeInMegaBytes"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryRestoreTableFromClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "RestoreTableFromClusterSnapshotResult",
        TableRestoreStatus: undefined
    };
    if (output["TableRestoreStatus"] !== undefined) {
        contents.TableRestoreStatus = deserializeAws_queryTableRestoreStatus(output["TableRestoreStatus"], context);
    }
    return contents;
};
const deserializeAws_queryRevisionTarget = (output, context) => {
    let contents = {
        __type: "RevisionTarget",
        DatabaseRevision: undefined,
        DatabaseRevisionReleaseDate: undefined,
        Description: undefined
    };
    if (output["DatabaseRevision"] !== undefined) {
        contents.DatabaseRevision = output["DatabaseRevision"];
    }
    if (output["DatabaseRevisionReleaseDate"] !== undefined) {
        contents.DatabaseRevisionReleaseDate = new Date(output["DatabaseRevisionReleaseDate"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryRevisionTargetsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRevisionTarget(entry, context));
    });
    return contents;
};
const deserializeAws_queryRevokeClusterSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "RevokeClusterSecurityGroupIngressResult",
        ClusterSecurityGroup: undefined
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryRevokeSnapshotAccessResult = (output, context) => {
    let contents = {
        __type: "RevokeSnapshotAccessResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryRotateEncryptionKeyResult = (output, context) => {
    let contents = {
        __type: "RotateEncryptionKeyResult",
        Cluster: undefined
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryScheduleDefinitionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryScheduledAction = (output, context) => {
    let contents = {
        __type: "ScheduledAction",
        EndTime: undefined,
        IamRole: undefined,
        NextInvocations: undefined,
        Schedule: undefined,
        ScheduledActionDescription: undefined,
        ScheduledActionName: undefined,
        StartTime: undefined,
        State: undefined,
        TargetAction: undefined
    };
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    if (output["IamRole"] !== undefined) {
        contents.IamRole = output["IamRole"];
    }
    if (output.NextInvocations === "") {
        contents.NextInvocations = [];
    }
    if (output["NextInvocations"] !== undefined &&
        output["NextInvocations"]["ScheduledActionTime"] !== undefined) {
        const wrappedItem = output["NextInvocations"]["ScheduledActionTime"] instanceof Array
            ? output["NextInvocations"]["ScheduledActionTime"]
            : [output["NextInvocations"]["ScheduledActionTime"]];
        contents.NextInvocations = deserializeAws_queryScheduledActionTimeList(wrappedItem, context);
    }
    if (output["Schedule"] !== undefined) {
        contents.Schedule = output["Schedule"];
    }
    if (output["ScheduledActionDescription"] !== undefined) {
        contents.ScheduledActionDescription = output["ScheduledActionDescription"];
    }
    if (output["ScheduledActionName"] !== undefined) {
        contents.ScheduledActionName = output["ScheduledActionName"];
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["TargetAction"] !== undefined) {
        contents.TargetAction = deserializeAws_queryScheduledActionType(output["TargetAction"], context);
    }
    return contents;
};
const deserializeAws_queryScheduledActionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryScheduledAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryScheduledActionTimeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(new Date(entry));
    });
    return contents;
};
const deserializeAws_queryScheduledActionType = (output, context) => {
    let contents = {
        __type: "ScheduledActionType",
        ResizeCluster: undefined
    };
    if (output["ResizeCluster"] !== undefined) {
        contents.ResizeCluster = deserializeAws_queryResizeClusterMessage(output["ResizeCluster"], context);
    }
    return contents;
};
const deserializeAws_queryScheduledActionsMessage = (output, context) => {
    let contents = {
        __type: "ScheduledActionsMessage",
        Marker: undefined,
        ScheduledActions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ScheduledActions === "") {
        contents.ScheduledActions = [];
    }
    if (output["ScheduledActions"] !== undefined &&
        output["ScheduledActions"]["ScheduledAction"] !== undefined) {
        const wrappedItem = output["ScheduledActions"]["ScheduledAction"] instanceof Array
            ? output["ScheduledActions"]["ScheduledAction"]
            : [output["ScheduledActions"]["ScheduledAction"]];
        contents.ScheduledActions = deserializeAws_queryScheduledActionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryScheduledSnapshotTimeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(new Date(entry));
    });
    return contents;
};
const deserializeAws_querySnapshot = (output, context) => {
    let contents = {
        __type: "Snapshot",
        AccountsWithRestoreAccess: undefined,
        ActualIncrementalBackupSizeInMegaBytes: undefined,
        AvailabilityZone: undefined,
        BackupProgressInMegaBytes: undefined,
        ClusterCreateTime: undefined,
        ClusterIdentifier: undefined,
        ClusterVersion: undefined,
        CurrentBackupRateInMegaBytesPerSecond: undefined,
        DBName: undefined,
        ElapsedTimeInSeconds: undefined,
        Encrypted: undefined,
        EncryptedWithHSM: undefined,
        EnhancedVpcRouting: undefined,
        EstimatedSecondsToCompletion: undefined,
        KmsKeyId: undefined,
        MaintenanceTrackName: undefined,
        ManualSnapshotRemainingDays: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        MasterUsername: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        OwnerAccount: undefined,
        Port: undefined,
        RestorableNodeTypes: undefined,
        SnapshotCreateTime: undefined,
        SnapshotIdentifier: undefined,
        SnapshotRetentionStartTime: undefined,
        SnapshotType: undefined,
        SourceRegion: undefined,
        Status: undefined,
        Tags: undefined,
        TotalBackupSizeInMegaBytes: undefined,
        VpcId: undefined
    };
    if (output.AccountsWithRestoreAccess === "") {
        contents.AccountsWithRestoreAccess = [];
    }
    if (output["AccountsWithRestoreAccess"] !== undefined &&
        output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"] !==
            undefined) {
        const wrappedItem = output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"] instanceof
            Array
            ? output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"]
            : [output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"]];
        contents.AccountsWithRestoreAccess = deserializeAws_queryAccountsWithRestoreAccessList(wrappedItem, context);
    }
    if (output["ActualIncrementalBackupSizeInMegaBytes"] !== undefined) {
        contents.ActualIncrementalBackupSizeInMegaBytes = parseFloat(output["ActualIncrementalBackupSizeInMegaBytes"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["BackupProgressInMegaBytes"] !== undefined) {
        contents.BackupProgressInMegaBytes = parseFloat(output["BackupProgressInMegaBytes"]);
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["CurrentBackupRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentBackupRateInMegaBytesPerSecond = parseFloat(output["CurrentBackupRateInMegaBytesPerSecond"]);
    }
    if (output["DBName"] !== undefined) {
        contents.DBName = output["DBName"];
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["EncryptedWithHSM"] !== undefined) {
        contents.EncryptedWithHSM = output["EncryptedWithHSM"] == "true";
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output["EstimatedSecondsToCompletion"] !== undefined) {
        contents.EstimatedSecondsToCompletion = parseInt(output["EstimatedSecondsToCompletion"]);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["ManualSnapshotRemainingDays"] !== undefined) {
        contents.ManualSnapshotRemainingDays = parseInt(output["ManualSnapshotRemainingDays"]);
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["OwnerAccount"] !== undefined) {
        contents.OwnerAccount = output["OwnerAccount"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output.RestorableNodeTypes === "") {
        contents.RestorableNodeTypes = [];
    }
    if (output["RestorableNodeTypes"] !== undefined &&
        output["RestorableNodeTypes"]["NodeType"] !== undefined) {
        const wrappedItem = output["RestorableNodeTypes"]["NodeType"] instanceof Array
            ? output["RestorableNodeTypes"]["NodeType"]
            : [output["RestorableNodeTypes"]["NodeType"]];
        contents.RestorableNodeTypes = deserializeAws_queryRestorableNodeTypeList(wrappedItem, context);
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    if (output["SnapshotRetentionStartTime"] !== undefined) {
        contents.SnapshotRetentionStartTime = new Date(output["SnapshotRetentionStartTime"]);
    }
    if (output["SnapshotType"] !== undefined) {
        contents.SnapshotType = output["SnapshotType"];
    }
    if (output["SourceRegion"] !== undefined) {
        contents.SourceRegion = output["SourceRegion"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
        contents.TotalBackupSizeInMegaBytes = parseFloat(output["TotalBackupSizeInMegaBytes"]);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrant = (output, context) => {
    let contents = {
        __type: "SnapshotCopyGrant",
        KmsKeyId: undefined,
        SnapshotCopyGrantName: undefined,
        Tags: undefined
    };
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["SnapshotCopyGrantName"] !== undefined) {
        contents.SnapshotCopyGrantName = output["SnapshotCopyGrantName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshotCopyGrant(entry, context));
    });
    return contents;
};
const deserializeAws_querySnapshotCopyGrantMessage = (output, context) => {
    let contents = {
        __type: "SnapshotCopyGrantMessage",
        Marker: undefined,
        SnapshotCopyGrants: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SnapshotCopyGrants === "") {
        contents.SnapshotCopyGrants = [];
    }
    if (output["SnapshotCopyGrants"] !== undefined &&
        output["SnapshotCopyGrants"]["SnapshotCopyGrant"] !== undefined) {
        const wrappedItem = output["SnapshotCopyGrants"]["SnapshotCopyGrant"] instanceof Array
            ? output["SnapshotCopyGrants"]["SnapshotCopyGrant"]
            : [output["SnapshotCopyGrants"]["SnapshotCopyGrant"]];
        contents.SnapshotCopyGrants = deserializeAws_querySnapshotCopyGrantList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySnapshotErrorMessage = (output, context) => {
    let contents = {
        __type: "SnapshotErrorMessage",
        FailureCode: undefined,
        FailureReason: undefined,
        SnapshotClusterIdentifier: undefined,
        SnapshotIdentifier: undefined
    };
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureReason"] !== undefined) {
        contents.FailureReason = output["FailureReason"];
    }
    if (output["SnapshotClusterIdentifier"] !== undefined) {
        contents.SnapshotClusterIdentifier = output["SnapshotClusterIdentifier"];
    }
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    return contents;
};
const deserializeAws_querySnapshotIdentifierList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySnapshotList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshot(entry, context));
    });
    return contents;
};
const deserializeAws_querySnapshotMessage = (output, context) => {
    let contents = {
        __type: "SnapshotMessage",
        Marker: undefined,
        Snapshots: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Snapshots === "") {
        contents.Snapshots = [];
    }
    if (output["Snapshots"] !== undefined &&
        output["Snapshots"]["Snapshot"] !== undefined) {
        const wrappedItem = output["Snapshots"]["Snapshot"] instanceof Array
            ? output["Snapshots"]["Snapshot"]
            : [output["Snapshots"]["Snapshot"]];
        contents.Snapshots = deserializeAws_querySnapshotList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySnapshotSchedule = (output, context) => {
    let contents = {
        __type: "SnapshotSchedule",
        AssociatedClusterCount: undefined,
        AssociatedClusters: undefined,
        NextInvocations: undefined,
        ScheduleDefinitions: undefined,
        ScheduleDescription: undefined,
        ScheduleIdentifier: undefined,
        Tags: undefined
    };
    if (output["AssociatedClusterCount"] !== undefined) {
        contents.AssociatedClusterCount = parseInt(output["AssociatedClusterCount"]);
    }
    if (output.AssociatedClusters === "") {
        contents.AssociatedClusters = [];
    }
    if (output["AssociatedClusters"] !== undefined &&
        output["AssociatedClusters"]["ClusterAssociatedToSchedule"] !== undefined) {
        const wrappedItem = output["AssociatedClusters"]["ClusterAssociatedToSchedule"] instanceof
            Array
            ? output["AssociatedClusters"]["ClusterAssociatedToSchedule"]
            : [output["AssociatedClusters"]["ClusterAssociatedToSchedule"]];
        contents.AssociatedClusters = deserializeAws_queryAssociatedClusterList(wrappedItem, context);
    }
    if (output.NextInvocations === "") {
        contents.NextInvocations = [];
    }
    if (output["NextInvocations"] !== undefined &&
        output["NextInvocations"]["SnapshotTime"] !== undefined) {
        const wrappedItem = output["NextInvocations"]["SnapshotTime"] instanceof Array
            ? output["NextInvocations"]["SnapshotTime"]
            : [output["NextInvocations"]["SnapshotTime"]];
        contents.NextInvocations = deserializeAws_queryScheduledSnapshotTimeList(wrappedItem, context);
    }
    if (output.ScheduleDefinitions === "") {
        contents.ScheduleDefinitions = [];
    }
    if (output["ScheduleDefinitions"] !== undefined &&
        output["ScheduleDefinitions"]["ScheduleDefinition"] !== undefined) {
        const wrappedItem = output["ScheduleDefinitions"]["ScheduleDefinition"] instanceof Array
            ? output["ScheduleDefinitions"]["ScheduleDefinition"]
            : [output["ScheduleDefinitions"]["ScheduleDefinition"]];
        contents.ScheduleDefinitions = deserializeAws_queryScheduleDefinitionList(wrappedItem, context);
    }
    if (output["ScheduleDescription"] !== undefined) {
        contents.ScheduleDescription = output["ScheduleDescription"];
    }
    if (output["ScheduleIdentifier"] !== undefined) {
        contents.ScheduleIdentifier = output["ScheduleIdentifier"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshotSchedule(entry, context));
    });
    return contents;
};
const deserializeAws_querySourceIdsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySubnet = (output, context) => {
    let contents = {
        __type: "Subnet",
        SubnetAvailabilityZone: undefined,
        SubnetIdentifier: undefined,
        SubnetStatus: undefined
    };
    if (output["SubnetAvailabilityZone"] !== undefined) {
        contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
    }
    if (output["SubnetIdentifier"] !== undefined) {
        contents.SubnetIdentifier = output["SubnetIdentifier"];
    }
    if (output["SubnetStatus"] !== undefined) {
        contents.SubnetStatus = output["SubnetStatus"];
    }
    return contents;
};
const deserializeAws_querySubnetList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySubnet(entry, context));
    });
    return contents;
};
const deserializeAws_querySupportedOperation = (output, context) => {
    let contents = {
        __type: "SupportedOperation",
        OperationName: undefined
    };
    if (output["OperationName"] !== undefined) {
        contents.OperationName = output["OperationName"];
    }
    return contents;
};
const deserializeAws_querySupportedOperationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySupportedOperation(entry, context));
    });
    return contents;
};
const deserializeAws_querySupportedPlatform = (output, context) => {
    let contents = {
        __type: "SupportedPlatform",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_querySupportedPlatformsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySupportedPlatform(entry, context));
    });
    return contents;
};
const deserializeAws_queryTableRestoreStatus = (output, context) => {
    let contents = {
        __type: "TableRestoreStatus",
        ClusterIdentifier: undefined,
        Message: undefined,
        NewTableName: undefined,
        ProgressInMegaBytes: undefined,
        RequestTime: undefined,
        SnapshotIdentifier: undefined,
        SourceDatabaseName: undefined,
        SourceSchemaName: undefined,
        SourceTableName: undefined,
        Status: undefined,
        TableRestoreRequestId: undefined,
        TargetDatabaseName: undefined,
        TargetSchemaName: undefined,
        TotalDataInMegaBytes: undefined
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["NewTableName"] !== undefined) {
        contents.NewTableName = output["NewTableName"];
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["RequestTime"] !== undefined) {
        contents.RequestTime = new Date(output["RequestTime"]);
    }
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    if (output["SourceDatabaseName"] !== undefined) {
        contents.SourceDatabaseName = output["SourceDatabaseName"];
    }
    if (output["SourceSchemaName"] !== undefined) {
        contents.SourceSchemaName = output["SourceSchemaName"];
    }
    if (output["SourceTableName"] !== undefined) {
        contents.SourceTableName = output["SourceTableName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TableRestoreRequestId"] !== undefined) {
        contents.TableRestoreRequestId = output["TableRestoreRequestId"];
    }
    if (output["TargetDatabaseName"] !== undefined) {
        contents.TargetDatabaseName = output["TargetDatabaseName"];
    }
    if (output["TargetSchemaName"] !== undefined) {
        contents.TargetSchemaName = output["TargetSchemaName"];
    }
    if (output["TotalDataInMegaBytes"] !== undefined) {
        contents.TotalDataInMegaBytes = parseInt(output["TotalDataInMegaBytes"]);
    }
    return contents;
};
const deserializeAws_queryTableRestoreStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTableRestoreStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryTableRestoreStatusMessage = (output, context) => {
    let contents = {
        __type: "TableRestoreStatusMessage",
        Marker: undefined,
        TableRestoreStatusDetails: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.TableRestoreStatusDetails === "") {
        contents.TableRestoreStatusDetails = [];
    }
    if (output["TableRestoreStatusDetails"] !== undefined &&
        output["TableRestoreStatusDetails"]["TableRestoreStatus"] !== undefined) {
        const wrappedItem = output["TableRestoreStatusDetails"]["TableRestoreStatus"] instanceof Array
            ? output["TableRestoreStatusDetails"]["TableRestoreStatus"]
            : [output["TableRestoreStatusDetails"]["TableRestoreStatus"]];
        contents.TableRestoreStatusDetails = deserializeAws_queryTableRestoreStatusList(wrappedItem, context);
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
const deserializeAws_queryTaggedResource = (output, context) => {
    let contents = {
        __type: "TaggedResource",
        ResourceName: undefined,
        ResourceType: undefined,
        Tag: undefined
    };
    if (output["ResourceName"] !== undefined) {
        contents.ResourceName = output["ResourceName"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_queryTag(output["Tag"], context);
    }
    return contents;
};
const deserializeAws_queryTaggedResourceList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTaggedResource(entry, context));
    });
    return contents;
};
const deserializeAws_queryTaggedResourceListMessage = (output, context) => {
    let contents = {
        __type: "TaggedResourceListMessage",
        Marker: undefined,
        TaggedResources: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.TaggedResources === "") {
        contents.TaggedResources = [];
    }
    if (output["TaggedResources"] !== undefined &&
        output["TaggedResources"]["TaggedResource"] !== undefined) {
        const wrappedItem = output["TaggedResources"]["TaggedResource"] instanceof Array
            ? output["TaggedResources"]["TaggedResource"]
            : [output["TaggedResources"]["TaggedResource"]];
        contents.TaggedResources = deserializeAws_queryTaggedResourceList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryTrackList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMaintenanceTrack(entry, context));
    });
    return contents;
};
const deserializeAws_queryTrackListMessage = (output, context) => {
    let contents = {
        __type: "TrackListMessage",
        MaintenanceTracks: undefined,
        Marker: undefined
    };
    if (output.MaintenanceTracks === "") {
        contents.MaintenanceTracks = [];
    }
    if (output["MaintenanceTracks"] !== undefined &&
        output["MaintenanceTracks"]["MaintenanceTrack"] !== undefined) {
        const wrappedItem = output["MaintenanceTracks"]["MaintenanceTrack"] instanceof Array
            ? output["MaintenanceTracks"]["MaintenanceTrack"]
            : [output["MaintenanceTracks"]["MaintenanceTrack"]];
        contents.MaintenanceTracks = deserializeAws_queryTrackList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryUpdateTarget = (output, context) => {
    let contents = {
        __type: "UpdateTarget",
        DatabaseVersion: undefined,
        MaintenanceTrackName: undefined,
        SupportedOperations: undefined
    };
    if (output["DatabaseVersion"] !== undefined) {
        contents.DatabaseVersion = output["DatabaseVersion"];
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output.SupportedOperations === "") {
        contents.SupportedOperations = [];
    }
    if (output["SupportedOperations"] !== undefined &&
        output["SupportedOperations"]["SupportedOperation"] !== undefined) {
        const wrappedItem = output["SupportedOperations"]["SupportedOperation"] instanceof Array
            ? output["SupportedOperations"]["SupportedOperation"]
            : [output["SupportedOperations"]["SupportedOperation"]];
        contents.SupportedOperations = deserializeAws_querySupportedOperationList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryVpcSecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "VpcSecurityGroupMembership",
        Status: undefined,
        VpcSecurityGroupId: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["VpcSecurityGroupId"] !== undefined) {
        contents.VpcSecurityGroupId = output["VpcSecurityGroupId"];
    }
    return contents;
};
const deserializeAws_queryVpcSecurityGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryVpcSecurityGroupMembership(entry, context));
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