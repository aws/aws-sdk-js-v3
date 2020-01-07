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
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddTagsToResource", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddTagsToResourceCommand = serializeAws_queryAddTagsToResourceCommand;
async function serializeAws_queryApplyPendingMaintenanceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryApplyPendingMaintenanceActionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ApplyPendingMaintenanceAction", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryApplyPendingMaintenanceActionCommand = serializeAws_queryApplyPendingMaintenanceActionCommand;
async function serializeAws_queryCopyDBClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyDBClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyDBClusterParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyDBClusterParameterGroupCommand = serializeAws_queryCopyDBClusterParameterGroupCommand;
async function serializeAws_queryCopyDBClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyDBClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyDBClusterSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyDBClusterSnapshotCommand = serializeAws_queryCopyDBClusterSnapshotCommand;
async function serializeAws_queryCreateDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBClusterCommand = serializeAws_queryCreateDBClusterCommand;
async function serializeAws_queryCreateDBClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBClusterParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBClusterParameterGroupCommand = serializeAws_queryCreateDBClusterParameterGroupCommand;
async function serializeAws_queryCreateDBClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBClusterSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBClusterSnapshotCommand = serializeAws_queryCreateDBClusterSnapshotCommand;
async function serializeAws_queryCreateDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBInstanceCommand = serializeAws_queryCreateDBInstanceCommand;
async function serializeAws_queryCreateDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBSubnetGroupCommand = serializeAws_queryCreateDBSubnetGroupCommand;
async function serializeAws_queryDeleteDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBClusterCommand = serializeAws_queryDeleteDBClusterCommand;
async function serializeAws_queryDeleteDBClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBClusterParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBClusterParameterGroupCommand = serializeAws_queryDeleteDBClusterParameterGroupCommand;
async function serializeAws_queryDeleteDBClusterSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBClusterSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBClusterSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBClusterSnapshotCommand = serializeAws_queryDeleteDBClusterSnapshotCommand;
async function serializeAws_queryDeleteDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBInstanceCommand = serializeAws_queryDeleteDBInstanceCommand;
async function serializeAws_queryDeleteDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBSubnetGroupCommand = serializeAws_queryDeleteDBSubnetGroupCommand;
async function serializeAws_queryDescribeCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCertificatesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCertificates", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCertificatesCommand = serializeAws_queryDescribeCertificatesCommand;
async function serializeAws_queryDescribeDBClusterParameterGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterParameterGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterParameterGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterParameterGroupsCommand = serializeAws_queryDescribeDBClusterParameterGroupsCommand;
async function serializeAws_queryDescribeDBClusterParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterParameters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterParametersCommand = serializeAws_queryDescribeDBClusterParametersCommand;
async function serializeAws_queryDescribeDBClusterSnapshotAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterSnapshotAttributesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterSnapshotAttributes", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = serializeAws_queryDescribeDBClusterSnapshotAttributesCommand;
async function serializeAws_queryDescribeDBClusterSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterSnapshotsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterSnapshots", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterSnapshotsCommand = serializeAws_queryDescribeDBClusterSnapshotsCommand;
async function serializeAws_queryDescribeDBClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClustersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClustersCommand = serializeAws_queryDescribeDBClustersCommand;
async function serializeAws_queryDescribeDBEngineVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBEngineVersionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBEngineVersions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBEngineVersionsCommand = serializeAws_queryDescribeDBEngineVersionsCommand;
async function serializeAws_queryDescribeDBInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBInstancesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBInstances", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBInstancesCommand = serializeAws_queryDescribeDBInstancesCommand;
async function serializeAws_queryDescribeDBSubnetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBSubnetGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBSubnetGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBSubnetGroupsCommand = serializeAws_queryDescribeDBSubnetGroupsCommand;
async function serializeAws_queryDescribeEngineDefaultClusterParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEngineDefaultClusterParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEngineDefaultClusterParameters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEngineDefaultClusterParametersCommand = serializeAws_queryDescribeEngineDefaultClusterParametersCommand;
async function serializeAws_queryDescribeEventCategoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventCategoriesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEventCategories", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventCategoriesCommand = serializeAws_queryDescribeEventCategoriesCommand;
async function serializeAws_queryDescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEvents", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
async function serializeAws_queryDescribeOrderableDBInstanceOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeOrderableDBInstanceOptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeOrderableDBInstanceOptions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = serializeAws_queryDescribeOrderableDBInstanceOptionsCommand;
async function serializeAws_queryDescribePendingMaintenanceActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribePendingMaintenanceActionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribePendingMaintenanceActions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribePendingMaintenanceActionsCommand = serializeAws_queryDescribePendingMaintenanceActionsCommand;
async function serializeAws_queryFailoverDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryFailoverDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "FailoverDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryFailoverDBClusterCommand = serializeAws_queryFailoverDBClusterCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryModifyDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBClusterCommand = serializeAws_queryModifyDBClusterCommand;
async function serializeAws_queryModifyDBClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBClusterParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBClusterParameterGroupCommand = serializeAws_queryModifyDBClusterParameterGroupCommand;
async function serializeAws_queryModifyDBClusterSnapshotAttributeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBClusterSnapshotAttributeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBClusterSnapshotAttribute", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBClusterSnapshotAttributeCommand = serializeAws_queryModifyDBClusterSnapshotAttributeCommand;
async function serializeAws_queryModifyDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBInstanceCommand = serializeAws_queryModifyDBInstanceCommand;
async function serializeAws_queryModifyDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBSubnetGroupCommand = serializeAws_queryModifyDBSubnetGroupCommand;
async function serializeAws_queryRebootDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRebootDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RebootDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRebootDBInstanceCommand = serializeAws_queryRebootDBInstanceCommand;
async function serializeAws_queryRemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveTagsFromResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveTagsFromResource", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveTagsFromResourceCommand = serializeAws_queryRemoveTagsFromResourceCommand;
async function serializeAws_queryResetDBClusterParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResetDBClusterParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResetDBClusterParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResetDBClusterParameterGroupCommand = serializeAws_queryResetDBClusterParameterGroupCommand;
async function serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBClusterFromSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBClusterFromSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBClusterFromSnapshotCommand = serializeAws_queryRestoreDBClusterFromSnapshotCommand;
async function serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBClusterToPointInTimeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBClusterToPointInTime", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBClusterToPointInTimeCommand = serializeAws_queryRestoreDBClusterToPointInTimeCommand;
async function serializeAws_queryStartDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStartDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StartDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStartDBClusterCommand = serializeAws_queryStartDBClusterCommand;
async function serializeAws_queryStopDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStopDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StopDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStopDBClusterCommand = serializeAws_queryStopDBClusterCommand;
async function deserializeAws_queryAddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddTagsToResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddTagsToResourceCommand = deserializeAws_queryAddTagsToResourceCommand;
async function deserializeAws_queryAddTagsToResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryApplyPendingMaintenanceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplyPendingMaintenanceActionResult(data.ApplyPendingMaintenanceActionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApplyPendingMaintenanceActionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryApplyPendingMaintenanceActionCommand = deserializeAws_queryApplyPendingMaintenanceActionCommand;
async function deserializeAws_queryApplyPendingMaintenanceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundFault":
        case "rds.admin#ResourceNotFoundFault":
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
async function deserializeAws_queryCopyDBClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBClusterParameterGroupResult(data.CopyDBClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyDBClusterParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyDBClusterParameterGroupCommand = deserializeAws_queryCopyDBClusterParameterGroupCommand;
async function deserializeAws_queryCopyDBClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "rds.admin#DBParameterGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "rds.admin#DBParameterGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCopyDBClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBClusterSnapshotResult(data.CopyDBClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyDBClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyDBClusterSnapshotCommand = deserializeAws_queryCopyDBClusterSnapshotCommand;
async function deserializeAws_queryCopyDBClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotAlreadyExistsFault":
        case "rds.admin#DBClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "rds.admin#SnapshotQuotaExceededFault":
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
async function deserializeAws_queryCreateDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterResult(data.CreateDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBClusterCommand = deserializeAws_queryCreateDBClusterCommand;
async function deserializeAws_queryCreateDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "rds.admin#DBClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "rds.admin#DBClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterQuotaExceededFault":
        case "rds.admin#DBClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "rds.admin#InsufficientStorageClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "rds.admin#InvalidDBSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterParameterGroupResult(data.CreateDBClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBClusterParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBClusterParameterGroupCommand = deserializeAws_queryCreateDBClusterParameterGroupCommand;
async function deserializeAws_queryCreateDBClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "rds.admin#DBParameterGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "rds.admin#DBParameterGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterSnapshotResult(data.CreateDBClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBClusterSnapshotCommand = deserializeAws_queryCreateDBClusterSnapshotCommand;
async function deserializeAws_queryCreateDBClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "rds.admin#DBClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "rds.admin#SnapshotQuotaExceededFault":
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
async function deserializeAws_queryCreateDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBInstanceResult(data.CreateDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBInstanceCommand = deserializeAws_queryCreateDBInstanceCommand;
async function deserializeAws_queryCreateDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceAlreadyExistsFault":
        case "rds.admin#DBInstanceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceQuotaExceededFault":
        case "rds.admin#InstanceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageTypeNotSupportedFault":
        case "rds.admin#StorageTypeNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSubnetGroupResult(data.CreateDBSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBSubnetGroupCommand = deserializeAws_queryCreateDBSubnetGroupCommand;
async function deserializeAws_queryCreateDBSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupAlreadyExistsFault":
        case "rds.admin#DBSubnetGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupQuotaExceededFault":
        case "rds.admin#DBSubnetGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetQuotaExceededFault":
        case "rds.admin#DBSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
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
async function deserializeAws_queryDeleteDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBClusterResult(data.DeleteDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBClusterCommand = deserializeAws_queryDeleteDBClusterCommand;
async function deserializeAws_queryDeleteDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "rds.admin#DBClusterSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "rds.admin#SnapshotQuotaExceededFault":
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
async function deserializeAws_queryDeleteDBClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBClusterParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBClusterParameterGroupCommand = deserializeAws_queryDeleteDBClusterParameterGroupCommand;
async function deserializeAws_queryDeleteDBClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBParameterGroupStateFault":
        case "rds.admin#InvalidDBParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteDBClusterSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBClusterSnapshotResult(data.DeleteDBClusterSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBClusterSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBClusterSnapshotCommand = deserializeAws_queryDeleteDBClusterSnapshotCommand;
async function deserializeAws_queryDeleteDBClusterSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBInstanceResult(data.DeleteDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBInstanceCommand = deserializeAws_queryDeleteDBInstanceCommand;
async function deserializeAws_queryDeleteDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "rds.admin#DBSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotQuotaExceededFault":
        case "rds.admin#SnapshotQuotaExceededFault":
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
async function deserializeAws_queryDeleteDBSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBSubnetGroupCommand = deserializeAws_queryDeleteDBSubnetGroupCommand;
async function deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "rds.admin#InvalidDBSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetStateFault":
        case "rds.admin#InvalidDBSubnetStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCertificateMessage(data.DescribeCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CertificateMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCertificatesCommand = deserializeAws_queryDescribeCertificatesCommand;
async function deserializeAws_queryDescribeCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundFault":
        case "rds.admin#CertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBClusterParameterGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupsMessage(data.DescribeDBClusterParameterGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterParameterGroupsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterParameterGroupsCommand = deserializeAws_queryDescribeDBClusterParameterGroupsCommand;
async function deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBClusterParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupDetails(data.DescribeDBClusterParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterParameterGroupDetails" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterParametersCommand = deserializeAws_queryDescribeDBClusterParametersCommand;
async function deserializeAws_queryDescribeDBClusterParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBClusterSnapshotAttributesResult(data.DescribeDBClusterSnapshotAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBClusterSnapshotAttributesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand;
async function deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBClusterSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterSnapshotMessage(data.DescribeDBClusterSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterSnapshotMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterSnapshotsCommand = deserializeAws_queryDescribeDBClusterSnapshotsCommand;
async function deserializeAws_queryDescribeDBClusterSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterMessage(data.DescribeDBClustersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClustersCommand = deserializeAws_queryDescribeDBClustersCommand;
async function deserializeAws_queryDescribeDBClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBEngineVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBEngineVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBEngineVersionMessage(data.DescribeDBEngineVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBEngineVersionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBEngineVersionsCommand = deserializeAws_queryDescribeDBEngineVersionsCommand;
async function deserializeAws_queryDescribeDBEngineVersionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeDBInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBInstanceMessage(data.DescribeDBInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBInstanceMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBInstancesCommand = deserializeAws_queryDescribeDBInstancesCommand;
async function deserializeAws_queryDescribeDBInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeDBSubnetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSubnetGroupMessage(data.DescribeDBSubnetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBSubnetGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBSubnetGroupsCommand = deserializeAws_queryDescribeDBSubnetGroupsCommand;
async function deserializeAws_queryDescribeDBSubnetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDescribeEngineDefaultClusterParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEngineDefaultClusterParametersResult(data.DescribeEngineDefaultClusterParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEngineDefaultClusterParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = deserializeAws_queryDescribeEngineDefaultClusterParametersCommand;
async function deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(output, context) {
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
async function deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOrderableDBInstanceOptionsMessage(data.DescribeOrderableDBInstanceOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OrderableDBInstanceOptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand;
async function deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(output, context) {
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
async function deserializeAws_queryDescribePendingMaintenanceActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribePendingMaintenanceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPendingMaintenanceActionsMessage(data.DescribePendingMaintenanceActionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PendingMaintenanceActionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribePendingMaintenanceActionsCommand = deserializeAws_queryDescribePendingMaintenanceActionsCommand;
async function deserializeAws_queryDescribePendingMaintenanceActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "rds.admin#ResourceNotFoundFault":
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
async function deserializeAws_queryFailoverDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryFailoverDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryFailoverDBClusterResult(data.FailoverDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "FailoverDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryFailoverDBClusterCommand = deserializeAws_queryFailoverDBClusterCommand;
async function deserializeAws_queryFailoverDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBClusterResult(data.ModifyDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBClusterCommand = deserializeAws_queryModifyDBClusterCommand;
async function deserializeAws_queryModifyDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "rds.admin#DBClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "rds.admin#DBClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "rds.admin#InvalidDBSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "rds.admin#InvalidDBSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ModifyDBClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBClusterParameterGroupCommand = deserializeAws_queryModifyDBClusterParameterGroupCommand;
async function deserializeAws_queryModifyDBClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBParameterGroupStateFault":
        case "rds.admin#InvalidDBParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBClusterSnapshotAttributeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBClusterSnapshotAttributeResult(data.ModifyDBClusterSnapshotAttributeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBClusterSnapshotAttributeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = deserializeAws_queryModifyDBClusterSnapshotAttributeCommand;
async function deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SharedSnapshotQuotaExceededFault":
        case "rds.admin#SharedSnapshotQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySharedSnapshotQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBInstanceResult(data.ModifyDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBInstanceCommand = deserializeAws_queryModifyDBInstanceCommand;
async function deserializeAws_queryModifyDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CertificateNotFoundFault":
        case "rds.admin#CertificateNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceAlreadyExistsFault":
        case "rds.admin#DBInstanceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBUpgradeDependencyFailureFault":
        case "rds.admin#DBUpgradeDependencyFailureFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "rds.admin#InvalidDBSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageTypeNotSupportedFault":
        case "rds.admin#StorageTypeNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBSubnetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSubnetGroupResult(data.ModifyDBSubnetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBSubnetGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBSubnetGroupCommand = deserializeAws_queryModifyDBSubnetGroupCommand;
async function deserializeAws_queryModifyDBSubnetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetQuotaExceededFault":
        case "rds.admin#DBSubnetQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetAlreadyInUse":
        case "rds.admin#SubnetAlreadyInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRebootDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRebootDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootDBInstanceResult(data.RebootDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRebootDBInstanceCommand = deserializeAws_queryRebootDBInstanceCommand;
async function deserializeAws_queryRebootDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveTagsFromResourceCommand = deserializeAws_queryRemoveTagsFromResourceCommand;
async function deserializeAws_queryRemoveTagsFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryResetDBClusterParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResetDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ResetDBClusterParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResetDBClusterParameterGroupCommand = deserializeAws_queryResetDBClusterParameterGroupCommand;
async function deserializeAws_queryResetDBClusterParameterGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "rds.admin#DBParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBParameterGroupStateFault":
        case "rds.admin#InvalidDBParameterGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterFromSnapshotResult(data.RestoreDBClusterFromSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBClusterFromSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBClusterFromSnapshotCommand = deserializeAws_queryRestoreDBClusterFromSnapshotCommand;
async function deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "rds.admin#DBClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterQuotaExceededFault":
        case "rds.admin#DBClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBClusterCapacityFault":
        case "rds.admin#InsufficientDBClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "rds.admin#InsufficientStorageClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSnapshotStateFault":
        case "rds.admin#InvalidDBSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRestoreFault":
        case "rds.admin#InvalidRestoreFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterToPointInTimeResult(data.RestoreDBClusterToPointInTimeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBClusterToPointInTimeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBClusterToPointInTimeCommand = deserializeAws_queryRestoreDBClusterToPointInTimeCommand;
async function deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "rds.admin#DBClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterQuotaExceededFault":
        case "rds.admin#DBClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "rds.admin#DBClusterSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBClusterCapacityFault":
        case "rds.admin#InsufficientDBClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "rds.admin#InsufficientStorageClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "rds.admin#InvalidDBClusterSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSnapshotStateFault":
        case "rds.admin#InvalidDBSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRestoreFault":
        case "rds.admin#InvalidRestoreFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnet":
        case "rds.admin#InvalidSubnet":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCNetworkStateFault":
        case "rds.admin#InvalidVPCNetworkStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StorageQuotaExceededFault":
        case "rds.admin#StorageQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryStartDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStartDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartDBClusterResult(data.StartDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStartDBClusterCommand = deserializeAws_queryStartDBClusterCommand;
async function deserializeAws_queryStartDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryStopDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStopDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopDBClusterResult(data.StopDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStopDBClusterCommand = deserializeAws_queryStopDBClusterCommand;
async function deserializeAws_queryStopDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "AuthorizationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCertificateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CertificateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterParameterGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterSnapshotAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterSnapshotNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSnapshotAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSnapshotNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetGroupDoesNotCoverEnoughAZs", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBUpgradeDependencyFailureFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBUpgradeDependencyFailureFault(body.Error, context);
    const contents = Object.assign({ name: "DBUpgradeDependencyFailureFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInstanceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstanceQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "InstanceQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientDBClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientDBClusterCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientDBClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientDBInstanceCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientDBInstanceCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientStorageClusterCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InsufficientStorageClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterSnapshotStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBClusterSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBInstanceStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBInstanceStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBInstanceStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBParameterGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSecurityGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSnapshotStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBSubnetGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBSubnetStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBSubnetStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRestoreFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRestoreFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidRestoreFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryKMSKeyNotAccessibleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSKeyNotAccessibleFault(body.Error, context);
    const contents = Object.assign({ name: "KMSKeyNotAccessibleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySharedSnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySharedSnapshotQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "SharedSnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "SnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStorageQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStorageQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "StorageQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStorageTypeNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStorageTypeNotSupportedFault(body.Error, context);
    const contents = Object.assign({ name: "StorageTypeNotSupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubnetAlreadyInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
    const contents = Object.assign({ name: "SubnetAlreadyInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_queryApplyPendingMaintenanceActionMessage = (input, context) => {
    const entries = {};
    if (input.ApplyAction !== undefined) {
        entries["ApplyAction"] = input.ApplyAction;
    }
    if (input.OptInType !== undefined) {
        entries["OptInType"] = input.OptInType;
    }
    if (input.ResourceIdentifier !== undefined) {
        entries["ResourceIdentifier"] = input.ResourceIdentifier;
    }
    return entries;
};
const serializeAws_queryAttributeValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`AttributeValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAvailabilityZones = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`AvailabilityZone.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCloudwatchLogsExportConfiguration = (input, context) => {
    const entries = {};
    if (input.DisableLogTypes !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.DisableLogTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DisableLogTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnableLogTypes !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableLogTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableLogTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCopyDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBClusterParameterGroupIdentifier !== undefined) {
        entries["SourceDBClusterParameterGroupIdentifier"] =
            input.SourceDBClusterParameterGroupIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetDBClusterParameterGroupDescription !== undefined) {
        entries["TargetDBClusterParameterGroupDescription"] =
            input.TargetDBClusterParameterGroupDescription;
    }
    if (input.TargetDBClusterParameterGroupIdentifier !== undefined) {
        entries["TargetDBClusterParameterGroupIdentifier"] =
            input.TargetDBClusterParameterGroupIdentifier;
    }
    return entries;
};
const serializeAws_queryCopyDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.CopyTags !== undefined) {
        entries["CopyTags"] = input.CopyTags;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.PreSignedUrl !== undefined) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.SourceDBClusterSnapshotIdentifier !== undefined) {
        entries["SourceDBClusterSnapshotIdentifier"] =
            input.SourceDBClusterSnapshotIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetDBClusterSnapshotIdentifier !== undefined) {
        entries["TargetDBClusterSnapshotIdentifier"] =
            input.TargetDBClusterSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryCreateDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
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
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.MasterUsername !== undefined) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredBackupWindow !== undefined) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.StorageEncrypted !== undefined) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
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
const serializeAws_queryCreateDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DBParameterGroupFamily !== undefined) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
const serializeAws_queryCreateDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterSnapshotIdentifier !== undefined) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
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
const serializeAws_queryCreateDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PromotionTier !== undefined) {
        entries["PromotionTier"] = input.PromotionTier;
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
const serializeAws_queryCreateDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupDescription !== undefined) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
const serializeAws_queryDeleteDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.FinalDBSnapshotIdentifier !== undefined) {
        entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
    }
    if (input.SkipFinalSnapshot !== undefined) {
        entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDescribeCertificatesMessage = (input, context) => {
    const entries = {};
    if (input.CertificateIdentifier !== undefined) {
        entries["CertificateIdentifier"] = input.CertificateIdentifier;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeDBClusterParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeDBClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    return entries;
};
const serializeAws_queryDescribeDBClusterSnapshotAttributesMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeDBClusterSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterSnapshotIdentifier !== undefined) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.IncludePublic !== undefined) {
        entries["IncludePublic"] = input.IncludePublic;
    }
    if (input.IncludeShared !== undefined) {
        entries["IncludeShared"] = input.IncludeShared;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.SnapshotType !== undefined) {
        entries["SnapshotType"] = input.SnapshotType;
    }
    return entries;
};
const serializeAws_queryDescribeDBClustersMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeDBEngineVersionsMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupFamily !== undefined) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ListSupportedCharacterSets !== undefined) {
        entries["ListSupportedCharacterSets"] = input.ListSupportedCharacterSets;
    }
    if (input.ListSupportedTimezones !== undefined) {
        entries["ListSupportedTimezones"] = input.ListSupportedTimezones;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeDBInstancesMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeDBSubnetGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeEngineDefaultClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupFamily !== undefined) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    return entries;
};
const serializeAws_queryDescribeEventCategoriesMessage = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
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
    if (input.EventCategories !== undefined) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EventCategories.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
const serializeAws_queryDescribeOrderableDBInstanceOptionsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Vpc !== undefined) {
        entries["Vpc"] = input.Vpc;
    }
    return entries;
};
const serializeAws_queryDescribePendingMaintenanceActionsMessage = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
    if (input.ResourceIdentifier !== undefined) {
        entries["ResourceIdentifier"] = input.ResourceIdentifier;
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
const serializeAws_queryFailoverDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.TargetDBInstanceIdentifier !== undefined) {
        entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryFilterValueList(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryFilter(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`Filter.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryFilterValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`Value.${counter}`] = entry;
        counter++;
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
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceName !== undefined) {
        entries["ResourceName"] = input.ResourceName;
    }
    return entries;
};
const serializeAws_queryLogTypeList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryModifyDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CloudwatchLogsExportConfiguration !== undefined) {
        const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CloudwatchLogsExportConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.NewDBClusterIdentifier !== undefined) {
        entries["NewDBClusterIdentifier"] = input.NewDBClusterIdentifier;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreferredBackupWindow !== undefined) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
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
const serializeAws_queryModifyDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
const serializeAws_queryModifyDBClusterSnapshotAttributeMessage = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.DBClusterSnapshotIdentifier !== undefined) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.ValuesToAdd !== undefined) {
        const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToAdd, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ValuesToAdd.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ValuesToRemove !== undefined) {
        const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ValuesToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.CACertificateIdentifier !== undefined) {
        entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.NewDBInstanceIdentifier !== undefined) {
        entries["NewDBInstanceIdentifier"] = input.NewDBInstanceIdentifier;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.PromotionTier !== undefined) {
        entries["PromotionTier"] = input.PromotionTier;
    }
    return entries;
};
const serializeAws_queryModifyDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupDescription !== undefined) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
const serializeAws_queryParameter = (input, context) => {
    const entries = {};
    if (input.AllowedValues !== undefined) {
        entries["AllowedValues"] = input.AllowedValues;
    }
    if (input.ApplyMethod !== undefined) {
        entries["ApplyMethod"] = input.ApplyMethod;
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
const serializeAws_queryRebootDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.ForceFailover !== undefined) {
        entries["ForceFailover"] = input.ForceFailover;
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
const serializeAws_queryResetDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
const serializeAws_queryRestoreDBClusterFromSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
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
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
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
    if (input.VpcSecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRestoreDBClusterToPointInTimeMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.RestoreToTime !== undefined) {
        entries["RestoreToTime"] =
            input.RestoreToTime.toISOString().split(".")[0] + "Z";
    }
    if (input.SourceDBClusterIdentifier !== undefined) {
        entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UseLatestRestorableTime !== undefined) {
        entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
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
const serializeAws_queryStartDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryStopDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
const serializeAws_queryVpcSecurityGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`VpcSecurityGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
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
const deserializeAws_queryCertificateNotFoundFault = (output, context) => {
    let contents = {
        __type: "CertificateNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBClusterAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterParameterGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBClusterQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshotAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshotNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBInstanceAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBInstanceNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBParameterGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBParameterGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBParameterGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBSnapshotAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBSnapshotNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupDoesNotCoverEnoughAZs",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBSubnetQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBUpgradeDependencyFailureFault = (output, context) => {
    let contents = {
        __type: "DBUpgradeDependencyFailureFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInstanceQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "InstanceQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientDBClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientDBClusterCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientDBInstanceCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientDBInstanceCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientStorageClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InsufficientStorageClusterCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterSnapshotStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBClusterSnapshotStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBClusterStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBInstanceStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBInstanceStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBParameterGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBParameterGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSecurityGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBSecurityGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSnapshotStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBSnapshotStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSubnetGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBSubnetGroupStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSubnetStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBSubnetStateFault",
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
const deserializeAws_queryKMSKeyNotAccessibleFault = (output, context) => {
    let contents = {
        __type: "KMSKeyNotAccessibleFault",
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
const deserializeAws_querySharedSnapshotQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "SharedSnapshotQuotaExceededFault",
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
const deserializeAws_queryStorageQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "StorageQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStorageTypeNotSupportedFault = (output, context) => {
    let contents = {
        __type: "StorageTypeNotSupportedFault",
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
const deserializeAws_queryApplyPendingMaintenanceActionResult = (output, context) => {
    let contents = {
        __type: "ApplyPendingMaintenanceActionResult",
        ResourcePendingMaintenanceActions: undefined
    };
    if (output["ResourcePendingMaintenanceActions"] !== undefined) {
        contents.ResourcePendingMaintenanceActions = deserializeAws_queryResourcePendingMaintenanceActions(output["ResourcePendingMaintenanceActions"], context);
    }
    return contents;
};
const deserializeAws_queryAttributeValueList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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
const deserializeAws_queryAvailabilityZoneList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAvailabilityZone(entry, context));
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
const deserializeAws_queryCertificate = (output, context) => {
    let contents = {
        __type: "Certificate",
        CertificateArn: undefined,
        CertificateIdentifier: undefined,
        CertificateType: undefined,
        Thumbprint: undefined,
        ValidFrom: undefined,
        ValidTill: undefined
    };
    if (output["CertificateArn"] !== undefined) {
        contents.CertificateArn = output["CertificateArn"];
    }
    if (output["CertificateIdentifier"] !== undefined) {
        contents.CertificateIdentifier = output["CertificateIdentifier"];
    }
    if (output["CertificateType"] !== undefined) {
        contents.CertificateType = output["CertificateType"];
    }
    if (output["Thumbprint"] !== undefined) {
        contents.Thumbprint = output["Thumbprint"];
    }
    if (output["ValidFrom"] !== undefined) {
        contents.ValidFrom = new Date(output["ValidFrom"]);
    }
    if (output["ValidTill"] !== undefined) {
        contents.ValidTill = new Date(output["ValidTill"]);
    }
    return contents;
};
const deserializeAws_queryCertificateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCertificate(entry, context));
    });
    return contents;
};
const deserializeAws_queryCertificateMessage = (output, context) => {
    let contents = {
        __type: "CertificateMessage",
        Certificates: undefined,
        Marker: undefined
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined &&
        output["Certificates"]["Certificate"] !== undefined) {
        const wrappedItem = output["Certificates"]["Certificate"] instanceof Array
            ? output["Certificates"]["Certificate"]
            : [output["Certificates"]["Certificate"]];
        contents.Certificates = deserializeAws_queryCertificateList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryCopyDBClusterParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CopyDBClusterParameterGroupResult",
        DBClusterParameterGroup: undefined
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCopyDBClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "CopyDBClusterSnapshotResult",
        DBClusterSnapshot: undefined
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CreateDBClusterParameterGroupResult",
        DBClusterParameterGroup: undefined
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterResult = (output, context) => {
    let contents = {
        __type: "CreateDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateDBClusterSnapshotResult",
        DBClusterSnapshot: undefined
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBInstanceResult = (output, context) => {
    let contents = {
        __type: "CreateDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "CreateDBSubnetGroupResult",
        DBSubnetGroup: undefined
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDBCluster = (output, context) => {
    let contents = {
        __type: "DBCluster",
        AssociatedRoles: undefined,
        AvailabilityZones: undefined,
        BackupRetentionPeriod: undefined,
        ClusterCreateTime: undefined,
        DBClusterArn: undefined,
        DBClusterIdentifier: undefined,
        DBClusterMembers: undefined,
        DBClusterParameterGroup: undefined,
        DBSubnetGroup: undefined,
        DbClusterResourceId: undefined,
        DeletionProtection: undefined,
        EarliestRestorableTime: undefined,
        EnabledCloudwatchLogsExports: undefined,
        Endpoint: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        HostedZoneId: undefined,
        KmsKeyId: undefined,
        LatestRestorableTime: undefined,
        MasterUsername: undefined,
        MultiAZ: undefined,
        PercentProgress: undefined,
        Port: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        ReaderEndpoint: undefined,
        Status: undefined,
        StorageEncrypted: undefined,
        VpcSecurityGroups: undefined
    };
    if (output.AssociatedRoles === "") {
        contents.AssociatedRoles = [];
    }
    if (output["AssociatedRoles"] !== undefined &&
        output["AssociatedRoles"]["DBClusterRole"] !== undefined) {
        const wrappedItem = output["AssociatedRoles"]["DBClusterRole"] instanceof Array
            ? output["AssociatedRoles"]["DBClusterRole"]
            : [output["AssociatedRoles"]["DBClusterRole"]];
        contents.AssociatedRoles = deserializeAws_queryDBClusterRoles(wrappedItem, context);
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["AvailabilityZone"] instanceof Array
            ? output["AvailabilityZones"]["AvailabilityZone"]
            : [output["AvailabilityZones"]["AvailabilityZone"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(wrappedItem, context);
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["DBClusterArn"] !== undefined) {
        contents.DBClusterArn = output["DBClusterArn"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output.DBClusterMembers === "") {
        contents.DBClusterMembers = [];
    }
    if (output["DBClusterMembers"] !== undefined &&
        output["DBClusterMembers"]["DBClusterMember"] !== undefined) {
        const wrappedItem = output["DBClusterMembers"]["DBClusterMember"] instanceof Array
            ? output["DBClusterMembers"]["DBClusterMember"]
            : [output["DBClusterMembers"]["DBClusterMember"]];
        contents.DBClusterMembers = deserializeAws_queryDBClusterMemberList(wrappedItem, context);
    }
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = output["DBClusterParameterGroup"];
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = output["DBSubnetGroup"];
    }
    if (output["DbClusterResourceId"] !== undefined) {
        contents.DbClusterResourceId = output["DbClusterResourceId"];
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output["EarliestRestorableTime"] !== undefined) {
        contents.EarliestRestorableTime = new Date(output["EarliestRestorableTime"]);
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        const wrappedItem = output["EnabledCloudwatchLogsExports"]["member"] instanceof Array
            ? output["EnabledCloudwatchLogsExports"]["member"]
            : [output["EnabledCloudwatchLogsExports"]["member"]];
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(wrappedItem, context);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LatestRestorableTime"] !== undefined) {
        contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = output["PercentProgress"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["PreferredBackupWindow"] !== undefined) {
        contents.PreferredBackupWindow = output["PreferredBackupWindow"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["ReaderEndpoint"] !== undefined) {
        contents.ReaderEndpoint = output["ReaderEndpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        const wrappedItem = output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] instanceof Array
            ? output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]
            : [output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]];
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDBClusterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBCluster(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterMember = (output, context) => {
    let contents = {
        __type: "DBClusterMember",
        DBClusterParameterGroupStatus: undefined,
        DBInstanceIdentifier: undefined,
        IsClusterWriter: undefined,
        PromotionTier: undefined
    };
    if (output["DBClusterParameterGroupStatus"] !== undefined) {
        contents.DBClusterParameterGroupStatus =
            output["DBClusterParameterGroupStatus"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["IsClusterWriter"] !== undefined) {
        contents.IsClusterWriter = output["IsClusterWriter"] == "true";
    }
    if (output["PromotionTier"] !== undefined) {
        contents.PromotionTier = parseInt(output["PromotionTier"]);
    }
    return contents;
};
const deserializeAws_queryDBClusterMemberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterMember(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterMessage = (output, context) => {
    let contents = {
        __type: "DBClusterMessage",
        DBClusters: undefined,
        Marker: undefined
    };
    if (output.DBClusters === "") {
        contents.DBClusters = [];
    }
    if (output["DBClusters"] !== undefined &&
        output["DBClusters"]["DBCluster"] !== undefined) {
        const wrappedItem = output["DBClusters"]["DBCluster"] instanceof Array
            ? output["DBClusters"]["DBCluster"]
            : [output["DBClusters"]["DBCluster"]];
        contents.DBClusters = deserializeAws_queryDBClusterList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroup = (output, context) => {
    let contents = {
        __type: "DBClusterParameterGroup",
        DBClusterParameterGroupArn: undefined,
        DBClusterParameterGroupName: undefined,
        DBParameterGroupFamily: undefined,
        Description: undefined
    };
    if (output["DBClusterParameterGroupArn"] !== undefined) {
        contents.DBClusterParameterGroupArn = output["DBClusterParameterGroupArn"];
    }
    if (output["DBClusterParameterGroupName"] !== undefined) {
        contents.DBClusterParameterGroupName =
            output["DBClusterParameterGroupName"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupDetails = (output, context) => {
    let contents = {
        __type: "DBClusterParameterGroupDetails",
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
const deserializeAws_queryDBClusterParameterGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterParameterGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupNameMessage = (output, context) => {
    let contents = {
        __type: "DBClusterParameterGroupNameMessage",
        DBClusterParameterGroupName: undefined
    };
    if (output["DBClusterParameterGroupName"] !== undefined) {
        contents.DBClusterParameterGroupName =
            output["DBClusterParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupsMessage = (output, context) => {
    let contents = {
        __type: "DBClusterParameterGroupsMessage",
        DBClusterParameterGroups: undefined,
        Marker: undefined
    };
    if (output.DBClusterParameterGroups === "") {
        contents.DBClusterParameterGroups = [];
    }
    if (output["DBClusterParameterGroups"] !== undefined &&
        output["DBClusterParameterGroups"]["DBClusterParameterGroup"] !== undefined) {
        const wrappedItem = output["DBClusterParameterGroups"]["DBClusterParameterGroup"] instanceof
            Array
            ? output["DBClusterParameterGroups"]["DBClusterParameterGroup"]
            : [output["DBClusterParameterGroups"]["DBClusterParameterGroup"]];
        contents.DBClusterParameterGroups = deserializeAws_queryDBClusterParameterGroupList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRole = (output, context) => {
    let contents = {
        __type: "DBClusterRole",
        RoleArn: undefined,
        Status: undefined
    };
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoles = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterRole(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterSnapshot = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshot",
        AvailabilityZones: undefined,
        ClusterCreateTime: undefined,
        DBClusterIdentifier: undefined,
        DBClusterSnapshotArn: undefined,
        DBClusterSnapshotIdentifier: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        KmsKeyId: undefined,
        MasterUsername: undefined,
        PercentProgress: undefined,
        Port: undefined,
        SnapshotCreateTime: undefined,
        SnapshotType: undefined,
        SourceDBClusterSnapshotArn: undefined,
        Status: undefined,
        StorageEncrypted: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["AvailabilityZone"] instanceof Array
            ? output["AvailabilityZones"]["AvailabilityZone"]
            : [output["AvailabilityZones"]["AvailabilityZone"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(wrappedItem, context);
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterSnapshotArn"] !== undefined) {
        contents.DBClusterSnapshotArn = output["DBClusterSnapshotArn"];
    }
    if (output["DBClusterSnapshotIdentifier"] !== undefined) {
        contents.DBClusterSnapshotIdentifier =
            output["DBClusterSnapshotIdentifier"];
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
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = parseInt(output["PercentProgress"]);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    if (output["SnapshotType"] !== undefined) {
        contents.SnapshotType = output["SnapshotType"];
    }
    if (output["SourceDBClusterSnapshotArn"] !== undefined) {
        contents.SourceDBClusterSnapshotArn = output["SourceDBClusterSnapshotArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAttribute = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshotAttribute",
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
        output["AttributeValues"]["AttributeValue"] !== undefined) {
        const wrappedItem = output["AttributeValues"]["AttributeValue"] instanceof Array
            ? output["AttributeValues"]["AttributeValue"]
            : [output["AttributeValues"]["AttributeValue"]];
        contents.AttributeValues = deserializeAws_queryAttributeValueList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAttributeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterSnapshotAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAttributesResult = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshotAttributesResult",
        DBClusterSnapshotAttributes: undefined,
        DBClusterSnapshotIdentifier: undefined
    };
    if (output.DBClusterSnapshotAttributes === "") {
        contents.DBClusterSnapshotAttributes = [];
    }
    if (output["DBClusterSnapshotAttributes"] !== undefined &&
        output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] !==
            undefined) {
        const wrappedItem = output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] instanceof Array
            ? output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]
            : [output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]];
        contents.DBClusterSnapshotAttributes = deserializeAws_queryDBClusterSnapshotAttributeList(wrappedItem, context);
    }
    if (output["DBClusterSnapshotIdentifier"] !== undefined) {
        contents.DBClusterSnapshotIdentifier =
            output["DBClusterSnapshotIdentifier"];
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterSnapshot(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterSnapshotMessage = (output, context) => {
    let contents = {
        __type: "DBClusterSnapshotMessage",
        DBClusterSnapshots: undefined,
        Marker: undefined
    };
    if (output.DBClusterSnapshots === "") {
        contents.DBClusterSnapshots = [];
    }
    if (output["DBClusterSnapshots"] !== undefined &&
        output["DBClusterSnapshots"]["DBClusterSnapshot"] !== undefined) {
        const wrappedItem = output["DBClusterSnapshots"]["DBClusterSnapshot"] instanceof Array
            ? output["DBClusterSnapshots"]["DBClusterSnapshot"]
            : [output["DBClusterSnapshots"]["DBClusterSnapshot"]];
        contents.DBClusterSnapshots = deserializeAws_queryDBClusterSnapshotList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBEngineVersion = (output, context) => {
    let contents = {
        __type: "DBEngineVersion",
        DBEngineDescription: undefined,
        DBEngineVersionDescription: undefined,
        DBParameterGroupFamily: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        ExportableLogTypes: undefined,
        SupportsLogExportsToCloudwatchLogs: undefined,
        ValidUpgradeTarget: undefined
    };
    if (output["DBEngineDescription"] !== undefined) {
        contents.DBEngineDescription = output["DBEngineDescription"];
    }
    if (output["DBEngineVersionDescription"] !== undefined) {
        contents.DBEngineVersionDescription = output["DBEngineVersionDescription"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output.ExportableLogTypes === "") {
        contents.ExportableLogTypes = [];
    }
    if (output["ExportableLogTypes"] !== undefined &&
        output["ExportableLogTypes"]["member"] !== undefined) {
        const wrappedItem = output["ExportableLogTypes"]["member"] instanceof Array
            ? output["ExportableLogTypes"]["member"]
            : [output["ExportableLogTypes"]["member"]];
        contents.ExportableLogTypes = deserializeAws_queryLogTypeList(wrappedItem, context);
    }
    if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
        contents.SupportsLogExportsToCloudwatchLogs =
            output["SupportsLogExportsToCloudwatchLogs"] == "true";
    }
    if (output.ValidUpgradeTarget === "") {
        contents.ValidUpgradeTarget = [];
    }
    if (output["ValidUpgradeTarget"] !== undefined &&
        output["ValidUpgradeTarget"]["UpgradeTarget"] !== undefined) {
        const wrappedItem = output["ValidUpgradeTarget"]["UpgradeTarget"] instanceof Array
            ? output["ValidUpgradeTarget"]["UpgradeTarget"]
            : [output["ValidUpgradeTarget"]["UpgradeTarget"]];
        contents.ValidUpgradeTarget = deserializeAws_queryValidUpgradeTargetList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDBEngineVersionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBEngineVersion(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBEngineVersionMessage = (output, context) => {
    let contents = {
        __type: "DBEngineVersionMessage",
        DBEngineVersions: undefined,
        Marker: undefined
    };
    if (output.DBEngineVersions === "") {
        contents.DBEngineVersions = [];
    }
    if (output["DBEngineVersions"] !== undefined &&
        output["DBEngineVersions"]["DBEngineVersion"] !== undefined) {
        const wrappedItem = output["DBEngineVersions"]["DBEngineVersion"] instanceof Array
            ? output["DBEngineVersions"]["DBEngineVersion"]
            : [output["DBEngineVersions"]["DBEngineVersion"]];
        contents.DBEngineVersions = deserializeAws_queryDBEngineVersionList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBInstance = (output, context) => {
    let contents = {
        __type: "DBInstance",
        AutoMinorVersionUpgrade: undefined,
        AvailabilityZone: undefined,
        BackupRetentionPeriod: undefined,
        CACertificateIdentifier: undefined,
        DBClusterIdentifier: undefined,
        DBInstanceArn: undefined,
        DBInstanceClass: undefined,
        DBInstanceIdentifier: undefined,
        DBInstanceStatus: undefined,
        DBSubnetGroup: undefined,
        DbiResourceId: undefined,
        EnabledCloudwatchLogsExports: undefined,
        Endpoint: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        InstanceCreateTime: undefined,
        KmsKeyId: undefined,
        LatestRestorableTime: undefined,
        PendingModifiedValues: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        PromotionTier: undefined,
        PubliclyAccessible: undefined,
        StatusInfos: undefined,
        StorageEncrypted: undefined,
        VpcSecurityGroups: undefined
    };
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade =
            output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["CACertificateIdentifier"] !== undefined) {
        contents.CACertificateIdentifier = output["CACertificateIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBInstanceArn"] !== undefined) {
        contents.DBInstanceArn = output["DBInstanceArn"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["DBInstanceStatus"] !== undefined) {
        contents.DBInstanceStatus = output["DBInstanceStatus"];
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        const wrappedItem = output["EnabledCloudwatchLogsExports"]["member"] instanceof Array
            ? output["EnabledCloudwatchLogsExports"]["member"]
            : [output["EnabledCloudwatchLogsExports"]["member"]];
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(wrappedItem, context);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LatestRestorableTime"] !== undefined) {
        contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["PreferredBackupWindow"] !== undefined) {
        contents.PreferredBackupWindow = output["PreferredBackupWindow"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["PromotionTier"] !== undefined) {
        contents.PromotionTier = parseInt(output["PromotionTier"]);
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output.StatusInfos === "") {
        contents.StatusInfos = [];
    }
    if (output["StatusInfos"] !== undefined &&
        output["StatusInfos"]["DBInstanceStatusInfo"] !== undefined) {
        const wrappedItem = output["StatusInfos"]["DBInstanceStatusInfo"] instanceof Array
            ? output["StatusInfos"]["DBInstanceStatusInfo"]
            : [output["StatusInfos"]["DBInstanceStatusInfo"]];
        contents.StatusInfos = deserializeAws_queryDBInstanceStatusInfoList(wrappedItem, context);
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        const wrappedItem = output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] instanceof Array
            ? output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]
            : [output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]];
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDBInstanceList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBInstance(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBInstanceMessage = (output, context) => {
    let contents = {
        __type: "DBInstanceMessage",
        DBInstances: undefined,
        Marker: undefined
    };
    if (output.DBInstances === "") {
        contents.DBInstances = [];
    }
    if (output["DBInstances"] !== undefined &&
        output["DBInstances"]["DBInstance"] !== undefined) {
        const wrappedItem = output["DBInstances"]["DBInstance"] instanceof Array
            ? output["DBInstances"]["DBInstance"]
            : [output["DBInstances"]["DBInstance"]];
        contents.DBInstances = deserializeAws_queryDBInstanceList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceStatusInfo = (output, context) => {
    let contents = {
        __type: "DBInstanceStatusInfo",
        Message: undefined,
        Normal: undefined,
        Status: undefined,
        StatusType: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Normal"] !== undefined) {
        contents.Normal = output["Normal"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusType"] !== undefined) {
        contents.StatusType = output["StatusType"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceStatusInfoList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBInstanceStatusInfo(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBSubnetGroup = (output, context) => {
    let contents = {
        __type: "DBSubnetGroup",
        DBSubnetGroupArn: undefined,
        DBSubnetGroupDescription: undefined,
        DBSubnetGroupName: undefined,
        SubnetGroupStatus: undefined,
        Subnets: undefined,
        VpcId: undefined
    };
    if (output["DBSubnetGroupArn"] !== undefined) {
        contents.DBSubnetGroupArn = output["DBSubnetGroupArn"];
    }
    if (output["DBSubnetGroupDescription"] !== undefined) {
        contents.DBSubnetGroupDescription = output["DBSubnetGroupDescription"];
    }
    if (output["DBSubnetGroupName"] !== undefined) {
        contents.DBSubnetGroupName = output["DBSubnetGroupName"];
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
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupMessage = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupMessage",
        DBSubnetGroups: undefined,
        Marker: undefined
    };
    if (output.DBSubnetGroups === "") {
        contents.DBSubnetGroups = [];
    }
    if (output["DBSubnetGroups"] !== undefined &&
        output["DBSubnetGroups"]["DBSubnetGroup"] !== undefined) {
        const wrappedItem = output["DBSubnetGroups"]["DBSubnetGroup"] instanceof Array
            ? output["DBSubnetGroups"]["DBSubnetGroup"]
            : [output["DBSubnetGroups"]["DBSubnetGroup"]];
        contents.DBSubnetGroups = deserializeAws_queryDBSubnetGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBSubnetGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryDeleteDBClusterResult = (output, context) => {
    let contents = {
        __type: "DeleteDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBClusterSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteDBClusterSnapshotResult",
        DBClusterSnapshot: undefined
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBInstanceResult = (output, context) => {
    let contents = {
        __type: "DeleteDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDBClusterSnapshotAttributesResult = (output, context) => {
    let contents = {
        __type: "DescribeDBClusterSnapshotAttributesResult",
        DBClusterSnapshotAttributesResult: undefined
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEngineDefaultClusterParametersResult = (output, context) => {
    let contents = {
        __type: "DescribeEngineDefaultClusterParametersResult",
        EngineDefaults: undefined
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
    }
    return contents;
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        Address: undefined,
        HostedZoneId: undefined,
        Port: undefined
    };
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
const deserializeAws_queryEngineDefaults = (output, context) => {
    let contents = {
        __type: "EngineDefaults",
        DBParameterGroupFamily: undefined,
        Marker: undefined,
        Parameters: undefined
    };
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
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
        EventCategories: undefined,
        Message: undefined,
        SourceArn: undefined,
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
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["SourceArn"] !== undefined) {
        contents.SourceArn = output["SourceArn"];
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
        EventCategories: undefined,
        SourceType: undefined
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
const deserializeAws_queryFailoverDBClusterResult = (output, context) => {
    let contents = {
        __type: "FailoverDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryLogTypeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryModifyDBClusterResult = (output, context) => {
    let contents = {
        __type: "ModifyDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBClusterSnapshotAttributeResult = (output, context) => {
    let contents = {
        __type: "ModifyDBClusterSnapshotAttributeResult",
        DBClusterSnapshotAttributesResult: undefined
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBInstanceResult = (output, context) => {
    let contents = {
        __type: "ModifyDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSubnetGroupResult = (output, context) => {
    let contents = {
        __type: "ModifyDBSubnetGroupResult",
        DBSubnetGroup: undefined
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOption = (output, context) => {
    let contents = {
        __type: "OrderableDBInstanceOption",
        AvailabilityZones: undefined,
        DBInstanceClass: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        Vpc: undefined
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
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["Vpc"] !== undefined) {
        contents.Vpc = output["Vpc"] == "true";
    }
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOrderableDBInstanceOption(entry, context));
    });
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOptionsMessage = (output, context) => {
    let contents = {
        __type: "OrderableDBInstanceOptionsMessage",
        Marker: undefined,
        OrderableDBInstanceOptions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.OrderableDBInstanceOptions === "") {
        contents.OrderableDBInstanceOptions = [];
    }
    if (output["OrderableDBInstanceOptions"] !== undefined &&
        output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !==
            undefined) {
        const wrappedItem = output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] instanceof Array
            ? output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]
            : [output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]];
        contents.OrderableDBInstanceOptions = deserializeAws_queryOrderableDBInstanceOptionsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        AllowedValues: undefined,
        ApplyMethod: undefined,
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
    if (output["ApplyMethod"] !== undefined) {
        contents.ApplyMethod = output["ApplyMethod"];
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
const deserializeAws_queryParametersList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryParameter(entry, context));
    });
    return contents;
};
const deserializeAws_queryPendingCloudwatchLogsExports = (output, context) => {
    let contents = {
        __type: "PendingCloudwatchLogsExports",
        LogTypesToDisable: undefined,
        LogTypesToEnable: undefined
    };
    if (output.LogTypesToDisable === "") {
        contents.LogTypesToDisable = [];
    }
    if (output["LogTypesToDisable"] !== undefined &&
        output["LogTypesToDisable"]["member"] !== undefined) {
        const wrappedItem = output["LogTypesToDisable"]["member"] instanceof Array
            ? output["LogTypesToDisable"]["member"]
            : [output["LogTypesToDisable"]["member"]];
        contents.LogTypesToDisable = deserializeAws_queryLogTypeList(wrappedItem, context);
    }
    if (output.LogTypesToEnable === "") {
        contents.LogTypesToEnable = [];
    }
    if (output["LogTypesToEnable"] !== undefined &&
        output["LogTypesToEnable"]["member"] !== undefined) {
        const wrappedItem = output["LogTypesToEnable"]["member"] instanceof Array
            ? output["LogTypesToEnable"]["member"]
            : [output["LogTypesToEnable"]["member"]];
        contents.LogTypesToEnable = deserializeAws_queryLogTypeList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPendingMaintenanceAction = (output, context) => {
    let contents = {
        __type: "PendingMaintenanceAction",
        Action: undefined,
        AutoAppliedAfterDate: undefined,
        CurrentApplyDate: undefined,
        Description: undefined,
        ForcedApplyDate: undefined,
        OptInStatus: undefined
    };
    if (output["Action"] !== undefined) {
        contents.Action = output["Action"];
    }
    if (output["AutoAppliedAfterDate"] !== undefined) {
        contents.AutoAppliedAfterDate = new Date(output["AutoAppliedAfterDate"]);
    }
    if (output["CurrentApplyDate"] !== undefined) {
        contents.CurrentApplyDate = new Date(output["CurrentApplyDate"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ForcedApplyDate"] !== undefined) {
        contents.ForcedApplyDate = new Date(output["ForcedApplyDate"]);
    }
    if (output["OptInStatus"] !== undefined) {
        contents.OptInStatus = output["OptInStatus"];
    }
    return contents;
};
const deserializeAws_queryPendingMaintenanceActionDetails = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPendingMaintenanceAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryPendingMaintenanceActions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryResourcePendingMaintenanceActions(entry, context));
    });
    return contents;
};
const deserializeAws_queryPendingMaintenanceActionsMessage = (output, context) => {
    let contents = {
        __type: "PendingMaintenanceActionsMessage",
        Marker: undefined,
        PendingMaintenanceActions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PendingMaintenanceActions === "") {
        contents.PendingMaintenanceActions = [];
    }
    if (output["PendingMaintenanceActions"] !== undefined &&
        output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !==
            undefined) {
        const wrappedItem = output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] instanceof Array
            ? output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]
            : [
                output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]
            ];
        contents.PendingMaintenanceActions = deserializeAws_queryPendingMaintenanceActions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
        __type: "PendingModifiedValues",
        AllocatedStorage: undefined,
        BackupRetentionPeriod: undefined,
        CACertificateIdentifier: undefined,
        DBInstanceClass: undefined,
        DBInstanceIdentifier: undefined,
        DBSubnetGroupName: undefined,
        EngineVersion: undefined,
        Iops: undefined,
        LicenseModel: undefined,
        MasterUserPassword: undefined,
        MultiAZ: undefined,
        PendingCloudwatchLogsExports: undefined,
        Port: undefined,
        StorageType: undefined
    };
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["CACertificateIdentifier"] !== undefined) {
        contents.CACertificateIdentifier = output["CACertificateIdentifier"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["DBSubnetGroupName"] !== undefined) {
        contents.DBSubnetGroupName = output["DBSubnetGroupName"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["MasterUserPassword"] !== undefined) {
        contents.MasterUserPassword = output["MasterUserPassword"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output["PendingCloudwatchLogsExports"] !== undefined) {
        contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(output["PendingCloudwatchLogsExports"], context);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    return contents;
};
const deserializeAws_queryRebootDBInstanceResult = (output, context) => {
    let contents = {
        __type: "RebootDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryResourcePendingMaintenanceActions = (output, context) => {
    let contents = {
        __type: "ResourcePendingMaintenanceActions",
        PendingMaintenanceActionDetails: undefined,
        ResourceIdentifier: undefined
    };
    if (output.PendingMaintenanceActionDetails === "") {
        contents.PendingMaintenanceActionDetails = [];
    }
    if (output["PendingMaintenanceActionDetails"] !== undefined &&
        output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] !==
            undefined) {
        const wrappedItem = output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] instanceof Array
            ? output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]
            : [
                output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]
            ];
        contents.PendingMaintenanceActionDetails = deserializeAws_queryPendingMaintenanceActionDetails(wrappedItem, context);
    }
    if (output["ResourceIdentifier"] !== undefined) {
        contents.ResourceIdentifier = output["ResourceIdentifier"];
    }
    return contents;
};
const deserializeAws_queryRestoreDBClusterFromSnapshotResult = (output, context) => {
    let contents = {
        __type: "RestoreDBClusterFromSnapshotResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBClusterToPointInTimeResult = (output, context) => {
    let contents = {
        __type: "RestoreDBClusterToPointInTimeResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryStartDBClusterResult = (output, context) => {
    let contents = {
        __type: "StartDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryStopDBClusterResult = (output, context) => {
    let contents = {
        __type: "StopDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
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
const deserializeAws_queryUpgradeTarget = (output, context) => {
    let contents = {
        __type: "UpgradeTarget",
        AutoUpgrade: undefined,
        Description: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        IsMajorVersionUpgrade: undefined
    };
    if (output["AutoUpgrade"] !== undefined) {
        contents.AutoUpgrade = output["AutoUpgrade"] == "true";
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["IsMajorVersionUpgrade"] !== undefined) {
        contents.IsMajorVersionUpgrade = output["IsMajorVersionUpgrade"] == "true";
    }
    return contents;
};
const deserializeAws_queryValidUpgradeTargetList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUpgradeTarget(entry, context));
    });
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