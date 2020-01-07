"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1AddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.AddTagsToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
async function serializeAws_json1_1CancelCommandCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CancelCommand";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelCommandCommand = serializeAws_json1_1CancelCommandCommand;
async function serializeAws_json1_1CancelMaintenanceWindowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CancelMaintenanceWindowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelMaintenanceWindowExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelMaintenanceWindowExecutionCommand = serializeAws_json1_1CancelMaintenanceWindowExecutionCommand;
async function serializeAws_json1_1CreateActivationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateActivation";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateActivationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateActivationCommand = serializeAws_json1_1CreateActivationCommand;
async function serializeAws_json1_1CreateAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAssociationCommand = serializeAws_json1_1CreateAssociationCommand;
async function serializeAws_json1_1CreateAssociationBatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateAssociationBatch";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssociationBatchRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAssociationBatchCommand = serializeAws_json1_1CreateAssociationBatchCommand;
async function serializeAws_json1_1CreateDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDocumentCommand = serializeAws_json1_1CreateDocumentCommand;
async function serializeAws_json1_1CreateMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMaintenanceWindowCommand = serializeAws_json1_1CreateMaintenanceWindowCommand;
async function serializeAws_json1_1CreateOpsItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateOpsItem";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateOpsItemCommand = serializeAws_json1_1CreateOpsItemCommand;
async function serializeAws_json1_1CreatePatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreatePatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePatchBaselineCommand = serializeAws_json1_1CreatePatchBaselineCommand;
async function serializeAws_json1_1CreateResourceDataSyncCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.CreateResourceDataSync";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResourceDataSyncCommand = serializeAws_json1_1CreateResourceDataSyncCommand;
async function serializeAws_json1_1DeleteActivationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteActivation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteActivationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteActivationCommand = serializeAws_json1_1DeleteActivationCommand;
async function serializeAws_json1_1DeleteAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAssociationCommand = serializeAws_json1_1DeleteAssociationCommand;
async function serializeAws_json1_1DeleteDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDocumentCommand = serializeAws_json1_1DeleteDocumentCommand;
async function serializeAws_json1_1DeleteInventoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteInventory";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInventoryCommand = serializeAws_json1_1DeleteInventoryCommand;
async function serializeAws_json1_1DeleteMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMaintenanceWindowCommand = serializeAws_json1_1DeleteMaintenanceWindowCommand;
async function serializeAws_json1_1DeleteParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteParameterCommand = serializeAws_json1_1DeleteParameterCommand;
async function serializeAws_json1_1DeleteParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteParametersCommand = serializeAws_json1_1DeleteParametersCommand;
async function serializeAws_json1_1DeletePatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeletePatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePatchBaselineCommand = serializeAws_json1_1DeletePatchBaselineCommand;
async function serializeAws_json1_1DeleteResourceDataSyncCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeleteResourceDataSync";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourceDataSyncCommand = serializeAws_json1_1DeleteResourceDataSyncCommand;
async function serializeAws_json1_1DeregisterManagedInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeregisterManagedInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterManagedInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterManagedInstanceCommand = serializeAws_json1_1DeregisterManagedInstanceCommand;
async function serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeregisterPatchBaselineForPatchGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand;
async function serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeregisterTargetFromMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand;
async function serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DeregisterTaskFromMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand;
async function serializeAws_json1_1DescribeActivationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeActivations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeActivationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeActivationsCommand = serializeAws_json1_1DescribeActivationsCommand;
async function serializeAws_json1_1DescribeAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssociationCommand = serializeAws_json1_1DescribeAssociationCommand;
async function serializeAws_json1_1DescribeAssociationExecutionTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAssociationExecutionTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssociationExecutionTargetsCommand = serializeAws_json1_1DescribeAssociationExecutionTargetsCommand;
async function serializeAws_json1_1DescribeAssociationExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAssociationExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssociationExecutionsCommand = serializeAws_json1_1DescribeAssociationExecutionsCommand;
async function serializeAws_json1_1DescribeAutomationExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAutomationExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAutomationExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAutomationExecutionsCommand = serializeAws_json1_1DescribeAutomationExecutionsCommand;
async function serializeAws_json1_1DescribeAutomationStepExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAutomationStepExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAutomationStepExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAutomationStepExecutionsCommand = serializeAws_json1_1DescribeAutomationStepExecutionsCommand;
async function serializeAws_json1_1DescribeAvailablePatchesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeAvailablePatches";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAvailablePatchesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAvailablePatchesCommand = serializeAws_json1_1DescribeAvailablePatchesCommand;
async function serializeAws_json1_1DescribeDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDocumentCommand = serializeAws_json1_1DescribeDocumentCommand;
async function serializeAws_json1_1DescribeDocumentPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeDocumentPermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDocumentPermissionCommand = serializeAws_json1_1DescribeDocumentPermissionCommand;
async function serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeEffectiveInstanceAssociations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand;
async function serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonSSM.DescribeEffectivePatchesForPatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand;
async function serializeAws_json1_1DescribeInstanceAssociationsStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeInstanceAssociationsStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstanceAssociationsStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstanceAssociationsStatusCommand = serializeAws_json1_1DescribeInstanceAssociationsStatusCommand;
async function serializeAws_json1_1DescribeInstanceInformationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeInstanceInformation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstanceInformationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstanceInformationCommand = serializeAws_json1_1DescribeInstanceInformationCommand;
async function serializeAws_json1_1DescribeInstancePatchStatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeInstancePatchStates";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstancePatchStatesCommand = serializeAws_json1_1DescribeInstancePatchStatesCommand;
async function serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonSSM.DescribeInstancePatchStatesForPatchGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand;
async function serializeAws_json1_1DescribeInstancePatchesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeInstancePatches";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstancePatchesCommand = serializeAws_json1_1DescribeInstancePatchesCommand;
async function serializeAws_json1_1DescribeInventoryDeletionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeInventoryDeletions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInventoryDeletionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInventoryDeletionsCommand = serializeAws_json1_1DescribeInventoryDeletionsCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowExecutionTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowTasksCommand = serializeAws_json1_1DescribeMaintenanceWindowTasksCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindows";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowsCommand = serializeAws_json1_1DescribeMaintenanceWindowsCommand;
async function serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeMaintenanceWindowsForTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand;
async function serializeAws_json1_1DescribeOpsItemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeOpsItems";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOpsItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOpsItemsCommand = serializeAws_json1_1DescribeOpsItemsCommand;
async function serializeAws_json1_1DescribeParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeParametersCommand = serializeAws_json1_1DescribeParametersCommand;
async function serializeAws_json1_1DescribePatchBaselinesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribePatchBaselines";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchBaselinesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePatchBaselinesCommand = serializeAws_json1_1DescribePatchBaselinesCommand;
async function serializeAws_json1_1DescribePatchGroupStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribePatchGroupState";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchGroupStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePatchGroupStateCommand = serializeAws_json1_1DescribePatchGroupStateCommand;
async function serializeAws_json1_1DescribePatchGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribePatchGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePatchGroupsCommand = serializeAws_json1_1DescribePatchGroupsCommand;
async function serializeAws_json1_1DescribePatchPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribePatchProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePatchPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePatchPropertiesCommand = serializeAws_json1_1DescribePatchPropertiesCommand;
async function serializeAws_json1_1DescribeSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.DescribeSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSessionsCommand = serializeAws_json1_1DescribeSessionsCommand;
async function serializeAws_json1_1GetAutomationExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetAutomationExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAutomationExecutionCommand = serializeAws_json1_1GetAutomationExecutionCommand;
async function serializeAws_json1_1GetCalendarStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetCalendarState";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCalendarStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCalendarStateCommand = serializeAws_json1_1GetCalendarStateCommand;
async function serializeAws_json1_1GetCommandInvocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetCommandInvocation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommandInvocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCommandInvocationCommand = serializeAws_json1_1GetCommandInvocationCommand;
async function serializeAws_json1_1GetConnectionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetConnectionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConnectionStatusCommand = serializeAws_json1_1GetConnectionStatusCommand;
async function serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetDefaultPatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDefaultPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDefaultPatchBaselineCommand = serializeAws_json1_1GetDefaultPatchBaselineCommand;
async function serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetDeployablePatchSnapshotForInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand;
async function serializeAws_json1_1GetDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDocumentCommand = serializeAws_json1_1GetDocumentCommand;
async function serializeAws_json1_1GetInventoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetInventory";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInventoryCommand = serializeAws_json1_1GetInventoryCommand;
async function serializeAws_json1_1GetInventorySchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetInventorySchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInventorySchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInventorySchemaCommand = serializeAws_json1_1GetInventorySchemaCommand;
async function serializeAws_json1_1GetMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMaintenanceWindowCommand = serializeAws_json1_1GetMaintenanceWindowCommand;
async function serializeAws_json1_1GetMaintenanceWindowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetMaintenanceWindowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMaintenanceWindowExecutionCommand = serializeAws_json1_1GetMaintenanceWindowExecutionCommand;
async function serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetMaintenanceWindowExecutionTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand;
async function serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand;
async function serializeAws_json1_1GetMaintenanceWindowTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetMaintenanceWindowTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMaintenanceWindowTaskCommand = serializeAws_json1_1GetMaintenanceWindowTaskCommand;
async function serializeAws_json1_1GetOpsItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetOpsItem";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOpsItemCommand = serializeAws_json1_1GetOpsItemCommand;
async function serializeAws_json1_1GetOpsSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetOpsSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpsSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOpsSummaryCommand = serializeAws_json1_1GetOpsSummaryCommand;
async function serializeAws_json1_1GetParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetParameterCommand = serializeAws_json1_1GetParameterCommand;
async function serializeAws_json1_1GetParameterHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetParameterHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParameterHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetParameterHistoryCommand = serializeAws_json1_1GetParameterHistoryCommand;
async function serializeAws_json1_1GetParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetParametersCommand = serializeAws_json1_1GetParametersCommand;
async function serializeAws_json1_1GetParametersByPathCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetParametersByPath";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersByPathRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetParametersByPathCommand = serializeAws_json1_1GetParametersByPathCommand;
async function serializeAws_json1_1GetPatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetPatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPatchBaselineCommand = serializeAws_json1_1GetPatchBaselineCommand;
async function serializeAws_json1_1GetPatchBaselineForPatchGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetPatchBaselineForPatchGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPatchBaselineForPatchGroupCommand = serializeAws_json1_1GetPatchBaselineForPatchGroupCommand;
async function serializeAws_json1_1GetServiceSettingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.GetServiceSetting";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServiceSettingCommand = serializeAws_json1_1GetServiceSettingCommand;
async function serializeAws_json1_1LabelParameterVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.LabelParameterVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1LabelParameterVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1LabelParameterVersionCommand = serializeAws_json1_1LabelParameterVersionCommand;
async function serializeAws_json1_1ListAssociationVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListAssociationVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociationVersionsCommand = serializeAws_json1_1ListAssociationVersionsCommand;
async function serializeAws_json1_1ListAssociationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListAssociations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociationsCommand = serializeAws_json1_1ListAssociationsCommand;
async function serializeAws_json1_1ListCommandInvocationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListCommandInvocations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCommandInvocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCommandInvocationsCommand = serializeAws_json1_1ListCommandInvocationsCommand;
async function serializeAws_json1_1ListCommandsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListCommands";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCommandsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCommandsCommand = serializeAws_json1_1ListCommandsCommand;
async function serializeAws_json1_1ListComplianceItemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListComplianceItems";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListComplianceItemsCommand = serializeAws_json1_1ListComplianceItemsCommand;
async function serializeAws_json1_1ListComplianceSummariesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListComplianceSummaries";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListComplianceSummariesCommand = serializeAws_json1_1ListComplianceSummariesCommand;
async function serializeAws_json1_1ListDocumentVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListDocumentVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDocumentVersionsCommand = serializeAws_json1_1ListDocumentVersionsCommand;
async function serializeAws_json1_1ListDocumentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListDocuments";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDocumentsCommand = serializeAws_json1_1ListDocumentsCommand;
async function serializeAws_json1_1ListInventoryEntriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListInventoryEntries";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInventoryEntriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInventoryEntriesCommand = serializeAws_json1_1ListInventoryEntriesCommand;
async function serializeAws_json1_1ListResourceComplianceSummariesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListResourceComplianceSummaries";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceComplianceSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceComplianceSummariesCommand = serializeAws_json1_1ListResourceComplianceSummariesCommand;
async function serializeAws_json1_1ListResourceDataSyncCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListResourceDataSync";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceDataSyncCommand = serializeAws_json1_1ListResourceDataSyncCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ModifyDocumentPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ModifyDocumentPermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyDocumentPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyDocumentPermissionCommand = serializeAws_json1_1ModifyDocumentPermissionCommand;
async function serializeAws_json1_1PutComplianceItemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.PutComplianceItems";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutComplianceItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutComplianceItemsCommand = serializeAws_json1_1PutComplianceItemsCommand;
async function serializeAws_json1_1PutInventoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.PutInventory";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutInventoryCommand = serializeAws_json1_1PutInventoryCommand;
async function serializeAws_json1_1PutParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.PutParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutParameterCommand = serializeAws_json1_1PutParameterCommand;
async function serializeAws_json1_1RegisterDefaultPatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.RegisterDefaultPatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterDefaultPatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterDefaultPatchBaselineCommand = serializeAws_json1_1RegisterDefaultPatchBaselineCommand;
async function serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.RegisterPatchBaselineForPatchGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand;
async function serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.RegisterTargetWithMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand;
async function serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.RegisterTaskWithMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand;
async function serializeAws_json1_1RemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.RemoveTagsFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
async function serializeAws_json1_1ResetServiceSettingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ResetServiceSetting";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResetServiceSettingCommand = serializeAws_json1_1ResetServiceSettingCommand;
async function serializeAws_json1_1ResumeSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.ResumeSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResumeSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResumeSessionCommand = serializeAws_json1_1ResumeSessionCommand;
async function serializeAws_json1_1SendAutomationSignalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.SendAutomationSignal";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendAutomationSignalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendAutomationSignalCommand = serializeAws_json1_1SendAutomationSignalCommand;
async function serializeAws_json1_1SendCommandCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.SendCommand";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendCommandCommand = serializeAws_json1_1SendCommandCommand;
async function serializeAws_json1_1StartAssociationsOnceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.StartAssociationsOnce";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAssociationsOnceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAssociationsOnceCommand = serializeAws_json1_1StartAssociationsOnceCommand;
async function serializeAws_json1_1StartAutomationExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.StartAutomationExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAutomationExecutionCommand = serializeAws_json1_1StartAutomationExecutionCommand;
async function serializeAws_json1_1StartSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.StartSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartSessionCommand = serializeAws_json1_1StartSessionCommand;
async function serializeAws_json1_1StopAutomationExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.StopAutomationExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAutomationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopAutomationExecutionCommand = serializeAws_json1_1StopAutomationExecutionCommand;
async function serializeAws_json1_1TerminateSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.TerminateSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TerminateSessionCommand = serializeAws_json1_1TerminateSessionCommand;
async function serializeAws_json1_1UpdateAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAssociationCommand = serializeAws_json1_1UpdateAssociationCommand;
async function serializeAws_json1_1UpdateAssociationStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateAssociationStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssociationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAssociationStatusCommand = serializeAws_json1_1UpdateAssociationStatusCommand;
async function serializeAws_json1_1UpdateDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDocumentCommand = serializeAws_json1_1UpdateDocumentCommand;
async function serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateDocumentDefaultVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDocumentDefaultVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDocumentDefaultVersionCommand = serializeAws_json1_1UpdateDocumentDefaultVersionCommand;
async function serializeAws_json1_1UpdateMaintenanceWindowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateMaintenanceWindow";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMaintenanceWindowCommand = serializeAws_json1_1UpdateMaintenanceWindowCommand;
async function serializeAws_json1_1UpdateMaintenanceWindowTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateMaintenanceWindowTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMaintenanceWindowTargetCommand = serializeAws_json1_1UpdateMaintenanceWindowTargetCommand;
async function serializeAws_json1_1UpdateMaintenanceWindowTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateMaintenanceWindowTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMaintenanceWindowTaskCommand = serializeAws_json1_1UpdateMaintenanceWindowTaskCommand;
async function serializeAws_json1_1UpdateManagedInstanceRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateManagedInstanceRole";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateManagedInstanceRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateManagedInstanceRoleCommand = serializeAws_json1_1UpdateManagedInstanceRoleCommand;
async function serializeAws_json1_1UpdateOpsItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateOpsItem";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateOpsItemCommand = serializeAws_json1_1UpdateOpsItemCommand;
async function serializeAws_json1_1UpdatePatchBaselineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdatePatchBaseline";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePatchBaselineCommand = serializeAws_json1_1UpdatePatchBaselineCommand;
async function serializeAws_json1_1UpdateResourceDataSyncCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateResourceDataSync";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceDataSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResourceDataSyncCommand = serializeAws_json1_1UpdateResourceDataSyncCommand;
async function serializeAws_json1_1UpdateServiceSettingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonSSM.UpdateServiceSetting";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServiceSettingCommand = serializeAws_json1_1UpdateServiceSettingCommand;
async function deserializeAws_json1_1AddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsToResourceResult" }, contents);
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
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceType":
        case "com.amazonaws.services.ssm#InvalidResourceType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsError":
        case "com.amazonaws.services.ssm#TooManyTagsError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelCommandCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelCommandResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelCommandResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelCommandCommand = deserializeAws_json1_1CancelCommandCommand;
async function deserializeAws_json1_1CancelCommandCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.services.ssm#DuplicateInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommandId":
        case "com.amazonaws.services.ssm#InvalidCommandId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelMaintenanceWindowExecutionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelMaintenanceWindowExecutionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand = deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand;
async function deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateActivationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateActivationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateActivationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateActivationCommand = deserializeAws_json1_1CreateActivationCommand;
async function deserializeAws_json1_1CreateActivationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAssociationCommand = deserializeAws_json1_1CreateAssociationCommand;
async function deserializeAws_json1_1CreateAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationAlreadyExists":
        case "com.amazonaws.services.ssm#AssociationAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssociationLimitExceeded":
        case "com.amazonaws.services.ssm#AssociationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.services.ssm#InvalidOutputLocation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameters":
        case "com.amazonaws.services.ssm#InvalidParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSchedule":
        case "com.amazonaws.services.ssm#InvalidSchedule":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTarget":
        case "com.amazonaws.services.ssm#InvalidTarget":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.services.ssm#UnsupportedPlatformType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAssociationBatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAssociationBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssociationBatchResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAssociationBatchResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAssociationBatchCommand = deserializeAws_json1_1CreateAssociationBatchCommand;
async function deserializeAws_json1_1CreateAssociationBatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationLimitExceeded":
        case "com.amazonaws.services.ssm#AssociationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateInstanceId":
        case "com.amazonaws.services.ssm#DuplicateInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.services.ssm#InvalidOutputLocation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameters":
        case "com.amazonaws.services.ssm#InvalidParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSchedule":
        case "com.amazonaws.services.ssm#InvalidSchedule":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTarget":
        case "com.amazonaws.services.ssm#InvalidTarget":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.services.ssm#UnsupportedPlatformType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDocumentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDocumentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDocumentCommand = deserializeAws_json1_1CreateDocumentCommand;
async function deserializeAws_json1_1CreateDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DocumentAlreadyExists":
        case "com.amazonaws.services.ssm#DocumentAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentLimitExceeded":
        case "com.amazonaws.services.ssm#DocumentLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentContent":
        case "com.amazonaws.services.ssm#InvalidDocumentContent":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentSchemaVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.services.ssm#MaxDocumentSizeExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMaintenanceWindowCommand = deserializeAws_json1_1CreateMaintenanceWindowCommand;
async function deserializeAws_json1_1CreateMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.services.ssm#IdempotentParameterMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.services.ssm#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateOpsItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOpsItemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateOpsItemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateOpsItemCommand = deserializeAws_json1_1CreateOpsItemCommand;
async function deserializeAws_json1_1CreateOpsItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.services.ssm#OpsItemAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.services.ssm#OpsItemInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.services.ssm#OpsItemLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePatchBaselineCommand = deserializeAws_json1_1CreatePatchBaselineCommand;
async function deserializeAws_json1_1CreatePatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.services.ssm#IdempotentParameterMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.services.ssm#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateResourceDataSyncCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceDataSyncResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResourceDataSyncResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResourceDataSyncCommand = deserializeAws_json1_1CreateResourceDataSyncCommand;
async function deserializeAws_json1_1CreateResourceDataSyncCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncAlreadyExistsException":
        case "com.amazonaws.services.ssm#ResourceDataSyncAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncCountExceededException":
        case "com.amazonaws.services.ssm#ResourceDataSyncCountExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.services.ssm#ResourceDataSyncInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteActivationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteActivationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteActivationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteActivationCommand = deserializeAws_json1_1DeleteActivationCommand;
async function deserializeAws_json1_1DeleteActivationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidActivation":
        case "com.amazonaws.services.ssm#InvalidActivation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidActivationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidActivationId":
        case "com.amazonaws.services.ssm#InvalidActivationId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidActivationIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAssociationCommand = deserializeAws_json1_1DeleteAssociationCommand;
async function deserializeAws_json1_1DeleteAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDocumentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDocumentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDocumentCommand = deserializeAws_json1_1DeleteDocumentCommand;
async function deserializeAws_json1_1DeleteDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociatedInstances":
        case "com.amazonaws.services.ssm#AssociatedInstances":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociatedInstancesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.services.ssm#InvalidDocumentOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteInventoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInventoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInventoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInventoryCommand = deserializeAws_json1_1DeleteInventoryCommand;
async function deserializeAws_json1_1DeleteInventoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeleteInventoryParametersException":
        case "com.amazonaws.services.ssm#InvalidDeleteInventoryParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInventoryRequestException":
        case "com.amazonaws.services.ssm#InvalidInventoryRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInventoryRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOptionException":
        case "com.amazonaws.services.ssm#InvalidOptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMaintenanceWindowCommand = deserializeAws_json1_1DeleteMaintenanceWindowCommand;
async function deserializeAws_json1_1DeleteMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParameterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteParameterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteParameterCommand = deserializeAws_json1_1DeleteParameterCommand;
async function deserializeAws_json1_1DeleteParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterNotFound":
        case "com.amazonaws.services.ssm#ParameterNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteParametersCommand = deserializeAws_json1_1DeleteParametersCommand;
async function deserializeAws_json1_1DeleteParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeletePatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePatchBaselineCommand = deserializeAws_json1_1DeletePatchBaselineCommand;
async function deserializeAws_json1_1DeletePatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.ssm#ResourceInUseException":
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
async function deserializeAws_json1_1DeleteResourceDataSyncCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourceDataSyncResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResourceDataSyncResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourceDataSyncCommand = deserializeAws_json1_1DeleteResourceDataSyncCommand;
async function deserializeAws_json1_1DeleteResourceDataSyncCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.services.ssm#ResourceDataSyncInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.services.ssm#ResourceDataSyncNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterManagedInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterManagedInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterManagedInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterManagedInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterManagedInstanceCommand = deserializeAws_json1_1DeregisterManagedInstanceCommand;
async function deserializeAws_json1_1DeregisterManagedInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterPatchBaselineForPatchGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand;
async function deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterTargetFromMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand;
async function deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetInUseException":
        case "com.amazonaws.services.ssm#TargetInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterTaskFromMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand;
async function deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeActivationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeActivationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeActivationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeActivationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeActivationsCommand = deserializeAws_json1_1DescribeActivationsCommand;
async function deserializeAws_json1_1DescribeActivationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssociationCommand = deserializeAws_json1_1DescribeAssociationCommand;
async function deserializeAws_json1_1DescribeAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAssociationVersion":
        case "com.amazonaws.services.ssm#InvalidAssociationVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationExecutionTargetsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssociationExecutionTargetsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand = deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand;
async function deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssociationExecutionDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationExecutionDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationExecutionDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAssociationExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssociationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssociationExecutionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssociationExecutionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssociationExecutionsCommand = deserializeAws_json1_1DescribeAssociationExecutionsCommand;
async function deserializeAws_json1_1DescribeAssociationExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAutomationExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAutomationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAutomationExecutionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAutomationExecutionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAutomationExecutionsCommand = deserializeAws_json1_1DescribeAutomationExecutionsCommand;
async function deserializeAws_json1_1DescribeAutomationExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.services.ssm#InvalidFilterValue":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAutomationStepExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAutomationStepExecutionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAutomationStepExecutionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAutomationStepExecutionsCommand = deserializeAws_json1_1DescribeAutomationStepExecutionsCommand;
async function deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.services.ssm#InvalidFilterValue":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAvailablePatchesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAvailablePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAvailablePatchesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAvailablePatchesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAvailablePatchesCommand = deserializeAws_json1_1DescribeAvailablePatchesCommand;
async function deserializeAws_json1_1DescribeAvailablePatchesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDocumentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDocumentCommand = deserializeAws_json1_1DescribeDocumentCommand;
async function deserializeAws_json1_1DescribeDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentPermissionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDocumentPermissionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDocumentPermissionCommand = deserializeAws_json1_1DescribeDocumentPermissionCommand;
async function deserializeAws_json1_1DescribeDocumentPermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPermissionType":
        case "com.amazonaws.services.ssm#InvalidPermissionType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEffectiveInstanceAssociationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand;
async function deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEffectivePatchesForPatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand;
async function deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.services.ssm#UnsupportedOperatingSystem":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstanceAssociationsStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstanceAssociationsStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand = deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand;
async function deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInstanceInformationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstanceInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstanceInformationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstanceInformationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstanceInformationCommand = deserializeAws_json1_1DescribeInstanceInformationCommand;
async function deserializeAws_json1_1DescribeInstanceInformationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceInformationFilterValue":
        case "com.amazonaws.services.ssm#InvalidInstanceInformationFilterValue":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInstancePatchStatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstancePatchStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchStatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancePatchStatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstancePatchStatesCommand = deserializeAws_json1_1DescribeInstancePatchStatesCommand;
async function deserializeAws_json1_1DescribeInstancePatchStatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancePatchStatesForPatchGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand;
async function deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInstancePatchesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstancePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancePatchesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancePatchesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstancePatchesCommand = deserializeAws_json1_1DescribeInstancePatchesCommand;
async function deserializeAws_json1_1DescribeInstancePatchesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInventoryDeletionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInventoryDeletionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInventoryDeletionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInventoryDeletionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInventoryDeletionsCommand = deserializeAws_json1_1DescribeInventoryDeletionsCommand;
async function deserializeAws_json1_1DescribeInventoryDeletionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeletionIdException":
        case "com.amazonaws.services.ssm#InvalidDeletionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeletionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowExecutionTaskInvocationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowExecutionTasksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowExecutionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowScheduleResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowTargetsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowTasksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowTasksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand = deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowsCommand = deserializeAws_json1_1DescribeMaintenanceWindowsCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceWindowsForTargetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand;
async function deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeOpsItemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOpsItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOpsItemsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOpsItemsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOpsItemsCommand = deserializeAws_json1_1DescribeOpsItemsCommand;
async function deserializeAws_json1_1DescribeOpsItemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeParametersCommand = deserializeAws_json1_1DescribeParametersCommand;
async function deserializeAws_json1_1DescribeParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterOption":
        case "com.amazonaws.services.ssm#InvalidFilterOption":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.services.ssm#InvalidFilterValue":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePatchBaselinesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePatchBaselinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchBaselinesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePatchBaselinesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePatchBaselinesCommand = deserializeAws_json1_1DescribePatchBaselinesCommand;
async function deserializeAws_json1_1DescribePatchBaselinesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePatchGroupStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePatchGroupStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchGroupStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePatchGroupStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePatchGroupStateCommand = deserializeAws_json1_1DescribePatchGroupStateCommand;
async function deserializeAws_json1_1DescribePatchGroupStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePatchGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePatchGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchGroupsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePatchGroupsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePatchGroupsCommand = deserializeAws_json1_1DescribePatchGroupsCommand;
async function deserializeAws_json1_1DescribePatchGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribePatchPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePatchPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePatchPropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePatchPropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePatchPropertiesCommand = deserializeAws_json1_1DescribePatchPropertiesCommand;
async function deserializeAws_json1_1DescribePatchPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSessionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSessionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSessionsCommand = deserializeAws_json1_1DescribeSessionsCommand;
async function deserializeAws_json1_1DescribeSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAutomationExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAutomationExecutionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAutomationExecutionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAutomationExecutionCommand = deserializeAws_json1_1GetAutomationExecutionCommand;
async function deserializeAws_json1_1GetAutomationExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCalendarStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCalendarStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCalendarStateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCalendarStateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCalendarStateCommand = deserializeAws_json1_1GetCalendarStateCommand;
async function deserializeAws_json1_1GetCalendarStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentType":
        case "com.amazonaws.services.ssm#InvalidDocumentType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedCalendarException":
        case "com.amazonaws.services.ssm#UnsupportedCalendarException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedCalendarExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCommandInvocationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCommandInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommandInvocationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCommandInvocationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCommandInvocationCommand = deserializeAws_json1_1GetCommandInvocationCommand;
async function deserializeAws_json1_1GetCommandInvocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommandId":
        case "com.amazonaws.services.ssm#InvalidCommandId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPluginName":
        case "com.amazonaws.services.ssm#InvalidPluginName":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPluginNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvocationDoesNotExist":
        case "com.amazonaws.services.ssm#InvocationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvocationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetConnectionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConnectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConnectionStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConnectionStatusCommand = deserializeAws_json1_1GetConnectionStatusCommand;
async function deserializeAws_json1_1GetConnectionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDefaultPatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDefaultPatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDefaultPatchBaselineCommand = deserializeAws_json1_1GetDefaultPatchBaselineCommand;
async function deserializeAws_json1_1GetDefaultPatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeployablePatchSnapshotForInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand;
async function deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureRequiredException":
        case "com.amazonaws.services.ssm#UnsupportedFeatureRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.services.ssm#UnsupportedOperatingSystem":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDocumentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDocumentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDocumentCommand = deserializeAws_json1_1GetDocumentCommand;
async function deserializeAws_json1_1GetDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInventoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInventoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInventoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInventoryCommand = deserializeAws_json1_1GetInventoryCommand;
async function deserializeAws_json1_1GetInventoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAggregatorException":
        case "com.amazonaws.services.ssm#InvalidAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInventoryGroupException":
        case "com.amazonaws.services.ssm#InvalidInventoryGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInventoryGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResultAttributeException":
        case "com.amazonaws.services.ssm#InvalidResultAttributeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResultAttributeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInventorySchemaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInventorySchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInventorySchemaResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInventorySchemaResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInventorySchemaCommand = deserializeAws_json1_1GetInventorySchemaCommand;
async function deserializeAws_json1_1GetInventorySchemaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMaintenanceWindowCommand = deserializeAws_json1_1GetMaintenanceWindowCommand;
async function deserializeAws_json1_1GetMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMaintenanceWindowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMaintenanceWindowExecutionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionCommand;
async function deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMaintenanceWindowExecutionTaskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand;
async function deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMaintenanceWindowExecutionTaskInvocationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand;
async function deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMaintenanceWindowTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMaintenanceWindowTaskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMaintenanceWindowTaskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMaintenanceWindowTaskCommand = deserializeAws_json1_1GetMaintenanceWindowTaskCommand;
async function deserializeAws_json1_1GetMaintenanceWindowTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOpsItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpsItemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOpsItemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOpsItemCommand = deserializeAws_json1_1GetOpsItemCommand;
async function deserializeAws_json1_1GetOpsItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.services.ssm#OpsItemNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOpsSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOpsSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpsSummaryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOpsSummaryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOpsSummaryCommand = deserializeAws_json1_1GetOpsSummaryCommand;
async function deserializeAws_json1_1GetOpsSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAggregatorException":
        case "com.amazonaws.services.ssm#InvalidAggregatorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.services.ssm#ResourceDataSyncNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParameterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetParameterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetParameterCommand = deserializeAws_json1_1GetParameterCommand;
