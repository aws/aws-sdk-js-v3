"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddRoleToDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddRoleToDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddRoleToDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddRoleToDBClusterCommand = serializeAws_queryAddRoleToDBClusterCommand;
async function serializeAws_queryAddRoleToDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddRoleToDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddRoleToDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddRoleToDBInstanceCommand = serializeAws_queryAddRoleToDBInstanceCommand;
async function serializeAws_queryAddSourceIdentifierToSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddSourceIdentifierToSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddSourceIdentifierToSubscription", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddSourceIdentifierToSubscriptionCommand = serializeAws_queryAddSourceIdentifierToSubscriptionCommand;
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
async function serializeAws_queryAuthorizeDBSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAuthorizeDBSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AuthorizeDBSecurityGroupIngress", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAuthorizeDBSecurityGroupIngressCommand = serializeAws_queryAuthorizeDBSecurityGroupIngressCommand;
async function serializeAws_queryBacktrackDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBacktrackDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BacktrackDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBacktrackDBClusterCommand = serializeAws_queryBacktrackDBClusterCommand;
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
async function serializeAws_queryCopyDBParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyDBParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyDBParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyDBParameterGroupCommand = serializeAws_queryCopyDBParameterGroupCommand;
async function serializeAws_queryCopyDBSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyDBSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyDBSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyDBSnapshotCommand = serializeAws_queryCopyDBSnapshotCommand;
async function serializeAws_queryCopyOptionGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCopyOptionGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CopyOptionGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCopyOptionGroupCommand = serializeAws_queryCopyOptionGroupCommand;
async function serializeAws_queryCreateCustomAvailabilityZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCustomAvailabilityZoneMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCustomAvailabilityZone", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCustomAvailabilityZoneCommand = serializeAws_queryCreateCustomAvailabilityZoneCommand;
async function serializeAws_queryCreateDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBClusterCommand = serializeAws_queryCreateDBClusterCommand;
async function serializeAws_queryCreateDBClusterEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBClusterEndpointMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBClusterEndpoint", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBClusterEndpointCommand = serializeAws_queryCreateDBClusterEndpointCommand;
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
async function serializeAws_queryCreateDBInstanceReadReplicaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBInstanceReadReplicaMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBInstanceReadReplica", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBInstanceReadReplicaCommand = serializeAws_queryCreateDBInstanceReadReplicaCommand;
async function serializeAws_queryCreateDBParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBParameterGroupCommand = serializeAws_queryCreateDBParameterGroupCommand;
async function serializeAws_queryCreateDBProxyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBProxyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBProxy", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBProxyCommand = serializeAws_queryCreateDBProxyCommand;
async function serializeAws_queryCreateDBSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBSecurityGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBSecurityGroupCommand = serializeAws_queryCreateDBSecurityGroupCommand;
async function serializeAws_queryCreateDBSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBSnapshotCommand = serializeAws_queryCreateDBSnapshotCommand;
async function serializeAws_queryCreateDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDBSubnetGroupCommand = serializeAws_queryCreateDBSubnetGroupCommand;
async function serializeAws_queryCreateEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateEventSubscription", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateEventSubscriptionCommand = serializeAws_queryCreateEventSubscriptionCommand;
async function serializeAws_queryCreateGlobalClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateGlobalClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateGlobalCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateGlobalClusterCommand = serializeAws_queryCreateGlobalClusterCommand;
async function serializeAws_queryCreateOptionGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateOptionGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateOptionGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateOptionGroupCommand = serializeAws_queryCreateOptionGroupCommand;
async function serializeAws_queryDeleteCustomAvailabilityZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCustomAvailabilityZoneMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCustomAvailabilityZone", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCustomAvailabilityZoneCommand = serializeAws_queryDeleteCustomAvailabilityZoneCommand;
async function serializeAws_queryDeleteDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBClusterCommand = serializeAws_queryDeleteDBClusterCommand;
async function serializeAws_queryDeleteDBClusterEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBClusterEndpointMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBClusterEndpoint", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBClusterEndpointCommand = serializeAws_queryDeleteDBClusterEndpointCommand;
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
async function serializeAws_queryDeleteDBInstanceAutomatedBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBInstanceAutomatedBackupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBInstanceAutomatedBackup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBInstanceAutomatedBackupCommand = serializeAws_queryDeleteDBInstanceAutomatedBackupCommand;
async function serializeAws_queryDeleteDBParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBParameterGroupCommand = serializeAws_queryDeleteDBParameterGroupCommand;
async function serializeAws_queryDeleteDBProxyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBProxyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBProxy", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBProxyCommand = serializeAws_queryDeleteDBProxyCommand;
async function serializeAws_queryDeleteDBSecurityGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBSecurityGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBSecurityGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBSecurityGroupCommand = serializeAws_queryDeleteDBSecurityGroupCommand;
async function serializeAws_queryDeleteDBSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBSnapshotCommand = serializeAws_queryDeleteDBSnapshotCommand;
async function serializeAws_queryDeleteDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDBSubnetGroupCommand = serializeAws_queryDeleteDBSubnetGroupCommand;
async function serializeAws_queryDeleteEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteEventSubscription", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteEventSubscriptionCommand = serializeAws_queryDeleteEventSubscriptionCommand;
async function serializeAws_queryDeleteGlobalClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteGlobalClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteGlobalCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteGlobalClusterCommand = serializeAws_queryDeleteGlobalClusterCommand;
async function serializeAws_queryDeleteInstallationMediaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteInstallationMediaMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteInstallationMedia", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteInstallationMediaCommand = serializeAws_queryDeleteInstallationMediaCommand;
async function serializeAws_queryDeleteOptionGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteOptionGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteOptionGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteOptionGroupCommand = serializeAws_queryDeleteOptionGroupCommand;
async function serializeAws_queryDeregisterDBProxyTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeregisterDBProxyTargetsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeregisterDBProxyTargets", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeregisterDBProxyTargetsCommand = serializeAws_queryDeregisterDBProxyTargetsCommand;
async function serializeAws_queryDescribeAccountAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccountAttributesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAccountAttributes", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
async function serializeAws_queryDescribeCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCertificatesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCertificates", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCertificatesCommand = serializeAws_queryDescribeCertificatesCommand;
async function serializeAws_queryDescribeCustomAvailabilityZonesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeCustomAvailabilityZonesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeCustomAvailabilityZones", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeCustomAvailabilityZonesCommand = serializeAws_queryDescribeCustomAvailabilityZonesCommand;
async function serializeAws_queryDescribeDBClusterBacktracksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterBacktracksMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterBacktracks", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterBacktracksCommand = serializeAws_queryDescribeDBClusterBacktracksCommand;
async function serializeAws_queryDescribeDBClusterEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBClusterEndpointsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBClusterEndpoints", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBClusterEndpointsCommand = serializeAws_queryDescribeDBClusterEndpointsCommand;
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
async function serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBInstanceAutomatedBackups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand;
async function serializeAws_queryDescribeDBInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBInstancesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBInstances", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBInstancesCommand = serializeAws_queryDescribeDBInstancesCommand;
async function serializeAws_queryDescribeDBLogFilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBLogFilesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBLogFiles", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBLogFilesCommand = serializeAws_queryDescribeDBLogFilesCommand;
async function serializeAws_queryDescribeDBParameterGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBParameterGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBParameterGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBParameterGroupsCommand = serializeAws_queryDescribeDBParameterGroupsCommand;
async function serializeAws_queryDescribeDBParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBParameters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBParametersCommand = serializeAws_queryDescribeDBParametersCommand;
async function serializeAws_queryDescribeDBProxiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBProxiesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBProxies", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBProxiesCommand = serializeAws_queryDescribeDBProxiesCommand;
async function serializeAws_queryDescribeDBProxyTargetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBProxyTargetGroupsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBProxyTargetGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBProxyTargetGroupsCommand = serializeAws_queryDescribeDBProxyTargetGroupsCommand;
async function serializeAws_queryDescribeDBProxyTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBProxyTargetsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBProxyTargets", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBProxyTargetsCommand = serializeAws_queryDescribeDBProxyTargetsCommand;
async function serializeAws_queryDescribeDBSecurityGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBSecurityGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBSecurityGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBSecurityGroupsCommand = serializeAws_queryDescribeDBSecurityGroupsCommand;
async function serializeAws_queryDescribeDBSnapshotAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBSnapshotAttributesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBSnapshotAttributes", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBSnapshotAttributesCommand = serializeAws_queryDescribeDBSnapshotAttributesCommand;
async function serializeAws_queryDescribeDBSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDBSnapshotsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDBSnapshots", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDBSnapshotsCommand = serializeAws_queryDescribeDBSnapshotsCommand;
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
async function serializeAws_queryDescribeEngineDefaultParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEngineDefaultParametersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEngineDefaultParameters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEngineDefaultParametersCommand = serializeAws_queryDescribeEngineDefaultParametersCommand;
async function serializeAws_queryDescribeEventCategoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventCategoriesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEventCategories", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventCategoriesCommand = serializeAws_queryDescribeEventCategoriesCommand;
async function serializeAws_queryDescribeEventSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventSubscriptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEventSubscriptions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventSubscriptionsCommand = serializeAws_queryDescribeEventSubscriptionsCommand;
async function serializeAws_queryDescribeEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeEventsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeEvents", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
async function serializeAws_queryDescribeGlobalClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeGlobalClustersMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeGlobalClusters", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeGlobalClustersCommand = serializeAws_queryDescribeGlobalClustersCommand;
async function serializeAws_queryDescribeInstallationMediaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeInstallationMediaMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeInstallationMedia", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeInstallationMediaCommand = serializeAws_queryDescribeInstallationMediaCommand;
async function serializeAws_queryDescribeOptionGroupOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeOptionGroupOptionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeOptionGroupOptions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeOptionGroupOptionsCommand = serializeAws_queryDescribeOptionGroupOptionsCommand;
async function serializeAws_queryDescribeOptionGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeOptionGroupsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeOptionGroups", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeOptionGroupsCommand = serializeAws_queryDescribeOptionGroupsCommand;
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
async function serializeAws_queryDescribeReservedDBInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedDBInstancesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedDBInstances", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedDBInstancesCommand = serializeAws_queryDescribeReservedDBInstancesCommand;
async function serializeAws_queryDescribeReservedDBInstancesOfferingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReservedDBInstancesOfferingsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReservedDBInstancesOfferings", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReservedDBInstancesOfferingsCommand = serializeAws_queryDescribeReservedDBInstancesOfferingsCommand;
async function serializeAws_queryDescribeSourceRegionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSourceRegionsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSourceRegions", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSourceRegionsCommand = serializeAws_queryDescribeSourceRegionsCommand;
async function serializeAws_queryDescribeValidDBInstanceModificationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeValidDBInstanceModificationsMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeValidDBInstanceModifications", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeValidDBInstanceModificationsCommand = serializeAws_queryDescribeValidDBInstanceModificationsCommand;
async function serializeAws_queryDownloadDBLogFilePortionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDownloadDBLogFilePortionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DownloadDBLogFilePortion", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDownloadDBLogFilePortionCommand = serializeAws_queryDownloadDBLogFilePortionCommand;
async function serializeAws_queryFailoverDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryFailoverDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "FailoverDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryFailoverDBClusterCommand = serializeAws_queryFailoverDBClusterCommand;
async function serializeAws_queryImportInstallationMediaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryImportInstallationMediaMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ImportInstallationMedia", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryImportInstallationMediaCommand = serializeAws_queryImportInstallationMediaCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryModifyCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyCertificatesMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCertificates", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyCertificatesCommand = serializeAws_queryModifyCertificatesCommand;
async function serializeAws_queryModifyCurrentDBClusterCapacityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyCurrentDBClusterCapacityMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyCurrentDBClusterCapacity", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyCurrentDBClusterCapacityCommand = serializeAws_queryModifyCurrentDBClusterCapacityCommand;
async function serializeAws_queryModifyDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBClusterCommand = serializeAws_queryModifyDBClusterCommand;
async function serializeAws_queryModifyDBClusterEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBClusterEndpointMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBClusterEndpoint", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBClusterEndpointCommand = serializeAws_queryModifyDBClusterEndpointCommand;
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
async function serializeAws_queryModifyDBParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBParameterGroupCommand = serializeAws_queryModifyDBParameterGroupCommand;
async function serializeAws_queryModifyDBProxyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBProxyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBProxy", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBProxyCommand = serializeAws_queryModifyDBProxyCommand;
async function serializeAws_queryModifyDBProxyTargetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBProxyTargetGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBProxyTargetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBProxyTargetGroupCommand = serializeAws_queryModifyDBProxyTargetGroupCommand;
async function serializeAws_queryModifyDBSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBSnapshotCommand = serializeAws_queryModifyDBSnapshotCommand;
async function serializeAws_queryModifyDBSnapshotAttributeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBSnapshotAttributeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBSnapshotAttribute", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBSnapshotAttributeCommand = serializeAws_queryModifyDBSnapshotAttributeCommand;
async function serializeAws_queryModifyDBSubnetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyDBSubnetGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyDBSubnetGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyDBSubnetGroupCommand = serializeAws_queryModifyDBSubnetGroupCommand;
async function serializeAws_queryModifyEventSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyEventSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyEventSubscription", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyEventSubscriptionCommand = serializeAws_queryModifyEventSubscriptionCommand;
async function serializeAws_queryModifyGlobalClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyGlobalClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyGlobalCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyGlobalClusterCommand = serializeAws_queryModifyGlobalClusterCommand;
async function serializeAws_queryModifyOptionGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyOptionGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyOptionGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyOptionGroupCommand = serializeAws_queryModifyOptionGroupCommand;
async function serializeAws_queryPromoteReadReplicaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPromoteReadReplicaMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PromoteReadReplica", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPromoteReadReplicaCommand = serializeAws_queryPromoteReadReplicaCommand;
async function serializeAws_queryPromoteReadReplicaDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPromoteReadReplicaDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PromoteReadReplicaDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPromoteReadReplicaDBClusterCommand = serializeAws_queryPromoteReadReplicaDBClusterCommand;
async function serializeAws_queryPurchaseReservedDBInstancesOfferingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPurchaseReservedDBInstancesOfferingMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PurchaseReservedDBInstancesOffering", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPurchaseReservedDBInstancesOfferingCommand = serializeAws_queryPurchaseReservedDBInstancesOfferingCommand;
async function serializeAws_queryRebootDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRebootDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RebootDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRebootDBInstanceCommand = serializeAws_queryRebootDBInstanceCommand;
async function serializeAws_queryRegisterDBProxyTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRegisterDBProxyTargetsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RegisterDBProxyTargets", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRegisterDBProxyTargetsCommand = serializeAws_queryRegisterDBProxyTargetsCommand;
async function serializeAws_queryRemoveFromGlobalClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveFromGlobalClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveFromGlobalCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveFromGlobalClusterCommand = serializeAws_queryRemoveFromGlobalClusterCommand;
async function serializeAws_queryRemoveRoleFromDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveRoleFromDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveRoleFromDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveRoleFromDBClusterCommand = serializeAws_queryRemoveRoleFromDBClusterCommand;
async function serializeAws_queryRemoveRoleFromDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveRoleFromDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveRoleFromDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveRoleFromDBInstanceCommand = serializeAws_queryRemoveRoleFromDBInstanceCommand;
async function serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveSourceIdentifierFromSubscription", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand;
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
async function serializeAws_queryResetDBParameterGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResetDBParameterGroupMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResetDBParameterGroup", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResetDBParameterGroupCommand = serializeAws_queryResetDBParameterGroupCommand;
async function serializeAws_queryRestoreDBClusterFromS3Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBClusterFromS3Message(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBClusterFromS3", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBClusterFromS3Command = serializeAws_queryRestoreDBClusterFromS3Command;
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
async function serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBInstanceFromDBSnapshot", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand;
async function serializeAws_queryRestoreDBInstanceFromS3Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBInstanceFromS3Message(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBInstanceFromS3", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBInstanceFromS3Command = serializeAws_queryRestoreDBInstanceFromS3Command;
async function serializeAws_queryRestoreDBInstanceToPointInTimeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRestoreDBInstanceToPointInTimeMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RestoreDBInstanceToPointInTime", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRestoreDBInstanceToPointInTimeCommand = serializeAws_queryRestoreDBInstanceToPointInTimeCommand;
async function serializeAws_queryRevokeDBSecurityGroupIngressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRevokeDBSecurityGroupIngressMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RevokeDBSecurityGroupIngress", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRevokeDBSecurityGroupIngressCommand = serializeAws_queryRevokeDBSecurityGroupIngressCommand;
async function serializeAws_queryStartActivityStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStartActivityStreamRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StartActivityStream", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStartActivityStreamCommand = serializeAws_queryStartActivityStreamCommand;
async function serializeAws_queryStartDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStartDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StartDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStartDBClusterCommand = serializeAws_queryStartDBClusterCommand;
async function serializeAws_queryStartDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStartDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StartDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStartDBInstanceCommand = serializeAws_queryStartDBInstanceCommand;
async function serializeAws_queryStopActivityStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStopActivityStreamRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StopActivityStream", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStopActivityStreamCommand = serializeAws_queryStopActivityStreamCommand;
async function serializeAws_queryStopDBClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStopDBClusterMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StopDBCluster", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStopDBClusterCommand = serializeAws_queryStopDBClusterCommand;
async function serializeAws_queryStopDBInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryStopDBInstanceMessage(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "StopDBInstance", Version: "2014-10-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryStopDBInstanceCommand = serializeAws_queryStopDBInstanceCommand;
async function deserializeAws_queryAddRoleToDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddRoleToDBClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddRoleToDBClusterCommand = deserializeAws_queryAddRoleToDBClusterCommand;
async function deserializeAws_queryAddRoleToDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterRoleAlreadyExistsFault":
        case "rds.admin#DBClusterRoleAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterRoleQuotaExceededFault":
        case "rds.admin#DBClusterRoleQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAddRoleToDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddRoleToDBInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddRoleToDBInstanceCommand = deserializeAws_queryAddRoleToDBInstanceCommand;
async function deserializeAws_queryAddRoleToDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceRoleAlreadyExistsFault":
        case "rds.admin#DBInstanceRoleAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceRoleQuotaExceededFault":
        case "rds.admin#DBInstanceRoleQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddSourceIdentifierToSubscriptionResult(data.AddSourceIdentifierToSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddSourceIdentifierToSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = deserializeAws_queryAddSourceIdentifierToSubscriptionCommand;
async function deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SourceNotFoundFault":
        case "rds.admin#SourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "rds.admin#SubscriptionNotFoundFault":
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
async function deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeDBSecurityGroupIngressResult(data.AuthorizeDBSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AuthorizeDBSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand = deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand;
async function deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "rds.admin#AuthorizationAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationQuotaExceededFault":
        case "rds.admin#AuthorizationQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "rds.admin#InvalidDBSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryBacktrackDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBacktrackDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterBacktrack(data.BacktrackDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterBacktrack" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBacktrackDBClusterCommand = deserializeAws_queryBacktrackDBClusterCommand;
async function deserializeAws_queryBacktrackDBClusterCommandError(output, context) {
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
        default:
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
async function deserializeAws_queryCopyDBParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBParameterGroupResult(data.CopyDBParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyDBParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyDBParameterGroupCommand = deserializeAws_queryCopyDBParameterGroupCommand;
async function deserializeAws_queryCopyDBParameterGroupCommandError(output, context) {
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
async function deserializeAws_queryCopyDBSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBSnapshotResult(data.CopyDBSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyDBSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyDBSnapshotCommand = deserializeAws_queryCopyDBSnapshotCommand;
async function deserializeAws_queryCopyDBSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotAlreadyExistsFault":
        case "rds.admin#DBSnapshotAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSnapshotStateFault":
        case "rds.admin#InvalidDBSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCopyOptionGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCopyOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyOptionGroupResult(data.CopyOptionGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyOptionGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCopyOptionGroupCommand = deserializeAws_queryCopyOptionGroupCommand;
async function deserializeAws_queryCopyOptionGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupAlreadyExistsFault":
        case "rds.admin#OptionGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptionGroupQuotaExceededFault":
        case "rds.admin#OptionGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateCustomAvailabilityZoneCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCustomAvailabilityZoneCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCustomAvailabilityZoneResult(data.CreateCustomAvailabilityZoneResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCustomAvailabilityZoneResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCustomAvailabilityZoneCommand = deserializeAws_queryCreateCustomAvailabilityZoneCommand;
async function deserializeAws_queryCreateCustomAvailabilityZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneAlreadyExistsFault":
        case "rds.admin#CustomAvailabilityZoneAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomAvailabilityZoneQuotaExceededFault":
        case "rds.admin#CustomAvailabilityZoneQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomAvailabilityZoneQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalClusterNotFoundFault":
        case "rds.admin#GlobalClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidGlobalClusterStateFault":
        case "rds.admin#InvalidGlobalClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBClusterEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterEndpoint(data.CreateDBClusterEndpointResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterEndpoint" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBClusterEndpointCommand = deserializeAws_queryCreateDBClusterEndpointCommand;
async function deserializeAws_queryCreateDBClusterEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointAlreadyExistsFault":
        case "rds.admin#DBClusterEndpointAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterEndpointQuotaExceededFault":
        case "rds.admin#DBClusterEndpointQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "BackupPolicyNotFoundFault":
        case "rds.admin#BackupPolicyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBInstanceReadReplicaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBInstanceReadReplicaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBInstanceReadReplicaResult(data.CreateDBInstanceReadReplicaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBInstanceReadReplicaResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBInstanceReadReplicaCommand = deserializeAws_queryCreateDBInstanceReadReplicaCommand;
async function deserializeAws_queryCreateDBInstanceReadReplicaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotAllowedFault":
        case "rds.admin#DBSubnetGroupNotAllowedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceQuotaExceededFault":
        case "rds.admin#InstanceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetGroupFault":
        case "rds.admin#InvalidDBSubnetGroupFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetGroupFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBParameterGroupResult(data.CreateDBParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBParameterGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBParameterGroupCommand = deserializeAws_queryCreateDBParameterGroupCommand;
async function deserializeAws_queryCreateDBParameterGroupCommandError(output, context) {
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
async function deserializeAws_queryCreateDBProxyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBProxyResponse(data.CreateDBProxyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBProxyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBProxyCommand = deserializeAws_queryCreateDBProxyCommand;
async function deserializeAws_queryCreateDBProxyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyAlreadyExistsFault":
        case "rds.admin#DBProxyAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyQuotaExceededFault":
        case "rds.admin#DBProxyQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateDBSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSecurityGroupResult(data.CreateDBSecurityGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBSecurityGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBSecurityGroupCommand = deserializeAws_queryCreateDBSecurityGroupCommand;
async function deserializeAws_queryCreateDBSecurityGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupAlreadyExistsFault":
        case "rds.admin#DBSecurityGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupNotSupportedFault":
        case "rds.admin#DBSecurityGroupNotSupportedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupQuotaExceededFault":
        case "rds.admin#DBSecurityGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateDBSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSnapshotResult(data.CreateDBSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDBSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDBSnapshotCommand = deserializeAws_queryCreateDBSnapshotCommand;
async function deserializeAws_queryCreateDBSnapshotCommandError(output, context) {
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
        case "rds.admin#EventSubscriptionQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "rds.admin#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "rds.admin#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSTopicArnNotFoundFault":
        case "rds.admin#SNSTopicArnNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceNotFoundFault":
        case "rds.admin#SourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionAlreadyExistFault":
        case "rds.admin#SubscriptionAlreadyExistFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "rds.admin#SubscriptionCategoryNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateGlobalClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateGlobalClusterResult(data.CreateGlobalClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGlobalClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateGlobalClusterCommand = deserializeAws_queryCreateGlobalClusterCommand;
async function deserializeAws_queryCreateGlobalClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalClusterAlreadyExistsFault":
        case "rds.admin#GlobalClusterAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalClusterQuotaExceededFault":
        case "rds.admin#GlobalClusterQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateOptionGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateOptionGroupResult(data.CreateOptionGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateOptionGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateOptionGroupCommand = deserializeAws_queryCreateOptionGroupCommand;
async function deserializeAws_queryCreateOptionGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupAlreadyExistsFault":
        case "rds.admin#OptionGroupAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptionGroupQuotaExceededFault":
        case "rds.admin#OptionGroupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteCustomAvailabilityZoneCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCustomAvailabilityZoneCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteCustomAvailabilityZoneResult(data.DeleteCustomAvailabilityZoneResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCustomAvailabilityZoneResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCustomAvailabilityZoneCommand = deserializeAws_queryDeleteCustomAvailabilityZoneCommand;
async function deserializeAws_queryDeleteCustomAvailabilityZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "rds.admin#CustomAvailabilityZoneNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryDeleteDBClusterEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterEndpoint(data.DeleteDBClusterEndpointResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterEndpoint" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBClusterEndpointCommand = deserializeAws_queryDeleteDBClusterEndpointCommand;
async function deserializeAws_queryDeleteDBClusterEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointNotFoundFault":
        case "rds.admin#DBClusterEndpointNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "rds.admin#InvalidDBClusterEndpointStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "DBInstanceAutomatedBackupQuotaExceededFault":
        case "rds.admin#DBInstanceAutomatedBackupQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
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
async function deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBInstanceAutomatedBackupResult(data.DeleteDBInstanceAutomatedBackupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBInstanceAutomatedBackupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand = deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand;
async function deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "rds.admin#DBInstanceAutomatedBackupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceAutomatedBackupStateFault":
        case "rds.admin#InvalidDBInstanceAutomatedBackupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteDBParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBParameterGroupCommand = deserializeAws_queryDeleteDBParameterGroupCommand;
async function deserializeAws_queryDeleteDBParameterGroupCommandError(output, context) {
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
async function deserializeAws_queryDeleteDBProxyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBProxyResponse(data.DeleteDBProxyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBProxyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBProxyCommand = deserializeAws_queryDeleteDBProxyCommand;
async function deserializeAws_queryDeleteDBProxyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBProxyStateFault":
        case "rds.admin#InvalidDBProxyStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteDBSecurityGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBSecurityGroupCommand = deserializeAws_queryDeleteDBSecurityGroupCommand;
async function deserializeAws_queryDeleteDBSecurityGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "rds.admin#InvalidDBSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteDBSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBSnapshotResult(data.DeleteDBSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDBSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDBSnapshotCommand = deserializeAws_queryDeleteDBSnapshotCommand;
async function deserializeAws_queryDeleteDBSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSnapshotStateFault":
        case "rds.admin#InvalidDBSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryDeleteEventSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteEventSubscriptionResult(data.DeleteEventSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEventSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteEventSubscriptionCommand = deserializeAws_queryDeleteEventSubscriptionCommand;
async function deserializeAws_queryDeleteEventSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEventSubscriptionStateFault":
        case "rds.admin#InvalidEventSubscriptionStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "rds.admin#SubscriptionNotFoundFault":
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
async function deserializeAws_queryDeleteGlobalClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteGlobalClusterResult(data.DeleteGlobalClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGlobalClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteGlobalClusterCommand = deserializeAws_queryDeleteGlobalClusterCommand;
async function deserializeAws_queryDeleteGlobalClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "rds.admin#GlobalClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGlobalClusterStateFault":
        case "rds.admin#InvalidGlobalClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteInstallationMediaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMedia(data.DeleteInstallationMediaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InstallationMedia" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteInstallationMediaCommand = deserializeAws_queryDeleteInstallationMediaCommand;
async function deserializeAws_queryDeleteInstallationMediaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstallationMediaNotFoundFault":
        case "rds.admin#InstallationMediaNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstallationMediaNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteOptionGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteOptionGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteOptionGroupCommand = deserializeAws_queryDeleteOptionGroupCommand;
async function deserializeAws_queryDeleteOptionGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOptionGroupStateFault":
        case "rds.admin#InvalidOptionGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeregisterDBProxyTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeregisterDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterDBProxyTargetsResponse(data.DeregisterDBProxyTargetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterDBProxyTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeregisterDBProxyTargetsCommand = deserializeAws_queryDeregisterDBProxyTargetsCommand;
async function deserializeAws_queryDeregisterDBProxyTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "rds.admin#DBProxyTargetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetNotFoundFault":
        case "rds.admin#DBProxyTargetNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_queryAccountAttributesMessage(data.DescribeAccountAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AccountAttributesMessage" }, contents);
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
async function deserializeAws_queryDescribeCustomAvailabilityZonesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeCustomAvailabilityZonesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCustomAvailabilityZoneMessage(data.DescribeCustomAvailabilityZonesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CustomAvailabilityZoneMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeCustomAvailabilityZonesCommand = deserializeAws_queryDescribeCustomAvailabilityZonesCommand;
async function deserializeAws_queryDescribeCustomAvailabilityZonesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "rds.admin#CustomAvailabilityZoneNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDBClusterBacktracksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterBacktracksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterBacktrackMessage(data.DescribeDBClusterBacktracksResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterBacktrackMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterBacktracksCommand = deserializeAws_queryDescribeDBClusterBacktracksCommand;
async function deserializeAws_queryDescribeDBClusterBacktracksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterBacktrackNotFoundFault":
        case "rds.admin#DBClusterBacktrackNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
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
async function deserializeAws_queryDescribeDBClusterEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBClusterEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterEndpointMessage(data.DescribeDBClusterEndpointsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterEndpointMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBClusterEndpointsCommand = deserializeAws_queryDescribeDBClusterEndpointsCommand;
async function deserializeAws_queryDescribeDBClusterEndpointsCommandError(output, context) {
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
async function deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBInstanceAutomatedBackupMessage(data.DescribeDBInstanceAutomatedBackupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBInstanceAutomatedBackupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand;
async function deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "rds.admin#DBInstanceAutomatedBackupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryDescribeDBLogFilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBLogFilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBLogFilesResponse(data.DescribeDBLogFilesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBLogFilesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBLogFilesCommand = deserializeAws_queryDescribeDBLogFilesCommand;
async function deserializeAws_queryDescribeDBLogFilesCommandError(output, context) {
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
async function deserializeAws_queryDescribeDBParameterGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupsMessage(data.DescribeDBParameterGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBParameterGroupsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBParameterGroupsCommand = deserializeAws_queryDescribeDBParameterGroupsCommand;
async function deserializeAws_queryDescribeDBParameterGroupsCommandError(output, context) {
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
async function deserializeAws_queryDescribeDBParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupDetails(data.DescribeDBParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBParameterGroupDetails" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBParametersCommand = deserializeAws_queryDescribeDBParametersCommand;
async function deserializeAws_queryDescribeDBParametersCommandError(output, context) {
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
async function deserializeAws_queryDescribeDBProxiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBProxiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxiesResponse(data.DescribeDBProxiesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBProxiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBProxiesCommand = deserializeAws_queryDescribeDBProxiesCommand;
async function deserializeAws_queryDescribeDBProxiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDBProxyTargetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBProxyTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxyTargetGroupsResponse(data.DescribeDBProxyTargetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBProxyTargetGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBProxyTargetGroupsCommand = deserializeAws_queryDescribeDBProxyTargetGroupsCommand;
async function deserializeAws_queryDescribeDBProxyTargetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyTargetGroupNotFoundFault":
        case "rds.admin#DBProxyTargetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDBProxyTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxyTargetsResponse(data.DescribeDBProxyTargetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBProxyTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBProxyTargetsCommand = deserializeAws_queryDescribeDBProxyTargetsCommand;
async function deserializeAws_queryDescribeDBProxyTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "rds.admin#DBProxyTargetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetNotFoundFault":
        case "rds.admin#DBProxyTargetNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDBSecurityGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSecurityGroupMessage(data.DescribeDBSecurityGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBSecurityGroupMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBSecurityGroupsCommand = deserializeAws_queryDescribeDBSecurityGroupsCommand;
async function deserializeAws_queryDescribeDBSecurityGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDBSnapshotAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBSnapshotAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBSnapshotAttributesResult(data.DescribeDBSnapshotAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDBSnapshotAttributesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBSnapshotAttributesCommand = deserializeAws_queryDescribeDBSnapshotAttributesCommand;
async function deserializeAws_queryDescribeDBSnapshotAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_queryDescribeDBSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDBSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSnapshotMessage(data.DescribeDBSnapshotsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBSnapshotMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDBSnapshotsCommand = deserializeAws_queryDescribeDBSnapshotsCommand;
async function deserializeAws_queryDescribeDBSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
        default:
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
        case "SubscriptionNotFoundFault":
        case "rds.admin#SubscriptionNotFoundFault":
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
async function deserializeAws_queryDescribeGlobalClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeGlobalClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGlobalClustersMessage(data.DescribeGlobalClustersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GlobalClustersMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeGlobalClustersCommand = deserializeAws_queryDescribeGlobalClustersCommand;
async function deserializeAws_queryDescribeGlobalClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "rds.admin#GlobalClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeInstallationMediaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMediaMessage(data.DescribeInstallationMediaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InstallationMediaMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeInstallationMediaCommand = deserializeAws_queryDescribeInstallationMediaCommand;
async function deserializeAws_queryDescribeInstallationMediaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstallationMediaNotFoundFault":
        case "rds.admin#InstallationMediaNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstallationMediaNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeOptionGroupOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeOptionGroupOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptionGroupOptionsMessage(data.DescribeOptionGroupOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OptionGroupOptionsMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeOptionGroupOptionsCommand = deserializeAws_queryDescribeOptionGroupOptionsCommand;
async function deserializeAws_queryDescribeOptionGroupOptionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeOptionGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeOptionGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptionGroups(data.DescribeOptionGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OptionGroups" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeOptionGroupsCommand = deserializeAws_queryDescribeOptionGroupsCommand;
async function deserializeAws_queryDescribeOptionGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryDescribeReservedDBInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedDBInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedDBInstanceMessage(data.DescribeReservedDBInstancesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedDBInstanceMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedDBInstancesCommand = deserializeAws_queryDescribeReservedDBInstancesCommand;
async function deserializeAws_queryDescribeReservedDBInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstanceNotFoundFault":
        case "rds.admin#ReservedDBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedDBInstancesOfferingMessage(data.DescribeReservedDBInstancesOfferingsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReservedDBInstancesOfferingMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand = deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand;
async function deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstancesOfferingNotFoundFault":
        case "rds.admin#ReservedDBInstancesOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeSourceRegionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSourceRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySourceRegionMessage(data.DescribeSourceRegionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SourceRegionMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSourceRegionsCommand = deserializeAws_queryDescribeSourceRegionsCommand;
async function deserializeAws_queryDescribeSourceRegionsCommandError(output, context) {
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
async function deserializeAws_queryDescribeValidDBInstanceModificationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeValidDBInstanceModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeValidDBInstanceModificationsResult(data.DescribeValidDBInstanceModificationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeValidDBInstanceModificationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeValidDBInstanceModificationsCommand = deserializeAws_queryDescribeValidDBInstanceModificationsCommand;
async function deserializeAws_queryDescribeValidDBInstanceModificationsCommandError(output, context) {
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
async function deserializeAws_queryDownloadDBLogFilePortionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDownloadDBLogFilePortionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDownloadDBLogFilePortionDetails(data.DownloadDBLogFilePortionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DownloadDBLogFilePortionDetails" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDownloadDBLogFilePortionCommand = deserializeAws_queryDownloadDBLogFilePortionCommand;
async function deserializeAws_queryDownloadDBLogFilePortionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBLogFileNotFoundFault":
        case "rds.admin#DBLogFileNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBLogFileNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryImportInstallationMediaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryImportInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMedia(data.ImportInstallationMediaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InstallationMedia" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryImportInstallationMediaCommand = deserializeAws_queryImportInstallationMediaCommand;
async function deserializeAws_queryImportInstallationMediaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "rds.admin#CustomAvailabilityZoneNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstallationMediaAlreadyExistsFault":
        case "rds.admin#InstallationMediaAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstallationMediaAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryModifyCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCertificatesResult(data.ModifyCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyCertificatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyCertificatesCommand = deserializeAws_queryModifyCertificatesCommand;
async function deserializeAws_queryModifyCertificatesCommandError(output, context) {
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
async function deserializeAws_queryModifyCurrentDBClusterCapacityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyCurrentDBClusterCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterCapacityInfo(data.ModifyCurrentDBClusterCapacityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterCapacityInfo" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyCurrentDBClusterCapacityCommand = deserializeAws_queryModifyCurrentDBClusterCapacityCommand;
async function deserializeAws_queryModifyCurrentDBClusterCapacityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterCapacityFault":
        case "rds.admin#InvalidDBClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBClusterEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterEndpoint(data.ModifyDBClusterEndpointResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBClusterEndpoint" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBClusterEndpointCommand = deserializeAws_queryModifyDBClusterEndpointCommand;
async function deserializeAws_queryModifyDBClusterEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointNotFoundFault":
        case "rds.admin#DBClusterEndpointNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "rds.admin#InvalidDBClusterEndpointStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "BackupPolicyNotFoundFault":
        case "rds.admin#BackupPolicyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryModifyDBParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupNameMessage(data.ModifyDBParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBParameterGroupCommand = deserializeAws_queryModifyDBParameterGroupCommand;
async function deserializeAws_queryModifyDBParameterGroupCommandError(output, context) {
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
async function deserializeAws_queryModifyDBProxyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBProxyResponse(data.ModifyDBProxyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBProxyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBProxyCommand = deserializeAws_queryModifyDBProxyCommand;
async function deserializeAws_queryModifyDBProxyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyAlreadyExistsFault":
        case "rds.admin#DBProxyAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBProxyStateFault":
        case "rds.admin#InvalidDBProxyStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyDBProxyTargetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBProxyTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBProxyTargetGroupResponse(data.ModifyDBProxyTargetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBProxyTargetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBProxyTargetGroupCommand = deserializeAws_queryModifyDBProxyTargetGroupCommand;
async function deserializeAws_queryModifyDBProxyTargetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "rds.admin#DBProxyTargetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyDBSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSnapshotResult(data.ModifyDBSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBSnapshotCommand = deserializeAws_queryModifyDBSnapshotCommand;
async function deserializeAws_queryModifyDBSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_queryModifyDBSnapshotAttributeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyDBSnapshotAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSnapshotAttributeResult(data.ModifyDBSnapshotAttributeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDBSnapshotAttributeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyDBSnapshotAttributeCommand = deserializeAws_queryModifyDBSnapshotAttributeCommand;
async function deserializeAws_queryModifyDBSnapshotAttributeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSnapshotStateFault":
        case "rds.admin#InvalidDBSnapshotStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "EventSubscriptionQuotaExceededFault":
        case "rds.admin#EventSubscriptionQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSInvalidTopicFault":
        case "rds.admin#SNSInvalidTopicFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSNoAuthorizationFault":
        case "rds.admin#SNSNoAuthorizationFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SNSTopicArnNotFoundFault":
        case "rds.admin#SNSTopicArnNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "rds.admin#SubscriptionCategoryNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "rds.admin#SubscriptionNotFoundFault":
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
async function deserializeAws_queryModifyGlobalClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyGlobalClusterResult(data.ModifyGlobalClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyGlobalClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyGlobalClusterCommand = deserializeAws_queryModifyGlobalClusterCommand;
async function deserializeAws_queryModifyGlobalClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "rds.admin#GlobalClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGlobalClusterStateFault":
        case "rds.admin#InvalidGlobalClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyOptionGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyOptionGroupResult(data.ModifyOptionGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyOptionGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyOptionGroupCommand = deserializeAws_queryModifyOptionGroupCommand;
async function deserializeAws_queryModifyOptionGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOptionGroupStateFault":
        case "rds.admin#InvalidOptionGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPromoteReadReplicaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPromoteReadReplicaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPromoteReadReplicaResult(data.PromoteReadReplicaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PromoteReadReplicaResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPromoteReadReplicaCommand = deserializeAws_queryPromoteReadReplicaCommand;
async function deserializeAws_queryPromoteReadReplicaCommandError(output, context) {
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
async function deserializeAws_queryPromoteReadReplicaDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPromoteReadReplicaDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPromoteReadReplicaDBClusterResult(data.PromoteReadReplicaDBClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PromoteReadReplicaDBClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPromoteReadReplicaDBClusterCommand = deserializeAws_queryPromoteReadReplicaDBClusterCommand;
async function deserializeAws_queryPromoteReadReplicaDBClusterCommandError(output, context) {
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
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedDBInstancesOfferingResult(data.PurchaseReservedDBInstancesOfferingResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PurchaseReservedDBInstancesOfferingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand = deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand;
async function deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstanceAlreadyExistsFault":
        case "rds.admin#ReservedDBInstanceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedDBInstanceQuotaExceededFault":
        case "rds.admin#ReservedDBInstanceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedDBInstancesOfferingNotFoundFault":
        case "rds.admin#ReservedDBInstancesOfferingNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
async function deserializeAws_queryRegisterDBProxyTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRegisterDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterDBProxyTargetsResponse(data.RegisterDBProxyTargetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterDBProxyTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRegisterDBProxyTargetsCommand = deserializeAws_queryRegisterDBProxyTargetsCommand;
async function deserializeAws_queryRegisterDBProxyTargetsCommandError(output, context) {
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
        case "DBProxyNotFoundFault":
        case "rds.admin#DBProxyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetAlreadyRegisteredFault":
        case "rds.admin#DBProxyTargetAlreadyRegisteredFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "rds.admin#DBProxyTargetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRemoveFromGlobalClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveFromGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveFromGlobalClusterResult(data.RemoveFromGlobalClusterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveFromGlobalClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveFromGlobalClusterCommand = deserializeAws_queryRemoveFromGlobalClusterCommand;
async function deserializeAws_queryRemoveFromGlobalClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalClusterNotFoundFault":
        case "rds.admin#GlobalClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGlobalClusterStateFault":
        case "rds.admin#InvalidGlobalClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveRoleFromDBClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveRoleFromDBClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveRoleFromDBClusterCommand = deserializeAws_queryRemoveRoleFromDBClusterCommand;
async function deserializeAws_queryRemoveRoleFromDBClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "rds.admin#DBClusterNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBClusterRoleNotFoundFault":
        case "rds.admin#DBClusterRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveRoleFromDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveRoleFromDBInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveRoleFromDBInstanceCommand = deserializeAws_queryRemoveRoleFromDBInstanceCommand;
async function deserializeAws_queryRemoveRoleFromDBInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "rds.admin#DBInstanceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceRoleNotFoundFault":
        case "rds.admin#DBInstanceRoleNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceRoleNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult(data.RemoveSourceIdentifierFromSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveSourceIdentifierFromSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand;
async function deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SourceNotFoundFault":
        case "rds.admin#SourceNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionNotFoundFault":
        case "rds.admin#SubscriptionNotFoundFault":
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
async function deserializeAws_queryResetDBParameterGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResetDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupNameMessage(data.ResetDBParameterGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DBParameterGroupNameMessage" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResetDBParameterGroupCommand = deserializeAws_queryResetDBParameterGroupCommand;
async function deserializeAws_queryResetDBParameterGroupCommandError(output, context) {
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
async function deserializeAws_queryRestoreDBClusterFromS3Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBClusterFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterFromS3Result(data.RestoreDBClusterFromS3Result, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBClusterFromS3Result" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBClusterFromS3Command = deserializeAws_queryRestoreDBClusterFromS3Command;
async function deserializeAws_queryRestoreDBClusterFromS3CommandError(output, context) {
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
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "rds.admin#InsufficientStorageClusterCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "rds.admin#InvalidDBSubnetGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3BucketFault":
        case "rds.admin#InvalidS3BucketFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DBClusterParameterGroupNotFoundFault":
        case "rds.admin#DBClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DBClusterParameterGroupNotFoundFault":
        case "rds.admin#DBClusterParameterGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult(data.RestoreDBInstanceFromDBSnapshotResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBInstanceFromDBSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand;
async function deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupPolicyNotFoundFault":
        case "rds.admin#BackupPolicyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DBSnapshotNotFoundFault":
        case "rds.admin#DBSnapshotNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceQuotaExceededFault":
        case "rds.admin#InstanceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreDBInstanceFromS3Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBInstanceFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceFromS3Result(data.RestoreDBInstanceFromS3Result, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBInstanceFromS3Result" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBInstanceFromS3Command = deserializeAws_queryRestoreDBInstanceFromS3Command;
async function deserializeAws_queryRestoreDBInstanceFromS3CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupPolicyNotFoundFault":
        case "rds.admin#BackupPolicyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "InvalidS3BucketFault":
        case "rds.admin#InvalidS3BucketFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRestoreDBInstanceToPointInTimeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceToPointInTimeResult(data.RestoreDBInstanceToPointInTimeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreDBInstanceToPointInTimeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRestoreDBInstanceToPointInTimeCommand = deserializeAws_queryRestoreDBInstanceToPointInTimeCommand;
async function deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupPolicyNotFoundFault":
        case "rds.admin#BackupPolicyNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceAlreadyExistsFault":
        case "rds.admin#DBInstanceAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "rds.admin#DBInstanceAutomatedBackupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "rds.admin#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSubnetGroupNotFoundFault":
        case "rds.admin#DBSubnetGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DomainNotFoundFault":
        case "rds.admin#DomainNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceQuotaExceededFault":
        case "rds.admin#InstanceQuotaExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "OptionGroupNotFoundFault":
        case "rds.admin#OptionGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PointInTimeRestoreNotEnabledFault":
        case "rds.admin#PointInTimeRestoreNotEnabledFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "rds.admin#ProvisionedIopsNotAvailableInAZFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryRevokeDBSecurityGroupIngressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRevokeDBSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeDBSecurityGroupIngressResult(data.RevokeDBSecurityGroupIngressResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeDBSecurityGroupIngressResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRevokeDBSecurityGroupIngressCommand = deserializeAws_queryRevokeDBSecurityGroupIngressCommand;
async function deserializeAws_queryRevokeDBSecurityGroupIngressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "rds.admin#AuthorizationNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DBSecurityGroupNotFoundFault":
        case "rds.admin#DBSecurityGroupNotFoundFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "rds.admin#InvalidDBSecurityGroupStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryStartActivityStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStartActivityStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartActivityStreamResponse(data.StartActivityStreamResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartActivityStreamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStartActivityStreamCommand = deserializeAws_queryStartActivityStreamCommand;
async function deserializeAws_queryStartActivityStreamCommandError(output, context) {
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
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSKeyNotAccessibleFault":
        case "rds.admin#KMSKeyNotAccessibleFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryStartDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStartDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartDBInstanceResult(data.StartDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStartDBInstanceCommand = deserializeAws_queryStartDBInstanceCommand;
async function deserializeAws_queryStartDBInstanceCommandError(output, context) {
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
        case "InsufficientDBInstanceCapacityFault":
        case "rds.admin#InsufficientDBInstanceCapacityFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBClusterStateFault":
        case "rds.admin#InvalidDBClusterStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDBInstanceStateFault":
        case "rds.admin#InvalidDBInstanceStateFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryStopActivityStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStopActivityStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopActivityStreamResponse(data.StopActivityStreamResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopActivityStreamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStopActivityStreamCommand = deserializeAws_queryStopActivityStreamCommand;
async function deserializeAws_queryStopActivityStreamCommandError(output, context) {
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
async function deserializeAws_queryStopDBInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryStopDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopDBInstanceResult(data.StopDBInstanceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDBInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryStopDBInstanceCommand = deserializeAws_queryStopDBInstanceCommand;
async function deserializeAws_queryStopDBInstanceCommandError(output, context) {
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
const deserializeAws_queryBackupPolicyNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBackupPolicyNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "BackupPolicyNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCertificateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CertificateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "CustomAvailabilityZoneAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "CustomAvailabilityZoneNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "CustomAvailabilityZoneQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterBacktrackNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterBacktrackNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterEndpointAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterEndpointNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterEndpointNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterEndpointQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterRoleAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBClusterRoleQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceAutomatedBackupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceAutomatedBackupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceRoleAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBInstanceRoleQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBLogFileNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBLogFileNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBLogFileNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryDBProxyAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBProxyNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBProxyQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetAlreadyRegisteredFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyTargetAlreadyRegisteredFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyTargetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBProxyTargetNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBProxyTargetNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "DBSecurityGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DBSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupNotSupportedFault(body.Error, context);
    const contents = Object.assign({ name: "DBSecurityGroupNotSupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "DBSecurityGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupNotAllowedFault(body.Error, context);
    const contents = Object.assign({ name: "DBSubnetGroupNotAllowedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryDomainNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDomainNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "DomainNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "EventSubscriptionQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "GlobalClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryGlobalClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "GlobalClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryGlobalClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "GlobalClusterQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInstallationMediaAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstallationMediaAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "InstallationMediaAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInstallationMediaNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstallationMediaNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "InstallationMediaNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryInvalidDBClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterCapacityFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterEndpointStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBClusterEndpointStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBInstanceAutomatedBackupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryInvalidDBProxyStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBProxyStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBProxyStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryInvalidDBSubnetGroupFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetGroupFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidDBSubnetGroupFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryInvalidEventSubscriptionStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidEventSubscriptionStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidEventSubscriptionStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidGlobalClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidGlobalClusterStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidGlobalClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidOptionGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidOptionGroupStateFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidOptionGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRestoreFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRestoreFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidRestoreFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidS3BucketFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3BucketFault(body.Error, context);
    const contents = Object.assign({ name: "InvalidS3BucketFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_queryOptionGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "OptionGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOptionGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "OptionGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOptionGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "OptionGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPointInTimeRestoreNotEnabledFault(body.Error, context);
    const contents = Object.assign({ name: "PointInTimeRestoreNotEnabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryProvisionedIopsNotAvailableInAZFault(body.Error, context);
    const contents = Object.assign({ name: "ProvisionedIopsNotAvailableInAZFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceAlreadyExistsFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedDBInstanceAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedDBInstanceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedDBInstanceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceQuotaExceededFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedDBInstanceQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstancesOfferingNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "ReservedDBInstancesOfferingNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_querySourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySourceNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_querySubscriptionNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAddRoleToDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.FeatureName !== undefined) {
        entries["FeatureName"] = input.FeatureName;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    return entries;
};
const serializeAws_queryAddRoleToDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.FeatureName !== undefined) {
        entries["FeatureName"] = input.FeatureName;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    return entries;
};
const serializeAws_queryAddSourceIdentifierToSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SourceIdentifier !== undefined) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
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
const serializeAws_queryAuthorizeDBSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CIDRIP !== undefined) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.DBSecurityGroupName !== undefined) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    if (input.EC2SecurityGroupId !== undefined) {
        entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
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
const serializeAws_queryBacktrackDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.BacktrackTo !== undefined) {
        entries["BacktrackTo"] =
            input.BacktrackTo.toISOString().split(".")[0] + "Z";
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.Force !== undefined) {
        entries["Force"] = input.Force;
    }
    if (input.UseEarliestTimeOnPointInTimeUnavailable !== undefined) {
        entries["UseEarliestTimeOnPointInTimeUnavailable"] =
            input.UseEarliestTimeOnPointInTimeUnavailable;
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
const serializeAws_queryConnectionPoolConfiguration = (input, context) => {
    const entries = {};
    if (input.ConnectionBorrowTimeout !== undefined) {
        entries["ConnectionBorrowTimeout"] = input.ConnectionBorrowTimeout;
    }
    if (input.InitQuery !== undefined) {
        entries["InitQuery"] = input.InitQuery;
    }
    if (input.MaxConnectionsPercent !== undefined) {
        entries["MaxConnectionsPercent"] = input.MaxConnectionsPercent;
    }
    if (input.MaxIdleConnectionsPercent !== undefined) {
        entries["MaxIdleConnectionsPercent"] = input.MaxIdleConnectionsPercent;
    }
    if (input.SessionPinningFilters !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.SessionPinningFilters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SessionPinningFilters.${key}`;
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
const serializeAws_queryCopyDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBParameterGroupIdentifier !== undefined) {
        entries["SourceDBParameterGroupIdentifier"] =
            input.SourceDBParameterGroupIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetDBParameterGroupDescription !== undefined) {
        entries["TargetDBParameterGroupDescription"] =
            input.TargetDBParameterGroupDescription;
    }
    if (input.TargetDBParameterGroupIdentifier !== undefined) {
        entries["TargetDBParameterGroupIdentifier"] =
            input.TargetDBParameterGroupIdentifier;
    }
    return entries;
};
const serializeAws_queryCopyDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.CopyTags !== undefined) {
        entries["CopyTags"] = input.CopyTags;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PreSignedUrl !== undefined) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.SourceDBSnapshotIdentifier !== undefined) {
        entries["SourceDBSnapshotIdentifier"] = input.SourceDBSnapshotIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetDBSnapshotIdentifier !== undefined) {
        entries["TargetDBSnapshotIdentifier"] = input.TargetDBSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryCopyOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.SourceOptionGroupIdentifier !== undefined) {
        entries["SourceOptionGroupIdentifier"] = input.SourceOptionGroupIdentifier;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetOptionGroupDescription !== undefined) {
        entries["TargetOptionGroupDescription"] =
            input.TargetOptionGroupDescription;
    }
    if (input.TargetOptionGroupIdentifier !== undefined) {
        entries["TargetOptionGroupIdentifier"] = input.TargetOptionGroupIdentifier;
    }
    return entries;
};
const serializeAws_queryCreateCustomAvailabilityZoneMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneName !== undefined) {
        entries["CustomAvailabilityZoneName"] = input.CustomAvailabilityZoneName;
    }
    if (input.ExistingVpnId !== undefined) {
        entries["ExistingVpnId"] = input.ExistingVpnId;
    }
    if (input.NewVpnTunnelName !== undefined) {
        entries["NewVpnTunnelName"] = input.NewVpnTunnelName;
    }
    if (input.VpnTunnelOriginatorIP !== undefined) {
        entries["VpnTunnelOriginatorIP"] = input.VpnTunnelOriginatorIP;
    }
    return entries;
};
const serializeAws_queryCreateDBClusterEndpointMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.EndpointType !== undefined) {
        entries["EndpointType"] = input.EndpointType;
    }
    if (input.ExcludedMembers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExcludedMembers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StaticMembers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StaticMembers.${key}`;
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
const serializeAws_queryCreateDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BacktrackWindow !== undefined) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CharacterSetName !== undefined) {
        entries["CharacterSetName"] = input.CharacterSetName;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
    if (input.DatabaseName !== undefined) {
        entries["DatabaseName"] = input.DatabaseName;
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
    if (input.EnableHttpEndpoint !== undefined) {
        entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineMode !== undefined) {
        entries["EngineMode"] = input.EngineMode;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
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
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreSignedUrl !== undefined) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.PreferredBackupWindow !== undefined) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ReplicationSourceIdentifier !== undefined) {
        entries["ReplicationSourceIdentifier"] = input.ReplicationSourceIdentifier;
    }
    if (input.ScalingConfiguration !== undefined) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScalingConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
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
    if (input.AllocatedStorage !== undefined) {
        entries["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CharacterSetName !== undefined) {
        entries["CharacterSetName"] = input.CharacterSetName;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
    if (input.DBName !== undefined) {
        entries["DBName"] = input.DBName;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.MasterUsername !== undefined) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.MaxAllocatedStorage !== undefined) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    if (input.MonitoringInterval !== undefined) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.MonitoringRoleArn !== undefined) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.PerformanceInsightsRetentionPeriod !== undefined) {
        entries["PerformanceInsightsRetentionPeriod"] =
            input.PerformanceInsightsRetentionPeriod;
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
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PromotionTier !== undefined) {
        entries["PromotionTier"] = input.PromotionTier;
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.StorageEncrypted !== undefined) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TdeCredentialArn !== undefined) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.Timezone !== undefined) {
        entries["Timezone"] = input.Timezone;
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
const serializeAws_queryCreateDBInstanceReadReplicaMessage = (input, context) => {
    const entries = {};
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MonitoringInterval !== undefined) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.MonitoringRoleArn !== undefined) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.PerformanceInsightsRetentionPeriod !== undefined) {
        entries["PerformanceInsightsRetentionPeriod"] =
            input.PerformanceInsightsRetentionPeriod;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.PreSignedUrl !== undefined) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.SourceDBInstanceIdentifier !== undefined) {
        entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
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
const serializeAws_queryCreateDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupFamily !== undefined) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryCreateDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.Auth !== undefined) {
        const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Auth.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.DebugLogging !== undefined) {
        entries["DebugLogging"] = input.DebugLogging;
    }
    if (input.EngineFamily !== undefined) {
        entries["EngineFamily"] = input.EngineFamily;
    }
    if (input.IdleClientTimeout !== undefined) {
        entries["IdleClientTimeout"] = input.IdleClientTimeout;
    }
    if (input.RequireTLS !== undefined) {
        entries["RequireTLS"] = input.RequireTLS;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VpcSecurityGroupIds !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.VpcSubnetIds !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.VpcSubnetIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSubnetIds.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateDBSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupDescription !== undefined) {
        entries["DBSecurityGroupDescription"] = input.DBSecurityGroupDescription;
    }
    if (input.DBSecurityGroupName !== undefined) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
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
const serializeAws_queryCreateDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryCreateGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.DatabaseName !== undefined) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.SourceDBClusterIdentifier !== undefined) {
        entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
    }
    if (input.StorageEncrypted !== undefined) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    return entries;
};
const serializeAws_queryCreateOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.EngineName !== undefined) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.MajorEngineVersion !== undefined) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
    }
    if (input.OptionGroupDescription !== undefined) {
        entries["OptionGroupDescription"] = input.OptionGroupDescription;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
const serializeAws_queryDBSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`DBSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteCustomAvailabilityZoneMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterEndpointMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
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
const serializeAws_queryDeleteDBInstanceAutomatedBackupMessage = (input, context) => {
    const entries = {};
    if (input.DbiResourceId !== undefined) {
        entries["DbiResourceId"] = input.DbiResourceId;
    }
    return entries;
};
const serializeAws_queryDeleteDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DeleteAutomatedBackups !== undefined) {
        entries["DeleteAutomatedBackups"] = input.DeleteAutomatedBackups;
    }
    if (input.FinalDBSnapshotIdentifier !== undefined) {
        entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
    }
    if (input.SkipFinalSnapshot !== undefined) {
        entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
    }
    return entries;
};
const serializeAws_queryDeleteDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    return entries;
};
const serializeAws_queryDeleteDBSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryDeleteEventSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
const serializeAws_queryDeleteGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.InstallationMediaId !== undefined) {
        entries["InstallationMediaId"] = input.InstallationMediaId;
    }
    return entries;
};
const serializeAws_queryDeleteOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    return entries;
};
const serializeAws_queryDeregisterDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifiers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBClusterIdentifiers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBInstanceIdentifiers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBInstanceIdentifiers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    return entries;
};
const serializeAws_queryDescribeAccountAttributesMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCustomAvailabilityZonesMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
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
const serializeAws_queryDescribeDBClusterBacktracksMessage = (input, context) => {
    const entries = {};
    if (input.BacktrackIdentifier !== undefined) {
        entries["BacktrackIdentifier"] = input.BacktrackIdentifier;
    }
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
const serializeAws_queryDescribeDBClusterEndpointsMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
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
    if (input.IncludeShared !== undefined) {
        entries["IncludeShared"] = input.IncludeShared;
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
    if (input.IncludeAll !== undefined) {
        entries["IncludeAll"] = input.IncludeAll;
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
const serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DbiResourceId !== undefined) {
        entries["DbiResourceId"] = input.DbiResourceId;
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
const serializeAws_queryDescribeDBLogFilesMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.FileLastWritten !== undefined) {
        entries["FileLastWritten"] = input.FileLastWritten;
    }
    if (input.FileSize !== undefined) {
        entries["FileSize"] = input.FileSize;
    }
    if (input.FilenameContains !== undefined) {
        entries["FilenameContains"] = input.FilenameContains;
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
const serializeAws_queryDescribeDBParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryDescribeDBParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryDescribeDBProxiesRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
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
const serializeAws_queryDescribeDBProxyTargetGroupsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
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
    if (input.TargetGroupName !== undefined) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    return entries;
};
const serializeAws_queryDescribeDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
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
    if (input.TargetGroupName !== undefined) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    return entries;
};
const serializeAws_queryDescribeDBSecurityGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
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
const serializeAws_queryDescribeDBSnapshotAttributesMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeDBSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.DbiResourceId !== undefined) {
        entries["DbiResourceId"] = input.DbiResourceId;
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
const serializeAws_queryDescribeEngineDefaultParametersMessage = (input, context) => {
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
const serializeAws_queryDescribeEventSubscriptionsMessage = (input, context) => {
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
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
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
const serializeAws_queryDescribeGlobalClustersMessage = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.InstallationMediaId !== undefined) {
        entries["InstallationMediaId"] = input.InstallationMediaId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeOptionGroupOptionsMessage = (input, context) => {
    const entries = {};
    if (input.EngineName !== undefined) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MajorEngineVersion !== undefined) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
const serializeAws_queryDescribeOptionGroupsMessage = (input, context) => {
    const entries = {};
    if (input.EngineName !== undefined) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MajorEngineVersion !== undefined) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
const serializeAws_queryDescribeReservedDBInstancesMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Duration !== undefined) {
        entries["Duration"] = input.Duration;
    }
    if (input.Filters !== undefined) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LeaseId !== undefined) {
        entries["LeaseId"] = input.LeaseId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OfferingType !== undefined) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.ProductDescription !== undefined) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.ReservedDBInstanceId !== undefined) {
        entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
    }
    if (input.ReservedDBInstancesOfferingId !== undefined) {
        entries["ReservedDBInstancesOfferingId"] =
            input.ReservedDBInstancesOfferingId;
    }
    return entries;
};
const serializeAws_queryDescribeReservedDBInstancesOfferingsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Duration !== undefined) {
        entries["Duration"] = input.Duration;
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
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OfferingType !== undefined) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.ProductDescription !== undefined) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.ReservedDBInstancesOfferingId !== undefined) {
        entries["ReservedDBInstancesOfferingId"] =
            input.ReservedDBInstancesOfferingId;
    }
    return entries;
};
const serializeAws_queryDescribeSourceRegionsMessage = (input, context) => {
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
    if (input.RegionName !== undefined) {
        entries["RegionName"] = input.RegionName;
    }
    return entries;
};
const serializeAws_queryDescribeValidDBInstanceModificationsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryDownloadDBLogFilePortionMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.LogFileName !== undefined) {
        entries["LogFileName"] = input.LogFileName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.NumberOfLines !== undefined) {
        entries["NumberOfLines"] = input.NumberOfLines;
    }
    return entries;
};
const serializeAws_queryEngineModeList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
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
const serializeAws_queryImportInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineInstallationMediaPath !== undefined) {
        entries["EngineInstallationMediaPath"] = input.EngineInstallationMediaPath;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.OSInstallationMediaPath !== undefined) {
        entries["OSInstallationMediaPath"] = input.OSInstallationMediaPath;
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
const serializeAws_queryModifyCertificatesMessage = (input, context) => {
    const entries = {};
    if (input.CertificateIdentifier !== undefined) {
        entries["CertificateIdentifier"] = input.CertificateIdentifier;
    }
    if (input.RemoveCustomerOverride !== undefined) {
        entries["RemoveCustomerOverride"] = input.RemoveCustomerOverride;
    }
    return entries;
};
const serializeAws_queryModifyCurrentDBClusterCapacityMessage = (input, context) => {
    const entries = {};
    if (input.Capacity !== undefined) {
        entries["Capacity"] = input.Capacity;
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.SecondsBeforeTimeout !== undefined) {
        entries["SecondsBeforeTimeout"] = input.SecondsBeforeTimeout;
    }
    if (input.TimeoutAction !== undefined) {
        entries["TimeoutAction"] = input.TimeoutAction;
    }
    return entries;
};
const serializeAws_queryModifyDBClusterEndpointMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.EndpointType !== undefined) {
        entries["EndpointType"] = input.EndpointType;
    }
    if (input.ExcludedMembers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExcludedMembers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StaticMembers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StaticMembers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.AllowMajorVersionUpgrade !== undefined) {
        entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.BacktrackWindow !== undefined) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
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
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterParameterGroupName !== undefined) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DBInstanceParameterGroupName !== undefined) {
        entries["DBInstanceParameterGroupName"] =
            input.DBInstanceParameterGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableHttpEndpoint !== undefined) {
        entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
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
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
    if (input.ScalingConfiguration !== undefined) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScalingConfiguration.${key}`;
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
    if (input.AllocatedStorage !== undefined) {
        entries["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.AllowMajorVersionUpgrade !== undefined) {
        entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CACertificateIdentifier !== undefined) {
        entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
    }
    if (input.CertificateRotationRestart !== undefined) {
        entries["CertificateRotationRestart"] = input.CertificateRotationRestart;
    }
    if (input.CloudwatchLogsExportConfiguration !== undefined) {
        const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CloudwatchLogsExportConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBPortNumber !== undefined) {
        entries["DBPortNumber"] = input.DBPortNumber;
    }
    if (input.DBSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.MaxAllocatedStorage !== undefined) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    if (input.MonitoringInterval !== undefined) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.MonitoringRoleArn !== undefined) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.NewDBInstanceIdentifier !== undefined) {
        entries["NewDBInstanceIdentifier"] = input.NewDBInstanceIdentifier;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.PerformanceInsightsRetentionPeriod !== undefined) {
        entries["PerformanceInsightsRetentionPeriod"] =
            input.PerformanceInsightsRetentionPeriod;
    }
    if (input.PreferredBackupWindow !== undefined) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PromotionTier !== undefined) {
        entries["PromotionTier"] = input.PromotionTier;
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.TdeCredentialArn !== undefined) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.UseDefaultProcessorFeatures !== undefined) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
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
const serializeAws_queryModifyDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryModifyDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.Auth !== undefined) {
        const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Auth.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.DebugLogging !== undefined) {
        entries["DebugLogging"] = input.DebugLogging;
    }
    if (input.IdleClientTimeout !== undefined) {
        entries["IdleClientTimeout"] = input.IdleClientTimeout;
    }
    if (input.NewDBProxyName !== undefined) {
        entries["NewDBProxyName"] = input.NewDBProxyName;
    }
    if (input.RequireTLS !== undefined) {
        entries["RequireTLS"] = input.RequireTLS;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.SecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.SecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryModifyDBProxyTargetGroupRequest = (input, context) => {
    const entries = {};
    if (input.ConnectionPoolConfig !== undefined) {
        const memberEntries = serializeAws_queryConnectionPoolConfiguration(input.ConnectionPoolConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ConnectionPoolConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.NewName !== undefined) {
        entries["NewName"] = input.NewName;
    }
    if (input.TargetGroupName !== undefined) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    return entries;
};
const serializeAws_queryModifyDBSnapshotAttributeMessage = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryModifyDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
    if (input.SnsTopicArn !== undefined) {
        entries["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceType !== undefined) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
const serializeAws_queryModifyGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.NewGlobalClusterIdentifier !== undefined) {
        entries["NewGlobalClusterIdentifier"] = input.NewGlobalClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryModifyOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.OptionsToInclude !== undefined) {
        const memberEntries = serializeAws_queryOptionConfigurationList(input.OptionsToInclude, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionsToInclude.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionsToRemove !== undefined) {
        const memberEntries = serializeAws_queryOptionNamesList(input.OptionsToRemove, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryOptionConfiguration = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupMemberships !== undefined) {
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroupMemberships, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBSecurityGroupMemberships.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionName !== undefined) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.OptionSettings !== undefined) {
        const memberEntries = serializeAws_queryOptionSettingsList(input.OptionSettings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OptionVersion !== undefined) {
        entries["OptionVersion"] = input.OptionVersion;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.VpcSecurityGroupMemberships !== undefined) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupMemberships, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `VpcSecurityGroupMemberships.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryOptionConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryOptionConfiguration(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`OptionConfiguration.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryOptionNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryOptionSetting = (input, context) => {
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
    if (input.DefaultValue !== undefined) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.IsCollection !== undefined) {
        entries["IsCollection"] = input.IsCollection;
    }
    if (input.IsModifiable !== undefined) {
        entries["IsModifiable"] = input.IsModifiable;
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryOptionSettingsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryOptionSetting(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`OptionSetting.${counter}.${key}`] = memberEntries[key];
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
    if (input.SupportedEngineModes !== undefined) {
        const memberEntries = serializeAws_queryEngineModeList(input.SupportedEngineModes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SupportedEngineModes.${key}`;
            entries[loc] = memberEntries[key];
        });
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
const serializeAws_queryProcessorFeature = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryProcessorFeatureList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryProcessorFeature(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`ProcessorFeature.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPromoteReadReplicaDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryPromoteReadReplicaMessage = (input, context) => {
    const entries = {};
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.PreferredBackupWindow !== undefined) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedDBInstancesOfferingMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceCount !== undefined) {
        entries["DBInstanceCount"] = input.DBInstanceCount;
    }
    if (input.ReservedDBInstanceId !== undefined) {
        entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
    }
    if (input.ReservedDBInstancesOfferingId !== undefined) {
        entries["ReservedDBInstancesOfferingId"] =
            input.ReservedDBInstancesOfferingId;
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
const serializeAws_queryRegisterDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifiers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBClusterIdentifiers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBInstanceIdentifiers !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBInstanceIdentifiers.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DBProxyName !== undefined) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    return entries;
};
const serializeAws_queryRemoveFromGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.DbClusterIdentifier !== undefined) {
        entries["DbClusterIdentifier"] = input.DbClusterIdentifier;
    }
    if (input.GlobalClusterIdentifier !== undefined) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryRemoveRoleFromDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.FeatureName !== undefined) {
        entries["FeatureName"] = input.FeatureName;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    return entries;
};
const serializeAws_queryRemoveRoleFromDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.FeatureName !== undefined) {
        entries["FeatureName"] = input.FeatureName;
    }
    if (input.RoleArn !== undefined) {
        entries["RoleArn"] = input.RoleArn;
    }
    return entries;
};
const serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SourceIdentifier !== undefined) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    if (input.SubscriptionName !== undefined) {
        entries["SubscriptionName"] = input.SubscriptionName;
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
const serializeAws_queryResetDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryRestoreDBClusterFromS3Message = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BacktrackWindow !== undefined) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CharacterSetName !== undefined) {
        entries["CharacterSetName"] = input.CharacterSetName;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
    if (input.DatabaseName !== undefined) {
        entries["DatabaseName"] = input.DatabaseName;
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
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
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
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
    if (input.S3BucketName !== undefined) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3IngestionRoleArn !== undefined) {
        entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
    }
    if (input.S3Prefix !== undefined) {
        entries["S3Prefix"] = input.S3Prefix;
    }
    if (input.SourceEngine !== undefined) {
        entries["SourceEngine"] = input.SourceEngine;
    }
    if (input.SourceEngineVersion !== undefined) {
        entries["SourceEngineVersion"] = input.SourceEngineVersion;
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
const serializeAws_queryRestoreDBClusterFromSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BacktrackWindow !== undefined) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
    if (input.DatabaseName !== undefined) {
        entries["DatabaseName"] = input.DatabaseName;
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
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineMode !== undefined) {
        entries["EngineMode"] = input.EngineMode;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.ScalingConfiguration !== undefined) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScalingConfiguration.${key}`;
            entries[loc] = memberEntries[key];
        });
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
    if (input.BacktrackWindow !== undefined) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.RestoreToTime !== undefined) {
        entries["RestoreToTime"] =
            input.RestoreToTime.toISOString().split(".")[0] + "Z";
    }
    if (input.RestoreType !== undefined) {
        entries["RestoreType"] = input.RestoreType;
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
const serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBName !== undefined) {
        entries["DBName"] = input.DBName;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TdeCredentialArn !== undefined) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.UseDefaultProcessorFeatures !== undefined) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
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
const serializeAws_queryRestoreDBInstanceFromS3Message = (input, context) => {
    const entries = {};
    if (input.AllocatedStorage !== undefined) {
        entries["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.BackupRetentionPeriod !== undefined) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBName !== undefined) {
        entries["DBName"] = input.DBName;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBSecurityGroups !== undefined) {
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DBSecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
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
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.MasterUserPassword !== undefined) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.MasterUsername !== undefined) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.MonitoringInterval !== undefined) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.MonitoringRoleArn !== undefined) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.PerformanceInsightsRetentionPeriod !== undefined) {
        entries["PerformanceInsightsRetentionPeriod"] =
            input.PerformanceInsightsRetentionPeriod;
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
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.S3BucketName !== undefined) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3IngestionRoleArn !== undefined) {
        entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
    }
    if (input.S3Prefix !== undefined) {
        entries["S3Prefix"] = input.S3Prefix;
    }
    if (input.SourceEngine !== undefined) {
        entries["SourceEngine"] = input.SourceEngine;
    }
    if (input.SourceEngineVersion !== undefined) {
        entries["SourceEngineVersion"] = input.SourceEngineVersion;
    }
    if (input.StorageEncrypted !== undefined) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
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
const serializeAws_queryRestoreDBInstanceToPointInTimeMessage = (input, context) => {
    const entries = {};
    if (input.AutoMinorVersionUpgrade !== undefined) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.CopyTagsToSnapshot !== undefined) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DBInstanceClass !== undefined) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBName !== undefined) {
        entries["DBName"] = input.DBName;
    }
    if (input.DBParameterGroupName !== undefined) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBSubnetGroupName !== undefined) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DeletionProtection !== undefined) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableCloudwatchLogsExports !== undefined) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined) {
        entries["EnableIAMDatabaseAuthentication"] =
            input.EnableIAMDatabaseAuthentication;
    }
    if (input.Engine !== undefined) {
        entries["Engine"] = input.Engine;
    }
    if (input.Iops !== undefined) {
        entries["Iops"] = input.Iops;
    }
    if (input.LicenseModel !== undefined) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.OptionGroupName !== undefined) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.ProcessorFeatures !== undefined) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PubliclyAccessible !== undefined) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.RestoreTime !== undefined) {
        entries["RestoreTime"] =
            input.RestoreTime.toISOString().split(".")[0] + "Z";
    }
    if (input.SourceDBInstanceIdentifier !== undefined) {
        entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
    }
    if (input.SourceDbiResourceId !== undefined) {
        entries["SourceDbiResourceId"] = input.SourceDbiResourceId;
    }
    if (input.StorageType !== undefined) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetDBInstanceIdentifier !== undefined) {
        entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
    }
    if (input.TdeCredentialArn !== undefined) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.UseDefaultProcessorFeatures !== undefined) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
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
const serializeAws_queryRevokeDBSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.CIDRIP !== undefined) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.DBSecurityGroupName !== undefined) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    if (input.EC2SecurityGroupId !== undefined) {
        entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
    }
    if (input.EC2SecurityGroupName !== undefined) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_queryScalingConfiguration = (input, context) => {
    const entries = {};
    if (input.AutoPause !== undefined) {
        entries["AutoPause"] = input.AutoPause;
    }
    if (input.MaxCapacity !== undefined) {
        entries["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MinCapacity !== undefined) {
        entries["MinCapacity"] = input.MinCapacity;
    }
    if (input.SecondsUntilAutoPause !== undefined) {
        entries["SecondsUntilAutoPause"] = input.SecondsUntilAutoPause;
    }
    if (input.TimeoutAction !== undefined) {
        entries["TimeoutAction"] = input.TimeoutAction;
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
const serializeAws_queryStartActivityStreamRequest = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.KmsKeyId !== undefined) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Mode !== undefined) {
        entries["Mode"] = input.Mode;
    }
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
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
const serializeAws_queryStartDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryStopActivityStreamRequest = (input, context) => {
    const entries = {};
    if (input.ApplyImmediately !== undefined) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
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
const serializeAws_queryStopDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryStringList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
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
const serializeAws_queryUserAuthConfig = (input, context) => {
    const entries = {};
    if (input.AuthScheme !== undefined) {
        entries["AuthScheme"] = input.AuthScheme;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.IAMAuth !== undefined) {
        entries["IAMAuth"] = input.IAMAuth;
    }
    if (input.SecretArn !== undefined) {
        entries["SecretArn"] = input.SecretArn;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUserAuthConfigList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryUserAuthConfig(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
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
const deserializeAws_queryBackupPolicyNotFoundFault = (output, context) => {
    let contents = {
        __type: "BackupPolicyNotFoundFault",
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
const deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "CustomAvailabilityZoneAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneNotFoundFault = (output, context) => {
    let contents = {
        __type: "CustomAvailabilityZoneNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "CustomAvailabilityZoneQuotaExceededFault",
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
const deserializeAws_queryDBClusterBacktrackNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterBacktrackNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBClusterEndpointAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterEndpointNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBClusterEndpointQuotaExceededFault",
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
const deserializeAws_queryDBClusterRoleAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBClusterRoleAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoleNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBClusterRoleNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoleQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBClusterRoleQuotaExceededFault",
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
const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBInstanceAutomatedBackupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBInstanceAutomatedBackupQuotaExceededFault",
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
const deserializeAws_queryDBInstanceRoleAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBInstanceRoleAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoleNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBInstanceRoleNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoleQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBInstanceRoleQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBLogFileNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBLogFileNotFoundFault",
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
const deserializeAws_queryDBProxyAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBProxyAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBProxyNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBProxyQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetAlreadyRegisteredFault = (output, context) => {
    let contents = {
        __type: "DBProxyTargetAlreadyRegisteredFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBProxyTargetGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetNotFoundFault = (output, context) => {
    let contents = {
        __type: "DBProxyTargetNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupAlreadyExistsFault",
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
const deserializeAws_queryDBSecurityGroupNotSupportedFault = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupNotSupportedFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupQuotaExceededFault",
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
const deserializeAws_queryDBSubnetGroupNotAllowedFault = (output, context) => {
    let contents = {
        __type: "DBSubnetGroupNotAllowedFault",
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
const deserializeAws_queryDomainNotFoundFault = (output, context) => {
    let contents = {
        __type: "DomainNotFoundFault",
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
const deserializeAws_queryGlobalClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "GlobalClusterAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalClusterNotFoundFault = (output, context) => {
    let contents = {
        __type: "GlobalClusterNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalClusterQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "GlobalClusterQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "InstallationMediaAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaNotFoundFault = (output, context) => {
    let contents = {
        __type: "InstallationMediaNotFoundFault",
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
const deserializeAws_queryInvalidDBClusterCapacityFault = (output, context) => {
    let contents = {
        __type: "InvalidDBClusterCapacityFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterEndpointStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBClusterEndpointStateFault",
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
const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBInstanceAutomatedBackupStateFault",
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
const deserializeAws_queryInvalidDBProxyStateFault = (output, context) => {
    let contents = {
        __type: "InvalidDBProxyStateFault",
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
const deserializeAws_queryInvalidDBSubnetGroupFault = (output, context) => {
    let contents = {
        __type: "InvalidDBSubnetGroupFault",
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
const deserializeAws_queryInvalidEventSubscriptionStateFault = (output, context) => {
    let contents = {
        __type: "InvalidEventSubscriptionStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidGlobalClusterStateFault = (output, context) => {
    let contents = {
        __type: "InvalidGlobalClusterStateFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidOptionGroupStateFault = (output, context) => {
    let contents = {
        __type: "InvalidOptionGroupStateFault",
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
const deserializeAws_queryInvalidS3BucketFault = (output, context) => {
    let contents = {
        __type: "InvalidS3BucketFault",
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
const deserializeAws_queryOptionGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "OptionGroupAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupNotFoundFault = (output, context) => {
    let contents = {
        __type: "OptionGroupNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "OptionGroupQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPointInTimeRestoreNotEnabledFault = (output, context) => {
    let contents = {
        __type: "PointInTimeRestoreNotEnabledFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryProvisionedIopsNotAvailableInAZFault = (output, context) => {
    let contents = {
        __type: "ProvisionedIopsNotAvailableInAZFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "ReservedDBInstanceAlreadyExistsFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedDBInstanceNotFoundFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceQuotaExceededFault = (output, context) => {
    let contents = {
        __type: "ReservedDBInstanceQuotaExceededFault",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingNotFoundFault = (output, context) => {
    let contents = {
        __type: "ReservedDBInstancesOfferingNotFoundFault",
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
const deserializeAws_queryAccountAttributesMessage = (output, context) => {
    let contents = {
        __type: "AccountAttributesMessage",
        AccountQuotas: undefined
    };
    if (output.AccountQuotas === "") {
        contents.AccountQuotas = [];
    }
    if (output["AccountQuotas"] !== undefined &&
        output["AccountQuotas"]["AccountQuota"] !== undefined) {
        const wrappedItem = output["AccountQuotas"]["AccountQuota"] instanceof Array
            ? output["AccountQuotas"]["AccountQuota"]
            : [output["AccountQuotas"]["AccountQuota"]];
        contents.AccountQuotas = deserializeAws_queryAccountQuotaList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAccountQuota = (output, context) => {
    let contents = {
        __type: "AccountQuota",
        AccountQuotaName: undefined,
        Max: undefined,
        Used: undefined
    };
    if (output["AccountQuotaName"] !== undefined) {
        contents.AccountQuotaName = output["AccountQuotaName"];
    }
    if (output["Max"] !== undefined) {
        contents.Max = parseInt(output["Max"]);
    }
    if (output["Used"] !== undefined) {
        contents.Used = parseInt(output["Used"]);
    }
    return contents;
};
const deserializeAws_queryAccountQuotaList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccountQuota(entry, context));
    });
    return contents;
};
const deserializeAws_queryAddSourceIdentifierToSubscriptionResult = (output, context) => {
    let contents = {
        __type: "AddSourceIdentifierToSubscriptionResult",
        EventSubscription: undefined
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
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
const deserializeAws_queryAuthorizeDBSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "AuthorizeDBSecurityGroupIngressResult",
        DBSecurityGroup: undefined
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
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
const deserializeAws_queryAvailableProcessorFeature = (output, context) => {
    let contents = {
        __type: "AvailableProcessorFeature",
        AllowedValues: undefined,
        DefaultValue: undefined,
        Name: undefined
    };
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAvailableProcessorFeatureList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAvailableProcessorFeature(entry, context));
    });
    return contents;
};
const deserializeAws_queryCertificate = (output, context) => {
    let contents = {
        __type: "Certificate",
        CertificateArn: undefined,
        CertificateIdentifier: undefined,
        CertificateType: undefined,
        CustomerOverride: undefined,
        CustomerOverrideValidTill: undefined,
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
    if (output["CustomerOverride"] !== undefined) {
        contents.CustomerOverride = output["CustomerOverride"] == "true";
    }
    if (output["CustomerOverrideValidTill"] !== undefined) {
        contents.CustomerOverrideValidTill = new Date(output["CustomerOverrideValidTill"]);
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
const deserializeAws_queryCharacterSet = (output, context) => {
    let contents = {
        __type: "CharacterSet",
        CharacterSetDescription: undefined,
        CharacterSetName: undefined
    };
    if (output["CharacterSetDescription"] !== undefined) {
        contents.CharacterSetDescription = output["CharacterSetDescription"];
    }
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    return contents;
};
const deserializeAws_queryConnectionPoolConfigurationInfo = (output, context) => {
    let contents = {
        __type: "ConnectionPoolConfigurationInfo",
        ConnectionBorrowTimeout: undefined,
        InitQuery: undefined,
        MaxConnectionsPercent: undefined,
        MaxIdleConnectionsPercent: undefined,
        SessionPinningFilters: undefined
    };
    if (output["ConnectionBorrowTimeout"] !== undefined) {
        contents.ConnectionBorrowTimeout = parseInt(output["ConnectionBorrowTimeout"]);
    }
    if (output["InitQuery"] !== undefined) {
        contents.InitQuery = output["InitQuery"];
    }
    if (output["MaxConnectionsPercent"] !== undefined) {
        contents.MaxConnectionsPercent = parseInt(output["MaxConnectionsPercent"]);
    }
    if (output["MaxIdleConnectionsPercent"] !== undefined) {
        contents.MaxIdleConnectionsPercent = parseInt(output["MaxIdleConnectionsPercent"]);
    }
    if (output.SessionPinningFilters === "") {
        contents.SessionPinningFilters = [];
    }
    if (output["SessionPinningFilters"] !== undefined &&
        output["SessionPinningFilters"]["member"] !== undefined) {
        const wrappedItem = output["SessionPinningFilters"]["member"] instanceof Array
            ? output["SessionPinningFilters"]["member"]
            : [output["SessionPinningFilters"]["member"]];
        contents.SessionPinningFilters = deserializeAws_queryStringList(wrappedItem, context);
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
const deserializeAws_queryCopyDBParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CopyDBParameterGroupResult",
        DBParameterGroup: undefined
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCopyDBSnapshotResult = (output, context) => {
    let contents = {
        __type: "CopyDBSnapshotResult",
        DBSnapshot: undefined
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCopyOptionGroupResult = (output, context) => {
    let contents = {
        __type: "CopyOptionGroupResult",
        OptionGroup: undefined
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCustomAvailabilityZoneResult = (output, context) => {
    let contents = {
        __type: "CreateCustomAvailabilityZoneResult",
        CustomAvailabilityZone: undefined
    };
    if (output["CustomAvailabilityZone"] !== undefined) {
        contents.CustomAvailabilityZone = deserializeAws_queryCustomAvailabilityZone(output["CustomAvailabilityZone"], context);
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
const deserializeAws_queryCreateDBInstanceReadReplicaResult = (output, context) => {
    let contents = {
        __type: "CreateDBInstanceReadReplicaResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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
const deserializeAws_queryCreateDBParameterGroupResult = (output, context) => {
    let contents = {
        __type: "CreateDBParameterGroupResult",
        DBParameterGroup: undefined
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBProxyResponse = (output, context) => {
    let contents = {
        __type: "CreateDBProxyResponse",
        DBProxy: undefined
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSecurityGroupResult = (output, context) => {
    let contents = {
        __type: "CreateDBSecurityGroupResult",
        DBSecurityGroup: undefined
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateDBSnapshotResult",
        DBSnapshot: undefined
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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
const deserializeAws_queryCreateGlobalClusterResult = (output, context) => {
    let contents = {
        __type: "CreateGlobalClusterResult",
        GlobalCluster: undefined
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateOptionGroupResult = (output, context) => {
    let contents = {
        __type: "CreateOptionGroupResult",
        OptionGroup: undefined
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZone = (output, context) => {
    let contents = {
        __type: "CustomAvailabilityZone",
        CustomAvailabilityZoneId: undefined,
        CustomAvailabilityZoneName: undefined,
        CustomAvailabilityZoneStatus: undefined,
        VpnDetails: undefined
    };
    if (output["CustomAvailabilityZoneId"] !== undefined) {
        contents.CustomAvailabilityZoneId = output["CustomAvailabilityZoneId"];
    }
    if (output["CustomAvailabilityZoneName"] !== undefined) {
        contents.CustomAvailabilityZoneName = output["CustomAvailabilityZoneName"];
    }
    if (output["CustomAvailabilityZoneStatus"] !== undefined) {
        contents.CustomAvailabilityZoneStatus =
            output["CustomAvailabilityZoneStatus"];
    }
    if (output["VpnDetails"] !== undefined) {
        contents.VpnDetails = deserializeAws_queryVpnDetails(output["VpnDetails"], context);
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCustomAvailabilityZone(entry, context));
    });
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneMessage = (output, context) => {
    let contents = {
        __type: "CustomAvailabilityZoneMessage",
        CustomAvailabilityZones: undefined,
        Marker: undefined
    };
    if (output.CustomAvailabilityZones === "") {
        contents.CustomAvailabilityZones = [];
    }
    if (output["CustomAvailabilityZones"] !== undefined &&
        output["CustomAvailabilityZones"]["CustomAvailabilityZone"] !== undefined) {
        const wrappedItem = output["CustomAvailabilityZones"]["CustomAvailabilityZone"] instanceof
            Array
            ? output["CustomAvailabilityZones"]["CustomAvailabilityZone"]
            : [output["CustomAvailabilityZones"]["CustomAvailabilityZone"]];
        contents.CustomAvailabilityZones = deserializeAws_queryCustomAvailabilityZoneList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBCluster = (output, context) => {
    let contents = {
        __type: "DBCluster",
        ActivityStreamKinesisStreamName: undefined,
        ActivityStreamKmsKeyId: undefined,
        ActivityStreamMode: undefined,
        ActivityStreamStatus: undefined,
        AllocatedStorage: undefined,
        AssociatedRoles: undefined,
        AvailabilityZones: undefined,
        BacktrackConsumedChangeRecords: undefined,
        BacktrackWindow: undefined,
        BackupRetentionPeriod: undefined,
        Capacity: undefined,
        CharacterSetName: undefined,
        CloneGroupId: undefined,
        ClusterCreateTime: undefined,
        CopyTagsToSnapshot: undefined,
        CrossAccountClone: undefined,
        CustomEndpoints: undefined,
        DBClusterArn: undefined,
        DBClusterIdentifier: undefined,
        DBClusterMembers: undefined,
        DBClusterOptionGroupMemberships: undefined,
        DBClusterParameterGroup: undefined,
        DBSubnetGroup: undefined,
        DatabaseName: undefined,
        DbClusterResourceId: undefined,
        DeletionProtection: undefined,
        EarliestBacktrackTime: undefined,
        EarliestRestorableTime: undefined,
        EnabledCloudwatchLogsExports: undefined,
        Endpoint: undefined,
        Engine: undefined,
        EngineMode: undefined,
        EngineVersion: undefined,
        HostedZoneId: undefined,
        HttpEndpointEnabled: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        KmsKeyId: undefined,
        LatestRestorableTime: undefined,
        MasterUsername: undefined,
        MultiAZ: undefined,
        PercentProgress: undefined,
        Port: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        ReadReplicaIdentifiers: undefined,
        ReaderEndpoint: undefined,
        ReplicationSourceIdentifier: undefined,
        ScalingConfigurationInfo: undefined,
        Status: undefined,
        StorageEncrypted: undefined,
        VpcSecurityGroups: undefined
    };
    if (output["ActivityStreamKinesisStreamName"] !== undefined) {
        contents.ActivityStreamKinesisStreamName =
            output["ActivityStreamKinesisStreamName"];
    }
    if (output["ActivityStreamKmsKeyId"] !== undefined) {
        contents.ActivityStreamKmsKeyId = output["ActivityStreamKmsKeyId"];
    }
    if (output["ActivityStreamMode"] !== undefined) {
        contents.ActivityStreamMode = output["ActivityStreamMode"];
    }
    if (output["ActivityStreamStatus"] !== undefined) {
        contents.ActivityStreamStatus = output["ActivityStreamStatus"];
    }
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
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
    if (output["BacktrackConsumedChangeRecords"] !== undefined) {
        contents.BacktrackConsumedChangeRecords = parseInt(output["BacktrackConsumedChangeRecords"]);
    }
    if (output["BacktrackWindow"] !== undefined) {
        contents.BacktrackWindow = parseInt(output["BacktrackWindow"]);
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["Capacity"] !== undefined) {
        contents.Capacity = parseInt(output["Capacity"]);
    }
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    if (output["CloneGroupId"] !== undefined) {
        contents.CloneGroupId = output["CloneGroupId"];
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["CopyTagsToSnapshot"] !== undefined) {
        contents.CopyTagsToSnapshot = output["CopyTagsToSnapshot"] == "true";
    }
    if (output["CrossAccountClone"] !== undefined) {
        contents.CrossAccountClone = output["CrossAccountClone"] == "true";
    }
    if (output.CustomEndpoints === "") {
        contents.CustomEndpoints = [];
    }
    if (output["CustomEndpoints"] !== undefined &&
        output["CustomEndpoints"]["member"] !== undefined) {
        const wrappedItem = output["CustomEndpoints"]["member"] instanceof Array
            ? output["CustomEndpoints"]["member"]
            : [output["CustomEndpoints"]["member"]];
        contents.CustomEndpoints = deserializeAws_queryStringList(wrappedItem, context);
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
    if (output.DBClusterOptionGroupMemberships === "") {
        contents.DBClusterOptionGroupMemberships = [];
    }
    if (output["DBClusterOptionGroupMemberships"] !== undefined &&
        output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"] !==
            undefined) {
        const wrappedItem = output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"] instanceof Array
            ? output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"]
            : [output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"]];
        contents.DBClusterOptionGroupMemberships = deserializeAws_queryDBClusterOptionGroupMemberships(wrappedItem, context);
    }
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = output["DBClusterParameterGroup"];
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = output["DBSubnetGroup"];
    }
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["DbClusterResourceId"] !== undefined) {
        contents.DbClusterResourceId = output["DbClusterResourceId"];
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output["EarliestBacktrackTime"] !== undefined) {
        contents.EarliestBacktrackTime = new Date(output["EarliestBacktrackTime"]);
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
    if (output["EngineMode"] !== undefined) {
        contents.EngineMode = output["EngineMode"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["HttpEndpointEnabled"] !== undefined) {
        contents.HttpEndpointEnabled = output["HttpEndpointEnabled"] == "true";
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled =
            output["IAMDatabaseAuthenticationEnabled"] == "true";
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
    if (output.ReadReplicaIdentifiers === "") {
        contents.ReadReplicaIdentifiers = [];
    }
    if (output["ReadReplicaIdentifiers"] !== undefined &&
        output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"] !== undefined) {
        const wrappedItem = output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"] instanceof Array
            ? output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]
            : [output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]];
        contents.ReadReplicaIdentifiers = deserializeAws_queryReadReplicaIdentifierList(wrappedItem, context);
    }
    if (output["ReaderEndpoint"] !== undefined) {
        contents.ReaderEndpoint = output["ReaderEndpoint"];
    }
    if (output["ReplicationSourceIdentifier"] !== undefined) {
        contents.ReplicationSourceIdentifier =
            output["ReplicationSourceIdentifier"];
    }
    if (output["ScalingConfigurationInfo"] !== undefined) {
        contents.ScalingConfigurationInfo = deserializeAws_queryScalingConfigurationInfo(output["ScalingConfigurationInfo"], context);
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
const deserializeAws_queryDBClusterBacktrack = (output, context) => {
    let contents = {
        __type: "DBClusterBacktrack",
        BacktrackIdentifier: undefined,
        BacktrackRequestCreationTime: undefined,
        BacktrackTo: undefined,
        BacktrackedFrom: undefined,
        DBClusterIdentifier: undefined,
        Status: undefined
    };
    if (output["BacktrackIdentifier"] !== undefined) {
        contents.BacktrackIdentifier = output["BacktrackIdentifier"];
    }
    if (output["BacktrackRequestCreationTime"] !== undefined) {
        contents.BacktrackRequestCreationTime = new Date(output["BacktrackRequestCreationTime"]);
    }
    if (output["BacktrackTo"] !== undefined) {
        contents.BacktrackTo = new Date(output["BacktrackTo"]);
    }
    if (output["BacktrackedFrom"] !== undefined) {
        contents.BacktrackedFrom = new Date(output["BacktrackedFrom"]);
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBClusterBacktrackList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterBacktrack(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterBacktrackMessage = (output, context) => {
    let contents = {
        __type: "DBClusterBacktrackMessage",
        DBClusterBacktracks: undefined,
        Marker: undefined
    };
    if (output.DBClusterBacktracks === "") {
        contents.DBClusterBacktracks = [];
    }
    if (output["DBClusterBacktracks"] !== undefined &&
        output["DBClusterBacktracks"]["DBClusterBacktrack"] !== undefined) {
        const wrappedItem = output["DBClusterBacktracks"]["DBClusterBacktrack"] instanceof Array
            ? output["DBClusterBacktracks"]["DBClusterBacktrack"]
            : [output["DBClusterBacktracks"]["DBClusterBacktrack"]];
        contents.DBClusterBacktracks = deserializeAws_queryDBClusterBacktrackList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBClusterCapacityInfo = (output, context) => {
    let contents = {
        __type: "DBClusterCapacityInfo",
        CurrentCapacity: undefined,
        DBClusterIdentifier: undefined,
        PendingCapacity: undefined,
        SecondsBeforeTimeout: undefined,
        TimeoutAction: undefined
    };
    if (output["CurrentCapacity"] !== undefined) {
        contents.CurrentCapacity = parseInt(output["CurrentCapacity"]);
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["PendingCapacity"] !== undefined) {
        contents.PendingCapacity = parseInt(output["PendingCapacity"]);
    }
    if (output["SecondsBeforeTimeout"] !== undefined) {
        contents.SecondsBeforeTimeout = parseInt(output["SecondsBeforeTimeout"]);
    }
    if (output["TimeoutAction"] !== undefined) {
        contents.TimeoutAction = output["TimeoutAction"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpoint = (output, context) => {
    let contents = {
        __type: "DBClusterEndpoint",
        CustomEndpointType: undefined,
        DBClusterEndpointArn: undefined,
        DBClusterEndpointIdentifier: undefined,
        DBClusterEndpointResourceIdentifier: undefined,
        DBClusterIdentifier: undefined,
        Endpoint: undefined,
        EndpointType: undefined,
        ExcludedMembers: undefined,
        StaticMembers: undefined,
        Status: undefined
    };
    if (output["CustomEndpointType"] !== undefined) {
        contents.CustomEndpointType = output["CustomEndpointType"];
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    if (output["DBClusterEndpointIdentifier"] !== undefined) {
        contents.DBClusterEndpointIdentifier =
            output["DBClusterEndpointIdentifier"];
    }
    if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
        contents.DBClusterEndpointResourceIdentifier =
            output["DBClusterEndpointResourceIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["EndpointType"] !== undefined) {
        contents.EndpointType = output["EndpointType"];
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined &&
        output["ExcludedMembers"]["member"] !== undefined) {
        const wrappedItem = output["ExcludedMembers"]["member"] instanceof Array
            ? output["ExcludedMembers"]["member"]
            : [output["ExcludedMembers"]["member"]];
        contents.ExcludedMembers = deserializeAws_queryStringList(wrappedItem, context);
    }
    if (output.StaticMembers === "") {
        contents.StaticMembers = [];
    }
    if (output["StaticMembers"] !== undefined &&
        output["StaticMembers"]["member"] !== undefined) {
        const wrappedItem = output["StaticMembers"]["member"] instanceof Array
            ? output["StaticMembers"]["member"]
            : [output["StaticMembers"]["member"]];
        contents.StaticMembers = deserializeAws_queryStringList(wrappedItem, context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterEndpoint(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterEndpointMessage = (output, context) => {
    let contents = {
        __type: "DBClusterEndpointMessage",
        DBClusterEndpoints: undefined,
        Marker: undefined
    };
    if (output.DBClusterEndpoints === "") {
        contents.DBClusterEndpoints = [];
    }
    if (output["DBClusterEndpoints"] !== undefined &&
        output["DBClusterEndpoints"]["DBClusterEndpointList"] !== undefined) {
        const wrappedItem = output["DBClusterEndpoints"]["DBClusterEndpointList"] instanceof Array
            ? output["DBClusterEndpoints"]["DBClusterEndpointList"]
            : [output["DBClusterEndpoints"]["DBClusterEndpointList"]];
        contents.DBClusterEndpoints = deserializeAws_queryDBClusterEndpointList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
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
const deserializeAws_queryDBClusterOptionGroupMemberships = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBClusterOptionGroupStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBClusterOptionGroupStatus = (output, context) => {
    let contents = {
        __type: "DBClusterOptionGroupStatus",
        DBClusterOptionGroupName: undefined,
        Status: undefined
    };
    if (output["DBClusterOptionGroupName"] !== undefined) {
        contents.DBClusterOptionGroupName = output["DBClusterOptionGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
        FeatureName: undefined,
        RoleArn: undefined,
        Status: undefined
    };
    if (output["FeatureName"] !== undefined) {
        contents.FeatureName = output["FeatureName"];
    }
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
        AllocatedStorage: undefined,
        AvailabilityZones: undefined,
        ClusterCreateTime: undefined,
        DBClusterIdentifier: undefined,
        DBClusterSnapshotArn: undefined,
        DBClusterSnapshotIdentifier: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        KmsKeyId: undefined,
        LicenseModel: undefined,
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
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
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
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled =
            output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
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
        DefaultCharacterSet: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        ExportableLogTypes: undefined,
        Status: undefined,
        SupportedCharacterSets: undefined,
        SupportedEngineModes: undefined,
        SupportedFeatureNames: undefined,
        SupportedTimezones: undefined,
        SupportsLogExportsToCloudwatchLogs: undefined,
        SupportsReadReplica: undefined,
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
    if (output["DefaultCharacterSet"] !== undefined) {
        contents.DefaultCharacterSet = deserializeAws_queryCharacterSet(output["DefaultCharacterSet"], context);
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
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.SupportedCharacterSets === "") {
        contents.SupportedCharacterSets = [];
    }
    if (output["SupportedCharacterSets"] !== undefined &&
        output["SupportedCharacterSets"]["CharacterSet"] !== undefined) {
        const wrappedItem = output["SupportedCharacterSets"]["CharacterSet"] instanceof Array
            ? output["SupportedCharacterSets"]["CharacterSet"]
            : [output["SupportedCharacterSets"]["CharacterSet"]];
        contents.SupportedCharacterSets = deserializeAws_querySupportedCharacterSetsList(wrappedItem, context);
    }
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined &&
        output["SupportedEngineModes"]["member"] !== undefined) {
        const wrappedItem = output["SupportedEngineModes"]["member"] instanceof Array
            ? output["SupportedEngineModes"]["member"]
            : [output["SupportedEngineModes"]["member"]];
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(wrappedItem, context);
    }
    if (output.SupportedFeatureNames === "") {
        contents.SupportedFeatureNames = [];
    }
    if (output["SupportedFeatureNames"] !== undefined &&
        output["SupportedFeatureNames"]["member"] !== undefined) {
        const wrappedItem = output["SupportedFeatureNames"]["member"] instanceof Array
            ? output["SupportedFeatureNames"]["member"]
            : [output["SupportedFeatureNames"]["member"]];
        contents.SupportedFeatureNames = deserializeAws_queryFeatureNameList(wrappedItem, context);
    }
    if (output.SupportedTimezones === "") {
        contents.SupportedTimezones = [];
    }
    if (output["SupportedTimezones"] !== undefined &&
        output["SupportedTimezones"]["Timezone"] !== undefined) {
        const wrappedItem = output["SupportedTimezones"]["Timezone"] instanceof Array
            ? output["SupportedTimezones"]["Timezone"]
            : [output["SupportedTimezones"]["Timezone"]];
        contents.SupportedTimezones = deserializeAws_querySupportedTimezonesList(wrappedItem, context);
    }
    if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
        contents.SupportsLogExportsToCloudwatchLogs =
            output["SupportsLogExportsToCloudwatchLogs"] == "true";
    }
    if (output["SupportsReadReplica"] !== undefined) {
        contents.SupportsReadReplica = output["SupportsReadReplica"] == "true";
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
        AllocatedStorage: undefined,
        AssociatedRoles: undefined,
        AutoMinorVersionUpgrade: undefined,
        AvailabilityZone: undefined,
        BackupRetentionPeriod: undefined,
        CACertificateIdentifier: undefined,
        CharacterSetName: undefined,
        CopyTagsToSnapshot: undefined,
        DBClusterIdentifier: undefined,
        DBInstanceArn: undefined,
        DBInstanceClass: undefined,
        DBInstanceIdentifier: undefined,
        DBInstanceStatus: undefined,
        DBName: undefined,
        DBParameterGroups: undefined,
        DBSecurityGroups: undefined,
        DBSubnetGroup: undefined,
        DbInstancePort: undefined,
        DbiResourceId: undefined,
        DeletionProtection: undefined,
        DomainMemberships: undefined,
        EnabledCloudwatchLogsExports: undefined,
        Endpoint: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        EnhancedMonitoringResourceArn: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        InstanceCreateTime: undefined,
        Iops: undefined,
        KmsKeyId: undefined,
        LatestRestorableTime: undefined,
        LicenseModel: undefined,
        ListenerEndpoint: undefined,
        MasterUsername: undefined,
        MaxAllocatedStorage: undefined,
        MonitoringInterval: undefined,
        MonitoringRoleArn: undefined,
        MultiAZ: undefined,
        OptionGroupMemberships: undefined,
        PendingModifiedValues: undefined,
        PerformanceInsightsEnabled: undefined,
        PerformanceInsightsKMSKeyId: undefined,
        PerformanceInsightsRetentionPeriod: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        ProcessorFeatures: undefined,
        PromotionTier: undefined,
        PubliclyAccessible: undefined,
        ReadReplicaDBClusterIdentifiers: undefined,
        ReadReplicaDBInstanceIdentifiers: undefined,
        ReadReplicaSourceDBInstanceIdentifier: undefined,
        SecondaryAvailabilityZone: undefined,
        StatusInfos: undefined,
        StorageEncrypted: undefined,
        StorageType: undefined,
        TdeCredentialArn: undefined,
        Timezone: undefined,
        VpcSecurityGroups: undefined
    };
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output.AssociatedRoles === "") {
        contents.AssociatedRoles = [];
    }
    if (output["AssociatedRoles"] !== undefined &&
        output["AssociatedRoles"]["DBInstanceRole"] !== undefined) {
        const wrappedItem = output["AssociatedRoles"]["DBInstanceRole"] instanceof Array
            ? output["AssociatedRoles"]["DBInstanceRole"]
            : [output["AssociatedRoles"]["DBInstanceRole"]];
        contents.AssociatedRoles = deserializeAws_queryDBInstanceRoles(wrappedItem, context);
    }
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
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    if (output["CopyTagsToSnapshot"] !== undefined) {
        contents.CopyTagsToSnapshot = output["CopyTagsToSnapshot"] == "true";
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
    if (output["DBName"] !== undefined) {
        contents.DBName = output["DBName"];
    }
    if (output.DBParameterGroups === "") {
        contents.DBParameterGroups = [];
    }
    if (output["DBParameterGroups"] !== undefined &&
        output["DBParameterGroups"]["DBParameterGroup"] !== undefined) {
        const wrappedItem = output["DBParameterGroups"]["DBParameterGroup"] instanceof Array
            ? output["DBParameterGroups"]["DBParameterGroup"]
            : [output["DBParameterGroups"]["DBParameterGroup"]];
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupStatusList(wrappedItem, context);
    }
    if (output.DBSecurityGroups === "") {
        contents.DBSecurityGroups = [];
    }
    if (output["DBSecurityGroups"] !== undefined &&
        output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
        const wrappedItem = output["DBSecurityGroups"]["DBSecurityGroup"] instanceof Array
            ? output["DBSecurityGroups"]["DBSecurityGroup"]
            : [output["DBSecurityGroups"]["DBSecurityGroup"]];
        contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroupMembershipList(wrappedItem, context);
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    if (output["DbInstancePort"] !== undefined) {
        contents.DbInstancePort = parseInt(output["DbInstancePort"]);
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output.DomainMemberships === "") {
        contents.DomainMemberships = [];
    }
    if (output["DomainMemberships"] !== undefined &&
        output["DomainMemberships"]["DomainMembership"] !== undefined) {
        const wrappedItem = output["DomainMemberships"]["DomainMembership"] instanceof Array
            ? output["DomainMemberships"]["DomainMembership"]
            : [output["DomainMemberships"]["DomainMembership"]];
        contents.DomainMemberships = deserializeAws_queryDomainMembershipList(wrappedItem, context);
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
    if (output["EnhancedMonitoringResourceArn"] !== undefined) {
        contents.EnhancedMonitoringResourceArn =
            output["EnhancedMonitoringResourceArn"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled =
            output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LatestRestorableTime"] !== undefined) {
        contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["ListenerEndpoint"] !== undefined) {
        contents.ListenerEndpoint = deserializeAws_queryEndpoint(output["ListenerEndpoint"], context);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["MaxAllocatedStorage"] !== undefined) {
        contents.MaxAllocatedStorage = parseInt(output["MaxAllocatedStorage"]);
    }
    if (output["MonitoringInterval"] !== undefined) {
        contents.MonitoringInterval = parseInt(output["MonitoringInterval"]);
    }
    if (output["MonitoringRoleArn"] !== undefined) {
        contents.MonitoringRoleArn = output["MonitoringRoleArn"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output.OptionGroupMemberships === "") {
        contents.OptionGroupMemberships = [];
    }
    if (output["OptionGroupMemberships"] !== undefined &&
        output["OptionGroupMemberships"]["OptionGroupMembership"] !== undefined) {
        const wrappedItem = output["OptionGroupMemberships"]["OptionGroupMembership"] instanceof Array
            ? output["OptionGroupMemberships"]["OptionGroupMembership"]
            : [output["OptionGroupMemberships"]["OptionGroupMembership"]];
        contents.OptionGroupMemberships = deserializeAws_queryOptionGroupMembershipList(wrappedItem, context);
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["PerformanceInsightsEnabled"] !== undefined) {
        contents.PerformanceInsightsEnabled =
            output["PerformanceInsightsEnabled"] == "true";
    }
    if (output["PerformanceInsightsKMSKeyId"] !== undefined) {
        contents.PerformanceInsightsKMSKeyId =
            output["PerformanceInsightsKMSKeyId"];
    }
    if (output["PerformanceInsightsRetentionPeriod"] !== undefined) {
        contents.PerformanceInsightsRetentionPeriod = parseInt(output["PerformanceInsightsRetentionPeriod"]);
    }
    if (output["PreferredBackupWindow"] !== undefined) {
        contents.PreferredBackupWindow = output["PreferredBackupWindow"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined &&
        output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        const wrappedItem = output["ProcessorFeatures"]["ProcessorFeature"] instanceof Array
            ? output["ProcessorFeatures"]["ProcessorFeature"]
            : [output["ProcessorFeatures"]["ProcessorFeature"]];
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(wrappedItem, context);
    }
    if (output["PromotionTier"] !== undefined) {
        contents.PromotionTier = parseInt(output["PromotionTier"]);
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output.ReadReplicaDBClusterIdentifiers === "") {
        contents.ReadReplicaDBClusterIdentifiers = [];
    }
    if (output["ReadReplicaDBClusterIdentifiers"] !== undefined &&
        output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"] !== undefined) {
        const wrappedItem = output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"] instanceof Array
            ? output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"]
            : [
                output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"]
            ];
        contents.ReadReplicaDBClusterIdentifiers = deserializeAws_queryReadReplicaDBClusterIdentifierList(wrappedItem, context);
    }
    if (output.ReadReplicaDBInstanceIdentifiers === "") {
        contents.ReadReplicaDBInstanceIdentifiers = [];
    }
    if (output["ReadReplicaDBInstanceIdentifiers"] !== undefined &&
        output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"] !== undefined) {
        const wrappedItem = output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"] instanceof Array
            ? output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"]
            : [
                output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"]
            ];
        contents.ReadReplicaDBInstanceIdentifiers = deserializeAws_queryReadReplicaDBInstanceIdentifierList(wrappedItem, context);
    }
    if (output["ReadReplicaSourceDBInstanceIdentifier"] !== undefined) {
        contents.ReadReplicaSourceDBInstanceIdentifier =
            output["ReadReplicaSourceDBInstanceIdentifier"];
    }
    if (output["SecondaryAvailabilityZone"] !== undefined) {
        contents.SecondaryAvailabilityZone = output["SecondaryAvailabilityZone"];
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
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
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
const deserializeAws_queryDBInstanceAutomatedBackup = (output, context) => {
    let contents = {
        __type: "DBInstanceAutomatedBackup",
        AllocatedStorage: undefined,
        AvailabilityZone: undefined,
        DBInstanceArn: undefined,
        DBInstanceIdentifier: undefined,
        DbiResourceId: undefined,
        Encrypted: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        InstanceCreateTime: undefined,
        Iops: undefined,
        KmsKeyId: undefined,
        LicenseModel: undefined,
        MasterUsername: undefined,
        OptionGroupName: undefined,
        Port: undefined,
        Region: undefined,
        RestoreWindow: undefined,
        Status: undefined,
        StorageType: undefined,
        TdeCredentialArn: undefined,
        Timezone: undefined,
        VpcId: undefined
    };
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["DBInstanceArn"] !== undefined) {
        contents.DBInstanceArn = output["DBInstanceArn"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled =
            output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["RestoreWindow"] !== undefined) {
        contents.RestoreWindow = deserializeAws_queryRestoreWindow(output["RestoreWindow"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBInstanceAutomatedBackup(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupMessage = (output, context) => {
    let contents = {
        __type: "DBInstanceAutomatedBackupMessage",
        DBInstanceAutomatedBackups: undefined,
        Marker: undefined
    };
    if (output.DBInstanceAutomatedBackups === "") {
        contents.DBInstanceAutomatedBackups = [];
    }
    if (output["DBInstanceAutomatedBackups"] !== undefined &&
        output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"] !==
            undefined) {
        const wrappedItem = output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"] instanceof Array
            ? output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"]
            : [output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"]];
        contents.DBInstanceAutomatedBackups = deserializeAws_queryDBInstanceAutomatedBackupList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
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
const deserializeAws_queryDBInstanceRole = (output, context) => {
    let contents = {
        __type: "DBInstanceRole",
        FeatureName: undefined,
        RoleArn: undefined,
        Status: undefined
    };
    if (output["FeatureName"] !== undefined) {
        contents.FeatureName = output["FeatureName"];
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoles = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBInstanceRole(entry, context));
    });
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
const deserializeAws_queryDBParameterGroup = (output, context) => {
    let contents = {
        __type: "DBParameterGroup",
        DBParameterGroupArn: undefined,
        DBParameterGroupFamily: undefined,
        DBParameterGroupName: undefined,
        Description: undefined
    };
    if (output["DBParameterGroupArn"] !== undefined) {
        contents.DBParameterGroupArn = output["DBParameterGroupArn"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupDetails = (output, context) => {
    let contents = {
        __type: "DBParameterGroupDetails",
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
const deserializeAws_queryDBParameterGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBParameterGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBParameterGroupNameMessage = (output, context) => {
    let contents = {
        __type: "DBParameterGroupNameMessage",
        DBParameterGroupName: undefined
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupStatus = (output, context) => {
    let contents = {
        __type: "DBParameterGroupStatus",
        DBParameterGroupName: undefined,
        ParameterApplyStatus: undefined
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBParameterGroupStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBParameterGroupsMessage = (output, context) => {
    let contents = {
        __type: "DBParameterGroupsMessage",
        DBParameterGroups: undefined,
        Marker: undefined
    };
    if (output.DBParameterGroups === "") {
        contents.DBParameterGroups = [];
    }
    if (output["DBParameterGroups"] !== undefined &&
        output["DBParameterGroups"]["DBParameterGroup"] !== undefined) {
        const wrappedItem = output["DBParameterGroups"]["DBParameterGroup"] instanceof Array
            ? output["DBParameterGroups"]["DBParameterGroup"]
            : [output["DBParameterGroups"]["DBParameterGroup"]];
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBProxy = (output, context) => {
    let contents = {
        __type: "DBProxy",
        Auth: undefined,
        CreatedDate: undefined,
        DBProxyArn: undefined,
        DBProxyName: undefined,
        DebugLogging: undefined,
        Endpoint: undefined,
        EngineFamily: undefined,
        IdleClientTimeout: undefined,
        RequireTLS: undefined,
        RoleArn: undefined,
        Status: undefined,
        UpdatedDate: undefined,
        VpcSecurityGroupIds: undefined,
        VpcSubnetIds: undefined
    };
    if (output.Auth === "") {
        contents.Auth = [];
    }
    if (output["Auth"] !== undefined && output["Auth"]["member"] !== undefined) {
        const wrappedItem = output["Auth"]["member"] instanceof Array
            ? output["Auth"]["member"]
            : [output["Auth"]["member"]];
        contents.Auth = deserializeAws_queryUserAuthConfigInfoList(wrappedItem, context);
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["DBProxyArn"] !== undefined) {
        contents.DBProxyArn = output["DBProxyArn"];
    }
    if (output["DBProxyName"] !== undefined) {
        contents.DBProxyName = output["DBProxyName"];
    }
    if (output["DebugLogging"] !== undefined) {
        contents.DebugLogging = output["DebugLogging"] == "true";
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["EngineFamily"] !== undefined) {
        contents.EngineFamily = output["EngineFamily"];
    }
    if (output["IdleClientTimeout"] !== undefined) {
        contents.IdleClientTimeout = parseInt(output["IdleClientTimeout"]);
    }
    if (output["RequireTLS"] !== undefined) {
        contents.RequireTLS = output["RequireTLS"] == "true";
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UpdatedDate"] !== undefined) {
        contents.UpdatedDate = new Date(output["UpdatedDate"]);
    }
    if (output.VpcSecurityGroupIds === "") {
        contents.VpcSecurityGroupIds = [];
    }
    if (output["VpcSecurityGroupIds"] !== undefined &&
        output["VpcSecurityGroupIds"]["member"] !== undefined) {
        const wrappedItem = output["VpcSecurityGroupIds"]["member"] instanceof Array
            ? output["VpcSecurityGroupIds"]["member"]
            : [output["VpcSecurityGroupIds"]["member"]];
        contents.VpcSecurityGroupIds = deserializeAws_queryStringList(wrappedItem, context);
    }
    if (output.VpcSubnetIds === "") {
        contents.VpcSubnetIds = [];
    }
    if (output["VpcSubnetIds"] !== undefined &&
        output["VpcSubnetIds"]["member"] !== undefined) {
        const wrappedItem = output["VpcSubnetIds"]["member"] instanceof Array
            ? output["VpcSubnetIds"]["member"]
            : [output["VpcSubnetIds"]["member"]];
        contents.VpcSubnetIds = deserializeAws_queryStringList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDBProxyList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBProxy(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBProxyTarget = (output, context) => {
    let contents = {
        __type: "DBProxyTarget",
        Endpoint: undefined,
        Port: undefined,
        RdsResourceId: undefined,
        TargetArn: undefined,
        TrackedClusterId: undefined,
        Type: undefined
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["RdsResourceId"] !== undefined) {
        contents.RdsResourceId = output["RdsResourceId"];
    }
    if (output["TargetArn"] !== undefined) {
        contents.TargetArn = output["TargetArn"];
    }
    if (output["TrackedClusterId"] !== undefined) {
        contents.TrackedClusterId = output["TrackedClusterId"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetGroup = (output, context) => {
    let contents = {
        __type: "DBProxyTargetGroup",
        ConnectionPoolConfig: undefined,
        CreatedDate: undefined,
        DBProxyName: undefined,
        IsDefault: undefined,
        Status: undefined,
        TargetGroupArn: undefined,
        TargetGroupName: undefined,
        UpdatedDate: undefined
    };
    if (output["ConnectionPoolConfig"] !== undefined) {
        contents.ConnectionPoolConfig = deserializeAws_queryConnectionPoolConfigurationInfo(output["ConnectionPoolConfig"], context);
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["DBProxyName"] !== undefined) {
        contents.DBProxyName = output["DBProxyName"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["TargetGroupName"] !== undefined) {
        contents.TargetGroupName = output["TargetGroupName"];
    }
    if (output["UpdatedDate"] !== undefined) {
        contents.UpdatedDate = new Date(output["UpdatedDate"]);
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroup = (output, context) => {
    let contents = {
        __type: "DBSecurityGroup",
        DBSecurityGroupArn: undefined,
        DBSecurityGroupDescription: undefined,
        DBSecurityGroupName: undefined,
        EC2SecurityGroups: undefined,
        IPRanges: undefined,
        OwnerId: undefined,
        VpcId: undefined
    };
    if (output["DBSecurityGroupArn"] !== undefined) {
        contents.DBSecurityGroupArn = output["DBSecurityGroupArn"];
    }
    if (output["DBSecurityGroupDescription"] !== undefined) {
        contents.DBSecurityGroupDescription = output["DBSecurityGroupDescription"];
    }
    if (output["DBSecurityGroupName"] !== undefined) {
        contents.DBSecurityGroupName = output["DBSecurityGroupName"];
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
    if (output["OwnerId"] !== undefined) {
        contents.OwnerId = output["OwnerId"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupMembership = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupMembership",
        DBSecurityGroupName: undefined,
        Status: undefined
    };
    if (output["DBSecurityGroupName"] !== undefined) {
        contents.DBSecurityGroupName = output["DBSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBSecurityGroupMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBSecurityGroupMessage = (output, context) => {
    let contents = {
        __type: "DBSecurityGroupMessage",
        DBSecurityGroups: undefined,
        Marker: undefined
    };
    if (output.DBSecurityGroups === "") {
        contents.DBSecurityGroups = [];
    }
    if (output["DBSecurityGroups"] !== undefined &&
        output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
        const wrappedItem = output["DBSecurityGroups"]["DBSecurityGroup"] instanceof Array
            ? output["DBSecurityGroups"]["DBSecurityGroup"]
            : [output["DBSecurityGroups"]["DBSecurityGroup"]];
        contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroups(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBSecurityGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBSnapshot = (output, context) => {
    let contents = {
        __type: "DBSnapshot",
        AllocatedStorage: undefined,
        AvailabilityZone: undefined,
        DBInstanceIdentifier: undefined,
        DBSnapshotArn: undefined,
        DBSnapshotIdentifier: undefined,
        DbiResourceId: undefined,
        Encrypted: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        InstanceCreateTime: undefined,
        Iops: undefined,
        KmsKeyId: undefined,
        LicenseModel: undefined,
        MasterUsername: undefined,
        OptionGroupName: undefined,
        PercentProgress: undefined,
        Port: undefined,
        ProcessorFeatures: undefined,
        SnapshotCreateTime: undefined,
        SnapshotType: undefined,
        SourceDBSnapshotIdentifier: undefined,
        SourceRegion: undefined,
        Status: undefined,
        StorageType: undefined,
        TdeCredentialArn: undefined,
        Timezone: undefined,
        VpcId: undefined
    };
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["DBSnapshotArn"] !== undefined) {
        contents.DBSnapshotArn = output["DBSnapshotArn"];
    }
    if (output["DBSnapshotIdentifier"] !== undefined) {
        contents.DBSnapshotIdentifier = output["DBSnapshotIdentifier"];
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled =
            output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = parseInt(output["PercentProgress"]);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined &&
        output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        const wrappedItem = output["ProcessorFeatures"]["ProcessorFeature"] instanceof Array
            ? output["ProcessorFeatures"]["ProcessorFeature"]
            : [output["ProcessorFeatures"]["ProcessorFeature"]];
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(wrappedItem, context);
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    if (output["SnapshotType"] !== undefined) {
        contents.SnapshotType = output["SnapshotType"];
    }
    if (output["SourceDBSnapshotIdentifier"] !== undefined) {
        contents.SourceDBSnapshotIdentifier = output["SourceDBSnapshotIdentifier"];
    }
    if (output["SourceRegion"] !== undefined) {
        contents.SourceRegion = output["SourceRegion"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotAttribute = (output, context) => {
    let contents = {
        __type: "DBSnapshotAttribute",
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
const deserializeAws_queryDBSnapshotAttributeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBSnapshotAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBSnapshotAttributesResult = (output, context) => {
    let contents = {
        __type: "DBSnapshotAttributesResult",
        DBSnapshotAttributes: undefined,
        DBSnapshotIdentifier: undefined
    };
    if (output.DBSnapshotAttributes === "") {
        contents.DBSnapshotAttributes = [];
    }
    if (output["DBSnapshotAttributes"] !== undefined &&
        output["DBSnapshotAttributes"]["DBSnapshotAttribute"] !== undefined) {
        const wrappedItem = output["DBSnapshotAttributes"]["DBSnapshotAttribute"] instanceof Array
            ? output["DBSnapshotAttributes"]["DBSnapshotAttribute"]
            : [output["DBSnapshotAttributes"]["DBSnapshotAttribute"]];
        contents.DBSnapshotAttributes = deserializeAws_queryDBSnapshotAttributeList(wrappedItem, context);
    }
    if (output["DBSnapshotIdentifier"] !== undefined) {
        contents.DBSnapshotIdentifier = output["DBSnapshotIdentifier"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBSnapshot(entry, context));
    });
    return contents;
};
const deserializeAws_queryDBSnapshotMessage = (output, context) => {
    let contents = {
        __type: "DBSnapshotMessage",
        DBSnapshots: undefined,
        Marker: undefined
    };
    if (output.DBSnapshots === "") {
        contents.DBSnapshots = [];
    }
    if (output["DBSnapshots"] !== undefined &&
        output["DBSnapshots"]["DBSnapshot"] !== undefined) {
        const wrappedItem = output["DBSnapshots"]["DBSnapshot"] instanceof Array
            ? output["DBSnapshots"]["DBSnapshot"]
            : [output["DBSnapshots"]["DBSnapshot"]];
        contents.DBSnapshots = deserializeAws_queryDBSnapshotList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
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
const deserializeAws_queryDeleteCustomAvailabilityZoneResult = (output, context) => {
    let contents = {
        __type: "DeleteCustomAvailabilityZoneResult",
        CustomAvailabilityZone: undefined
    };
    if (output["CustomAvailabilityZone"] !== undefined) {
        contents.CustomAvailabilityZone = deserializeAws_queryCustomAvailabilityZone(output["CustomAvailabilityZone"], context);
    }
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
const deserializeAws_queryDeleteDBInstanceAutomatedBackupResult = (output, context) => {
    let contents = {
        __type: "DeleteDBInstanceAutomatedBackupResult",
        DBInstanceAutomatedBackup: undefined
    };
    if (output["DBInstanceAutomatedBackup"] !== undefined) {
        contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
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
const deserializeAws_queryDeleteDBProxyResponse = (output, context) => {
    let contents = {
        __type: "DeleteDBProxyResponse",
        DBProxy: undefined
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteDBSnapshotResult",
        DBSnapshot: undefined
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteEventSubscriptionResult = (output, context) => {
    let contents = {
        __type: "DeleteEventSubscriptionResult",
        EventSubscription: undefined
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteGlobalClusterResult = (output, context) => {
    let contents = {
        __type: "DeleteGlobalClusterResult",
        GlobalCluster: undefined
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeregisterDBProxyTargetsResponse = (output, context) => {
    let contents = {
        __type: "DeregisterDBProxyTargetsResponse"
    };
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
const deserializeAws_queryDescribeDBLogFilesDetails = (output, context) => {
    let contents = {
        __type: "DescribeDBLogFilesDetails",
        LastWritten: undefined,
        LogFileName: undefined,
        Size: undefined
    };
    if (output["LastWritten"] !== undefined) {
        contents.LastWritten = parseInt(output["LastWritten"]);
    }
    if (output["LogFileName"] !== undefined) {
        contents.LogFileName = output["LogFileName"];
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
const deserializeAws_queryDescribeDBLogFilesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDescribeDBLogFilesDetails(entry, context));
    });
    return contents;
};
const deserializeAws_queryDescribeDBLogFilesResponse = (output, context) => {
    let contents = {
        __type: "DescribeDBLogFilesResponse",
        DescribeDBLogFiles: undefined,
        Marker: undefined
    };
    if (output.DescribeDBLogFiles === "") {
        contents.DescribeDBLogFiles = [];
    }
    if (output["DescribeDBLogFiles"] !== undefined &&
        output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"] !== undefined) {
        const wrappedItem = output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"] instanceof Array
            ? output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"]
            : [output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"]];
        contents.DescribeDBLogFiles = deserializeAws_queryDescribeDBLogFilesList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxiesResponse = (output, context) => {
    let contents = {
        __type: "DescribeDBProxiesResponse",
        DBProxies: undefined,
        Marker: undefined
    };
    if (output.DBProxies === "") {
        contents.DBProxies = [];
    }
    if (output["DBProxies"] !== undefined &&
        output["DBProxies"]["member"] !== undefined) {
        const wrappedItem = output["DBProxies"]["member"] instanceof Array
            ? output["DBProxies"]["member"]
            : [output["DBProxies"]["member"]];
        contents.DBProxies = deserializeAws_queryDBProxyList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxyTargetGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDBProxyTargetGroupsResponse",
        Marker: undefined,
        TargetGroups: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined &&
        output["TargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroups"]["member"] instanceof Array
            ? output["TargetGroups"]["member"]
            : [output["TargetGroups"]["member"]];
        contents.TargetGroups = deserializeAws_queryTargetGroupList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxyTargetsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDBProxyTargetsResponse",
        Marker: undefined,
        Targets: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Targets === "") {
        contents.Targets = [];
    }
    if (output["Targets"] !== undefined &&
        output["Targets"]["member"] !== undefined) {
        const wrappedItem = output["Targets"]["member"] instanceof Array
            ? output["Targets"]["member"]
            : [output["Targets"]["member"]];
        contents.Targets = deserializeAws_queryTargetList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeDBSnapshotAttributesResult = (output, context) => {
    let contents = {
        __type: "DescribeDBSnapshotAttributesResult",
        DBSnapshotAttributesResult: undefined
    };
    if (output["DBSnapshotAttributesResult"] !== undefined) {
        contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
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
const deserializeAws_queryDescribeValidDBInstanceModificationsResult = (output, context) => {
    let contents = {
        __type: "DescribeValidDBInstanceModificationsResult",
        ValidDBInstanceModificationsMessage: undefined
    };
    if (output["ValidDBInstanceModificationsMessage"] !== undefined) {
        contents.ValidDBInstanceModificationsMessage = deserializeAws_queryValidDBInstanceModificationsMessage(output["ValidDBInstanceModificationsMessage"], context);
    }
    return contents;
};
const deserializeAws_queryDomainMembership = (output, context) => {
    let contents = {
        __type: "DomainMembership",
        Domain: undefined,
        FQDN: undefined,
        IAMRoleName: undefined,
        Status: undefined
    };
    if (output["Domain"] !== undefined) {
        contents.Domain = output["Domain"];
    }
    if (output["FQDN"] !== undefined) {
        contents.FQDN = output["FQDN"];
    }
    if (output["IAMRoleName"] !== undefined) {
        contents.IAMRoleName = output["IAMRoleName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDomainMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDomainMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryDoubleRange = (output, context) => {
    let contents = {
        __type: "DoubleRange",
        From: undefined,
        To: undefined
    };
    if (output["From"] !== undefined) {
        contents.From = parseFloat(output["From"]);
    }
    if (output["To"] !== undefined) {
        contents.To = parseFloat(output["To"]);
    }
    return contents;
};
const deserializeAws_queryDoubleRangeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDoubleRange(entry, context));
    });
    return contents;
};
const deserializeAws_queryDownloadDBLogFilePortionDetails = (output, context) => {
    let contents = {
        __type: "DownloadDBLogFilePortionDetails",
        AdditionalDataPending: undefined,
        LogFileData: undefined,
        Marker: undefined
    };
    if (output["AdditionalDataPending"] !== undefined) {
        contents.AdditionalDataPending = output["AdditionalDataPending"] == "true";
    }
    if (output["LogFileData"] !== undefined) {
        contents.LogFileData = output["LogFileData"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
        __type: "EC2SecurityGroup",
        EC2SecurityGroupId: undefined,
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupOwnerId: undefined,
        Status: undefined
    };
    if (output["EC2SecurityGroupId"] !== undefined) {
        contents.EC2SecurityGroupId = output["EC2SecurityGroupId"];
    }
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
const deserializeAws_queryEngineModeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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
const deserializeAws_queryEventSubscription = (output, context) => {
    let contents = {
        __type: "EventSubscription",
        CustSubscriptionId: undefined,
        CustomerAwsId: undefined,
        Enabled: undefined,
        EventCategoriesList: undefined,
        EventSubscriptionArn: undefined,
        SnsTopicArn: undefined,
        SourceIdsList: undefined,
        SourceType: undefined,
        Status: undefined,
        SubscriptionCreationTime: undefined
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
    if (output["EventSubscriptionArn"] !== undefined) {
        contents.EventSubscriptionArn = output["EventSubscriptionArn"];
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
        contents.SubscriptionCreationTime = output["SubscriptionCreationTime"];
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
const deserializeAws_queryFeatureNameList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryGlobalCluster = (output, context) => {
    let contents = {
        __type: "GlobalCluster",
        DatabaseName: undefined,
        DeletionProtection: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        GlobalClusterArn: undefined,
        GlobalClusterIdentifier: undefined,
        GlobalClusterMembers: undefined,
        GlobalClusterResourceId: undefined,
        Status: undefined,
        StorageEncrypted: undefined
    };
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["GlobalClusterArn"] !== undefined) {
        contents.GlobalClusterArn = output["GlobalClusterArn"];
    }
    if (output["GlobalClusterIdentifier"] !== undefined) {
        contents.GlobalClusterIdentifier = output["GlobalClusterIdentifier"];
    }
    if (output.GlobalClusterMembers === "") {
        contents.GlobalClusterMembers = [];
    }
    if (output["GlobalClusterMembers"] !== undefined &&
        output["GlobalClusterMembers"]["GlobalClusterMember"] !== undefined) {
        const wrappedItem = output["GlobalClusterMembers"]["GlobalClusterMember"] instanceof Array
            ? output["GlobalClusterMembers"]["GlobalClusterMember"]
            : [output["GlobalClusterMembers"]["GlobalClusterMember"]];
        contents.GlobalClusterMembers = deserializeAws_queryGlobalClusterMemberList(wrappedItem, context);
    }
    if (output["GlobalClusterResourceId"] !== undefined) {
        contents.GlobalClusterResourceId = output["GlobalClusterResourceId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    return contents;
};
const deserializeAws_queryGlobalClusterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryGlobalCluster(entry, context));
    });
    return contents;
};
const deserializeAws_queryGlobalClusterMember = (output, context) => {
    let contents = {
        __type: "GlobalClusterMember",
        DBClusterArn: undefined,
        IsWriter: undefined,
        Readers: undefined
    };
    if (output["DBClusterArn"] !== undefined) {
        contents.DBClusterArn = output["DBClusterArn"];
    }
    if (output["IsWriter"] !== undefined) {
        contents.IsWriter = output["IsWriter"] == "true";
    }
    if (output.Readers === "") {
        contents.Readers = [];
    }
    if (output["Readers"] !== undefined &&
        output["Readers"]["member"] !== undefined) {
        const wrappedItem = output["Readers"]["member"] instanceof Array
            ? output["Readers"]["member"]
            : [output["Readers"]["member"]];
        contents.Readers = deserializeAws_queryReadersArnList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGlobalClusterMemberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryGlobalClusterMember(entry, context));
    });
    return contents;
};
const deserializeAws_queryGlobalClustersMessage = (output, context) => {
    let contents = {
        __type: "GlobalClustersMessage",
        GlobalClusters: undefined,
        Marker: undefined
    };
    if (output.GlobalClusters === "") {
        contents.GlobalClusters = [];
    }
    if (output["GlobalClusters"] !== undefined &&
        output["GlobalClusters"]["GlobalClusterMember"] !== undefined) {
        const wrappedItem = output["GlobalClusters"]["GlobalClusterMember"] instanceof Array
            ? output["GlobalClusters"]["GlobalClusterMember"]
            : [output["GlobalClusters"]["GlobalClusterMember"]];
        contents.GlobalClusters = deserializeAws_queryGlobalClusterList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryIPRange = (output, context) => {
    let contents = {
        __type: "IPRange",
        CIDRIP: undefined,
        Status: undefined
    };
    if (output["CIDRIP"] !== undefined) {
        contents.CIDRIP = output["CIDRIP"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
const deserializeAws_queryInstallationMedia = (output, context) => {
    let contents = {
        __type: "InstallationMedia",
        CustomAvailabilityZoneId: undefined,
        Engine: undefined,
        EngineInstallationMediaPath: undefined,
        EngineVersion: undefined,
        FailureCause: undefined,
        InstallationMediaId: undefined,
        OSInstallationMediaPath: undefined,
        Status: undefined
    };
    if (output["CustomAvailabilityZoneId"] !== undefined) {
        contents.CustomAvailabilityZoneId = output["CustomAvailabilityZoneId"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineInstallationMediaPath"] !== undefined) {
        contents.EngineInstallationMediaPath =
            output["EngineInstallationMediaPath"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["FailureCause"] !== undefined) {
        contents.FailureCause = deserializeAws_queryInstallationMediaFailureCause(output["FailureCause"], context);
    }
    if (output["InstallationMediaId"] !== undefined) {
        contents.InstallationMediaId = output["InstallationMediaId"];
    }
    if (output["OSInstallationMediaPath"] !== undefined) {
        contents.OSInstallationMediaPath = output["OSInstallationMediaPath"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaFailureCause = (output, context) => {
    let contents = {
        __type: "InstallationMediaFailureCause",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstallationMedia(entry, context));
    });
    return contents;
};
const deserializeAws_queryInstallationMediaMessage = (output, context) => {
    let contents = {
        __type: "InstallationMediaMessage",
        InstallationMedia: undefined,
        Marker: undefined
    };
    if (output.InstallationMedia === "") {
        contents.InstallationMedia = [];
    }
    if (output["InstallationMedia"] !== undefined &&
        output["InstallationMedia"]["InstallationMedia"] !== undefined) {
        const wrappedItem = output["InstallationMedia"]["InstallationMedia"] instanceof Array
            ? output["InstallationMedia"]["InstallationMedia"]
            : [output["InstallationMedia"]["InstallationMedia"]];
        contents.InstallationMedia = deserializeAws_queryInstallationMediaList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
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
const deserializeAws_queryMinimumEngineVersionPerAllowedValue = (output, context) => {
    let contents = {
        __type: "MinimumEngineVersionPerAllowedValue",
        AllowedValue: undefined,
        MinimumEngineVersion: undefined
    };
    if (output["AllowedValue"] !== undefined) {
        contents.AllowedValue = output["AllowedValue"];
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    return contents;
};
const deserializeAws_queryMinimumEngineVersionPerAllowedValueList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMinimumEngineVersionPerAllowedValue(entry, context));
    });
    return contents;
};
const deserializeAws_queryModifyCertificatesResult = (output, context) => {
    let contents = {
        __type: "ModifyCertificatesResult",
        Certificate: undefined
    };
    if (output["Certificate"] !== undefined) {
        contents.Certificate = deserializeAws_queryCertificate(output["Certificate"], context);
    }
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
const deserializeAws_queryModifyDBProxyResponse = (output, context) => {
    let contents = {
        __type: "ModifyDBProxyResponse",
        DBProxy: undefined
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBProxyTargetGroupResponse = (output, context) => {
    let contents = {
        __type: "ModifyDBProxyTargetGroupResponse",
        DBProxyTargetGroup: undefined
    };
    if (output["DBProxyTargetGroup"] !== undefined) {
        contents.DBProxyTargetGroup = deserializeAws_queryDBProxyTargetGroup(output["DBProxyTargetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSnapshotAttributeResult = (output, context) => {
    let contents = {
        __type: "ModifyDBSnapshotAttributeResult",
        DBSnapshotAttributesResult: undefined
    };
    if (output["DBSnapshotAttributesResult"] !== undefined) {
        contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSnapshotResult = (output, context) => {
    let contents = {
        __type: "ModifyDBSnapshotResult",
        DBSnapshot: undefined
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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
const deserializeAws_queryModifyGlobalClusterResult = (output, context) => {
    let contents = {
        __type: "ModifyGlobalClusterResult",
        GlobalCluster: undefined
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyOptionGroupResult = (output, context) => {
    let contents = {
        __type: "ModifyOptionGroupResult",
        OptionGroup: undefined
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryOption = (output, context) => {
    let contents = {
        __type: "Option",
        DBSecurityGroupMemberships: undefined,
        OptionDescription: undefined,
        OptionName: undefined,
        OptionSettings: undefined,
        OptionVersion: undefined,
        Permanent: undefined,
        Persistent: undefined,
        Port: undefined,
        VpcSecurityGroupMemberships: undefined
    };
    if (output.DBSecurityGroupMemberships === "") {
        contents.DBSecurityGroupMemberships = [];
    }
    if (output["DBSecurityGroupMemberships"] !== undefined &&
        output["DBSecurityGroupMemberships"]["DBSecurityGroup"] !== undefined) {
        const wrappedItem = output["DBSecurityGroupMemberships"]["DBSecurityGroup"] instanceof Array
            ? output["DBSecurityGroupMemberships"]["DBSecurityGroup"]
            : [output["DBSecurityGroupMemberships"]["DBSecurityGroup"]];
        contents.DBSecurityGroupMemberships = deserializeAws_queryDBSecurityGroupMembershipList(wrappedItem, context);
    }
    if (output["OptionDescription"] !== undefined) {
        contents.OptionDescription = output["OptionDescription"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output.OptionSettings === "") {
        contents.OptionSettings = [];
    }
    if (output["OptionSettings"] !== undefined &&
        output["OptionSettings"]["OptionSetting"] !== undefined) {
        const wrappedItem = output["OptionSettings"]["OptionSetting"] instanceof Array
            ? output["OptionSettings"]["OptionSetting"]
            : [output["OptionSettings"]["OptionSetting"]];
        contents.OptionSettings = deserializeAws_queryOptionSettingConfigurationList(wrappedItem, context);
    }
    if (output["OptionVersion"] !== undefined) {
        contents.OptionVersion = output["OptionVersion"];
    }
    if (output["Permanent"] !== undefined) {
        contents.Permanent = output["Permanent"] == "true";
    }
    if (output["Persistent"] !== undefined) {
        contents.Persistent = output["Persistent"] == "true";
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output.VpcSecurityGroupMemberships === "") {
        contents.VpcSecurityGroupMemberships = [];
    }
    if (output["VpcSecurityGroupMemberships"] !== undefined &&
        output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"] !==
            undefined) {
        const wrappedItem = output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"] instanceof Array
            ? output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"]
            : [output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"]];
        contents.VpcSecurityGroupMemberships = deserializeAws_queryVpcSecurityGroupMembershipList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryOptionGroup = (output, context) => {
    let contents = {
        __type: "OptionGroup",
        AllowsVpcAndNonVpcInstanceMemberships: undefined,
        EngineName: undefined,
        MajorEngineVersion: undefined,
        OptionGroupArn: undefined,
        OptionGroupDescription: undefined,
        OptionGroupName: undefined,
        Options: undefined,
        VpcId: undefined
    };
    if (output["AllowsVpcAndNonVpcInstanceMemberships"] !== undefined) {
        contents.AllowsVpcAndNonVpcInstanceMemberships =
            output["AllowsVpcAndNonVpcInstanceMemberships"] == "true";
    }
    if (output["EngineName"] !== undefined) {
        contents.EngineName = output["EngineName"];
    }
    if (output["MajorEngineVersion"] !== undefined) {
        contents.MajorEngineVersion = output["MajorEngineVersion"];
    }
    if (output["OptionGroupArn"] !== undefined) {
        contents.OptionGroupArn = output["OptionGroupArn"];
    }
    if (output["OptionGroupDescription"] !== undefined) {
        contents.OptionGroupDescription = output["OptionGroupDescription"];
    }
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output.Options === "") {
        contents.Options = [];
    }
    if (output["Options"] !== undefined &&
        output["Options"]["Option"] !== undefined) {
        const wrappedItem = output["Options"]["Option"] instanceof Array
            ? output["Options"]["Option"]
            : [output["Options"]["Option"]];
        contents.Options = deserializeAws_queryOptionsList(wrappedItem, context);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupMembership = (output, context) => {
    let contents = {
        __type: "OptionGroupMembership",
        OptionGroupName: undefined,
        Status: undefined
    };
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupMembershipList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionGroupMembership(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionGroupOption = (output, context) => {
    let contents = {
        __type: "OptionGroupOption",
        DefaultPort: undefined,
        Description: undefined,
        EngineName: undefined,
        MajorEngineVersion: undefined,
        MinimumRequiredMinorEngineVersion: undefined,
        Name: undefined,
        OptionGroupOptionSettings: undefined,
        OptionGroupOptionVersions: undefined,
        OptionsConflictsWith: undefined,
        OptionsDependedOn: undefined,
        Permanent: undefined,
        Persistent: undefined,
        PortRequired: undefined,
        RequiresAutoMinorEngineVersionUpgrade: undefined,
        SupportsOptionVersionDowngrade: undefined,
        VpcOnly: undefined
    };
    if (output["DefaultPort"] !== undefined) {
        contents.DefaultPort = parseInt(output["DefaultPort"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EngineName"] !== undefined) {
        contents.EngineName = output["EngineName"];
    }
    if (output["MajorEngineVersion"] !== undefined) {
        contents.MajorEngineVersion = output["MajorEngineVersion"];
    }
    if (output["MinimumRequiredMinorEngineVersion"] !== undefined) {
        contents.MinimumRequiredMinorEngineVersion =
            output["MinimumRequiredMinorEngineVersion"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.OptionGroupOptionSettings === "") {
        contents.OptionGroupOptionSettings = [];
    }
    if (output["OptionGroupOptionSettings"] !== undefined &&
        output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"] !==
            undefined) {
        const wrappedItem = output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"] instanceof
            Array
            ? output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"]
            : [output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"]];
        contents.OptionGroupOptionSettings = deserializeAws_queryOptionGroupOptionSettingsList(wrappedItem, context);
    }
    if (output.OptionGroupOptionVersions === "") {
        contents.OptionGroupOptionVersions = [];
    }
    if (output["OptionGroupOptionVersions"] !== undefined &&
        output["OptionGroupOptionVersions"]["OptionVersion"] !== undefined) {
        const wrappedItem = output["OptionGroupOptionVersions"]["OptionVersion"] instanceof Array
            ? output["OptionGroupOptionVersions"]["OptionVersion"]
            : [output["OptionGroupOptionVersions"]["OptionVersion"]];
        contents.OptionGroupOptionVersions = deserializeAws_queryOptionGroupOptionVersionsList(wrappedItem, context);
    }
    if (output.OptionsConflictsWith === "") {
        contents.OptionsConflictsWith = [];
    }
    if (output["OptionsConflictsWith"] !== undefined &&
        output["OptionsConflictsWith"]["OptionConflictName"] !== undefined) {
        const wrappedItem = output["OptionsConflictsWith"]["OptionConflictName"] instanceof Array
            ? output["OptionsConflictsWith"]["OptionConflictName"]
            : [output["OptionsConflictsWith"]["OptionConflictName"]];
        contents.OptionsConflictsWith = deserializeAws_queryOptionsConflictsWith(wrappedItem, context);
    }
    if (output.OptionsDependedOn === "") {
        contents.OptionsDependedOn = [];
    }
    if (output["OptionsDependedOn"] !== undefined &&
        output["OptionsDependedOn"]["OptionName"] !== undefined) {
        const wrappedItem = output["OptionsDependedOn"]["OptionName"] instanceof Array
            ? output["OptionsDependedOn"]["OptionName"]
            : [output["OptionsDependedOn"]["OptionName"]];
        contents.OptionsDependedOn = deserializeAws_queryOptionsDependedOn(wrappedItem, context);
    }
    if (output["Permanent"] !== undefined) {
        contents.Permanent = output["Permanent"] == "true";
    }
    if (output["Persistent"] !== undefined) {
        contents.Persistent = output["Persistent"] == "true";
    }
    if (output["PortRequired"] !== undefined) {
        contents.PortRequired = output["PortRequired"] == "true";
    }
    if (output["RequiresAutoMinorEngineVersionUpgrade"] !== undefined) {
        contents.RequiresAutoMinorEngineVersionUpgrade =
            output["RequiresAutoMinorEngineVersionUpgrade"] == "true";
    }
    if (output["SupportsOptionVersionDowngrade"] !== undefined) {
        contents.SupportsOptionVersionDowngrade =
            output["SupportsOptionVersionDowngrade"] == "true";
    }
    if (output["VpcOnly"] !== undefined) {
        contents.VpcOnly = output["VpcOnly"] == "true";
    }
    return contents;
};
const deserializeAws_queryOptionGroupOptionSetting = (output, context) => {
    let contents = {
        __type: "OptionGroupOptionSetting",
        AllowedValues: undefined,
        ApplyType: undefined,
        DefaultValue: undefined,
        IsModifiable: undefined,
        IsRequired: undefined,
        MinimumEngineVersionPerAllowedValue: undefined,
        SettingDescription: undefined,
        SettingName: undefined
    };
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["ApplyType"] !== undefined) {
        contents.ApplyType = output["ApplyType"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["IsRequired"] !== undefined) {
        contents.IsRequired = output["IsRequired"] == "true";
    }
    if (output.MinimumEngineVersionPerAllowedValue === "") {
        contents.MinimumEngineVersionPerAllowedValue = [];
    }
    if (output["MinimumEngineVersionPerAllowedValue"] !== undefined &&
        output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"] !== undefined) {
        const wrappedItem = output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"] instanceof Array
            ? output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"]
            : [
                output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"]
            ];
        contents.MinimumEngineVersionPerAllowedValue = deserializeAws_queryMinimumEngineVersionPerAllowedValueList(wrappedItem, context);
    }
    if (output["SettingDescription"] !== undefined) {
        contents.SettingDescription = output["SettingDescription"];
    }
    if (output["SettingName"] !== undefined) {
        contents.SettingName = output["SettingName"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupOptionSettingsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionGroupOptionSetting(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionGroupOptionVersionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionVersion(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionGroupOptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionGroupOption(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionGroupOptionsMessage = (output, context) => {
    let contents = {
        __type: "OptionGroupOptionsMessage",
        Marker: undefined,
        OptionGroupOptions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.OptionGroupOptions === "") {
        contents.OptionGroupOptions = [];
    }
    if (output["OptionGroupOptions"] !== undefined &&
        output["OptionGroupOptions"]["OptionGroupOption"] !== undefined) {
        const wrappedItem = output["OptionGroupOptions"]["OptionGroupOption"] instanceof Array
            ? output["OptionGroupOptions"]["OptionGroupOption"]
            : [output["OptionGroupOptions"]["OptionGroupOption"]];
        contents.OptionGroupOptions = deserializeAws_queryOptionGroupOptionsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryOptionGroups = (output, context) => {
    let contents = {
        __type: "OptionGroups",
        Marker: undefined,
        OptionGroupsList: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.OptionGroupsList === "") {
        contents.OptionGroupsList = [];
    }
    if (output["OptionGroupsList"] !== undefined &&
        output["OptionGroupsList"]["OptionGroup"] !== undefined) {
        const wrappedItem = output["OptionGroupsList"]["OptionGroup"] instanceof Array
            ? output["OptionGroupsList"]["OptionGroup"]
            : [output["OptionGroupsList"]["OptionGroup"]];
        contents.OptionGroupsList = deserializeAws_queryOptionGroupsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryOptionGroupsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionSetting = (output, context) => {
    let contents = {
        __type: "OptionSetting",
        AllowedValues: undefined,
        ApplyType: undefined,
        DataType: undefined,
        DefaultValue: undefined,
        Description: undefined,
        IsCollection: undefined,
        IsModifiable: undefined,
        Name: undefined,
        Value: undefined
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
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IsCollection"] !== undefined) {
        contents.IsCollection = output["IsCollection"] == "true";
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryOptionSettingConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOptionSetting(entry, context));
    });
    return contents;
};
const deserializeAws_queryOptionVersion = (output, context) => {
    let contents = {
        __type: "OptionVersion",
        IsDefault: undefined,
        Version: undefined
    };
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryOptionsConflictsWith = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryOptionsDependedOn = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryOptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOption(entry, context));
    });
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOption = (output, context) => {
    let contents = {
        __type: "OrderableDBInstanceOption",
        AvailabilityZones: undefined,
        AvailableProcessorFeatures: undefined,
        DBInstanceClass: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        MaxIopsPerDbInstance: undefined,
        MaxIopsPerGib: undefined,
        MaxStorageSize: undefined,
        MinIopsPerDbInstance: undefined,
        MinIopsPerGib: undefined,
        MinStorageSize: undefined,
        MultiAZCapable: undefined,
        ReadReplicaCapable: undefined,
        StorageType: undefined,
        SupportedEngineModes: undefined,
        SupportsEnhancedMonitoring: undefined,
        SupportsIAMDatabaseAuthentication: undefined,
        SupportsIops: undefined,
        SupportsKerberosAuthentication: undefined,
        SupportsPerformanceInsights: undefined,
        SupportsStorageAutoscaling: undefined,
        SupportsStorageEncryption: undefined,
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
    if (output.AvailableProcessorFeatures === "") {
        contents.AvailableProcessorFeatures = [];
    }
    if (output["AvailableProcessorFeatures"] !== undefined &&
        output["AvailableProcessorFeatures"]["AvailableProcessorFeature"] !==
            undefined) {
        const wrappedItem = output["AvailableProcessorFeatures"]["AvailableProcessorFeature"] instanceof Array
            ? output["AvailableProcessorFeatures"]["AvailableProcessorFeature"]
            : [output["AvailableProcessorFeatures"]["AvailableProcessorFeature"]];
        contents.AvailableProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(wrappedItem, context);
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
    if (output["MaxIopsPerDbInstance"] !== undefined) {
        contents.MaxIopsPerDbInstance = parseInt(output["MaxIopsPerDbInstance"]);
    }
    if (output["MaxIopsPerGib"] !== undefined) {
        contents.MaxIopsPerGib = parseFloat(output["MaxIopsPerGib"]);
    }
    if (output["MaxStorageSize"] !== undefined) {
        contents.MaxStorageSize = parseInt(output["MaxStorageSize"]);
    }
    if (output["MinIopsPerDbInstance"] !== undefined) {
        contents.MinIopsPerDbInstance = parseInt(output["MinIopsPerDbInstance"]);
    }
    if (output["MinIopsPerGib"] !== undefined) {
        contents.MinIopsPerGib = parseFloat(output["MinIopsPerGib"]);
    }
    if (output["MinStorageSize"] !== undefined) {
        contents.MinStorageSize = parseInt(output["MinStorageSize"]);
    }
    if (output["MultiAZCapable"] !== undefined) {
        contents.MultiAZCapable = output["MultiAZCapable"] == "true";
    }
    if (output["ReadReplicaCapable"] !== undefined) {
        contents.ReadReplicaCapable = output["ReadReplicaCapable"] == "true";
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined &&
        output["SupportedEngineModes"]["member"] !== undefined) {
        const wrappedItem = output["SupportedEngineModes"]["member"] instanceof Array
            ? output["SupportedEngineModes"]["member"]
            : [output["SupportedEngineModes"]["member"]];
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(wrappedItem, context);
    }
    if (output["SupportsEnhancedMonitoring"] !== undefined) {
        contents.SupportsEnhancedMonitoring =
            output["SupportsEnhancedMonitoring"] == "true";
    }
    if (output["SupportsIAMDatabaseAuthentication"] !== undefined) {
        contents.SupportsIAMDatabaseAuthentication =
            output["SupportsIAMDatabaseAuthentication"] == "true";
    }
    if (output["SupportsIops"] !== undefined) {
        contents.SupportsIops = output["SupportsIops"] == "true";
    }
    if (output["SupportsKerberosAuthentication"] !== undefined) {
        contents.SupportsKerberosAuthentication =
            output["SupportsKerberosAuthentication"] == "true";
    }
    if (output["SupportsPerformanceInsights"] !== undefined) {
        contents.SupportsPerformanceInsights =
            output["SupportsPerformanceInsights"] == "true";
    }
    if (output["SupportsStorageAutoscaling"] !== undefined) {
        contents.SupportsStorageAutoscaling =
            output["SupportsStorageAutoscaling"] == "true";
    }
    if (output["SupportsStorageEncryption"] !== undefined) {
        contents.SupportsStorageEncryption =
            output["SupportsStorageEncryption"] == "true";
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
        Source: undefined,
        SupportedEngineModes: undefined
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
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined &&
        output["SupportedEngineModes"]["member"] !== undefined) {
        const wrappedItem = output["SupportedEngineModes"]["member"] instanceof Array
            ? output["SupportedEngineModes"]["member"]
            : [output["SupportedEngineModes"]["member"]];
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(wrappedItem, context);
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
        ProcessorFeatures: undefined,
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
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined &&
        output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        const wrappedItem = output["ProcessorFeatures"]["ProcessorFeature"] instanceof Array
            ? output["ProcessorFeatures"]["ProcessorFeature"]
            : [output["ProcessorFeatures"]["ProcessorFeature"]];
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(wrappedItem, context);
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    return contents;
};
const deserializeAws_queryProcessorFeature = (output, context) => {
    let contents = {
        __type: "ProcessorFeature",
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
const deserializeAws_queryProcessorFeatureList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryProcessorFeature(entry, context));
    });
    return contents;
};
const deserializeAws_queryPromoteReadReplicaDBClusterResult = (output, context) => {
    let contents = {
        __type: "PromoteReadReplicaDBClusterResult",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryPromoteReadReplicaResult = (output, context) => {
    let contents = {
        __type: "PromoteReadReplicaResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryPurchaseReservedDBInstancesOfferingResult = (output, context) => {
    let contents = {
        __type: "PurchaseReservedDBInstancesOfferingResult",
        ReservedDBInstance: undefined
    };
    if (output["ReservedDBInstance"] !== undefined) {
        contents.ReservedDBInstance = deserializeAws_queryReservedDBInstance(output["ReservedDBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRange = (output, context) => {
    let contents = {
        __type: "Range",
        From: undefined,
        Step: undefined,
        To: undefined
    };
    if (output["From"] !== undefined) {
        contents.From = parseInt(output["From"]);
    }
    if (output["Step"] !== undefined) {
        contents.Step = parseInt(output["Step"]);
    }
    if (output["To"] !== undefined) {
        contents.To = parseInt(output["To"]);
    }
    return contents;
};
const deserializeAws_queryRangeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRange(entry, context));
    });
    return contents;
};
const deserializeAws_queryReadReplicaDBClusterIdentifierList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryReadReplicaDBInstanceIdentifierList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryReadReplicaIdentifierList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryReadersArnList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
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
const deserializeAws_queryRegisterDBProxyTargetsResponse = (output, context) => {
    let contents = {
        __type: "RegisterDBProxyTargetsResponse",
        DBProxyTargets: undefined
    };
    if (output.DBProxyTargets === "") {
        contents.DBProxyTargets = [];
    }
    if (output["DBProxyTargets"] !== undefined &&
        output["DBProxyTargets"]["member"] !== undefined) {
        const wrappedItem = output["DBProxyTargets"]["member"] instanceof Array
            ? output["DBProxyTargets"]["member"]
            : [output["DBProxyTargets"]["member"]];
        contents.DBProxyTargets = deserializeAws_queryTargetList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRemoveFromGlobalClusterResult = (output, context) => {
    let contents = {
        __type: "RemoveFromGlobalClusterResult",
        GlobalCluster: undefined
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult = (output, context) => {
    let contents = {
        __type: "RemoveSourceIdentifierFromSubscriptionResult",
        EventSubscription: undefined
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstance = (output, context) => {
    let contents = {
        __type: "ReservedDBInstance",
        CurrencyCode: undefined,
        DBInstanceClass: undefined,
        DBInstanceCount: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        LeaseId: undefined,
        MultiAZ: undefined,
        OfferingType: undefined,
        ProductDescription: undefined,
        RecurringCharges: undefined,
        ReservedDBInstanceArn: undefined,
        ReservedDBInstanceId: undefined,
        ReservedDBInstancesOfferingId: undefined,
        StartTime: undefined,
        State: undefined,
        UsagePrice: undefined
    };
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["DBInstanceCount"] !== undefined) {
        contents.DBInstanceCount = parseInt(output["DBInstanceCount"]);
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["LeaseId"] !== undefined) {
        contents.LeaseId = output["LeaseId"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
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
    if (output["ReservedDBInstanceArn"] !== undefined) {
        contents.ReservedDBInstanceArn = output["ReservedDBInstanceArn"];
    }
    if (output["ReservedDBInstanceId"] !== undefined) {
        contents.ReservedDBInstanceId = output["ReservedDBInstanceId"];
    }
    if (output["ReservedDBInstancesOfferingId"] !== undefined) {
        contents.ReservedDBInstancesOfferingId =
            output["ReservedDBInstancesOfferingId"];
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
const deserializeAws_queryReservedDBInstanceList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedDBInstance(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedDBInstanceMessage = (output, context) => {
    let contents = {
        __type: "ReservedDBInstanceMessage",
        Marker: undefined,
        ReservedDBInstances: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedDBInstances === "") {
        contents.ReservedDBInstances = [];
    }
    if (output["ReservedDBInstances"] !== undefined &&
        output["ReservedDBInstances"]["ReservedDBInstance"] !== undefined) {
        const wrappedItem = output["ReservedDBInstances"]["ReservedDBInstance"] instanceof Array
            ? output["ReservedDBInstances"]["ReservedDBInstance"]
            : [output["ReservedDBInstances"]["ReservedDBInstance"]];
        contents.ReservedDBInstances = deserializeAws_queryReservedDBInstanceList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOffering = (output, context) => {
    let contents = {
        __type: "ReservedDBInstancesOffering",
        CurrencyCode: undefined,
        DBInstanceClass: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        MultiAZ: undefined,
        OfferingType: undefined,
        ProductDescription: undefined,
        RecurringCharges: undefined,
        ReservedDBInstancesOfferingId: undefined,
        UsagePrice: undefined
    };
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
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
    if (output["ReservedDBInstancesOfferingId"] !== undefined) {
        contents.ReservedDBInstancesOfferingId =
            output["ReservedDBInstancesOfferingId"];
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReservedDBInstancesOffering(entry, context));
    });
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingMessage = (output, context) => {
    let contents = {
        __type: "ReservedDBInstancesOfferingMessage",
        Marker: undefined,
        ReservedDBInstancesOfferings: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedDBInstancesOfferings === "") {
        contents.ReservedDBInstancesOfferings = [];
    }
    if (output["ReservedDBInstancesOfferings"] !== undefined &&
        output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"] !==
            undefined) {
        const wrappedItem = output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"] instanceof Array
            ? output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"]
            : [
                output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"]
            ];
        contents.ReservedDBInstancesOfferings = deserializeAws_queryReservedDBInstancesOfferingList(wrappedItem, context);
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
const deserializeAws_queryRestoreDBClusterFromS3Result = (output, context) => {
    let contents = {
        __type: "RestoreDBClusterFromS3Result",
        DBCluster: undefined
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
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
const deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult = (output, context) => {
    let contents = {
        __type: "RestoreDBInstanceFromDBSnapshotResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBInstanceFromS3Result = (output, context) => {
    let contents = {
        __type: "RestoreDBInstanceFromS3Result",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBInstanceToPointInTimeResult = (output, context) => {
    let contents = {
        __type: "RestoreDBInstanceToPointInTimeResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreWindow = (output, context) => {
    let contents = {
        __type: "RestoreWindow",
        EarliestTime: undefined,
        LatestTime: undefined
    };
    if (output["EarliestTime"] !== undefined) {
        contents.EarliestTime = new Date(output["EarliestTime"]);
    }
    if (output["LatestTime"] !== undefined) {
        contents.LatestTime = new Date(output["LatestTime"]);
    }
    return contents;
};
const deserializeAws_queryRevokeDBSecurityGroupIngressResult = (output, context) => {
    let contents = {
        __type: "RevokeDBSecurityGroupIngressResult",
        DBSecurityGroup: undefined
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryScalingConfigurationInfo = (output, context) => {
    let contents = {
        __type: "ScalingConfigurationInfo",
        AutoPause: undefined,
        MaxCapacity: undefined,
        MinCapacity: undefined,
        SecondsUntilAutoPause: undefined,
        TimeoutAction: undefined
    };
    if (output["AutoPause"] !== undefined) {
        contents.AutoPause = output["AutoPause"] == "true";
    }
    if (output["MaxCapacity"] !== undefined) {
        contents.MaxCapacity = parseInt(output["MaxCapacity"]);
    }
    if (output["MinCapacity"] !== undefined) {
        contents.MinCapacity = parseInt(output["MinCapacity"]);
    }
    if (output["SecondsUntilAutoPause"] !== undefined) {
        contents.SecondsUntilAutoPause = parseInt(output["SecondsUntilAutoPause"]);
    }
    if (output["TimeoutAction"] !== undefined) {
        contents.TimeoutAction = output["TimeoutAction"];
    }
    return contents;
};
const deserializeAws_querySourceIdsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySourceRegion = (output, context) => {
    let contents = {
        __type: "SourceRegion",
        Endpoint: undefined,
        RegionName: undefined,
        Status: undefined
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["RegionName"] !== undefined) {
        contents.RegionName = output["RegionName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_querySourceRegionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySourceRegion(entry, context));
    });
    return contents;
};
const deserializeAws_querySourceRegionMessage = (output, context) => {
    let contents = {
        __type: "SourceRegionMessage",
        Marker: undefined,
        SourceRegions: undefined
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SourceRegions === "") {
        contents.SourceRegions = [];
    }
    if (output["SourceRegions"] !== undefined &&
        output["SourceRegions"]["SourceRegion"] !== undefined) {
        const wrappedItem = output["SourceRegions"]["SourceRegion"] instanceof Array
            ? output["SourceRegions"]["SourceRegion"]
            : [output["SourceRegions"]["SourceRegion"]];
        contents.SourceRegions = deserializeAws_querySourceRegionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryStartActivityStreamResponse = (output, context) => {
    let contents = {
        __type: "StartActivityStreamResponse",
        ApplyImmediately: undefined,
        KinesisStreamName: undefined,
        KmsKeyId: undefined,
        Mode: undefined,
        Status: undefined
    };
    if (output["ApplyImmediately"] !== undefined) {
        contents.ApplyImmediately = output["ApplyImmediately"] == "true";
    }
    if (output["KinesisStreamName"] !== undefined) {
        contents.KinesisStreamName = output["KinesisStreamName"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
const deserializeAws_queryStartDBInstanceResult = (output, context) => {
    let contents = {
        __type: "StartDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryStopActivityStreamResponse = (output, context) => {
    let contents = {
        __type: "StopActivityStreamResponse",
        KinesisStreamName: undefined,
        KmsKeyId: undefined,
        Status: undefined
    };
    if (output["KinesisStreamName"] !== undefined) {
        contents.KinesisStreamName = output["KinesisStreamName"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
const deserializeAws_queryStopDBInstanceResult = (output, context) => {
    let contents = {
        __type: "StopDBInstanceResult",
        DBInstance: undefined
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryStringList = (output, context) => {
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
const deserializeAws_querySupportedCharacterSetsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCharacterSet(entry, context));
    });
    return contents;
};
const deserializeAws_querySupportedTimezonesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTimezone(entry, context));
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
const deserializeAws_queryTargetGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBProxyTargetGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryTargetList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDBProxyTarget(entry, context));
    });
    return contents;
};
const deserializeAws_queryTimezone = (output, context) => {
    let contents = {
        __type: "Timezone",
        TimezoneName: undefined
    };
    if (output["TimezoneName"] !== undefined) {
        contents.TimezoneName = output["TimezoneName"];
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
const deserializeAws_queryUserAuthConfigInfo = (output, context) => {
    let contents = {
        __type: "UserAuthConfigInfo",
        AuthScheme: undefined,
        Description: undefined,
        IAMAuth: undefined,
        SecretArn: undefined,
        UserName: undefined
    };
    if (output["AuthScheme"] !== undefined) {
        contents.AuthScheme = output["AuthScheme"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IAMAuth"] !== undefined) {
        contents.IAMAuth = output["IAMAuth"];
    }
    if (output["SecretArn"] !== undefined) {
        contents.SecretArn = output["SecretArn"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryUserAuthConfigInfoList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUserAuthConfigInfo(entry, context));
    });
    return contents;
};
const deserializeAws_queryValidDBInstanceModificationsMessage = (output, context) => {
    let contents = {
        __type: "ValidDBInstanceModificationsMessage",
        Storage: undefined,
        ValidProcessorFeatures: undefined
    };
    if (output.Storage === "") {
        contents.Storage = [];
    }
    if (output["Storage"] !== undefined &&
        output["Storage"]["ValidStorageOptions"] !== undefined) {
        const wrappedItem = output["Storage"]["ValidStorageOptions"] instanceof Array
            ? output["Storage"]["ValidStorageOptions"]
            : [output["Storage"]["ValidStorageOptions"]];
        contents.Storage = deserializeAws_queryValidStorageOptionsList(wrappedItem, context);
    }
    if (output.ValidProcessorFeatures === "") {
        contents.ValidProcessorFeatures = [];
    }
    if (output["ValidProcessorFeatures"] !== undefined &&
        output["ValidProcessorFeatures"]["AvailableProcessorFeature"] !== undefined) {
        const wrappedItem = output["ValidProcessorFeatures"]["AvailableProcessorFeature"] instanceof
            Array
            ? output["ValidProcessorFeatures"]["AvailableProcessorFeature"]
            : [output["ValidProcessorFeatures"]["AvailableProcessorFeature"]];
        contents.ValidProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryValidStorageOptions = (output, context) => {
    let contents = {
        __type: "ValidStorageOptions",
        IopsToStorageRatio: undefined,
        ProvisionedIops: undefined,
        StorageSize: undefined,
        StorageType: undefined,
        SupportsStorageAutoscaling: undefined
    };
    if (output.IopsToStorageRatio === "") {
        contents.IopsToStorageRatio = [];
    }
    if (output["IopsToStorageRatio"] !== undefined &&
        output["IopsToStorageRatio"]["DoubleRange"] !== undefined) {
        const wrappedItem = output["IopsToStorageRatio"]["DoubleRange"] instanceof Array
            ? output["IopsToStorageRatio"]["DoubleRange"]
            : [output["IopsToStorageRatio"]["DoubleRange"]];
        contents.IopsToStorageRatio = deserializeAws_queryDoubleRangeList(wrappedItem, context);
    }
    if (output.ProvisionedIops === "") {
        contents.ProvisionedIops = [];
    }
    if (output["ProvisionedIops"] !== undefined &&
        output["ProvisionedIops"]["Range"] !== undefined) {
        const wrappedItem = output["ProvisionedIops"]["Range"] instanceof Array
            ? output["ProvisionedIops"]["Range"]
            : [output["ProvisionedIops"]["Range"]];
        contents.ProvisionedIops = deserializeAws_queryRangeList(wrappedItem, context);
    }
    if (output.StorageSize === "") {
        contents.StorageSize = [];
    }
    if (output["StorageSize"] !== undefined &&
        output["StorageSize"]["Range"] !== undefined) {
        const wrappedItem = output["StorageSize"]["Range"] instanceof Array
            ? output["StorageSize"]["Range"]
            : [output["StorageSize"]["Range"]];
        contents.StorageSize = deserializeAws_queryRangeList(wrappedItem, context);
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["SupportsStorageAutoscaling"] !== undefined) {
        contents.SupportsStorageAutoscaling =
            output["SupportsStorageAutoscaling"] == "true";
    }
    return contents;
};
const deserializeAws_queryValidStorageOptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryValidStorageOptions(entry, context));
    });
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
const deserializeAws_queryVpnDetails = (output, context) => {
    let contents = {
        __type: "VpnDetails",
        VpnGatewayIp: undefined,
        VpnId: undefined,
        VpnName: undefined,
        VpnPSK: undefined,
        VpnState: undefined,
        VpnTunnelOriginatorIP: undefined
    };
    if (output["VpnGatewayIp"] !== undefined) {
        contents.VpnGatewayIp = output["VpnGatewayIp"];
    }
    if (output["VpnId"] !== undefined) {
        contents.VpnId = output["VpnId"];
    }
    if (output["VpnName"] !== undefined) {
        contents.VpnName = output["VpnName"];
    }
    if (output["VpnPSK"] !== undefined) {
        contents.VpnPSK = output["VpnPSK"];
    }
    if (output["VpnState"] !== undefined) {
        contents.VpnState = output["VpnState"];
    }
    if (output["VpnTunnelOriginatorIP"] !== undefined) {
        contents.VpnTunnelOriginatorIP = output["VpnTunnelOriginatorIP"];
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