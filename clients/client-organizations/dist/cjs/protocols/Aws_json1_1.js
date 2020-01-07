"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AcceptHandshakeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.AcceptHandshake";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptHandshakeCommand = serializeAws_json1_1AcceptHandshakeCommand;
async function serializeAws_json1_1AttachPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.AttachPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachPolicyCommand = serializeAws_json1_1AttachPolicyCommand;
async function serializeAws_json1_1CancelHandshakeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CancelHandshake";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelHandshakeCommand = serializeAws_json1_1CancelHandshakeCommand;
async function serializeAws_json1_1CreateAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAccountCommand = serializeAws_json1_1CreateAccountCommand;
async function serializeAws_json1_1CreateGovCloudAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateGovCloudAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGovCloudAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGovCloudAccountCommand = serializeAws_json1_1CreateGovCloudAccountCommand;
async function serializeAws_json1_1CreateOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateOrganizationCommand = serializeAws_json1_1CreateOrganizationCommand;
async function serializeAws_json1_1CreateOrganizationalUnitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.CreateOrganizationalUnit";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateOrganizationalUnitCommand = serializeAws_json1_1CreateOrganizationalUnitCommand;
async function serializeAws_json1_1CreatePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreatePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePolicyCommand = serializeAws_json1_1CreatePolicyCommand;
async function serializeAws_json1_1DeclineHandshakeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeclineHandshake";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeclineHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeclineHandshakeCommand = serializeAws_json1_1DeclineHandshakeCommand;
async function serializeAws_json1_1DeleteOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeleteOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DeleteOrganizationCommand = serializeAws_json1_1DeleteOrganizationCommand;
async function serializeAws_json1_1DeleteOrganizationalUnitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.DeleteOrganizationalUnit";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteOrganizationalUnitCommand = serializeAws_json1_1DeleteOrganizationalUnitCommand;
async function serializeAws_json1_1DeletePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeletePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePolicyCommand = serializeAws_json1_1DeletePolicyCommand;
async function serializeAws_json1_1DescribeAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAccountCommand = serializeAws_json1_1DescribeAccountCommand;
async function serializeAws_json1_1DescribeCreateAccountStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.DescribeCreateAccountStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCreateAccountStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCreateAccountStatusCommand = serializeAws_json1_1DescribeCreateAccountStatusCommand;
async function serializeAws_json1_1DescribeEffectivePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeEffectivePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectivePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEffectivePolicyCommand = serializeAws_json1_1DescribeEffectivePolicyCommand;
async function serializeAws_json1_1DescribeHandshakeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeHandshake";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHandshakeCommand = serializeAws_json1_1DescribeHandshakeCommand;
async function serializeAws_json1_1DescribeOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeOrganizationCommand = serializeAws_json1_1DescribeOrganizationCommand;
async function serializeAws_json1_1DescribeOrganizationalUnitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.DescribeOrganizationalUnit";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationalUnitCommand = serializeAws_json1_1DescribeOrganizationalUnitCommand;
async function serializeAws_json1_1DescribePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePolicyCommand = serializeAws_json1_1DescribePolicyCommand;
async function serializeAws_json1_1DetachPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DetachPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachPolicyCommand = serializeAws_json1_1DetachPolicyCommand;
async function serializeAws_json1_1DisableAWSServiceAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DisableAWSServiceAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAWSServiceAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableAWSServiceAccessCommand = serializeAws_json1_1DisableAWSServiceAccessCommand;
async function serializeAws_json1_1DisablePolicyTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DisablePolicyType";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisablePolicyTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisablePolicyTypeCommand = serializeAws_json1_1DisablePolicyTypeCommand;
async function serializeAws_json1_1EnableAWSServiceAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnableAWSServiceAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAWSServiceAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableAWSServiceAccessCommand = serializeAws_json1_1EnableAWSServiceAccessCommand;
async function serializeAws_json1_1EnableAllFeaturesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnableAllFeatures";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAllFeaturesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableAllFeaturesCommand = serializeAws_json1_1EnableAllFeaturesCommand;
async function serializeAws_json1_1EnablePolicyTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnablePolicyType";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnablePolicyTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnablePolicyTypeCommand = serializeAws_json1_1EnablePolicyTypeCommand;
async function serializeAws_json1_1InviteAccountToOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.InviteAccountToOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1InviteAccountToOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InviteAccountToOrganizationCommand = serializeAws_json1_1InviteAccountToOrganizationCommand;
async function serializeAws_json1_1LeaveOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.LeaveOrganization";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1LeaveOrganizationCommand = serializeAws_json1_1LeaveOrganizationCommand;
async function serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand;
async function serializeAws_json1_1ListAccountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListAccounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAccountsCommand = serializeAws_json1_1ListAccountsCommand;
async function serializeAws_json1_1ListAccountsForParentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListAccountsForParent";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountsForParentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAccountsForParentCommand = serializeAws_json1_1ListAccountsForParentCommand;
async function serializeAws_json1_1ListChildrenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListChildren";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListChildrenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListChildrenCommand = serializeAws_json1_1ListChildrenCommand;
async function serializeAws_json1_1ListCreateAccountStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListCreateAccountStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCreateAccountStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCreateAccountStatusCommand = serializeAws_json1_1ListCreateAccountStatusCommand;
async function serializeAws_json1_1ListHandshakesForAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.ListHandshakesForAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHandshakesForAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHandshakesForAccountCommand = serializeAws_json1_1ListHandshakesForAccountCommand;
async function serializeAws_json1_1ListHandshakesForOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.ListHandshakesForOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHandshakesForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHandshakesForOrganizationCommand = serializeAws_json1_1ListHandshakesForOrganizationCommand;
async function serializeAws_json1_1ListOrganizationalUnitsForParentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationalUnitsForParentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOrganizationalUnitsForParentCommand = serializeAws_json1_1ListOrganizationalUnitsForParentCommand;
async function serializeAws_json1_1ListParentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListParents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListParentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListParentsCommand = serializeAws_json1_1ListParentsCommand;
async function serializeAws_json1_1ListPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListPolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPoliciesCommand = serializeAws_json1_1ListPoliciesCommand;
async function serializeAws_json1_1ListPoliciesForTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListPoliciesForTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesForTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPoliciesForTargetCommand = serializeAws_json1_1ListPoliciesForTargetCommand;
async function serializeAws_json1_1ListRootsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListRoots";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRootsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRootsCommand = serializeAws_json1_1ListRootsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTargetsForPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListTargetsForPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTargetsForPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTargetsForPolicyCommand = serializeAws_json1_1ListTargetsForPolicyCommand;
async function serializeAws_json1_1MoveAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.MoveAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1MoveAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MoveAccountCommand = serializeAws_json1_1MoveAccountCommand;
async function serializeAws_json1_1RemoveAccountFromOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.RemoveAccountFromOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAccountFromOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveAccountFromOrganizationCommand = serializeAws_json1_1RemoveAccountFromOrganizationCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateOrganizationalUnitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSOrganizationsV20161128.UpdateOrganizationalUnit";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateOrganizationalUnitCommand = serializeAws_json1_1UpdateOrganizationalUnitCommand;
async function serializeAws_json1_1UpdatePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSOrganizationsV20161128.UpdatePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePolicyCommand = serializeAws_json1_1UpdatePolicyCommand;
async function deserializeAws_json1_1AcceptHandshakeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptHandshakeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptHandshakeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptHandshakeCommand = deserializeAws_json1_1AcceptHandshakeCommand;
async function deserializeAws_json1_1AcceptHandshakeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedForDependencyException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedForDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeNotFoundException":
        case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AttachPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachPolicyCommand = deserializeAws_json1_1AttachPolicyCommand;