async function deserializeAws_json1_1GetParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyId":
        case "com.amazonaws.services.ssm#InvalidKeyId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterNotFound":
        case "com.amazonaws.services.ssm#ParameterNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterVersionNotFound":
        case "com.amazonaws.services.ssm#ParameterVersionNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetParameterHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetParameterHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParameterHistoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetParameterHistoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetParameterHistoryCommand = deserializeAws_json1_1GetParameterHistoryCommand;
async function deserializeAws_json1_1GetParameterHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyId":
        case "com.amazonaws.services.ssm#InvalidKeyId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterNotFound":
        case "com.amazonaws.services.ssm#ParameterNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetParametersCommand = deserializeAws_json1_1GetParametersCommand;
async function deserializeAws_json1_1GetParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyId":
        case "com.amazonaws.services.ssm#InvalidKeyId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetParametersByPathCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetParametersByPathCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersByPathResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetParametersByPathResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetParametersByPathCommand = deserializeAws_json1_1GetParametersByPathCommand;
async function deserializeAws_json1_1GetParametersByPathCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterOption":
        case "com.amazonaws.services.ssm#InvalidFilterOption":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterValue":
        case "com.amazonaws.services.ssm#InvalidFilterValue":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyId":
        case "com.amazonaws.services.ssm#InvalidKeyId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPatchBaselineCommand = deserializeAws_json1_1GetPatchBaselineCommand;
async function deserializeAws_json1_1GetPatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPatchBaselineForPatchGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPatchBaselineForPatchGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand = deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand;
async function deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetServiceSettingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceSettingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceSettingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServiceSettingCommand = deserializeAws_json1_1GetServiceSettingCommand;
async function deserializeAws_json1_1GetServiceSettingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.services.ssm#ServiceSettingNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1LabelParameterVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1LabelParameterVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LabelParameterVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LabelParameterVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1LabelParameterVersionCommand = deserializeAws_json1_1LabelParameterVersionCommand;
async function deserializeAws_json1_1LabelParameterVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterNotFound":
        case "com.amazonaws.services.ssm#ParameterNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterVersionLabelLimitExceeded":
        case "com.amazonaws.services.ssm#ParameterVersionLabelLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterVersionNotFound":
        case "com.amazonaws.services.ssm#ParameterVersionNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAssociationVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationVersionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociationVersionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociationVersionsCommand = deserializeAws_json1_1ListAssociationVersionsCommand;
async function deserializeAws_json1_1ListAssociationVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAssociationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociationsCommand = deserializeAws_json1_1ListAssociationsCommand;
async function deserializeAws_json1_1ListAssociationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCommandInvocationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCommandInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCommandInvocationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCommandInvocationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCommandInvocationsCommand = deserializeAws_json1_1ListCommandInvocationsCommand;
async function deserializeAws_json1_1ListCommandInvocationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommandId":
        case "com.amazonaws.services.ssm#InvalidCommandId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCommandsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCommandsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCommandsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCommandsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCommandsCommand = deserializeAws_json1_1ListCommandsCommand;
async function deserializeAws_json1_1ListCommandsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommandId":
        case "com.amazonaws.services.ssm#InvalidCommandId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListComplianceItemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceItemsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListComplianceItemsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListComplianceItemsCommand = deserializeAws_json1_1ListComplianceItemsCommand;
async function deserializeAws_json1_1ListComplianceItemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceType":
        case "com.amazonaws.services.ssm#InvalidResourceType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListComplianceSummariesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceSummariesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListComplianceSummariesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListComplianceSummariesCommand = deserializeAws_json1_1ListComplianceSummariesCommand;
async function deserializeAws_json1_1ListComplianceSummariesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDocumentVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDocumentVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentVersionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDocumentVersionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDocumentVersionsCommand = deserializeAws_json1_1ListDocumentVersionsCommand;
async function deserializeAws_json1_1ListDocumentVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDocumentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDocumentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDocumentsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDocumentsCommand = deserializeAws_json1_1ListDocumentsCommand;
async function deserializeAws_json1_1ListDocumentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterKey":
        case "com.amazonaws.services.ssm#InvalidFilterKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListInventoryEntriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListInventoryEntriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInventoryEntriesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInventoryEntriesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListInventoryEntriesCommand = deserializeAws_json1_1ListInventoryEntriesCommand;
async function deserializeAws_json1_1ListInventoryEntriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListResourceComplianceSummariesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceComplianceSummariesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceComplianceSummariesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceComplianceSummariesCommand = deserializeAws_json1_1ListResourceComplianceSummariesCommand;
async function deserializeAws_json1_1ListResourceComplianceSummariesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilter":
        case "com.amazonaws.services.ssm#InvalidFilter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListResourceDataSyncCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceDataSyncResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceDataSyncResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceDataSyncCommand = deserializeAws_json1_1ListResourceDataSyncCommand;
async function deserializeAws_json1_1ListResourceDataSyncCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextToken":
        case "com.amazonaws.services.ssm#InvalidNextToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.services.ssm#ResourceDataSyncInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResult" }, contents);
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
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceType":
        case "com.amazonaws.services.ssm#InvalidResourceType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ModifyDocumentPermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyDocumentPermissionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyDocumentPermissionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyDocumentPermissionCommand = deserializeAws_json1_1ModifyDocumentPermissionCommand;
async function deserializeAws_json1_1ModifyDocumentPermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DocumentLimitExceeded":
        case "com.amazonaws.services.ssm#DocumentLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentPermissionLimit":
        case "com.amazonaws.services.ssm#DocumentPermissionLimit":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentPermissionLimitResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPermissionType":
        case "com.amazonaws.services.ssm#InvalidPermissionType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutComplianceItemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutComplianceItemsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutComplianceItemsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutComplianceItemsCommand = deserializeAws_json1_1PutComplianceItemsCommand;
async function deserializeAws_json1_1PutComplianceItemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ComplianceTypeCountLimitExceededException":
        case "com.amazonaws.services.ssm#ComplianceTypeCountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidItemContentException":
        case "com.amazonaws.services.ssm#InvalidItemContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceType":
        case "com.amazonaws.services.ssm#InvalidResourceType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.services.ssm#ItemSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.services.ssm#TotalSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutInventoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInventoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutInventoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutInventoryCommand = deserializeAws_json1_1PutInventoryCommand;
async function deserializeAws_json1_1PutInventoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomSchemaCountLimitExceededException":
        case "com.amazonaws.services.ssm#CustomSchemaCountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInventoryItemContextException":
        case "com.amazonaws.services.ssm#InvalidInventoryItemContextException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidItemContentException":
        case "com.amazonaws.services.ssm#InvalidItemContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeNameException":
        case "com.amazonaws.services.ssm#InvalidTypeNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemContentMismatchException":
        case "com.amazonaws.services.ssm#ItemContentMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ItemContentMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.services.ssm#ItemSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubTypeCountLimitExceededException":
        case "com.amazonaws.services.ssm#SubTypeCountLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.services.ssm#TotalSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedInventoryItemContextException":
        case "com.amazonaws.services.ssm#UnsupportedInventoryItemContextException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedInventorySchemaVersionException":
        case "com.amazonaws.services.ssm#UnsupportedInventorySchemaVersionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutParameterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutParameterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutParameterCommand = deserializeAws_json1_1PutParameterCommand;
async function deserializeAws_json1_1PutParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "HierarchyLevelLimitExceededException":
        case "com.amazonaws.services.ssm#HierarchyLevelLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HierarchyTypeMismatchException":
        case "com.amazonaws.services.ssm#HierarchyTypeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatiblePolicyException":
        case "com.amazonaws.services.ssm#IncompatiblePolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatiblePolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAllowedPatternException":
        case "com.amazonaws.services.ssm#InvalidAllowedPatternException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAllowedPatternExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyId":
        case "com.amazonaws.services.ssm#InvalidKeyId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPolicyAttributeException":
        case "com.amazonaws.services.ssm#InvalidPolicyAttributeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPolicyTypeException":
        case "com.amazonaws.services.ssm#InvalidPolicyTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPolicyTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterAlreadyExists":
        case "com.amazonaws.services.ssm#ParameterAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterLimitExceeded":
        case "com.amazonaws.services.ssm#ParameterLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterMaxVersionLimitExceeded":
        case "com.amazonaws.services.ssm#ParameterMaxVersionLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParameterPatternMismatchException":
        case "com.amazonaws.services.ssm#ParameterPatternMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParameterPatternMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PoliciesLimitExceededException":
        case "com.amazonaws.services.ssm#PoliciesLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PoliciesLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedParameterType":
        case "com.amazonaws.services.ssm#UnsupportedParameterType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedParameterTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterDefaultPatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterDefaultPatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterDefaultPatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterDefaultPatchBaselineCommand = deserializeAws_json1_1RegisterDefaultPatchBaselineCommand;
async function deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterPatchBaselineForPatchGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand;
async function deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.services.ssm#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.services.ssm#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterTargetWithMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand;
async function deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.services.ssm#IdempotentParameterMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.services.ssm#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterTaskWithMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand;
async function deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FeatureNotAvailableException":
        case "com.amazonaws.services.ssm#FeatureNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FeatureNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.services.ssm#IdempotentParameterMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.services.ssm#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsFromResourceResult" }, contents);
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
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceId":
        case "com.amazonaws.services.ssm#InvalidResourceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceType":
        case "com.amazonaws.services.ssm#InvalidResourceType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResetServiceSettingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetServiceSettingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetServiceSettingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResetServiceSettingCommand = deserializeAws_json1_1ResetServiceSettingCommand;
async function deserializeAws_json1_1ResetServiceSettingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.services.ssm#ServiceSettingNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResumeSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResumeSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResumeSessionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResumeSessionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResumeSessionCommand = deserializeAws_json1_1ResumeSessionCommand;
async function deserializeAws_json1_1ResumeSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SendAutomationSignalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendAutomationSignalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendAutomationSignalResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendAutomationSignalResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendAutomationSignalCommand = deserializeAws_json1_1SendAutomationSignalCommand;
async function deserializeAws_json1_1SendAutomationSignalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AutomationStepNotFoundException":
        case "com.amazonaws.services.ssm#AutomationStepNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationStepNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutomationSignalException":
        case "com.amazonaws.services.ssm#InvalidAutomationSignalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutomationSignalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SendCommandCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendCommandResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendCommandResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendCommandCommand = deserializeAws_json1_1SendCommandCommand;
async function deserializeAws_json1_1SendCommandCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.services.ssm#DuplicateInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNotificationConfig":
        case "com.amazonaws.services.ssm#InvalidNotificationConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNotificationConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOutputFolder":
        case "com.amazonaws.services.ssm#InvalidOutputFolder":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOutputFolderResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameters":
        case "com.amazonaws.services.ssm#InvalidParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRole":
        case "com.amazonaws.services.ssm#InvalidRole":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.services.ssm#MaxDocumentSizeExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedPlatformType":
        case "com.amazonaws.services.ssm#UnsupportedPlatformType":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartAssociationsOnceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAssociationsOnceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAssociationsOnceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAssociationsOnceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAssociationsOnceCommand = deserializeAws_json1_1StartAssociationsOnceCommand;
async function deserializeAws_json1_1StartAssociationsOnceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAssociation":
        case "com.amazonaws.services.ssm#InvalidAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartAutomationExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAutomationExecutionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAutomationExecutionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAutomationExecutionCommand = deserializeAws_json1_1StartAutomationExecutionCommand;
async function deserializeAws_json1_1StartAutomationExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AutomationDefinitionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationDefinitionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AutomationDefinitionVersionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationDefinitionVersionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AutomationExecutionLimitExceededException":
        case "com.amazonaws.services.ssm#AutomationExecutionLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatch":
        case "com.amazonaws.services.ssm#IdempotentParameterMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutomationExecutionParametersException":
        case "com.amazonaws.services.ssm#InvalidAutomationExecutionParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTarget":
        case "com.amazonaws.services.ssm#InvalidTarget":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSessionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartSessionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartSessionCommand = deserializeAws_json1_1StartSessionCommand;
async function deserializeAws_json1_1StartSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotConnected":
        case "com.amazonaws.services.ssm#TargetNotConnected":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotConnectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopAutomationExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAutomationExecutionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopAutomationExecutionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopAutomationExecutionCommand = deserializeAws_json1_1StopAutomationExecutionCommand;
async function deserializeAws_json1_1StopAutomationExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.services.ssm#AutomationExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutomationStatusUpdateException":
        case "com.amazonaws.services.ssm#InvalidAutomationStatusUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TerminateSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TerminateSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateSessionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TerminateSessionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TerminateSessionCommand = deserializeAws_json1_1TerminateSessionCommand;
async function deserializeAws_json1_1TerminateSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAssociationCommand = deserializeAws_json1_1UpdateAssociationCommand;
async function deserializeAws_json1_1UpdateAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssociationVersionLimitExceeded":
        case "com.amazonaws.services.ssm#AssociationVersionLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationVersionLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAssociationVersion":
        case "com.amazonaws.services.ssm#InvalidAssociationVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOutputLocation":
        case "com.amazonaws.services.ssm#InvalidOutputLocation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameters":
        case "com.amazonaws.services.ssm#InvalidParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSchedule":
        case "com.amazonaws.services.ssm#InvalidSchedule":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTarget":
        case "com.amazonaws.services.ssm#InvalidTarget":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUpdate":
        case "com.amazonaws.services.ssm#InvalidUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateAssociationStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAssociationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAssociationStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAssociationStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAssociationStatusCommand = deserializeAws_json1_1UpdateAssociationStatusCommand;
async function deserializeAws_json1_1UpdateAssociationStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.services.ssm#AssociationDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StatusUnchanged":
        case "com.amazonaws.services.ssm#StatusUnchanged":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StatusUnchangedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDocumentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDocumentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDocumentCommand = deserializeAws_json1_1UpdateDocumentCommand;
async function deserializeAws_json1_1UpdateDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DocumentVersionLimitExceeded":
        case "com.amazonaws.services.ssm#DocumentVersionLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentVersionLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateDocumentContent":
        case "com.amazonaws.services.ssm#DuplicateDocumentContent":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateDocumentContentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateDocumentVersionName":
        case "com.amazonaws.services.ssm#DuplicateDocumentVersionName":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateDocumentVersionNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentContent":
        case "com.amazonaws.services.ssm#InvalidDocumentContent":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentOperation":
        case "com.amazonaws.services.ssm#InvalidDocumentOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentSchemaVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.services.ssm#MaxDocumentSizeExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDocumentDefaultVersionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDocumentDefaultVersionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDocumentDefaultVersionCommand = deserializeAws_json1_1UpdateDocumentDefaultVersionCommand;
async function deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocument":
        case "com.amazonaws.services.ssm#InvalidDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentSchemaVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDocumentVersion":
        case "com.amazonaws.services.ssm#InvalidDocumentVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateMaintenanceWindowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMaintenanceWindowResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMaintenanceWindowCommand = deserializeAws_json1_1UpdateMaintenanceWindowCommand;
async function deserializeAws_json1_1UpdateMaintenanceWindowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowTargetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMaintenanceWindowTargetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand = deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand;
async function deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceWindowTaskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMaintenanceWindowTaskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand = deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand;
async function deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateManagedInstanceRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateManagedInstanceRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateManagedInstanceRoleResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateManagedInstanceRoleResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateManagedInstanceRoleCommand = deserializeAws_json1_1UpdateManagedInstanceRoleCommand;
async function deserializeAws_json1_1UpdateManagedInstanceRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceId":
        case "com.amazonaws.services.ssm#InvalidInstanceId":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateOpsItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateOpsItemResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateOpsItemResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateOpsItemCommand = deserializeAws_json1_1UpdateOpsItemCommand;
async function deserializeAws_json1_1UpdateOpsItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.services.ssm#OpsItemAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.services.ssm#OpsItemInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemLimitExceededException":
        case "com.amazonaws.services.ssm#OpsItemLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OpsItemNotFoundException":
        case "com.amazonaws.services.ssm#OpsItemNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdatePatchBaselineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePatchBaselineResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePatchBaselineResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePatchBaselineCommand = deserializeAws_json1_1UpdatePatchBaselineCommand;
async function deserializeAws_json1_1UpdatePatchBaselineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.services.ssm#DoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceDataSyncResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateResourceDataSyncResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateResourceDataSyncCommand = deserializeAws_json1_1UpdateResourceDataSyncCommand;
async function deserializeAws_json1_1UpdateResourceDataSyncCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncConflictException":
        case "com.amazonaws.services.ssm#ResourceDataSyncConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.services.ssm#ResourceDataSyncInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.services.ssm#ResourceDataSyncNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateServiceSettingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceSettingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceSettingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServiceSettingCommand = deserializeAws_json1_1UpdateServiceSettingCommand;
