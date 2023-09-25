// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  AssociateOpsItemRelatedItemCommand,
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
} from "./commands/AssociateOpsItemRelatedItemCommand";
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
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
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
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "./commands/DescribeAssociationExecutionsCommand";
import {
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "./commands/DescribeAssociationExecutionTargetsCommand";
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
  DescribeInstancePatchesCommand,
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "./commands/DescribeInstancePatchesCommand";
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
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "./commands/DescribeInventoryDeletionsCommand";
import {
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand";
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
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "./commands/DescribeMaintenanceWindowScheduleCommand";
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
  DescribePatchGroupsCommand,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "./commands/DescribePatchGroupsCommand";
import {
  DescribePatchGroupStateCommand,
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "./commands/DescribePatchGroupStateCommand";
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
  DisassociateOpsItemRelatedItemCommand,
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
} from "./commands/DisassociateOpsItemRelatedItemCommand";
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
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
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
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "./commands/ListAssociationsCommand";
import {
  ListAssociationVersionsCommand,
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "./commands/ListAssociationVersionsCommand";
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
  ListDocumentMetadataHistoryCommand,
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
} from "./commands/ListDocumentMetadataHistoryCommand";
import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "./commands/ListDocumentsCommand";
import {
  ListDocumentVersionsCommand,
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "./commands/ListDocumentVersionsCommand";
import {
  ListInventoryEntriesCommand,
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "./commands/ListInventoryEntriesCommand";
import {
  ListOpsItemEventsCommand,
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
} from "./commands/ListOpsItemEventsCommand";
import {
  ListOpsItemRelatedItemsCommand,
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "./commands/ListOpsItemRelatedItemsCommand";
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
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
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
  StartChangeRequestExecutionCommand,
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
} from "./commands/StartChangeRequestExecutionCommand";
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
  UnlabelParameterVersionCommand,
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
} from "./commands/UnlabelParameterVersionCommand";
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
  UpdateDocumentMetadataCommand,
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
} from "./commands/UpdateDocumentMetadataCommand";
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
import { SSMClient, SSMClientConfig } from "./SSMClient";

const commands = {
  AddTagsToResourceCommand,
  AssociateOpsItemRelatedItemCommand,
  CancelCommandCommand,
  CancelMaintenanceWindowExecutionCommand,
  CreateActivationCommand,
  CreateAssociationCommand,
  CreateAssociationBatchCommand,
  CreateDocumentCommand,
  CreateMaintenanceWindowCommand,
  CreateOpsItemCommand,
  CreateOpsMetadataCommand,
  CreatePatchBaselineCommand,
  CreateResourceDataSyncCommand,
  DeleteActivationCommand,
  DeleteAssociationCommand,
  DeleteDocumentCommand,
  DeleteInventoryCommand,
  DeleteMaintenanceWindowCommand,
  DeleteOpsMetadataCommand,
  DeleteParameterCommand,
  DeleteParametersCommand,
  DeletePatchBaselineCommand,
  DeleteResourceDataSyncCommand,
  DeleteResourcePolicyCommand,
  DeregisterManagedInstanceCommand,
  DeregisterPatchBaselineForPatchGroupCommand,
  DeregisterTargetFromMaintenanceWindowCommand,
  DeregisterTaskFromMaintenanceWindowCommand,
  DescribeActivationsCommand,
  DescribeAssociationCommand,
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionTargetsCommand,
  DescribeAutomationExecutionsCommand,
  DescribeAutomationStepExecutionsCommand,
  DescribeAvailablePatchesCommand,
  DescribeDocumentCommand,
  DescribeDocumentPermissionCommand,
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceInformationCommand,
  DescribeInstancePatchesCommand,
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInventoryDeletionsCommand,
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTasksCommand,
  DescribeOpsItemsCommand,
  DescribeParametersCommand,
  DescribePatchBaselinesCommand,
  DescribePatchGroupsCommand,
  DescribePatchGroupStateCommand,
  DescribePatchPropertiesCommand,
  DescribeSessionsCommand,
  DisassociateOpsItemRelatedItemCommand,
  GetAutomationExecutionCommand,
  GetCalendarStateCommand,
  GetCommandInvocationCommand,
  GetConnectionStatusCommand,
  GetDefaultPatchBaselineCommand,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDocumentCommand,
  GetInventoryCommand,
  GetInventorySchemaCommand,
  GetMaintenanceWindowCommand,
  GetMaintenanceWindowExecutionCommand,
  GetMaintenanceWindowExecutionTaskCommand,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  GetMaintenanceWindowTaskCommand,
  GetOpsItemCommand,
  GetOpsMetadataCommand,
  GetOpsSummaryCommand,
  GetParameterCommand,
  GetParameterHistoryCommand,
  GetParametersCommand,
  GetParametersByPathCommand,
  GetPatchBaselineCommand,
  GetPatchBaselineForPatchGroupCommand,
  GetResourcePoliciesCommand,
  GetServiceSettingCommand,
  LabelParameterVersionCommand,
  ListAssociationsCommand,
  ListAssociationVersionsCommand,
  ListCommandInvocationsCommand,
  ListCommandsCommand,
  ListComplianceItemsCommand,
  ListComplianceSummariesCommand,
  ListDocumentMetadataHistoryCommand,
  ListDocumentsCommand,
  ListDocumentVersionsCommand,
  ListInventoryEntriesCommand,
  ListOpsItemEventsCommand,
  ListOpsItemRelatedItemsCommand,
  ListOpsMetadataCommand,
  ListResourceComplianceSummariesCommand,
  ListResourceDataSyncCommand,
  ListTagsForResourceCommand,
  ModifyDocumentPermissionCommand,
  PutComplianceItemsCommand,
  PutInventoryCommand,
  PutParameterCommand,
  PutResourcePolicyCommand,
  RegisterDefaultPatchBaselineCommand,
  RegisterPatchBaselineForPatchGroupCommand,
  RegisterTargetWithMaintenanceWindowCommand,
  RegisterTaskWithMaintenanceWindowCommand,
  RemoveTagsFromResourceCommand,
  ResetServiceSettingCommand,
  ResumeSessionCommand,
  SendAutomationSignalCommand,
  SendCommandCommand,
  StartAssociationsOnceCommand,
  StartAutomationExecutionCommand,
  StartChangeRequestExecutionCommand,
  StartSessionCommand,
  StopAutomationExecutionCommand,
  TerminateSessionCommand,
  UnlabelParameterVersionCommand,
  UpdateAssociationCommand,
  UpdateAssociationStatusCommand,
  UpdateDocumentCommand,
  UpdateDocumentDefaultVersionCommand,
  UpdateDocumentMetadataCommand,
  UpdateMaintenanceWindowCommand,
  UpdateMaintenanceWindowTargetCommand,
  UpdateMaintenanceWindowTaskCommand,
  UpdateManagedInstanceRoleCommand,
  UpdateOpsItemCommand,
  UpdateOpsMetadataCommand,
  UpdatePatchBaselineCommand,
  UpdateResourceDataSyncCommand,
  UpdateServiceSettingCommand,
};

export interface SSM {
  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateOpsItemRelatedItemCommand}
   */
  associateOpsItemRelatedItem(
    args: AssociateOpsItemRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOpsItemRelatedItemCommandOutput>;
  associateOpsItemRelatedItem(
    args: AssociateOpsItemRelatedItemCommandInput,
    cb: (err: any, data?: AssociateOpsItemRelatedItemCommandOutput) => void
  ): void;
  associateOpsItemRelatedItem(
    args: AssociateOpsItemRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOpsItemRelatedItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelCommandCommand}
   */
  cancelCommand(args: CancelCommandCommandInput, options?: __HttpHandlerOptions): Promise<CancelCommandCommandOutput>;
  cancelCommand(args: CancelCommandCommandInput, cb: (err: any, data?: CancelCommandCommandOutput) => void): void;
  cancelCommand(
    args: CancelCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMaintenanceWindowExecutionCommand}
   */
  cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMaintenanceWindowExecutionCommandOutput>;
  cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateActivationCommand}
   */
  createActivation(
    args: CreateActivationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActivationCommandOutput>;
  createActivation(
    args: CreateActivationCommandInput,
    cb: (err: any, data?: CreateActivationCommandOutput) => void
  ): void;
  createActivation(
    args: CreateActivationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActivationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssociationCommand}
   */
  createAssociation(
    args: CreateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssociationCommandOutput>;
  createAssociation(
    args: CreateAssociationCommandInput,
    cb: (err: any, data?: CreateAssociationCommandOutput) => void
  ): void;
  createAssociation(
    args: CreateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssociationBatchCommand}
   */
  createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssociationBatchCommandOutput>;
  createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void
  ): void;
  createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDocumentCommand}
   */
  createDocument(
    args: CreateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentCommandOutput>;
  createDocument(args: CreateDocumentCommandInput, cb: (err: any, data?: CreateDocumentCommandOutput) => void): void;
  createDocument(
    args: CreateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMaintenanceWindowCommand}
   */
  createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMaintenanceWindowCommandOutput>;
  createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void
  ): void;
  createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpsItemCommand}
   */
  createOpsItem(args: CreateOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<CreateOpsItemCommandOutput>;
  createOpsItem(args: CreateOpsItemCommandInput, cb: (err: any, data?: CreateOpsItemCommandOutput) => void): void;
  createOpsItem(
    args: CreateOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpsItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpsMetadataCommand}
   */
  createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpsMetadataCommandOutput>;
  createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    cb: (err: any, data?: CreateOpsMetadataCommandOutput) => void
  ): void;
  createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePatchBaselineCommand}
   */
  createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePatchBaselineCommandOutput>;
  createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void
  ): void;
  createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceDataSyncCommand}
   */
  createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDataSyncCommandOutput>;
  createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void
  ): void;
  createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActivationCommand}
   */
  deleteActivation(
    args: DeleteActivationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActivationCommandOutput>;
  deleteActivation(
    args: DeleteActivationCommandInput,
    cb: (err: any, data?: DeleteActivationCommandOutput) => void
  ): void;
  deleteActivation(
    args: DeleteActivationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActivationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssociationCommand}
   */
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssociationCommandOutput>;
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentCommand}
   */
  deleteDocument(
    args: DeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentCommandOutput>;
  deleteDocument(args: DeleteDocumentCommandInput, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
  deleteDocument(
    args: DeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInventoryCommand}
   */
  deleteInventory(
    args: DeleteInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInventoryCommandOutput>;
  deleteInventory(args: DeleteInventoryCommandInput, cb: (err: any, data?: DeleteInventoryCommandOutput) => void): void;
  deleteInventory(
    args: DeleteInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInventoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMaintenanceWindowCommand}
   */
  deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMaintenanceWindowCommandOutput>;
  deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void
  ): void;
  deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOpsMetadataCommand}
   */
  deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpsMetadataCommandOutput>;
  deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    cb: (err: any, data?: DeleteOpsMetadataCommandOutput) => void
  ): void;
  deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParameterCommand}
   */
  deleteParameter(
    args: DeleteParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParameterCommandOutput>;
  deleteParameter(args: DeleteParameterCommandInput, cb: (err: any, data?: DeleteParameterCommandOutput) => void): void;
  deleteParameter(
    args: DeleteParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParametersCommand}
   */
  deleteParameters(
    args: DeleteParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParametersCommandOutput>;
  deleteParameters(
    args: DeleteParametersCommandInput,
    cb: (err: any, data?: DeleteParametersCommandOutput) => void
  ): void;
  deleteParameters(
    args: DeleteParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePatchBaselineCommand}
   */
  deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePatchBaselineCommandOutput>;
  deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void
  ): void;
  deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceDataSyncCommand}
   */
  deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceDataSyncCommandOutput>;
  deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void
  ): void;
  deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterManagedInstanceCommand}
   */
  deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterManagedInstanceCommandOutput>;
  deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void
  ): void;
  deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterPatchBaselineForPatchGroupCommand}
   */
  deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput>;
  deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTargetFromMaintenanceWindowCommand}
   */
  deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput>;
  deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void
  ): void;
  deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTaskFromMaintenanceWindowCommand}
   */
  deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput>;
  deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void
  ): void;
  deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivationsCommand}
   */
  describeActivations(
    args: DescribeActivationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivationsCommandOutput>;
  describeActivations(
    args: DescribeActivationsCommandInput,
    cb: (err: any, data?: DescribeActivationsCommandOutput) => void
  ): void;
  describeActivations(
    args: DescribeActivationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssociationCommand}
   */
  describeAssociation(
    args: DescribeAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationCommandOutput>;
  describeAssociation(
    args: DescribeAssociationCommandInput,
    cb: (err: any, data?: DescribeAssociationCommandOutput) => void
  ): void;
  describeAssociation(
    args: DescribeAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssociationExecutionsCommand}
   */
  describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationExecutionsCommandOutput>;
  describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void
  ): void;
  describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssociationExecutionTargetsCommand}
   */
  describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssociationExecutionTargetsCommandOutput>;
  describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void
  ): void;
  describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutomationExecutionsCommand}
   */
  describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutomationExecutionsCommandOutput>;
  describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void
  ): void;
  describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutomationStepExecutionsCommand}
   */
  describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutomationStepExecutionsCommandOutput>;
  describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void
  ): void;
  describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAvailablePatchesCommand}
   */
  describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailablePatchesCommandOutput>;
  describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void
  ): void;
  describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDocumentCommand}
   */
  describeDocument(
    args: DescribeDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentCommandOutput>;
  describeDocument(
    args: DescribeDocumentCommandInput,
    cb: (err: any, data?: DescribeDocumentCommandOutput) => void
  ): void;
  describeDocument(
    args: DescribeDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDocumentPermissionCommand}
   */
  describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentPermissionCommandOutput>;
  describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void
  ): void;
  describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEffectiveInstanceAssociationsCommand}
   */
  describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectiveInstanceAssociationsCommandOutput>;
  describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void
  ): void;
  describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEffectivePatchesForPatchBaselineCommand}
   */
  describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
  describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void
  ): void;
  describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceAssociationsStatusCommand}
   */
  describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAssociationsStatusCommandOutput>;
  describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void
  ): void;
  describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceInformationCommand}
   */
  describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceInformationCommandOutput>;
  describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void
  ): void;
  describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancePatchesCommand}
   */
  describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchesCommandOutput>;
  describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void
  ): void;
  describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancePatchStatesCommand}
   */
  describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchStatesCommandOutput>;
  describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void
  ): void;
  describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancePatchStatesForPatchGroupCommand}
   */
  describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput>;
  describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void
  ): void;
  describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInventoryDeletionsCommand}
   */
  describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInventoryDeletionsCommandOutput>;
  describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void
  ): void;
  describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionsCommand}
   */
  describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionsCommandOutput>;
  describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void
  ): void;
  describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}
   */
  describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
  describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void
  ): void;
  describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTasksCommand}
   */
  describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
  describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void
  ): void;
  describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowsCommand}
   */
  describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowsCommandOutput>;
  describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void
  ): void;
  describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowScheduleCommand}
   */
  describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowScheduleCommandOutput>;
  describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void
  ): void;
  describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowsForTargetCommand}
   */
  describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowsForTargetCommandOutput>;
  describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void
  ): void;
  describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowTargetsCommand}
   */
  describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowTargetsCommandOutput>;
  describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void
  ): void;
  describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceWindowTasksCommand}
   */
  describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput>;
  describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void
  ): void;
  describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOpsItemsCommand}
   */
  describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOpsItemsCommandOutput>;
  describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void
  ): void;
  describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParametersCommandOutput>;
  describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  describeParameters(
    args: DescribeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePatchBaselinesCommand}
   */
  describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchBaselinesCommandOutput>;
  describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void
  ): void;
  describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePatchGroupsCommand}
   */
  describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchGroupsCommandOutput>;
  describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void
  ): void;
  describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePatchGroupStateCommand}
   */
  describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchGroupStateCommandOutput>;
  describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void
  ): void;
  describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePatchPropertiesCommand}
   */
  describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePatchPropertiesCommandOutput>;
  describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void
  ): void;
  describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSessionsCommand}
   */
  describeSessions(
    args: DescribeSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSessionsCommandOutput>;
  describeSessions(
    args: DescribeSessionsCommandInput,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  describeSessions(
    args: DescribeSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOpsItemRelatedItemCommand}
   */
  disassociateOpsItemRelatedItem(
    args: DisassociateOpsItemRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOpsItemRelatedItemCommandOutput>;
  disassociateOpsItemRelatedItem(
    args: DisassociateOpsItemRelatedItemCommandInput,
    cb: (err: any, data?: DisassociateOpsItemRelatedItemCommandOutput) => void
  ): void;
  disassociateOpsItemRelatedItem(
    args: DisassociateOpsItemRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOpsItemRelatedItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutomationExecutionCommand}
   */
  getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomationExecutionCommandOutput>;
  getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void
  ): void;
  getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalendarStateCommand}
   */
  getCalendarState(
    args: GetCalendarStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalendarStateCommandOutput>;
  getCalendarState(
    args: GetCalendarStateCommandInput,
    cb: (err: any, data?: GetCalendarStateCommandOutput) => void
  ): void;
  getCalendarState(
    args: GetCalendarStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalendarStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommandInvocationCommand}
   */
  getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommandInvocationCommandOutput>;
  getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    cb: (err: any, data?: GetCommandInvocationCommandOutput) => void
  ): void;
  getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommandInvocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionStatusCommand}
   */
  getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionStatusCommandOutput>;
  getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    cb: (err: any, data?: GetConnectionStatusCommandOutput) => void
  ): void;
  getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultPatchBaselineCommand}
   */
  getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultPatchBaselineCommandOutput>;
  getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void
  ): void;
  getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeployablePatchSnapshotForInstanceCommand}
   */
  getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput>;
  getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void
  ): void;
  getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentCommand}
   */
  getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
  getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
  getDocument(
    args: GetDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInventoryCommand}
   */
  getInventory(args: GetInventoryCommandInput, options?: __HttpHandlerOptions): Promise<GetInventoryCommandOutput>;
  getInventory(args: GetInventoryCommandInput, cb: (err: any, data?: GetInventoryCommandOutput) => void): void;
  getInventory(
    args: GetInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInventoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInventorySchemaCommand}
   */
  getInventorySchema(
    args: GetInventorySchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInventorySchemaCommandOutput>;
  getInventorySchema(
    args: GetInventorySchemaCommandInput,
    cb: (err: any, data?: GetInventorySchemaCommandOutput) => void
  ): void;
  getInventorySchema(
    args: GetInventorySchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInventorySchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaintenanceWindowCommand}
   */
  getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowCommandOutput>;
  getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void
  ): void;
  getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaintenanceWindowExecutionCommand}
   */
  getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionCommandOutput>;
  getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void
  ): void;
  getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskCommand}
   */
  getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionTaskCommandOutput>;
  getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void
  ): void;
  getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommand}
   */
  getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput>;
  getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void
  ): void;
  getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaintenanceWindowTaskCommand}
   */
  getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMaintenanceWindowTaskCommandOutput>;
  getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void
  ): void;
  getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpsItemCommand}
   */
  getOpsItem(args: GetOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<GetOpsItemCommandOutput>;
  getOpsItem(args: GetOpsItemCommandInput, cb: (err: any, data?: GetOpsItemCommandOutput) => void): void;
  getOpsItem(
    args: GetOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpsMetadataCommand}
   */
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpsMetadataCommandOutput>;
  getOpsMetadata(args: GetOpsMetadataCommandInput, cb: (err: any, data?: GetOpsMetadataCommandOutput) => void): void;
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpsSummaryCommand}
   */
  getOpsSummary(args: GetOpsSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetOpsSummaryCommandOutput>;
  getOpsSummary(args: GetOpsSummaryCommandInput, cb: (err: any, data?: GetOpsSummaryCommandOutput) => void): void;
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParameterCommand}
   */
  getParameter(args: GetParameterCommandInput, options?: __HttpHandlerOptions): Promise<GetParameterCommandOutput>;
  getParameter(args: GetParameterCommandInput, cb: (err: any, data?: GetParameterCommandOutput) => void): void;
  getParameter(
    args: GetParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParameterHistoryCommand}
   */
  getParameterHistory(
    args: GetParameterHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParameterHistoryCommandOutput>;
  getParameterHistory(
    args: GetParameterHistoryCommandInput,
    cb: (err: any, data?: GetParameterHistoryCommandOutput) => void
  ): void;
  getParameterHistory(
    args: GetParameterHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParameterHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParametersCommand}
   */
  getParameters(args: GetParametersCommandInput, options?: __HttpHandlerOptions): Promise<GetParametersCommandOutput>;
  getParameters(args: GetParametersCommandInput, cb: (err: any, data?: GetParametersCommandOutput) => void): void;
  getParameters(
    args: GetParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParametersByPathCommand}
   */
  getParametersByPath(
    args: GetParametersByPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersByPathCommandOutput>;
  getParametersByPath(
    args: GetParametersByPathCommandInput,
    cb: (err: any, data?: GetParametersByPathCommandOutput) => void
  ): void;
  getParametersByPath(
    args: GetParametersByPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersByPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPatchBaselineCommand}
   */
  getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPatchBaselineCommandOutput>;
  getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    cb: (err: any, data?: GetPatchBaselineCommandOutput) => void
  ): void;
  getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPatchBaselineForPatchGroupCommand}
   */
  getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPatchBaselineForPatchGroupCommandOutput>;
  getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSettingCommand}
   */
  getServiceSetting(
    args: GetServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingCommandOutput>;
  getServiceSetting(
    args: GetServiceSettingCommandInput,
    cb: (err: any, data?: GetServiceSettingCommandOutput) => void
  ): void;
  getServiceSetting(
    args: GetServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link LabelParameterVersionCommand}
   */
  labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LabelParameterVersionCommandOutput>;
  labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    cb: (err: any, data?: LabelParameterVersionCommandOutput) => void
  ): void;
  labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LabelParameterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationVersionsCommand}
   */
  listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationVersionsCommandOutput>;
  listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void
  ): void;
  listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommandInvocationsCommand}
   */
  listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommandInvocationsCommandOutput>;
  listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void
  ): void;
  listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommandsCommand}
   */
  listCommands(args: ListCommandsCommandInput, options?: __HttpHandlerOptions): Promise<ListCommandsCommandOutput>;
  listCommands(args: ListCommandsCommandInput, cb: (err: any, data?: ListCommandsCommandOutput) => void): void;
  listCommands(
    args: ListCommandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceItemsCommand}
   */
  listComplianceItems(
    args: ListComplianceItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceItemsCommandOutput>;
  listComplianceItems(
    args: ListComplianceItemsCommandInput,
    cb: (err: any, data?: ListComplianceItemsCommandOutput) => void
  ): void;
  listComplianceItems(
    args: ListComplianceItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceSummariesCommand}
   */
  listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceSummariesCommandOutput>;
  listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void
  ): void;
  listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentMetadataHistoryCommand}
   */
  listDocumentMetadataHistory(
    args: ListDocumentMetadataHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentMetadataHistoryCommandOutput>;
  listDocumentMetadataHistory(
    args: ListDocumentMetadataHistoryCommandInput,
    cb: (err: any, data?: ListDocumentMetadataHistoryCommandOutput) => void
  ): void;
  listDocumentMetadataHistory(
    args: ListDocumentMetadataHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentMetadataHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentsCommand}
   */
  listDocuments(args: ListDocumentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDocumentsCommandOutput>;
  listDocuments(args: ListDocumentsCommandInput, cb: (err: any, data?: ListDocumentsCommandOutput) => void): void;
  listDocuments(
    args: ListDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentVersionsCommand}
   */
  listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentVersionsCommandOutput>;
  listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void
  ): void;
  listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInventoryEntriesCommand}
   */
  listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInventoryEntriesCommandOutput>;
  listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void
  ): void;
  listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpsItemEventsCommand}
   */
  listOpsItemEvents(
    args: ListOpsItemEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpsItemEventsCommandOutput>;
  listOpsItemEvents(
    args: ListOpsItemEventsCommandInput,
    cb: (err: any, data?: ListOpsItemEventsCommandOutput) => void
  ): void;
  listOpsItemEvents(
    args: ListOpsItemEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpsItemEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpsItemRelatedItemsCommand}
   */
  listOpsItemRelatedItems(
    args: ListOpsItemRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpsItemRelatedItemsCommandOutput>;
  listOpsItemRelatedItems(
    args: ListOpsItemRelatedItemsCommandInput,
    cb: (err: any, data?: ListOpsItemRelatedItemsCommandOutput) => void
  ): void;
  listOpsItemRelatedItems(
    args: ListOpsItemRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpsItemRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpsMetadataCommand}
   */
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpsMetadataCommandOutput>;
  listOpsMetadata(args: ListOpsMetadataCommandInput, cb: (err: any, data?: ListOpsMetadataCommandOutput) => void): void;
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceComplianceSummariesCommand}
   */
  listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceComplianceSummariesCommandOutput>;
  listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void
  ): void;
  listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceDataSyncCommand}
   */
  listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDataSyncCommandOutput>;
  listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void
  ): void;
  listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDocumentPermissionCommand}
   */
  modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDocumentPermissionCommandOutput>;
  modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void
  ): void;
  modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutComplianceItemsCommand}
   */
  putComplianceItems(
    args: PutComplianceItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutComplianceItemsCommandOutput>;
  putComplianceItems(
    args: PutComplianceItemsCommandInput,
    cb: (err: any, data?: PutComplianceItemsCommandOutput) => void
  ): void;
  putComplianceItems(
    args: PutComplianceItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutComplianceItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInventoryCommand}
   */
  putInventory(args: PutInventoryCommandInput, options?: __HttpHandlerOptions): Promise<PutInventoryCommandOutput>;
  putInventory(args: PutInventoryCommandInput, cb: (err: any, data?: PutInventoryCommandOutput) => void): void;
  putInventory(
    args: PutInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInventoryCommandOutput) => void
  ): void;

  /**
   * @see {@link PutParameterCommand}
   */
  putParameter(args: PutParameterCommandInput, options?: __HttpHandlerOptions): Promise<PutParameterCommandOutput>;
  putParameter(args: PutParameterCommandInput, cb: (err: any, data?: PutParameterCommandOutput) => void): void;
  putParameter(
    args: PutParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDefaultPatchBaselineCommand}
   */
  registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDefaultPatchBaselineCommandOutput>;
  registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void
  ): void;
  registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterPatchBaselineForPatchGroupCommand}
   */
  registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPatchBaselineForPatchGroupCommandOutput>;
  registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;
  registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTargetWithMaintenanceWindowCommand}
   */
  registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTargetWithMaintenanceWindowCommandOutput>;
  registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void
  ): void;
  registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTaskWithMaintenanceWindowCommand}
   */
  registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTaskWithMaintenanceWindowCommandOutput>;
  registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void
  ): void;
  registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetServiceSettingCommand}
   */
  resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetServiceSettingCommandOutput>;
  resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    cb: (err: any, data?: ResetServiceSettingCommandOutput) => void
  ): void;
  resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetServiceSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeSessionCommand}
   */
  resumeSession(args: ResumeSessionCommandInput, options?: __HttpHandlerOptions): Promise<ResumeSessionCommandOutput>;
  resumeSession(args: ResumeSessionCommandInput, cb: (err: any, data?: ResumeSessionCommandOutput) => void): void;
  resumeSession(
    args: ResumeSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAutomationSignalCommand}
   */
  sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAutomationSignalCommandOutput>;
  sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    cb: (err: any, data?: SendAutomationSignalCommandOutput) => void
  ): void;
  sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAutomationSignalCommandOutput) => void
  ): void;

  /**
   * @see {@link SendCommandCommand}
   */
  sendCommand(args: SendCommandCommandInput, options?: __HttpHandlerOptions): Promise<SendCommandCommandOutput>;
  sendCommand(args: SendCommandCommandInput, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
  sendCommand(
    args: SendCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssociationsOnceCommand}
   */
  startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssociationsOnceCommandOutput>;
  startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void
  ): void;
  startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAutomationExecutionCommand}
   */
  startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAutomationExecutionCommandOutput>;
  startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void
  ): void;
  startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChangeRequestExecutionCommand}
   */
  startChangeRequestExecution(
    args: StartChangeRequestExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChangeRequestExecutionCommandOutput>;
  startChangeRequestExecution(
    args: StartChangeRequestExecutionCommandInput,
    cb: (err: any, data?: StartChangeRequestExecutionCommandOutput) => void
  ): void;
  startChangeRequestExecution(
    args: StartChangeRequestExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChangeRequestExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(args: StartSessionCommandInput, options?: __HttpHandlerOptions): Promise<StartSessionCommandOutput>;
  startSession(args: StartSessionCommandInput, cb: (err: any, data?: StartSessionCommandOutput) => void): void;
  startSession(
    args: StartSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAutomationExecutionCommand}
   */
  stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAutomationExecutionCommandOutput>;
  stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void
  ): void;
  stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateSessionCommand}
   */
  terminateSession(
    args: TerminateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateSessionCommandOutput>;
  terminateSession(
    args: TerminateSessionCommandInput,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;
  terminateSession(
    args: TerminateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UnlabelParameterVersionCommand}
   */
  unlabelParameterVersion(
    args: UnlabelParameterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnlabelParameterVersionCommandOutput>;
  unlabelParameterVersion(
    args: UnlabelParameterVersionCommandInput,
    cb: (err: any, data?: UnlabelParameterVersionCommandOutput) => void
  ): void;
  unlabelParameterVersion(
    args: UnlabelParameterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlabelParameterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssociationCommand}
   */
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssociationCommandOutput>;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssociationStatusCommand}
   */
  updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssociationStatusCommandOutput>;
  updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void
  ): void;
  updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentCommand}
   */
  updateDocument(
    args: UpdateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentCommandOutput>;
  updateDocument(args: UpdateDocumentCommandInput, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
  updateDocument(
    args: UpdateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentDefaultVersionCommand}
   */
  updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentDefaultVersionCommandOutput>;
  updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void
  ): void;
  updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentMetadataCommand}
   */
  updateDocumentMetadata(
    args: UpdateDocumentMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentMetadataCommandOutput>;
  updateDocumentMetadata(
    args: UpdateDocumentMetadataCommandInput,
    cb: (err: any, data?: UpdateDocumentMetadataCommandOutput) => void
  ): void;
  updateDocumentMetadata(
    args: UpdateDocumentMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMaintenanceWindowCommand}
   */
  updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowCommandOutput>;
  updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void
  ): void;
  updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMaintenanceWindowTargetCommand}
   */
  updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput>;
  updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void
  ): void;
  updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMaintenanceWindowTaskCommand}
   */
  updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceWindowTaskCommandOutput>;
  updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void
  ): void;
  updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateManagedInstanceRoleCommand}
   */
  updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedInstanceRoleCommandOutput>;
  updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void
  ): void;
  updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpsItemCommand}
   */
  updateOpsItem(args: UpdateOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOpsItemCommandOutput>;
  updateOpsItem(args: UpdateOpsItemCommandInput, cb: (err: any, data?: UpdateOpsItemCommandOutput) => void): void;
  updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpsItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpsMetadataCommand}
   */
  updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpsMetadataCommandOutput>;
  updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    cb: (err: any, data?: UpdateOpsMetadataCommandOutput) => void
  ): void;
  updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePatchBaselineCommand}
   */
  updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePatchBaselineCommandOutput>;
  updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void
  ): void;
  updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceDataSyncCommand}
   */
  updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceDataSyncCommandOutput>;
  updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void
  ): void;
  updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSettingCommand}
   */
  updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingCommandOutput>;
  updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void
  ): void;
  updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure
 *    end-to-end management solution for hybrid cloud environments that enables safe and secure
 *    operations at scale.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p>
 *          <p class="title">
 *             <b>Related resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html#systems-manager-capabilities">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the
 *        <i>
 *                      <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation runbook reference</a>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about AppConfig, a capability of Systems Manager, see the <i>
 *                      <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a>
 *                   </i>
 *      and the <i>
 *                      <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig
 *        API Reference</a>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about Incident Manager, a capability of Systems Manager, see the <i>
 *                      <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User
 *        Guide</a>
 *                   </i> and the <i>
 *                      <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API
 *      Reference</a>
 *                   </i>.</p>
 *             </li>
 *          </ul>
 */
export class SSM extends SSMClient implements SSM {}
createAggregatedClient(commands, SSM);