async function deserializeAws_json1_1AttachPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyAttachmentException":
        case "com.amazon.awsorganizations.v20161128#DuplicatePolicyAttachmentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyChangesInProgressException":
        case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeNotEnabledException":
        case "com.amazon.awsorganizations.v20161128#PolicyTypeNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelHandshakeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelHandshakeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelHandshakeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelHandshakeCommand = deserializeAws_json1_1CancelHandshakeCommand;
async function deserializeAws_json1_1CancelHandshakeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeNotFoundException":
        case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAccountResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAccountResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAccountCommand = deserializeAws_json1_1CreateAccountCommand;
async function deserializeAws_json1_1CreateAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FinalizingOrganizationException":
        case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateGovCloudAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGovCloudAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGovCloudAccountResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGovCloudAccountResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGovCloudAccountCommand = deserializeAws_json1_1CreateGovCloudAccountCommand;
async function deserializeAws_json1_1CreateGovCloudAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FinalizingOrganizationException":
        case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateOrganizationCommand = deserializeAws_json1_1CreateOrganizationCommand;
async function deserializeAws_json1_1CreateOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedForDependencyException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedForDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AlreadyInOrganizationException":
        case "com.amazon.awsorganizations.v20161128#AlreadyInOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyInOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateOrganizationalUnitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOrganizationalUnitResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateOrganizationalUnitResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateOrganizationalUnitCommand = deserializeAws_json1_1CreateOrganizationalUnitCommand;
async function deserializeAws_json1_1CreateOrganizationalUnitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateOrganizationalUnitException":
        case "com.amazon.awsorganizations.v20161128#DuplicateOrganizationalUnitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePolicyCommand = deserializeAws_json1_1CreatePolicyCommand;
async function deserializeAws_json1_1CreatePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyException":
        case "com.amazon.awsorganizations.v20161128#DuplicatePolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.awsorganizations.v20161128#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeNotAvailableForOrganizationException":
        case "com.amazon.awsorganizations.v20161128#PolicyTypeNotAvailableForOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeclineHandshakeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeclineHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeclineHandshakeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeclineHandshakeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeclineHandshakeCommand = deserializeAws_json1_1DeclineHandshakeCommand;
async function deserializeAws_json1_1DeclineHandshakeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeNotFoundException":
        case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteOrganizationCommand = deserializeAws_json1_1DeleteOrganizationCommand;
async function deserializeAws_json1_1DeleteOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotEmptyException":
        case "com.amazon.awsorganizations.v20161128#OrganizationNotEmptyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotEmptyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteOrganizationalUnitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteOrganizationalUnitCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteOrganizationalUnitCommand = deserializeAws_json1_1DeleteOrganizationalUnitCommand;
async function deserializeAws_json1_1DeleteOrganizationalUnitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationalUnitNotEmptyException":
        case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotEmptyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeletePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePolicyCommand = deserializeAws_json1_1DeletePolicyCommand;
async function deserializeAws_json1_1DeletePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyInUseException":
        case "com.amazon.awsorganizations.v20161128#PolicyInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAccountCommand = deserializeAws_json1_1DescribeAccountCommand;
async function deserializeAws_json1_1DescribeAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountNotFoundException":
        case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeCreateAccountStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCreateAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCreateAccountStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCreateAccountStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCreateAccountStatusCommand = deserializeAws_json1_1DescribeCreateAccountStatusCommand;
async function deserializeAws_json1_1DescribeCreateAccountStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreateAccountStatusNotFoundException":
        case "com.amazon.awsorganizations.v20161128#CreateAccountStatusNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEffectivePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEffectivePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectivePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEffectivePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEffectivePolicyCommand = deserializeAws_json1_1DescribeEffectivePolicyCommand;
async function deserializeAws_json1_1DescribeEffectivePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EffectivePolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#EffectivePolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeHandshakeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHandshakeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHandshakeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHandshakeCommand = deserializeAws_json1_1DescribeHandshakeCommand;
async function deserializeAws_json1_1DescribeHandshakeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeNotFoundException":
        case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationCommand = deserializeAws_json1_1DescribeOrganizationCommand;
