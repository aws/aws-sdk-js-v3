// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AddTagsToResourceCommand,
} from "./commands/AddTagsToResourceCommand";
import {
  type AssociateOpsItemRelatedItemCommandInput,
  type AssociateOpsItemRelatedItemCommandOutput,
  AssociateOpsItemRelatedItemCommand,
} from "./commands/AssociateOpsItemRelatedItemCommand";
import {
  type CancelCommandCommandInput,
  type CancelCommandCommandOutput,
  CancelCommandCommand,
} from "./commands/CancelCommandCommand";
import {
  type CancelMaintenanceWindowExecutionCommandInput,
  type CancelMaintenanceWindowExecutionCommandOutput,
  CancelMaintenanceWindowExecutionCommand,
} from "./commands/CancelMaintenanceWindowExecutionCommand";
import {
  type CreateActivationCommandInput,
  type CreateActivationCommandOutput,
  CreateActivationCommand,
} from "./commands/CreateActivationCommand";
import {
  type CreateAssociationBatchCommandInput,
  type CreateAssociationBatchCommandOutput,
  CreateAssociationBatchCommand,
} from "./commands/CreateAssociationBatchCommand";
import {
  type CreateAssociationCommandInput,
  type CreateAssociationCommandOutput,
  CreateAssociationCommand,
} from "./commands/CreateAssociationCommand";
import {
  type CreateDocumentCommandInput,
  type CreateDocumentCommandOutput,
  CreateDocumentCommand,
} from "./commands/CreateDocumentCommand";
import {
  type CreateMaintenanceWindowCommandInput,
  type CreateMaintenanceWindowCommandOutput,
  CreateMaintenanceWindowCommand,
} from "./commands/CreateMaintenanceWindowCommand";
import {
  type CreateOpsItemCommandInput,
  type CreateOpsItemCommandOutput,
  CreateOpsItemCommand,
} from "./commands/CreateOpsItemCommand";
import {
  type CreateOpsMetadataCommandInput,
  type CreateOpsMetadataCommandOutput,
  CreateOpsMetadataCommand,
} from "./commands/CreateOpsMetadataCommand";
import {
  type CreatePatchBaselineCommandInput,
  type CreatePatchBaselineCommandOutput,
  CreatePatchBaselineCommand,
} from "./commands/CreatePatchBaselineCommand";
import {
  type CreateResourceDataSyncCommandInput,
  type CreateResourceDataSyncCommandOutput,
  CreateResourceDataSyncCommand,
} from "./commands/CreateResourceDataSyncCommand";
import {
  type DeleteActivationCommandInput,
  type DeleteActivationCommandOutput,
  DeleteActivationCommand,
} from "./commands/DeleteActivationCommand";
import {
  type DeleteAssociationCommandInput,
  type DeleteAssociationCommandOutput,
  DeleteAssociationCommand,
} from "./commands/DeleteAssociationCommand";
import {
  type DeleteDocumentCommandInput,
  type DeleteDocumentCommandOutput,
  DeleteDocumentCommand,
} from "./commands/DeleteDocumentCommand";
import {
  type DeleteInventoryCommandInput,
  type DeleteInventoryCommandOutput,
  DeleteInventoryCommand,
} from "./commands/DeleteInventoryCommand";
import {
  type DeleteMaintenanceWindowCommandInput,
  type DeleteMaintenanceWindowCommandOutput,
  DeleteMaintenanceWindowCommand,
} from "./commands/DeleteMaintenanceWindowCommand";
import {
  type DeleteOpsItemCommandInput,
  type DeleteOpsItemCommandOutput,
  DeleteOpsItemCommand,
} from "./commands/DeleteOpsItemCommand";
import {
  type DeleteOpsMetadataCommandInput,
  type DeleteOpsMetadataCommandOutput,
  DeleteOpsMetadataCommand,
} from "./commands/DeleteOpsMetadataCommand";
import {
  type DeleteParameterCommandInput,
  type DeleteParameterCommandOutput,
  DeleteParameterCommand,
} from "./commands/DeleteParameterCommand";
import {
  type DeleteParametersCommandInput,
  type DeleteParametersCommandOutput,
  DeleteParametersCommand,
} from "./commands/DeleteParametersCommand";
import {
  type DeletePatchBaselineCommandInput,
  type DeletePatchBaselineCommandOutput,
  DeletePatchBaselineCommand,
} from "./commands/DeletePatchBaselineCommand";
import {
  type DeleteResourceDataSyncCommandInput,
  type DeleteResourceDataSyncCommandOutput,
  DeleteResourceDataSyncCommand,
} from "./commands/DeleteResourceDataSyncCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeregisterManagedInstanceCommandInput,
  type DeregisterManagedInstanceCommandOutput,
  DeregisterManagedInstanceCommand,
} from "./commands/DeregisterManagedInstanceCommand";
import {
  type DeregisterPatchBaselineForPatchGroupCommandInput,
  type DeregisterPatchBaselineForPatchGroupCommandOutput,
  DeregisterPatchBaselineForPatchGroupCommand,
} from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import {
  type DeregisterTargetFromMaintenanceWindowCommandInput,
  type DeregisterTargetFromMaintenanceWindowCommandOutput,
  DeregisterTargetFromMaintenanceWindowCommand,
} from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import {
  type DeregisterTaskFromMaintenanceWindowCommandInput,
  type DeregisterTaskFromMaintenanceWindowCommandOutput,
  DeregisterTaskFromMaintenanceWindowCommand,
} from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import {
  type DescribeActivationsCommandInput,
  type DescribeActivationsCommandOutput,
  DescribeActivationsCommand,
} from "./commands/DescribeActivationsCommand";
import {
  type DescribeAssociationCommandInput,
  type DescribeAssociationCommandOutput,
  DescribeAssociationCommand,
} from "./commands/DescribeAssociationCommand";
import {
  type DescribeAssociationExecutionsCommandInput,
  type DescribeAssociationExecutionsCommandOutput,
  DescribeAssociationExecutionsCommand,
} from "./commands/DescribeAssociationExecutionsCommand";
import {
  type DescribeAssociationExecutionTargetsCommandInput,
  type DescribeAssociationExecutionTargetsCommandOutput,
  DescribeAssociationExecutionTargetsCommand,
} from "./commands/DescribeAssociationExecutionTargetsCommand";
import {
  type DescribeAutomationExecutionsCommandInput,
  type DescribeAutomationExecutionsCommandOutput,
  DescribeAutomationExecutionsCommand,
} from "./commands/DescribeAutomationExecutionsCommand";
import {
  type DescribeAutomationStepExecutionsCommandInput,
  type DescribeAutomationStepExecutionsCommandOutput,
  DescribeAutomationStepExecutionsCommand,
} from "./commands/DescribeAutomationStepExecutionsCommand";
import {
  type DescribeAvailablePatchesCommandInput,
  type DescribeAvailablePatchesCommandOutput,
  DescribeAvailablePatchesCommand,
} from "./commands/DescribeAvailablePatchesCommand";
import {
  type DescribeDocumentCommandInput,
  type DescribeDocumentCommandOutput,
  DescribeDocumentCommand,
} from "./commands/DescribeDocumentCommand";
import {
  type DescribeDocumentPermissionCommandInput,
  type DescribeDocumentPermissionCommandOutput,
  DescribeDocumentPermissionCommand,
} from "./commands/DescribeDocumentPermissionCommand";
import {
  type DescribeEffectiveInstanceAssociationsCommandInput,
  type DescribeEffectiveInstanceAssociationsCommandOutput,
  DescribeEffectiveInstanceAssociationsCommand,
} from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import {
  type DescribeEffectivePatchesForPatchBaselineCommandInput,
  type DescribeEffectivePatchesForPatchBaselineCommandOutput,
  DescribeEffectivePatchesForPatchBaselineCommand,
} from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import {
  type DescribeInstanceAssociationsStatusCommandInput,
  type DescribeInstanceAssociationsStatusCommandOutput,
  DescribeInstanceAssociationsStatusCommand,
} from "./commands/DescribeInstanceAssociationsStatusCommand";
import {
  type DescribeInstanceInformationCommandInput,
  type DescribeInstanceInformationCommandOutput,
  DescribeInstanceInformationCommand,
} from "./commands/DescribeInstanceInformationCommand";
import {
  type DescribeInstancePatchesCommandInput,
  type DescribeInstancePatchesCommandOutput,
  DescribeInstancePatchesCommand,
} from "./commands/DescribeInstancePatchesCommand";
import {
  type DescribeInstancePatchStatesCommandInput,
  type DescribeInstancePatchStatesCommandOutput,
  DescribeInstancePatchStatesCommand,
} from "./commands/DescribeInstancePatchStatesCommand";
import {
  type DescribeInstancePatchStatesForPatchGroupCommandInput,
  type DescribeInstancePatchStatesForPatchGroupCommandOutput,
  DescribeInstancePatchStatesForPatchGroupCommand,
} from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import {
  type DescribeInstancePropertiesCommandInput,
  type DescribeInstancePropertiesCommandOutput,
  DescribeInstancePropertiesCommand,
} from "./commands/DescribeInstancePropertiesCommand";
import {
  type DescribeInventoryDeletionsCommandInput,
  type DescribeInventoryDeletionsCommandOutput,
  DescribeInventoryDeletionsCommand,
} from "./commands/DescribeInventoryDeletionsCommand";
import {
  type DescribeMaintenanceWindowExecutionsCommandInput,
  type DescribeMaintenanceWindowExecutionsCommandOutput,
  DescribeMaintenanceWindowExecutionsCommand,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import {
  type DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  type DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
} from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import {
  type DescribeMaintenanceWindowExecutionTasksCommandInput,
  type DescribeMaintenanceWindowExecutionTasksCommandOutput,
  DescribeMaintenanceWindowExecutionTasksCommand,
} from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import {
  type DescribeMaintenanceWindowScheduleCommandInput,
  type DescribeMaintenanceWindowScheduleCommandOutput,
  DescribeMaintenanceWindowScheduleCommand,
} from "./commands/DescribeMaintenanceWindowScheduleCommand";
import {
  type DescribeMaintenanceWindowsCommandInput,
  type DescribeMaintenanceWindowsCommandOutput,
  DescribeMaintenanceWindowsCommand,
} from "./commands/DescribeMaintenanceWindowsCommand";
import {
  type DescribeMaintenanceWindowsForTargetCommandInput,
  type DescribeMaintenanceWindowsForTargetCommandOutput,
  DescribeMaintenanceWindowsForTargetCommand,
} from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import {
  type DescribeMaintenanceWindowTargetsCommandInput,
  type DescribeMaintenanceWindowTargetsCommandOutput,
  DescribeMaintenanceWindowTargetsCommand,
} from "./commands/DescribeMaintenanceWindowTargetsCommand";
import {
  type DescribeMaintenanceWindowTasksCommandInput,
  type DescribeMaintenanceWindowTasksCommandOutput,
  DescribeMaintenanceWindowTasksCommand,
} from "./commands/DescribeMaintenanceWindowTasksCommand";
import {
  type DescribeOpsItemsCommandInput,
  type DescribeOpsItemsCommandOutput,
  DescribeOpsItemsCommand,
} from "./commands/DescribeOpsItemsCommand";
import {
  type DescribeParametersCommandInput,
  type DescribeParametersCommandOutput,
  DescribeParametersCommand,
} from "./commands/DescribeParametersCommand";
import {
  type DescribePatchBaselinesCommandInput,
  type DescribePatchBaselinesCommandOutput,
  DescribePatchBaselinesCommand,
} from "./commands/DescribePatchBaselinesCommand";
import {
  type DescribePatchGroupsCommandInput,
  type DescribePatchGroupsCommandOutput,
  DescribePatchGroupsCommand,
} from "./commands/DescribePatchGroupsCommand";
import {
  type DescribePatchGroupStateCommandInput,
  type DescribePatchGroupStateCommandOutput,
  DescribePatchGroupStateCommand,
} from "./commands/DescribePatchGroupStateCommand";
import {
  type DescribePatchPropertiesCommandInput,
  type DescribePatchPropertiesCommandOutput,
  DescribePatchPropertiesCommand,
} from "./commands/DescribePatchPropertiesCommand";
import {
  type DescribeSessionsCommandInput,
  type DescribeSessionsCommandOutput,
  DescribeSessionsCommand,
} from "./commands/DescribeSessionsCommand";
import {
  type DisassociateOpsItemRelatedItemCommandInput,
  type DisassociateOpsItemRelatedItemCommandOutput,
  DisassociateOpsItemRelatedItemCommand,
} from "./commands/DisassociateOpsItemRelatedItemCommand";
import {
  type GetAccessTokenCommandInput,
  type GetAccessTokenCommandOutput,
  GetAccessTokenCommand,
} from "./commands/GetAccessTokenCommand";
import {
  type GetAutomationExecutionCommandInput,
  type GetAutomationExecutionCommandOutput,
  GetAutomationExecutionCommand,
} from "./commands/GetAutomationExecutionCommand";
import {
  type GetCalendarStateCommandInput,
  type GetCalendarStateCommandOutput,
  GetCalendarStateCommand,
} from "./commands/GetCalendarStateCommand";
import {
  type GetCommandInvocationCommandInput,
  type GetCommandInvocationCommandOutput,
  GetCommandInvocationCommand,
} from "./commands/GetCommandInvocationCommand";
import {
  type GetConnectionStatusCommandInput,
  type GetConnectionStatusCommandOutput,
  GetConnectionStatusCommand,
} from "./commands/GetConnectionStatusCommand";
import {
  type GetDefaultPatchBaselineCommandInput,
  type GetDefaultPatchBaselineCommandOutput,
  GetDefaultPatchBaselineCommand,
} from "./commands/GetDefaultPatchBaselineCommand";
import {
  type GetDeployablePatchSnapshotForInstanceCommandInput,
  type GetDeployablePatchSnapshotForInstanceCommandOutput,
  GetDeployablePatchSnapshotForInstanceCommand,
} from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import {
  type GetDocumentCommandInput,
  type GetDocumentCommandOutput,
  GetDocumentCommand,
} from "./commands/GetDocumentCommand";
import {
  type GetExecutionPreviewCommandInput,
  type GetExecutionPreviewCommandOutput,
  GetExecutionPreviewCommand,
} from "./commands/GetExecutionPreviewCommand";
import {
  type GetInventoryCommandInput,
  type GetInventoryCommandOutput,
  GetInventoryCommand,
} from "./commands/GetInventoryCommand";
import {
  type GetInventorySchemaCommandInput,
  type GetInventorySchemaCommandOutput,
  GetInventorySchemaCommand,
} from "./commands/GetInventorySchemaCommand";
import {
  type GetMaintenanceWindowCommandInput,
  type GetMaintenanceWindowCommandOutput,
  GetMaintenanceWindowCommand,
} from "./commands/GetMaintenanceWindowCommand";
import {
  type GetMaintenanceWindowExecutionCommandInput,
  type GetMaintenanceWindowExecutionCommandOutput,
  GetMaintenanceWindowExecutionCommand,
} from "./commands/GetMaintenanceWindowExecutionCommand";
import {
  type GetMaintenanceWindowExecutionTaskCommandInput,
  type GetMaintenanceWindowExecutionTaskCommandOutput,
  GetMaintenanceWindowExecutionTaskCommand,
} from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import {
  type GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  type GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
} from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import {
  type GetMaintenanceWindowTaskCommandInput,
  type GetMaintenanceWindowTaskCommandOutput,
  GetMaintenanceWindowTaskCommand,
} from "./commands/GetMaintenanceWindowTaskCommand";
import {
  type GetOpsItemCommandInput,
  type GetOpsItemCommandOutput,
  GetOpsItemCommand,
} from "./commands/GetOpsItemCommand";
import {
  type GetOpsMetadataCommandInput,
  type GetOpsMetadataCommandOutput,
  GetOpsMetadataCommand,
} from "./commands/GetOpsMetadataCommand";
import {
  type GetOpsSummaryCommandInput,
  type GetOpsSummaryCommandOutput,
  GetOpsSummaryCommand,
} from "./commands/GetOpsSummaryCommand";
import {
  type GetParameterCommandInput,
  type GetParameterCommandOutput,
  GetParameterCommand,
} from "./commands/GetParameterCommand";
import {
  type GetParameterHistoryCommandInput,
  type GetParameterHistoryCommandOutput,
  GetParameterHistoryCommand,
} from "./commands/GetParameterHistoryCommand";
import {
  type GetParametersByPathCommandInput,
  type GetParametersByPathCommandOutput,
  GetParametersByPathCommand,
} from "./commands/GetParametersByPathCommand";
import {
  type GetParametersCommandInput,
  type GetParametersCommandOutput,
  GetParametersCommand,
} from "./commands/GetParametersCommand";
import {
  type GetPatchBaselineCommandInput,
  type GetPatchBaselineCommandOutput,
  GetPatchBaselineCommand,
} from "./commands/GetPatchBaselineCommand";
import {
  type GetPatchBaselineForPatchGroupCommandInput,
  type GetPatchBaselineForPatchGroupCommandOutput,
  GetPatchBaselineForPatchGroupCommand,
} from "./commands/GetPatchBaselineForPatchGroupCommand";
import {
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetResourcePoliciesCommand,
} from "./commands/GetResourcePoliciesCommand";
import {
  type GetServiceSettingCommandInput,
  type GetServiceSettingCommandOutput,
  GetServiceSettingCommand,
} from "./commands/GetServiceSettingCommand";
import {
  type LabelParameterVersionCommandInput,
  type LabelParameterVersionCommandOutput,
  LabelParameterVersionCommand,
} from "./commands/LabelParameterVersionCommand";
import {
  type ListAssociationsCommandInput,
  type ListAssociationsCommandOutput,
  ListAssociationsCommand,
} from "./commands/ListAssociationsCommand";
import {
  type ListAssociationVersionsCommandInput,
  type ListAssociationVersionsCommandOutput,
  ListAssociationVersionsCommand,
} from "./commands/ListAssociationVersionsCommand";
import {
  type ListCommandInvocationsCommandInput,
  type ListCommandInvocationsCommandOutput,
  ListCommandInvocationsCommand,
} from "./commands/ListCommandInvocationsCommand";
import {
  type ListCommandsCommandInput,
  type ListCommandsCommandOutput,
  ListCommandsCommand,
} from "./commands/ListCommandsCommand";
import {
  type ListComplianceItemsCommandInput,
  type ListComplianceItemsCommandOutput,
  ListComplianceItemsCommand,
} from "./commands/ListComplianceItemsCommand";
import {
  type ListComplianceSummariesCommandInput,
  type ListComplianceSummariesCommandOutput,
  ListComplianceSummariesCommand,
} from "./commands/ListComplianceSummariesCommand";
import {
  type ListDocumentMetadataHistoryCommandInput,
  type ListDocumentMetadataHistoryCommandOutput,
  ListDocumentMetadataHistoryCommand,
} from "./commands/ListDocumentMetadataHistoryCommand";
import {
  type ListDocumentsCommandInput,
  type ListDocumentsCommandOutput,
  ListDocumentsCommand,
} from "./commands/ListDocumentsCommand";
import {
  type ListDocumentVersionsCommandInput,
  type ListDocumentVersionsCommandOutput,
  ListDocumentVersionsCommand,
} from "./commands/ListDocumentVersionsCommand";
import {
  type ListInventoryEntriesCommandInput,
  type ListInventoryEntriesCommandOutput,
  ListInventoryEntriesCommand,
} from "./commands/ListInventoryEntriesCommand";
import { type ListNodesCommandInput, type ListNodesCommandOutput, ListNodesCommand } from "./commands/ListNodesCommand";
import {
  type ListNodesSummaryCommandInput,
  type ListNodesSummaryCommandOutput,
  ListNodesSummaryCommand,
} from "./commands/ListNodesSummaryCommand";
import {
  type ListOpsItemEventsCommandInput,
  type ListOpsItemEventsCommandOutput,
  ListOpsItemEventsCommand,
} from "./commands/ListOpsItemEventsCommand";
import {
  type ListOpsItemRelatedItemsCommandInput,
  type ListOpsItemRelatedItemsCommandOutput,
  ListOpsItemRelatedItemsCommand,
} from "./commands/ListOpsItemRelatedItemsCommand";
import {
  type ListOpsMetadataCommandInput,
  type ListOpsMetadataCommandOutput,
  ListOpsMetadataCommand,
} from "./commands/ListOpsMetadataCommand";
import {
  type ListResourceComplianceSummariesCommandInput,
  type ListResourceComplianceSummariesCommandOutput,
  ListResourceComplianceSummariesCommand,
} from "./commands/ListResourceComplianceSummariesCommand";
import {
  type ListResourceDataSyncCommandInput,
  type ListResourceDataSyncCommandOutput,
  ListResourceDataSyncCommand,
} from "./commands/ListResourceDataSyncCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ModifyDocumentPermissionCommandInput,
  type ModifyDocumentPermissionCommandOutput,
  ModifyDocumentPermissionCommand,
} from "./commands/ModifyDocumentPermissionCommand";
import {
  type PutComplianceItemsCommandInput,
  type PutComplianceItemsCommandOutput,
  PutComplianceItemsCommand,
} from "./commands/PutComplianceItemsCommand";
import {
  type PutInventoryCommandInput,
  type PutInventoryCommandOutput,
  PutInventoryCommand,
} from "./commands/PutInventoryCommand";
import {
  type PutParameterCommandInput,
  type PutParameterCommandOutput,
  PutParameterCommand,
} from "./commands/PutParameterCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RegisterDefaultPatchBaselineCommandInput,
  type RegisterDefaultPatchBaselineCommandOutput,
  RegisterDefaultPatchBaselineCommand,
} from "./commands/RegisterDefaultPatchBaselineCommand";
import {
  type RegisterPatchBaselineForPatchGroupCommandInput,
  type RegisterPatchBaselineForPatchGroupCommandOutput,
  RegisterPatchBaselineForPatchGroupCommand,
} from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import {
  type RegisterTargetWithMaintenanceWindowCommandInput,
  type RegisterTargetWithMaintenanceWindowCommandOutput,
  RegisterTargetWithMaintenanceWindowCommand,
} from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import {
  type RegisterTaskWithMaintenanceWindowCommandInput,
  type RegisterTaskWithMaintenanceWindowCommandOutput,
  RegisterTaskWithMaintenanceWindowCommand,
} from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import {
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  RemoveTagsFromResourceCommand,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  type ResetServiceSettingCommandInput,
  type ResetServiceSettingCommandOutput,
  ResetServiceSettingCommand,
} from "./commands/ResetServiceSettingCommand";
import {
  type ResumeSessionCommandInput,
  type ResumeSessionCommandOutput,
  ResumeSessionCommand,
} from "./commands/ResumeSessionCommand";
import {
  type SendAutomationSignalCommandInput,
  type SendAutomationSignalCommandOutput,
  SendAutomationSignalCommand,
} from "./commands/SendAutomationSignalCommand";
import {
  type SendCommandCommandInput,
  type SendCommandCommandOutput,
  SendCommandCommand,
} from "./commands/SendCommandCommand";
import {
  type StartAccessRequestCommandInput,
  type StartAccessRequestCommandOutput,
  StartAccessRequestCommand,
} from "./commands/StartAccessRequestCommand";
import {
  type StartAssociationsOnceCommandInput,
  type StartAssociationsOnceCommandOutput,
  StartAssociationsOnceCommand,
} from "./commands/StartAssociationsOnceCommand";
import {
  type StartAutomationExecutionCommandInput,
  type StartAutomationExecutionCommandOutput,
  StartAutomationExecutionCommand,
} from "./commands/StartAutomationExecutionCommand";
import {
  type StartChangeRequestExecutionCommandInput,
  type StartChangeRequestExecutionCommandOutput,
  StartChangeRequestExecutionCommand,
} from "./commands/StartChangeRequestExecutionCommand";
import {
  type StartExecutionPreviewCommandInput,
  type StartExecutionPreviewCommandOutput,
  StartExecutionPreviewCommand,
} from "./commands/StartExecutionPreviewCommand";
import {
  type StartSessionCommandInput,
  type StartSessionCommandOutput,
  StartSessionCommand,
} from "./commands/StartSessionCommand";
import {
  type StopAutomationExecutionCommandInput,
  type StopAutomationExecutionCommandOutput,
  StopAutomationExecutionCommand,
} from "./commands/StopAutomationExecutionCommand";
import {
  type TerminateSessionCommandInput,
  type TerminateSessionCommandOutput,
  TerminateSessionCommand,
} from "./commands/TerminateSessionCommand";
import {
  type UnlabelParameterVersionCommandInput,
  type UnlabelParameterVersionCommandOutput,
  UnlabelParameterVersionCommand,
} from "./commands/UnlabelParameterVersionCommand";
import {
  type UpdateAssociationCommandInput,
  type UpdateAssociationCommandOutput,
  UpdateAssociationCommand,
} from "./commands/UpdateAssociationCommand";
import {
  type UpdateAssociationStatusCommandInput,
  type UpdateAssociationStatusCommandOutput,
  UpdateAssociationStatusCommand,
} from "./commands/UpdateAssociationStatusCommand";
import {
  type UpdateDocumentCommandInput,
  type UpdateDocumentCommandOutput,
  UpdateDocumentCommand,
} from "./commands/UpdateDocumentCommand";
import {
  type UpdateDocumentDefaultVersionCommandInput,
  type UpdateDocumentDefaultVersionCommandOutput,
  UpdateDocumentDefaultVersionCommand,
} from "./commands/UpdateDocumentDefaultVersionCommand";
import {
  type UpdateDocumentMetadataCommandInput,
  type UpdateDocumentMetadataCommandOutput,
  UpdateDocumentMetadataCommand,
} from "./commands/UpdateDocumentMetadataCommand";
import {
  type UpdateMaintenanceWindowCommandInput,
  type UpdateMaintenanceWindowCommandOutput,
  UpdateMaintenanceWindowCommand,
} from "./commands/UpdateMaintenanceWindowCommand";
import {
  type UpdateMaintenanceWindowTargetCommandInput,
  type UpdateMaintenanceWindowTargetCommandOutput,
  UpdateMaintenanceWindowTargetCommand,
} from "./commands/UpdateMaintenanceWindowTargetCommand";
import {
  type UpdateMaintenanceWindowTaskCommandInput,
  type UpdateMaintenanceWindowTaskCommandOutput,
  UpdateMaintenanceWindowTaskCommand,
} from "./commands/UpdateMaintenanceWindowTaskCommand";
import {
  type UpdateManagedInstanceRoleCommandInput,
  type UpdateManagedInstanceRoleCommandOutput,
  UpdateManagedInstanceRoleCommand,
} from "./commands/UpdateManagedInstanceRoleCommand";
import {
  type UpdateOpsItemCommandInput,
  type UpdateOpsItemCommandOutput,
  UpdateOpsItemCommand,
} from "./commands/UpdateOpsItemCommand";
import {
  type UpdateOpsMetadataCommandInput,
  type UpdateOpsMetadataCommandOutput,
  UpdateOpsMetadataCommand,
} from "./commands/UpdateOpsMetadataCommand";
import {
  type UpdatePatchBaselineCommandInput,
  type UpdatePatchBaselineCommandOutput,
  UpdatePatchBaselineCommand,
} from "./commands/UpdatePatchBaselineCommand";
import {
  type UpdateResourceDataSyncCommandInput,
  type UpdateResourceDataSyncCommandOutput,
  UpdateResourceDataSyncCommand,
} from "./commands/UpdateResourceDataSyncCommand";
import {
  type UpdateServiceSettingCommandInput,
  type UpdateServiceSettingCommandOutput,
  UpdateServiceSettingCommand,
} from "./commands/UpdateServiceSettingCommand";
import { paginateDescribeActivations } from "./pagination/DescribeActivationsPaginator";
import { paginateDescribeAssociationExecutions } from "./pagination/DescribeAssociationExecutionsPaginator";
import { paginateDescribeAssociationExecutionTargets } from "./pagination/DescribeAssociationExecutionTargetsPaginator";
import { paginateDescribeAutomationExecutions } from "./pagination/DescribeAutomationExecutionsPaginator";
import { paginateDescribeAutomationStepExecutions } from "./pagination/DescribeAutomationStepExecutionsPaginator";
import { paginateDescribeAvailablePatches } from "./pagination/DescribeAvailablePatchesPaginator";
import {
  paginateDescribeEffectiveInstanceAssociations,
} from "./pagination/DescribeEffectiveInstanceAssociationsPaginator";
import {
  paginateDescribeEffectivePatchesForPatchBaseline,
} from "./pagination/DescribeEffectivePatchesForPatchBaselinePaginator";
import { paginateDescribeInstanceAssociationsStatus } from "./pagination/DescribeInstanceAssociationsStatusPaginator";
import { paginateDescribeInstanceInformation } from "./pagination/DescribeInstanceInformationPaginator";
import { paginateDescribeInstancePatches } from "./pagination/DescribeInstancePatchesPaginator";
import {
  paginateDescribeInstancePatchStatesForPatchGroup,
} from "./pagination/DescribeInstancePatchStatesForPatchGroupPaginator";
import { paginateDescribeInstancePatchStates } from "./pagination/DescribeInstancePatchStatesPaginator";
import { paginateDescribeInstanceProperties } from "./pagination/DescribeInstancePropertiesPaginator";
import { paginateDescribeInventoryDeletions } from "./pagination/DescribeInventoryDeletionsPaginator";
import { paginateDescribeMaintenanceWindowExecutions } from "./pagination/DescribeMaintenanceWindowExecutionsPaginator";
import {
  paginateDescribeMaintenanceWindowExecutionTaskInvocations,
} from "./pagination/DescribeMaintenanceWindowExecutionTaskInvocationsPaginator";
import {
  paginateDescribeMaintenanceWindowExecutionTasks,
} from "./pagination/DescribeMaintenanceWindowExecutionTasksPaginator";
import { paginateDescribeMaintenanceWindowSchedule } from "./pagination/DescribeMaintenanceWindowSchedulePaginator";
import { paginateDescribeMaintenanceWindowsForTarget } from "./pagination/DescribeMaintenanceWindowsForTargetPaginator";
import { paginateDescribeMaintenanceWindows } from "./pagination/DescribeMaintenanceWindowsPaginator";
import { paginateDescribeMaintenanceWindowTargets } from "./pagination/DescribeMaintenanceWindowTargetsPaginator";
import { paginateDescribeMaintenanceWindowTasks } from "./pagination/DescribeMaintenanceWindowTasksPaginator";
import { paginateDescribeOpsItems } from "./pagination/DescribeOpsItemsPaginator";
import { paginateDescribeParameters } from "./pagination/DescribeParametersPaginator";
import { paginateDescribePatchBaselines } from "./pagination/DescribePatchBaselinesPaginator";
import { paginateDescribePatchGroups } from "./pagination/DescribePatchGroupsPaginator";
import { paginateDescribePatchProperties } from "./pagination/DescribePatchPropertiesPaginator";
import { paginateDescribeSessions } from "./pagination/DescribeSessionsPaginator";
import { paginateGetInventory } from "./pagination/GetInventoryPaginator";
import { paginateGetInventorySchema } from "./pagination/GetInventorySchemaPaginator";
import { paginateGetOpsSummary } from "./pagination/GetOpsSummaryPaginator";
import { paginateGetParameterHistory } from "./pagination/GetParameterHistoryPaginator";
import { paginateGetParametersByPath } from "./pagination/GetParametersByPathPaginator";
import { paginateGetResourcePolicies } from "./pagination/GetResourcePoliciesPaginator";
import { paginateListAssociations } from "./pagination/ListAssociationsPaginator";
import { paginateListAssociationVersions } from "./pagination/ListAssociationVersionsPaginator";
import { paginateListCommandInvocations } from "./pagination/ListCommandInvocationsPaginator";
import { paginateListCommands } from "./pagination/ListCommandsPaginator";
import { paginateListComplianceItems } from "./pagination/ListComplianceItemsPaginator";
import { paginateListComplianceSummaries } from "./pagination/ListComplianceSummariesPaginator";
import { paginateListDocuments } from "./pagination/ListDocumentsPaginator";
import { paginateListDocumentVersions } from "./pagination/ListDocumentVersionsPaginator";
import { paginateListNodes } from "./pagination/ListNodesPaginator";
import { paginateListNodesSummary } from "./pagination/ListNodesSummaryPaginator";
import { paginateListOpsItemEvents } from "./pagination/ListOpsItemEventsPaginator";
import { paginateListOpsItemRelatedItems } from "./pagination/ListOpsItemRelatedItemsPaginator";
import { paginateListOpsMetadata } from "./pagination/ListOpsMetadataPaginator";
import { paginateListResourceComplianceSummaries } from "./pagination/ListResourceComplianceSummariesPaginator";
import { paginateListResourceDataSync } from "./pagination/ListResourceDataSyncPaginator";
import { SSMClient } from "./SSMClient";
import { waitUntilCommandExecuted } from "./waiters/waitForCommandExecuted";

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
  DeleteOpsItemCommand,
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
  DescribeInstancePropertiesCommand,
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
  GetAccessTokenCommand,
  GetAutomationExecutionCommand,
  GetCalendarStateCommand,
  GetCommandInvocationCommand,
  GetConnectionStatusCommand,
  GetDefaultPatchBaselineCommand,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDocumentCommand,
  GetExecutionPreviewCommand,
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
  ListNodesCommand,
  ListNodesSummaryCommand,
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
  StartAccessRequestCommand,
  StartAssociationsOnceCommand,
  StartAutomationExecutionCommand,
  StartChangeRequestExecutionCommand,
  StartExecutionPreviewCommand,
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
const paginators = {
  paginateDescribeActivations,
  paginateDescribeAssociationExecutions,
  paginateDescribeAssociationExecutionTargets,
  paginateDescribeAutomationExecutions,
  paginateDescribeAutomationStepExecutions,
  paginateDescribeAvailablePatches,
  paginateDescribeEffectiveInstanceAssociations,
  paginateDescribeEffectivePatchesForPatchBaseline,
  paginateDescribeInstanceAssociationsStatus,
  paginateDescribeInstanceInformation,
  paginateDescribeInstancePatches,
  paginateDescribeInstancePatchStates,
  paginateDescribeInstancePatchStatesForPatchGroup,
  paginateDescribeInstanceProperties,
  paginateDescribeInventoryDeletions,
  paginateDescribeMaintenanceWindowExecutions,
  paginateDescribeMaintenanceWindowExecutionTaskInvocations,
  paginateDescribeMaintenanceWindowExecutionTasks,
  paginateDescribeMaintenanceWindows,
  paginateDescribeMaintenanceWindowSchedule,
  paginateDescribeMaintenanceWindowsForTarget,
  paginateDescribeMaintenanceWindowTargets,
  paginateDescribeMaintenanceWindowTasks,
  paginateDescribeOpsItems,
  paginateDescribeParameters,
  paginateDescribePatchBaselines,
  paginateDescribePatchGroups,
  paginateDescribePatchProperties,
  paginateDescribeSessions,
  paginateGetInventory,
  paginateGetInventorySchema,
  paginateGetOpsSummary,
  paginateGetParameterHistory,
  paginateGetParametersByPath,
  paginateGetResourcePolicies,
  paginateListAssociations,
  paginateListAssociationVersions,
  paginateListCommandInvocations,
  paginateListCommands,
  paginateListComplianceItems,
  paginateListComplianceSummaries,
  paginateListDocuments,
  paginateListDocumentVersions,
  paginateListNodes,
  paginateListNodesSummary,
  paginateListOpsItemEvents,
  paginateListOpsItemRelatedItems,
  paginateListOpsMetadata,
  paginateListResourceComplianceSummaries,
  paginateListResourceDataSync,
};
const waiters = {
  waitUntilCommandExecuted,
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
  cancelCommand(
    args: CancelCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCommandCommandOutput>;
  cancelCommand(
    args: CancelCommandCommandInput,
    cb: (err: any, data?: CancelCommandCommandOutput) => void
  ): void;
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
  createDocument(
    args: CreateDocumentCommandInput,
    cb: (err: any, data?: CreateDocumentCommandOutput) => void
  ): void;
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
  createOpsItem(
    args: CreateOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpsItemCommandOutput>;
  createOpsItem(
    args: CreateOpsItemCommandInput,
    cb: (err: any, data?: CreateOpsItemCommandOutput) => void
  ): void;
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
  deleteAssociation(): Promise<DeleteAssociationCommandOutput>;
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
  deleteDocument(
    args: DeleteDocumentCommandInput,
    cb: (err: any, data?: DeleteDocumentCommandOutput) => void
  ): void;
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
  deleteInventory(
    args: DeleteInventoryCommandInput,
    cb: (err: any, data?: DeleteInventoryCommandOutput) => void
  ): void;
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
   * @see {@link DeleteOpsItemCommand}
   */
  deleteOpsItem(
    args: DeleteOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpsItemCommandOutput>;
  deleteOpsItem(
    args: DeleteOpsItemCommandInput,
    cb: (err: any, data?: DeleteOpsItemCommandOutput) => void
  ): void;
  deleteOpsItem(
    args: DeleteOpsItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpsItemCommandOutput) => void
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
  deleteParameter(
    args: DeleteParameterCommandInput,
    cb: (err: any, data?: DeleteParameterCommandOutput) => void
  ): void;
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
  describeActivations(): Promise<DescribeActivationsCommandOutput>;
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
  describeAssociation(): Promise<DescribeAssociationCommandOutput>;
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
  describeAutomationExecutions(): Promise<DescribeAutomationExecutionsCommandOutput>;
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
  describeAvailablePatches(): Promise<DescribeAvailablePatchesCommandOutput>;
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
  describeInstanceInformation(): Promise<DescribeInstanceInformationCommandOutput>;
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
   * @see {@link DescribeInstancePropertiesCommand}
   */
  describeInstanceProperties(): Promise<DescribeInstancePropertiesCommandOutput>;
  describeInstanceProperties(
    args: DescribeInstancePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancePropertiesCommandOutput>;
  describeInstanceProperties(
    args: DescribeInstancePropertiesCommandInput,
    cb: (err: any, data?: DescribeInstancePropertiesCommandOutput) => void
  ): void;
  describeInstanceProperties(
    args: DescribeInstancePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInventoryDeletionsCommand}
   */
  describeInventoryDeletions(): Promise<DescribeInventoryDeletionsCommandOutput>;
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
  describeMaintenanceWindows(): Promise<DescribeMaintenanceWindowsCommandOutput>;
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
  describeMaintenanceWindowSchedule(): Promise<DescribeMaintenanceWindowScheduleCommandOutput>;
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
  describeOpsItems(): Promise<DescribeOpsItemsCommandOutput>;
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
  describeParameters(): Promise<DescribeParametersCommandOutput>;
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
  describePatchBaselines(): Promise<DescribePatchBaselinesCommandOutput>;
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
  describePatchGroups(): Promise<DescribePatchGroupsCommandOutput>;
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
   * @see {@link GetAccessTokenCommand}
   */
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessTokenCommandOutput>;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
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
  getDefaultPatchBaseline(): Promise<GetDefaultPatchBaselineCommandOutput>;
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
  getDocument(
    args: GetDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentCommandOutput>;
  getDocument(
    args: GetDocumentCommandInput,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;
  getDocument(
    args: GetDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExecutionPreviewCommand}
   */
  getExecutionPreview(
    args: GetExecutionPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExecutionPreviewCommandOutput>;
  getExecutionPreview(
    args: GetExecutionPreviewCommandInput,
    cb: (err: any, data?: GetExecutionPreviewCommandOutput) => void
  ): void;
  getExecutionPreview(
    args: GetExecutionPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExecutionPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInventoryCommand}
   */
  getInventory(): Promise<GetInventoryCommandOutput>;
  getInventory(
    args: GetInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInventoryCommandOutput>;
  getInventory(
    args: GetInventoryCommandInput,
    cb: (err: any, data?: GetInventoryCommandOutput) => void
  ): void;
  getInventory(
    args: GetInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInventoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInventorySchemaCommand}
   */
  getInventorySchema(): Promise<GetInventorySchemaCommandOutput>;
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
  getOpsItem(
    args: GetOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpsItemCommandOutput>;
  getOpsItem(
    args: GetOpsItemCommandInput,
    cb: (err: any, data?: GetOpsItemCommandOutput) => void
  ): void;
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
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    cb: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): void;
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpsSummaryCommand}
   */
  getOpsSummary(): Promise<GetOpsSummaryCommandOutput>;
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpsSummaryCommandOutput>;
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    cb: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): void;
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpsSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParameterCommand}
   */
  getParameter(
    args: GetParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParameterCommandOutput>;
  getParameter(
    args: GetParameterCommandInput,
    cb: (err: any, data?: GetParameterCommandOutput) => void
  ): void;
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
  getParameters(
    args: GetParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersCommandOutput>;
  getParameters(
    args: GetParametersCommandInput,
    cb: (err: any, data?: GetParametersCommandOutput) => void
  ): void;
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
  listAssociations(): Promise<ListAssociationsCommandOutput>;
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
  listCommandInvocations(): Promise<ListCommandInvocationsCommandOutput>;
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
  listCommands(): Promise<ListCommandsCommandOutput>;
  listCommands(
    args: ListCommandsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommandsCommandOutput>;
  listCommands(
    args: ListCommandsCommandInput,
    cb: (err: any, data?: ListCommandsCommandOutput) => void
  ): void;
  listCommands(
    args: ListCommandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceItemsCommand}
   */
  listComplianceItems(): Promise<ListComplianceItemsCommandOutput>;
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
  listComplianceSummaries(): Promise<ListComplianceSummariesCommandOutput>;
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
  listDocuments(): Promise<ListDocumentsCommandOutput>;
  listDocuments(
    args: ListDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentsCommandOutput>;
  listDocuments(
    args: ListDocumentsCommandInput,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;
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
   * @see {@link ListNodesCommand}
   */
  listNodes(): Promise<ListNodesCommandOutput>;
  listNodes(
    args: ListNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodesCommandOutput>;
  listNodes(
    args: ListNodesCommandInput,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesSummaryCommand}
   */
  listNodesSummary(
    args: ListNodesSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodesSummaryCommandOutput>;
  listNodesSummary(
    args: ListNodesSummaryCommandInput,
    cb: (err: any, data?: ListNodesSummaryCommandOutput) => void
  ): void;
  listNodesSummary(
    args: ListNodesSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpsItemEventsCommand}
   */
  listOpsItemEvents(): Promise<ListOpsItemEventsCommandOutput>;
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
  listOpsItemRelatedItems(): Promise<ListOpsItemRelatedItemsCommandOutput>;
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
  listOpsMetadata(): Promise<ListOpsMetadataCommandOutput>;
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpsMetadataCommandOutput>;
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    cb: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): void;
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceComplianceSummariesCommand}
   */
  listResourceComplianceSummaries(): Promise<ListResourceComplianceSummariesCommandOutput>;
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
  listResourceDataSync(): Promise<ListResourceDataSyncCommandOutput>;
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
  putInventory(
    args: PutInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInventoryCommandOutput>;
  putInventory(
    args: PutInventoryCommandInput,
    cb: (err: any, data?: PutInventoryCommandOutput) => void
  ): void;
  putInventory(
    args: PutInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInventoryCommandOutput) => void
  ): void;

  /**
   * @see {@link PutParameterCommand}
   */
  putParameter(
    args: PutParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutParameterCommandOutput>;
  putParameter(
    args: PutParameterCommandInput,
    cb: (err: any, data?: PutParameterCommandOutput) => void
  ): void;
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
  resumeSession(
    args: ResumeSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeSessionCommandOutput>;
  resumeSession(
    args: ResumeSessionCommandInput,
    cb: (err: any, data?: ResumeSessionCommandOutput) => void
  ): void;
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
  sendCommand(
    args: SendCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCommandCommandOutput>;
  sendCommand(
    args: SendCommandCommandInput,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;
  sendCommand(
    args: SendCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAccessRequestCommand}
   */
  startAccessRequest(
    args: StartAccessRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAccessRequestCommandOutput>;
  startAccessRequest(
    args: StartAccessRequestCommandInput,
    cb: (err: any, data?: StartAccessRequestCommandOutput) => void
  ): void;
  startAccessRequest(
    args: StartAccessRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAccessRequestCommandOutput) => void
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
   * @see {@link StartExecutionPreviewCommand}
   */
  startExecutionPreview(
    args: StartExecutionPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExecutionPreviewCommandOutput>;
  startExecutionPreview(
    args: StartExecutionPreviewCommandInput,
    cb: (err: any, data?: StartExecutionPreviewCommandOutput) => void
  ): void;
  startExecutionPreview(
    args: StartExecutionPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExecutionPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(
    args: StartSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSessionCommandOutput>;
  startSession(
    args: StartSessionCommandInput,
    cb: (err: any, data?: StartSessionCommandOutput) => void
  ): void;
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
  updateDocument(
    args: UpdateDocumentCommandInput,
    cb: (err: any, data?: UpdateDocumentCommandOutput) => void
  ): void;
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
  updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpsItemCommandOutput>;
  updateOpsItem(
    args: UpdateOpsItemCommandInput,
    cb: (err: any, data?: UpdateOpsItemCommandOutput) => void
  ): void;
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

  /**
   * @see {@link DescribeActivationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeActivationsCommandOutput}.
   */
  paginateDescribeActivations(
    args?: DescribeActivationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeActivationsCommandOutput>;

  /**
   * @see {@link DescribeAssociationExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAssociationExecutionsCommandOutput}.
   */
  paginateDescribeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAssociationExecutionsCommandOutput>;

  /**
   * @see {@link DescribeAssociationExecutionTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAssociationExecutionTargetsCommandOutput}.
   */
  paginateDescribeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAssociationExecutionTargetsCommandOutput>;

  /**
   * @see {@link DescribeAutomationExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAutomationExecutionsCommandOutput}.
   */
  paginateDescribeAutomationExecutions(
    args?: DescribeAutomationExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAutomationExecutionsCommandOutput>;

  /**
   * @see {@link DescribeAutomationStepExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAutomationStepExecutionsCommandOutput}.
   */
  paginateDescribeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAutomationStepExecutionsCommandOutput>;

  /**
   * @see {@link DescribeAvailablePatchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAvailablePatchesCommandOutput}.
   */
  paginateDescribeAvailablePatches(
    args?: DescribeAvailablePatchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAvailablePatchesCommandOutput>;

  /**
   * @see {@link DescribeEffectiveInstanceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEffectiveInstanceAssociationsCommandOutput}.
   */
  paginateDescribeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;

  /**
   * @see {@link DescribeEffectivePatchesForPatchBaselineCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEffectivePatchesForPatchBaselineCommandOutput}.
   */
  paginateDescribeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput>;

  /**
   * @see {@link DescribeInstanceAssociationsStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstanceAssociationsStatusCommandOutput}.
   */
  paginateDescribeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstanceAssociationsStatusCommandOutput>;

  /**
   * @see {@link DescribeInstanceInformationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstanceInformationCommandOutput}.
   */
  paginateDescribeInstanceInformation(
    args?: DescribeInstanceInformationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstanceInformationCommandOutput>;

  /**
   * @see {@link DescribeInstancePatchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstancePatchesCommandOutput}.
   */
  paginateDescribeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstancePatchesCommandOutput>;

  /**
   * @see {@link DescribeInstancePatchStatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstancePatchStatesCommandOutput}.
   */
  paginateDescribeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstancePatchStatesCommandOutput>;

  /**
   * @see {@link DescribeInstancePatchStatesForPatchGroupCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstancePatchStatesForPatchGroupCommandOutput}.
   */
  paginateDescribeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput>;

  /**
   * @see {@link DescribeInstancePropertiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstancePropertiesCommandOutput}.
   */
  paginateDescribeInstanceProperties(
    args?: DescribeInstancePropertiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstancePropertiesCommandOutput>;

  /**
   * @see {@link DescribeInventoryDeletionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInventoryDeletionsCommandOutput}.
   */
  paginateDescribeInventoryDeletions(
    args?: DescribeInventoryDeletionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInventoryDeletionsCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowExecutionsCommandOutput}.
   */
  paginateDescribeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput}.
   */
  paginateDescribeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowExecutionTasksCommandOutput}.
   */
  paginateDescribeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowsCommandOutput}.
   */
  paginateDescribeMaintenanceWindows(
    args?: DescribeMaintenanceWindowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowsCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowScheduleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowScheduleCommandOutput}.
   */
  paginateDescribeMaintenanceWindowSchedule(
    args?: DescribeMaintenanceWindowScheduleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowScheduleCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowsForTargetCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowsForTargetCommandOutput}.
   */
  paginateDescribeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowsForTargetCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowTargetsCommandOutput}.
   */
  paginateDescribeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowTargetsCommandOutput>;

  /**
   * @see {@link DescribeMaintenanceWindowTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMaintenanceWindowTasksCommandOutput}.
   */
  paginateDescribeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMaintenanceWindowTasksCommandOutput>;

  /**
   * @see {@link DescribeOpsItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOpsItemsCommandOutput}.
   */
  paginateDescribeOpsItems(
    args?: DescribeOpsItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOpsItemsCommandOutput>;

  /**
   * @see {@link DescribeParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeParametersCommandOutput}.
   */
  paginateDescribeParameters(
    args?: DescribeParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeParametersCommandOutput>;

  /**
   * @see {@link DescribePatchBaselinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePatchBaselinesCommandOutput}.
   */
  paginateDescribePatchBaselines(
    args?: DescribePatchBaselinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePatchBaselinesCommandOutput>;

  /**
   * @see {@link DescribePatchGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePatchGroupsCommandOutput}.
   */
  paginateDescribePatchGroups(
    args?: DescribePatchGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePatchGroupsCommandOutput>;

  /**
   * @see {@link DescribePatchPropertiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePatchPropertiesCommandOutput}.
   */
  paginateDescribePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePatchPropertiesCommandOutput>;

  /**
   * @see {@link DescribeSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSessionsCommandOutput}.
   */
  paginateDescribeSessions(
    args: DescribeSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSessionsCommandOutput>;

  /**
   * @see {@link GetInventoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetInventoryCommandOutput}.
   */
  paginateGetInventory(
    args?: GetInventoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetInventoryCommandOutput>;

  /**
   * @see {@link GetInventorySchemaCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetInventorySchemaCommandOutput}.
   */
  paginateGetInventorySchema(
    args?: GetInventorySchemaCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetInventorySchemaCommandOutput>;

  /**
   * @see {@link GetOpsSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOpsSummaryCommandOutput}.
   */
  paginateGetOpsSummary(
    args?: GetOpsSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOpsSummaryCommandOutput>;

  /**
   * @see {@link GetParameterHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetParameterHistoryCommandOutput}.
   */
  paginateGetParameterHistory(
    args: GetParameterHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetParameterHistoryCommandOutput>;

  /**
   * @see {@link GetParametersByPathCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetParametersByPathCommandOutput}.
   */
  paginateGetParametersByPath(
    args: GetParametersByPathCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetParametersByPathCommandOutput>;

  /**
   * @see {@link GetResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourcePoliciesCommandOutput}.
   */
  paginateGetResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourcePoliciesCommandOutput>;

  /**
   * @see {@link ListAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociationsCommandOutput}.
   */
  paginateListAssociations(
    args?: ListAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociationsCommandOutput>;

  /**
   * @see {@link ListAssociationVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociationVersionsCommandOutput}.
   */
  paginateListAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociationVersionsCommandOutput>;

  /**
   * @see {@link ListCommandInvocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCommandInvocationsCommandOutput}.
   */
  paginateListCommandInvocations(
    args?: ListCommandInvocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCommandInvocationsCommandOutput>;

  /**
   * @see {@link ListCommandsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCommandsCommandOutput}.
   */
  paginateListCommands(
    args?: ListCommandsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCommandsCommandOutput>;

  /**
   * @see {@link ListComplianceItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComplianceItemsCommandOutput}.
   */
  paginateListComplianceItems(
    args?: ListComplianceItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComplianceItemsCommandOutput>;

  /**
   * @see {@link ListComplianceSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComplianceSummariesCommandOutput}.
   */
  paginateListComplianceSummaries(
    args?: ListComplianceSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComplianceSummariesCommandOutput>;

  /**
   * @see {@link ListDocumentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDocumentsCommandOutput}.
   */
  paginateListDocuments(
    args?: ListDocumentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDocumentsCommandOutput>;

  /**
   * @see {@link ListDocumentVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDocumentVersionsCommandOutput}.
   */
  paginateListDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDocumentVersionsCommandOutput>;

  /**
   * @see {@link ListNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNodesCommandOutput}.
   */
  paginateListNodes(
    args?: ListNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNodesCommandOutput>;

  /**
   * @see {@link ListNodesSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNodesSummaryCommandOutput}.
   */
  paginateListNodesSummary(
    args: ListNodesSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNodesSummaryCommandOutput>;

  /**
   * @see {@link ListOpsItemEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpsItemEventsCommandOutput}.
   */
  paginateListOpsItemEvents(
    args?: ListOpsItemEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpsItemEventsCommandOutput>;

  /**
   * @see {@link ListOpsItemRelatedItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpsItemRelatedItemsCommandOutput}.
   */
  paginateListOpsItemRelatedItems(
    args?: ListOpsItemRelatedItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpsItemRelatedItemsCommandOutput>;

  /**
   * @see {@link ListOpsMetadataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpsMetadataCommandOutput}.
   */
  paginateListOpsMetadata(
    args?: ListOpsMetadataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpsMetadataCommandOutput>;

  /**
   * @see {@link ListResourceComplianceSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceComplianceSummariesCommandOutput}.
   */
  paginateListResourceComplianceSummaries(
    args?: ListResourceComplianceSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceComplianceSummariesCommandOutput>;

  /**
   * @see {@link ListResourceDataSyncCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceDataSyncCommandOutput}.
   */
  paginateListResourceDataSync(
    args?: ListResourceDataSyncCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceDataSyncCommandOutput>;

  /**
   * @see {@link GetCommandInvocationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCommandExecuted(
    args: GetCommandInvocationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<SSM>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure
 *    end-to-end management solution for hybrid cloud environments that enables safe and secure
 *    operations at scale.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-console.html">Setting up
 *     Amazon Web Services Systems Manager</a>.</p>
 *          <p class="title">
 *             <b>Related resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For information about each of the tools that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-tools.html">Using
 *       Systems Manager tools</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For details about predefined runbooks for Automation, a tool in Amazon Web Services Systems Manager, see the
 *        <i>
 *                      <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation Runbook Reference</a>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about AppConfig, a tool in Systems Manager, see the <i>
 *                      <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a>
 *                   </i>
 *      and the <i>
 *                      <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig
 *        API Reference</a>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about Incident Manager, a tool in Systems Manager, see the <i>
 *                      <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User
 *        Guide</a>
 *                   </i> and the <i>
 *                      <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API
 *      Reference</a>
 *                   </i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class SSM extends SSMClient implements SSM {}
createAggregatedClient(commands, SSM, { paginators, waiters });
