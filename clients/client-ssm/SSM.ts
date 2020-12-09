import { SSMClient } from "./SSMClient";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  CancelCommandCommand,
  CancelCommandCommandInput,
  CancelCommandCommandOutput,
} from "./commands/CancelCommandCommand";
import {
  CancelMaintenanceWindowExecutionCommand,
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
} from "./commands/CancelMaintenanceWindowExecutionCommand";
import {
  CreateActivationCommand,
  CreateActivationCommandInput,
  CreateActivationCommandOutput,
} from "./commands/CreateActivationCommand";
import {
  CreateAssociationBatchCommand,
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
} from "./commands/CreateAssociationBatchCommand";
import {
  CreateAssociationCommand,
  CreateAssociationCommandInput,
  CreateAssociationCommandOutput,
} from "./commands/CreateAssociationCommand";
import {
  CreateDocumentCommand,
  CreateDocumentCommandInput,
  CreateDocumentCommandOutput,
} from "./commands/CreateDocumentCommand";
import {
  CreateMaintenanceWindowCommand,
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
} from "./commands/CreateMaintenanceWindowCommand";
import {
  CreateOpsItemCommand,
  CreateOpsItemCommandInput,
  CreateOpsItemCommandOutput,
} from "./commands/CreateOpsItemCommand";
import {
  CreateOpsMetadataCommand,
  CreateOpsMetadataCommandInput,
  CreateOpsMetadataCommandOutput,
} from "./commands/CreateOpsMetadataCommand";
import {
  CreatePatchBaselineCommand,
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
} from "./commands/CreatePatchBaselineCommand";
import {
  CreateResourceDataSyncCommand,
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
} from "./commands/CreateResourceDataSyncCommand";
import {
  DeleteActivationCommand,
  DeleteActivationCommandInput,
  DeleteActivationCommandOutput,
} from "./commands/DeleteActivationCommand";
import {
  DeleteAssociationCommand,
  DeleteAssociationCommandInput,
  DeleteAssociationCommandOutput,
} from "./commands/DeleteAssociationCommand";
import {
  DeleteDocumentCommand,
  DeleteDocumentCommandInput,
  DeleteDocumentCommandOutput,
} from "./commands/DeleteDocumentCommand";
import {
  DeleteInventoryCommand,
  DeleteInventoryCommandInput,
  DeleteInventoryCommandOutput,
} from "./commands/DeleteInventoryCommand";
import {
  DeleteMaintenanceWindowCommand,
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
} from "./commands/DeleteMaintenanceWindowCommand";
import {
  DeleteOpsMetadataCommand,
  DeleteOpsMetadataCommandInput,
  DeleteOpsMetadataCommandOutput,
} from "./commands/DeleteOpsMetadataCommand";
import {
  DeleteParameterCommand,
  DeleteParameterCommandInput,
  DeleteParameterCommandOutput,
} from "./commands/DeleteParameterCommand";
import {
  DeleteParametersCommand,
  DeleteParametersCommandInput,
  DeleteParametersCommandOutput,
} from "./commands/DeleteParametersCommand";
import {
  DeletePatchBaselineCommand,
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
} from "./commands/DeletePatchBaselineCommand";
import {
  DeleteResourceDataSyncCommand,
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
} from "./commands/DeleteResourceDataSyncCommand";
import {
  DeregisterManagedInstanceCommand,
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
} from "./commands/DeregisterManagedInstanceCommand";
import {
  DeregisterPatchBaselineForPatchGroupCommand,
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import {
  DeregisterTargetFromMaintenanceWindowCommand,
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import {
  DeregisterTaskFromMaintenanceWindowCommand,
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import {
  DescribeActivationsCommand,
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "./commands/DescribeActivationsCommand";
import {
  DescribeAssociationCommand,
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
} from "./commands/DescribeAssociationCommand";
import {
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "./commands/DescribeAssociationExecutionTargetsCommand";
import {
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "./commands/DescribeAssociationExecutionsCommand";
import {
  DescribeAutomationExecutionsCommand,
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "./commands/DescribeAutomationExecutionsCommand";
import {
  DescribeAutomationStepExecutionsCommand,
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "./commands/DescribeAutomationStepExecutionsCommand";
import {
  DescribeAvailablePatchesCommand,
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "./commands/DescribeAvailablePatchesCommand";
import {
  DescribeDocumentCommand,
  DescribeDocumentCommandInput,
  DescribeDocumentCommandOutput,
} from "./commands/DescribeDocumentCommand";
import {
  DescribeDocumentPermissionCommand,
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
} from "./commands/DescribeDocumentPermissionCommand";
import {
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import {
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import {
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "./commands/DescribeInstanceAssociationsStatusCommand";
import {
  DescribeInstanceInformationCommand,
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "./commands/DescribeInstanceInformationCommand";
import {
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "./commands/DescribeInstancePatchStatesCommand";
import {
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import {
  DescribeInstancePatchesCommand,
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "./commands/DescribeInstancePatchesCommand";
import {
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "./commands/DescribeInventoryDeletionsCommand";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import {
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import {
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import {
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "./commands/DescribeMaintenanceWindowScheduleCommand";
import {
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "./commands/DescribeMaintenanceWindowTargetsCommand";
import {
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowTasksCommand";
import {
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "./commands/DescribeMaintenanceWindowsCommand";
import {
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import {
  DescribeOpsItemsCommand,
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
} from "./commands/DescribeOpsItemsCommand";
import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "./commands/DescribeParametersCommand";
import {
  DescribePatchBaselinesCommand,
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "./commands/DescribePatchBaselinesCommand";
import {
  DescribePatchGroupStateCommand,
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "./commands/DescribePatchGroupStateCommand";
import {
  DescribePatchGroupsCommand,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "./commands/DescribePatchGroupsCommand";
import {
  DescribePatchPropertiesCommand,
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "./commands/DescribePatchPropertiesCommand";
import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "./commands/DescribeSessionsCommand";
import {
  GetAutomationExecutionCommand,
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
} from "./commands/GetAutomationExecutionCommand";
import {
  GetCalendarStateCommand,
  GetCalendarStateCommandInput,
  GetCalendarStateCommandOutput,
} from "./commands/GetCalendarStateCommand";
import {
  GetCommandInvocationCommand,
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
} from "./commands/GetCommandInvocationCommand";
import {
  GetConnectionStatusCommand,
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
} from "./commands/GetConnectionStatusCommand";
import {
  GetDefaultPatchBaselineCommand,
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
} from "./commands/GetDefaultPatchBaselineCommand";
import {
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
} from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommand, GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import {
  GetInventoryCommand,
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "./commands/GetInventoryCommand";
import {
  GetInventorySchemaCommand,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "./commands/GetInventorySchemaCommand";
import {
  GetMaintenanceWindowCommand,
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
} from "./commands/GetMaintenanceWindowCommand";
import {
  GetMaintenanceWindowExecutionCommand,
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionCommand";
import {
  GetMaintenanceWindowExecutionTaskCommand,
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import {
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import {
  GetMaintenanceWindowTaskCommand,
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
} from "./commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommand, GetOpsItemCommandInput, GetOpsItemCommandOutput } from "./commands/GetOpsItemCommand";
import {
  GetOpsMetadataCommand,
  GetOpsMetadataCommandInput,
  GetOpsMetadataCommandOutput,
} from "./commands/GetOpsMetadataCommand";
import {
  GetOpsSummaryCommand,
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
} from "./commands/GetOpsSummaryCommand";
import {
  GetParameterCommand,
  GetParameterCommandInput,
  GetParameterCommandOutput,
} from "./commands/GetParameterCommand";
import {
  GetParameterHistoryCommand,
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "./commands/GetParameterHistoryCommand";
import {
  GetParametersByPathCommand,
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "./commands/GetParametersByPathCommand";
import {
  GetParametersCommand,
  GetParametersCommandInput,
  GetParametersCommandOutput,
} from "./commands/GetParametersCommand";
import {
  GetPatchBaselineCommand,
  GetPatchBaselineCommandInput,
  GetPatchBaselineCommandOutput,
} from "./commands/GetPatchBaselineCommand";
import {
  GetPatchBaselineForPatchGroupCommand,
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
} from "./commands/GetPatchBaselineForPatchGroupCommand";
import {
  GetServiceSettingCommand,
  GetServiceSettingCommandInput,
  GetServiceSettingCommandOutput,
} from "./commands/GetServiceSettingCommand";
import {
  LabelParameterVersionCommand,
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
} from "./commands/LabelParameterVersionCommand";
import {
  ListAssociationVersionsCommand,
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "./commands/ListAssociationVersionsCommand";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "./commands/ListAssociationsCommand";
import {
  ListCommandInvocationsCommand,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "./commands/ListCommandInvocationsCommand";
import {
  ListCommandsCommand,
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
} from "./commands/ListCommandsCommand";
import {
  ListComplianceItemsCommand,
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "./commands/ListComplianceItemsCommand";
import {
  ListComplianceSummariesCommand,
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "./commands/ListComplianceSummariesCommand";
import {
  ListDocumentVersionsCommand,
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "./commands/ListDocumentVersionsCommand";
import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "./commands/ListDocumentsCommand";
import {
  ListInventoryEntriesCommand,
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "./commands/ListInventoryEntriesCommand";
import {
  ListOpsMetadataCommand,
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
} from "./commands/ListOpsMetadataCommand";
import {
  ListResourceComplianceSummariesCommand,
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "./commands/ListResourceComplianceSummariesCommand";
import {
  ListResourceDataSyncCommand,
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "./commands/ListResourceDataSyncCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyDocumentPermissionCommand,
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
} from "./commands/ModifyDocumentPermissionCommand";
import {
  PutComplianceItemsCommand,
  PutComplianceItemsCommandInput,
  PutComplianceItemsCommandOutput,
} from "./commands/PutComplianceItemsCommand";
import {
  PutInventoryCommand,
  PutInventoryCommandInput,
  PutInventoryCommandOutput,
} from "./commands/PutInventoryCommand";
import {
  PutParameterCommand,
  PutParameterCommandInput,
  PutParameterCommandOutput,
} from "./commands/PutParameterCommand";
import {
  RegisterDefaultPatchBaselineCommand,
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
} from "./commands/RegisterDefaultPatchBaselineCommand";
import {
  RegisterPatchBaselineForPatchGroupCommand,
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import {
  RegisterTargetWithMaintenanceWindowCommand,
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import {
  RegisterTaskWithMaintenanceWindowCommand,
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetServiceSettingCommand,
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
} from "./commands/ResetServiceSettingCommand";
import {
  ResumeSessionCommand,
  ResumeSessionCommandInput,
  ResumeSessionCommandOutput,
} from "./commands/ResumeSessionCommand";
import {
  SendAutomationSignalCommand,
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
} from "./commands/SendAutomationSignalCommand";
import { SendCommandCommand, SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import {
  StartAssociationsOnceCommand,
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
} from "./commands/StartAssociationsOnceCommand";
import {
  StartAutomationExecutionCommand,
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
} from "./commands/StartAutomationExecutionCommand";
import {
  StartSessionCommand,
  StartSessionCommandInput,
  StartSessionCommandOutput,
} from "./commands/StartSessionCommand";
import {
  StopAutomationExecutionCommand,
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
} from "./commands/StopAutomationExecutionCommand";
import {
  TerminateSessionCommand,
  TerminateSessionCommandInput,
  TerminateSessionCommandOutput,
} from "./commands/TerminateSessionCommand";
import {
  UpdateAssociationCommand,
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
} from "./commands/UpdateAssociationCommand";
import {
  UpdateAssociationStatusCommand,
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
} from "./commands/UpdateAssociationStatusCommand";
import {
  UpdateDocumentCommand,
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
} from "./commands/UpdateDocumentCommand";
import {
  UpdateDocumentDefaultVersionCommand,
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
} from "./commands/UpdateDocumentDefaultVersionCommand";
import {
  UpdateMaintenanceWindowCommand,
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
} from "./commands/UpdateMaintenanceWindowCommand";
import {
  UpdateMaintenanceWindowTargetCommand,
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
} from "./commands/UpdateMaintenanceWindowTargetCommand";
import {
  UpdateMaintenanceWindowTaskCommand,
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
} from "./commands/UpdateMaintenanceWindowTaskCommand";
import {
  UpdateManagedInstanceRoleCommand,
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
} from "./commands/UpdateManagedInstanceRoleCommand";
import {
  UpdateOpsItemCommand,
  UpdateOpsItemCommandInput,
  UpdateOpsItemCommandOutput,
} from "./commands/UpdateOpsItemCommand";
import {
  UpdateOpsMetadataCommand,
  UpdateOpsMetadataCommandInput,
  UpdateOpsMetadataCommandOutput,
} from "./commands/UpdateOpsMetadataCommand";
import {
  UpdatePatchBaselineCommand,
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
} from "./commands/UpdatePatchBaselineCommand";
import {
  UpdateResourceDataSyncCommand,
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
} from "./commands/UpdateResourceDataSyncCommand";
import {
  UpdateServiceSettingCommand,
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
} from "./commands/UpdateServiceSettingCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Systems Manager</fullname>
 *          <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as
 *    collecting system inventory, applying operating system (OS) patches, automating the creation of
 *    Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
 *    Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
 *     <i>managed instance</i> is any Amazon Elastic Compute Cloud instance (EC2 instance), or any
 *    on-premises server or virtual machine (VM) in your hybrid environment that has been configured
 *    for Systems Manager.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p>
 *          <p>To get started, verify prerequisites and configure managed instances. For more information,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
 *     AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>For information about other API actions you can perform on EC2 instances, see the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information
 *    about how to use a Query API, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API requests</a>. </p>
 */
export class SSM extends SSMClient {
  /**
   * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you
   *    can assign to your documents, managed instances, maintenance windows, Parameter Store parameters,
   *    and patch baselines. Tags enable you to categorize your resources in different ways, for example,
   *    by purpose, owner, or environment. Each tag consists of a key and an optional value, both of
   *    which you define. For example, you could define a set of tags for your account's managed
   *    instances that helps you track each instance's owner and stack level. For example: Key=Owner and
   *    Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or
   *    Test.</p>
   *
   *          <p>Each resource can have a maximum of 50 tags. </p>
   *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
   *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
   *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
   *    to and are interpreted strictly as a string of characters. </p>
   *          <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the
   *     <i>Amazon EC2 User Guide</i>.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the
   *    command will be terminated and the underlying process stopped.</p>
   */
  public cancelCommand(
    args: CancelCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCommandCommandOutput>;
  public cancelCommand(
    args: CancelCommandCommandInput,
    cb: (err: any, data?: CancelCommandCommandOutput) => void
  ): void;
  public cancelCommand(
    args: CancelCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCommandCommandOutput) => void
  ): void;
  public cancelCommand(
    args: CancelCommandCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelCommandCommandOutput) => void),
    cb?: (err: any, data?: CancelCommandCommandOutput) => void
  ): Promise<CancelCommandCommandOutput> | void {
    const command = new CancelCommandCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a maintenance window execution that is already in progress and cancels any tasks in
   *    the window that have not already starting running. (Tasks already in progress will continue to
   *    completion.)</p>
   */
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMaintenanceWindowExecutionCommandOutput>;
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void),
    cb?: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void
  ): Promise<CancelMaintenanceWindowExecutionCommandOutput> | void {
    const command = new CancelMaintenanceWindowExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates an activation code and activation ID you can use to register your on-premises
   *    server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it
   *    possible to manage them using Systems Manager capabilities. You use the activation code and ID when
   *    installing SSM Agent on machines in your hybrid environment. For more information about
   *    requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
   *     AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *          <note>
   *             <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage
   *     with Systems Manager are all called <i>managed instances</i>.</p>
   *          </note>
   */
  public createActivation(
    args: CreateActivationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActivationCommandOutput>;
  public createActivation(
    args: CreateActivationCommandInput,
    cb: (err: any, data?: CreateActivationCommandOutput) => void
  ): void;
  public createActivation(
    args: CreateActivationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActivationCommandOutput) => void
  ): void;
  public createActivation(
    args: CreateActivationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateActivationCommandOutput) => void),
    cb?: (err: any, data?: CreateActivationCommandOutput) => void
  ): Promise<CreateActivationCommandOutput> | void {
    const command = new CreateActivationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A State Manager association defines the state that you want to maintain on your instances.
   *    For example, an association can specify that anti-virus software must be installed and running on
   *    your instances, or that certain ports must be closed. For static targets, the association
   *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS
   *    Resource Group or an AWS Autoscaling Group, State Manager applies the configuration when new
   *    instances are added to the group. The association also specifies actions to take when applying
   *    the configuration. For example, an association for anti-virus software might run once a day. If
   *    the software is not installed, then State Manager installs it. If the software is installed, but
   *    the service is not running, then the association might instruct State Manager to start the
   *    service. </p>
   */
  public createAssociation(
    args: CreateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssociationCommandOutput>;
  public createAssociation(
    args: CreateAssociationCommandInput,
    cb: (err: any, data?: CreateAssociationCommandOutput) => void
  ): void;
  public createAssociation(
    args: CreateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssociationCommandOutput) => void
  ): void;
  public createAssociation(
    args: CreateAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateAssociationCommandOutput) => void
  ): Promise<CreateAssociationCommandOutput> | void {
    const command = new CreateAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified Systems Manager document with the specified instances or targets.</p>
   *          <p>When you associate a document with one or more instances using instance IDs or tags,
   *    SSM Agent running on the instance processes the document and configures the instance as
   *    specified.</p>
   *          <p>If you associate a document with an instance that already has an associated document, the
   *    system returns the AssociationAlreadyExists exception.</p>
   */
  public createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssociationBatchCommandOutput>;
  public createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void
  ): void;
  public createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void
  ): void;
  public createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssociationBatchCommandOutput) => void),
    cb?: (err: any, data?: CreateAssociationBatchCommandOutput) => void
  ): Promise<CreateAssociationBatchCommandOutput> | void {
    const command = new CreateAssociationBatchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on
   *    your managed instances. For more information about SSM documents, including information about
   *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  public createDocument(
    args: CreateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentCommandOutput>;
  public createDocument(
    args: CreateDocumentCommandInput,
    cb: (err: any, data?: CreateDocumentCommandOutput) => void
  ): void;
  public createDocument(
    args: CreateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentCommandOutput) => void
  ): void;
  public createDocument(
    args: CreateDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDocumentCommandOutput) => void),
    cb?: (err: any, data?: CreateDocumentCommandOutput) => void
  ): Promise<CreateDocumentCommandOutput> | void {
    const command = new CreateDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new maintenance window.</p>
   *          <note>
   *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
   *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
   *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
   *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
   *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
   *     after 5 PM.</p>
   *          </note>
   */
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMaintenanceWindowCommandOutput>;
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void
  ): void;
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void
  ): void;
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void
  ): Promise<CreateMaintenanceWindowCommandOutput> | void {
    const command = new CreateMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM)
   *    to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
   *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
   *    operational issues impacting the performance and health of their AWS resources. For more
   *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  public createOpsItem(
    args: CreateOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpsItemCommandOutput>;
  public createOpsItem(
    args: CreateOpsItemCommandInput,
    cb: (err: any, data?: CreateOpsItemCommandOutput) => void
  ): void;
  public createOpsItem(
    args: CreateOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpsItemCommandOutput) => void
  ): void;
  public createOpsItem(
    args: CreateOpsItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOpsItemCommandOutput) => void),
    cb?: (err: any, data?: CreateOpsItemCommandOutput) => void
  ): Promise<CreateOpsItemCommandOutput> | void {
    const command = new CreateOpsItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If you create a new application in AppManager, Systems Manager calls this API action to specify
   *    information about the new application, including the application type.</p>
   */
  public createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpsMetadataCommandOutput>;
  public createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    cb: (err: any, data?: CreateOpsMetadataCommandOutput) => void
  ): void;
  public createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpsMetadataCommandOutput) => void
  ): void;
  public createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOpsMetadataCommandOutput) => void),
    cb?: (err: any, data?: CreateOpsMetadataCommandOutput) => void
  ): Promise<CreateOpsMetadataCommandOutput> | void {
    const command = new CreateOpsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a patch baseline.</p>
   *          <note>
   *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
   *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
   *          </note>
   */
  public createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePatchBaselineCommandOutput>;
  public createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void
  ): void;
  public createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void
  ): void;
  public createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: CreatePatchBaselineCommandOutput) => void
  ): Promise<CreatePatchBaselineCommandOutput> | void {
    const command = new CreatePatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A resource data sync helps you view data from multiple sources in a single location. Systems
   *    Manager offers two types of resource data sync: <code>SyncToDestination</code> and
   *     <code>SyncFromSource</code>.</p>
   *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
   *    synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data
   *     Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *
   *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
   *    operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a
   *    single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and
   *    Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   *
   *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
   *    successful initial sync is completed, the system continuously syncs data. To check the status of
   *    a sync, use the <a>ListResourceDataSync</a>.</p>
   *
   *          <note>
   *             <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption
   *     in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3
   *     bucket by creating a restrictive bucket policy. </p>
   *          </note>
   */
  public createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDataSyncCommandOutput>;
  public createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void
  ): void;
  public createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void
  ): void;
  public createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceDataSyncCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceDataSyncCommandOutput) => void
  ): Promise<CreateResourceDataSyncCommandOutput> | void {
    const command = new CreateResourceDataSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an activation. You are not required to delete an activation. If you delete an
   *    activation, you can no longer use it to register additional managed instances. Deleting an
   *    activation does not de-register managed instances. You must manually de-register managed
   *    instances.</p>
   */
  public deleteActivation(
    args: DeleteActivationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActivationCommandOutput>;
  public deleteActivation(
    args: DeleteActivationCommandInput,
    cb: (err: any, data?: DeleteActivationCommandOutput) => void
  ): void;
  public deleteActivation(
    args: DeleteActivationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActivationCommandOutput) => void
  ): void;
  public deleteActivation(
    args: DeleteActivationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteActivationCommandOutput) => void),
    cb?: (err: any, data?: DeleteActivationCommandOutput) => void
  ): Promise<DeleteActivationCommandOutput> | void {
    const command = new DeleteActivationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified Systems Manager document from the specified instance.</p>
   *          <p>When you disassociate a document from an instance, it does not change the configuration of
   *    the instance. To change the configuration state of an instance after you disassociate a document,
   *    you must create a new document with the desired configuration and associate it with the
   *    instance.</p>
   */
  public deleteAssociation(
    args: DeleteAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssociationCommandOutput>;
  public deleteAssociation(
    args: DeleteAssociationCommandInput,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;
  public deleteAssociation(
    args: DeleteAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;
  public deleteAssociation(
    args: DeleteAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): Promise<DeleteAssociationCommandOutput> | void {
    const command = new DeleteAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the Systems Manager document and all instance associations to the document.</p>
   *          <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
   */
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentCommandOutput>;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDocumentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): Promise<DeleteDocumentCommandOutput> | void {
    const command = new DeleteDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
   *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
   */
  public deleteInventory(
    args: DeleteInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInventoryCommandOutput>;
  public deleteInventory(
    args: DeleteInventoryCommandInput,
    cb: (err: any, data?: DeleteInventoryCommandOutput) => void
  ): void;
  public deleteInventory(
    args: DeleteInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInventoryCommandOutput) => void
  ): void;
  public deleteInventory(
    args: DeleteInventoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInventoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteInventoryCommandOutput) => void
  ): Promise<DeleteInventoryCommandOutput> | void {
    const command = new DeleteInventoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a maintenance window.</p>
   */
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMaintenanceWindowCommandOutput>;
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void
  ): void;
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void
  ): void;
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void
  ): Promise<DeleteMaintenanceWindowCommandOutput> | void {
    const command = new DeleteMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete OpsMetadata related to an application.</p>
   */
  public deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpsMetadataCommandOutput>;
  public deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    cb: (err: any, data?: DeleteOpsMetadataCommandOutput) => void
  ): void;
  public deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpsMetadataCommandOutput) => void
  ): void;
  public deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOpsMetadataCommandOutput) => void),
    cb?: (err: any, data?: DeleteOpsMetadataCommandOutput) => void
  ): Promise<DeleteOpsMetadataCommandOutput> | void {
    const command = new DeleteOpsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a parameter from the system.</p>
   */
  public deleteParameter(
    args: DeleteParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParameterCommandOutput>;
  public deleteParameter(
    args: DeleteParameterCommandInput,
    cb: (err: any, data?: DeleteParameterCommandOutput) => void
  ): void;
  public deleteParameter(
    args: DeleteParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParameterCommandOutput) => void
  ): void;
  public deleteParameter(
    args: DeleteParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteParameterCommandOutput) => void),
    cb?: (err: any, data?: DeleteParameterCommandOutput) => void
  ): Promise<DeleteParameterCommandOutput> | void {
    const command = new DeleteParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a list of parameters.</p>
   */
  public deleteParameters(
    args: DeleteParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParametersCommandOutput>;
  public deleteParameters(
    args: DeleteParametersCommandInput,
    cb: (err: any, data?: DeleteParametersCommandOutput) => void
  ): void;
  public deleteParameters(
    args: DeleteParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParametersCommandOutput) => void
  ): void;
  public deleteParameters(
    args: DeleteParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteParametersCommandOutput) => void),
    cb?: (err: any, data?: DeleteParametersCommandOutput) => void
  ): Promise<DeleteParametersCommandOutput> | void {
    const command = new DeleteParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a patch baseline.</p>
   */
  public deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePatchBaselineCommandOutput>;
  public deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void
  ): void;
  public deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void
  ): void;
  public deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: DeletePatchBaselineCommandOutput) => void
  ): Promise<DeletePatchBaselineCommandOutput> | void {
    const command = new DeletePatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to
   *    data on managed instances are no longer synced to or from the target. Deleting a sync
   *    configuration does not delete data.</p>
   */
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceDataSyncCommandOutput>;
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void
  ): void;
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void
  ): void;
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceDataSyncCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void
  ): Promise<DeleteResourceDataSyncCommandOutput> | void {
    const command = new DeleteResourceDataSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the server or virtual machine from the list of registered servers. You can
   *    reregister the instance again at any time. If you don't plan to use Run Command on the server, we
   *    suggest uninstalling SSM Agent first.</p>
   */
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterManagedInstanceCommandOutput>;
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void
  ): void;
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void
  ): void;
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterManagedInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void
  ): Promise<DeregisterManagedInstanceCommandOutput> | void {
    const command = new DeregisterManagedInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a patch group from a patch baseline.</p>
   */
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput>;
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void),
    cb?: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void
  ): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> | void {
    const command = new DeregisterPatchBaselineForPatchGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a target from a maintenance window.</p>
   */
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput>;
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void
  ): void;
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void
  ): void;
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void
  ): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> | void {
    const command = new DeregisterTargetFromMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a task from a maintenance window.</p>
   */
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput>;
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void
  ): void;
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void
  ): void;
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void
  ): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> | void {
    const command = new DeregisterTaskFromMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes details about the activation, such as the date and time the activation was
   *    created, its expiration date, the IAM role assigned to the instances in the activation, and the
   *    number of instances registered by using this activation.</p>
   */
  public describeActivations(
    args: DescribeActivationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivationsCommandOutput>;
  public describeActivations(
    args: DescribeActivationsCommandInput,
    cb: (err: any, data?: DescribeActivationsCommandOutput) => void
  ): void;
  public describeActivations(
    args: DescribeActivationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivationsCommandOutput) => void
  ): void;
  public describeActivations(
    args: DescribeActivationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActivationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeActivationsCommandOutput) => void
  ): Promise<DescribeActivationsCommandOutput> | void {
    const command = new DescribeActivationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the association for the specified target or instance. If you created the
   *    association by using the <code>Targets</code> parameter, then you must retrieve the association
   *    by using the association ID. If you created the association by specifying an instance ID and a
   *    Systems Manager document, then you retrieve the association by specifying the document name and the
   *    instance ID. </p>
   */
  public describeAssociation(
    args: DescribeAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationCommandOutput>;
  public describeAssociation(
    args: DescribeAssociationCommandInput,
    cb: (err: any, data?: DescribeAssociationCommandOutput) => void
  ): void;
  public describeAssociation(
    args: DescribeAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationCommandOutput) => void
  ): void;
  public describeAssociation(
    args: DescribeAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssociationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssociationCommandOutput) => void
  ): Promise<DescribeAssociationCommandOutput> | void {
    const command = new DescribeAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this API action to view all executions for a specific association ID. </p>
   */
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationExecutionsCommandOutput>;
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void
  ): void;
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void
  ): void;
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssociationExecutionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void
  ): Promise<DescribeAssociationExecutionsCommandOutput> | void {
    const command = new DescribeAssociationExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this API action to view information about a specific execution of a specific
   *    association.</p>
   */
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationExecutionTargetsCommandOutput>;
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void
  ): void;
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void
  ): void;
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void
  ): Promise<DescribeAssociationExecutionTargetsCommandOutput> | void {
    const command = new DescribeAssociationExecutionTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides details about all active and terminated Automation executions.</p>
   */
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutomationExecutionsCommandOutput>;
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void
  ): void;
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void
  ): void;
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutomationExecutionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void
  ): Promise<DescribeAutomationExecutionsCommandOutput> | void {
    const command = new DescribeAutomationExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Information about all active and terminated step executions in an Automation
   *    workflow.</p>
   */
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutomationStepExecutionsCommandOutput>;
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void
  ): void;
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void
  ): void;
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void
  ): Promise<DescribeAutomationStepExecutionsCommandOutput> | void {
    const command = new DescribeAutomationStepExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all patches eligible to be included in a patch baseline.</p>
   */
  public describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailablePatchesCommandOutput>;
  public describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void
  ): void;
  public describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void
  ): void;
  public describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAvailablePatchesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void
  ): Promise<DescribeAvailablePatchesCommandOutput> | void {
    const command = new DescribeAvailablePatchesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified Systems Manager document.</p>
   */
  public describeDocument(
    args: DescribeDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentCommandOutput>;
  public describeDocument(
    args: DescribeDocumentCommandInput,
    cb: (err: any, data?: DescribeDocumentCommandOutput) => void
  ): void;
  public describeDocument(
    args: DescribeDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentCommandOutput) => void
  ): void;
  public describeDocument(
    args: DescribeDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDocumentCommandOutput) => void),
    cb?: (err: any, data?: DescribeDocumentCommandOutput) => void
  ): Promise<DescribeDocumentCommandOutput> | void {
    const command = new DescribeDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the
   *    owner. If a document is shared, it can either be shared privately (by specifying a user's AWS
   *    account ID) or publicly (<i>All</i>). </p>
   */
  public describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentPermissionCommandOutput>;
  public describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void
  ): void;
  public describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void
  ): void;
  public describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDocumentPermissionCommandOutput) => void),
    cb?: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void
  ): Promise<DescribeDocumentPermissionCommandOutput> | void {
    const command = new DescribeDocumentPermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>All associations for the instance(s).</p>
   */
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectiveInstanceAssociationsCommandOutput>;
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void
  ): void;
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void
  ): void;
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void
  ): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> | void {
    const command = new DescribeEffectiveInstanceAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
   *    patch baseline. Note that this API applies only to Windows patch baselines.</p>
   */
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void
  ): void;
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void
  ): void;
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void
  ): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> | void {
    const command = new DescribeEffectivePatchesForPatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The status of the associations for the instance(s).</p>
   */
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAssociationsStatusCommandOutput>;
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void
  ): void;
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void
  ): void;
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void
  ): Promise<DescribeInstanceAssociationsStatusCommandOutput> | void {
    const command = new DescribeInstanceAssociationsStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your instances, including information about the operating system
   *    platform, the version of SSM Agent installed on the instance, instance status, and so on.</p>
   *          <p>If you specify one or more instance IDs, it returns information for those instances. If you
   *    do not specify instance IDs, it returns information for all your instances. If you specify an
   *    instance ID that is not valid or an instance that you do not own, you receive an error.</p>
   *          <note>
   *             <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM)
   *     role assigned to on-premises instances. This call does not return the IAM role for EC2
   *     instances.</p>
   *          </note>
   */
  public describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceInformationCommandOutput>;
  public describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void
  ): void;
  public describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void
  ): void;
  public describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceInformationCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceInformationCommandOutput) => void
  ): Promise<DescribeInstanceInformationCommandOutput> | void {
    const command = new DescribeInstanceInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the patches on the specified instance and their state relative
   *    to the patch baseline being used for the instance.</p>
   */
  public describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchesCommandOutput>;
  public describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void
  ): void;
  public describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void
  ): void;
  public describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancePatchesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancePatchesCommandOutput) => void
  ): Promise<DescribeInstancePatchesCommandOutput> | void {
    const command = new DescribeInstancePatchesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the high-level patch state of one or more instances.</p>
   */
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchStatesCommandOutput>;
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void
  ): void;
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void
  ): void;
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancePatchStatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void
  ): Promise<DescribeInstancePatchStatesCommandOutput> | void {
    const command = new DescribeInstancePatchStatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
   */
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput>;
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void
  ): void;
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void
  ): void;
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void
  ): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> | void {
    const command = new DescribeInstancePatchStatesForPatchGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a specific delete inventory operation.</p>
   */
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInventoryDeletionsCommandOutput>;
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void
  ): void;
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void
  ): void;
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInventoryDeletionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void
  ): Promise<DescribeInventoryDeletionsCommandOutput> | void {
    const command = new DescribeInventoryDeletionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the executions of a maintenance window. This includes information about when the
   *    maintenance window was scheduled to be active, and information about tasks registered and run
   *    with the maintenance window.</p>
   */
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionsCommandOutput>;
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> | void {
    const command = new DescribeMaintenanceWindowExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the individual task executions (one per target) for a particular task run as part
   *    of a maintenance window execution.</p>
   */
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> | void {
    const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For a given maintenance window execution, lists the tasks that were run.</p>
   */
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void
  ): void;
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> | void {
    const command = new DescribeMaintenanceWindowExecutionTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the maintenance windows in an AWS account.</p>
   */
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowsCommandOutput>;
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void
  ): void;
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void
  ): void;
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowsCommandOutput> | void {
    const command = new DescribeMaintenanceWindowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about upcoming executions of a maintenance window.</p>
   */
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowScheduleCommandOutput>;
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void
  ): void;
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void
  ): void;
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowScheduleCommandOutput> | void {
    const command = new DescribeMaintenanceWindowScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the maintenance window targets or tasks that an instance is
   *    associated with.</p>
   */
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowsForTargetCommandOutput>;
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void
  ): void;
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void
  ): void;
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> | void {
    const command = new DescribeMaintenanceWindowsForTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the targets registered with the maintenance window.</p>
   */
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowTargetsCommandOutput>;
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void
  ): void;
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowTargetsCommandOutput> | void {
    const command = new DescribeMaintenanceWindowTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tasks in a maintenance window.</p>
   */
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput>;
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void
  ): void;
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void
  ): void;
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput> | void {
    const command = new DescribeMaintenanceWindowTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management
   *    (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
   *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
   *    operational issues impacting the performance and health of their AWS resources. For more
   *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  public describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOpsItemsCommandOutput>;
  public describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void
  ): void;
  public describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void
  ): void;
  public describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOpsItemsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOpsItemsCommandOutput) => void
  ): Promise<DescribeOpsItemsCommandOutput> | void {
    const command = new DescribeOpsItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about a parameter.</p>
   *          <note>
   *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
   *     in the request, the response includes information up to the limit specified. The number of items
   *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
   *     reaches an internal limit while processing the results, it stops the operation and returns the
   *     matching values up to that point and a <code>NextToken</code>. You can specify the
   *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
   *          </note>
   */
  public describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParametersCommandOutput>;
  public describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeParametersCommandOutput) => void
  ): Promise<DescribeParametersCommandOutput> | void {
    const command = new DescribeParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the patch baselines in your AWS account.</p>
   */
  public describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchBaselinesCommandOutput>;
  public describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void
  ): void;
  public describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void
  ): void;
  public describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePatchBaselinesCommandOutput) => void),
    cb?: (err: any, data?: DescribePatchBaselinesCommandOutput) => void
  ): Promise<DescribePatchBaselinesCommandOutput> | void {
    const command = new DescribePatchBaselinesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all patch groups that have been registered with patch baselines.</p>
   */
  public describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchGroupsCommandOutput>;
  public describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void
  ): void;
  public describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void
  ): void;
  public describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePatchGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribePatchGroupsCommandOutput) => void
  ): Promise<DescribePatchGroupsCommandOutput> | void {
    const command = new DescribePatchGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
   */
  public describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchGroupStateCommandOutput>;
  public describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void
  ): void;
  public describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void
  ): void;
  public describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePatchGroupStateCommandOutput) => void),
    cb?: (err: any, data?: DescribePatchGroupStateCommandOutput) => void
  ): Promise<DescribePatchGroupStateCommandOutput> | void {
    const command = new DescribePatchGroupStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the properties of available patches organized by product, product family,
   *    classification, severity, and other properties of available patches. You can use the reported
   *    properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
   *          <p>The following section lists the properties that can be used in filters for each major
   *    operating system type:</p>
   *          <dl>
   *             <dt>AMAZON_LINUX</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>AMAZON_LINUX_2</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>CENTOS</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>DEBIAN</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, PRIORITY</p>
   *             </dd>
   *             <dt>MACOS</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION</p>
   *             </dd>
   *             <dt>ORACLE_LINUX</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>SUSE</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
   *             </dd>
   *             <dt>UBUNTU</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, PRIORITY</p>
   *             </dd>
   *             <dt>WINDOWS</dt>
   *             <dd>
   *                <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p>
   *             </dd>
   *          </dl>
   */
  public describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchPropertiesCommandOutput>;
  public describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void
  ): void;
  public describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void
  ): void;
  public describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePatchPropertiesCommandOutput) => void),
    cb?: (err: any, data?: DescribePatchPropertiesCommandOutput) => void
  ): Promise<DescribePatchPropertiesCommandOutput> | void {
    const command = new DescribePatchPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated
   *    sessions from the past 30 days.</p>
   */
  public describeSessions(
    args: DescribeSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSessionsCommandOutput>;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSessionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): Promise<DescribeSessionsCommandOutput> | void {
    const command = new DescribeSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed information about a particular Automation execution.</p>
   */
  public getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomationExecutionCommandOutput>;
  public getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void
  ): void;
  public getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void
  ): void;
  public getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAutomationExecutionCommandOutput) => void),
    cb?: (err: any, data?: GetAutomationExecutionCommandOutput) => void
  ): Promise<GetAutomationExecutionCommandOutput> | void {
    const command = new GetAutomationExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you
   *    specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific
   *    time, and returns the next time that the Change Calendar state will transition. If you do not
   *    specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries
   *    have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
   *          <p>If you specify more than one calendar in a request, the command returns the status of
   *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
   *    request are closed, the status returned is <code>CLOSED</code>.</p>
   *          <p>For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change
   *     Calendar</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  public getCalendarState(
    args: GetCalendarStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalendarStateCommandOutput>;
  public getCalendarState(
    args: GetCalendarStateCommandInput,
    cb: (err: any, data?: GetCalendarStateCommandOutput) => void
  ): void;
  public getCalendarState(
    args: GetCalendarStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalendarStateCommandOutput) => void
  ): void;
  public getCalendarState(
    args: GetCalendarStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCalendarStateCommandOutput) => void),
    cb?: (err: any, data?: GetCalendarStateCommandOutput) => void
  ): Promise<GetCalendarStateCommandOutput> | void {
    const command = new GetCalendarStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about command execution for an invocation or plugin. </p>
   */
  public getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommandInvocationCommandOutput>;
  public getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    cb: (err: any, data?: GetCommandInvocationCommandOutput) => void
  ): void;
  public getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommandInvocationCommandOutput) => void
  ): void;
  public getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommandInvocationCommandOutput) => void),
    cb?: (err: any, data?: GetCommandInvocationCommandOutput) => void
  ): Promise<GetCommandInvocationCommandOutput> | void {
    const command = new GetCommandInvocationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the Session Manager connection status for an instance to determine whether it is running and
   *    ready to receive Session Manager connections.</p>
   */
  public getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionStatusCommandOutput>;
  public getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    cb: (err: any, data?: GetConnectionStatusCommandOutput) => void
  ): void;
  public getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionStatusCommandOutput) => void
  ): void;
  public getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionStatusCommandOutput) => void
  ): Promise<GetConnectionStatusCommandOutput> | void {
    const command = new GetConnectionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
   *    patch baselines. For example, you can create a default patch baseline for each operating
   *    system.</p>
   *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
   *    returned.</p>
   */
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultPatchBaselineCommandOutput>;
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void
  ): void;
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void
  ): void;
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDefaultPatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void
  ): Promise<GetDefaultPatchBaselineCommandOutput> | void {
    const command = new GetDefaultPatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
   *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
   */
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput>;
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void
  ): void;
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void
  ): void;
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void
  ): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> | void {
    const command = new GetDeployablePatchSnapshotForInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the contents of the specified Systems Manager document.</p>
   */
  public getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
  public getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
  public getDocument(
    args: GetDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;
  public getDocument(
    args: GetDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentCommandOutput) => void
  ): Promise<GetDocumentCommandOutput> | void {
    const command = new GetDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Query inventory information.</p>
   */
  public getInventory(
    args: GetInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInventoryCommandOutput>;
  public getInventory(args: GetInventoryCommandInput, cb: (err: any, data?: GetInventoryCommandOutput) => void): void;
  public getInventory(
    args: GetInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInventoryCommandOutput) => void
  ): void;
  public getInventory(
    args: GetInventoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInventoryCommandOutput) => void),
    cb?: (err: any, data?: GetInventoryCommandOutput) => void
  ): Promise<GetInventoryCommandOutput> | void {
    const command = new GetInventoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Return a list of inventory type names for the account, or return a list of attribute names
   *    for a specific Inventory item type.</p>
   */
  public getInventorySchema(
    args: GetInventorySchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInventorySchemaCommandOutput>;
  public getInventorySchema(
    args: GetInventorySchemaCommandInput,
    cb: (err: any, data?: GetInventorySchemaCommandOutput) => void
  ): void;
  public getInventorySchema(
    args: GetInventorySchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInventorySchemaCommandOutput) => void
  ): void;
  public getInventorySchema(
    args: GetInventorySchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInventorySchemaCommandOutput) => void),
    cb?: (err: any, data?: GetInventorySchemaCommandOutput) => void
  ): Promise<GetInventorySchemaCommandOutput> | void {
    const command = new GetInventorySchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a maintenance window.</p>
   */
  public getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowCommandOutput>;
  public getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void
  ): void;
  public getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void
  ): void;
  public getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: GetMaintenanceWindowCommandOutput) => void
  ): Promise<GetMaintenanceWindowCommandOutput> | void {
    const command = new GetMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details about a specific a maintenance window execution.</p>
   */
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionCommandOutput>;
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void),
    cb?: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void
  ): Promise<GetMaintenanceWindowExecutionCommandOutput> | void {
    const command = new GetMaintenanceWindowExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details about a specific task run as part of a maintenance window
   *    execution.</p>
   */
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionTaskCommandOutput>;
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void),
    cb?: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void
  ): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> | void {
    const command = new GetMaintenanceWindowExecutionTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a specific task running on a specific target.</p>
   */
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput>;
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void
  ): void;
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void),
    cb?: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> | void {
    const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tasks in a maintenance window.</p>
   */
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowTaskCommandOutput>;
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void
  ): void;
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void
  ): void;
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void),
    cb?: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void
  ): Promise<GetMaintenanceWindowTaskCommandOutput> | void {
    const command = new GetMaintenanceWindowTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity
   *    and Access Management (IAM) to view information about an OpsItem. For more information, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
   *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
   *    operational issues impacting the performance and health of their AWS resources. For more
   *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  public getOpsItem(args: GetOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<GetOpsItemCommandOutput>;
  public getOpsItem(args: GetOpsItemCommandInput, cb: (err: any, data?: GetOpsItemCommandOutput) => void): void;
  public getOpsItem(
    args: GetOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsItemCommandOutput) => void
  ): void;
  public getOpsItem(
    args: GetOpsItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOpsItemCommandOutput) => void),
    cb?: (err: any, data?: GetOpsItemCommandOutput) => void
  ): Promise<GetOpsItemCommandOutput> | void {
    const command = new GetOpsItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>View operational metadata related to an application in AppManager.</p>
   */
  public getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpsMetadataCommandOutput>;
  public getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    cb: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): void;
  public getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): void;
  public getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOpsMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): Promise<GetOpsMetadataCommandOutput> | void {
    const command = new GetOpsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
   */
  public getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpsSummaryCommandOutput>;
  public getOpsSummary(
    args: GetOpsSummaryCommandInput,
    cb: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): void;
  public getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): void;
  public getOpsSummary(
    args: GetOpsSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOpsSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): Promise<GetOpsSummaryCommandOutput> | void {
    const command = new GetOpsSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about a parameter by using the parameter name. Don't confuse this API action
   *    with the <a>GetParameters</a> API action.</p>
   */
  public getParameter(
    args: GetParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParameterCommandOutput>;
  public getParameter(args: GetParameterCommandInput, cb: (err: any, data?: GetParameterCommandOutput) => void): void;
  public getParameter(
    args: GetParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParameterCommandOutput) => void
  ): void;
  public getParameter(
    args: GetParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetParameterCommandOutput) => void),
    cb?: (err: any, data?: GetParameterCommandOutput) => void
  ): Promise<GetParameterCommandOutput> | void {
    const command = new GetParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the history of all changes to a parameter.</p>
   */
  public getParameterHistory(
    args: GetParameterHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParameterHistoryCommandOutput>;
  public getParameterHistory(
    args: GetParameterHistoryCommandInput,
    cb: (err: any, data?: GetParameterHistoryCommandOutput) => void
  ): void;
  public getParameterHistory(
    args: GetParameterHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParameterHistoryCommandOutput) => void
  ): void;
  public getParameterHistory(
    args: GetParameterHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetParameterHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetParameterHistoryCommandOutput) => void
  ): Promise<GetParameterHistoryCommandOutput> | void {
    const command = new GetParameterHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.</p>
   */
  public getParameters(
    args: GetParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersCommandOutput>;
  public getParameters(
    args: GetParametersCommandInput,
    cb: (err: any, data?: GetParametersCommandOutput) => void
  ): void;
  public getParameters(
    args: GetParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersCommandOutput) => void
  ): void;
  public getParameters(
    args: GetParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetParametersCommandOutput) => void),
    cb?: (err: any, data?: GetParametersCommandOutput) => void
  ): Promise<GetParametersCommandOutput> | void {
    const command = new GetParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
   *          <note>
   *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
   *     in the request, the response includes information up to the limit specified. The number of items
   *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
   *     reaches an internal limit while processing the results, it stops the operation and returns the
   *     matching values up to that point and a <code>NextToken</code>. You can specify the
   *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
   *          </note>
   */
  public getParametersByPath(
    args: GetParametersByPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersByPathCommandOutput>;
  public getParametersByPath(
    args: GetParametersByPathCommandInput,
    cb: (err: any, data?: GetParametersByPathCommandOutput) => void
  ): void;
  public getParametersByPath(
    args: GetParametersByPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersByPathCommandOutput) => void
  ): void;
  public getParametersByPath(
    args: GetParametersByPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetParametersByPathCommandOutput) => void),
    cb?: (err: any, data?: GetParametersByPathCommandOutput) => void
  ): Promise<GetParametersByPathCommandOutput> | void {
    const command = new GetParametersByPathCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a patch baseline.</p>
   */
  public getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPatchBaselineCommandOutput>;
  public getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    cb: (err: any, data?: GetPatchBaselineCommandOutput) => void
  ): void;
  public getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPatchBaselineCommandOutput) => void
  ): void;
  public getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: GetPatchBaselineCommandOutput) => void
  ): Promise<GetPatchBaselineCommandOutput> | void {
    const command = new GetPatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
   */
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPatchBaselineForPatchGroupCommandOutput>;
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void),
    cb?: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void
  ): Promise<GetPatchBaselineForPatchGroupCommandOutput> | void {
    const command = new GetPatchBaselineForPatchGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
   *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
   *    AWS service charges money to the account based on feature or service usage, then the AWS service
   *    team might create a default setting of "false". This means the user can't use this feature unless
   *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
   *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
   *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
   *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
   *    permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change
   *    the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to
   *    the original value defined by the AWS service team.</p>
   *
   *          <p>Query the current service setting for the account. </p>
   */
  public getServiceSetting(
    args: GetServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingCommandOutput>;
  public getServiceSetting(
    args: GetServiceSettingCommandInput,
    cb: (err: any, data?: GetServiceSettingCommandOutput) => void
  ): void;
  public getServiceSetting(
    args: GetServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingCommandOutput) => void
  ): void;
  public getServiceSetting(
    args: GetServiceSettingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceSettingCommandOutput) => void),
    cb?: (err: any, data?: GetServiceSettingCommandOutput) => void
  ): Promise<GetServiceSettingCommandOutput> | void {
    const command = new GetServiceSettingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A parameter label is a user-defined alias to help you manage different versions of a
   *    parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments
   *    the version number by one. A label can help you remember the purpose of a parameter when there
   *    are multiple versions. </p>
   *          <p>Parameter labels have the following requirements and restrictions.</p>
   *          <ul>
   *             <li>
   *                <p>A version of a parameter can have a maximum of 10 labels.</p>
   *             </li>
   *             <li>
   *                <p>You can't attach the same label to different versions of the same parameter. For example,
   *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
   *             </li>
   *             <li>
   *                <p>You can move a label from one version of a parameter to another.</p>
   *             </li>
   *             <li>
   *                <p>You can't create a label when you create a new parameter. You must attach a label to a
   *      specific version of a parameter.</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a parameter label. If you no longer want to use a parameter label, then
   *      you must move it to a different version of a parameter.</p>
   *             </li>
   *             <li>
   *                <p>A label can have a maximum of 100 characters.</p>
   *             </li>
   *             <li>
   *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
   *      underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails
   *      to meet these requirements, then the label is not associated with a parameter and the system
   *      displays it in the list of InvalidLabels.</p>
   *             </li>
   *          </ul>
   */
  public labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LabelParameterVersionCommandOutput>;
  public labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    cb: (err: any, data?: LabelParameterVersionCommandOutput) => void
  ): void;
  public labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LabelParameterVersionCommandOutput) => void
  ): void;
  public labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LabelParameterVersionCommandOutput) => void),
    cb?: (err: any, data?: LabelParameterVersionCommandOutput) => void
  ): Promise<LabelParameterVersionCommandOutput> | void {
    const command = new LabelParameterVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all State Manager associations in the current AWS account and Region. You can limit
   *    the results to a specific State Manager association document or instance by specifying a
   *    filter.</p>
   */
  public listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsCommandOutput>;
  public listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  public listAssociations(
    args: ListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  public listAssociations(
    args: ListAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListAssociationsCommandOutput) => void
  ): Promise<ListAssociationsCommandOutput> | void {
    const command = new ListAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all versions of an association for a specific association ID.</p>
   */
  public listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationVersionsCommandOutput>;
  public listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void
  ): void;
  public listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void
  ): void;
  public listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociationVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListAssociationVersionsCommandOutput) => void
  ): Promise<ListAssociationVersionsCommandOutput> | void {
    const command = new ListAssociationVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
   *    or more instances. A command invocation applies to one instance. For example, if a user runs
   *    SendCommand against three instances, then a command invocation is created for each requested
   *    instance ID. ListCommandInvocations provide status about command execution.</p>
   */
  public listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommandInvocationsCommandOutput>;
  public listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void
  ): void;
  public listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void
  ): void;
  public listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCommandInvocationsCommandOutput) => void),
    cb?: (err: any, data?: ListCommandInvocationsCommandOutput) => void
  ): Promise<ListCommandInvocationsCommandOutput> | void {
    const command = new ListCommandInvocationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the commands requested by users of the AWS account.</p>
   */
  public listCommands(
    args: ListCommandsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommandsCommandOutput>;
  public listCommands(args: ListCommandsCommandInput, cb: (err: any, data?: ListCommandsCommandOutput) => void): void;
  public listCommands(
    args: ListCommandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandsCommandOutput) => void
  ): void;
  public listCommands(
    args: ListCommandsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCommandsCommandOutput) => void),
    cb?: (err: any, data?: ListCommandsCommandOutput) => void
  ): Promise<ListCommandsCommandOutput> | void {
    const command = new ListCommandsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For a specified resource ID, this API action returns a list of compliance statuses for
   *    different resource types. Currently, you can only specify one resource ID per call. List results
   *    depend on the criteria specified in the filter.</p>
   */
  public listComplianceItems(
    args: ListComplianceItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceItemsCommandOutput>;
  public listComplianceItems(
    args: ListComplianceItemsCommandInput,
    cb: (err: any, data?: ListComplianceItemsCommandOutput) => void
  ): void;
  public listComplianceItems(
    args: ListComplianceItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceItemsCommandOutput) => void
  ): void;
  public listComplianceItems(
    args: ListComplianceItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComplianceItemsCommandOutput) => void),
    cb?: (err: any, data?: ListComplianceItemsCommandOutput) => void
  ): Promise<ListComplianceItemsCommandOutput> | void {
    const command = new ListComplianceItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
   *    example, this call can return State Manager associations, patches, or custom compliance types
   *    according to the filter criteria that you specify.</p>
   */
  public listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceSummariesCommandOutput>;
  public listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void
  ): void;
  public listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void
  ): void;
  public listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComplianceSummariesCommandOutput) => void),
    cb?: (err: any, data?: ListComplianceSummariesCommandOutput) => void
  ): Promise<ListComplianceSummariesCommandOutput> | void {
    const command = new ListComplianceSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can limit the
   *    results of this request by using a filter.</p>
   */
  public listDocuments(
    args: ListDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentsCommandOutput>;
  public listDocuments(
    args: ListDocumentsCommandInput,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;
  public listDocuments(
    args: ListDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;
  public listDocuments(
    args: ListDocumentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDocumentsCommandOutput) => void),
    cb?: (err: any, data?: ListDocumentsCommandOutput) => void
  ): Promise<ListDocumentsCommandOutput> | void {
    const command = new ListDocumentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all versions for a document.</p>
   */
  public listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentVersionsCommandOutput>;
  public listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void
  ): void;
  public listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void
  ): void;
  public listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDocumentVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListDocumentVersionsCommandOutput) => void
  ): Promise<ListDocumentVersionsCommandOutput> | void {
    const command = new ListDocumentVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A list of inventory items returned by the request.</p>
   */
  public listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInventoryEntriesCommandOutput>;
  public listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void
  ): void;
  public listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void
  ): void;
  public listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInventoryEntriesCommandOutput) => void),
    cb?: (err: any, data?: ListInventoryEntriesCommandOutput) => void
  ): Promise<ListInventoryEntriesCommandOutput> | void {
    const command = new ListInventoryEntriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Systems Manager calls this API action when displaying all AppManager OpsMetadata objects or
   *    blobs.</p>
   */
  public listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpsMetadataCommandOutput>;
  public listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    cb: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): void;
  public listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): void;
  public listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOpsMetadataCommandOutput) => void),
    cb?: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): Promise<ListOpsMetadataCommandOutput> | void {
    const command = new ListOpsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a resource-level summary count. The summary includes information about compliant and
   *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
   *    criteria you specify.</p>
   */
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceComplianceSummariesCommandOutput>;
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void
  ): void;
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void
  ): void;
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceComplianceSummariesCommandOutput) => void),
    cb?: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void
  ): Promise<ListResourceComplianceSummariesCommandOutput> | void {
    const command = new ListResourceComplianceSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your resource data sync configurations. Includes information about the last time a
   *    sync attempted to start, the last sync status, and the last time a sync successfully
   *    completed.</p>
   *          <p>The number of sync configurations might be too large to return using a single call to
   *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
   *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
   *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
   *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
   *    returned in the call to the parameter of a subsequent call. </p>
   */
  public listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDataSyncCommandOutput>;
  public listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void
  ): void;
  public listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void
  ): void;
  public listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceDataSyncCommandOutput) => void),
    cb?: (err: any, data?: ListResourceDataSyncCommandOutput) => void
  ): Promise<ListResourceDataSyncCommandOutput> | void {
    const command = new ListResourceDataSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the tags assigned to the specified resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Shares a Systems Manager document publicly or privately. If you share a document privately, you must
   *    specify the AWS user account IDs for those people who can use the document. If you share a
   *    document publicly, you must specify <i>All</i> as the account ID.</p>
   */
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDocumentPermissionCommandOutput>;
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void
  ): void;
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void
  ): void;
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDocumentPermissionCommandOutput) => void),
    cb?: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void
  ): Promise<ModifyDocumentPermissionCommandOutput> | void {
    const command = new ModifyDocumentPermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a compliance type and other compliance details on a designated resource. This
   *    action lets you register custom compliance details with a resource. This call overwrites existing
   *    compliance information on the resource, so you must provide a full list of compliance items each
   *    time that you send the request.</p>
   *          <p>ComplianceType can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was
   *      applied.</p>
   *             </li>
   *             <li>
   *                <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p>
   *             </li>
   *             <li>
   *                <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to
   *      the instance.</p>
   *             </li>
   *             <li>
   *                <p>Id: The patch, association, or custom compliance ID.</p>
   *             </li>
   *             <li>
   *                <p>Title: A title.</p>
   *             </li>
   *             <li>
   *                <p>Status: The status of the compliance item. For example, <code>approved</code> for patches,
   *      or <code>Failed</code> for associations.</p>
   *             </li>
   *             <li>
   *                <p>Severity: A patch severity. For example, <code>critical</code>.</p>
   *             </li>
   *             <li>
   *                <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p>
   *             </li>
   *             <li>
   *                <p>DocumentVersion: An SSM document version number. For example, 4.</p>
   *             </li>
   *             <li>
   *                <p>Classification: A patch classification. For example, <code>security updates</code>.</p>
   *             </li>
   *             <li>
   *                <p>PatchBaselineId: A patch baseline ID.</p>
   *             </li>
   *             <li>
   *                <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p>
   *             </li>
   *             <li>
   *                <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p>
   *             </li>
   *             <li>
   *                <p>PatchGroup: The name of a patch group.</p>
   *             </li>
   *             <li>
   *                <p>InstalledTime: The time the association, patch, or custom compliance item was applied to
   *      the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p>
   *             </li>
   *          </ul>
   */
  public putComplianceItems(
    args: PutComplianceItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutComplianceItemsCommandOutput>;
  public putComplianceItems(
    args: PutComplianceItemsCommandInput,
    cb: (err: any, data?: PutComplianceItemsCommandOutput) => void
  ): void;
  public putComplianceItems(
    args: PutComplianceItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutComplianceItemsCommandOutput) => void
  ): void;
  public putComplianceItems(
    args: PutComplianceItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutComplianceItemsCommandOutput) => void),
    cb?: (err: any, data?: PutComplianceItemsCommandOutput) => void
  ): Promise<PutComplianceItemsCommandOutput> | void {
    const command = new PutComplianceItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Bulk update custom inventory items on one more instance. The request adds an inventory item,
   *    if it doesn't already exist, or updates an inventory item, if it does exist.</p>
   */
  public putInventory(
    args: PutInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInventoryCommandOutput>;
  public putInventory(args: PutInventoryCommandInput, cb: (err: any, data?: PutInventoryCommandOutput) => void): void;
  public putInventory(
    args: PutInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInventoryCommandOutput) => void
  ): void;
  public putInventory(
    args: PutInventoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutInventoryCommandOutput) => void),
    cb?: (err: any, data?: PutInventoryCommandOutput) => void
  ): Promise<PutInventoryCommandOutput> | void {
    const command = new PutInventoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add a parameter to the system.</p>
   */
  public putParameter(
    args: PutParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutParameterCommandOutput>;
  public putParameter(args: PutParameterCommandInput, cb: (err: any, data?: PutParameterCommandOutput) => void): void;
  public putParameter(
    args: PutParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutParameterCommandOutput) => void
  ): void;
  public putParameter(
    args: PutParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutParameterCommandOutput) => void),
    cb?: (err: any, data?: PutParameterCommandOutput) => void
  ): Promise<PutParameterCommandOutput> | void {
    const command = new PutParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines the default patch baseline for the relevant operating system.</p>
   *          <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline
   *    ARN as the baseline ID value. For example, for CentOS, specify
   *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
   *     <code>pb-0574b43a65ea646ed</code>.</p>
   */
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDefaultPatchBaselineCommandOutput>;
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void
  ): void;
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void
  ): void;
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void
  ): Promise<RegisterDefaultPatchBaselineCommandOutput> | void {
    const command = new RegisterDefaultPatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a patch baseline for a patch group.</p>
   */
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPatchBaselineForPatchGroupCommandOutput>;
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void),
    cb?: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void
  ): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> | void {
    const command = new RegisterPatchBaselineForPatchGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a target with a maintenance window.</p>
   */
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTargetWithMaintenanceWindowCommandOutput>;
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void
  ): void;
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void
  ): void;
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void
  ): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> | void {
    const command = new RegisterTargetWithMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a new task to a maintenance window.</p>
   */
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTaskWithMaintenanceWindowCommandOutput>;
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void
  ): void;
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void
  ): void;
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void
  ): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> | void {
    const command = new RegisterTaskWithMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tag keys from the specified resource.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
   *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
   *    AWS service charges money to the account based on feature or service usage, then the AWS service
   *    team might create a default setting of "false". This means the user can't use this feature unless
   *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
   *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
   *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
   *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
   *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
   *    current value. Use the <a>UpdateServiceSetting</a> API action to change the default
   *    setting. </p>
   *
   *          <p>Reset the service setting for the account to the default value as provisioned by the AWS
   *    service team. </p>
   */
  public resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetServiceSettingCommandOutput>;
  public resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    cb: (err: any, data?: ResetServiceSettingCommandOutput) => void
  ): void;
  public resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetServiceSettingCommandOutput) => void
  ): void;
  public resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetServiceSettingCommandOutput) => void),
    cb?: (err: any, data?: ResetServiceSettingCommandOutput) => void
  ): Promise<ResetServiceSettingCommandOutput> | void {
    const command = new ResetServiceSettingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reconnects a session to an instance after it has been disconnected. Connections can be
   *    resumed for disconnected sessions, but not terminated sessions.</p>
   *          <note>
   *             <p>This command is primarily for use by client machines to automatically reconnect during
   *     intermittent network issues. It is not intended for any other use.</p>
   *          </note>
   */
  public resumeSession(
    args: ResumeSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeSessionCommandOutput>;
  public resumeSession(
    args: ResumeSessionCommandInput,
    cb: (err: any, data?: ResumeSessionCommandOutput) => void
  ): void;
  public resumeSession(
    args: ResumeSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeSessionCommandOutput) => void
  ): void;
  public resumeSession(
    args: ResumeSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeSessionCommandOutput) => void),
    cb?: (err: any, data?: ResumeSessionCommandOutput) => void
  ): Promise<ResumeSessionCommandOutput> | void {
    const command = new ResumeSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a signal to an Automation execution to change the current behavior or status of the
   *    execution. </p>
   */
  public sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAutomationSignalCommandOutput>;
  public sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    cb: (err: any, data?: SendAutomationSignalCommandOutput) => void
  ): void;
  public sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAutomationSignalCommandOutput) => void
  ): void;
  public sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendAutomationSignalCommandOutput) => void),
    cb?: (err: any, data?: SendAutomationSignalCommandOutput) => void
  ): Promise<SendAutomationSignalCommandOutput> | void {
    const command = new SendAutomationSignalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs commands on one or more managed instances.</p>
   */
  public sendCommand(args: SendCommandCommandInput, options?: __HttpHandlerOptions): Promise<SendCommandCommandOutput>;
  public sendCommand(args: SendCommandCommandInput, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
  public sendCommand(
    args: SendCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;
  public sendCommand(
    args: SendCommandCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendCommandCommandOutput) => void),
    cb?: (err: any, data?: SendCommandCommandOutput) => void
  ): Promise<SendCommandCommandOutput> | void {
    const command = new SendCommandCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this API action to run an association immediately and only one time. This action can be
   *    helpful when troubleshooting associations.</p>
   */
  public startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssociationsOnceCommandOutput>;
  public startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void
  ): void;
  public startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void
  ): void;
  public startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAssociationsOnceCommandOutput) => void),
    cb?: (err: any, data?: StartAssociationsOnceCommandOutput) => void
  ): Promise<StartAssociationsOnceCommandOutput> | void {
    const command = new StartAssociationsOnceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates execution of an Automation document.</p>
   */
  public startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAutomationExecutionCommandOutput>;
  public startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void
  ): void;
  public startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void
  ): void;
  public startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAutomationExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartAutomationExecutionCommandOutput) => void
  ): Promise<StartAutomationExecutionCommandOutput> | void {
    const command = new StartAutomationExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
   *    URL and token that can be used to open a WebSocket connection for sending input and receiving
   *    outputs.</p>
   *          <note>
   *             <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
   *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
   *      the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *             <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools
   *     for PowerShell on Windows local machines.</p>
   *          </note>
   */
  public startSession(
    args: StartSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSessionCommandOutput>;
  public startSession(args: StartSessionCommandInput, cb: (err: any, data?: StartSessionCommandOutput) => void): void;
  public startSession(
    args: StartSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSessionCommandOutput) => void
  ): void;
  public startSession(
    args: StartSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSessionCommandOutput) => void),
    cb?: (err: any, data?: StartSessionCommandOutput) => void
  ): Promise<StartSessionCommandOutput> | void {
    const command = new StartSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stop an Automation that is currently running.</p>
   */
  public stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAutomationExecutionCommandOutput>;
  public stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void
  ): void;
  public stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void
  ): void;
  public stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAutomationExecutionCommandOutput) => void),
    cb?: (err: any, data?: StopAutomationExecutionCommandOutput) => void
  ): Promise<StopAutomationExecutionCommandOutput> | void {
    const command = new StopAutomationExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently ends a session and closes the data connection between the Session Manager client and
   *    SSM Agent on the instance. A terminated session cannot be resumed.</p>
   */
  public terminateSession(
    args: TerminateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateSessionCommandOutput>;
  public terminateSession(
    args: TerminateSessionCommandInput,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;
  public terminateSession(
    args: TerminateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;
  public terminateSession(
    args: TerminateSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateSessionCommandOutput) => void),
    cb?: (err: any, data?: TerminateSessionCommandOutput) => void
  ): Promise<TerminateSessionCommandOutput> | void {
    const command = new TerminateSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an association. You can update the association name and version, the document
   *    version, schedule, parameters, and Amazon S3 output. </p>
   *          <p>In order to call this API action, your IAM user account, group, or role must be configured
   *    with permission to call the <a>DescribeAssociation</a> API action. If you don't have
   *    permission to call DescribeAssociation, then you receive the following error: <code>An error
   *     occurred (AccessDeniedException) when calling the UpdateAssociation operation: User:
   *     <user_arn> is not authorized to perform: ssm:DescribeAssociation on resource:
   *     <resource_arn></code>
   *          </p>
   *          <important>
   *             <p>When you update an association, the association immediately runs against the specified
   *     targets.</p>
   *          </important>
   */
  public updateAssociation(
    args: UpdateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssociationCommandOutput>;
  public updateAssociation(
    args: UpdateAssociationCommandInput,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;
  public updateAssociation(
    args: UpdateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;
  public updateAssociation(
    args: UpdateAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): Promise<UpdateAssociationCommandOutput> | void {
    const command = new UpdateAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status of the Systems Manager document associated with the specified instance.</p>
   */
  public updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssociationStatusCommandOutput>;
  public updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void
  ): void;
  public updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void
  ): void;
  public updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssociationStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssociationStatusCommandOutput) => void
  ): Promise<UpdateAssociationStatusCommandOutput> | void {
    const command = new UpdateAssociationStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates one or more values for an SSM document.</p>
   */
  public updateDocument(
    args: UpdateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentCommandOutput>;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): Promise<UpdateDocumentCommandOutput> | void {
    const command = new UpdateDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set the default version of a document. </p>
   */
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentDefaultVersionCommandOutput>;
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void
  ): void;
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void
  ): void;
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void
  ): Promise<UpdateDocumentDefaultVersionCommandOutput> | void {
    const command = new UpdateDocumentDefaultVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
   *          <note>
   *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
   *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
   *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
   *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
   *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
   *     after 5 PM.</p>
   *          </note>
   */
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowCommandOutput>;
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void
  ): void;
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void
  ): void;
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMaintenanceWindowCommandOutput) => void),
    cb?: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void
  ): Promise<UpdateMaintenanceWindowCommandOutput> | void {
    const command = new UpdateMaintenanceWindowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the target of an existing maintenance window. You
   *    can change the following:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Name</p>
   *             </li>
   *             <li>
   *                <p>Description</p>
   *             </li>
   *             <li>
   *                <p>Owner</p>
   *             </li>
   *             <li>
   *                <p>IDs for an ID target</p>
   *             </li>
   *             <li>
   *                <p>Tags for a Tag target</p>
   *             </li>
   *             <li>
   *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
   *      target, and resource group. For more information, see <a>Target</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If a parameter is null, then the corresponding field is not modified.</p>
   *          </note>
   */
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput>;
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void
  ): void;
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void
  ): void;
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void),
    cb?: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput> | void {
    const command = new UpdateMaintenanceWindowTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
   *    can change the following values:</p>
   *          <ul>
   *             <li>
   *                <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to
   *      AWS-RunShellScript.</p>
   *             </li>
   *             <li>
   *                <p>ServiceRoleArn</p>
   *             </li>
   *             <li>
   *                <p>TaskInvocationParameters</p>
   *             </li>
   *             <li>
   *                <p>Priority</p>
   *             </li>
   *             <li>
   *                <p>MaxConcurrency</p>
   *             </li>
   *             <li>
   *                <p>MaxErrors</p>
   *             </li>
   *          </ul>
   *          <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the
   *    corresponding field is not modified. If you set <code>Replace</code> to true, then all fields
   *    required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this
   *    request. Optional fields that aren't specified are set to null.</p>
   *          <important>
   *             <p>When you update a maintenance window task that has options specified in
   *      <code>TaskInvocationParameters</code>, you must provide again all the
   *      <code>TaskInvocationParameters</code> values that you want to retain. The values you do not
   *     specify again are removed. For example, suppose that when you registered a Run Command task, you
   *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
   *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
   *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
   *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
   *          </important>
   */
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowTaskCommandOutput>;
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void
  ): void;
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void
  ): void;
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void),
    cb?: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void
  ): Promise<UpdateMaintenanceWindowTaskCommandOutput> | void {
    const command = new UpdateMaintenanceWindowTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the Amazon Identity and Access Management (IAM) role that is assigned to the
   *    on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid
   *    instances during the activation process. For more information, see <a>CreateActivation</a>.</p>
   */
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedInstanceRoleCommandOutput>;
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void
  ): void;
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void
  ): void;
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void),
    cb?: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void
  ): Promise<UpdateManagedInstanceRoleCommandOutput> | void {
    const command = new UpdateManagedInstanceRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management
   *    (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
   *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
   *    operational issues impacting the performance and health of their AWS resources. For more
   *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  public updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpsItemCommandOutput>;
  public updateOpsItem(
    args: UpdateOpsItemCommandInput,
    cb: (err: any, data?: UpdateOpsItemCommandOutput) => void
  ): void;
  public updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpsItemCommandOutput) => void
  ): void;
  public updateOpsItem(
    args: UpdateOpsItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOpsItemCommandOutput) => void),
    cb?: (err: any, data?: UpdateOpsItemCommandOutput) => void
  ): Promise<UpdateOpsItemCommandOutput> | void {
    const command = new UpdateOpsItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Systems Manager calls this API action when you edit OpsMetadata in AppManager.</p>
   */
  public updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpsMetadataCommandOutput>;
  public updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    cb: (err: any, data?: UpdateOpsMetadataCommandOutput) => void
  ): void;
  public updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpsMetadataCommandOutput) => void
  ): void;
  public updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOpsMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateOpsMetadataCommandOutput) => void
  ): Promise<UpdateOpsMetadataCommandOutput> | void {
    const command = new UpdateOpsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing patch baseline. Fields not specified in the request are left
   *    unchanged.</p>
   *          <note>
   *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
   *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
   *          </note>
   */
  public updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePatchBaselineCommandOutput>;
  public updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void
  ): void;
  public updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void
  ): void;
  public updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePatchBaselineCommandOutput) => void),
    cb?: (err: any, data?: UpdatePatchBaselineCommandOutput) => void
  ): Promise<UpdatePatchBaselineCommandOutput> | void {
    const command = new UpdatePatchBaselineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
   *    change the account options for that sync. For example, if you create a sync in the us-east-2
   *    (Ohio) Region and you choose the Include only the current account option, you can't edit that
   *    sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead,
   *    you must delete the first resource data sync, and create a new one.</p>
   *          <note>
   *             <p>This API action only supports a resource data sync that was created with a SyncFromSource
   *      <code>SyncType</code>.</p>
   *          </note>
   */
  public updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceDataSyncCommandOutput>;
  public updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void
  ): void;
  public updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void
  ): void;
  public updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceDataSyncCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void
  ): Promise<UpdateResourceDataSyncCommandOutput> | void {
    const command = new UpdateResourceDataSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
   *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
   *    AWS service charges money to the account based on feature or service usage, then the AWS service
   *    team might create a default setting of "false". This means the user can't use this feature unless
   *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
   *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
   *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
   *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
   *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
   *    current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the
   *    original value defined by the AWS service team.</p>
   *
   *          <p>Update the service setting for the account. </p>
   */
  public updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingCommandOutput>;
  public updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void
  ): void;
  public updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void
  ): void;
  public updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceSettingCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceSettingCommandOutput) => void
  ): Promise<UpdateServiceSettingCommandOutput> | void {
    const command = new UpdateServiceSettingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