async function deserializeAws_json1_1DescribeOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOrganizationalUnitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationalUnitResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationalUnitResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationalUnitCommand = deserializeAws_json1_1DescribeOrganizationalUnitCommand;
async function deserializeAws_json1_1DescribeOrganizationalUnitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePolicyCommand = deserializeAws_json1_1DescribePolicyCommand;
async function deserializeAws_json1_1DescribePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetachPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachPolicyCommand = deserializeAws_json1_1DetachPolicyCommand;
async function deserializeAws_json1_1DetachPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyChangesInProgressException":
        case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachedException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotAttachedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotAttachedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableAWSServiceAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableAWSServiceAccessCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableAWSServiceAccessCommand = deserializeAws_json1_1DisableAWSServiceAccessCommand;
async function deserializeAws_json1_1DisableAWSServiceAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisablePolicyTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisablePolicyTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisablePolicyTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisablePolicyTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisablePolicyTypeCommand = deserializeAws_json1_1DisablePolicyTypeCommand;
async function deserializeAws_json1_1DisablePolicyTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyChangesInProgressException":
        case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeNotEnabledException":
        case "com.amazon.awsorganizations.v20161128#PolicyTypeNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RootNotFoundException":
        case "com.amazon.awsorganizations.v20161128#RootNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableAWSServiceAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableAWSServiceAccessCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableAWSServiceAccessCommand = deserializeAws_json1_1EnableAWSServiceAccessCommand;
async function deserializeAws_json1_1EnableAWSServiceAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableAllFeaturesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableAllFeaturesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAllFeaturesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableAllFeaturesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableAllFeaturesCommand = deserializeAws_json1_1EnableAllFeaturesCommand;
async function deserializeAws_json1_1EnableAllFeaturesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnablePolicyTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnablePolicyTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnablePolicyTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnablePolicyTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnablePolicyTypeCommand = deserializeAws_json1_1EnablePolicyTypeCommand;
async function deserializeAws_json1_1EnablePolicyTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyChangesInProgressException":
        case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeAlreadyEnabledException":
        case "com.amazon.awsorganizations.v20161128#PolicyTypeAlreadyEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyTypeNotAvailableForOrganizationException":
        case "com.amazon.awsorganizations.v20161128#PolicyTypeNotAvailableForOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RootNotFoundException":
        case "com.amazon.awsorganizations.v20161128#RootNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InviteAccountToOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InviteAccountToOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InviteAccountToOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InviteAccountToOrganizationCommand = deserializeAws_json1_1InviteAccountToOrganizationCommand;
async function deserializeAws_json1_1InviteAccountToOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountOwnerNotVerifiedException":
        case "com.amazon.awsorganizations.v20161128#AccountOwnerNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateHandshakeException":
        case "com.amazon.awsorganizations.v20161128#DuplicateHandshakeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateHandshakeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FinalizingOrganizationException":
        case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1LeaveOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1LeaveOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1LeaveOrganizationCommand = deserializeAws_json1_1LeaveOrganizationCommand;
async function deserializeAws_json1_1LeaveOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountNotFoundException":
        case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MasterCannotLeaveOrganizationException":
        case "com.amazon.awsorganizations.v20161128#MasterCannotLeaveOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAWSServiceAccessForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand;
async function deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAccountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAccountsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAccountsCommand = deserializeAws_json1_1ListAccountsCommand;
async function deserializeAws_json1_1ListAccountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAccountsForParentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAccountsForParentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountsForParentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAccountsForParentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAccountsForParentCommand = deserializeAws_json1_1ListAccountsForParentCommand;
async function deserializeAws_json1_1ListAccountsForParentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListChildrenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListChildrenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListChildrenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListChildrenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListChildrenCommand = deserializeAws_json1_1ListChildrenCommand;
async function deserializeAws_json1_1ListChildrenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCreateAccountStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCreateAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCreateAccountStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCreateAccountStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCreateAccountStatusCommand = deserializeAws_json1_1ListCreateAccountStatusCommand;
async function deserializeAws_json1_1ListCreateAccountStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListHandshakesForAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHandshakesForAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHandshakesForAccountResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHandshakesForAccountResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHandshakesForAccountCommand = deserializeAws_json1_1ListHandshakesForAccountCommand;
async function deserializeAws_json1_1ListHandshakesForAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListHandshakesForOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHandshakesForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHandshakesForOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHandshakesForOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHandshakesForOrganizationCommand = deserializeAws_json1_1ListHandshakesForOrganizationCommand;
async function deserializeAws_json1_1ListHandshakesForOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListOrganizationalUnitsForParentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationalUnitsForParentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOrganizationalUnitsForParentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOrganizationalUnitsForParentCommand = deserializeAws_json1_1ListOrganizationalUnitsForParentCommand;
async function deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListParentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListParentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListParentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListParentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListParentsCommand = deserializeAws_json1_1ListParentsCommand;
async function deserializeAws_json1_1ListParentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ChildNotFoundException":
        case "com.amazon.awsorganizations.v20161128#ChildNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ChildNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPoliciesCommand = deserializeAws_json1_1ListPoliciesCommand;
async function deserializeAws_json1_1ListPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListPoliciesForTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPoliciesForTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesForTargetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPoliciesForTargetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPoliciesForTargetCommand = deserializeAws_json1_1ListPoliciesForTargetCommand;
async function deserializeAws_json1_1ListPoliciesForTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRootsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRootsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRootsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRootsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRootsCommand = deserializeAws_json1_1ListRootsCommand;
async function deserializeAws_json1_1ListRootsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTargetsForPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTargetsForPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTargetsForPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTargetsForPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTargetsForPolicyCommand = deserializeAws_json1_1ListTargetsForPolicyCommand;
async function deserializeAws_json1_1ListTargetsForPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1MoveAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MoveAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MoveAccountCommand = deserializeAws_json1_1MoveAccountCommand;
async function deserializeAws_json1_1MoveAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountNotFoundException":
        case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DestinationParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#DestinationParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DestinationParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateAccountException":
        case "com.amazon.awsorganizations.v20161128#DuplicateAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceParentNotFoundException":
        case "com.amazon.awsorganizations.v20161128#SourceParentNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SourceParentNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RemoveAccountFromOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveAccountFromOrganizationCommand = deserializeAws_json1_1RemoveAccountFromOrganizationCommand;
