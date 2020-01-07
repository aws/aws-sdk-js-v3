"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddTagsToResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddTagsToResource", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddTagsToResourceCommand = serializeAws_queryAddTagsToResourceCommand;
async function serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AuthorizeCacheSecurityGroupIngress", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand;
async function serializeAws_queryBatchApplyUpdateActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchApplyUpdateActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchApplyUpdateAction", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchApplyUpdateActionCommand = serializeAws_queryBatchApplyUpdateActionCommand;
async function serializeAws_queryBatchStopUpdateActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBatchStopUpdateActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BatchStopUpdateAction", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBatchStopUpdateActionCommand = serializeAws_queryBatchStopUpdateActionCommand;
async function serializeAws_queryCompleteMigrationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCompleteMigrationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CompleteMigration", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCompleteMigrationCommand = serializeAws_queryCompleteMigrationCommand;
async function serializeAws_queryCopySnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopySnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopySnapshot", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopySnapshotCommand = serializeAws_queryCopySnapshotCommand;
async function serializeAws_queryCreateCacheClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCacheClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCacheCluster", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCacheClusterCommand = serializeAws_queryCreateCacheClusterCommand;
async function serializeAws_queryCreateCacheParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCacheParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCacheParameterGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCacheParameterGroupCommand = serializeAws_queryCreateCacheParameterGroupCommand;
async function serializeAws_queryCreateCacheSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCacheSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCacheSecurityGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCacheSecurityGroupCommand = serializeAws_queryCreateCacheSecurityGroupCommand;
async function serializeAws_queryCreateCacheSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCacheSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCacheSubnetGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCacheSubnetGroupCommand = serializeAws_queryCreateCacheSubnetGroupCommand;
async function serializeAws_queryCreateReplicationGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateReplicationGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateReplicationGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateReplicationGroupCommand = serializeAws_queryCreateReplicationGroupCommand;
async function serializeAws_queryCreateSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateSnapshot", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateSnapshotCommand = serializeAws_queryCreateSnapshotCommand;
async function serializeAws_queryDecreaseReplicaCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDecreaseReplicaCountMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DecreaseReplicaCount", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDecreaseReplicaCountCommand = serializeAws_queryDecreaseReplicaCountCommand;
async function serializeAws_queryDeleteCacheClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCacheClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCacheCluster", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCacheClusterCommand = serializeAws_queryDeleteCacheClusterCommand;
async function serializeAws_queryDeleteCacheParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCacheParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCacheParameterGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCacheParameterGroupCommand = serializeAws_queryDeleteCacheParameterGroupCommand;
async function serializeAws_queryDeleteCacheSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCacheSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCacheSecurityGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCacheSecurityGroupCommand = serializeAws_queryDeleteCacheSecurityGroupCommand;
async function serializeAws_queryDeleteCacheSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCacheSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCacheSubnetGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCacheSubnetGroupCommand = serializeAws_queryDeleteCacheSubnetGroupCommand;
async function serializeAws_queryDeleteReplicationGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteReplicationGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteReplicationGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteReplicationGroupCommand = serializeAws_queryDeleteReplicationGroupCommand;
async function serializeAws_queryDeleteSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSnapshot", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSnapshotCommand = serializeAws_queryDeleteSnapshotCommand;
async function serializeAws_queryDescribeCacheClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheClustersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheClusters", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheClustersCommand = serializeAws_queryDescribeCacheClustersCommand;
async function serializeAws_queryDescribeCacheEngineVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheEngineVersionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheEngineVersions", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheEngineVersionsCommand = serializeAws_queryDescribeCacheEngineVersionsCommand;
async function serializeAws_queryDescribeCacheParameterGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheParameterGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheParameterGroups", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheParameterGroupsCommand = serializeAws_queryDescribeCacheParameterGroupsCommand;
async function serializeAws_queryDescribeCacheParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheParameters", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheParametersCommand = serializeAws_queryDescribeCacheParametersCommand;
async function serializeAws_queryDescribeCacheSecurityGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheSecurityGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheSecurityGroups", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheSecurityGroupsCommand = serializeAws_queryDescribeCacheSecurityGroupsCommand;
async function serializeAws_queryDescribeCacheSubnetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCacheSubnetGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCacheSubnetGroups", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCacheSubnetGroupsCommand = serializeAws_queryDescribeCacheSubnetGroupsCommand;
async function serializeAws_queryDescribeEngineDefaultParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEngineDefaultParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEngineDefaultParameters", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEngineDefaultParametersCommand = serializeAws_queryDescribeEngineDefaultParametersCommand;
async function serializeAws_queryDescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEvents", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
async function serializeAws_queryDescribeReplicationGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReplicationGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReplicationGroups", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReplicationGroupsCommand = serializeAws_queryDescribeReplicationGroupsCommand;
async function serializeAws_queryDescribeReservedCacheNodesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedCacheNodesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedCacheNodes", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedCacheNodesCommand = serializeAws_queryDescribeReservedCacheNodesCommand;
async function serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedCacheNodesOfferingsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedCacheNodesOfferings", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = serializeAws_queryDescribeReservedCacheNodesOfferingsCommand;
async function serializeAws_queryDescribeServiceUpdatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeServiceUpdatesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeServiceUpdates", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeServiceUpdatesCommand = serializeAws_queryDescribeServiceUpdatesCommand;
async function serializeAws_queryDescribeSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSnapshotsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSnapshots", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSnapshotsCommand = serializeAws_queryDescribeSnapshotsCommand;
async function serializeAws_queryDescribeUpdateActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeUpdateActionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeUpdateActions", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeUpdateActionsCommand = serializeAws_queryDescribeUpdateActionsCommand;
async function serializeAws_queryIncreaseReplicaCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryIncreaseReplicaCountMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "IncreaseReplicaCount", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryIncreaseReplicaCountCommand = serializeAws_queryIncreaseReplicaCountCommand;
async function serializeAws_queryListAllowedNodeTypeModificationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAllowedNodeTypeModificationsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAllowedNodeTypeModifications", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAllowedNodeTypeModificationsCommand = serializeAws_queryListAllowedNodeTypeModificationsCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryModifyCacheClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyCacheClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCacheCluster", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyCacheClusterCommand = serializeAws_queryModifyCacheClusterCommand;
async function serializeAws_queryModifyCacheParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyCacheParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCacheParameterGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyCacheParameterGroupCommand = serializeAws_queryModifyCacheParameterGroupCommand;
async function serializeAws_queryModifyCacheSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyCacheSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCacheSubnetGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyCacheSubnetGroupCommand = serializeAws_queryModifyCacheSubnetGroupCommand;
async function serializeAws_queryModifyReplicationGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyReplicationGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyReplicationGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyReplicationGroupCommand = serializeAws_queryModifyReplicationGroupCommand;
async function serializeAws_queryModifyReplicationGroupShardConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyReplicationGroupShardConfigurationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyReplicationGroupShardConfiguration", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyReplicationGroupShardConfigurationCommand = serializeAws_queryModifyReplicationGroupShardConfigurationCommand;
async function serializeAws_queryPurchaseReservedCacheNodesOfferingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPurchaseReservedCacheNodesOfferingMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PurchaseReservedCacheNodesOffering", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = serializeAws_queryPurchaseReservedCacheNodesOfferingCommand;
async function serializeAws_queryRebootCacheClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRebootCacheClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RebootCacheCluster", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRebootCacheClusterCommand = serializeAws_queryRebootCacheClusterCommand;
async function serializeAws_queryRemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveTagsFromResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveTagsFromResource", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveTagsFromResourceCommand = serializeAws_queryRemoveTagsFromResourceCommand;
async function serializeAws_queryResetCacheParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResetCacheParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResetCacheParameterGroup", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResetCacheParameterGroupCommand = serializeAws_queryResetCacheParameterGroupCommand;
async function serializeAws_queryRevokeCacheSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRevokeCacheSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RevokeCacheSecurityGroupIngress", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRevokeCacheSecurityGroupIngressCommand = serializeAws_queryRevokeCacheSecurityGroupIngressCommand;
async function serializeAws_queryStartMigrationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStartMigrationMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StartMigration", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStartMigrationCommand = serializeAws_queryStartMigrationCommand;
async function serializeAws_queryTestFailoverCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTestFailoverMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TestFailover", Version: "2015-02-02" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTestFailoverCommand = serializeAws_queryTestFailoverCommand;
async function deserializeAws_queryAddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagListMessage(data.AddTagsToResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddTagsToResourceCommand = deserializeAws_queryAddTagsToResourceCommand;
async function deserializeAws_queryAddTagsToResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagQuotaPerResourceExceeded":
        case "elmo.admin#TagQuotaPerResourceExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult(data.AuthorizeCacheSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AuthorizeCacheSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand;
async function deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(output, context) {
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
        case "AuthorizationAlreadyExistsFault":
        case "elmo.admin#AuthorizationAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "elmo.admin#InvalidCacheSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryBatchApplyUpdateActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchApplyUpdateActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchApplyUpdateActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateActionResultsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchApplyUpdateActionCommand = deserializeAws_queryBatchApplyUpdateActionCommand;
async function deserializeAws_queryBatchApplyUpdateActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUpdateNotFoundFault":
        case "elmo.admin#ServiceUpdateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryBatchStopUpdateActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBatchStopUpdateActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchStopUpdateActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateActionResultsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBatchStopUpdateActionCommand = deserializeAws_queryBatchStopUpdateActionCommand;
async function deserializeAws_queryBatchStopUpdateActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUpdateNotFoundFault":
        case "elmo.admin#ServiceUpdateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCompleteMigrationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCompleteMigrationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCompleteMigrationResponse(data.CompleteMigrationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CompleteMigrationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCompleteMigrationCommand = deserializeAws_queryCompleteMigrationCommand;
async function deserializeAws_queryCompleteMigrationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotUnderMigrationFault":
        case "elmo.admin#ReplicationGroupNotUnderMigrationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCopySnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopySnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopySnapshotResult(data.CopySnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopySnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopySnapshotCommand = deserializeAws_queryCopySnapshotCommand;
async function deserializeAws_queryCopySnapshotCommandError(output, context) {
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
        case "InvalidSnapshotStateFault":
        case "elmo.admin#InvalidSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotAlreadyExistsFault":
        case "elmo.admin#SnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "elmo.admin#SnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateCacheClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheClusterResult(data.CreateCacheClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCacheClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCacheClusterCommand = deserializeAws_queryCreateCacheClusterCommand;
async function deserializeAws_queryCreateCacheClusterCommandError(output, context) {
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
        case "CacheClusterAlreadyExistsFault":
        case "elmo.admin#CacheClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "elmo.admin#CacheSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "elmo.admin#ClusterQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagQuotaPerResourceExceeded":
        case "elmo.admin#TagQuotaPerResourceExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateCacheParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheParameterGroupResult(data.CreateCacheParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCacheParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCacheParameterGroupCommand = deserializeAws_queryCreateCacheParameterGroupCommand;
async function deserializeAws_queryCreateCacheParameterGroupCommandError(output, context) {
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
        case "CacheParameterGroupAlreadyExistsFault":
        case "elmo.admin#CacheParameterGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheParameterGroupQuotaExceededFault":
        case "elmo.admin#CacheParameterGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "elmo.admin#InvalidCacheParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateCacheSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCacheSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheSecurityGroupResult(data.CreateCacheSecurityGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCacheSecurityGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCacheSecurityGroupCommand = deserializeAws_queryCreateCacheSecurityGroupCommand;
async function deserializeAws_queryCreateCacheSecurityGroupCommandError(output, context) {
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
        case "CacheSecurityGroupAlreadyExistsFault":
        case "elmo.admin#CacheSecurityGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupQuotaExceededFault":
        case "elmo.admin#CacheSecurityGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateCacheSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCacheSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheSubnetGroupResult(data.CreateCacheSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCacheSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCacheSubnetGroupCommand = deserializeAws_queryCreateCacheSubnetGroupCommand;
async function deserializeAws_queryCreateCacheSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupAlreadyExistsFault":
        case "elmo.admin#CacheSubnetGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetGroupQuotaExceededFault":
        case "elmo.admin#CacheSubnetGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetQuotaExceededFault":
        case "elmo.admin#CacheSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "elmo.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateReplicationGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReplicationGroupResult(data.CreateReplicationGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReplicationGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateReplicationGroupCommand = deserializeAws_queryCreateReplicationGroupCommand;
async function deserializeAws_queryCreateReplicationGroupCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "elmo.admin#CacheSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "elmo.admin#ClusterQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupAlreadyExistsFault":
        case "elmo.admin#ReplicationGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagQuotaPerResourceExceeded":
        case "elmo.admin#TagQuotaPerResourceExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSnapshotResult(data.CreateSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateSnapshotCommand = deserializeAws_queryCreateSnapshotCommand;
async function deserializeAws_queryCreateSnapshotCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotAlreadyExistsFault":
        case "elmo.admin#SnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "elmo.admin#SnapshotFeatureNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "elmo.admin#SnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDecreaseReplicaCountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDecreaseReplicaCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecreaseReplicaCountResult(data.DecreaseReplicaCountResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DecreaseReplicaCountResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDecreaseReplicaCountCommand = deserializeAws_queryDecreaseReplicaCountCommand;
async function deserializeAws_queryDecreaseReplicaCountCommandError(output, context) {
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
        case "ClusterQuotaForCustomerExceededFault":
        case "elmo.admin#ClusterQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoOperationFault":
        case "elmo.admin#NoOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "elmo.admin#ServiceLinkedRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteCacheClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteCacheClusterResult(data.DeleteCacheClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCacheClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCacheClusterCommand = deserializeAws_queryDeleteCacheClusterCommand;
async function deserializeAws_queryDeleteCacheClusterCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotAlreadyExistsFault":
        case "elmo.admin#SnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "elmo.admin#SnapshotFeatureNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "elmo.admin#SnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteCacheParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCacheParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCacheParameterGroupCommand = deserializeAws_queryDeleteCacheParameterGroupCommand;
async function deserializeAws_queryDeleteCacheParameterGroupCommandError(output, context) {
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
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "elmo.admin#InvalidCacheParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteCacheSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCacheSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCacheSecurityGroupCommand = deserializeAws_queryDeleteCacheSecurityGroupCommand;
async function deserializeAws_queryDeleteCacheSecurityGroupCommandError(output, context) {
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
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "elmo.admin#InvalidCacheSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteCacheSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCacheSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCacheSubnetGroupCommand = deserializeAws_queryDeleteCacheSubnetGroupCommand;
async function deserializeAws_queryDeleteCacheSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupInUse":
        case "elmo.admin#CacheSubnetGroupInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "elmo.admin#CacheSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteReplicationGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReplicationGroupResult(data.DeleteReplicationGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReplicationGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteReplicationGroupCommand = deserializeAws_queryDeleteReplicationGroupCommand;
async function deserializeAws_queryDeleteReplicationGroupCommandError(output, context) {
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
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotAlreadyExistsFault":
        case "elmo.admin#SnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "elmo.admin#SnapshotFeatureNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "elmo.admin#SnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteSnapshotResult(data.DeleteSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSnapshotCommand = deserializeAws_queryDeleteSnapshotCommand;
async function deserializeAws_queryDeleteSnapshotCommandError(output, context) {
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
        case "InvalidSnapshotStateFault":
        case "elmo.admin#InvalidSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCacheClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheClusterMessage(data.DescribeCacheClustersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheClusterMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheClustersCommand = deserializeAws_queryDescribeCacheClustersCommand;
async function deserializeAws_queryDescribeCacheClustersCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCacheEngineVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheEngineVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheEngineVersionMessage(data.DescribeCacheEngineVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheEngineVersionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheEngineVersionsCommand = deserializeAws_queryDescribeCacheEngineVersionsCommand;
async function deserializeAws_queryDescribeCacheEngineVersionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeCacheParameterGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupsMessage(data.DescribeCacheParameterGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheParameterGroupsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheParameterGroupsCommand = deserializeAws_queryDescribeCacheParameterGroupsCommand;
async function deserializeAws_queryDescribeCacheParameterGroupsCommandError(output, context) {
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
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCacheParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupDetails(data.DescribeCacheParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheParameterGroupDetails" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheParametersCommand = deserializeAws_queryDescribeCacheParametersCommand;
async function deserializeAws_queryDescribeCacheParametersCommandError(output, context) {
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
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCacheSecurityGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheSecurityGroupMessage(data.DescribeCacheSecurityGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheSecurityGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheSecurityGroupsCommand = deserializeAws_queryDescribeCacheSecurityGroupsCommand;
async function deserializeAws_queryDescribeCacheSecurityGroupsCommandError(output, context) {
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
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCacheSubnetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCacheSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheSubnetGroupMessage(data.DescribeCacheSubnetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheSubnetGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCacheSubnetGroupsCommand = deserializeAws_queryDescribeCacheSubnetGroupsCommand;
async function deserializeAws_queryDescribeCacheSubnetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupNotFoundFault":
        case "elmo.admin#CacheSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEngineDefaultParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEngineDefaultParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEngineDefaultParametersResult(data.DescribeEngineDefaultParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEngineDefaultParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEngineDefaultParametersCommand = deserializeAws_queryDescribeEngineDefaultParametersCommand;
async function deserializeAws_queryDescribeEngineDefaultParametersCommandError(output, context) {
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
        case "InvalidParameterCombinationException":
        case "com.amazon.coral.service#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeReplicationGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReplicationGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReplicationGroupMessage(data.DescribeReplicationGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReplicationGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReplicationGroupsCommand = deserializeAws_queryDescribeReplicationGroupsCommand;
async function deserializeAws_queryDescribeReplicationGroupsCommandError(output, context) {
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
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeReservedCacheNodesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedCacheNodesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedCacheNodeMessage(data.DescribeReservedCacheNodesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedCacheNodeMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedCacheNodesCommand = deserializeAws_queryDescribeReservedCacheNodesCommand;
async function deserializeAws_queryDescribeReservedCacheNodesCommandError(output, context) {
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
        case "ReservedCacheNodeNotFoundFault":
        case "elmo.admin#ReservedCacheNodeNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedCacheNodesOfferingMessage(data.DescribeReservedCacheNodesOfferingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedCacheNodesOfferingMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand;
async function deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(output, context) {
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
        case "ReservedCacheNodesOfferingNotFoundFault":
        case "elmo.admin#ReservedCacheNodesOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeServiceUpdatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeServiceUpdatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ServiceUpdatesMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeServiceUpdatesCommand = deserializeAws_queryDescribeServiceUpdatesCommand;
async function deserializeAws_queryDescribeServiceUpdatesCommandError(output, context) {
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
        case "ServiceUpdateNotFoundFault":
        case "elmo.admin#ServiceUpdateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSnapshotsListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSnapshotsCommand = deserializeAws_queryDescribeSnapshotsCommand;
async function deserializeAws_queryDescribeSnapshotsCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeUpdateActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeUpdateActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionsMessage(data.DescribeUpdateActionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateActionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeUpdateActionsCommand = deserializeAws_queryDescribeUpdateActionsCommand;
async function deserializeAws_queryDescribeUpdateActionsCommandError(output, context) {
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
async function deserializeAws_queryIncreaseReplicaCountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryIncreaseReplicaCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryIncreaseReplicaCountResult(data.IncreaseReplicaCountResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IncreaseReplicaCountResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryIncreaseReplicaCountCommand = deserializeAws_queryIncreaseReplicaCountCommand;
async function deserializeAws_queryIncreaseReplicaCountCommandError(output, context) {
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
        case "ClusterQuotaForCustomerExceededFault":
        case "elmo.admin#ClusterQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSKeyFault":
        case "elmo.admin#InvalidKMSKeyFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoOperationFault":
        case "elmo.admin#NoOperationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListAllowedNodeTypeModificationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAllowedNodeTypeModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAllowedNodeTypeModificationsMessage(data.ListAllowedNodeTypeModificationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AllowedNodeTypeModificationsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAllowedNodeTypeModificationsCommand = deserializeAws_queryListAllowedNodeTypeModificationsCommand;
async function deserializeAws_queryListAllowedNodeTypeModificationsCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_queryTagListMessage(data.ListTagsForResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
async function deserializeAws_queryListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyCacheClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCacheClusterResult(data.ModifyCacheClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyCacheClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyCacheClusterCommand = deserializeAws_queryModifyCacheClusterCommand;
async function deserializeAws_queryModifyCacheClusterCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "elmo.admin#InvalidCacheSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyCacheParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ModifyCacheParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyCacheParameterGroupCommand = deserializeAws_queryModifyCacheParameterGroupCommand;
async function deserializeAws_queryModifyCacheParameterGroupCommandError(output, context) {
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
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "elmo.admin#InvalidCacheParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyCacheSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyCacheSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCacheSubnetGroupResult(data.ModifyCacheSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyCacheSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyCacheSubnetGroupCommand = deserializeAws_queryModifyCacheSubnetGroupCommand;
async function deserializeAws_queryModifyCacheSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupNotFoundFault":
        case "elmo.admin#CacheSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSubnetQuotaExceededFault":
        case "elmo.admin#CacheSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "elmo.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetInUse":
        case "elmo.admin#SubnetInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyReplicationGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyReplicationGroupResult(data.ModifyReplicationGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReplicationGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyReplicationGroupCommand = deserializeAws_queryModifyReplicationGroupCommand;
async function deserializeAws_queryModifyReplicationGroupCommandError(output, context) {
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
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "elmo.admin#InvalidCacheSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSKeyFault":
        case "elmo.admin#InvalidKMSKeyFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForClusterExceededFault":
        case "elmo.admin#NodeQuotaForClusterExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyReplicationGroupShardConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyReplicationGroupShardConfigurationResult(data.ModifyReplicationGroupShardConfigurationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyReplicationGroupShardConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = deserializeAws_queryModifyReplicationGroupShardConfigurationCommand;
async function deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(output, context) {
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
        case "InsufficientCacheClusterCapacityFault":
        case "elmo.admin#InsufficientCacheClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSKeyFault":
        case "elmo.admin#InvalidKMSKeyFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "elmo.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "elmo.admin#NodeQuotaForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedCacheNodesOfferingResult(data.PurchaseReservedCacheNodesOfferingResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PurchaseReservedCacheNodesOfferingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand;
async function deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(output, context) {
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
        case "ReservedCacheNodeAlreadyExistsFault":
        case "elmo.admin#ReservedCacheNodeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedCacheNodeQuotaExceededFault":
        case "elmo.admin#ReservedCacheNodeQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedCacheNodesOfferingNotFoundFault":
        case "elmo.admin#ReservedCacheNodesOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRebootCacheClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRebootCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootCacheClusterResult(data.RebootCacheClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootCacheClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRebootCacheClusterCommand = deserializeAws_queryRebootCacheClusterCommand;
async function deserializeAws_queryRebootCacheClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRemoveTagsFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagListMessage(data.RemoveTagsFromResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagListMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveTagsFromResourceCommand = deserializeAws_queryRemoveTagsFromResourceCommand;
async function deserializeAws_queryRemoveTagsFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "elmo.admin#CacheClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidARNFault":
        case "elmo.admin#InvalidARNFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotNotFoundFault":
        case "elmo.admin#SnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagNotFoundFault":
        case "elmo.admin#TagNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryResetCacheParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResetCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ResetCacheParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CacheParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResetCacheParameterGroupCommand = deserializeAws_queryResetCacheParameterGroupCommand;
async function deserializeAws_queryResetCacheParameterGroupCommandError(output, context) {
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
        case "CacheParameterGroupNotFoundFault":
        case "elmo.admin#CacheParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "elmo.admin#InvalidCacheParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRevokeCacheSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeCacheSecurityGroupIngressResult(data.RevokeCacheSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeCacheSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = deserializeAws_queryRevokeCacheSecurityGroupIngressCommand;
async function deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(output, context) {
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
        case "AuthorizationNotFoundFault":
        case "elmo.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "elmo.admin#CacheSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "elmo.admin#InvalidCacheSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryStartMigrationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStartMigrationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartMigrationResponse(data.StartMigrationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMigrationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStartMigrationCommand = deserializeAws_queryStartMigrationCommand;
async function deserializeAws_queryStartMigrationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazon.coral.service#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupAlreadyUnderMigrationFault":
        case "elmo.admin#ReplicationGroupAlreadyUnderMigrationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryTestFailoverCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTestFailoverCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTestFailoverResult(data.TestFailoverResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestFailoverResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTestFailoverCommand = deserializeAws_queryTestFailoverCommand;
async function deserializeAws_queryTestFailoverCommandError(output, context) {
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
        case "APICallRateForCustomerExceededFault":
        case "elmo.admin#APICallRateForCustomerExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAPICallRateForCustomerExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCacheClusterStateFault":
        case "elmo.admin#InvalidCacheClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSKeyFault":
        case "elmo.admin#InvalidKMSKeyFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplicationGroupStateFault":
        case "elmo.admin#InvalidReplicationGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NodeGroupNotFoundFault":
        case "elmo.admin#NodeGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNodeGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationGroupNotFoundFault":
        case "elmo.admin#ReplicationGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TestFailoverNotAvailableFault":
        case "elmo.admin#TestFailoverNotAvailableFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTestFailoverNotAvailableFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAPICallRateForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAPICallRateForCustomerExceededFault(body.Error, context);
    const contents = Object.assign({ name: "APICallRateForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryCacheClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheClusterAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "CacheClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheClusterNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CacheClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "CacheParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CacheParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "CacheParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSecurityGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSecurityGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSubnetGroupInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupInUse(body.Error, context);
    const contents = Object.assign({ name: "CacheSubnetGroupInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCacheSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "CacheSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterQuotaForCustomerExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ClusterQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientCacheClusterCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientCacheClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidARNFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidARNFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidARNFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidCacheClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheClusterStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidCacheClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheParameterGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidCacheParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheSecurityGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidCacheSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidKMSKeyFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidKMSKeyFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidKMSKeyFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidReplicationGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidReplicationGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidReplicationGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnapshotStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubnet(body.Error, context);
    const contents = Object.assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidVPCNetworkStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNoOperationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNoOperationFault(body.Error, context);
    const contents = Object.assign({ name: "NoOperationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNodeGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "NodeGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "NodeGroupsPerReplicationGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNodeQuotaForClusterExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeQuotaForClusterExceededFault(body.Error, context);
    const contents = Object.assign({ name: "NodeQuotaForClusterExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeQuotaForCustomerExceededFault(body.Error, context);
    const contents = Object.assign({ name: "NodeQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ReplicationGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault(body.Error, context);
    const contents = Object.assign({ name: "ReplicationGroupAlreadyUnderMigrationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReplicationGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReplicationGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupNotUnderMigrationFault(body.Error, context);
    const contents = Object.assign({ name: "ReplicationGroupNotUnderMigrationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedCacheNodeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedCacheNodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedCacheNodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedCacheNodeQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodesOfferingNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedCacheNodesOfferingNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceLinkedRoleNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ServiceLinkedRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryServiceUpdateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceUpdateNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ServiceUpdateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotFeatureNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotFeatureNotSupportedFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotFeatureNotSupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubnetInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetInUse(body.Error, context);
    const contents = Object.assign({ name: "SubnetInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTagNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "TagNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTagQuotaPerResourceExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagQuotaPerResourceExceeded(body.Error, context);
    const contents = Object.assign({ name: "TagQuotaPerResourceExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTestFailoverNotAvailableFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTestFailoverNotAvailableFault(body.Error, context);
    const contents = Object.assign({ name: "TestFailoverNotAvailableFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAddTagsToResourceMessage = (input, context) => {
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
const serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_queryAvailabilityZonesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`AvailabilityZone.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBatchApplyUpdateActionMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterIds !== undefined) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupIds !== undefined) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ServiceUpdateName !== undefined) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
const serializeAws_queryBatchStopUpdateActionMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterIds !== undefined) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupIds !== undefined) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ServiceUpdateName !== undefined) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
const serializeAws_queryCacheClusterIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCacheNodeIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`CacheNodeId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCacheSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`CacheSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCompleteMigrationMessage = (input, context) => {
    const entries = {};
    if (input.Force !== undefined) {
        entries["Force"] = input.Force;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryConfigureShard = (input, context) => {
    const entries = {};
    if (input.NewReplicaCount !== undefined) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.NodeGroupId !== undefined) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.PreferredAvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PreferredAvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCopySnapshotMessage = (input, context) => {
    const entries = {};
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.SourceSnapshotName !== undefined) {
        entries["SourceSnapshotName"] = input.SourceSnapshotName;
    }
    if (input.TargetBucket !== undefined) {
        entries["TargetBucket"] = input.TargetBucket;
    }
    if (input.TargetSnapshotName !== undefined) {
        entries["TargetSnapshotName"] = input.TargetSnapshotName;
    }
    return entries;
};
const serializeAws_queryCreateCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.AZMode !== undefined) {
        entries["AZMode"] = input.AZMode;
    }
    if (input.AuthToken !== undefined) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined) {
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.NotificationTopicArn !== undefined) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.NumCacheNodes !== undefined) {
        entries["NumCacheNodes"] = input.NumCacheNodes;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredAvailabilityZone !== undefined) {
        entries["PreferredAvailabilityZone"] = input.PreferredAvailabilityZone;
    }
    if (input.PreferredAvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PreferredAvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.SecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotArns !== undefined) {
        const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SnapshotArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotName !== undefined) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.SnapshotRetentionLimit !== undefined) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
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
const serializeAws_queryCreateCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupFamily !== undefined) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
    }
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryCreateCacheSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryCreateCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupDescription !== undefined) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
    }
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
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
const serializeAws_queryCreateReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.AtRestEncryptionEnabled !== undefined) {
        entries["AtRestEncryptionEnabled"] = input.AtRestEncryptionEnabled;
    }
    if (input.AuthToken !== undefined) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AutomaticFailoverEnabled !== undefined) {
        entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
    }
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined) {
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.NodeGroupConfiguration !== undefined) {
        const memberEntries = serializeAws_queryNodeGroupConfigurationList(input.NodeGroupConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NodeGroupConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NotificationTopicArn !== undefined) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.NumCacheClusters !== undefined) {
        entries["NumCacheClusters"] = input.NumCacheClusters;
    }
    if (input.NumNodeGroups !== undefined) {
        entries["NumNodeGroups"] = input.NumNodeGroups;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredCacheClusterAZs !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredCacheClusterAZs, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PreferredCacheClusterAZs.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PrimaryClusterId !== undefined) {
        entries["PrimaryClusterId"] = input.PrimaryClusterId;
    }
    if (input.ReplicasPerNodeGroup !== undefined) {
        entries["ReplicasPerNodeGroup"] = input.ReplicasPerNodeGroup;
    }
    if (input.ReplicationGroupDescription !== undefined) {
        entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.SecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotArns !== undefined) {
        const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SnapshotArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotName !== undefined) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.SnapshotRetentionLimit !== undefined) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TransitEncryptionEnabled !== undefined) {
        entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
    }
    return entries;
};
const serializeAws_queryCreateSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.SnapshotName !== undefined) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    return entries;
};
const serializeAws_queryCustomerNodeEndpoint = (input, context) => {
    const entries = {};
    if (input.Address !== undefined) {
        entries["Address"] = input.Address;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    return entries;
};
const serializeAws_queryCustomerNodeEndpointList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryCustomerNodeEndpoint(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDecreaseReplicaCountMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.NewReplicaCount !== undefined) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined) {
        const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicaConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicasToRemove !== undefined) {
        const memberEntries = serializeAws_queryRemoveReplicasList(input.ReplicasToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicasToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryDeleteCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.FinalSnapshotIdentifier !== undefined) {
        entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteCacheSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.FinalSnapshotIdentifier !== undefined) {
        entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.RetainPrimaryCluster !== undefined) {
        entries["RetainPrimaryCluster"] = input.RetainPrimaryCluster;
    }
    return entries;
};
const serializeAws_queryDeleteSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotName !== undefined) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    return entries;
};
const serializeAws_queryDescribeCacheClustersMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ShowCacheClustersNotInReplicationGroups !== undefined) {
        entries["ShowCacheClustersNotInReplicationGroups"] =
            input.ShowCacheClustersNotInReplicationGroups;
    }
    if (input.ShowCacheNodeInfo !== undefined) {
        entries["ShowCacheNodeInfo"] = input.ShowCacheNodeInfo;
    }
    return entries;
};
const serializeAws_queryDescribeCacheEngineVersionsMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupFamily !== undefined) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
    }
    if (input.DefaultOnly !== undefined) {
        entries["DefaultOnly"] = input.DefaultOnly;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeCacheParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeCacheParametersMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    return entries;
};
const serializeAws_queryDescribeCacheSecurityGroupsMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeCacheSubnetGroupsMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeEngineDefaultParametersMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupFamily !== undefined) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
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
const serializeAws_queryDescribeReplicationGroupsMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryDescribeReservedCacheNodesMessage = (input, context) => {
    const entries = {};
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Duration !== undefined) {
        entries["Duration"] = input.Duration;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.OfferingType !== undefined) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.ProductDescription !== undefined) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.ReservedCacheNodeId !== undefined) {
        entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
    }
    if (input.ReservedCacheNodesOfferingId !== undefined) {
        entries["ReservedCacheNodesOfferingId"] =
            input.ReservedCacheNodesOfferingId;
    }
    return entries;
};
const serializeAws_queryDescribeReservedCacheNodesOfferingsMessage = (input, context) => {
    const entries = {};
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Duration !== undefined) {
        entries["Duration"] = input.Duration;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.OfferingType !== undefined) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.ProductDescription !== undefined) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.ReservedCacheNodesOfferingId !== undefined) {
        entries["ReservedCacheNodesOfferingId"] =
            input.ReservedCacheNodesOfferingId;
    }
    return entries;
};
const serializeAws_queryDescribeServiceUpdatesMessage = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ServiceUpdateName !== undefined) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ServiceUpdateStatus !== undefined) {
        const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ServiceUpdateStatus.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ShowNodeGroupConfig !== undefined) {
        entries["ShowNodeGroupConfig"] = input.ShowNodeGroupConfig;
    }
    if (input.SnapshotName !== undefined) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.SnapshotSource !== undefined) {
        entries["SnapshotSource"] = input.SnapshotSource;
    }
    return entries;
};
const serializeAws_queryDescribeUpdateActionsMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterIds !== undefined) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ReplicationGroupIds !== undefined) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ServiceUpdateName !== undefined) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ServiceUpdateStatus !== undefined) {
        const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ServiceUpdateStatus.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ServiceUpdateTimeRange !== undefined) {
        const memberEntries = serializeAws_queryTimeRangeFilter(input.ServiceUpdateTimeRange, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ServiceUpdateTimeRange.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ShowNodeLevelUpdateStatus !== undefined) {
        entries["ShowNodeLevelUpdateStatus"] = input.ShowNodeLevelUpdateStatus;
    }
    if (input.UpdateActionStatus !== undefined) {
        const memberEntries = serializeAws_queryUpdateActionStatusList(input.UpdateActionStatus, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `UpdateActionStatus.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryIncreaseReplicaCountMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.NewReplicaCount !== undefined) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined) {
        const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicaConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListAllowedNodeTypeModificationsMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    return entries;
};
const serializeAws_queryModifyCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.AZMode !== undefined) {
        entries["AZMode"] = input.AZMode;
    }
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.AuthToken !== undefined) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AuthTokenUpdateStrategy !== undefined) {
        entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.CacheNodeIdsToRemove !== undefined) {
        const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheNodeIdsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined) {
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.NewAvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.NewAvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NewAvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NotificationTopicArn !== undefined) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.NotificationTopicStatus !== undefined) {
        entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
    }
    if (input.NumCacheNodes !== undefined) {
        entries["NumCacheNodes"] = input.NumCacheNodes;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.SecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotRetentionLimit !== undefined) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    return entries;
};
const serializeAws_queryModifyCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ParameterNameValues !== undefined) {
        const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ParameterNameValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupDescription !== undefined) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
    }
    if (input.CacheSubnetGroupName !== undefined) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
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
const serializeAws_queryModifyReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.AuthToken !== undefined) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AuthTokenUpdateStrategy !== undefined) {
        entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AutomaticFailoverEnabled !== undefined) {
        entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
    }
    if (input.CacheNodeType !== undefined) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined) {
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.NodeGroupId !== undefined) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.NotificationTopicArn !== undefined) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.NotificationTopicStatus !== undefined) {
        entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PrimaryClusterId !== undefined) {
        entries["PrimaryClusterId"] = input.PrimaryClusterId;
    }
    if (input.ReplicationGroupDescription !== undefined) {
        entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.SecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SnapshotRetentionLimit !== undefined) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.SnapshottingClusterId !== undefined) {
        entries["SnapshottingClusterId"] = input.SnapshottingClusterId;
    }
    return entries;
};
const serializeAws_queryModifyReplicationGroupShardConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.NodeGroupCount !== undefined) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.NodeGroupsToRemove !== undefined) {
        const memberEntries = serializeAws_queryNodeGroupsToRemoveList(input.NodeGroupsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NodeGroupsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.NodeGroupsToRetain !== undefined) {
        const memberEntries = serializeAws_queryNodeGroupsToRetainList(input.NodeGroupsToRetain, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `NodeGroupsToRetain.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReshardingConfiguration !== undefined) {
        const memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReshardingConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryNodeGroupConfiguration = (input, context) => {
    const entries = {};
    if (input.NodeGroupId !== undefined) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.PrimaryAvailabilityZone !== undefined) {
        entries["PrimaryAvailabilityZone"] = input.PrimaryAvailabilityZone;
    }
    if (input.ReplicaAvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.ReplicaAvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplicaAvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicaCount !== undefined) {
        entries["ReplicaCount"] = input.ReplicaCount;
    }
    if (input.Slots !== undefined) {
        entries["Slots"] = input.Slots;
    }
    return entries;
};
const serializeAws_queryNodeGroupConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryNodeGroupConfiguration(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`NodeGroupConfiguration.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryNodeGroupsToRemoveList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`NodeGroupToRemove.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryNodeGroupsToRetainList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`NodeGroupToRetain.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryParameterNameValue = (input, context) => {
    const entries = {};
    if (input.ParameterName !== undefined) {
        entries["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    return entries;
};
const serializeAws_queryParameterNameValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryParameterNameValue(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`ParameterNameValue.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPreferredAvailabilityZoneList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`PreferredAvailabilityZone.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedCacheNodesOfferingMessage = (input, context) => {
    const entries = {};
    if (input.CacheNodeCount !== undefined) {
        entries["CacheNodeCount"] = input.CacheNodeCount;
    }
    if (input.ReservedCacheNodeId !== undefined) {
        entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
    }
    if (input.ReservedCacheNodesOfferingId !== undefined) {
        entries["ReservedCacheNodesOfferingId"] =
            input.ReservedCacheNodesOfferingId;
    }
    return entries;
};
const serializeAws_queryRebootCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.CacheNodeIdsToReboot !== undefined) {
        const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToReboot, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CacheNodeIdsToReboot.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRemoveReplicasList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRemoveTagsFromResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryReplicaConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryConfigureShard(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`ConfigureShard.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryReplicationGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryResetCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ParameterNameValues !== undefined) {
        const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ParameterNameValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResetAllParameters !== undefined) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    return entries;
};
const serializeAws_queryReshardingConfiguration = (input, context) => {
    const entries = {};
    if (input.NodeGroupId !== undefined) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.PreferredAvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredAvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PreferredAvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryReshardingConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryReshardingConfiguration(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`ReshardingConfiguration.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRevokeCacheSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_querySecurityGroupIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`SecurityGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryServiceUpdateStatusList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySnapshotArnsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`SnapshotArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStartMigrationMessage = (input, context) => {
    const entries = {};
    if (input.CustomerNodeEndpointList !== undefined) {
        const memberEntries = serializeAws_queryCustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CustomerNodeEndpointList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
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
const serializeAws_queryTestFailoverMessage = (input, context) => {
    const entries = {};
    if (input.NodeGroupId !== undefined) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.ReplicationGroupId !== undefined) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryTimeRangeFilter = (input, context) => {
    const entries = {};
    if (input.EndTime !== undefined) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.StartTime !== undefined) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryUpdateActionStatusList = (input, context) => {
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
const deserializeAws_queryAPICallRateForCustomerExceededFault = (output, context) => {
    let contents = {
        __type: "APICallRateForCustomerExceededFault",
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
const deserializeAws_queryCacheClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "CacheClusterAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheClusterNotFoundFault = (output, context) => {
    let contents = {
        __type: "CacheClusterNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupInUse = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroupInUse",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "CacheSubnetQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        __type: "ClusterQuotaForCustomerExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientCacheClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientCacheClusterCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidARNFault = (output, context) => {
    let contents = {
        __type: "InvalidARNFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheClusterStateFault = (output, context) => {
    let contents = {
        __type: "InvalidCacheClusterStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheParameterGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidCacheParameterGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheSecurityGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidCacheSecurityGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidKMSKeyFault = (output, context) => {
    let contents = {
        __type: "InvalidKMSKeyFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidReplicationGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidReplicationGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnapshotStateFault = (output, context) => {
    let contents = {
        __type: "InvalidSnapshotStateFault",
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
const deserializeAws_queryNoOperationFault = (output, context) => {
    let contents = {
        __type: "NoOperationFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "NodeGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "NodeGroupsPerReplicationGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeQuotaForClusterExceededFault = (output, context) => {
    let contents = {
        __type: "NodeQuotaForClusterExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        __type: "NodeQuotaForCustomerExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ReplicationGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault = (output, context) => {
    let contents = {
        __type: "ReplicationGroupAlreadyUnderMigrationFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReplicationGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupNotUnderMigrationFault = (output, context) => {
    let contents = {
        __type: "ReplicationGroupNotUnderMigrationFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodeAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodeNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodeQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodesOfferingNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceLinkedRoleNotFoundFault = (output, context) => {
    let contents = {
        __type: "ServiceLinkedRoleNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceUpdateNotFoundFault = (output, context) => {
    let contents = {
        __type: "ServiceUpdateNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "SnapshotAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotFeatureNotSupportedFault = (output, context) => {
    let contents = {
        __type: "SnapshotFeatureNotSupportedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotNotFoundFault = (output, context) => {
    let contents = {
        __type: "SnapshotNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SnapshotQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubnetInUse = (output, context) => {
    let contents = {
        __type: "SubnetInUse",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagNotFoundFault = (output, context) => {
    let contents = {
        __type: "TagNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagQuotaPerResourceExceeded = (output, context) => {
    let contents = {
        __type: "TagQuotaPerResourceExceeded",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTestFailoverNotAvailableFault = (output, context) => {
    let contents = {
        __type: "TestFailoverNotAvailableFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAllowedNodeTypeModificationsMessage = (output, context) => {
    let contents = {
        __type: "AllowedNodeTypeModificationsMessage",
        ScaleDownModifications: undefined,
        ScaleUpModifications: undefined
    };
    if (output.ScaleDownModifications === "") {
        contents.ScaleDownModifications = [];
    }
    if (output["ScaleDownModifications"] !== undefined &&
        output["ScaleDownModifications"]["member"] !== undefined) {
        const wrappedItem = output["ScaleDownModifications"]["member"] instanceof Array
            ? output["ScaleDownModifications"]["member"]
            : [output["ScaleDownModifications"]["member"]];
        contents.ScaleDownModifications = deserializeAws_queryNodeTypeList(wrappedItem, context);
    }
    if (output.ScaleUpModifications === "") {
        contents.ScaleUpModifications = [];
    }
    if (output["ScaleUpModifications"] !== undefined &&
        output["ScaleUpModifications"]["member"] !== undefined) {
        const wrappedItem = output["ScaleUpModifications"]["member"] instanceof Array
            ? output["ScaleUpModifications"]["member"]
            : [output["ScaleUpModifications"]["member"]];
        contents.ScaleUpModifications = deserializeAws_queryNodeTypeList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "AuthorizeCacheSecurityGroupIngressResult",
        CacheSecurityGroup: undefined
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
        __type: "AvailabilityZone",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZonesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCacheCluster = (output, context) => {
    let contents = {
        __type: "CacheCluster",
        AtRestEncryptionEnabled: undefined,
        AuthTokenEnabled: undefined,
        AuthTokenLastModifiedDate: undefined,
        AutoMinorVersionUpgrade: undefined,
        CacheClusterCreateTime: undefined,
        CacheClusterId: undefined,
        CacheClusterStatus: undefined,
        CacheNodeType: undefined,
        CacheNodes: undefined,
        CacheParameterGroup: undefined,
        CacheSecurityGroups: undefined,
        CacheSubnetGroupName: undefined,
        ClientDownloadLandingPage: undefined,
        ConfigurationEndpoint: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        NotificationConfiguration: undefined,
        NumCacheNodes: undefined,
        PendingModifiedValues: undefined,
        PreferredAvailabilityZone: undefined,
        PreferredMaintenanceWindow: undefined,
        ReplicationGroupId: undefined,
        SecurityGroups: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotWindow: undefined,
        TransitEncryptionEnabled: undefined
    };
    if (output["AtRestEncryptionEnabled"] !== undefined) {
        contents.AtRestEncryptionEnabled =
            output["AtRestEncryptionEnabled"] == "true";
    }
    if (output["AuthTokenEnabled"] !== undefined) {
        contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
    }
    if (output["AuthTokenLastModifiedDate"] !== undefined) {
        contents.AuthTokenLastModifiedDate = new Date(output["AuthTokenLastModifiedDate"]);
    }
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade =
            output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output["CacheClusterCreateTime"] !== undefined) {
        contents.CacheClusterCreateTime = new Date(output["CacheClusterCreateTime"]);
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheClusterStatus"] !== undefined) {
        contents.CacheClusterStatus = output["CacheClusterStatus"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output.CacheNodes === "") {
        contents.CacheNodes = [];
    }
    if (output["CacheNodes"] !== undefined &&
        output["CacheNodes"]["CacheNode"] !== undefined) {
        const wrappedItem = output["CacheNodes"]["CacheNode"] instanceof Array
            ? output["CacheNodes"]["CacheNode"]
            : [output["CacheNodes"]["CacheNode"]];
        contents.CacheNodes = deserializeAws_queryCacheNodeList(wrappedItem, context);
    }
    if (output["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroupStatus(output["CacheParameterGroup"], context);
    }
    if (output.CacheSecurityGroups === "") {
        contents.CacheSecurityGroups = [];
    }
    if (output["CacheSecurityGroups"] !== undefined &&
        output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined) {
        const wrappedItem = output["CacheSecurityGroups"]["CacheSecurityGroup"] instanceof Array
            ? output["CacheSecurityGroups"]["CacheSecurityGroup"]
            : [output["CacheSecurityGroups"]["CacheSecurityGroup"]];
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroupMembershipList(wrappedItem, context);
    }
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
    }
    if (output["ClientDownloadLandingPage"] !== undefined) {
        contents.ClientDownloadLandingPage = output["ClientDownloadLandingPage"];
    }
    if (output["ConfigurationEndpoint"] !== undefined) {
        contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["NotificationConfiguration"] !== undefined) {
        contents.NotificationConfiguration = deserializeAws_queryNotificationConfiguration(output["NotificationConfiguration"], context);
    }
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined &&
        output["SecurityGroups"]["member"] !== undefined) {
        const wrappedItem = output["SecurityGroups"]["member"] instanceof Array
            ? output["SecurityGroups"]["member"]
            : [output["SecurityGroups"]["member"]];
        contents.SecurityGroups = deserializeAws_querySecurityGroupMembershipList(wrappedItem, context);
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["TransitEncryptionEnabled"] !== undefined) {
        contents.TransitEncryptionEnabled =
            output["TransitEncryptionEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryCacheClusterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheCluster(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheClusterMessage = (output, context) => {
    let contents = {
        __type: "CacheClusterMessage",
        CacheClusters: undefined,
        Marker: undefined
    };
    if (output.CacheClusters === "") {
        contents.CacheClusters = [];
    }
    if (output["CacheClusters"] !== undefined &&
        output["CacheClusters"]["CacheCluster"] !== undefined) {
        const wrappedItem = output["CacheClusters"]["CacheCluster"] instanceof Array
            ? output["CacheClusters"]["CacheCluster"]
            : [output["CacheClusters"]["CacheCluster"]];
        contents.CacheClusters = deserializeAws_queryCacheClusterList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCacheEngineVersion = (output, context) => {
    let contents = {
        __type: "CacheEngineVersion",
        CacheEngineDescription: undefined,
        CacheEngineVersionDescription: undefined,
        CacheParameterGroupFamily: undefined,
        Engine: undefined,
        EngineVersion: undefined
    };
    if (output["CacheEngineDescription"] !== undefined) {
        contents.CacheEngineDescription = output["CacheEngineDescription"];
    }
    if (output["CacheEngineVersionDescription"] !== undefined) {
        contents.CacheEngineVersionDescription =
            output["CacheEngineVersionDescription"];
    }
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    return contents;
};
const deserializeAws_queryCacheEngineVersionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheEngineVersion(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheEngineVersionMessage = (output, context) => {
    let contents = {
        __type: "CacheEngineVersionMessage",
        CacheEngineVersions: undefined,
        Marker: undefined
    };
    if (output.CacheEngineVersions === "") {
        contents.CacheEngineVersions = [];
    }
    if (output["CacheEngineVersions"] !== undefined &&
        output["CacheEngineVersions"]["CacheEngineVersion"] !== undefined) {
        const wrappedItem = output["CacheEngineVersions"]["CacheEngineVersion"] instanceof Array
            ? output["CacheEngineVersions"]["CacheEngineVersion"]
            : [output["CacheEngineVersions"]["CacheEngineVersion"]];
        contents.CacheEngineVersions = deserializeAws_queryCacheEngineVersionList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCacheNode = (output, context) => {
    let contents = {
        __type: "CacheNode",
        CacheNodeCreateTime: undefined,
        CacheNodeId: undefined,
        CacheNodeStatus: undefined,
        CustomerAvailabilityZone: undefined,
        Endpoint: undefined,
        ParameterGroupStatus: undefined,
        SourceCacheNodeId: undefined
    };
    if (output["CacheNodeCreateTime"] !== undefined) {
        contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["CacheNodeStatus"] !== undefined) {
        contents.CacheNodeStatus = output["CacheNodeStatus"];
    }
    if (output["CustomerAvailabilityZone"] !== undefined) {
        contents.CustomerAvailabilityZone = output["CustomerAvailabilityZone"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
    }
    if (output["ParameterGroupStatus"] !== undefined) {
        contents.ParameterGroupStatus = output["ParameterGroupStatus"];
    }
    if (output["SourceCacheNodeId"] !== undefined) {
        contents.SourceCacheNodeId = output["SourceCacheNodeId"];
    }
    return contents;
};
const deserializeAws_queryCacheNodeIdsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCacheNodeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheNode(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheNodeTypeSpecificParameter = (output, context) => {
    let contents = {
        __type: "CacheNodeTypeSpecificParameter",
        AllowedValues: undefined,
        CacheNodeTypeSpecificValues: undefined,
        ChangeType: undefined,
        DataType: undefined,
        Description: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
        ParameterName: undefined,
        Source: undefined
    };
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output.CacheNodeTypeSpecificValues === "") {
        contents.CacheNodeTypeSpecificValues = [];
    }
    if (output["CacheNodeTypeSpecificValues"] !== undefined &&
        output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"] !==
            undefined) {
        const wrappedItem = output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"] instanceof Array
            ? output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]
            : [output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]];
        contents.CacheNodeTypeSpecificValues = deserializeAws_queryCacheNodeTypeSpecificValueList(wrappedItem, context);
    }
    if (output["ChangeType"] !== undefined) {
        contents.ChangeType = output["ChangeType"];
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
    if (output["Source"] !== undefined) {
        contents.Source = output["Source"];
    }
    return contents;
};
const deserializeAws_queryCacheNodeTypeSpecificParametersList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheNodeTypeSpecificParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheNodeTypeSpecificValue = (output, context) => {
    let contents = {
        __type: "CacheNodeTypeSpecificValue",
        CacheNodeType: undefined,
        Value: undefined
    };
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryCacheNodeTypeSpecificValueList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheNodeTypeSpecificValue(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheNodeUpdateStatus = (output, context) => {
    let contents = {
        __type: "CacheNodeUpdateStatus",
        CacheNodeId: undefined,
        NodeDeletionDate: undefined,
        NodeUpdateEndDate: undefined,
        NodeUpdateInitiatedBy: undefined,
        NodeUpdateInitiatedDate: undefined,
        NodeUpdateStartDate: undefined,
        NodeUpdateStatus: undefined,
        NodeUpdateStatusModifiedDate: undefined
    };
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["NodeDeletionDate"] !== undefined) {
        contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
    }
    if (output["NodeUpdateEndDate"] !== undefined) {
        contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
    }
    if (output["NodeUpdateInitiatedBy"] !== undefined) {
        contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
    }
    if (output["NodeUpdateInitiatedDate"] !== undefined) {
        contents.NodeUpdateInitiatedDate = new Date(output["NodeUpdateInitiatedDate"]);
    }
    if (output["NodeUpdateStartDate"] !== undefined) {
        contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
    }
    if (output["NodeUpdateStatus"] !== undefined) {
        contents.NodeUpdateStatus = output["NodeUpdateStatus"];
    }
    if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
        contents.NodeUpdateStatusModifiedDate = new Date(output["NodeUpdateStatusModifiedDate"]);
    }
    return contents;
};
const deserializeAws_queryCacheNodeUpdateStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheNodeUpdateStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheParameterGroup = (output, context) => {
    let contents = {
        __type: "CacheParameterGroup",
        CacheParameterGroupFamily: undefined,
        CacheParameterGroupName: undefined,
        Description: undefined
    };
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
    }
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupDetails = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupDetails",
        CacheNodeTypeSpecificParameters: undefined,
        Marker: undefined,
        Parameters: undefined
    };
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        const wrappedItem = output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] instanceof Array
            ? output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]
            : [
                output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]
            ];
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(wrappedItem, context);
    }
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
const deserializeAws_queryCacheParameterGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheParameterGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheParameterGroupNameMessage = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupNameMessage",
        CacheParameterGroupName: undefined
    };
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupStatus = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupStatus",
        CacheNodeIdsToReboot: undefined,
        CacheParameterGroupName: undefined,
        ParameterApplyStatus: undefined
    };
    if (output.CacheNodeIdsToReboot === "") {
        contents.CacheNodeIdsToReboot = [];
    }
    if (output["CacheNodeIdsToReboot"] !== undefined &&
        output["CacheNodeIdsToReboot"]["CacheNodeId"] !== undefined) {
        const wrappedItem = output["CacheNodeIdsToReboot"]["CacheNodeId"] instanceof Array
            ? output["CacheNodeIdsToReboot"]["CacheNodeId"]
            : [output["CacheNodeIdsToReboot"]["CacheNodeId"]];
        contents.CacheNodeIdsToReboot = deserializeAws_queryCacheNodeIdsList(wrappedItem, context);
    }
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupsMessage = (output, context) => {
    let contents = {
        __type: "CacheParameterGroupsMessage",
        CacheParameterGroups: undefined,
        Marker: undefined
    };
    if (output.CacheParameterGroups === "") {
        contents.CacheParameterGroups = [];
    }
    if (output["CacheParameterGroups"] !== undefined &&
        output["CacheParameterGroups"]["CacheParameterGroup"] !== undefined) {
        const wrappedItem = output["CacheParameterGroups"]["CacheParameterGroup"] instanceof Array
            ? output["CacheParameterGroups"]["CacheParameterGroup"]
            : [output["CacheParameterGroups"]["CacheParameterGroup"]];
        contents.CacheParameterGroups = deserializeAws_queryCacheParameterGroupList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroup = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroup",
        CacheSecurityGroupName: undefined,
        Description: undefined,
        EC2SecurityGroups: undefined,
        OwnerId: undefined
    };
    if (output["CacheSecurityGroupName"] !== undefined) {
        contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
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
    if (output["OwnerId"] !== undefined) {
        contents.OwnerId = output["OwnerId"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroupMembership",
        CacheSecurityGroupName: undefined,
        Status: undefined
    };
    if (output["CacheSecurityGroupName"] !== undefined) {
        contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheSecurityGroupMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheSecurityGroupMessage = (output, context) => {
    let contents = {
        __type: "CacheSecurityGroupMessage",
        CacheSecurityGroups: undefined,
        Marker: undefined
    };
    if (output.CacheSecurityGroups === "") {
        contents.CacheSecurityGroups = [];
    }
    if (output["CacheSecurityGroups"] !== undefined &&
        output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined) {
        const wrappedItem = output["CacheSecurityGroups"]["CacheSecurityGroup"] instanceof Array
            ? output["CacheSecurityGroups"]["CacheSecurityGroup"]
            : [output["CacheSecurityGroups"]["CacheSecurityGroup"]];
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheSecurityGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryCacheSubnetGroup = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroup",
        CacheSubnetGroupDescription: undefined,
        CacheSubnetGroupName: undefined,
        Subnets: undefined,
        VpcId: undefined
    };
    if (output["CacheSubnetGroupDescription"] !== undefined) {
        contents.CacheSubnetGroupDescription =
            output["CacheSubnetGroupDescription"];
    }
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
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
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupMessage = (output, context) => {
    let contents = {
        __type: "CacheSubnetGroupMessage",
        CacheSubnetGroups: undefined,
        Marker: undefined
    };
    if (output.CacheSubnetGroups === "") {
        contents.CacheSubnetGroups = [];
    }
    if (output["CacheSubnetGroups"] !== undefined &&
        output["CacheSubnetGroups"]["CacheSubnetGroup"] !== undefined) {
        const wrappedItem = output["CacheSubnetGroups"]["CacheSubnetGroup"] instanceof Array
            ? output["CacheSubnetGroups"]["CacheSubnetGroup"]
            : [output["CacheSubnetGroups"]["CacheSubnetGroup"]];
        contents.CacheSubnetGroups = deserializeAws_queryCacheSubnetGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCacheSubnetGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryClusterIdList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCompleteMigrationResponse = (output, context) => {
    let contents = {
        __type: "CompleteMigrationResponse",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCopySnapshotResult = (output, context) => {
    let contents = {
        __type: "CopySnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheClusterResult = (output, context) => {
    let contents = {
        __type: "CreateCacheClusterResult",
        CacheCluster: undefined
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CreateCacheParameterGroupResult",
        CacheParameterGroup: undefined
    };
    if (output["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroup(output["CacheParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheSecurityGroupResult = (output, context) => {
    let contents = {
        __type: "CreateCacheSecurityGroupResult",
        CacheSecurityGroup: undefined
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "CreateCacheSubnetGroupResult",
        CacheSubnetGroup: undefined
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateReplicationGroupResult = (output, context) => {
    let contents = {
        __type: "CreateReplicationGroupResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDecreaseReplicaCountResult = (output, context) => {
    let contents = {
        __type: "DecreaseReplicaCountResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteCacheClusterResult = (output, context) => {
    let contents = {
        __type: "DeleteCacheClusterResult",
        CacheCluster: undefined
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteReplicationGroupResult = (output, context) => {
    let contents = {
        __type: "DeleteReplicationGroupResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteSnapshotResult",
        Snapshot: undefined
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEngineDefaultParametersResult = (output, context) => {
    let contents = {
        __type: "DescribeEngineDefaultParametersResult",
        EngineDefaults: undefined
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeSnapshotsListMessage = (output, context) => {
    let contents = {
        __type: "DescribeSnapshotsListMessage",
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
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
        __type: "EC2SecurityGroup",
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupOwnerId: undefined,
        Status: undefined
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
    return contents;
};
const deserializeAws_queryEC2SecurityGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEC2SecurityGroup(entry, context));
    });
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
const deserializeAws_queryEngineDefaults = (output, context) => {
    let contents = {
        __type: "EngineDefaults",
        CacheNodeTypeSpecificParameters: undefined,
        CacheParameterGroupFamily: undefined,
        Marker: undefined,
        Parameters: undefined
    };
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        const wrappedItem = output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] instanceof Array
            ? output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]
            : [
                output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]
            ];
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(wrappedItem, context);
    }
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
    }
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
const deserializeAws_queryEvent = (output, context) => {
    let contents = {
        __type: "Event",
        Date: undefined,
        Message: undefined,
        SourceIdentifier: undefined,
        SourceType: undefined
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["SourceIdentifier"] !== undefined) {
        contents.SourceIdentifier = output["SourceIdentifier"];
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    return contents;
};
const deserializeAws_queryEventList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEvent(entry, context));
    });
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
const deserializeAws_queryIncreaseReplicaCountResult = (output, context) => {
    let contents = {
        __type: "IncreaseReplicaCountResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyCacheClusterResult = (output, context) => {
    let contents = {
        __type: "ModifyCacheClusterResult",
        CacheCluster: undefined
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyCacheSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "ModifyCacheSubnetGroupResult",
        CacheSubnetGroup: undefined
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyReplicationGroupResult = (output, context) => {
    let contents = {
        __type: "ModifyReplicationGroupResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyReplicationGroupShardConfigurationResult = (output, context) => {
    let contents = {
        __type: "ModifyReplicationGroupShardConfigurationResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryNodeGroup = (output, context) => {
    let contents = {
        __type: "NodeGroup",
        NodeGroupId: undefined,
        NodeGroupMembers: undefined,
        PrimaryEndpoint: undefined,
        ReaderEndpoint: undefined,
        Slots: undefined,
        Status: undefined
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output.NodeGroupMembers === "") {
        contents.NodeGroupMembers = [];
    }
    if (output["NodeGroupMembers"] !== undefined &&
        output["NodeGroupMembers"]["NodeGroupMember"] !== undefined) {
        const wrappedItem = output["NodeGroupMembers"]["NodeGroupMember"] instanceof Array
            ? output["NodeGroupMembers"]["NodeGroupMember"]
            : [output["NodeGroupMembers"]["NodeGroupMember"]];
        contents.NodeGroupMembers = deserializeAws_queryNodeGroupMemberList(wrappedItem, context);
    }
    if (output["PrimaryEndpoint"] !== undefined) {
        contents.PrimaryEndpoint = deserializeAws_queryEndpoint(output["PrimaryEndpoint"], context);
    }
    if (output["ReaderEndpoint"] !== undefined) {
        contents.ReaderEndpoint = deserializeAws_queryEndpoint(output["ReaderEndpoint"], context);
    }
    if (output["Slots"] !== undefined) {
        contents.Slots = output["Slots"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupConfiguration = (output, context) => {
    let contents = {
        __type: "NodeGroupConfiguration",
        NodeGroupId: undefined,
        PrimaryAvailabilityZone: undefined,
        ReplicaAvailabilityZones: undefined,
        ReplicaCount: undefined,
        Slots: undefined
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output["PrimaryAvailabilityZone"] !== undefined) {
        contents.PrimaryAvailabilityZone = output["PrimaryAvailabilityZone"];
    }
    if (output.ReplicaAvailabilityZones === "") {
        contents.ReplicaAvailabilityZones = [];
    }
    if (output["ReplicaAvailabilityZones"] !== undefined &&
        output["ReplicaAvailabilityZones"]["AvailabilityZone"] !== undefined) {
        const wrappedItem = output["ReplicaAvailabilityZones"]["AvailabilityZone"] instanceof Array
            ? output["ReplicaAvailabilityZones"]["AvailabilityZone"]
            : [output["ReplicaAvailabilityZones"]["AvailabilityZone"]];
        contents.ReplicaAvailabilityZones = deserializeAws_queryAvailabilityZonesList(wrappedItem, context);
    }
    if (output["ReplicaCount"] !== undefined) {
        contents.ReplicaCount = parseInt(output["ReplicaCount"]);
    }
    if (output["Slots"] !== undefined) {
        contents.Slots = output["Slots"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeGroupMember = (output, context) => {
    let contents = {
        __type: "NodeGroupMember",
        CacheClusterId: undefined,
        CacheNodeId: undefined,
        CurrentRole: undefined,
        PreferredAvailabilityZone: undefined,
        ReadEndpoint: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["CurrentRole"] !== undefined) {
        contents.CurrentRole = output["CurrentRole"];
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["ReadEndpoint"] !== undefined) {
        contents.ReadEndpoint = deserializeAws_queryEndpoint(output["ReadEndpoint"], context);
    }
    return contents;
};
const deserializeAws_queryNodeGroupMemberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeGroupMember(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeGroupMemberUpdateStatus = (output, context) => {
    let contents = {
        __type: "NodeGroupMemberUpdateStatus",
        CacheClusterId: undefined,
        CacheNodeId: undefined,
        NodeDeletionDate: undefined,
        NodeUpdateEndDate: undefined,
        NodeUpdateInitiatedBy: undefined,
        NodeUpdateInitiatedDate: undefined,
        NodeUpdateStartDate: undefined,
        NodeUpdateStatus: undefined,
        NodeUpdateStatusModifiedDate: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["NodeDeletionDate"] !== undefined) {
        contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
    }
    if (output["NodeUpdateEndDate"] !== undefined) {
        contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
    }
    if (output["NodeUpdateInitiatedBy"] !== undefined) {
        contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
    }
    if (output["NodeUpdateInitiatedDate"] !== undefined) {
        contents.NodeUpdateInitiatedDate = new Date(output["NodeUpdateInitiatedDate"]);
    }
    if (output["NodeUpdateStartDate"] !== undefined) {
        contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
    }
    if (output["NodeUpdateStatus"] !== undefined) {
        contents.NodeUpdateStatus = output["NodeUpdateStatus"];
    }
    if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
        contents.NodeUpdateStatusModifiedDate = new Date(output["NodeUpdateStatusModifiedDate"]);
    }
    return contents;
};
const deserializeAws_queryNodeGroupMemberUpdateStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeGroupMemberUpdateStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeGroupUpdateStatus = (output, context) => {
    let contents = {
        __type: "NodeGroupUpdateStatus",
        NodeGroupId: undefined,
        NodeGroupMemberUpdateStatus: undefined
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output.NodeGroupMemberUpdateStatus === "") {
        contents.NodeGroupMemberUpdateStatus = [];
    }
    if (output["NodeGroupMemberUpdateStatus"] !== undefined &&
        output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] !==
            undefined) {
        const wrappedItem = output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] instanceof Array
            ? output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]
            : [
                output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]
            ];
        contents.NodeGroupMemberUpdateStatus = deserializeAws_queryNodeGroupMemberUpdateStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryNodeGroupUpdateStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeGroupUpdateStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeSnapshot = (output, context) => {
    let contents = {
        __type: "NodeSnapshot",
        CacheClusterId: undefined,
        CacheNodeCreateTime: undefined,
        CacheNodeId: undefined,
        CacheSize: undefined,
        NodeGroupConfiguration: undefined,
        NodeGroupId: undefined,
        SnapshotCreateTime: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeCreateTime"] !== undefined) {
        contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["CacheSize"] !== undefined) {
        contents.CacheSize = output["CacheSize"];
    }
    if (output["NodeGroupConfiguration"] !== undefined) {
        contents.NodeGroupConfiguration = deserializeAws_queryNodeGroupConfiguration(output["NodeGroupConfiguration"], context);
    }
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    return contents;
};
const deserializeAws_queryNodeSnapshotList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryNodeSnapshot(entry, context));
    });
    return contents;
};
const deserializeAws_queryNodeTypeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryNotificationConfiguration = (output, context) => {
    let contents = {
        __type: "NotificationConfiguration",
        TopicArn: undefined,
        TopicStatus: undefined
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["TopicStatus"] !== undefined) {
        contents.TopicStatus = output["TopicStatus"];
    }
    return contents;
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        AllowedValues: undefined,
        ChangeType: undefined,
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
    if (output["ChangeType"] !== undefined) {
        contents.ChangeType = output["ChangeType"];
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
const deserializeAws_queryParametersList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
        __type: "PendingModifiedValues",
        AuthTokenStatus: undefined,
        CacheNodeIdsToRemove: undefined,
        CacheNodeType: undefined,
        EngineVersion: undefined,
        NumCacheNodes: undefined
    };
    if (output["AuthTokenStatus"] !== undefined) {
        contents.AuthTokenStatus = output["AuthTokenStatus"];
    }
    if (output.CacheNodeIdsToRemove === "") {
        contents.CacheNodeIdsToRemove = [];
    }
    if (output["CacheNodeIdsToRemove"] !== undefined &&
        output["CacheNodeIdsToRemove"]["CacheNodeId"] !== undefined) {
        const wrappedItem = output["CacheNodeIdsToRemove"]["CacheNodeId"] instanceof Array
            ? output["CacheNodeIdsToRemove"]["CacheNodeId"]
            : [output["CacheNodeIdsToRemove"]["CacheNodeId"]];
        contents.CacheNodeIdsToRemove = deserializeAws_queryCacheNodeIdsList(wrappedItem, context);
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    return contents;
};
const deserializeAws_queryProcessedUpdateAction = (output, context) => {
    let contents = {
        __type: "ProcessedUpdateAction",
        CacheClusterId: undefined,
        ReplicationGroupId: undefined,
        ServiceUpdateName: undefined,
        UpdateActionStatus: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["UpdateActionStatus"] !== undefined) {
        contents.UpdateActionStatus = output["UpdateActionStatus"];
    }
    return contents;
};
const deserializeAws_queryProcessedUpdateActionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryProcessedUpdateAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryPurchaseReservedCacheNodesOfferingResult = (output, context) => {
    let contents = {
        __type: "PurchaseReservedCacheNodesOfferingResult",
        ReservedCacheNode: undefined
    };
    if (output["ReservedCacheNode"] !== undefined) {
        contents.ReservedCacheNode = deserializeAws_queryReservedCacheNode(output["ReservedCacheNode"], context);
    }
    return contents;
};
const deserializeAws_queryRebootCacheClusterResult = (output, context) => {
    let contents = {
        __type: "RebootCacheClusterResult",
        CacheCluster: undefined
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
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
const deserializeAws_queryReplicationGroup = (output, context) => {
    let contents = {
        __type: "ReplicationGroup",
        AtRestEncryptionEnabled: undefined,
        AuthTokenEnabled: undefined,
        AuthTokenLastModifiedDate: undefined,
        AutomaticFailover: undefined,
        CacheNodeType: undefined,
        ClusterEnabled: undefined,
        ConfigurationEndpoint: undefined,
        Description: undefined,
        KmsKeyId: undefined,
        MemberClusters: undefined,
        NodeGroups: undefined,
        PendingModifiedValues: undefined,
        ReplicationGroupId: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotWindow: undefined,
        SnapshottingClusterId: undefined,
        Status: undefined,
        TransitEncryptionEnabled: undefined
    };
    if (output["AtRestEncryptionEnabled"] !== undefined) {
        contents.AtRestEncryptionEnabled =
            output["AtRestEncryptionEnabled"] == "true";
    }
    if (output["AuthTokenEnabled"] !== undefined) {
        contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
    }
    if (output["AuthTokenLastModifiedDate"] !== undefined) {
        contents.AuthTokenLastModifiedDate = new Date(output["AuthTokenLastModifiedDate"]);
    }
    if (output["AutomaticFailover"] !== undefined) {
        contents.AutomaticFailover = output["AutomaticFailover"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["ClusterEnabled"] !== undefined) {
        contents.ClusterEnabled = output["ClusterEnabled"] == "true";
    }
    if (output["ConfigurationEndpoint"] !== undefined) {
        contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output.MemberClusters === "") {
        contents.MemberClusters = [];
    }
    if (output["MemberClusters"] !== undefined &&
        output["MemberClusters"]["ClusterId"] !== undefined) {
        const wrappedItem = output["MemberClusters"]["ClusterId"] instanceof Array
            ? output["MemberClusters"]["ClusterId"]
            : [output["MemberClusters"]["ClusterId"]];
        contents.MemberClusters = deserializeAws_queryClusterIdList(wrappedItem, context);
    }
    if (output.NodeGroups === "") {
        contents.NodeGroups = [];
    }
    if (output["NodeGroups"] !== undefined &&
        output["NodeGroups"]["NodeGroup"] !== undefined) {
        const wrappedItem = output["NodeGroups"]["NodeGroup"] instanceof Array
            ? output["NodeGroups"]["NodeGroup"]
            : [output["NodeGroups"]["NodeGroup"]];
        contents.NodeGroups = deserializeAws_queryNodeGroupList(wrappedItem, context);
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryReplicationGroupPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["SnapshottingClusterId"] !== undefined) {
        contents.SnapshottingClusterId = output["SnapshottingClusterId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TransitEncryptionEnabled"] !== undefined) {
        contents.TransitEncryptionEnabled =
            output["TransitEncryptionEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryReplicationGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReplicationGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryReplicationGroupMessage = (output, context) => {
    let contents = {
        __type: "ReplicationGroupMessage",
        Marker: undefined,
        ReplicationGroups: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReplicationGroups === "") {
        contents.ReplicationGroups = [];
    }
    if (output["ReplicationGroups"] !== undefined &&
        output["ReplicationGroups"]["ReplicationGroup"] !== undefined) {
        const wrappedItem = output["ReplicationGroups"]["ReplicationGroup"] instanceof Array
            ? output["ReplicationGroups"]["ReplicationGroup"]
            : [output["ReplicationGroups"]["ReplicationGroup"]];
        contents.ReplicationGroups = deserializeAws_queryReplicationGroupList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryReplicationGroupPendingModifiedValues = (output, context) => {
    let contents = {
        __type: "ReplicationGroupPendingModifiedValues",
        AuthTokenStatus: undefined,
        AutomaticFailoverStatus: undefined,
        PrimaryClusterId: undefined,
        Resharding: undefined
    };
    if (output["AuthTokenStatus"] !== undefined) {
        contents.AuthTokenStatus = output["AuthTokenStatus"];
    }
    if (output["AutomaticFailoverStatus"] !== undefined) {
        contents.AutomaticFailoverStatus = output["AutomaticFailoverStatus"];
    }
    if (output["PrimaryClusterId"] !== undefined) {
        contents.PrimaryClusterId = output["PrimaryClusterId"];
    }
    if (output["Resharding"] !== undefined) {
        contents.Resharding = deserializeAws_queryReshardingStatus(output["Resharding"], context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNode = (output, context) => {
    let contents = {
        __type: "ReservedCacheNode",
        CacheNodeCount: undefined,
        CacheNodeType: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        OfferingType: undefined,
        ProductDescription: undefined,
        RecurringCharges: undefined,
        ReservationARN: undefined,
        ReservedCacheNodeId: undefined,
        ReservedCacheNodesOfferingId: undefined,
        StartTime: undefined,
        State: undefined,
        UsagePrice: undefined
    };
    if (output["CacheNodeCount"] !== undefined) {
        contents.CacheNodeCount = parseInt(output["CacheNodeCount"]);
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
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
    if (output["ReservationARN"] !== undefined) {
        contents.ReservationARN = output["ReservationARN"];
    }
    if (output["ReservedCacheNodeId"] !== undefined) {
        contents.ReservedCacheNodeId = output["ReservedCacheNodeId"];
    }
    if (output["ReservedCacheNodesOfferingId"] !== undefined) {
        contents.ReservedCacheNodesOfferingId =
            output["ReservedCacheNodesOfferingId"];
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
const deserializeAws_queryReservedCacheNodeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedCacheNode(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedCacheNodeMessage = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodeMessage",
        Marker: undefined,
        ReservedCacheNodes: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedCacheNodes === "") {
        contents.ReservedCacheNodes = [];
    }
    if (output["ReservedCacheNodes"] !== undefined &&
        output["ReservedCacheNodes"]["ReservedCacheNode"] !== undefined) {
        const wrappedItem = output["ReservedCacheNodes"]["ReservedCacheNode"] instanceof Array
            ? output["ReservedCacheNodes"]["ReservedCacheNode"]
            : [output["ReservedCacheNodes"]["ReservedCacheNode"]];
        contents.ReservedCacheNodes = deserializeAws_queryReservedCacheNodeList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOffering = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodesOffering",
        CacheNodeType: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        OfferingType: undefined,
        ProductDescription: undefined,
        RecurringCharges: undefined,
        ReservedCacheNodesOfferingId: undefined,
        UsagePrice: undefined
    };
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
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
    if (output["ReservedCacheNodesOfferingId"] !== undefined) {
        contents.ReservedCacheNodesOfferingId =
            output["ReservedCacheNodesOfferingId"];
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedCacheNodesOffering(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingMessage = (output, context) => {
    let contents = {
        __type: "ReservedCacheNodesOfferingMessage",
        Marker: undefined,
        ReservedCacheNodesOfferings: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedCacheNodesOfferings === "") {
        contents.ReservedCacheNodesOfferings = [];
    }
    if (output["ReservedCacheNodesOfferings"] !== undefined &&
        output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] !==
            undefined) {
        const wrappedItem = output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] instanceof Array
            ? output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]
            : [output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]];
        contents.ReservedCacheNodesOfferings = deserializeAws_queryReservedCacheNodesOfferingList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryReshardingStatus = (output, context) => {
    let contents = {
        __type: "ReshardingStatus",
        SlotMigration: undefined
    };
    if (output["SlotMigration"] !== undefined) {
        contents.SlotMigration = deserializeAws_querySlotMigration(output["SlotMigration"], context);
    }
    return contents;
};
const deserializeAws_queryRevokeCacheSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "RevokeCacheSecurityGroupIngressResult",
        CacheSecurityGroup: undefined
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_querySecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "SecurityGroupMembership",
        SecurityGroupId: undefined,
        Status: undefined
    };
    if (output["SecurityGroupId"] !== undefined) {
        contents.SecurityGroupId = output["SecurityGroupId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_querySecurityGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySecurityGroupMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryServiceUpdate = (output, context) => {
    let contents = {
        __type: "ServiceUpdate",
        AutoUpdateAfterRecommendedApplyByDate: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        EstimatedUpdateTime: undefined,
        ServiceUpdateDescription: undefined,
        ServiceUpdateEndDate: undefined,
        ServiceUpdateName: undefined,
        ServiceUpdateRecommendedApplyByDate: undefined,
        ServiceUpdateReleaseDate: undefined,
        ServiceUpdateSeverity: undefined,
        ServiceUpdateStatus: undefined,
        ServiceUpdateType: undefined
    };
    if (output["AutoUpdateAfterRecommendedApplyByDate"] !== undefined) {
        contents.AutoUpdateAfterRecommendedApplyByDate =
            output["AutoUpdateAfterRecommendedApplyByDate"] == "true";
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["EstimatedUpdateTime"] !== undefined) {
        contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
    }
    if (output["ServiceUpdateDescription"] !== undefined) {
        contents.ServiceUpdateDescription = output["ServiceUpdateDescription"];
    }
    if (output["ServiceUpdateEndDate"] !== undefined) {
        contents.ServiceUpdateEndDate = new Date(output["ServiceUpdateEndDate"]);
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
        contents.ServiceUpdateRecommendedApplyByDate = new Date(output["ServiceUpdateRecommendedApplyByDate"]);
    }
    if (output["ServiceUpdateReleaseDate"] !== undefined) {
        contents.ServiceUpdateReleaseDate = new Date(output["ServiceUpdateReleaseDate"]);
    }
    if (output["ServiceUpdateSeverity"] !== undefined) {
        contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
    }
    if (output["ServiceUpdateStatus"] !== undefined) {
        contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
    }
    if (output["ServiceUpdateType"] !== undefined) {
        contents.ServiceUpdateType = output["ServiceUpdateType"];
    }
    return contents;
};
const deserializeAws_queryServiceUpdateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryServiceUpdate(entry, context));
    });
    return contents;
};
const deserializeAws_queryServiceUpdatesMessage = (output, context) => {
    let contents = {
        __type: "ServiceUpdatesMessage",
        Marker: undefined,
        ServiceUpdates: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ServiceUpdates === "") {
        contents.ServiceUpdates = [];
    }
    if (output["ServiceUpdates"] !== undefined &&
        output["ServiceUpdates"]["ServiceUpdate"] !== undefined) {
        const wrappedItem = output["ServiceUpdates"]["ServiceUpdate"] instanceof Array
            ? output["ServiceUpdates"]["ServiceUpdate"]
            : [output["ServiceUpdates"]["ServiceUpdate"]];
        contents.ServiceUpdates = deserializeAws_queryServiceUpdateList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySlotMigration = (output, context) => {
    let contents = {
        __type: "SlotMigration",
        ProgressPercentage: undefined
    };
    if (output["ProgressPercentage"] !== undefined) {
        contents.ProgressPercentage = parseFloat(output["ProgressPercentage"]);
    }
    return contents;
};
const deserializeAws_querySnapshot = (output, context) => {
    let contents = {
        __type: "Snapshot",
        AutoMinorVersionUpgrade: undefined,
        AutomaticFailover: undefined,
        CacheClusterCreateTime: undefined,
        CacheClusterId: undefined,
        CacheNodeType: undefined,
        CacheParameterGroupName: undefined,
        CacheSubnetGroupName: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        KmsKeyId: undefined,
        NodeSnapshots: undefined,
        NumCacheNodes: undefined,
        NumNodeGroups: undefined,
        Port: undefined,
        PreferredAvailabilityZone: undefined,
        PreferredMaintenanceWindow: undefined,
        ReplicationGroupDescription: undefined,
        ReplicationGroupId: undefined,
        SnapshotName: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotSource: undefined,
        SnapshotStatus: undefined,
        SnapshotWindow: undefined,
        TopicArn: undefined,
        VpcId: undefined
    };
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade =
            output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output["AutomaticFailover"] !== undefined) {
        contents.AutomaticFailover = output["AutomaticFailover"];
    }
    if (output["CacheClusterCreateTime"] !== undefined) {
        contents.CacheClusterCreateTime = new Date(output["CacheClusterCreateTime"]);
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output.NodeSnapshots === "") {
        contents.NodeSnapshots = [];
    }
    if (output["NodeSnapshots"] !== undefined &&
        output["NodeSnapshots"]["NodeSnapshot"] !== undefined) {
        const wrappedItem = output["NodeSnapshots"]["NodeSnapshot"] instanceof Array
            ? output["NodeSnapshots"]["NodeSnapshot"]
            : [output["NodeSnapshots"]["NodeSnapshot"]];
        contents.NodeSnapshots = deserializeAws_queryNodeSnapshotList(wrappedItem, context);
    }
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    if (output["NumNodeGroups"] !== undefined) {
        contents.NumNodeGroups = parseInt(output["NumNodeGroups"]);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["ReplicationGroupDescription"] !== undefined) {
        contents.ReplicationGroupDescription =
            output["ReplicationGroupDescription"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["SnapshotName"] !== undefined) {
        contents.SnapshotName = output["SnapshotName"];
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotSource"] !== undefined) {
        contents.SnapshotSource = output["SnapshotSource"];
    }
    if (output["SnapshotStatus"] !== undefined) {
        contents.SnapshotStatus = output["SnapshotStatus"];
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_querySnapshotList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySnapshot(entry, context));
    });
    return contents;
};
const deserializeAws_queryStartMigrationResponse = (output, context) => {
    let contents = {
        __type: "StartMigrationResponse",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_querySubnet = (output, context) => {
    let contents = {
        __type: "Subnet",
        SubnetAvailabilityZone: undefined,
        SubnetIdentifier: undefined
    };
    if (output["SubnetAvailabilityZone"] !== undefined) {
        contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
    }
    if (output["SubnetIdentifier"] !== undefined) {
        contents.SubnetIdentifier = output["SubnetIdentifier"];
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
const deserializeAws_queryTagListMessage = (output, context) => {
    let contents = {
        __type: "TagListMessage",
        TagList: undefined
    };
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined &&
        output["TagList"]["Tag"] !== undefined) {
        const wrappedItem = output["TagList"]["Tag"] instanceof Array
            ? output["TagList"]["Tag"]
            : [output["TagList"]["Tag"]];
        contents.TagList = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryTestFailoverResult = (output, context) => {
    let contents = {
        __type: "TestFailoverResult",
        ReplicationGroup: undefined
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryUnprocessedUpdateAction = (output, context) => {
    let contents = {
        __type: "UnprocessedUpdateAction",
        CacheClusterId: undefined,
        ErrorMessage: undefined,
        ErrorType: undefined,
        ReplicationGroupId: undefined,
        ServiceUpdateName: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ErrorMessage"] !== undefined) {
        contents.ErrorMessage = output["ErrorMessage"];
    }
    if (output["ErrorType"] !== undefined) {
        contents.ErrorType = output["ErrorType"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    return contents;
};
const deserializeAws_queryUnprocessedUpdateActionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUnprocessedUpdateAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryUpdateAction = (output, context) => {
    let contents = {
        __type: "UpdateAction",
        CacheClusterId: undefined,
        CacheNodeUpdateStatus: undefined,
        Engine: undefined,
        EstimatedUpdateTime: undefined,
        NodeGroupUpdateStatus: undefined,
        NodesUpdated: undefined,
        ReplicationGroupId: undefined,
        ServiceUpdateName: undefined,
        ServiceUpdateRecommendedApplyByDate: undefined,
        ServiceUpdateReleaseDate: undefined,
        ServiceUpdateSeverity: undefined,
        ServiceUpdateStatus: undefined,
        ServiceUpdateType: undefined,
        SlaMet: undefined,
        UpdateActionAvailableDate: undefined,
        UpdateActionStatus: undefined,
        UpdateActionStatusModifiedDate: undefined
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output.CacheNodeUpdateStatus === "") {
        contents.CacheNodeUpdateStatus = [];
    }
    if (output["CacheNodeUpdateStatus"] !== undefined &&
        output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] !== undefined) {
        const wrappedItem = output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] instanceof Array
            ? output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]
            : [output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]];
        contents.CacheNodeUpdateStatus = deserializeAws_queryCacheNodeUpdateStatusList(wrappedItem, context);
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EstimatedUpdateTime"] !== undefined) {
        contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
    }
    if (output.NodeGroupUpdateStatus === "") {
        contents.NodeGroupUpdateStatus = [];
    }
    if (output["NodeGroupUpdateStatus"] !== undefined &&
        output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] !== undefined) {
        const wrappedItem = output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] instanceof Array
            ? output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]
            : [output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]];
        contents.NodeGroupUpdateStatus = deserializeAws_queryNodeGroupUpdateStatusList(wrappedItem, context);
    }
    if (output["NodesUpdated"] !== undefined) {
        contents.NodesUpdated = output["NodesUpdated"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
        contents.ServiceUpdateRecommendedApplyByDate = new Date(output["ServiceUpdateRecommendedApplyByDate"]);
    }
    if (output["ServiceUpdateReleaseDate"] !== undefined) {
        contents.ServiceUpdateReleaseDate = new Date(output["ServiceUpdateReleaseDate"]);
    }
    if (output["ServiceUpdateSeverity"] !== undefined) {
        contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
    }
    if (output["ServiceUpdateStatus"] !== undefined) {
        contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
    }
    if (output["ServiceUpdateType"] !== undefined) {
        contents.ServiceUpdateType = output["ServiceUpdateType"];
    }
    if (output["SlaMet"] !== undefined) {
        contents.SlaMet = output["SlaMet"];
    }
    if (output["UpdateActionAvailableDate"] !== undefined) {
        contents.UpdateActionAvailableDate = new Date(output["UpdateActionAvailableDate"]);
    }
    if (output["UpdateActionStatus"] !== undefined) {
        contents.UpdateActionStatus = output["UpdateActionStatus"];
    }
    if (output["UpdateActionStatusModifiedDate"] !== undefined) {
        contents.UpdateActionStatusModifiedDate = new Date(output["UpdateActionStatusModifiedDate"]);
    }
    return contents;
};
const deserializeAws_queryUpdateActionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUpdateAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryUpdateActionResultsMessage = (output, context) => {
    let contents = {
        __type: "UpdateActionResultsMessage",
        ProcessedUpdateActions: undefined,
        UnprocessedUpdateActions: undefined
    };
    if (output.ProcessedUpdateActions === "") {
        contents.ProcessedUpdateActions = [];
    }
    if (output["ProcessedUpdateActions"] !== undefined &&
        output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined) {
        const wrappedItem = output["ProcessedUpdateActions"]["ProcessedUpdateAction"] instanceof Array
            ? output["ProcessedUpdateActions"]["ProcessedUpdateAction"]
            : [output["ProcessedUpdateActions"]["ProcessedUpdateAction"]];
        contents.ProcessedUpdateActions = deserializeAws_queryProcessedUpdateActionList(wrappedItem, context);
    }
    if (output.UnprocessedUpdateActions === "") {
        contents.UnprocessedUpdateActions = [];
    }
    if (output["UnprocessedUpdateActions"] !== undefined &&
        output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] !== undefined) {
        const wrappedItem = output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] instanceof
            Array
            ? output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]
            : [output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]];
        contents.UnprocessedUpdateActions = deserializeAws_queryUnprocessedUpdateActionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryUpdateActionsMessage = (output, context) => {
    let contents = {
        __type: "UpdateActionsMessage",
        Marker: undefined,
        UpdateActions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.UpdateActions === "") {
        contents.UpdateActions = [];
    }
    if (output["UpdateActions"] !== undefined &&
        output["UpdateActions"]["UpdateAction"] !== undefined) {
        const wrappedItem = output["UpdateActions"]["UpdateAction"] instanceof Array
            ? output["UpdateActions"]["UpdateAction"]
            : [output["UpdateActions"]["UpdateAction"]];
        contents.UpdateActions = deserializeAws_queryUpdateActionList(wrappedItem, context);
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