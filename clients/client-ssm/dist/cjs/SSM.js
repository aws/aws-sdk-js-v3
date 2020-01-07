"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SSMClient_1 = require("./SSMClient");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const CancelCommandCommand_1 = require("./commands/CancelCommandCommand");
const CancelMaintenanceWindowExecutionCommand_1 = require("./commands/CancelMaintenanceWindowExecutionCommand");
const CreateActivationCommand_1 = require("./commands/CreateActivationCommand");
const CreateAssociationBatchCommand_1 = require("./commands/CreateAssociationBatchCommand");
const CreateAssociationCommand_1 = require("./commands/CreateAssociationCommand");
const CreateDocumentCommand_1 = require("./commands/CreateDocumentCommand");
const CreateMaintenanceWindowCommand_1 = require("./commands/CreateMaintenanceWindowCommand");
const CreateOpsItemCommand_1 = require("./commands/CreateOpsItemCommand");
const CreatePatchBaselineCommand_1 = require("./commands/CreatePatchBaselineCommand");
const CreateResourceDataSyncCommand_1 = require("./commands/CreateResourceDataSyncCommand");
const DeleteActivationCommand_1 = require("./commands/DeleteActivationCommand");
const DeleteAssociationCommand_1 = require("./commands/DeleteAssociationCommand");
const DeleteDocumentCommand_1 = require("./commands/DeleteDocumentCommand");
const DeleteInventoryCommand_1 = require("./commands/DeleteInventoryCommand");
const DeleteMaintenanceWindowCommand_1 = require("./commands/DeleteMaintenanceWindowCommand");
const DeleteParameterCommand_1 = require("./commands/DeleteParameterCommand");
const DeleteParametersCommand_1 = require("./commands/DeleteParametersCommand");
const DeletePatchBaselineCommand_1 = require("./commands/DeletePatchBaselineCommand");
const DeleteResourceDataSyncCommand_1 = require("./commands/DeleteResourceDataSyncCommand");
const DeregisterManagedInstanceCommand_1 = require("./commands/DeregisterManagedInstanceCommand");
const DeregisterPatchBaselineForPatchGroupCommand_1 = require("./commands/DeregisterPatchBaselineForPatchGroupCommand");
const DeregisterTargetFromMaintenanceWindowCommand_1 = require("./commands/DeregisterTargetFromMaintenanceWindowCommand");
const DeregisterTaskFromMaintenanceWindowCommand_1 = require("./commands/DeregisterTaskFromMaintenanceWindowCommand");
const DescribeActivationsCommand_1 = require("./commands/DescribeActivationsCommand");
const DescribeAssociationCommand_1 = require("./commands/DescribeAssociationCommand");
const DescribeAssociationExecutionTargetsCommand_1 = require("./commands/DescribeAssociationExecutionTargetsCommand");
const DescribeAssociationExecutionsCommand_1 = require("./commands/DescribeAssociationExecutionsCommand");
const DescribeAutomationExecutionsCommand_1 = require("./commands/DescribeAutomationExecutionsCommand");
const DescribeAutomationStepExecutionsCommand_1 = require("./commands/DescribeAutomationStepExecutionsCommand");
const DescribeAvailablePatchesCommand_1 = require("./commands/DescribeAvailablePatchesCommand");
const DescribeDocumentCommand_1 = require("./commands/DescribeDocumentCommand");
const DescribeDocumentPermissionCommand_1 = require("./commands/DescribeDocumentPermissionCommand");
const DescribeEffectiveInstanceAssociationsCommand_1 = require("./commands/DescribeEffectiveInstanceAssociationsCommand");
const DescribeEffectivePatchesForPatchBaselineCommand_1 = require("./commands/DescribeEffectivePatchesForPatchBaselineCommand");
const DescribeInstanceAssociationsStatusCommand_1 = require("./commands/DescribeInstanceAssociationsStatusCommand");
const DescribeInstanceInformationCommand_1 = require("./commands/DescribeInstanceInformationCommand");
const DescribeInstancePatchStatesCommand_1 = require("./commands/DescribeInstancePatchStatesCommand");
const DescribeInstancePatchStatesForPatchGroupCommand_1 = require("./commands/DescribeInstancePatchStatesForPatchGroupCommand");
const DescribeInstancePatchesCommand_1 = require("./commands/DescribeInstancePatchesCommand");
const DescribeInventoryDeletionsCommand_1 = require("./commands/DescribeInventoryDeletionsCommand");
const DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand");
const DescribeMaintenanceWindowExecutionTasksCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionTasksCommand");
const DescribeMaintenanceWindowExecutionsCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionsCommand");
const DescribeMaintenanceWindowScheduleCommand_1 = require("./commands/DescribeMaintenanceWindowScheduleCommand");
const DescribeMaintenanceWindowTargetsCommand_1 = require("./commands/DescribeMaintenanceWindowTargetsCommand");
const DescribeMaintenanceWindowTasksCommand_1 = require("./commands/DescribeMaintenanceWindowTasksCommand");
const DescribeMaintenanceWindowsCommand_1 = require("./commands/DescribeMaintenanceWindowsCommand");
const DescribeMaintenanceWindowsForTargetCommand_1 = require("./commands/DescribeMaintenanceWindowsForTargetCommand");
const DescribeOpsItemsCommand_1 = require("./commands/DescribeOpsItemsCommand");
const DescribeParametersCommand_1 = require("./commands/DescribeParametersCommand");
const DescribePatchBaselinesCommand_1 = require("./commands/DescribePatchBaselinesCommand");
const DescribePatchGroupStateCommand_1 = require("./commands/DescribePatchGroupStateCommand");
const DescribePatchGroupsCommand_1 = require("./commands/DescribePatchGroupsCommand");
const DescribePatchPropertiesCommand_1 = require("./commands/DescribePatchPropertiesCommand");
const DescribeSessionsCommand_1 = require("./commands/DescribeSessionsCommand");
const GetAutomationExecutionCommand_1 = require("./commands/GetAutomationExecutionCommand");
const GetCalendarStateCommand_1 = require("./commands/GetCalendarStateCommand");
const GetCommandInvocationCommand_1 = require("./commands/GetCommandInvocationCommand");
const GetConnectionStatusCommand_1 = require("./commands/GetConnectionStatusCommand");
const GetDefaultPatchBaselineCommand_1 = require("./commands/GetDefaultPatchBaselineCommand");
const GetDeployablePatchSnapshotForInstanceCommand_1 = require("./commands/GetDeployablePatchSnapshotForInstanceCommand");
const GetDocumentCommand_1 = require("./commands/GetDocumentCommand");
const GetInventoryCommand_1 = require("./commands/GetInventoryCommand");
const GetInventorySchemaCommand_1 = require("./commands/GetInventorySchemaCommand");
const GetMaintenanceWindowCommand_1 = require("./commands/GetMaintenanceWindowCommand");
const GetMaintenanceWindowExecutionCommand_1 = require("./commands/GetMaintenanceWindowExecutionCommand");
const GetMaintenanceWindowExecutionTaskCommand_1 = require("./commands/GetMaintenanceWindowExecutionTaskCommand");
const GetMaintenanceWindowExecutionTaskInvocationCommand_1 = require("./commands/GetMaintenanceWindowExecutionTaskInvocationCommand");
const GetMaintenanceWindowTaskCommand_1 = require("./commands/GetMaintenanceWindowTaskCommand");
const GetOpsItemCommand_1 = require("./commands/GetOpsItemCommand");
const GetOpsSummaryCommand_1 = require("./commands/GetOpsSummaryCommand");
const GetParameterCommand_1 = require("./commands/GetParameterCommand");
const GetParameterHistoryCommand_1 = require("./commands/GetParameterHistoryCommand");
const GetParametersByPathCommand_1 = require("./commands/GetParametersByPathCommand");
const GetParametersCommand_1 = require("./commands/GetParametersCommand");
const GetPatchBaselineCommand_1 = require("./commands/GetPatchBaselineCommand");
const GetPatchBaselineForPatchGroupCommand_1 = require("./commands/GetPatchBaselineForPatchGroupCommand");
const GetServiceSettingCommand_1 = require("./commands/GetServiceSettingCommand");
const LabelParameterVersionCommand_1 = require("./commands/LabelParameterVersionCommand");
const ListAssociationVersionsCommand_1 = require("./commands/ListAssociationVersionsCommand");
const ListAssociationsCommand_1 = require("./commands/ListAssociationsCommand");
const ListCommandInvocationsCommand_1 = require("./commands/ListCommandInvocationsCommand");
const ListCommandsCommand_1 = require("./commands/ListCommandsCommand");
const ListComplianceItemsCommand_1 = require("./commands/ListComplianceItemsCommand");
const ListComplianceSummariesCommand_1 = require("./commands/ListComplianceSummariesCommand");
const ListDocumentVersionsCommand_1 = require("./commands/ListDocumentVersionsCommand");
const ListDocumentsCommand_1 = require("./commands/ListDocumentsCommand");
const ListInventoryEntriesCommand_1 = require("./commands/ListInventoryEntriesCommand");
const ListResourceComplianceSummariesCommand_1 = require("./commands/ListResourceComplianceSummariesCommand");
const ListResourceDataSyncCommand_1 = require("./commands/ListResourceDataSyncCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyDocumentPermissionCommand_1 = require("./commands/ModifyDocumentPermissionCommand");
const PutComplianceItemsCommand_1 = require("./commands/PutComplianceItemsCommand");
const PutInventoryCommand_1 = require("./commands/PutInventoryCommand");
const PutParameterCommand_1 = require("./commands/PutParameterCommand");
const RegisterDefaultPatchBaselineCommand_1 = require("./commands/RegisterDefaultPatchBaselineCommand");
const RegisterPatchBaselineForPatchGroupCommand_1 = require("./commands/RegisterPatchBaselineForPatchGroupCommand");
const RegisterTargetWithMaintenanceWindowCommand_1 = require("./commands/RegisterTargetWithMaintenanceWindowCommand");
const RegisterTaskWithMaintenanceWindowCommand_1 = require("./commands/RegisterTaskWithMaintenanceWindowCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetServiceSettingCommand_1 = require("./commands/ResetServiceSettingCommand");
const ResumeSessionCommand_1 = require("./commands/ResumeSessionCommand");
const SendAutomationSignalCommand_1 = require("./commands/SendAutomationSignalCommand");
const SendCommandCommand_1 = require("./commands/SendCommandCommand");
const StartAssociationsOnceCommand_1 = require("./commands/StartAssociationsOnceCommand");
const StartAutomationExecutionCommand_1 = require("./commands/StartAutomationExecutionCommand");
const StartSessionCommand_1 = require("./commands/StartSessionCommand");
const StopAutomationExecutionCommand_1 = require("./commands/StopAutomationExecutionCommand");
const TerminateSessionCommand_1 = require("./commands/TerminateSessionCommand");
const UpdateAssociationCommand_1 = require("./commands/UpdateAssociationCommand");
const UpdateAssociationStatusCommand_1 = require("./commands/UpdateAssociationStatusCommand");
const UpdateDocumentCommand_1 = require("./commands/UpdateDocumentCommand");
const UpdateDocumentDefaultVersionCommand_1 = require("./commands/UpdateDocumentDefaultVersionCommand");
const UpdateMaintenanceWindowCommand_1 = require("./commands/UpdateMaintenanceWindowCommand");
const UpdateMaintenanceWindowTargetCommand_1 = require("./commands/UpdateMaintenanceWindowTargetCommand");
const UpdateMaintenanceWindowTaskCommand_1 = require("./commands/UpdateMaintenanceWindowTaskCommand");
const UpdateManagedInstanceRoleCommand_1 = require("./commands/UpdateManagedInstanceRoleCommand");
const UpdateOpsItemCommand_1 = require("./commands/UpdateOpsItemCommand");
const UpdatePatchBaselineCommand_1 = require("./commands/UpdatePatchBaselineCommand");
const UpdateResourceDataSyncCommand_1 = require("./commands/UpdateResourceDataSyncCommand");
const UpdateServiceSettingCommand_1 = require("./commands/UpdateServiceSettingCommand");
/**
 * <fullname>AWS Systems Manager</fullname>
 *          <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as
 *    collecting system inventory, applying operating system (OS) patches, automating the creation of
 *    Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
 *    Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
 *     <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your
 *    hybrid environment that has been configured for Systems Manager.</p>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p>
 *          <p>To get started, verify prerequisites and configure managed instances. For more information,
 *    see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting Up AWS Systems Manager</a> in
 *    the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>For information about other API actions you can perform on Amazon EC2 instances, see the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see
 *     <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API Requests</a>. </p>
 */
class SSM extends SSMClient_1.SSMClient {
    addTagsToResource(args, optionsOrCb, cb) {
        const command = new AddTagsToResourceCommand_1.AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelCommand(args, optionsOrCb, cb) {
        const command = new CancelCommandCommand_1.CancelCommandCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelMaintenanceWindowExecution(args, optionsOrCb, cb) {
        const command = new CancelMaintenanceWindowExecutionCommand_1.CancelMaintenanceWindowExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createActivation(args, optionsOrCb, cb) {
        const command = new CreateActivationCommand_1.CreateActivationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAssociation(args, optionsOrCb, cb) {
        const command = new CreateAssociationCommand_1.CreateAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAssociationBatch(args, optionsOrCb, cb) {
        const command = new CreateAssociationBatchCommand_1.CreateAssociationBatchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDocument(args, optionsOrCb, cb) {
        const command = new CreateDocumentCommand_1.CreateDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new CreateMaintenanceWindowCommand_1.CreateMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createOpsItem(args, optionsOrCb, cb) {
        const command = new CreateOpsItemCommand_1.CreateOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPatchBaseline(args, optionsOrCb, cb) {
        const command = new CreatePatchBaselineCommand_1.CreatePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResourceDataSync(args, optionsOrCb, cb) {
        const command = new CreateResourceDataSyncCommand_1.CreateResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteActivation(args, optionsOrCb, cb) {
        const command = new DeleteActivationCommand_1.DeleteActivationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAssociation(args, optionsOrCb, cb) {
        const command = new DeleteAssociationCommand_1.DeleteAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDocument(args, optionsOrCb, cb) {
        const command = new DeleteDocumentCommand_1.DeleteDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInventory(args, optionsOrCb, cb) {
        const command = new DeleteInventoryCommand_1.DeleteInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new DeleteMaintenanceWindowCommand_1.DeleteMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteParameter(args, optionsOrCb, cb) {
        const command = new DeleteParameterCommand_1.DeleteParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteParameters(args, optionsOrCb, cb) {
        const command = new DeleteParametersCommand_1.DeleteParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePatchBaseline(args, optionsOrCb, cb) {
        const command = new DeletePatchBaselineCommand_1.DeletePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResourceDataSync(args, optionsOrCb, cb) {
        const command = new DeleteResourceDataSyncCommand_1.DeleteResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterManagedInstance(args, optionsOrCb, cb) {
        const command = new DeregisterManagedInstanceCommand_1.DeregisterManagedInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterPatchBaselineForPatchGroup(args, optionsOrCb, cb) {
        const command = new DeregisterPatchBaselineForPatchGroupCommand_1.DeregisterPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTargetFromMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new DeregisterTargetFromMaintenanceWindowCommand_1.DeregisterTargetFromMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTaskFromMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new DeregisterTaskFromMaintenanceWindowCommand_1.DeregisterTaskFromMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeActivations(args, optionsOrCb, cb) {
        const command = new DescribeActivationsCommand_1.DescribeActivationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssociation(args, optionsOrCb, cb) {
        const command = new DescribeAssociationCommand_1.DescribeAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssociationExecutionTargets(args, optionsOrCb, cb) {
        const command = new DescribeAssociationExecutionTargetsCommand_1.DescribeAssociationExecutionTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssociationExecutions(args, optionsOrCb, cb) {
        const command = new DescribeAssociationExecutionsCommand_1.DescribeAssociationExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutomationExecutions(args, optionsOrCb, cb) {
        const command = new DescribeAutomationExecutionsCommand_1.DescribeAutomationExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutomationStepExecutions(args, optionsOrCb, cb) {
        const command = new DescribeAutomationStepExecutionsCommand_1.DescribeAutomationStepExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAvailablePatches(args, optionsOrCb, cb) {
        const command = new DescribeAvailablePatchesCommand_1.DescribeAvailablePatchesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDocument(args, optionsOrCb, cb) {
        const command = new DescribeDocumentCommand_1.DescribeDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDocumentPermission(args, optionsOrCb, cb) {
        const command = new DescribeDocumentPermissionCommand_1.DescribeDocumentPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEffectiveInstanceAssociations(args, optionsOrCb, cb) {
        const command = new DescribeEffectiveInstanceAssociationsCommand_1.DescribeEffectiveInstanceAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEffectivePatchesForPatchBaseline(args, optionsOrCb, cb) {
        const command = new DescribeEffectivePatchesForPatchBaselineCommand_1.DescribeEffectivePatchesForPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceAssociationsStatus(args, optionsOrCb, cb) {
        const command = new DescribeInstanceAssociationsStatusCommand_1.DescribeInstanceAssociationsStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceInformation(args, optionsOrCb, cb) {
        const command = new DescribeInstanceInformationCommand_1.DescribeInstanceInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstancePatchStates(args, optionsOrCb, cb) {
        const command = new DescribeInstancePatchStatesCommand_1.DescribeInstancePatchStatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstancePatchStatesForPatchGroup(args, optionsOrCb, cb) {
        const command = new DescribeInstancePatchStatesForPatchGroupCommand_1.DescribeInstancePatchStatesForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstancePatches(args, optionsOrCb, cb) {
        const command = new DescribeInstancePatchesCommand_1.DescribeInstancePatchesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInventoryDeletions(args, optionsOrCb, cb) {
        const command = new DescribeInventoryDeletionsCommand_1.DescribeInventoryDeletionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowExecutionTaskInvocations(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1.DescribeMaintenanceWindowExecutionTaskInvocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowExecutionTasks(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowExecutionTasksCommand_1.DescribeMaintenanceWindowExecutionTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowExecutions(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowExecutionsCommand_1.DescribeMaintenanceWindowExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowSchedule(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowScheduleCommand_1.DescribeMaintenanceWindowScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowTargets(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowTargetsCommand_1.DescribeMaintenanceWindowTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowTasks(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowTasksCommand_1.DescribeMaintenanceWindowTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindows(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowsCommand_1.DescribeMaintenanceWindowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceWindowsForTarget(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceWindowsForTargetCommand_1.DescribeMaintenanceWindowsForTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOpsItems(args, optionsOrCb, cb) {
        const command = new DescribeOpsItemsCommand_1.DescribeOpsItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeParameters(args, optionsOrCb, cb) {
        const command = new DescribeParametersCommand_1.DescribeParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePatchBaselines(args, optionsOrCb, cb) {
        const command = new DescribePatchBaselinesCommand_1.DescribePatchBaselinesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePatchGroupState(args, optionsOrCb, cb) {
        const command = new DescribePatchGroupStateCommand_1.DescribePatchGroupStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePatchGroups(args, optionsOrCb, cb) {
        const command = new DescribePatchGroupsCommand_1.DescribePatchGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePatchProperties(args, optionsOrCb, cb) {
        const command = new DescribePatchPropertiesCommand_1.DescribePatchPropertiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSessions(args, optionsOrCb, cb) {
        const command = new DescribeSessionsCommand_1.DescribeSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAutomationExecution(args, optionsOrCb, cb) {
        const command = new GetAutomationExecutionCommand_1.GetAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCalendarState(args, optionsOrCb, cb) {
        const command = new GetCalendarStateCommand_1.GetCalendarStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCommandInvocation(args, optionsOrCb, cb) {
        const command = new GetCommandInvocationCommand_1.GetCommandInvocationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConnectionStatus(args, optionsOrCb, cb) {
        const command = new GetConnectionStatusCommand_1.GetConnectionStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDefaultPatchBaseline(args, optionsOrCb, cb) {
        const command = new GetDefaultPatchBaselineCommand_1.GetDefaultPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeployablePatchSnapshotForInstance(args, optionsOrCb, cb) {
        const command = new GetDeployablePatchSnapshotForInstanceCommand_1.GetDeployablePatchSnapshotForInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDocument(args, optionsOrCb, cb) {
        const command = new GetDocumentCommand_1.GetDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInventory(args, optionsOrCb, cb) {
        const command = new GetInventoryCommand_1.GetInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInventorySchema(args, optionsOrCb, cb) {
        const command = new GetInventorySchemaCommand_1.GetInventorySchemaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new GetMaintenanceWindowCommand_1.GetMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMaintenanceWindowExecution(args, optionsOrCb, cb) {
        const command = new GetMaintenanceWindowExecutionCommand_1.GetMaintenanceWindowExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMaintenanceWindowExecutionTask(args, optionsOrCb, cb) {
        const command = new GetMaintenanceWindowExecutionTaskCommand_1.GetMaintenanceWindowExecutionTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMaintenanceWindowExecutionTaskInvocation(args, optionsOrCb, cb) {
        const command = new GetMaintenanceWindowExecutionTaskInvocationCommand_1.GetMaintenanceWindowExecutionTaskInvocationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMaintenanceWindowTask(args, optionsOrCb, cb) {
        const command = new GetMaintenanceWindowTaskCommand_1.GetMaintenanceWindowTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getOpsItem(args, optionsOrCb, cb) {
        const command = new GetOpsItemCommand_1.GetOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getOpsSummary(args, optionsOrCb, cb) {
        const command = new GetOpsSummaryCommand_1.GetOpsSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getParameter(args, optionsOrCb, cb) {
        const command = new GetParameterCommand_1.GetParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getParameterHistory(args, optionsOrCb, cb) {
        const command = new GetParameterHistoryCommand_1.GetParameterHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getParameters(args, optionsOrCb, cb) {
        const command = new GetParametersCommand_1.GetParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getParametersByPath(args, optionsOrCb, cb) {
        const command = new GetParametersByPathCommand_1.GetParametersByPathCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPatchBaseline(args, optionsOrCb, cb) {
        const command = new GetPatchBaselineCommand_1.GetPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPatchBaselineForPatchGroup(args, optionsOrCb, cb) {
        const command = new GetPatchBaselineForPatchGroupCommand_1.GetPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getServiceSetting(args, optionsOrCb, cb) {
        const command = new GetServiceSettingCommand_1.GetServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    labelParameterVersion(args, optionsOrCb, cb) {
        const command = new LabelParameterVersionCommand_1.LabelParameterVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssociationVersions(args, optionsOrCb, cb) {
        const command = new ListAssociationVersionsCommand_1.ListAssociationVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssociations(args, optionsOrCb, cb) {
        const command = new ListAssociationsCommand_1.ListAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCommandInvocations(args, optionsOrCb, cb) {
        const command = new ListCommandInvocationsCommand_1.ListCommandInvocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCommands(args, optionsOrCb, cb) {
        const command = new ListCommandsCommand_1.ListCommandsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listComplianceItems(args, optionsOrCb, cb) {
        const command = new ListComplianceItemsCommand_1.ListComplianceItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listComplianceSummaries(args, optionsOrCb, cb) {
        const command = new ListComplianceSummariesCommand_1.ListComplianceSummariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDocumentVersions(args, optionsOrCb, cb) {
        const command = new ListDocumentVersionsCommand_1.ListDocumentVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDocuments(args, optionsOrCb, cb) {
        const command = new ListDocumentsCommand_1.ListDocumentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInventoryEntries(args, optionsOrCb, cb) {
        const command = new ListInventoryEntriesCommand_1.ListInventoryEntriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourceComplianceSummaries(args, optionsOrCb, cb) {
        const command = new ListResourceComplianceSummariesCommand_1.ListResourceComplianceSummariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourceDataSync(args, optionsOrCb, cb) {
        const command = new ListResourceDataSyncCommand_1.ListResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDocumentPermission(args, optionsOrCb, cb) {
        const command = new ModifyDocumentPermissionCommand_1.ModifyDocumentPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putComplianceItems(args, optionsOrCb, cb) {
        const command = new PutComplianceItemsCommand_1.PutComplianceItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putInventory(args, optionsOrCb, cb) {
        const command = new PutInventoryCommand_1.PutInventoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putParameter(args, optionsOrCb, cb) {
        const command = new PutParameterCommand_1.PutParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerDefaultPatchBaseline(args, optionsOrCb, cb) {
        const command = new RegisterDefaultPatchBaselineCommand_1.RegisterDefaultPatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerPatchBaselineForPatchGroup(args, optionsOrCb, cb) {
        const command = new RegisterPatchBaselineForPatchGroupCommand_1.RegisterPatchBaselineForPatchGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTargetWithMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new RegisterTargetWithMaintenanceWindowCommand_1.RegisterTargetWithMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTaskWithMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new RegisterTaskWithMaintenanceWindowCommand_1.RegisterTaskWithMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromResource(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromResourceCommand_1.RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetServiceSetting(args, optionsOrCb, cb) {
        const command = new ResetServiceSettingCommand_1.ResetServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resumeSession(args, optionsOrCb, cb) {
        const command = new ResumeSessionCommand_1.ResumeSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendAutomationSignal(args, optionsOrCb, cb) {
        const command = new SendAutomationSignalCommand_1.SendAutomationSignalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendCommand(args, optionsOrCb, cb) {
        const command = new SendCommandCommand_1.SendCommandCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startAssociationsOnce(args, optionsOrCb, cb) {
        const command = new StartAssociationsOnceCommand_1.StartAssociationsOnceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startAutomationExecution(args, optionsOrCb, cb) {
        const command = new StartAutomationExecutionCommand_1.StartAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startSession(args, optionsOrCb, cb) {
        const command = new StartSessionCommand_1.StartSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopAutomationExecution(args, optionsOrCb, cb) {
        const command = new StopAutomationExecutionCommand_1.StopAutomationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateSession(args, optionsOrCb, cb) {
        const command = new TerminateSessionCommand_1.TerminateSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAssociation(args, optionsOrCb, cb) {
        const command = new UpdateAssociationCommand_1.UpdateAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAssociationStatus(args, optionsOrCb, cb) {
        const command = new UpdateAssociationStatusCommand_1.UpdateAssociationStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDocument(args, optionsOrCb, cb) {
        const command = new UpdateDocumentCommand_1.UpdateDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDocumentDefaultVersion(args, optionsOrCb, cb) {
        const command = new UpdateDocumentDefaultVersionCommand_1.UpdateDocumentDefaultVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMaintenanceWindow(args, optionsOrCb, cb) {
        const command = new UpdateMaintenanceWindowCommand_1.UpdateMaintenanceWindowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMaintenanceWindowTarget(args, optionsOrCb, cb) {
        const command = new UpdateMaintenanceWindowTargetCommand_1.UpdateMaintenanceWindowTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMaintenanceWindowTask(args, optionsOrCb, cb) {
        const command = new UpdateMaintenanceWindowTaskCommand_1.UpdateMaintenanceWindowTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateManagedInstanceRole(args, optionsOrCb, cb) {
        const command = new UpdateManagedInstanceRoleCommand_1.UpdateManagedInstanceRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateOpsItem(args, optionsOrCb, cb) {
        const command = new UpdateOpsItemCommand_1.UpdateOpsItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePatchBaseline(args, optionsOrCb, cb) {
        const command = new UpdatePatchBaselineCommand_1.UpdatePatchBaselineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResourceDataSync(args, optionsOrCb, cb) {
        const command = new UpdateResourceDataSyncCommand_1.UpdateResourceDataSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateServiceSetting(args, optionsOrCb, cb) {
        const command = new UpdateServiceSettingCommand_1.UpdateServiceSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SSM = SSM;
//# sourceMappingURL=SSM.js.map