async function deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountNotFoundException":
        case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MasterCannotLeaveOrganizationException":
        case "com.amazon.awsorganizations.v20161128#MasterCannotLeaveOrganizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateOrganizationalUnitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateOrganizationalUnitResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateOrganizationalUnitResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateOrganizationalUnitCommand = deserializeAws_json1_1UpdateOrganizationalUnitCommand;
async function deserializeAws_json1_1UpdateOrganizationalUnitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateOrganizationalUnitException":
        case "com.amazon.awsorganizations.v20161128#DuplicateOrganizationalUnitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdatePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePolicyCommand = deserializeAws_json1_1UpdatePolicyCommand;
async function deserializeAws_json1_1UpdatePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AWSOrganizationsNotInUseException":
        case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccessDeniedException":
        case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicatePolicyException":
        case "com.amazon.awsorganizations.v20161128#DuplicatePolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.awsorganizations.v20161128#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.awsorganizations.v20161128#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyChangesInProgressException":
        case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotFoundException":
        case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazon.awsorganizations.v20161128#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AWSOrganizationsNotInUseException(body, context);
    const contents = Object.assign({ name: "AWSOrganizationsNotInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
    const contents = Object.assign({ name: "AccessDeniedForDependencyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccountNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountNotFoundException(body, context);
    const contents = Object.assign({ name: "AccountNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountOwnerNotVerifiedException(body, context);
    const contents = Object.assign({ name: "AccountOwnerNotVerifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AlreadyInOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyInOrganizationException(body, context);
    const contents = Object.assign({ name: "AlreadyInOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ChildNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ChildNotFoundException(body, context);
    const contents = Object.assign({ name: "ChildNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConstraintViolationException(body, context);
    const contents = Object.assign({ name: "ConstraintViolationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CreateAccountStatusNotFoundException(body, context);
    const contents = Object.assign({ name: "CreateAccountStatusNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DestinationParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DestinationParentNotFoundException(body, context);
    const contents = Object.assign({ name: "DestinationParentNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateAccountException(body, context);
    const contents = Object.assign({ name: "DuplicateAccountException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateHandshakeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateHandshakeException(body, context);
    const contents = Object.assign({ name: "DuplicateHandshakeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateOrganizationalUnitException(body, context);
    const contents = Object.assign({ name: "DuplicateOrganizationalUnitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatePolicyAttachmentException(body, context);
    const contents = Object.assign({ name: "DuplicatePolicyAttachmentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatePolicyException(body, context);
    const contents = Object.assign({ name: "DuplicatePolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EffectivePolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "EffectivePolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FinalizingOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FinalizingOrganizationException(body, context);
    const contents = Object.assign({ name: "FinalizingOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeAlreadyInStateException(body, context);
    const contents = Object.assign({ name: "HandshakeAlreadyInStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeConstraintViolationException(body, context);
    const contents = Object.assign({ name: "HandshakeConstraintViolationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HandshakeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeNotFoundException(body, context);
    const contents = Object.assign({ name: "HandshakeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidHandshakeTransitionException(body, context);
    const contents = Object.assign({ name: "InvalidHandshakeTransitionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = Object.assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MasterCannotLeaveOrganizationException(body, context);
    const contents = Object.assign({ name: "MasterCannotLeaveOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotEmptyException(body, context);
    const contents = Object.assign({ name: "OrganizationNotEmptyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationalUnitNotEmptyException(body, context);
    const contents = Object.assign({ name: "OrganizationalUnitNotEmptyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationalUnitNotFoundException(body, context);
    const contents = Object.assign({ name: "OrganizationalUnitNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentNotFoundException(body, context);
    const contents = Object.assign({ name: "ParentNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyChangesInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyChangesInProgressException(body, context);
    const contents = Object.assign({ name: "PolicyChangesInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyInUseException(body, context);
    const contents = Object.assign({ name: "PolicyInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyNotAttachedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotAttachedException(body, context);
    const contents = Object.assign({ name: "PolicyNotAttachedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotFoundException(body, context);
    const contents = Object.assign({ name: "PolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeAlreadyEnabledException(body, context);
    const contents = Object.assign({ name: "PolicyTypeAlreadyEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException(body, context);
    const contents = Object.assign({ name: "PolicyTypeNotAvailableForOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeNotEnabledException(body, context);
    const contents = Object.assign({ name: "PolicyTypeNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RootNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RootNotFoundException(body, context);
    const contents = Object.assign({ name: "RootNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = Object.assign({ name: "ServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SourceParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceParentNotFoundException(body, context);
    const contents = Object.assign({ name: "SourceParentNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotFoundException(body, context);
    const contents = Object.assign({ name: "TargetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedAPIEndpointException(body, context);
    const contents = Object.assign({ name: "UnsupportedAPIEndpointException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcceptHandshakeRequest = (input, context) => {
    const bodyParams = {};
    if (input.HandshakeId !== undefined) {
        bodyParams["HandshakeId"] = input.HandshakeId;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    if (input.TargetId !== undefined) {
        bodyParams["TargetId"] = input.TargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelHandshakeRequest = (input, context) => {
    const bodyParams = {};
    if (input.HandshakeId !== undefined) {
        bodyParams["HandshakeId"] = input.HandshakeId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountName !== undefined) {
        bodyParams["AccountName"] = input.AccountName;
    }
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.IamUserAccessToBilling !== undefined) {
        bodyParams["IamUserAccessToBilling"] = input.IamUserAccessToBilling;
    }
    if (input.RoleName !== undefined) {
        bodyParams["RoleName"] = input.RoleName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAccountStates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateGovCloudAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountName !== undefined) {
        bodyParams["AccountName"] = input.AccountName;
    }
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.IamUserAccessToBilling !== undefined) {
        bodyParams["IamUserAccessToBilling"] = input.IamUserAccessToBilling;
    }
    if (input.RoleName !== undefined) {
        bodyParams["RoleName"] = input.RoleName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.FeatureSet !== undefined) {
        bodyParams["FeatureSet"] = input.FeatureSet;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateOrganizationalUnitRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ParentId !== undefined) {
        bodyParams["ParentId"] = input.ParentId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DeclineHandshakeRequest = (input, context) => {
    const bodyParams = {};
    if (input.HandshakeId !== undefined) {
        bodyParams["HandshakeId"] = input.HandshakeId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteOrganizationalUnitRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationalUnitId !== undefined) {
        bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCreateAccountStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreateAccountRequestId !== undefined) {
        bodyParams["CreateAccountRequestId"] = input.CreateAccountRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEffectivePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyType !== undefined) {
        bodyParams["PolicyType"] = input.PolicyType;
    }
    if (input.TargetId !== undefined) {
        bodyParams["TargetId"] = input.TargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHandshakeRequest = (input, context) => {
    const bodyParams = {};
    if (input.HandshakeId !== undefined) {
        bodyParams["HandshakeId"] = input.HandshakeId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationalUnitRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationalUnitId !== undefined) {
        bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DetachPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    if (input.TargetId !== undefined) {
        bodyParams["TargetId"] = input.TargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableAWSServiceAccessRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServicePrincipal !== undefined) {
        bodyParams["ServicePrincipal"] = input.ServicePrincipal;
    }
    return bodyParams;
};
const serializeAws_json1_1DisablePolicyTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyType !== undefined) {
        bodyParams["PolicyType"] = input.PolicyType;
    }
    if (input.RootId !== undefined) {
        bodyParams["RootId"] = input.RootId;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableAWSServiceAccessRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServicePrincipal !== undefined) {
        bodyParams["ServicePrincipal"] = input.ServicePrincipal;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableAllFeaturesRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1EnablePolicyTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyType !== undefined) {
        bodyParams["PolicyType"] = input.PolicyType;
    }
    if (input.RootId !== undefined) {
        bodyParams["RootId"] = input.RootId;
    }
    return bodyParams;
};
const serializeAws_json1_1HandshakeFilter = (input, context) => {
    const bodyParams = {};
    if (input.ActionType !== undefined) {
        bodyParams["ActionType"] = input.ActionType;
    }
    if (input.ParentHandshakeId !== undefined) {
        bodyParams["ParentHandshakeId"] = input.ParentHandshakeId;
    }
    return bodyParams;
};
const serializeAws_json1_1HandshakeParty = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1InviteAccountToOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Notes !== undefined) {
        bodyParams["Notes"] = input.Notes;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = serializeAws_json1_1HandshakeParty(input.Target, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAccountsForParentRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParentId !== undefined) {
        bodyParams["ParentId"] = input.ParentId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAccountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListChildrenRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChildType !== undefined) {
        bodyParams["ChildType"] = input.ChildType;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParentId !== undefined) {
        bodyParams["ParentId"] = input.ParentId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCreateAccountStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.States !== undefined) {
        bodyParams["States"] = serializeAws_json1_1CreateAccountStates(input.States, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListHandshakesForAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1HandshakeFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHandshakesForOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1HandshakeFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOrganizationalUnitsForParentRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParentId !== undefined) {
        bodyParams["ParentId"] = input.ParentId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListParentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChildId !== undefined) {
        bodyParams["ChildId"] = input.ChildId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPoliciesForTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = input.Filter;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TargetId !== undefined) {
        bodyParams["TargetId"] = input.TargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPoliciesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = input.Filter;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRootsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTargetsForPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1MoveAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.DestinationParentId !== undefined) {
        bodyParams["DestinationParentId"] = input.DestinationParentId;
    }
    if (input.SourceParentId !== undefined) {
        bodyParams["SourceParentId"] = input.SourceParentId;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveAccountFromOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
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
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateOrganizationalUnitRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OrganizationalUnitId !== undefined) {
        bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const deserializeAws_json1_1AWSOrganizationsNotInUseException = (output, context) => {
    let contents = {
        __type: "AWSOrganizationsNotInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AcceptHandshakeResponse = (output, context) => {
    let contents = {
        __type: "AcceptHandshakeResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedForDependencyException = (output, context) => {
    let contents = {
        __type: "AccessDeniedForDependencyException",
        Message: undefined,
        Reason: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1Account = (output, context) => {
    let contents = {
        __type: "Account",
        Arn: undefined,
        Email: undefined,
        Id: undefined,
        JoinedMethod: undefined,
        JoinedTimestamp: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.JoinedMethod !== undefined && output.JoinedMethod !== null) {
        contents.JoinedMethod = output.JoinedMethod;
    }
    if (output.JoinedTimestamp !== undefined && output.JoinedTimestamp !== null) {
        contents.JoinedTimestamp = new Date(Math.round(output.JoinedTimestamp * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AccountNotFoundException = (output, context) => {
    let contents = {
        __type: "AccountNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AccountOwnerNotVerifiedException = (output, context) => {
    let contents = {
        __type: "AccountOwnerNotVerifiedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Accounts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Account(entry, context));
};
const deserializeAws_json1_1AlreadyInOrganizationException = (output, context) => {
    let contents = {
        __type: "AlreadyInOrganizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CancelHandshakeResponse = (output, context) => {
    let contents = {
        __type: "CancelHandshakeResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1Child = (output, context) => {
    let contents = {
        __type: "Child",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ChildNotFoundException = (output, context) => {
    let contents = {
        __type: "ChildNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Children = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Child(entry, context));
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConstraintViolationException = (output, context) => {
    let contents = {
        __type: "ConstraintViolationException",
        Message: undefined,
        Reason: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1CreateAccountResponse = (output, context) => {
    let contents = {
        __type: "CreateAccountResponse",
        CreateAccountStatus: undefined
    };
    if (output.CreateAccountStatus !== undefined &&
        output.CreateAccountStatus !== null) {
        contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateAccountStatus = (output, context) => {
    let contents = {
        __type: "CreateAccountStatus",
        AccountId: undefined,
        AccountName: undefined,
        CompletedTimestamp: undefined,
        FailureReason: undefined,
        GovCloudAccountId: undefined,
        Id: undefined,
        RequestedTimestamp: undefined,
        State: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.AccountName !== undefined && output.AccountName !== null) {
        contents.AccountName = output.AccountName;
    }
    if (output.CompletedTimestamp !== undefined &&
        output.CompletedTimestamp !== null) {
        contents.CompletedTimestamp = new Date(Math.round(output.CompletedTimestamp * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.GovCloudAccountId !== undefined &&
        output.GovCloudAccountId !== null) {
        contents.GovCloudAccountId = output.GovCloudAccountId;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.RequestedTimestamp !== undefined &&
        output.RequestedTimestamp !== null) {
        contents.RequestedTimestamp = new Date(Math.round(output.RequestedTimestamp * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1CreateAccountStatusNotFoundException = (output, context) => {
    let contents = {
        __type: "CreateAccountStatusNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateAccountStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CreateAccountStatus(entry, context));
};
const deserializeAws_json1_1CreateGovCloudAccountResponse = (output, context) => {
    let contents = {
        __type: "CreateGovCloudAccountResponse",
        CreateAccountStatus: undefined
    };
    if (output.CreateAccountStatus !== undefined &&
        output.CreateAccountStatus !== null) {
        contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateOrganizationResponse = (output, context) => {
    let contents = {
        __type: "CreateOrganizationResponse",
        Organization: undefined
    };
    if (output.Organization !== undefined && output.Organization !== null) {
        contents.Organization = deserializeAws_json1_1Organization(output.Organization, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateOrganizationalUnitResponse = (output, context) => {
    let contents = {
        __type: "CreateOrganizationalUnitResponse",
        OrganizationalUnit: undefined
    };
    if (output.OrganizationalUnit !== undefined &&
        output.OrganizationalUnit !== null) {
        contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePolicyResponse = (output, context) => {
    let contents = {
        __type: "CreatePolicyResponse",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
    }
    return contents;
};
const deserializeAws_json1_1DeclineHandshakeResponse = (output, context) => {
    let contents = {
        __type: "DeclineHandshakeResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAccountResponse = (output, context) => {
    let contents = {
        __type: "DescribeAccountResponse",
        Account: undefined
    };
    if (output.Account !== undefined && output.Account !== null) {
        contents.Account = deserializeAws_json1_1Account(output.Account, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCreateAccountStatusResponse = (output, context) => {
    let contents = {
        __type: "DescribeCreateAccountStatusResponse",
        CreateAccountStatus: undefined
    };
    if (output.CreateAccountStatus !== undefined &&
        output.CreateAccountStatus !== null) {
        contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEffectivePolicyResponse = (output, context) => {
    let contents = {
        __type: "DescribeEffectivePolicyResponse",
        EffectivePolicy: undefined
    };
    if (output.EffectivePolicy !== undefined && output.EffectivePolicy !== null) {
        contents.EffectivePolicy = deserializeAws_json1_1EffectivePolicy(output.EffectivePolicy, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeHandshakeResponse = (output, context) => {
    let contents = {
        __type: "DescribeHandshakeResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationResponse",
        Organization: undefined
    };
    if (output.Organization !== undefined && output.Organization !== null) {
        contents.Organization = deserializeAws_json1_1Organization(output.Organization, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationalUnitResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationalUnitResponse",
        OrganizationalUnit: undefined
    };
    if (output.OrganizationalUnit !== undefined &&
        output.OrganizationalUnit !== null) {
        contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePolicyResponse = (output, context) => {
    let contents = {
        __type: "DescribePolicyResponse",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationParentNotFoundException = (output, context) => {
    let contents = {
        __type: "DestinationParentNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DisablePolicyTypeResponse = (output, context) => {
    let contents = {
        __type: "DisablePolicyTypeResponse",
        Root: undefined
    };
    if (output.Root !== undefined && output.Root !== null) {
        contents.Root = deserializeAws_json1_1Root(output.Root, context);
    }
    return contents;
};
const deserializeAws_json1_1DuplicateAccountException = (output, context) => {
    let contents = {
        __type: "DuplicateAccountException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateHandshakeException = (output, context) => {
    let contents = {
        __type: "DuplicateHandshakeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateOrganizationalUnitException = (output, context) => {
    let contents = {
        __type: "DuplicateOrganizationalUnitException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyAttachmentException = (output, context) => {
    let contents = {
        __type: "DuplicatePolicyAttachmentException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyException = (output, context) => {
    let contents = {
        __type: "DuplicatePolicyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EffectivePolicy = (output, context) => {
    let contents = {
        __type: "EffectivePolicy",
        LastUpdatedTimestamp: undefined,
        PolicyContent: undefined,
        PolicyType: undefined,
        TargetId: undefined
    };
    if (output.LastUpdatedTimestamp !== undefined &&
        output.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = new Date(Math.round(output.LastUpdatedTimestamp * 1000));
    }
    if (output.PolicyContent !== undefined && output.PolicyContent !== null) {
        contents.PolicyContent = output.PolicyContent;
    }
    if (output.PolicyType !== undefined && output.PolicyType !== null) {
        contents.PolicyType = output.PolicyType;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    return contents;
};
const deserializeAws_json1_1EffectivePolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "EffectivePolicyNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EnableAllFeaturesResponse = (output, context) => {
    let contents = {
        __type: "EnableAllFeaturesResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1EnablePolicyTypeResponse = (output, context) => {
    let contents = {
        __type: "EnablePolicyTypeResponse",
        Root: undefined
    };
    if (output.Root !== undefined && output.Root !== null) {
        contents.Root = deserializeAws_json1_1Root(output.Root, context);
    }
    return contents;
};
const deserializeAws_json1_1EnabledServicePrincipal = (output, context) => {
    let contents = {
        __type: "EnabledServicePrincipal",
        DateEnabled: undefined,
        ServicePrincipal: undefined
    };
    if (output.DateEnabled !== undefined && output.DateEnabled !== null) {
        contents.DateEnabled = new Date(Math.round(output.DateEnabled * 1000));
    }
    if (output.ServicePrincipal !== undefined &&
        output.ServicePrincipal !== null) {
        contents.ServicePrincipal = output.ServicePrincipal;
    }
    return contents;
};
const deserializeAws_json1_1EnabledServicePrincipals = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnabledServicePrincipal(entry, context));
};
const deserializeAws_json1_1FinalizingOrganizationException = (output, context) => {
    let contents = {
        __type: "FinalizingOrganizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Handshake = (output, context) => {
    let contents = {
        __type: "Handshake",
        Action: undefined,
        Arn: undefined,
        ExpirationTimestamp: undefined,
        Id: undefined,
        Parties: undefined,
        RequestedTimestamp: undefined,
        Resources: undefined,
        State: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.ExpirationTimestamp !== undefined &&
        output.ExpirationTimestamp !== null) {
        contents.ExpirationTimestamp = new Date(Math.round(output.ExpirationTimestamp * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Parties !== undefined && output.Parties !== null) {
        contents.Parties = deserializeAws_json1_1HandshakeParties(output.Parties, context);
    }
    if (output.RequestedTimestamp !== undefined &&
        output.RequestedTimestamp !== null) {
        contents.RequestedTimestamp = new Date(Math.round(output.RequestedTimestamp * 1000));
    }
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1HandshakeResources(output.Resources, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeAlreadyInStateException = (output, context) => {
    let contents = {
        __type: "HandshakeAlreadyInStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeConstraintViolationException = (output, context) => {
    let contents = {
        __type: "HandshakeConstraintViolationException",
        Message: undefined,
        Reason: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeNotFoundException = (output, context) => {
    let contents = {
        __type: "HandshakeNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeParties = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HandshakeParty(entry, context));
};
const deserializeAws_json1_1HandshakeParty = (output, context) => {
    let contents = {
        __type: "HandshakeParty",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeResource = (output, context) => {
    let contents = {
        __type: "HandshakeResource",
        Resources: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1HandshakeResources(output.Resources, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1HandshakeResources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HandshakeResource(entry, context));
};
const deserializeAws_json1_1Handshakes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Handshake(entry, context));
};
const deserializeAws_json1_1InvalidHandshakeTransitionException = (output, context) => {
    let contents = {
        __type: "InvalidHandshakeTransitionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        Message: undefined,
        Reason: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1InviteAccountToOrganizationResponse = (output, context) => {
    let contents = {
        __type: "InviteAccountToOrganizationResponse",
        Handshake: undefined
    };
    if (output.Handshake !== undefined && output.Handshake !== null) {
        contents.Handshake = deserializeAws_json1_1Handshake(output.Handshake, context);
    }
    return contents;
};
const deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "ListAWSServiceAccessForOrganizationResponse",
        EnabledServicePrincipals: undefined,
        NextToken: undefined
    };
    if (output.EnabledServicePrincipals !== undefined &&
        output.EnabledServicePrincipals !== null) {
        contents.EnabledServicePrincipals = deserializeAws_json1_1EnabledServicePrincipals(output.EnabledServicePrincipals, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAccountsForParentResponse = (output, context) => {
    let contents = {
        __type: "ListAccountsForParentResponse",
        Accounts: undefined,
        NextToken: undefined
    };
    if (output.Accounts !== undefined && output.Accounts !== null) {
        contents.Accounts = deserializeAws_json1_1Accounts(output.Accounts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAccountsResponse = (output, context) => {
    let contents = {
        __type: "ListAccountsResponse",
        Accounts: undefined,
        NextToken: undefined
    };
    if (output.Accounts !== undefined && output.Accounts !== null) {
        contents.Accounts = deserializeAws_json1_1Accounts(output.Accounts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListChildrenResponse = (output, context) => {
    let contents = {
        __type: "ListChildrenResponse",
        Children: undefined,
        NextToken: undefined
    };
    if (output.Children !== undefined && output.Children !== null) {
        contents.Children = deserializeAws_json1_1Children(output.Children, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCreateAccountStatusResponse = (output, context) => {
    let contents = {
        __type: "ListCreateAccountStatusResponse",
        CreateAccountStatuses: undefined,
        NextToken: undefined
    };
    if (output.CreateAccountStatuses !== undefined &&
        output.CreateAccountStatuses !== null) {
        contents.CreateAccountStatuses = deserializeAws_json1_1CreateAccountStatuses(output.CreateAccountStatuses, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListHandshakesForAccountResponse = (output, context) => {
    let contents = {
        __type: "ListHandshakesForAccountResponse",
        Handshakes: undefined,
        NextToken: undefined
    };
    if (output.Handshakes !== undefined && output.Handshakes !== null) {
        contents.Handshakes = deserializeAws_json1_1Handshakes(output.Handshakes, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListHandshakesForOrganizationResponse = (output, context) => {
    let contents = {
        __type: "ListHandshakesForOrganizationResponse",
        Handshakes: undefined,
        NextToken: undefined
    };
    if (output.Handshakes !== undefined && output.Handshakes !== null) {
        contents.Handshakes = deserializeAws_json1_1Handshakes(output.Handshakes, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListOrganizationalUnitsForParentResponse = (output, context) => {
    let contents = {
        __type: "ListOrganizationalUnitsForParentResponse",
        NextToken: undefined,
        OrganizationalUnits: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationalUnits !== undefined &&
        output.OrganizationalUnits !== null) {
        contents.OrganizationalUnits = deserializeAws_json1_1OrganizationalUnits(output.OrganizationalUnits, context);
    }
    return contents;
};
const deserializeAws_json1_1ListParentsResponse = (output, context) => {
    let contents = {
        __type: "ListParentsResponse",
        NextToken: undefined,
        Parents: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parents !== undefined && output.Parents !== null) {
        contents.Parents = deserializeAws_json1_1Parents(output.Parents, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPoliciesForTargetResponse = (output, context) => {
    let contents = {
        __type: "ListPoliciesForTargetResponse",
        NextToken: undefined,
        Policies: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Policies !== undefined && output.Policies !== null) {
        contents.Policies = deserializeAws_json1_1Policies(output.Policies, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListPoliciesResponse",
        NextToken: undefined,
        Policies: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Policies !== undefined && output.Policies !== null) {
        contents.Policies = deserializeAws_json1_1Policies(output.Policies, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRootsResponse = (output, context) => {
    let contents = {
        __type: "ListRootsResponse",
        NextToken: undefined,
        Roots: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Roots !== undefined && output.Roots !== null) {
        contents.Roots = deserializeAws_json1_1Roots(output.Roots, context);
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
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTargetsForPolicyResponse = (output, context) => {
    let contents = {
        __type: "ListTargetsForPolicyResponse",
        NextToken: undefined,
        Targets: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1PolicyTargets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    let contents = {
        __type: "MalformedPolicyDocumentException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1MasterCannotLeaveOrganizationException = (output, context) => {
    let contents = {
        __type: "MasterCannotLeaveOrganizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Organization = (output, context) => {
    let contents = {
        __type: "Organization",
        Arn: undefined,
        AvailablePolicyTypes: undefined,
        FeatureSet: undefined,
        Id: undefined,
        MasterAccountArn: undefined,
        MasterAccountEmail: undefined,
        MasterAccountId: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.AvailablePolicyTypes !== undefined &&
        output.AvailablePolicyTypes !== null) {
        contents.AvailablePolicyTypes = deserializeAws_json1_1PolicyTypes(output.AvailablePolicyTypes, context);
    }
    if (output.FeatureSet !== undefined && output.FeatureSet !== null) {
        contents.FeatureSet = output.FeatureSet;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.MasterAccountArn !== undefined &&
        output.MasterAccountArn !== null) {
        contents.MasterAccountArn = output.MasterAccountArn;
    }
    if (output.MasterAccountEmail !== undefined &&
        output.MasterAccountEmail !== null) {
        contents.MasterAccountEmail = output.MasterAccountEmail;
    }
    if (output.MasterAccountId !== undefined && output.MasterAccountId !== null) {
        contents.MasterAccountId = output.MasterAccountId;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNotEmptyException = (output, context) => {
    let contents = {
        __type: "OrganizationNotEmptyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationalUnit = (output, context) => {
    let contents = {
        __type: "OrganizationalUnit",
        Arn: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotEmptyException = (output, context) => {
    let contents = {
        __type: "OrganizationalUnitNotEmptyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotFoundException = (output, context) => {
    let contents = {
        __type: "OrganizationalUnitNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationalUnits = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationalUnit(entry, context));
};
const deserializeAws_json1_1Parent = (output, context) => {
    let contents = {
        __type: "Parent",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ParentNotFoundException = (output, context) => {
    let contents = {
        __type: "ParentNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Parents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Parent(entry, context));
};
const deserializeAws_json1_1Policies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicySummary(entry, context));
};
const deserializeAws_json1_1Policy = (output, context) => {
    let contents = {
        __type: "Policy",
        Content: undefined,
        PolicySummary: undefined
    };
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = output.Content;
    }
    if (output.PolicySummary !== undefined && output.PolicySummary !== null) {
        contents.PolicySummary = deserializeAws_json1_1PolicySummary(output.PolicySummary, context);
    }
    return contents;
};
const deserializeAws_json1_1PolicyChangesInProgressException = (output, context) => {
    let contents = {
        __type: "PolicyChangesInProgressException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyInUseException = (output, context) => {
    let contents = {
        __type: "PolicyInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyNotAttachedException = (output, context) => {
    let contents = {
        __type: "PolicyNotAttachedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "PolicyNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicySummary = (output, context) => {
    let contents = {
        __type: "PolicySummary",
        Arn: undefined,
        AwsManaged: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.AwsManaged !== undefined && output.AwsManaged !== null) {
        contents.AwsManaged = output.AwsManaged;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTargetSummary = (output, context) => {
    let contents = {
        __type: "PolicyTargetSummary",
        Arn: undefined,
        Name: undefined,
        TargetId: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTargets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicyTargetSummary(entry, context));
};
const deserializeAws_json1_1PolicyTypeAlreadyEnabledException = (output, context) => {
    let contents = {
        __type: "PolicyTypeAlreadyEnabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException = (output, context) => {
    let contents = {
        __type: "PolicyTypeNotAvailableForOrganizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotEnabledException = (output, context) => {
    let contents = {
        __type: "PolicyTypeNotEnabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTypeSummary = (output, context) => {
    let contents = {
        __type: "PolicyTypeSummary",
        Status: undefined,
        Type: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1PolicyTypes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicyTypeSummary(entry, context));
};
const deserializeAws_json1_1Root = (output, context) => {
    let contents = {
        __type: "Root",
        Arn: undefined,
        Id: undefined,
        Name: undefined,
        PolicyTypes: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PolicyTypes !== undefined && output.PolicyTypes !== null) {
        contents.PolicyTypes = deserializeAws_json1_1PolicyTypes(output.PolicyTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1RootNotFoundException = (output, context) => {
    let contents = {
        __type: "RootNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Roots = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Root(entry, context));
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    let contents = {
        __type: "ServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SourceParentNotFoundException = (output, context) => {
    let contents = {
        __type: "SourceParentNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
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
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TargetNotFoundException = (output, context) => {
    let contents = {
        __type: "TargetNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        Message: undefined,
        Type: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedAPIEndpointException = (output, context) => {
    let contents = {
        __type: "UnsupportedAPIEndpointException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateOrganizationalUnitResponse = (output, context) => {
    let contents = {
        __type: "UpdateOrganizationalUnitResponse",
        OrganizationalUnit: undefined
    };
    if (output.OrganizationalUnit !== undefined &&
        output.OrganizationalUnit !== null) {
        contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdatePolicyResponse = (output, context) => {
    let contents = {
        __type: "UpdatePolicyResponse",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
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