async function deserializeAws_json1_1UpdateServiceSettingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.services.ssm#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceSettingNotFound":
        case "com.amazonaws.services.ssm#ServiceSettingNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUpdates":
        case "com.amazonaws.services.ssm#TooManyUpdates":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociatedInstancesResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedInstances(body, context);
    const contents = Object.assign({ name: "AssociatedInstances", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociationAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationAlreadyExists(body, context);
    const contents = Object.assign({ name: "AssociationAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociationDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationDoesNotExist(body, context);
    const contents = Object.assign({ name: "AssociationDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociationExecutionDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationExecutionDoesNotExist(body, context);
    const contents = Object.assign({ name: "AssociationExecutionDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationLimitExceeded(body, context);
    const contents = Object.assign({ name: "AssociationLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssociationVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociationVersionLimitExceeded(body, context);
    const contents = Object.assign({ name: "AssociationVersionLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationDefinitionNotFoundException(body, context);
    const contents = Object.assign({ name: "AutomationDefinitionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationDefinitionVersionNotFoundException(body, context);
    const contents = Object.assign({ name: "AutomationDefinitionVersionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationExecutionLimitExceededException(body, context);
    const contents = Object.assign({ name: "AutomationExecutionLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationExecutionNotFoundException(body, context);
    const contents = Object.assign({ name: "AutomationExecutionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AutomationStepNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AutomationStepNotFoundException(body, context);
    const contents = Object.assign({ name: "AutomationStepNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ComplianceTypeCountLimitExceededException(body, context);
    const contents = Object.assign({ name: "ComplianceTypeCountLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomSchemaCountLimitExceededException(body, context);
    const contents = Object.assign({ name: "CustomSchemaCountLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DocumentAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentAlreadyExists(body, context);
    const contents = Object.assign({ name: "DocumentAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DocumentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentLimitExceeded(body, context);
    const contents = Object.assign({ name: "DocumentLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DocumentPermissionLimitResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentPermissionLimit(body, context);
    const contents = Object.assign({ name: "DocumentPermissionLimit", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DocumentVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentVersionLimitExceeded(body, context);
    const contents = Object.assign({ name: "DocumentVersionLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DoesNotExistException(body, context);
    const contents = Object.assign({ name: "DoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentContentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateDocumentContent(body, context);
    const contents = Object.assign({ name: "DuplicateDocumentContent", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentVersionNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateDocumentVersionName(body, context);
    const contents = Object.assign({ name: "DuplicateDocumentVersionName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateInstanceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateInstanceId(body, context);
    const contents = Object.assign({ name: "DuplicateInstanceId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FeatureNotAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FeatureNotAvailableException(body, context);
    const contents = Object.assign({ name: "FeatureNotAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HierarchyLevelLimitExceededException(body, context);
    const contents = Object.assign({ name: "HierarchyLevelLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HierarchyTypeMismatchException(body, context);
    const contents = Object.assign({ name: "HierarchyTypeMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatch(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatch", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncompatiblePolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatiblePolicyException(body, context);
    const contents = Object.assign({ name: "IncompatiblePolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidActivationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActivation(body, context);
    const contents = Object.assign({ name: "InvalidActivation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidActivationIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActivationId(body, context);
    const contents = Object.assign({ name: "InvalidActivationId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAggregatorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAggregatorException(body, context);
    const contents = Object.assign({ name: "InvalidAggregatorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAllowedPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAllowedPatternException(body, context);
    const contents = Object.assign({ name: "InvalidAllowedPatternException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAssociationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAssociation(body, context);
    const contents = Object.assign({ name: "InvalidAssociation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAssociationVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAssociationVersion(body, context);
    const contents = Object.assign({ name: "InvalidAssociationVersion", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationExecutionParametersException(body, context);
    const contents = Object.assign({ name: "InvalidAutomationExecutionParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAutomationSignalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationSignalException(body, context);
    const contents = Object.assign({ name: "InvalidAutomationSignalException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutomationStatusUpdateException(body, context);
    const contents = Object.assign({ name: "InvalidAutomationStatusUpdateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCommandIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommandId(body, context);
    const contents = Object.assign({ name: "InvalidCommandId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeleteInventoryParametersException(body, context);
    const contents = Object.assign({ name: "InvalidDeleteInventoryParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeletionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeletionIdException(body, context);
    const contents = Object.assign({ name: "InvalidDeletionIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocument(body, context);
    const contents = Object.assign({ name: "InvalidDocument", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentContentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentContent(body, context);
    const contents = Object.assign({ name: "InvalidDocumentContent", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentOperation(body, context);
    const contents = Object.assign({ name: "InvalidDocumentOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentSchemaVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentSchemaVersion(body, context);
    const contents = Object.assign({ name: "InvalidDocumentSchemaVersion", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentType(body, context);
    const contents = Object.assign({ name: "InvalidDocumentType", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDocumentVersionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDocumentVersion(body, context);
    const contents = Object.assign({ name: "InvalidDocumentVersion", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilter(body, context);
    const contents = Object.assign({ name: "InvalidFilter", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterKeyResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterKey(body, context);
    const contents = Object.assign({ name: "InvalidFilterKey", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterOptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterOption(body, context);
    const contents = Object.assign({ name: "InvalidFilterOption", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterValueResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterValue(body, context);
    const contents = Object.assign({ name: "InvalidFilterValue", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInstanceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceId(body, context);
    const contents = Object.assign({ name: "InvalidInstanceId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceInformationFilterValue(body, context);
    const contents = Object.assign({ name: "InvalidInstanceInformationFilterValue", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInventoryGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryGroupException(body, context);
    const contents = Object.assign({ name: "InvalidInventoryGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryItemContextException(body, context);
    const contents = Object.assign({ name: "InvalidInventoryItemContextException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInventoryRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInventoryRequestException(body, context);
    const contents = Object.assign({ name: "InvalidInventoryRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidItemContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidItemContentException(body, context);
    const contents = Object.assign({ name: "InvalidItemContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidKeyIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyId(body, context);
    const contents = Object.assign({ name: "InvalidKeyId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextToken(body, context);
    const contents = Object.assign({ name: "InvalidNextToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNotificationConfigResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNotificationConfig(body, context);
    const contents = Object.assign({ name: "InvalidNotificationConfig", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOptionException(body, context);
    const contents = Object.assign({ name: "InvalidOptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOutputFolderResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOutputFolder(body, context);
    const contents = Object.assign({ name: "InvalidOutputFolder", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOutputLocationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOutputLocation(body, context);
    const contents = Object.assign({ name: "InvalidOutputLocation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParametersResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameters(body, context);
    const contents = Object.assign({ name: "InvalidParameters", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPermissionTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPermissionType(body, context);
    const contents = Object.assign({ name: "InvalidPermissionType", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPluginNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPluginName(body, context);
    const contents = Object.assign({ name: "InvalidPluginName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyAttributeException(body, context);
    const contents = Object.assign({ name: "InvalidPolicyAttributeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPolicyTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyTypeException(body, context);
    const contents = Object.assign({ name: "InvalidPolicyTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceId(body, context);
    const contents = Object.assign({ name: "InvalidResourceId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceType(body, context);
    const contents = Object.assign({ name: "InvalidResourceType", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResultAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResultAttributeException(body, context);
    const contents = Object.assign({ name: "InvalidResultAttributeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRoleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRole(body, context);
    const contents = Object.assign({ name: "InvalidRole", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidScheduleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSchedule(body, context);
    const contents = Object.assign({ name: "InvalidSchedule", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTarget(body, context);
    const contents = Object.assign({ name: "InvalidTarget", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTypeNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTypeNameException(body, context);
    const contents = Object.assign({ name: "InvalidTypeNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidUpdateResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUpdate(body, context);
    const contents = Object.assign({ name: "InvalidUpdate", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvocationDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvocationDoesNotExist(body, context);
    const contents = Object.assign({ name: "InvocationDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ItemContentMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ItemContentMismatchException(body, context);
    const contents = Object.assign({ name: "ItemContentMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ItemSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "ItemSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaxDocumentSizeExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxDocumentSizeExceeded(body, context);
    const contents = Object.assign({ name: "MaxDocumentSizeExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "OpsItemAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemInvalidParameterException(body, context);
    const contents = Object.assign({ name: "OpsItemInvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OpsItemLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemLimitExceededException(body, context);
    const contents = Object.assign({ name: "OpsItemLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OpsItemNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OpsItemNotFoundException(body, context);
    const contents = Object.assign({ name: "OpsItemNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterAlreadyExists(body, context);
    const contents = Object.assign({ name: "ParameterAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterLimitExceeded(body, context);
    const contents = Object.assign({ name: "ParameterLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterMaxVersionLimitExceeded(body, context);
    const contents = Object.assign({ name: "ParameterMaxVersionLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterNotFound(body, context);
    const contents = Object.assign({ name: "ParameterNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterPatternMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterPatternMismatchException(body, context);
    const contents = Object.assign({ name: "ParameterPatternMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterVersionLabelLimitExceeded(body, context);
    const contents = Object.assign({ name: "ParameterVersionLabelLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParameterVersionNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParameterVersionNotFound(body, context);
    const contents = Object.assign({ name: "ParameterVersionNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PoliciesLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PoliciesLimitExceededException(body, context);
    const contents = Object.assign({ name: "PoliciesLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceDataSyncAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncConflictException(body, context);
    const contents = Object.assign({ name: "ResourceDataSyncConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncCountExceededException(body, context);
    const contents = Object.assign({ name: "ResourceDataSyncCountExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException(body, context);
    const contents = Object.assign({ name: "ResourceDataSyncInvalidConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDataSyncNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceDataSyncNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceSettingNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceSettingNotFound(body, context);
    const contents = Object.assign({ name: "ServiceSettingNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1StatusUnchangedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StatusUnchanged(body, context);
    const contents = Object.assign({ name: "StatusUnchanged", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubTypeCountLimitExceededException(body, context);
    const contents = Object.assign({ name: "SubTypeCountLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetInUseException(body, context);
    const contents = Object.assign({ name: "TargetInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetNotConnectedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotConnected(body, context);
    const contents = Object.assign({ name: "TargetNotConnected", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsError(body, context);
    const contents = Object.assign({ name: "TooManyTagsError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyUpdatesResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyUpdates(body, context);
    const contents = Object.assign({ name: "TooManyUpdates", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TotalSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "TotalSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedCalendarExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedCalendarException(body, context);
    const contents = Object.assign({ name: "UnsupportedCalendarException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureRequiredException(body, context);
    const contents = Object.assign({ name: "UnsupportedFeatureRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedInventoryItemContextException(body, context);
    const contents = Object.assign({ name: "UnsupportedInventoryItemContextException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedInventorySchemaVersionException(body, context);
    const contents = Object.assign({ name: "UnsupportedInventorySchemaVersionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperatingSystemResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperatingSystem(body, context);
    const contents = Object.assign({ name: "UnsupportedOperatingSystem", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedParameterTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedParameterType(body, context);
    const contents = Object.assign({ name: "UnsupportedParameterType", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedPlatformTypeResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedPlatformType(body, context);
    const contents = Object.assign({ name: "UnsupportedPlatformType", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AccountIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Accounts = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssociationExecutionFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociationExecutionFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AssociationExecutionFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AssociationExecutionTargetsFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociationExecutionTargetsFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AssociationExecutionTargetsFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AssociationFilter = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociationFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AssociationFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AssociationIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssociationStatus = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalInfo !== undefined) {
        bodyParams["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.Date !== undefined) {
        bodyParams["Date"] = Math.round(input.Date.getTime() / 1000);
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = input.Message;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachmentsSource = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1AttachmentsSourceValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AttachmentsSourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AttachmentsSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AttachmentsSourceValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AutomationExecutionFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1AutomationExecutionFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AutomationExecutionFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AutomationExecutionFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AutomationExecutionFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AutomationParameterMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1AutomationParameterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1AutomationParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CalendarNameOrARNList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CancelCommandRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommandId !== undefined) {
        bodyParams["CommandId"] = input.CommandId;
    }
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1InstanceIdList(input.InstanceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CancelMaintenanceWindowExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogGroupName !== undefined) {
        bodyParams["CloudWatchLogGroupName"] = input.CloudWatchLogGroupName;
    }
    if (input.CloudWatchOutputEnabled !== undefined) {
        bodyParams["CloudWatchOutputEnabled"] = input.CloudWatchOutputEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1CommandFilter = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1CommandFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CommandFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ComplianceExecutionSummary = (input, context) => {
    const bodyParams = {};
    if (input.ExecutionId !== undefined) {
        bodyParams["ExecutionId"] = input.ExecutionId;
    }
    if (input.ExecutionTime !== undefined) {
        bodyParams["ExecutionTime"] = Math.round(input.ExecutionTime.getTime() / 1000);
    }
    if (input.ExecutionType !== undefined) {
        bodyParams["ExecutionType"] = input.ExecutionType;
    }
    return bodyParams;
};
const serializeAws_json1_1ComplianceItemDetails = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ComplianceItemEntry = (input, context) => {
    const bodyParams = {};
    if (input.Details !== undefined) {
        bodyParams["Details"] = serializeAws_json1_1ComplianceItemDetails(input.Details, context);
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Severity !== undefined) {
        bodyParams["Severity"] = input.Severity;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1ComplianceItemEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ComplianceItemEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ComplianceResourceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ComplianceResourceTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ComplianceStringFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ComplianceStringFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ComplianceStringFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ComplianceStringFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ComplianceStringFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateActivationRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultInstanceName !== undefined) {
        bodyParams["DefaultInstanceName"] = input.DefaultInstanceName;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ExpirationDate !== undefined) {
        bodyParams["ExpirationDate"] = Math.round(input.ExpirationDate.getTime() / 1000);
    }
    if (input.IamRole !== undefined) {
        bodyParams["IamRole"] = input.IamRole;
    }
    if (input.RegistrationLimit !== undefined) {
        bodyParams["RegistrationLimit"] = input.RegistrationLimit;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAssociationBatchRequest = (input, context) => {
    const bodyParams = {};
    if (input.Entries !== undefined) {
        bodyParams["Entries"] = serializeAws_json1_1CreateAssociationBatchRequestEntries(input.Entries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAssociationBatchRequestEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CreateAssociationBatchRequestEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateAssociationBatchRequestEntry = (input, context) => {
    const bodyParams = {};
    if (input.AssociationName !== undefined) {
        bodyParams["AssociationName"] = input.AssociationName;
    }
    if (input.AutomationTargetParameterName !== undefined) {
        bodyParams["AutomationTargetParameterName"] =
            input.AutomationTargetParameterName;
    }
    if (input.ComplianceSeverity !== undefined) {
        bodyParams["ComplianceSeverity"] = input.ComplianceSeverity;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OutputLocation !== undefined) {
        bodyParams["OutputLocation"] = serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1Parameters(input.Parameters, context);
    }
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationName !== undefined) {
        bodyParams["AssociationName"] = input.AssociationName;
    }
    if (input.AutomationTargetParameterName !== undefined) {
        bodyParams["AutomationTargetParameterName"] =
            input.AutomationTargetParameterName;
    }
    if (input.ComplianceSeverity !== undefined) {
        bodyParams["ComplianceSeverity"] = input.ComplianceSeverity;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OutputLocation !== undefined) {
        bodyParams["OutputLocation"] = serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1Parameters(input.Parameters, context);
    }
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attachments !== undefined) {
        bodyParams["Attachments"] = serializeAws_json1_1AttachmentsSourceList(input.Attachments, context);
    }
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    if (input.DocumentFormat !== undefined) {
        bodyParams["DocumentFormat"] = input.DocumentFormat;
    }
    if (input.DocumentType !== undefined) {
        bodyParams["DocumentType"] = input.DocumentType;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Requires !== undefined) {
        bodyParams["Requires"] = serializeAws_json1_1DocumentRequiresList(input.Requires, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TargetType !== undefined) {
        bodyParams["TargetType"] = input.TargetType;
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowUnassociatedTargets !== undefined) {
        bodyParams["AllowUnassociatedTargets"] = input.AllowUnassociatedTargets;
    }
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.Cutoff !== undefined) {
        bodyParams["Cutoff"] = input.Cutoff;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Duration !== undefined) {
        bodyParams["Duration"] = input.Duration;
    }
    if (input.EndDate !== undefined) {
        bodyParams["EndDate"] = input.EndDate;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.ScheduleTimezone !== undefined) {
        bodyParams["ScheduleTimezone"] = input.ScheduleTimezone;
    }
    if (input.StartDate !== undefined) {
        bodyParams["StartDate"] = input.StartDate;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateOpsItemRequest = (input, context) => {
    const bodyParams = {};
    if (input.Category !== undefined) {
        bodyParams["Category"] = input.Category;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Notifications !== undefined) {
        bodyParams["Notifications"] = serializeAws_json1_1OpsItemNotifications(input.Notifications, context);
    }
    if (input.OperationalData !== undefined) {
        bodyParams["OperationalData"] = serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context);
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.RelatedOpsItems !== undefined) {
        bodyParams["RelatedOpsItems"] = serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context);
    }
    if (input.Severity !== undefined) {
        bodyParams["Severity"] = input.Severity;
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApprovalRules !== undefined) {
        bodyParams["ApprovalRules"] = serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context);
    }
    if (input.ApprovedPatches !== undefined) {
        bodyParams["ApprovedPatches"] = serializeAws_json1_1PatchIdList(input.ApprovedPatches, context);
    }
    if (input.ApprovedPatchesComplianceLevel !== undefined) {
        bodyParams["ApprovedPatchesComplianceLevel"] =
            input.ApprovedPatchesComplianceLevel;
    }
    if (input.ApprovedPatchesEnableNonSecurity !== undefined) {
        bodyParams["ApprovedPatchesEnableNonSecurity"] =
            input.ApprovedPatchesEnableNonSecurity;
    }
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GlobalFilters !== undefined) {
        bodyParams["GlobalFilters"] = serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OperatingSystem !== undefined) {
        bodyParams["OperatingSystem"] = input.OperatingSystem;
    }
    if (input.RejectedPatches !== undefined) {
        bodyParams["RejectedPatches"] = serializeAws_json1_1PatchIdList(input.RejectedPatches, context);
    }
    if (input.RejectedPatchesAction !== undefined) {
        bodyParams["RejectedPatchesAction"] = input.RejectedPatchesAction;
    }
    if (input.Sources !== undefined) {
        bodyParams["Sources"] = serializeAws_json1_1PatchSourceList(input.Sources, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResourceDataSyncRequest = (input, context) => {
    const bodyParams = {};
    if (input.S3Destination !== undefined) {
        bodyParams["S3Destination"] = serializeAws_json1_1ResourceDataSyncS3Destination(input.S3Destination, context);
    }
    if (input.SyncName !== undefined) {
        bodyParams["SyncName"] = input.SyncName;
    }
    if (input.SyncSource !== undefined) {
        bodyParams["SyncSource"] = serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context);
    }
    if (input.SyncType !== undefined) {
        bodyParams["SyncType"] = input.SyncType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteActivationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ActivationId !== undefined) {
        bodyParams["ActivationId"] = input.ActivationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Force !== undefined) {
        bodyParams["Force"] = input.Force;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInventoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.SchemaDeleteOption !== undefined) {
        bodyParams["SchemaDeleteOption"] = input.SchemaDeleteOption;
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1ParameterNameList(input.Names, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourceDataSyncRequest = (input, context) => {
    const bodyParams = {};
    if (input.SyncName !== undefined) {
        bodyParams["SyncName"] = input.SyncName;
    }
    if (input.SyncType !== undefined) {
        bodyParams["SyncType"] = input.SyncType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterManagedInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    if (input.PatchGroup !== undefined) {
        bodyParams["PatchGroup"] = input.PatchGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.Safe !== undefined) {
        bodyParams["Safe"] = input.Safe;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    if (input.WindowTargetId !== undefined) {
        bodyParams["WindowTargetId"] = input.WindowTargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    if (input.WindowTaskId !== undefined) {
        bodyParams["WindowTaskId"] = input.WindowTaskId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeActivationsFilter = (input, context) => {
    const bodyParams = {};
    if (input.FilterKey !== undefined) {
        bodyParams["FilterKey"] = input.FilterKey;
    }
    if (input.FilterValues !== undefined) {
        bodyParams["FilterValues"] = serializeAws_json1_1StringList(input.FilterValues, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeActivationsFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DescribeActivationsFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DescribeActivationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1DescribeActivationsFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssociationExecutionTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.ExecutionId !== undefined) {
        bodyParams["ExecutionId"] = input.ExecutionId;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1AssociationExecutionTargetsFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssociationExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1AssociationExecutionFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.AssociationVersion !== undefined) {
        bodyParams["AssociationVersion"] = input.AssociationVersion;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAutomationExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1AutomationExecutionFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAutomationStepExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutomationExecutionId !== undefined) {
        bodyParams["AutomationExecutionId"] = input.AutomationExecutionId;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1StepExecutionFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ReverseOrder !== undefined) {
        bodyParams["ReverseOrder"] = input.ReverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAvailablePatchesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDocumentPermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PermissionType !== undefined) {
        bodyParams["PermissionType"] = input.PermissionType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstanceAssociationsStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstanceInformationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InstanceInformationStringFilterList(input.Filters, context);
    }
    if (input.InstanceInformationFilterList !== undefined) {
        bodyParams["InstanceInformationFilterList"] = serializeAws_json1_1InstanceInformationFilterList(input.InstanceInformationFilterList, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InstancePatchStateFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PatchGroup !== undefined) {
        bodyParams["PatchGroup"] = input.PatchGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstancePatchStatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1InstanceIdList(input.InstanceIds, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstancePatchesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInventoryDeletionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeletionId !== undefined) {
        bodyParams["DeletionId"] = input.DeletionId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TaskId !== undefined) {
        bodyParams["TaskId"] = input.TaskId;
    }
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceWindowsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOpsItemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OpsItemFilters !== undefined) {
        bodyParams["OpsItemFilters"] = serializeAws_json1_1OpsItemFilters(input.OpsItemFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ParametersFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParameterFilters !== undefined) {
        bodyParams["ParameterFilters"] = serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePatchBaselinesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePatchGroupStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.PatchGroup !== undefined) {
        bodyParams["PatchGroup"] = input.PatchGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePatchGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePatchPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OperatingSystem !== undefined) {
        bodyParams["OperatingSystem"] = input.OperatingSystem;
    }
    if (input.PatchSet !== undefined) {
        bodyParams["PatchSet"] = input.PatchSet;
    }
    if (input.Property !== undefined) {
        bodyParams["Property"] = input.Property;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSessionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1SessionFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentFilter = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DocumentFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DocumentKeyValuesFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1DocumentKeyValuesFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentKeyValuesFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DocumentKeyValuesFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DocumentKeyValuesFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DocumentRequires = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentRequiresList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DocumentRequires(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetAutomationExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutomationExecutionId !== undefined) {
        bodyParams["AutomationExecutionId"] = input.AutomationExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCalendarStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.AtTime !== undefined) {
        bodyParams["AtTime"] = input.AtTime;
    }
    if (input.CalendarNames !== undefined) {
        bodyParams["CalendarNames"] = serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetCommandInvocationRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommandId !== undefined) {
        bodyParams["CommandId"] = input.CommandId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.PluginName !== undefined) {
        bodyParams["PluginName"] = input.PluginName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConnectionStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Target !== undefined) {
        bodyParams["Target"] = input.Target;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDefaultPatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.OperatingSystem !== undefined) {
        bodyParams["OperatingSystem"] = input.OperatingSystem;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.SnapshotId !== undefined) {
        bodyParams["SnapshotId"] = input.SnapshotId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentFormat !== undefined) {
        bodyParams["DocumentFormat"] = input.DocumentFormat;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInventoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.Aggregators !== undefined) {
        bodyParams["Aggregators"] = serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InventoryFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResultAttributes !== undefined) {
        bodyParams["ResultAttributes"] = serializeAws_json1_1ResultAttributeList(input.ResultAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetInventorySchemaRequest = (input, context) => {
    const bodyParams = {};
    if (input.Aggregator !== undefined) {
        bodyParams["Aggregator"] = input.Aggregator;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SubType !== undefined) {
        bodyParams["SubType"] = input.SubType;
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMaintenanceWindowExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest = (input, context) => {
    const bodyParams = {};
    if (input.InvocationId !== undefined) {
        bodyParams["InvocationId"] = input.InvocationId;
    }
    if (input.TaskId !== undefined) {
        bodyParams["TaskId"] = input.TaskId;
    }
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskId !== undefined) {
        bodyParams["TaskId"] = input.TaskId;
    }
    if (input.WindowExecutionId !== undefined) {
        bodyParams["WindowExecutionId"] = input.WindowExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMaintenanceWindowTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    if (input.WindowTaskId !== undefined) {
        bodyParams["WindowTaskId"] = input.WindowTaskId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOpsItemRequest = (input, context) => {
    const bodyParams = {};
    if (input.OpsItemId !== undefined) {
        bodyParams["OpsItemId"] = input.OpsItemId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOpsSummaryRequest = (input, context) => {
    const bodyParams = {};
    if (input.Aggregators !== undefined) {
        bodyParams["Aggregators"] = serializeAws_json1_1OpsAggregatorList(input.Aggregators, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1OpsFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResultAttributes !== undefined) {
        bodyParams["ResultAttributes"] = serializeAws_json1_1OpsResultAttributeList(input.ResultAttributes, context);
    }
    if (input.SyncName !== undefined) {
        bodyParams["SyncName"] = input.SyncName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetParameterHistoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WithDecryption !== undefined) {
        bodyParams["WithDecryption"] = input.WithDecryption;
    }
    return bodyParams;
};
const serializeAws_json1_1GetParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.WithDecryption !== undefined) {
        bodyParams["WithDecryption"] = input.WithDecryption;
    }
    return bodyParams;
};
const serializeAws_json1_1GetParametersByPathRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ParameterFilters !== undefined) {
        bodyParams["ParameterFilters"] = serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context);
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    if (input.Recursive !== undefined) {
        bodyParams["Recursive"] = input.Recursive;
    }
    if (input.WithDecryption !== undefined) {
        bodyParams["WithDecryption"] = input.WithDecryption;
    }
    return bodyParams;
};
const serializeAws_json1_1GetParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1ParameterNameList(input.Names, context);
    }
    if (input.WithDecryption !== undefined) {
        bodyParams["WithDecryption"] = input.WithDecryption;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPatchBaselineForPatchGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.OperatingSystem !== undefined) {
        bodyParams["OperatingSystem"] = input.OperatingSystem;
    }
    if (input.PatchGroup !== undefined) {
        bodyParams["PatchGroup"] = input.PatchGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServiceSettingRequest = (input, context) => {
    const bodyParams = {};
    if (input.SettingId !== undefined) {
        bodyParams["SettingId"] = input.SettingId;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceAssociationOutputLocation = (input, context) => {
    const bodyParams = {};
    if (input.S3Location !== undefined) {
        bodyParams["S3Location"] = serializeAws_json1_1S3OutputLocation(input.S3Location, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceInformationFilter = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.valueSet !== undefined) {
        bodyParams["valueSet"] = serializeAws_json1_1InstanceInformationFilterValueSet(input.valueSet, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceInformationFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceInformationFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstanceInformationFilterValueSet = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceInformationStringFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1InstanceInformationFilterValueSet(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceInformationStringFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceInformationStringFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstancePatchStateFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1InstancePatchStateFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InstancePatchStateFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstancePatchStateFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InstancePatchStateFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InventoryAggregator = (input, context) => {
    const bodyParams = {};
    if (input.Aggregators !== undefined) {
        bodyParams["Aggregators"] = serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context);
    }
    if (input.Expression !== undefined) {
        bodyParams["Expression"] = input.Expression;
    }
    if (input.Groups !== undefined) {
        bodyParams["Groups"] = serializeAws_json1_1InventoryGroupList(input.Groups, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InventoryAggregatorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryAggregator(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InventoryFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1InventoryFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InventoryFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InventoryFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InventoryGroup = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InventoryFilterList(input.Filters, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1InventoryGroupList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryGroup(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InventoryItem = (input, context) => {
    const bodyParams = {};
    if (input.CaptureTime !== undefined) {
        bodyParams["CaptureTime"] = input.CaptureTime;
    }
    if (input.Content !== undefined) {
        bodyParams["Content"] = serializeAws_json1_1InventoryItemEntryList(input.Content, context);
    }
    if (input.ContentHash !== undefined) {
        bodyParams["ContentHash"] = input.ContentHash;
    }
    if (input.Context !== undefined) {
        bodyParams["Context"] = serializeAws_json1_1InventoryItemContentContext(input.Context, context);
    }
    if (input.SchemaVersion !== undefined) {
        bodyParams["SchemaVersion"] = input.SchemaVersion;
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1InventoryItemContentContext = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1InventoryItemEntry = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1InventoryItemEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryItemEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InventoryItemList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_1KeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1LabelParameterVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Labels !== undefined) {
        bodyParams["Labels"] = serializeAws_json1_1ParameterLabelList(input.Labels, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ParameterVersion !== undefined) {
        bodyParams["ParameterVersion"] = input.ParameterVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssociationVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssociationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationFilterList !== undefined) {
        bodyParams["AssociationFilterList"] = serializeAws_json1_1AssociationFilterList(input.AssociationFilterList, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCommandInvocationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommandId !== undefined) {
        bodyParams["CommandId"] = input.CommandId;
    }
    if (input.Details !== undefined) {
        bodyParams["Details"] = input.Details;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1CommandFilterList(input.Filters, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCommandsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommandId !== undefined) {
        bodyParams["CommandId"] = input.CommandId;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1CommandFilterList(input.Filters, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListComplianceItemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ComplianceStringFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceIds !== undefined) {
        bodyParams["ResourceIds"] = serializeAws_json1_1ComplianceResourceIdList(input.ResourceIds, context);
    }
    if (input.ResourceTypes !== undefined) {
        bodyParams["ResourceTypes"] = serializeAws_json1_1ComplianceResourceTypeList(input.ResourceTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListComplianceSummariesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ComplianceStringFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDocumentVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDocumentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentFilterList !== undefined) {
        bodyParams["DocumentFilterList"] = serializeAws_json1_1DocumentFilterList(input.DocumentFilterList, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1DocumentKeyValuesFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListInventoryEntriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InventoryFilterList(input.Filters, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceComplianceSummariesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ComplianceStringFilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceDataSyncRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SyncType !== undefined) {
        bodyParams["SyncType"] = input.SyncType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1LoggingInfo = (input, context) => {
    const bodyParams = {};
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    if (input.S3Region !== undefined) {
        bodyParams["S3Region"] = input.S3Region;
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowAutomationParameters = (input, context) => {
    const bodyParams = {};
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1AutomationParameterMap(input.Parameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1MaintenanceWindowFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MaintenanceWindowFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MaintenanceWindowFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MaintenanceWindowLambdaParameters = (input, context) => {
    const bodyParams = {};
    if (input.ClientContext !== undefined) {
        bodyParams["ClientContext"] = input.ClientContext;
    }
    if (input.Payload !== undefined) {
        bodyParams["Payload"] = Buffer.from(input.Payload).toString("utf-8");
    }
    if (input.Qualifier !== undefined) {
        bodyParams["Qualifier"] = input.Qualifier;
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowRunCommandParameters = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchOutputConfig !== undefined) {
        bodyParams["CloudWatchOutputConfig"] = serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context);
    }
    if (input.Comment !== undefined) {
        bodyParams["Comment"] = input.Comment;
    }
    if (input.DocumentHash !== undefined) {
        bodyParams["DocumentHash"] = input.DocumentHash;
    }
    if (input.DocumentHashType !== undefined) {
        bodyParams["DocumentHashType"] = input.DocumentHashType;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.NotificationConfig !== undefined) {
        bodyParams["NotificationConfig"] = serializeAws_json1_1NotificationConfig(input.NotificationConfig, context);
    }
    if (input.OutputS3BucketName !== undefined) {
        bodyParams["OutputS3BucketName"] = input.OutputS3BucketName;
    }
    if (input.OutputS3KeyPrefix !== undefined) {
        bodyParams["OutputS3KeyPrefix"] = input.OutputS3KeyPrefix;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1Parameters(input.Parameters, context);
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.TimeoutSeconds !== undefined) {
        bodyParams["TimeoutSeconds"] = input.TimeoutSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (input, context) => {
    const bodyParams = {};
    if (input.Input !== undefined) {
        bodyParams["Input"] = input.Input;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (input, context) => {
    const bodyParams = {};
    if (input.Automation !== undefined) {
        bodyParams["Automation"] = serializeAws_json1_1MaintenanceWindowAutomationParameters(input.Automation, context);
    }
    if (input.Lambda !== undefined) {
        bodyParams["Lambda"] = serializeAws_json1_1MaintenanceWindowLambdaParameters(input.Lambda, context);
    }
    if (input.RunCommand !== undefined) {
        bodyParams["RunCommand"] = serializeAws_json1_1MaintenanceWindowRunCommandParameters(input.RunCommand, context);
    }
    if (input.StepFunctions !== undefined) {
        bodyParams["StepFunctions"] = serializeAws_json1_1MaintenanceWindowStepFunctionsParameters(input.StepFunctions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (input, context) => {
    const bodyParams = {};
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1MaintenanceWindowTaskParameterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MaintenanceWindowTaskParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MaintenanceWindowTaskParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ModifyDocumentPermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountIdsToAdd !== undefined) {
        bodyParams["AccountIdsToAdd"] = serializeAws_json1_1AccountIdList(input.AccountIdsToAdd, context);
    }
    if (input.AccountIdsToRemove !== undefined) {
        bodyParams["AccountIdsToRemove"] = serializeAws_json1_1AccountIdList(input.AccountIdsToRemove, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PermissionType !== undefined) {
        bodyParams["PermissionType"] = input.PermissionType;
    }
    if (input.SharedDocumentVersion !== undefined) {
        bodyParams["SharedDocumentVersion"] = input.SharedDocumentVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationConfig = (input, context) => {
    const bodyParams = {};
    if (input.NotificationArn !== undefined) {
        bodyParams["NotificationArn"] = input.NotificationArn;
    }
    if (input.NotificationEvents !== undefined) {
        bodyParams["NotificationEvents"] = serializeAws_json1_1NotificationEventList(input.NotificationEvents, context);
    }
    if (input.NotificationType !== undefined) {
        bodyParams["NotificationType"] = input.NotificationType;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationEventList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OpsAggregator = (input, context) => {
    const bodyParams = {};
    if (input.AggregatorType !== undefined) {
        bodyParams["AggregatorType"] = input.AggregatorType;
    }
    if (input.Aggregators !== undefined) {
        bodyParams["Aggregators"] = serializeAws_json1_1OpsAggregatorList(input.Aggregators, context);
    }
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1OpsFilterList(input.Filters, context);
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1OpsAggregatorValueMap(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OpsAggregatorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OpsAggregator(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OpsAggregatorValueMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1OpsFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1OpsFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OpsFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OpsFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OpsFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OpsItemDataValue = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1OpsItemFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Operator !== undefined) {
        bodyParams["Operator"] = input.Operator;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1OpsItemFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OpsItemFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OpsItemFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OpsItemFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OpsItemNotification = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    return bodyParams;
};
const serializeAws_json1_1OpsItemNotifications = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OpsItemNotification(entry, context));
    }
    return contents;
};
const serializeAws_json1_1OpsItemOperationalData = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1OpsItemDataValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1OpsItemOpsDataKeysList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OpsResultAttribute = (input, context) => {
    const bodyParams = {};
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1OpsResultAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OpsResultAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParameterLabelList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParameterNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParameterStringFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Option !== undefined) {
        bodyParams["Option"] = input.Option;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ParameterStringFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterStringFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterStringFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParameterStringFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Parameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ParameterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ParametersFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ParametersFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParametersFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParametersFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParametersFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PatchFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1PatchFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchFilterGroup = (input, context) => {
    const bodyParams = {};
    if (input.PatchFilters !== undefined) {
        bodyParams["PatchFilters"] = serializeAws_json1_1PatchFilterList(input.PatchFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PatchFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PatchFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PatchIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PatchOrchestratorFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1PatchOrchestratorFilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchOrchestratorFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PatchOrchestratorFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PatchOrchestratorFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PatchRule = (input, context) => {
    const bodyParams = {};
    if (input.ApproveAfterDays !== undefined) {
        bodyParams["ApproveAfterDays"] = input.ApproveAfterDays;
    }
    if (input.ComplianceLevel !== undefined) {
        bodyParams["ComplianceLevel"] = input.ComplianceLevel;
    }
    if (input.EnableNonSecurity !== undefined) {
        bodyParams["EnableNonSecurity"] = input.EnableNonSecurity;
    }
    if (input.PatchFilterGroup !== undefined) {
        bodyParams["PatchFilterGroup"] = serializeAws_json1_1PatchFilterGroup(input.PatchFilterGroup, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchRuleGroup = (input, context) => {
    const bodyParams = {};
    if (input.PatchRules !== undefined) {
        bodyParams["PatchRules"] = serializeAws_json1_1PatchRuleList(input.PatchRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchRuleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PatchRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PatchSource = (input, context) => {
    const bodyParams = {};
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = input.Configuration;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Products !== undefined) {
        bodyParams["Products"] = serializeAws_json1_1PatchSourceProductList(input.Products, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PatchSourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PatchSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PatchSourceProductList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PutComplianceItemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComplianceType !== undefined) {
        bodyParams["ComplianceType"] = input.ComplianceType;
    }
    if (input.ExecutionSummary !== undefined) {
        bodyParams["ExecutionSummary"] = serializeAws_json1_1ComplianceExecutionSummary(input.ExecutionSummary, context);
    }
    if (input.ItemContentHash !== undefined) {
        bodyParams["ItemContentHash"] = input.ItemContentHash;
    }
    if (input.Items !== undefined) {
        bodyParams["Items"] = serializeAws_json1_1ComplianceItemEntryList(input.Items, context);
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1PutInventoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Items !== undefined) {
        bodyParams["Items"] = serializeAws_json1_1InventoryItemList(input.Items, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowedPattern !== undefined) {
        bodyParams["AllowedPattern"] = input.AllowedPattern;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Overwrite !== undefined) {
        bodyParams["Overwrite"] = input.Overwrite;
    }
    if (input.Policies !== undefined) {
        bodyParams["Policies"] = input.Policies;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Tier !== undefined) {
        bodyParams["Tier"] = input.Tier;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1Regions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RegisterDefaultPatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    if (input.PatchGroup !== undefined) {
        bodyParams["PatchGroup"] = input.PatchGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OwnerInformation !== undefined) {
        bodyParams["OwnerInformation"] = input.OwnerInformation;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LoggingInfo !== undefined) {
        bodyParams["LoggingInfo"] = serializeAws_json1_1LoggingInfo(input.LoggingInfo, context);
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    if (input.TaskInvocationParameters !== undefined) {
        bodyParams["TaskInvocationParameters"] = serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context);
    }
    if (input.TaskParameters !== undefined) {
        bodyParams["TaskParameters"] = serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context);
    }
    if (input.TaskType !== undefined) {
        bodyParams["TaskType"] = input.TaskType;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1RelatedOpsItem = (input, context) => {
    const bodyParams = {};
    if (input.OpsItemId !== undefined) {
        bodyParams["OpsItemId"] = input.OpsItemId;
    }
    return bodyParams;
};
const serializeAws_json1_1RelatedOpsItems = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RelatedOpsItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1KeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResetServiceSettingRequest = (input, context) => {
    const bodyParams = {};
    if (input.SettingId !== undefined) {
        bodyParams["SettingId"] = input.SettingId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationSourceType !== undefined) {
        bodyParams["OrganizationSourceType"] = input.OrganizationSourceType;
    }
    if (input.OrganizationalUnits !== undefined) {
        bodyParams["OrganizationalUnits"] = serializeAws_json1_1ResourceDataSyncOrganizationalUnitList(input.OrganizationalUnits, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceDataSyncOrganizationalUnit = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationalUnitId !== undefined) {
        bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResourceDataSyncS3Destination = (input, context) => {
    const bodyParams = {};
    if (input.AWSKMSKeyARN !== undefined) {
        bodyParams["AWSKMSKeyARN"] = input.AWSKMSKeyARN;
    }
    if (input.BucketName !== undefined) {
        bodyParams["BucketName"] = input.BucketName;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.SyncFormat !== undefined) {
        bodyParams["SyncFormat"] = input.SyncFormat;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceDataSyncSource = (input, context) => {
    const bodyParams = {};
    if (input.AwsOrganizationsSource !== undefined) {
        bodyParams["AwsOrganizationsSource"] = serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(input.AwsOrganizationsSource, context);
    }
    if (input.IncludeFutureRegions !== undefined) {
        bodyParams["IncludeFutureRegions"] = input.IncludeFutureRegions;
    }
    if (input.SourceRegions !== undefined) {
        bodyParams["SourceRegions"] = serializeAws_json1_1ResourceDataSyncSourceRegionList(input.SourceRegions, context);
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceDataSyncSourceRegionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResultAttribute = (input, context) => {
    const bodyParams = {};
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1ResultAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResultAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResumeSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.SessionId !== undefined) {
        bodyParams["SessionId"] = input.SessionId;
    }
    return bodyParams;
};
const serializeAws_json1_1S3OutputLocation = (input, context) => {
    const bodyParams = {};
    if (input.OutputS3BucketName !== undefined) {
        bodyParams["OutputS3BucketName"] = input.OutputS3BucketName;
    }
    if (input.OutputS3KeyPrefix !== undefined) {
        bodyParams["OutputS3KeyPrefix"] = input.OutputS3KeyPrefix;
    }
    if (input.OutputS3Region !== undefined) {
        bodyParams["OutputS3Region"] = input.OutputS3Region;
    }
    return bodyParams;
};
const serializeAws_json1_1SendAutomationSignalRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutomationExecutionId !== undefined) {
        bodyParams["AutomationExecutionId"] = input.AutomationExecutionId;
    }
    if (input.Payload !== undefined) {
        bodyParams["Payload"] = serializeAws_json1_1AutomationParameterMap(input.Payload, context);
    }
    if (input.SignalType !== undefined) {
        bodyParams["SignalType"] = input.SignalType;
    }
    return bodyParams;
};
const serializeAws_json1_1SendCommandRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchOutputConfig !== undefined) {
        bodyParams["CloudWatchOutputConfig"] = serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context);
    }
    if (input.Comment !== undefined) {
        bodyParams["Comment"] = input.Comment;
    }
    if (input.DocumentHash !== undefined) {
        bodyParams["DocumentHash"] = input.DocumentHash;
    }
    if (input.DocumentHashType !== undefined) {
        bodyParams["DocumentHashType"] = input.DocumentHashType;
    }
    if (input.DocumentName !== undefined) {
        bodyParams["DocumentName"] = input.DocumentName;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1InstanceIdList(input.InstanceIds, context);
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.NotificationConfig !== undefined) {
        bodyParams["NotificationConfig"] = serializeAws_json1_1NotificationConfig(input.NotificationConfig, context);
    }
    if (input.OutputS3BucketName !== undefined) {
        bodyParams["OutputS3BucketName"] = input.OutputS3BucketName;
    }
    if (input.OutputS3KeyPrefix !== undefined) {
        bodyParams["OutputS3KeyPrefix"] = input.OutputS3KeyPrefix;
    }
    if (input.OutputS3Region !== undefined) {
        bodyParams["OutputS3Region"] = input.OutputS3Region;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1Parameters(input.Parameters, context);
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.TimeoutSeconds !== undefined) {
        bodyParams["TimeoutSeconds"] = input.TimeoutSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1SessionFilter = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1SessionFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SessionFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SessionManagerParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SessionManagerParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1SessionManagerParameterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1StartAssociationsOnceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationIds !== undefined) {
        bodyParams["AssociationIds"] = serializeAws_json1_1AssociationIdList(input.AssociationIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartAutomationExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.DocumentName !== undefined) {
        bodyParams["DocumentName"] = input.DocumentName;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Mode !== undefined) {
        bodyParams["Mode"] = input.Mode;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1AutomationParameterMap(input.Parameters, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TargetLocations !== undefined) {
        bodyParams["TargetLocations"] = serializeAws_json1_1TargetLocations(input.TargetLocations, context);
    }
    if (input.TargetMaps !== undefined) {
        bodyParams["TargetMaps"] = serializeAws_json1_1TargetMaps(input.TargetMaps, context);
    }
    if (input.TargetParameterName !== undefined) {
        bodyParams["TargetParameterName"] = input.TargetParameterName;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentName !== undefined) {
        bodyParams["DocumentName"] = input.DocumentName;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1SessionManagerParameters(input.Parameters, context);
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = input.Target;
    }
    return bodyParams;
};
const serializeAws_json1_1StepExecutionFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1StepExecutionFilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StepExecutionFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StepExecutionFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StepExecutionFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StopAutomationExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutomationExecutionId !== undefined) {
        bodyParams["AutomationExecutionId"] = input.AutomationExecutionId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1Target = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1TargetValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetLocation = (input, context) => {
    const bodyParams = {};
    if (input.Accounts !== undefined) {
        bodyParams["Accounts"] = serializeAws_json1_1Accounts(input.Accounts, context);
    }
    if (input.ExecutionRoleName !== undefined) {
        bodyParams["ExecutionRoleName"] = input.ExecutionRoleName;
    }
    if (input.Regions !== undefined) {
        bodyParams["Regions"] = serializeAws_json1_1Regions(input.Regions, context);
    }
    if (input.TargetLocationMaxConcurrency !== undefined) {
        bodyParams["TargetLocationMaxConcurrency"] =
            input.TargetLocationMaxConcurrency;
    }
    if (input.TargetLocationMaxErrors !== undefined) {
        bodyParams["TargetLocationMaxErrors"] = input.TargetLocationMaxErrors;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetLocations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TargetLocation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TargetMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1TargetMapValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1TargetMapValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TargetMaps = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TargetMap(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TargetValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Targets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Target(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TerminateSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.SessionId !== undefined) {
        bodyParams["SessionId"] = input.SessionId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationId !== undefined) {
        bodyParams["AssociationId"] = input.AssociationId;
    }
    if (input.AssociationName !== undefined) {
        bodyParams["AssociationName"] = input.AssociationName;
    }
    if (input.AssociationVersion !== undefined) {
        bodyParams["AssociationVersion"] = input.AssociationVersion;
    }
    if (input.AutomationTargetParameterName !== undefined) {
        bodyParams["AutomationTargetParameterName"] =
            input.AutomationTargetParameterName;
    }
    if (input.ComplianceSeverity !== undefined) {
        bodyParams["ComplianceSeverity"] = input.ComplianceSeverity;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OutputLocation !== undefined) {
        bodyParams["OutputLocation"] = serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1Parameters(input.Parameters, context);
    }
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAssociationStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssociationStatus !== undefined) {
        bodyParams["AssociationStatus"] = serializeAws_json1_1AssociationStatus(input.AssociationStatus, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDocumentDefaultVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attachments !== undefined) {
        bodyParams["Attachments"] = serializeAws_json1_1AttachmentsSourceList(input.Attachments, context);
    }
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    if (input.DocumentFormat !== undefined) {
        bodyParams["DocumentFormat"] = input.DocumentFormat;
    }
    if (input.DocumentVersion !== undefined) {
        bodyParams["DocumentVersion"] = input.DocumentVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.TargetType !== undefined) {
        bodyParams["TargetType"] = input.TargetType;
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMaintenanceWindowRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowUnassociatedTargets !== undefined) {
        bodyParams["AllowUnassociatedTargets"] = input.AllowUnassociatedTargets;
    }
    if (input.Cutoff !== undefined) {
        bodyParams["Cutoff"] = input.Cutoff;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Duration !== undefined) {
        bodyParams["Duration"] = input.Duration;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.EndDate !== undefined) {
        bodyParams["EndDate"] = input.EndDate;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Replace !== undefined) {
        bodyParams["Replace"] = input.Replace;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.ScheduleTimezone !== undefined) {
        bodyParams["ScheduleTimezone"] = input.ScheduleTimezone;
    }
    if (input.StartDate !== undefined) {
        bodyParams["StartDate"] = input.StartDate;
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMaintenanceWindowTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OwnerInformation !== undefined) {
        bodyParams["OwnerInformation"] = input.OwnerInformation;
    }
    if (input.Replace !== undefined) {
        bodyParams["Replace"] = input.Replace;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    if (input.WindowTargetId !== undefined) {
        bodyParams["WindowTargetId"] = input.WindowTargetId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMaintenanceWindowTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LoggingInfo !== undefined) {
        bodyParams["LoggingInfo"] = serializeAws_json1_1LoggingInfo(input.LoggingInfo, context);
    }
    if (input.MaxConcurrency !== undefined) {
        bodyParams["MaxConcurrency"] = input.MaxConcurrency;
    }
    if (input.MaxErrors !== undefined) {
        bodyParams["MaxErrors"] = input.MaxErrors;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.Replace !== undefined) {
        bodyParams["Replace"] = input.Replace;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1Targets(input.Targets, context);
    }
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    if (input.TaskInvocationParameters !== undefined) {
        bodyParams["TaskInvocationParameters"] = serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context);
    }
    if (input.TaskParameters !== undefined) {
        bodyParams["TaskParameters"] = serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context);
    }
    if (input.WindowId !== undefined) {
        bodyParams["WindowId"] = input.WindowId;
    }
    if (input.WindowTaskId !== undefined) {
        bodyParams["WindowTaskId"] = input.WindowTaskId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateManagedInstanceRoleRequest = (input, context) => {
    const bodyParams = {};
    if (input.IamRole !== undefined) {
        bodyParams["IamRole"] = input.IamRole;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateOpsItemRequest = (input, context) => {
    const bodyParams = {};
    if (input.Category !== undefined) {
        bodyParams["Category"] = input.Category;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Notifications !== undefined) {
        bodyParams["Notifications"] = serializeAws_json1_1OpsItemNotifications(input.Notifications, context);
    }
    if (input.OperationalData !== undefined) {
        bodyParams["OperationalData"] = serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context);
    }
    if (input.OperationalDataToDelete !== undefined) {
        bodyParams["OperationalDataToDelete"] = serializeAws_json1_1OpsItemOpsDataKeysList(input.OperationalDataToDelete, context);
    }
    if (input.OpsItemId !== undefined) {
        bodyParams["OpsItemId"] = input.OpsItemId;
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.RelatedOpsItems !== undefined) {
        bodyParams["RelatedOpsItems"] = serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context);
    }
    if (input.Severity !== undefined) {
        bodyParams["Severity"] = input.Severity;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePatchBaselineRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApprovalRules !== undefined) {
        bodyParams["ApprovalRules"] = serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context);
    }
    if (input.ApprovedPatches !== undefined) {
        bodyParams["ApprovedPatches"] = serializeAws_json1_1PatchIdList(input.ApprovedPatches, context);
    }
    if (input.ApprovedPatchesComplianceLevel !== undefined) {
        bodyParams["ApprovedPatchesComplianceLevel"] =
            input.ApprovedPatchesComplianceLevel;
    }
    if (input.ApprovedPatchesEnableNonSecurity !== undefined) {
        bodyParams["ApprovedPatchesEnableNonSecurity"] =
            input.ApprovedPatchesEnableNonSecurity;
    }
    if (input.BaselineId !== undefined) {
        bodyParams["BaselineId"] = input.BaselineId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GlobalFilters !== undefined) {
        bodyParams["GlobalFilters"] = serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RejectedPatches !== undefined) {
        bodyParams["RejectedPatches"] = serializeAws_json1_1PatchIdList(input.RejectedPatches, context);
    }
    if (input.RejectedPatchesAction !== undefined) {
        bodyParams["RejectedPatchesAction"] = input.RejectedPatchesAction;
    }
    if (input.Replace !== undefined) {
        bodyParams["Replace"] = input.Replace;
    }
    if (input.Sources !== undefined) {
        bodyParams["Sources"] = serializeAws_json1_1PatchSourceList(input.Sources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResourceDataSyncRequest = (input, context) => {
    const bodyParams = {};
    if (input.SyncName !== undefined) {
        bodyParams["SyncName"] = input.SyncName;
    }
    if (input.SyncSource !== undefined) {
        bodyParams["SyncSource"] = serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context);
    }
    if (input.SyncType !== undefined) {
        bodyParams["SyncType"] = input.SyncType;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServiceSettingRequest = (input, context) => {
    const bodyParams = {};
    if (input.SettingId !== undefined) {
        bodyParams["SettingId"] = input.SettingId;
    }
    if (input.SettingValue !== undefined) {
        bodyParams["SettingValue"] = input.SettingValue;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccountIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AccountSharingInfo = (output, context) => {
    let contents = {
        __type: "AccountSharingInfo",
        AccountId: undefined,
        SharedDocumentVersion: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.SharedDocumentVersion !== undefined &&
        output.SharedDocumentVersion !== null) {
        contents.SharedDocumentVersion = output.SharedDocumentVersion;
    }
    return contents;
};
const deserializeAws_json1_1AccountSharingInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccountSharingInfo(entry, context));
};
const deserializeAws_json1_1Accounts = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Activation = (output, context) => {
    let contents = {
        __type: "Activation",
        ActivationId: undefined,
        CreatedDate: undefined,
        DefaultInstanceName: undefined,
        Description: undefined,
        ExpirationDate: undefined,
        Expired: undefined,
        IamRole: undefined,
        RegistrationLimit: undefined,
        RegistrationsCount: undefined,
        Tags: undefined
    };
    if (output.ActivationId !== undefined && output.ActivationId !== null) {
        contents.ActivationId = output.ActivationId;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.DefaultInstanceName !== undefined &&
        output.DefaultInstanceName !== null) {
        contents.DefaultInstanceName = output.DefaultInstanceName;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
        contents.ExpirationDate = new Date(Math.round(output.ExpirationDate * 1000));
    }
    if (output.Expired !== undefined && output.Expired !== null) {
        contents.Expired = output.Expired;
    }
    if (output.IamRole !== undefined && output.IamRole !== null) {
        contents.IamRole = output.IamRole;
    }
    if (output.RegistrationLimit !== undefined &&
        output.RegistrationLimit !== null) {
        contents.RegistrationLimit = output.RegistrationLimit;
    }
    if (output.RegistrationsCount !== undefined &&
        output.RegistrationsCount !== null) {
        contents.RegistrationsCount = output.RegistrationsCount;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ActivationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Activation(entry, context));
};
const deserializeAws_json1_1AddTagsToResourceResult = (output, context) => {
    let contents = {
        __type: "AddTagsToResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociatedInstances = (output, context) => {
    let contents = {
        __type: "AssociatedInstances"
    };
    return contents;
};
const deserializeAws_json1_1Association = (output, context) => {
    let contents = {
        __type: "Association",
        AssociationId: undefined,
        AssociationName: undefined,
        AssociationVersion: undefined,
        DocumentVersion: undefined,
        InstanceId: undefined,
        LastExecutionDate: undefined,
        Name: undefined,
        Overview: undefined,
        ScheduleExpression: undefined,
        Targets: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationName !== undefined && output.AssociationName !== null) {
        contents.AssociationName = output.AssociationName;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.LastExecutionDate !== undefined &&
        output.LastExecutionDate !== null) {
        contents.LastExecutionDate = new Date(Math.round(output.LastExecutionDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Overview !== undefined && output.Overview !== null) {
        contents.Overview = deserializeAws_json1_1AssociationOverview(output.Overview, context);
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociationAlreadyExists = (output, context) => {
    let contents = {
        __type: "AssociationAlreadyExists"
    };
    return contents;
};
const deserializeAws_json1_1AssociationDescription = (output, context) => {
    let contents = {
        __type: "AssociationDescription",
        AssociationId: undefined,
        AssociationName: undefined,
        AssociationVersion: undefined,
        AutomationTargetParameterName: undefined,
        ComplianceSeverity: undefined,
        Date: undefined,
        DocumentVersion: undefined,
        InstanceId: undefined,
        LastExecutionDate: undefined,
        LastSuccessfulExecutionDate: undefined,
        LastUpdateAssociationDate: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        OutputLocation: undefined,
        Overview: undefined,
        Parameters: undefined,
        ScheduleExpression: undefined,
        Status: undefined,
        Targets: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationName !== undefined && output.AssociationName !== null) {
        contents.AssociationName = output.AssociationName;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.AutomationTargetParameterName !== undefined &&
        output.AutomationTargetParameterName !== null) {
        contents.AutomationTargetParameterName =
            output.AutomationTargetParameterName;
    }
    if (output.ComplianceSeverity !== undefined &&
        output.ComplianceSeverity !== null) {
        contents.ComplianceSeverity = output.ComplianceSeverity;
    }
    if (output.Date !== undefined && output.Date !== null) {
        contents.Date = new Date(Math.round(output.Date * 1000));
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.LastExecutionDate !== undefined &&
        output.LastExecutionDate !== null) {
        contents.LastExecutionDate = new Date(Math.round(output.LastExecutionDate * 1000));
    }
    if (output.LastSuccessfulExecutionDate !== undefined &&
        output.LastSuccessfulExecutionDate !== null) {
        contents.LastSuccessfulExecutionDate = new Date(Math.round(output.LastSuccessfulExecutionDate * 1000));
    }
    if (output.LastUpdateAssociationDate !== undefined &&
        output.LastUpdateAssociationDate !== null) {
        contents.LastUpdateAssociationDate = new Date(Math.round(output.LastUpdateAssociationDate * 1000));
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
        contents.OutputLocation = deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context);
    }
    if (output.Overview !== undefined && output.Overview !== null) {
        contents.Overview = deserializeAws_json1_1AssociationOverview(output.Overview, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1AssociationStatus(output.Status, context);
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociationDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssociationDescription(entry, context));
};
const deserializeAws_json1_1AssociationDoesNotExist = (output, context) => {
    let contents = {
        __type: "AssociationDoesNotExist",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociationExecution = (output, context) => {
    let contents = {
        __type: "AssociationExecution",
        AssociationId: undefined,
        AssociationVersion: undefined,
        CreatedTime: undefined,
        DetailedStatus: undefined,
        ExecutionId: undefined,
        LastExecutionDate: undefined,
        ResourceCountByStatus: undefined,
        Status: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.DetailedStatus !== undefined && output.DetailedStatus !== null) {
        contents.DetailedStatus = output.DetailedStatus;
    }
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.LastExecutionDate !== undefined &&
        output.LastExecutionDate !== null) {
        contents.LastExecutionDate = new Date(Math.round(output.LastExecutionDate * 1000));
    }
    if (output.ResourceCountByStatus !== undefined &&
        output.ResourceCountByStatus !== null) {
        contents.ResourceCountByStatus = output.ResourceCountByStatus;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AssociationExecutionDoesNotExist = (output, context) => {
    let contents = {
        __type: "AssociationExecutionDoesNotExist",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociationExecutionTarget = (output, context) => {
    let contents = {
        __type: "AssociationExecutionTarget",
        AssociationId: undefined,
        AssociationVersion: undefined,
        DetailedStatus: undefined,
        ExecutionId: undefined,
        LastExecutionDate: undefined,
        OutputSource: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        Status: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.DetailedStatus !== undefined && output.DetailedStatus !== null) {
        contents.DetailedStatus = output.DetailedStatus;
    }
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.LastExecutionDate !== undefined &&
        output.LastExecutionDate !== null) {
        contents.LastExecutionDate = new Date(Math.round(output.LastExecutionDate * 1000));
    }
    if (output.OutputSource !== undefined && output.OutputSource !== null) {
        contents.OutputSource = deserializeAws_json1_1OutputSource(output.OutputSource, context);
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AssociationExecutionTargetsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssociationExecutionTarget(entry, context));
};
const deserializeAws_json1_1AssociationExecutionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssociationExecution(entry, context));
};
const deserializeAws_json1_1AssociationLimitExceeded = (output, context) => {
    let contents = {
        __type: "AssociationLimitExceeded"
    };
    return contents;
};
const deserializeAws_json1_1AssociationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Association(entry, context));
};
const deserializeAws_json1_1AssociationOverview = (output, context) => {
    let contents = {
        __type: "AssociationOverview",
        AssociationStatusAggregatedCount: undefined,
        DetailedStatus: undefined,
        Status: undefined
    };
    if (output.AssociationStatusAggregatedCount !== undefined &&
        output.AssociationStatusAggregatedCount !== null) {
        contents.AssociationStatusAggregatedCount = deserializeAws_json1_1AssociationStatusAggregatedCount(output.AssociationStatusAggregatedCount, context);
    }
    if (output.DetailedStatus !== undefined && output.DetailedStatus !== null) {
        contents.DetailedStatus = output.DetailedStatus;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AssociationStatus = (output, context) => {
    let contents = {
        __type: "AssociationStatus",
        AdditionalInfo: undefined,
        Date: undefined,
        Message: undefined,
        Name: undefined
    };
    if (output.AdditionalInfo !== undefined && output.AdditionalInfo !== null) {
        contents.AdditionalInfo = output.AdditionalInfo;
    }
    if (output.Date !== undefined && output.Date !== null) {
        contents.Date = new Date(Math.round(output.Date * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1AssociationStatusAggregatedCount = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AssociationVersionInfo = (output, context) => {
    let contents = {
        __type: "AssociationVersionInfo",
        AssociationId: undefined,
        AssociationName: undefined,
        AssociationVersion: undefined,
        ComplianceSeverity: undefined,
        CreatedDate: undefined,
        DocumentVersion: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        OutputLocation: undefined,
        Parameters: undefined,
        ScheduleExpression: undefined,
        Targets: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationName !== undefined && output.AssociationName !== null) {
        contents.AssociationName = output.AssociationName;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.ComplianceSeverity !== undefined &&
        output.ComplianceSeverity !== null) {
        contents.ComplianceSeverity = output.ComplianceSeverity;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
        contents.OutputLocation = deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociationVersionLimitExceeded = (output, context) => {
    let contents = {
        __type: "AssociationVersionLimitExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AssociationVersionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssociationVersionInfo(entry, context));
};
const deserializeAws_json1_1AttachmentContent = (output, context) => {
    let contents = {
        __type: "AttachmentContent",
        Hash: undefined,
        HashType: undefined,
        Name: undefined,
        Size: undefined,
        Url: undefined
    };
    if (output.Hash !== undefined && output.Hash !== null) {
        contents.Hash = output.Hash;
    }
    if (output.HashType !== undefined && output.HashType !== null) {
        contents.HashType = output.HashType;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentContentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttachmentContent(entry, context));
};
const deserializeAws_json1_1AttachmentInformation = (output, context) => {
    let contents = {
        __type: "AttachmentInformation",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentInformationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttachmentInformation(entry, context));
};
const deserializeAws_json1_1AutomationDefinitionNotFoundException = (output, context) => {
    let contents = {
        __type: "AutomationDefinitionNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutomationDefinitionVersionNotFoundException = (output, context) => {
    let contents = {
        __type: "AutomationDefinitionVersionNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutomationExecution = (output, context) => {
    let contents = {
        __type: "AutomationExecution",
        AutomationExecutionId: undefined,
        AutomationExecutionStatus: undefined,
        CurrentAction: undefined,
        CurrentStepName: undefined,
        DocumentName: undefined,
        DocumentVersion: undefined,
        ExecutedBy: undefined,
        ExecutionEndTime: undefined,
        ExecutionStartTime: undefined,
        FailureMessage: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Mode: undefined,
        Outputs: undefined,
        Parameters: undefined,
        ParentAutomationExecutionId: undefined,
        ProgressCounters: undefined,
        ResolvedTargets: undefined,
        StepExecutions: undefined,
        StepExecutionsTruncated: undefined,
        Target: undefined,
        TargetLocations: undefined,
        TargetMaps: undefined,
        TargetParameterName: undefined,
        Targets: undefined
    };
    if (output.AutomationExecutionId !== undefined &&
        output.AutomationExecutionId !== null) {
        contents.AutomationExecutionId = output.AutomationExecutionId;
    }
    if (output.AutomationExecutionStatus !== undefined &&
        output.AutomationExecutionStatus !== null) {
        contents.AutomationExecutionStatus = output.AutomationExecutionStatus;
    }
    if (output.CurrentAction !== undefined && output.CurrentAction !== null) {
        contents.CurrentAction = output.CurrentAction;
    }
    if (output.CurrentStepName !== undefined && output.CurrentStepName !== null) {
        contents.CurrentStepName = output.CurrentStepName;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.ExecutedBy !== undefined && output.ExecutedBy !== null) {
        contents.ExecutedBy = output.ExecutedBy;
    }
    if (output.ExecutionEndTime !== undefined &&
        output.ExecutionEndTime !== null) {
        contents.ExecutionEndTime = new Date(Math.round(output.ExecutionEndTime * 1000));
    }
    if (output.ExecutionStartTime !== undefined &&
        output.ExecutionStartTime !== null) {
        contents.ExecutionStartTime = new Date(Math.round(output.ExecutionStartTime * 1000));
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Mode !== undefined && output.Mode !== null) {
        contents.Mode = output.Mode;
    }
    if (output.Outputs !== undefined && output.Outputs !== null) {
        contents.Outputs = deserializeAws_json1_1AutomationParameterMap(output.Outputs, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1AutomationParameterMap(output.Parameters, context);
    }
    if (output.ParentAutomationExecutionId !== undefined &&
        output.ParentAutomationExecutionId !== null) {
        contents.ParentAutomationExecutionId = output.ParentAutomationExecutionId;
    }
    if (output.ProgressCounters !== undefined &&
        output.ProgressCounters !== null) {
        contents.ProgressCounters = deserializeAws_json1_1ProgressCounters(output.ProgressCounters, context);
    }
    if (output.ResolvedTargets !== undefined && output.ResolvedTargets !== null) {
        contents.ResolvedTargets = deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context);
    }
    if (output.StepExecutions !== undefined && output.StepExecutions !== null) {
        contents.StepExecutions = deserializeAws_json1_1StepExecutionList(output.StepExecutions, context);
    }
    if (output.StepExecutionsTruncated !== undefined &&
        output.StepExecutionsTruncated !== null) {
        contents.StepExecutionsTruncated = output.StepExecutionsTruncated;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    if (output.TargetLocations !== undefined && output.TargetLocations !== null) {
        contents.TargetLocations = deserializeAws_json1_1TargetLocations(output.TargetLocations, context);
    }
    if (output.TargetMaps !== undefined && output.TargetMaps !== null) {
        contents.TargetMaps = deserializeAws_json1_1TargetMaps(output.TargetMaps, context);
    }
    if (output.TargetParameterName !== undefined &&
        output.TargetParameterName !== null) {
        contents.TargetParameterName = output.TargetParameterName;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1AutomationExecutionLimitExceededException = (output, context) => {
    let contents = {
        __type: "AutomationExecutionLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutomationExecutionMetadata = (output, context) => {
    let contents = {
        __type: "AutomationExecutionMetadata",
        AutomationExecutionId: undefined,
        AutomationExecutionStatus: undefined,
        AutomationType: undefined,
        CurrentAction: undefined,
        CurrentStepName: undefined,
        DocumentName: undefined,
        DocumentVersion: undefined,
        ExecutedBy: undefined,
        ExecutionEndTime: undefined,
        ExecutionStartTime: undefined,
        FailureMessage: undefined,
        LogFile: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Mode: undefined,
        Outputs: undefined,
        ParentAutomationExecutionId: undefined,
        ResolvedTargets: undefined,
        Target: undefined,
        TargetMaps: undefined,
        TargetParameterName: undefined,
        Targets: undefined
    };
    if (output.AutomationExecutionId !== undefined &&
        output.AutomationExecutionId !== null) {
        contents.AutomationExecutionId = output.AutomationExecutionId;
    }
    if (output.AutomationExecutionStatus !== undefined &&
        output.AutomationExecutionStatus !== null) {
        contents.AutomationExecutionStatus = output.AutomationExecutionStatus;
    }
    if (output.AutomationType !== undefined && output.AutomationType !== null) {
        contents.AutomationType = output.AutomationType;
    }
    if (output.CurrentAction !== undefined && output.CurrentAction !== null) {
        contents.CurrentAction = output.CurrentAction;
    }
    if (output.CurrentStepName !== undefined && output.CurrentStepName !== null) {
        contents.CurrentStepName = output.CurrentStepName;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.ExecutedBy !== undefined && output.ExecutedBy !== null) {
        contents.ExecutedBy = output.ExecutedBy;
    }
    if (output.ExecutionEndTime !== undefined &&
        output.ExecutionEndTime !== null) {
        contents.ExecutionEndTime = new Date(Math.round(output.ExecutionEndTime * 1000));
    }
    if (output.ExecutionStartTime !== undefined &&
        output.ExecutionStartTime !== null) {
        contents.ExecutionStartTime = new Date(Math.round(output.ExecutionStartTime * 1000));
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    if (output.LogFile !== undefined && output.LogFile !== null) {
        contents.LogFile = output.LogFile;
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Mode !== undefined && output.Mode !== null) {
        contents.Mode = output.Mode;
    }
    if (output.Outputs !== undefined && output.Outputs !== null) {
        contents.Outputs = deserializeAws_json1_1AutomationParameterMap(output.Outputs, context);
    }
    if (output.ParentAutomationExecutionId !== undefined &&
        output.ParentAutomationExecutionId !== null) {
        contents.ParentAutomationExecutionId = output.ParentAutomationExecutionId;
    }
    if (output.ResolvedTargets !== undefined && output.ResolvedTargets !== null) {
        contents.ResolvedTargets = deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context);
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    if (output.TargetMaps !== undefined && output.TargetMaps !== null) {
        contents.TargetMaps = deserializeAws_json1_1TargetMaps(output.TargetMaps, context);
    }
    if (output.TargetParameterName !== undefined &&
        output.TargetParameterName !== null) {
        contents.TargetParameterName = output.TargetParameterName;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1AutomationExecutionMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutomationExecutionMetadata(entry, context));
};
const deserializeAws_json1_1AutomationExecutionNotFoundException = (output, context) => {
    let contents = {
        __type: "AutomationExecutionNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutomationParameterMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1AutomationParameterValueList(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1AutomationParameterValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AutomationStepNotFoundException = (output, context) => {
    let contents = {
        __type: "AutomationStepNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CancelCommandResult = (output, context) => {
    let contents = {
        __type: "CancelCommandResult"
    };
    return contents;
};
const deserializeAws_json1_1CancelMaintenanceWindowExecutionResult = (output, context) => {
    let contents = {
        __type: "CancelMaintenanceWindowExecutionResult",
        WindowExecutionId: undefined
    };
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchOutputConfig = (output, context) => {
    let contents = {
        __type: "CloudWatchOutputConfig",
        CloudWatchLogGroupName: undefined,
        CloudWatchOutputEnabled: undefined
    };
    if (output.CloudWatchLogGroupName !== undefined &&
        output.CloudWatchLogGroupName !== null) {
        contents.CloudWatchLogGroupName = output.CloudWatchLogGroupName;
    }
    if (output.CloudWatchOutputEnabled !== undefined &&
        output.CloudWatchOutputEnabled !== null) {
        contents.CloudWatchOutputEnabled = output.CloudWatchOutputEnabled;
    }
    return contents;
};
const deserializeAws_json1_1Command = (output, context) => {
    let contents = {
        __type: "Command",
        CloudWatchOutputConfig: undefined,
        CommandId: undefined,
        Comment: undefined,
        CompletedCount: undefined,
        DeliveryTimedOutCount: undefined,
        DocumentName: undefined,
        DocumentVersion: undefined,
        ErrorCount: undefined,
        ExpiresAfter: undefined,
        InstanceIds: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        NotificationConfig: undefined,
        OutputS3BucketName: undefined,
        OutputS3KeyPrefix: undefined,
        OutputS3Region: undefined,
        Parameters: undefined,
        RequestedDateTime: undefined,
        ServiceRole: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TargetCount: undefined,
        Targets: undefined
    };
    if (output.CloudWatchOutputConfig !== undefined &&
        output.CloudWatchOutputConfig !== null) {
        contents.CloudWatchOutputConfig = deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context);
    }
    if (output.CommandId !== undefined && output.CommandId !== null) {
        contents.CommandId = output.CommandId;
    }
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.CompletedCount !== undefined && output.CompletedCount !== null) {
        contents.CompletedCount = output.CompletedCount;
    }
    if (output.DeliveryTimedOutCount !== undefined &&
        output.DeliveryTimedOutCount !== null) {
        contents.DeliveryTimedOutCount = output.DeliveryTimedOutCount;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.ErrorCount !== undefined && output.ErrorCount !== null) {
        contents.ErrorCount = output.ErrorCount;
    }
    if (output.ExpiresAfter !== undefined && output.ExpiresAfter !== null) {
        contents.ExpiresAfter = new Date(Math.round(output.ExpiresAfter * 1000));
    }
    if (output.InstanceIds !== undefined && output.InstanceIds !== null) {
        contents.InstanceIds = deserializeAws_json1_1InstanceIdList(output.InstanceIds, context);
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.NotificationConfig !== undefined &&
        output.NotificationConfig !== null) {
        contents.NotificationConfig = deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context);
    }
    if (output.OutputS3BucketName !== undefined &&
        output.OutputS3BucketName !== null) {
        contents.OutputS3BucketName = output.OutputS3BucketName;
    }
    if (output.OutputS3KeyPrefix !== undefined &&
        output.OutputS3KeyPrefix !== null) {
        contents.OutputS3KeyPrefix = output.OutputS3KeyPrefix;
    }
    if (output.OutputS3Region !== undefined && output.OutputS3Region !== null) {
        contents.OutputS3Region = output.OutputS3Region;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    if (output.RequestedDateTime !== undefined &&
        output.RequestedDateTime !== null) {
        contents.RequestedDateTime = new Date(Math.round(output.RequestedDateTime * 1000));
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TargetCount !== undefined && output.TargetCount !== null) {
        contents.TargetCount = output.TargetCount;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1CommandInvocation = (output, context) => {
    let contents = {
        __type: "CommandInvocation",
        CloudWatchOutputConfig: undefined,
        CommandId: undefined,
        CommandPlugins: undefined,
        Comment: undefined,
        DocumentName: undefined,
        DocumentVersion: undefined,
        InstanceId: undefined,
        InstanceName: undefined,
        NotificationConfig: undefined,
        RequestedDateTime: undefined,
        ServiceRole: undefined,
        StandardErrorUrl: undefined,
        StandardOutputUrl: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TraceOutput: undefined
    };
    if (output.CloudWatchOutputConfig !== undefined &&
        output.CloudWatchOutputConfig !== null) {
        contents.CloudWatchOutputConfig = deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context);
    }
    if (output.CommandId !== undefined && output.CommandId !== null) {
        contents.CommandId = output.CommandId;
    }
    if (output.CommandPlugins !== undefined && output.CommandPlugins !== null) {
        contents.CommandPlugins = deserializeAws_json1_1CommandPluginList(output.CommandPlugins, context);
    }
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.InstanceName !== undefined && output.InstanceName !== null) {
        contents.InstanceName = output.InstanceName;
    }
    if (output.NotificationConfig !== undefined &&
        output.NotificationConfig !== null) {
        contents.NotificationConfig = deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context);
    }
    if (output.RequestedDateTime !== undefined &&
        output.RequestedDateTime !== null) {
        contents.RequestedDateTime = new Date(Math.round(output.RequestedDateTime * 1000));
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    if (output.StandardErrorUrl !== undefined &&
        output.StandardErrorUrl !== null) {
        contents.StandardErrorUrl = output.StandardErrorUrl;
    }
    if (output.StandardOutputUrl !== undefined &&
        output.StandardOutputUrl !== null) {
        contents.StandardOutputUrl = output.StandardOutputUrl;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TraceOutput !== undefined && output.TraceOutput !== null) {
        contents.TraceOutput = output.TraceOutput;
    }
    return contents;
};
const deserializeAws_json1_1CommandInvocationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CommandInvocation(entry, context));
};
const deserializeAws_json1_1CommandList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Command(entry, context));
};
const deserializeAws_json1_1CommandPlugin = (output, context) => {
    let contents = {
        __type: "CommandPlugin",
        Name: undefined,
        Output: undefined,
        OutputS3BucketName: undefined,
        OutputS3KeyPrefix: undefined,
        OutputS3Region: undefined,
        ResponseCode: undefined,
        ResponseFinishDateTime: undefined,
        ResponseStartDateTime: undefined,
        StandardErrorUrl: undefined,
        StandardOutputUrl: undefined,
        Status: undefined,
        StatusDetails: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Output !== undefined && output.Output !== null) {
        contents.Output = output.Output;
    }
    if (output.OutputS3BucketName !== undefined &&
        output.OutputS3BucketName !== null) {
        contents.OutputS3BucketName = output.OutputS3BucketName;
    }
    if (output.OutputS3KeyPrefix !== undefined &&
        output.OutputS3KeyPrefix !== null) {
        contents.OutputS3KeyPrefix = output.OutputS3KeyPrefix;
    }
    if (output.OutputS3Region !== undefined && output.OutputS3Region !== null) {
        contents.OutputS3Region = output.OutputS3Region;
    }
    if (output.ResponseCode !== undefined && output.ResponseCode !== null) {
        contents.ResponseCode = output.ResponseCode;
    }
    if (output.ResponseFinishDateTime !== undefined &&
        output.ResponseFinishDateTime !== null) {
        contents.ResponseFinishDateTime = new Date(Math.round(output.ResponseFinishDateTime * 1000));
    }
    if (output.ResponseStartDateTime !== undefined &&
        output.ResponseStartDateTime !== null) {
        contents.ResponseStartDateTime = new Date(Math.round(output.ResponseStartDateTime * 1000));
    }
    if (output.StandardErrorUrl !== undefined &&
        output.StandardErrorUrl !== null) {
        contents.StandardErrorUrl = output.StandardErrorUrl;
    }
    if (output.StandardOutputUrl !== undefined &&
        output.StandardOutputUrl !== null) {
        contents.StandardOutputUrl = output.StandardOutputUrl;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    return contents;
};
const deserializeAws_json1_1CommandPluginList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CommandPlugin(entry, context));
};
const deserializeAws_json1_1ComplianceExecutionSummary = (output, context) => {
    let contents = {
        __type: "ComplianceExecutionSummary",
        ExecutionId: undefined,
        ExecutionTime: undefined,
        ExecutionType: undefined
    };
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.ExecutionTime !== undefined && output.ExecutionTime !== null) {
        contents.ExecutionTime = new Date(Math.round(output.ExecutionTime * 1000));
    }
    if (output.ExecutionType !== undefined && output.ExecutionType !== null) {
        contents.ExecutionType = output.ExecutionType;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceItem = (output, context) => {
    let contents = {
        __type: "ComplianceItem",
        ComplianceType: undefined,
        Details: undefined,
        ExecutionSummary: undefined,
        Id: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        Severity: undefined,
        Status: undefined,
        Title: undefined
    };
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = deserializeAws_json1_1ComplianceItemDetails(output.Details, context);
    }
    if (output.ExecutionSummary !== undefined &&
        output.ExecutionSummary !== null) {
        contents.ExecutionSummary = deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Severity !== undefined && output.Severity !== null) {
        contents.Severity = output.Severity;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceItemDetails = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ComplianceItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceItem(entry, context));
};
const deserializeAws_json1_1ComplianceSummaryItem = (output, context) => {
    let contents = {
        __type: "ComplianceSummaryItem",
        ComplianceType: undefined,
        CompliantSummary: undefined,
        NonCompliantSummary: undefined
    };
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.CompliantSummary !== undefined &&
        output.CompliantSummary !== null) {
        contents.CompliantSummary = deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context);
    }
    if (output.NonCompliantSummary !== undefined &&
        output.NonCompliantSummary !== null) {
        contents.NonCompliantSummary = deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1ComplianceSummaryItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceSummaryItem(entry, context));
};
const deserializeAws_json1_1ComplianceTypeCountLimitExceededException = (output, context) => {
    let contents = {
        __type: "ComplianceTypeCountLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CompliantSummary = (output, context) => {
    let contents = {
        __type: "CompliantSummary",
        CompliantCount: undefined,
        SeveritySummary: undefined
    };
    if (output.CompliantCount !== undefined && output.CompliantCount !== null) {
        contents.CompliantCount = output.CompliantCount;
    }
    if (output.SeveritySummary !== undefined && output.SeveritySummary !== null) {
        contents.SeveritySummary = deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateActivationResult = (output, context) => {
    let contents = {
        __type: "CreateActivationResult",
        ActivationCode: undefined,
        ActivationId: undefined
    };
    if (output.ActivationCode !== undefined && output.ActivationCode !== null) {
        contents.ActivationCode = output.ActivationCode;
    }
    if (output.ActivationId !== undefined && output.ActivationId !== null) {
        contents.ActivationId = output.ActivationId;
    }
    return contents;
};
const deserializeAws_json1_1CreateAssociationBatchRequestEntry = (output, context) => {
    let contents = {
        __type: "CreateAssociationBatchRequestEntry",
        AssociationName: undefined,
        AutomationTargetParameterName: undefined,
        ComplianceSeverity: undefined,
        DocumentVersion: undefined,
        InstanceId: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        OutputLocation: undefined,
        Parameters: undefined,
        ScheduleExpression: undefined,
        Targets: undefined
    };
    if (output.AssociationName !== undefined && output.AssociationName !== null) {
        contents.AssociationName = output.AssociationName;
    }
    if (output.AutomationTargetParameterName !== undefined &&
        output.AutomationTargetParameterName !== null) {
        contents.AutomationTargetParameterName =
            output.AutomationTargetParameterName;
    }
    if (output.ComplianceSeverity !== undefined &&
        output.ComplianceSeverity !== null) {
        contents.ComplianceSeverity = output.ComplianceSeverity;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
        contents.OutputLocation = deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateAssociationBatchResult = (output, context) => {
    let contents = {
        __type: "CreateAssociationBatchResult",
        Failed: undefined,
        Successful: undefined
    };
    if (output.Failed !== undefined && output.Failed !== null) {
        contents.Failed = deserializeAws_json1_1FailedCreateAssociationList(output.Failed, context);
    }
    if (output.Successful !== undefined && output.Successful !== null) {
        contents.Successful = deserializeAws_json1_1AssociationDescriptionList(output.Successful, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateAssociationResult = (output, context) => {
    let contents = {
        __type: "CreateAssociationResult",
        AssociationDescription: undefined
    };
    if (output.AssociationDescription !== undefined &&
        output.AssociationDescription !== null) {
        contents.AssociationDescription = deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDocumentResult = (output, context) => {
    let contents = {
        __type: "CreateDocumentResult",
        DocumentDescription: undefined
    };
    if (output.DocumentDescription !== undefined &&
        output.DocumentDescription !== null) {
        contents.DocumentDescription = deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "CreateMaintenanceWindowResult",
        WindowId: undefined
    };
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1CreateOpsItemResponse = (output, context) => {
    let contents = {
        __type: "CreateOpsItemResponse",
        OpsItemId: undefined
    };
    if (output.OpsItemId !== undefined && output.OpsItemId !== null) {
        contents.OpsItemId = output.OpsItemId;
    }
    return contents;
};
const deserializeAws_json1_1CreatePatchBaselineResult = (output, context) => {
    let contents = {
        __type: "CreatePatchBaselineResult",
        BaselineId: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    return contents;
};
const deserializeAws_json1_1CreateResourceDataSyncResult = (output, context) => {
    let contents = {
        __type: "CreateResourceDataSyncResult"
    };
    return contents;
};
const deserializeAws_json1_1CustomSchemaCountLimitExceededException = (output, context) => {
    let contents = {
        __type: "CustomSchemaCountLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteActivationResult = (output, context) => {
    let contents = {
        __type: "DeleteActivationResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteAssociationResult = (output, context) => {
    let contents = {
        __type: "DeleteAssociationResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteDocumentResult = (output, context) => {
    let contents = {
        __type: "DeleteDocumentResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteInventoryResult = (output, context) => {
    let contents = {
        __type: "DeleteInventoryResult",
        DeletionId: undefined,
        DeletionSummary: undefined,
        TypeName: undefined
    };
    if (output.DeletionId !== undefined && output.DeletionId !== null) {
        contents.DeletionId = output.DeletionId;
    }
    if (output.DeletionSummary !== undefined && output.DeletionSummary !== null) {
        contents.DeletionSummary = deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context);
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "DeleteMaintenanceWindowResult",
        WindowId: undefined
    };
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteParameterResult = (output, context) => {
    let contents = {
        __type: "DeleteParameterResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteParametersResult = (output, context) => {
    let contents = {
        __type: "DeleteParametersResult",
        DeletedParameters: undefined,
        InvalidParameters: undefined
    };
    if (output.DeletedParameters !== undefined &&
        output.DeletedParameters !== null) {
        contents.DeletedParameters = deserializeAws_json1_1ParameterNameList(output.DeletedParameters, context);
    }
    if (output.InvalidParameters !== undefined &&
        output.InvalidParameters !== null) {
        contents.InvalidParameters = deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DeletePatchBaselineResult = (output, context) => {
    let contents = {
        __type: "DeletePatchBaselineResult",
        BaselineId: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteResourceDataSyncResult = (output, context) => {
    let contents = {
        __type: "DeleteResourceDataSyncResult"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterManagedInstanceResult = (output, context) => {
    let contents = {
        __type: "DeregisterManagedInstanceResult"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult = (output, context) => {
    let contents = {
        __type: "DeregisterPatchBaselineForPatchGroupResult",
        BaselineId: undefined,
        PatchGroup: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.PatchGroup !== undefined && output.PatchGroup !== null) {
        contents.PatchGroup = output.PatchGroup;
    }
    return contents;
};
const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "DeregisterTargetFromMaintenanceWindowResult",
        WindowId: undefined,
        WindowTargetId: undefined
    };
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "DeregisterTaskFromMaintenanceWindowResult",
        WindowId: undefined,
        WindowTaskId: undefined
    };
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTaskId !== undefined && output.WindowTaskId !== null) {
        contents.WindowTaskId = output.WindowTaskId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeActivationsResult = (output, context) => {
    let contents = {
        __type: "DescribeActivationsResult",
        ActivationList: undefined,
        NextToken: undefined
    };
    if (output.ActivationList !== undefined && output.ActivationList !== null) {
        contents.ActivationList = deserializeAws_json1_1ActivationList(output.ActivationList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssociationExecutionTargetsResult = (output, context) => {
    let contents = {
        __type: "DescribeAssociationExecutionTargetsResult",
        AssociationExecutionTargets: undefined,
        NextToken: undefined
    };
    if (output.AssociationExecutionTargets !== undefined &&
        output.AssociationExecutionTargets !== null) {
        contents.AssociationExecutionTargets = deserializeAws_json1_1AssociationExecutionTargetsList(output.AssociationExecutionTargets, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssociationExecutionsResult = (output, context) => {
    let contents = {
        __type: "DescribeAssociationExecutionsResult",
        AssociationExecutions: undefined,
        NextToken: undefined
    };
    if (output.AssociationExecutions !== undefined &&
        output.AssociationExecutions !== null) {
        contents.AssociationExecutions = deserializeAws_json1_1AssociationExecutionsList(output.AssociationExecutions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssociationResult = (output, context) => {
    let contents = {
        __type: "DescribeAssociationResult",
        AssociationDescription: undefined
    };
    if (output.AssociationDescription !== undefined &&
        output.AssociationDescription !== null) {
        contents.AssociationDescription = deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAutomationExecutionsResult = (output, context) => {
    let contents = {
        __type: "DescribeAutomationExecutionsResult",
        AutomationExecutionMetadataList: undefined,
        NextToken: undefined
    };
    if (output.AutomationExecutionMetadataList !== undefined &&
        output.AutomationExecutionMetadataList !== null) {
        contents.AutomationExecutionMetadataList = deserializeAws_json1_1AutomationExecutionMetadataList(output.AutomationExecutionMetadataList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAutomationStepExecutionsResult = (output, context) => {
    let contents = {
        __type: "DescribeAutomationStepExecutionsResult",
        NextToken: undefined,
        StepExecutions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StepExecutions !== undefined && output.StepExecutions !== null) {
        contents.StepExecutions = deserializeAws_json1_1StepExecutionList(output.StepExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAvailablePatchesResult = (output, context) => {
    let contents = {
        __type: "DescribeAvailablePatchesResult",
        NextToken: undefined,
        Patches: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Patches !== undefined && output.Patches !== null) {
        contents.Patches = deserializeAws_json1_1PatchList(output.Patches, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDocumentPermissionResponse = (output, context) => {
    let contents = {
        __type: "DescribeDocumentPermissionResponse",
        AccountIds: undefined,
        AccountSharingInfoList: undefined
    };
    if (output.AccountIds !== undefined && output.AccountIds !== null) {
        contents.AccountIds = deserializeAws_json1_1AccountIdList(output.AccountIds, context);
    }
    if (output.AccountSharingInfoList !== undefined &&
        output.AccountSharingInfoList !== null) {
        contents.AccountSharingInfoList = deserializeAws_json1_1AccountSharingInfoList(output.AccountSharingInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDocumentResult = (output, context) => {
    let contents = {
        __type: "DescribeDocumentResult",
        Document: undefined
    };
    if (output.Document !== undefined && output.Document !== null) {
        contents.Document = deserializeAws_json1_1DocumentDescription(output.Document, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult = (output, context) => {
    let contents = {
        __type: "DescribeEffectiveInstanceAssociationsResult",
        Associations: undefined,
        NextToken: undefined
    };
    if (output.Associations !== undefined && output.Associations !== null) {
        contents.Associations = deserializeAws_json1_1InstanceAssociationList(output.Associations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult = (output, context) => {
    let contents = {
        __type: "DescribeEffectivePatchesForPatchBaselineResult",
        EffectivePatches: undefined,
        NextToken: undefined
    };
    if (output.EffectivePatches !== undefined &&
        output.EffectivePatches !== null) {
        contents.EffectivePatches = deserializeAws_json1_1EffectivePatchList(output.EffectivePatches, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstanceAssociationsStatusResult = (output, context) => {
    let contents = {
        __type: "DescribeInstanceAssociationsStatusResult",
        InstanceAssociationStatusInfos: undefined,
        NextToken: undefined
    };
    if (output.InstanceAssociationStatusInfos !== undefined &&
        output.InstanceAssociationStatusInfos !== null) {
        contents.InstanceAssociationStatusInfos = deserializeAws_json1_1InstanceAssociationStatusInfos(output.InstanceAssociationStatusInfos, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstanceInformationResult = (output, context) => {
    let contents = {
        __type: "DescribeInstanceInformationResult",
        InstanceInformationList: undefined,
        NextToken: undefined
    };
    if (output.InstanceInformationList !== undefined &&
        output.InstanceInformationList !== null) {
        contents.InstanceInformationList = deserializeAws_json1_1InstanceInformationList(output.InstanceInformationList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult = (output, context) => {
    let contents = {
        __type: "DescribeInstancePatchStatesForPatchGroupResult",
        InstancePatchStates: undefined,
        NextToken: undefined
    };
    if (output.InstancePatchStates !== undefined &&
        output.InstancePatchStates !== null) {
        contents.InstancePatchStates = deserializeAws_json1_1InstancePatchStatesList(output.InstancePatchStates, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstancePatchStatesResult = (output, context) => {
    let contents = {
        __type: "DescribeInstancePatchStatesResult",
        InstancePatchStates: undefined,
        NextToken: undefined
    };
    if (output.InstancePatchStates !== undefined &&
        output.InstancePatchStates !== null) {
        contents.InstancePatchStates = deserializeAws_json1_1InstancePatchStateList(output.InstancePatchStates, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstancePatchesResult = (output, context) => {
    let contents = {
        __type: "DescribeInstancePatchesResult",
        NextToken: undefined,
        Patches: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Patches !== undefined && output.Patches !== null) {
        contents.Patches = deserializeAws_json1_1PatchComplianceDataList(output.Patches, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeInventoryDeletionsResult = (output, context) => {
    let contents = {
        __type: "DescribeInventoryDeletionsResult",
        InventoryDeletions: undefined,
        NextToken: undefined
    };
    if (output.InventoryDeletions !== undefined &&
        output.InventoryDeletions !== null) {
        contents.InventoryDeletions = deserializeAws_json1_1InventoryDeletionsList(output.InventoryDeletions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowExecutionTaskInvocationsResult",
        NextToken: undefined,
        WindowExecutionTaskInvocationIdentities: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WindowExecutionTaskInvocationIdentities !== undefined &&
        output.WindowExecutionTaskInvocationIdentities !== null) {
        contents.WindowExecutionTaskInvocationIdentities = deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList(output.WindowExecutionTaskInvocationIdentities, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowExecutionTasksResult",
        NextToken: undefined,
        WindowExecutionTaskIdentities: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WindowExecutionTaskIdentities !== undefined &&
        output.WindowExecutionTaskIdentities !== null) {
        contents.WindowExecutionTaskIdentities = deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList(output.WindowExecutionTaskIdentities, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowExecutionsResult",
        NextToken: undefined,
        WindowExecutions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WindowExecutions !== undefined &&
        output.WindowExecutions !== null) {
        contents.WindowExecutions = deserializeAws_json1_1MaintenanceWindowExecutionList(output.WindowExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowScheduleResult",
        NextToken: undefined,
        ScheduledWindowExecutions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScheduledWindowExecutions !== undefined &&
        output.ScheduledWindowExecutions !== null) {
        contents.ScheduledWindowExecutions = deserializeAws_json1_1ScheduledWindowExecutionList(output.ScheduledWindowExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowTargetsResult",
        NextToken: undefined,
        Targets: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1MaintenanceWindowTargetList(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowTasksResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowTasksResult",
        NextToken: undefined,
        Tasks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tasks !== undefined && output.Tasks !== null) {
        contents.Tasks = deserializeAws_json1_1MaintenanceWindowTaskList(output.Tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowsForTargetResult",
        NextToken: undefined,
        WindowIdentities: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WindowIdentities !== undefined &&
        output.WindowIdentities !== null) {
        contents.WindowIdentities = deserializeAws_json1_1MaintenanceWindowsForTargetList(output.WindowIdentities, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMaintenanceWindowsResult = (output, context) => {
    let contents = {
        __type: "DescribeMaintenanceWindowsResult",
        NextToken: undefined,
        WindowIdentities: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WindowIdentities !== undefined &&
        output.WindowIdentities !== null) {
        contents.WindowIdentities = deserializeAws_json1_1MaintenanceWindowIdentityList(output.WindowIdentities, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOpsItemsResponse = (output, context) => {
    let contents = {
        __type: "DescribeOpsItemsResponse",
        NextToken: undefined,
        OpsItemSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OpsItemSummaries !== undefined &&
        output.OpsItemSummaries !== null) {
        contents.OpsItemSummaries = deserializeAws_json1_1OpsItemSummaries(output.OpsItemSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeParametersResult = (output, context) => {
    let contents = {
        __type: "DescribeParametersResult",
        NextToken: undefined,
        Parameters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterMetadataList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePatchBaselinesResult = (output, context) => {
    let contents = {
        __type: "DescribePatchBaselinesResult",
        BaselineIdentities: undefined,
        NextToken: undefined
    };
    if (output.BaselineIdentities !== undefined &&
        output.BaselineIdentities !== null) {
        contents.BaselineIdentities = deserializeAws_json1_1PatchBaselineIdentityList(output.BaselineIdentities, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribePatchGroupStateResult = (output, context) => {
    let contents = {
        __type: "DescribePatchGroupStateResult",
        Instances: undefined,
        InstancesWithFailedPatches: undefined,
        InstancesWithInstalledOtherPatches: undefined,
        InstancesWithInstalledPatches: undefined,
        InstancesWithInstalledPendingRebootPatches: undefined,
        InstancesWithInstalledRejectedPatches: undefined,
        InstancesWithMissingPatches: undefined,
        InstancesWithNotApplicablePatches: undefined,
        InstancesWithUnreportedNotApplicablePatches: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = output.Instances;
    }
    if (output.InstancesWithFailedPatches !== undefined &&
        output.InstancesWithFailedPatches !== null) {
        contents.InstancesWithFailedPatches = output.InstancesWithFailedPatches;
    }
    if (output.InstancesWithInstalledOtherPatches !== undefined &&
        output.InstancesWithInstalledOtherPatches !== null) {
        contents.InstancesWithInstalledOtherPatches =
            output.InstancesWithInstalledOtherPatches;
    }
    if (output.InstancesWithInstalledPatches !== undefined &&
        output.InstancesWithInstalledPatches !== null) {
        contents.InstancesWithInstalledPatches =
            output.InstancesWithInstalledPatches;
    }
    if (output.InstancesWithInstalledPendingRebootPatches !== undefined &&
        output.InstancesWithInstalledPendingRebootPatches !== null) {
        contents.InstancesWithInstalledPendingRebootPatches =
            output.InstancesWithInstalledPendingRebootPatches;
    }
    if (output.InstancesWithInstalledRejectedPatches !== undefined &&
        output.InstancesWithInstalledRejectedPatches !== null) {
        contents.InstancesWithInstalledRejectedPatches =
            output.InstancesWithInstalledRejectedPatches;
    }
    if (output.InstancesWithMissingPatches !== undefined &&
        output.InstancesWithMissingPatches !== null) {
        contents.InstancesWithMissingPatches = output.InstancesWithMissingPatches;
    }
    if (output.InstancesWithNotApplicablePatches !== undefined &&
        output.InstancesWithNotApplicablePatches !== null) {
        contents.InstancesWithNotApplicablePatches =
            output.InstancesWithNotApplicablePatches;
    }
    if (output.InstancesWithUnreportedNotApplicablePatches !== undefined &&
        output.InstancesWithUnreportedNotApplicablePatches !== null) {
        contents.InstancesWithUnreportedNotApplicablePatches =
            output.InstancesWithUnreportedNotApplicablePatches;
    }
    return contents;
};
const deserializeAws_json1_1DescribePatchGroupsResult = (output, context) => {
    let contents = {
        __type: "DescribePatchGroupsResult",
        Mappings: undefined,
        NextToken: undefined
    };
    if (output.Mappings !== undefined && output.Mappings !== null) {
        contents.Mappings = deserializeAws_json1_1PatchGroupPatchBaselineMappingList(output.Mappings, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribePatchPropertiesResult = (output, context) => {
    let contents = {
        __type: "DescribePatchPropertiesResult",
        NextToken: undefined,
        Properties: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1PatchPropertiesList(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSessionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeSessionsResponse",
        NextToken: undefined,
        Sessions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Sessions !== undefined && output.Sessions !== null) {
        contents.Sessions = deserializeAws_json1_1SessionList(output.Sessions, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentAlreadyExists = (output, context) => {
    let contents = {
        __type: "DocumentAlreadyExists",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DocumentDefaultVersionDescription = (output, context) => {
    let contents = {
        __type: "DocumentDefaultVersionDescription",
        DefaultVersion: undefined,
        DefaultVersionName: undefined,
        Name: undefined
    };
    if (output.DefaultVersion !== undefined && output.DefaultVersion !== null) {
        contents.DefaultVersion = output.DefaultVersion;
    }
    if (output.DefaultVersionName !== undefined &&
        output.DefaultVersionName !== null) {
        contents.DefaultVersionName = output.DefaultVersionName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DocumentDescription = (output, context) => {
    let contents = {
        __type: "DocumentDescription",
        AttachmentsInformation: undefined,
        CreatedDate: undefined,
        DefaultVersion: undefined,
        Description: undefined,
        DocumentFormat: undefined,
        DocumentType: undefined,
        DocumentVersion: undefined,
        Hash: undefined,
        HashType: undefined,
        LatestVersion: undefined,
        Name: undefined,
        Owner: undefined,
        Parameters: undefined,
        PlatformTypes: undefined,
        Requires: undefined,
        SchemaVersion: undefined,
        Sha1: undefined,
        Status: undefined,
        StatusInformation: undefined,
        Tags: undefined,
        TargetType: undefined,
        VersionName: undefined
    };
    if (output.AttachmentsInformation !== undefined &&
        output.AttachmentsInformation !== null) {
        contents.AttachmentsInformation = deserializeAws_json1_1AttachmentInformationList(output.AttachmentsInformation, context);
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.DefaultVersion !== undefined && output.DefaultVersion !== null) {
        contents.DefaultVersion = output.DefaultVersion;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DocumentFormat !== undefined && output.DocumentFormat !== null) {
        contents.DocumentFormat = output.DocumentFormat;
    }
    if (output.DocumentType !== undefined && output.DocumentType !== null) {
        contents.DocumentType = output.DocumentType;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.Hash !== undefined && output.Hash !== null) {
        contents.Hash = output.Hash;
    }
    if (output.HashType !== undefined && output.HashType !== null) {
        contents.HashType = output.HashType;
    }
    if (output.LatestVersion !== undefined && output.LatestVersion !== null) {
        contents.LatestVersion = output.LatestVersion;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1DocumentParameterList(output.Parameters, context);
    }
    if (output.PlatformTypes !== undefined && output.PlatformTypes !== null) {
        contents.PlatformTypes = deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context);
    }
    if (output.Requires !== undefined && output.Requires !== null) {
        contents.Requires = deserializeAws_json1_1DocumentRequiresList(output.Requires, context);
    }
    if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
        contents.SchemaVersion = output.SchemaVersion;
    }
    if (output.Sha1 !== undefined && output.Sha1 !== null) {
        contents.Sha1 = output.Sha1;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusInformation !== undefined &&
        output.StatusInformation !== null) {
        contents.StatusInformation = output.StatusInformation;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TargetType !== undefined && output.TargetType !== null) {
        contents.TargetType = output.TargetType;
    }
    if (output.VersionName !== undefined && output.VersionName !== null) {
        contents.VersionName = output.VersionName;
    }
    return contents;
};
const deserializeAws_json1_1DocumentIdentifier = (output, context) => {
    let contents = {
        __type: "DocumentIdentifier",
        DocumentFormat: undefined,
        DocumentType: undefined,
        DocumentVersion: undefined,
        Name: undefined,
        Owner: undefined,
        PlatformTypes: undefined,
        Requires: undefined,
        SchemaVersion: undefined,
        Tags: undefined,
        TargetType: undefined,
        VersionName: undefined
    };
    if (output.DocumentFormat !== undefined && output.DocumentFormat !== null) {
        contents.DocumentFormat = output.DocumentFormat;
    }
    if (output.DocumentType !== undefined && output.DocumentType !== null) {
        contents.DocumentType = output.DocumentType;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.PlatformTypes !== undefined && output.PlatformTypes !== null) {
        contents.PlatformTypes = deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context);
    }
    if (output.Requires !== undefined && output.Requires !== null) {
        contents.Requires = deserializeAws_json1_1DocumentRequiresList(output.Requires, context);
    }
    if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
        contents.SchemaVersion = output.SchemaVersion;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TargetType !== undefined && output.TargetType !== null) {
        contents.TargetType = output.TargetType;
    }
    if (output.VersionName !== undefined && output.VersionName !== null) {
        contents.VersionName = output.VersionName;
    }
    return contents;
};
const deserializeAws_json1_1DocumentIdentifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentIdentifier(entry, context));
};
const deserializeAws_json1_1DocumentLimitExceeded = (output, context) => {
    let contents = {
        __type: "DocumentLimitExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DocumentParameter = (output, context) => {
    let contents = {
        __type: "DocumentParameter",
        DefaultValue: undefined,
        Description: undefined,
        Name: undefined,
        Type: undefined
    };
    if (output.DefaultValue !== undefined && output.DefaultValue !== null) {
        contents.DefaultValue = output.DefaultValue;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DocumentParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentParameter(entry, context));
};
const deserializeAws_json1_1DocumentPermissionLimit = (output, context) => {
    let contents = {
        __type: "DocumentPermissionLimit",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DocumentRequires = (output, context) => {
    let contents = {
        __type: "DocumentRequires",
        Name: undefined,
        Version: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1DocumentRequiresList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentRequires(entry, context));
};
const deserializeAws_json1_1DocumentVersionInfo = (output, context) => {
    let contents = {
        __type: "DocumentVersionInfo",
        CreatedDate: undefined,
        DocumentFormat: undefined,
        DocumentVersion: undefined,
        IsDefaultVersion: undefined,
        Name: undefined,
        Status: undefined,
        StatusInformation: undefined,
        VersionName: undefined
    };
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.DocumentFormat !== undefined && output.DocumentFormat !== null) {
        contents.DocumentFormat = output.DocumentFormat;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.IsDefaultVersion !== undefined &&
        output.IsDefaultVersion !== null) {
        contents.IsDefaultVersion = output.IsDefaultVersion;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusInformation !== undefined &&
        output.StatusInformation !== null) {
        contents.StatusInformation = output.StatusInformation;
    }
    if (output.VersionName !== undefined && output.VersionName !== null) {
        contents.VersionName = output.VersionName;
    }
    return contents;
};
const deserializeAws_json1_1DocumentVersionLimitExceeded = (output, context) => {
    let contents = {
        __type: "DocumentVersionLimitExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DocumentVersionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentVersionInfo(entry, context));
};
const deserializeAws_json1_1DoesNotExistException = (output, context) => {
    let contents = {
        __type: "DoesNotExistException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentContent = (output, context) => {
    let contents = {
        __type: "DuplicateDocumentContent",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateDocumentVersionName = (output, context) => {
    let contents = {
        __type: "DuplicateDocumentVersionName",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateInstanceId = (output, context) => {
    let contents = {
        __type: "DuplicateInstanceId"
    };
    return contents;
};
const deserializeAws_json1_1EffectivePatch = (output, context) => {
    let contents = {
        __type: "EffectivePatch",
        Patch: undefined,
        PatchStatus: undefined
    };
    if (output.Patch !== undefined && output.Patch !== null) {
        contents.Patch = deserializeAws_json1_1Patch(output.Patch, context);
    }
    if (output.PatchStatus !== undefined && output.PatchStatus !== null) {
        contents.PatchStatus = deserializeAws_json1_1PatchStatus(output.PatchStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1EffectivePatchList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EffectivePatch(entry, context));
};
const deserializeAws_json1_1FailedCreateAssociation = (output, context) => {
    let contents = {
        __type: "FailedCreateAssociation",
        Entry: undefined,
        Fault: undefined,
        Message: undefined
    };
    if (output.Entry !== undefined && output.Entry !== null) {
        contents.Entry = deserializeAws_json1_1CreateAssociationBatchRequestEntry(output.Entry, context);
    }
    if (output.Fault !== undefined && output.Fault !== null) {
        contents.Fault = output.Fault;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1FailedCreateAssociationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedCreateAssociation(entry, context));
};
const deserializeAws_json1_1FailureDetails = (output, context) => {
    let contents = {
        __type: "FailureDetails",
        Details: undefined,
        FailureStage: undefined,
        FailureType: undefined
    };
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = deserializeAws_json1_1AutomationParameterMap(output.Details, context);
    }
    if (output.FailureStage !== undefined && output.FailureStage !== null) {
        contents.FailureStage = output.FailureStage;
    }
    if (output.FailureType !== undefined && output.FailureType !== null) {
        contents.FailureType = output.FailureType;
    }
    return contents;
};
const deserializeAws_json1_1FeatureNotAvailableException = (output, context) => {
    let contents = {
        __type: "FeatureNotAvailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetAutomationExecutionResult = (output, context) => {
    let contents = {
        __type: "GetAutomationExecutionResult",
        AutomationExecution: undefined
    };
    if (output.AutomationExecution !== undefined &&
        output.AutomationExecution !== null) {
        contents.AutomationExecution = deserializeAws_json1_1AutomationExecution(output.AutomationExecution, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCalendarStateResponse = (output, context) => {
    let contents = {
        __type: "GetCalendarStateResponse",
        AtTime: undefined,
        NextTransitionTime: undefined,
        State: undefined
    };
    if (output.AtTime !== undefined && output.AtTime !== null) {
        contents.AtTime = output.AtTime;
    }
    if (output.NextTransitionTime !== undefined &&
        output.NextTransitionTime !== null) {
        contents.NextTransitionTime = output.NextTransitionTime;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1GetCommandInvocationResult = (output, context) => {
    let contents = {
        __type: "GetCommandInvocationResult",
        CloudWatchOutputConfig: undefined,
        CommandId: undefined,
        Comment: undefined,
        DocumentName: undefined,
        DocumentVersion: undefined,
        ExecutionElapsedTime: undefined,
        ExecutionEndDateTime: undefined,
        ExecutionStartDateTime: undefined,
        InstanceId: undefined,
        PluginName: undefined,
        ResponseCode: undefined,
        StandardErrorContent: undefined,
        StandardErrorUrl: undefined,
        StandardOutputContent: undefined,
        StandardOutputUrl: undefined,
        Status: undefined,
        StatusDetails: undefined
    };
    if (output.CloudWatchOutputConfig !== undefined &&
        output.CloudWatchOutputConfig !== null) {
        contents.CloudWatchOutputConfig = deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context);
    }
    if (output.CommandId !== undefined && output.CommandId !== null) {
        contents.CommandId = output.CommandId;
    }
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.ExecutionElapsedTime !== undefined &&
        output.ExecutionElapsedTime !== null) {
        contents.ExecutionElapsedTime = output.ExecutionElapsedTime;
    }
    if (output.ExecutionEndDateTime !== undefined &&
        output.ExecutionEndDateTime !== null) {
        contents.ExecutionEndDateTime = output.ExecutionEndDateTime;
    }
    if (output.ExecutionStartDateTime !== undefined &&
        output.ExecutionStartDateTime !== null) {
        contents.ExecutionStartDateTime = output.ExecutionStartDateTime;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.PluginName !== undefined && output.PluginName !== null) {
        contents.PluginName = output.PluginName;
    }
    if (output.ResponseCode !== undefined && output.ResponseCode !== null) {
        contents.ResponseCode = output.ResponseCode;
    }
    if (output.StandardErrorContent !== undefined &&
        output.StandardErrorContent !== null) {
        contents.StandardErrorContent = output.StandardErrorContent;
    }
    if (output.StandardErrorUrl !== undefined &&
        output.StandardErrorUrl !== null) {
        contents.StandardErrorUrl = output.StandardErrorUrl;
    }
    if (output.StandardOutputContent !== undefined &&
        output.StandardOutputContent !== null) {
        contents.StandardOutputContent = output.StandardOutputContent;
    }
    if (output.StandardOutputUrl !== undefined &&
        output.StandardOutputUrl !== null) {
        contents.StandardOutputUrl = output.StandardOutputUrl;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    return contents;
};
const deserializeAws_json1_1GetConnectionStatusResponse = (output, context) => {
    let contents = {
        __type: "GetConnectionStatusResponse",
        Status: undefined,
        Target: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    return contents;
};
const deserializeAws_json1_1GetDefaultPatchBaselineResult = (output, context) => {
    let contents = {
        __type: "GetDefaultPatchBaselineResult",
        BaselineId: undefined,
        OperatingSystem: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    return contents;
};
const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult = (output, context) => {
    let contents = {
        __type: "GetDeployablePatchSnapshotForInstanceResult",
        InstanceId: undefined,
        Product: undefined,
        SnapshotDownloadUrl: undefined,
        SnapshotId: undefined
    };
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Product !== undefined && output.Product !== null) {
        contents.Product = output.Product;
    }
    if (output.SnapshotDownloadUrl !== undefined &&
        output.SnapshotDownloadUrl !== null) {
        contents.SnapshotDownloadUrl = output.SnapshotDownloadUrl;
    }
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    return contents;
};
const deserializeAws_json1_1GetDocumentResult = (output, context) => {
    let contents = {
        __type: "GetDocumentResult",
        AttachmentsContent: undefined,
        Content: undefined,
        DocumentFormat: undefined,
        DocumentType: undefined,
        DocumentVersion: undefined,
        Name: undefined,
        Requires: undefined,
        Status: undefined,
        StatusInformation: undefined,
        VersionName: undefined
    };
    if (output.AttachmentsContent !== undefined &&
        output.AttachmentsContent !== null) {
        contents.AttachmentsContent = deserializeAws_json1_1AttachmentContentList(output.AttachmentsContent, context);
    }
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = output.Content;
    }
    if (output.DocumentFormat !== undefined && output.DocumentFormat !== null) {
        contents.DocumentFormat = output.DocumentFormat;
    }
    if (output.DocumentType !== undefined && output.DocumentType !== null) {
        contents.DocumentType = output.DocumentType;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Requires !== undefined && output.Requires !== null) {
        contents.Requires = deserializeAws_json1_1DocumentRequiresList(output.Requires, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusInformation !== undefined &&
        output.StatusInformation !== null) {
        contents.StatusInformation = output.StatusInformation;
    }
    if (output.VersionName !== undefined && output.VersionName !== null) {
        contents.VersionName = output.VersionName;
    }
    return contents;
};
const deserializeAws_json1_1GetInventoryResult = (output, context) => {
    let contents = {
        __type: "GetInventoryResult",
        Entities: undefined,
        NextToken: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1InventoryResultEntityList(output.Entities, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetInventorySchemaResult = (output, context) => {
    let contents = {
        __type: "GetInventorySchemaResult",
        NextToken: undefined,
        Schemas: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Schemas !== undefined && output.Schemas !== null) {
        contents.Schemas = deserializeAws_json1_1InventoryItemSchemaResultList(output.Schemas, context);
    }
    return contents;
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionResult = (output, context) => {
    let contents = {
        __type: "GetMaintenanceWindowExecutionResult",
        EndTime: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TaskIds: undefined,
        WindowExecutionId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TaskIds !== undefined && output.TaskIds !== null) {
        contents.TaskIds = deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList(output.TaskIds, context);
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult = (output, context) => {
    let contents = {
        __type: "GetMaintenanceWindowExecutionTaskInvocationResult",
        EndTime: undefined,
        ExecutionId: undefined,
        InvocationId: undefined,
        OwnerInformation: undefined,
        Parameters: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TaskExecutionId: undefined,
        TaskType: undefined,
        WindowExecutionId: undefined,
        WindowTargetId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.InvocationId !== undefined && output.InvocationId !== null) {
        contents.InvocationId = output.InvocationId;
    }
    if (output.OwnerInformation !== undefined &&
        output.OwnerInformation !== null) {
        contents.OwnerInformation = output.OwnerInformation;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = output.Parameters;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TaskExecutionId !== undefined && output.TaskExecutionId !== null) {
        contents.TaskExecutionId = output.TaskExecutionId;
    }
    if (output.TaskType !== undefined && output.TaskType !== null) {
        contents.TaskType = output.TaskType;
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult = (output, context) => {
    let contents = {
        __type: "GetMaintenanceWindowExecutionTaskResult",
        EndTime: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Priority: undefined,
        ServiceRole: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TaskArn: undefined,
        TaskExecutionId: undefined,
        TaskParameters: undefined,
        Type: undefined,
        WindowExecutionId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    if (output.TaskExecutionId !== undefined && output.TaskExecutionId !== null) {
        contents.TaskExecutionId = output.TaskExecutionId;
    }
    if (output.TaskParameters !== undefined && output.TaskParameters !== null) {
        contents.TaskParameters = deserializeAws_json1_1MaintenanceWindowTaskParametersList(output.TaskParameters, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1GetMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "GetMaintenanceWindowResult",
        AllowUnassociatedTargets: undefined,
        CreatedDate: undefined,
        Cutoff: undefined,
        Description: undefined,
        Duration: undefined,
        Enabled: undefined,
        EndDate: undefined,
        ModifiedDate: undefined,
        Name: undefined,
        NextExecutionTime: undefined,
        Schedule: undefined,
        ScheduleTimezone: undefined,
        StartDate: undefined,
        WindowId: undefined
    };
    if (output.AllowUnassociatedTargets !== undefined &&
        output.AllowUnassociatedTargets !== null) {
        contents.AllowUnassociatedTargets = output.AllowUnassociatedTargets;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.Cutoff !== undefined && output.Cutoff !== null) {
        contents.Cutoff = output.Cutoff;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Duration !== undefined && output.Duration !== null) {
        contents.Duration = output.Duration;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.EndDate !== undefined && output.EndDate !== null) {
        contents.EndDate = output.EndDate;
    }
    if (output.ModifiedDate !== undefined && output.ModifiedDate !== null) {
        contents.ModifiedDate = new Date(Math.round(output.ModifiedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NextExecutionTime !== undefined &&
        output.NextExecutionTime !== null) {
        contents.NextExecutionTime = output.NextExecutionTime;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.ScheduleTimezone !== undefined &&
        output.ScheduleTimezone !== null) {
        contents.ScheduleTimezone = output.ScheduleTimezone;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = output.StartDate;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1GetMaintenanceWindowTaskResult = (output, context) => {
    let contents = {
        __type: "GetMaintenanceWindowTaskResult",
        Description: undefined,
        LoggingInfo: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        Priority: undefined,
        ServiceRoleArn: undefined,
        Targets: undefined,
        TaskArn: undefined,
        TaskInvocationParameters: undefined,
        TaskParameters: undefined,
        TaskType: undefined,
        WindowId: undefined,
        WindowTaskId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LoggingInfo !== undefined && output.LoggingInfo !== null) {
        contents.LoggingInfo = deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context);
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    if (output.TaskInvocationParameters !== undefined &&
        output.TaskInvocationParameters !== null) {
        contents.TaskInvocationParameters = deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context);
    }
    if (output.TaskParameters !== undefined && output.TaskParameters !== null) {
        contents.TaskParameters = deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context);
    }
    if (output.TaskType !== undefined && output.TaskType !== null) {
        contents.TaskType = output.TaskType;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTaskId !== undefined && output.WindowTaskId !== null) {
        contents.WindowTaskId = output.WindowTaskId;
    }
    return contents;
};
const deserializeAws_json1_1GetOpsItemResponse = (output, context) => {
    let contents = {
        __type: "GetOpsItemResponse",
        OpsItem: undefined
    };
    if (output.OpsItem !== undefined && output.OpsItem !== null) {
        contents.OpsItem = deserializeAws_json1_1OpsItem(output.OpsItem, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOpsSummaryResult = (output, context) => {
    let contents = {
        __type: "GetOpsSummaryResult",
        Entities: undefined,
        NextToken: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1OpsEntityList(output.Entities, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetParameterHistoryResult = (output, context) => {
    let contents = {
        __type: "GetParameterHistoryResult",
        NextToken: undefined,
        Parameters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterHistoryList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1GetParameterResult = (output, context) => {
    let contents = {
        __type: "GetParameterResult",
        Parameter: undefined
    };
    if (output.Parameter !== undefined && output.Parameter !== null) {
        contents.Parameter = deserializeAws_json1_1Parameter(output.Parameter, context);
    }
    return contents;
};
const deserializeAws_json1_1GetParametersByPathResult = (output, context) => {
    let contents = {
        __type: "GetParametersByPathResult",
        NextToken: undefined,
        Parameters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1GetParametersResult = (output, context) => {
    let contents = {
        __type: "GetParametersResult",
        InvalidParameters: undefined,
        Parameters: undefined
    };
    if (output.InvalidParameters !== undefined &&
        output.InvalidParameters !== null) {
        contents.InvalidParameters = deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParameterList(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPatchBaselineForPatchGroupResult = (output, context) => {
    let contents = {
        __type: "GetPatchBaselineForPatchGroupResult",
        BaselineId: undefined,
        OperatingSystem: undefined,
        PatchGroup: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.PatchGroup !== undefined && output.PatchGroup !== null) {
        contents.PatchGroup = output.PatchGroup;
    }
    return contents;
};
const deserializeAws_json1_1GetPatchBaselineResult = (output, context) => {
    let contents = {
        __type: "GetPatchBaselineResult",
        ApprovalRules: undefined,
        ApprovedPatches: undefined,
        ApprovedPatchesComplianceLevel: undefined,
        ApprovedPatchesEnableNonSecurity: undefined,
        BaselineId: undefined,
        CreatedDate: undefined,
        Description: undefined,
        GlobalFilters: undefined,
        ModifiedDate: undefined,
        Name: undefined,
        OperatingSystem: undefined,
        PatchGroups: undefined,
        RejectedPatches: undefined,
        RejectedPatchesAction: undefined,
        Sources: undefined
    };
    if (output.ApprovalRules !== undefined && output.ApprovalRules !== null) {
        contents.ApprovalRules = deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context);
    }
    if (output.ApprovedPatches !== undefined && output.ApprovedPatches !== null) {
        contents.ApprovedPatches = deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context);
    }
    if (output.ApprovedPatchesComplianceLevel !== undefined &&
        output.ApprovedPatchesComplianceLevel !== null) {
        contents.ApprovedPatchesComplianceLevel =
            output.ApprovedPatchesComplianceLevel;
    }
    if (output.ApprovedPatchesEnableNonSecurity !== undefined &&
        output.ApprovedPatchesEnableNonSecurity !== null) {
        contents.ApprovedPatchesEnableNonSecurity =
            output.ApprovedPatchesEnableNonSecurity;
    }
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GlobalFilters !== undefined && output.GlobalFilters !== null) {
        contents.GlobalFilters = deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context);
    }
    if (output.ModifiedDate !== undefined && output.ModifiedDate !== null) {
        contents.ModifiedDate = new Date(Math.round(output.ModifiedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.PatchGroups !== undefined && output.PatchGroups !== null) {
        contents.PatchGroups = deserializeAws_json1_1PatchGroupList(output.PatchGroups, context);
    }
    if (output.RejectedPatches !== undefined && output.RejectedPatches !== null) {
        contents.RejectedPatches = deserializeAws_json1_1PatchIdList(output.RejectedPatches, context);
    }
    if (output.RejectedPatchesAction !== undefined &&
        output.RejectedPatchesAction !== null) {
        contents.RejectedPatchesAction = output.RejectedPatchesAction;
    }
    if (output.Sources !== undefined && output.Sources !== null) {
        contents.Sources = deserializeAws_json1_1PatchSourceList(output.Sources, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServiceSettingResult = (output, context) => {
    let contents = {
        __type: "GetServiceSettingResult",
        ServiceSetting: undefined
    };
    if (output.ServiceSetting !== undefined && output.ServiceSetting !== null) {
        contents.ServiceSetting = deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context);
    }
    return contents;
};
const deserializeAws_json1_1HierarchyLevelLimitExceededException = (output, context) => {
    let contents = {
        __type: "HierarchyLevelLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1HierarchyTypeMismatchException = (output, context) => {
    let contents = {
        __type: "HierarchyTypeMismatchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatch = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatch",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IncompatiblePolicyException = (output, context) => {
    let contents = {
        __type: "IncompatiblePolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceAggregatedAssociationOverview = (output, context) => {
    let contents = {
        __type: "InstanceAggregatedAssociationOverview",
        DetailedStatus: undefined,
        InstanceAssociationStatusAggregatedCount: undefined
    };
    if (output.DetailedStatus !== undefined && output.DetailedStatus !== null) {
        contents.DetailedStatus = output.DetailedStatus;
    }
    if (output.InstanceAssociationStatusAggregatedCount !== undefined &&
        output.InstanceAssociationStatusAggregatedCount !== null) {
        contents.InstanceAssociationStatusAggregatedCount = deserializeAws_json1_1InstanceAssociationStatusAggregatedCount(output.InstanceAssociationStatusAggregatedCount, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceAssociation = (output, context) => {
    let contents = {
        __type: "InstanceAssociation",
        AssociationId: undefined,
        AssociationVersion: undefined,
        Content: undefined,
        InstanceId: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = output.Content;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    return contents;
};
const deserializeAws_json1_1InstanceAssociationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceAssociation(entry, context));
};
const deserializeAws_json1_1InstanceAssociationOutputLocation = (output, context) => {
    let contents = {
        __type: "InstanceAssociationOutputLocation",
        S3Location: undefined
    };
    if (output.S3Location !== undefined && output.S3Location !== null) {
        contents.S3Location = deserializeAws_json1_1S3OutputLocation(output.S3Location, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceAssociationOutputUrl = (output, context) => {
    let contents = {
        __type: "InstanceAssociationOutputUrl",
        S3OutputUrl: undefined
    };
    if (output.S3OutputUrl !== undefined && output.S3OutputUrl !== null) {
        contents.S3OutputUrl = deserializeAws_json1_1S3OutputUrl(output.S3OutputUrl, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceAssociationStatusAggregatedCount = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InstanceAssociationStatusInfo = (output, context) => {
    let contents = {
        __type: "InstanceAssociationStatusInfo",
        AssociationId: undefined,
        AssociationName: undefined,
        AssociationVersion: undefined,
        DetailedStatus: undefined,
        DocumentVersion: undefined,
        ErrorCode: undefined,
        ExecutionDate: undefined,
        ExecutionSummary: undefined,
        InstanceId: undefined,
        Name: undefined,
        OutputUrl: undefined,
        Status: undefined
    };
    if (output.AssociationId !== undefined && output.AssociationId !== null) {
        contents.AssociationId = output.AssociationId;
    }
    if (output.AssociationName !== undefined && output.AssociationName !== null) {
        contents.AssociationName = output.AssociationName;
    }
    if (output.AssociationVersion !== undefined &&
        output.AssociationVersion !== null) {
        contents.AssociationVersion = output.AssociationVersion;
    }
    if (output.DetailedStatus !== undefined && output.DetailedStatus !== null) {
        contents.DetailedStatus = output.DetailedStatus;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ExecutionDate !== undefined && output.ExecutionDate !== null) {
        contents.ExecutionDate = new Date(Math.round(output.ExecutionDate * 1000));
    }
    if (output.ExecutionSummary !== undefined &&
        output.ExecutionSummary !== null) {
        contents.ExecutionSummary = output.ExecutionSummary;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputUrl !== undefined && output.OutputUrl !== null) {
        contents.OutputUrl = deserializeAws_json1_1InstanceAssociationOutputUrl(output.OutputUrl, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1InstanceAssociationStatusInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceAssociationStatusInfo(entry, context));
};
const deserializeAws_json1_1InstanceIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InstanceInformation = (output, context) => {
    let contents = {
        __type: "InstanceInformation",
        ActivationId: undefined,
        AgentVersion: undefined,
        AssociationOverview: undefined,
        AssociationStatus: undefined,
        ComputerName: undefined,
        IPAddress: undefined,
        IamRole: undefined,
        InstanceId: undefined,
        IsLatestVersion: undefined,
        LastAssociationExecutionDate: undefined,
        LastPingDateTime: undefined,
        LastSuccessfulAssociationExecutionDate: undefined,
        Name: undefined,
        PingStatus: undefined,
        PlatformName: undefined,
        PlatformType: undefined,
        PlatformVersion: undefined,
        RegistrationDate: undefined,
        ResourceType: undefined
    };
    if (output.ActivationId !== undefined && output.ActivationId !== null) {
        contents.ActivationId = output.ActivationId;
    }
    if (output.AgentVersion !== undefined && output.AgentVersion !== null) {
        contents.AgentVersion = output.AgentVersion;
    }
    if (output.AssociationOverview !== undefined &&
        output.AssociationOverview !== null) {
        contents.AssociationOverview = deserializeAws_json1_1InstanceAggregatedAssociationOverview(output.AssociationOverview, context);
    }
    if (output.AssociationStatus !== undefined &&
        output.AssociationStatus !== null) {
        contents.AssociationStatus = output.AssociationStatus;
    }
    if (output.ComputerName !== undefined && output.ComputerName !== null) {
        contents.ComputerName = output.ComputerName;
    }
    if (output.IPAddress !== undefined && output.IPAddress !== null) {
        contents.IPAddress = output.IPAddress;
    }
    if (output.IamRole !== undefined && output.IamRole !== null) {
        contents.IamRole = output.IamRole;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.IsLatestVersion !== undefined && output.IsLatestVersion !== null) {
        contents.IsLatestVersion = output.IsLatestVersion;
    }
    if (output.LastAssociationExecutionDate !== undefined &&
        output.LastAssociationExecutionDate !== null) {
        contents.LastAssociationExecutionDate = new Date(Math.round(output.LastAssociationExecutionDate * 1000));
    }
    if (output.LastPingDateTime !== undefined &&
        output.LastPingDateTime !== null) {
        contents.LastPingDateTime = new Date(Math.round(output.LastPingDateTime * 1000));
    }
    if (output.LastSuccessfulAssociationExecutionDate !== undefined &&
        output.LastSuccessfulAssociationExecutionDate !== null) {
        contents.LastSuccessfulAssociationExecutionDate = new Date(Math.round(output.LastSuccessfulAssociationExecutionDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PingStatus !== undefined && output.PingStatus !== null) {
        contents.PingStatus = output.PingStatus;
    }
    if (output.PlatformName !== undefined && output.PlatformName !== null) {
        contents.PlatformName = output.PlatformName;
    }
    if (output.PlatformType !== undefined && output.PlatformType !== null) {
        contents.PlatformType = output.PlatformType;
    }
    if (output.PlatformVersion !== undefined && output.PlatformVersion !== null) {
        contents.PlatformVersion = output.PlatformVersion;
    }
    if (output.RegistrationDate !== undefined &&
        output.RegistrationDate !== null) {
        contents.RegistrationDate = new Date(Math.round(output.RegistrationDate * 1000));
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1InstanceInformationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceInformation(entry, context));
};
const deserializeAws_json1_1InstancePatchState = (output, context) => {
    let contents = {
        __type: "InstancePatchState",
        BaselineId: undefined,
        FailedCount: undefined,
        InstallOverrideList: undefined,
        InstalledCount: undefined,
        InstalledOtherCount: undefined,
        InstalledPendingRebootCount: undefined,
        InstalledRejectedCount: undefined,
        InstanceId: undefined,
        LastNoRebootInstallOperationTime: undefined,
        MissingCount: undefined,
        NotApplicableCount: undefined,
        Operation: undefined,
        OperationEndTime: undefined,
        OperationStartTime: undefined,
        OwnerInformation: undefined,
        PatchGroup: undefined,
        RebootOption: undefined,
        SnapshotId: undefined,
        UnreportedNotApplicableCount: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.FailedCount !== undefined && output.FailedCount !== null) {
        contents.FailedCount = output.FailedCount;
    }
    if (output.InstallOverrideList !== undefined &&
        output.InstallOverrideList !== null) {
        contents.InstallOverrideList = output.InstallOverrideList;
    }
    if (output.InstalledCount !== undefined && output.InstalledCount !== null) {
        contents.InstalledCount = output.InstalledCount;
    }
    if (output.InstalledOtherCount !== undefined &&
        output.InstalledOtherCount !== null) {
        contents.InstalledOtherCount = output.InstalledOtherCount;
    }
    if (output.InstalledPendingRebootCount !== undefined &&
        output.InstalledPendingRebootCount !== null) {
        contents.InstalledPendingRebootCount = output.InstalledPendingRebootCount;
    }
    if (output.InstalledRejectedCount !== undefined &&
        output.InstalledRejectedCount !== null) {
        contents.InstalledRejectedCount = output.InstalledRejectedCount;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.LastNoRebootInstallOperationTime !== undefined &&
        output.LastNoRebootInstallOperationTime !== null) {
        contents.LastNoRebootInstallOperationTime = new Date(Math.round(output.LastNoRebootInstallOperationTime * 1000));
    }
    if (output.MissingCount !== undefined && output.MissingCount !== null) {
        contents.MissingCount = output.MissingCount;
    }
    if (output.NotApplicableCount !== undefined &&
        output.NotApplicableCount !== null) {
        contents.NotApplicableCount = output.NotApplicableCount;
    }
    if (output.Operation !== undefined && output.Operation !== null) {
        contents.Operation = output.Operation;
    }
    if (output.OperationEndTime !== undefined &&
        output.OperationEndTime !== null) {
        contents.OperationEndTime = new Date(Math.round(output.OperationEndTime * 1000));
    }
    if (output.OperationStartTime !== undefined &&
        output.OperationStartTime !== null) {
        contents.OperationStartTime = new Date(Math.round(output.OperationStartTime * 1000));
    }
    if (output.OwnerInformation !== undefined &&
        output.OwnerInformation !== null) {
        contents.OwnerInformation = output.OwnerInformation;
    }
    if (output.PatchGroup !== undefined && output.PatchGroup !== null) {
        contents.PatchGroup = output.PatchGroup;
    }
    if (output.RebootOption !== undefined && output.RebootOption !== null) {
        contents.RebootOption = output.RebootOption;
    }
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    if (output.UnreportedNotApplicableCount !== undefined &&
        output.UnreportedNotApplicableCount !== null) {
        contents.UnreportedNotApplicableCount = output.UnreportedNotApplicableCount;
    }
    return contents;
};
const deserializeAws_json1_1InstancePatchStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstancePatchState(entry, context));
};
const deserializeAws_json1_1InstancePatchStatesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstancePatchState(entry, context));
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidActivation = (output, context) => {
    let contents = {
        __type: "InvalidActivation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidActivationId = (output, context) => {
    let contents = {
        __type: "InvalidActivationId",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAggregatorException = (output, context) => {
    let contents = {
        __type: "InvalidAggregatorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAllowedPatternException = (output, context) => {
    let contents = {
        __type: "InvalidAllowedPatternException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAssociation = (output, context) => {
    let contents = {
        __type: "InvalidAssociation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAssociationVersion = (output, context) => {
    let contents = {
        __type: "InvalidAssociationVersion",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAutomationExecutionParametersException = (output, context) => {
    let contents = {
        __type: "InvalidAutomationExecutionParametersException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAutomationSignalException = (output, context) => {
    let contents = {
        __type: "InvalidAutomationSignalException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAutomationStatusUpdateException = (output, context) => {
    let contents = {
        __type: "InvalidAutomationStatusUpdateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCommandId = (output, context) => {
    let contents = {
        __type: "InvalidCommandId"
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeleteInventoryParametersException = (output, context) => {
    let contents = {
        __type: "InvalidDeleteInventoryParametersException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeletionIdException = (output, context) => {
    let contents = {
        __type: "InvalidDeletionIdException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocument = (output, context) => {
    let contents = {
        __type: "InvalidDocument",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocumentContent = (output, context) => {
    let contents = {
        __type: "InvalidDocumentContent",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocumentOperation = (output, context) => {
    let contents = {
        __type: "InvalidDocumentOperation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocumentSchemaVersion = (output, context) => {
    let contents = {
        __type: "InvalidDocumentSchemaVersion",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocumentType = (output, context) => {
    let contents = {
        __type: "InvalidDocumentType",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDocumentVersion = (output, context) => {
    let contents = {
        __type: "InvalidDocumentVersion",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFilter = (output, context) => {
    let contents = {
        __type: "InvalidFilter",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFilterKey = (output, context) => {
    let contents = {
        __type: "InvalidFilterKey"
    };
    return contents;
};
const deserializeAws_json1_1InvalidFilterOption = (output, context) => {
    let contents = {
        __type: "InvalidFilterOption",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFilterValue = (output, context) => {
    let contents = {
        __type: "InvalidFilterValue",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInstanceId = (output, context) => {
    let contents = {
        __type: "InvalidInstanceId",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInstanceInformationFilterValue = (output, context) => {
    let contents = {
        __type: "InvalidInstanceInformationFilterValue",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInventoryGroupException = (output, context) => {
    let contents = {
        __type: "InvalidInventoryGroupException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInventoryItemContextException = (output, context) => {
    let contents = {
        __type: "InvalidInventoryItemContextException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInventoryRequestException = (output, context) => {
    let contents = {
        __type: "InvalidInventoryRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidItemContentException = (output, context) => {
    let contents = {
        __type: "InvalidItemContentException",
        Message: undefined,
        TypeName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1InvalidKeyId = (output, context) => {
    let contents = {
        __type: "InvalidKeyId",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextToken = (output, context) => {
    let contents = {
        __type: "InvalidNextToken",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNotificationConfig = (output, context) => {
    let contents = {
        __type: "InvalidNotificationConfig",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOptionException = (output, context) => {
    let contents = {
        __type: "InvalidOptionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOutputFolder = (output, context) => {
    let contents = {
        __type: "InvalidOutputFolder"
    };
    return contents;
};
const deserializeAws_json1_1InvalidOutputLocation = (output, context) => {
    let contents = {
        __type: "InvalidOutputLocation"
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameters = (output, context) => {
    let contents = {
        __type: "InvalidParameters",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPermissionType = (output, context) => {
    let contents = {
        __type: "InvalidPermissionType",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPluginName = (output, context) => {
    let contents = {
        __type: "InvalidPluginName"
    };
    return contents;
};
const deserializeAws_json1_1InvalidPolicyAttributeException = (output, context) => {
    let contents = {
        __type: "InvalidPolicyAttributeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPolicyTypeException = (output, context) => {
    let contents = {
        __type: "InvalidPolicyTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceId = (output, context) => {
    let contents = {
        __type: "InvalidResourceId"
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceType = (output, context) => {
    let contents = {
        __type: "InvalidResourceType"
    };
    return contents;
};
const deserializeAws_json1_1InvalidResultAttributeException = (output, context) => {
    let contents = {
        __type: "InvalidResultAttributeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRole = (output, context) => {
    let contents = {
        __type: "InvalidRole",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSchedule = (output, context) => {
    let contents = {
        __type: "InvalidSchedule",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTarget = (output, context) => {
    let contents = {
        __type: "InvalidTarget",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTypeNameException = (output, context) => {
    let contents = {
        __type: "InvalidTypeNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidUpdate = (output, context) => {
    let contents = {
        __type: "InvalidUpdate",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InventoryDeletionStatusItem = (output, context) => {
    let contents = {
        __type: "InventoryDeletionStatusItem",
        DeletionId: undefined,
        DeletionStartTime: undefined,
        DeletionSummary: undefined,
        LastStatus: undefined,
        LastStatusMessage: undefined,
        LastStatusUpdateTime: undefined,
        TypeName: undefined
    };
    if (output.DeletionId !== undefined && output.DeletionId !== null) {
        contents.DeletionId = output.DeletionId;
    }
    if (output.DeletionStartTime !== undefined &&
        output.DeletionStartTime !== null) {
        contents.DeletionStartTime = new Date(Math.round(output.DeletionStartTime * 1000));
    }
    if (output.DeletionSummary !== undefined && output.DeletionSummary !== null) {
        contents.DeletionSummary = deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context);
    }
    if (output.LastStatus !== undefined && output.LastStatus !== null) {
        contents.LastStatus = output.LastStatus;
    }
    if (output.LastStatusMessage !== undefined &&
        output.LastStatusMessage !== null) {
        contents.LastStatusMessage = output.LastStatusMessage;
    }
    if (output.LastStatusUpdateTime !== undefined &&
        output.LastStatusUpdateTime !== null) {
        contents.LastStatusUpdateTime = new Date(Math.round(output.LastStatusUpdateTime * 1000));
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1InventoryDeletionSummary = (output, context) => {
    let contents = {
        __type: "InventoryDeletionSummary",
        RemainingCount: undefined,
        SummaryItems: undefined,
        TotalCount: undefined
    };
    if (output.RemainingCount !== undefined && output.RemainingCount !== null) {
        contents.RemainingCount = output.RemainingCount;
    }
    if (output.SummaryItems !== undefined && output.SummaryItems !== null) {
        contents.SummaryItems = deserializeAws_json1_1InventoryDeletionSummaryItems(output.SummaryItems, context);
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1InventoryDeletionSummaryItem = (output, context) => {
    let contents = {
        __type: "InventoryDeletionSummaryItem",
        Count: undefined,
        RemainingCount: undefined,
        Version: undefined
    };
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.RemainingCount !== undefined && output.RemainingCount !== null) {
        contents.RemainingCount = output.RemainingCount;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1InventoryDeletionSummaryItems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryDeletionSummaryItem(entry, context));
};
const deserializeAws_json1_1InventoryDeletionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryDeletionStatusItem(entry, context));
};
const deserializeAws_json1_1InventoryItemAttribute = (output, context) => {
    let contents = {
        __type: "InventoryItemAttribute",
        DataType: undefined,
        Name: undefined
    };
    if (output.DataType !== undefined && output.DataType !== null) {
        contents.DataType = output.DataType;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1InventoryItemAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryItemAttribute(entry, context));
};
const deserializeAws_json1_1InventoryItemEntry = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InventoryItemEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryItemEntry(entry, context));
};
const deserializeAws_json1_1InventoryItemSchema = (output, context) => {
    let contents = {
        __type: "InventoryItemSchema",
        Attributes: undefined,
        DisplayName: undefined,
        TypeName: undefined,
        Version: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1InventoryItemAttributeList(output.Attributes, context);
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1InventoryItemSchemaResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryItemSchema(entry, context));
};
const deserializeAws_json1_1InventoryResultEntity = (output, context) => {
    let contents = {
        __type: "InventoryResultEntity",
        Data: undefined,
        Id: undefined
    };
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = deserializeAws_json1_1InventoryResultItemMap(output.Data, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1InventoryResultEntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InventoryResultEntity(entry, context));
};
const deserializeAws_json1_1InventoryResultItem = (output, context) => {
    let contents = {
        __type: "InventoryResultItem",
        CaptureTime: undefined,
        Content: undefined,
        ContentHash: undefined,
        SchemaVersion: undefined,
        TypeName: undefined
    };
    if (output.CaptureTime !== undefined && output.CaptureTime !== null) {
        contents.CaptureTime = output.CaptureTime;
    }
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = deserializeAws_json1_1InventoryItemEntryList(output.Content, context);
    }
    if (output.ContentHash !== undefined && output.ContentHash !== null) {
        contents.ContentHash = output.ContentHash;
    }
    if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
        contents.SchemaVersion = output.SchemaVersion;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1InventoryResultItemMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1InventoryResultItem(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1InvocationDoesNotExist = (output, context) => {
    let contents = {
        __type: "InvocationDoesNotExist"
    };
    return contents;
};
const deserializeAws_json1_1ItemContentMismatchException = (output, context) => {
    let contents = {
        __type: "ItemContentMismatchException",
        Message: undefined,
        TypeName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1ItemSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "ItemSizeLimitExceededException",
        Message: undefined,
        TypeName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1LabelParameterVersionResult = (output, context) => {
    let contents = {
        __type: "LabelParameterVersionResult",
        InvalidLabels: undefined,
        ParameterVersion: undefined
    };
    if (output.InvalidLabels !== undefined && output.InvalidLabels !== null) {
        contents.InvalidLabels = deserializeAws_json1_1ParameterLabelList(output.InvalidLabels, context);
    }
    if (output.ParameterVersion !== undefined &&
        output.ParameterVersion !== null) {
        contents.ParameterVersion = output.ParameterVersion;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociationVersionsResult = (output, context) => {
    let contents = {
        __type: "ListAssociationVersionsResult",
        AssociationVersions: undefined,
        NextToken: undefined
    };
    if (output.AssociationVersions !== undefined &&
        output.AssociationVersions !== null) {
        contents.AssociationVersions = deserializeAws_json1_1AssociationVersionList(output.AssociationVersions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociationsResult = (output, context) => {
    let contents = {
        __type: "ListAssociationsResult",
        Associations: undefined,
        NextToken: undefined
    };
    if (output.Associations !== undefined && output.Associations !== null) {
        contents.Associations = deserializeAws_json1_1AssociationList(output.Associations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCommandInvocationsResult = (output, context) => {
    let contents = {
        __type: "ListCommandInvocationsResult",
        CommandInvocations: undefined,
        NextToken: undefined
    };
    if (output.CommandInvocations !== undefined &&
        output.CommandInvocations !== null) {
        contents.CommandInvocations = deserializeAws_json1_1CommandInvocationList(output.CommandInvocations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCommandsResult = (output, context) => {
    let contents = {
        __type: "ListCommandsResult",
        Commands: undefined,
        NextToken: undefined
    };
    if (output.Commands !== undefined && output.Commands !== null) {
        contents.Commands = deserializeAws_json1_1CommandList(output.Commands, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListComplianceItemsResult = (output, context) => {
    let contents = {
        __type: "ListComplianceItemsResult",
        ComplianceItems: undefined,
        NextToken: undefined
    };
    if (output.ComplianceItems !== undefined && output.ComplianceItems !== null) {
        contents.ComplianceItems = deserializeAws_json1_1ComplianceItemList(output.ComplianceItems, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListComplianceSummariesResult = (output, context) => {
    let contents = {
        __type: "ListComplianceSummariesResult",
        ComplianceSummaryItems: undefined,
        NextToken: undefined
    };
    if (output.ComplianceSummaryItems !== undefined &&
        output.ComplianceSummaryItems !== null) {
        contents.ComplianceSummaryItems = deserializeAws_json1_1ComplianceSummaryItemList(output.ComplianceSummaryItems, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDocumentVersionsResult = (output, context) => {
    let contents = {
        __type: "ListDocumentVersionsResult",
        DocumentVersions: undefined,
        NextToken: undefined
    };
    if (output.DocumentVersions !== undefined &&
        output.DocumentVersions !== null) {
        contents.DocumentVersions = deserializeAws_json1_1DocumentVersionList(output.DocumentVersions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDocumentsResult = (output, context) => {
    let contents = {
        __type: "ListDocumentsResult",
        DocumentIdentifiers: undefined,
        NextToken: undefined
    };
    if (output.DocumentIdentifiers !== undefined &&
        output.DocumentIdentifiers !== null) {
        contents.DocumentIdentifiers = deserializeAws_json1_1DocumentIdentifierList(output.DocumentIdentifiers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListInventoryEntriesResult = (output, context) => {
    let contents = {
        __type: "ListInventoryEntriesResult",
        CaptureTime: undefined,
        Entries: undefined,
        InstanceId: undefined,
        NextToken: undefined,
        SchemaVersion: undefined,
        TypeName: undefined
    };
    if (output.CaptureTime !== undefined && output.CaptureTime !== null) {
        contents.CaptureTime = output.CaptureTime;
    }
    if (output.Entries !== undefined && output.Entries !== null) {
        contents.Entries = deserializeAws_json1_1InventoryItemEntryList(output.Entries, context);
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
        contents.SchemaVersion = output.SchemaVersion;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1ListResourceComplianceSummariesResult = (output, context) => {
    let contents = {
        __type: "ListResourceComplianceSummariesResult",
        NextToken: undefined,
        ResourceComplianceSummaryItems: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceComplianceSummaryItems !== undefined &&
        output.ResourceComplianceSummaryItems !== null) {
        contents.ResourceComplianceSummaryItems = deserializeAws_json1_1ResourceComplianceSummaryItemList(output.ResourceComplianceSummaryItems, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResourceDataSyncResult = (output, context) => {
    let contents = {
        __type: "ListResourceDataSyncResult",
        NextToken: undefined,
        ResourceDataSyncItems: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceDataSyncItems !== undefined &&
        output.ResourceDataSyncItems !== null) {
        contents.ResourceDataSyncItems = deserializeAws_json1_1ResourceDataSyncItemList(output.ResourceDataSyncItems, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResult",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1LoggingInfo = (output, context) => {
    let contents = {
        __type: "LoggingInfo",
        S3BucketName: undefined,
        S3KeyPrefix: undefined,
        S3Region: undefined
    };
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    if (output.S3Region !== undefined && output.S3Region !== null) {
        contents.S3Region = output.S3Region;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowAutomationParameters = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowAutomationParameters",
        DocumentVersion: undefined,
        Parameters: undefined
    };
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1AutomationParameterMap(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowExecution = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowExecution",
        EndTime: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        WindowExecutionId: undefined,
        WindowId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowExecution(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowExecutionTaskIdentity",
        EndTime: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TaskArn: undefined,
        TaskExecutionId: undefined,
        TaskType: undefined,
        WindowExecutionId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    if (output.TaskExecutionId !== undefined && output.TaskExecutionId !== null) {
        contents.TaskExecutionId = output.TaskExecutionId;
    }
    if (output.TaskType !== undefined && output.TaskType !== null) {
        contents.TaskType = output.TaskType;
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowExecutionTaskInvocationIdentity",
        EndTime: undefined,
        ExecutionId: undefined,
        InvocationId: undefined,
        OwnerInformation: undefined,
        Parameters: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusDetails: undefined,
        TaskExecutionId: undefined,
        TaskType: undefined,
        WindowExecutionId: undefined,
        WindowTargetId: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.InvocationId !== undefined && output.InvocationId !== null) {
        contents.InvocationId = output.InvocationId;
    }
    if (output.OwnerInformation !== undefined &&
        output.OwnerInformation !== null) {
        contents.OwnerInformation = output.OwnerInformation;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = output.Parameters;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.TaskExecutionId !== undefined && output.TaskExecutionId !== null) {
        contents.TaskExecutionId = output.TaskExecutionId;
    }
    if (output.TaskType !== undefined && output.TaskType !== null) {
        contents.TaskType = output.TaskType;
    }
    if (output.WindowExecutionId !== undefined &&
        output.WindowExecutionId !== null) {
        contents.WindowExecutionId = output.WindowExecutionId;
    }
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowIdentity = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowIdentity",
        Cutoff: undefined,
        Description: undefined,
        Duration: undefined,
        Enabled: undefined,
        EndDate: undefined,
        Name: undefined,
        NextExecutionTime: undefined,
        Schedule: undefined,
        ScheduleTimezone: undefined,
        StartDate: undefined,
        WindowId: undefined
    };
    if (output.Cutoff !== undefined && output.Cutoff !== null) {
        contents.Cutoff = output.Cutoff;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Duration !== undefined && output.Duration !== null) {
        contents.Duration = output.Duration;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.EndDate !== undefined && output.EndDate !== null) {
        contents.EndDate = output.EndDate;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NextExecutionTime !== undefined &&
        output.NextExecutionTime !== null) {
        contents.NextExecutionTime = output.NextExecutionTime;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.ScheduleTimezone !== undefined &&
        output.ScheduleTimezone !== null) {
        contents.ScheduleTimezone = output.ScheduleTimezone;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = output.StartDate;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowIdentityForTarget = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowIdentityForTarget",
        Name: undefined,
        WindowId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowIdentityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowIdentity(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowLambdaParameters = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowLambdaParameters",
        ClientContext: undefined,
        Payload: undefined,
        Qualifier: undefined
    };
    if (output.ClientContext !== undefined && output.ClientContext !== null) {
        contents.ClientContext = output.ClientContext;
    }
    if (output.Payload !== undefined && output.Payload !== null) {
        contents.Payload = Uint8Array.from(output.Payload);
    }
    if (output.Qualifier !== undefined && output.Qualifier !== null) {
        contents.Qualifier = output.Qualifier;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowRunCommandParameters = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowRunCommandParameters",
        CloudWatchOutputConfig: undefined,
        Comment: undefined,
        DocumentHash: undefined,
        DocumentHashType: undefined,
        DocumentVersion: undefined,
        NotificationConfig: undefined,
        OutputS3BucketName: undefined,
        OutputS3KeyPrefix: undefined,
        Parameters: undefined,
        ServiceRoleArn: undefined,
        TimeoutSeconds: undefined
    };
    if (output.CloudWatchOutputConfig !== undefined &&
        output.CloudWatchOutputConfig !== null) {
        contents.CloudWatchOutputConfig = deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context);
    }
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.DocumentHash !== undefined && output.DocumentHash !== null) {
        contents.DocumentHash = output.DocumentHash;
    }
    if (output.DocumentHashType !== undefined &&
        output.DocumentHashType !== null) {
        contents.DocumentHashType = output.DocumentHashType;
    }
    if (output.DocumentVersion !== undefined && output.DocumentVersion !== null) {
        contents.DocumentVersion = output.DocumentVersion;
    }
    if (output.NotificationConfig !== undefined &&
        output.NotificationConfig !== null) {
        contents.NotificationConfig = deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context);
    }
    if (output.OutputS3BucketName !== undefined &&
        output.OutputS3BucketName !== null) {
        contents.OutputS3BucketName = output.OutputS3BucketName;
    }
    if (output.OutputS3KeyPrefix !== undefined &&
        output.OutputS3KeyPrefix !== null) {
        contents.OutputS3KeyPrefix = output.OutputS3KeyPrefix;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.TimeoutSeconds !== undefined && output.TimeoutSeconds !== null) {
        contents.TimeoutSeconds = output.TimeoutSeconds;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowStepFunctionsParameters",
        Input: undefined,
        Name: undefined
    };
    if (output.Input !== undefined && output.Input !== null) {
        contents.Input = output.Input;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowTarget = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowTarget",
        Description: undefined,
        Name: undefined,
        OwnerInformation: undefined,
        ResourceType: undefined,
        Targets: undefined,
        WindowId: undefined,
        WindowTargetId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerInformation !== undefined &&
        output.OwnerInformation !== null) {
        contents.OwnerInformation = output.OwnerInformation;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowTarget(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowTask = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowTask",
        Description: undefined,
        LoggingInfo: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        Priority: undefined,
        ServiceRoleArn: undefined,
        Targets: undefined,
        TaskArn: undefined,
        TaskParameters: undefined,
        Type: undefined,
        WindowId: undefined,
        WindowTaskId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LoggingInfo !== undefined && output.LoggingInfo !== null) {
        contents.LoggingInfo = deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context);
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    if (output.TaskParameters !== undefined && output.TaskParameters !== null) {
        contents.TaskParameters = deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTaskId !== undefined && output.WindowTaskId !== null) {
        contents.WindowTaskId = output.WindowTaskId;
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowTaskInvocationParameters",
        Automation: undefined,
        Lambda: undefined,
        RunCommand: undefined,
        StepFunctions: undefined
    };
    if (output.Automation !== undefined && output.Automation !== null) {
        contents.Automation = deserializeAws_json1_1MaintenanceWindowAutomationParameters(output.Automation, context);
    }
    if (output.Lambda !== undefined && output.Lambda !== null) {
        contents.Lambda = deserializeAws_json1_1MaintenanceWindowLambdaParameters(output.Lambda, context);
    }
    if (output.RunCommand !== undefined && output.RunCommand !== null) {
        contents.RunCommand = deserializeAws_json1_1MaintenanceWindowRunCommandParameters(output.RunCommand, context);
    }
    if (output.StepFunctions !== undefined && output.StepFunctions !== null) {
        contents.StepFunctions = deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters(output.StepFunctions, context);
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowTaskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowTask(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (output, context) => {
    let contents = {
        __type: "MaintenanceWindowTaskParameterValueExpression",
        Values: undefined
    };
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1MaintenanceWindowTaskParameterValueList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1MaintenanceWindowTaskParameterValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MaintenanceWindowTaskParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1MaintenanceWindowTaskParametersList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowTaskParameters(entry, context));
};
const deserializeAws_json1_1MaintenanceWindowsForTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MaintenanceWindowIdentityForTarget(entry, context));
};
const deserializeAws_json1_1MaxDocumentSizeExceeded = (output, context) => {
    let contents = {
        __type: "MaxDocumentSizeExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ModifyDocumentPermissionResponse = (output, context) => {
    let contents = {
        __type: "ModifyDocumentPermissionResponse"
    };
    return contents;
};
const deserializeAws_json1_1NonCompliantSummary = (output, context) => {
    let contents = {
        __type: "NonCompliantSummary",
        NonCompliantCount: undefined,
        SeveritySummary: undefined
    };
    if (output.NonCompliantCount !== undefined &&
        output.NonCompliantCount !== null) {
        contents.NonCompliantCount = output.NonCompliantCount;
    }
    if (output.SeveritySummary !== undefined && output.SeveritySummary !== null) {
        contents.SeveritySummary = deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context);
    }
    return contents;
};
const deserializeAws_json1_1NormalStringMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1NotificationConfig = (output, context) => {
    let contents = {
        __type: "NotificationConfig",
        NotificationArn: undefined,
        NotificationEvents: undefined,
        NotificationType: undefined
    };
    if (output.NotificationArn !== undefined && output.NotificationArn !== null) {
        contents.NotificationArn = output.NotificationArn;
    }
    if (output.NotificationEvents !== undefined &&
        output.NotificationEvents !== null) {
        contents.NotificationEvents = deserializeAws_json1_1NotificationEventList(output.NotificationEvents, context);
    }
    if (output.NotificationType !== undefined &&
        output.NotificationType !== null) {
        contents.NotificationType = output.NotificationType;
    }
    return contents;
};
const deserializeAws_json1_1NotificationEventList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1OpsEntity = (output, context) => {
    let contents = {
        __type: "OpsEntity",
        Data: undefined,
        Id: undefined
    };
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = deserializeAws_json1_1OpsEntityItemMap(output.Data, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1OpsEntityItem = (output, context) => {
    let contents = {
        __type: "OpsEntityItem",
        CaptureTime: undefined,
        Content: undefined
    };
    if (output.CaptureTime !== undefined && output.CaptureTime !== null) {
        contents.CaptureTime = output.CaptureTime;
    }
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = deserializeAws_json1_1OpsEntityItemEntryList(output.Content, context);
    }
    return contents;
};
const deserializeAws_json1_1OpsEntityItemEntry = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1OpsEntityItemEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OpsEntityItemEntry(entry, context));
};
const deserializeAws_json1_1OpsEntityItemMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1OpsEntityItem(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1OpsEntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OpsEntity(entry, context));
};
const deserializeAws_json1_1OpsItem = (output, context) => {
    let contents = {
        __type: "OpsItem",
        Category: undefined,
        CreatedBy: undefined,
        CreatedTime: undefined,
        Description: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Notifications: undefined,
        OperationalData: undefined,
        OpsItemId: undefined,
        Priority: undefined,
        RelatedOpsItems: undefined,
        Severity: undefined,
        Source: undefined,
        Status: undefined,
        Title: undefined,
        Version: undefined
    };
    if (output.Category !== undefined && output.Category !== null) {
        contents.Category = output.Category;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = output.LastModifiedBy;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Notifications !== undefined && output.Notifications !== null) {
        contents.Notifications = deserializeAws_json1_1OpsItemNotifications(output.Notifications, context);
    }
    if (output.OperationalData !== undefined && output.OperationalData !== null) {
        contents.OperationalData = deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context);
    }
    if (output.OpsItemId !== undefined && output.OpsItemId !== null) {
        contents.OpsItemId = output.OpsItemId;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.RelatedOpsItems !== undefined && output.RelatedOpsItems !== null) {
        contents.RelatedOpsItems = deserializeAws_json1_1RelatedOpsItems(output.RelatedOpsItems, context);
    }
    if (output.Severity !== undefined && output.Severity !== null) {
        contents.Severity = output.Severity;
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = output.Source;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1OpsItemAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "OpsItemAlreadyExistsException",
        Message: undefined,
        OpsItemId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OpsItemId !== undefined && output.OpsItemId !== null) {
        contents.OpsItemId = output.OpsItemId;
    }
    return contents;
};
const deserializeAws_json1_1OpsItemDataValue = (output, context) => {
    let contents = {
        __type: "OpsItemDataValue",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1OpsItemInvalidParameterException = (output, context) => {
    let contents = {
        __type: "OpsItemInvalidParameterException",
        Message: undefined,
        ParameterNames: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ParameterNames !== undefined && output.ParameterNames !== null) {
        contents.ParameterNames = deserializeAws_json1_1OpsItemParameterNamesList(output.ParameterNames, context);
    }
    return contents;
};
const deserializeAws_json1_1OpsItemLimitExceededException = (output, context) => {
    let contents = {
        __type: "OpsItemLimitExceededException",
        Limit: undefined,
        LimitType: undefined,
        Message: undefined,
        ResourceTypes: undefined
    };
    if (output.Limit !== undefined && output.Limit !== null) {
        contents.Limit = output.Limit;
    }
    if (output.LimitType !== undefined && output.LimitType !== null) {
        contents.LimitType = output.LimitType;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceTypes !== undefined && output.ResourceTypes !== null) {
        contents.ResourceTypes = deserializeAws_json1_1OpsItemParameterNamesList(output.ResourceTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1OpsItemNotFoundException = (output, context) => {
    let contents = {
        __type: "OpsItemNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OpsItemNotification = (output, context) => {
    let contents = {
        __type: "OpsItemNotification",
        Arn: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    return contents;
};
const deserializeAws_json1_1OpsItemNotifications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OpsItemNotification(entry, context));
};
const deserializeAws_json1_1OpsItemOperationalData = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1OpsItemDataValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1OpsItemParameterNamesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1OpsItemSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OpsItemSummary(entry, context));
};
const deserializeAws_json1_1OpsItemSummary = (output, context) => {
    let contents = {
        __type: "OpsItemSummary",
        Category: undefined,
        CreatedBy: undefined,
        CreatedTime: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        OperationalData: undefined,
        OpsItemId: undefined,
        Priority: undefined,
        Severity: undefined,
        Source: undefined,
        Status: undefined,
        Title: undefined
    };
    if (output.Category !== undefined && output.Category !== null) {
        contents.Category = output.Category;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = output.LastModifiedBy;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.OperationalData !== undefined && output.OperationalData !== null) {
        contents.OperationalData = deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context);
    }
    if (output.OpsItemId !== undefined && output.OpsItemId !== null) {
        contents.OpsItemId = output.OpsItemId;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.Severity !== undefined && output.Severity !== null) {
        contents.Severity = output.Severity;
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = output.Source;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1OutputSource = (output, context) => {
    let contents = {
        __type: "OutputSource",
        OutputSourceId: undefined,
        OutputSourceType: undefined
    };
    if (output.OutputSourceId !== undefined && output.OutputSourceId !== null) {
        contents.OutputSourceId = output.OutputSourceId;
    }
    if (output.OutputSourceType !== undefined &&
        output.OutputSourceType !== null) {
        contents.OutputSourceType = output.OutputSourceType;
    }
    return contents;
};
const deserializeAws_json1_1Parameter = (output, context) => {
    let contents = {
        __type: "Parameter",
        ARN: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        Selector: undefined,
        SourceResult: undefined,
        Type: undefined,
        Value: undefined,
        Version: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Selector !== undefined && output.Selector !== null) {
        contents.Selector = output.Selector;
    }
    if (output.SourceResult !== undefined && output.SourceResult !== null) {
        contents.SourceResult = output.SourceResult;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1ParameterAlreadyExists = (output, context) => {
    let contents = {
        __type: "ParameterAlreadyExists",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterHistory = (output, context) => {
    let contents = {
        __type: "ParameterHistory",
        AllowedPattern: undefined,
        Description: undefined,
        KeyId: undefined,
        Labels: undefined,
        LastModifiedDate: undefined,
        LastModifiedUser: undefined,
        Name: undefined,
        Policies: undefined,
        Tier: undefined,
        Type: undefined,
        Value: undefined,
        Version: undefined
    };
    if (output.AllowedPattern !== undefined && output.AllowedPattern !== null) {
        contents.AllowedPattern = output.AllowedPattern;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.Labels !== undefined && output.Labels !== null) {
        contents.Labels = deserializeAws_json1_1ParameterLabelList(output.Labels, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.LastModifiedUser !== undefined &&
        output.LastModifiedUser !== null) {
        contents.LastModifiedUser = output.LastModifiedUser;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Policies !== undefined && output.Policies !== null) {
        contents.Policies = deserializeAws_json1_1ParameterPolicyList(output.Policies, context);
    }
    if (output.Tier !== undefined && output.Tier !== null) {
        contents.Tier = output.Tier;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1ParameterHistoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterHistory(entry, context));
};
const deserializeAws_json1_1ParameterInlinePolicy = (output, context) => {
    let contents = {
        __type: "ParameterInlinePolicy",
        PolicyStatus: undefined,
        PolicyText: undefined,
        PolicyType: undefined
    };
    if (output.PolicyStatus !== undefined && output.PolicyStatus !== null) {
        contents.PolicyStatus = output.PolicyStatus;
    }
    if (output.PolicyText !== undefined && output.PolicyText !== null) {
        contents.PolicyText = output.PolicyText;
    }
    if (output.PolicyType !== undefined && output.PolicyType !== null) {
        contents.PolicyType = output.PolicyType;
    }
    return contents;
};
const deserializeAws_json1_1ParameterLabelList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ParameterLimitExceeded = (output, context) => {
    let contents = {
        __type: "ParameterLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Parameter(entry, context));
};
const deserializeAws_json1_1ParameterMaxVersionLimitExceeded = (output, context) => {
    let contents = {
        __type: "ParameterMaxVersionLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterMetadata = (output, context) => {
    let contents = {
        __type: "ParameterMetadata",
        AllowedPattern: undefined,
        Description: undefined,
        KeyId: undefined,
        LastModifiedDate: undefined,
        LastModifiedUser: undefined,
        Name: undefined,
        Policies: undefined,
        Tier: undefined,
        Type: undefined,
        Version: undefined
    };
    if (output.AllowedPattern !== undefined && output.AllowedPattern !== null) {
        contents.AllowedPattern = output.AllowedPattern;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.LastModifiedUser !== undefined &&
        output.LastModifiedUser !== null) {
        contents.LastModifiedUser = output.LastModifiedUser;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Policies !== undefined && output.Policies !== null) {
        contents.Policies = deserializeAws_json1_1ParameterPolicyList(output.Policies, context);
    }
    if (output.Tier !== undefined && output.Tier !== null) {
        contents.Tier = output.Tier;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1ParameterMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterMetadata(entry, context));
};
const deserializeAws_json1_1ParameterNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ParameterNotFound = (output, context) => {
    let contents = {
        __type: "ParameterNotFound",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterPatternMismatchException = (output, context) => {
    let contents = {
        __type: "ParameterPatternMismatchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterPolicyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterInlinePolicy(entry, context));
};
const deserializeAws_json1_1ParameterValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ParameterVersionLabelLimitExceeded = (output, context) => {
    let contents = {
        __type: "ParameterVersionLabelLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParameterVersionNotFound = (output, context) => {
    let contents = {
        __type: "ParameterVersionNotFound",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Parameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1ParameterValueList(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1Patch = (output, context) => {
    let contents = {
        __type: "Patch",
        Classification: undefined,
        ContentUrl: undefined,
        Description: undefined,
        Id: undefined,
        KbNumber: undefined,
        Language: undefined,
        MsrcNumber: undefined,
        MsrcSeverity: undefined,
        Product: undefined,
        ProductFamily: undefined,
        ReleaseDate: undefined,
        Title: undefined,
        Vendor: undefined
    };
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.ContentUrl !== undefined && output.ContentUrl !== null) {
        contents.ContentUrl = output.ContentUrl;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.KbNumber !== undefined && output.KbNumber !== null) {
        contents.KbNumber = output.KbNumber;
    }
    if (output.Language !== undefined && output.Language !== null) {
        contents.Language = output.Language;
    }
    if (output.MsrcNumber !== undefined && output.MsrcNumber !== null) {
        contents.MsrcNumber = output.MsrcNumber;
    }
    if (output.MsrcSeverity !== undefined && output.MsrcSeverity !== null) {
        contents.MsrcSeverity = output.MsrcSeverity;
    }
    if (output.Product !== undefined && output.Product !== null) {
        contents.Product = output.Product;
    }
    if (output.ProductFamily !== undefined && output.ProductFamily !== null) {
        contents.ProductFamily = output.ProductFamily;
    }
    if (output.ReleaseDate !== undefined && output.ReleaseDate !== null) {
        contents.ReleaseDate = new Date(Math.round(output.ReleaseDate * 1000));
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    if (output.Vendor !== undefined && output.Vendor !== null) {
        contents.Vendor = output.Vendor;
    }
    return contents;
};
const deserializeAws_json1_1PatchBaselineIdentity = (output, context) => {
    let contents = {
        __type: "PatchBaselineIdentity",
        BaselineDescription: undefined,
        BaselineId: undefined,
        BaselineName: undefined,
        DefaultBaseline: undefined,
        OperatingSystem: undefined
    };
    if (output.BaselineDescription !== undefined &&
        output.BaselineDescription !== null) {
        contents.BaselineDescription = output.BaselineDescription;
    }
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.BaselineName !== undefined && output.BaselineName !== null) {
        contents.BaselineName = output.BaselineName;
    }
    if (output.DefaultBaseline !== undefined && output.DefaultBaseline !== null) {
        contents.DefaultBaseline = output.DefaultBaseline;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    return contents;
};
const deserializeAws_json1_1PatchBaselineIdentityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchBaselineIdentity(entry, context));
};
const deserializeAws_json1_1PatchComplianceData = (output, context) => {
    let contents = {
        __type: "PatchComplianceData",
        Classification: undefined,
        InstalledTime: undefined,
        KBId: undefined,
        Severity: undefined,
        State: undefined,
        Title: undefined
    };
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.InstalledTime !== undefined && output.InstalledTime !== null) {
        contents.InstalledTime = new Date(Math.round(output.InstalledTime * 1000));
    }
    if (output.KBId !== undefined && output.KBId !== null) {
        contents.KBId = output.KBId;
    }
    if (output.Severity !== undefined && output.Severity !== null) {
        contents.Severity = output.Severity;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1PatchComplianceDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchComplianceData(entry, context));
};
const deserializeAws_json1_1PatchFilter = (output, context) => {
    let contents = {
        __type: "PatchFilter",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1PatchFilterValueList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1PatchFilterGroup = (output, context) => {
    let contents = {
        __type: "PatchFilterGroup",
        PatchFilters: undefined
    };
    if (output.PatchFilters !== undefined && output.PatchFilters !== null) {
        contents.PatchFilters = deserializeAws_json1_1PatchFilterList(output.PatchFilters, context);
    }
    return contents;
};
const deserializeAws_json1_1PatchFilterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchFilter(entry, context));
};
const deserializeAws_json1_1PatchFilterValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PatchGroupList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PatchGroupPatchBaselineMapping = (output, context) => {
    let contents = {
        __type: "PatchGroupPatchBaselineMapping",
        BaselineIdentity: undefined,
        PatchGroup: undefined
    };
    if (output.BaselineIdentity !== undefined &&
        output.BaselineIdentity !== null) {
        contents.BaselineIdentity = deserializeAws_json1_1PatchBaselineIdentity(output.BaselineIdentity, context);
    }
    if (output.PatchGroup !== undefined && output.PatchGroup !== null) {
        contents.PatchGroup = output.PatchGroup;
    }
    return contents;
};
const deserializeAws_json1_1PatchGroupPatchBaselineMappingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchGroupPatchBaselineMapping(entry, context));
};
const deserializeAws_json1_1PatchIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PatchList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Patch(entry, context));
};
const deserializeAws_json1_1PatchPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchPropertyEntry(entry, context));
};
const deserializeAws_json1_1PatchPropertyEntry = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1PatchRule = (output, context) => {
    let contents = {
        __type: "PatchRule",
        ApproveAfterDays: undefined,
        ComplianceLevel: undefined,
        EnableNonSecurity: undefined,
        PatchFilterGroup: undefined
    };
    if (output.ApproveAfterDays !== undefined &&
        output.ApproveAfterDays !== null) {
        contents.ApproveAfterDays = output.ApproveAfterDays;
    }
    if (output.ComplianceLevel !== undefined && output.ComplianceLevel !== null) {
        contents.ComplianceLevel = output.ComplianceLevel;
    }
    if (output.EnableNonSecurity !== undefined &&
        output.EnableNonSecurity !== null) {
        contents.EnableNonSecurity = output.EnableNonSecurity;
    }
    if (output.PatchFilterGroup !== undefined &&
        output.PatchFilterGroup !== null) {
        contents.PatchFilterGroup = deserializeAws_json1_1PatchFilterGroup(output.PatchFilterGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1PatchRuleGroup = (output, context) => {
    let contents = {
        __type: "PatchRuleGroup",
        PatchRules: undefined
    };
    if (output.PatchRules !== undefined && output.PatchRules !== null) {
        contents.PatchRules = deserializeAws_json1_1PatchRuleList(output.PatchRules, context);
    }
    return contents;
};
const deserializeAws_json1_1PatchRuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchRule(entry, context));
};
const deserializeAws_json1_1PatchSource = (output, context) => {
    let contents = {
        __type: "PatchSource",
        Configuration: undefined,
        Name: undefined,
        Products: undefined
    };
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = output.Configuration;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Products !== undefined && output.Products !== null) {
        contents.Products = deserializeAws_json1_1PatchSourceProductList(output.Products, context);
    }
    return contents;
};
const deserializeAws_json1_1PatchSourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PatchSource(entry, context));
};
const deserializeAws_json1_1PatchSourceProductList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PatchStatus = (output, context) => {
    let contents = {
        __type: "PatchStatus",
        ApprovalDate: undefined,
        ComplianceLevel: undefined,
        DeploymentStatus: undefined
    };
    if (output.ApprovalDate !== undefined && output.ApprovalDate !== null) {
        contents.ApprovalDate = new Date(Math.round(output.ApprovalDate * 1000));
    }
    if (output.ComplianceLevel !== undefined && output.ComplianceLevel !== null) {
        contents.ComplianceLevel = output.ComplianceLevel;
    }
    if (output.DeploymentStatus !== undefined &&
        output.DeploymentStatus !== null) {
        contents.DeploymentStatus = output.DeploymentStatus;
    }
    return contents;
};
const deserializeAws_json1_1PlatformTypeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PoliciesLimitExceededException = (output, context) => {
    let contents = {
        __type: "PoliciesLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProgressCounters = (output, context) => {
    let contents = {
        __type: "ProgressCounters",
        CancelledSteps: undefined,
        FailedSteps: undefined,
        SuccessSteps: undefined,
        TimedOutSteps: undefined,
        TotalSteps: undefined
    };
    if (output.CancelledSteps !== undefined && output.CancelledSteps !== null) {
        contents.CancelledSteps = output.CancelledSteps;
    }
    if (output.FailedSteps !== undefined && output.FailedSteps !== null) {
        contents.FailedSteps = output.FailedSteps;
    }
    if (output.SuccessSteps !== undefined && output.SuccessSteps !== null) {
        contents.SuccessSteps = output.SuccessSteps;
    }
    if (output.TimedOutSteps !== undefined && output.TimedOutSteps !== null) {
        contents.TimedOutSteps = output.TimedOutSteps;
    }
    if (output.TotalSteps !== undefined && output.TotalSteps !== null) {
        contents.TotalSteps = output.TotalSteps;
    }
    return contents;
};
const deserializeAws_json1_1PutComplianceItemsResult = (output, context) => {
    let contents = {
        __type: "PutComplianceItemsResult"
    };
    return contents;
};
const deserializeAws_json1_1PutInventoryResult = (output, context) => {
    let contents = {
        __type: "PutInventoryResult",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PutParameterResult = (output, context) => {
    let contents = {
        __type: "PutParameterResult",
        Tier: undefined,
        Version: undefined
    };
    if (output.Tier !== undefined && output.Tier !== null) {
        contents.Tier = output.Tier;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1Regions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RegisterDefaultPatchBaselineResult = (output, context) => {
    let contents = {
        __type: "RegisterDefaultPatchBaselineResult",
        BaselineId: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    return contents;
};
const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult = (output, context) => {
    let contents = {
        __type: "RegisterPatchBaselineForPatchGroupResult",
        BaselineId: undefined,
        PatchGroup: undefined
    };
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.PatchGroup !== undefined && output.PatchGroup !== null) {
        contents.PatchGroup = output.PatchGroup;
    }
    return contents;
};
const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "RegisterTargetWithMaintenanceWindowResult",
        WindowTargetId: undefined
    };
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "RegisterTaskWithMaintenanceWindowResult",
        WindowTaskId: undefined
    };
    if (output.WindowTaskId !== undefined && output.WindowTaskId !== null) {
        contents.WindowTaskId = output.WindowTaskId;
    }
    return contents;
};
const deserializeAws_json1_1RelatedOpsItem = (output, context) => {
    let contents = {
        __type: "RelatedOpsItem",
        OpsItemId: undefined
    };
    if (output.OpsItemId !== undefined && output.OpsItemId !== null) {
        contents.OpsItemId = output.OpsItemId;
    }
    return contents;
};
const deserializeAws_json1_1RelatedOpsItems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelatedOpsItem(entry, context));
};
const deserializeAws_json1_1RemoveTagsFromResourceResult = (output, context) => {
    let contents = {
        __type: "RemoveTagsFromResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1ResetServiceSettingResult = (output, context) => {
    let contents = {
        __type: "ResetServiceSettingResult",
        ServiceSetting: undefined
    };
    if (output.ServiceSetting !== undefined && output.ServiceSetting !== null) {
        contents.ServiceSetting = deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context);
    }
    return contents;
};
const deserializeAws_json1_1ResolvedTargets = (output, context) => {
    let contents = {
        __type: "ResolvedTargets",
        ParameterValues: undefined,
        Truncated: undefined
    };
    if (output.ParameterValues !== undefined && output.ParameterValues !== null) {
        contents.ParameterValues = deserializeAws_json1_1TargetParameterList(output.ParameterValues, context);
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1ResourceComplianceSummaryItem = (output, context) => {
    let contents = {
        __type: "ResourceComplianceSummaryItem",
        ComplianceType: undefined,
        CompliantSummary: undefined,
        ExecutionSummary: undefined,
        NonCompliantSummary: undefined,
        OverallSeverity: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        Status: undefined
    };
    if (output.ComplianceType !== undefined && output.ComplianceType !== null) {
        contents.ComplianceType = output.ComplianceType;
    }
    if (output.CompliantSummary !== undefined &&
        output.CompliantSummary !== null) {
        contents.CompliantSummary = deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context);
    }
    if (output.ExecutionSummary !== undefined &&
        output.ExecutionSummary !== null) {
        contents.ExecutionSummary = deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context);
    }
    if (output.NonCompliantSummary !== undefined &&
        output.NonCompliantSummary !== null) {
        contents.NonCompliantSummary = deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context);
    }
    if (output.OverallSeverity !== undefined && output.OverallSeverity !== null) {
        contents.OverallSeverity = output.OverallSeverity;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ResourceComplianceSummaryItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceComplianceSummaryItem(entry, context));
};
const deserializeAws_json1_1ResourceDataSyncAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncAlreadyExistsException",
        SyncName: undefined
    };
    if (output.SyncName !== undefined && output.SyncName !== null) {
        contents.SyncName = output.SyncName;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncAwsOrganizationsSource",
        OrganizationSourceType: undefined,
        OrganizationalUnits: undefined
    };
    if (output.OrganizationSourceType !== undefined &&
        output.OrganizationSourceType !== null) {
        contents.OrganizationSourceType = output.OrganizationSourceType;
    }
    if (output.OrganizationalUnits !== undefined &&
        output.OrganizationalUnits !== null) {
        contents.OrganizationalUnits = deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList(output.OrganizationalUnits, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncConflictException = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncCountExceededException = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncCountExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncInvalidConfigurationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncItem = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncItem",
        LastStatus: undefined,
        LastSuccessfulSyncTime: undefined,
        LastSyncStatusMessage: undefined,
        LastSyncTime: undefined,
        S3Destination: undefined,
        SyncCreatedTime: undefined,
        SyncLastModifiedTime: undefined,
        SyncName: undefined,
        SyncSource: undefined,
        SyncType: undefined
    };
    if (output.LastStatus !== undefined && output.LastStatus !== null) {
        contents.LastStatus = output.LastStatus;
    }
    if (output.LastSuccessfulSyncTime !== undefined &&
        output.LastSuccessfulSyncTime !== null) {
        contents.LastSuccessfulSyncTime = new Date(Math.round(output.LastSuccessfulSyncTime * 1000));
    }
    if (output.LastSyncStatusMessage !== undefined &&
        output.LastSyncStatusMessage !== null) {
        contents.LastSyncStatusMessage = output.LastSyncStatusMessage;
    }
    if (output.LastSyncTime !== undefined && output.LastSyncTime !== null) {
        contents.LastSyncTime = new Date(Math.round(output.LastSyncTime * 1000));
    }
    if (output.S3Destination !== undefined && output.S3Destination !== null) {
        contents.S3Destination = deserializeAws_json1_1ResourceDataSyncS3Destination(output.S3Destination, context);
    }
    if (output.SyncCreatedTime !== undefined && output.SyncCreatedTime !== null) {
        contents.SyncCreatedTime = new Date(Math.round(output.SyncCreatedTime * 1000));
    }
    if (output.SyncLastModifiedTime !== undefined &&
        output.SyncLastModifiedTime !== null) {
        contents.SyncLastModifiedTime = new Date(Math.round(output.SyncLastModifiedTime * 1000));
    }
    if (output.SyncName !== undefined && output.SyncName !== null) {
        contents.SyncName = output.SyncName;
    }
    if (output.SyncSource !== undefined && output.SyncSource !== null) {
        contents.SyncSource = deserializeAws_json1_1ResourceDataSyncSourceWithState(output.SyncSource, context);
    }
    if (output.SyncType !== undefined && output.SyncType !== null) {
        contents.SyncType = output.SyncType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceDataSyncItem(entry, context));
};
const deserializeAws_json1_1ResourceDataSyncNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncNotFoundException",
        Message: undefined,
        SyncName: undefined,
        SyncType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.SyncName !== undefined && output.SyncName !== null) {
        contents.SyncName = output.SyncName;
    }
    if (output.SyncType !== undefined && output.SyncType !== null) {
        contents.SyncType = output.SyncType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncOrganizationalUnit = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncOrganizationalUnit",
        OrganizationalUnitId: undefined
    };
    if (output.OrganizationalUnitId !== undefined &&
        output.OrganizationalUnitId !== null) {
        contents.OrganizationalUnitId = output.OrganizationalUnitId;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context));
};
const deserializeAws_json1_1ResourceDataSyncS3Destination = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncS3Destination",
        AWSKMSKeyARN: undefined,
        BucketName: undefined,
        Prefix: undefined,
        Region: undefined,
        SyncFormat: undefined
    };
    if (output.AWSKMSKeyARN !== undefined && output.AWSKMSKeyARN !== null) {
        contents.AWSKMSKeyARN = output.AWSKMSKeyARN;
    }
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.Prefix !== undefined && output.Prefix !== null) {
        contents.Prefix = output.Prefix;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SyncFormat !== undefined && output.SyncFormat !== null) {
        contents.SyncFormat = output.SyncFormat;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDataSyncSourceRegionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceDataSyncSourceWithState = (output, context) => {
    let contents = {
        __type: "ResourceDataSyncSourceWithState",
        AwsOrganizationsSource: undefined,
        IncludeFutureRegions: undefined,
        SourceRegions: undefined,
        SourceType: undefined,
        State: undefined
    };
    if (output.AwsOrganizationsSource !== undefined &&
        output.AwsOrganizationsSource !== null) {
        contents.AwsOrganizationsSource = deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(output.AwsOrganizationsSource, context);
    }
    if (output.IncludeFutureRegions !== undefined &&
        output.IncludeFutureRegions !== null) {
        contents.IncludeFutureRegions = output.IncludeFutureRegions;
    }
    if (output.SourceRegions !== undefined && output.SourceRegions !== null) {
        contents.SourceRegions = deserializeAws_json1_1ResourceDataSyncSourceRegionList(output.SourceRegions, context);
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResumeSessionResponse = (output, context) => {
    let contents = {
        __type: "ResumeSessionResponse",
        SessionId: undefined,
        StreamUrl: undefined,
        TokenValue: undefined
    };
    if (output.SessionId !== undefined && output.SessionId !== null) {
        contents.SessionId = output.SessionId;
    }
    if (output.StreamUrl !== undefined && output.StreamUrl !== null) {
        contents.StreamUrl = output.StreamUrl;
    }
    if (output.TokenValue !== undefined && output.TokenValue !== null) {
        contents.TokenValue = output.TokenValue;
    }
    return contents;
};
const deserializeAws_json1_1S3OutputLocation = (output, context) => {
    let contents = {
        __type: "S3OutputLocation",
        OutputS3BucketName: undefined,
        OutputS3KeyPrefix: undefined,
        OutputS3Region: undefined
    };
    if (output.OutputS3BucketName !== undefined &&
        output.OutputS3BucketName !== null) {
        contents.OutputS3BucketName = output.OutputS3BucketName;
    }
    if (output.OutputS3KeyPrefix !== undefined &&
        output.OutputS3KeyPrefix !== null) {
        contents.OutputS3KeyPrefix = output.OutputS3KeyPrefix;
    }
    if (output.OutputS3Region !== undefined && output.OutputS3Region !== null) {
        contents.OutputS3Region = output.OutputS3Region;
    }
    return contents;
};
const deserializeAws_json1_1S3OutputUrl = (output, context) => {
    let contents = {
        __type: "S3OutputUrl",
        OutputUrl: undefined
    };
    if (output.OutputUrl !== undefined && output.OutputUrl !== null) {
        contents.OutputUrl = output.OutputUrl;
    }
    return contents;
};
const deserializeAws_json1_1ScheduledWindowExecution = (output, context) => {
    let contents = {
        __type: "ScheduledWindowExecution",
        ExecutionTime: undefined,
        Name: undefined,
        WindowId: undefined
    };
    if (output.ExecutionTime !== undefined && output.ExecutionTime !== null) {
        contents.ExecutionTime = output.ExecutionTime;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1ScheduledWindowExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScheduledWindowExecution(entry, context));
};
const deserializeAws_json1_1SendAutomationSignalResult = (output, context) => {
    let contents = {
        __type: "SendAutomationSignalResult"
    };
    return contents;
};
const deserializeAws_json1_1SendCommandResult = (output, context) => {
    let contents = {
        __type: "SendCommandResult",
        Command: undefined
    };
    if (output.Command !== undefined && output.Command !== null) {
        contents.Command = deserializeAws_json1_1Command(output.Command, context);
    }
    return contents;
};
const deserializeAws_json1_1ServiceSetting = (output, context) => {
    let contents = {
        __type: "ServiceSetting",
        ARN: undefined,
        LastModifiedDate: undefined,
        LastModifiedUser: undefined,
        SettingId: undefined,
        SettingValue: undefined,
        Status: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.LastModifiedUser !== undefined &&
        output.LastModifiedUser !== null) {
        contents.LastModifiedUser = output.LastModifiedUser;
    }
    if (output.SettingId !== undefined && output.SettingId !== null) {
        contents.SettingId = output.SettingId;
    }
    if (output.SettingValue !== undefined && output.SettingValue !== null) {
        contents.SettingValue = output.SettingValue;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ServiceSettingNotFound = (output, context) => {
    let contents = {
        __type: "ServiceSettingNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Session = (output, context) => {
    let contents = {
        __type: "Session",
        Details: undefined,
        DocumentName: undefined,
        EndDate: undefined,
        OutputUrl: undefined,
        Owner: undefined,
        SessionId: undefined,
        StartDate: undefined,
        Status: undefined,
        Target: undefined
    };
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = output.Details;
    }
    if (output.DocumentName !== undefined && output.DocumentName !== null) {
        contents.DocumentName = output.DocumentName;
    }
    if (output.EndDate !== undefined && output.EndDate !== null) {
        contents.EndDate = new Date(Math.round(output.EndDate * 1000));
    }
    if (output.OutputUrl !== undefined && output.OutputUrl !== null) {
        contents.OutputUrl = deserializeAws_json1_1SessionManagerOutputUrl(output.OutputUrl, context);
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.SessionId !== undefined && output.SessionId !== null) {
        contents.SessionId = output.SessionId;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = new Date(Math.round(output.StartDate * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    return contents;
};
const deserializeAws_json1_1SessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Session(entry, context));
};
const deserializeAws_json1_1SessionManagerOutputUrl = (output, context) => {
    let contents = {
        __type: "SessionManagerOutputUrl",
        CloudWatchOutputUrl: undefined,
        S3OutputUrl: undefined
    };
    if (output.CloudWatchOutputUrl !== undefined &&
        output.CloudWatchOutputUrl !== null) {
        contents.CloudWatchOutputUrl = output.CloudWatchOutputUrl;
    }
    if (output.S3OutputUrl !== undefined && output.S3OutputUrl !== null) {
        contents.S3OutputUrl = output.S3OutputUrl;
    }
    return contents;
};
const deserializeAws_json1_1SeveritySummary = (output, context) => {
    let contents = {
        __type: "SeveritySummary",
        CriticalCount: undefined,
        HighCount: undefined,
        InformationalCount: undefined,
        LowCount: undefined,
        MediumCount: undefined,
        UnspecifiedCount: undefined
    };
    if (output.CriticalCount !== undefined && output.CriticalCount !== null) {
        contents.CriticalCount = output.CriticalCount;
    }
    if (output.HighCount !== undefined && output.HighCount !== null) {
        contents.HighCount = output.HighCount;
    }
    if (output.InformationalCount !== undefined &&
        output.InformationalCount !== null) {
        contents.InformationalCount = output.InformationalCount;
    }
    if (output.LowCount !== undefined && output.LowCount !== null) {
        contents.LowCount = output.LowCount;
    }
    if (output.MediumCount !== undefined && output.MediumCount !== null) {
        contents.MediumCount = output.MediumCount;
    }
    if (output.UnspecifiedCount !== undefined &&
        output.UnspecifiedCount !== null) {
        contents.UnspecifiedCount = output.UnspecifiedCount;
    }
    return contents;
};
const deserializeAws_json1_1StartAssociationsOnceResult = (output, context) => {
    let contents = {
        __type: "StartAssociationsOnceResult"
    };
    return contents;
};
const deserializeAws_json1_1StartAutomationExecutionResult = (output, context) => {
    let contents = {
        __type: "StartAutomationExecutionResult",
        AutomationExecutionId: undefined
    };
    if (output.AutomationExecutionId !== undefined &&
        output.AutomationExecutionId !== null) {
        contents.AutomationExecutionId = output.AutomationExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1StartSessionResponse = (output, context) => {
    let contents = {
        __type: "StartSessionResponse",
        SessionId: undefined,
        StreamUrl: undefined,
        TokenValue: undefined
    };
    if (output.SessionId !== undefined && output.SessionId !== null) {
        contents.SessionId = output.SessionId;
    }
    if (output.StreamUrl !== undefined && output.StreamUrl !== null) {
        contents.StreamUrl = output.StreamUrl;
    }
    if (output.TokenValue !== undefined && output.TokenValue !== null) {
        contents.TokenValue = output.TokenValue;
    }
    return contents;
};
const deserializeAws_json1_1StatusUnchanged = (output, context) => {
    let contents = {
        __type: "StatusUnchanged"
    };
    return contents;
};
const deserializeAws_json1_1StepExecution = (output, context) => {
    let contents = {
        __type: "StepExecution",
        Action: undefined,
        ExecutionEndTime: undefined,
        ExecutionStartTime: undefined,
        FailureDetails: undefined,
        FailureMessage: undefined,
        Inputs: undefined,
        IsCritical: undefined,
        IsEnd: undefined,
        MaxAttempts: undefined,
        NextStep: undefined,
        OnFailure: undefined,
        Outputs: undefined,
        OverriddenParameters: undefined,
        Response: undefined,
        ResponseCode: undefined,
        StepExecutionId: undefined,
        StepName: undefined,
        StepStatus: undefined,
        TargetLocation: undefined,
        Targets: undefined,
        TimeoutSeconds: undefined,
        ValidNextSteps: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.ExecutionEndTime !== undefined &&
        output.ExecutionEndTime !== null) {
        contents.ExecutionEndTime = new Date(Math.round(output.ExecutionEndTime * 1000));
    }
    if (output.ExecutionStartTime !== undefined &&
        output.ExecutionStartTime !== null) {
        contents.ExecutionStartTime = new Date(Math.round(output.ExecutionStartTime * 1000));
    }
    if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
        contents.FailureDetails = deserializeAws_json1_1FailureDetails(output.FailureDetails, context);
    }
    if (output.FailureMessage !== undefined && output.FailureMessage !== null) {
        contents.FailureMessage = output.FailureMessage;
    }
    if (output.Inputs !== undefined && output.Inputs !== null) {
        contents.Inputs = deserializeAws_json1_1NormalStringMap(output.Inputs, context);
    }
    if (output.IsCritical !== undefined && output.IsCritical !== null) {
        contents.IsCritical = output.IsCritical;
    }
    if (output.IsEnd !== undefined && output.IsEnd !== null) {
        contents.IsEnd = output.IsEnd;
    }
    if (output.MaxAttempts !== undefined && output.MaxAttempts !== null) {
        contents.MaxAttempts = output.MaxAttempts;
    }
    if (output.NextStep !== undefined && output.NextStep !== null) {
        contents.NextStep = output.NextStep;
    }
    if (output.OnFailure !== undefined && output.OnFailure !== null) {
        contents.OnFailure = output.OnFailure;
    }
    if (output.Outputs !== undefined && output.Outputs !== null) {
        contents.Outputs = deserializeAws_json1_1AutomationParameterMap(output.Outputs, context);
    }
    if (output.OverriddenParameters !== undefined &&
        output.OverriddenParameters !== null) {
        contents.OverriddenParameters = deserializeAws_json1_1AutomationParameterMap(output.OverriddenParameters, context);
    }
    if (output.Response !== undefined && output.Response !== null) {
        contents.Response = output.Response;
    }
    if (output.ResponseCode !== undefined && output.ResponseCode !== null) {
        contents.ResponseCode = output.ResponseCode;
    }
    if (output.StepExecutionId !== undefined && output.StepExecutionId !== null) {
        contents.StepExecutionId = output.StepExecutionId;
    }
    if (output.StepName !== undefined && output.StepName !== null) {
        contents.StepName = output.StepName;
    }
    if (output.StepStatus !== undefined && output.StepStatus !== null) {
        contents.StepStatus = output.StepStatus;
    }
    if (output.TargetLocation !== undefined && output.TargetLocation !== null) {
        contents.TargetLocation = deserializeAws_json1_1TargetLocation(output.TargetLocation, context);
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.TimeoutSeconds !== undefined && output.TimeoutSeconds !== null) {
        contents.TimeoutSeconds = output.TimeoutSeconds;
    }
    if (output.ValidNextSteps !== undefined && output.ValidNextSteps !== null) {
        contents.ValidNextSteps = deserializeAws_json1_1ValidNextStepList(output.ValidNextSteps, context);
    }
    return contents;
};
const deserializeAws_json1_1StepExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StepExecution(entry, context));
};
const deserializeAws_json1_1StopAutomationExecutionResult = (output, context) => {
    let contents = {
        __type: "StopAutomationExecutionResult"
    };
    return contents;
};
const deserializeAws_json1_1SubTypeCountLimitExceededException = (output, context) => {
    let contents = {
        __type: "SubTypeCountLimitExceededException",
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1Target = (output, context) => {
    let contents = {
        __type: "Target",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1TargetValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1TargetInUseException = (output, context) => {
    let contents = {
        __type: "TargetInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TargetLocation = (output, context) => {
    let contents = {
        __type: "TargetLocation",
        Accounts: undefined,
        ExecutionRoleName: undefined,
        Regions: undefined,
        TargetLocationMaxConcurrency: undefined,
        TargetLocationMaxErrors: undefined
    };
    if (output.Accounts !== undefined && output.Accounts !== null) {
        contents.Accounts = deserializeAws_json1_1Accounts(output.Accounts, context);
    }
    if (output.ExecutionRoleName !== undefined &&
        output.ExecutionRoleName !== null) {
        contents.ExecutionRoleName = output.ExecutionRoleName;
    }
    if (output.Regions !== undefined && output.Regions !== null) {
        contents.Regions = deserializeAws_json1_1Regions(output.Regions, context);
    }
    if (output.TargetLocationMaxConcurrency !== undefined &&
        output.TargetLocationMaxConcurrency !== null) {
        contents.TargetLocationMaxConcurrency = output.TargetLocationMaxConcurrency;
    }
    if (output.TargetLocationMaxErrors !== undefined &&
        output.TargetLocationMaxErrors !== null) {
        contents.TargetLocationMaxErrors = output.TargetLocationMaxErrors;
    }
    return contents;
};
const deserializeAws_json1_1TargetLocations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetLocation(entry, context));
};
const deserializeAws_json1_1TargetMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1TargetMapValueList(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1TargetMapValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TargetMaps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetMap(entry, context));
};
const deserializeAws_json1_1TargetNotConnected = (output, context) => {
    let contents = {
        __type: "TargetNotConnected",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TargetParameterList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TargetValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Targets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Target(entry, context));
};
const deserializeAws_json1_1TerminateSessionResponse = (output, context) => {
    let contents = {
        __type: "TerminateSessionResponse",
        SessionId: undefined
    };
    if (output.SessionId !== undefined && output.SessionId !== null) {
        contents.SessionId = output.SessionId;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagsError = (output, context) => {
    let contents = {
        __type: "TooManyTagsError"
    };
    return contents;
};
const deserializeAws_json1_1TooManyUpdates = (output, context) => {
    let contents = {
        __type: "TooManyUpdates",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TotalSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "TotalSizeLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedCalendarException = (output, context) => {
    let contents = {
        __type: "UnsupportedCalendarException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureRequiredException = (output, context) => {
    let contents = {
        __type: "UnsupportedFeatureRequiredException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedInventoryItemContextException = (output, context) => {
    let contents = {
        __type: "UnsupportedInventoryItemContextException",
        Message: undefined,
        TypeName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedInventorySchemaVersionException = (output, context) => {
    let contents = {
        __type: "UnsupportedInventorySchemaVersionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedOperatingSystem = (output, context) => {
    let contents = {
        __type: "UnsupportedOperatingSystem",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedParameterType = (output, context) => {
    let contents = {
        __type: "UnsupportedParameterType",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedPlatformType = (output, context) => {
    let contents = {
        __type: "UnsupportedPlatformType",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateAssociationResult = (output, context) => {
    let contents = {
        __type: "UpdateAssociationResult",
        AssociationDescription: undefined
    };
    if (output.AssociationDescription !== undefined &&
        output.AssociationDescription !== null) {
        contents.AssociationDescription = deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateAssociationStatusResult = (output, context) => {
    let contents = {
        __type: "UpdateAssociationStatusResult",
        AssociationDescription: undefined
    };
    if (output.AssociationDescription !== undefined &&
        output.AssociationDescription !== null) {
        contents.AssociationDescription = deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateDocumentDefaultVersionResult = (output, context) => {
    let contents = {
        __type: "UpdateDocumentDefaultVersionResult",
        Description: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = deserializeAws_json1_1DocumentDefaultVersionDescription(output.Description, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateDocumentResult = (output, context) => {
    let contents = {
        __type: "UpdateDocumentResult",
        DocumentDescription: undefined
    };
    if (output.DocumentDescription !== undefined &&
        output.DocumentDescription !== null) {
        contents.DocumentDescription = deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateMaintenanceWindowResult = (output, context) => {
    let contents = {
        __type: "UpdateMaintenanceWindowResult",
        AllowUnassociatedTargets: undefined,
        Cutoff: undefined,
        Description: undefined,
        Duration: undefined,
        Enabled: undefined,
        EndDate: undefined,
        Name: undefined,
        Schedule: undefined,
        ScheduleTimezone: undefined,
        StartDate: undefined,
        WindowId: undefined
    };
    if (output.AllowUnassociatedTargets !== undefined &&
        output.AllowUnassociatedTargets !== null) {
        contents.AllowUnassociatedTargets = output.AllowUnassociatedTargets;
    }
    if (output.Cutoff !== undefined && output.Cutoff !== null) {
        contents.Cutoff = output.Cutoff;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Duration !== undefined && output.Duration !== null) {
        contents.Duration = output.Duration;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.EndDate !== undefined && output.EndDate !== null) {
        contents.EndDate = output.EndDate;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.ScheduleTimezone !== undefined &&
        output.ScheduleTimezone !== null) {
        contents.ScheduleTimezone = output.ScheduleTimezone;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = output.StartDate;
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMaintenanceWindowTargetResult = (output, context) => {
    let contents = {
        __type: "UpdateMaintenanceWindowTargetResult",
        Description: undefined,
        Name: undefined,
        OwnerInformation: undefined,
        Targets: undefined,
        WindowId: undefined,
        WindowTargetId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerInformation !== undefined &&
        output.OwnerInformation !== null) {
        contents.OwnerInformation = output.OwnerInformation;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTargetId !== undefined && output.WindowTargetId !== null) {
        contents.WindowTargetId = output.WindowTargetId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMaintenanceWindowTaskResult = (output, context) => {
    let contents = {
        __type: "UpdateMaintenanceWindowTaskResult",
        Description: undefined,
        LoggingInfo: undefined,
        MaxConcurrency: undefined,
        MaxErrors: undefined,
        Name: undefined,
        Priority: undefined,
        ServiceRoleArn: undefined,
        Targets: undefined,
        TaskArn: undefined,
        TaskInvocationParameters: undefined,
        TaskParameters: undefined,
        WindowId: undefined,
        WindowTaskId: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LoggingInfo !== undefined && output.LoggingInfo !== null) {
        contents.LoggingInfo = deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context);
    }
    if (output.MaxConcurrency !== undefined && output.MaxConcurrency !== null) {
        contents.MaxConcurrency = output.MaxConcurrency;
    }
    if (output.MaxErrors !== undefined && output.MaxErrors !== null) {
        contents.MaxErrors = output.MaxErrors;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1Targets(output.Targets, context);
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    if (output.TaskInvocationParameters !== undefined &&
        output.TaskInvocationParameters !== null) {
        contents.TaskInvocationParameters = deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context);
    }
    if (output.TaskParameters !== undefined && output.TaskParameters !== null) {
        contents.TaskParameters = deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context);
    }
    if (output.WindowId !== undefined && output.WindowId !== null) {
        contents.WindowId = output.WindowId;
    }
    if (output.WindowTaskId !== undefined && output.WindowTaskId !== null) {
        contents.WindowTaskId = output.WindowTaskId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateManagedInstanceRoleResult = (output, context) => {
    let contents = {
        __type: "UpdateManagedInstanceRoleResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateOpsItemResponse = (output, context) => {
    let contents = {
        __type: "UpdateOpsItemResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdatePatchBaselineResult = (output, context) => {
    let contents = {
        __type: "UpdatePatchBaselineResult",
        ApprovalRules: undefined,
        ApprovedPatches: undefined,
        ApprovedPatchesComplianceLevel: undefined,
        ApprovedPatchesEnableNonSecurity: undefined,
        BaselineId: undefined,
        CreatedDate: undefined,
        Description: undefined,
        GlobalFilters: undefined,
        ModifiedDate: undefined,
        Name: undefined,
        OperatingSystem: undefined,
        RejectedPatches: undefined,
        RejectedPatchesAction: undefined,
        Sources: undefined
    };
    if (output.ApprovalRules !== undefined && output.ApprovalRules !== null) {
        contents.ApprovalRules = deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context);
    }
    if (output.ApprovedPatches !== undefined && output.ApprovedPatches !== null) {
        contents.ApprovedPatches = deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context);
    }
    if (output.ApprovedPatchesComplianceLevel !== undefined &&
        output.ApprovedPatchesComplianceLevel !== null) {
        contents.ApprovedPatchesComplianceLevel =
            output.ApprovedPatchesComplianceLevel;
    }
    if (output.ApprovedPatchesEnableNonSecurity !== undefined &&
        output.ApprovedPatchesEnableNonSecurity !== null) {
        contents.ApprovedPatchesEnableNonSecurity =
            output.ApprovedPatchesEnableNonSecurity;
    }
    if (output.BaselineId !== undefined && output.BaselineId !== null) {
        contents.BaselineId = output.BaselineId;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GlobalFilters !== undefined && output.GlobalFilters !== null) {
        contents.GlobalFilters = deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context);
    }
    if (output.ModifiedDate !== undefined && output.ModifiedDate !== null) {
        contents.ModifiedDate = new Date(Math.round(output.ModifiedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.RejectedPatches !== undefined && output.RejectedPatches !== null) {
        contents.RejectedPatches = deserializeAws_json1_1PatchIdList(output.RejectedPatches, context);
    }
    if (output.RejectedPatchesAction !== undefined &&
        output.RejectedPatchesAction !== null) {
        contents.RejectedPatchesAction = output.RejectedPatchesAction;
    }
    if (output.Sources !== undefined && output.Sources !== null) {
        contents.Sources = deserializeAws_json1_1PatchSourceList(output.Sources, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateResourceDataSyncResult = (output, context) => {
    let contents = {
        __type: "UpdateResourceDataSyncResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateServiceSettingResult = (output, context) => {
    let contents = {
        __type: "UpdateServiceSettingResult"
    };
    return contents;
};
const deserializeAws_json1_1ValidNextStepList = (output, context) => {
    return (output || []).map((entry) => entry);
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