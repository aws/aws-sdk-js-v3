// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import {
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
} from "../commands/AssociateOpsItemRelatedItemCommand";
import { CancelCommandCommandInput, CancelCommandCommandOutput } from "../commands/CancelCommandCommand";
import {
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
} from "../commands/CancelMaintenanceWindowExecutionCommand";
import { CreateActivationCommandInput, CreateActivationCommandOutput } from "../commands/CreateActivationCommand";
import {
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
} from "../commands/CreateAssociationBatchCommand";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput } from "../commands/CreateAssociationCommand";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput } from "../commands/CreateDocumentCommand";
import {
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
} from "../commands/CreateMaintenanceWindowCommand";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput } from "../commands/CreateOpsItemCommand";
import { CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput } from "../commands/CreateOpsMetadataCommand";
import {
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
} from "../commands/CreatePatchBaselineCommand";
import {
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
} from "../commands/CreateResourceDataSyncCommand";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput } from "../commands/DeleteActivationCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "../commands/DeleteAssociationCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "../commands/DeleteDocumentCommand";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput } from "../commands/DeleteInventoryCommand";
import {
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
} from "../commands/DeleteMaintenanceWindowCommand";
import { DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput } from "../commands/DeleteOpsMetadataCommand";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput } from "../commands/DeleteParameterCommand";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput } from "../commands/DeleteParametersCommand";
import {
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
} from "../commands/DeletePatchBaselineCommand";
import {
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
} from "../commands/DeleteResourceDataSyncCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
} from "../commands/DeregisterManagedInstanceCommand";
import {
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
} from "../commands/DeregisterPatchBaselineForPatchGroupCommand";
import {
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
} from "../commands/DeregisterTargetFromMaintenanceWindowCommand";
import {
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
} from "../commands/DeregisterTaskFromMaintenanceWindowCommand";
import {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import {
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
} from "../commands/DescribeAssociationCommand";
import {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "../commands/DescribeAssociationExecutionsCommand";
import {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import {
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "../commands/DescribeAutomationExecutionsCommand";
import {
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "../commands/DescribeAutomationStepExecutionsCommand";
import {
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "../commands/DescribeAvailablePatchesCommand";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput } from "../commands/DescribeDocumentCommand";
import {
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
} from "../commands/DescribeDocumentPermissionCommand";
import {
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import {
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import {
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "../commands/DescribeInstanceAssociationsStatusCommand";
import {
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "../commands/DescribeInstanceInformationCommand";
import {
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "../commands/DescribeInstancePatchesCommand";
import {
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "../commands/DescribeInstancePatchStatesCommand";
import {
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import {
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "../commands/DescribeInventoryDeletionsCommand";
import {
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import {
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import {
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "../commands/DescribeMaintenanceWindowScheduleCommand";
import {
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "../commands/DescribeMaintenanceWindowsCommand";
import {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import {
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "../commands/DescribeMaintenanceWindowTargetsCommand";
import {
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowTasksCommand";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "../commands/DescribeOpsItemsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "../commands/DescribeParametersCommand";
import {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand";
import {
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "../commands/DescribePatchGroupsCommand";
import {
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "../commands/DescribePatchGroupStateCommand";
import {
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "../commands/DescribePatchPropertiesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import {
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
} from "../commands/DisassociateOpsItemRelatedItemCommand";
import {
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
} from "../commands/GetAutomationExecutionCommand";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput } from "../commands/GetCalendarStateCommand";
import {
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
} from "../commands/GetCommandInvocationCommand";
import {
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
} from "../commands/GetConnectionStatusCommand";
import {
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
} from "../commands/GetDefaultPatchBaselineCommand";
import {
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
} from "../commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "../commands/GetDocumentCommand";
import { GetInventoryCommandInput, GetInventoryCommandOutput } from "../commands/GetInventoryCommand";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "../commands/GetInventorySchemaCommand";
import {
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
} from "../commands/GetMaintenanceWindowCommand";
import {
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
} from "../commands/GetMaintenanceWindowExecutionCommand";
import {
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
} from "../commands/GetMaintenanceWindowExecutionTaskCommand";
import {
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
} from "../commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import {
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
} from "../commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput } from "../commands/GetOpsItemCommand";
import { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput } from "../commands/GetOpsMetadataCommand";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "../commands/GetOpsSummaryCommand";
import { GetParameterCommandInput, GetParameterCommandOutput } from "../commands/GetParameterCommand";
import {
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "../commands/GetParameterHistoryCommand";
import {
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "../commands/GetParametersByPathCommand";
import { GetParametersCommandInput, GetParametersCommandOutput } from "../commands/GetParametersCommand";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput } from "../commands/GetPatchBaselineCommand";
import {
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
} from "../commands/GetPatchBaselineForPatchGroupCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput } from "../commands/GetServiceSettingCommand";
import {
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
} from "../commands/LabelParameterVersionCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import {
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "../commands/ListAssociationVersionsCommand";
import {
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import {
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "../commands/ListComplianceItemsCommand";
import {
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "../commands/ListComplianceSummariesCommand";
import {
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
} from "../commands/ListDocumentMetadataHistoryCommand";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "../commands/ListDocumentsCommand";
import {
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "../commands/ListDocumentVersionsCommand";
import {
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "../commands/ListInventoryEntriesCommand";
import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput } from "../commands/ListOpsItemEventsCommand";
import {
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "../commands/ListOpsItemRelatedItemsCommand";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "../commands/ListOpsMetadataCommand";
import {
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "../commands/ListResourceComplianceSummariesCommand";
import {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "../commands/ListResourceDataSyncCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
} from "../commands/ModifyDocumentPermissionCommand";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput } from "../commands/PutComplianceItemsCommand";
import { PutInventoryCommandInput, PutInventoryCommandOutput } from "../commands/PutInventoryCommand";
import { PutParameterCommandInput, PutParameterCommandOutput } from "../commands/PutParameterCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
} from "../commands/RegisterDefaultPatchBaselineCommand";
import {
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
} from "../commands/RegisterPatchBaselineForPatchGroupCommand";
import {
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
} from "../commands/RegisterTargetWithMaintenanceWindowCommand";
import {
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
} from "../commands/RegisterTaskWithMaintenanceWindowCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
} from "../commands/ResetServiceSettingCommand";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput } from "../commands/ResumeSessionCommand";
import {
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
} from "../commands/SendAutomationSignalCommand";
import { SendCommandCommandInput, SendCommandCommandOutput } from "../commands/SendCommandCommand";
import {
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
} from "../commands/StartAssociationsOnceCommand";
import {
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
} from "../commands/StartAutomationExecutionCommand";
import {
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
} from "../commands/StartChangeRequestExecutionCommand";
import { StartSessionCommandInput, StartSessionCommandOutput } from "../commands/StartSessionCommand";
import {
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
} from "../commands/StopAutomationExecutionCommand";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "../commands/TerminateSessionCommand";
import {
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
} from "../commands/UnlabelParameterVersionCommand";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput } from "../commands/UpdateAssociationCommand";
import {
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
} from "../commands/UpdateAssociationStatusCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "../commands/UpdateDocumentCommand";
import {
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
} from "../commands/UpdateDocumentDefaultVersionCommand";
import {
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
} from "../commands/UpdateDocumentMetadataCommand";
import {
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
} from "../commands/UpdateMaintenanceWindowCommand";
import {
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
} from "../commands/UpdateMaintenanceWindowTargetCommand";
import {
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
} from "../commands/UpdateMaintenanceWindowTaskCommand";
import {
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
} from "../commands/UpdateManagedInstanceRoleCommand";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput } from "../commands/UpdateOpsItemCommand";
import { UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput } from "../commands/UpdateOpsMetadataCommand";
import {
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
} from "../commands/UpdatePatchBaselineCommand";
import {
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
} from "../commands/UpdateResourceDataSyncCommand";
import {
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
} from "../commands/UpdateServiceSettingCommand";
import {
  AccountSharingInfo,
  Activation,
  AddTagsToResourceRequest,
  AddTagsToResourceResult,
  Alarm,
  AlarmConfiguration,
  AlarmStateInformation,
  AlreadyExistsException,
  AssociatedInstances,
  AssociateOpsItemRelatedItemRequest,
  AssociateOpsItemRelatedItemResponse,
  AssociationAlreadyExists,
  AssociationDescription,
  AssociationDoesNotExist,
  AssociationExecution,
  AssociationExecutionDoesNotExist,
  AssociationExecutionFilter,
  AssociationExecutionTarget,
  AssociationExecutionTargetsFilter,
  AssociationLimitExceeded,
  AssociationOverview,
  AssociationStatus,
  AttachmentInformation,
  AttachmentsSource,
  AutomationExecutionFilter,
  AutomationExecutionMetadata,
  AutomationExecutionNotFoundException,
  CancelCommandRequest,
  CancelCommandResult,
  CancelMaintenanceWindowExecutionRequest,
  CancelMaintenanceWindowExecutionResult,
  CreateActivationRequest,
  CreateActivationResult,
  CreateAssociationBatchRequest,
  CreateAssociationBatchRequestEntry,
  CreateAssociationBatchResult,
  CreateAssociationRequest,
  CreateAssociationResult,
  CreateDocumentRequest,
  CreateDocumentResult,
  CreateMaintenanceWindowRequest,
  CreateMaintenanceWindowResult,
  CreateOpsItemRequest,
  CreateOpsItemResponse,
  CreateOpsMetadataRequest,
  CreateOpsMetadataResult,
  CreatePatchBaselineRequest,
  CreatePatchBaselineResult,
  CreateResourceDataSyncRequest,
  CreateResourceDataSyncResult,
  DeleteActivationRequest,
  DeleteActivationResult,
  DeleteAssociationRequest,
  DeleteAssociationResult,
  DeleteDocumentRequest,
  DeleteDocumentResult,
  DeleteInventoryRequest,
  DeleteInventoryResult,
  DeleteMaintenanceWindowRequest,
  DeleteMaintenanceWindowResult,
  DeleteOpsMetadataRequest,
  DeleteOpsMetadataResult,
  DeleteParameterRequest,
  DeleteParameterResult,
  DeleteParametersRequest,
  DeleteParametersResult,
  DeletePatchBaselineRequest,
  DeletePatchBaselineResult,
  DeleteResourceDataSyncRequest,
  DeleteResourceDataSyncResult,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeregisterManagedInstanceRequest,
  DeregisterManagedInstanceResult,
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
  DescribeActivationsFilter,
  DescribeActivationsRequest,
  DescribeActivationsResult,
  DescribeAssociationExecutionsRequest,
  DescribeAssociationExecutionsResult,
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
  DescribeAssociationRequest,
  DescribeAssociationResult,
  DescribeAutomationExecutionsRequest,
  DescribeAutomationExecutionsResult,
  DescribeAutomationStepExecutionsRequest,
  DescribeAutomationStepExecutionsResult,
  DescribeAvailablePatchesRequest,
  DescribeAvailablePatchesResult,
  DescribeDocumentPermissionRequest,
  DescribeDocumentPermissionResponse,
  DescribeDocumentRequest,
  DescribeDocumentResult,
  DescribeEffectiveInstanceAssociationsRequest,
  DescribeEffectiveInstanceAssociationsResult,
  DescribeEffectivePatchesForPatchBaselineRequest,
  DescribeEffectivePatchesForPatchBaselineResult,
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
  DescribeInstanceInformationRequest,
  DescribeInstanceInformationResult,
  DescribeInstancePatchesRequest,
  DescribeInstancePatchesResult,
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
  DescribeInstancePatchStatesRequest,
  DescribeInstancePatchStatesResult,
  DescribeInventoryDeletionsRequest,
  DescribeInventoryDeletionsResult,
  DescribeMaintenanceWindowExecutionsRequest,
  DescribeMaintenanceWindowExecutionsResult,
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult,
  DescribeMaintenanceWindowExecutionTasksRequest,
  DescribeMaintenanceWindowExecutionTasksResult,
  DescribeMaintenanceWindowScheduleRequest,
  DescribeMaintenanceWindowScheduleResult,
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsForTargetResult,
  DescribeMaintenanceWindowsRequest,
  DescribeMaintenanceWindowsResult,
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
  DescribeMaintenanceWindowTasksRequest,
  DescribeMaintenanceWindowTasksResult,
  DocumentAlreadyExists,
  DocumentDescription,
  DocumentLimitExceeded,
  DocumentParameter,
  DocumentRequires,
  DoesNotExistException,
  DuplicateInstanceId,
  EffectivePatch,
  FailedCreateAssociation,
  FailureDetails,
  IdempotentParameterMismatch,
  InstanceAggregatedAssociationOverview,
  InstanceAssociation,
  InstanceAssociationOutputLocation,
  InstanceAssociationOutputUrl,
  InstanceAssociationStatusInfo,
  InstanceInformation,
  InstanceInformationFilter,
  InstanceInformationStringFilter,
  InstancePatchState,
  InstancePatchStateFilter,
  InternalServerError,
  InvalidActivation,
  InvalidActivationId,
  InvalidAssociationVersion,
  InvalidCommandId,
  InvalidDeleteInventoryParametersException,
  InvalidDeletionIdException,
  InvalidDocument,
  InvalidDocumentContent,
  InvalidDocumentOperation,
  InvalidDocumentSchemaVersion,
  InvalidDocumentVersion,
  InvalidFilter,
  InvalidFilterKey,
  InvalidFilterValue,
  InvalidInstanceId,
  InvalidInstanceInformationFilterValue,
  InvalidInventoryRequestException,
  InvalidNextToken,
  InvalidOptionException,
  InvalidOutputLocation,
  InvalidParameters,
  InvalidPermissionType,
  InvalidResourceId,
  InvalidResourceType,
  InvalidSchedule,
  InvalidTag,
  InvalidTarget,
  InvalidTargetMaps,
  InvalidTypeNameException,
  InventoryDeletionStatusItem,
  InventoryDeletionSummary,
  InventoryDeletionSummaryItem,
  LoggingInfo,
  MaintenanceWindowExecution,
  MaintenanceWindowExecutionTaskIdentity,
  MaintenanceWindowExecutionTaskInvocationIdentity,
  MaintenanceWindowFilter,
  MaintenanceWindowIdentity,
  MaintenanceWindowIdentityForTarget,
  MaintenanceWindowTarget,
  MaintenanceWindowTask,
  MaintenanceWindowTaskParameterValueExpression,
  MaxDocumentSizeExceeded,
  MetadataValue,
  OpsItemAccessDeniedException,
  OpsItemAlreadyExistsException,
  OpsItemDataValue,
  OpsItemInvalidParameterException,
  OpsItemLimitExceededException,
  OpsItemNotFoundException,
  OpsItemNotification,
  OpsItemRelatedItemAlreadyExistsException,
  OpsMetadataAlreadyExistsException,
  OpsMetadataInvalidArgumentException,
  OpsMetadataLimitExceededException,
  OpsMetadataNotFoundException,
  OpsMetadataTooManyUpdatesException,
  OutputSource,
  ParameterNotFound,
  Patch,
  PatchComplianceData,
  PatchFilter,
  PatchFilterGroup,
  PatchOrchestratorFilter,
  PatchRule,
  PatchRuleGroup,
  PatchSource,
  PatchStatus,
  PlatformType,
  RegistrationMetadataItem,
  RelatedOpsItem,
  ResolvedTargets,
  ResourceDataSyncAlreadyExistsException,
  ResourceDataSyncAwsOrganizationsSource,
  ResourceDataSyncCountExceededException,
  ResourceDataSyncDestinationDataSharing,
  ResourceDataSyncInvalidConfigurationException,
  ResourceDataSyncNotFoundException,
  ResourceDataSyncOrganizationalUnit,
  ResourceDataSyncS3Destination,
  ResourceDataSyncSource,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourcePolicyConflictException,
  ResourcePolicyInvalidParameterException,
  ReviewInformation,
  Runbook,
  S3OutputLocation,
  S3OutputUrl,
  ScheduledWindowExecution,
  StepExecution,
  StepExecutionFilter,
  Tag,
  Target,
  TargetInUseException,
  TargetLocation,
  TooManyTagsError,
  TooManyUpdates,
  UnsupportedOperatingSystem,
  UnsupportedPlatformType,
} from "../models/models_0";
import {
  Association,
  AssociationFilter,
  AssociationVersionInfo,
  AssociationVersionLimitExceeded,
  AttachmentContent,
  AutomationDefinitionNotApprovedException,
  AutomationDefinitionNotFoundException,
  AutomationDefinitionVersionNotFoundException,
  AutomationExecution,
  AutomationExecutionLimitExceededException,
  AutomationStepNotFoundException,
  BaselineOverride,
  CloudWatchOutputConfig,
  Command,
  CommandFilter,
  CommandInvocation,
  CommandPlugin,
  ComplianceExecutionSummary,
  ComplianceItem,
  ComplianceItemEntry,
  ComplianceStringFilter,
  ComplianceSummaryItem,
  ComplianceTypeCountLimitExceededException,
  CompliantSummary,
  CustomSchemaCountLimitExceededException,
  DescribeOpsItemsRequest,
  DescribeOpsItemsResponse,
  DescribeParametersRequest,
  DescribeParametersResult,
  DescribePatchBaselinesRequest,
  DescribePatchBaselinesResult,
  DescribePatchGroupsRequest,
  DescribePatchGroupsResult,
  DescribePatchGroupStateRequest,
  DescribePatchGroupStateResult,
  DescribePatchPropertiesRequest,
  DescribePatchPropertiesResult,
  DescribeSessionsRequest,
  DescribeSessionsResponse,
  DisassociateOpsItemRelatedItemRequest,
  DisassociateOpsItemRelatedItemResponse,
  DocumentFilter,
  DocumentIdentifier,
  DocumentKeyValuesFilter,
  DocumentMetadataResponseInfo,
  DocumentPermissionLimit,
  DocumentReviewCommentSource,
  DocumentReviewerResponseSource,
  DocumentVersionInfo,
  FeatureNotAvailableException,
  GetAutomationExecutionRequest,
  GetAutomationExecutionResult,
  GetCalendarStateRequest,
  GetCalendarStateResponse,
  GetCommandInvocationRequest,
  GetCommandInvocationResult,
  GetConnectionStatusRequest,
  GetConnectionStatusResponse,
  GetDefaultPatchBaselineRequest,
  GetDefaultPatchBaselineResult,
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceResult,
  GetDocumentRequest,
  GetDocumentResult,
  GetInventoryResult,
  GetInventorySchemaRequest,
  GetInventorySchemaResult,
  GetMaintenanceWindowExecutionRequest,
  GetMaintenanceWindowExecutionResult,
  GetMaintenanceWindowExecutionTaskInvocationRequest,
  GetMaintenanceWindowExecutionTaskInvocationResult,
  GetMaintenanceWindowExecutionTaskRequest,
  GetMaintenanceWindowExecutionTaskResult,
  GetMaintenanceWindowRequest,
  GetMaintenanceWindowResult,
  GetMaintenanceWindowTaskRequest,
  GetMaintenanceWindowTaskResult,
  GetOpsItemRequest,
  GetOpsItemResponse,
  GetOpsMetadataRequest,
  GetOpsMetadataResult,
  GetOpsSummaryResult,
  GetParameterHistoryRequest,
  GetParameterHistoryResult,
  GetParameterRequest,
  GetParameterResult,
  GetParametersByPathRequest,
  GetParametersByPathResult,
  GetParametersRequest,
  GetParametersResult,
  GetPatchBaselineForPatchGroupRequest,
  GetPatchBaselineForPatchGroupResult,
  GetPatchBaselineRequest,
  GetPatchBaselineResult,
  GetResourcePoliciesRequest,
  GetResourcePoliciesResponse,
  GetResourcePoliciesResponseEntry,
  GetServiceSettingRequest,
  GetServiceSettingResult,
  HierarchyLevelLimitExceededException,
  HierarchyTypeMismatchException,
  IncompatiblePolicyException,
  InvalidAggregatorException,
  InvalidAllowedPatternException,
  InvalidAssociation,
  InvalidAutomationExecutionParametersException,
  InvalidAutomationSignalException,
  InvalidAutomationStatusUpdateException,
  InvalidDocumentType,
  InvalidFilterOption,
  InvalidInventoryGroupException,
  InvalidInventoryItemContextException,
  InvalidItemContentException,
  InvalidKeyId,
  InvalidNotificationConfig,
  InvalidOutputFolder,
  InvalidPluginName,
  InvalidPolicyAttributeException,
  InvalidPolicyTypeException,
  InvalidResultAttributeException,
  InvalidRole,
  InventoryFilter,
  InventoryGroup,
  InventoryItem,
  InventoryItemAttribute,
  InventoryItemSchema,
  InventoryResultEntity,
  InventoryResultItem,
  InvocationDoesNotExist,
  ItemContentMismatchException,
  ItemSizeLimitExceededException,
  LabelParameterVersionRequest,
  LabelParameterVersionResult,
  ListAssociationsRequest,
  ListAssociationsResult,
  ListAssociationVersionsRequest,
  ListAssociationVersionsResult,
  ListCommandInvocationsRequest,
  ListCommandInvocationsResult,
  ListCommandsRequest,
  ListCommandsResult,
  ListComplianceItemsRequest,
  ListComplianceItemsResult,
  ListComplianceSummariesRequest,
  ListComplianceSummariesResult,
  ListDocumentMetadataHistoryRequest,
  ListDocumentMetadataHistoryResponse,
  ListDocumentsRequest,
  ListDocumentsResult,
  ListDocumentVersionsRequest,
  ListDocumentVersionsResult,
  ListInventoryEntriesRequest,
  ListInventoryEntriesResult,
  ListOpsItemEventsRequest,
  ListOpsItemEventsResponse,
  ListOpsItemRelatedItemsRequest,
  ListOpsItemRelatedItemsResponse,
  ListOpsMetadataRequest,
  ListOpsMetadataResult,
  ListResourceComplianceSummariesRequest,
  ListResourceComplianceSummariesResult,
  ListResourceDataSyncRequest,
  ListResourceDataSyncResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  MaintenanceWindowAutomationParameters,
  MaintenanceWindowLambdaParameters,
  MaintenanceWindowRunCommandParameters,
  MaintenanceWindowStepFunctionsParameters,
  MaintenanceWindowTaskInvocationParameters,
  ModifyDocumentPermissionRequest,
  ModifyDocumentPermissionResponse,
  NonCompliantSummary,
  NotificationConfig,
  NotificationEvent,
  OpsEntity,
  OpsEntityItem,
  OpsFilter,
  OpsItem,
  OpsItemEventFilter,
  OpsItemEventSummary,
  OpsItemFilter,
  OpsItemIdentity,
  OpsItemRelatedItemAssociationNotFoundException,
  OpsItemRelatedItemsFilter,
  OpsItemRelatedItemSummary,
  OpsItemSummary,
  OpsMetadata,
  OpsMetadataFilter,
  OpsResultAttribute,
  Parameter,
  ParameterAlreadyExists,
  ParameterHistory,
  ParameterInlinePolicy,
  ParameterLimitExceeded,
  ParameterMaxVersionLimitExceeded,
  ParameterMetadata,
  ParameterPatternMismatchException,
  ParametersFilter,
  ParameterStringFilter,
  ParameterVersionLabelLimitExceeded,
  ParameterVersionNotFound,
  PatchBaselineIdentity,
  PatchGroupPatchBaselineMapping,
  PoliciesLimitExceededException,
  ProgressCounters,
  PutComplianceItemsRequest,
  PutComplianceItemsResult,
  PutInventoryRequest,
  PutInventoryResult,
  PutParameterRequest,
  PutParameterResult,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  RegisterDefaultPatchBaselineRequest,
  RegisterDefaultPatchBaselineResult,
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterPatchBaselineForPatchGroupResult,
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
  RegisterTaskWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowResult,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
  ResetServiceSettingRequest,
  ResetServiceSettingResult,
  ResourceComplianceSummaryItem,
  ResourceDataSyncItem,
  ResourceDataSyncSourceWithState,
  ResourcePolicyLimitExceededException,
  ResultAttribute,
  ResumeSessionRequest,
  ResumeSessionResponse,
  SendAutomationSignalRequest,
  SendAutomationSignalResult,
  SendCommandRequest,
  SendCommandResult,
  ServiceSetting,
  ServiceSettingNotFound,
  Session,
  SessionFilter,
  SessionManagerOutputUrl,
  SeveritySummary,
  StartAssociationsOnceRequest,
  StartAssociationsOnceResult,
  StartAutomationExecutionRequest,
  StartAutomationExecutionResult,
  StartChangeRequestExecutionRequest,
  StartChangeRequestExecutionResult,
  StartSessionRequest,
  StartSessionResponse,
  StopAutomationExecutionRequest,
  StopAutomationExecutionResult,
  SubTypeCountLimitExceededException,
  TargetNotConnected,
  TerminateSessionRequest,
  TerminateSessionResponse,
  TotalSizeLimitExceededException,
  UnlabelParameterVersionRequest,
  UnlabelParameterVersionResult,
  UnsupportedCalendarException,
  UnsupportedFeatureRequiredException,
  UnsupportedInventoryItemContextException,
  UnsupportedInventorySchemaVersionException,
  UnsupportedParameterType,
} from "../models/models_1";
import {
  DocumentDefaultVersionDescription,
  DocumentReviews,
  DocumentVersionLimitExceeded,
  DuplicateDocumentContent,
  DuplicateDocumentVersionName,
  GetInventoryRequest,
  GetOpsSummaryRequest,
  InvalidUpdate,
  InventoryAggregator,
  OpsAggregator,
  OpsMetadataKeyLimitExceededException,
  ResourceDataSyncConflictException,
  StatusUnchanged,
  UpdateAssociationRequest,
  UpdateAssociationResult,
  UpdateAssociationStatusRequest,
  UpdateAssociationStatusResult,
  UpdateDocumentDefaultVersionRequest,
  UpdateDocumentDefaultVersionResult,
  UpdateDocumentMetadataRequest,
  UpdateDocumentMetadataResponse,
  UpdateDocumentRequest,
  UpdateDocumentResult,
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowResult,
  UpdateMaintenanceWindowTargetRequest,
  UpdateMaintenanceWindowTargetResult,
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskResult,
  UpdateManagedInstanceRoleRequest,
  UpdateManagedInstanceRoleResult,
  UpdateOpsItemRequest,
  UpdateOpsItemResponse,
  UpdateOpsMetadataRequest,
  UpdateOpsMetadataResult,
  UpdatePatchBaselineRequest,
  UpdatePatchBaselineResult,
  UpdateResourceDataSyncRequest,
  UpdateResourceDataSyncResult,
  UpdateServiceSettingRequest,
  UpdateServiceSettingResult,
} from "../models/models_2";
import { SSMServiceException as __BaseException } from "../models/SSMServiceException";

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(se_AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateOpsItemRelatedItemCommand
 */
export const se_AssociateOpsItemRelatedItemCommand = async (
  input: AssociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.AssociateOpsItemRelatedItem",
  };
  let body: any;
  body = JSON.stringify(se_AssociateOpsItemRelatedItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelCommandCommand
 */
export const se_CancelCommandCommand = async (
  input: CancelCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CancelCommand",
  };
  let body: any;
  body = JSON.stringify(se_CancelCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelMaintenanceWindowExecutionCommand
 */
export const se_CancelMaintenanceWindowExecutionCommand = async (
  input: CancelMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CancelMaintenanceWindowExecution",
  };
  let body: any;
  body = JSON.stringify(se_CancelMaintenanceWindowExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateActivationCommand
 */
export const se_CreateActivationCommand = async (
  input: CreateActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateActivation",
  };
  let body: any;
  body = JSON.stringify(se_CreateActivationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAssociationCommand
 */
export const se_CreateAssociationCommand = async (
  input: CreateAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateAssociation",
  };
  let body: any;
  body = JSON.stringify(se_CreateAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAssociationBatchCommand
 */
export const se_CreateAssociationBatchCommand = async (
  input: CreateAssociationBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateAssociationBatch",
  };
  let body: any;
  body = JSON.stringify(se_CreateAssociationBatchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDocumentCommand
 */
export const se_CreateDocumentCommand = async (
  input: CreateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateDocument",
  };
  let body: any;
  body = JSON.stringify(se_CreateDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMaintenanceWindowCommand
 */
export const se_CreateMaintenanceWindowCommand = async (
  input: CreateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_CreateMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOpsItemCommand
 */
export const se_CreateOpsItemCommand = async (
  input: CreateOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateOpsItem",
  };
  let body: any;
  body = JSON.stringify(se_CreateOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOpsMetadataCommand
 */
export const se_CreateOpsMetadataCommand = async (
  input: CreateOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(se_CreateOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePatchBaselineCommand
 */
export const se_CreatePatchBaselineCommand = async (
  input: CreatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreatePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_CreatePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResourceDataSyncCommand
 */
export const se_CreateResourceDataSyncCommand = async (
  input: CreateResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(se_CreateResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteActivationCommand
 */
export const se_DeleteActivationCommand = async (
  input: DeleteActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteActivation",
  };
  let body: any;
  body = JSON.stringify(se_DeleteActivationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssociationCommand
 */
export const se_DeleteAssociationCommand = async (
  input: DeleteAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteAssociation",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDocumentCommand
 */
export const se_DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteDocument",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInventoryCommand
 */
export const se_DeleteInventoryCommand = async (
  input: DeleteInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteInventory",
  };
  let body: any;
  body = JSON.stringify(se_DeleteInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMaintenanceWindowCommand
 */
export const se_DeleteMaintenanceWindowCommand = async (
  input: DeleteMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOpsMetadataCommand
 */
export const se_DeleteOpsMetadataCommand = async (
  input: DeleteOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(se_DeleteOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParameterCommand
 */
export const se_DeleteParameterCommand = async (
  input: DeleteParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteParameter",
  };
  let body: any;
  body = JSON.stringify(se_DeleteParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParametersCommand
 */
export const se_DeleteParametersCommand = async (
  input: DeleteParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteParameters",
  };
  let body: any;
  body = JSON.stringify(se_DeleteParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePatchBaselineCommand
 */
export const se_DeletePatchBaselineCommand = async (
  input: DeletePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeletePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_DeletePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceDataSyncCommand
 */
export const se_DeleteResourceDataSyncCommand = async (
  input: DeleteResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterManagedInstanceCommand
 */
export const se_DeregisterManagedInstanceCommand = async (
  input: DeregisterManagedInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterManagedInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterManagedInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand
 */
export const se_DeregisterPatchBaselineForPatchGroupCommand = async (
  input: DeregisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand
 */
export const se_DeregisterTargetFromMaintenanceWindowCommand = async (
  input: DeregisterTargetFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterTargetFromMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterTargetFromMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand
 */
export const se_DeregisterTaskFromMaintenanceWindowCommand = async (
  input: DeregisterTaskFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterTaskFromMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterTaskFromMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeActivationsCommand
 */
export const se_DescribeActivationsCommand = async (
  input: DescribeActivationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeActivations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeActivationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationCommand
 */
export const se_DescribeAssociationCommand = async (
  input: DescribeAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociation",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionsCommand
 */
export const se_DescribeAssociationExecutionsCommand = async (
  input: DescribeAssociationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociationExecutions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAssociationExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionTargetsCommand
 */
export const se_DescribeAssociationExecutionTargetsCommand = async (
  input: DescribeAssociationExecutionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociationExecutionTargets",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAssociationExecutionTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutomationExecutionsCommand
 */
export const se_DescribeAutomationExecutionsCommand = async (
  input: DescribeAutomationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAutomationExecutions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAutomationExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutomationStepExecutionsCommand
 */
export const se_DescribeAutomationStepExecutionsCommand = async (
  input: DescribeAutomationStepExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAutomationStepExecutions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAutomationStepExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAvailablePatchesCommand
 */
export const se_DescribeAvailablePatchesCommand = async (
  input: DescribeAvailablePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAvailablePatches",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAvailablePatchesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentCommand
 */
export const se_DescribeDocumentCommand = async (
  input: DescribeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeDocument",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentPermissionCommand
 */
export const se_DescribeDocumentPermissionCommand = async (
  input: DescribeDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeDocumentPermission",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDocumentPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand
 */
export const se_DescribeEffectiveInstanceAssociationsCommand = async (
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeEffectiveInstanceAssociations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEffectiveInstanceAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand
 */
export const se_DescribeEffectivePatchesForPatchBaselineCommand = async (
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeEffectivePatchesForPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEffectivePatchesForPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceAssociationsStatusCommand
 */
export const se_DescribeInstanceAssociationsStatusCommand = async (
  input: DescribeInstanceAssociationsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstanceAssociationsStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstanceAssociationsStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceInformationCommand
 */
export const se_DescribeInstanceInformationCommand = async (
  input: DescribeInstanceInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstanceInformation",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstanceInformationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchesCommand
 */
export const se_DescribeInstancePatchesCommand = async (
  input: DescribeInstancePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatches",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstancePatchesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesCommand
 */
export const se_DescribeInstancePatchStatesCommand = async (
  input: DescribeInstancePatchStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatchStates",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstancePatchStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand
 */
export const se_DescribeInstancePatchStatesForPatchGroupCommand = async (
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatchStatesForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstancePatchStatesForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInventoryDeletionsCommand
 */
export const se_DescribeInventoryDeletionsCommand = async (
  input: DescribeInventoryDeletionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInventoryDeletions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInventoryDeletionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand
 */
export const se_DescribeMaintenanceWindowExecutionsCommand = async (
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand
 */
export const se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowExecutionTaskInvocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand
 */
export const se_DescribeMaintenanceWindowExecutionTasksCommand = async (
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTasks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowExecutionTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsCommand
 */
export const se_DescribeMaintenanceWindowsCommand = async (
  input: DescribeMaintenanceWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindows",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand
 */
export const se_DescribeMaintenanceWindowScheduleCommand = async (
  input: DescribeMaintenanceWindowScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowSchedule",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand
 */
export const se_DescribeMaintenanceWindowsForTargetCommand = async (
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowsForTarget",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowsForTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand
 */
export const se_DescribeMaintenanceWindowTargetsCommand = async (
  input: DescribeMaintenanceWindowTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTargets",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTasksCommand
 */
export const se_DescribeMaintenanceWindowTasksCommand = async (
  input: DescribeMaintenanceWindowTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTasks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceWindowTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOpsItemsCommand
 */
export const se_DescribeOpsItemsCommand = async (
  input: DescribeOpsItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeOpsItems",
  };
  let body: any;
  body = JSON.stringify(se_DescribeOpsItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParametersCommand
 */
export const se_DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeParameters",
  };
  let body: any;
  body = JSON.stringify(se_DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchBaselinesCommand
 */
export const se_DescribePatchBaselinesCommand = async (
  input: DescribePatchBaselinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchBaselines",
  };
  let body: any;
  body = JSON.stringify(se_DescribePatchBaselinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchGroupsCommand
 */
export const se_DescribePatchGroupsCommand = async (
  input: DescribePatchGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchGroups",
  };
  let body: any;
  body = JSON.stringify(se_DescribePatchGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchGroupStateCommand
 */
export const se_DescribePatchGroupStateCommand = async (
  input: DescribePatchGroupStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchGroupState",
  };
  let body: any;
  body = JSON.stringify(se_DescribePatchGroupStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchPropertiesCommand
 */
export const se_DescribePatchPropertiesCommand = async (
  input: DescribePatchPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchProperties",
  };
  let body: any;
  body = JSON.stringify(se_DescribePatchPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSessionsCommand
 */
export const se_DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeSessions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateOpsItemRelatedItemCommand
 */
export const se_DisassociateOpsItemRelatedItemCommand = async (
  input: DisassociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DisassociateOpsItemRelatedItem",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateOpsItemRelatedItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutomationExecutionCommand
 */
export const se_GetAutomationExecutionCommand = async (
  input: GetAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(se_GetAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCalendarStateCommand
 */
export const se_GetCalendarStateCommand = async (
  input: GetCalendarStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetCalendarState",
  };
  let body: any;
  body = JSON.stringify(se_GetCalendarStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommandInvocationCommand
 */
export const se_GetCommandInvocationCommand = async (
  input: GetCommandInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetCommandInvocation",
  };
  let body: any;
  body = JSON.stringify(se_GetCommandInvocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectionStatusCommand
 */
export const se_GetConnectionStatusCommand = async (
  input: GetConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetConnectionStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetConnectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDefaultPatchBaselineCommand
 */
export const se_GetDefaultPatchBaselineCommand = async (
  input: GetDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDefaultPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_GetDefaultPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand
 */
export const se_GetDeployablePatchSnapshotForInstanceCommand = async (
  input: GetDeployablePatchSnapshotForInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDeployablePatchSnapshotForInstance",
  };
  let body: any;
  body = JSON.stringify(se_GetDeployablePatchSnapshotForInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentCommand
 */
export const se_GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDocument",
  };
  let body: any;
  body = JSON.stringify(se_GetDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInventoryCommand
 */
export const se_GetInventoryCommand = async (
  input: GetInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetInventory",
  };
  let body: any;
  body = JSON.stringify(se_GetInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInventorySchemaCommand
 */
export const se_GetInventorySchemaCommand = async (
  input: GetInventorySchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetInventorySchema",
  };
  let body: any;
  body = JSON.stringify(se_GetInventorySchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowCommand
 */
export const se_GetMaintenanceWindowCommand = async (
  input: GetMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_GetMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionCommand
 */
export const se_GetMaintenanceWindowExecutionCommand = async (
  input: GetMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecution",
  };
  let body: any;
  body = JSON.stringify(se_GetMaintenanceWindowExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand
 */
export const se_GetMaintenanceWindowExecutionTaskCommand = async (
  input: GetMaintenanceWindowExecutionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTask",
  };
  let body: any;
  body = JSON.stringify(se_GetMaintenanceWindowExecutionTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand
 */
export const se_GetMaintenanceWindowExecutionTaskInvocationCommand = async (
  input: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation",
  };
  let body: any;
  body = JSON.stringify(se_GetMaintenanceWindowExecutionTaskInvocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowTaskCommand
 */
export const se_GetMaintenanceWindowTaskCommand = async (
  input: GetMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowTask",
  };
  let body: any;
  body = JSON.stringify(se_GetMaintenanceWindowTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsItemCommand
 */
export const se_GetOpsItemCommand = async (
  input: GetOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsItem",
  };
  let body: any;
  body = JSON.stringify(se_GetOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsMetadataCommand
 */
export const se_GetOpsMetadataCommand = async (
  input: GetOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(se_GetOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsSummaryCommand
 */
export const se_GetOpsSummaryCommand = async (
  input: GetOpsSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsSummary",
  };
  let body: any;
  body = JSON.stringify(se_GetOpsSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParameterCommand
 */
export const se_GetParameterCommand = async (
  input: GetParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameter",
  };
  let body: any;
  body = JSON.stringify(se_GetParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParameterHistoryCommand
 */
export const se_GetParameterHistoryCommand = async (
  input: GetParameterHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameterHistory",
  };
  let body: any;
  body = JSON.stringify(se_GetParameterHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersCommand
 */
export const se_GetParametersCommand = async (
  input: GetParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameters",
  };
  let body: any;
  body = JSON.stringify(se_GetParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersByPathCommand
 */
export const se_GetParametersByPathCommand = async (
  input: GetParametersByPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParametersByPath",
  };
  let body: any;
  body = JSON.stringify(se_GetParametersByPathRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPatchBaselineCommand
 */
export const se_GetPatchBaselineCommand = async (
  input: GetPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_GetPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPatchBaselineForPatchGroupCommand
 */
export const se_GetPatchBaselineForPatchGroupCommand = async (
  input: GetPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(se_GetPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(se_GetResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceSettingCommand
 */
export const se_GetServiceSettingCommand = async (
  input: GetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetServiceSetting",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LabelParameterVersionCommand
 */
export const se_LabelParameterVersionCommand = async (
  input: LabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.LabelParameterVersion",
  };
  let body: any;
  body = JSON.stringify(se_LabelParameterVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationsCommand
 */
export const se_ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListAssociations",
  };
  let body: any;
  body = JSON.stringify(se_ListAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationVersionsCommand
 */
export const se_ListAssociationVersionsCommand = async (
  input: ListAssociationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListAssociationVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListAssociationVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCommandInvocationsCommand
 */
export const se_ListCommandInvocationsCommand = async (
  input: ListCommandInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListCommandInvocations",
  };
  let body: any;
  body = JSON.stringify(se_ListCommandInvocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCommandsCommand
 */
export const se_ListCommandsCommand = async (
  input: ListCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListCommands",
  };
  let body: any;
  body = JSON.stringify(se_ListCommandsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceItemsCommand
 */
export const se_ListComplianceItemsCommand = async (
  input: ListComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListComplianceItems",
  };
  let body: any;
  body = JSON.stringify(se_ListComplianceItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceSummariesCommand
 */
export const se_ListComplianceSummariesCommand = async (
  input: ListComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListComplianceSummaries",
  };
  let body: any;
  body = JSON.stringify(se_ListComplianceSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentMetadataHistoryCommand
 */
export const se_ListDocumentMetadataHistoryCommand = async (
  input: ListDocumentMetadataHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocumentMetadataHistory",
  };
  let body: any;
  body = JSON.stringify(se_ListDocumentMetadataHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentsCommand
 */
export const se_ListDocumentsCommand = async (
  input: ListDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocuments",
  };
  let body: any;
  body = JSON.stringify(se_ListDocumentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentVersionsCommand
 */
export const se_ListDocumentVersionsCommand = async (
  input: ListDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocumentVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListDocumentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInventoryEntriesCommand
 */
export const se_ListInventoryEntriesCommand = async (
  input: ListInventoryEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListInventoryEntries",
  };
  let body: any;
  body = JSON.stringify(se_ListInventoryEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsItemEventsCommand
 */
export const se_ListOpsItemEventsCommand = async (
  input: ListOpsItemEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsItemEvents",
  };
  let body: any;
  body = JSON.stringify(se_ListOpsItemEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsItemRelatedItemsCommand
 */
export const se_ListOpsItemRelatedItemsCommand = async (
  input: ListOpsItemRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsItemRelatedItems",
  };
  let body: any;
  body = JSON.stringify(se_ListOpsItemRelatedItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsMetadataCommand
 */
export const se_ListOpsMetadataCommand = async (
  input: ListOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(se_ListOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceComplianceSummariesCommand
 */
export const se_ListResourceComplianceSummariesCommand = async (
  input: ListResourceComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListResourceComplianceSummaries",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceComplianceSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceDataSyncCommand
 */
export const se_ListResourceDataSyncCommand = async (
  input: ListResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyDocumentPermissionCommand
 */
export const se_ModifyDocumentPermissionCommand = async (
  input: ModifyDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ModifyDocumentPermission",
  };
  let body: any;
  body = JSON.stringify(se_ModifyDocumentPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutComplianceItemsCommand
 */
export const se_PutComplianceItemsCommand = async (
  input: PutComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutComplianceItems",
  };
  let body: any;
  body = JSON.stringify(se_PutComplianceItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInventoryCommand
 */
export const se_PutInventoryCommand = async (
  input: PutInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutInventory",
  };
  let body: any;
  body = JSON.stringify(se_PutInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutParameterCommand
 */
export const se_PutParameterCommand = async (
  input: PutParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutParameter",
  };
  let body: any;
  body = JSON.stringify(se_PutParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDefaultPatchBaselineCommand
 */
export const se_RegisterDefaultPatchBaselineCommand = async (
  input: RegisterDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterDefaultPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_RegisterDefaultPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand
 */
export const se_RegisterPatchBaselineForPatchGroupCommand = async (
  input: RegisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(se_RegisterPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand
 */
export const se_RegisterTargetWithMaintenanceWindowCommand = async (
  input: RegisterTargetWithMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterTargetWithMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_RegisterTargetWithMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand
 */
export const se_RegisterTaskWithMaintenanceWindowCommand = async (
  input: RegisterTaskWithMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterTaskWithMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_RegisterTaskWithMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetServiceSettingCommand
 */
export const se_ResetServiceSettingCommand = async (
  input: ResetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ResetServiceSetting",
  };
  let body: any;
  body = JSON.stringify(se_ResetServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResumeSessionCommand
 */
export const se_ResumeSessionCommand = async (
  input: ResumeSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ResumeSession",
  };
  let body: any;
  body = JSON.stringify(se_ResumeSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendAutomationSignalCommand
 */
export const se_SendAutomationSignalCommand = async (
  input: SendAutomationSignalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.SendAutomationSignal",
  };
  let body: any;
  body = JSON.stringify(se_SendAutomationSignalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendCommandCommand
 */
export const se_SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.SendCommand",
  };
  let body: any;
  body = JSON.stringify(se_SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAssociationsOnceCommand
 */
export const se_StartAssociationsOnceCommand = async (
  input: StartAssociationsOnceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartAssociationsOnce",
  };
  let body: any;
  body = JSON.stringify(se_StartAssociationsOnceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAutomationExecutionCommand
 */
export const se_StartAutomationExecutionCommand = async (
  input: StartAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(se_StartAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartChangeRequestExecutionCommand
 */
export const se_StartChangeRequestExecutionCommand = async (
  input: StartChangeRequestExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartChangeRequestExecution",
  };
  let body: any;
  body = JSON.stringify(se_StartChangeRequestExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSessionCommand
 */
export const se_StartSessionCommand = async (
  input: StartSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartSession",
  };
  let body: any;
  body = JSON.stringify(se_StartSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAutomationExecutionCommand
 */
export const se_StopAutomationExecutionCommand = async (
  input: StopAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StopAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(se_StopAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateSessionCommand
 */
export const se_TerminateSessionCommand = async (
  input: TerminateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.TerminateSession",
  };
  let body: any;
  body = JSON.stringify(se_TerminateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnlabelParameterVersionCommand
 */
export const se_UnlabelParameterVersionCommand = async (
  input: UnlabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UnlabelParameterVersion",
  };
  let body: any;
  body = JSON.stringify(se_UnlabelParameterVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAssociationCommand
 */
export const se_UpdateAssociationCommand = async (
  input: UpdateAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateAssociation",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAssociationStatusCommand
 */
export const se_UpdateAssociationStatusCommand = async (
  input: UpdateAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateAssociationStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAssociationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDocumentCommand
 */
export const se_UpdateDocumentCommand = async (
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocument",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDocumentDefaultVersionCommand
 */
export const se_UpdateDocumentDefaultVersionCommand = async (
  input: UpdateDocumentDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocumentDefaultVersion",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDocumentDefaultVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDocumentMetadataCommand
 */
export const se_UpdateDocumentMetadataCommand = async (
  input: UpdateDocumentMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocumentMetadata",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDocumentMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowCommand
 */
export const se_UpdateMaintenanceWindowCommand = async (
  input: UpdateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(se_UpdateMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTargetCommand
 */
export const se_UpdateMaintenanceWindowTargetCommand = async (
  input: UpdateMaintenanceWindowTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTarget",
  };
  let body: any;
  body = JSON.stringify(se_UpdateMaintenanceWindowTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTaskCommand
 */
export const se_UpdateMaintenanceWindowTaskCommand = async (
  input: UpdateMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTask",
  };
  let body: any;
  body = JSON.stringify(se_UpdateMaintenanceWindowTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateManagedInstanceRoleCommand
 */
export const se_UpdateManagedInstanceRoleCommand = async (
  input: UpdateManagedInstanceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateManagedInstanceRole",
  };
  let body: any;
  body = JSON.stringify(se_UpdateManagedInstanceRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateOpsItemCommand
 */
export const se_UpdateOpsItemCommand = async (
  input: UpdateOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateOpsItem",
  };
  let body: any;
  body = JSON.stringify(se_UpdateOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateOpsMetadataCommand
 */
export const se_UpdateOpsMetadataCommand = async (
  input: UpdateOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(se_UpdateOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePatchBaselineCommand
 */
export const se_UpdatePatchBaselineCommand = async (
  input: UpdatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdatePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResourceDataSyncCommand
 */
export const se_UpdateResourceDataSyncCommand = async (
  input: UpdateResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(se_UpdateResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceSettingCommand
 */
export const se_UpdateServiceSettingCommand = async (
  input: UpdateServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateServiceSetting",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsToResourceResult(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await de_InvalidResourceTypeRes(parsedOutput, context);
    case "TooManyTagsError":
    case "com.amazonaws.ssm#TooManyTagsError":
      throw await de_TooManyTagsErrorRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateOpsItemRelatedItemCommand
 */
export const de_AssociateOpsItemRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOpsItemRelatedItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateOpsItemRelatedItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateOpsItemRelatedItemResponse(data, context);
  const response: AssociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateOpsItemRelatedItemCommandError
 */
const de_AssociateOpsItemRelatedItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOpsItemRelatedItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
    case "OpsItemRelatedItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemRelatedItemAlreadyExistsException":
      throw await de_OpsItemRelatedItemAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelCommandCommand
 */
export const de_CancelCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelCommandResult(data, context);
  const response: CancelCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelCommandCommandError
 */
const de_CancelCommandCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCommandCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateInstanceId":
    case "com.amazonaws.ssm#DuplicateInstanceId":
      throw await de_DuplicateInstanceIdRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await de_InvalidCommandIdRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand
 */
export const de_CancelMaintenanceWindowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMaintenanceWindowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelMaintenanceWindowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelMaintenanceWindowExecutionResult(data, context);
  const response: CancelMaintenanceWindowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError
 */
const de_CancelMaintenanceWindowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMaintenanceWindowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateActivationCommand
 */
export const de_CreateActivationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateActivationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateActivationResult(data, context);
  const response: CreateActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateActivationCommandError
 */
const de_CreateActivationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await de_InvalidParametersRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAssociationCommand
 */
export const de_CreateAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAssociationResult(data, context);
  const response: CreateAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAssociationCommandError
 */
const de_CreateAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationAlreadyExists":
    case "com.amazonaws.ssm#AssociationAlreadyExists":
      throw await de_AssociationAlreadyExistsRes(parsedOutput, context);
    case "AssociationLimitExceeded":
    case "com.amazonaws.ssm#AssociationLimitExceeded":
      throw await de_AssociationLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await de_InvalidOutputLocationRes(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await de_InvalidParametersRes(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await de_InvalidScheduleRes(parsedOutput, context);
    case "InvalidTag":
    case "com.amazonaws.ssm#InvalidTag":
      throw await de_InvalidTagRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await de_InvalidTargetRes(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await de_InvalidTargetMapsRes(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAssociationBatchCommand
 */
export const de_CreateAssociationBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAssociationBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAssociationBatchResult(data, context);
  const response: CreateAssociationBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAssociationBatchCommandError
 */
const de_CreateAssociationBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationLimitExceeded":
    case "com.amazonaws.ssm#AssociationLimitExceeded":
      throw await de_AssociationLimitExceededRes(parsedOutput, context);
    case "DuplicateInstanceId":
    case "com.amazonaws.ssm#DuplicateInstanceId":
      throw await de_DuplicateInstanceIdRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await de_InvalidOutputLocationRes(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await de_InvalidParametersRes(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await de_InvalidScheduleRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await de_InvalidTargetRes(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await de_InvalidTargetMapsRes(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDocumentCommand
 */
export const de_CreateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDocumentResult(data, context);
  const response: CreateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDocumentCommandError
 */
const de_CreateDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentAlreadyExists":
    case "com.amazonaws.ssm#DocumentAlreadyExists":
      throw await de_DocumentAlreadyExistsRes(parsedOutput, context);
    case "DocumentLimitExceeded":
    case "com.amazonaws.ssm#DocumentLimitExceeded":
      throw await de_DocumentLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocumentContent":
    case "com.amazonaws.ssm#InvalidDocumentContent":
      throw await de_InvalidDocumentContentRes(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMaintenanceWindowCommand
 */
export const de_CreateMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMaintenanceWindowResult(data, context);
  const response: CreateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMaintenanceWindowCommandError
 */
const de_CreateMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateOpsItemCommand
 */
export const de_CreateOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOpsItemResponse(data, context);
  const response: CreateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateOpsItemCommandError
 */
const de_CreateOpsItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
    case "OpsItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
      throw await de_OpsItemAlreadyExistsExceptionRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateOpsMetadataCommand
 */
export const de_CreateOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOpsMetadataResult(data, context);
  const response: CreateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateOpsMetadataCommandError
 */
const de_CreateOpsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsMetadataAlreadyExistsException":
    case "com.amazonaws.ssm#OpsMetadataAlreadyExistsException":
      throw await de_OpsMetadataAlreadyExistsExceptionRes(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
    case "OpsMetadataLimitExceededException":
    case "com.amazonaws.ssm#OpsMetadataLimitExceededException":
      throw await de_OpsMetadataLimitExceededExceptionRes(parsedOutput, context);
    case "OpsMetadataTooManyUpdatesException":
    case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
      throw await de_OpsMetadataTooManyUpdatesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePatchBaselineCommand
 */
export const de_CreatePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePatchBaselineResult(data, context);
  const response: CreatePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePatchBaselineCommandError
 */
const de_CreatePatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateResourceDataSyncCommand
 */
export const de_CreateResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResourceDataSyncResult(data, context);
  const response: CreateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResourceDataSyncCommandError
 */
const de_CreateResourceDataSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDataSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceDataSyncAlreadyExistsException":
    case "com.amazonaws.ssm#ResourceDataSyncAlreadyExistsException":
      throw await de_ResourceDataSyncAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceDataSyncCountExceededException":
    case "com.amazonaws.ssm#ResourceDataSyncCountExceededException":
      throw await de_ResourceDataSyncCountExceededExceptionRes(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteActivationCommand
 */
export const de_DeleteActivationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteActivationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteActivationResult(data, context);
  const response: DeleteActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteActivationCommandError
 */
const de_DeleteActivationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidActivation":
    case "com.amazonaws.ssm#InvalidActivation":
      throw await de_InvalidActivationRes(parsedOutput, context);
    case "InvalidActivationId":
    case "com.amazonaws.ssm#InvalidActivationId":
      throw await de_InvalidActivationIdRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAssociationCommand
 */
export const de_DeleteAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAssociationResult(data, context);
  const response: DeleteAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAssociationCommandError
 */
const de_DeleteAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDocumentCommand
 */
export const de_DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDocumentResult(data, context);
  const response: DeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDocumentCommandError
 */
const de_DeleteDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociatedInstances":
    case "com.amazonaws.ssm#AssociatedInstances":
      throw await de_AssociatedInstancesRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await de_InvalidDocumentOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInventoryCommand
 */
export const de_DeleteInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInventoryResult(data, context);
  const response: DeleteInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInventoryCommandError
 */
const de_DeleteInventoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInventoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDeleteInventoryParametersException":
    case "com.amazonaws.ssm#InvalidDeleteInventoryParametersException":
      throw await de_InvalidDeleteInventoryParametersExceptionRes(parsedOutput, context);
    case "InvalidInventoryRequestException":
    case "com.amazonaws.ssm#InvalidInventoryRequestException":
      throw await de_InvalidInventoryRequestExceptionRes(parsedOutput, context);
    case "InvalidOptionException":
    case "com.amazonaws.ssm#InvalidOptionException":
      throw await de_InvalidOptionExceptionRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMaintenanceWindowCommand
 */
export const de_DeleteMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMaintenanceWindowResult(data, context);
  const response: DeleteMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMaintenanceWindowCommandError
 */
const de_DeleteMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteOpsMetadataCommand
 */
export const de_DeleteOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteOpsMetadataResult(data, context);
  const response: DeleteOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOpsMetadataCommandError
 */
const de_DeleteOpsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteParameterCommand
 */
export const de_DeleteParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteParameterResult(data, context);
  const response: DeleteParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteParameterCommandError
 */
const de_DeleteParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await de_ParameterNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteParametersCommand
 */
export const de_DeleteParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteParametersResult(data, context);
  const response: DeleteParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteParametersCommandError
 */
const de_DeleteParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePatchBaselineCommand
 */
export const de_DeletePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePatchBaselineResult(data, context);
  const response: DeletePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePatchBaselineCommandError
 */
const de_DeletePatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.ssm#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourceDataSyncCommand
 */
export const de_DeleteResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourceDataSyncResult(data, context);
  const response: DeleteResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourceDataSyncCommandError
 */
const de_DeleteResourceDataSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDataSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourcePolicyConflictException":
    case "com.amazonaws.ssm#ResourcePolicyConflictException":
      throw await de_ResourcePolicyConflictExceptionRes(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterManagedInstanceCommand
 */
export const de_DeregisterManagedInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterManagedInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterManagedInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterManagedInstanceResult(data, context);
  const response: DeregisterManagedInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterManagedInstanceCommandError
 */
const de_DeregisterManagedInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterManagedInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand
 */
export const de_DeregisterPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterPatchBaselineForPatchGroupResult(data, context);
  const response: DeregisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError
 */
const de_DeregisterPatchBaselineForPatchGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand
 */
export const de_DeregisterTargetFromMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterTargetFromMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTargetFromMaintenanceWindowResult(data, context);
  const response: DeregisterTargetFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError
 */
const de_DeregisterTargetFromMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "TargetInUseException":
    case "com.amazonaws.ssm#TargetInUseException":
      throw await de_TargetInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand
 */
export const de_DeregisterTaskFromMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterTaskFromMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTaskFromMaintenanceWindowResult(data, context);
  const response: DeregisterTaskFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError
 */
const de_DeregisterTaskFromMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeActivationsCommand
 */
export const de_DescribeActivationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeActivationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeActivationsResult(data, context);
  const response: DescribeActivationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeActivationsCommandError
 */
const de_DescribeActivationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAssociationCommand
 */
export const de_DescribeAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssociationResult(data, context);
  const response: DescribeAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAssociationCommandError
 */
const de_DescribeAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAssociationVersion":
    case "com.amazonaws.ssm#InvalidAssociationVersion":
      throw await de_InvalidAssociationVersionRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionsCommand
 */
export const de_DescribeAssociationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssociationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssociationExecutionsResult(data, context);
  const response: DescribeAssociationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionsCommandError
 */
const de_DescribeAssociationExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand
 */
export const de_DescribeAssociationExecutionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssociationExecutionTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssociationExecutionTargetsResult(data, context);
  const response: DescribeAssociationExecutionTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError
 */
const de_DescribeAssociationExecutionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "AssociationExecutionDoesNotExist":
    case "com.amazonaws.ssm#AssociationExecutionDoesNotExist":
      throw await de_AssociationExecutionDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAutomationExecutionsCommand
 */
export const de_DescribeAutomationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutomationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutomationExecutionsResult(data, context);
  const response: DescribeAutomationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAutomationExecutionsCommandError
 */
const de_DescribeAutomationExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await de_InvalidFilterValueRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAutomationStepExecutionsCommand
 */
export const de_DescribeAutomationStepExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutomationStepExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutomationStepExecutionsResult(data, context);
  const response: DescribeAutomationStepExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError
 */
const de_DescribeAutomationStepExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationExecutionNotFoundException":
    case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
      throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await de_InvalidFilterValueRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAvailablePatchesCommand
 */
export const de_DescribeAvailablePatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailablePatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAvailablePatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAvailablePatchesResult(data, context);
  const response: DescribeAvailablePatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAvailablePatchesCommandError
 */
const de_DescribeAvailablePatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailablePatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDocumentCommand
 */
export const de_DescribeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDocumentResult(data, context);
  const response: DescribeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDocumentCommandError
 */
const de_DescribeDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDocumentPermissionCommand
 */
export const de_DescribeDocumentPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDocumentPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDocumentPermissionResponse(data, context);
  const response: DescribeDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDocumentPermissionCommandError
 */
const de_DescribeDocumentPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await de_InvalidDocumentOperationRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidPermissionType":
    case "com.amazonaws.ssm#InvalidPermissionType":
      throw await de_InvalidPermissionTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand
 */
export const de_DescribeEffectiveInstanceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEffectiveInstanceAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEffectiveInstanceAssociationsResult(data, context);
  const response: DescribeEffectiveInstanceAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError
 */
const de_DescribeEffectiveInstanceAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand
 */
export const de_DescribeEffectivePatchesForPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEffectivePatchesForPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEffectivePatchesForPatchBaselineResult(data, context);
  const response: DescribeEffectivePatchesForPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError
 */
const de_DescribeEffectivePatchesForPatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "UnsupportedOperatingSystem":
    case "com.amazonaws.ssm#UnsupportedOperatingSystem":
      throw await de_UnsupportedOperatingSystemRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand
 */
export const de_DescribeInstanceAssociationsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceAssociationsStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstanceAssociationsStatusResult(data, context);
  const response: DescribeInstanceAssociationsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError
 */
const de_DescribeInstanceAssociationsStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstanceInformationCommand
 */
export const de_DescribeInstanceInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstanceInformationResult(data, context);
  const response: DescribeInstanceInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstanceInformationCommandError
 */
const de_DescribeInstanceInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidInstanceInformationFilterValue":
    case "com.amazonaws.ssm#InvalidInstanceInformationFilterValue":
      throw await de_InvalidInstanceInformationFilterValueRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstancePatchesCommand
 */
export const de_DescribeInstancePatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancePatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstancePatchesResult(data, context);
  const response: DescribeInstancePatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstancePatchesCommandError
 */
const de_DescribeInstancePatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesCommand
 */
export const de_DescribeInstancePatchStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancePatchStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstancePatchStatesResult(data, context);
  const response: DescribeInstancePatchStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesCommandError
 */
const de_DescribeInstancePatchStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand
 */
export const de_DescribeInstancePatchStatesForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancePatchStatesForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstancePatchStatesForPatchGroupResult(data, context);
  const response: DescribeInstancePatchStatesForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError
 */
const de_DescribeInstancePatchStatesForPatchGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInventoryDeletionsCommand
 */
export const de_DescribeInventoryDeletionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInventoryDeletionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInventoryDeletionsResult(data, context);
  const response: DescribeInventoryDeletionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInventoryDeletionsCommandError
 */
const de_DescribeInventoryDeletionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDeletionIdException":
    case "com.amazonaws.ssm#InvalidDeletionIdException":
      throw await de_InvalidDeletionIdExceptionRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand
 */
export const de_DescribeMaintenanceWindowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowExecutionsResult(data, context);
  const response: DescribeMaintenanceWindowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError
 */
const de_DescribeMaintenanceWindowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand
 */
export const de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowExecutionTaskInvocationsResult(data, context);
  const response: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError
 */
const de_DescribeMaintenanceWindowExecutionTaskInvocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand
 */
export const de_DescribeMaintenanceWindowExecutionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowExecutionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowExecutionTasksResult(data, context);
  const response: DescribeMaintenanceWindowExecutionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError
 */
const de_DescribeMaintenanceWindowExecutionTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsCommand
 */
export const de_DescribeMaintenanceWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowsResult(data, context);
  const response: DescribeMaintenanceWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsCommandError
 */
const de_DescribeMaintenanceWindowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand
 */
export const de_DescribeMaintenanceWindowScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowScheduleResult(data, context);
  const response: DescribeMaintenanceWindowScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError
 */
const de_DescribeMaintenanceWindowScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand
 */
export const de_DescribeMaintenanceWindowsForTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowsForTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowsForTargetResult(data, context);
  const response: DescribeMaintenanceWindowsForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError
 */
const de_DescribeMaintenanceWindowsForTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand
 */
export const de_DescribeMaintenanceWindowTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowTargetsResult(data, context);
  const response: DescribeMaintenanceWindowTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError
 */
const de_DescribeMaintenanceWindowTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand
 */
export const de_DescribeMaintenanceWindowTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceWindowTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceWindowTasksResult(data, context);
  const response: DescribeMaintenanceWindowTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError
 */
const de_DescribeMaintenanceWindowTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOpsItemsCommand
 */
export const de_DescribeOpsItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOpsItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOpsItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOpsItemsResponse(data, context);
  const response: DescribeOpsItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOpsItemsCommandError
 */
const de_DescribeOpsItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOpsItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeParametersCommand
 */
export const de_DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeParametersResult(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeParametersCommandError
 */
const de_DescribeParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidFilterOption":
    case "com.amazonaws.ssm#InvalidFilterOption":
      throw await de_InvalidFilterOptionRes(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await de_InvalidFilterValueRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePatchBaselinesCommand
 */
export const de_DescribePatchBaselinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchBaselinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePatchBaselinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePatchBaselinesResult(data, context);
  const response: DescribePatchBaselinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePatchBaselinesCommandError
 */
const de_DescribePatchBaselinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchBaselinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePatchGroupsCommand
 */
export const de_DescribePatchGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePatchGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePatchGroupsResult(data, context);
  const response: DescribePatchGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePatchGroupsCommandError
 */
const de_DescribePatchGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePatchGroupStateCommand
 */
export const de_DescribePatchGroupStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePatchGroupStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePatchGroupStateResult(data, context);
  const response: DescribePatchGroupStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePatchGroupStateCommandError
 */
const de_DescribePatchGroupStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePatchPropertiesCommand
 */
export const de_DescribePatchPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePatchPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePatchPropertiesResult(data, context);
  const response: DescribePatchPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePatchPropertiesCommandError
 */
const de_DescribePatchPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSessionsCommand
 */
export const de_DescribeSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSessionsResponse(data, context);
  const response: DescribeSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSessionsCommandError
 */
const de_DescribeSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand
 */
export const de_DisassociateOpsItemRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOpsItemRelatedItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateOpsItemRelatedItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateOpsItemRelatedItemResponse(data, context);
  const response: DisassociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateOpsItemRelatedItemCommandError
 */
const de_DisassociateOpsItemRelatedItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOpsItemRelatedItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
    case "OpsItemRelatedItemAssociationNotFoundException":
    case "com.amazonaws.ssm#OpsItemRelatedItemAssociationNotFoundException":
      throw await de_OpsItemRelatedItemAssociationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAutomationExecutionCommand
 */
export const de_GetAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAutomationExecutionResult(data, context);
  const response: GetAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAutomationExecutionCommandError
 */
const de_GetAutomationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationExecutionNotFoundException":
    case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
      throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCalendarStateCommand
 */
export const de_GetCalendarStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalendarStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCalendarStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCalendarStateResponse(data, context);
  const response: GetCalendarStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCalendarStateCommandError
 */
const de_GetCalendarStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalendarStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentType":
    case "com.amazonaws.ssm#InvalidDocumentType":
      throw await de_InvalidDocumentTypeRes(parsedOutput, context);
    case "UnsupportedCalendarException":
    case "com.amazonaws.ssm#UnsupportedCalendarException":
      throw await de_UnsupportedCalendarExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommandInvocationCommand
 */
export const de_GetCommandInvocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommandInvocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommandInvocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCommandInvocationResult(data, context);
  const response: GetCommandInvocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCommandInvocationCommandError
 */
const de_GetCommandInvocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommandInvocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await de_InvalidCommandIdRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidPluginName":
    case "com.amazonaws.ssm#InvalidPluginName":
      throw await de_InvalidPluginNameRes(parsedOutput, context);
    case "InvocationDoesNotExist":
    case "com.amazonaws.ssm#InvocationDoesNotExist":
      throw await de_InvocationDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConnectionStatusCommand
 */
export const de_GetConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConnectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConnectionStatusResponse(data, context);
  const response: GetConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConnectionStatusCommandError
 */
const de_GetConnectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDefaultPatchBaselineCommand
 */
export const de_GetDefaultPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDefaultPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDefaultPatchBaselineResult(data, context);
  const response: GetDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDefaultPatchBaselineCommandError
 */
const de_GetDefaultPatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultPatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand
 */
export const de_GetDeployablePatchSnapshotForInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeployablePatchSnapshotForInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeployablePatchSnapshotForInstanceResult(data, context);
  const response: GetDeployablePatchSnapshotForInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError
 */
const de_GetDeployablePatchSnapshotForInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "UnsupportedFeatureRequiredException":
    case "com.amazonaws.ssm#UnsupportedFeatureRequiredException":
      throw await de_UnsupportedFeatureRequiredExceptionRes(parsedOutput, context);
    case "UnsupportedOperatingSystem":
    case "com.amazonaws.ssm#UnsupportedOperatingSystem":
      throw await de_UnsupportedOperatingSystemRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDocumentCommand
 */
export const de_GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDocumentResult(data, context);
  const response: GetDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDocumentCommandError
 */
const de_GetDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInventoryCommand
 */
export const de_GetInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInventoryResult(data, context);
  const response: GetInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInventoryCommandError
 */
const de_GetInventoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAggregatorException":
    case "com.amazonaws.ssm#InvalidAggregatorException":
      throw await de_InvalidAggregatorExceptionRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidInventoryGroupException":
    case "com.amazonaws.ssm#InvalidInventoryGroupException":
      throw await de_InvalidInventoryGroupExceptionRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidResultAttributeException":
    case "com.amazonaws.ssm#InvalidResultAttributeException":
      throw await de_InvalidResultAttributeExceptionRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInventorySchemaCommand
 */
export const de_GetInventorySchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventorySchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInventorySchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInventorySchemaResult(data, context);
  const response: GetInventorySchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInventorySchemaCommandError
 */
const de_GetInventorySchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventorySchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowCommand
 */
export const de_GetMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMaintenanceWindowResult(data, context);
  const response: GetMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowCommandError
 */
const de_GetMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionCommand
 */
export const de_GetMaintenanceWindowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMaintenanceWindowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMaintenanceWindowExecutionResult(data, context);
  const response: GetMaintenanceWindowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError
 */
const de_GetMaintenanceWindowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand
 */
export const de_GetMaintenanceWindowExecutionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMaintenanceWindowExecutionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMaintenanceWindowExecutionTaskResult(data, context);
  const response: GetMaintenanceWindowExecutionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError
 */
const de_GetMaintenanceWindowExecutionTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand
 */
export const de_GetMaintenanceWindowExecutionTaskInvocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMaintenanceWindowExecutionTaskInvocationResult(data, context);
  const response: GetMaintenanceWindowExecutionTaskInvocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError
 */
const de_GetMaintenanceWindowExecutionTaskInvocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowTaskCommand
 */
export const de_GetMaintenanceWindowTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMaintenanceWindowTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMaintenanceWindowTaskResult(data, context);
  const response: GetMaintenanceWindowTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowTaskCommandError
 */
const de_GetMaintenanceWindowTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOpsItemCommand
 */
export const de_GetOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpsItemResponse(data, context);
  const response: GetOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOpsItemCommandError
 */
const de_GetOpsItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOpsMetadataCommand
 */
export const de_GetOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpsMetadataResult(data, context);
  const response: GetOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOpsMetadataCommandError
 */
const de_GetOpsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOpsSummaryCommand
 */
export const de_GetOpsSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpsSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpsSummaryResult(data, context);
  const response: GetOpsSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOpsSummaryCommandError
 */
const de_GetOpsSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAggregatorException":
    case "com.amazonaws.ssm#InvalidAggregatorException":
      throw await de_InvalidAggregatorExceptionRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetParameterCommand
 */
export const de_GetParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParameterResult(data, context);
  const response: GetParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetParameterCommandError
 */
const de_GetParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await de_ParameterNotFoundRes(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetParameterHistoryCommand
 */
export const de_GetParameterHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParameterHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParameterHistoryResult(data, context);
  const response: GetParameterHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetParameterHistoryCommandError
 */
const de_GetParameterHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await de_ParameterNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetParametersCommand
 */
export const de_GetParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParametersResult(data, context);
  const response: GetParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetParametersCommandError
 */
const de_GetParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetParametersByPathCommand
 */
export const de_GetParametersByPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersByPathCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParametersByPathCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParametersByPathResult(data, context);
  const response: GetParametersByPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetParametersByPathCommandError
 */
const de_GetParametersByPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersByPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidFilterOption":
    case "com.amazonaws.ssm#InvalidFilterOption":
      throw await de_InvalidFilterOptionRes(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await de_InvalidFilterValueRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPatchBaselineCommand
 */
export const de_GetPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPatchBaselineResult(data, context);
  const response: GetPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPatchBaselineCommandError
 */
const de_GetPatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand
 */
export const de_GetPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPatchBaselineForPatchGroupResult(data, context);
  const response: GetPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError
 */
const de_GetPatchBaselineForPatchGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineForPatchGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourcePoliciesCommand
 */
export const de_GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePoliciesResponse(data, context);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourcePoliciesCommandError
 */
const de_GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetServiceSettingCommand
 */
export const de_GetServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceSettingResult(data, context);
  const response: GetServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServiceSettingCommandError
 */
const de_GetServiceSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1LabelParameterVersionCommand
 */
export const de_LabelParameterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LabelParameterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_LabelParameterVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LabelParameterVersionResult(data, context);
  const response: LabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1LabelParameterVersionCommandError
 */
const de_LabelParameterVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LabelParameterVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await de_ParameterNotFoundRes(parsedOutput, context);
    case "ParameterVersionLabelLimitExceeded":
    case "com.amazonaws.ssm#ParameterVersionLabelLimitExceeded":
      throw await de_ParameterVersionLabelLimitExceededRes(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAssociationsCommand
 */
export const de_ListAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociationsResult(data, context);
  const response: ListAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssociationsCommandError
 */
const de_ListAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAssociationVersionsCommand
 */
export const de_ListAssociationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociationVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociationVersionsResult(data, context);
  const response: ListAssociationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssociationVersionsCommandError
 */
const de_ListAssociationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCommandInvocationsCommand
 */
export const de_ListCommandInvocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandInvocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCommandInvocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCommandInvocationsResult(data, context);
  const response: ListCommandInvocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCommandInvocationsCommandError
 */
const de_ListCommandInvocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandInvocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await de_InvalidCommandIdRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCommandsCommand
 */
export const de_ListCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCommandsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCommandsResult(data, context);
  const response: ListCommandsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCommandsCommandError
 */
const de_ListCommandsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await de_InvalidCommandIdRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListComplianceItemsCommand
 */
export const de_ListComplianceItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComplianceItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComplianceItemsResult(data, context);
  const response: ListComplianceItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListComplianceItemsCommandError
 */
const de_ListComplianceItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await de_InvalidResourceTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListComplianceSummariesCommand
 */
export const de_ListComplianceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComplianceSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComplianceSummariesResult(data, context);
  const response: ListComplianceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListComplianceSummariesCommandError
 */
const de_ListComplianceSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentMetadataHistoryCommand
 */
export const de_ListDocumentMetadataHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentMetadataHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentMetadataHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentMetadataHistoryResponse(data, context);
  const response: ListDocumentMetadataHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDocumentMetadataHistoryCommandError
 */
const de_ListDocumentMetadataHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentMetadataHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentsCommand
 */
export const de_ListDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentsResult(data, context);
  const response: ListDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDocumentsCommandError
 */
const de_ListDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await de_InvalidFilterKeyRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentVersionsCommand
 */
export const de_ListDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentVersionsResult(data, context);
  const response: ListDocumentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDocumentVersionsCommandError
 */
const de_ListDocumentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInventoryEntriesCommand
 */
export const de_ListInventoryEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInventoryEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInventoryEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInventoryEntriesResult(data, context);
  const response: ListInventoryEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInventoryEntriesCommandError
 */
const de_ListInventoryEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInventoryEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOpsItemEventsCommand
 */
export const de_ListOpsItemEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpsItemEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpsItemEventsResponse(data, context);
  const response: ListOpsItemEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOpsItemEventsCommandError
 */
const de_ListOpsItemEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOpsItemRelatedItemsCommand
 */
export const de_ListOpsItemRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemRelatedItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpsItemRelatedItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpsItemRelatedItemsResponse(data, context);
  const response: ListOpsItemRelatedItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOpsItemRelatedItemsCommandError
 */
const de_ListOpsItemRelatedItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemRelatedItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOpsMetadataCommand
 */
export const de_ListOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpsMetadataResult(data, context);
  const response: ListOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOpsMetadataCommandError
 */
const de_ListOpsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceComplianceSummariesCommand
 */
export const de_ListResourceComplianceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceComplianceSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceComplianceSummariesResult(data, context);
  const response: ListResourceComplianceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceComplianceSummariesCommandError
 */
const de_ListResourceComplianceSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await de_InvalidFilterRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceDataSyncCommand
 */
export const de_ListResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceDataSyncResult(data, context);
  const response: ListResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceDataSyncCommandError
 */
const de_ListResourceDataSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDataSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await de_InvalidResourceTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyDocumentPermissionCommand
 */
export const de_ModifyDocumentPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDocumentPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDocumentPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDocumentPermissionResponse(data, context);
  const response: ModifyDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyDocumentPermissionCommandError
 */
const de_ModifyDocumentPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDocumentPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentLimitExceeded":
    case "com.amazonaws.ssm#DocumentLimitExceeded":
      throw await de_DocumentLimitExceededRes(parsedOutput, context);
    case "DocumentPermissionLimit":
    case "com.amazonaws.ssm#DocumentPermissionLimit":
      throw await de_DocumentPermissionLimitRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidPermissionType":
    case "com.amazonaws.ssm#InvalidPermissionType":
      throw await de_InvalidPermissionTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutComplianceItemsCommand
 */
export const de_PutComplianceItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComplianceItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutComplianceItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutComplianceItemsResult(data, context);
  const response: PutComplianceItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutComplianceItemsCommandError
 */
const de_PutComplianceItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComplianceItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplianceTypeCountLimitExceededException":
    case "com.amazonaws.ssm#ComplianceTypeCountLimitExceededException":
      throw await de_ComplianceTypeCountLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidItemContentException":
    case "com.amazonaws.ssm#InvalidItemContentException":
      throw await de_InvalidItemContentExceptionRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await de_InvalidResourceTypeRes(parsedOutput, context);
    case "ItemSizeLimitExceededException":
    case "com.amazonaws.ssm#ItemSizeLimitExceededException":
      throw await de_ItemSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TotalSizeLimitExceededException":
    case "com.amazonaws.ssm#TotalSizeLimitExceededException":
      throw await de_TotalSizeLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutInventoryCommand
 */
export const de_PutInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInventoryResult(data, context);
  const response: PutInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInventoryCommandError
 */
const de_PutInventoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInventoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomSchemaCountLimitExceededException":
    case "com.amazonaws.ssm#CustomSchemaCountLimitExceededException":
      throw await de_CustomSchemaCountLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidInventoryItemContextException":
    case "com.amazonaws.ssm#InvalidInventoryItemContextException":
      throw await de_InvalidInventoryItemContextExceptionRes(parsedOutput, context);
    case "InvalidItemContentException":
    case "com.amazonaws.ssm#InvalidItemContentException":
      throw await de_InvalidItemContentExceptionRes(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
    case "ItemContentMismatchException":
    case "com.amazonaws.ssm#ItemContentMismatchException":
      throw await de_ItemContentMismatchExceptionRes(parsedOutput, context);
    case "ItemSizeLimitExceededException":
    case "com.amazonaws.ssm#ItemSizeLimitExceededException":
      throw await de_ItemSizeLimitExceededExceptionRes(parsedOutput, context);
    case "SubTypeCountLimitExceededException":
    case "com.amazonaws.ssm#SubTypeCountLimitExceededException":
      throw await de_SubTypeCountLimitExceededExceptionRes(parsedOutput, context);
    case "TotalSizeLimitExceededException":
    case "com.amazonaws.ssm#TotalSizeLimitExceededException":
      throw await de_TotalSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedInventoryItemContextException":
    case "com.amazonaws.ssm#UnsupportedInventoryItemContextException":
      throw await de_UnsupportedInventoryItemContextExceptionRes(parsedOutput, context);
    case "UnsupportedInventorySchemaVersionException":
    case "com.amazonaws.ssm#UnsupportedInventorySchemaVersionException":
      throw await de_UnsupportedInventorySchemaVersionExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutParameterCommand
 */
export const de_PutParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutParameterResult(data, context);
  const response: PutParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutParameterCommandError
 */
const de_PutParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HierarchyLevelLimitExceededException":
    case "com.amazonaws.ssm#HierarchyLevelLimitExceededException":
      throw await de_HierarchyLevelLimitExceededExceptionRes(parsedOutput, context);
    case "HierarchyTypeMismatchException":
    case "com.amazonaws.ssm#HierarchyTypeMismatchException":
      throw await de_HierarchyTypeMismatchExceptionRes(parsedOutput, context);
    case "IncompatiblePolicyException":
    case "com.amazonaws.ssm#IncompatiblePolicyException":
      throw await de_IncompatiblePolicyExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAllowedPatternException":
    case "com.amazonaws.ssm#InvalidAllowedPatternException":
      throw await de_InvalidAllowedPatternExceptionRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    case "InvalidPolicyAttributeException":
    case "com.amazonaws.ssm#InvalidPolicyAttributeException":
      throw await de_InvalidPolicyAttributeExceptionRes(parsedOutput, context);
    case "InvalidPolicyTypeException":
    case "com.amazonaws.ssm#InvalidPolicyTypeException":
      throw await de_InvalidPolicyTypeExceptionRes(parsedOutput, context);
    case "ParameterAlreadyExists":
    case "com.amazonaws.ssm#ParameterAlreadyExists":
      throw await de_ParameterAlreadyExistsRes(parsedOutput, context);
    case "ParameterLimitExceeded":
    case "com.amazonaws.ssm#ParameterLimitExceeded":
      throw await de_ParameterLimitExceededRes(parsedOutput, context);
    case "ParameterMaxVersionLimitExceeded":
    case "com.amazonaws.ssm#ParameterMaxVersionLimitExceeded":
      throw await de_ParameterMaxVersionLimitExceededRes(parsedOutput, context);
    case "ParameterPatternMismatchException":
    case "com.amazonaws.ssm#ParameterPatternMismatchException":
      throw await de_ParameterPatternMismatchExceptionRes(parsedOutput, context);
    case "PoliciesLimitExceededException":
    case "com.amazonaws.ssm#PoliciesLimitExceededException":
      throw await de_PoliciesLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    case "UnsupportedParameterType":
    case "com.amazonaws.ssm#UnsupportedParameterType":
      throw await de_UnsupportedParameterTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourcePolicyConflictException":
    case "com.amazonaws.ssm#ResourcePolicyConflictException":
      throw await de_ResourcePolicyConflictExceptionRes(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
    case "ResourcePolicyLimitExceededException":
    case "com.amazonaws.ssm#ResourcePolicyLimitExceededException":
      throw await de_ResourcePolicyLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterDefaultPatchBaselineCommand
 */
export const de_RegisterDefaultPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDefaultPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDefaultPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterDefaultPatchBaselineResult(data, context);
  const response: RegisterDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError
 */
const de_RegisterDefaultPatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDefaultPatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand
 */
export const de_RegisterPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterPatchBaselineForPatchGroupResult(data, context);
  const response: RegisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError
 */
const de_RegisterPatchBaselineForPatchGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ssm#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand
 */
export const de_RegisterTargetWithMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterTargetWithMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTargetWithMaintenanceWindowResult(data, context);
  const response: RegisterTargetWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError
 */
const de_RegisterTargetWithMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand
 */
export const de_RegisterTaskWithMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterTaskWithMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTaskWithMaintenanceWindowResult(data, context);
  const response: RegisterTaskWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError
 */
const de_RegisterTaskWithMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "FeatureNotAvailableException":
    case "com.amazonaws.ssm#FeatureNotAvailableException":
      throw await de_FeatureNotAvailableExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsFromResourceResult(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await de_InvalidResourceIdRes(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await de_InvalidResourceTypeRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResetServiceSettingCommand
 */
export const de_ResetServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetServiceSettingResult(data, context);
  const response: ResetServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetServiceSettingCommandError
 */
const de_ResetServiceSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResumeSessionCommand
 */
export const de_ResumeSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResumeSessionResponse(data, context);
  const response: ResumeSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResumeSessionCommandError
 */
const de_ResumeSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SendAutomationSignalCommand
 */
export const de_SendAutomationSignalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAutomationSignalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendAutomationSignalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendAutomationSignalResult(data, context);
  const response: SendAutomationSignalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendAutomationSignalCommandError
 */
const de_SendAutomationSignalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAutomationSignalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationExecutionNotFoundException":
    case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
      throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
    case "AutomationStepNotFoundException":
    case "com.amazonaws.ssm#AutomationStepNotFoundException":
      throw await de_AutomationStepNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAutomationSignalException":
    case "com.amazonaws.ssm#InvalidAutomationSignalException":
      throw await de_InvalidAutomationSignalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SendCommandCommand
 */
export const de_SendCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendCommandResult(data, context);
  const response: SendCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendCommandCommandError
 */
const de_SendCommandCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateInstanceId":
    case "com.amazonaws.ssm#DuplicateInstanceId":
      throw await de_DuplicateInstanceIdRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "InvalidNotificationConfig":
    case "com.amazonaws.ssm#InvalidNotificationConfig":
      throw await de_InvalidNotificationConfigRes(parsedOutput, context);
    case "InvalidOutputFolder":
    case "com.amazonaws.ssm#InvalidOutputFolder":
      throw await de_InvalidOutputFolderRes(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await de_InvalidParametersRes(parsedOutput, context);
    case "InvalidRole":
    case "com.amazonaws.ssm#InvalidRole":
      throw await de_InvalidRoleRes(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartAssociationsOnceCommand
 */
export const de_StartAssociationsOnceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssociationsOnceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAssociationsOnceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAssociationsOnceResult(data, context);
  const response: StartAssociationsOnceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartAssociationsOnceCommandError
 */
const de_StartAssociationsOnceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssociationsOnceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InvalidAssociation":
    case "com.amazonaws.ssm#InvalidAssociation":
      throw await de_InvalidAssociationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartAutomationExecutionCommand
 */
export const de_StartAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAutomationExecutionResult(data, context);
  const response: StartAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartAutomationExecutionCommandError
 */
const de_StartAutomationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAutomationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationDefinitionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
      throw await de_AutomationDefinitionNotFoundExceptionRes(parsedOutput, context);
    case "AutomationDefinitionVersionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
      throw await de_AutomationDefinitionVersionNotFoundExceptionRes(parsedOutput, context);
    case "AutomationExecutionLimitExceededException":
    case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
      throw await de_AutomationExecutionLimitExceededExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAutomationExecutionParametersException":
    case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
      throw await de_InvalidAutomationExecutionParametersExceptionRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await de_InvalidTargetRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartChangeRequestExecutionCommand
 */
export const de_StartChangeRequestExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeRequestExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartChangeRequestExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartChangeRequestExecutionResult(data, context);
  const response: StartChangeRequestExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartChangeRequestExecutionCommandError
 */
const de_StartChangeRequestExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeRequestExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationDefinitionNotApprovedException":
    case "com.amazonaws.ssm#AutomationDefinitionNotApprovedException":
      throw await de_AutomationDefinitionNotApprovedExceptionRes(parsedOutput, context);
    case "AutomationDefinitionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
      throw await de_AutomationDefinitionNotFoundExceptionRes(parsedOutput, context);
    case "AutomationDefinitionVersionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
      throw await de_AutomationDefinitionVersionNotFoundExceptionRes(parsedOutput, context);
    case "AutomationExecutionLimitExceededException":
    case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
      throw await de_AutomationExecutionLimitExceededExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAutomationExecutionParametersException":
    case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
      throw await de_InvalidAutomationExecutionParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartSessionCommand
 */
export const de_StartSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSessionResponse(data, context);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSessionCommandError
 */
const de_StartSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "TargetNotConnected":
    case "com.amazonaws.ssm#TargetNotConnected":
      throw await de_TargetNotConnectedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopAutomationExecutionCommand
 */
export const de_StopAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopAutomationExecutionResult(data, context);
  const response: StopAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopAutomationExecutionCommandError
 */
const de_StopAutomationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutomationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AutomationExecutionNotFoundException":
    case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
      throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAutomationStatusUpdateException":
    case "com.amazonaws.ssm#InvalidAutomationStatusUpdateException":
      throw await de_InvalidAutomationStatusUpdateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TerminateSessionCommand
 */
export const de_TerminateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TerminateSessionResponse(data, context);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateSessionCommandError
 */
const de_TerminateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnlabelParameterVersionCommand
 */
export const de_UnlabelParameterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlabelParameterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnlabelParameterVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UnlabelParameterVersionResult(data, context);
  const response: UnlabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnlabelParameterVersionCommandError
 */
const de_UnlabelParameterVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlabelParameterVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await de_ParameterNotFoundRes(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAssociationCommand
 */
export const de_UpdateAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAssociationResult(data, context);
  const response: UpdateAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAssociationCommandError
 */
const de_UpdateAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "AssociationVersionLimitExceeded":
    case "com.amazonaws.ssm#AssociationVersionLimitExceeded":
      throw await de_AssociationVersionLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidAssociationVersion":
    case "com.amazonaws.ssm#InvalidAssociationVersion":
      throw await de_InvalidAssociationVersionRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await de_InvalidOutputLocationRes(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await de_InvalidParametersRes(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await de_InvalidScheduleRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await de_InvalidTargetRes(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await de_InvalidTargetMapsRes(parsedOutput, context);
    case "InvalidUpdate":
    case "com.amazonaws.ssm#InvalidUpdate":
      throw await de_InvalidUpdateRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAssociationStatusCommand
 */
export const de_UpdateAssociationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAssociationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAssociationStatusResult(data, context);
  const response: UpdateAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAssociationStatusCommandError
 */
const de_UpdateAssociationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociationDoesNotExist":
    case "com.amazonaws.ssm#AssociationDoesNotExist":
      throw await de_AssociationDoesNotExistRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    case "StatusUnchanged":
    case "com.amazonaws.ssm#StatusUnchanged":
      throw await de_StatusUnchangedRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDocumentCommand
 */
export const de_UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDocumentResult(data, context);
  const response: UpdateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDocumentCommandError
 */
const de_UpdateDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentVersionLimitExceeded":
    case "com.amazonaws.ssm#DocumentVersionLimitExceeded":
      throw await de_DocumentVersionLimitExceededRes(parsedOutput, context);
    case "DuplicateDocumentContent":
    case "com.amazonaws.ssm#DuplicateDocumentContent":
      throw await de_DuplicateDocumentContentRes(parsedOutput, context);
    case "DuplicateDocumentVersionName":
    case "com.amazonaws.ssm#DuplicateDocumentVersionName":
      throw await de_DuplicateDocumentVersionNameRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentContent":
    case "com.amazonaws.ssm#InvalidDocumentContent":
      throw await de_InvalidDocumentContentRes(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await de_InvalidDocumentOperationRes(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDocumentDefaultVersionCommand
 */
export const de_UpdateDocumentDefaultVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentDefaultVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDocumentDefaultVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDocumentDefaultVersionResult(data, context);
  const response: UpdateDocumentDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError
 */
const de_UpdateDocumentDefaultVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentDefaultVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDocumentMetadataCommand
 */
export const de_UpdateDocumentMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDocumentMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDocumentMetadataResponse(data, context);
  const response: UpdateDocumentMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDocumentMetadataCommandError
 */
const de_UpdateDocumentMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await de_InvalidDocumentRes(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await de_InvalidDocumentOperationRes(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await de_InvalidDocumentVersionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowCommand
 */
export const de_UpdateMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMaintenanceWindowResult(data, context);
  const response: UpdateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowCommandError
 */
const de_UpdateMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand
 */
export const de_UpdateMaintenanceWindowTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMaintenanceWindowTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMaintenanceWindowTargetResult(data, context);
  const response: UpdateMaintenanceWindowTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError
 */
const de_UpdateMaintenanceWindowTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand
 */
export const de_UpdateMaintenanceWindowTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMaintenanceWindowTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMaintenanceWindowTaskResult(data, context);
  const response: UpdateMaintenanceWindowTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError
 */
const de_UpdateMaintenanceWindowTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateManagedInstanceRoleCommand
 */
export const de_UpdateManagedInstanceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedInstanceRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateManagedInstanceRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateManagedInstanceRoleResult(data, context);
  const response: UpdateManagedInstanceRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateManagedInstanceRoleCommandError
 */
const de_UpdateManagedInstanceRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedInstanceRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await de_InvalidInstanceIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateOpsItemCommand
 */
export const de_UpdateOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateOpsItemResponse(data, context);
  const response: UpdateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateOpsItemCommandError
 */
const de_UpdateOpsItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
    case "OpsItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
      throw await de_OpsItemAlreadyExistsExceptionRes(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateOpsMetadataCommand
 */
export const de_UpdateOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateOpsMetadataResult(data, context);
  const response: UpdateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateOpsMetadataCommandError
 */
const de_UpdateOpsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
    case "OpsMetadataKeyLimitExceededException":
    case "com.amazonaws.ssm#OpsMetadataKeyLimitExceededException":
      throw await de_OpsMetadataKeyLimitExceededExceptionRes(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
    case "OpsMetadataTooManyUpdatesException":
    case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
      throw await de_OpsMetadataTooManyUpdatesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePatchBaselineCommand
 */
export const de_UpdatePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePatchBaselineResult(data, context);
  const response: UpdatePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePatchBaselineCommandError
 */
const de_UpdatePatchBaselineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePatchBaselineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await de_DoesNotExistExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateResourceDataSyncCommand
 */
export const de_UpdateResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResourceDataSyncResult(data, context);
  const response: UpdateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResourceDataSyncCommandError
 */
const de_UpdateResourceDataSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDataSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceDataSyncConflictException":
    case "com.amazonaws.ssm#ResourceDataSyncConflictException":
      throw await de_ResourceDataSyncConflictExceptionRes(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateServiceSettingCommand
 */
export const de_UpdateServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceSettingResult(data, context);
  const response: UpdateServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServiceSettingCommandError
 */
const de_UpdateServiceSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await de_TooManyUpdatesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociatedInstancesRes
 */
const de_AssociatedInstancesRes = async (parsedOutput: any, context: __SerdeContext): Promise<AssociatedInstances> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociatedInstances(body, context);
  const exception = new AssociatedInstances({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociationAlreadyExistsRes
 */
const de_AssociationAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociationAlreadyExists(body, context);
  const exception = new AssociationAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociationDoesNotExistRes
 */
const de_AssociationDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociationDoesNotExist(body, context);
  const exception = new AssociationDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociationExecutionDoesNotExistRes
 */
const de_AssociationExecutionDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationExecutionDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociationExecutionDoesNotExist(body, context);
  const exception = new AssociationExecutionDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociationLimitExceededRes
 */
const de_AssociationLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociationLimitExceeded(body, context);
  const exception = new AssociationLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociationVersionLimitExceededRes
 */
const de_AssociationVersionLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociationVersionLimitExceeded(body, context);
  const exception = new AssociationVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationDefinitionNotApprovedExceptionRes
 */
const de_AutomationDefinitionNotApprovedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionNotApprovedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationDefinitionNotApprovedException(body, context);
  const exception = new AutomationDefinitionNotApprovedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationDefinitionNotFoundExceptionRes
 */
const de_AutomationDefinitionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationDefinitionNotFoundException(body, context);
  const exception = new AutomationDefinitionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionRes
 */
const de_AutomationDefinitionVersionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionVersionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationDefinitionVersionNotFoundException(body, context);
  const exception = new AutomationDefinitionVersionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationExecutionLimitExceededExceptionRes
 */
const de_AutomationExecutionLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationExecutionLimitExceededException(body, context);
  const exception = new AutomationExecutionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationExecutionNotFoundExceptionRes
 */
const de_AutomationExecutionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationExecutionNotFoundException(body, context);
  const exception = new AutomationExecutionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AutomationStepNotFoundExceptionRes
 */
const de_AutomationStepNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationStepNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AutomationStepNotFoundException(body, context);
  const exception = new AutomationStepNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionRes
 */
const de_ComplianceTypeCountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplianceTypeCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ComplianceTypeCountLimitExceededException(body, context);
  const exception = new ComplianceTypeCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionRes
 */
const de_CustomSchemaCountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomSchemaCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomSchemaCountLimitExceededException(body, context);
  const exception = new CustomSchemaCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentAlreadyExistsRes
 */
const de_DocumentAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DocumentAlreadyExists(body, context);
  const exception = new DocumentAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentLimitExceededRes
 */
const de_DocumentLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DocumentLimitExceeded(body, context);
  const exception = new DocumentLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentPermissionLimitRes
 */
const de_DocumentPermissionLimitRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentPermissionLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DocumentPermissionLimit(body, context);
  const exception = new DocumentPermissionLimit({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentVersionLimitExceededRes
 */
const de_DocumentVersionLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DocumentVersionLimitExceeded(body, context);
  const exception = new DocumentVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DoesNotExistExceptionRes
 */
const de_DoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DoesNotExistException(body, context);
  const exception = new DoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateDocumentContentRes
 */
const de_DuplicateDocumentContentRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateDocumentContent> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateDocumentContent(body, context);
  const exception = new DuplicateDocumentContent({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateDocumentVersionNameRes
 */
const de_DuplicateDocumentVersionNameRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateDocumentVersionName> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateDocumentVersionName(body, context);
  const exception = new DuplicateDocumentVersionName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateInstanceIdRes
 */
const de_DuplicateInstanceIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<DuplicateInstanceId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateInstanceId(body, context);
  const exception = new DuplicateInstanceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FeatureNotAvailableExceptionRes
 */
const de_FeatureNotAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FeatureNotAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FeatureNotAvailableException(body, context);
  const exception = new FeatureNotAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HierarchyLevelLimitExceededExceptionRes
 */
const de_HierarchyLevelLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HierarchyLevelLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HierarchyLevelLimitExceededException(body, context);
  const exception = new HierarchyLevelLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HierarchyTypeMismatchExceptionRes
 */
const de_HierarchyTypeMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HierarchyTypeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HierarchyTypeMismatchException(body, context);
  const exception = new HierarchyTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchRes
 */
const de_IdempotentParameterMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatch> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatch(body, context);
  const exception = new IdempotentParameterMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatiblePolicyExceptionRes
 */
const de_IncompatiblePolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatiblePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatiblePolicyException(body, context);
  const exception = new IncompatiblePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidActivationRes
 */
const de_InvalidActivationRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidActivation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidActivation(body, context);
  const exception = new InvalidActivation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidActivationIdRes
 */
const de_InvalidActivationIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidActivationId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidActivationId(body, context);
  const exception = new InvalidActivationId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAggregatorExceptionRes
 */
const de_InvalidAggregatorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAggregatorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAggregatorException(body, context);
  const exception = new InvalidAggregatorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAllowedPatternExceptionRes
 */
const de_InvalidAllowedPatternExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAllowedPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAllowedPatternException(body, context);
  const exception = new InvalidAllowedPatternException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAssociationRes
 */
const de_InvalidAssociationRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidAssociation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAssociation(body, context);
  const exception = new InvalidAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAssociationVersionRes
 */
const de_InvalidAssociationVersionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAssociationVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAssociationVersion(body, context);
  const exception = new InvalidAssociationVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionRes
 */
const de_InvalidAutomationExecutionParametersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationExecutionParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAutomationExecutionParametersException(body, context);
  const exception = new InvalidAutomationExecutionParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAutomationSignalExceptionRes
 */
const de_InvalidAutomationSignalExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationSignalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAutomationSignalException(body, context);
  const exception = new InvalidAutomationSignalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionRes
 */
const de_InvalidAutomationStatusUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationStatusUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAutomationStatusUpdateException(body, context);
  const exception = new InvalidAutomationStatusUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCommandIdRes
 */
const de_InvalidCommandIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidCommandId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCommandId(body, context);
  const exception = new InvalidCommandId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionRes
 */
const de_InvalidDeleteInventoryParametersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeleteInventoryParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeleteInventoryParametersException(body, context);
  const exception = new InvalidDeleteInventoryParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeletionIdExceptionRes
 */
const de_InvalidDeletionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeletionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeletionIdException(body, context);
  const exception = new InvalidDeletionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentRes
 */
const de_InvalidDocumentRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidDocument> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocument(body, context);
  const exception = new InvalidDocument({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentContentRes
 */
const de_InvalidDocumentContentRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentContent> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocumentContent(body, context);
  const exception = new InvalidDocumentContent({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentOperationRes
 */
const de_InvalidDocumentOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocumentOperation(body, context);
  const exception = new InvalidDocumentOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentSchemaVersionRes
 */
const de_InvalidDocumentSchemaVersionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentSchemaVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocumentSchemaVersion(body, context);
  const exception = new InvalidDocumentSchemaVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentTypeRes
 */
const de_InvalidDocumentTypeRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidDocumentType> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocumentType(body, context);
  const exception = new InvalidDocumentType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDocumentVersionRes
 */
const de_InvalidDocumentVersionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDocumentVersion(body, context);
  const exception = new InvalidDocumentVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilterRes
 */
const de_InvalidFilterRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFilter> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFilter(body, context);
  const exception = new InvalidFilter({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilterKeyRes
 */
const de_InvalidFilterKeyRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFilterKey> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFilterKey(body, context);
  const exception = new InvalidFilterKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilterOptionRes
 */
const de_InvalidFilterOptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFilterOption> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFilterOption(body, context);
  const exception = new InvalidFilterOption({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilterValueRes
 */
const de_InvalidFilterValueRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFilterValue> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFilterValue(body, context);
  const exception = new InvalidFilterValue({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInstanceIdRes
 */
const de_InvalidInstanceIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidInstanceId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInstanceId(body, context);
  const exception = new InvalidInstanceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInstanceInformationFilterValueRes
 */
const de_InvalidInstanceInformationFilterValueRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceInformationFilterValue> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInstanceInformationFilterValue(body, context);
  const exception = new InvalidInstanceInformationFilterValue({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInventoryGroupExceptionRes
 */
const de_InvalidInventoryGroupExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInventoryGroupException(body, context);
  const exception = new InvalidInventoryGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInventoryItemContextExceptionRes
 */
const de_InvalidInventoryItemContextExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryItemContextException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInventoryItemContextException(body, context);
  const exception = new InvalidInventoryItemContextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInventoryRequestExceptionRes
 */
const de_InvalidInventoryRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInventoryRequestException(body, context);
  const exception = new InvalidInventoryRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidItemContentExceptionRes
 */
const de_InvalidItemContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidItemContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidItemContentException(body, context);
  const exception = new InvalidItemContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKeyIdRes
 */
const de_InvalidKeyIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidKeyId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKeyId(body, context);
  const exception = new InvalidKeyId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenRes
 */
const de_InvalidNextTokenRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextToken(body, context);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNotificationConfigRes
 */
const de_InvalidNotificationConfigRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNotificationConfig> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNotificationConfig(body, context);
  const exception = new InvalidNotificationConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOptionExceptionRes
 */
const de_InvalidOptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOptionException(body, context);
  const exception = new InvalidOptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOutputFolderRes
 */
const de_InvalidOutputFolderRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidOutputFolder> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOutputFolder(body, context);
  const exception = new InvalidOutputFolder({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOutputLocationRes
 */
const de_InvalidOutputLocationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOutputLocation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOutputLocation(body, context);
  const exception = new InvalidOutputLocation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParametersRes
 */
const de_InvalidParametersRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidParameters> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameters(body, context);
  const exception = new InvalidParameters({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPermissionTypeRes
 */
const de_InvalidPermissionTypeRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPermissionType> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPermissionType(body, context);
  const exception = new InvalidPermissionType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPluginNameRes
 */
const de_InvalidPluginNameRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidPluginName> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPluginName(body, context);
  const exception = new InvalidPluginName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPolicyAttributeExceptionRes
 */
const de_InvalidPolicyAttributeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyAttributeException(body, context);
  const exception = new InvalidPolicyAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPolicyTypeExceptionRes
 */
const de_InvalidPolicyTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyTypeException(body, context);
  const exception = new InvalidPolicyTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceIdRes
 */
const de_InvalidResourceIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidResourceId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceId(body, context);
  const exception = new InvalidResourceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceTypeRes
 */
const de_InvalidResourceTypeRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidResourceType> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceType(body, context);
  const exception = new InvalidResourceType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResultAttributeExceptionRes
 */
const de_InvalidResultAttributeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResultAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResultAttributeException(body, context);
  const exception = new InvalidResultAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRoleRes
 */
const de_InvalidRoleRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRole> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRole(body, context);
  const exception = new InvalidRole({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidScheduleRes
 */
const de_InvalidScheduleRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSchedule> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSchedule(body, context);
  const exception = new InvalidSchedule({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagRes
 */
const de_InvalidTagRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTag> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTag(body, context);
  const exception = new InvalidTag({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetRes
 */
const de_InvalidTargetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTarget> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTarget(body, context);
  const exception = new InvalidTarget({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetMapsRes
 */
const de_InvalidTargetMapsRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTargetMaps> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetMaps(body, context);
  const exception = new InvalidTargetMaps({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTypeNameExceptionRes
 */
const de_InvalidTypeNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTypeNameException(body, context);
  const exception = new InvalidTypeNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUpdateRes
 */
const de_InvalidUpdateRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidUpdate> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUpdate(body, context);
  const exception = new InvalidUpdate({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvocationDoesNotExistRes
 */
const de_InvocationDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvocationDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvocationDoesNotExist(body, context);
  const exception = new InvocationDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ItemContentMismatchExceptionRes
 */
const de_ItemContentMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemContentMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ItemContentMismatchException(body, context);
  const exception = new ItemContentMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ItemSizeLimitExceededExceptionRes
 */
const de_ItemSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ItemSizeLimitExceededException(body, context);
  const exception = new ItemSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxDocumentSizeExceededRes
 */
const de_MaxDocumentSizeExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxDocumentSizeExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxDocumentSizeExceeded(body, context);
  const exception = new MaxDocumentSizeExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemAccessDeniedExceptionRes
 */
const de_OpsItemAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemAccessDeniedException(body, context);
  const exception = new OpsItemAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemAlreadyExistsExceptionRes
 */
const de_OpsItemAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemAlreadyExistsException(body, context);
  const exception = new OpsItemAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemInvalidParameterExceptionRes
 */
const de_OpsItemInvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemInvalidParameterException(body, context);
  const exception = new OpsItemInvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemLimitExceededExceptionRes
 */
const de_OpsItemLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemLimitExceededException(body, context);
  const exception = new OpsItemLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemNotFoundExceptionRes
 */
const de_OpsItemNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemNotFoundException(body, context);
  const exception = new OpsItemNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsExceptionRes
 */
const de_OpsItemRelatedItemAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemRelatedItemAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemRelatedItemAlreadyExistsException(body, context);
  const exception = new OpsItemRelatedItemAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundExceptionRes
 */
const de_OpsItemRelatedItemAssociationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemRelatedItemAssociationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsItemRelatedItemAssociationNotFoundException(body, context);
  const exception = new OpsItemRelatedItemAssociationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataAlreadyExistsExceptionRes
 */
const de_OpsMetadataAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataAlreadyExistsException(body, context);
  const exception = new OpsMetadataAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionRes
 */
const de_OpsMetadataInvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataInvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataInvalidArgumentException(body, context);
  const exception = new OpsMetadataInvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataKeyLimitExceededExceptionRes
 */
const de_OpsMetadataKeyLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataKeyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataKeyLimitExceededException(body, context);
  const exception = new OpsMetadataKeyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataLimitExceededExceptionRes
 */
const de_OpsMetadataLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataLimitExceededException(body, context);
  const exception = new OpsMetadataLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataNotFoundExceptionRes
 */
const de_OpsMetadataNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataNotFoundException(body, context);
  const exception = new OpsMetadataNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionRes
 */
const de_OpsMetadataTooManyUpdatesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataTooManyUpdatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpsMetadataTooManyUpdatesException(body, context);
  const exception = new OpsMetadataTooManyUpdatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterAlreadyExistsRes
 */
const de_ParameterAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterAlreadyExists(body, context);
  const exception = new ParameterAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterLimitExceededRes
 */
const de_ParameterLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterLimitExceeded(body, context);
  const exception = new ParameterLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterMaxVersionLimitExceededRes
 */
const de_ParameterMaxVersionLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterMaxVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterMaxVersionLimitExceeded(body, context);
  const exception = new ParameterMaxVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterNotFoundRes
 */
const de_ParameterNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ParameterNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterNotFound(body, context);
  const exception = new ParameterNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterPatternMismatchExceptionRes
 */
const de_ParameterPatternMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterPatternMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterPatternMismatchException(body, context);
  const exception = new ParameterPatternMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterVersionLabelLimitExceededRes
 */
const de_ParameterVersionLabelLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterVersionLabelLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterVersionLabelLimitExceeded(body, context);
  const exception = new ParameterVersionLabelLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterVersionNotFoundRes
 */
const de_ParameterVersionNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterVersionNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterVersionNotFound(body, context);
  const exception = new ParameterVersionNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PoliciesLimitExceededExceptionRes
 */
const de_PoliciesLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PoliciesLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PoliciesLimitExceededException(body, context);
  const exception = new PoliciesLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionRes
 */
const de_ResourceDataSyncAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceDataSyncAlreadyExistsException(body, context);
  const exception = new ResourceDataSyncAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDataSyncConflictExceptionRes
 */
const de_ResourceDataSyncConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceDataSyncConflictException(body, context);
  const exception = new ResourceDataSyncConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDataSyncCountExceededExceptionRes
 */
const de_ResourceDataSyncCountExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncCountExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceDataSyncCountExceededException(body, context);
  const exception = new ResourceDataSyncCountExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionRes
 */
const de_ResourceDataSyncInvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceDataSyncInvalidConfigurationException(body, context);
  const exception = new ResourceDataSyncInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDataSyncNotFoundExceptionRes
 */
const de_ResourceDataSyncNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceDataSyncNotFoundException(body, context);
  const exception = new ResourceDataSyncNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourcePolicyConflictExceptionRes
 */
const de_ResourcePolicyConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyConflictException(body, context);
  const exception = new ResourcePolicyConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourcePolicyInvalidParameterExceptionRes
 */
const de_ResourcePolicyInvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyInvalidParameterException(body, context);
  const exception = new ResourcePolicyInvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourcePolicyLimitExceededExceptionRes
 */
const de_ResourcePolicyLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyLimitExceededException(body, context);
  const exception = new ResourcePolicyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceSettingNotFoundRes
 */
const de_ServiceSettingNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceSettingNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceSettingNotFound(body, context);
  const exception = new ServiceSettingNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1StatusUnchangedRes
 */
const de_StatusUnchangedRes = async (parsedOutput: any, context: __SerdeContext): Promise<StatusUnchanged> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StatusUnchanged(body, context);
  const exception = new StatusUnchanged({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubTypeCountLimitExceededExceptionRes
 */
const de_SubTypeCountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubTypeCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubTypeCountLimitExceededException(body, context);
  const exception = new SubTypeCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetInUseExceptionRes
 */
const de_TargetInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetInUseException(body, context);
  const exception = new TargetInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetNotConnectedRes
 */
const de_TargetNotConnectedRes = async (parsedOutput: any, context: __SerdeContext): Promise<TargetNotConnected> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetNotConnected(body, context);
  const exception = new TargetNotConnected({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsErrorRes
 */
const de_TooManyTagsErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyTagsError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsError(body, context);
  const exception = new TooManyTagsError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyUpdatesRes
 */
const de_TooManyUpdatesRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyUpdates> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyUpdates(body, context);
  const exception = new TooManyUpdates({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TotalSizeLimitExceededExceptionRes
 */
const de_TotalSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TotalSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TotalSizeLimitExceededException(body, context);
  const exception = new TotalSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedCalendarExceptionRes
 */
const de_UnsupportedCalendarExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedCalendarException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedCalendarException(body, context);
  const exception = new UnsupportedCalendarException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedFeatureRequiredExceptionRes
 */
const de_UnsupportedFeatureRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedFeatureRequiredException(body, context);
  const exception = new UnsupportedFeatureRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedInventoryItemContextExceptionRes
 */
const de_UnsupportedInventoryItemContextExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedInventoryItemContextException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedInventoryItemContextException(body, context);
  const exception = new UnsupportedInventoryItemContextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionRes
 */
const de_UnsupportedInventorySchemaVersionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedInventorySchemaVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedInventorySchemaVersionException(body, context);
  const exception = new UnsupportedInventorySchemaVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperatingSystemRes
 */
const de_UnsupportedOperatingSystemRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperatingSystem> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperatingSystem(body, context);
  const exception = new UnsupportedOperatingSystem({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedParameterTypeRes
 */
const de_UnsupportedParameterTypeRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedParameterType> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedParameterType(body, context);
  const exception = new UnsupportedParameterType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedPlatformTypeRes
 */
const de_UnsupportedPlatformTypeRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlatformType> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedPlatformType(body, context);
  const exception = new UnsupportedPlatformType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccountIdList
 */
const se_AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Accounts
 */
const se_Accounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AddTagsToResourceRequest
 */
const se_AddTagsToResourceRequest = (input: AddTagsToResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Alarm
 */
const se_Alarm = (input: Alarm, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1AlarmConfiguration
 */
const se_AlarmConfiguration = (input: AlarmConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Alarms != null && { Alarms: se_AlarmList(input.Alarms, context) }),
    ...(input.IgnorePollAlarmFailure != null && { IgnorePollAlarmFailure: input.IgnorePollAlarmFailure }),
  };
};

/**
 * serializeAws_json1_1AlarmList
 */
const se_AlarmList = (input: Alarm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Alarm(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociateOpsItemRelatedItemRequest
 */
const se_AssociateOpsItemRelatedItemRequest = (
  input: AssociateOpsItemRelatedItemRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationType != null && { AssociationType: input.AssociationType }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.ResourceUri != null && { ResourceUri: input.ResourceUri }),
  };
};

/**
 * serializeAws_json1_1AssociationExecutionFilter
 */
const se_AssociationExecutionFilter = (input: AssociationExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1AssociationExecutionFilterList
 */
const se_AssociationExecutionFilterList = (input: AssociationExecutionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssociationExecutionFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociationExecutionTargetsFilter
 */
const se_AssociationExecutionTargetsFilter = (
  input: AssociationExecutionTargetsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1AssociationExecutionTargetsFilterList
 */
const se_AssociationExecutionTargetsFilterList = (
  input: AssociationExecutionTargetsFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssociationExecutionTargetsFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociationFilter
 */
const se_AssociationFilter = (input: AssociationFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1AssociationFilterList
 */
const se_AssociationFilterList = (input: AssociationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssociationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociationIdList
 */
const se_AssociationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociationStatus
 */
const se_AssociationStatus = (input: AssociationStatus, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && { AdditionalInfo: input.AdditionalInfo }),
    ...(input.Date != null && { Date: Math.round(input.Date.getTime() / 1000) }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1AttachmentsSource
 */
const se_AttachmentsSource = (input: AttachmentsSource, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_AttachmentsSourceValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1AttachmentsSourceList
 */
const se_AttachmentsSourceList = (input: AttachmentsSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttachmentsSource(entry, context);
    });
};

/**
 * serializeAws_json1_1AttachmentsSourceValues
 */
const se_AttachmentsSourceValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AutomationExecutionFilter
 */
const se_AutomationExecutionFilter = (input: AutomationExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_AutomationExecutionFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1AutomationExecutionFilterList
 */
const se_AutomationExecutionFilterList = (input: AutomationExecutionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AutomationExecutionFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1AutomationExecutionFilterValueList
 */
const se_AutomationExecutionFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AutomationParameterMap
 */
const se_AutomationParameterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AutomationParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1AutomationParameterValueList
 */
const se_AutomationParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BaselineOverride
 */
const se_BaselineOverride = (input: BaselineOverride, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalRules != null && { ApprovalRules: se_PatchRuleGroup(input.ApprovalRules, context) }),
    ...(input.ApprovedPatches != null && { ApprovedPatches: se_PatchIdList(input.ApprovedPatches, context) }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ...(input.GlobalFilters != null && { GlobalFilters: se_PatchFilterGroup(input.GlobalFilters, context) }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.RejectedPatches != null && { RejectedPatches: se_PatchIdList(input.RejectedPatches, context) }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Sources != null && { Sources: se_PatchSourceList(input.Sources, context) }),
  };
};

/**
 * serializeAws_json1_1CalendarNameOrARNList
 */
const se_CalendarNameOrARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CancelCommandRequest
 */
const se_CancelCommandRequest = (input: CancelCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.InstanceIds != null && { InstanceIds: se_InstanceIdList(input.InstanceIds, context) }),
  };
};

/**
 * serializeAws_json1_1CancelMaintenanceWindowExecutionRequest
 */
const se_CancelMaintenanceWindowExecutionRequest = (
  input: CancelMaintenanceWindowExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1CloudWatchOutputConfig
 */
const se_CloudWatchOutputConfig = (input: CloudWatchOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupName != null && { CloudWatchLogGroupName: input.CloudWatchLogGroupName }),
    ...(input.CloudWatchOutputEnabled != null && { CloudWatchOutputEnabled: input.CloudWatchOutputEnabled }),
  };
};

/**
 * serializeAws_json1_1CommandFilter
 */
const se_CommandFilter = (input: CommandFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1CommandFilterList
 */
const se_CommandFilterList = (input: CommandFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CommandFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ComplianceExecutionSummary
 */
const se_ComplianceExecutionSummary = (input: ComplianceExecutionSummary, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.ExecutionTime != null && { ExecutionTime: Math.round(input.ExecutionTime.getTime() / 1000) }),
    ...(input.ExecutionType != null && { ExecutionType: input.ExecutionType }),
  };
};

/**
 * serializeAws_json1_1ComplianceItemDetails
 */
const se_ComplianceItemDetails = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ComplianceItemEntry
 */
const se_ComplianceItemEntry = (input: ComplianceItemEntry, context: __SerdeContext): any => {
  return {
    ...(input.Details != null && { Details: se_ComplianceItemDetails(input.Details, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1ComplianceItemEntryList
 */
const se_ComplianceItemEntryList = (input: ComplianceItemEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComplianceItemEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1ComplianceResourceIdList
 */
const se_ComplianceResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ComplianceResourceTypeList
 */
const se_ComplianceResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ComplianceStringFilter
 */
const se_ComplianceStringFilter = (input: ComplianceStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_ComplianceStringFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1ComplianceStringFilterList
 */
const se_ComplianceStringFilterList = (input: ComplianceStringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComplianceStringFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ComplianceStringFilterValueList
 */
const se_ComplianceStringFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateActivationRequest
 */
const se_CreateActivationRequest = (input: CreateActivationRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultInstanceName != null && { DefaultInstanceName: input.DefaultInstanceName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExpirationDate != null && { ExpirationDate: Math.round(input.ExpirationDate.getTime() / 1000) }),
    ...(input.IamRole != null && { IamRole: input.IamRole }),
    ...(input.RegistrationLimit != null && { RegistrationLimit: input.RegistrationLimit }),
    ...(input.RegistrationMetadata != null && {
      RegistrationMetadata: se_RegistrationMetadataList(input.RegistrationMetadata, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAssociationBatchRequest
 */
const se_CreateAssociationBatchRequest = (input: CreateAssociationBatchRequest, context: __SerdeContext): any => {
  return {
    ...(input.Entries != null && { Entries: se_CreateAssociationBatchRequestEntries(input.Entries, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAssociationBatchRequestEntries
 */
const se_CreateAssociationBatchRequestEntries = (
  input: CreateAssociationBatchRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateAssociationBatchRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateAssociationBatchRequestEntry
 */
const se_CreateAssociationBatchRequestEntry = (
  input: CreateAssociationBatchRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && { CalendarNames: se_CalendarNameOrARNList(input.CalendarNames, context) }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: se_InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: se_Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.TargetLocations != null && { TargetLocations: se_TargetLocations(input.TargetLocations, context) }),
    ...(input.TargetMaps != null && { TargetMaps: se_TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAssociationRequest
 */
const se_CreateAssociationRequest = (input: CreateAssociationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && { CalendarNames: se_CalendarNameOrARNList(input.CalendarNames, context) }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: se_InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: se_Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetLocations != null && { TargetLocations: se_TargetLocations(input.TargetLocations, context) }),
    ...(input.TargetMaps != null && { TargetMaps: se_TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDocumentRequest
 */
const se_CreateDocumentRequest = (input: CreateDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attachments != null && { Attachments: se_AttachmentsSourceList(input.Attachments, context) }),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Requires != null && { Requires: se_DocumentRequiresList(input.Requires, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1CreateMaintenanceWindowRequest
 */
const se_CreateMaintenanceWindowRequest = (input: CreateMaintenanceWindowRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowUnassociatedTargets != null && { AllowUnassociatedTargets: input.AllowUnassociatedTargets }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Cutoff != null && { Cutoff: input.Cutoff }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.ScheduleTimezone != null && { ScheduleTimezone: input.ScheduleTimezone }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateOpsItemRequest
 */
const se_CreateOpsItemRequest = (input: CreateOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActualEndTime != null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
    ...(input.ActualStartTime != null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Notifications != null && { Notifications: se_OpsItemNotifications(input.Notifications, context) }),
    ...(input.OperationalData != null && {
      OperationalData: se_OpsItemOperationalData(input.OperationalData, context),
    }),
    ...(input.OpsItemType != null && { OpsItemType: input.OpsItemType }),
    ...(input.PlannedEndTime != null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
    ...(input.PlannedStartTime != null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RelatedOpsItems != null && { RelatedOpsItems: se_RelatedOpsItems(input.RelatedOpsItems, context) }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1CreateOpsMetadataRequest
 */
const se_CreateOpsMetadataRequest = (input: CreateOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Metadata != null && { Metadata: se_MetadataMap(input.Metadata, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePatchBaselineRequest
 */
const se_CreatePatchBaselineRequest = (input: CreatePatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalRules != null && { ApprovalRules: se_PatchRuleGroup(input.ApprovalRules, context) }),
    ...(input.ApprovedPatches != null && { ApprovedPatches: se_PatchIdList(input.ApprovedPatches, context) }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlobalFilters != null && { GlobalFilters: se_PatchFilterGroup(input.GlobalFilters, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.RejectedPatches != null && { RejectedPatches: se_PatchIdList(input.RejectedPatches, context) }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Sources != null && { Sources: se_PatchSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateResourceDataSyncRequest
 */
const se_CreateResourceDataSyncRequest = (input: CreateResourceDataSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.S3Destination != null && {
      S3Destination: se_ResourceDataSyncS3Destination(input.S3Destination, context),
    }),
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncSource != null && { SyncSource: se_ResourceDataSyncSource(input.SyncSource, context) }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

/**
 * serializeAws_json1_1DeleteActivationRequest
 */
const se_DeleteActivationRequest = (input: DeleteActivationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActivationId != null && { ActivationId: input.ActivationId }),
  };
};

/**
 * serializeAws_json1_1DeleteAssociationRequest
 */
const se_DeleteAssociationRequest = (input: DeleteAssociationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteDocumentRequest
 */
const se_DeleteDocumentRequest = (input: DeleteDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Force != null && { Force: input.Force }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1DeleteInventoryRequest
 */
const se_DeleteInventoryRequest = (input: DeleteInventoryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.SchemaDeleteOption != null && { SchemaDeleteOption: input.SchemaDeleteOption }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1DeleteMaintenanceWindowRequest
 */
const se_DeleteMaintenanceWindowRequest = (input: DeleteMaintenanceWindowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1DeleteOpsMetadataRequest
 */
const se_DeleteOpsMetadataRequest = (input: DeleteOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

/**
 * serializeAws_json1_1DeleteParameterRequest
 */
const se_DeleteParameterRequest = (input: DeleteParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteParametersRequest
 */
const se_DeleteParametersRequest = (input: DeleteParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: se_ParameterNameList(input.Names, context) }),
  };
};

/**
 * serializeAws_json1_1DeletePatchBaselineRequest
 */
const se_DeletePatchBaselineRequest = (input: DeletePatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceDataSyncRequest
 */
const se_DeleteResourceDataSyncRequest = (input: DeleteResourceDataSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyHash != null && { PolicyHash: input.PolicyHash }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DeregisterManagedInstanceRequest
 */
const se_DeregisterManagedInstanceRequest = (input: DeregisterManagedInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest
 */
const se_DeregisterPatchBaselineForPatchGroupRequest = (
  input: DeregisterPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

/**
 * serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest
 */
const se_DeregisterTargetFromMaintenanceWindowRequest = (
  input: DeregisterTargetFromMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Safe != null && { Safe: input.Safe }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTargetId != null && { WindowTargetId: input.WindowTargetId }),
  };
};

/**
 * serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest
 */
const se_DeregisterTaskFromMaintenanceWindowRequest = (
  input: DeregisterTaskFromMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

/**
 * serializeAws_json1_1DescribeActivationsFilter
 */
const se_DescribeActivationsFilter = (input: DescribeActivationsFilter, context: __SerdeContext): any => {
  return {
    ...(input.FilterKey != null && { FilterKey: input.FilterKey }),
    ...(input.FilterValues != null && { FilterValues: se_StringList(input.FilterValues, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeActivationsFilterList
 */
const se_DescribeActivationsFilterList = (input: DescribeActivationsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DescribeActivationsFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DescribeActivationsRequest
 */
const se_DescribeActivationsRequest = (input: DescribeActivationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_DescribeActivationsFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionsRequest
 */
const se_DescribeAssociationExecutionsRequest = (
  input: DescribeAssociationExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.Filters != null && { Filters: se_AssociationExecutionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionTargetsRequest
 */
const se_DescribeAssociationExecutionTargetsRequest = (
  input: DescribeAssociationExecutionTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.Filters != null && { Filters: se_AssociationExecutionTargetsFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAssociationRequest
 */
const se_DescribeAssociationRequest = (input: DescribeAssociationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.AssociationVersion != null && { AssociationVersion: input.AssociationVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeAutomationExecutionsRequest
 */
const se_DescribeAutomationExecutionsRequest = (
  input: DescribeAutomationExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_AutomationExecutionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAutomationStepExecutionsRequest
 */
const se_DescribeAutomationStepExecutionsRequest = (
  input: DescribeAutomationStepExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Filters != null && { Filters: se_StepExecutionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ReverseOrder != null && { ReverseOrder: input.ReverseOrder }),
  };
};

/**
 * serializeAws_json1_1DescribeAvailablePatchesRequest
 */
const se_DescribeAvailablePatchesRequest = (input: DescribeAvailablePatchesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDocumentPermissionRequest
 */
const se_DescribeDocumentPermissionRequest = (
  input: DescribeDocumentPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionType != null && { PermissionType: input.PermissionType }),
  };
};

/**
 * serializeAws_json1_1DescribeDocumentRequest
 */
const se_DescribeDocumentRequest = (input: DescribeDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest
 */
const se_DescribeEffectiveInstanceAssociationsRequest = (
  input: DescribeEffectiveInstanceAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest
 */
const se_DescribeEffectivePatchesForPatchBaselineRequest = (
  input: DescribeEffectivePatchesForPatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeInstanceAssociationsStatusRequest
 */
const se_DescribeInstanceAssociationsStatusRequest = (
  input: DescribeInstanceAssociationsStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeInstanceInformationRequest
 */
const se_DescribeInstanceInformationRequest = (
  input: DescribeInstanceInformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_InstanceInformationStringFilterList(input.Filters, context) }),
    ...(input.InstanceInformationFilterList != null && {
      InstanceInformationFilterList: se_InstanceInformationFilterList(input.InstanceInformationFilterList, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeInstancePatchesRequest
 */
const se_DescribeInstancePatchesRequest = (input: DescribeInstancePatchesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest
 */
const se_DescribeInstancePatchStatesForPatchGroupRequest = (
  input: DescribeInstancePatchStatesForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_InstancePatchStateFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesRequest
 */
const se_DescribeInstancePatchStatesRequest = (
  input: DescribeInstancePatchStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: se_InstanceIdList(input.InstanceIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeInventoryDeletionsRequest
 */
const se_DescribeInventoryDeletionsRequest = (
  input: DescribeInventoryDeletionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeletionId != null && { DeletionId: input.DeletionId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest
 */
const se_DescribeMaintenanceWindowExecutionsRequest = (
  input: DescribeMaintenanceWindowExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest
 */
const se_DescribeMaintenanceWindowExecutionTaskInvocationsRequest = (
  input: DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest
 */
const se_DescribeMaintenanceWindowExecutionTasksRequest = (
  input: DescribeMaintenanceWindowExecutionTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest
 */
const se_DescribeMaintenanceWindowScheduleRequest = (
  input: DescribeMaintenanceWindowScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest
 */
const se_DescribeMaintenanceWindowsForTargetRequest = (
  input: DescribeMaintenanceWindowsForTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsRequest
 */
const se_DescribeMaintenanceWindowsRequest = (
  input: DescribeMaintenanceWindowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest
 */
const se_DescribeMaintenanceWindowTargetsRequest = (
  input: DescribeMaintenanceWindowTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTasksRequest
 */
const se_DescribeMaintenanceWindowTasksRequest = (
  input: DescribeMaintenanceWindowTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1DescribeOpsItemsRequest
 */
const se_DescribeOpsItemsRequest = (input: DescribeOpsItemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsItemFilters != null && { OpsItemFilters: se_OpsItemFilters(input.OpsItemFilters, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeParametersRequest
 */
const se_DescribeParametersRequest = (input: DescribeParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ParametersFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterFilters != null && {
      ParameterFilters: se_ParameterStringFilterList(input.ParameterFilters, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribePatchBaselinesRequest
 */
const se_DescribePatchBaselinesRequest = (input: DescribePatchBaselinesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribePatchGroupsRequest
 */
const se_DescribePatchGroupsRequest = (input: DescribePatchGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribePatchGroupStateRequest
 */
const se_DescribePatchGroupStateRequest = (input: DescribePatchGroupStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

/**
 * serializeAws_json1_1DescribePatchPropertiesRequest
 */
const se_DescribePatchPropertiesRequest = (input: DescribePatchPropertiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.PatchSet != null && { PatchSet: input.PatchSet }),
    ...(input.Property != null && { Property: input.Property }),
  };
};

/**
 * serializeAws_json1_1DescribeSessionsRequest
 */
const se_DescribeSessionsRequest = (input: DescribeSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_SessionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_json1_1DisassociateOpsItemRelatedItemRequest
 */
const se_DisassociateOpsItemRelatedItemRequest = (
  input: DisassociateOpsItemRelatedItemRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

/**
 * serializeAws_json1_1DocumentFilter
 */
const se_DocumentFilter = (input: DocumentFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1DocumentFilterList
 */
const se_DocumentFilterList = (input: DocumentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentKeyValuesFilter
 */
const se_DocumentKeyValuesFilter = (input: DocumentKeyValuesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_DocumentKeyValuesFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1DocumentKeyValuesFilterList
 */
const se_DocumentKeyValuesFilterList = (input: DocumentKeyValuesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentKeyValuesFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentKeyValuesFilterValues
 */
const se_DocumentKeyValuesFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DocumentRequires
 */
const se_DocumentRequires = (input: DocumentRequires, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequireType != null && { RequireType: input.RequireType }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1DocumentRequiresList
 */
const se_DocumentRequiresList = (input: DocumentRequires[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentRequires(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentReviewCommentList
 */
const se_DocumentReviewCommentList = (input: DocumentReviewCommentSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentReviewCommentSource(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentReviewCommentSource
 */
const se_DocumentReviewCommentSource = (input: DocumentReviewCommentSource, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DocumentReviews
 */
const se_DocumentReviews = (input: DocumentReviews, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Comment != null && { Comment: se_DocumentReviewCommentList(input.Comment, context) }),
  };
};

/**
 * serializeAws_json1_1GetAutomationExecutionRequest
 */
const se_GetAutomationExecutionRequest = (input: GetAutomationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetCalendarStateRequest
 */
const se_GetCalendarStateRequest = (input: GetCalendarStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.AtTime != null && { AtTime: input.AtTime }),
    ...(input.CalendarNames != null && { CalendarNames: se_CalendarNameOrARNList(input.CalendarNames, context) }),
  };
};

/**
 * serializeAws_json1_1GetCommandInvocationRequest
 */
const se_GetCommandInvocationRequest = (input: GetCommandInvocationRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.PluginName != null && { PluginName: input.PluginName }),
  };
};

/**
 * serializeAws_json1_1GetConnectionStatusRequest
 */
const se_GetConnectionStatusRequest = (input: GetConnectionStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_json1_1GetDefaultPatchBaselineRequest
 */
const se_GetDefaultPatchBaselineRequest = (input: GetDefaultPatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
  };
};

/**
 * serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest
 */
const se_GetDeployablePatchSnapshotForInstanceRequest = (
  input: GetDeployablePatchSnapshotForInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineOverride != null && { BaselineOverride: se_BaselineOverride(input.BaselineOverride, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

/**
 * serializeAws_json1_1GetDocumentRequest
 */
const se_GetDocumentRequest = (input: GetDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1GetInventoryRequest
 */
const se_GetInventoryRequest = (input: GetInventoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && { Aggregators: se_InventoryAggregatorList(input.Aggregators, context) }),
    ...(input.Filters != null && { Filters: se_InventoryFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResultAttributes != null && {
      ResultAttributes: se_ResultAttributeList(input.ResultAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetInventorySchemaRequest
 */
const se_GetInventorySchemaRequest = (input: GetInventorySchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregator != null && { Aggregator: input.Aggregator }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubType != null && { SubType: input.SubType }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionRequest
 */
const se_GetMaintenanceWindowExecutionRequest = (
  input: GetMaintenanceWindowExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest
 */
const se_GetMaintenanceWindowExecutionTaskInvocationRequest = (
  input: GetMaintenanceWindowExecutionTaskInvocationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvocationId != null && { InvocationId: input.InvocationId }),
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest
 */
const se_GetMaintenanceWindowExecutionTaskRequest = (
  input: GetMaintenanceWindowExecutionTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetMaintenanceWindowRequest
 */
const se_GetMaintenanceWindowRequest = (input: GetMaintenanceWindowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1GetMaintenanceWindowTaskRequest
 */
const se_GetMaintenanceWindowTaskRequest = (input: GetMaintenanceWindowTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

/**
 * serializeAws_json1_1GetOpsItemRequest
 */
const se_GetOpsItemRequest = (input: GetOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.OpsItemArn != null && { OpsItemArn: input.OpsItemArn }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

/**
 * serializeAws_json1_1GetOpsMetadataRequest
 */
const se_GetOpsMetadataRequest = (input: GetOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

/**
 * serializeAws_json1_1GetOpsSummaryRequest
 */
const se_GetOpsSummaryRequest = (input: GetOpsSummaryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && { Aggregators: se_OpsAggregatorList(input.Aggregators, context) }),
    ...(input.Filters != null && { Filters: se_OpsFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResultAttributes != null && {
      ResultAttributes: se_OpsResultAttributeList(input.ResultAttributes, context),
    }),
    ...(input.SyncName != null && { SyncName: input.SyncName }),
  };
};

/**
 * serializeAws_json1_1GetParameterHistoryRequest
 */
const se_GetParameterHistoryRequest = (input: GetParameterHistoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

/**
 * serializeAws_json1_1GetParameterRequest
 */
const se_GetParameterRequest = (input: GetParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

/**
 * serializeAws_json1_1GetParametersByPathRequest
 */
const se_GetParametersByPathRequest = (input: GetParametersByPathRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterFilters != null && {
      ParameterFilters: se_ParameterStringFilterList(input.ParameterFilters, context),
    }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Recursive != null && { Recursive: input.Recursive }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

/**
 * serializeAws_json1_1GetParametersRequest
 */
const se_GetParametersRequest = (input: GetParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: se_ParameterNameList(input.Names, context) }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

/**
 * serializeAws_json1_1GetPatchBaselineForPatchGroupRequest
 */
const se_GetPatchBaselineForPatchGroupRequest = (
  input: GetPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

/**
 * serializeAws_json1_1GetPatchBaselineRequest
 */
const se_GetPatchBaselineRequest = (input: GetPatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

/**
 * serializeAws_json1_1GetResourcePoliciesRequest
 */
const se_GetResourcePoliciesRequest = (input: GetResourcePoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetServiceSettingRequest
 */
const se_GetServiceSettingRequest = (input: GetServiceSettingRequest, context: __SerdeContext): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
  };
};

/**
 * serializeAws_json1_1InstanceAssociationOutputLocation
 */
const se_InstanceAssociationOutputLocation = (
  input: InstanceAssociationOutputLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Location != null && { S3Location: se_S3OutputLocation(input.S3Location, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceIdList
 */
const se_InstanceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceInformationFilter
 */
const se_InstanceInformationFilter = (input: InstanceInformationFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.valueSet != null && { valueSet: se_InstanceInformationFilterValueSet(input.valueSet, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceInformationFilterList
 */
const se_InstanceInformationFilterList = (input: InstanceInformationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceInformationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1InstanceInformationFilterValueSet
 */
const se_InstanceInformationFilterValueSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceInformationStringFilter
 */
const se_InstanceInformationStringFilter = (input: InstanceInformationStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_InstanceInformationFilterValueSet(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceInformationStringFilterList
 */
const se_InstanceInformationStringFilterList = (
  input: InstanceInformationStringFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceInformationStringFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1InstancePatchStateFilter
 */
const se_InstancePatchStateFilter = (input: InstancePatchStateFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_InstancePatchStateFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1InstancePatchStateFilterList
 */
const se_InstancePatchStateFilterList = (input: InstancePatchStateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstancePatchStateFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1InstancePatchStateFilterValues
 */
const se_InstancePatchStateFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InventoryAggregator
 */
const se_InventoryAggregator = (input: InventoryAggregator, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && { Aggregators: se_InventoryAggregatorList(input.Aggregators, context) }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Groups != null && { Groups: se_InventoryGroupList(input.Groups, context) }),
  };
};

/**
 * serializeAws_json1_1InventoryAggregatorList
 */
const se_InventoryAggregatorList = (input: InventoryAggregator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryAggregator(entry, context);
    });
};

/**
 * serializeAws_json1_1InventoryFilter
 */
const se_InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_InventoryFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1InventoryFilterList
 */
const se_InventoryFilterList = (input: InventoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1InventoryFilterValueList
 */
const se_InventoryFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InventoryGroup
 */
const se_InventoryGroup = (input: InventoryGroup, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_InventoryFilterList(input.Filters, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1InventoryGroupList
 */
const se_InventoryGroupList = (input: InventoryGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1InventoryItem
 */
const se_InventoryItem = (input: InventoryItem, context: __SerdeContext): any => {
  return {
    ...(input.CaptureTime != null && { CaptureTime: input.CaptureTime }),
    ...(input.Content != null && { Content: se_InventoryItemEntryList(input.Content, context) }),
    ...(input.ContentHash != null && { ContentHash: input.ContentHash }),
    ...(input.Context != null && { Context: se_InventoryItemContentContext(input.Context, context) }),
    ...(input.SchemaVersion != null && { SchemaVersion: input.SchemaVersion }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1InventoryItemContentContext
 */
const se_InventoryItemContentContext = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1InventoryItemEntry
 */
const se_InventoryItemEntry = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1InventoryItemEntryList
 */
const se_InventoryItemEntryList = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryItemEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1InventoryItemList
 */
const se_InventoryItemList = (input: InventoryItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryItem(entry, context);
    });
};

/**
 * serializeAws_json1_1KeyList
 */
const se_KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LabelParameterVersionRequest
 */
const se_LabelParameterVersionRequest = (input: LabelParameterVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: se_ParameterLabelList(input.Labels, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParameterVersion != null && { ParameterVersion: input.ParameterVersion }),
  };
};

/**
 * serializeAws_json1_1ListAssociationsRequest
 */
const se_ListAssociationsRequest = (input: ListAssociationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationFilterList != null && {
      AssociationFilterList: se_AssociationFilterList(input.AssociationFilterList, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListAssociationVersionsRequest
 */
const se_ListAssociationVersionsRequest = (input: ListAssociationVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCommandInvocationsRequest
 */
const se_ListCommandInvocationsRequest = (input: ListCommandInvocationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.Details != null && { Details: input.Details }),
    ...(input.Filters != null && { Filters: se_CommandFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCommandsRequest
 */
const se_ListCommandsRequest = (input: ListCommandsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.Filters != null && { Filters: se_CommandFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListComplianceItemsRequest
 */
const se_ListComplianceItemsRequest = (input: ListComplianceItemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceIds != null && { ResourceIds: se_ComplianceResourceIdList(input.ResourceIds, context) }),
    ...(input.ResourceTypes != null && { ResourceTypes: se_ComplianceResourceTypeList(input.ResourceTypes, context) }),
  };
};

/**
 * serializeAws_json1_1ListComplianceSummariesRequest
 */
const se_ListComplianceSummariesRequest = (input: ListComplianceSummariesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentMetadataHistoryRequest
 */
const se_ListDocumentMetadataHistoryRequest = (
  input: ListDocumentMetadataHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentsRequest
 */
const se_ListDocumentsRequest = (input: ListDocumentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentFilterList != null && {
      DocumentFilterList: se_DocumentFilterList(input.DocumentFilterList, context),
    }),
    ...(input.Filters != null && { Filters: se_DocumentKeyValuesFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentVersionsRequest
 */
const se_ListDocumentVersionsRequest = (input: ListDocumentVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListInventoryEntriesRequest
 */
const se_ListInventoryEntriesRequest = (input: ListInventoryEntriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_InventoryFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1ListOpsItemEventsRequest
 */
const se_ListOpsItemEventsRequest = (input: ListOpsItemEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_OpsItemEventFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListOpsItemRelatedItemsRequest
 */
const se_ListOpsItemRelatedItemsRequest = (input: ListOpsItemRelatedItemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_OpsItemRelatedItemsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

/**
 * serializeAws_json1_1ListOpsMetadataRequest
 */
const se_ListOpsMetadataRequest = (input: ListOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_OpsMetadataFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceComplianceSummariesRequest
 */
const se_ListResourceComplianceSummariesRequest = (
  input: ListResourceComplianceSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceDataSyncRequest
 */
const se_ListResourceDataSyncRequest = (input: ListResourceDataSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1LoggingInfo
 */
const se_LoggingInfo = (input: LoggingInfo, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.S3Region != null && { S3Region: input.S3Region }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowAutomationParameters
 */
const se_MaintenanceWindowAutomationParameters = (
  input: MaintenanceWindowAutomationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Parameters != null && { Parameters: se_AutomationParameterMap(input.Parameters, context) }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowFilter
 */
const se_MaintenanceWindowFilter = (input: MaintenanceWindowFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_MaintenanceWindowFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowFilterList
 */
const se_MaintenanceWindowFilterList = (input: MaintenanceWindowFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MaintenanceWindowFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1MaintenanceWindowFilterValues
 */
const se_MaintenanceWindowFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MaintenanceWindowLambdaParameters
 */
const se_MaintenanceWindowLambdaParameters = (
  input: MaintenanceWindowLambdaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientContext != null && { ClientContext: input.ClientContext }),
    ...(input.Payload != null && { Payload: context.base64Encoder(input.Payload) }),
    ...(input.Qualifier != null && { Qualifier: input.Qualifier }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowRunCommandParameters
 */
const se_MaintenanceWindowRunCommandParameters = (
  input: MaintenanceWindowRunCommandParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchOutputConfig != null && {
      CloudWatchOutputConfig: se_CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
    }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.DocumentHash != null && { DocumentHash: input.DocumentHash }),
    ...(input.DocumentHashType != null && { DocumentHashType: input.DocumentHashType }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.NotificationConfig != null && {
      NotificationConfig: se_NotificationConfig(input.NotificationConfig, context),
    }),
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.Parameters != null && { Parameters: se_Parameters(input.Parameters, context) }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowStepFunctionsParameters
 */
const se_MaintenanceWindowStepFunctionsParameters = (
  input: MaintenanceWindowStepFunctionsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Input != null && { Input: input.Input }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowTaskInvocationParameters
 */
const se_MaintenanceWindowTaskInvocationParameters = (
  input: MaintenanceWindowTaskInvocationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Automation != null && {
      Automation: se_MaintenanceWindowAutomationParameters(input.Automation, context),
    }),
    ...(input.Lambda != null && { Lambda: se_MaintenanceWindowLambdaParameters(input.Lambda, context) }),
    ...(input.RunCommand != null && {
      RunCommand: se_MaintenanceWindowRunCommandParameters(input.RunCommand, context),
    }),
    ...(input.StepFunctions != null && {
      StepFunctions: se_MaintenanceWindowStepFunctionsParameters(input.StepFunctions, context),
    }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowTaskParameters
 */
const se_MaintenanceWindowTaskParameters = (
  input: Record<string, MaintenanceWindowTaskParameterValueExpression>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MaintenanceWindowTaskParameterValueExpression(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression
 */
const se_MaintenanceWindowTaskParameterValueExpression = (
  input: MaintenanceWindowTaskParameterValueExpression,
  context: __SerdeContext
): any => {
  return {
    ...(input.Values != null && { Values: se_MaintenanceWindowTaskParameterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1MaintenanceWindowTaskParameterValueList
 */
const se_MaintenanceWindowTaskParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetadataKeysToDeleteList
 */
const se_MetadataKeysToDeleteList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetadataMap
 */
const se_MetadataMap = (input: Record<string, MetadataValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MetadataValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MetadataValue
 */
const se_MetadataValue = (input: MetadataValue, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ModifyDocumentPermissionRequest
 */
const se_ModifyDocumentPermissionRequest = (input: ModifyDocumentPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountIdsToAdd != null && { AccountIdsToAdd: se_AccountIdList(input.AccountIdsToAdd, context) }),
    ...(input.AccountIdsToRemove != null && {
      AccountIdsToRemove: se_AccountIdList(input.AccountIdsToRemove, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PermissionType != null && { PermissionType: input.PermissionType }),
    ...(input.SharedDocumentVersion != null && { SharedDocumentVersion: input.SharedDocumentVersion }),
  };
};

/**
 * serializeAws_json1_1NotificationConfig
 */
const se_NotificationConfig = (input: NotificationConfig, context: __SerdeContext): any => {
  return {
    ...(input.NotificationArn != null && { NotificationArn: input.NotificationArn }),
    ...(input.NotificationEvents != null && {
      NotificationEvents: se_NotificationEventList(input.NotificationEvents, context),
    }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
  };
};

/**
 * serializeAws_json1_1NotificationEventList
 */
const se_NotificationEventList = (input: (NotificationEvent | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsAggregator
 */
const se_OpsAggregator = (input: OpsAggregator, context: __SerdeContext): any => {
  return {
    ...(input.AggregatorType != null && { AggregatorType: input.AggregatorType }),
    ...(input.Aggregators != null && { Aggregators: se_OpsAggregatorList(input.Aggregators, context) }),
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Filters != null && { Filters: se_OpsFilterList(input.Filters, context) }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.Values != null && { Values: se_OpsAggregatorValueMap(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsAggregatorList
 */
const se_OpsAggregatorList = (input: OpsAggregator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsAggregator(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsAggregatorValueMap
 */
const se_OpsAggregatorValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1OpsFilter
 */
const se_OpsFilter = (input: OpsFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_OpsFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsFilterList
 */
const se_OpsFilterList = (input: OpsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsFilterValueList
 */
const se_OpsFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsItemDataValue
 */
const se_OpsItemDataValue = (input: OpsItemDataValue, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1OpsItemEventFilter
 */
const se_OpsItemEventFilter = (input: OpsItemEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_OpsItemEventFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsItemEventFilters
 */
const se_OpsItemEventFilters = (input: OpsItemEventFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsItemEventFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsItemEventFilterValues
 */
const se_OpsItemEventFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsItemFilter
 */
const se_OpsItemFilter = (input: OpsItemFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_OpsItemFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsItemFilters
 */
const se_OpsItemFilters = (input: OpsItemFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsItemFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsItemFilterValues
 */
const se_OpsItemFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsItemNotification
 */
const se_OpsItemNotification = (input: OpsItemNotification, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1OpsItemNotifications
 */
const se_OpsItemNotifications = (input: OpsItemNotification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsItemNotification(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsItemOperationalData
 */
const se_OpsItemOperationalData = (input: Record<string, OpsItemDataValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_OpsItemDataValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1OpsItemOpsDataKeysList
 */
const se_OpsItemOpsDataKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsItemRelatedItemsFilter
 */
const se_OpsItemRelatedItemsFilter = (input: OpsItemRelatedItemsFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_OpsItemRelatedItemsFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsItemRelatedItemsFilters
 */
const se_OpsItemRelatedItemsFilters = (input: OpsItemRelatedItemsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsItemRelatedItemsFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsItemRelatedItemsFilterValues
 */
const se_OpsItemRelatedItemsFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsMetadataFilter
 */
const se_OpsMetadataFilter = (input: OpsMetadataFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_OpsMetadataFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OpsMetadataFilterList
 */
const se_OpsMetadataFilterList = (input: OpsMetadataFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsMetadataFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OpsMetadataFilterValueList
 */
const se_OpsMetadataFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpsResultAttribute
 */
const se_OpsResultAttribute = (input: OpsResultAttribute, context: __SerdeContext): any => {
  return {
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1OpsResultAttributeList
 */
const se_OpsResultAttributeList = (input: OpsResultAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpsResultAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1ParameterLabelList
 */
const se_ParameterLabelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterNameList
 */
const se_ParameterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Parameters
 */
const se_Parameters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ParametersFilter
 */
const se_ParametersFilter = (input: ParametersFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_ParametersFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1ParametersFilterList
 */
const se_ParametersFilterList = (input: ParametersFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParametersFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ParametersFilterValueList
 */
const se_ParametersFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterStringFilter
 */
const se_ParameterStringFilter = (input: ParameterStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Option != null && { Option: input.Option }),
    ...(input.Values != null && { Values: se_ParameterStringFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1ParameterStringFilterList
 */
const se_ParameterStringFilterList = (input: ParameterStringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterStringFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ParameterStringFilterValueList
 */
const se_ParameterStringFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterValueList
 */
const se_ParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PatchFilter
 */
const se_PatchFilter = (input: PatchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_PatchFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1PatchFilterGroup
 */
const se_PatchFilterGroup = (input: PatchFilterGroup, context: __SerdeContext): any => {
  return {
    ...(input.PatchFilters != null && { PatchFilters: se_PatchFilterList(input.PatchFilters, context) }),
  };
};

/**
 * serializeAws_json1_1PatchFilterList
 */
const se_PatchFilterList = (input: PatchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PatchFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1PatchFilterValueList
 */
const se_PatchFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PatchIdList
 */
const se_PatchIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PatchOrchestratorFilter
 */
const se_PatchOrchestratorFilter = (input: PatchOrchestratorFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_PatchOrchestratorFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1PatchOrchestratorFilterList
 */
const se_PatchOrchestratorFilterList = (input: PatchOrchestratorFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PatchOrchestratorFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1PatchOrchestratorFilterValues
 */
const se_PatchOrchestratorFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PatchRule
 */
const se_PatchRule = (input: PatchRule, context: __SerdeContext): any => {
  return {
    ...(input.ApproveAfterDays != null && { ApproveAfterDays: input.ApproveAfterDays }),
    ...(input.ApproveUntilDate != null && { ApproveUntilDate: input.ApproveUntilDate }),
    ...(input.ComplianceLevel != null && { ComplianceLevel: input.ComplianceLevel }),
    ...(input.EnableNonSecurity != null && { EnableNonSecurity: input.EnableNonSecurity }),
    ...(input.PatchFilterGroup != null && { PatchFilterGroup: se_PatchFilterGroup(input.PatchFilterGroup, context) }),
  };
};

/**
 * serializeAws_json1_1PatchRuleGroup
 */
const se_PatchRuleGroup = (input: PatchRuleGroup, context: __SerdeContext): any => {
  return {
    ...(input.PatchRules != null && { PatchRules: se_PatchRuleList(input.PatchRules, context) }),
  };
};

/**
 * serializeAws_json1_1PatchRuleList
 */
const se_PatchRuleList = (input: PatchRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PatchRule(entry, context);
    });
};

/**
 * serializeAws_json1_1PatchSource
 */
const se_PatchSource = (input: PatchSource, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Products != null && { Products: se_PatchSourceProductList(input.Products, context) }),
  };
};

/**
 * serializeAws_json1_1PatchSourceList
 */
const se_PatchSourceList = (input: PatchSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PatchSource(entry, context);
    });
};

/**
 * serializeAws_json1_1PatchSourceProductList
 */
const se_PatchSourceProductList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutComplianceItemsRequest
 */
const se_PutComplianceItemsRequest = (input: PutComplianceItemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ExecutionSummary != null && {
      ExecutionSummary: se_ComplianceExecutionSummary(input.ExecutionSummary, context),
    }),
    ...(input.ItemContentHash != null && { ItemContentHash: input.ItemContentHash }),
    ...(input.Items != null && { Items: se_ComplianceItemEntryList(input.Items, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.UploadType != null && { UploadType: input.UploadType }),
  };
};

/**
 * serializeAws_json1_1PutInventoryRequest
 */
const se_PutInventoryRequest = (input: PutInventoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Items != null && { Items: se_InventoryItemList(input.Items, context) }),
  };
};

/**
 * serializeAws_json1_1PutParameterRequest
 */
const se_PutParameterRequest = (input: PutParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedPattern != null && { AllowedPattern: input.AllowedPattern }),
    ...(input.DataType != null && { DataType: input.DataType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Overwrite != null && { Overwrite: input.Overwrite }),
    ...(input.Policies != null && { Policies: input.Policies }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Tier != null && { Tier: input.Tier }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PolicyHash != null && { PolicyHash: input.PolicyHash }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1Regions
 */
const se_Regions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RegisterDefaultPatchBaselineRequest
 */
const se_RegisterDefaultPatchBaselineRequest = (
  input: RegisterDefaultPatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

/**
 * serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest
 */
const se_RegisterPatchBaselineForPatchGroupRequest = (
  input: RegisterPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

/**
 * serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest
 */
const se_RegisterTargetWithMaintenanceWindowRequest = (
  input: RegisterTargetWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OwnerInformation != null && { OwnerInformation: input.OwnerInformation }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest
 */
const se_RegisterTaskWithMaintenanceWindowRequest = (
  input: RegisterTaskWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CutoffBehavior != null && { CutoffBehavior: input.CutoffBehavior }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoggingInfo != null && { LoggingInfo: se_LoggingInfo(input.LoggingInfo, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
    ...(input.TaskInvocationParameters != null && {
      TaskInvocationParameters: se_MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context),
    }),
    ...(input.TaskParameters != null && {
      TaskParameters: se_MaintenanceWindowTaskParameters(input.TaskParameters, context),
    }),
    ...(input.TaskType != null && { TaskType: input.TaskType }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1RegistrationMetadataItem
 */
const se_RegistrationMetadataItem = (input: RegistrationMetadataItem, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1RegistrationMetadataList
 */
const se_RegistrationMetadataList = (input: RegistrationMetadataItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RegistrationMetadataItem(entry, context);
    });
};

/**
 * serializeAws_json1_1RelatedOpsItem
 */
const se_RelatedOpsItem = (input: RelatedOpsItem, context: __SerdeContext): any => {
  return {
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

/**
 * serializeAws_json1_1RelatedOpsItems
 */
const se_RelatedOpsItems = (input: RelatedOpsItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RelatedOpsItem(entry, context);
    });
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceRequest
 */
const se_RemoveTagsFromResourceRequest = (input: RemoveTagsFromResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagKeys != null && { TagKeys: se_KeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ResetServiceSettingRequest
 */
const se_ResetServiceSettingRequest = (input: ResetServiceSettingRequest, context: __SerdeContext): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource
 */
const se_ResourceDataSyncAwsOrganizationsSource = (
  input: ResourceDataSyncAwsOrganizationsSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationSourceType != null && { OrganizationSourceType: input.OrganizationSourceType }),
    ...(input.OrganizationalUnits != null && {
      OrganizationalUnits: se_ResourceDataSyncOrganizationalUnitList(input.OrganizationalUnits, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncDestinationDataSharing
 */
const se_ResourceDataSyncDestinationDataSharing = (
  input: ResourceDataSyncDestinationDataSharing,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationDataSharingType != null && { DestinationDataSharingType: input.DestinationDataSharingType }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncOrganizationalUnit
 */
const se_ResourceDataSyncOrganizationalUnit = (
  input: ResourceDataSyncOrganizationalUnit,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncOrganizationalUnitList
 */
const se_ResourceDataSyncOrganizationalUnitList = (
  input: ResourceDataSyncOrganizationalUnit[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceDataSyncOrganizationalUnit(entry, context);
    });
};

/**
 * serializeAws_json1_1ResourceDataSyncS3Destination
 */
const se_ResourceDataSyncS3Destination = (input: ResourceDataSyncS3Destination, context: __SerdeContext): any => {
  return {
    ...(input.AWSKMSKeyARN != null && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.DestinationDataSharing != null && {
      DestinationDataSharing: se_ResourceDataSyncDestinationDataSharing(input.DestinationDataSharing, context),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.SyncFormat != null && { SyncFormat: input.SyncFormat }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncSource
 */
const se_ResourceDataSyncSource = (input: ResourceDataSyncSource, context: __SerdeContext): any => {
  return {
    ...(input.AwsOrganizationsSource != null && {
      AwsOrganizationsSource: se_ResourceDataSyncAwsOrganizationsSource(input.AwsOrganizationsSource, context),
    }),
    ...(input.EnableAllOpsDataSources != null && { EnableAllOpsDataSources: input.EnableAllOpsDataSources }),
    ...(input.IncludeFutureRegions != null && { IncludeFutureRegions: input.IncludeFutureRegions }),
    ...(input.SourceRegions != null && {
      SourceRegions: se_ResourceDataSyncSourceRegionList(input.SourceRegions, context),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

/**
 * serializeAws_json1_1ResourceDataSyncSourceRegionList
 */
const se_ResourceDataSyncSourceRegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResultAttribute
 */
const se_ResultAttribute = (input: ResultAttribute, context: __SerdeContext): any => {
  return {
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1ResultAttributeList
 */
const se_ResultAttributeList = (input: ResultAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResultAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1ResumeSessionRequest
 */
const se_ResumeSessionRequest = (input: ResumeSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1Runbook
 */
const se_Runbook = (input: Runbook, context: __SerdeContext): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Parameters != null && { Parameters: se_AutomationParameterMap(input.Parameters, context) }),
    ...(input.TargetLocations != null && { TargetLocations: se_TargetLocations(input.TargetLocations, context) }),
    ...(input.TargetMaps != null && { TargetMaps: se_TargetMaps(input.TargetMaps, context) }),
    ...(input.TargetParameterName != null && { TargetParameterName: input.TargetParameterName }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1Runbooks
 */
const se_Runbooks = (input: Runbook[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Runbook(entry, context);
    });
};

/**
 * serializeAws_json1_1S3OutputLocation
 */
const se_S3OutputLocation = (input: S3OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.OutputS3Region != null && { OutputS3Region: input.OutputS3Region }),
  };
};

/**
 * serializeAws_json1_1SendAutomationSignalRequest
 */
const se_SendAutomationSignalRequest = (input: SendAutomationSignalRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Payload != null && { Payload: se_AutomationParameterMap(input.Payload, context) }),
    ...(input.SignalType != null && { SignalType: input.SignalType }),
  };
};

/**
 * serializeAws_json1_1SendCommandRequest
 */
const se_SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.CloudWatchOutputConfig != null && {
      CloudWatchOutputConfig: se_CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
    }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.DocumentHash != null && { DocumentHash: input.DocumentHash }),
    ...(input.DocumentHashType != null && { DocumentHashType: input.DocumentHashType }),
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceIds != null && { InstanceIds: se_InstanceIdList(input.InstanceIds, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.NotificationConfig != null && {
      NotificationConfig: se_NotificationConfig(input.NotificationConfig, context),
    }),
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.OutputS3Region != null && { OutputS3Region: input.OutputS3Region }),
    ...(input.Parameters != null && { Parameters: se_Parameters(input.Parameters, context) }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

/**
 * serializeAws_json1_1SessionFilter
 */
const se_SessionFilter = (input: SessionFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1SessionFilterList
 */
const se_SessionFilterList = (input: SessionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SessionFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1SessionManagerParameters
 */
const se_SessionManagerParameters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SessionManagerParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1SessionManagerParameterValueList
 */
const se_SessionManagerParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartAssociationsOnceRequest
 */
const se_StartAssociationsOnceRequest = (input: StartAssociationsOnceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationIds != null && { AssociationIds: se_AssociationIdList(input.AssociationIds, context) }),
  };
};

/**
 * serializeAws_json1_1StartAutomationExecutionRequest
 */
const se_StartAutomationExecutionRequest = (input: StartAutomationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Parameters != null && { Parameters: se_AutomationParameterMap(input.Parameters, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetLocations != null && { TargetLocations: se_TargetLocations(input.TargetLocations, context) }),
    ...(input.TargetMaps != null && { TargetMaps: se_TargetMaps(input.TargetMaps, context) }),
    ...(input.TargetParameterName != null && { TargetParameterName: input.TargetParameterName }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1StartChangeRequestExecutionRequest
 */
const se_StartChangeRequestExecutionRequest = (
  input: StartChangeRequestExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoApprove != null && { AutoApprove: input.AutoApprove }),
    ...(input.ChangeDetails != null && { ChangeDetails: input.ChangeDetails }),
    ...(input.ChangeRequestName != null && { ChangeRequestName: input.ChangeRequestName }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Parameters != null && { Parameters: se_AutomationParameterMap(input.Parameters, context) }),
    ...(input.Runbooks != null && { Runbooks: se_Runbooks(input.Runbooks, context) }),
    ...(input.ScheduledEndTime != null && { ScheduledEndTime: Math.round(input.ScheduledEndTime.getTime() / 1000) }),
    ...(input.ScheduledTime != null && { ScheduledTime: Math.round(input.ScheduledTime.getTime() / 1000) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1StartSessionRequest
 */
const se_StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.Parameters != null && { Parameters: se_SessionManagerParameters(input.Parameters, context) }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_json1_1StepExecutionFilter
 */
const se_StepExecutionFilter = (input: StepExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_StepExecutionFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1StepExecutionFilterList
 */
const se_StepExecutionFilterList = (input: StepExecutionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StepExecutionFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1StepExecutionFilterValueList
 */
const se_StepExecutionFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StopAutomationExecutionRequest
 */
const se_StopAutomationExecutionRequest = (input: StopAutomationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_TargetValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1TargetLocation
 */
const se_TargetLocation = (input: TargetLocation, context: __SerdeContext): any => {
  return {
    ...(input.Accounts != null && { Accounts: se_Accounts(input.Accounts, context) }),
    ...(input.ExecutionRoleName != null && { ExecutionRoleName: input.ExecutionRoleName }),
    ...(input.Regions != null && { Regions: se_Regions(input.Regions, context) }),
    ...(input.TargetLocationAlarmConfiguration != null && {
      TargetLocationAlarmConfiguration: se_AlarmConfiguration(input.TargetLocationAlarmConfiguration, context),
    }),
    ...(input.TargetLocationMaxConcurrency != null && {
      TargetLocationMaxConcurrency: input.TargetLocationMaxConcurrency,
    }),
    ...(input.TargetLocationMaxErrors != null && { TargetLocationMaxErrors: input.TargetLocationMaxErrors }),
  };
};

/**
 * serializeAws_json1_1TargetLocations
 */
const se_TargetLocations = (input: TargetLocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetLocation(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetMap
 */
const se_TargetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_TargetMapValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TargetMaps
 */
const se_TargetMaps = (input: Record<string, string[]>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetMap(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetMapValueList
 */
const se_TargetMapValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Targets
 */
const se_Targets = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Target(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetValues
 */
const se_TargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TerminateSessionRequest
 */
const se_TerminateSessionRequest = (input: TerminateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1UnlabelParameterVersionRequest
 */
const se_UnlabelParameterVersionRequest = (input: UnlabelParameterVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: se_ParameterLabelList(input.Labels, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParameterVersion != null && { ParameterVersion: input.ParameterVersion }),
  };
};

/**
 * serializeAws_json1_1UpdateAssociationRequest
 */
const se_UpdateAssociationRequest = (input: UpdateAssociationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AssociationVersion != null && { AssociationVersion: input.AssociationVersion }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && { CalendarNames: se_CalendarNameOrARNList(input.CalendarNames, context) }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: se_InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: se_Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.TargetLocations != null && { TargetLocations: se_TargetLocations(input.TargetLocations, context) }),
    ...(input.TargetMaps != null && { TargetMaps: se_TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAssociationStatusRequest
 */
const se_UpdateAssociationStatusRequest = (input: UpdateAssociationStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationStatus != null && {
      AssociationStatus: se_AssociationStatus(input.AssociationStatus, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateDocumentDefaultVersionRequest
 */
const se_UpdateDocumentDefaultVersionRequest = (
  input: UpdateDocumentDefaultVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateDocumentMetadataRequest
 */
const se_UpdateDocumentMetadataRequest = (input: UpdateDocumentMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentReviews != null && { DocumentReviews: se_DocumentReviews(input.DocumentReviews, context) }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateDocumentRequest
 */
const se_UpdateDocumentRequest = (input: UpdateDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attachments != null && { Attachments: se_AttachmentsSourceList(input.Attachments, context) }),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowRequest
 */
const se_UpdateMaintenanceWindowRequest = (input: UpdateMaintenanceWindowRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowUnassociatedTargets != null && { AllowUnassociatedTargets: input.AllowUnassociatedTargets }),
    ...(input.Cutoff != null && { Cutoff: input.Cutoff }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.ScheduleTimezone != null && { ScheduleTimezone: input.ScheduleTimezone }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTargetRequest
 */
const se_UpdateMaintenanceWindowTargetRequest = (
  input: UpdateMaintenanceWindowTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OwnerInformation != null && { OwnerInformation: input.OwnerInformation }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTargetId != null && { WindowTargetId: input.WindowTargetId }),
  };
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTaskRequest
 */
const se_UpdateMaintenanceWindowTaskRequest = (
  input: UpdateMaintenanceWindowTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: se_AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.CutoffBehavior != null && { CutoffBehavior: input.CutoffBehavior }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoggingInfo != null && { LoggingInfo: se_LoggingInfo(input.LoggingInfo, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
    ...(input.TaskInvocationParameters != null && {
      TaskInvocationParameters: se_MaintenanceWindowTaskInvocationParameters(input.TaskInvocationParameters, context),
    }),
    ...(input.TaskParameters != null && {
      TaskParameters: se_MaintenanceWindowTaskParameters(input.TaskParameters, context),
    }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

/**
 * serializeAws_json1_1UpdateManagedInstanceRoleRequest
 */
const se_UpdateManagedInstanceRoleRequest = (input: UpdateManagedInstanceRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.IamRole != null && { IamRole: input.IamRole }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1UpdateOpsItemRequest
 */
const se_UpdateOpsItemRequest = (input: UpdateOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActualEndTime != null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
    ...(input.ActualStartTime != null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Notifications != null && { Notifications: se_OpsItemNotifications(input.Notifications, context) }),
    ...(input.OperationalData != null && {
      OperationalData: se_OpsItemOperationalData(input.OperationalData, context),
    }),
    ...(input.OperationalDataToDelete != null && {
      OperationalDataToDelete: se_OpsItemOpsDataKeysList(input.OperationalDataToDelete, context),
    }),
    ...(input.OpsItemArn != null && { OpsItemArn: input.OpsItemArn }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
    ...(input.PlannedEndTime != null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
    ...(input.PlannedStartTime != null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RelatedOpsItems != null && { RelatedOpsItems: se_RelatedOpsItems(input.RelatedOpsItems, context) }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1UpdateOpsMetadataRequest
 */
const se_UpdateOpsMetadataRequest = (input: UpdateOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeysToDelete != null && { KeysToDelete: se_MetadataKeysToDeleteList(input.KeysToDelete, context) }),
    ...(input.MetadataToUpdate != null && { MetadataToUpdate: se_MetadataMap(input.MetadataToUpdate, context) }),
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

/**
 * serializeAws_json1_1UpdatePatchBaselineRequest
 */
const se_UpdatePatchBaselineRequest = (input: UpdatePatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalRules != null && { ApprovalRules: se_PatchRuleGroup(input.ApprovalRules, context) }),
    ...(input.ApprovedPatches != null && { ApprovedPatches: se_PatchIdList(input.ApprovedPatches, context) }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlobalFilters != null && { GlobalFilters: se_PatchFilterGroup(input.GlobalFilters, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RejectedPatches != null && { RejectedPatches: se_PatchIdList(input.RejectedPatches, context) }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.Sources != null && { Sources: se_PatchSourceList(input.Sources, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateResourceDataSyncRequest
 */
const se_UpdateResourceDataSyncRequest = (input: UpdateResourceDataSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncSource != null && { SyncSource: se_ResourceDataSyncSource(input.SyncSource, context) }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

/**
 * serializeAws_json1_1UpdateServiceSettingRequest
 */
const se_UpdateServiceSettingRequest = (input: UpdateServiceSettingRequest, context: __SerdeContext): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
    ...(input.SettingValue != null && { SettingValue: input.SettingValue }),
  };
};

/**
 * deserializeAws_json1_1AccountIdList
 */
const de_AccountIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Accounts
 */
const de_Accounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccountSharingInfo
 */
const de_AccountSharingInfo = (output: any, context: __SerdeContext): AccountSharingInfo => {
  return {
    AccountId: __expectString(output.AccountId),
    SharedDocumentVersion: __expectString(output.SharedDocumentVersion),
  } as any;
};

/**
 * deserializeAws_json1_1AccountSharingInfoList
 */
const de_AccountSharingInfoList = (output: any, context: __SerdeContext): AccountSharingInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountSharingInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Activation
 */
const de_Activation = (output: any, context: __SerdeContext): Activation => {
  return {
    ActivationId: __expectString(output.ActivationId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DefaultInstanceName: __expectString(output.DefaultInstanceName),
    Description: __expectString(output.Description),
    ExpirationDate:
      output.ExpirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    Expired: __expectBoolean(output.Expired),
    IamRole: __expectString(output.IamRole),
    RegistrationLimit: __expectInt32(output.RegistrationLimit),
    RegistrationsCount: __expectInt32(output.RegistrationsCount),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActivationList
 */
const de_ActivationList = (output: any, context: __SerdeContext): Activation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Activation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AddTagsToResourceResult
 */
const de_AddTagsToResourceResult = (output: any, context: __SerdeContext): AddTagsToResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmConfiguration
 */
const de_AlarmConfiguration = (output: any, context: __SerdeContext): AlarmConfiguration => {
  return {
    Alarms: output.Alarms != null ? de_AlarmList(output.Alarms, context) : undefined,
    IgnorePollAlarmFailure: __expectBoolean(output.IgnorePollAlarmFailure),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmList
 */
const de_AlarmList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlarmStateInformation
 */
const de_AlarmStateInformation = (output: any, context: __SerdeContext): AlarmStateInformation => {
  return {
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmStateInformationList
 */
const de_AlarmStateInformationList = (output: any, context: __SerdeContext): AlarmStateInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmStateInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociatedInstances
 */
const de_AssociatedInstances = (output: any, context: __SerdeContext): AssociatedInstances => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateOpsItemRelatedItemResponse
 */
const de_AssociateOpsItemRelatedItemResponse = (
  output: any,
  context: __SerdeContext
): AssociateOpsItemRelatedItemResponse => {
  return {
    AssociationId: __expectString(output.AssociationId),
  } as any;
};

/**
 * deserializeAws_json1_1Association
 */
const de_Association = (output: any, context: __SerdeContext): Association => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    Name: __expectString(output.Name),
    Overview: output.Overview != null ? de_AssociationOverview(output.Overview, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociationAlreadyExists
 */
const de_AssociationAlreadyExists = (output: any, context: __SerdeContext): AssociationAlreadyExists => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociationDescription
 */
const de_AssociationDescription = (output: any, context: __SerdeContext): AssociationDescription => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    AutomationTargetParameterName: __expectString(output.AutomationTargetParameterName),
    CalendarNames: output.CalendarNames != null ? de_CalendarNameOrARNList(output.CalendarNames, context) : undefined,
    ComplianceSeverity: __expectString(output.ComplianceSeverity),
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    LastSuccessfulExecutionDate:
      output.LastSuccessfulExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulExecutionDate)))
        : undefined,
    LastUpdateAssociationDate:
      output.LastUpdateAssociationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateAssociationDate)))
        : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    OutputLocation:
      output.OutputLocation != null ? de_InstanceAssociationOutputLocation(output.OutputLocation, context) : undefined,
    Overview: output.Overview != null ? de_AssociationOverview(output.Overview, context) : undefined,
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    Status: output.Status != null ? de_AssociationStatus(output.Status, context) : undefined,
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations: output.TargetLocations != null ? de_TargetLocations(output.TargetLocations, context) : undefined,
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociationDescriptionList
 */
const de_AssociationDescriptionList = (output: any, context: __SerdeContext): AssociationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationDoesNotExist
 */
const de_AssociationDoesNotExist = (output: any, context: __SerdeContext): AssociationDoesNotExist => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationExecution
 */
const de_AssociationExecution = (output: any, context: __SerdeContext): AssociationExecution => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    AssociationId: __expectString(output.AssociationId),
    AssociationVersion: __expectString(output.AssociationVersion),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DetailedStatus: __expectString(output.DetailedStatus),
    ExecutionId: __expectString(output.ExecutionId),
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    ResourceCountByStatus: __expectString(output.ResourceCountByStatus),
    Status: __expectString(output.Status),
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociationExecutionDoesNotExist
 */
const de_AssociationExecutionDoesNotExist = (
  output: any,
  context: __SerdeContext
): AssociationExecutionDoesNotExist => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationExecutionsList
 */
const de_AssociationExecutionsList = (output: any, context: __SerdeContext): AssociationExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociationExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationExecutionTarget
 */
const de_AssociationExecutionTarget = (output: any, context: __SerdeContext): AssociationExecutionTarget => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationVersion: __expectString(output.AssociationVersion),
    DetailedStatus: __expectString(output.DetailedStatus),
    ExecutionId: __expectString(output.ExecutionId),
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    OutputSource: output.OutputSource != null ? de_OutputSource(output.OutputSource, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationExecutionTargetsList
 */
const de_AssociationExecutionTargetsList = (output: any, context: __SerdeContext): AssociationExecutionTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociationExecutionTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationLimitExceeded
 */
const de_AssociationLimitExceeded = (output: any, context: __SerdeContext): AssociationLimitExceeded => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociationList
 */
const de_AssociationList = (output: any, context: __SerdeContext): Association[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Association(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationOverview
 */
const de_AssociationOverview = (output: any, context: __SerdeContext): AssociationOverview => {
  return {
    AssociationStatusAggregatedCount:
      output.AssociationStatusAggregatedCount != null
        ? de_AssociationStatusAggregatedCount(output.AssociationStatusAggregatedCount, context)
        : undefined,
    DetailedStatus: __expectString(output.DetailedStatus),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationStatus
 */
const de_AssociationStatus = (output: any, context: __SerdeContext): AssociationStatus => {
  return {
    AdditionalInfo: __expectString(output.AdditionalInfo),
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationStatusAggregatedCount
 */
const de_AssociationStatusAggregatedCount = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1AssociationVersionInfo
 */
const de_AssociationVersionInfo = (output: any, context: __SerdeContext): AssociationVersionInfo => {
  return {
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    CalendarNames: output.CalendarNames != null ? de_CalendarNameOrARNList(output.CalendarNames, context) : undefined,
    ComplianceSeverity: __expectString(output.ComplianceSeverity),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DocumentVersion: __expectString(output.DocumentVersion),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    OutputLocation:
      output.OutputLocation != null ? de_InstanceAssociationOutputLocation(output.OutputLocation, context) : undefined,
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations: output.TargetLocations != null ? de_TargetLocations(output.TargetLocations, context) : undefined,
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociationVersionLimitExceeded
 */
const de_AssociationVersionLimitExceeded = (output: any, context: __SerdeContext): AssociationVersionLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociationVersionList
 */
const de_AssociationVersionList = (output: any, context: __SerdeContext): AssociationVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociationVersionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachmentContent
 */
const de_AttachmentContent = (output: any, context: __SerdeContext): AttachmentContent => {
  return {
    Hash: __expectString(output.Hash),
    HashType: __expectString(output.HashType),
    Name: __expectString(output.Name),
    Size: __expectLong(output.Size),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentContentList
 */
const de_AttachmentContentList = (output: any, context: __SerdeContext): AttachmentContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttachmentContent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachmentInformation
 */
const de_AttachmentInformation = (output: any, context: __SerdeContext): AttachmentInformation => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentInformationList
 */
const de_AttachmentInformationList = (output: any, context: __SerdeContext): AttachmentInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttachmentInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutomationDefinitionNotApprovedException
 */
const de_AutomationDefinitionNotApprovedException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionNotApprovedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomationDefinitionNotFoundException
 */
const de_AutomationDefinitionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomationDefinitionVersionNotFoundException
 */
const de_AutomationDefinitionVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionVersionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomationExecution
 */
const de_AutomationExecution = (output: any, context: __SerdeContext): AutomationExecution => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    AssociationId: __expectString(output.AssociationId),
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
    AutomationExecutionStatus: __expectString(output.AutomationExecutionStatus),
    AutomationSubtype: __expectString(output.AutomationSubtype),
    ChangeRequestName: __expectString(output.ChangeRequestName),
    CurrentAction: __expectString(output.CurrentAction),
    CurrentStepName: __expectString(output.CurrentStepName),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    ExecutedBy: __expectString(output.ExecutedBy),
    ExecutionEndTime:
      output.ExecutionEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionEndTime)))
        : undefined,
    ExecutionStartTime:
      output.ExecutionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionStartTime)))
        : undefined,
    FailureMessage: __expectString(output.FailureMessage),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Mode: __expectString(output.Mode),
    OpsItemId: __expectString(output.OpsItemId),
    Outputs: output.Outputs != null ? de_AutomationParameterMap(output.Outputs, context) : undefined,
    Parameters: output.Parameters != null ? de_AutomationParameterMap(output.Parameters, context) : undefined,
    ParentAutomationExecutionId: __expectString(output.ParentAutomationExecutionId),
    ProgressCounters:
      output.ProgressCounters != null ? de_ProgressCounters(output.ProgressCounters, context) : undefined,
    ResolvedTargets: output.ResolvedTargets != null ? de_ResolvedTargets(output.ResolvedTargets, context) : undefined,
    Runbooks: output.Runbooks != null ? de_Runbooks(output.Runbooks, context) : undefined,
    ScheduledTime:
      output.ScheduledTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTime)))
        : undefined,
    StepExecutions: output.StepExecutions != null ? de_StepExecutionList(output.StepExecutions, context) : undefined,
    StepExecutionsTruncated: __expectBoolean(output.StepExecutionsTruncated),
    Target: __expectString(output.Target),
    TargetLocations: output.TargetLocations != null ? de_TargetLocations(output.TargetLocations, context) : undefined,
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutomationExecutionLimitExceededException
 */
const de_AutomationExecutionLimitExceededException = (
  output: any,
  context: __SerdeContext
): AutomationExecutionLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomationExecutionMetadata
 */
const de_AutomationExecutionMetadata = (output: any, context: __SerdeContext): AutomationExecutionMetadata => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    AssociationId: __expectString(output.AssociationId),
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
    AutomationExecutionStatus: __expectString(output.AutomationExecutionStatus),
    AutomationSubtype: __expectString(output.AutomationSubtype),
    AutomationType: __expectString(output.AutomationType),
    ChangeRequestName: __expectString(output.ChangeRequestName),
    CurrentAction: __expectString(output.CurrentAction),
    CurrentStepName: __expectString(output.CurrentStepName),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    ExecutedBy: __expectString(output.ExecutedBy),
    ExecutionEndTime:
      output.ExecutionEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionEndTime)))
        : undefined,
    ExecutionStartTime:
      output.ExecutionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionStartTime)))
        : undefined,
    FailureMessage: __expectString(output.FailureMessage),
    LogFile: __expectString(output.LogFile),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Mode: __expectString(output.Mode),
    OpsItemId: __expectString(output.OpsItemId),
    Outputs: output.Outputs != null ? de_AutomationParameterMap(output.Outputs, context) : undefined,
    ParentAutomationExecutionId: __expectString(output.ParentAutomationExecutionId),
    ResolvedTargets: output.ResolvedTargets != null ? de_ResolvedTargets(output.ResolvedTargets, context) : undefined,
    Runbooks: output.Runbooks != null ? de_Runbooks(output.Runbooks, context) : undefined,
    ScheduledTime:
      output.ScheduledTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTime)))
        : undefined,
    Target: __expectString(output.Target),
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutomationExecutionMetadataList
 */
const de_AutomationExecutionMetadataList = (output: any, context: __SerdeContext): AutomationExecutionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutomationExecutionMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutomationExecutionNotFoundException
 */
const de_AutomationExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationExecutionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomationParameterMap
 */
const de_AutomationParameterMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AutomationParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1AutomationParameterValueList
 */
const de_AutomationParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutomationStepNotFoundException
 */
const de_AutomationStepNotFoundException = (output: any, context: __SerdeContext): AutomationStepNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CalendarNameOrARNList
 */
const de_CalendarNameOrARNList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelCommandResult
 */
const de_CancelCommandResult = (output: any, context: __SerdeContext): CancelCommandResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CancelMaintenanceWindowExecutionResult
 */
const de_CancelMaintenanceWindowExecutionResult = (
  output: any,
  context: __SerdeContext
): CancelMaintenanceWindowExecutionResult => {
  return {
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1CategoryEnumList
 */
const de_CategoryEnumList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoryList
 */
const de_CategoryList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloudWatchOutputConfig
 */
const de_CloudWatchOutputConfig = (output: any, context: __SerdeContext): CloudWatchOutputConfig => {
  return {
    CloudWatchLogGroupName: __expectString(output.CloudWatchLogGroupName),
    CloudWatchOutputEnabled: __expectBoolean(output.CloudWatchOutputEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1Command
 */
const de_Command = (output: any, context: __SerdeContext): Command => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? de_CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    CommandId: __expectString(output.CommandId),
    Comment: __expectString(output.Comment),
    CompletedCount: __expectInt32(output.CompletedCount),
    DeliveryTimedOutCount: __expectInt32(output.DeliveryTimedOutCount),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    ErrorCount: __expectInt32(output.ErrorCount),
    ExpiresAfter:
      output.ExpiresAfter != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiresAfter)))
        : undefined,
    InstanceIds: output.InstanceIds != null ? de_InstanceIdList(output.InstanceIds, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    NotificationConfig:
      output.NotificationConfig != null ? de_NotificationConfig(output.NotificationConfig, context) : undefined,
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    OutputS3Region: __expectString(output.OutputS3Region),
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
    RequestedDateTime:
      output.RequestedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedDateTime)))
        : undefined,
    ServiceRole: __expectString(output.ServiceRole),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TargetCount: __expectInt32(output.TargetCount),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CommandInvocation
 */
const de_CommandInvocation = (output: any, context: __SerdeContext): CommandInvocation => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? de_CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    CommandId: __expectString(output.CommandId),
    CommandPlugins: output.CommandPlugins != null ? de_CommandPluginList(output.CommandPlugins, context) : undefined,
    Comment: __expectString(output.Comment),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    InstanceName: __expectString(output.InstanceName),
    NotificationConfig:
      output.NotificationConfig != null ? de_NotificationConfig(output.NotificationConfig, context) : undefined,
    RequestedDateTime:
      output.RequestedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedDateTime)))
        : undefined,
    ServiceRole: __expectString(output.ServiceRole),
    StandardErrorUrl: __expectString(output.StandardErrorUrl),
    StandardOutputUrl: __expectString(output.StandardOutputUrl),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TraceOutput: __expectString(output.TraceOutput),
  } as any;
};

/**
 * deserializeAws_json1_1CommandInvocationList
 */
const de_CommandInvocationList = (output: any, context: __SerdeContext): CommandInvocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CommandInvocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommandList
 */
const de_CommandList = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Command(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommandPlugin
 */
const de_CommandPlugin = (output: any, context: __SerdeContext): CommandPlugin => {
  return {
    Name: __expectString(output.Name),
    Output: __expectString(output.Output),
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    OutputS3Region: __expectString(output.OutputS3Region),
    ResponseCode: __expectInt32(output.ResponseCode),
    ResponseFinishDateTime:
      output.ResponseFinishDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResponseFinishDateTime)))
        : undefined,
    ResponseStartDateTime:
      output.ResponseStartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResponseStartDateTime)))
        : undefined,
    StandardErrorUrl: __expectString(output.StandardErrorUrl),
    StandardOutputUrl: __expectString(output.StandardOutputUrl),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
  } as any;
};

/**
 * deserializeAws_json1_1CommandPluginList
 */
const de_CommandPluginList = (output: any, context: __SerdeContext): CommandPlugin[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CommandPlugin(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceExecutionSummary
 */
const de_ComplianceExecutionSummary = (output: any, context: __SerdeContext): ComplianceExecutionSummary => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    ExecutionTime:
      output.ExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionTime)))
        : undefined,
    ExecutionType: __expectString(output.ExecutionType),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceItem
 */
const de_ComplianceItem = (output: any, context: __SerdeContext): ComplianceItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    Details: output.Details != null ? de_ComplianceItemDetails(output.Details, context) : undefined,
    ExecutionSummary:
      output.ExecutionSummary != null ? de_ComplianceExecutionSummary(output.ExecutionSummary, context) : undefined,
    Id: __expectString(output.Id),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceItemDetails
 */
const de_ComplianceItemDetails = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ComplianceItemList
 */
const de_ComplianceItemList = (output: any, context: __SerdeContext): ComplianceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceSummaryItem
 */
const de_ComplianceSummaryItem = (output: any, context: __SerdeContext): ComplianceSummaryItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantSummary:
      output.CompliantSummary != null ? de_CompliantSummary(output.CompliantSummary, context) : undefined,
    NonCompliantSummary:
      output.NonCompliantSummary != null ? de_NonCompliantSummary(output.NonCompliantSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceSummaryItemList
 */
const de_ComplianceSummaryItemList = (output: any, context: __SerdeContext): ComplianceSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceSummaryItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceTypeCountLimitExceededException
 */
const de_ComplianceTypeCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): ComplianceTypeCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CompliantSummary
 */
const de_CompliantSummary = (output: any, context: __SerdeContext): CompliantSummary => {
  return {
    CompliantCount: __expectInt32(output.CompliantCount),
    SeveritySummary: output.SeveritySummary != null ? de_SeveritySummary(output.SeveritySummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateActivationResult
 */
const de_CreateActivationResult = (output: any, context: __SerdeContext): CreateActivationResult => {
  return {
    ActivationCode: __expectString(output.ActivationCode),
    ActivationId: __expectString(output.ActivationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAssociationBatchRequestEntry
 */
const de_CreateAssociationBatchRequestEntry = (
  output: any,
  context: __SerdeContext
): CreateAssociationBatchRequestEntry => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationName: __expectString(output.AssociationName),
    AutomationTargetParameterName: __expectString(output.AutomationTargetParameterName),
    CalendarNames: output.CalendarNames != null ? de_CalendarNameOrARNList(output.CalendarNames, context) : undefined,
    ComplianceSeverity: __expectString(output.ComplianceSeverity),
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    OutputLocation:
      output.OutputLocation != null ? de_InstanceAssociationOutputLocation(output.OutputLocation, context) : undefined,
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations: output.TargetLocations != null ? de_TargetLocations(output.TargetLocations, context) : undefined,
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateAssociationBatchResult
 */
const de_CreateAssociationBatchResult = (output: any, context: __SerdeContext): CreateAssociationBatchResult => {
  return {
    Failed: output.Failed != null ? de_FailedCreateAssociationList(output.Failed, context) : undefined,
    Successful: output.Successful != null ? de_AssociationDescriptionList(output.Successful, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateAssociationResult
 */
const de_CreateAssociationResult = (output: any, context: __SerdeContext): CreateAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? de_AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDocumentResult
 */
const de_CreateDocumentResult = (output: any, context: __SerdeContext): CreateDocumentResult => {
  return {
    DocumentDescription:
      output.DocumentDescription != null ? de_DocumentDescription(output.DocumentDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateMaintenanceWindowResult
 */
const de_CreateMaintenanceWindowResult = (output: any, context: __SerdeContext): CreateMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateOpsItemResponse
 */
const de_CreateOpsItemResponse = (output: any, context: __SerdeContext): CreateOpsItemResponse => {
  return {
    OpsItemArn: __expectString(output.OpsItemArn),
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateOpsMetadataResult
 */
const de_CreateOpsMetadataResult = (output: any, context: __SerdeContext): CreateOpsMetadataResult => {
  return {
    OpsMetadataArn: __expectString(output.OpsMetadataArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePatchBaselineResult
 */
const de_CreatePatchBaselineResult = (output: any, context: __SerdeContext): CreatePatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateResourceDataSyncResult
 */
const de_CreateResourceDataSyncResult = (output: any, context: __SerdeContext): CreateResourceDataSyncResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CustomSchemaCountLimitExceededException
 */
const de_CustomSchemaCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): CustomSchemaCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteActivationResult
 */
const de_DeleteActivationResult = (output: any, context: __SerdeContext): DeleteActivationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAssociationResult
 */
const de_DeleteAssociationResult = (output: any, context: __SerdeContext): DeleteAssociationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDocumentResult
 */
const de_DeleteDocumentResult = (output: any, context: __SerdeContext): DeleteDocumentResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteInventoryResult
 */
const de_DeleteInventoryResult = (output: any, context: __SerdeContext): DeleteInventoryResult => {
  return {
    DeletionId: __expectString(output.DeletionId),
    DeletionSummary:
      output.DeletionSummary != null ? de_InventoryDeletionSummary(output.DeletionSummary, context) : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteMaintenanceWindowResult
 */
const de_DeleteMaintenanceWindowResult = (output: any, context: __SerdeContext): DeleteMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteOpsMetadataResult
 */
const de_DeleteOpsMetadataResult = (output: any, context: __SerdeContext): DeleteOpsMetadataResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteParameterResult
 */
const de_DeleteParameterResult = (output: any, context: __SerdeContext): DeleteParameterResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteParametersResult
 */
const de_DeleteParametersResult = (output: any, context: __SerdeContext): DeleteParametersResult => {
  return {
    DeletedParameters:
      output.DeletedParameters != null ? de_ParameterNameList(output.DeletedParameters, context) : undefined,
    InvalidParameters:
      output.InvalidParameters != null ? de_ParameterNameList(output.InvalidParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeletePatchBaselineResult
 */
const de_DeletePatchBaselineResult = (output: any, context: __SerdeContext): DeletePatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResourceDataSyncResult
 */
const de_DeleteResourceDataSyncResult = (output: any, context: __SerdeContext): DeleteResourceDataSyncResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterManagedInstanceResult
 */
const de_DeregisterManagedInstanceResult = (output: any, context: __SerdeContext): DeregisterManagedInstanceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult
 */
const de_DeregisterPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): DeregisterPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

/**
 * deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult
 */
const de_DeregisterTargetFromMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): DeregisterTargetFromMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult
 */
const de_DeregisterTaskFromMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): DeregisterTaskFromMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeActivationsResult
 */
const de_DescribeActivationsResult = (output: any, context: __SerdeContext): DescribeActivationsResult => {
  return {
    ActivationList: output.ActivationList != null ? de_ActivationList(output.ActivationList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionsResult
 */
const de_DescribeAssociationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionsResult => {
  return {
    AssociationExecutions:
      output.AssociationExecutions != null
        ? de_AssociationExecutionsList(output.AssociationExecutions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionTargetsResult
 */
const de_DescribeAssociationExecutionTargetsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionTargetsResult => {
  return {
    AssociationExecutionTargets:
      output.AssociationExecutionTargets != null
        ? de_AssociationExecutionTargetsList(output.AssociationExecutionTargets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationResult
 */
const de_DescribeAssociationResult = (output: any, context: __SerdeContext): DescribeAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? de_AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAutomationExecutionsResult
 */
const de_DescribeAutomationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationExecutionsResult => {
  return {
    AutomationExecutionMetadataList:
      output.AutomationExecutionMetadataList != null
        ? de_AutomationExecutionMetadataList(output.AutomationExecutionMetadataList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAutomationStepExecutionsResult
 */
const de_DescribeAutomationStepExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationStepExecutionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    StepExecutions: output.StepExecutions != null ? de_StepExecutionList(output.StepExecutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAvailablePatchesResult
 */
const de_DescribeAvailablePatchesResult = (output: any, context: __SerdeContext): DescribeAvailablePatchesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Patches: output.Patches != null ? de_PatchList(output.Patches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentPermissionResponse
 */
const de_DescribeDocumentPermissionResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentPermissionResponse => {
  return {
    AccountIds: output.AccountIds != null ? de_AccountIdList(output.AccountIds, context) : undefined,
    AccountSharingInfoList:
      output.AccountSharingInfoList != null
        ? de_AccountSharingInfoList(output.AccountSharingInfoList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentResult
 */
const de_DescribeDocumentResult = (output: any, context: __SerdeContext): DescribeDocumentResult => {
  return {
    Document: output.Document != null ? de_DocumentDescription(output.Document, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult
 */
const de_DescribeEffectiveInstanceAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeEffectiveInstanceAssociationsResult => {
  return {
    Associations: output.Associations != null ? de_InstanceAssociationList(output.Associations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult
 */
const de_DescribeEffectivePatchesForPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): DescribeEffectivePatchesForPatchBaselineResult => {
  return {
    EffectivePatches:
      output.EffectivePatches != null ? de_EffectivePatchList(output.EffectivePatches, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstanceAssociationsStatusResult
 */
const de_DescribeInstanceAssociationsStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceAssociationsStatusResult => {
  return {
    InstanceAssociationStatusInfos:
      output.InstanceAssociationStatusInfos != null
        ? de_InstanceAssociationStatusInfos(output.InstanceAssociationStatusInfos, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstanceInformationResult
 */
const de_DescribeInstanceInformationResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceInformationResult => {
  return {
    InstanceInformationList:
      output.InstanceInformationList != null
        ? de_InstanceInformationList(output.InstanceInformationList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchesResult
 */
const de_DescribeInstancePatchesResult = (output: any, context: __SerdeContext): DescribeInstancePatchesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Patches: output.Patches != null ? de_PatchComplianceDataList(output.Patches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult
 */
const de_DescribeInstancePatchStatesForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesForPatchGroupResult => {
  return {
    InstancePatchStates:
      output.InstancePatchStates != null ? de_InstancePatchStatesList(output.InstancePatchStates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesResult
 */
const de_DescribeInstancePatchStatesResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesResult => {
  return {
    InstancePatchStates:
      output.InstancePatchStates != null ? de_InstancePatchStateList(output.InstancePatchStates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInventoryDeletionsResult
 */
const de_DescribeInventoryDeletionsResult = (
  output: any,
  context: __SerdeContext
): DescribeInventoryDeletionsResult => {
  return {
    InventoryDeletions:
      output.InventoryDeletions != null ? de_InventoryDeletionsList(output.InventoryDeletions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult
 */
const de_DescribeMaintenanceWindowExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutions:
      output.WindowExecutions != null ? de_MaintenanceWindowExecutionList(output.WindowExecutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult
 */
const de_DescribeMaintenanceWindowExecutionTaskInvocationsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTaskInvocationsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutionTaskInvocationIdentities:
      output.WindowExecutionTaskInvocationIdentities != null
        ? de_MaintenanceWindowExecutionTaskInvocationIdentityList(
            output.WindowExecutionTaskInvocationIdentities,
            context
          )
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult
 */
const de_DescribeMaintenanceWindowExecutionTasksResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTasksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutionTaskIdentities:
      output.WindowExecutionTaskIdentities != null
        ? de_MaintenanceWindowExecutionTaskIdentityList(output.WindowExecutionTaskIdentities, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult
 */
const de_DescribeMaintenanceWindowScheduleResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowScheduleResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledWindowExecutions:
      output.ScheduledWindowExecutions != null
        ? de_ScheduledWindowExecutionList(output.ScheduledWindowExecutions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult
 */
const de_DescribeMaintenanceWindowsForTargetResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowsForTargetResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowIdentities:
      output.WindowIdentities != null
        ? de_MaintenanceWindowsForTargetList(output.WindowIdentities, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowsResult
 */
const de_DescribeMaintenanceWindowsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowIdentities:
      output.WindowIdentities != null ? de_MaintenanceWindowIdentityList(output.WindowIdentities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult
 */
const de_DescribeMaintenanceWindowTargetsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowTargetsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets: output.Targets != null ? de_MaintenanceWindowTargetList(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowTasksResult
 */
const de_DescribeMaintenanceWindowTasksResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowTasksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tasks: output.Tasks != null ? de_MaintenanceWindowTaskList(output.Tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOpsItemsResponse
 */
const de_DescribeOpsItemsResponse = (output: any, context: __SerdeContext): DescribeOpsItemsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OpsItemSummaries:
      output.OpsItemSummaries != null ? de_OpsItemSummaries(output.OpsItemSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeParametersResult
 */
const de_DescribeParametersResult = (output: any, context: __SerdeContext): DescribeParametersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParameterMetadataList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePatchBaselinesResult
 */
const de_DescribePatchBaselinesResult = (output: any, context: __SerdeContext): DescribePatchBaselinesResult => {
  return {
    BaselineIdentities:
      output.BaselineIdentities != null ? de_PatchBaselineIdentityList(output.BaselineIdentities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePatchGroupsResult
 */
const de_DescribePatchGroupsResult = (output: any, context: __SerdeContext): DescribePatchGroupsResult => {
  return {
    Mappings: output.Mappings != null ? de_PatchGroupPatchBaselineMappingList(output.Mappings, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePatchGroupStateResult
 */
const de_DescribePatchGroupStateResult = (output: any, context: __SerdeContext): DescribePatchGroupStateResult => {
  return {
    Instances: __expectInt32(output.Instances),
    InstancesWithCriticalNonCompliantPatches: __expectInt32(output.InstancesWithCriticalNonCompliantPatches),
    InstancesWithFailedPatches: __expectInt32(output.InstancesWithFailedPatches),
    InstancesWithInstalledOtherPatches: __expectInt32(output.InstancesWithInstalledOtherPatches),
    InstancesWithInstalledPatches: __expectInt32(output.InstancesWithInstalledPatches),
    InstancesWithInstalledPendingRebootPatches: __expectInt32(output.InstancesWithInstalledPendingRebootPatches),
    InstancesWithInstalledRejectedPatches: __expectInt32(output.InstancesWithInstalledRejectedPatches),
    InstancesWithMissingPatches: __expectInt32(output.InstancesWithMissingPatches),
    InstancesWithNotApplicablePatches: __expectInt32(output.InstancesWithNotApplicablePatches),
    InstancesWithOtherNonCompliantPatches: __expectInt32(output.InstancesWithOtherNonCompliantPatches),
    InstancesWithSecurityNonCompliantPatches: __expectInt32(output.InstancesWithSecurityNonCompliantPatches),
    InstancesWithUnreportedNotApplicablePatches: __expectInt32(output.InstancesWithUnreportedNotApplicablePatches),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePatchPropertiesResult
 */
const de_DescribePatchPropertiesResult = (output: any, context: __SerdeContext): DescribePatchPropertiesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Properties: output.Properties != null ? de_PatchPropertiesList(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSessionsResponse
 */
const de_DescribeSessionsResponse = (output: any, context: __SerdeContext): DescribeSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? de_SessionList(output.Sessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateOpsItemRelatedItemResponse
 */
const de_DisassociateOpsItemRelatedItemResponse = (
  output: any,
  context: __SerdeContext
): DisassociateOpsItemRelatedItemResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DocumentAlreadyExists
 */
const de_DocumentAlreadyExists = (output: any, context: __SerdeContext): DocumentAlreadyExists => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentDefaultVersionDescription
 */
const de_DocumentDefaultVersionDescription = (
  output: any,
  context: __SerdeContext
): DocumentDefaultVersionDescription => {
  return {
    DefaultVersion: __expectString(output.DefaultVersion),
    DefaultVersionName: __expectString(output.DefaultVersionName),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentDescription
 */
const de_DocumentDescription = (output: any, context: __SerdeContext): DocumentDescription => {
  return {
    ApprovedVersion: __expectString(output.ApprovedVersion),
    AttachmentsInformation:
      output.AttachmentsInformation != null
        ? de_AttachmentInformationList(output.AttachmentsInformation, context)
        : undefined,
    Author: __expectString(output.Author),
    Category: output.Category != null ? de_CategoryList(output.Category, context) : undefined,
    CategoryEnum: output.CategoryEnum != null ? de_CategoryEnumList(output.CategoryEnum, context) : undefined,
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DefaultVersion: __expectString(output.DefaultVersion),
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    DocumentFormat: __expectString(output.DocumentFormat),
    DocumentType: __expectString(output.DocumentType),
    DocumentVersion: __expectString(output.DocumentVersion),
    Hash: __expectString(output.Hash),
    HashType: __expectString(output.HashType),
    LatestVersion: __expectString(output.LatestVersion),
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    Parameters: output.Parameters != null ? de_DocumentParameterList(output.Parameters, context) : undefined,
    PendingReviewVersion: __expectString(output.PendingReviewVersion),
    PlatformTypes: output.PlatformTypes != null ? de_PlatformTypeList(output.PlatformTypes, context) : undefined,
    Requires: output.Requires != null ? de_DocumentRequiresList(output.Requires, context) : undefined,
    ReviewInformation:
      output.ReviewInformation != null ? de_ReviewInformationList(output.ReviewInformation, context) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    SchemaVersion: __expectString(output.SchemaVersion),
    Sha1: __expectString(output.Sha1),
    Status: __expectString(output.Status),
    StatusInformation: __expectString(output.StatusInformation),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TargetType: __expectString(output.TargetType),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentIdentifier
 */
const de_DocumentIdentifier = (output: any, context: __SerdeContext): DocumentIdentifier => {
  return {
    Author: __expectString(output.Author),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    DocumentFormat: __expectString(output.DocumentFormat),
    DocumentType: __expectString(output.DocumentType),
    DocumentVersion: __expectString(output.DocumentVersion),
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    PlatformTypes: output.PlatformTypes != null ? de_PlatformTypeList(output.PlatformTypes, context) : undefined,
    Requires: output.Requires != null ? de_DocumentRequiresList(output.Requires, context) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    SchemaVersion: __expectString(output.SchemaVersion),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TargetType: __expectString(output.TargetType),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentIdentifierList
 */
const de_DocumentIdentifierList = (output: any, context: __SerdeContext): DocumentIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentLimitExceeded
 */
const de_DocumentLimitExceeded = (output: any, context: __SerdeContext): DocumentLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentMetadataResponseInfo
 */
const de_DocumentMetadataResponseInfo = (output: any, context: __SerdeContext): DocumentMetadataResponseInfo => {
  return {
    ReviewerResponse:
      output.ReviewerResponse != null ? de_DocumentReviewerResponseList(output.ReviewerResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentParameter
 */
const de_DocumentParameter = (output: any, context: __SerdeContext): DocumentParameter => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentParameterList
 */
const de_DocumentParameterList = (output: any, context: __SerdeContext): DocumentParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentPermissionLimit
 */
const de_DocumentPermissionLimit = (output: any, context: __SerdeContext): DocumentPermissionLimit => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentRequires
 */
const de_DocumentRequires = (output: any, context: __SerdeContext): DocumentRequires => {
  return {
    Name: __expectString(output.Name),
    RequireType: __expectString(output.RequireType),
    Version: __expectString(output.Version),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentRequiresList
 */
const de_DocumentRequiresList = (output: any, context: __SerdeContext): DocumentRequires[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentRequires(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentReviewCommentList
 */
const de_DocumentReviewCommentList = (output: any, context: __SerdeContext): DocumentReviewCommentSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentReviewCommentSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentReviewCommentSource
 */
const de_DocumentReviewCommentSource = (output: any, context: __SerdeContext): DocumentReviewCommentSource => {
  return {
    Content: __expectString(output.Content),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentReviewerResponseList
 */
const de_DocumentReviewerResponseList = (output: any, context: __SerdeContext): DocumentReviewerResponseSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentReviewerResponseSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentReviewerResponseSource
 */
const de_DocumentReviewerResponseSource = (output: any, context: __SerdeContext): DocumentReviewerResponseSource => {
  return {
    Comment: output.Comment != null ? de_DocumentReviewCommentList(output.Comment, context) : undefined,
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    Reviewer: __expectString(output.Reviewer),
    UpdatedTime:
      output.UpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentVersionInfo
 */
const de_DocumentVersionInfo = (output: any, context: __SerdeContext): DocumentVersionInfo => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    DocumentFormat: __expectString(output.DocumentFormat),
    DocumentVersion: __expectString(output.DocumentVersion),
    IsDefaultVersion: __expectBoolean(output.IsDefaultVersion),
    Name: __expectString(output.Name),
    ReviewStatus: __expectString(output.ReviewStatus),
    Status: __expectString(output.Status),
    StatusInformation: __expectString(output.StatusInformation),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentVersionLimitExceeded
 */
const de_DocumentVersionLimitExceeded = (output: any, context: __SerdeContext): DocumentVersionLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentVersionList
 */
const de_DocumentVersionList = (output: any, context: __SerdeContext): DocumentVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentVersionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DoesNotExistException
 */
const de_DoesNotExistException = (output: any, context: __SerdeContext): DoesNotExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateDocumentContent
 */
const de_DuplicateDocumentContent = (output: any, context: __SerdeContext): DuplicateDocumentContent => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateDocumentVersionName
 */
const de_DuplicateDocumentVersionName = (output: any, context: __SerdeContext): DuplicateDocumentVersionName => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateInstanceId
 */
const de_DuplicateInstanceId = (output: any, context: __SerdeContext): DuplicateInstanceId => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EffectivePatch
 */
const de_EffectivePatch = (output: any, context: __SerdeContext): EffectivePatch => {
  return {
    Patch: output.Patch != null ? de_Patch(output.Patch, context) : undefined,
    PatchStatus: output.PatchStatus != null ? de_PatchStatus(output.PatchStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EffectivePatchList
 */
const de_EffectivePatchList = (output: any, context: __SerdeContext): EffectivePatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EffectivePatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedCreateAssociation
 */
const de_FailedCreateAssociation = (output: any, context: __SerdeContext): FailedCreateAssociation => {
  return {
    Entry: output.Entry != null ? de_CreateAssociationBatchRequestEntry(output.Entry, context) : undefined,
    Fault: __expectString(output.Fault),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FailedCreateAssociationList
 */
const de_FailedCreateAssociationList = (output: any, context: __SerdeContext): FailedCreateAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedCreateAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailureDetails
 */
const de_FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    Details: output.Details != null ? de_AutomationParameterMap(output.Details, context) : undefined,
    FailureStage: __expectString(output.FailureStage),
    FailureType: __expectString(output.FailureType),
  } as any;
};

/**
 * deserializeAws_json1_1FeatureNotAvailableException
 */
const de_FeatureNotAvailableException = (output: any, context: __SerdeContext): FeatureNotAvailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GetAutomationExecutionResult
 */
const de_GetAutomationExecutionResult = (output: any, context: __SerdeContext): GetAutomationExecutionResult => {
  return {
    AutomationExecution:
      output.AutomationExecution != null ? de_AutomationExecution(output.AutomationExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCalendarStateResponse
 */
const de_GetCalendarStateResponse = (output: any, context: __SerdeContext): GetCalendarStateResponse => {
  return {
    AtTime: __expectString(output.AtTime),
    NextTransitionTime: __expectString(output.NextTransitionTime),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1GetCommandInvocationResult
 */
const de_GetCommandInvocationResult = (output: any, context: __SerdeContext): GetCommandInvocationResult => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? de_CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    CommandId: __expectString(output.CommandId),
    Comment: __expectString(output.Comment),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    ExecutionElapsedTime: __expectString(output.ExecutionElapsedTime),
    ExecutionEndDateTime: __expectString(output.ExecutionEndDateTime),
    ExecutionStartDateTime: __expectString(output.ExecutionStartDateTime),
    InstanceId: __expectString(output.InstanceId),
    PluginName: __expectString(output.PluginName),
    ResponseCode: __expectInt32(output.ResponseCode),
    StandardErrorContent: __expectString(output.StandardErrorContent),
    StandardErrorUrl: __expectString(output.StandardErrorUrl),
    StandardOutputContent: __expectString(output.StandardOutputContent),
    StandardOutputUrl: __expectString(output.StandardOutputUrl),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
  } as any;
};

/**
 * deserializeAws_json1_1GetConnectionStatusResponse
 */
const de_GetConnectionStatusResponse = (output: any, context: __SerdeContext): GetConnectionStatusResponse => {
  return {
    Status: __expectString(output.Status),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_json1_1GetDefaultPatchBaselineResult
 */
const de_GetDefaultPatchBaselineResult = (output: any, context: __SerdeContext): GetDefaultPatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

/**
 * deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult
 */
const de_GetDeployablePatchSnapshotForInstanceResult = (
  output: any,
  context: __SerdeContext
): GetDeployablePatchSnapshotForInstanceResult => {
  return {
    InstanceId: __expectString(output.InstanceId),
    Product: __expectString(output.Product),
    SnapshotDownloadUrl: __expectString(output.SnapshotDownloadUrl),
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_json1_1GetDocumentResult
 */
const de_GetDocumentResult = (output: any, context: __SerdeContext): GetDocumentResult => {
  return {
    AttachmentsContent:
      output.AttachmentsContent != null ? de_AttachmentContentList(output.AttachmentsContent, context) : undefined,
    Content: __expectString(output.Content),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    DocumentFormat: __expectString(output.DocumentFormat),
    DocumentType: __expectString(output.DocumentType),
    DocumentVersion: __expectString(output.DocumentVersion),
    Name: __expectString(output.Name),
    Requires: output.Requires != null ? de_DocumentRequiresList(output.Requires, context) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    Status: __expectString(output.Status),
    StatusInformation: __expectString(output.StatusInformation),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1GetInventoryResult
 */
const de_GetInventoryResult = (output: any, context: __SerdeContext): GetInventoryResult => {
  return {
    Entities: output.Entities != null ? de_InventoryResultEntityList(output.Entities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetInventorySchemaResult
 */
const de_GetInventorySchemaResult = (output: any, context: __SerdeContext): GetInventorySchemaResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas: output.Schemas != null ? de_InventoryItemSchemaResultList(output.Schemas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionResult
 */
const de_GetMaintenanceWindowExecutionResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionResult => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TaskIds: output.TaskIds != null ? de_MaintenanceWindowExecutionTaskIdList(output.TaskIds, context) : undefined,
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult
 */
const de_GetMaintenanceWindowExecutionTaskInvocationResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionTaskInvocationResult => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExecutionId: __expectString(output.ExecutionId),
    InvocationId: __expectString(output.InvocationId),
    OwnerInformation: __expectString(output.OwnerInformation),
    Parameters: __expectString(output.Parameters),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TaskExecutionId: __expectString(output.TaskExecutionId),
    TaskType: __expectString(output.TaskType),
    WindowExecutionId: __expectString(output.WindowExecutionId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult
 */
const de_GetMaintenanceWindowExecutionTaskResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Priority: __expectInt32(output.Priority),
    ServiceRole: __expectString(output.ServiceRole),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TaskArn: __expectString(output.TaskArn),
    TaskExecutionId: __expectString(output.TaskExecutionId),
    TaskParameters:
      output.TaskParameters != null
        ? de_MaintenanceWindowTaskParametersList(output.TaskParameters, context)
        : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
    Type: __expectString(output.Type),
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowResult
 */
const de_GetMaintenanceWindowResult = (output: any, context: __SerdeContext): GetMaintenanceWindowResult => {
  return {
    AllowUnassociatedTargets: __expectBoolean(output.AllowUnassociatedTargets),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Cutoff: __expectInt32(output.Cutoff),
    Description: __expectString(output.Description),
    Duration: __expectInt32(output.Duration),
    Enabled: __expectBoolean(output.Enabled),
    EndDate: __expectString(output.EndDate),
    ModifiedDate:
      output.ModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    NextExecutionTime: __expectString(output.NextExecutionTime),
    Schedule: __expectString(output.Schedule),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    ScheduleTimezone: __expectString(output.ScheduleTimezone),
    StartDate: __expectString(output.StartDate),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowTaskResult
 */
const de_GetMaintenanceWindowTaskResult = (output: any, context: __SerdeContext): GetMaintenanceWindowTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo: output.LoggingInfo != null ? de_LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskInvocationParameters:
      output.TaskInvocationParameters != null
        ? de_MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
        : undefined,
    TaskParameters:
      output.TaskParameters != null ? de_MaintenanceWindowTaskParameters(output.TaskParameters, context) : undefined,
    TaskType: __expectString(output.TaskType),
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1GetOpsItemResponse
 */
const de_GetOpsItemResponse = (output: any, context: __SerdeContext): GetOpsItemResponse => {
  return {
    OpsItem: output.OpsItem != null ? de_OpsItem(output.OpsItem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOpsMetadataResult
 */
const de_GetOpsMetadataResult = (output: any, context: __SerdeContext): GetOpsMetadataResult => {
  return {
    Metadata: output.Metadata != null ? de_MetadataMap(output.Metadata, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1GetOpsSummaryResult
 */
const de_GetOpsSummaryResult = (output: any, context: __SerdeContext): GetOpsSummaryResult => {
  return {
    Entities: output.Entities != null ? de_OpsEntityList(output.Entities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetParameterHistoryResult
 */
const de_GetParameterHistoryResult = (output: any, context: __SerdeContext): GetParameterHistoryResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParameterHistoryList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetParameterResult
 */
const de_GetParameterResult = (output: any, context: __SerdeContext): GetParameterResult => {
  return {
    Parameter: output.Parameter != null ? de_Parameter(output.Parameter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetParametersByPathResult
 */
const de_GetParametersByPathResult = (output: any, context: __SerdeContext): GetParametersByPathResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParameterList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetParametersResult
 */
const de_GetParametersResult = (output: any, context: __SerdeContext): GetParametersResult => {
  return {
    InvalidParameters:
      output.InvalidParameters != null ? de_ParameterNameList(output.InvalidParameters, context) : undefined,
    Parameters: output.Parameters != null ? de_ParameterList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPatchBaselineForPatchGroupResult
 */
const de_GetPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): GetPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    OperatingSystem: __expectString(output.OperatingSystem),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

/**
 * deserializeAws_json1_1GetPatchBaselineResult
 */
const de_GetPatchBaselineResult = (output: any, context: __SerdeContext): GetPatchBaselineResult => {
  return {
    ApprovalRules: output.ApprovalRules != null ? de_PatchRuleGroup(output.ApprovalRules, context) : undefined,
    ApprovedPatches: output.ApprovedPatches != null ? de_PatchIdList(output.ApprovedPatches, context) : undefined,
    ApprovedPatchesComplianceLevel: __expectString(output.ApprovedPatchesComplianceLevel),
    ApprovedPatchesEnableNonSecurity: __expectBoolean(output.ApprovedPatchesEnableNonSecurity),
    BaselineId: __expectString(output.BaselineId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalFilters: output.GlobalFilters != null ? de_PatchFilterGroup(output.GlobalFilters, context) : undefined,
    ModifiedDate:
      output.ModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    PatchGroups: output.PatchGroups != null ? de_PatchGroupList(output.PatchGroups, context) : undefined,
    RejectedPatches: output.RejectedPatches != null ? de_PatchIdList(output.RejectedPatches, context) : undefined,
    RejectedPatchesAction: __expectString(output.RejectedPatchesAction),
    Sources: output.Sources != null ? de_PatchSourceList(output.Sources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePoliciesResponse
 */
const de_GetResourcePoliciesResponse = (output: any, context: __SerdeContext): GetResourcePoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies: output.Policies != null ? de_GetResourcePoliciesResponseEntries(output.Policies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePoliciesResponseEntries
 */
const de_GetResourcePoliciesResponseEntries = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GetResourcePoliciesResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetResourcePoliciesResponseEntry
 */
const de_GetResourcePoliciesResponseEntry = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponseEntry => {
  return {
    Policy: __expectString(output.Policy),
    PolicyHash: __expectString(output.PolicyHash),
    PolicyId: __expectString(output.PolicyId),
  } as any;
};

/**
 * deserializeAws_json1_1GetServiceSettingResult
 */
const de_GetServiceSettingResult = (output: any, context: __SerdeContext): GetServiceSettingResult => {
  return {
    ServiceSetting: output.ServiceSetting != null ? de_ServiceSetting(output.ServiceSetting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HierarchyLevelLimitExceededException
 */
const de_HierarchyLevelLimitExceededException = (
  output: any,
  context: __SerdeContext
): HierarchyLevelLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1HierarchyTypeMismatchException
 */
const de_HierarchyTypeMismatchException = (output: any, context: __SerdeContext): HierarchyTypeMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatch
 */
const de_IdempotentParameterMismatch = (output: any, context: __SerdeContext): IdempotentParameterMismatch => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IncompatiblePolicyException
 */
const de_IncompatiblePolicyException = (output: any, context: __SerdeContext): IncompatiblePolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAggregatedAssociationOverview
 */
const de_InstanceAggregatedAssociationOverview = (
  output: any,
  context: __SerdeContext
): InstanceAggregatedAssociationOverview => {
  return {
    DetailedStatus: __expectString(output.DetailedStatus),
    InstanceAssociationStatusAggregatedCount:
      output.InstanceAssociationStatusAggregatedCount != null
        ? de_InstanceAssociationStatusAggregatedCount(output.InstanceAssociationStatusAggregatedCount, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAssociation
 */
const de_InstanceAssociation = (output: any, context: __SerdeContext): InstanceAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationVersion: __expectString(output.AssociationVersion),
    Content: __expectString(output.Content),
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAssociationList
 */
const de_InstanceAssociationList = (output: any, context: __SerdeContext): InstanceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceAssociationOutputLocation
 */
const de_InstanceAssociationOutputLocation = (
  output: any,
  context: __SerdeContext
): InstanceAssociationOutputLocation => {
  return {
    S3Location: output.S3Location != null ? de_S3OutputLocation(output.S3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAssociationOutputUrl
 */
const de_InstanceAssociationOutputUrl = (output: any, context: __SerdeContext): InstanceAssociationOutputUrl => {
  return {
    S3OutputUrl: output.S3OutputUrl != null ? de_S3OutputUrl(output.S3OutputUrl, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAssociationStatusAggregatedCount
 */
const de_InstanceAssociationStatusAggregatedCount = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1InstanceAssociationStatusInfo
 */
const de_InstanceAssociationStatusInfo = (output: any, context: __SerdeContext): InstanceAssociationStatusInfo => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    DetailedStatus: __expectString(output.DetailedStatus),
    DocumentVersion: __expectString(output.DocumentVersion),
    ErrorCode: __expectString(output.ErrorCode),
    ExecutionDate:
      output.ExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionDate)))
        : undefined,
    ExecutionSummary: __expectString(output.ExecutionSummary),
    InstanceId: __expectString(output.InstanceId),
    Name: __expectString(output.Name),
    OutputUrl: output.OutputUrl != null ? de_InstanceAssociationOutputUrl(output.OutputUrl, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAssociationStatusInfos
 */
const de_InstanceAssociationStatusInfos = (output: any, context: __SerdeContext): InstanceAssociationStatusInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceAssociationStatusInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceIdList
 */
const de_InstanceIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceInformation
 */
const de_InstanceInformation = (output: any, context: __SerdeContext): InstanceInformation => {
  return {
    ActivationId: __expectString(output.ActivationId),
    AgentVersion: __expectString(output.AgentVersion),
    AssociationOverview:
      output.AssociationOverview != null
        ? de_InstanceAggregatedAssociationOverview(output.AssociationOverview, context)
        : undefined,
    AssociationStatus: __expectString(output.AssociationStatus),
    ComputerName: __expectString(output.ComputerName),
    IPAddress: __expectString(output.IPAddress),
    IamRole: __expectString(output.IamRole),
    InstanceId: __expectString(output.InstanceId),
    IsLatestVersion: __expectBoolean(output.IsLatestVersion),
    LastAssociationExecutionDate:
      output.LastAssociationExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAssociationExecutionDate)))
        : undefined,
    LastPingDateTime:
      output.LastPingDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastPingDateTime)))
        : undefined,
    LastSuccessfulAssociationExecutionDate:
      output.LastSuccessfulAssociationExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulAssociationExecutionDate)))
        : undefined,
    Name: __expectString(output.Name),
    PingStatus: __expectString(output.PingStatus),
    PlatformName: __expectString(output.PlatformName),
    PlatformType: __expectString(output.PlatformType),
    PlatformVersion: __expectString(output.PlatformVersion),
    RegistrationDate:
      output.RegistrationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RegistrationDate)))
        : undefined,
    ResourceType: __expectString(output.ResourceType),
    SourceId: __expectString(output.SourceId),
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceInformationList
 */
const de_InstanceInformationList = (output: any, context: __SerdeContext): InstanceInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancePatchState
 */
const de_InstancePatchState = (output: any, context: __SerdeContext): InstancePatchState => {
  return {
    BaselineId: __expectString(output.BaselineId),
    CriticalNonCompliantCount: __expectInt32(output.CriticalNonCompliantCount),
    FailedCount: __expectInt32(output.FailedCount),
    InstallOverrideList: __expectString(output.InstallOverrideList),
    InstalledCount: __expectInt32(output.InstalledCount),
    InstalledOtherCount: __expectInt32(output.InstalledOtherCount),
    InstalledPendingRebootCount: __expectInt32(output.InstalledPendingRebootCount),
    InstalledRejectedCount: __expectInt32(output.InstalledRejectedCount),
    InstanceId: __expectString(output.InstanceId),
    LastNoRebootInstallOperationTime:
      output.LastNoRebootInstallOperationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastNoRebootInstallOperationTime)))
        : undefined,
    MissingCount: __expectInt32(output.MissingCount),
    NotApplicableCount: __expectInt32(output.NotApplicableCount),
    Operation: __expectString(output.Operation),
    OperationEndTime:
      output.OperationEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OperationEndTime)))
        : undefined,
    OperationStartTime:
      output.OperationStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OperationStartTime)))
        : undefined,
    OtherNonCompliantCount: __expectInt32(output.OtherNonCompliantCount),
    OwnerInformation: __expectString(output.OwnerInformation),
    PatchGroup: __expectString(output.PatchGroup),
    RebootOption: __expectString(output.RebootOption),
    SecurityNonCompliantCount: __expectInt32(output.SecurityNonCompliantCount),
    SnapshotId: __expectString(output.SnapshotId),
    UnreportedNotApplicableCount: __expectInt32(output.UnreportedNotApplicableCount),
  } as any;
};

/**
 * deserializeAws_json1_1InstancePatchStateList
 */
const de_InstancePatchStateList = (output: any, context: __SerdeContext): InstancePatchState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstancePatchState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancePatchStatesList
 */
const de_InstancePatchStatesList = (output: any, context: __SerdeContext): InstancePatchState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstancePatchState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidActivation
 */
const de_InvalidActivation = (output: any, context: __SerdeContext): InvalidActivation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidActivationId
 */
const de_InvalidActivationId = (output: any, context: __SerdeContext): InvalidActivationId => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAggregatorException
 */
const de_InvalidAggregatorException = (output: any, context: __SerdeContext): InvalidAggregatorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAllowedPatternException
 */
const de_InvalidAllowedPatternException = (output: any, context: __SerdeContext): InvalidAllowedPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAssociation
 */
const de_InvalidAssociation = (output: any, context: __SerdeContext): InvalidAssociation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAssociationVersion
 */
const de_InvalidAssociationVersion = (output: any, context: __SerdeContext): InvalidAssociationVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAutomationExecutionParametersException
 */
const de_InvalidAutomationExecutionParametersException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationExecutionParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAutomationSignalException
 */
const de_InvalidAutomationSignalException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationSignalException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAutomationStatusUpdateException
 */
const de_InvalidAutomationStatusUpdateException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationStatusUpdateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCommandId
 */
const de_InvalidCommandId = (output: any, context: __SerdeContext): InvalidCommandId => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidDeleteInventoryParametersException
 */
const de_InvalidDeleteInventoryParametersException = (
  output: any,
  context: __SerdeContext
): InvalidDeleteInventoryParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeletionIdException
 */
const de_InvalidDeletionIdException = (output: any, context: __SerdeContext): InvalidDeletionIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocument
 */
const de_InvalidDocument = (output: any, context: __SerdeContext): InvalidDocument => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocumentContent
 */
const de_InvalidDocumentContent = (output: any, context: __SerdeContext): InvalidDocumentContent => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocumentOperation
 */
const de_InvalidDocumentOperation = (output: any, context: __SerdeContext): InvalidDocumentOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocumentSchemaVersion
 */
const de_InvalidDocumentSchemaVersion = (output: any, context: __SerdeContext): InvalidDocumentSchemaVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocumentType
 */
const de_InvalidDocumentType = (output: any, context: __SerdeContext): InvalidDocumentType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDocumentVersion
 */
const de_InvalidDocumentVersion = (output: any, context: __SerdeContext): InvalidDocumentVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilter
 */
const de_InvalidFilter = (output: any, context: __SerdeContext): InvalidFilter => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilterKey
 */
const de_InvalidFilterKey = (output: any, context: __SerdeContext): InvalidFilterKey => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidFilterOption
 */
const de_InvalidFilterOption = (output: any, context: __SerdeContext): InvalidFilterOption => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilterValue
 */
const de_InvalidFilterValue = (output: any, context: __SerdeContext): InvalidFilterValue => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInstanceId
 */
const de_InvalidInstanceId = (output: any, context: __SerdeContext): InvalidInstanceId => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInstanceInformationFilterValue
 */
const de_InvalidInstanceInformationFilterValue = (
  output: any,
  context: __SerdeContext
): InvalidInstanceInformationFilterValue => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInventoryGroupException
 */
const de_InvalidInventoryGroupException = (output: any, context: __SerdeContext): InvalidInventoryGroupException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInventoryItemContextException
 */
const de_InvalidInventoryItemContextException = (
  output: any,
  context: __SerdeContext
): InvalidInventoryItemContextException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInventoryRequestException
 */
const de_InvalidInventoryRequestException = (
  output: any,
  context: __SerdeContext
): InvalidInventoryRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidItemContentException
 */
const de_InvalidItemContentException = (output: any, context: __SerdeContext): InvalidItemContentException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKeyId
 */
const de_InvalidKeyId = (output: any, context: __SerdeContext): InvalidKeyId => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextToken
 */
const de_InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNotificationConfig
 */
const de_InvalidNotificationConfig = (output: any, context: __SerdeContext): InvalidNotificationConfig => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOptionException
 */
const de_InvalidOptionException = (output: any, context: __SerdeContext): InvalidOptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOutputFolder
 */
const de_InvalidOutputFolder = (output: any, context: __SerdeContext): InvalidOutputFolder => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidOutputLocation
 */
const de_InvalidOutputLocation = (output: any, context: __SerdeContext): InvalidOutputLocation => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidParameters
 */
const de_InvalidParameters = (output: any, context: __SerdeContext): InvalidParameters => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPermissionType
 */
const de_InvalidPermissionType = (output: any, context: __SerdeContext): InvalidPermissionType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPluginName
 */
const de_InvalidPluginName = (output: any, context: __SerdeContext): InvalidPluginName => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidPolicyAttributeException
 */
const de_InvalidPolicyAttributeException = (output: any, context: __SerdeContext): InvalidPolicyAttributeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPolicyTypeException
 */
const de_InvalidPolicyTypeException = (output: any, context: __SerdeContext): InvalidPolicyTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceId
 */
const de_InvalidResourceId = (output: any, context: __SerdeContext): InvalidResourceId => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidResourceType
 */
const de_InvalidResourceType = (output: any, context: __SerdeContext): InvalidResourceType => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidResultAttributeException
 */
const de_InvalidResultAttributeException = (output: any, context: __SerdeContext): InvalidResultAttributeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRole
 */
const de_InvalidRole = (output: any, context: __SerdeContext): InvalidRole => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSchedule
 */
const de_InvalidSchedule = (output: any, context: __SerdeContext): InvalidSchedule => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTag
 */
const de_InvalidTag = (output: any, context: __SerdeContext): InvalidTag => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTarget
 */
const de_InvalidTarget = (output: any, context: __SerdeContext): InvalidTarget => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetMaps
 */
const de_InvalidTargetMaps = (output: any, context: __SerdeContext): InvalidTargetMaps => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTypeNameException
 */
const de_InvalidTypeNameException = (output: any, context: __SerdeContext): InvalidTypeNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUpdate
 */
const de_InvalidUpdate = (output: any, context: __SerdeContext): InvalidUpdate => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryDeletionsList
 */
const de_InventoryDeletionsList = (output: any, context: __SerdeContext): InventoryDeletionStatusItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryDeletionStatusItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryDeletionStatusItem
 */
const de_InventoryDeletionStatusItem = (output: any, context: __SerdeContext): InventoryDeletionStatusItem => {
  return {
    DeletionId: __expectString(output.DeletionId),
    DeletionStartTime:
      output.DeletionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionStartTime)))
        : undefined,
    DeletionSummary:
      output.DeletionSummary != null ? de_InventoryDeletionSummary(output.DeletionSummary, context) : undefined,
    LastStatus: __expectString(output.LastStatus),
    LastStatusMessage: __expectString(output.LastStatusMessage),
    LastStatusUpdateTime:
      output.LastStatusUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStatusUpdateTime)))
        : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryDeletionSummary
 */
const de_InventoryDeletionSummary = (output: any, context: __SerdeContext): InventoryDeletionSummary => {
  return {
    RemainingCount: __expectInt32(output.RemainingCount),
    SummaryItems:
      output.SummaryItems != null ? de_InventoryDeletionSummaryItems(output.SummaryItems, context) : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryDeletionSummaryItem
 */
const de_InventoryDeletionSummaryItem = (output: any, context: __SerdeContext): InventoryDeletionSummaryItem => {
  return {
    Count: __expectInt32(output.Count),
    RemainingCount: __expectInt32(output.RemainingCount),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryDeletionSummaryItems
 */
const de_InventoryDeletionSummaryItems = (output: any, context: __SerdeContext): InventoryDeletionSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryDeletionSummaryItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryItemAttribute
 */
const de_InventoryItemAttribute = (output: any, context: __SerdeContext): InventoryItemAttribute => {
  return {
    DataType: __expectString(output.DataType),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryItemAttributeList
 */
const de_InventoryItemAttributeList = (output: any, context: __SerdeContext): InventoryItemAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryItemAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryItemEntry
 */
const de_InventoryItemEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1InventoryItemEntryList
 */
const de_InventoryItemEntryList = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryItemEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryItemSchema
 */
const de_InventoryItemSchema = (output: any, context: __SerdeContext): InventoryItemSchema => {
  return {
    Attributes: output.Attributes != null ? de_InventoryItemAttributeList(output.Attributes, context) : undefined,
    DisplayName: __expectString(output.DisplayName),
    TypeName: __expectString(output.TypeName),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryItemSchemaResultList
 */
const de_InventoryItemSchemaResultList = (output: any, context: __SerdeContext): InventoryItemSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryItemSchema(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryResultEntity
 */
const de_InventoryResultEntity = (output: any, context: __SerdeContext): InventoryResultEntity => {
  return {
    Data: output.Data != null ? de_InventoryResultItemMap(output.Data, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryResultEntityList
 */
const de_InventoryResultEntityList = (output: any, context: __SerdeContext): InventoryResultEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InventoryResultEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryResultItem
 */
const de_InventoryResultItem = (output: any, context: __SerdeContext): InventoryResultItem => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Content: output.Content != null ? de_InventoryItemEntryList(output.Content, context) : undefined,
    ContentHash: __expectString(output.ContentHash),
    SchemaVersion: __expectString(output.SchemaVersion),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryResultItemMap
 */
const de_InventoryResultItemMap = (output: any, context: __SerdeContext): Record<string, InventoryResultItem> => {
  return Object.entries(output).reduce((acc: Record<string, InventoryResultItem>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_InventoryResultItem(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1InvocationDoesNotExist
 */
const de_InvocationDoesNotExist = (output: any, context: __SerdeContext): InvocationDoesNotExist => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ItemContentMismatchException
 */
const de_ItemContentMismatchException = (output: any, context: __SerdeContext): ItemContentMismatchException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1ItemSizeLimitExceededException
 */
const de_ItemSizeLimitExceededException = (output: any, context: __SerdeContext): ItemSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1LabelParameterVersionResult
 */
const de_LabelParameterVersionResult = (output: any, context: __SerdeContext): LabelParameterVersionResult => {
  return {
    InvalidLabels: output.InvalidLabels != null ? de_ParameterLabelList(output.InvalidLabels, context) : undefined,
    ParameterVersion: __expectLong(output.ParameterVersion),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociationsResult
 */
const de_ListAssociationsResult = (output: any, context: __SerdeContext): ListAssociationsResult => {
  return {
    Associations: output.Associations != null ? de_AssociationList(output.Associations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociationVersionsResult
 */
const de_ListAssociationVersionsResult = (output: any, context: __SerdeContext): ListAssociationVersionsResult => {
  return {
    AssociationVersions:
      output.AssociationVersions != null ? de_AssociationVersionList(output.AssociationVersions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCommandInvocationsResult
 */
const de_ListCommandInvocationsResult = (output: any, context: __SerdeContext): ListCommandInvocationsResult => {
  return {
    CommandInvocations:
      output.CommandInvocations != null ? de_CommandInvocationList(output.CommandInvocations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCommandsResult
 */
const de_ListCommandsResult = (output: any, context: __SerdeContext): ListCommandsResult => {
  return {
    Commands: output.Commands != null ? de_CommandList(output.Commands, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListComplianceItemsResult
 */
const de_ListComplianceItemsResult = (output: any, context: __SerdeContext): ListComplianceItemsResult => {
  return {
    ComplianceItems:
      output.ComplianceItems != null ? de_ComplianceItemList(output.ComplianceItems, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListComplianceSummariesResult
 */
const de_ListComplianceSummariesResult = (output: any, context: __SerdeContext): ListComplianceSummariesResult => {
  return {
    ComplianceSummaryItems:
      output.ComplianceSummaryItems != null
        ? de_ComplianceSummaryItemList(output.ComplianceSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentMetadataHistoryResponse
 */
const de_ListDocumentMetadataHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentMetadataHistoryResponse => {
  return {
    Author: __expectString(output.Author),
    DocumentVersion: __expectString(output.DocumentVersion),
    Metadata: output.Metadata != null ? de_DocumentMetadataResponseInfo(output.Metadata, context) : undefined,
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentsResult
 */
const de_ListDocumentsResult = (output: any, context: __SerdeContext): ListDocumentsResult => {
  return {
    DocumentIdentifiers:
      output.DocumentIdentifiers != null ? de_DocumentIdentifierList(output.DocumentIdentifiers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentVersionsResult
 */
const de_ListDocumentVersionsResult = (output: any, context: __SerdeContext): ListDocumentVersionsResult => {
  return {
    DocumentVersions:
      output.DocumentVersions != null ? de_DocumentVersionList(output.DocumentVersions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListInventoryEntriesResult
 */
const de_ListInventoryEntriesResult = (output: any, context: __SerdeContext): ListInventoryEntriesResult => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Entries: output.Entries != null ? de_InventoryItemEntryList(output.Entries, context) : undefined,
    InstanceId: __expectString(output.InstanceId),
    NextToken: __expectString(output.NextToken),
    SchemaVersion: __expectString(output.SchemaVersion),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1ListOpsItemEventsResponse
 */
const de_ListOpsItemEventsResponse = (output: any, context: __SerdeContext): ListOpsItemEventsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Summaries: output.Summaries != null ? de_OpsItemEventSummaries(output.Summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOpsItemRelatedItemsResponse
 */
const de_ListOpsItemRelatedItemsResponse = (output: any, context: __SerdeContext): ListOpsItemRelatedItemsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Summaries: output.Summaries != null ? de_OpsItemRelatedItemSummaries(output.Summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOpsMetadataResult
 */
const de_ListOpsMetadataResult = (output: any, context: __SerdeContext): ListOpsMetadataResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OpsMetadataList: output.OpsMetadataList != null ? de_OpsMetadataList(output.OpsMetadataList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceComplianceSummariesResult
 */
const de_ListResourceComplianceSummariesResult = (
  output: any,
  context: __SerdeContext
): ListResourceComplianceSummariesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceComplianceSummaryItems:
      output.ResourceComplianceSummaryItems != null
        ? de_ResourceComplianceSummaryItemList(output.ResourceComplianceSummaryItems, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceDataSyncResult
 */
const de_ListResourceDataSyncResult = (output: any, context: __SerdeContext): ListResourceDataSyncResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceDataSyncItems:
      output.ResourceDataSyncItems != null
        ? de_ResourceDataSyncItemList(output.ResourceDataSyncItems, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResult
 */
const de_ListTagsForResourceResult = (output: any, context: __SerdeContext): ListTagsForResourceResult => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoggingInfo
 */
const de_LoggingInfo = (output: any, context: __SerdeContext): LoggingInfo => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    S3Region: __expectString(output.S3Region),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowAutomationParameters
 */
const de_MaintenanceWindowAutomationParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowAutomationParameters => {
  return {
    DocumentVersion: __expectString(output.DocumentVersion),
    Parameters: output.Parameters != null ? de_AutomationParameterMap(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecution
 */
const de_MaintenanceWindowExecution = (output: any, context: __SerdeContext): MaintenanceWindowExecution => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    WindowExecutionId: __expectString(output.WindowExecutionId),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionList
 */
const de_MaintenanceWindowExecutionList = (output: any, context: __SerdeContext): MaintenanceWindowExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity
 */
const de_MaintenanceWindowExecutionTaskIdentity = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskIdentity => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TaskArn: __expectString(output.TaskArn),
    TaskExecutionId: __expectString(output.TaskExecutionId),
    TaskType: __expectString(output.TaskType),
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList
 */
const de_MaintenanceWindowExecutionTaskIdentityList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowExecutionTaskIdentity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList
 */
const de_MaintenanceWindowExecutionTaskIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity
 */
const de_MaintenanceWindowExecutionTaskInvocationIdentity = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskInvocationIdentity => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExecutionId: __expectString(output.ExecutionId),
    InvocationId: __expectString(output.InvocationId),
    OwnerInformation: __expectString(output.OwnerInformation),
    Parameters: __expectString(output.Parameters),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TaskExecutionId: __expectString(output.TaskExecutionId),
    TaskType: __expectString(output.TaskType),
    WindowExecutionId: __expectString(output.WindowExecutionId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList
 */
const de_MaintenanceWindowExecutionTaskInvocationIdentityList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskInvocationIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowExecutionTaskInvocationIdentity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowIdentity
 */
const de_MaintenanceWindowIdentity = (output: any, context: __SerdeContext): MaintenanceWindowIdentity => {
  return {
    Cutoff: __expectInt32(output.Cutoff),
    Description: __expectString(output.Description),
    Duration: __expectInt32(output.Duration),
    Enabled: __expectBoolean(output.Enabled),
    EndDate: __expectString(output.EndDate),
    Name: __expectString(output.Name),
    NextExecutionTime: __expectString(output.NextExecutionTime),
    Schedule: __expectString(output.Schedule),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    ScheduleTimezone: __expectString(output.ScheduleTimezone),
    StartDate: __expectString(output.StartDate),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowIdentityForTarget
 */
const de_MaintenanceWindowIdentityForTarget = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentityForTarget => {
  return {
    Name: __expectString(output.Name),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowIdentityList
 */
const de_MaintenanceWindowIdentityList = (output: any, context: __SerdeContext): MaintenanceWindowIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowIdentity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowLambdaParameters
 */
const de_MaintenanceWindowLambdaParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowLambdaParameters => {
  return {
    ClientContext: __expectString(output.ClientContext),
    Payload: output.Payload != null ? context.base64Decoder(output.Payload) : undefined,
    Qualifier: __expectString(output.Qualifier),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowRunCommandParameters
 */
const de_MaintenanceWindowRunCommandParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowRunCommandParameters => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? de_CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    Comment: __expectString(output.Comment),
    DocumentHash: __expectString(output.DocumentHash),
    DocumentHashType: __expectString(output.DocumentHashType),
    DocumentVersion: __expectString(output.DocumentVersion),
    NotificationConfig:
      output.NotificationConfig != null ? de_NotificationConfig(output.NotificationConfig, context) : undefined,
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    Parameters: output.Parameters != null ? de_Parameters(output.Parameters, context) : undefined,
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowsForTargetList
 */
const de_MaintenanceWindowsForTargetList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentityForTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowIdentityForTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters
 */
const de_MaintenanceWindowStepFunctionsParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowStepFunctionsParameters => {
  return {
    Input: __expectString(output.Input),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTarget
 */
const de_MaintenanceWindowTarget = (output: any, context: __SerdeContext): MaintenanceWindowTarget => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    OwnerInformation: __expectString(output.OwnerInformation),
    ResourceType: __expectString(output.ResourceType),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTargetList
 */
const de_MaintenanceWindowTargetList = (output: any, context: __SerdeContext): MaintenanceWindowTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTask
 */
const de_MaintenanceWindowTask = (output: any, context: __SerdeContext): MaintenanceWindowTask => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo: output.LoggingInfo != null ? de_LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskParameters:
      output.TaskParameters != null ? de_MaintenanceWindowTaskParameters(output.TaskParameters, context) : undefined,
    Type: __expectString(output.Type),
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters
 */
const de_MaintenanceWindowTaskInvocationParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTaskInvocationParameters => {
  return {
    Automation:
      output.Automation != null ? de_MaintenanceWindowAutomationParameters(output.Automation, context) : undefined,
    Lambda: output.Lambda != null ? de_MaintenanceWindowLambdaParameters(output.Lambda, context) : undefined,
    RunCommand:
      output.RunCommand != null ? de_MaintenanceWindowRunCommandParameters(output.RunCommand, context) : undefined,
    StepFunctions:
      output.StepFunctions != null
        ? de_MaintenanceWindowStepFunctionsParameters(output.StepFunctions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskList
 */
const de_MaintenanceWindowTaskList = (output: any, context: __SerdeContext): MaintenanceWindowTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskParameters
 */
const de_MaintenanceWindowTaskParameters = (
  output: any,
  context: __SerdeContext
): Record<string, MaintenanceWindowTaskParameterValueExpression> => {
  return Object.entries(output).reduce(
    (acc: Record<string, MaintenanceWindowTaskParameterValueExpression>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_MaintenanceWindowTaskParameterValueExpression(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskParametersList
 */
const de_MaintenanceWindowTaskParametersList = (
  output: any,
  context: __SerdeContext
): Record<string, MaintenanceWindowTaskParameterValueExpression>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MaintenanceWindowTaskParameters(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression
 */
const de_MaintenanceWindowTaskParameterValueExpression = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTaskParameterValueExpression => {
  return {
    Values: output.Values != null ? de_MaintenanceWindowTaskParameterValueList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowTaskParameterValueList
 */
const de_MaintenanceWindowTaskParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaxDocumentSizeExceeded
 */
const de_MaxDocumentSizeExceeded = (output: any, context: __SerdeContext): MaxDocumentSizeExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MetadataMap
 */
const de_MetadataMap = (output: any, context: __SerdeContext): Record<string, MetadataValue> => {
  return Object.entries(output).reduce((acc: Record<string, MetadataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MetadataValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MetadataValue
 */
const de_MetadataValue = (output: any, context: __SerdeContext): MetadataValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyDocumentPermissionResponse
 */
const de_ModifyDocumentPermissionResponse = (
  output: any,
  context: __SerdeContext
): ModifyDocumentPermissionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1NonCompliantSummary
 */
const de_NonCompliantSummary = (output: any, context: __SerdeContext): NonCompliantSummary => {
  return {
    NonCompliantCount: __expectInt32(output.NonCompliantCount),
    SeveritySummary: output.SeveritySummary != null ? de_SeveritySummary(output.SeveritySummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NormalStringMap
 */
const de_NormalStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1NotificationConfig
 */
const de_NotificationConfig = (output: any, context: __SerdeContext): NotificationConfig => {
  return {
    NotificationArn: __expectString(output.NotificationArn),
    NotificationEvents:
      output.NotificationEvents != null ? de_NotificationEventList(output.NotificationEvents, context) : undefined,
    NotificationType: __expectString(output.NotificationType),
  } as any;
};

/**
 * deserializeAws_json1_1NotificationEventList
 */
const de_NotificationEventList = (output: any, context: __SerdeContext): (NotificationEvent | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsEntity
 */
const de_OpsEntity = (output: any, context: __SerdeContext): OpsEntity => {
  return {
    Data: output.Data != null ? de_OpsEntityItemMap(output.Data, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1OpsEntityItem
 */
const de_OpsEntityItem = (output: any, context: __SerdeContext): OpsEntityItem => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Content: output.Content != null ? de_OpsEntityItemEntryList(output.Content, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpsEntityItemEntry
 */
const de_OpsEntityItemEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OpsEntityItemEntryList
 */
const de_OpsEntityItemEntryList = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsEntityItemEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsEntityItemMap
 */
const de_OpsEntityItemMap = (output: any, context: __SerdeContext): Record<string, OpsEntityItem> => {
  return Object.entries(output).reduce((acc: Record<string, OpsEntityItem>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_OpsEntityItem(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OpsEntityList
 */
const de_OpsEntityList = (output: any, context: __SerdeContext): OpsEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItem
 */
const de_OpsItem = (output: any, context: __SerdeContext): OpsItem => {
  return {
    ActualEndTime:
      output.ActualEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActualEndTime)))
        : undefined,
    ActualStartTime:
      output.ActualStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActualStartTime)))
        : undefined,
    Category: __expectString(output.Category),
    CreatedBy: __expectString(output.CreatedBy),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Notifications: output.Notifications != null ? de_OpsItemNotifications(output.Notifications, context) : undefined,
    OperationalData:
      output.OperationalData != null ? de_OpsItemOperationalData(output.OperationalData, context) : undefined,
    OpsItemArn: __expectString(output.OpsItemArn),
    OpsItemId: __expectString(output.OpsItemId),
    OpsItemType: __expectString(output.OpsItemType),
    PlannedEndTime:
      output.PlannedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PlannedEndTime)))
        : undefined,
    PlannedStartTime:
      output.PlannedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PlannedStartTime)))
        : undefined,
    Priority: __expectInt32(output.Priority),
    RelatedOpsItems: output.RelatedOpsItems != null ? de_RelatedOpsItems(output.RelatedOpsItems, context) : undefined,
    Severity: __expectString(output.Severity),
    Source: __expectString(output.Source),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemAccessDeniedException
 */
const de_OpsItemAccessDeniedException = (output: any, context: __SerdeContext): OpsItemAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemAlreadyExistsException
 */
const de_OpsItemAlreadyExistsException = (output: any, context: __SerdeContext): OpsItemAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemDataValue
 */
const de_OpsItemDataValue = (output: any, context: __SerdeContext): OpsItemDataValue => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemEventSummaries
 */
const de_OpsItemEventSummaries = (output: any, context: __SerdeContext): OpsItemEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsItemEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemEventSummary
 */
const de_OpsItemEventSummary = (output: any, context: __SerdeContext): OpsItemEventSummary => {
  return {
    CreatedBy: output.CreatedBy != null ? de_OpsItemIdentity(output.CreatedBy, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Detail: __expectString(output.Detail),
    DetailType: __expectString(output.DetailType),
    EventId: __expectString(output.EventId),
    OpsItemId: __expectString(output.OpsItemId),
    Source: __expectString(output.Source),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemIdentity
 */
const de_OpsItemIdentity = (output: any, context: __SerdeContext): OpsItemIdentity => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemInvalidParameterException
 */
const de_OpsItemInvalidParameterException = (
  output: any,
  context: __SerdeContext
): OpsItemInvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    ParameterNames:
      output.ParameterNames != null ? de_OpsItemParameterNamesList(output.ParameterNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemLimitExceededException
 */
const de_OpsItemLimitExceededException = (output: any, context: __SerdeContext): OpsItemLimitExceededException => {
  return {
    Limit: __expectInt32(output.Limit),
    LimitType: __expectString(output.LimitType),
    Message: __expectString(output.Message),
    ResourceTypes:
      output.ResourceTypes != null ? de_OpsItemParameterNamesList(output.ResourceTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemNotFoundException
 */
const de_OpsItemNotFoundException = (output: any, context: __SerdeContext): OpsItemNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemNotification
 */
const de_OpsItemNotification = (output: any, context: __SerdeContext): OpsItemNotification => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemNotifications
 */
const de_OpsItemNotifications = (output: any, context: __SerdeContext): OpsItemNotification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsItemNotification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemOperationalData
 */
const de_OpsItemOperationalData = (output: any, context: __SerdeContext): Record<string, OpsItemDataValue> => {
  return Object.entries(output).reduce((acc: Record<string, OpsItemDataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_OpsItemDataValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OpsItemParameterNamesList
 */
const de_OpsItemParameterNamesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsException
 */
const de_OpsItemRelatedItemAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    OpsItemId: __expectString(output.OpsItemId),
    ResourceUri: __expectString(output.ResourceUri),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundException
 */
const de_OpsItemRelatedItemAssociationNotFoundException = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemAssociationNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemSummaries
 */
const de_OpsItemRelatedItemSummaries = (output: any, context: __SerdeContext): OpsItemRelatedItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsItemRelatedItemSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemSummary
 */
const de_OpsItemRelatedItemSummary = (output: any, context: __SerdeContext): OpsItemRelatedItemSummary => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationType: __expectString(output.AssociationType),
    CreatedBy: output.CreatedBy != null ? de_OpsItemIdentity(output.CreatedBy, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastModifiedBy: output.LastModifiedBy != null ? de_OpsItemIdentity(output.LastModifiedBy, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    OpsItemId: __expectString(output.OpsItemId),
    ResourceType: __expectString(output.ResourceType),
    ResourceUri: __expectString(output.ResourceUri),
  } as any;
};

/**
 * deserializeAws_json1_1OpsItemSummaries
 */
const de_OpsItemSummaries = (output: any, context: __SerdeContext): OpsItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsItemSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemSummary
 */
const de_OpsItemSummary = (output: any, context: __SerdeContext): OpsItemSummary => {
  return {
    ActualEndTime:
      output.ActualEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActualEndTime)))
        : undefined,
    ActualStartTime:
      output.ActualStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActualStartTime)))
        : undefined,
    Category: __expectString(output.Category),
    CreatedBy: __expectString(output.CreatedBy),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    OperationalData:
      output.OperationalData != null ? de_OpsItemOperationalData(output.OperationalData, context) : undefined,
    OpsItemId: __expectString(output.OpsItemId),
    OpsItemType: __expectString(output.OpsItemType),
    PlannedEndTime:
      output.PlannedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PlannedEndTime)))
        : undefined,
    PlannedStartTime:
      output.PlannedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PlannedStartTime)))
        : undefined,
    Priority: __expectInt32(output.Priority),
    Severity: __expectString(output.Severity),
    Source: __expectString(output.Source),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadata
 */
const de_OpsMetadata = (output: any, context: __SerdeContext): OpsMetadata => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LastModifiedUser: __expectString(output.LastModifiedUser),
    OpsMetadataArn: __expectString(output.OpsMetadataArn),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataAlreadyExistsException
 */
const de_OpsMetadataAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OpsMetadataAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataInvalidArgumentException
 */
const de_OpsMetadataInvalidArgumentException = (
  output: any,
  context: __SerdeContext
): OpsMetadataInvalidArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataKeyLimitExceededException
 */
const de_OpsMetadataKeyLimitExceededException = (
  output: any,
  context: __SerdeContext
): OpsMetadataKeyLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataLimitExceededException
 */
const de_OpsMetadataLimitExceededException = (
  output: any,
  context: __SerdeContext
): OpsMetadataLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataList
 */
const de_OpsMetadataList = (output: any, context: __SerdeContext): OpsMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpsMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsMetadataNotFoundException
 */
const de_OpsMetadataNotFoundException = (output: any, context: __SerdeContext): OpsMetadataNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OpsMetadataTooManyUpdatesException
 */
const de_OpsMetadataTooManyUpdatesException = (
  output: any,
  context: __SerdeContext
): OpsMetadataTooManyUpdatesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OutputSource
 */
const de_OutputSource = (output: any, context: __SerdeContext): OutputSource => {
  return {
    OutputSourceId: __expectString(output.OutputSourceId),
    OutputSourceType: __expectString(output.OutputSourceType),
  } as any;
};

/**
 * deserializeAws_json1_1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    ARN: __expectString(output.ARN),
    DataType: __expectString(output.DataType),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    Selector: __expectString(output.Selector),
    SourceResult: __expectString(output.SourceResult),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
    Version: __expectLong(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterAlreadyExists
 */
const de_ParameterAlreadyExists = (output: any, context: __SerdeContext): ParameterAlreadyExists => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterHistory
 */
const de_ParameterHistory = (output: any, context: __SerdeContext): ParameterHistory => {
  return {
    AllowedPattern: __expectString(output.AllowedPattern),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    KeyId: __expectString(output.KeyId),
    Labels: output.Labels != null ? de_ParameterLabelList(output.Labels, context) : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LastModifiedUser: __expectString(output.LastModifiedUser),
    Name: __expectString(output.Name),
    Policies: output.Policies != null ? de_ParameterPolicyList(output.Policies, context) : undefined,
    Tier: __expectString(output.Tier),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
    Version: __expectLong(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterHistoryList
 */
const de_ParameterHistoryList = (output: any, context: __SerdeContext): ParameterHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterInlinePolicy
 */
const de_ParameterInlinePolicy = (output: any, context: __SerdeContext): ParameterInlinePolicy => {
  return {
    PolicyStatus: __expectString(output.PolicyStatus),
    PolicyText: __expectString(output.PolicyText),
    PolicyType: __expectString(output.PolicyType),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterLabelList
 */
const de_ParameterLabelList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterLimitExceeded
 */
const de_ParameterLimitExceeded = (output: any, context: __SerdeContext): ParameterLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterList
 */
const de_ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Parameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterMaxVersionLimitExceeded
 */
const de_ParameterMaxVersionLimitExceeded = (
  output: any,
  context: __SerdeContext
): ParameterMaxVersionLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterMetadata
 */
const de_ParameterMetadata = (output: any, context: __SerdeContext): ParameterMetadata => {
  return {
    AllowedPattern: __expectString(output.AllowedPattern),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    KeyId: __expectString(output.KeyId),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LastModifiedUser: __expectString(output.LastModifiedUser),
    Name: __expectString(output.Name),
    Policies: output.Policies != null ? de_ParameterPolicyList(output.Policies, context) : undefined,
    Tier: __expectString(output.Tier),
    Type: __expectString(output.Type),
    Version: __expectLong(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterMetadataList
 */
const de_ParameterMetadataList = (output: any, context: __SerdeContext): ParameterMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterNameList
 */
const de_ParameterNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterNotFound
 */
const de_ParameterNotFound = (output: any, context: __SerdeContext): ParameterNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterPatternMismatchException
 */
const de_ParameterPatternMismatchException = (
  output: any,
  context: __SerdeContext
): ParameterPatternMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterPolicyList
 */
const de_ParameterPolicyList = (output: any, context: __SerdeContext): ParameterInlinePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterInlinePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Parameters
 */
const de_Parameters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ParameterValueList
 */
const de_ParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterVersionLabelLimitExceeded
 */
const de_ParameterVersionLabelLimitExceeded = (
  output: any,
  context: __SerdeContext
): ParameterVersionLabelLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterVersionNotFound
 */
const de_ParameterVersionNotFound = (output: any, context: __SerdeContext): ParameterVersionNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Patch
 */
const de_Patch = (output: any, context: __SerdeContext): Patch => {
  return {
    AdvisoryIds: output.AdvisoryIds != null ? de_PatchAdvisoryIdList(output.AdvisoryIds, context) : undefined,
    Arch: __expectString(output.Arch),
    BugzillaIds: output.BugzillaIds != null ? de_PatchBugzillaIdList(output.BugzillaIds, context) : undefined,
    CVEIds: output.CVEIds != null ? de_PatchCVEIdList(output.CVEIds, context) : undefined,
    Classification: __expectString(output.Classification),
    ContentUrl: __expectString(output.ContentUrl),
    Description: __expectString(output.Description),
    Epoch: __expectInt32(output.Epoch),
    Id: __expectString(output.Id),
    KbNumber: __expectString(output.KbNumber),
    Language: __expectString(output.Language),
    MsrcNumber: __expectString(output.MsrcNumber),
    MsrcSeverity: __expectString(output.MsrcSeverity),
    Name: __expectString(output.Name),
    Product: __expectString(output.Product),
    ProductFamily: __expectString(output.ProductFamily),
    Release: __expectString(output.Release),
    ReleaseDate:
      output.ReleaseDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReleaseDate)))
        : undefined,
    Repository: __expectString(output.Repository),
    Severity: __expectString(output.Severity),
    Title: __expectString(output.Title),
    Vendor: __expectString(output.Vendor),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1PatchAdvisoryIdList
 */
const de_PatchAdvisoryIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchBaselineIdentity
 */
const de_PatchBaselineIdentity = (output: any, context: __SerdeContext): PatchBaselineIdentity => {
  return {
    BaselineDescription: __expectString(output.BaselineDescription),
    BaselineId: __expectString(output.BaselineId),
    BaselineName: __expectString(output.BaselineName),
    DefaultBaseline: __expectBoolean(output.DefaultBaseline),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

/**
 * deserializeAws_json1_1PatchBaselineIdentityList
 */
const de_PatchBaselineIdentityList = (output: any, context: __SerdeContext): PatchBaselineIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchBaselineIdentity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchBugzillaIdList
 */
const de_PatchBugzillaIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchComplianceData
 */
const de_PatchComplianceData = (output: any, context: __SerdeContext): PatchComplianceData => {
  return {
    CVEIds: __expectString(output.CVEIds),
    Classification: __expectString(output.Classification),
    InstalledTime:
      output.InstalledTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InstalledTime)))
        : undefined,
    KBId: __expectString(output.KBId),
    Severity: __expectString(output.Severity),
    State: __expectString(output.State),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_json1_1PatchComplianceDataList
 */
const de_PatchComplianceDataList = (output: any, context: __SerdeContext): PatchComplianceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchComplianceData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchCVEIdList
 */
const de_PatchCVEIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchFilter
 */
const de_PatchFilter = (output: any, context: __SerdeContext): PatchFilter => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_PatchFilterValueList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PatchFilterGroup
 */
const de_PatchFilterGroup = (output: any, context: __SerdeContext): PatchFilterGroup => {
  return {
    PatchFilters: output.PatchFilters != null ? de_PatchFilterList(output.PatchFilters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PatchFilterList
 */
const de_PatchFilterList = (output: any, context: __SerdeContext): PatchFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchFilterValueList
 */
const de_PatchFilterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchGroupList
 */
const de_PatchGroupList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchGroupPatchBaselineMapping
 */
const de_PatchGroupPatchBaselineMapping = (output: any, context: __SerdeContext): PatchGroupPatchBaselineMapping => {
  return {
    BaselineIdentity:
      output.BaselineIdentity != null ? de_PatchBaselineIdentity(output.BaselineIdentity, context) : undefined,
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

/**
 * deserializeAws_json1_1PatchGroupPatchBaselineMappingList
 */
const de_PatchGroupPatchBaselineMappingList = (
  output: any,
  context: __SerdeContext
): PatchGroupPatchBaselineMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchGroupPatchBaselineMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchIdList
 */
const de_PatchIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchList
 */
const de_PatchList = (output: any, context: __SerdeContext): Patch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Patch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchPropertiesList
 */
const de_PatchPropertiesList = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchPropertyEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchPropertyEntry
 */
const de_PatchPropertyEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PatchRule
 */
const de_PatchRule = (output: any, context: __SerdeContext): PatchRule => {
  return {
    ApproveAfterDays: __expectInt32(output.ApproveAfterDays),
    ApproveUntilDate: __expectString(output.ApproveUntilDate),
    ComplianceLevel: __expectString(output.ComplianceLevel),
    EnableNonSecurity: __expectBoolean(output.EnableNonSecurity),
    PatchFilterGroup:
      output.PatchFilterGroup != null ? de_PatchFilterGroup(output.PatchFilterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PatchRuleGroup
 */
const de_PatchRuleGroup = (output: any, context: __SerdeContext): PatchRuleGroup => {
  return {
    PatchRules: output.PatchRules != null ? de_PatchRuleList(output.PatchRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PatchRuleList
 */
const de_PatchRuleList = (output: any, context: __SerdeContext): PatchRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchSource
 */
const de_PatchSource = (output: any, context: __SerdeContext): PatchSource => {
  return {
    Configuration: __expectString(output.Configuration),
    Name: __expectString(output.Name),
    Products: output.Products != null ? de_PatchSourceProductList(output.Products, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PatchSourceList
 */
const de_PatchSourceList = (output: any, context: __SerdeContext): PatchSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PatchSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchSourceProductList
 */
const de_PatchSourceProductList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PatchStatus
 */
const de_PatchStatus = (output: any, context: __SerdeContext): PatchStatus => {
  return {
    ApprovalDate:
      output.ApprovalDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApprovalDate)))
        : undefined,
    ComplianceLevel: __expectString(output.ComplianceLevel),
    DeploymentStatus: __expectString(output.DeploymentStatus),
  } as any;
};

/**
 * deserializeAws_json1_1PlatformTypeList
 */
const de_PlatformTypeList = (output: any, context: __SerdeContext): (PlatformType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PoliciesLimitExceededException
 */
const de_PoliciesLimitExceededException = (output: any, context: __SerdeContext): PoliciesLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProgressCounters
 */
const de_ProgressCounters = (output: any, context: __SerdeContext): ProgressCounters => {
  return {
    CancelledSteps: __expectInt32(output.CancelledSteps),
    FailedSteps: __expectInt32(output.FailedSteps),
    SuccessSteps: __expectInt32(output.SuccessSteps),
    TimedOutSteps: __expectInt32(output.TimedOutSteps),
    TotalSteps: __expectInt32(output.TotalSteps),
  } as any;
};

/**
 * deserializeAws_json1_1PutComplianceItemsResult
 */
const de_PutComplianceItemsResult = (output: any, context: __SerdeContext): PutComplianceItemsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutInventoryResult
 */
const de_PutInventoryResult = (output: any, context: __SerdeContext): PutInventoryResult => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PutParameterResult
 */
const de_PutParameterResult = (output: any, context: __SerdeContext): PutParameterResult => {
  return {
    Tier: __expectString(output.Tier),
    Version: __expectLong(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    PolicyHash: __expectString(output.PolicyHash),
    PolicyId: __expectString(output.PolicyId),
  } as any;
};

/**
 * deserializeAws_json1_1Regions
 */
const de_Regions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegisterDefaultPatchBaselineResult
 */
const de_RegisterDefaultPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): RegisterDefaultPatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult
 */
const de_RegisterPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): RegisterPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult
 */
const de_RegisterTargetWithMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): RegisterTargetWithMaintenanceWindowResult => {
  return {
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult
 */
const de_RegisterTaskWithMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): RegisterTaskWithMaintenanceWindowResult => {
  return {
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1RelatedOpsItem
 */
const de_RelatedOpsItem = (output: any, context: __SerdeContext): RelatedOpsItem => {
  return {
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

/**
 * deserializeAws_json1_1RelatedOpsItems
 */
const de_RelatedOpsItems = (output: any, context: __SerdeContext): RelatedOpsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelatedOpsItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceResult
 */
const de_RemoveTagsFromResourceResult = (output: any, context: __SerdeContext): RemoveTagsFromResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResetServiceSettingResult
 */
const de_ResetServiceSettingResult = (output: any, context: __SerdeContext): ResetServiceSettingResult => {
  return {
    ServiceSetting: output.ServiceSetting != null ? de_ServiceSetting(output.ServiceSetting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResolvedTargets
 */
const de_ResolvedTargets = (output: any, context: __SerdeContext): ResolvedTargets => {
  return {
    ParameterValues:
      output.ParameterValues != null ? de_TargetParameterList(output.ParameterValues, context) : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceComplianceSummaryItem
 */
const de_ResourceComplianceSummaryItem = (output: any, context: __SerdeContext): ResourceComplianceSummaryItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantSummary:
      output.CompliantSummary != null ? de_CompliantSummary(output.CompliantSummary, context) : undefined,
    ExecutionSummary:
      output.ExecutionSummary != null ? de_ComplianceExecutionSummary(output.ExecutionSummary, context) : undefined,
    NonCompliantSummary:
      output.NonCompliantSummary != null ? de_NonCompliantSummary(output.NonCompliantSummary, context) : undefined,
    OverallSeverity: __expectString(output.OverallSeverity),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceComplianceSummaryItemList
 */
const de_ResourceComplianceSummaryItemList = (
  output: any,
  context: __SerdeContext
): ResourceComplianceSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceComplianceSummaryItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDataSyncAlreadyExistsException
 */
const de_ResourceDataSyncAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncAlreadyExistsException => {
  return {
    SyncName: __expectString(output.SyncName),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource
 */
const de_ResourceDataSyncAwsOrganizationsSource = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncAwsOrganizationsSource => {
  return {
    OrganizationSourceType: __expectString(output.OrganizationSourceType),
    OrganizationalUnits:
      output.OrganizationalUnits != null
        ? de_ResourceDataSyncOrganizationalUnitList(output.OrganizationalUnits, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncConflictException
 */
const de_ResourceDataSyncConflictException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncCountExceededException
 */
const de_ResourceDataSyncCountExceededException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncCountExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncDestinationDataSharing
 */
const de_ResourceDataSyncDestinationDataSharing = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncDestinationDataSharing => {
  return {
    DestinationDataSharingType: __expectString(output.DestinationDataSharingType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException
 */
const de_ResourceDataSyncInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncInvalidConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncItem
 */
const de_ResourceDataSyncItem = (output: any, context: __SerdeContext): ResourceDataSyncItem => {
  return {
    LastStatus: __expectString(output.LastStatus),
    LastSuccessfulSyncTime:
      output.LastSuccessfulSyncTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulSyncTime)))
        : undefined,
    LastSyncStatusMessage: __expectString(output.LastSyncStatusMessage),
    LastSyncTime:
      output.LastSyncTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSyncTime)))
        : undefined,
    S3Destination:
      output.S3Destination != null ? de_ResourceDataSyncS3Destination(output.S3Destination, context) : undefined,
    SyncCreatedTime:
      output.SyncCreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SyncCreatedTime)))
        : undefined,
    SyncLastModifiedTime:
      output.SyncLastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SyncLastModifiedTime)))
        : undefined,
    SyncName: __expectString(output.SyncName),
    SyncSource: output.SyncSource != null ? de_ResourceDataSyncSourceWithState(output.SyncSource, context) : undefined,
    SyncType: __expectString(output.SyncType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncItemList
 */
const de_ResourceDataSyncItemList = (output: any, context: __SerdeContext): ResourceDataSyncItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceDataSyncItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDataSyncNotFoundException
 */
const de_ResourceDataSyncNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncNotFoundException => {
  return {
    Message: __expectString(output.Message),
    SyncName: __expectString(output.SyncName),
    SyncType: __expectString(output.SyncType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncOrganizationalUnit
 */
const de_ResourceDataSyncOrganizationalUnit = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncOrganizationalUnit => {
  return {
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList
 */
const de_ResourceDataSyncOrganizationalUnitList = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncOrganizationalUnit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceDataSyncOrganizationalUnit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDataSyncS3Destination
 */
const de_ResourceDataSyncS3Destination = (output: any, context: __SerdeContext): ResourceDataSyncS3Destination => {
  return {
    AWSKMSKeyARN: __expectString(output.AWSKMSKeyARN),
    BucketName: __expectString(output.BucketName),
    DestinationDataSharing:
      output.DestinationDataSharing != null
        ? de_ResourceDataSyncDestinationDataSharing(output.DestinationDataSharing, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
    Region: __expectString(output.Region),
    SyncFormat: __expectString(output.SyncFormat),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncSourceRegionList
 */
const de_ResourceDataSyncSourceRegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDataSyncSourceWithState
 */
const de_ResourceDataSyncSourceWithState = (output: any, context: __SerdeContext): ResourceDataSyncSourceWithState => {
  return {
    AwsOrganizationsSource:
      output.AwsOrganizationsSource != null
        ? de_ResourceDataSyncAwsOrganizationsSource(output.AwsOrganizationsSource, context)
        : undefined,
    EnableAllOpsDataSources: __expectBoolean(output.EnableAllOpsDataSources),
    IncludeFutureRegions: __expectBoolean(output.IncludeFutureRegions),
    SourceRegions:
      output.SourceRegions != null ? de_ResourceDataSyncSourceRegionList(output.SourceRegions, context) : undefined,
    SourceType: __expectString(output.SourceType),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceLimitExceededException
 */
const de_ResourceLimitExceededException = (output: any, context: __SerdeContext): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyConflictException
 */
const de_ResourcePolicyConflictException = (output: any, context: __SerdeContext): ResourcePolicyConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyInvalidParameterException
 */
const de_ResourcePolicyInvalidParameterException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyInvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    ParameterNames:
      output.ParameterNames != null ? de_ResourcePolicyParameterNamesList(output.ParameterNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyLimitExceededException
 */
const de_ResourcePolicyLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyLimitExceededException => {
  return {
    Limit: __expectInt32(output.Limit),
    LimitType: __expectString(output.LimitType),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyParameterNamesList
 */
const de_ResourcePolicyParameterNamesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResumeSessionResponse
 */
const de_ResumeSessionResponse = (output: any, context: __SerdeContext): ResumeSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    StreamUrl: __expectString(output.StreamUrl),
    TokenValue: __expectString(output.TokenValue),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewInformation
 */
const de_ReviewInformation = (output: any, context: __SerdeContext): ReviewInformation => {
  return {
    ReviewedTime:
      output.ReviewedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReviewedTime)))
        : undefined,
    Reviewer: __expectString(output.Reviewer),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewInformationList
 */
const de_ReviewInformationList = (output: any, context: __SerdeContext): ReviewInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReviewInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Runbook
 */
const de_Runbook = (output: any, context: __SerdeContext): Runbook => {
  return {
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Parameters: output.Parameters != null ? de_AutomationParameterMap(output.Parameters, context) : undefined,
    TargetLocations: output.TargetLocations != null ? de_TargetLocations(output.TargetLocations, context) : undefined,
    TargetMaps: output.TargetMaps != null ? de_TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Runbooks
 */
const de_Runbooks = (output: any, context: __SerdeContext): Runbook[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Runbook(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1S3OutputLocation
 */
const de_S3OutputLocation = (output: any, context: __SerdeContext): S3OutputLocation => {
  return {
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    OutputS3Region: __expectString(output.OutputS3Region),
  } as any;
};

/**
 * deserializeAws_json1_1S3OutputUrl
 */
const de_S3OutputUrl = (output: any, context: __SerdeContext): S3OutputUrl => {
  return {
    OutputUrl: __expectString(output.OutputUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ScheduledWindowExecution
 */
const de_ScheduledWindowExecution = (output: any, context: __SerdeContext): ScheduledWindowExecution => {
  return {
    ExecutionTime: __expectString(output.ExecutionTime),
    Name: __expectString(output.Name),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1ScheduledWindowExecutionList
 */
const de_ScheduledWindowExecutionList = (output: any, context: __SerdeContext): ScheduledWindowExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduledWindowExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SendAutomationSignalResult
 */
const de_SendAutomationSignalResult = (output: any, context: __SerdeContext): SendAutomationSignalResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SendCommandResult
 */
const de_SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return {
    Command: output.Command != null ? de_Command(output.Command, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceSetting
 */
const de_ServiceSetting = (output: any, context: __SerdeContext): ServiceSetting => {
  return {
    ARN: __expectString(output.ARN),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LastModifiedUser: __expectString(output.LastModifiedUser),
    SettingId: __expectString(output.SettingId),
    SettingValue: __expectString(output.SettingValue),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceSettingNotFound
 */
const de_ServiceSettingNotFound = (output: any, context: __SerdeContext): ServiceSettingNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return {
    Details: __expectString(output.Details),
    DocumentName: __expectString(output.DocumentName),
    EndDate:
      output.EndDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDate))) : undefined,
    MaxSessionDuration: __expectString(output.MaxSessionDuration),
    OutputUrl: output.OutputUrl != null ? de_SessionManagerOutputUrl(output.OutputUrl, context) : undefined,
    Owner: __expectString(output.Owner),
    Reason: __expectString(output.Reason),
    SessionId: __expectString(output.SessionId),
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    Status: __expectString(output.Status),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_json1_1SessionList
 */
const de_SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Session(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SessionManagerOutputUrl
 */
const de_SessionManagerOutputUrl = (output: any, context: __SerdeContext): SessionManagerOutputUrl => {
  return {
    CloudWatchOutputUrl: __expectString(output.CloudWatchOutputUrl),
    S3OutputUrl: __expectString(output.S3OutputUrl),
  } as any;
};

/**
 * deserializeAws_json1_1SeveritySummary
 */
const de_SeveritySummary = (output: any, context: __SerdeContext): SeveritySummary => {
  return {
    CriticalCount: __expectInt32(output.CriticalCount),
    HighCount: __expectInt32(output.HighCount),
    InformationalCount: __expectInt32(output.InformationalCount),
    LowCount: __expectInt32(output.LowCount),
    MediumCount: __expectInt32(output.MediumCount),
    UnspecifiedCount: __expectInt32(output.UnspecifiedCount),
  } as any;
};

/**
 * deserializeAws_json1_1StartAssociationsOnceResult
 */
const de_StartAssociationsOnceResult = (output: any, context: __SerdeContext): StartAssociationsOnceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartAutomationExecutionResult
 */
const de_StartAutomationExecutionResult = (output: any, context: __SerdeContext): StartAutomationExecutionResult => {
  return {
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1StartChangeRequestExecutionResult
 */
const de_StartChangeRequestExecutionResult = (
  output: any,
  context: __SerdeContext
): StartChangeRequestExecutionResult => {
  return {
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1StartSessionResponse
 */
const de_StartSessionResponse = (output: any, context: __SerdeContext): StartSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    StreamUrl: __expectString(output.StreamUrl),
    TokenValue: __expectString(output.TokenValue),
  } as any;
};

/**
 * deserializeAws_json1_1StatusUnchanged
 */
const de_StatusUnchanged = (output: any, context: __SerdeContext): StatusUnchanged => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StepExecution
 */
const de_StepExecution = (output: any, context: __SerdeContext): StepExecution => {
  return {
    Action: __expectString(output.Action),
    ExecutionEndTime:
      output.ExecutionEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionEndTime)))
        : undefined,
    ExecutionStartTime:
      output.ExecutionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionStartTime)))
        : undefined,
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
    Inputs: output.Inputs != null ? de_NormalStringMap(output.Inputs, context) : undefined,
    IsCritical: __expectBoolean(output.IsCritical),
    IsEnd: __expectBoolean(output.IsEnd),
    MaxAttempts: __expectInt32(output.MaxAttempts),
    NextStep: __expectString(output.NextStep),
    OnFailure: __expectString(output.OnFailure),
    Outputs: output.Outputs != null ? de_AutomationParameterMap(output.Outputs, context) : undefined,
    OverriddenParameters:
      output.OverriddenParameters != null ? de_AutomationParameterMap(output.OverriddenParameters, context) : undefined,
    Response: __expectString(output.Response),
    ResponseCode: __expectString(output.ResponseCode),
    StepExecutionId: __expectString(output.StepExecutionId),
    StepName: __expectString(output.StepName),
    StepStatus: __expectString(output.StepStatus),
    TargetLocation: output.TargetLocation != null ? de_TargetLocation(output.TargetLocation, context) : undefined,
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TimeoutSeconds: __expectLong(output.TimeoutSeconds),
    TriggeredAlarms:
      output.TriggeredAlarms != null ? de_AlarmStateInformationList(output.TriggeredAlarms, context) : undefined,
    ValidNextSteps: output.ValidNextSteps != null ? de_ValidNextStepList(output.ValidNextSteps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StepExecutionList
 */
const de_StepExecutionList = (output: any, context: __SerdeContext): StepExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StepExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StopAutomationExecutionResult
 */
const de_StopAutomationExecutionResult = (output: any, context: __SerdeContext): StopAutomationExecutionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SubTypeCountLimitExceededException
 */
const de_SubTypeCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): SubTypeCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Target
 */
const de_Target = (output: any, context: __SerdeContext): Target => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_TargetValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetInUseException
 */
const de_TargetInUseException = (output: any, context: __SerdeContext): TargetInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetLocation
 */
const de_TargetLocation = (output: any, context: __SerdeContext): TargetLocation => {
  return {
    Accounts: output.Accounts != null ? de_Accounts(output.Accounts, context) : undefined,
    ExecutionRoleName: __expectString(output.ExecutionRoleName),
    Regions: output.Regions != null ? de_Regions(output.Regions, context) : undefined,
    TargetLocationAlarmConfiguration:
      output.TargetLocationAlarmConfiguration != null
        ? de_AlarmConfiguration(output.TargetLocationAlarmConfiguration, context)
        : undefined,
    TargetLocationMaxConcurrency: __expectString(output.TargetLocationMaxConcurrency),
    TargetLocationMaxErrors: __expectString(output.TargetLocationMaxErrors),
  } as any;
};

/**
 * deserializeAws_json1_1TargetLocations
 */
const de_TargetLocations = (output: any, context: __SerdeContext): TargetLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetMap
 */
const de_TargetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_TargetMapValueList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TargetMaps
 */
const de_TargetMaps = (output: any, context: __SerdeContext): Record<string, string[]>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetMapValueList
 */
const de_TargetMapValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetNotConnected
 */
const de_TargetNotConnected = (output: any, context: __SerdeContext): TargetNotConnected => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetParameterList
 */
const de_TargetParameterList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Targets
 */
const de_Targets = (output: any, context: __SerdeContext): Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Target(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetValues
 */
const de_TargetValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TerminateSessionResponse
 */
const de_TerminateSessionResponse = (output: any, context: __SerdeContext): TerminateSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsError
 */
const de_TooManyTagsError = (output: any, context: __SerdeContext): TooManyTagsError => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TooManyUpdates
 */
const de_TooManyUpdates = (output: any, context: __SerdeContext): TooManyUpdates => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TotalSizeLimitExceededException
 */
const de_TotalSizeLimitExceededException = (output: any, context: __SerdeContext): TotalSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnlabelParameterVersionResult
 */
const de_UnlabelParameterVersionResult = (output: any, context: __SerdeContext): UnlabelParameterVersionResult => {
  return {
    InvalidLabels: output.InvalidLabels != null ? de_ParameterLabelList(output.InvalidLabels, context) : undefined,
    RemovedLabels: output.RemovedLabels != null ? de_ParameterLabelList(output.RemovedLabels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedCalendarException
 */
const de_UnsupportedCalendarException = (output: any, context: __SerdeContext): UnsupportedCalendarException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedFeatureRequiredException
 */
const de_UnsupportedFeatureRequiredException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureRequiredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedInventoryItemContextException
 */
const de_UnsupportedInventoryItemContextException = (
  output: any,
  context: __SerdeContext
): UnsupportedInventoryItemContextException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedInventorySchemaVersionException
 */
const de_UnsupportedInventorySchemaVersionException = (
  output: any,
  context: __SerdeContext
): UnsupportedInventorySchemaVersionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperatingSystem
 */
const de_UnsupportedOperatingSystem = (output: any, context: __SerdeContext): UnsupportedOperatingSystem => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedParameterType
 */
const de_UnsupportedParameterType = (output: any, context: __SerdeContext): UnsupportedParameterType => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedPlatformType
 */
const de_UnsupportedPlatformType = (output: any, context: __SerdeContext): UnsupportedPlatformType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAssociationResult
 */
const de_UpdateAssociationResult = (output: any, context: __SerdeContext): UpdateAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? de_AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAssociationStatusResult
 */
const de_UpdateAssociationStatusResult = (output: any, context: __SerdeContext): UpdateAssociationStatusResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? de_AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDocumentDefaultVersionResult
 */
const de_UpdateDocumentDefaultVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateDocumentDefaultVersionResult => {
  return {
    Description:
      output.Description != null ? de_DocumentDefaultVersionDescription(output.Description, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDocumentMetadataResponse
 */
const de_UpdateDocumentMetadataResponse = (output: any, context: __SerdeContext): UpdateDocumentMetadataResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDocumentResult
 */
const de_UpdateDocumentResult = (output: any, context: __SerdeContext): UpdateDocumentResult => {
  return {
    DocumentDescription:
      output.DocumentDescription != null ? de_DocumentDescription(output.DocumentDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowResult
 */
const de_UpdateMaintenanceWindowResult = (output: any, context: __SerdeContext): UpdateMaintenanceWindowResult => {
  return {
    AllowUnassociatedTargets: __expectBoolean(output.AllowUnassociatedTargets),
    Cutoff: __expectInt32(output.Cutoff),
    Description: __expectString(output.Description),
    Duration: __expectInt32(output.Duration),
    Enabled: __expectBoolean(output.Enabled),
    EndDate: __expectString(output.EndDate),
    Name: __expectString(output.Name),
    Schedule: __expectString(output.Schedule),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    ScheduleTimezone: __expectString(output.ScheduleTimezone),
    StartDate: __expectString(output.StartDate),
    WindowId: __expectString(output.WindowId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTargetResult
 */
const de_UpdateMaintenanceWindowTargetResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowTargetResult => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    OwnerInformation: __expectString(output.OwnerInformation),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTaskResult
 */
const de_UpdateMaintenanceWindowTaskResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null ? de_AlarmConfiguration(output.AlarmConfiguration, context) : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo: output.LoggingInfo != null ? de_LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? de_Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskInvocationParameters:
      output.TaskInvocationParameters != null
        ? de_MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
        : undefined,
    TaskParameters:
      output.TaskParameters != null ? de_MaintenanceWindowTaskParameters(output.TaskParameters, context) : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateManagedInstanceRoleResult
 */
const de_UpdateManagedInstanceRoleResult = (output: any, context: __SerdeContext): UpdateManagedInstanceRoleResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateOpsItemResponse
 */
const de_UpdateOpsItemResponse = (output: any, context: __SerdeContext): UpdateOpsItemResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateOpsMetadataResult
 */
const de_UpdateOpsMetadataResult = (output: any, context: __SerdeContext): UpdateOpsMetadataResult => {
  return {
    OpsMetadataArn: __expectString(output.OpsMetadataArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePatchBaselineResult
 */
const de_UpdatePatchBaselineResult = (output: any, context: __SerdeContext): UpdatePatchBaselineResult => {
  return {
    ApprovalRules: output.ApprovalRules != null ? de_PatchRuleGroup(output.ApprovalRules, context) : undefined,
    ApprovedPatches: output.ApprovedPatches != null ? de_PatchIdList(output.ApprovedPatches, context) : undefined,
    ApprovedPatchesComplianceLevel: __expectString(output.ApprovedPatchesComplianceLevel),
    ApprovedPatchesEnableNonSecurity: __expectBoolean(output.ApprovedPatchesEnableNonSecurity),
    BaselineId: __expectString(output.BaselineId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalFilters: output.GlobalFilters != null ? de_PatchFilterGroup(output.GlobalFilters, context) : undefined,
    ModifiedDate:
      output.ModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    RejectedPatches: output.RejectedPatches != null ? de_PatchIdList(output.RejectedPatches, context) : undefined,
    RejectedPatchesAction: __expectString(output.RejectedPatchesAction),
    Sources: output.Sources != null ? de_PatchSourceList(output.Sources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResourceDataSyncResult
 */
const de_UpdateResourceDataSyncResult = (output: any, context: __SerdeContext): UpdateResourceDataSyncResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateServiceSettingResult
 */
const de_UpdateServiceSettingResult = (output: any, context: __SerdeContext): UpdateServiceSettingResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidNextStepList
 */
const de_ValidNextStepList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
