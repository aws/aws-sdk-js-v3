"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.AddTagsToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
async function serializeAws_json1_1ApplyPendingMaintenanceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ApplyPendingMaintenanceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1ApplyPendingMaintenanceActionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ApplyPendingMaintenanceActionCommand = serializeAws_json1_1ApplyPendingMaintenanceActionCommand;
async function serializeAws_json1_1CreateEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.CreateEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEndpointCommand = serializeAws_json1_1CreateEndpointCommand;
async function serializeAws_json1_1CreateEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.CreateEventSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEventSubscriptionCommand = serializeAws_json1_1CreateEventSubscriptionCommand;
async function serializeAws_json1_1CreateReplicationInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.CreateReplicationInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateReplicationInstanceCommand = serializeAws_json1_1CreateReplicationInstanceCommand;
async function serializeAws_json1_1CreateReplicationSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.CreateReplicationSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateReplicationSubnetGroupCommand = serializeAws_json1_1CreateReplicationSubnetGroupCommand;
async function serializeAws_json1_1CreateReplicationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.CreateReplicationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateReplicationTaskCommand = serializeAws_json1_1CreateReplicationTaskCommand;
async function serializeAws_json1_1DeleteCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCertificateMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCertificateCommand = serializeAws_json1_1DeleteCertificateCommand;
async function serializeAws_json1_1DeleteConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
async function serializeAws_json1_1DeleteEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEndpointCommand = serializeAws_json1_1DeleteEndpointCommand;
async function serializeAws_json1_1DeleteEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteEventSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEventSubscriptionCommand = serializeAws_json1_1DeleteEventSubscriptionCommand;
async function serializeAws_json1_1DeleteReplicationInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteReplicationInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReplicationInstanceCommand = serializeAws_json1_1DeleteReplicationInstanceCommand;
async function serializeAws_json1_1DeleteReplicationSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteReplicationSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReplicationSubnetGroupCommand = serializeAws_json1_1DeleteReplicationSubnetGroupCommand;
async function serializeAws_json1_1DeleteReplicationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DeleteReplicationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReplicationTaskCommand = serializeAws_json1_1DeleteReplicationTaskCommand;
async function serializeAws_json1_1DescribeAccountAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeAccountAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAccountAttributesCommand = serializeAws_json1_1DescribeAccountAttributesCommand;
async function serializeAws_json1_1DescribeCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeCertificates";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificatesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCertificatesCommand = serializeAws_json1_1DescribeCertificatesCommand;
async function serializeAws_json1_1DescribeConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConnectionsCommand = serializeAws_json1_1DescribeConnectionsCommand;
async function serializeAws_json1_1DescribeEndpointTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeEndpointTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointTypesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointTypesCommand = serializeAws_json1_1DescribeEndpointTypesCommand;
async function serializeAws_json1_1DescribeEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointsCommand = serializeAws_json1_1DescribeEndpointsCommand;
async function serializeAws_json1_1DescribeEventCategoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeEventCategories";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventCategoriesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventCategoriesCommand = serializeAws_json1_1DescribeEventCategoriesCommand;
async function serializeAws_json1_1DescribeEventSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeEventSubscriptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventSubscriptionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventSubscriptionsCommand = serializeAws_json1_1DescribeEventSubscriptionsCommand;
async function serializeAws_json1_1DescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
async function serializeAws_json1_1DescribeOrderableReplicationInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonDMSv20160101.DescribeOrderableReplicationInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrderableReplicationInstancesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = serializeAws_json1_1DescribeOrderableReplicationInstancesCommand;
async function serializeAws_json1_1DescribePendingMaintenanceActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonDMSv20160101.DescribePendingMaintenanceActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePendingMaintenanceActionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePendingMaintenanceActionsCommand = serializeAws_json1_1DescribePendingMaintenanceActionsCommand;
async function serializeAws_json1_1DescribeRefreshSchemasStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeRefreshSchemasStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRefreshSchemasStatusMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRefreshSchemasStatusCommand = serializeAws_json1_1DescribeRefreshSchemasStatusCommand;
async function serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand;
async function serializeAws_json1_1DescribeReplicationInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeReplicationInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstancesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReplicationInstancesCommand = serializeAws_json1_1DescribeReplicationInstancesCommand;
async function serializeAws_json1_1DescribeReplicationSubnetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonDMSv20160101.DescribeReplicationSubnetGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationSubnetGroupsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = serializeAws_json1_1DescribeReplicationSubnetGroupsCommand;
async function serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand;
async function serializeAws_json1_1DescribeReplicationTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeReplicationTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTasksMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReplicationTasksCommand = serializeAws_json1_1DescribeReplicationTasksCommand;
async function serializeAws_json1_1DescribeSchemasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeSchemas";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSchemasMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSchemasCommand = serializeAws_json1_1DescribeSchemasCommand;
async function serializeAws_json1_1DescribeTableStatisticsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.DescribeTableStatistics";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTableStatisticsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTableStatisticsCommand = serializeAws_json1_1DescribeTableStatisticsCommand;
async function serializeAws_json1_1ImportCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ImportCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCertificateMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportCertificateCommand = serializeAws_json1_1ImportCertificateCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ModifyEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ModifyEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyEndpointCommand = serializeAws_json1_1ModifyEndpointCommand;
async function serializeAws_json1_1ModifyEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ModifyEventSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyEventSubscriptionCommand = serializeAws_json1_1ModifyEventSubscriptionCommand;
async function serializeAws_json1_1ModifyReplicationInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ModifyReplicationInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyReplicationInstanceCommand = serializeAws_json1_1ModifyReplicationInstanceCommand;
async function serializeAws_json1_1ModifyReplicationSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ModifyReplicationSubnetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyReplicationSubnetGroupCommand = serializeAws_json1_1ModifyReplicationSubnetGroupCommand;
async function serializeAws_json1_1ModifyReplicationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ModifyReplicationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyReplicationTaskCommand = serializeAws_json1_1ModifyReplicationTaskCommand;
async function serializeAws_json1_1RebootReplicationInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.RebootReplicationInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootReplicationInstanceCommand = serializeAws_json1_1RebootReplicationInstanceCommand;
async function serializeAws_json1_1RefreshSchemasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.RefreshSchemas";
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshSchemasMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RefreshSchemasCommand = serializeAws_json1_1RefreshSchemasCommand;
async function serializeAws_json1_1ReloadTablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.ReloadTables";
    let body;
    body = JSON.stringify(serializeAws_json1_1ReloadTablesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ReloadTablesCommand = serializeAws_json1_1ReloadTablesCommand;
async function serializeAws_json1_1RemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.RemoveTagsFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
async function serializeAws_json1_1StartReplicationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.StartReplicationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartReplicationTaskCommand = serializeAws_json1_1StartReplicationTaskCommand;
async function serializeAws_json1_1StartReplicationTaskAssessmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.StartReplicationTaskAssessment";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartReplicationTaskAssessmentCommand = serializeAws_json1_1StartReplicationTaskAssessmentCommand;
async function serializeAws_json1_1StopReplicationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.StopReplicationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopReplicationTaskCommand = serializeAws_json1_1StopReplicationTaskCommand;
async function serializeAws_json1_1TestConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonDMSv20160101.TestConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1TestConnectionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TestConnectionCommand = serializeAws_json1_1TestConnectionCommand;
async function deserializeAws_json1_1AddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsToResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
async function deserializeAws_json1_1AddTagsToResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ApplyPendingMaintenanceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ApplyPendingMaintenanceActionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplyPendingMaintenanceActionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = deserializeAws_json1_1ApplyPendingMaintenanceActionCommand;
async function deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEndpointCommand = deserializeAws_json1_1CreateEndpointCommand;
async function deserializeAws_json1_1CreateEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEventSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEventSubscriptionCommand = deserializeAws_json1_1CreateEventSubscriptionCommand;
async function deserializeAws_json1_1CreateEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "KMSAccessDeniedFault":
        case "com.amazonaws.dms#KMSAccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledFault":
        case "com.amazonaws.dms#KMSDisabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateFault":
        case "com.amazonaws.dms#KMSInvalidStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundFault":
        case "com.amazonaws.dms#KMSNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingFault":
        case "com.amazonaws.dms#KMSThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.dms#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.dms#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateReplicationInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReplicationInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateReplicationInstanceCommand = deserializeAws_json1_1CreateReplicationInstanceCommand;
async function deserializeAws_json1_1CreateReplicationInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientResourceCapacityFault":
        case "com.amazonaws.dms#InsufficientResourceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "com.amazonaws.dms#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.dms#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.dms#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateReplicationSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReplicationSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateReplicationSubnetGroupCommand = deserializeAws_json1_1CreateReplicationSubnetGroupCommand;
async function deserializeAws_json1_1CreateReplicationSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "com.amazonaws.dms#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.dms#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateReplicationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReplicationTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateReplicationTaskCommand = deserializeAws_json1_1CreateReplicationTaskCommand;
async function deserializeAws_json1_1CreateReplicationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCertificateCommand = deserializeAws_json1_1DeleteCertificateCommand;
async function deserializeAws_json1_1DeleteCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
async function deserializeAws_json1_1DeleteConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEndpointCommand = deserializeAws_json1_1DeleteEndpointCommand;
async function deserializeAws_json1_1DeleteEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEventSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEventSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEventSubscriptionCommand = deserializeAws_json1_1DeleteEventSubscriptionCommand;
async function deserializeAws_json1_1DeleteEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteReplicationInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReplicationInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReplicationInstanceCommand = deserializeAws_json1_1DeleteReplicationInstanceCommand;
async function deserializeAws_json1_1DeleteReplicationInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteReplicationSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReplicationSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = deserializeAws_json1_1DeleteReplicationSubnetGroupCommand;
async function deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteReplicationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReplicationTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReplicationTaskCommand = deserializeAws_json1_1DeleteReplicationTaskCommand;
async function deserializeAws_json1_1DeleteReplicationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAccountAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAccountAttributesCommand = deserializeAws_json1_1DescribeAccountAttributesCommand;
async function deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context) {
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
async function deserializeAws_json1_1DescribeCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCertificatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCertificatesCommand = deserializeAws_json1_1DescribeCertificatesCommand;
async function deserializeAws_json1_1DescribeCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConnectionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConnectionsCommand = deserializeAws_json1_1DescribeConnectionsCommand;
async function deserializeAws_json1_1DescribeConnectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEndpointTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointTypesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointTypesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointTypesCommand = deserializeAws_json1_1DescribeEndpointTypesCommand;
async function deserializeAws_json1_1DescribeEndpointTypesCommandError(output, context) {
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
async function deserializeAws_json1_1DescribeEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointsCommand = deserializeAws_json1_1DescribeEndpointsCommand;
async function deserializeAws_json1_1DescribeEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEventCategoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventCategoriesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventCategoriesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventCategoriesCommand = deserializeAws_json1_1DescribeEventCategoriesCommand;
async function deserializeAws_json1_1DescribeEventCategoriesCommandError(output, context) {
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
async function deserializeAws_json1_1DescribeEventSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventSubscriptionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventSubscriptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventSubscriptionsCommand = deserializeAws_json1_1DescribeEventSubscriptionsCommand;
async function deserializeAws_json1_1DescribeEventSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrderableReplicationInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand;
async function deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError(output, context) {
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
async function deserializeAws_json1_1DescribePendingMaintenanceActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePendingMaintenanceActionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePendingMaintenanceActionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = deserializeAws_json1_1DescribePendingMaintenanceActionsCommand;
async function deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeRefreshSchemasStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRefreshSchemasStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRefreshSchemasStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = deserializeAws_json1_1DescribeRefreshSchemasStatusCommand;
async function deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReplicationInstanceTaskLogsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand;
async function deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReplicationInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReplicationInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReplicationInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReplicationInstancesCommand = deserializeAws_json1_1DescribeReplicationInstancesCommand;
async function deserializeAws_json1_1DescribeReplicationInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReplicationSubnetGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand;
async function deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReplicationTaskAssessmentResultsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand;
async function deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeReplicationTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReplicationTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReplicationTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReplicationTasksCommand = deserializeAws_json1_1DescribeReplicationTasksCommand;
async function deserializeAws_json1_1DescribeReplicationTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSchemasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSchemasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSchemasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSchemasCommand = deserializeAws_json1_1DescribeSchemasCommand;
async function deserializeAws_json1_1DescribeSchemasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTableStatisticsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTableStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTableStatisticsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTableStatisticsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTableStatisticsCommand = deserializeAws_json1_1DescribeTableStatisticsCommand;
async function deserializeAws_json1_1DescribeTableStatisticsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ImportCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportCertificateCommand = deserializeAws_json1_1ImportCertificateCommand;
async function deserializeAws_json1_1ImportCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidCertificateFault":
        case "com.amazonaws.dms#InvalidCertificateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCertificateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyEndpointCommand = deserializeAws_json1_1ModifyEndpointCommand;
async function deserializeAws_json1_1ModifyEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyEventSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyEventSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyEventSubscriptionCommand = deserializeAws_json1_1ModifyEventSubscriptionCommand;
async function deserializeAws_json1_1ModifyEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "KMSAccessDeniedFault":
        case "com.amazonaws.dms#KMSAccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledFault":
        case "com.amazonaws.dms#KMSDisabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateFault":
        case "com.amazonaws.dms#KMSInvalidStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundFault":
        case "com.amazonaws.dms#KMSNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingFault":
        case "com.amazonaws.dms#KMSThrottlingFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.dms#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.dms#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyReplicationInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReplicationInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyReplicationInstanceCommand = deserializeAws_json1_1ModifyReplicationInstanceCommand;
async function deserializeAws_json1_1ModifyReplicationInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientResourceCapacityFault":
        case "com.amazonaws.dms#InsufficientResourceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.dms#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UpgradeDependencyFailureFault":
        case "com.amazonaws.dms#UpgradeDependencyFailureFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UpgradeDependencyFailureFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyReplicationSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationSubnetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReplicationSubnetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = deserializeAws_json1_1ModifyReplicationSubnetGroupCommand;
async function deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "com.amazonaws.dms#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.dms#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetAlreadyInUse":
        case "com.amazonaws.dms#SubnetAlreadyInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubnetAlreadyInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyReplicationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReplicationTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyReplicationTaskCommand = deserializeAws_json1_1ModifyReplicationTaskCommand;
async function deserializeAws_json1_1ModifyReplicationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.dms#ResourceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RebootReplicationInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootReplicationInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootReplicationInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootReplicationInstanceCommand = deserializeAws_json1_1RebootReplicationInstanceCommand;
async function deserializeAws_json1_1RebootReplicationInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RefreshSchemasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RefreshSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshSchemasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RefreshSchemasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RefreshSchemasCommand = deserializeAws_json1_1RefreshSchemasCommand;
async function deserializeAws_json1_1RefreshSchemasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ReloadTablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ReloadTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReloadTablesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReloadTablesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ReloadTablesCommand = deserializeAws_json1_1ReloadTablesCommand;
async function deserializeAws_json1_1ReloadTablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsFromResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
async function deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartReplicationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplicationTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartReplicationTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartReplicationTaskCommand = deserializeAws_json1_1StartReplicationTaskCommand;
async function deserializeAws_json1_1StartReplicationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.dms#AccessDeniedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartReplicationTaskAssessmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartReplicationTaskAssessmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplicationTaskAssessmentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartReplicationTaskAssessmentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartReplicationTaskAssessmentCommand = deserializeAws_json1_1StartReplicationTaskAssessmentCommand;
async function deserializeAws_json1_1StartReplicationTaskAssessmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopReplicationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopReplicationTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopReplicationTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopReplicationTaskCommand = deserializeAws_json1_1StopReplicationTaskCommand;
async function deserializeAws_json1_1StopReplicationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TestConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TestConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TestConnectionCommand = deserializeAws_json1_1TestConnectionCommand;
async function deserializeAws_json1_1TestConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.dms#InvalidResourceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.dms#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.dms#ResourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.dms#ResourceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AccessDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedFault(body, context);
    const contents = Object.assign({ name: "AccessDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientResourceCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientResourceCapacityFault(body, context);
    const contents = Object.assign({ name: "InsufficientResourceCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCertificateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCertificateFault(body, context);
    const contents = Object.assign({ name: "InvalidCertificateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateFault(body, context);
    const contents = Object.assign({ name: "InvalidResourceStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
    const contents = Object.assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSAccessDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSAccessDeniedFault(body, context);
    const contents = Object.assign({ name: "KMSAccessDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSDisabledFault(body, context);
    const contents = Object.assign({ name: "KMSDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateFault(body, context);
    const contents = Object.assign({ name: "KMSInvalidStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSKeyNotAccessibleFault(body, context);
    const contents = Object.assign({ name: "KMSKeyNotAccessibleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSNotFoundFault(body, context);
    const contents = Object.assign({ name: "KMSNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSThrottlingFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSThrottlingFault(body, context);
    const contents = Object.assign({ name: "KMSThrottlingFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs(body, context);
    const contents = Object.assign({ name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundFault(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceQuotaExceededFault(body, context);
    const contents = Object.assign({ name: "ResourceQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SNSInvalidTopicFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SNSInvalidTopicFault(body, context);
    const contents = Object.assign({ name: "SNSInvalidTopicFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SNSNoAuthorizationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SNSNoAuthorizationFault(body, context);
    const contents = Object.assign({ name: "SNSNoAuthorizationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1StorageQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StorageQuotaExceededFault(body, context);
    const contents = Object.assign({ name: "StorageQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubnetAlreadyInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetAlreadyInUse(body, context);
    const contents = Object.assign({ name: "SubnetAlreadyInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UpgradeDependencyFailureFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UpgradeDependencyFailureFault(body, context);
    const contents = Object.assign({ name: "UpgradeDependencyFailureFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsToResourceMessage = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplyPendingMaintenanceActionMessage = (input, context) => {
    const bodyParams = {};
    if (input.ApplyAction !== undefined) {
        bodyParams["ApplyAction"] = input.ApplyAction;
    }
    if (input.OptInType !== undefined) {
        bodyParams["OptInType"] = input.OptInType;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndpointMessage = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.DmsTransferSettings !== undefined) {
        bodyParams["DmsTransferSettings"] = serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context);
    }
    if (input.DynamoDbSettings !== undefined) {
        bodyParams["DynamoDbSettings"] = serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context);
    }
    if (input.ElasticsearchSettings !== undefined) {
        bodyParams["ElasticsearchSettings"] = serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context);
    }
    if (input.EndpointIdentifier !== undefined) {
        bodyParams["EndpointIdentifier"] = input.EndpointIdentifier;
    }
    if (input.EndpointType !== undefined) {
        bodyParams["EndpointType"] = input.EndpointType;
    }
    if (input.EngineName !== undefined) {
        bodyParams["EngineName"] = input.EngineName;
    }
    if (input.ExternalTableDefinition !== undefined) {
        bodyParams["ExternalTableDefinition"] = input.ExternalTableDefinition;
    }
    if (input.ExtraConnectionAttributes !== undefined) {
        bodyParams["ExtraConnectionAttributes"] = input.ExtraConnectionAttributes;
    }
    if (input.KinesisSettings !== undefined) {
        bodyParams["KinesisSettings"] = serializeAws_json1_1KinesisSettings(input.KinesisSettings, context);
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MongoDbSettings !== undefined) {
        bodyParams["MongoDbSettings"] = serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Port !== undefined) {
        bodyParams["Port"] = input.Port;
    }
    if (input.RedshiftSettings !== undefined) {
        bodyParams["RedshiftSettings"] = serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context);
    }
    if (input.S3Settings !== undefined) {
        bodyParams["S3Settings"] = serializeAws_json1_1S3Settings(input.S3Settings, context);
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    if (input.SslMode !== undefined) {
        bodyParams["SslMode"] = input.SslMode;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEventSubscriptionMessage = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.EventCategories !== undefined) {
        bodyParams["EventCategories"] = serializeAws_json1_1EventCategoriesList(input.EventCategories, context);
    }
    if (input.SnsTopicArn !== undefined) {
        bodyParams["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceIds !== undefined) {
        bodyParams["SourceIds"] = serializeAws_json1_1SourceIdsList(input.SourceIds, context);
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    if (input.SubscriptionName !== undefined) {
        bodyParams["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateReplicationInstanceMessage = (input, context) => {
    const bodyParams = {};
    if (input.AllocatedStorage !== undefined) {
        bodyParams["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        bodyParams["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.DnsNameServers !== undefined) {
        bodyParams["DnsNameServers"] = input.DnsNameServers;
    }
    if (input.EngineVersion !== undefined) {
        bodyParams["EngineVersion"] = input.EngineVersion;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MultiAZ !== undefined) {
        bodyParams["MultiAZ"] = input.MultiAZ;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PubliclyAccessible !== undefined) {
        bodyParams["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.ReplicationInstanceClass !== undefined) {
        bodyParams["ReplicationInstanceClass"] = input.ReplicationInstanceClass;
    }
    if (input.ReplicationInstanceIdentifier !== undefined) {
        bodyParams["ReplicationInstanceIdentifier"] =
            input.ReplicationInstanceIdentifier;
    }
    if (input.ReplicationSubnetGroupIdentifier !== undefined) {
        bodyParams["ReplicationSubnetGroupIdentifier"] =
            input.ReplicationSubnetGroupIdentifier;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        bodyParams["VpcSecurityGroupIds"] = serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateReplicationSubnetGroupMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationSubnetGroupDescription !== undefined) {
        bodyParams["ReplicationSubnetGroupDescription"] =
            input.ReplicationSubnetGroupDescription;
    }
    if (input.ReplicationSubnetGroupIdentifier !== undefined) {
        bodyParams["ReplicationSubnetGroupIdentifier"] =
            input.ReplicationSubnetGroupIdentifier;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateReplicationTaskMessage = (input, context) => {
    const bodyParams = {};
    if (input.CdcStartPosition !== undefined) {
        bodyParams["CdcStartPosition"] = input.CdcStartPosition;
    }
    if (input.CdcStartTime !== undefined) {
        bodyParams["CdcStartTime"] = Math.round(input.CdcStartTime.getTime() / 1000);
    }
    if (input.CdcStopPosition !== undefined) {
        bodyParams["CdcStopPosition"] = input.CdcStopPosition;
    }
    if (input.MigrationType !== undefined) {
        bodyParams["MigrationType"] = input.MigrationType;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    if (input.ReplicationTaskIdentifier !== undefined) {
        bodyParams["ReplicationTaskIdentifier"] = input.ReplicationTaskIdentifier;
    }
    if (input.ReplicationTaskSettings !== undefined) {
        bodyParams["ReplicationTaskSettings"] = input.ReplicationTaskSettings;
    }
    if (input.SourceEndpointArn !== undefined) {
        bodyParams["SourceEndpointArn"] = input.SourceEndpointArn;
    }
    if (input.TableMappings !== undefined) {
        bodyParams["TableMappings"] = input.TableMappings;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TargetEndpointArn !== undefined) {
        bodyParams["TargetEndpointArn"] = input.TargetEndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCertificateMessage = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConnectionMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEndpointMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEventSubscriptionMessage = (input, context) => {
    const bodyParams = {};
    if (input.SubscriptionName !== undefined) {
        bodyParams["SubscriptionName"] = input.SubscriptionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReplicationInstanceMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReplicationSubnetGroupMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationSubnetGroupIdentifier !== undefined) {
        bodyParams["ReplicationSubnetGroupIdentifier"] =
            input.ReplicationSubnetGroupIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReplicationTaskMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAccountAttributesMessage = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeCertificatesMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConnectionsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointTypesMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventCategoriesMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventSubscriptionsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.SubscriptionName !== undefined) {
        bodyParams["SubscriptionName"] = input.SubscriptionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Duration !== undefined) {
        bodyParams["Duration"] = input.Duration;
    }
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.EventCategories !== undefined) {
        bodyParams["EventCategories"] = serializeAws_json1_1EventCategoriesList(input.EventCategories, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.SourceIdentifier !== undefined) {
        bodyParams["SourceIdentifier"] = input.SourceIdentifier;
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrderableReplicationInstancesMessage = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePendingMaintenanceActionsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRefreshSchemasStatusMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReplicationInstancesMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReplicationSubnetGroupsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeReplicationTasksMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.WithoutSettings !== undefined) {
        bodyParams["WithoutSettings"] = input.WithoutSettings;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSchemasMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTableStatisticsMessage = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        bodyParams["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DmsTransferSettings = (input, context) => {
    const bodyParams = {};
    if (input.BucketName !== undefined) {
        bodyParams["BucketName"] = input.BucketName;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DynamoDbSettings = (input, context) => {
    const bodyParams = {};
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ElasticsearchSettings = (input, context) => {
    const bodyParams = {};
    if (input.EndpointUri !== undefined) {
        bodyParams["EndpointUri"] = input.EndpointUri;
    }
    if (input.ErrorRetryDuration !== undefined) {
        bodyParams["ErrorRetryDuration"] = input.ErrorRetryDuration;
    }
    if (input.FullLoadErrorPercentage !== undefined) {
        bodyParams["FullLoadErrorPercentage"] = input.FullLoadErrorPercentage;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EventCategoriesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ImportCertificateMessage = (input, context) => {
    const bodyParams = {};
    if (input.CertificateIdentifier !== undefined) {
        bodyParams["CertificateIdentifier"] = input.CertificateIdentifier;
    }
    if (input.CertificatePem !== undefined) {
        bodyParams["CertificatePem"] = input.CertificatePem;
    }
    if (input.CertificateWallet !== undefined) {
        bodyParams["CertificateWallet"] = Buffer.from(input.CertificateWallet).toString("utf-8");
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
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
const serializeAws_json1_1KinesisSettings = (input, context) => {
    const bodyParams = {};
    if (input.MessageFormat !== undefined) {
        bodyParams["MessageFormat"] = input.MessageFormat;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    if (input.StreamArn !== undefined) {
        bodyParams["StreamArn"] = input.StreamArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceMessage = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyEndpointMessage = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.DmsTransferSettings !== undefined) {
        bodyParams["DmsTransferSettings"] = serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context);
    }
    if (input.DynamoDbSettings !== undefined) {
        bodyParams["DynamoDbSettings"] = serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context);
    }
    if (input.ElasticsearchSettings !== undefined) {
        bodyParams["ElasticsearchSettings"] = serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context);
    }
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.EndpointIdentifier !== undefined) {
        bodyParams["EndpointIdentifier"] = input.EndpointIdentifier;
    }
    if (input.EndpointType !== undefined) {
        bodyParams["EndpointType"] = input.EndpointType;
    }
    if (input.EngineName !== undefined) {
        bodyParams["EngineName"] = input.EngineName;
    }
    if (input.ExternalTableDefinition !== undefined) {
        bodyParams["ExternalTableDefinition"] = input.ExternalTableDefinition;
    }
    if (input.ExtraConnectionAttributes !== undefined) {
        bodyParams["ExtraConnectionAttributes"] = input.ExtraConnectionAttributes;
    }
    if (input.KinesisSettings !== undefined) {
        bodyParams["KinesisSettings"] = serializeAws_json1_1KinesisSettings(input.KinesisSettings, context);
    }
    if (input.MongoDbSettings !== undefined) {
        bodyParams["MongoDbSettings"] = serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Port !== undefined) {
        bodyParams["Port"] = input.Port;
    }
    if (input.RedshiftSettings !== undefined) {
        bodyParams["RedshiftSettings"] = serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context);
    }
    if (input.S3Settings !== undefined) {
        bodyParams["S3Settings"] = serializeAws_json1_1S3Settings(input.S3Settings, context);
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    if (input.SslMode !== undefined) {
        bodyParams["SslMode"] = input.SslMode;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyEventSubscriptionMessage = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.EventCategories !== undefined) {
        bodyParams["EventCategories"] = serializeAws_json1_1EventCategoriesList(input.EventCategories, context);
    }
    if (input.SnsTopicArn !== undefined) {
        bodyParams["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    if (input.SubscriptionName !== undefined) {
        bodyParams["SubscriptionName"] = input.SubscriptionName;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyReplicationInstanceMessage = (input, context) => {
    const bodyParams = {};
    if (input.AllocatedStorage !== undefined) {
        bodyParams["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.AllowMajorVersionUpgrade !== undefined) {
        bodyParams["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    if (input.ApplyImmediately !== undefined) {
        bodyParams["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        bodyParams["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.EngineVersion !== undefined) {
        bodyParams["EngineVersion"] = input.EngineVersion;
    }
    if (input.MultiAZ !== undefined) {
        bodyParams["MultiAZ"] = input.MultiAZ;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    if (input.ReplicationInstanceClass !== undefined) {
        bodyParams["ReplicationInstanceClass"] = input.ReplicationInstanceClass;
    }
    if (input.ReplicationInstanceIdentifier !== undefined) {
        bodyParams["ReplicationInstanceIdentifier"] =
            input.ReplicationInstanceIdentifier;
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        bodyParams["VpcSecurityGroupIds"] = serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyReplicationSubnetGroupMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationSubnetGroupDescription !== undefined) {
        bodyParams["ReplicationSubnetGroupDescription"] =
            input.ReplicationSubnetGroupDescription;
    }
    if (input.ReplicationSubnetGroupIdentifier !== undefined) {
        bodyParams["ReplicationSubnetGroupIdentifier"] =
            input.ReplicationSubnetGroupIdentifier;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyReplicationTaskMessage = (input, context) => {
    const bodyParams = {};
    if (input.CdcStartPosition !== undefined) {
        bodyParams["CdcStartPosition"] = input.CdcStartPosition;
    }
    if (input.CdcStartTime !== undefined) {
        bodyParams["CdcStartTime"] = Math.round(input.CdcStartTime.getTime() / 1000);
    }
    if (input.CdcStopPosition !== undefined) {
        bodyParams["CdcStopPosition"] = input.CdcStopPosition;
    }
    if (input.MigrationType !== undefined) {
        bodyParams["MigrationType"] = input.MigrationType;
    }
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    if (input.ReplicationTaskIdentifier !== undefined) {
        bodyParams["ReplicationTaskIdentifier"] = input.ReplicationTaskIdentifier;
    }
    if (input.ReplicationTaskSettings !== undefined) {
        bodyParams["ReplicationTaskSettings"] = input.ReplicationTaskSettings;
    }
    if (input.TableMappings !== undefined) {
        bodyParams["TableMappings"] = input.TableMappings;
    }
    return bodyParams;
};
const serializeAws_json1_1MongoDbSettings = (input, context) => {
    const bodyParams = {};
    if (input.AuthMechanism !== undefined) {
        bodyParams["AuthMechanism"] = input.AuthMechanism;
    }
    if (input.AuthSource !== undefined) {
        bodyParams["AuthSource"] = input.AuthSource;
    }
    if (input.AuthType !== undefined) {
        bodyParams["AuthType"] = input.AuthType;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.DocsToInvestigate !== undefined) {
        bodyParams["DocsToInvestigate"] = input.DocsToInvestigate;
    }
    if (input.ExtractDocId !== undefined) {
        bodyParams["ExtractDocId"] = input.ExtractDocId;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.NestingLevel !== undefined) {
        bodyParams["NestingLevel"] = input.NestingLevel;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Port !== undefined) {
        bodyParams["Port"] = input.Port;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1RebootReplicationInstanceMessage = (input, context) => {
    const bodyParams = {};
    if (input.ForceFailover !== undefined) {
        bodyParams["ForceFailover"] = input.ForceFailover;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftSettings = (input, context) => {
    const bodyParams = {};
    if (input.AcceptAnyDate !== undefined) {
        bodyParams["AcceptAnyDate"] = input.AcceptAnyDate;
    }
    if (input.AfterConnectScript !== undefined) {
        bodyParams["AfterConnectScript"] = input.AfterConnectScript;
    }
    if (input.BucketFolder !== undefined) {
        bodyParams["BucketFolder"] = input.BucketFolder;
    }
    if (input.BucketName !== undefined) {
        bodyParams["BucketName"] = input.BucketName;
    }
    if (input.ConnectionTimeout !== undefined) {
        bodyParams["ConnectionTimeout"] = input.ConnectionTimeout;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.DateFormat !== undefined) {
        bodyParams["DateFormat"] = input.DateFormat;
    }
    if (input.EmptyAsNull !== undefined) {
        bodyParams["EmptyAsNull"] = input.EmptyAsNull;
    }
    if (input.EncryptionMode !== undefined) {
        bodyParams["EncryptionMode"] = input.EncryptionMode;
    }
    if (input.FileTransferUploadStreams !== undefined) {
        bodyParams["FileTransferUploadStreams"] = input.FileTransferUploadStreams;
    }
    if (input.LoadTimeout !== undefined) {
        bodyParams["LoadTimeout"] = input.LoadTimeout;
    }
    if (input.MaxFileSize !== undefined) {
        bodyParams["MaxFileSize"] = input.MaxFileSize;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Port !== undefined) {
        bodyParams["Port"] = input.Port;
    }
    if (input.RemoveQuotes !== undefined) {
        bodyParams["RemoveQuotes"] = input.RemoveQuotes;
    }
    if (input.ReplaceChars !== undefined) {
        bodyParams["ReplaceChars"] = input.ReplaceChars;
    }
    if (input.ReplaceInvalidChars !== undefined) {
        bodyParams["ReplaceInvalidChars"] = input.ReplaceInvalidChars;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.ServerSideEncryptionKmsKeyId !== undefined) {
        bodyParams["ServerSideEncryptionKmsKeyId"] =
            input.ServerSideEncryptionKmsKeyId;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    if (input.TimeFormat !== undefined) {
        bodyParams["TimeFormat"] = input.TimeFormat;
    }
    if (input.TrimBlanks !== undefined) {
        bodyParams["TrimBlanks"] = input.TrimBlanks;
    }
    if (input.TruncateColumns !== undefined) {
        bodyParams["TruncateColumns"] = input.TruncateColumns;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    if (input.WriteBufferSize !== undefined) {
        bodyParams["WriteBufferSize"] = input.WriteBufferSize;
    }
    return bodyParams;
};
const serializeAws_json1_1RefreshSchemasMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ReloadTablesMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReloadOption !== undefined) {
        bodyParams["ReloadOption"] = input.ReloadOption;
    }
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    if (input.TablesToReload !== undefined) {
        bodyParams["TablesToReload"] = serializeAws_json1_1TableListToReload(input.TablesToReload, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromResourceMessage = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1KeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Settings = (input, context) => {
    const bodyParams = {};
    if (input.BucketFolder !== undefined) {
        bodyParams["BucketFolder"] = input.BucketFolder;
    }
    if (input.BucketName !== undefined) {
        bodyParams["BucketName"] = input.BucketName;
    }
    if (input.CdcInsertsOnly !== undefined) {
        bodyParams["CdcInsertsOnly"] = input.CdcInsertsOnly;
    }
    if (input.CompressionType !== undefined) {
        bodyParams["CompressionType"] = input.CompressionType;
    }
    if (input.CsvDelimiter !== undefined) {
        bodyParams["CsvDelimiter"] = input.CsvDelimiter;
    }
    if (input.CsvRowDelimiter !== undefined) {
        bodyParams["CsvRowDelimiter"] = input.CsvRowDelimiter;
    }
    if (input.DataFormat !== undefined) {
        bodyParams["DataFormat"] = input.DataFormat;
    }
    if (input.DataPageSize !== undefined) {
        bodyParams["DataPageSize"] = input.DataPageSize;
    }
    if (input.DictPageSizeLimit !== undefined) {
        bodyParams["DictPageSizeLimit"] = input.DictPageSizeLimit;
    }
    if (input.EnableStatistics !== undefined) {
        bodyParams["EnableStatistics"] = input.EnableStatistics;
    }
    if (input.EncodingType !== undefined) {
        bodyParams["EncodingType"] = input.EncodingType;
    }
    if (input.EncryptionMode !== undefined) {
        bodyParams["EncryptionMode"] = input.EncryptionMode;
    }
    if (input.ExternalTableDefinition !== undefined) {
        bodyParams["ExternalTableDefinition"] = input.ExternalTableDefinition;
    }
    if (input.IncludeOpForFullLoad !== undefined) {
        bodyParams["IncludeOpForFullLoad"] = input.IncludeOpForFullLoad;
    }
    if (input.ParquetTimestampInMillisecond !== undefined) {
        bodyParams["ParquetTimestampInMillisecond"] =
            input.ParquetTimestampInMillisecond;
    }
    if (input.ParquetVersion !== undefined) {
        bodyParams["ParquetVersion"] = input.ParquetVersion;
    }
    if (input.RowGroupLength !== undefined) {
        bodyParams["RowGroupLength"] = input.RowGroupLength;
    }
    if (input.ServerSideEncryptionKmsKeyId !== undefined) {
        bodyParams["ServerSideEncryptionKmsKeyId"] =
            input.ServerSideEncryptionKmsKeyId;
    }
    if (input.ServiceAccessRoleArn !== undefined) {
        bodyParams["ServiceAccessRoleArn"] = input.ServiceAccessRoleArn;
    }
    if (input.TimestampColumnName !== undefined) {
        bodyParams["TimestampColumnName"] = input.TimestampColumnName;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceIdsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartReplicationTaskAssessmentMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartReplicationTaskMessage = (input, context) => {
    const bodyParams = {};
    if (input.CdcStartPosition !== undefined) {
        bodyParams["CdcStartPosition"] = input.CdcStartPosition;
    }
    if (input.CdcStartTime !== undefined) {
        bodyParams["CdcStartTime"] = Math.round(input.CdcStartTime.getTime() / 1000);
    }
    if (input.CdcStopPosition !== undefined) {
        bodyParams["CdcStopPosition"] = input.CdcStopPosition;
    }
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    if (input.StartReplicationTaskType !== undefined) {
        bodyParams["StartReplicationTaskType"] = input.StartReplicationTaskType;
    }
    return bodyParams;
};
const serializeAws_json1_1StopReplicationTaskMessage = (input, context) => {
    const bodyParams = {};
    if (input.ReplicationTaskArn !== undefined) {
        bodyParams["ReplicationTaskArn"] = input.ReplicationTaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SubnetIdentifierList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TableListToReload = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TableToReload(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TableToReload = (input, context) => {
    const bodyParams = {};
    if (input.SchemaName !== undefined) {
        bodyParams["SchemaName"] = input.SchemaName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
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
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TestConnectionMessage = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.ReplicationInstanceArn !== undefined) {
        bodyParams["ReplicationInstanceArn"] = input.ReplicationInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1VpcSecurityGroupIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedFault = (output, context) => {
    let contents = {
        __type: "AccessDeniedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientResourceCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientResourceCapacityFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCertificateFault = (output, context) => {
    let contents = {
        __type: "InvalidCertificateFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateFault = (output, context) => {
    let contents = {
        __type: "InvalidResourceStateFault",
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
const deserializeAws_json1_1KMSAccessDeniedFault = (output, context) => {
    let contents = {
        __type: "KMSAccessDeniedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSDisabledFault = (output, context) => {
    let contents = {
        __type: "KMSDisabledFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateFault = (output, context) => {
    let contents = {
        __type: "KMSInvalidStateFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSKeyNotAccessibleFault = (output, context) => {
    let contents = {
        __type: "KMSKeyNotAccessibleFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSNotFoundFault = (output, context) => {
    let contents = {
        __type: "KMSNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSThrottlingFault = (output, context) => {
    let contents = {
        __type: "KMSThrottlingFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs = (output, context) => {
    let contents = {
        __type: "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsFault",
        message: undefined,
        resourceArn: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundFault = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ResourceQuotaExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SNSInvalidTopicFault = (output, context) => {
    let contents = {
        __type: "SNSInvalidTopicFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SNSNoAuthorizationFault = (output, context) => {
    let contents = {
        __type: "SNSNoAuthorizationFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StorageQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "StorageQuotaExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubnetAlreadyInUse = (output, context) => {
    let contents = {
        __type: "SubnetAlreadyInUse",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpgradeDependencyFailureFault = (output, context) => {
    let contents = {
        __type: "UpgradeDependencyFailureFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AccountQuota = (output, context) => {
    let contents = {
        __type: "AccountQuota",
        AccountQuotaName: undefined,
        Max: undefined,
        Used: undefined
    };
    if (output.AccountQuotaName !== undefined &&
        output.AccountQuotaName !== null) {
        contents.AccountQuotaName = output.AccountQuotaName;
    }
    if (output.Max !== undefined && output.Max !== null) {
        contents.Max = output.Max;
    }
    if (output.Used !== undefined && output.Used !== null) {
        contents.Used = output.Used;
    }
    return contents;
};
const deserializeAws_json1_1AccountQuotaList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccountQuota(entry, context));
};
const deserializeAws_json1_1AddTagsToResourceResponse = (output, context) => {
    let contents = {
        __type: "AddTagsToResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1ApplyPendingMaintenanceActionResponse = (output, context) => {
    let contents = {
        __type: "ApplyPendingMaintenanceActionResponse",
        ResourcePendingMaintenanceActions: undefined
    };
    if (output.ResourcePendingMaintenanceActions !== undefined &&
        output.ResourcePendingMaintenanceActions !== null) {
        contents.ResourcePendingMaintenanceActions = deserializeAws_json1_1ResourcePendingMaintenanceActions(output.ResourcePendingMaintenanceActions, context);
    }
    return contents;
};
const deserializeAws_json1_1AvailabilityZone = (output, context) => {
    let contents = {
        __type: "AvailabilityZone",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1AvailabilityZonesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Certificate = (output, context) => {
    let contents = {
        __type: "Certificate",
        CertificateArn: undefined,
        CertificateCreationDate: undefined,
        CertificateIdentifier: undefined,
        CertificateOwner: undefined,
        CertificatePem: undefined,
        CertificateWallet: undefined,
        KeyLength: undefined,
        SigningAlgorithm: undefined,
        ValidFromDate: undefined,
        ValidToDate: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.CertificateCreationDate !== undefined &&
        output.CertificateCreationDate !== null) {
        contents.CertificateCreationDate = new Date(Math.round(output.CertificateCreationDate * 1000));
    }
    if (output.CertificateIdentifier !== undefined &&
        output.CertificateIdentifier !== null) {
        contents.CertificateIdentifier = output.CertificateIdentifier;
    }
    if (output.CertificateOwner !== undefined &&
        output.CertificateOwner !== null) {
        contents.CertificateOwner = output.CertificateOwner;
    }
    if (output.CertificatePem !== undefined && output.CertificatePem !== null) {
        contents.CertificatePem = output.CertificatePem;
    }
    if (output.CertificateWallet !== undefined &&
        output.CertificateWallet !== null) {
        contents.CertificateWallet = Uint8Array.from(output.CertificateWallet);
    }
    if (output.KeyLength !== undefined && output.KeyLength !== null) {
        contents.KeyLength = output.KeyLength;
    }
    if (output.SigningAlgorithm !== undefined &&
        output.SigningAlgorithm !== null) {
        contents.SigningAlgorithm = output.SigningAlgorithm;
    }
    if (output.ValidFromDate !== undefined && output.ValidFromDate !== null) {
        contents.ValidFromDate = new Date(Math.round(output.ValidFromDate * 1000));
    }
    if (output.ValidToDate !== undefined && output.ValidToDate !== null) {
        contents.ValidToDate = new Date(Math.round(output.ValidToDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_1CertificateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Certificate(entry, context));
};
const deserializeAws_json1_1Connection = (output, context) => {
    let contents = {
        __type: "Connection",
        EndpointArn: undefined,
        EndpointIdentifier: undefined,
        LastFailureMessage: undefined,
        ReplicationInstanceArn: undefined,
        ReplicationInstanceIdentifier: undefined,
        Status: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.EndpointIdentifier !== undefined &&
        output.EndpointIdentifier !== null) {
        contents.EndpointIdentifier = output.EndpointIdentifier;
    }
    if (output.LastFailureMessage !== undefined &&
        output.LastFailureMessage !== null) {
        contents.LastFailureMessage = output.LastFailureMessage;
    }
    if (output.ReplicationInstanceArn !== undefined &&
        output.ReplicationInstanceArn !== null) {
        contents.ReplicationInstanceArn = output.ReplicationInstanceArn;
    }
    if (output.ReplicationInstanceIdentifier !== undefined &&
        output.ReplicationInstanceIdentifier !== null) {
        contents.ReplicationInstanceIdentifier =
            output.ReplicationInstanceIdentifier;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Connection(entry, context));
};
const deserializeAws_json1_1CreateEndpointResponse = (output, context) => {
    let contents = {
        __type: "CreateEndpointResponse",
        Endpoint: undefined
    };
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = deserializeAws_json1_1Endpoint(output.Endpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateEventSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "CreateEventSubscriptionResponse",
        EventSubscription: undefined
    };
    if (output.EventSubscription !== undefined &&
        output.EventSubscription !== null) {
        contents.EventSubscription = deserializeAws_json1_1EventSubscription(output.EventSubscription, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateReplicationInstanceResponse = (output, context) => {
    let contents = {
        __type: "CreateReplicationInstanceResponse",
        ReplicationInstance: undefined
    };
    if (output.ReplicationInstance !== undefined &&
        output.ReplicationInstance !== null) {
        contents.ReplicationInstance = deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateReplicationSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateReplicationSubnetGroupResponse",
        ReplicationSubnetGroup: undefined
    };
    if (output.ReplicationSubnetGroup !== undefined &&
        output.ReplicationSubnetGroup !== null) {
        contents.ReplicationSubnetGroup = deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateReplicationTaskResponse = (output, context) => {
    let contents = {
        __type: "CreateReplicationTaskResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteCertificateResponse = (output, context) => {
    let contents = {
        __type: "DeleteCertificateResponse",
        Certificate: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = deserializeAws_json1_1Certificate(output.Certificate, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteConnectionResponse = (output, context) => {
    let contents = {
        __type: "DeleteConnectionResponse",
        Connection: undefined
    };
    if (output.Connection !== undefined && output.Connection !== null) {
        contents.Connection = deserializeAws_json1_1Connection(output.Connection, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteEndpointResponse = (output, context) => {
    let contents = {
        __type: "DeleteEndpointResponse",
        Endpoint: undefined
    };
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = deserializeAws_json1_1Endpoint(output.Endpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteEventSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "DeleteEventSubscriptionResponse",
        EventSubscription: undefined
    };
    if (output.EventSubscription !== undefined &&
        output.EventSubscription !== null) {
        contents.EventSubscription = deserializeAws_json1_1EventSubscription(output.EventSubscription, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteReplicationInstanceResponse = (output, context) => {
    let contents = {
        __type: "DeleteReplicationInstanceResponse",
        ReplicationInstance: undefined
    };
    if (output.ReplicationInstance !== undefined &&
        output.ReplicationInstance !== null) {
        contents.ReplicationInstance = deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteReplicationSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteReplicationSubnetGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteReplicationTaskResponse = (output, context) => {
    let contents = {
        __type: "DeleteReplicationTaskResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAccountAttributesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAccountAttributesResponse",
        AccountQuotas: undefined,
        UniqueAccountIdentifier: undefined
    };
    if (output.AccountQuotas !== undefined && output.AccountQuotas !== null) {
        contents.AccountQuotas = deserializeAws_json1_1AccountQuotaList(output.AccountQuotas, context);
    }
    if (output.UniqueAccountIdentifier !== undefined &&
        output.UniqueAccountIdentifier !== null) {
        contents.UniqueAccountIdentifier = output.UniqueAccountIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCertificatesResponse = (output, context) => {
    let contents = {
        __type: "DescribeCertificatesResponse",
        Certificates: undefined,
        Marker: undefined
    };
    if (output.Certificates !== undefined && output.Certificates !== null) {
        contents.Certificates = deserializeAws_json1_1CertificateList(output.Certificates, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConnectionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeConnectionsResponse",
        Connections: undefined,
        Marker: undefined
    };
    if (output.Connections !== undefined && output.Connections !== null) {
        contents.Connections = deserializeAws_json1_1ConnectionList(output.Connections, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointTypesResponse = (output, context) => {
    let contents = {
        __type: "DescribeEndpointTypesResponse",
        Marker: undefined,
        SupportedEndpointTypes: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.SupportedEndpointTypes !== undefined &&
        output.SupportedEndpointTypes !== null) {
        contents.SupportedEndpointTypes = deserializeAws_json1_1SupportedEndpointTypeList(output.SupportedEndpointTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEndpointsResponse",
        Endpoints: undefined,
        Marker: undefined
    };
    if (output.Endpoints !== undefined && output.Endpoints !== null) {
        contents.Endpoints = deserializeAws_json1_1EndpointList(output.Endpoints, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventCategoriesResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventCategoriesResponse",
        EventCategoryGroupList: undefined
    };
    if (output.EventCategoryGroupList !== undefined &&
        output.EventCategoryGroupList !== null) {
        contents.EventCategoryGroupList = deserializeAws_json1_1EventCategoryGroupList(output.EventCategoryGroupList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventSubscriptionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventSubscriptionsResponse",
        EventSubscriptionsList: undefined,
        Marker: undefined
    };
    if (output.EventSubscriptionsList !== undefined &&
        output.EventSubscriptionsList !== null) {
        contents.EventSubscriptionsList = deserializeAws_json1_1EventSubscriptionsList(output.EventSubscriptionsList, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventsResponse",
        Events: undefined,
        Marker: undefined
    };
    if (output.Events !== undefined && output.Events !== null) {
        contents.Events = deserializeAws_json1_1EventList(output.Events, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrderableReplicationInstancesResponse",
        Marker: undefined,
        OrderableReplicationInstances: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.OrderableReplicationInstances !== undefined &&
        output.OrderableReplicationInstances !== null) {
        contents.OrderableReplicationInstances = deserializeAws_json1_1OrderableReplicationInstanceList(output.OrderableReplicationInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePendingMaintenanceActionsResponse = (output, context) => {
    let contents = {
        __type: "DescribePendingMaintenanceActionsResponse",
        Marker: undefined,
        PendingMaintenanceActions: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.PendingMaintenanceActions !== undefined &&
        output.PendingMaintenanceActions !== null) {
        contents.PendingMaintenanceActions = deserializeAws_json1_1PendingMaintenanceActions(output.PendingMaintenanceActions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRefreshSchemasStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeRefreshSchemasStatusResponse",
        RefreshSchemasStatus: undefined
    };
    if (output.RefreshSchemasStatus !== undefined &&
        output.RefreshSchemasStatus !== null) {
        contents.RefreshSchemasStatus = deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse = (output, context) => {
    let contents = {
        __type: "DescribeReplicationInstanceTaskLogsResponse",
        Marker: undefined,
        ReplicationInstanceArn: undefined,
        ReplicationInstanceTaskLogs: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationInstanceArn !== undefined &&
        output.ReplicationInstanceArn !== null) {
        contents.ReplicationInstanceArn = output.ReplicationInstanceArn;
    }
    if (output.ReplicationInstanceTaskLogs !== undefined &&
        output.ReplicationInstanceTaskLogs !== null) {
        contents.ReplicationInstanceTaskLogs = deserializeAws_json1_1ReplicationInstanceTaskLogsList(output.ReplicationInstanceTaskLogs, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeReplicationInstancesResponse = (output, context) => {
    let contents = {
        __type: "DescribeReplicationInstancesResponse",
        Marker: undefined,
        ReplicationInstances: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationInstances !== undefined &&
        output.ReplicationInstances !== null) {
        contents.ReplicationInstances = deserializeAws_json1_1ReplicationInstanceList(output.ReplicationInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeReplicationSubnetGroupsResponse",
        Marker: undefined,
        ReplicationSubnetGroups: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationSubnetGroups !== undefined &&
        output.ReplicationSubnetGroups !== null) {
        contents.ReplicationSubnetGroups = deserializeAws_json1_1ReplicationSubnetGroups(output.ReplicationSubnetGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse = (output, context) => {
    let contents = {
        __type: "DescribeReplicationTaskAssessmentResultsResponse",
        BucketName: undefined,
        Marker: undefined,
        ReplicationTaskAssessmentResults: undefined
    };
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationTaskAssessmentResults !== undefined &&
        output.ReplicationTaskAssessmentResults !== null) {
        contents.ReplicationTaskAssessmentResults = deserializeAws_json1_1ReplicationTaskAssessmentResultList(output.ReplicationTaskAssessmentResults, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeReplicationTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeReplicationTasksResponse",
        Marker: undefined,
        ReplicationTasks: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationTasks !== undefined &&
        output.ReplicationTasks !== null) {
        contents.ReplicationTasks = deserializeAws_json1_1ReplicationTaskList(output.ReplicationTasks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSchemasResponse = (output, context) => {
    let contents = {
        __type: "DescribeSchemasResponse",
        Marker: undefined,
        Schemas: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.Schemas !== undefined && output.Schemas !== null) {
        contents.Schemas = deserializeAws_json1_1SchemaList(output.Schemas, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTableStatisticsResponse = (output, context) => {
    let contents = {
        __type: "DescribeTableStatisticsResponse",
        Marker: undefined,
        ReplicationTaskArn: undefined,
        TableStatistics: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.ReplicationTaskArn !== undefined &&
        output.ReplicationTaskArn !== null) {
        contents.ReplicationTaskArn = output.ReplicationTaskArn;
    }
    if (output.TableStatistics !== undefined && output.TableStatistics !== null) {
        contents.TableStatistics = deserializeAws_json1_1TableStatisticsList(output.TableStatistics, context);
    }
    return contents;
};
const deserializeAws_json1_1DmsTransferSettings = (output, context) => {
    let contents = {
        __type: "DmsTransferSettings",
        BucketName: undefined,
        ServiceAccessRoleArn: undefined
    };
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1DynamoDbSettings = (output, context) => {
    let contents = {
        __type: "DynamoDbSettings",
        ServiceAccessRoleArn: undefined
    };
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1ElasticsearchSettings = (output, context) => {
    let contents = {
        __type: "ElasticsearchSettings",
        EndpointUri: undefined,
        ErrorRetryDuration: undefined,
        FullLoadErrorPercentage: undefined,
        ServiceAccessRoleArn: undefined
    };
    if (output.EndpointUri !== undefined && output.EndpointUri !== null) {
        contents.EndpointUri = output.EndpointUri;
    }
    if (output.ErrorRetryDuration !== undefined &&
        output.ErrorRetryDuration !== null) {
        contents.ErrorRetryDuration = output.ErrorRetryDuration;
    }
    if (output.FullLoadErrorPercentage !== undefined &&
        output.FullLoadErrorPercentage !== null) {
        contents.FullLoadErrorPercentage = output.FullLoadErrorPercentage;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1Endpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        CertificateArn: undefined,
        DatabaseName: undefined,
        DmsTransferSettings: undefined,
        DynamoDbSettings: undefined,
        ElasticsearchSettings: undefined,
        EndpointArn: undefined,
        EndpointIdentifier: undefined,
        EndpointType: undefined,
        EngineDisplayName: undefined,
        EngineName: undefined,
        ExternalId: undefined,
        ExternalTableDefinition: undefined,
        ExtraConnectionAttributes: undefined,
        KinesisSettings: undefined,
        KmsKeyId: undefined,
        MongoDbSettings: undefined,
        Port: undefined,
        RedshiftSettings: undefined,
        S3Settings: undefined,
        ServerName: undefined,
        ServiceAccessRoleArn: undefined,
        SslMode: undefined,
        Status: undefined,
        Username: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.DmsTransferSettings !== undefined &&
        output.DmsTransferSettings !== null) {
        contents.DmsTransferSettings = deserializeAws_json1_1DmsTransferSettings(output.DmsTransferSettings, context);
    }
    if (output.DynamoDbSettings !== undefined &&
        output.DynamoDbSettings !== null) {
        contents.DynamoDbSettings = deserializeAws_json1_1DynamoDbSettings(output.DynamoDbSettings, context);
    }
    if (output.ElasticsearchSettings !== undefined &&
        output.ElasticsearchSettings !== null) {
        contents.ElasticsearchSettings = deserializeAws_json1_1ElasticsearchSettings(output.ElasticsearchSettings, context);
    }
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.EndpointIdentifier !== undefined &&
        output.EndpointIdentifier !== null) {
        contents.EndpointIdentifier = output.EndpointIdentifier;
    }
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.EngineDisplayName !== undefined &&
        output.EngineDisplayName !== null) {
        contents.EngineDisplayName = output.EngineDisplayName;
    }
    if (output.EngineName !== undefined && output.EngineName !== null) {
        contents.EngineName = output.EngineName;
    }
    if (output.ExternalId !== undefined && output.ExternalId !== null) {
        contents.ExternalId = output.ExternalId;
    }
    if (output.ExternalTableDefinition !== undefined &&
        output.ExternalTableDefinition !== null) {
        contents.ExternalTableDefinition = output.ExternalTableDefinition;
    }
    if (output.ExtraConnectionAttributes !== undefined &&
        output.ExtraConnectionAttributes !== null) {
        contents.ExtraConnectionAttributes = output.ExtraConnectionAttributes;
    }
    if (output.KinesisSettings !== undefined && output.KinesisSettings !== null) {
        contents.KinesisSettings = deserializeAws_json1_1KinesisSettings(output.KinesisSettings, context);
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.MongoDbSettings !== undefined && output.MongoDbSettings !== null) {
        contents.MongoDbSettings = deserializeAws_json1_1MongoDbSettings(output.MongoDbSettings, context);
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.RedshiftSettings !== undefined &&
        output.RedshiftSettings !== null) {
        contents.RedshiftSettings = deserializeAws_json1_1RedshiftSettings(output.RedshiftSettings, context);
    }
    if (output.S3Settings !== undefined && output.S3Settings !== null) {
        contents.S3Settings = deserializeAws_json1_1S3Settings(output.S3Settings, context);
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    if (output.SslMode !== undefined && output.SslMode !== null) {
        contents.SslMode = output.SslMode;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1EndpointList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Endpoint(entry, context));
};
const deserializeAws_json1_1Event = (output, context) => {
    let contents = {
        __type: "Event",
        Date: undefined,
        EventCategories: undefined,
        Message: undefined,
        SourceIdentifier: undefined,
        SourceType: undefined
    };
    if (output.Date !== undefined && output.Date !== null) {
        contents.Date = new Date(Math.round(output.Date * 1000));
    }
    if (output.EventCategories !== undefined && output.EventCategories !== null) {
        contents.EventCategories = deserializeAws_json1_1EventCategoriesList(output.EventCategories, context);
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.SourceIdentifier !== undefined &&
        output.SourceIdentifier !== null) {
        contents.SourceIdentifier = output.SourceIdentifier;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1EventCategoriesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EventCategoryGroup = (output, context) => {
    let contents = {
        __type: "EventCategoryGroup",
        EventCategories: undefined,
        SourceType: undefined
    };
    if (output.EventCategories !== undefined && output.EventCategories !== null) {
        contents.EventCategories = deserializeAws_json1_1EventCategoriesList(output.EventCategories, context);
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1EventCategoryGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventCategoryGroup(entry, context));
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Event(entry, context));
};
const deserializeAws_json1_1EventSubscription = (output, context) => {
    let contents = {
        __type: "EventSubscription",
        CustSubscriptionId: undefined,
        CustomerAwsId: undefined,
        Enabled: undefined,
        EventCategoriesList: undefined,
        SnsTopicArn: undefined,
        SourceIdsList: undefined,
        SourceType: undefined,
        Status: undefined,
        SubscriptionCreationTime: undefined
    };
    if (output.CustSubscriptionId !== undefined &&
        output.CustSubscriptionId !== null) {
        contents.CustSubscriptionId = output.CustSubscriptionId;
    }
    if (output.CustomerAwsId !== undefined && output.CustomerAwsId !== null) {
        contents.CustomerAwsId = output.CustomerAwsId;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.EventCategoriesList !== undefined &&
        output.EventCategoriesList !== null) {
        contents.EventCategoriesList = deserializeAws_json1_1EventCategoriesList(output.EventCategoriesList, context);
    }
    if (output.SnsTopicArn !== undefined && output.SnsTopicArn !== null) {
        contents.SnsTopicArn = output.SnsTopicArn;
    }
    if (output.SourceIdsList !== undefined && output.SourceIdsList !== null) {
        contents.SourceIdsList = deserializeAws_json1_1SourceIdsList(output.SourceIdsList, context);
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubscriptionCreationTime !== undefined &&
        output.SubscriptionCreationTime !== null) {
        contents.SubscriptionCreationTime = output.SubscriptionCreationTime;
    }
    return contents;
};
const deserializeAws_json1_1EventSubscriptionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventSubscription(entry, context));
};
const deserializeAws_json1_1ImportCertificateResponse = (output, context) => {
    let contents = {
        __type: "ImportCertificateResponse",
        Certificate: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = deserializeAws_json1_1Certificate(output.Certificate, context);
    }
    return contents;
};
const deserializeAws_json1_1KinesisSettings = (output, context) => {
    let contents = {
        __type: "KinesisSettings",
        MessageFormat: undefined,
        ServiceAccessRoleArn: undefined,
        StreamArn: undefined
    };
    if (output.MessageFormat !== undefined && output.MessageFormat !== null) {
        contents.MessageFormat = output.MessageFormat;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    if (output.StreamArn !== undefined && output.StreamArn !== null) {
        contents.StreamArn = output.StreamArn;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyEndpointResponse = (output, context) => {
    let contents = {
        __type: "ModifyEndpointResponse",
        Endpoint: undefined
    };
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = deserializeAws_json1_1Endpoint(output.Endpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyEventSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "ModifyEventSubscriptionResponse",
        EventSubscription: undefined
    };
    if (output.EventSubscription !== undefined &&
        output.EventSubscription !== null) {
        contents.EventSubscription = deserializeAws_json1_1EventSubscription(output.EventSubscription, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyReplicationInstanceResponse = (output, context) => {
    let contents = {
        __type: "ModifyReplicationInstanceResponse",
        ReplicationInstance: undefined
    };
    if (output.ReplicationInstance !== undefined &&
        output.ReplicationInstance !== null) {
        contents.ReplicationInstance = deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyReplicationSubnetGroupResponse = (output, context) => {
    let contents = {
        __type: "ModifyReplicationSubnetGroupResponse",
        ReplicationSubnetGroup: undefined
    };
    if (output.ReplicationSubnetGroup !== undefined &&
        output.ReplicationSubnetGroup !== null) {
        contents.ReplicationSubnetGroup = deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyReplicationTaskResponse = (output, context) => {
    let contents = {
        __type: "ModifyReplicationTaskResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1MongoDbSettings = (output, context) => {
    let contents = {
        __type: "MongoDbSettings",
        AuthMechanism: undefined,
        AuthSource: undefined,
        AuthType: undefined,
        DatabaseName: undefined,
        DocsToInvestigate: undefined,
        ExtractDocId: undefined,
        KmsKeyId: undefined,
        NestingLevel: undefined,
        Password: undefined,
        Port: undefined,
        ServerName: undefined,
        Username: undefined
    };
    if (output.AuthMechanism !== undefined && output.AuthMechanism !== null) {
        contents.AuthMechanism = output.AuthMechanism;
    }
    if (output.AuthSource !== undefined && output.AuthSource !== null) {
        contents.AuthSource = output.AuthSource;
    }
    if (output.AuthType !== undefined && output.AuthType !== null) {
        contents.AuthType = output.AuthType;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.DocsToInvestigate !== undefined &&
        output.DocsToInvestigate !== null) {
        contents.DocsToInvestigate = output.DocsToInvestigate;
    }
    if (output.ExtractDocId !== undefined && output.ExtractDocId !== null) {
        contents.ExtractDocId = output.ExtractDocId;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.NestingLevel !== undefined && output.NestingLevel !== null) {
        contents.NestingLevel = output.NestingLevel;
    }
    if (output.Password !== undefined && output.Password !== null) {
        contents.Password = output.Password;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1OrderableReplicationInstance = (output, context) => {
    let contents = {
        __type: "OrderableReplicationInstance",
        AvailabilityZones: undefined,
        DefaultAllocatedStorage: undefined,
        EngineVersion: undefined,
        IncludedAllocatedStorage: undefined,
        MaxAllocatedStorage: undefined,
        MinAllocatedStorage: undefined,
        ReleaseStatus: undefined,
        ReplicationInstanceClass: undefined,
        StorageType: undefined
    };
    if (output.AvailabilityZones !== undefined &&
        output.AvailabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_json1_1AvailabilityZonesList(output.AvailabilityZones, context);
    }
    if (output.DefaultAllocatedStorage !== undefined &&
        output.DefaultAllocatedStorage !== null) {
        contents.DefaultAllocatedStorage = output.DefaultAllocatedStorage;
    }
    if (output.EngineVersion !== undefined && output.EngineVersion !== null) {
        contents.EngineVersion = output.EngineVersion;
    }
    if (output.IncludedAllocatedStorage !== undefined &&
        output.IncludedAllocatedStorage !== null) {
        contents.IncludedAllocatedStorage = output.IncludedAllocatedStorage;
    }
    if (output.MaxAllocatedStorage !== undefined &&
        output.MaxAllocatedStorage !== null) {
        contents.MaxAllocatedStorage = output.MaxAllocatedStorage;
    }
    if (output.MinAllocatedStorage !== undefined &&
        output.MinAllocatedStorage !== null) {
        contents.MinAllocatedStorage = output.MinAllocatedStorage;
    }
    if (output.ReleaseStatus !== undefined && output.ReleaseStatus !== null) {
        contents.ReleaseStatus = output.ReleaseStatus;
    }
    if (output.ReplicationInstanceClass !== undefined &&
        output.ReplicationInstanceClass !== null) {
        contents.ReplicationInstanceClass = output.ReplicationInstanceClass;
    }
    if (output.StorageType !== undefined && output.StorageType !== null) {
        contents.StorageType = output.StorageType;
    }
    return contents;
};
const deserializeAws_json1_1OrderableReplicationInstanceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrderableReplicationInstance(entry, context));
};
const deserializeAws_json1_1PendingMaintenanceAction = (output, context) => {
    let contents = {
        __type: "PendingMaintenanceAction",
        Action: undefined,
        AutoAppliedAfterDate: undefined,
        CurrentApplyDate: undefined,
        Description: undefined,
        ForcedApplyDate: undefined,
        OptInStatus: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.AutoAppliedAfterDate !== undefined &&
        output.AutoAppliedAfterDate !== null) {
        contents.AutoAppliedAfterDate = new Date(Math.round(output.AutoAppliedAfterDate * 1000));
    }
    if (output.CurrentApplyDate !== undefined &&
        output.CurrentApplyDate !== null) {
        contents.CurrentApplyDate = new Date(Math.round(output.CurrentApplyDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ForcedApplyDate !== undefined && output.ForcedApplyDate !== null) {
        contents.ForcedApplyDate = new Date(Math.round(output.ForcedApplyDate * 1000));
    }
    if (output.OptInStatus !== undefined && output.OptInStatus !== null) {
        contents.OptInStatus = output.OptInStatus;
    }
    return contents;
};
const deserializeAws_json1_1PendingMaintenanceActionDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PendingMaintenanceAction(entry, context));
};
const deserializeAws_json1_1PendingMaintenanceActions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourcePendingMaintenanceActions(entry, context));
};
const deserializeAws_json1_1RebootReplicationInstanceResponse = (output, context) => {
    let contents = {
        __type: "RebootReplicationInstanceResponse",
        ReplicationInstance: undefined
    };
    if (output.ReplicationInstance !== undefined &&
        output.ReplicationInstance !== null) {
        contents.ReplicationInstance = deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1RedshiftSettings = (output, context) => {
    let contents = {
        __type: "RedshiftSettings",
        AcceptAnyDate: undefined,
        AfterConnectScript: undefined,
        BucketFolder: undefined,
        BucketName: undefined,
        ConnectionTimeout: undefined,
        DatabaseName: undefined,
        DateFormat: undefined,
        EmptyAsNull: undefined,
        EncryptionMode: undefined,
        FileTransferUploadStreams: undefined,
        LoadTimeout: undefined,
        MaxFileSize: undefined,
        Password: undefined,
        Port: undefined,
        RemoveQuotes: undefined,
        ReplaceChars: undefined,
        ReplaceInvalidChars: undefined,
        ServerName: undefined,
        ServerSideEncryptionKmsKeyId: undefined,
        ServiceAccessRoleArn: undefined,
        TimeFormat: undefined,
        TrimBlanks: undefined,
        TruncateColumns: undefined,
        Username: undefined,
        WriteBufferSize: undefined
    };
    if (output.AcceptAnyDate !== undefined && output.AcceptAnyDate !== null) {
        contents.AcceptAnyDate = output.AcceptAnyDate;
    }
    if (output.AfterConnectScript !== undefined &&
        output.AfterConnectScript !== null) {
        contents.AfterConnectScript = output.AfterConnectScript;
    }
    if (output.BucketFolder !== undefined && output.BucketFolder !== null) {
        contents.BucketFolder = output.BucketFolder;
    }
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.ConnectionTimeout !== undefined &&
        output.ConnectionTimeout !== null) {
        contents.ConnectionTimeout = output.ConnectionTimeout;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.DateFormat !== undefined && output.DateFormat !== null) {
        contents.DateFormat = output.DateFormat;
    }
    if (output.EmptyAsNull !== undefined && output.EmptyAsNull !== null) {
        contents.EmptyAsNull = output.EmptyAsNull;
    }
    if (output.EncryptionMode !== undefined && output.EncryptionMode !== null) {
        contents.EncryptionMode = output.EncryptionMode;
    }
    if (output.FileTransferUploadStreams !== undefined &&
        output.FileTransferUploadStreams !== null) {
        contents.FileTransferUploadStreams = output.FileTransferUploadStreams;
    }
    if (output.LoadTimeout !== undefined && output.LoadTimeout !== null) {
        contents.LoadTimeout = output.LoadTimeout;
    }
    if (output.MaxFileSize !== undefined && output.MaxFileSize !== null) {
        contents.MaxFileSize = output.MaxFileSize;
    }
    if (output.Password !== undefined && output.Password !== null) {
        contents.Password = output.Password;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.RemoveQuotes !== undefined && output.RemoveQuotes !== null) {
        contents.RemoveQuotes = output.RemoveQuotes;
    }
    if (output.ReplaceChars !== undefined && output.ReplaceChars !== null) {
        contents.ReplaceChars = output.ReplaceChars;
    }
    if (output.ReplaceInvalidChars !== undefined &&
        output.ReplaceInvalidChars !== null) {
        contents.ReplaceInvalidChars = output.ReplaceInvalidChars;
    }
    if (output.ServerName !== undefined && output.ServerName !== null) {
        contents.ServerName = output.ServerName;
    }
    if (output.ServerSideEncryptionKmsKeyId !== undefined &&
        output.ServerSideEncryptionKmsKeyId !== null) {
        contents.ServerSideEncryptionKmsKeyId = output.ServerSideEncryptionKmsKeyId;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    if (output.TimeFormat !== undefined && output.TimeFormat !== null) {
        contents.TimeFormat = output.TimeFormat;
    }
    if (output.TrimBlanks !== undefined && output.TrimBlanks !== null) {
        contents.TrimBlanks = output.TrimBlanks;
    }
    if (output.TruncateColumns !== undefined && output.TruncateColumns !== null) {
        contents.TruncateColumns = output.TruncateColumns;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    if (output.WriteBufferSize !== undefined && output.WriteBufferSize !== null) {
        contents.WriteBufferSize = output.WriteBufferSize;
    }
    return contents;
};
const deserializeAws_json1_1RefreshSchemasResponse = (output, context) => {
    let contents = {
        __type: "RefreshSchemasResponse",
        RefreshSchemasStatus: undefined
    };
    if (output.RefreshSchemasStatus !== undefined &&
        output.RefreshSchemasStatus !== null) {
        contents.RefreshSchemasStatus = deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1RefreshSchemasStatus = (output, context) => {
    let contents = {
        __type: "RefreshSchemasStatus",
        EndpointArn: undefined,
        LastFailureMessage: undefined,
        LastRefreshDate: undefined,
        ReplicationInstanceArn: undefined,
        Status: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.LastFailureMessage !== undefined &&
        output.LastFailureMessage !== null) {
        contents.LastFailureMessage = output.LastFailureMessage;
    }
    if (output.LastRefreshDate !== undefined && output.LastRefreshDate !== null) {
        contents.LastRefreshDate = new Date(Math.round(output.LastRefreshDate * 1000));
    }
    if (output.ReplicationInstanceArn !== undefined &&
        output.ReplicationInstanceArn !== null) {
        contents.ReplicationInstanceArn = output.ReplicationInstanceArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ReloadTablesResponse = (output, context) => {
    let contents = {
        __type: "ReloadTablesResponse",
        ReplicationTaskArn: undefined
    };
    if (output.ReplicationTaskArn !== undefined &&
        output.ReplicationTaskArn !== null) {
        contents.ReplicationTaskArn = output.ReplicationTaskArn;
    }
    return contents;
};
const deserializeAws_json1_1RemoveTagsFromResourceResponse = (output, context) => {
    let contents = {
        __type: "RemoveTagsFromResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1ReplicationInstance = (output, context) => {
    let contents = {
        __type: "ReplicationInstance",
        AllocatedStorage: undefined,
        AutoMinorVersionUpgrade: undefined,
        AvailabilityZone: undefined,
        DnsNameServers: undefined,
        EngineVersion: undefined,
        FreeUntil: undefined,
        InstanceCreateTime: undefined,
        KmsKeyId: undefined,
        MultiAZ: undefined,
        PendingModifiedValues: undefined,
        PreferredMaintenanceWindow: undefined,
        PubliclyAccessible: undefined,
        ReplicationInstanceArn: undefined,
        ReplicationInstanceClass: undefined,
        ReplicationInstanceIdentifier: undefined,
        ReplicationInstancePrivateIpAddress: undefined,
        ReplicationInstancePrivateIpAddresses: undefined,
        ReplicationInstancePublicIpAddress: undefined,
        ReplicationInstancePublicIpAddresses: undefined,
        ReplicationInstanceStatus: undefined,
        ReplicationSubnetGroup: undefined,
        SecondaryAvailabilityZone: undefined,
        VpcSecurityGroups: undefined
    };
    if (output.AllocatedStorage !== undefined &&
        output.AllocatedStorage !== null) {
        contents.AllocatedStorage = output.AllocatedStorage;
    }
    if (output.AutoMinorVersionUpgrade !== undefined &&
        output.AutoMinorVersionUpgrade !== null) {
        contents.AutoMinorVersionUpgrade = output.AutoMinorVersionUpgrade;
    }
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.DnsNameServers !== undefined && output.DnsNameServers !== null) {
        contents.DnsNameServers = output.DnsNameServers;
    }
    if (output.EngineVersion !== undefined && output.EngineVersion !== null) {
        contents.EngineVersion = output.EngineVersion;
    }
    if (output.FreeUntil !== undefined && output.FreeUntil !== null) {
        contents.FreeUntil = new Date(Math.round(output.FreeUntil * 1000));
    }
    if (output.InstanceCreateTime !== undefined &&
        output.InstanceCreateTime !== null) {
        contents.InstanceCreateTime = new Date(Math.round(output.InstanceCreateTime * 1000));
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.MultiAZ !== undefined && output.MultiAZ !== null) {
        contents.MultiAZ = output.MultiAZ;
    }
    if (output.PendingModifiedValues !== undefined &&
        output.PendingModifiedValues !== null) {
        contents.PendingModifiedValues = deserializeAws_json1_1ReplicationPendingModifiedValues(output.PendingModifiedValues, context);
    }
    if (output.PreferredMaintenanceWindow !== undefined &&
        output.PreferredMaintenanceWindow !== null) {
        contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
    }
    if (output.PubliclyAccessible !== undefined &&
        output.PubliclyAccessible !== null) {
        contents.PubliclyAccessible = output.PubliclyAccessible;
    }
    if (output.ReplicationInstanceArn !== undefined &&
        output.ReplicationInstanceArn !== null) {
        contents.ReplicationInstanceArn = output.ReplicationInstanceArn;
    }
    if (output.ReplicationInstanceClass !== undefined &&
        output.ReplicationInstanceClass !== null) {
        contents.ReplicationInstanceClass = output.ReplicationInstanceClass;
    }
    if (output.ReplicationInstanceIdentifier !== undefined &&
        output.ReplicationInstanceIdentifier !== null) {
        contents.ReplicationInstanceIdentifier =
            output.ReplicationInstanceIdentifier;
    }
    if (output.ReplicationInstancePrivateIpAddress !== undefined &&
        output.ReplicationInstancePrivateIpAddress !== null) {
        contents.ReplicationInstancePrivateIpAddress =
            output.ReplicationInstancePrivateIpAddress;
    }
    if (output.ReplicationInstancePrivateIpAddresses !== undefined &&
        output.ReplicationInstancePrivateIpAddresses !== null) {
        contents.ReplicationInstancePrivateIpAddresses = deserializeAws_json1_1ReplicationInstancePrivateIpAddressList(output.ReplicationInstancePrivateIpAddresses, context);
    }
    if (output.ReplicationInstancePublicIpAddress !== undefined &&
        output.ReplicationInstancePublicIpAddress !== null) {
        contents.ReplicationInstancePublicIpAddress =
            output.ReplicationInstancePublicIpAddress;
    }
    if (output.ReplicationInstancePublicIpAddresses !== undefined &&
        output.ReplicationInstancePublicIpAddresses !== null) {
        contents.ReplicationInstancePublicIpAddresses = deserializeAws_json1_1ReplicationInstancePublicIpAddressList(output.ReplicationInstancePublicIpAddresses, context);
    }
    if (output.ReplicationInstanceStatus !== undefined &&
        output.ReplicationInstanceStatus !== null) {
        contents.ReplicationInstanceStatus = output.ReplicationInstanceStatus;
    }
    if (output.ReplicationSubnetGroup !== undefined &&
        output.ReplicationSubnetGroup !== null) {
        contents.ReplicationSubnetGroup = deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context);
    }
    if (output.SecondaryAvailabilityZone !== undefined &&
        output.SecondaryAvailabilityZone !== null) {
        contents.SecondaryAvailabilityZone = output.SecondaryAvailabilityZone;
    }
    if (output.VpcSecurityGroups !== undefined &&
        output.VpcSecurityGroups !== null) {
        contents.VpcSecurityGroups = deserializeAws_json1_1VpcSecurityGroupMembershipList(output.VpcSecurityGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1ReplicationInstanceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationInstance(entry, context));
};
const deserializeAws_json1_1ReplicationInstancePrivateIpAddressList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ReplicationInstancePublicIpAddressList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ReplicationInstanceTaskLog = (output, context) => {
    let contents = {
        __type: "ReplicationInstanceTaskLog",
        ReplicationInstanceTaskLogSize: undefined,
        ReplicationTaskArn: undefined,
        ReplicationTaskName: undefined
    };
    if (output.ReplicationInstanceTaskLogSize !== undefined &&
        output.ReplicationInstanceTaskLogSize !== null) {
        contents.ReplicationInstanceTaskLogSize =
            output.ReplicationInstanceTaskLogSize;
    }
    if (output.ReplicationTaskArn !== undefined &&
        output.ReplicationTaskArn !== null) {
        contents.ReplicationTaskArn = output.ReplicationTaskArn;
    }
    if (output.ReplicationTaskName !== undefined &&
        output.ReplicationTaskName !== null) {
        contents.ReplicationTaskName = output.ReplicationTaskName;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationInstanceTaskLogsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationInstanceTaskLog(entry, context));
};
const deserializeAws_json1_1ReplicationPendingModifiedValues = (output, context) => {
    let contents = {
        __type: "ReplicationPendingModifiedValues",
        AllocatedStorage: undefined,
        EngineVersion: undefined,
        MultiAZ: undefined,
        ReplicationInstanceClass: undefined
    };
    if (output.AllocatedStorage !== undefined &&
        output.AllocatedStorage !== null) {
        contents.AllocatedStorage = output.AllocatedStorage;
    }
    if (output.EngineVersion !== undefined && output.EngineVersion !== null) {
        contents.EngineVersion = output.EngineVersion;
    }
    if (output.MultiAZ !== undefined && output.MultiAZ !== null) {
        contents.MultiAZ = output.MultiAZ;
    }
    if (output.ReplicationInstanceClass !== undefined &&
        output.ReplicationInstanceClass !== null) {
        contents.ReplicationInstanceClass = output.ReplicationInstanceClass;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationSubnetGroup = (output, context) => {
    let contents = {
        __type: "ReplicationSubnetGroup",
        ReplicationSubnetGroupDescription: undefined,
        ReplicationSubnetGroupIdentifier: undefined,
        SubnetGroupStatus: undefined,
        Subnets: undefined,
        VpcId: undefined
    };
    if (output.ReplicationSubnetGroupDescription !== undefined &&
        output.ReplicationSubnetGroupDescription !== null) {
        contents.ReplicationSubnetGroupDescription =
            output.ReplicationSubnetGroupDescription;
    }
    if (output.ReplicationSubnetGroupIdentifier !== undefined &&
        output.ReplicationSubnetGroupIdentifier !== null) {
        contents.ReplicationSubnetGroupIdentifier =
            output.ReplicationSubnetGroupIdentifier;
    }
    if (output.SubnetGroupStatus !== undefined &&
        output.SubnetGroupStatus !== null) {
        contents.SubnetGroupStatus = output.SubnetGroupStatus;
    }
    if (output.Subnets !== undefined && output.Subnets !== null) {
        contents.Subnets = deserializeAws_json1_1SubnetList(output.Subnets, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationSubnetGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationSubnetGroup(entry, context));
};
const deserializeAws_json1_1ReplicationTask = (output, context) => {
    let contents = {
        __type: "ReplicationTask",
        CdcStartPosition: undefined,
        CdcStopPosition: undefined,
        LastFailureMessage: undefined,
        MigrationType: undefined,
        RecoveryCheckpoint: undefined,
        ReplicationInstanceArn: undefined,
        ReplicationTaskArn: undefined,
        ReplicationTaskCreationDate: undefined,
        ReplicationTaskIdentifier: undefined,
        ReplicationTaskSettings: undefined,
        ReplicationTaskStartDate: undefined,
        ReplicationTaskStats: undefined,
        SourceEndpointArn: undefined,
        Status: undefined,
        StopReason: undefined,
        TableMappings: undefined,
        TargetEndpointArn: undefined
    };
    if (output.CdcStartPosition !== undefined &&
        output.CdcStartPosition !== null) {
        contents.CdcStartPosition = output.CdcStartPosition;
    }
    if (output.CdcStopPosition !== undefined && output.CdcStopPosition !== null) {
        contents.CdcStopPosition = output.CdcStopPosition;
    }
    if (output.LastFailureMessage !== undefined &&
        output.LastFailureMessage !== null) {
        contents.LastFailureMessage = output.LastFailureMessage;
    }
    if (output.MigrationType !== undefined && output.MigrationType !== null) {
        contents.MigrationType = output.MigrationType;
    }
    if (output.RecoveryCheckpoint !== undefined &&
        output.RecoveryCheckpoint !== null) {
        contents.RecoveryCheckpoint = output.RecoveryCheckpoint;
    }
    if (output.ReplicationInstanceArn !== undefined &&
        output.ReplicationInstanceArn !== null) {
        contents.ReplicationInstanceArn = output.ReplicationInstanceArn;
    }
    if (output.ReplicationTaskArn !== undefined &&
        output.ReplicationTaskArn !== null) {
        contents.ReplicationTaskArn = output.ReplicationTaskArn;
    }
    if (output.ReplicationTaskCreationDate !== undefined &&
        output.ReplicationTaskCreationDate !== null) {
        contents.ReplicationTaskCreationDate = new Date(Math.round(output.ReplicationTaskCreationDate * 1000));
    }
    if (output.ReplicationTaskIdentifier !== undefined &&
        output.ReplicationTaskIdentifier !== null) {
        contents.ReplicationTaskIdentifier = output.ReplicationTaskIdentifier;
    }
    if (output.ReplicationTaskSettings !== undefined &&
        output.ReplicationTaskSettings !== null) {
        contents.ReplicationTaskSettings = output.ReplicationTaskSettings;
    }
    if (output.ReplicationTaskStartDate !== undefined &&
        output.ReplicationTaskStartDate !== null) {
        contents.ReplicationTaskStartDate = new Date(Math.round(output.ReplicationTaskStartDate * 1000));
    }
    if (output.ReplicationTaskStats !== undefined &&
        output.ReplicationTaskStats !== null) {
        contents.ReplicationTaskStats = deserializeAws_json1_1ReplicationTaskStats(output.ReplicationTaskStats, context);
    }
    if (output.SourceEndpointArn !== undefined &&
        output.SourceEndpointArn !== null) {
        contents.SourceEndpointArn = output.SourceEndpointArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StopReason !== undefined && output.StopReason !== null) {
        contents.StopReason = output.StopReason;
    }
    if (output.TableMappings !== undefined && output.TableMappings !== null) {
        contents.TableMappings = output.TableMappings;
    }
    if (output.TargetEndpointArn !== undefined &&
        output.TargetEndpointArn !== null) {
        contents.TargetEndpointArn = output.TargetEndpointArn;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationTaskAssessmentResult = (output, context) => {
    let contents = {
        __type: "ReplicationTaskAssessmentResult",
        AssessmentResults: undefined,
        AssessmentResultsFile: undefined,
        AssessmentStatus: undefined,
        ReplicationTaskArn: undefined,
        ReplicationTaskIdentifier: undefined,
        ReplicationTaskLastAssessmentDate: undefined,
        S3ObjectUrl: undefined
    };
    if (output.AssessmentResults !== undefined &&
        output.AssessmentResults !== null) {
        contents.AssessmentResults = output.AssessmentResults;
    }
    if (output.AssessmentResultsFile !== undefined &&
        output.AssessmentResultsFile !== null) {
        contents.AssessmentResultsFile = output.AssessmentResultsFile;
    }
    if (output.AssessmentStatus !== undefined &&
        output.AssessmentStatus !== null) {
        contents.AssessmentStatus = output.AssessmentStatus;
    }
    if (output.ReplicationTaskArn !== undefined &&
        output.ReplicationTaskArn !== null) {
        contents.ReplicationTaskArn = output.ReplicationTaskArn;
    }
    if (output.ReplicationTaskIdentifier !== undefined &&
        output.ReplicationTaskIdentifier !== null) {
        contents.ReplicationTaskIdentifier = output.ReplicationTaskIdentifier;
    }
    if (output.ReplicationTaskLastAssessmentDate !== undefined &&
        output.ReplicationTaskLastAssessmentDate !== null) {
        contents.ReplicationTaskLastAssessmentDate = new Date(Math.round(output.ReplicationTaskLastAssessmentDate * 1000));
    }
    if (output.S3ObjectUrl !== undefined && output.S3ObjectUrl !== null) {
        contents.S3ObjectUrl = output.S3ObjectUrl;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationTaskAssessmentResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationTaskAssessmentResult(entry, context));
};
const deserializeAws_json1_1ReplicationTaskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationTask(entry, context));
};
const deserializeAws_json1_1ReplicationTaskStats = (output, context) => {
    let contents = {
        __type: "ReplicationTaskStats",
        ElapsedTimeMillis: undefined,
        FreshStartDate: undefined,
        FullLoadFinishDate: undefined,
        FullLoadProgressPercent: undefined,
        FullLoadStartDate: undefined,
        StartDate: undefined,
        StopDate: undefined,
        TablesErrored: undefined,
        TablesLoaded: undefined,
        TablesLoading: undefined,
        TablesQueued: undefined
    };
    if (output.ElapsedTimeMillis !== undefined &&
        output.ElapsedTimeMillis !== null) {
        contents.ElapsedTimeMillis = output.ElapsedTimeMillis;
    }
    if (output.FreshStartDate !== undefined && output.FreshStartDate !== null) {
        contents.FreshStartDate = new Date(Math.round(output.FreshStartDate * 1000));
    }
    if (output.FullLoadFinishDate !== undefined &&
        output.FullLoadFinishDate !== null) {
        contents.FullLoadFinishDate = new Date(Math.round(output.FullLoadFinishDate * 1000));
    }
    if (output.FullLoadProgressPercent !== undefined &&
        output.FullLoadProgressPercent !== null) {
        contents.FullLoadProgressPercent = output.FullLoadProgressPercent;
    }
    if (output.FullLoadStartDate !== undefined &&
        output.FullLoadStartDate !== null) {
        contents.FullLoadStartDate = new Date(Math.round(output.FullLoadStartDate * 1000));
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = new Date(Math.round(output.StartDate * 1000));
    }
    if (output.StopDate !== undefined && output.StopDate !== null) {
        contents.StopDate = new Date(Math.round(output.StopDate * 1000));
    }
    if (output.TablesErrored !== undefined && output.TablesErrored !== null) {
        contents.TablesErrored = output.TablesErrored;
    }
    if (output.TablesLoaded !== undefined && output.TablesLoaded !== null) {
        contents.TablesLoaded = output.TablesLoaded;
    }
    if (output.TablesLoading !== undefined && output.TablesLoading !== null) {
        contents.TablesLoading = output.TablesLoading;
    }
    if (output.TablesQueued !== undefined && output.TablesQueued !== null) {
        contents.TablesQueued = output.TablesQueued;
    }
    return contents;
};
const deserializeAws_json1_1ResourcePendingMaintenanceActions = (output, context) => {
    let contents = {
        __type: "ResourcePendingMaintenanceActions",
        PendingMaintenanceActionDetails: undefined,
        ResourceIdentifier: undefined
    };
    if (output.PendingMaintenanceActionDetails !== undefined &&
        output.PendingMaintenanceActionDetails !== null) {
        contents.PendingMaintenanceActionDetails = deserializeAws_json1_1PendingMaintenanceActionDetails(output.PendingMaintenanceActionDetails, context);
    }
    if (output.ResourceIdentifier !== undefined &&
        output.ResourceIdentifier !== null) {
        contents.ResourceIdentifier = output.ResourceIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1S3Settings = (output, context) => {
    let contents = {
        __type: "S3Settings",
        BucketFolder: undefined,
        BucketName: undefined,
        CdcInsertsOnly: undefined,
        CompressionType: undefined,
        CsvDelimiter: undefined,
        CsvRowDelimiter: undefined,
        DataFormat: undefined,
        DataPageSize: undefined,
        DictPageSizeLimit: undefined,
        EnableStatistics: undefined,
        EncodingType: undefined,
        EncryptionMode: undefined,
        ExternalTableDefinition: undefined,
        IncludeOpForFullLoad: undefined,
        ParquetTimestampInMillisecond: undefined,
        ParquetVersion: undefined,
        RowGroupLength: undefined,
        ServerSideEncryptionKmsKeyId: undefined,
        ServiceAccessRoleArn: undefined,
        TimestampColumnName: undefined
    };
    if (output.BucketFolder !== undefined && output.BucketFolder !== null) {
        contents.BucketFolder = output.BucketFolder;
    }
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.CdcInsertsOnly !== undefined && output.CdcInsertsOnly !== null) {
        contents.CdcInsertsOnly = output.CdcInsertsOnly;
    }
    if (output.CompressionType !== undefined && output.CompressionType !== null) {
        contents.CompressionType = output.CompressionType;
    }
    if (output.CsvDelimiter !== undefined && output.CsvDelimiter !== null) {
        contents.CsvDelimiter = output.CsvDelimiter;
    }
    if (output.CsvRowDelimiter !== undefined && output.CsvRowDelimiter !== null) {
        contents.CsvRowDelimiter = output.CsvRowDelimiter;
    }
    if (output.DataFormat !== undefined && output.DataFormat !== null) {
        contents.DataFormat = output.DataFormat;
    }
    if (output.DataPageSize !== undefined && output.DataPageSize !== null) {
        contents.DataPageSize = output.DataPageSize;
    }
    if (output.DictPageSizeLimit !== undefined &&
        output.DictPageSizeLimit !== null) {
        contents.DictPageSizeLimit = output.DictPageSizeLimit;
    }
    if (output.EnableStatistics !== undefined &&
        output.EnableStatistics !== null) {
        contents.EnableStatistics = output.EnableStatistics;
    }
    if (output.EncodingType !== undefined && output.EncodingType !== null) {
        contents.EncodingType = output.EncodingType;
    }
    if (output.EncryptionMode !== undefined && output.EncryptionMode !== null) {
        contents.EncryptionMode = output.EncryptionMode;
    }
    if (output.ExternalTableDefinition !== undefined &&
        output.ExternalTableDefinition !== null) {
        contents.ExternalTableDefinition = output.ExternalTableDefinition;
    }
    if (output.IncludeOpForFullLoad !== undefined &&
        output.IncludeOpForFullLoad !== null) {
        contents.IncludeOpForFullLoad = output.IncludeOpForFullLoad;
    }
    if (output.ParquetTimestampInMillisecond !== undefined &&
        output.ParquetTimestampInMillisecond !== null) {
        contents.ParquetTimestampInMillisecond =
            output.ParquetTimestampInMillisecond;
    }
    if (output.ParquetVersion !== undefined && output.ParquetVersion !== null) {
        contents.ParquetVersion = output.ParquetVersion;
    }
    if (output.RowGroupLength !== undefined && output.RowGroupLength !== null) {
        contents.RowGroupLength = output.RowGroupLength;
    }
    if (output.ServerSideEncryptionKmsKeyId !== undefined &&
        output.ServerSideEncryptionKmsKeyId !== null) {
        contents.ServerSideEncryptionKmsKeyId = output.ServerSideEncryptionKmsKeyId;
    }
    if (output.ServiceAccessRoleArn !== undefined &&
        output.ServiceAccessRoleArn !== null) {
        contents.ServiceAccessRoleArn = output.ServiceAccessRoleArn;
    }
    if (output.TimestampColumnName !== undefined &&
        output.TimestampColumnName !== null) {
        contents.TimestampColumnName = output.TimestampColumnName;
    }
    return contents;
};
const deserializeAws_json1_1SchemaList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SourceIdsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StartReplicationTaskAssessmentResponse = (output, context) => {
    let contents = {
        __type: "StartReplicationTaskAssessmentResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1StartReplicationTaskResponse = (output, context) => {
    let contents = {
        __type: "StartReplicationTaskResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1StopReplicationTaskResponse = (output, context) => {
    let contents = {
        __type: "StopReplicationTaskResponse",
        ReplicationTask: undefined
    };
    if (output.ReplicationTask !== undefined && output.ReplicationTask !== null) {
        contents.ReplicationTask = deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1Subnet = (output, context) => {
    let contents = {
        __type: "Subnet",
        SubnetAvailabilityZone: undefined,
        SubnetIdentifier: undefined,
        SubnetStatus: undefined
    };
    if (output.SubnetAvailabilityZone !== undefined &&
        output.SubnetAvailabilityZone !== null) {
        contents.SubnetAvailabilityZone = deserializeAws_json1_1AvailabilityZone(output.SubnetAvailabilityZone, context);
    }
    if (output.SubnetIdentifier !== undefined &&
        output.SubnetIdentifier !== null) {
        contents.SubnetIdentifier = output.SubnetIdentifier;
    }
    if (output.SubnetStatus !== undefined && output.SubnetStatus !== null) {
        contents.SubnetStatus = output.SubnetStatus;
    }
    return contents;
};
const deserializeAws_json1_1SubnetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Subnet(entry, context));
};
const deserializeAws_json1_1SupportedEndpointType = (output, context) => {
    let contents = {
        __type: "SupportedEndpointType",
        EndpointType: undefined,
        EngineDisplayName: undefined,
        EngineName: undefined,
        SupportsCDC: undefined
    };
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.EngineDisplayName !== undefined &&
        output.EngineDisplayName !== null) {
        contents.EngineDisplayName = output.EngineDisplayName;
    }
    if (output.EngineName !== undefined && output.EngineName !== null) {
        contents.EngineName = output.EngineName;
    }
    if (output.SupportsCDC !== undefined && output.SupportsCDC !== null) {
        contents.SupportsCDC = output.SupportsCDC;
    }
    return contents;
};
const deserializeAws_json1_1SupportedEndpointTypeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SupportedEndpointType(entry, context));
};
const deserializeAws_json1_1TableStatistics = (output, context) => {
    let contents = {
        __type: "TableStatistics",
        Ddls: undefined,
        Deletes: undefined,
        FullLoadCondtnlChkFailedRows: undefined,
        FullLoadErrorRows: undefined,
        FullLoadRows: undefined,
        Inserts: undefined,
        LastUpdateTime: undefined,
        SchemaName: undefined,
        TableName: undefined,
        TableState: undefined,
        Updates: undefined,
        ValidationFailedRecords: undefined,
        ValidationPendingRecords: undefined,
        ValidationState: undefined,
        ValidationStateDetails: undefined,
        ValidationSuspendedRecords: undefined
    };
    if (output.Ddls !== undefined && output.Ddls !== null) {
        contents.Ddls = output.Ddls;
    }
    if (output.Deletes !== undefined && output.Deletes !== null) {
        contents.Deletes = output.Deletes;
    }
    if (output.FullLoadCondtnlChkFailedRows !== undefined &&
        output.FullLoadCondtnlChkFailedRows !== null) {
        contents.FullLoadCondtnlChkFailedRows = output.FullLoadCondtnlChkFailedRows;
    }
    if (output.FullLoadErrorRows !== undefined &&
        output.FullLoadErrorRows !== null) {
        contents.FullLoadErrorRows = output.FullLoadErrorRows;
    }
    if (output.FullLoadRows !== undefined && output.FullLoadRows !== null) {
        contents.FullLoadRows = output.FullLoadRows;
    }
    if (output.Inserts !== undefined && output.Inserts !== null) {
        contents.Inserts = output.Inserts;
    }
    if (output.LastUpdateTime !== undefined && output.LastUpdateTime !== null) {
        contents.LastUpdateTime = new Date(Math.round(output.LastUpdateTime * 1000));
    }
    if (output.SchemaName !== undefined && output.SchemaName !== null) {
        contents.SchemaName = output.SchemaName;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.TableState !== undefined && output.TableState !== null) {
        contents.TableState = output.TableState;
    }
    if (output.Updates !== undefined && output.Updates !== null) {
        contents.Updates = output.Updates;
    }
    if (output.ValidationFailedRecords !== undefined &&
        output.ValidationFailedRecords !== null) {
        contents.ValidationFailedRecords = output.ValidationFailedRecords;
    }
    if (output.ValidationPendingRecords !== undefined &&
        output.ValidationPendingRecords !== null) {
        contents.ValidationPendingRecords = output.ValidationPendingRecords;
    }
    if (output.ValidationState !== undefined && output.ValidationState !== null) {
        contents.ValidationState = output.ValidationState;
    }
    if (output.ValidationStateDetails !== undefined &&
        output.ValidationStateDetails !== null) {
        contents.ValidationStateDetails = output.ValidationStateDetails;
    }
    if (output.ValidationSuspendedRecords !== undefined &&
        output.ValidationSuspendedRecords !== null) {
        contents.ValidationSuspendedRecords = output.ValidationSuspendedRecords;
    }
    return contents;
};
const deserializeAws_json1_1TableStatisticsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TableStatistics(entry, context));
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
const deserializeAws_json1_1TestConnectionResponse = (output, context) => {
    let contents = {
        __type: "TestConnectionResponse",
        Connection: undefined
    };
    if (output.Connection !== undefined && output.Connection !== null) {
        contents.Connection = deserializeAws_json1_1Connection(output.Connection, context);
    }
    return contents;
};
const deserializeAws_json1_1VpcSecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "VpcSecurityGroupMembership",
        Status: undefined,
        VpcSecurityGroupId: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.VpcSecurityGroupId !== undefined &&
        output.VpcSecurityGroupId !== null) {
        contents.VpcSecurityGroupId = output.VpcSecurityGroupId;
    }
    return contents;
};
const deserializeAws_json1_1VpcSecurityGroupMembershipList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VpcSecurityGroupMembership(entry, context));
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