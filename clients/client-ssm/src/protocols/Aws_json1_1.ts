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

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateOpsItemRelatedItemCommand = async (
  input: AssociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.AssociateOpsItemRelatedItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateOpsItemRelatedItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelCommandCommand = async (
  input: CancelCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CancelCommand",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelMaintenanceWindowExecutionCommand = async (
  input: CancelMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CancelMaintenanceWindowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelMaintenanceWindowExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateActivationCommand = async (
  input: CreateActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateActivation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateActivationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAssociationCommand = async (
  input: CreateAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAssociationBatchCommand = async (
  input: CreateAssociationBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateAssociationBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAssociationBatchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDocumentCommand = async (
  input: CreateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMaintenanceWindowCommand = async (
  input: CreateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateOpsItemCommand = async (
  input: CreateOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateOpsItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateOpsMetadataCommand = async (
  input: CreateOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePatchBaselineCommand = async (
  input: CreatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreatePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResourceDataSyncCommand = async (
  input: CreateResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.CreateResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteActivationCommand = async (
  input: DeleteActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteActivation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteActivationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAssociationCommand = async (
  input: DeleteAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInventoryCommand = async (
  input: DeleteInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteInventory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMaintenanceWindowCommand = async (
  input: DeleteMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOpsMetadataCommand = async (
  input: DeleteOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParameterCommand = async (
  input: DeleteParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParametersCommand = async (
  input: DeleteParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePatchBaselineCommand = async (
  input: DeletePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeletePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourceDataSyncCommand = async (
  input: DeleteResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterManagedInstanceCommand = async (
  input: DeregisterManagedInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterManagedInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterManagedInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = async (
  input: DeregisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = async (
  input: DeregisterTargetFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterTargetFromMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = async (
  input: DeregisterTaskFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DeregisterTaskFromMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeActivationsCommand = async (
  input: DescribeActivationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeActivations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeActivationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssociationCommand = async (
  input: DescribeAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssociationExecutionsCommand = async (
  input: DescribeAssociationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociationExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssociationExecutionTargetsCommand = async (
  input: DescribeAssociationExecutionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAssociationExecutionTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssociationExecutionTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAutomationExecutionsCommand = async (
  input: DescribeAutomationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAutomationExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAutomationExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAutomationStepExecutionsCommand = async (
  input: DescribeAutomationStepExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAutomationStepExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAutomationStepExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAvailablePatchesCommand = async (
  input: DescribeAvailablePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeAvailablePatches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAvailablePatchesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDocumentCommand = async (
  input: DescribeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDocumentPermissionCommand = async (
  input: DescribeDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeDocumentPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDocumentPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = async (
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeEffectiveInstanceAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = async (
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeEffectivePatchesForPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstanceAssociationsStatusCommand = async (
  input: DescribeInstanceAssociationsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstanceAssociationsStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstanceAssociationsStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstanceInformationCommand = async (
  input: DescribeInstanceInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstanceInformation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstanceInformationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstancePatchesCommand = async (
  input: DescribeInstancePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstancePatchStatesCommand = async (
  input: DescribeInstancePatchStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatchStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = async (
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInstancePatchStatesForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInventoryDeletionsCommand = async (
  input: DescribeInventoryDeletionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeInventoryDeletions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInventoryDeletionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = async (
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = async (
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowExecutionTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowsCommand = async (
  input: DescribeMaintenanceWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = async (
  input: DescribeMaintenanceWindowScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = async (
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowsForTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = async (
  input: DescribeMaintenanceWindowTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceWindowTasksCommand = async (
  input: DescribeMaintenanceWindowTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeMaintenanceWindowTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceWindowTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOpsItemsCommand = async (
  input: DescribeOpsItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeOpsItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOpsItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePatchBaselinesCommand = async (
  input: DescribePatchBaselinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchBaselines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePatchBaselinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePatchGroupsCommand = async (
  input: DescribePatchGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePatchGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePatchGroupStateCommand = async (
  input: DescribePatchGroupStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchGroupState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePatchGroupStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePatchPropertiesCommand = async (
  input: DescribePatchPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribePatchProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePatchPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DescribeSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateOpsItemRelatedItemCommand = async (
  input: DisassociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.DisassociateOpsItemRelatedItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateOpsItemRelatedItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAutomationExecutionCommand = async (
  input: GetAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCalendarStateCommand = async (
  input: GetCalendarStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetCalendarState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCalendarStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommandInvocationCommand = async (
  input: GetCommandInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetCommandInvocation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommandInvocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectionStatusCommand = async (
  input: GetConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetConnectionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDefaultPatchBaselineCommand = async (
  input: GetDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDefaultPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDefaultPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = async (
  input: GetDeployablePatchSnapshotForInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDeployablePatchSnapshotForInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInventoryCommand = async (
  input: GetInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetInventory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInventorySchemaCommand = async (
  input: GetInventorySchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetInventorySchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInventorySchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMaintenanceWindowCommand = async (
  input: GetMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMaintenanceWindowExecutionCommand = async (
  input: GetMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = async (
  input: GetMaintenanceWindowExecutionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = async (
  input: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMaintenanceWindowTaskCommand = async (
  input: GetMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetMaintenanceWindowTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMaintenanceWindowTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOpsItemCommand = async (
  input: GetOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOpsMetadataCommand = async (
  input: GetOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOpsSummaryCommand = async (
  input: GetOpsSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetOpsSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOpsSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParameterCommand = async (
  input: GetParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParameterHistoryCommand = async (
  input: GetParameterHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameterHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParameterHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParametersCommand = async (
  input: GetParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParametersByPathCommand = async (
  input: GetParametersByPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetParametersByPath",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParametersByPathRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPatchBaselineCommand = async (
  input: GetPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPatchBaselineForPatchGroupCommand = async (
  input: GetPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceSettingCommand = async (
  input: GetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.GetServiceSetting",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1LabelParameterVersionCommand = async (
  input: LabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.LabelParameterVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1LabelParameterVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociationVersionsCommand = async (
  input: ListAssociationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListAssociationVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociationVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCommandInvocationsCommand = async (
  input: ListCommandInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListCommandInvocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCommandInvocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCommandsCommand = async (
  input: ListCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListCommands",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCommandsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListComplianceItemsCommand = async (
  input: ListComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListComplianceItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListComplianceItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListComplianceSummariesCommand = async (
  input: ListComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListComplianceSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListComplianceSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentMetadataHistoryCommand = async (
  input: ListDocumentMetadataHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocumentMetadataHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentMetadataHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentsCommand = async (
  input: ListDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocuments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentVersionsCommand = async (
  input: ListDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListDocumentVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInventoryEntriesCommand = async (
  input: ListInventoryEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListInventoryEntries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInventoryEntriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOpsItemEventsCommand = async (
  input: ListOpsItemEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsItemEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOpsItemEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOpsItemRelatedItemsCommand = async (
  input: ListOpsItemRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsItemRelatedItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOpsItemRelatedItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOpsMetadataCommand = async (
  input: ListOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceComplianceSummariesCommand = async (
  input: ListResourceComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListResourceComplianceSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceComplianceSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceDataSyncCommand = async (
  input: ListResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyDocumentPermissionCommand = async (
  input: ModifyDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ModifyDocumentPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyDocumentPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutComplianceItemsCommand = async (
  input: PutComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutComplianceItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutComplianceItemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInventoryCommand = async (
  input: PutInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutInventory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutParameterCommand = async (
  input: PutParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterDefaultPatchBaselineCommand = async (
  input: RegisterDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterDefaultPatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterDefaultPatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = async (
  input: RegisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterPatchBaselineForPatchGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = async (
  input: RegisterTargetWithMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterTargetWithMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = async (
  input: RegisterTaskWithMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RegisterTaskWithMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetServiceSettingCommand = async (
  input: ResetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ResetServiceSetting",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResumeSessionCommand = async (
  input: ResumeSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.ResumeSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResumeSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendAutomationSignalCommand = async (
  input: SendAutomationSignalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.SendAutomationSignal",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendAutomationSignalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.SendCommand",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAssociationsOnceCommand = async (
  input: StartAssociationsOnceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartAssociationsOnce",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAssociationsOnceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAutomationExecutionCommand = async (
  input: StartAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartChangeRequestExecutionCommand = async (
  input: StartChangeRequestExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartChangeRequestExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartChangeRequestExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSessionCommand = async (
  input: StartSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StartSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopAutomationExecutionCommand = async (
  input: StopAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.StopAutomationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopAutomationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateSessionCommand = async (
  input: TerminateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.TerminateSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnlabelParameterVersionCommand = async (
  input: UnlabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UnlabelParameterVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnlabelParameterVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAssociationCommand = async (
  input: UpdateAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAssociationStatusCommand = async (
  input: UpdateAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateAssociationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAssociationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDocumentCommand = async (
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDocumentDefaultVersionCommand = async (
  input: UpdateDocumentDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocumentDefaultVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDocumentDefaultVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDocumentMetadataCommand = async (
  input: UpdateDocumentMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateDocumentMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDocumentMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMaintenanceWindowCommand = async (
  input: UpdateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMaintenanceWindowTargetCommand = async (
  input: UpdateMaintenanceWindowTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMaintenanceWindowTaskCommand = async (
  input: UpdateMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateMaintenanceWindowTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceWindowTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateManagedInstanceRoleCommand = async (
  input: UpdateManagedInstanceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateManagedInstanceRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateManagedInstanceRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateOpsItemCommand = async (
  input: UpdateOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateOpsItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateOpsItemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateOpsMetadataCommand = async (
  input: UpdateOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateOpsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateOpsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePatchBaselineCommand = async (
  input: UpdatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdatePatchBaseline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePatchBaselineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResourceDataSyncCommand = async (
  input: UpdateResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateResourceDataSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateResourceDataSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceSettingCommand = async (
  input: UpdateServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonSSM.UpdateServiceSetting",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context);
    case "TooManyTagsError":
    case "com.amazonaws.ssm#TooManyTagsError":
      throw await deserializeAws_json1_1TooManyTagsErrorResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateOpsItemRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOpsItemRelatedItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateOpsItemRelatedItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateOpsItemRelatedItemResponse(data, context);
  const response: AssociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateOpsItemRelatedItemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context);
    case "OpsItemRelatedItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemRelatedItemAlreadyExistsException":
      throw await deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelCommandResult(data, context);
  const response: CancelCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelCommandCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMaintenanceWindowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelMaintenanceWindowExecutionResult(data, context);
  const response: CancelMaintenanceWindowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelMaintenanceWindowExecutionCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateActivationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateActivationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateActivationResult(data, context);
  const response: CreateActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateActivationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssociationResult(data, context);
  const response: CreateAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAssociationCommandError = async (
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
      throw await deserializeAws_json1_1AssociationAlreadyExistsResponse(parsedOutput, context);
    case "AssociationLimitExceeded":
    case "com.amazonaws.ssm#AssociationLimitExceeded":
      throw await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context);
    case "InvalidTag":
    case "com.amazonaws.ssm#InvalidTag":
      throw await deserializeAws_json1_1InvalidTagResponse(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await deserializeAws_json1_1InvalidTargetMapsResponse(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAssociationBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssociationBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAssociationBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssociationBatchResult(data, context);
  const response: CreateAssociationBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAssociationBatchCommandError = async (
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
      throw await deserializeAws_json1_1AssociationLimitExceededResponse(parsedOutput, context);
    case "DuplicateInstanceId":
    case "com.amazonaws.ssm#DuplicateInstanceId":
      throw await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await deserializeAws_json1_1InvalidTargetMapsResponse(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDocumentResult(data, context);
  const response: CreateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDocumentCommandError = async (
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
      throw await deserializeAws_json1_1DocumentAlreadyExistsResponse(parsedOutput, context);
    case "DocumentLimitExceeded":
    case "com.amazonaws.ssm#DocumentLimitExceeded":
      throw await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocumentContent":
    case "com.amazonaws.ssm#InvalidDocumentContent":
      throw await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMaintenanceWindowResult(data, context);
  const response: CreateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOpsItemResponse(data, context);
  const response: CreateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateOpsItemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await deserializeAws_json1_1OpsItemAccessDeniedExceptionResponse(parsedOutput, context);
    case "OpsItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
      throw await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOpsMetadataResult(data, context);
  const response: CreateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateOpsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsMetadataAlreadyExistsException":
    case "com.amazonaws.ssm#OpsMetadataAlreadyExistsException":
      throw await deserializeAws_json1_1OpsMetadataAlreadyExistsExceptionResponse(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context);
    case "OpsMetadataLimitExceededException":
    case "com.amazonaws.ssm#OpsMetadataLimitExceededException":
      throw await deserializeAws_json1_1OpsMetadataLimitExceededExceptionResponse(parsedOutput, context);
    case "OpsMetadataTooManyUpdatesException":
    case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
      throw await deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePatchBaselineResult(data, context);
  const response: CreatePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResourceDataSyncResult(data, context);
  const response: CreateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateResourceDataSyncCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceDataSyncAlreadyExistsException":
    case "com.amazonaws.ssm#ResourceDataSyncAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncCountExceededException":
    case "com.amazonaws.ssm#ResourceDataSyncCountExceededException":
      throw await deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteActivationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteActivationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteActivationResult(data, context);
  const response: DeleteActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteActivationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidActivation":
    case "com.amazonaws.ssm#InvalidActivation":
      throw await deserializeAws_json1_1InvalidActivationResponse(parsedOutput, context);
    case "InvalidActivationId":
    case "com.amazonaws.ssm#InvalidActivationId":
      throw await deserializeAws_json1_1InvalidActivationIdResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAssociationResult(data, context);
  const response: DeleteAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAssociationCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDocumentResult(data, context);
  const response: DeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDocumentCommandError = async (
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
      throw await deserializeAws_json1_1AssociatedInstancesResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInventoryResult(data, context);
  const response: DeleteInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInventoryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDeleteInventoryParametersException":
    case "com.amazonaws.ssm#InvalidDeleteInventoryParametersException":
      throw await deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse(parsedOutput, context);
    case "InvalidInventoryRequestException":
    case "com.amazonaws.ssm#InvalidInventoryRequestException":
      throw await deserializeAws_json1_1InvalidInventoryRequestExceptionResponse(parsedOutput, context);
    case "InvalidOptionException":
    case "com.amazonaws.ssm#InvalidOptionException":
      throw await deserializeAws_json1_1InvalidOptionExceptionResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMaintenanceWindowResult(data, context);
  const response: DeleteMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteOpsMetadataResult(data, context);
  const response: DeleteOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOpsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParameterResult(data, context);
  const response: DeleteParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParameterCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParametersResult(data, context);
  const response: DeleteParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParametersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePatchBaselineResult(data, context);
  const response: DeletePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.ssm#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourceDataSyncResult(data, context);
  const response: DeleteResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourceDataSyncCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourcePolicyConflictException":
    case "com.amazonaws.ssm#ResourcePolicyConflictException":
      throw await deserializeAws_json1_1ResourcePolicyConflictExceptionResponse(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await deserializeAws_json1_1ResourcePolicyInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterManagedInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterManagedInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterManagedInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterManagedInstanceResult(data, context);
  const response: DeregisterManagedInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterManagedInstanceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult(data, context);
  const response: DeregisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult(data, context);
  const response: DeregisterTargetFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "TargetInUseException":
    case "com.amazonaws.ssm#TargetInUseException":
      throw await deserializeAws_json1_1TargetInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult(data, context);
  const response: DeregisterTaskFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeActivationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeActivationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeActivationsResult(data, context);
  const response: DescribeActivationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeActivationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssociationResult(data, context);
  const response: DescribeAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssociationCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAssociationVersion":
    case "com.amazonaws.ssm#InvalidAssociationVersion":
      throw await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAssociationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssociationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssociationExecutionsResult(data, context);
  const response: DescribeAssociationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssociationExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssociationExecutionTargetsResult(data, context);
  const response: DescribeAssociationExecutionTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssociationExecutionTargetsCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "AssociationExecutionDoesNotExist":
    case "com.amazonaws.ssm#AssociationExecutionDoesNotExist":
      throw await deserializeAws_json1_1AssociationExecutionDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAutomationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAutomationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAutomationExecutionsResult(data, context);
  const response: DescribeAutomationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAutomationExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAutomationStepExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAutomationStepExecutionsResult(data, context);
  const response: DescribeAutomationStepExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAutomationStepExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAvailablePatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailablePatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAvailablePatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAvailablePatchesResult(data, context);
  const response: DescribeAvailablePatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAvailablePatchesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentResult(data, context);
  const response: DescribeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDocumentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDocumentPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDocumentPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentPermissionResponse(data, context);
  const response: DescribeDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDocumentPermissionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidPermissionType":
    case "com.amazonaws.ssm#InvalidPermissionType":
      throw await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult(data, context);
  const response: DescribeEffectiveInstanceAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult(data, context);
  const response: DescribeEffectivePatchesForPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "UnsupportedOperatingSystem":
    case "com.amazonaws.ssm#UnsupportedOperatingSystem":
      throw await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstanceAssociationsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstanceAssociationsStatusResult(data, context);
  const response: DescribeInstanceAssociationsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstanceAssociationsStatusCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstanceInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstanceInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstanceInformationResult(data, context);
  const response: DescribeInstanceInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstanceInformationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidInstanceInformationFilterValue":
    case "com.amazonaws.ssm#InvalidInstanceInformationFilterValue":
      throw await deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstancePatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstancePatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstancePatchesResult(data, context);
  const response: DescribeInstancePatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstancePatchesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstancePatchStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstancePatchStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstancePatchStatesResult(data, context);
  const response: DescribeInstancePatchStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstancePatchStatesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult(data, context);
  const response: DescribeInstancePatchStatesForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInventoryDeletionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInventoryDeletionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInventoryDeletionsResult(data, context);
  const response: DescribeInventoryDeletionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInventoryDeletionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDeletionIdException":
    case "com.amazonaws.ssm#InvalidDeletionIdException":
      throw await deserializeAws_json1_1InvalidDeletionIdExceptionResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult(data, context);
  const response: DescribeMaintenanceWindowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult(data, context);
  const response: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult(data, context);
  const response: DescribeMaintenanceWindowExecutionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowsResult(data, context);
  const response: DescribeMaintenanceWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult(data, context);
  const response: DescribeMaintenanceWindowScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult(data, context);
  const response: DescribeMaintenanceWindowsForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult(data, context);
  const response: DescribeMaintenanceWindowTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceWindowTasksResult(data, context);
  const response: DescribeMaintenanceWindowTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceWindowTasksCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOpsItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOpsItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOpsItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOpsItemsResponse(data, context);
  const response: DescribeOpsItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOpsItemsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParametersResult(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParametersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidFilterOption":
    case "com.amazonaws.ssm#InvalidFilterOption":
      throw await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePatchBaselinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchBaselinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePatchBaselinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePatchBaselinesResult(data, context);
  const response: DescribePatchBaselinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePatchBaselinesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePatchGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePatchGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePatchGroupsResult(data, context);
  const response: DescribePatchGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePatchGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePatchGroupStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchGroupStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePatchGroupStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePatchGroupStateResult(data, context);
  const response: DescribePatchGroupStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePatchGroupStateCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePatchPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePatchPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePatchPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePatchPropertiesResult(data, context);
  const response: DescribePatchPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePatchPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSessionsResponse(data, context);
  const response: DescribeSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSessionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOpsItemRelatedItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateOpsItemRelatedItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateOpsItemRelatedItemResponse(data, context);
  const response: DisassociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateOpsItemRelatedItemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context);
    case "OpsItemRelatedItemAssociationNotFoundException":
    case "com.amazonaws.ssm#OpsItemRelatedItemAssociationNotFoundException":
      throw await deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAutomationExecutionResult(data, context);
  const response: GetAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAutomationExecutionCommandError = async (
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
      throw await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCalendarStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalendarStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCalendarStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCalendarStateResponse(data, context);
  const response: GetCalendarStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCalendarStateCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentType":
    case "com.amazonaws.ssm#InvalidDocumentType":
      throw await deserializeAws_json1_1InvalidDocumentTypeResponse(parsedOutput, context);
    case "UnsupportedCalendarException":
    case "com.amazonaws.ssm#UnsupportedCalendarException":
      throw await deserializeAws_json1_1UnsupportedCalendarExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommandInvocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommandInvocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommandInvocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommandInvocationResult(data, context);
  const response: GetCommandInvocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommandInvocationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidPluginName":
    case "com.amazonaws.ssm#InvalidPluginName":
      throw await deserializeAws_json1_1InvalidPluginNameResponse(parsedOutput, context);
    case "InvocationDoesNotExist":
    case "com.amazonaws.ssm#InvocationDoesNotExist":
      throw await deserializeAws_json1_1InvocationDoesNotExistResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectionStatusResponse(data, context);
  const response: GetConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectionStatusCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDefaultPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDefaultPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDefaultPatchBaselineResult(data, context);
  const response: GetDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDefaultPatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult(data, context);
  const response: GetDeployablePatchSnapshotForInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "UnsupportedFeatureRequiredException":
    case "com.amazonaws.ssm#UnsupportedFeatureRequiredException":
      throw await deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse(parsedOutput, context);
    case "UnsupportedOperatingSystem":
    case "com.amazonaws.ssm#UnsupportedOperatingSystem":
      throw await deserializeAws_json1_1UnsupportedOperatingSystemResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentResult(data, context);
  const response: GetDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDocumentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInventoryResult(data, context);
  const response: GetInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInventoryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAggregatorException":
    case "com.amazonaws.ssm#InvalidAggregatorException":
      throw await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidInventoryGroupException":
    case "com.amazonaws.ssm#InvalidInventoryGroupException":
      throw await deserializeAws_json1_1InvalidInventoryGroupExceptionResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidResultAttributeException":
    case "com.amazonaws.ssm#InvalidResultAttributeException":
      throw await deserializeAws_json1_1InvalidResultAttributeExceptionResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInventorySchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInventorySchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInventorySchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInventorySchemaResult(data, context);
  const response: GetInventorySchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInventorySchemaCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMaintenanceWindowResult(data, context);
  const response: GetMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMaintenanceWindowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMaintenanceWindowExecutionResult(data, context);
  const response: GetMaintenanceWindowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMaintenanceWindowExecutionCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult(data, context);
  const response: GetMaintenanceWindowExecutionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult(data, context);
  const response: GetMaintenanceWindowExecutionTaskInvocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMaintenanceWindowTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMaintenanceWindowTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMaintenanceWindowTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMaintenanceWindowTaskResult(data, context);
  const response: GetMaintenanceWindowTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMaintenanceWindowTaskCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpsItemResponse(data, context);
  const response: GetOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOpsItemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await deserializeAws_json1_1OpsItemAccessDeniedExceptionResponse(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpsMetadataResult(data, context);
  const response: GetOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOpsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOpsSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpsSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOpsSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpsSummaryResult(data, context);
  const response: GetOpsSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOpsSummaryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAggregatorException":
    case "com.amazonaws.ssm#InvalidAggregatorException":
      throw await deserializeAws_json1_1InvalidAggregatorExceptionResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParameterResult(data, context);
  const response: GetParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParameterCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParameterHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParameterHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParameterHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParameterHistoryResult(data, context);
  const response: GetParameterHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParameterHistoryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParametersResult(data, context);
  const response: GetParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParametersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParametersByPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersByPathCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParametersByPathCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParametersByPathResult(data, context);
  const response: GetParametersByPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParametersByPathCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidFilterOption":
    case "com.amazonaws.ssm#InvalidFilterOption":
      throw await deserializeAws_json1_1InvalidFilterOptionResponse(parsedOutput, context);
    case "InvalidFilterValue":
    case "com.amazonaws.ssm#InvalidFilterValue":
      throw await deserializeAws_json1_1InvalidFilterValueResponse(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPatchBaselineResult(data, context);
  const response: GetPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPatchBaselineForPatchGroupResult(data, context);
  const response: GetPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPatchBaselineForPatchGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePoliciesResponse(data, context);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePoliciesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await deserializeAws_json1_1ResourcePolicyInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceSettingResult(data, context);
  const response: GetServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceSettingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1LabelParameterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LabelParameterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1LabelParameterVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LabelParameterVersionResult(data, context);
  const response: LabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1LabelParameterVersionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context);
    case "ParameterVersionLabelLimitExceeded":
    case "com.amazonaws.ssm#ParameterVersionLabelLimitExceeded":
      throw await deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociationsResult(data, context);
  const response: ListAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAssociationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociationVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociationVersionsResult(data, context);
  const response: ListAssociationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociationVersionsCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCommandInvocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandInvocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCommandInvocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCommandInvocationsResult(data, context);
  const response: ListCommandInvocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCommandInvocationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCommandsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCommandsResult(data, context);
  const response: ListCommandsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCommandsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidCommandId":
    case "com.amazonaws.ssm#InvalidCommandId":
      throw await deserializeAws_json1_1InvalidCommandIdResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListComplianceItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComplianceItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComplianceItemsResult(data, context);
  const response: ListComplianceItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListComplianceItemsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListComplianceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComplianceSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComplianceSummariesResult(data, context);
  const response: ListComplianceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListComplianceSummariesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDocumentMetadataHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentMetadataHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentMetadataHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentMetadataHistoryResponse(data, context);
  const response: ListDocumentMetadataHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentMetadataHistoryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentsResult(data, context);
  const response: ListDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilterKey":
    case "com.amazonaws.ssm#InvalidFilterKey":
      throw await deserializeAws_json1_1InvalidFilterKeyResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentVersionsResult(data, context);
  const response: ListDocumentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentVersionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListInventoryEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInventoryEntriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInventoryEntriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInventoryEntriesResult(data, context);
  const response: ListInventoryEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInventoryEntriesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOpsItemEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOpsItemEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOpsItemEventsResponse(data, context);
  const response: ListOpsItemEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOpsItemEventsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOpsItemRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsItemRelatedItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOpsItemRelatedItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOpsItemRelatedItemsResponse(data, context);
  const response: ListOpsItemRelatedItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOpsItemRelatedItemsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOpsMetadataResult(data, context);
  const response: ListOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOpsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceComplianceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceComplianceSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceComplianceSummariesResult(data, context);
  const response: ListResourceComplianceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceComplianceSummariesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidFilter":
    case "com.amazonaws.ssm#InvalidFilter":
      throw await deserializeAws_json1_1InvalidFilterResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceDataSyncResult(data, context);
  const response: ListResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceDataSyncCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.ssm#InvalidNextToken":
      throw await deserializeAws_json1_1InvalidNextTokenResponse(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyDocumentPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDocumentPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyDocumentPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyDocumentPermissionResponse(data, context);
  const response: ModifyDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyDocumentPermissionCommandError = async (
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
      throw await deserializeAws_json1_1DocumentLimitExceededResponse(parsedOutput, context);
    case "DocumentPermissionLimit":
    case "com.amazonaws.ssm#DocumentPermissionLimit":
      throw await deserializeAws_json1_1DocumentPermissionLimitResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidPermissionType":
    case "com.amazonaws.ssm#InvalidPermissionType":
      throw await deserializeAws_json1_1InvalidPermissionTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutComplianceItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComplianceItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutComplianceItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutComplianceItemsResult(data, context);
  const response: PutComplianceItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutComplianceItemsCommandError = async (
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
      throw await deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidItemContentException":
    case "com.amazonaws.ssm#InvalidItemContentException":
      throw await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context);
    case "ItemSizeLimitExceededException":
    case "com.amazonaws.ssm#ItemSizeLimitExceededException":
      throw await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TotalSizeLimitExceededException":
    case "com.amazonaws.ssm#TotalSizeLimitExceededException":
      throw await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInventoryResult(data, context);
  const response: PutInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInventoryCommandError = async (
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
      throw await deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidInventoryItemContextException":
    case "com.amazonaws.ssm#InvalidInventoryItemContextException":
      throw await deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse(parsedOutput, context);
    case "InvalidItemContentException":
    case "com.amazonaws.ssm#InvalidItemContentException":
      throw await deserializeAws_json1_1InvalidItemContentExceptionResponse(parsedOutput, context);
    case "InvalidTypeNameException":
    case "com.amazonaws.ssm#InvalidTypeNameException":
      throw await deserializeAws_json1_1InvalidTypeNameExceptionResponse(parsedOutput, context);
    case "ItemContentMismatchException":
    case "com.amazonaws.ssm#ItemContentMismatchException":
      throw await deserializeAws_json1_1ItemContentMismatchExceptionResponse(parsedOutput, context);
    case "ItemSizeLimitExceededException":
    case "com.amazonaws.ssm#ItemSizeLimitExceededException":
      throw await deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "SubTypeCountLimitExceededException":
    case "com.amazonaws.ssm#SubTypeCountLimitExceededException":
      throw await deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse(parsedOutput, context);
    case "TotalSizeLimitExceededException":
    case "com.amazonaws.ssm#TotalSizeLimitExceededException":
      throw await deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedInventoryItemContextException":
    case "com.amazonaws.ssm#UnsupportedInventoryItemContextException":
      throw await deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse(parsedOutput, context);
    case "UnsupportedInventorySchemaVersionException":
    case "com.amazonaws.ssm#UnsupportedInventorySchemaVersionException":
      throw await deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutParameterResult(data, context);
  const response: PutParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutParameterCommandError = async (
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
      throw await deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse(parsedOutput, context);
    case "HierarchyTypeMismatchException":
    case "com.amazonaws.ssm#HierarchyTypeMismatchException":
      throw await deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse(parsedOutput, context);
    case "IncompatiblePolicyException":
    case "com.amazonaws.ssm#IncompatiblePolicyException":
      throw await deserializeAws_json1_1IncompatiblePolicyExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAllowedPatternException":
    case "com.amazonaws.ssm#InvalidAllowedPatternException":
      throw await deserializeAws_json1_1InvalidAllowedPatternExceptionResponse(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await deserializeAws_json1_1InvalidKeyIdResponse(parsedOutput, context);
    case "InvalidPolicyAttributeException":
    case "com.amazonaws.ssm#InvalidPolicyAttributeException":
      throw await deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse(parsedOutput, context);
    case "InvalidPolicyTypeException":
    case "com.amazonaws.ssm#InvalidPolicyTypeException":
      throw await deserializeAws_json1_1InvalidPolicyTypeExceptionResponse(parsedOutput, context);
    case "ParameterAlreadyExists":
    case "com.amazonaws.ssm#ParameterAlreadyExists":
      throw await deserializeAws_json1_1ParameterAlreadyExistsResponse(parsedOutput, context);
    case "ParameterLimitExceeded":
    case "com.amazonaws.ssm#ParameterLimitExceeded":
      throw await deserializeAws_json1_1ParameterLimitExceededResponse(parsedOutput, context);
    case "ParameterMaxVersionLimitExceeded":
    case "com.amazonaws.ssm#ParameterMaxVersionLimitExceeded":
      throw await deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse(parsedOutput, context);
    case "ParameterPatternMismatchException":
    case "com.amazonaws.ssm#ParameterPatternMismatchException":
      throw await deserializeAws_json1_1ParameterPatternMismatchExceptionResponse(parsedOutput, context);
    case "PoliciesLimitExceededException":
    case "com.amazonaws.ssm#PoliciesLimitExceededException":
      throw await deserializeAws_json1_1PoliciesLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
    case "UnsupportedParameterType":
    case "com.amazonaws.ssm#UnsupportedParameterType":
      throw await deserializeAws_json1_1UnsupportedParameterTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourcePolicyConflictException":
    case "com.amazonaws.ssm#ResourcePolicyConflictException":
      throw await deserializeAws_json1_1ResourcePolicyConflictExceptionResponse(parsedOutput, context);
    case "ResourcePolicyInvalidParameterException":
    case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
      throw await deserializeAws_json1_1ResourcePolicyInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourcePolicyLimitExceededException":
    case "com.amazonaws.ssm#ResourcePolicyLimitExceededException":
      throw await deserializeAws_json1_1ResourcePolicyLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterDefaultPatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDefaultPatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterDefaultPatchBaselineResult(data, context);
  const response: RegisterDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterDefaultPatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult(data, context);
  const response: RegisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "DoesNotExistException":
    case "com.amazonaws.ssm#DoesNotExistException":
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult(data, context);
  const response: RegisterTargetWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult(data, context);
  const response: RegisterTaskWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "FeatureNotAvailableException":
    case "com.amazonaws.ssm#FeatureNotAvailableException":
      throw await deserializeAws_json1_1FeatureNotAvailableExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.ssm#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidResourceId":
    case "com.amazonaws.ssm#InvalidResourceId":
      throw await deserializeAws_json1_1InvalidResourceIdResponse(parsedOutput, context);
    case "InvalidResourceType":
    case "com.amazonaws.ssm#InvalidResourceType":
      throw await deserializeAws_json1_1InvalidResourceTypeResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResetServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetServiceSettingResult(data, context);
  const response: ResetServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetServiceSettingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResumeSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResumeSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResumeSessionResponse(data, context);
  const response: ResumeSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResumeSessionCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendAutomationSignalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAutomationSignalCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendAutomationSignalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendAutomationSignalResult(data, context);
  const response: SendAutomationSignalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendAutomationSignalCommandError = async (
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
      throw await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "AutomationStepNotFoundException":
    case "com.amazonaws.ssm#AutomationStepNotFoundException":
      throw await deserializeAws_json1_1AutomationStepNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAutomationSignalException":
    case "com.amazonaws.ssm#InvalidAutomationSignalException":
      throw await deserializeAws_json1_1InvalidAutomationSignalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendCommandResult(data, context);
  const response: SendCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendCommandCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateInstanceIdResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "InvalidNotificationConfig":
    case "com.amazonaws.ssm#InvalidNotificationConfig":
      throw await deserializeAws_json1_1InvalidNotificationConfigResponse(parsedOutput, context);
    case "InvalidOutputFolder":
    case "com.amazonaws.ssm#InvalidOutputFolder":
      throw await deserializeAws_json1_1InvalidOutputFolderResponse(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context);
    case "InvalidRole":
    case "com.amazonaws.ssm#InvalidRole":
      throw await deserializeAws_json1_1InvalidRoleResponse(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context);
    case "UnsupportedPlatformType":
    case "com.amazonaws.ssm#UnsupportedPlatformType":
      throw await deserializeAws_json1_1UnsupportedPlatformTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartAssociationsOnceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssociationsOnceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAssociationsOnceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAssociationsOnceResult(data, context);
  const response: StartAssociationsOnceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAssociationsOnceCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InvalidAssociation":
    case "com.amazonaws.ssm#InvalidAssociation":
      throw await deserializeAws_json1_1InvalidAssociationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAutomationExecutionResult(data, context);
  const response: StartAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAutomationExecutionCommandError = async (
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
      throw await deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse(parsedOutput, context);
    case "AutomationDefinitionVersionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
      throw await deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse(parsedOutput, context);
    case "AutomationExecutionLimitExceededException":
    case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
      throw await deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAutomationExecutionParametersException":
    case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
      throw await deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartChangeRequestExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeRequestExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartChangeRequestExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartChangeRequestExecutionResult(data, context);
  const response: StartChangeRequestExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartChangeRequestExecutionCommandError = async (
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
      throw await deserializeAws_json1_1AutomationDefinitionNotApprovedExceptionResponse(parsedOutput, context);
    case "AutomationDefinitionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
      throw await deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse(parsedOutput, context);
    case "AutomationDefinitionVersionNotFoundException":
    case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
      throw await deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse(parsedOutput, context);
    case "AutomationExecutionLimitExceededException":
    case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
      throw await deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatch":
    case "com.amazonaws.ssm#IdempotentParameterMismatch":
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAutomationExecutionParametersException":
    case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
      throw await deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSessionResponse(data, context);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSessionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "TargetNotConnected":
    case "com.amazonaws.ssm#TargetNotConnected":
      throw await deserializeAws_json1_1TargetNotConnectedResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopAutomationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutomationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopAutomationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopAutomationExecutionResult(data, context);
  const response: StopAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopAutomationExecutionCommandError = async (
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
      throw await deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAutomationStatusUpdateException":
    case "com.amazonaws.ssm#InvalidAutomationStatusUpdateException":
      throw await deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TerminateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateSessionResponse(data, context);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateSessionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UnlabelParameterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlabelParameterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnlabelParameterVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnlabelParameterVersionResult(data, context);
  const response: UnlabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnlabelParameterVersionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ParameterNotFound":
    case "com.amazonaws.ssm#ParameterNotFound":
      throw await deserializeAws_json1_1ParameterNotFoundResponse(parsedOutput, context);
    case "ParameterVersionNotFound":
    case "com.amazonaws.ssm#ParameterVersionNotFound":
      throw await deserializeAws_json1_1ParameterVersionNotFoundResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAssociationResult(data, context);
  const response: UpdateAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAssociationCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "AssociationVersionLimitExceeded":
    case "com.amazonaws.ssm#AssociationVersionLimitExceeded":
      throw await deserializeAws_json1_1AssociationVersionLimitExceededResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidAssociationVersion":
    case "com.amazonaws.ssm#InvalidAssociationVersion":
      throw await deserializeAws_json1_1InvalidAssociationVersionResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "InvalidOutputLocation":
    case "com.amazonaws.ssm#InvalidOutputLocation":
      throw await deserializeAws_json1_1InvalidOutputLocationResponse(parsedOutput, context);
    case "InvalidParameters":
    case "com.amazonaws.ssm#InvalidParameters":
      throw await deserializeAws_json1_1InvalidParametersResponse(parsedOutput, context);
    case "InvalidSchedule":
    case "com.amazonaws.ssm#InvalidSchedule":
      throw await deserializeAws_json1_1InvalidScheduleResponse(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.ssm#InvalidTarget":
      throw await deserializeAws_json1_1InvalidTargetResponse(parsedOutput, context);
    case "InvalidTargetMaps":
    case "com.amazonaws.ssm#InvalidTargetMaps":
      throw await deserializeAws_json1_1InvalidTargetMapsResponse(parsedOutput, context);
    case "InvalidUpdate":
    case "com.amazonaws.ssm#InvalidUpdate":
      throw await deserializeAws_json1_1InvalidUpdateResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAssociationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssociationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAssociationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAssociationStatusResult(data, context);
  const response: UpdateAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAssociationStatusCommandError = async (
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
      throw await deserializeAws_json1_1AssociationDoesNotExistResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
    case "StatusUnchanged":
    case "com.amazonaws.ssm#StatusUnchanged":
      throw await deserializeAws_json1_1StatusUnchangedResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDocumentResult(data, context);
  const response: UpdateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDocumentCommandError = async (
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
      throw await deserializeAws_json1_1DocumentVersionLimitExceededResponse(parsedOutput, context);
    case "DuplicateDocumentContent":
    case "com.amazonaws.ssm#DuplicateDocumentContent":
      throw await deserializeAws_json1_1DuplicateDocumentContentResponse(parsedOutput, context);
    case "DuplicateDocumentVersionName":
    case "com.amazonaws.ssm#DuplicateDocumentVersionName":
      throw await deserializeAws_json1_1DuplicateDocumentVersionNameResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentContent":
    case "com.amazonaws.ssm#InvalidDocumentContent":
      throw await deserializeAws_json1_1InvalidDocumentContentResponse(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
    case "MaxDocumentSizeExceeded":
    case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
      throw await deserializeAws_json1_1MaxDocumentSizeExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDocumentDefaultVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentDefaultVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDocumentDefaultVersionResult(data, context);
  const response: UpdateDocumentDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDocumentDefaultVersionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentSchemaVersion":
    case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
      throw await deserializeAws_json1_1InvalidDocumentSchemaVersionResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDocumentMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDocumentMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDocumentMetadataResponse(data, context);
  const response: UpdateDocumentMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDocumentMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDocument":
    case "com.amazonaws.ssm#InvalidDocument":
      throw await deserializeAws_json1_1InvalidDocumentResponse(parsedOutput, context);
    case "InvalidDocumentOperation":
    case "com.amazonaws.ssm#InvalidDocumentOperation":
      throw await deserializeAws_json1_1InvalidDocumentOperationResponse(parsedOutput, context);
    case "InvalidDocumentVersion":
    case "com.amazonaws.ssm#InvalidDocumentVersion":
      throw await deserializeAws_json1_1InvalidDocumentVersionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMaintenanceWindowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMaintenanceWindowResult(data, context);
  const response: UpdateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMaintenanceWindowCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMaintenanceWindowTargetResult(data, context);
  const response: UpdateMaintenanceWindowTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMaintenanceWindowTargetCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceWindowTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMaintenanceWindowTaskResult(data, context);
  const response: UpdateMaintenanceWindowTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMaintenanceWindowTaskCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateManagedInstanceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedInstanceRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateManagedInstanceRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateManagedInstanceRoleResult(data, context);
  const response: UpdateManagedInstanceRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateManagedInstanceRoleCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInstanceId":
    case "com.amazonaws.ssm#InvalidInstanceId":
      throw await deserializeAws_json1_1InvalidInstanceIdResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateOpsItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateOpsItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateOpsItemResponse(data, context);
  const response: UpdateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateOpsItemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsItemAccessDeniedException":
    case "com.amazonaws.ssm#OpsItemAccessDeniedException":
      throw await deserializeAws_json1_1OpsItemAccessDeniedExceptionResponse(parsedOutput, context);
    case "OpsItemAlreadyExistsException":
    case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
      throw await deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse(parsedOutput, context);
    case "OpsItemInvalidParameterException":
    case "com.amazonaws.ssm#OpsItemInvalidParameterException":
      throw await deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse(parsedOutput, context);
    case "OpsItemLimitExceededException":
    case "com.amazonaws.ssm#OpsItemLimitExceededException":
      throw await deserializeAws_json1_1OpsItemLimitExceededExceptionResponse(parsedOutput, context);
    case "OpsItemNotFoundException":
    case "com.amazonaws.ssm#OpsItemNotFoundException":
      throw await deserializeAws_json1_1OpsItemNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateOpsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateOpsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateOpsMetadataResult(data, context);
  const response: UpdateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateOpsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "OpsMetadataInvalidArgumentException":
    case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
      throw await deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse(parsedOutput, context);
    case "OpsMetadataKeyLimitExceededException":
    case "com.amazonaws.ssm#OpsMetadataKeyLimitExceededException":
      throw await deserializeAws_json1_1OpsMetadataKeyLimitExceededExceptionResponse(parsedOutput, context);
    case "OpsMetadataNotFoundException":
    case "com.amazonaws.ssm#OpsMetadataNotFoundException":
      throw await deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse(parsedOutput, context);
    case "OpsMetadataTooManyUpdatesException":
    case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
      throw await deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePatchBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePatchBaselineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePatchBaselineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePatchBaselineResult(data, context);
  const response: UpdatePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePatchBaselineCommandError = async (
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
      throw await deserializeAws_json1_1DoesNotExistExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateResourceDataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateResourceDataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceDataSyncResult(data, context);
  const response: UpdateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateResourceDataSyncCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ResourceDataSyncConflictException":
    case "com.amazonaws.ssm#ResourceDataSyncConflictException":
      throw await deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncInvalidConfigurationException":
    case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
      throw await deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "ResourceDataSyncNotFoundException":
    case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
      throw await deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateServiceSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServiceSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceSettingResult(data, context);
  const response: UpdateServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceSettingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceSettingNotFound":
    case "com.amazonaws.ssm#ServiceSettingNotFound":
      throw await deserializeAws_json1_1ServiceSettingNotFoundResponse(parsedOutput, context);
    case "TooManyUpdates":
    case "com.amazonaws.ssm#TooManyUpdates":
      throw await deserializeAws_json1_1TooManyUpdatesResponse(parsedOutput, context);
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

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociatedInstancesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedInstances> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociatedInstances(body, context);
  const exception = new AssociatedInstances({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociationAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociationAlreadyExists(body, context);
  const exception = new AssociationAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociationDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociationDoesNotExist(body, context);
  const exception = new AssociationDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociationExecutionDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationExecutionDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociationExecutionDoesNotExist(body, context);
  const exception = new AssociationExecutionDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociationLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociationLimitExceeded(body, context);
  const exception = new AssociationLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AssociationVersionLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociationVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociationVersionLimitExceeded(body, context);
  const exception = new AssociationVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationDefinitionNotApprovedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionNotApprovedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationDefinitionNotApprovedException(body, context);
  const exception = new AutomationDefinitionNotApprovedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationDefinitionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationDefinitionNotFoundException(body, context);
  const exception = new AutomationDefinitionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationDefinitionVersionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationDefinitionVersionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationDefinitionVersionNotFoundException(body, context);
  const exception = new AutomationDefinitionVersionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationExecutionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationExecutionLimitExceededException(body, context);
  const exception = new AutomationExecutionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationExecutionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationExecutionNotFoundException(body, context);
  const exception = new AutomationExecutionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AutomationStepNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationStepNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AutomationStepNotFoundException(body, context);
  const exception = new AutomationStepNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ComplianceTypeCountLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplianceTypeCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ComplianceTypeCountLimitExceededException(body, context);
  const exception = new ComplianceTypeCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CustomSchemaCountLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomSchemaCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomSchemaCountLimitExceededException(body, context);
  const exception = new CustomSchemaCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DocumentAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentAlreadyExists(body, context);
  const exception = new DocumentAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DocumentLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentLimitExceeded(body, context);
  const exception = new DocumentLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DocumentPermissionLimitResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentPermissionLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentPermissionLimit(body, context);
  const exception = new DocumentPermissionLimit({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DocumentVersionLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentVersionLimitExceeded(body, context);
  const exception = new DocumentVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DoesNotExistException(body, context);
  const exception = new DoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateDocumentContentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateDocumentContent> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateDocumentContent(body, context);
  const exception = new DuplicateDocumentContent({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateDocumentVersionNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateDocumentVersionName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateDocumentVersionName(body, context);
  const exception = new DuplicateDocumentVersionName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateInstanceIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateInstanceId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateInstanceId(body, context);
  const exception = new DuplicateInstanceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FeatureNotAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FeatureNotAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FeatureNotAvailableException(body, context);
  const exception = new FeatureNotAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HierarchyLevelLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HierarchyLevelLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HierarchyLevelLimitExceededException(body, context);
  const exception = new HierarchyLevelLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HierarchyTypeMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HierarchyTypeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HierarchyTypeMismatchException(body, context);
  const exception = new HierarchyTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatch> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatch(body, context);
  const exception = new IdempotentParameterMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncompatiblePolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatiblePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatiblePolicyException(body, context);
  const exception = new IncompatiblePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidActivationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActivation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActivation(body, context);
  const exception = new InvalidActivation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidActivationIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActivationId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActivationId(body, context);
  const exception = new InvalidActivationId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAggregatorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAggregatorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAggregatorException(body, context);
  const exception = new InvalidAggregatorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAllowedPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAllowedPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAllowedPatternException(body, context);
  const exception = new InvalidAllowedPatternException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAssociation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAssociation(body, context);
  const exception = new InvalidAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAssociationVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAssociationVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAssociationVersion(body, context);
  const exception = new InvalidAssociationVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAutomationExecutionParametersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationExecutionParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutomationExecutionParametersException(body, context);
  const exception = new InvalidAutomationExecutionParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAutomationSignalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationSignalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutomationSignalException(body, context);
  const exception = new InvalidAutomationSignalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAutomationStatusUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutomationStatusUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutomationStatusUpdateException(body, context);
  const exception = new InvalidAutomationStatusUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCommandIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommandId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommandId(body, context);
  const exception = new InvalidCommandId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDeleteInventoryParametersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeleteInventoryParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeleteInventoryParametersException(body, context);
  const exception = new InvalidDeleteInventoryParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDeletionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeletionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeletionIdException(body, context);
  const exception = new InvalidDeletionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocument> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocument(body, context);
  const exception = new InvalidDocument({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentContentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentContent> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocumentContent(body, context);
  const exception = new InvalidDocumentContent({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocumentOperation(body, context);
  const exception = new InvalidDocumentOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentSchemaVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentSchemaVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocumentSchemaVersion(body, context);
  const exception = new InvalidDocumentSchemaVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocumentType(body, context);
  const exception = new InvalidDocumentType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDocumentVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDocumentVersion> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDocumentVersion(body, context);
  const exception = new InvalidDocumentVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilterResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilter> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilter(body, context);
  const exception = new InvalidFilter({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilterKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterKey> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterKey(body, context);
  const exception = new InvalidFilterKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilterOptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterOption> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterOption(body, context);
  const exception = new InvalidFilterOption({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilterValueResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterValue> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterValue(body, context);
  const exception = new InvalidFilterValue({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInstanceIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceId(body, context);
  const exception = new InvalidInstanceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInstanceInformationFilterValueResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceInformationFilterValue> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceInformationFilterValue(body, context);
  const exception = new InvalidInstanceInformationFilterValue({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInventoryGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInventoryGroupException(body, context);
  const exception = new InvalidInventoryGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInventoryItemContextExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryItemContextException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInventoryItemContextException(body, context);
  const exception = new InvalidInventoryItemContextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInventoryRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInventoryRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInventoryRequestException(body, context);
  const exception = new InvalidInventoryRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidItemContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidItemContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidItemContentException(body, context);
  const exception = new InvalidItemContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidKeyIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyId(body, context);
  const exception = new InvalidKeyId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextToken(body, context);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNotificationConfigResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNotificationConfig> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNotificationConfig(body, context);
  const exception = new InvalidNotificationConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOptionException(body, context);
  const exception = new InvalidOptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOutputFolderResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOutputFolder> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOutputFolder(body, context);
  const exception = new InvalidOutputFolder({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOutputLocationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOutputLocation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOutputLocation(body, context);
  const exception = new InvalidOutputLocation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParametersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameters> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameters(body, context);
  const exception = new InvalidParameters({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPermissionTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPermissionType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPermissionType(body, context);
  const exception = new InvalidPermissionType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPluginNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPluginName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPluginName(body, context);
  const exception = new InvalidPluginName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPolicyAttributeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyAttributeException(body, context);
  const exception = new InvalidPolicyAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPolicyTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyTypeException(body, context);
  const exception = new InvalidPolicyTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceId(body, context);
  const exception = new InvalidResourceId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceType(body, context);
  const exception = new InvalidResourceType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResultAttributeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResultAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResultAttributeException(body, context);
  const exception = new InvalidResultAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRoleResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRole> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRole(body, context);
  const exception = new InvalidRole({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidScheduleResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchedule> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSchedule(body, context);
  const exception = new InvalidSchedule({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTag> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTag(body, context);
  const exception = new InvalidTag({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTargetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTarget> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTarget(body, context);
  const exception = new InvalidTarget({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTargetMapsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetMaps> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetMaps(body, context);
  const exception = new InvalidTargetMaps({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTypeNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTypeNameException(body, context);
  const exception = new InvalidTypeNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidUpdateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUpdate> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUpdate(body, context);
  const exception = new InvalidUpdate({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvocationDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvocationDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvocationDoesNotExist(body, context);
  const exception = new InvocationDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ItemContentMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemContentMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ItemContentMismatchException(body, context);
  const exception = new ItemContentMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ItemSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ItemSizeLimitExceededException(body, context);
  const exception = new ItemSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxDocumentSizeExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxDocumentSizeExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxDocumentSizeExceeded(body, context);
  const exception = new MaxDocumentSizeExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemAccessDeniedException(body, context);
  const exception = new OpsItemAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemAlreadyExistsException(body, context);
  const exception = new OpsItemAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemInvalidParameterException(body, context);
  const exception = new OpsItemInvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemLimitExceededException(body, context);
  const exception = new OpsItemLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemNotFoundException(body, context);
  const exception = new OpsItemNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemRelatedItemAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsException(body, context);
  const exception = new OpsItemRelatedItemAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsItemRelatedItemAssociationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundException(body, context);
  const exception = new OpsItemRelatedItemAssociationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataAlreadyExistsException(body, context);
  const exception = new OpsMetadataAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataInvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataInvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataInvalidArgumentException(body, context);
  const exception = new OpsMetadataInvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataKeyLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataKeyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataKeyLimitExceededException(body, context);
  const exception = new OpsMetadataKeyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataLimitExceededException(body, context);
  const exception = new OpsMetadataLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataNotFoundException(body, context);
  const exception = new OpsMetadataNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OpsMetadataTooManyUpdatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpsMetadataTooManyUpdatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OpsMetadataTooManyUpdatesException(body, context);
  const exception = new OpsMetadataTooManyUpdatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterAlreadyExists(body, context);
  const exception = new ParameterAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterLimitExceeded(body, context);
  const exception = new ParameterLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterMaxVersionLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterMaxVersionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterMaxVersionLimitExceeded(body, context);
  const exception = new ParameterMaxVersionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterNotFound(body, context);
  const exception = new ParameterNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterPatternMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterPatternMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterPatternMismatchException(body, context);
  const exception = new ParameterPatternMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterVersionLabelLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterVersionLabelLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterVersionLabelLimitExceeded(body, context);
  const exception = new ParameterVersionLabelLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterVersionNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterVersionNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterVersionNotFound(body, context);
  const exception = new ParameterVersionNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PoliciesLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PoliciesLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PoliciesLimitExceededException(body, context);
  const exception = new PoliciesLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDataSyncAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDataSyncAlreadyExistsException(body, context);
  const exception = new ResourceDataSyncAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDataSyncConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDataSyncConflictException(body, context);
  const exception = new ResourceDataSyncConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDataSyncCountExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncCountExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDataSyncCountExceededException(body, context);
  const exception = new ResourceDataSyncCountExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException(body, context);
  const exception = new ResourceDataSyncInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDataSyncNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDataSyncNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDataSyncNotFoundException(body, context);
  const exception = new ResourceDataSyncNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourcePolicyConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourcePolicyConflictException(body, context);
  const exception = new ResourcePolicyConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourcePolicyInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourcePolicyInvalidParameterException(body, context);
  const exception = new ResourcePolicyInvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourcePolicyLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourcePolicyLimitExceededException(body, context);
  const exception = new ResourcePolicyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceSettingNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceSettingNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceSettingNotFound(body, context);
  const exception = new ServiceSettingNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1StatusUnchangedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatusUnchanged> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StatusUnchanged(body, context);
  const exception = new StatusUnchanged({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubTypeCountLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubTypeCountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubTypeCountLimitExceededException(body, context);
  const exception = new SubTypeCountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TargetInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetInUseException(body, context);
  const exception = new TargetInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TargetNotConnectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotConnected> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetNotConnected(body, context);
  const exception = new TargetNotConnected({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsError(body, context);
  const exception = new TooManyTagsError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyUpdatesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUpdates> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyUpdates(body, context);
  const exception = new TooManyUpdates({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TotalSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TotalSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TotalSizeLimitExceededException(body, context);
  const exception = new TotalSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedCalendarExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedCalendarException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedCalendarException(body, context);
  const exception = new UnsupportedCalendarException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedFeatureRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedFeatureRequiredException(body, context);
  const exception = new UnsupportedFeatureRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedInventoryItemContextExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedInventoryItemContextException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedInventoryItemContextException(body, context);
  const exception = new UnsupportedInventoryItemContextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedInventorySchemaVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedInventorySchemaVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedInventorySchemaVersionException(body, context);
  const exception = new UnsupportedInventorySchemaVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedOperatingSystemResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperatingSystem> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperatingSystem(body, context);
  const exception = new UnsupportedOperatingSystem({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedParameterTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedParameterType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedParameterType(body, context);
  const exception = new UnsupportedParameterType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedPlatformTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlatformType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedPlatformType(body, context);
  const exception = new UnsupportedPlatformType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Accounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AddTagsToResourceRequest = (
  input: AddTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Alarm = (input: Alarm, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AlarmConfiguration = (input: AlarmConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Alarms != null && { Alarms: serializeAws_json1_1AlarmList(input.Alarms, context) }),
    ...(input.IgnorePollAlarmFailure != null && { IgnorePollAlarmFailure: input.IgnorePollAlarmFailure }),
  };
};

const serializeAws_json1_1AlarmList = (input: Alarm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Alarm(entry, context);
    });
};

const serializeAws_json1_1AssociateOpsItemRelatedItemRequest = (
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

const serializeAws_json1_1AssociationExecutionFilter = (
  input: AssociationExecutionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1AssociationExecutionFilterList = (
  input: AssociationExecutionFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AssociationExecutionFilter(entry, context);
    });
};

const serializeAws_json1_1AssociationExecutionTargetsFilter = (
  input: AssociationExecutionTargetsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1AssociationExecutionTargetsFilterList = (
  input: AssociationExecutionTargetsFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AssociationExecutionTargetsFilter(entry, context);
    });
};

const serializeAws_json1_1AssociationFilter = (input: AssociationFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1AssociationFilterList = (input: AssociationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AssociationFilter(entry, context);
    });
};

const serializeAws_json1_1AssociationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociationStatus = (input: AssociationStatus, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && { AdditionalInfo: input.AdditionalInfo }),
    ...(input.Date != null && { Date: Math.round(input.Date.getTime() / 1000) }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AttachmentsSource = (input: AttachmentsSource, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1AttachmentsSourceValues(input.Values, context) }),
  };
};

const serializeAws_json1_1AttachmentsSourceList = (input: AttachmentsSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AttachmentsSource(entry, context);
    });
};

const serializeAws_json1_1AttachmentsSourceValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AutomationExecutionFilter = (
  input: AutomationExecutionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && {
      Values: serializeAws_json1_1AutomationExecutionFilterValueList(input.Values, context),
    }),
  };
};

const serializeAws_json1_1AutomationExecutionFilterList = (
  input: AutomationExecutionFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AutomationExecutionFilter(entry, context);
    });
};

const serializeAws_json1_1AutomationExecutionFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AutomationParameterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1AutomationParameterValueList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1AutomationParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BaselineOverride = (input: BaselineOverride, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalRules != null && {
      ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
    }),
    ...(input.ApprovedPatches != null && {
      ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
    }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ...(input.GlobalFilters != null && {
      GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
    }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.RejectedPatches != null && {
      RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
    }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Sources != null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
  };
};

const serializeAws_json1_1CalendarNameOrARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CancelCommandRequest = (input: CancelCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
  };
};

const serializeAws_json1_1CancelMaintenanceWindowExecutionRequest = (
  input: CancelMaintenanceWindowExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1CloudWatchOutputConfig = (input: CloudWatchOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupName != null && { CloudWatchLogGroupName: input.CloudWatchLogGroupName }),
    ...(input.CloudWatchOutputEnabled != null && { CloudWatchOutputEnabled: input.CloudWatchOutputEnabled }),
  };
};

const serializeAws_json1_1CommandFilter = (input: CommandFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1CommandFilterList = (input: CommandFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CommandFilter(entry, context);
    });
};

const serializeAws_json1_1ComplianceExecutionSummary = (
  input: ComplianceExecutionSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.ExecutionTime != null && { ExecutionTime: Math.round(input.ExecutionTime.getTime() / 1000) }),
    ...(input.ExecutionType != null && { ExecutionType: input.ExecutionType }),
  };
};

const serializeAws_json1_1ComplianceItemDetails = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ComplianceItemEntry = (input: ComplianceItemEntry, context: __SerdeContext): any => {
  return {
    ...(input.Details != null && { Details: serializeAws_json1_1ComplianceItemDetails(input.Details, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_json1_1ComplianceItemEntryList = (input: ComplianceItemEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ComplianceItemEntry(entry, context);
    });
};

const serializeAws_json1_1ComplianceResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ComplianceResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ComplianceStringFilter = (input: ComplianceStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: serializeAws_json1_1ComplianceStringFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1ComplianceStringFilterList = (
  input: ComplianceStringFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ComplianceStringFilter(entry, context);
    });
};

const serializeAws_json1_1ComplianceStringFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateActivationRequest = (input: CreateActivationRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultInstanceName != null && { DefaultInstanceName: input.DefaultInstanceName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExpirationDate != null && { ExpirationDate: Math.round(input.ExpirationDate.getTime() / 1000) }),
    ...(input.IamRole != null && { IamRole: input.IamRole }),
    ...(input.RegistrationLimit != null && { RegistrationLimit: input.RegistrationLimit }),
    ...(input.RegistrationMetadata != null && {
      RegistrationMetadata: serializeAws_json1_1RegistrationMetadataList(input.RegistrationMetadata, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateAssociationBatchRequest = (
  input: CreateAssociationBatchRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Entries != null && {
      Entries: serializeAws_json1_1CreateAssociationBatchRequestEntries(input.Entries, context),
    }),
  };
};

const serializeAws_json1_1CreateAssociationBatchRequestEntries = (
  input: CreateAssociationBatchRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CreateAssociationBatchRequestEntry(entry, context);
    });
};

const serializeAws_json1_1CreateAssociationBatchRequestEntry = (
  input: CreateAssociationBatchRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && {
      CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
    }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.TargetLocations != null && {
      TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
    }),
    ...(input.TargetMaps != null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1CreateAssociationRequest = (
  input: CreateAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && {
      CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
    }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetLocations != null && {
      TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
    }),
    ...(input.TargetMaps != null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1CreateDocumentRequest = (input: CreateDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attachments != null && {
      Attachments: serializeAws_json1_1AttachmentsSourceList(input.Attachments, context),
    }),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Requires != null && { Requires: serializeAws_json1_1DocumentRequiresList(input.Requires, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1CreateMaintenanceWindowRequest = (
  input: CreateMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
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
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateOpsItemRequest = (input: CreateOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActualEndTime != null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
    ...(input.ActualStartTime != null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Notifications != null && {
      Notifications: serializeAws_json1_1OpsItemNotifications(input.Notifications, context),
    }),
    ...(input.OperationalData != null && {
      OperationalData: serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context),
    }),
    ...(input.OpsItemType != null && { OpsItemType: input.OpsItemType }),
    ...(input.PlannedEndTime != null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
    ...(input.PlannedStartTime != null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RelatedOpsItems != null && {
      RelatedOpsItems: serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context),
    }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_json1_1CreateOpsMetadataRequest = (
  input: CreateOpsMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Metadata != null && { Metadata: serializeAws_json1_1MetadataMap(input.Metadata, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePatchBaselineRequest = (
  input: CreatePatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApprovalRules != null && {
      ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
    }),
    ...(input.ApprovedPatches != null && {
      ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
    }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlobalFilters != null && {
      GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.RejectedPatches != null && {
      RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
    }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Sources != null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateResourceDataSyncRequest = (
  input: CreateResourceDataSyncRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Destination != null && {
      S3Destination: serializeAws_json1_1ResourceDataSyncS3Destination(input.S3Destination, context),
    }),
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncSource != null && {
      SyncSource: serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context),
    }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

const serializeAws_json1_1DeleteActivationRequest = (input: DeleteActivationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActivationId != null && { ActivationId: input.ActivationId }),
  };
};

const serializeAws_json1_1DeleteAssociationRequest = (
  input: DeleteAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDocumentRequest = (input: DeleteDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Force != null && { Force: input.Force }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1DeleteInventoryRequest = (input: DeleteInventoryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.SchemaDeleteOption != null && { SchemaDeleteOption: input.SchemaDeleteOption }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1DeleteMaintenanceWindowRequest = (
  input: DeleteMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1DeleteOpsMetadataRequest = (
  input: DeleteOpsMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

const serializeAws_json1_1DeleteParameterRequest = (input: DeleteParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteParametersRequest = (input: DeleteParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: serializeAws_json1_1ParameterNameList(input.Names, context) }),
  };
};

const serializeAws_json1_1DeletePatchBaselineRequest = (
  input: DeletePatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

const serializeAws_json1_1DeleteResourceDataSyncRequest = (
  input: DeleteResourceDataSyncRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyHash != null && { PolicyHash: input.PolicyHash }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeregisterManagedInstanceRequest = (
  input: DeregisterManagedInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1DeregisterPatchBaselineForPatchGroupRequest = (
  input: DeregisterPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

const serializeAws_json1_1DeregisterTargetFromMaintenanceWindowRequest = (
  input: DeregisterTargetFromMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Safe != null && { Safe: input.Safe }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTargetId != null && { WindowTargetId: input.WindowTargetId }),
  };
};

const serializeAws_json1_1DeregisterTaskFromMaintenanceWindowRequest = (
  input: DeregisterTaskFromMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

const serializeAws_json1_1DescribeActivationsFilter = (
  input: DescribeActivationsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterKey != null && { FilterKey: input.FilterKey }),
    ...(input.FilterValues != null && { FilterValues: serializeAws_json1_1StringList(input.FilterValues, context) }),
  };
};

const serializeAws_json1_1DescribeActivationsFilterList = (
  input: DescribeActivationsFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DescribeActivationsFilter(entry, context);
    });
};

const serializeAws_json1_1DescribeActivationsRequest = (
  input: DescribeActivationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1DescribeActivationsFilterList(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAssociationExecutionsRequest = (
  input: DescribeAssociationExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1AssociationExecutionFilterList(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAssociationExecutionTargetsRequest = (
  input: DescribeAssociationExecutionTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1AssociationExecutionTargetsFilterList(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAssociationRequest = (
  input: DescribeAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.AssociationVersion != null && { AssociationVersion: input.AssociationVersion }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeAutomationExecutionsRequest = (
  input: DescribeAutomationExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1AutomationExecutionFilterList(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAutomationStepExecutionsRequest = (
  input: DescribeAutomationStepExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1StepExecutionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ReverseOrder != null && { ReverseOrder: input.ReverseOrder }),
  };
};

const serializeAws_json1_1DescribeAvailablePatchesRequest = (
  input: DescribeAvailablePatchesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDocumentPermissionRequest = (
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

const serializeAws_json1_1DescribeDocumentRequest = (input: DescribeDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1DescribeEffectiveInstanceAssociationsRequest = (
  input: DescribeEffectiveInstanceAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineRequest = (
  input: DescribeEffectivePatchesForPatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeInstanceAssociationsStatusRequest = (
  input: DescribeInstanceAssociationsStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeInstanceInformationRequest = (
  input: DescribeInstanceInformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1InstanceInformationStringFilterList(input.Filters, context),
    }),
    ...(input.InstanceInformationFilterList != null && {
      InstanceInformationFilterList: serializeAws_json1_1InstanceInformationFilterList(
        input.InstanceInformationFilterList,
        context
      ),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeInstancePatchesRequest = (
  input: DescribeInstancePatchesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupRequest = (
  input: DescribeInstancePatchStatesForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1InstancePatchStateFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

const serializeAws_json1_1DescribeInstancePatchStatesRequest = (
  input: DescribeInstancePatchStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeInventoryDeletionsRequest = (
  input: DescribeInventoryDeletionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeletionId != null && { DeletionId: input.DeletionId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowExecutionsRequest = (
  input: DescribeMaintenanceWindowExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsRequest = (
  input: DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksRequest = (
  input: DescribeMaintenanceWindowExecutionTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowScheduleRequest = (
  input: DescribeMaintenanceWindowScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowsForTargetRequest = (
  input: DescribeMaintenanceWindowsForTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowsRequest = (
  input: DescribeMaintenanceWindowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowTargetsRequest = (
  input: DescribeMaintenanceWindowTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1DescribeMaintenanceWindowTasksRequest = (
  input: DescribeMaintenanceWindowTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1MaintenanceWindowFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1DescribeOpsItemsRequest = (input: DescribeOpsItemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsItemFilters != null && {
      OpsItemFilters: serializeAws_json1_1OpsItemFilters(input.OpsItemFilters, context),
    }),
  };
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ParametersFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterFilters != null && {
      ParameterFilters: serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context),
    }),
  };
};

const serializeAws_json1_1DescribePatchBaselinesRequest = (
  input: DescribePatchBaselinesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribePatchGroupsRequest = (
  input: DescribePatchGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1PatchOrchestratorFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribePatchGroupStateRequest = (
  input: DescribePatchGroupStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

const serializeAws_json1_1DescribePatchPropertiesRequest = (
  input: DescribePatchPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.PatchSet != null && { PatchSet: input.PatchSet }),
    ...(input.Property != null && { Property: input.Property }),
  };
};

const serializeAws_json1_1DescribeSessionsRequest = (input: DescribeSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1SessionFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_json1_1DisassociateOpsItemRelatedItemRequest = (
  input: DisassociateOpsItemRelatedItemRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

const serializeAws_json1_1DocumentFilter = (input: DocumentFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1DocumentFilterList = (input: DocumentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentFilter(entry, context);
    });
};

const serializeAws_json1_1DocumentKeyValuesFilter = (input: DocumentKeyValuesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1DocumentKeyValuesFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1DocumentKeyValuesFilterList = (
  input: DocumentKeyValuesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentKeyValuesFilter(entry, context);
    });
};

const serializeAws_json1_1DocumentKeyValuesFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DocumentRequires = (input: DocumentRequires, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequireType != null && { RequireType: input.RequireType }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1DocumentRequiresList = (input: DocumentRequires[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentRequires(entry, context);
    });
};

const serializeAws_json1_1DocumentReviewCommentList = (
  input: DocumentReviewCommentSource[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentReviewCommentSource(entry, context);
    });
};

const serializeAws_json1_1DocumentReviewCommentSource = (
  input: DocumentReviewCommentSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DocumentReviews = (input: DocumentReviews, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Comment != null && { Comment: serializeAws_json1_1DocumentReviewCommentList(input.Comment, context) }),
  };
};

const serializeAws_json1_1GetAutomationExecutionRequest = (
  input: GetAutomationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
  };
};

const serializeAws_json1_1GetCalendarStateRequest = (input: GetCalendarStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.AtTime != null && { AtTime: input.AtTime }),
    ...(input.CalendarNames != null && {
      CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
    }),
  };
};

const serializeAws_json1_1GetCommandInvocationRequest = (
  input: GetCommandInvocationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.PluginName != null && { PluginName: input.PluginName }),
  };
};

const serializeAws_json1_1GetConnectionStatusRequest = (
  input: GetConnectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_json1_1GetDefaultPatchBaselineRequest = (
  input: GetDefaultPatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
  };
};

const serializeAws_json1_1GetDeployablePatchSnapshotForInstanceRequest = (
  input: GetDeployablePatchSnapshotForInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineOverride != null && {
      BaselineOverride: serializeAws_json1_1BaselineOverride(input.BaselineOverride, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1GetDocumentRequest = (input: GetDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1GetInventoryRequest = (input: GetInventoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && {
      Aggregators: serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResultAttributes != null && {
      ResultAttributes: serializeAws_json1_1ResultAttributeList(input.ResultAttributes, context),
    }),
  };
};

const serializeAws_json1_1GetInventorySchemaRequest = (
  input: GetInventorySchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aggregator != null && { Aggregator: input.Aggregator }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubType != null && { SubType: input.SubType }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1GetMaintenanceWindowExecutionRequest = (
  input: GetMaintenanceWindowExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationRequest = (
  input: GetMaintenanceWindowExecutionTaskInvocationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvocationId != null && { InvocationId: input.InvocationId }),
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1GetMaintenanceWindowExecutionTaskRequest = (
  input: GetMaintenanceWindowExecutionTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
    ...(input.WindowExecutionId != null && { WindowExecutionId: input.WindowExecutionId }),
  };
};

const serializeAws_json1_1GetMaintenanceWindowRequest = (
  input: GetMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1GetMaintenanceWindowTaskRequest = (
  input: GetMaintenanceWindowTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

const serializeAws_json1_1GetOpsItemRequest = (input: GetOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.OpsItemArn != null && { OpsItemArn: input.OpsItemArn }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

const serializeAws_json1_1GetOpsMetadataRequest = (input: GetOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

const serializeAws_json1_1GetOpsSummaryRequest = (input: GetOpsSummaryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && {
      Aggregators: serializeAws_json1_1OpsAggregatorList(input.Aggregators, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1OpsFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResultAttributes != null && {
      ResultAttributes: serializeAws_json1_1OpsResultAttributeList(input.ResultAttributes, context),
    }),
    ...(input.SyncName != null && { SyncName: input.SyncName }),
  };
};

const serializeAws_json1_1GetParameterHistoryRequest = (
  input: GetParameterHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

const serializeAws_json1_1GetParameterRequest = (input: GetParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

const serializeAws_json1_1GetParametersByPathRequest = (
  input: GetParametersByPathRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterFilters != null && {
      ParameterFilters: serializeAws_json1_1ParameterStringFilterList(input.ParameterFilters, context),
    }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Recursive != null && { Recursive: input.Recursive }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

const serializeAws_json1_1GetParametersRequest = (input: GetParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: serializeAws_json1_1ParameterNameList(input.Names, context) }),
    ...(input.WithDecryption != null && { WithDecryption: input.WithDecryption }),
  };
};

const serializeAws_json1_1GetPatchBaselineForPatchGroupRequest = (
  input: GetPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

const serializeAws_json1_1GetPatchBaselineRequest = (input: GetPatchBaselineRequest, context: __SerdeContext): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

const serializeAws_json1_1GetResourcePoliciesRequest = (
  input: GetResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetServiceSettingRequest = (
  input: GetServiceSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
  };
};

const serializeAws_json1_1InstanceAssociationOutputLocation = (
  input: InstanceAssociationOutputLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Location != null && { S3Location: serializeAws_json1_1S3OutputLocation(input.S3Location, context) }),
  };
};

const serializeAws_json1_1InstanceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InstanceInformationFilter = (
  input: InstanceInformationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.valueSet != null && {
      valueSet: serializeAws_json1_1InstanceInformationFilterValueSet(input.valueSet, context),
    }),
  };
};

const serializeAws_json1_1InstanceInformationFilterList = (
  input: InstanceInformationFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceInformationFilter(entry, context);
    });
};

const serializeAws_json1_1InstanceInformationFilterValueSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InstanceInformationStringFilter = (
  input: InstanceInformationStringFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && {
      Values: serializeAws_json1_1InstanceInformationFilterValueSet(input.Values, context),
    }),
  };
};

const serializeAws_json1_1InstanceInformationStringFilterList = (
  input: InstanceInformationStringFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceInformationStringFilter(entry, context);
    });
};

const serializeAws_json1_1InstancePatchStateFilter = (
  input: InstancePatchStateFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: serializeAws_json1_1InstancePatchStateFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1InstancePatchStateFilterList = (
  input: InstancePatchStateFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstancePatchStateFilter(entry, context);
    });
};

const serializeAws_json1_1InstancePatchStateFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InventoryAggregator = (input: InventoryAggregator, context: __SerdeContext): any => {
  return {
    ...(input.Aggregators != null && {
      Aggregators: serializeAws_json1_1InventoryAggregatorList(input.Aggregators, context),
    }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Groups != null && { Groups: serializeAws_json1_1InventoryGroupList(input.Groups, context) }),
  };
};

const serializeAws_json1_1InventoryAggregatorList = (input: InventoryAggregator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryAggregator(entry, context);
    });
};

const serializeAws_json1_1InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: serializeAws_json1_1InventoryFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1InventoryFilterList = (input: InventoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryFilter(entry, context);
    });
};

const serializeAws_json1_1InventoryFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InventoryGroup = (input: InventoryGroup, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1InventoryGroupList = (input: InventoryGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryGroup(entry, context);
    });
};

const serializeAws_json1_1InventoryItem = (input: InventoryItem, context: __SerdeContext): any => {
  return {
    ...(input.CaptureTime != null && { CaptureTime: input.CaptureTime }),
    ...(input.Content != null && { Content: serializeAws_json1_1InventoryItemEntryList(input.Content, context) }),
    ...(input.ContentHash != null && { ContentHash: input.ContentHash }),
    ...(input.Context != null && { Context: serializeAws_json1_1InventoryItemContentContext(input.Context, context) }),
    ...(input.SchemaVersion != null && { SchemaVersion: input.SchemaVersion }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1InventoryItemContentContext = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1InventoryItemEntry = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1InventoryItemEntryList = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryItemEntry(entry, context);
    });
};

const serializeAws_json1_1InventoryItemList = (input: InventoryItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryItem(entry, context);
    });
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LabelParameterVersionRequest = (
  input: LabelParameterVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Labels != null && { Labels: serializeAws_json1_1ParameterLabelList(input.Labels, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParameterVersion != null && { ParameterVersion: input.ParameterVersion }),
  };
};

const serializeAws_json1_1ListAssociationsRequest = (input: ListAssociationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationFilterList != null && {
      AssociationFilterList: serializeAws_json1_1AssociationFilterList(input.AssociationFilterList, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListAssociationVersionsRequest = (
  input: ListAssociationVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCommandInvocationsRequest = (
  input: ListCommandInvocationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.Details != null && { Details: input.Details }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1CommandFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCommandsRequest = (input: ListCommandsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandId != null && { CommandId: input.CommandId }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1CommandFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListComplianceItemsRequest = (
  input: ListComplianceItemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceIds != null && {
      ResourceIds: serializeAws_json1_1ComplianceResourceIdList(input.ResourceIds, context),
    }),
    ...(input.ResourceTypes != null && {
      ResourceTypes: serializeAws_json1_1ComplianceResourceTypeList(input.ResourceTypes, context),
    }),
  };
};

const serializeAws_json1_1ListComplianceSummariesRequest = (
  input: ListComplianceSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDocumentMetadataHistoryRequest = (
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

const serializeAws_json1_1ListDocumentsRequest = (input: ListDocumentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentFilterList != null && {
      DocumentFilterList: serializeAws_json1_1DocumentFilterList(input.DocumentFilterList, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1DocumentKeyValuesFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDocumentVersionsRequest = (
  input: ListDocumentVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListInventoryEntriesRequest = (
  input: ListInventoryEntriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1ListOpsItemEventsRequest = (
  input: ListOpsItemEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1OpsItemEventFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListOpsItemRelatedItemsRequest = (
  input: ListOpsItemRelatedItemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1OpsItemRelatedItemsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

const serializeAws_json1_1ListOpsMetadataRequest = (input: ListOpsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1OpsMetadataFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourceComplianceSummariesRequest = (
  input: ListResourceComplianceSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ComplianceStringFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourceDataSyncRequest = (
  input: ListResourceDataSyncRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1LoggingInfo = (input: LoggingInfo, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.S3Region != null && { S3Region: input.S3Region }),
  };
};

const serializeAws_json1_1MaintenanceWindowAutomationParameters = (
  input: MaintenanceWindowAutomationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
    }),
  };
};

const serializeAws_json1_1MaintenanceWindowFilter = (input: MaintenanceWindowFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1MaintenanceWindowFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1MaintenanceWindowFilterList = (
  input: MaintenanceWindowFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MaintenanceWindowFilter(entry, context);
    });
};

const serializeAws_json1_1MaintenanceWindowFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MaintenanceWindowLambdaParameters = (
  input: MaintenanceWindowLambdaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientContext != null && { ClientContext: input.ClientContext }),
    ...(input.Payload != null && { Payload: context.base64Encoder(input.Payload) }),
    ...(input.Qualifier != null && { Qualifier: input.Qualifier }),
  };
};

const serializeAws_json1_1MaintenanceWindowRunCommandParameters = (
  input: MaintenanceWindowRunCommandParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchOutputConfig != null && {
      CloudWatchOutputConfig: serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
    }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.DocumentHash != null && { DocumentHash: input.DocumentHash }),
    ...(input.DocumentHashType != null && { DocumentHashType: input.DocumentHashType }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.NotificationConfig != null && {
      NotificationConfig: serializeAws_json1_1NotificationConfig(input.NotificationConfig, context),
    }),
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

const serializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (
  input: MaintenanceWindowStepFunctionsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Input != null && { Input: input.Input }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (
  input: MaintenanceWindowTaskInvocationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Automation != null && {
      Automation: serializeAws_json1_1MaintenanceWindowAutomationParameters(input.Automation, context),
    }),
    ...(input.Lambda != null && {
      Lambda: serializeAws_json1_1MaintenanceWindowLambdaParameters(input.Lambda, context),
    }),
    ...(input.RunCommand != null && {
      RunCommand: serializeAws_json1_1MaintenanceWindowRunCommandParameters(input.RunCommand, context),
    }),
    ...(input.StepFunctions != null && {
      StepFunctions: serializeAws_json1_1MaintenanceWindowStepFunctionsParameters(input.StepFunctions, context),
    }),
  };
};

const serializeAws_json1_1MaintenanceWindowTaskParameters = (
  input: Record<string, MaintenanceWindowTaskParameterValueExpression>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (
  input: MaintenanceWindowTaskParameterValueExpression,
  context: __SerdeContext
): any => {
  return {
    ...(input.Values != null && {
      Values: serializeAws_json1_1MaintenanceWindowTaskParameterValueList(input.Values, context),
    }),
  };
};

const serializeAws_json1_1MaintenanceWindowTaskParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetadataKeysToDeleteList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetadataMap = (input: Record<string, MetadataValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1MetadataValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MetadataValue = (input: MetadataValue, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ModifyDocumentPermissionRequest = (
  input: ModifyDocumentPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountIdsToAdd != null && {
      AccountIdsToAdd: serializeAws_json1_1AccountIdList(input.AccountIdsToAdd, context),
    }),
    ...(input.AccountIdsToRemove != null && {
      AccountIdsToRemove: serializeAws_json1_1AccountIdList(input.AccountIdsToRemove, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PermissionType != null && { PermissionType: input.PermissionType }),
    ...(input.SharedDocumentVersion != null && { SharedDocumentVersion: input.SharedDocumentVersion }),
  };
};

const serializeAws_json1_1NotificationConfig = (input: NotificationConfig, context: __SerdeContext): any => {
  return {
    ...(input.NotificationArn != null && { NotificationArn: input.NotificationArn }),
    ...(input.NotificationEvents != null && {
      NotificationEvents: serializeAws_json1_1NotificationEventList(input.NotificationEvents, context),
    }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
  };
};

const serializeAws_json1_1NotificationEventList = (
  input: (NotificationEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsAggregator = (input: OpsAggregator, context: __SerdeContext): any => {
  return {
    ...(input.AggregatorType != null && { AggregatorType: input.AggregatorType }),
    ...(input.Aggregators != null && {
      Aggregators: serializeAws_json1_1OpsAggregatorList(input.Aggregators, context),
    }),
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1OpsFilterList(input.Filters, context) }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsAggregatorValueMap(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsAggregatorList = (input: OpsAggregator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsAggregator(entry, context);
    });
};

const serializeAws_json1_1OpsAggregatorValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1OpsFilter = (input: OpsFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsFilterList = (input: OpsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsFilter(entry, context);
    });
};

const serializeAws_json1_1OpsFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsItemDataValue = (input: OpsItemDataValue, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1OpsItemEventFilter = (input: OpsItemEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsItemEventFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsItemEventFilters = (input: OpsItemEventFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsItemEventFilter(entry, context);
    });
};

const serializeAws_json1_1OpsItemEventFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsItemFilter = (input: OpsItemFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsItemFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsItemFilters = (input: OpsItemFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsItemFilter(entry, context);
    });
};

const serializeAws_json1_1OpsItemFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsItemNotification = (input: OpsItemNotification, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1OpsItemNotifications = (input: OpsItemNotification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsItemNotification(entry, context);
    });
};

const serializeAws_json1_1OpsItemOperationalData = (
  input: Record<string, OpsItemDataValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1OpsItemDataValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1OpsItemOpsDataKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsItemRelatedItemsFilter = (
  input: OpsItemRelatedItemsFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsItemRelatedItemsFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsItemRelatedItemsFilters = (
  input: OpsItemRelatedItemsFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsItemRelatedItemsFilter(entry, context);
    });
};

const serializeAws_json1_1OpsItemRelatedItemsFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsMetadataFilter = (input: OpsMetadataFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1OpsMetadataFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1OpsMetadataFilterList = (input: OpsMetadataFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsMetadataFilter(entry, context);
    });
};

const serializeAws_json1_1OpsMetadataFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpsResultAttribute = (input: OpsResultAttribute, context: __SerdeContext): any => {
  return {
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1OpsResultAttributeList = (input: OpsResultAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpsResultAttribute(entry, context);
    });
};

const serializeAws_json1_1ParameterLabelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Parameters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ParameterValueList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1ParametersFilter = (input: ParametersFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1ParametersFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1ParametersFilterList = (input: ParametersFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParametersFilter(entry, context);
    });
};

const serializeAws_json1_1ParametersFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterStringFilter = (input: ParameterStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Option != null && { Option: input.Option }),
    ...(input.Values != null && { Values: serializeAws_json1_1ParameterStringFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1ParameterStringFilterList = (
  input: ParameterStringFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterStringFilter(entry, context);
    });
};

const serializeAws_json1_1ParameterStringFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PatchFilter = (input: PatchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1PatchFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1PatchFilterGroup = (input: PatchFilterGroup, context: __SerdeContext): any => {
  return {
    ...(input.PatchFilters != null && {
      PatchFilters: serializeAws_json1_1PatchFilterList(input.PatchFilters, context),
    }),
  };
};

const serializeAws_json1_1PatchFilterList = (input: PatchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PatchFilter(entry, context);
    });
};

const serializeAws_json1_1PatchFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PatchIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PatchOrchestratorFilter = (input: PatchOrchestratorFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1PatchOrchestratorFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1PatchOrchestratorFilterList = (
  input: PatchOrchestratorFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PatchOrchestratorFilter(entry, context);
    });
};

const serializeAws_json1_1PatchOrchestratorFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PatchRule = (input: PatchRule, context: __SerdeContext): any => {
  return {
    ...(input.ApproveAfterDays != null && { ApproveAfterDays: input.ApproveAfterDays }),
    ...(input.ApproveUntilDate != null && { ApproveUntilDate: input.ApproveUntilDate }),
    ...(input.ComplianceLevel != null && { ComplianceLevel: input.ComplianceLevel }),
    ...(input.EnableNonSecurity != null && { EnableNonSecurity: input.EnableNonSecurity }),
    ...(input.PatchFilterGroup != null && {
      PatchFilterGroup: serializeAws_json1_1PatchFilterGroup(input.PatchFilterGroup, context),
    }),
  };
};

const serializeAws_json1_1PatchRuleGroup = (input: PatchRuleGroup, context: __SerdeContext): any => {
  return {
    ...(input.PatchRules != null && { PatchRules: serializeAws_json1_1PatchRuleList(input.PatchRules, context) }),
  };
};

const serializeAws_json1_1PatchRuleList = (input: PatchRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PatchRule(entry, context);
    });
};

const serializeAws_json1_1PatchSource = (input: PatchSource, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Products != null && { Products: serializeAws_json1_1PatchSourceProductList(input.Products, context) }),
  };
};

const serializeAws_json1_1PatchSourceList = (input: PatchSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PatchSource(entry, context);
    });
};

const serializeAws_json1_1PatchSourceProductList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutComplianceItemsRequest = (
  input: PutComplianceItemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ExecutionSummary != null && {
      ExecutionSummary: serializeAws_json1_1ComplianceExecutionSummary(input.ExecutionSummary, context),
    }),
    ...(input.ItemContentHash != null && { ItemContentHash: input.ItemContentHash }),
    ...(input.Items != null && { Items: serializeAws_json1_1ComplianceItemEntryList(input.Items, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.UploadType != null && { UploadType: input.UploadType }),
  };
};

const serializeAws_json1_1PutInventoryRequest = (input: PutInventoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Items != null && { Items: serializeAws_json1_1InventoryItemList(input.Items, context) }),
  };
};

const serializeAws_json1_1PutParameterRequest = (input: PutParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedPattern != null && { AllowedPattern: input.AllowedPattern }),
    ...(input.DataType != null && { DataType: input.DataType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Overwrite != null && { Overwrite: input.Overwrite }),
    ...(input.Policies != null && { Policies: input.Policies }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Tier != null && { Tier: input.Tier }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PolicyHash != null && { PolicyHash: input.PolicyHash }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Regions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RegisterDefaultPatchBaselineRequest = (
  input: RegisterDefaultPatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
  };
};

const serializeAws_json1_1RegisterPatchBaselineForPatchGroupRequest = (
  input: RegisterPatchBaselineForPatchGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
  };
};

const serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest = (
  input: RegisterTargetWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OwnerInformation != null && { OwnerInformation: input.OwnerInformation }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest = (
  input: RegisterTaskWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CutoffBehavior != null && { CutoffBehavior: input.CutoffBehavior }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoggingInfo != null && { LoggingInfo: serializeAws_json1_1LoggingInfo(input.LoggingInfo, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
    ...(input.TaskInvocationParameters != null && {
      TaskInvocationParameters: serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(
        input.TaskInvocationParameters,
        context
      ),
    }),
    ...(input.TaskParameters != null && {
      TaskParameters: serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context),
    }),
    ...(input.TaskType != null && { TaskType: input.TaskType }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
  };
};

const serializeAws_json1_1RegistrationMetadataItem = (
  input: RegistrationMetadataItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1RegistrationMetadataList = (
  input: RegistrationMetadataItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RegistrationMetadataItem(entry, context);
    });
};

const serializeAws_json1_1RelatedOpsItem = (input: RelatedOpsItem, context: __SerdeContext): any => {
  return {
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
  };
};

const serializeAws_json1_1RelatedOpsItems = (input: RelatedOpsItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RelatedOpsItem(entry, context);
    });
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1ResetServiceSettingRequest = (
  input: ResetServiceSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
  };
};

const serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (
  input: ResourceDataSyncAwsOrganizationsSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationSourceType != null && { OrganizationSourceType: input.OrganizationSourceType }),
    ...(input.OrganizationalUnits != null && {
      OrganizationalUnits: serializeAws_json1_1ResourceDataSyncOrganizationalUnitList(
        input.OrganizationalUnits,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ResourceDataSyncDestinationDataSharing = (
  input: ResourceDataSyncDestinationDataSharing,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationDataSharingType != null && { DestinationDataSharingType: input.DestinationDataSharingType }),
  };
};

const serializeAws_json1_1ResourceDataSyncOrganizationalUnit = (
  input: ResourceDataSyncOrganizationalUnit,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

const serializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (
  input: ResourceDataSyncOrganizationalUnit[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context);
    });
};

const serializeAws_json1_1ResourceDataSyncS3Destination = (
  input: ResourceDataSyncS3Destination,
  context: __SerdeContext
): any => {
  return {
    ...(input.AWSKMSKeyARN != null && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.DestinationDataSharing != null && {
      DestinationDataSharing: serializeAws_json1_1ResourceDataSyncDestinationDataSharing(
        input.DestinationDataSharing,
        context
      ),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.SyncFormat != null && { SyncFormat: input.SyncFormat }),
  };
};

const serializeAws_json1_1ResourceDataSyncSource = (input: ResourceDataSyncSource, context: __SerdeContext): any => {
  return {
    ...(input.AwsOrganizationsSource != null && {
      AwsOrganizationsSource: serializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(
        input.AwsOrganizationsSource,
        context
      ),
    }),
    ...(input.EnableAllOpsDataSources != null && { EnableAllOpsDataSources: input.EnableAllOpsDataSources }),
    ...(input.IncludeFutureRegions != null && { IncludeFutureRegions: input.IncludeFutureRegions }),
    ...(input.SourceRegions != null && {
      SourceRegions: serializeAws_json1_1ResourceDataSyncSourceRegionList(input.SourceRegions, context),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

const serializeAws_json1_1ResourceDataSyncSourceRegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResultAttribute = (input: ResultAttribute, context: __SerdeContext): any => {
  return {
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1ResultAttributeList = (input: ResultAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResultAttribute(entry, context);
    });
};

const serializeAws_json1_1ResumeSessionRequest = (input: ResumeSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1Runbook = (input: Runbook, context: __SerdeContext): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
    }),
    ...(input.TargetLocations != null && {
      TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
    }),
    ...(input.TargetMaps != null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
    ...(input.TargetParameterName != null && { TargetParameterName: input.TargetParameterName }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1Runbooks = (input: Runbook[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Runbook(entry, context);
    });
};

const serializeAws_json1_1S3OutputLocation = (input: S3OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.OutputS3Region != null && { OutputS3Region: input.OutputS3Region }),
  };
};

const serializeAws_json1_1SendAutomationSignalRequest = (
  input: SendAutomationSignalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Payload != null && { Payload: serializeAws_json1_1AutomationParameterMap(input.Payload, context) }),
    ...(input.SignalType != null && { SignalType: input.SignalType }),
  };
};

const serializeAws_json1_1SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.CloudWatchOutputConfig != null && {
      CloudWatchOutputConfig: serializeAws_json1_1CloudWatchOutputConfig(input.CloudWatchOutputConfig, context),
    }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.DocumentHash != null && { DocumentHash: input.DocumentHash }),
    ...(input.DocumentHashType != null && { DocumentHashType: input.DocumentHashType }),
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1InstanceIdList(input.InstanceIds, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.NotificationConfig != null && {
      NotificationConfig: serializeAws_json1_1NotificationConfig(input.NotificationConfig, context),
    }),
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.OutputS3Region != null && { OutputS3Region: input.OutputS3Region }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

const serializeAws_json1_1SessionFilter = (input: SessionFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1SessionFilterList = (input: SessionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SessionFilter(entry, context);
    });
};

const serializeAws_json1_1SessionManagerParameters = (
  input: Record<string, string[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1SessionManagerParameterValueList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1SessionManagerParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartAssociationsOnceRequest = (
  input: StartAssociationsOnceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationIds != null && {
      AssociationIds: serializeAws_json1_1AssociationIdList(input.AssociationIds, context),
    }),
  };
};

const serializeAws_json1_1StartAutomationExecutionRequest = (
  input: StartAutomationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetLocations != null && {
      TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
    }),
    ...(input.TargetMaps != null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
    ...(input.TargetParameterName != null && { TargetParameterName: input.TargetParameterName }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1StartChangeRequestExecutionRequest = (
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
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1AutomationParameterMap(input.Parameters, context),
    }),
    ...(input.Runbooks != null && { Runbooks: serializeAws_json1_1Runbooks(input.Runbooks, context) }),
    ...(input.ScheduledEndTime != null && { ScheduledEndTime: Math.round(input.ScheduledEndTime.getTime() / 1000) }),
    ...(input.ScheduledTime != null && { ScheduledTime: Math.round(input.ScheduledTime.getTime() / 1000) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1SessionManagerParameters(input.Parameters, context),
    }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_json1_1StepExecutionFilter = (input: StepExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1StepExecutionFilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1StepExecutionFilterList = (input: StepExecutionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StepExecutionFilter(entry, context);
    });
};

const serializeAws_json1_1StepExecutionFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StopAutomationExecutionRequest = (
  input: StopAutomationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomationExecutionId != null && { AutomationExecutionId: input.AutomationExecutionId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1TargetValues(input.Values, context) }),
  };
};

const serializeAws_json1_1TargetLocation = (input: TargetLocation, context: __SerdeContext): any => {
  return {
    ...(input.Accounts != null && { Accounts: serializeAws_json1_1Accounts(input.Accounts, context) }),
    ...(input.ExecutionRoleName != null && { ExecutionRoleName: input.ExecutionRoleName }),
    ...(input.Regions != null && { Regions: serializeAws_json1_1Regions(input.Regions, context) }),
    ...(input.TargetLocationAlarmConfiguration != null && {
      TargetLocationAlarmConfiguration: serializeAws_json1_1AlarmConfiguration(
        input.TargetLocationAlarmConfiguration,
        context
      ),
    }),
    ...(input.TargetLocationMaxConcurrency != null && {
      TargetLocationMaxConcurrency: input.TargetLocationMaxConcurrency,
    }),
    ...(input.TargetLocationMaxErrors != null && { TargetLocationMaxErrors: input.TargetLocationMaxErrors }),
  };
};

const serializeAws_json1_1TargetLocations = (input: TargetLocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TargetLocation(entry, context);
    });
};

const serializeAws_json1_1TargetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1TargetMapValueList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1TargetMaps = (input: Record<string, string[]>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TargetMap(entry, context);
    });
};

const serializeAws_json1_1TargetMapValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Targets = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TerminateSessionRequest = (input: TerminateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1UnlabelParameterVersionRequest = (
  input: UnlabelParameterVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Labels != null && { Labels: serializeAws_json1_1ParameterLabelList(input.Labels, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParameterVersion != null && { ParameterVersion: input.ParameterVersion }),
  };
};

const serializeAws_json1_1UpdateAssociationRequest = (
  input: UpdateAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.ApplyOnlyAtCronInterval != null && { ApplyOnlyAtCronInterval: input.ApplyOnlyAtCronInterval }),
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.AssociationName != null && { AssociationName: input.AssociationName }),
    ...(input.AssociationVersion != null && { AssociationVersion: input.AssociationVersion }),
    ...(input.AutomationTargetParameterName != null && {
      AutomationTargetParameterName: input.AutomationTargetParameterName,
    }),
    ...(input.CalendarNames != null && {
      CalendarNames: serializeAws_json1_1CalendarNameOrARNList(input.CalendarNames, context),
    }),
    ...(input.ComplianceSeverity != null && { ComplianceSeverity: input.ComplianceSeverity }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_json1_1InstanceAssociationOutputLocation(input.OutputLocation, context),
    }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1Parameters(input.Parameters, context) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.SyncCompliance != null && { SyncCompliance: input.SyncCompliance }),
    ...(input.TargetLocations != null && {
      TargetLocations: serializeAws_json1_1TargetLocations(input.TargetLocations, context),
    }),
    ...(input.TargetMaps != null && { TargetMaps: serializeAws_json1_1TargetMaps(input.TargetMaps, context) }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
  };
};

const serializeAws_json1_1UpdateAssociationStatusRequest = (
  input: UpdateAssociationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationStatus != null && {
      AssociationStatus: serializeAws_json1_1AssociationStatus(input.AssociationStatus, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDocumentDefaultVersionRequest = (
  input: UpdateDocumentDefaultVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDocumentMetadataRequest = (
  input: UpdateDocumentMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentReviews != null && {
      DocumentReviews: serializeAws_json1_1DocumentReviews(input.DocumentReviews, context),
    }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDocumentRequest = (input: UpdateDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attachments != null && {
      Attachments: serializeAws_json1_1AttachmentsSourceList(input.Attachments, context),
    }),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DocumentFormat != null && { DocumentFormat: input.DocumentFormat }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1UpdateMaintenanceWindowRequest = (
  input: UpdateMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1UpdateMaintenanceWindowTargetRequest = (
  input: UpdateMaintenanceWindowTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OwnerInformation != null && { OwnerInformation: input.OwnerInformation }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTargetId != null && { WindowTargetId: input.WindowTargetId }),
  };
};

const serializeAws_json1_1UpdateMaintenanceWindowTaskRequest = (
  input: UpdateMaintenanceWindowTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlarmConfiguration != null && {
      AlarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.AlarmConfiguration, context),
    }),
    ...(input.CutoffBehavior != null && { CutoffBehavior: input.CutoffBehavior }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoggingInfo != null && { LoggingInfo: serializeAws_json1_1LoggingInfo(input.LoggingInfo, context) }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxErrors != null && { MaxErrors: input.MaxErrors }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1Targets(input.Targets, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
    ...(input.TaskInvocationParameters != null && {
      TaskInvocationParameters: serializeAws_json1_1MaintenanceWindowTaskInvocationParameters(
        input.TaskInvocationParameters,
        context
      ),
    }),
    ...(input.TaskParameters != null && {
      TaskParameters: serializeAws_json1_1MaintenanceWindowTaskParameters(input.TaskParameters, context),
    }),
    ...(input.WindowId != null && { WindowId: input.WindowId }),
    ...(input.WindowTaskId != null && { WindowTaskId: input.WindowTaskId }),
  };
};

const serializeAws_json1_1UpdateManagedInstanceRoleRequest = (
  input: UpdateManagedInstanceRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamRole != null && { IamRole: input.IamRole }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1UpdateOpsItemRequest = (input: UpdateOpsItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActualEndTime != null && { ActualEndTime: Math.round(input.ActualEndTime.getTime() / 1000) }),
    ...(input.ActualStartTime != null && { ActualStartTime: Math.round(input.ActualStartTime.getTime() / 1000) }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Notifications != null && {
      Notifications: serializeAws_json1_1OpsItemNotifications(input.Notifications, context),
    }),
    ...(input.OperationalData != null && {
      OperationalData: serializeAws_json1_1OpsItemOperationalData(input.OperationalData, context),
    }),
    ...(input.OperationalDataToDelete != null && {
      OperationalDataToDelete: serializeAws_json1_1OpsItemOpsDataKeysList(input.OperationalDataToDelete, context),
    }),
    ...(input.OpsItemArn != null && { OpsItemArn: input.OpsItemArn }),
    ...(input.OpsItemId != null && { OpsItemId: input.OpsItemId }),
    ...(input.PlannedEndTime != null && { PlannedEndTime: Math.round(input.PlannedEndTime.getTime() / 1000) }),
    ...(input.PlannedStartTime != null && { PlannedStartTime: Math.round(input.PlannedStartTime.getTime() / 1000) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RelatedOpsItems != null && {
      RelatedOpsItems: serializeAws_json1_1RelatedOpsItems(input.RelatedOpsItems, context),
    }),
    ...(input.Severity != null && { Severity: input.Severity }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_json1_1UpdateOpsMetadataRequest = (
  input: UpdateOpsMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeysToDelete != null && {
      KeysToDelete: serializeAws_json1_1MetadataKeysToDeleteList(input.KeysToDelete, context),
    }),
    ...(input.MetadataToUpdate != null && {
      MetadataToUpdate: serializeAws_json1_1MetadataMap(input.MetadataToUpdate, context),
    }),
    ...(input.OpsMetadataArn != null && { OpsMetadataArn: input.OpsMetadataArn }),
  };
};

const serializeAws_json1_1UpdatePatchBaselineRequest = (
  input: UpdatePatchBaselineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApprovalRules != null && {
      ApprovalRules: serializeAws_json1_1PatchRuleGroup(input.ApprovalRules, context),
    }),
    ...(input.ApprovedPatches != null && {
      ApprovedPatches: serializeAws_json1_1PatchIdList(input.ApprovedPatches, context),
    }),
    ...(input.ApprovedPatchesComplianceLevel != null && {
      ApprovedPatchesComplianceLevel: input.ApprovedPatchesComplianceLevel,
    }),
    ...(input.ApprovedPatchesEnableNonSecurity != null && {
      ApprovedPatchesEnableNonSecurity: input.ApprovedPatchesEnableNonSecurity,
    }),
    ...(input.BaselineId != null && { BaselineId: input.BaselineId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlobalFilters != null && {
      GlobalFilters: serializeAws_json1_1PatchFilterGroup(input.GlobalFilters, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RejectedPatches != null && {
      RejectedPatches: serializeAws_json1_1PatchIdList(input.RejectedPatches, context),
    }),
    ...(input.RejectedPatchesAction != null && { RejectedPatchesAction: input.RejectedPatchesAction }),
    ...(input.Replace != null && { Replace: input.Replace }),
    ...(input.Sources != null && { Sources: serializeAws_json1_1PatchSourceList(input.Sources, context) }),
  };
};

const serializeAws_json1_1UpdateResourceDataSyncRequest = (
  input: UpdateResourceDataSyncRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SyncName != null && { SyncName: input.SyncName }),
    ...(input.SyncSource != null && {
      SyncSource: serializeAws_json1_1ResourceDataSyncSource(input.SyncSource, context),
    }),
    ...(input.SyncType != null && { SyncType: input.SyncType }),
  };
};

const serializeAws_json1_1UpdateServiceSettingRequest = (
  input: UpdateServiceSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SettingId != null && { SettingId: input.SettingId }),
    ...(input.SettingValue != null && { SettingValue: input.SettingValue }),
  };
};

const deserializeAws_json1_1AccountIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Accounts = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AccountSharingInfo = (output: any, context: __SerdeContext): AccountSharingInfo => {
  return {
    AccountId: __expectString(output.AccountId),
    SharedDocumentVersion: __expectString(output.SharedDocumentVersion),
  } as any;
};

const deserializeAws_json1_1AccountSharingInfoList = (output: any, context: __SerdeContext): AccountSharingInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountSharingInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Activation = (output: any, context: __SerdeContext): Activation => {
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
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ActivationList = (output: any, context: __SerdeContext): Activation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Activation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AddTagsToResourceResult = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AlarmConfiguration = (output: any, context: __SerdeContext): AlarmConfiguration => {
  return {
    Alarms: output.Alarms != null ? deserializeAws_json1_1AlarmList(output.Alarms, context) : undefined,
    IgnorePollAlarmFailure: __expectBoolean(output.IgnorePollAlarmFailure),
  } as any;
};

const deserializeAws_json1_1AlarmList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AlarmStateInformation = (output: any, context: __SerdeContext): AlarmStateInformation => {
  return {
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1AlarmStateInformationList = (
  output: any,
  context: __SerdeContext
): AlarmStateInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AlarmStateInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociatedInstances = (output: any, context: __SerdeContext): AssociatedInstances => {
  return {} as any;
};

const deserializeAws_json1_1AssociateOpsItemRelatedItemResponse = (
  output: any,
  context: __SerdeContext
): AssociateOpsItemRelatedItemResponse => {
  return {
    AssociationId: __expectString(output.AssociationId),
  } as any;
};

const deserializeAws_json1_1Association = (output: any, context: __SerdeContext): Association => {
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
    Overview: output.Overview != null ? deserializeAws_json1_1AssociationOverview(output.Overview, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AssociationAlreadyExists = (
  output: any,
  context: __SerdeContext
): AssociationAlreadyExists => {
  return {} as any;
};

const deserializeAws_json1_1AssociationDescription = (output: any, context: __SerdeContext): AssociationDescription => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    AutomationTargetParameterName: __expectString(output.AutomationTargetParameterName),
    CalendarNames:
      output.CalendarNames != null
        ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
        : undefined,
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
      output.OutputLocation != null
        ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
        : undefined,
    Overview: output.Overview != null ? deserializeAws_json1_1AssociationOverview(output.Overview, context) : undefined,
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    Status: output.Status != null ? deserializeAws_json1_1AssociationStatus(output.Status, context) : undefined,
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations:
      output.TargetLocations != null
        ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
        : undefined,
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociationDescriptionList = (
  output: any,
  context: __SerdeContext
): AssociationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssociationDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociationDoesNotExist = (
  output: any,
  context: __SerdeContext
): AssociationDoesNotExist => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociationExecution = (output: any, context: __SerdeContext): AssociationExecution => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
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
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociationExecutionDoesNotExist = (
  output: any,
  context: __SerdeContext
): AssociationExecutionDoesNotExist => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociationExecutionsList = (
  output: any,
  context: __SerdeContext
): AssociationExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssociationExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociationExecutionTarget = (
  output: any,
  context: __SerdeContext
): AssociationExecutionTarget => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationVersion: __expectString(output.AssociationVersion),
    DetailedStatus: __expectString(output.DetailedStatus),
    ExecutionId: __expectString(output.ExecutionId),
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    OutputSource:
      output.OutputSource != null ? deserializeAws_json1_1OutputSource(output.OutputSource, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AssociationExecutionTargetsList = (
  output: any,
  context: __SerdeContext
): AssociationExecutionTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssociationExecutionTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociationLimitExceeded = (
  output: any,
  context: __SerdeContext
): AssociationLimitExceeded => {
  return {} as any;
};

const deserializeAws_json1_1AssociationList = (output: any, context: __SerdeContext): Association[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Association(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociationOverview = (output: any, context: __SerdeContext): AssociationOverview => {
  return {
    AssociationStatusAggregatedCount:
      output.AssociationStatusAggregatedCount != null
        ? deserializeAws_json1_1AssociationStatusAggregatedCount(output.AssociationStatusAggregatedCount, context)
        : undefined,
    DetailedStatus: __expectString(output.DetailedStatus),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AssociationStatus = (output: any, context: __SerdeContext): AssociationStatus => {
  return {
    AdditionalInfo: __expectString(output.AdditionalInfo),
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AssociationStatusAggregatedCount = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1AssociationVersionInfo = (output: any, context: __SerdeContext): AssociationVersionInfo => {
  return {
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationId: __expectString(output.AssociationId),
    AssociationName: __expectString(output.AssociationName),
    AssociationVersion: __expectString(output.AssociationVersion),
    CalendarNames:
      output.CalendarNames != null
        ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
        : undefined,
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
      output.OutputLocation != null
        ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
        : undefined,
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations:
      output.TargetLocations != null
        ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
        : undefined,
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AssociationVersionLimitExceeded = (
  output: any,
  context: __SerdeContext
): AssociationVersionLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociationVersionList = (
  output: any,
  context: __SerdeContext
): AssociationVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssociationVersionInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AttachmentContent = (output: any, context: __SerdeContext): AttachmentContent => {
  return {
    Hash: __expectString(output.Hash),
    HashType: __expectString(output.HashType),
    Name: __expectString(output.Name),
    Size: __expectLong(output.Size),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1AttachmentContentList = (output: any, context: __SerdeContext): AttachmentContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttachmentContent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AttachmentInformation = (output: any, context: __SerdeContext): AttachmentInformation => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AttachmentInformationList = (
  output: any,
  context: __SerdeContext
): AttachmentInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttachmentInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AutomationDefinitionNotApprovedException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionNotApprovedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomationDefinitionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomationDefinitionVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationDefinitionVersionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomationExecution = (output: any, context: __SerdeContext): AutomationExecution => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
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
    Outputs: output.Outputs != null ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context) : undefined,
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context) : undefined,
    ParentAutomationExecutionId: __expectString(output.ParentAutomationExecutionId),
    ProgressCounters:
      output.ProgressCounters != null
        ? deserializeAws_json1_1ProgressCounters(output.ProgressCounters, context)
        : undefined,
    ResolvedTargets:
      output.ResolvedTargets != null
        ? deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context)
        : undefined,
    Runbooks: output.Runbooks != null ? deserializeAws_json1_1Runbooks(output.Runbooks, context) : undefined,
    ScheduledTime:
      output.ScheduledTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTime)))
        : undefined,
    StepExecutions:
      output.StepExecutions != null
        ? deserializeAws_json1_1StepExecutionList(output.StepExecutions, context)
        : undefined,
    StepExecutionsTruncated: __expectBoolean(output.StepExecutionsTruncated),
    Target: __expectString(output.Target),
    TargetLocations:
      output.TargetLocations != null
        ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
        : undefined,
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutomationExecutionLimitExceededException = (
  output: any,
  context: __SerdeContext
): AutomationExecutionLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomationExecutionMetadata = (
  output: any,
  context: __SerdeContext
): AutomationExecutionMetadata => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
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
    Outputs: output.Outputs != null ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context) : undefined,
    ParentAutomationExecutionId: __expectString(output.ParentAutomationExecutionId),
    ResolvedTargets:
      output.ResolvedTargets != null
        ? deserializeAws_json1_1ResolvedTargets(output.ResolvedTargets, context)
        : undefined,
    Runbooks: output.Runbooks != null ? deserializeAws_json1_1Runbooks(output.Runbooks, context) : undefined,
    ScheduledTime:
      output.ScheduledTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTime)))
        : undefined,
    Target: __expectString(output.Target),
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutomationExecutionMetadataList = (
  output: any,
  context: __SerdeContext
): AutomationExecutionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AutomationExecutionMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AutomationExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationExecutionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomationParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1AutomationParameterValueList(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1AutomationParameterValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AutomationStepNotFoundException = (
  output: any,
  context: __SerdeContext
): AutomationStepNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CalendarNameOrARNList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CancelCommandResult = (output: any, context: __SerdeContext): CancelCommandResult => {
  return {} as any;
};

const deserializeAws_json1_1CancelMaintenanceWindowExecutionResult = (
  output: any,
  context: __SerdeContext
): CancelMaintenanceWindowExecutionResult => {
  return {
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

const deserializeAws_json1_1CategoryEnumList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CategoryList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CloudWatchOutputConfig = (output: any, context: __SerdeContext): CloudWatchOutputConfig => {
  return {
    CloudWatchLogGroupName: __expectString(output.CloudWatchLogGroupName),
    CloudWatchOutputEnabled: __expectBoolean(output.CloudWatchOutputEnabled),
  } as any;
};

const deserializeAws_json1_1Command = (output: any, context: __SerdeContext): Command => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
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
    InstanceIds:
      output.InstanceIds != null ? deserializeAws_json1_1InstanceIdList(output.InstanceIds, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    NotificationConfig:
      output.NotificationConfig != null
        ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
        : undefined,
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    OutputS3Region: __expectString(output.OutputS3Region),
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
    RequestedDateTime:
      output.RequestedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedDateTime)))
        : undefined,
    ServiceRole: __expectString(output.ServiceRole),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    TargetCount: __expectInt32(output.TargetCount),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CommandInvocation = (output: any, context: __SerdeContext): CommandInvocation => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    CommandId: __expectString(output.CommandId),
    CommandPlugins:
      output.CommandPlugins != null
        ? deserializeAws_json1_1CommandPluginList(output.CommandPlugins, context)
        : undefined,
    Comment: __expectString(output.Comment),
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    InstanceName: __expectString(output.InstanceName),
    NotificationConfig:
      output.NotificationConfig != null
        ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
        : undefined,
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

const deserializeAws_json1_1CommandInvocationList = (output: any, context: __SerdeContext): CommandInvocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommandInvocation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CommandList = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Command(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CommandPlugin = (output: any, context: __SerdeContext): CommandPlugin => {
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

const deserializeAws_json1_1CommandPluginList = (output: any, context: __SerdeContext): CommandPlugin[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommandPlugin(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceExecutionSummary = (
  output: any,
  context: __SerdeContext
): ComplianceExecutionSummary => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    ExecutionTime:
      output.ExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExecutionTime)))
        : undefined,
    ExecutionType: __expectString(output.ExecutionType),
  } as any;
};

const deserializeAws_json1_1ComplianceItem = (output: any, context: __SerdeContext): ComplianceItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    Details: output.Details != null ? deserializeAws_json1_1ComplianceItemDetails(output.Details, context) : undefined,
    ExecutionSummary:
      output.ExecutionSummary != null
        ? deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context)
        : undefined,
    Id: __expectString(output.Id),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_json1_1ComplianceItemDetails = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ComplianceItemList = (output: any, context: __SerdeContext): ComplianceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceSummaryItem = (output: any, context: __SerdeContext): ComplianceSummaryItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantSummary:
      output.CompliantSummary != null
        ? deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context)
        : undefined,
    NonCompliantSummary:
      output.NonCompliantSummary != null
        ? deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ComplianceSummaryItemList = (
  output: any,
  context: __SerdeContext
): ComplianceSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceSummaryItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceTypeCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): ComplianceTypeCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CompliantSummary = (output: any, context: __SerdeContext): CompliantSummary => {
  return {
    CompliantCount: __expectInt32(output.CompliantCount),
    SeveritySummary:
      output.SeveritySummary != null
        ? deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateActivationResult = (output: any, context: __SerdeContext): CreateActivationResult => {
  return {
    ActivationCode: __expectString(output.ActivationCode),
    ActivationId: __expectString(output.ActivationId),
  } as any;
};

const deserializeAws_json1_1CreateAssociationBatchRequestEntry = (
  output: any,
  context: __SerdeContext
): CreateAssociationBatchRequestEntry => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    ApplyOnlyAtCronInterval: __expectBoolean(output.ApplyOnlyAtCronInterval),
    AssociationName: __expectString(output.AssociationName),
    AutomationTargetParameterName: __expectString(output.AutomationTargetParameterName),
    CalendarNames:
      output.CalendarNames != null
        ? deserializeAws_json1_1CalendarNameOrARNList(output.CalendarNames, context)
        : undefined,
    ComplianceSeverity: __expectString(output.ComplianceSeverity),
    DocumentVersion: __expectString(output.DocumentVersion),
    InstanceId: __expectString(output.InstanceId),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    OutputLocation:
      output.OutputLocation != null
        ? deserializeAws_json1_1InstanceAssociationOutputLocation(output.OutputLocation, context)
        : undefined,
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
    ScheduleExpression: __expectString(output.ScheduleExpression),
    ScheduleOffset: __expectInt32(output.ScheduleOffset),
    SyncCompliance: __expectString(output.SyncCompliance),
    TargetLocations:
      output.TargetLocations != null
        ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
        : undefined,
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateAssociationBatchResult = (
  output: any,
  context: __SerdeContext
): CreateAssociationBatchResult => {
  return {
    Failed:
      output.Failed != null ? deserializeAws_json1_1FailedCreateAssociationList(output.Failed, context) : undefined,
    Successful:
      output.Successful != null
        ? deserializeAws_json1_1AssociationDescriptionList(output.Successful, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateAssociationResult = (
  output: any,
  context: __SerdeContext
): CreateAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDocumentResult = (output: any, context: __SerdeContext): CreateDocumentResult => {
  return {
    DocumentDescription:
      output.DocumentDescription != null
        ? deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): CreateMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
  } as any;
};

const deserializeAws_json1_1CreateOpsItemResponse = (output: any, context: __SerdeContext): CreateOpsItemResponse => {
  return {
    OpsItemArn: __expectString(output.OpsItemArn),
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

const deserializeAws_json1_1CreateOpsMetadataResult = (
  output: any,
  context: __SerdeContext
): CreateOpsMetadataResult => {
  return {
    OpsMetadataArn: __expectString(output.OpsMetadataArn),
  } as any;
};

const deserializeAws_json1_1CreatePatchBaselineResult = (
  output: any,
  context: __SerdeContext
): CreatePatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

const deserializeAws_json1_1CreateResourceDataSyncResult = (
  output: any,
  context: __SerdeContext
): CreateResourceDataSyncResult => {
  return {} as any;
};

const deserializeAws_json1_1CustomSchemaCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): CustomSchemaCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeleteActivationResult = (output: any, context: __SerdeContext): DeleteActivationResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAssociationResult = (
  output: any,
  context: __SerdeContext
): DeleteAssociationResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDocumentResult = (output: any, context: __SerdeContext): DeleteDocumentResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteInventoryResult = (output: any, context: __SerdeContext): DeleteInventoryResult => {
  return {
    DeletionId: __expectString(output.DeletionId),
    DeletionSummary:
      output.DeletionSummary != null
        ? deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1DeleteMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): DeleteMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
  } as any;
};

const deserializeAws_json1_1DeleteOpsMetadataResult = (
  output: any,
  context: __SerdeContext
): DeleteOpsMetadataResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteParameterResult = (output: any, context: __SerdeContext): DeleteParameterResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteParametersResult = (output: any, context: __SerdeContext): DeleteParametersResult => {
  return {
    DeletedParameters:
      output.DeletedParameters != null
        ? deserializeAws_json1_1ParameterNameList(output.DeletedParameters, context)
        : undefined,
    InvalidParameters:
      output.InvalidParameters != null
        ? deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeletePatchBaselineResult = (
  output: any,
  context: __SerdeContext
): DeletePatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

const deserializeAws_json1_1DeleteResourceDataSyncResult = (
  output: any,
  context: __SerdeContext
): DeleteResourceDataSyncResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterManagedInstanceResult = (
  output: any,
  context: __SerdeContext
): DeregisterManagedInstanceResult => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): DeregisterPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

const deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): DeregisterTargetFromMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

const deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): DeregisterTaskFromMaintenanceWindowResult => {
  return {
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

const deserializeAws_json1_1DescribeActivationsResult = (
  output: any,
  context: __SerdeContext
): DescribeActivationsResult => {
  return {
    ActivationList:
      output.ActivationList != null ? deserializeAws_json1_1ActivationList(output.ActivationList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAssociationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionsResult => {
  return {
    AssociationExecutions:
      output.AssociationExecutions != null
        ? deserializeAws_json1_1AssociationExecutionsList(output.AssociationExecutions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAssociationExecutionTargetsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionTargetsResult => {
  return {
    AssociationExecutionTargets:
      output.AssociationExecutionTargets != null
        ? deserializeAws_json1_1AssociationExecutionTargetsList(output.AssociationExecutionTargets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAssociationResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAutomationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationExecutionsResult => {
  return {
    AutomationExecutionMetadataList:
      output.AutomationExecutionMetadataList != null
        ? deserializeAws_json1_1AutomationExecutionMetadataList(output.AutomationExecutionMetadataList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAutomationStepExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationStepExecutionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    StepExecutions:
      output.StepExecutions != null
        ? deserializeAws_json1_1StepExecutionList(output.StepExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAvailablePatchesResult = (
  output: any,
  context: __SerdeContext
): DescribeAvailablePatchesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Patches: output.Patches != null ? deserializeAws_json1_1PatchList(output.Patches, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDocumentPermissionResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentPermissionResponse => {
  return {
    AccountIds: output.AccountIds != null ? deserializeAws_json1_1AccountIdList(output.AccountIds, context) : undefined,
    AccountSharingInfoList:
      output.AccountSharingInfoList != null
        ? deserializeAws_json1_1AccountSharingInfoList(output.AccountSharingInfoList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDocumentResult = (output: any, context: __SerdeContext): DescribeDocumentResult => {
  return {
    Document: output.Document != null ? deserializeAws_json1_1DocumentDescription(output.Document, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEffectiveInstanceAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeEffectiveInstanceAssociationsResult => {
  return {
    Associations:
      output.Associations != null
        ? deserializeAws_json1_1InstanceAssociationList(output.Associations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): DescribeEffectivePatchesForPatchBaselineResult => {
  return {
    EffectivePatches:
      output.EffectivePatches != null
        ? deserializeAws_json1_1EffectivePatchList(output.EffectivePatches, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstanceAssociationsStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceAssociationsStatusResult => {
  return {
    InstanceAssociationStatusInfos:
      output.InstanceAssociationStatusInfos != null
        ? deserializeAws_json1_1InstanceAssociationStatusInfos(output.InstanceAssociationStatusInfos, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstanceInformationResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceInformationResult => {
  return {
    InstanceInformationList:
      output.InstanceInformationList != null
        ? deserializeAws_json1_1InstanceInformationList(output.InstanceInformationList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstancePatchesResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Patches:
      output.Patches != null ? deserializeAws_json1_1PatchComplianceDataList(output.Patches, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesForPatchGroupResult => {
  return {
    InstancePatchStates:
      output.InstancePatchStates != null
        ? deserializeAws_json1_1InstancePatchStatesList(output.InstancePatchStates, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstancePatchStatesResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesResult => {
  return {
    InstancePatchStates:
      output.InstancePatchStates != null
        ? deserializeAws_json1_1InstancePatchStateList(output.InstancePatchStates, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInventoryDeletionsResult = (
  output: any,
  context: __SerdeContext
): DescribeInventoryDeletionsResult => {
  return {
    InventoryDeletions:
      output.InventoryDeletions != null
        ? deserializeAws_json1_1InventoryDeletionsList(output.InventoryDeletions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutions:
      output.WindowExecutions != null
        ? deserializeAws_json1_1MaintenanceWindowExecutionList(output.WindowExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTaskInvocationsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutionTaskInvocationIdentities:
      output.WindowExecutionTaskInvocationIdentities != null
        ? deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList(
            output.WindowExecutionTaskInvocationIdentities,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTasksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowExecutionTaskIdentities:
      output.WindowExecutionTaskIdentities != null
        ? deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList(
            output.WindowExecutionTaskIdentities,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowScheduleResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowScheduleResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledWindowExecutions:
      output.ScheduledWindowExecutions != null
        ? deserializeAws_json1_1ScheduledWindowExecutionList(output.ScheduledWindowExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowsForTargetResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowsForTargetResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowIdentities:
      output.WindowIdentities != null
        ? deserializeAws_json1_1MaintenanceWindowsForTargetList(output.WindowIdentities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WindowIdentities:
      output.WindowIdentities != null
        ? deserializeAws_json1_1MaintenanceWindowIdentityList(output.WindowIdentities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowTargetsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowTargetsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets:
      output.Targets != null ? deserializeAws_json1_1MaintenanceWindowTargetList(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceWindowTasksResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowTasksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tasks: output.Tasks != null ? deserializeAws_json1_1MaintenanceWindowTaskList(output.Tasks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOpsItemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeOpsItemsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OpsItemSummaries:
      output.OpsItemSummaries != null
        ? deserializeAws_json1_1OpsItemSummaries(output.OpsItemSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeParametersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1ParameterMetadataList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePatchBaselinesResult = (
  output: any,
  context: __SerdeContext
): DescribePatchBaselinesResult => {
  return {
    BaselineIdentities:
      output.BaselineIdentities != null
        ? deserializeAws_json1_1PatchBaselineIdentityList(output.BaselineIdentities, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribePatchGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribePatchGroupsResult => {
  return {
    Mappings:
      output.Mappings != null
        ? deserializeAws_json1_1PatchGroupPatchBaselineMappingList(output.Mappings, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribePatchGroupStateResult = (
  output: any,
  context: __SerdeContext
): DescribePatchGroupStateResult => {
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

const deserializeAws_json1_1DescribePatchPropertiesResult = (
  output: any,
  context: __SerdeContext
): DescribePatchPropertiesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Properties:
      output.Properties != null ? deserializeAws_json1_1PatchPropertiesList(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSessionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? deserializeAws_json1_1SessionList(output.Sessions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateOpsItemRelatedItemResponse = (
  output: any,
  context: __SerdeContext
): DisassociateOpsItemRelatedItemResponse => {
  return {} as any;
};

const deserializeAws_json1_1DocumentAlreadyExists = (output: any, context: __SerdeContext): DocumentAlreadyExists => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DocumentDefaultVersionDescription = (
  output: any,
  context: __SerdeContext
): DocumentDefaultVersionDescription => {
  return {
    DefaultVersion: __expectString(output.DefaultVersion),
    DefaultVersionName: __expectString(output.DefaultVersionName),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DocumentDescription = (output: any, context: __SerdeContext): DocumentDescription => {
  return {
    ApprovedVersion: __expectString(output.ApprovedVersion),
    AttachmentsInformation:
      output.AttachmentsInformation != null
        ? deserializeAws_json1_1AttachmentInformationList(output.AttachmentsInformation, context)
        : undefined,
    Author: __expectString(output.Author),
    Category: output.Category != null ? deserializeAws_json1_1CategoryList(output.Category, context) : undefined,
    CategoryEnum:
      output.CategoryEnum != null ? deserializeAws_json1_1CategoryEnumList(output.CategoryEnum, context) : undefined,
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
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1DocumentParameterList(output.Parameters, context) : undefined,
    PendingReviewVersion: __expectString(output.PendingReviewVersion),
    PlatformTypes:
      output.PlatformTypes != null ? deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context) : undefined,
    Requires:
      output.Requires != null ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context) : undefined,
    ReviewInformation:
      output.ReviewInformation != null
        ? deserializeAws_json1_1ReviewInformationList(output.ReviewInformation, context)
        : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    SchemaVersion: __expectString(output.SchemaVersion),
    Sha1: __expectString(output.Sha1),
    Status: __expectString(output.Status),
    StatusInformation: __expectString(output.StatusInformation),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    TargetType: __expectString(output.TargetType),
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_json1_1DocumentIdentifier = (output: any, context: __SerdeContext): DocumentIdentifier => {
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
    PlatformTypes:
      output.PlatformTypes != null ? deserializeAws_json1_1PlatformTypeList(output.PlatformTypes, context) : undefined,
    Requires:
      output.Requires != null ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    SchemaVersion: __expectString(output.SchemaVersion),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    TargetType: __expectString(output.TargetType),
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_json1_1DocumentIdentifierList = (output: any, context: __SerdeContext): DocumentIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentLimitExceeded = (output: any, context: __SerdeContext): DocumentLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DocumentMetadataResponseInfo = (
  output: any,
  context: __SerdeContext
): DocumentMetadataResponseInfo => {
  return {
    ReviewerResponse:
      output.ReviewerResponse != null
        ? deserializeAws_json1_1DocumentReviewerResponseList(output.ReviewerResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentParameter = (output: any, context: __SerdeContext): DocumentParameter => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DocumentParameterList = (output: any, context: __SerdeContext): DocumentParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentPermissionLimit = (
  output: any,
  context: __SerdeContext
): DocumentPermissionLimit => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DocumentRequires = (output: any, context: __SerdeContext): DocumentRequires => {
  return {
    Name: __expectString(output.Name),
    RequireType: __expectString(output.RequireType),
    Version: __expectString(output.Version),
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_json1_1DocumentRequiresList = (output: any, context: __SerdeContext): DocumentRequires[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentRequires(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentReviewCommentList = (
  output: any,
  context: __SerdeContext
): DocumentReviewCommentSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentReviewCommentSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentReviewCommentSource = (
  output: any,
  context: __SerdeContext
): DocumentReviewCommentSource => {
  return {
    Content: __expectString(output.Content),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DocumentReviewerResponseList = (
  output: any,
  context: __SerdeContext
): DocumentReviewerResponseSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentReviewerResponseSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentReviewerResponseSource = (
  output: any,
  context: __SerdeContext
): DocumentReviewerResponseSource => {
  return {
    Comment:
      output.Comment != null ? deserializeAws_json1_1DocumentReviewCommentList(output.Comment, context) : undefined,
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

const deserializeAws_json1_1DocumentVersionInfo = (output: any, context: __SerdeContext): DocumentVersionInfo => {
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

const deserializeAws_json1_1DocumentVersionLimitExceeded = (
  output: any,
  context: __SerdeContext
): DocumentVersionLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DocumentVersionList = (output: any, context: __SerdeContext): DocumentVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentVersionInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DoesNotExistException = (output: any, context: __SerdeContext): DoesNotExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicateDocumentContent = (
  output: any,
  context: __SerdeContext
): DuplicateDocumentContent => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicateDocumentVersionName = (
  output: any,
  context: __SerdeContext
): DuplicateDocumentVersionName => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicateInstanceId = (output: any, context: __SerdeContext): DuplicateInstanceId => {
  return {} as any;
};

const deserializeAws_json1_1EffectivePatch = (output: any, context: __SerdeContext): EffectivePatch => {
  return {
    Patch: output.Patch != null ? deserializeAws_json1_1Patch(output.Patch, context) : undefined,
    PatchStatus:
      output.PatchStatus != null ? deserializeAws_json1_1PatchStatus(output.PatchStatus, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EffectivePatchList = (output: any, context: __SerdeContext): EffectivePatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EffectivePatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedCreateAssociation = (
  output: any,
  context: __SerdeContext
): FailedCreateAssociation => {
  return {
    Entry:
      output.Entry != null
        ? deserializeAws_json1_1CreateAssociationBatchRequestEntry(output.Entry, context)
        : undefined,
    Fault: __expectString(output.Fault),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FailedCreateAssociationList = (
  output: any,
  context: __SerdeContext
): FailedCreateAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedCreateAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    Details: output.Details != null ? deserializeAws_json1_1AutomationParameterMap(output.Details, context) : undefined,
    FailureStage: __expectString(output.FailureStage),
    FailureType: __expectString(output.FailureType),
  } as any;
};

const deserializeAws_json1_1FeatureNotAvailableException = (
  output: any,
  context: __SerdeContext
): FeatureNotAvailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetAutomationExecutionResult = (
  output: any,
  context: __SerdeContext
): GetAutomationExecutionResult => {
  return {
    AutomationExecution:
      output.AutomationExecution != null
        ? deserializeAws_json1_1AutomationExecution(output.AutomationExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCalendarStateResponse = (
  output: any,
  context: __SerdeContext
): GetCalendarStateResponse => {
  return {
    AtTime: __expectString(output.AtTime),
    NextTransitionTime: __expectString(output.NextTransitionTime),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1GetCommandInvocationResult = (
  output: any,
  context: __SerdeContext
): GetCommandInvocationResult => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
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

const deserializeAws_json1_1GetConnectionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetConnectionStatusResponse => {
  return {
    Status: __expectString(output.Status),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_json1_1GetDefaultPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): GetDefaultPatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

const deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceResult = (
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

const deserializeAws_json1_1GetDocumentResult = (output: any, context: __SerdeContext): GetDocumentResult => {
  return {
    AttachmentsContent:
      output.AttachmentsContent != null
        ? deserializeAws_json1_1AttachmentContentList(output.AttachmentsContent, context)
        : undefined,
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
    Requires:
      output.Requires != null ? deserializeAws_json1_1DocumentRequiresList(output.Requires, context) : undefined,
    ReviewStatus: __expectString(output.ReviewStatus),
    Status: __expectString(output.Status),
    StatusInformation: __expectString(output.StatusInformation),
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_json1_1GetInventoryResult = (output: any, context: __SerdeContext): GetInventoryResult => {
  return {
    Entities:
      output.Entities != null ? deserializeAws_json1_1InventoryResultEntityList(output.Entities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetInventorySchemaResult = (
  output: any,
  context: __SerdeContext
): GetInventorySchemaResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas:
      output.Schemas != null ? deserializeAws_json1_1InventoryItemSchemaResultList(output.Schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetMaintenanceWindowExecutionResult = (
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
    TaskIds:
      output.TaskIds != null
        ? deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList(output.TaskIds, context)
        : undefined,
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult = (
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

const deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
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
        ? deserializeAws_json1_1MaintenanceWindowTaskParametersList(output.TaskParameters, context)
        : undefined,
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
    Type: __expectString(output.Type),
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

const deserializeAws_json1_1GetMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowResult => {
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

const deserializeAws_json1_1GetMaintenanceWindowTaskResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo:
      output.LoggingInfo != null ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskInvocationParameters:
      output.TaskInvocationParameters != null
        ? deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
        : undefined,
    TaskParameters:
      output.TaskParameters != null
        ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
        : undefined,
    TaskType: __expectString(output.TaskType),
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

const deserializeAws_json1_1GetOpsItemResponse = (output: any, context: __SerdeContext): GetOpsItemResponse => {
  return {
    OpsItem: output.OpsItem != null ? deserializeAws_json1_1OpsItem(output.OpsItem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetOpsMetadataResult = (output: any, context: __SerdeContext): GetOpsMetadataResult => {
  return {
    Metadata: output.Metadata != null ? deserializeAws_json1_1MetadataMap(output.Metadata, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1GetOpsSummaryResult = (output: any, context: __SerdeContext): GetOpsSummaryResult => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1OpsEntityList(output.Entities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetParameterHistoryResult = (
  output: any,
  context: __SerdeContext
): GetParameterHistoryResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1ParameterHistoryList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetParameterResult = (output: any, context: __SerdeContext): GetParameterResult => {
  return {
    Parameter: output.Parameter != null ? deserializeAws_json1_1Parameter(output.Parameter, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetParametersByPathResult = (
  output: any,
  context: __SerdeContext
): GetParametersByPathResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParameterList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetParametersResult = (output: any, context: __SerdeContext): GetParametersResult => {
  return {
    InvalidParameters:
      output.InvalidParameters != null
        ? deserializeAws_json1_1ParameterNameList(output.InvalidParameters, context)
        : undefined,
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParameterList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): GetPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    OperatingSystem: __expectString(output.OperatingSystem),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

const deserializeAws_json1_1GetPatchBaselineResult = (output: any, context: __SerdeContext): GetPatchBaselineResult => {
  return {
    ApprovalRules:
      output.ApprovalRules != null ? deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context) : undefined,
    ApprovedPatches:
      output.ApprovedPatches != null ? deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context) : undefined,
    ApprovedPatchesComplianceLevel: __expectString(output.ApprovedPatchesComplianceLevel),
    ApprovedPatchesEnableNonSecurity: __expectBoolean(output.ApprovedPatchesEnableNonSecurity),
    BaselineId: __expectString(output.BaselineId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalFilters:
      output.GlobalFilters != null ? deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context) : undefined,
    ModifiedDate:
      output.ModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    PatchGroups:
      output.PatchGroups != null ? deserializeAws_json1_1PatchGroupList(output.PatchGroups, context) : undefined,
    RejectedPatches:
      output.RejectedPatches != null ? deserializeAws_json1_1PatchIdList(output.RejectedPatches, context) : undefined,
    RejectedPatchesAction: __expectString(output.RejectedPatchesAction),
    Sources: output.Sources != null ? deserializeAws_json1_1PatchSourceList(output.Sources, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies:
      output.Policies != null
        ? deserializeAws_json1_1GetResourcePoliciesResponseEntries(output.Policies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponseEntries = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GetResourcePoliciesResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetResourcePoliciesResponseEntry = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponseEntry => {
  return {
    Policy: __expectString(output.Policy),
    PolicyHash: __expectString(output.PolicyHash),
    PolicyId: __expectString(output.PolicyId),
  } as any;
};

const deserializeAws_json1_1GetServiceSettingResult = (
  output: any,
  context: __SerdeContext
): GetServiceSettingResult => {
  return {
    ServiceSetting:
      output.ServiceSetting != null ? deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HierarchyLevelLimitExceededException = (
  output: any,
  context: __SerdeContext
): HierarchyLevelLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1HierarchyTypeMismatchException = (
  output: any,
  context: __SerdeContext
): HierarchyTypeMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatch = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatch => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IncompatiblePolicyException = (
  output: any,
  context: __SerdeContext
): IncompatiblePolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceAggregatedAssociationOverview = (
  output: any,
  context: __SerdeContext
): InstanceAggregatedAssociationOverview => {
  return {
    DetailedStatus: __expectString(output.DetailedStatus),
    InstanceAssociationStatusAggregatedCount:
      output.InstanceAssociationStatusAggregatedCount != null
        ? deserializeAws_json1_1InstanceAssociationStatusAggregatedCount(
            output.InstanceAssociationStatusAggregatedCount,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceAssociation = (output: any, context: __SerdeContext): InstanceAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationVersion: __expectString(output.AssociationVersion),
    Content: __expectString(output.Content),
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_json1_1InstanceAssociationList = (output: any, context: __SerdeContext): InstanceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceAssociationOutputLocation = (
  output: any,
  context: __SerdeContext
): InstanceAssociationOutputLocation => {
  return {
    S3Location:
      output.S3Location != null ? deserializeAws_json1_1S3OutputLocation(output.S3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceAssociationOutputUrl = (
  output: any,
  context: __SerdeContext
): InstanceAssociationOutputUrl => {
  return {
    S3OutputUrl:
      output.S3OutputUrl != null ? deserializeAws_json1_1S3OutputUrl(output.S3OutputUrl, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceAssociationStatusAggregatedCount = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1InstanceAssociationStatusInfo = (
  output: any,
  context: __SerdeContext
): InstanceAssociationStatusInfo => {
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
    OutputUrl:
      output.OutputUrl != null
        ? deserializeAws_json1_1InstanceAssociationOutputUrl(output.OutputUrl, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1InstanceAssociationStatusInfos = (
  output: any,
  context: __SerdeContext
): InstanceAssociationStatusInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceAssociationStatusInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InstanceInformation = (output: any, context: __SerdeContext): InstanceInformation => {
  return {
    ActivationId: __expectString(output.ActivationId),
    AgentVersion: __expectString(output.AgentVersion),
    AssociationOverview:
      output.AssociationOverview != null
        ? deserializeAws_json1_1InstanceAggregatedAssociationOverview(output.AssociationOverview, context)
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

const deserializeAws_json1_1InstanceInformationList = (output: any, context: __SerdeContext): InstanceInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstancePatchState = (output: any, context: __SerdeContext): InstancePatchState => {
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

const deserializeAws_json1_1InstancePatchStateList = (output: any, context: __SerdeContext): InstancePatchState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstancePatchState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstancePatchStatesList = (output: any, context: __SerdeContext): InstancePatchState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstancePatchState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidActivation = (output: any, context: __SerdeContext): InvalidActivation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidActivationId = (output: any, context: __SerdeContext): InvalidActivationId => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAggregatorException = (
  output: any,
  context: __SerdeContext
): InvalidAggregatorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAllowedPatternException = (
  output: any,
  context: __SerdeContext
): InvalidAllowedPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidAssociation = (output: any, context: __SerdeContext): InvalidAssociation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAssociationVersion = (
  output: any,
  context: __SerdeContext
): InvalidAssociationVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAutomationExecutionParametersException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationExecutionParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAutomationSignalException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationSignalException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAutomationStatusUpdateException = (
  output: any,
  context: __SerdeContext
): InvalidAutomationStatusUpdateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidCommandId = (output: any, context: __SerdeContext): InvalidCommandId => {
  return {} as any;
};

const deserializeAws_json1_1InvalidDeleteInventoryParametersException = (
  output: any,
  context: __SerdeContext
): InvalidDeleteInventoryParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDeletionIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeletionIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocument = (output: any, context: __SerdeContext): InvalidDocument => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocumentContent = (output: any, context: __SerdeContext): InvalidDocumentContent => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocumentOperation = (
  output: any,
  context: __SerdeContext
): InvalidDocumentOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocumentSchemaVersion = (
  output: any,
  context: __SerdeContext
): InvalidDocumentSchemaVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocumentType = (output: any, context: __SerdeContext): InvalidDocumentType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDocumentVersion = (output: any, context: __SerdeContext): InvalidDocumentVersion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFilter = (output: any, context: __SerdeContext): InvalidFilter => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFilterKey = (output: any, context: __SerdeContext): InvalidFilterKey => {
  return {} as any;
};

const deserializeAws_json1_1InvalidFilterOption = (output: any, context: __SerdeContext): InvalidFilterOption => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidFilterValue = (output: any, context: __SerdeContext): InvalidFilterValue => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInstanceId = (output: any, context: __SerdeContext): InvalidInstanceId => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInstanceInformationFilterValue = (
  output: any,
  context: __SerdeContext
): InvalidInstanceInformationFilterValue => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInventoryGroupException = (
  output: any,
  context: __SerdeContext
): InvalidInventoryGroupException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInventoryItemContextException = (
  output: any,
  context: __SerdeContext
): InvalidInventoryItemContextException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInventoryRequestException = (
  output: any,
  context: __SerdeContext
): InvalidInventoryRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidItemContentException = (
  output: any,
  context: __SerdeContext
): InvalidItemContentException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1InvalidKeyId = (output: any, context: __SerdeContext): InvalidKeyId => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNotificationConfig = (
  output: any,
  context: __SerdeContext
): InvalidNotificationConfig => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidOptionException = (output: any, context: __SerdeContext): InvalidOptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidOutputFolder = (output: any, context: __SerdeContext): InvalidOutputFolder => {
  return {} as any;
};

const deserializeAws_json1_1InvalidOutputLocation = (output: any, context: __SerdeContext): InvalidOutputLocation => {
  return {} as any;
};

const deserializeAws_json1_1InvalidParameters = (output: any, context: __SerdeContext): InvalidParameters => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPermissionType = (output: any, context: __SerdeContext): InvalidPermissionType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPluginName = (output: any, context: __SerdeContext): InvalidPluginName => {
  return {} as any;
};

const deserializeAws_json1_1InvalidPolicyAttributeException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyAttributeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPolicyTypeException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceId = (output: any, context: __SerdeContext): InvalidResourceId => {
  return {} as any;
};

const deserializeAws_json1_1InvalidResourceType = (output: any, context: __SerdeContext): InvalidResourceType => {
  return {} as any;
};

const deserializeAws_json1_1InvalidResultAttributeException = (
  output: any,
  context: __SerdeContext
): InvalidResultAttributeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRole = (output: any, context: __SerdeContext): InvalidRole => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidSchedule = (output: any, context: __SerdeContext): InvalidSchedule => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTag = (output: any, context: __SerdeContext): InvalidTag => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTarget = (output: any, context: __SerdeContext): InvalidTarget => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetMaps = (output: any, context: __SerdeContext): InvalidTargetMaps => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTypeNameException = (
  output: any,
  context: __SerdeContext
): InvalidTypeNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidUpdate = (output: any, context: __SerdeContext): InvalidUpdate => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InventoryDeletionsList = (
  output: any,
  context: __SerdeContext
): InventoryDeletionStatusItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryDeletionStatusItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryDeletionStatusItem = (
  output: any,
  context: __SerdeContext
): InventoryDeletionStatusItem => {
  return {
    DeletionId: __expectString(output.DeletionId),
    DeletionStartTime:
      output.DeletionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionStartTime)))
        : undefined,
    DeletionSummary:
      output.DeletionSummary != null
        ? deserializeAws_json1_1InventoryDeletionSummary(output.DeletionSummary, context)
        : undefined,
    LastStatus: __expectString(output.LastStatus),
    LastStatusMessage: __expectString(output.LastStatusMessage),
    LastStatusUpdateTime:
      output.LastStatusUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStatusUpdateTime)))
        : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1InventoryDeletionSummary = (
  output: any,
  context: __SerdeContext
): InventoryDeletionSummary => {
  return {
    RemainingCount: __expectInt32(output.RemainingCount),
    SummaryItems:
      output.SummaryItems != null
        ? deserializeAws_json1_1InventoryDeletionSummaryItems(output.SummaryItems, context)
        : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1InventoryDeletionSummaryItem = (
  output: any,
  context: __SerdeContext
): InventoryDeletionSummaryItem => {
  return {
    Count: __expectInt32(output.Count),
    RemainingCount: __expectInt32(output.RemainingCount),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1InventoryDeletionSummaryItems = (
  output: any,
  context: __SerdeContext
): InventoryDeletionSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryDeletionSummaryItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryItemAttribute = (output: any, context: __SerdeContext): InventoryItemAttribute => {
  return {
    DataType: __expectString(output.DataType),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1InventoryItemAttributeList = (
  output: any,
  context: __SerdeContext
): InventoryItemAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryItemAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryItemEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1InventoryItemEntryList = (
  output: any,
  context: __SerdeContext
): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryItemEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryItemSchema = (output: any, context: __SerdeContext): InventoryItemSchema => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_json1_1InventoryItemAttributeList(output.Attributes, context)
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    TypeName: __expectString(output.TypeName),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1InventoryItemSchemaResultList = (
  output: any,
  context: __SerdeContext
): InventoryItemSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryItemSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryResultEntity = (output: any, context: __SerdeContext): InventoryResultEntity => {
  return {
    Data: output.Data != null ? deserializeAws_json1_1InventoryResultItemMap(output.Data, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1InventoryResultEntityList = (
  output: any,
  context: __SerdeContext
): InventoryResultEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InventoryResultEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InventoryResultItem = (output: any, context: __SerdeContext): InventoryResultItem => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Content: output.Content != null ? deserializeAws_json1_1InventoryItemEntryList(output.Content, context) : undefined,
    ContentHash: __expectString(output.ContentHash),
    SchemaVersion: __expectString(output.SchemaVersion),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1InventoryResultItemMap = (
  output: any,
  context: __SerdeContext
): Record<string, InventoryResultItem> => {
  return Object.entries(output).reduce((acc: Record<string, InventoryResultItem>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1InventoryResultItem(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1InvocationDoesNotExist = (output: any, context: __SerdeContext): InvocationDoesNotExist => {
  return {} as any;
};

const deserializeAws_json1_1ItemContentMismatchException = (
  output: any,
  context: __SerdeContext
): ItemContentMismatchException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1ItemSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): ItemSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1LabelParameterVersionResult = (
  output: any,
  context: __SerdeContext
): LabelParameterVersionResult => {
  return {
    InvalidLabels:
      output.InvalidLabels != null
        ? deserializeAws_json1_1ParameterLabelList(output.InvalidLabels, context)
        : undefined,
    ParameterVersion: __expectLong(output.ParameterVersion),
  } as any;
};

const deserializeAws_json1_1ListAssociationsResult = (output: any, context: __SerdeContext): ListAssociationsResult => {
  return {
    Associations:
      output.Associations != null ? deserializeAws_json1_1AssociationList(output.Associations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAssociationVersionsResult = (
  output: any,
  context: __SerdeContext
): ListAssociationVersionsResult => {
  return {
    AssociationVersions:
      output.AssociationVersions != null
        ? deserializeAws_json1_1AssociationVersionList(output.AssociationVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCommandInvocationsResult = (
  output: any,
  context: __SerdeContext
): ListCommandInvocationsResult => {
  return {
    CommandInvocations:
      output.CommandInvocations != null
        ? deserializeAws_json1_1CommandInvocationList(output.CommandInvocations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCommandsResult = (output: any, context: __SerdeContext): ListCommandsResult => {
  return {
    Commands: output.Commands != null ? deserializeAws_json1_1CommandList(output.Commands, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListComplianceItemsResult = (
  output: any,
  context: __SerdeContext
): ListComplianceItemsResult => {
  return {
    ComplianceItems:
      output.ComplianceItems != null
        ? deserializeAws_json1_1ComplianceItemList(output.ComplianceItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListComplianceSummariesResult = (
  output: any,
  context: __SerdeContext
): ListComplianceSummariesResult => {
  return {
    ComplianceSummaryItems:
      output.ComplianceSummaryItems != null
        ? deserializeAws_json1_1ComplianceSummaryItemList(output.ComplianceSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDocumentMetadataHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentMetadataHistoryResponse => {
  return {
    Author: __expectString(output.Author),
    DocumentVersion: __expectString(output.DocumentVersion),
    Metadata:
      output.Metadata != null
        ? deserializeAws_json1_1DocumentMetadataResponseInfo(output.Metadata, context)
        : undefined,
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDocumentsResult = (output: any, context: __SerdeContext): ListDocumentsResult => {
  return {
    DocumentIdentifiers:
      output.DocumentIdentifiers != null
        ? deserializeAws_json1_1DocumentIdentifierList(output.DocumentIdentifiers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDocumentVersionsResult = (
  output: any,
  context: __SerdeContext
): ListDocumentVersionsResult => {
  return {
    DocumentVersions:
      output.DocumentVersions != null
        ? deserializeAws_json1_1DocumentVersionList(output.DocumentVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListInventoryEntriesResult = (
  output: any,
  context: __SerdeContext
): ListInventoryEntriesResult => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Entries: output.Entries != null ? deserializeAws_json1_1InventoryItemEntryList(output.Entries, context) : undefined,
    InstanceId: __expectString(output.InstanceId),
    NextToken: __expectString(output.NextToken),
    SchemaVersion: __expectString(output.SchemaVersion),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1ListOpsItemEventsResponse = (
  output: any,
  context: __SerdeContext
): ListOpsItemEventsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Summaries:
      output.Summaries != null ? deserializeAws_json1_1OpsItemEventSummaries(output.Summaries, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListOpsItemRelatedItemsResponse = (
  output: any,
  context: __SerdeContext
): ListOpsItemRelatedItemsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Summaries:
      output.Summaries != null
        ? deserializeAws_json1_1OpsItemRelatedItemSummaries(output.Summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOpsMetadataResult = (output: any, context: __SerdeContext): ListOpsMetadataResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OpsMetadataList:
      output.OpsMetadataList != null
        ? deserializeAws_json1_1OpsMetadataList(output.OpsMetadataList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceComplianceSummariesResult = (
  output: any,
  context: __SerdeContext
): ListResourceComplianceSummariesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceComplianceSummaryItems:
      output.ResourceComplianceSummaryItems != null
        ? deserializeAws_json1_1ResourceComplianceSummaryItemList(output.ResourceComplianceSummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceDataSyncResult = (
  output: any,
  context: __SerdeContext
): ListResourceDataSyncResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceDataSyncItems:
      output.ResourceDataSyncItems != null
        ? deserializeAws_json1_1ResourceDataSyncItemList(output.ResourceDataSyncItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResult = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResult => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoggingInfo = (output: any, context: __SerdeContext): LoggingInfo => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    S3Region: __expectString(output.S3Region),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowAutomationParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowAutomationParameters => {
  return {
    DocumentVersion: __expectString(output.DocumentVersion),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowExecution = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecution => {
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

const deserializeAws_json1_1MaintenanceWindowExecutionList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskIdentity => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
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
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
    WindowExecutionId: __expectString(output.WindowExecutionId),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentityList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowExecutionTaskIdentity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowExecutionTaskIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity = (
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

const deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentityList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskInvocationIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowIdentity = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentity => {
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

const deserializeAws_json1_1MaintenanceWindowIdentityForTarget = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentityForTarget => {
  return {
    Name: __expectString(output.Name),
    WindowId: __expectString(output.WindowId),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowIdentityList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowIdentity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowLambdaParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowLambdaParameters => {
  return {
    ClientContext: __expectString(output.ClientContext),
    Payload: output.Payload != null ? context.base64Decoder(output.Payload) : undefined,
    Qualifier: __expectString(output.Qualifier),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowRunCommandParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowRunCommandParameters => {
  return {
    CloudWatchOutputConfig:
      output.CloudWatchOutputConfig != null
        ? deserializeAws_json1_1CloudWatchOutputConfig(output.CloudWatchOutputConfig, context)
        : undefined,
    Comment: __expectString(output.Comment),
    DocumentHash: __expectString(output.DocumentHash),
    DocumentHashType: __expectString(output.DocumentHashType),
    DocumentVersion: __expectString(output.DocumentVersion),
    NotificationConfig:
      output.NotificationConfig != null
        ? deserializeAws_json1_1NotificationConfig(output.NotificationConfig, context)
        : undefined,
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowsForTargetList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowIdentityForTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowIdentityForTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowStepFunctionsParameters => {
  return {
    Input: __expectString(output.Input),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowTarget = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTarget => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    OwnerInformation: __expectString(output.OwnerInformation),
    ResourceType: __expectString(output.ResourceType),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowTargetList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowTask = (output: any, context: __SerdeContext): MaintenanceWindowTask => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo:
      output.LoggingInfo != null ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskParameters:
      output.TaskParameters != null
        ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
        : undefined,
    Type: __expectString(output.Type),
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTaskInvocationParameters => {
  return {
    Automation:
      output.Automation != null
        ? deserializeAws_json1_1MaintenanceWindowAutomationParameters(output.Automation, context)
        : undefined,
    Lambda:
      output.Lambda != null
        ? deserializeAws_json1_1MaintenanceWindowLambdaParameters(output.Lambda, context)
        : undefined,
    RunCommand:
      output.RunCommand != null
        ? deserializeAws_json1_1MaintenanceWindowRunCommandParameters(output.RunCommand, context)
        : undefined,
    StepFunctions:
      output.StepFunctions != null
        ? deserializeAws_json1_1MaintenanceWindowStepFunctionsParameters(output.StepFunctions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowTaskList = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowTaskParameters = (
  output: any,
  context: __SerdeContext
): Record<string, MaintenanceWindowTaskParameterValueExpression> => {
  return Object.entries(output).reduce(
    (acc: Record<string, MaintenanceWindowTaskParameterValueExpression>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1MaintenanceWindowTaskParametersList = (
  output: any,
  context: __SerdeContext
): Record<string, MaintenanceWindowTaskParameterValueExpression>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MaintenanceWindowTaskParameters(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaintenanceWindowTaskParameterValueExpression = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTaskParameterValueExpression => {
  return {
    Values:
      output.Values != null
        ? deserializeAws_json1_1MaintenanceWindowTaskParameterValueList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MaintenanceWindowTaskParameterValueList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1MaxDocumentSizeExceeded = (
  output: any,
  context: __SerdeContext
): MaxDocumentSizeExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MetadataMap = (output: any, context: __SerdeContext): Record<string, MetadataValue> => {
  return Object.entries(output).reduce((acc: Record<string, MetadataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1MetadataValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MetadataValue = (output: any, context: __SerdeContext): MetadataValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ModifyDocumentPermissionResponse = (
  output: any,
  context: __SerdeContext
): ModifyDocumentPermissionResponse => {
  return {} as any;
};

const deserializeAws_json1_1NonCompliantSummary = (output: any, context: __SerdeContext): NonCompliantSummary => {
  return {
    NonCompliantCount: __expectInt32(output.NonCompliantCount),
    SeveritySummary:
      output.SeveritySummary != null
        ? deserializeAws_json1_1SeveritySummary(output.SeveritySummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NormalStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1NotificationConfig = (output: any, context: __SerdeContext): NotificationConfig => {
  return {
    NotificationArn: __expectString(output.NotificationArn),
    NotificationEvents:
      output.NotificationEvents != null
        ? deserializeAws_json1_1NotificationEventList(output.NotificationEvents, context)
        : undefined,
    NotificationType: __expectString(output.NotificationType),
  } as any;
};

const deserializeAws_json1_1NotificationEventList = (
  output: any,
  context: __SerdeContext
): (NotificationEvent | string)[] => {
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

const deserializeAws_json1_1OpsEntity = (output: any, context: __SerdeContext): OpsEntity => {
  return {
    Data: output.Data != null ? deserializeAws_json1_1OpsEntityItemMap(output.Data, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1OpsEntityItem = (output: any, context: __SerdeContext): OpsEntityItem => {
  return {
    CaptureTime: __expectString(output.CaptureTime),
    Content: output.Content != null ? deserializeAws_json1_1OpsEntityItemEntryList(output.Content, context) : undefined,
  } as any;
};

const deserializeAws_json1_1OpsEntityItemEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1OpsEntityItemEntryList = (
  output: any,
  context: __SerdeContext
): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsEntityItemEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsEntityItemMap = (
  output: any,
  context: __SerdeContext
): Record<string, OpsEntityItem> => {
  return Object.entries(output).reduce((acc: Record<string, OpsEntityItem>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1OpsEntityItem(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1OpsEntityList = (output: any, context: __SerdeContext): OpsEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsItem = (output: any, context: __SerdeContext): OpsItem => {
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
    Notifications:
      output.Notifications != null
        ? deserializeAws_json1_1OpsItemNotifications(output.Notifications, context)
        : undefined,
    OperationalData:
      output.OperationalData != null
        ? deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context)
        : undefined,
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
    RelatedOpsItems:
      output.RelatedOpsItems != null
        ? deserializeAws_json1_1RelatedOpsItems(output.RelatedOpsItems, context)
        : undefined,
    Severity: __expectString(output.Severity),
    Source: __expectString(output.Source),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1OpsItemAccessDeniedException = (
  output: any,
  context: __SerdeContext
): OpsItemAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OpsItemAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OpsItemAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

const deserializeAws_json1_1OpsItemDataValue = (output: any, context: __SerdeContext): OpsItemDataValue => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1OpsItemEventSummaries = (output: any, context: __SerdeContext): OpsItemEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsItemEventSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsItemEventSummary = (output: any, context: __SerdeContext): OpsItemEventSummary => {
  return {
    CreatedBy: output.CreatedBy != null ? deserializeAws_json1_1OpsItemIdentity(output.CreatedBy, context) : undefined,
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

const deserializeAws_json1_1OpsItemIdentity = (output: any, context: __SerdeContext): OpsItemIdentity => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_1OpsItemInvalidParameterException = (
  output: any,
  context: __SerdeContext
): OpsItemInvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    ParameterNames:
      output.ParameterNames != null
        ? deserializeAws_json1_1OpsItemParameterNamesList(output.ParameterNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OpsItemLimitExceededException = (
  output: any,
  context: __SerdeContext
): OpsItemLimitExceededException => {
  return {
    Limit: __expectInt32(output.Limit),
    LimitType: __expectString(output.LimitType),
    Message: __expectString(output.Message),
    ResourceTypes:
      output.ResourceTypes != null
        ? deserializeAws_json1_1OpsItemParameterNamesList(output.ResourceTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OpsItemNotFoundException = (
  output: any,
  context: __SerdeContext
): OpsItemNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OpsItemNotification = (output: any, context: __SerdeContext): OpsItemNotification => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_1OpsItemNotifications = (output: any, context: __SerdeContext): OpsItemNotification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsItemNotification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsItemOperationalData = (
  output: any,
  context: __SerdeContext
): Record<string, OpsItemDataValue> => {
  return Object.entries(output).reduce((acc: Record<string, OpsItemDataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1OpsItemDataValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1OpsItemParameterNamesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OpsItemRelatedItemAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    OpsItemId: __expectString(output.OpsItemId),
    ResourceUri: __expectString(output.ResourceUri),
  } as any;
};

const deserializeAws_json1_1OpsItemRelatedItemAssociationNotFoundException = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemAssociationNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OpsItemRelatedItemSummaries = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsItemRelatedItemSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsItemRelatedItemSummary = (
  output: any,
  context: __SerdeContext
): OpsItemRelatedItemSummary => {
  return {
    AssociationId: __expectString(output.AssociationId),
    AssociationType: __expectString(output.AssociationType),
    CreatedBy: output.CreatedBy != null ? deserializeAws_json1_1OpsItemIdentity(output.CreatedBy, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastModifiedBy:
      output.LastModifiedBy != null ? deserializeAws_json1_1OpsItemIdentity(output.LastModifiedBy, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    OpsItemId: __expectString(output.OpsItemId),
    ResourceType: __expectString(output.ResourceType),
    ResourceUri: __expectString(output.ResourceUri),
  } as any;
};

const deserializeAws_json1_1OpsItemSummaries = (output: any, context: __SerdeContext): OpsItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsItemSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsItemSummary = (output: any, context: __SerdeContext): OpsItemSummary => {
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
      output.OperationalData != null
        ? deserializeAws_json1_1OpsItemOperationalData(output.OperationalData, context)
        : undefined,
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

const deserializeAws_json1_1OpsMetadata = (output: any, context: __SerdeContext): OpsMetadata => {
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

const deserializeAws_json1_1OpsMetadataAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OpsMetadataAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OpsMetadataInvalidArgumentException = (
  output: any,
  context: __SerdeContext
): OpsMetadataInvalidArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OpsMetadataKeyLimitExceededException = (
  output: any,
  context: __SerdeContext
): OpsMetadataKeyLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OpsMetadataLimitExceededException = (
  output: any,
  context: __SerdeContext
): OpsMetadataLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OpsMetadataList = (output: any, context: __SerdeContext): OpsMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpsMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpsMetadataNotFoundException = (
  output: any,
  context: __SerdeContext
): OpsMetadataNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OpsMetadataTooManyUpdatesException = (
  output: any,
  context: __SerdeContext
): OpsMetadataTooManyUpdatesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OutputSource = (output: any, context: __SerdeContext): OutputSource => {
  return {
    OutputSourceId: __expectString(output.OutputSourceId),
    OutputSourceType: __expectString(output.OutputSourceType),
  } as any;
};

const deserializeAws_json1_1Parameter = (output: any, context: __SerdeContext): Parameter => {
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

const deserializeAws_json1_1ParameterAlreadyExists = (output: any, context: __SerdeContext): ParameterAlreadyExists => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterHistory = (output: any, context: __SerdeContext): ParameterHistory => {
  return {
    AllowedPattern: __expectString(output.AllowedPattern),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    KeyId: __expectString(output.KeyId),
    Labels: output.Labels != null ? deserializeAws_json1_1ParameterLabelList(output.Labels, context) : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LastModifiedUser: __expectString(output.LastModifiedUser),
    Name: __expectString(output.Name),
    Policies: output.Policies != null ? deserializeAws_json1_1ParameterPolicyList(output.Policies, context) : undefined,
    Tier: __expectString(output.Tier),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1ParameterHistoryList = (output: any, context: __SerdeContext): ParameterHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterInlinePolicy = (output: any, context: __SerdeContext): ParameterInlinePolicy => {
  return {
    PolicyStatus: __expectString(output.PolicyStatus),
    PolicyText: __expectString(output.PolicyText),
    PolicyType: __expectString(output.PolicyType),
  } as any;
};

const deserializeAws_json1_1ParameterLabelList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ParameterLimitExceeded = (output: any, context: __SerdeContext): ParameterLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterMaxVersionLimitExceeded = (
  output: any,
  context: __SerdeContext
): ParameterMaxVersionLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterMetadata = (output: any, context: __SerdeContext): ParameterMetadata => {
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
    Policies: output.Policies != null ? deserializeAws_json1_1ParameterPolicyList(output.Policies, context) : undefined,
    Tier: __expectString(output.Tier),
    Type: __expectString(output.Type),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1ParameterMetadataList = (output: any, context: __SerdeContext): ParameterMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ParameterNotFound = (output: any, context: __SerdeContext): ParameterNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterPatternMismatchException = (
  output: any,
  context: __SerdeContext
): ParameterPatternMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterPolicyList = (output: any, context: __SerdeContext): ParameterInlinePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterInlinePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Parameters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ParameterValueList(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ParameterValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ParameterVersionLabelLimitExceeded = (
  output: any,
  context: __SerdeContext
): ParameterVersionLabelLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterVersionNotFound = (
  output: any,
  context: __SerdeContext
): ParameterVersionNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Patch = (output: any, context: __SerdeContext): Patch => {
  return {
    AdvisoryIds:
      output.AdvisoryIds != null ? deserializeAws_json1_1PatchAdvisoryIdList(output.AdvisoryIds, context) : undefined,
    Arch: __expectString(output.Arch),
    BugzillaIds:
      output.BugzillaIds != null ? deserializeAws_json1_1PatchBugzillaIdList(output.BugzillaIds, context) : undefined,
    CVEIds: output.CVEIds != null ? deserializeAws_json1_1PatchCVEIdList(output.CVEIds, context) : undefined,
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

const deserializeAws_json1_1PatchAdvisoryIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchBaselineIdentity = (output: any, context: __SerdeContext): PatchBaselineIdentity => {
  return {
    BaselineDescription: __expectString(output.BaselineDescription),
    BaselineId: __expectString(output.BaselineId),
    BaselineName: __expectString(output.BaselineName),
    DefaultBaseline: __expectBoolean(output.DefaultBaseline),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

const deserializeAws_json1_1PatchBaselineIdentityList = (
  output: any,
  context: __SerdeContext
): PatchBaselineIdentity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchBaselineIdentity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchBugzillaIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchComplianceData = (output: any, context: __SerdeContext): PatchComplianceData => {
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

const deserializeAws_json1_1PatchComplianceDataList = (output: any, context: __SerdeContext): PatchComplianceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchComplianceData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchCVEIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchFilter = (output: any, context: __SerdeContext): PatchFilter => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? deserializeAws_json1_1PatchFilterValueList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PatchFilterGroup = (output: any, context: __SerdeContext): PatchFilterGroup => {
  return {
    PatchFilters:
      output.PatchFilters != null ? deserializeAws_json1_1PatchFilterList(output.PatchFilters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PatchFilterList = (output: any, context: __SerdeContext): PatchFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchFilterValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchGroupList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchGroupPatchBaselineMapping = (
  output: any,
  context: __SerdeContext
): PatchGroupPatchBaselineMapping => {
  return {
    BaselineIdentity:
      output.BaselineIdentity != null
        ? deserializeAws_json1_1PatchBaselineIdentity(output.BaselineIdentity, context)
        : undefined,
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

const deserializeAws_json1_1PatchGroupPatchBaselineMappingList = (
  output: any,
  context: __SerdeContext
): PatchGroupPatchBaselineMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchGroupPatchBaselineMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchList = (output: any, context: __SerdeContext): Patch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Patch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchPropertiesList = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchPropertyEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchPropertyEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1PatchRule = (output: any, context: __SerdeContext): PatchRule => {
  return {
    ApproveAfterDays: __expectInt32(output.ApproveAfterDays),
    ApproveUntilDate: __expectString(output.ApproveUntilDate),
    ComplianceLevel: __expectString(output.ComplianceLevel),
    EnableNonSecurity: __expectBoolean(output.EnableNonSecurity),
    PatchFilterGroup:
      output.PatchFilterGroup != null
        ? deserializeAws_json1_1PatchFilterGroup(output.PatchFilterGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PatchRuleGroup = (output: any, context: __SerdeContext): PatchRuleGroup => {
  return {
    PatchRules: output.PatchRules != null ? deserializeAws_json1_1PatchRuleList(output.PatchRules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PatchRuleList = (output: any, context: __SerdeContext): PatchRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchSource = (output: any, context: __SerdeContext): PatchSource => {
  return {
    Configuration: __expectString(output.Configuration),
    Name: __expectString(output.Name),
    Products:
      output.Products != null ? deserializeAws_json1_1PatchSourceProductList(output.Products, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PatchSourceList = (output: any, context: __SerdeContext): PatchSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PatchSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PatchSourceProductList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PatchStatus = (output: any, context: __SerdeContext): PatchStatus => {
  return {
    ApprovalDate:
      output.ApprovalDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApprovalDate)))
        : undefined,
    ComplianceLevel: __expectString(output.ComplianceLevel),
    DeploymentStatus: __expectString(output.DeploymentStatus),
  } as any;
};

const deserializeAws_json1_1PlatformTypeList = (output: any, context: __SerdeContext): (PlatformType | string)[] => {
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

const deserializeAws_json1_1PoliciesLimitExceededException = (
  output: any,
  context: __SerdeContext
): PoliciesLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ProgressCounters = (output: any, context: __SerdeContext): ProgressCounters => {
  return {
    CancelledSteps: __expectInt32(output.CancelledSteps),
    FailedSteps: __expectInt32(output.FailedSteps),
    SuccessSteps: __expectInt32(output.SuccessSteps),
    TimedOutSteps: __expectInt32(output.TimedOutSteps),
    TotalSteps: __expectInt32(output.TotalSteps),
  } as any;
};

const deserializeAws_json1_1PutComplianceItemsResult = (
  output: any,
  context: __SerdeContext
): PutComplianceItemsResult => {
  return {} as any;
};

const deserializeAws_json1_1PutInventoryResult = (output: any, context: __SerdeContext): PutInventoryResult => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PutParameterResult = (output: any, context: __SerdeContext): PutParameterResult => {
  return {
    Tier: __expectString(output.Tier),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    PolicyHash: __expectString(output.PolicyHash),
    PolicyId: __expectString(output.PolicyId),
  } as any;
};

const deserializeAws_json1_1Regions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RegisterDefaultPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): RegisterDefaultPatchBaselineResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
  } as any;
};

const deserializeAws_json1_1RegisterPatchBaselineForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): RegisterPatchBaselineForPatchGroupResult => {
  return {
    BaselineId: __expectString(output.BaselineId),
    PatchGroup: __expectString(output.PatchGroup),
  } as any;
};

const deserializeAws_json1_1RegisterTargetWithMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): RegisterTargetWithMaintenanceWindowResult => {
  return {
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

const deserializeAws_json1_1RegisterTaskWithMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): RegisterTaskWithMaintenanceWindowResult => {
  return {
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

const deserializeAws_json1_1RelatedOpsItem = (output: any, context: __SerdeContext): RelatedOpsItem => {
  return {
    OpsItemId: __expectString(output.OpsItemId),
  } as any;
};

const deserializeAws_json1_1RelatedOpsItems = (output: any, context: __SerdeContext): RelatedOpsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelatedOpsItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemoveTagsFromResourceResult = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1ResetServiceSettingResult = (
  output: any,
  context: __SerdeContext
): ResetServiceSettingResult => {
  return {
    ServiceSetting:
      output.ServiceSetting != null ? deserializeAws_json1_1ServiceSetting(output.ServiceSetting, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResolvedTargets = (output: any, context: __SerdeContext): ResolvedTargets => {
  return {
    ParameterValues:
      output.ParameterValues != null
        ? deserializeAws_json1_1TargetParameterList(output.ParameterValues, context)
        : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1ResourceComplianceSummaryItem = (
  output: any,
  context: __SerdeContext
): ResourceComplianceSummaryItem => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantSummary:
      output.CompliantSummary != null
        ? deserializeAws_json1_1CompliantSummary(output.CompliantSummary, context)
        : undefined,
    ExecutionSummary:
      output.ExecutionSummary != null
        ? deserializeAws_json1_1ComplianceExecutionSummary(output.ExecutionSummary, context)
        : undefined,
    NonCompliantSummary:
      output.NonCompliantSummary != null
        ? deserializeAws_json1_1NonCompliantSummary(output.NonCompliantSummary, context)
        : undefined,
    OverallSeverity: __expectString(output.OverallSeverity),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ResourceComplianceSummaryItemList = (
  output: any,
  context: __SerdeContext
): ResourceComplianceSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceComplianceSummaryItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDataSyncAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncAlreadyExistsException => {
  return {
    SyncName: __expectString(output.SyncName),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncAwsOrganizationsSource => {
  return {
    OrganizationSourceType: __expectString(output.OrganizationSourceType),
    OrganizationalUnits:
      output.OrganizationalUnits != null
        ? deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList(output.OrganizationalUnits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncConflictException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncCountExceededException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncCountExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncDestinationDataSharing = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncDestinationDataSharing => {
  return {
    DestinationDataSharingType: __expectString(output.DestinationDataSharingType),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncInvalidConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncItem = (output: any, context: __SerdeContext): ResourceDataSyncItem => {
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
      output.S3Destination != null
        ? deserializeAws_json1_1ResourceDataSyncS3Destination(output.S3Destination, context)
        : undefined,
    SyncCreatedTime:
      output.SyncCreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SyncCreatedTime)))
        : undefined,
    SyncLastModifiedTime:
      output.SyncLastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SyncLastModifiedTime)))
        : undefined,
    SyncName: __expectString(output.SyncName),
    SyncSource:
      output.SyncSource != null
        ? deserializeAws_json1_1ResourceDataSyncSourceWithState(output.SyncSource, context)
        : undefined,
    SyncType: __expectString(output.SyncType),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncItemList = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceDataSyncItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDataSyncNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncNotFoundException => {
  return {
    Message: __expectString(output.Message),
    SyncName: __expectString(output.SyncName),
    SyncType: __expectString(output.SyncType),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncOrganizationalUnit = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncOrganizationalUnit => {
  return {
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncOrganizationalUnitList = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncOrganizationalUnit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceDataSyncOrganizationalUnit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDataSyncS3Destination = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncS3Destination => {
  return {
    AWSKMSKeyARN: __expectString(output.AWSKMSKeyARN),
    BucketName: __expectString(output.BucketName),
    DestinationDataSharing:
      output.DestinationDataSharing != null
        ? deserializeAws_json1_1ResourceDataSyncDestinationDataSharing(output.DestinationDataSharing, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
    Region: __expectString(output.Region),
    SyncFormat: __expectString(output.SyncFormat),
  } as any;
};

const deserializeAws_json1_1ResourceDataSyncSourceRegionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceDataSyncSourceWithState = (
  output: any,
  context: __SerdeContext
): ResourceDataSyncSourceWithState => {
  return {
    AwsOrganizationsSource:
      output.AwsOrganizationsSource != null
        ? deserializeAws_json1_1ResourceDataSyncAwsOrganizationsSource(output.AwsOrganizationsSource, context)
        : undefined,
    EnableAllOpsDataSources: __expectBoolean(output.EnableAllOpsDataSources),
    IncludeFutureRegions: __expectBoolean(output.IncludeFutureRegions),
    SourceRegions:
      output.SourceRegions != null
        ? deserializeAws_json1_1ResourceDataSyncSourceRegionList(output.SourceRegions, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourcePolicyConflictException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourcePolicyInvalidParameterException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyInvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    ParameterNames:
      output.ParameterNames != null
        ? deserializeAws_json1_1ResourcePolicyParameterNamesList(output.ParameterNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourcePolicyLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyLimitExceededException => {
  return {
    Limit: __expectInt32(output.Limit),
    LimitType: __expectString(output.LimitType),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourcePolicyParameterNamesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResumeSessionResponse = (output: any, context: __SerdeContext): ResumeSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    StreamUrl: __expectString(output.StreamUrl),
    TokenValue: __expectString(output.TokenValue),
  } as any;
};

const deserializeAws_json1_1ReviewInformation = (output: any, context: __SerdeContext): ReviewInformation => {
  return {
    ReviewedTime:
      output.ReviewedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReviewedTime)))
        : undefined,
    Reviewer: __expectString(output.Reviewer),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ReviewInformationList = (output: any, context: __SerdeContext): ReviewInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReviewInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Runbook = (output: any, context: __SerdeContext): Runbook => {
  return {
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1AutomationParameterMap(output.Parameters, context) : undefined,
    TargetLocations:
      output.TargetLocations != null
        ? deserializeAws_json1_1TargetLocations(output.TargetLocations, context)
        : undefined,
    TargetMaps: output.TargetMaps != null ? deserializeAws_json1_1TargetMaps(output.TargetMaps, context) : undefined,
    TargetParameterName: __expectString(output.TargetParameterName),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Runbooks = (output: any, context: __SerdeContext): Runbook[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Runbook(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1S3OutputLocation = (output: any, context: __SerdeContext): S3OutputLocation => {
  return {
    OutputS3BucketName: __expectString(output.OutputS3BucketName),
    OutputS3KeyPrefix: __expectString(output.OutputS3KeyPrefix),
    OutputS3Region: __expectString(output.OutputS3Region),
  } as any;
};

const deserializeAws_json1_1S3OutputUrl = (output: any, context: __SerdeContext): S3OutputUrl => {
  return {
    OutputUrl: __expectString(output.OutputUrl),
  } as any;
};

const deserializeAws_json1_1ScheduledWindowExecution = (
  output: any,
  context: __SerdeContext
): ScheduledWindowExecution => {
  return {
    ExecutionTime: __expectString(output.ExecutionTime),
    Name: __expectString(output.Name),
    WindowId: __expectString(output.WindowId),
  } as any;
};

const deserializeAws_json1_1ScheduledWindowExecutionList = (
  output: any,
  context: __SerdeContext
): ScheduledWindowExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScheduledWindowExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SendAutomationSignalResult = (
  output: any,
  context: __SerdeContext
): SendAutomationSignalResult => {
  return {} as any;
};

const deserializeAws_json1_1SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return {
    Command: output.Command != null ? deserializeAws_json1_1Command(output.Command, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceSetting = (output: any, context: __SerdeContext): ServiceSetting => {
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

const deserializeAws_json1_1ServiceSettingNotFound = (output: any, context: __SerdeContext): ServiceSettingNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Session = (output: any, context: __SerdeContext): Session => {
  return {
    Details: __expectString(output.Details),
    DocumentName: __expectString(output.DocumentName),
    EndDate:
      output.EndDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDate))) : undefined,
    MaxSessionDuration: __expectString(output.MaxSessionDuration),
    OutputUrl:
      output.OutputUrl != null ? deserializeAws_json1_1SessionManagerOutputUrl(output.OutputUrl, context) : undefined,
    Owner: __expectString(output.Owner),
    Reason: __expectString(output.Reason),
    SessionId: __expectString(output.SessionId),
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    Status: __expectString(output.Status),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_json1_1SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Session(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SessionManagerOutputUrl = (
  output: any,
  context: __SerdeContext
): SessionManagerOutputUrl => {
  return {
    CloudWatchOutputUrl: __expectString(output.CloudWatchOutputUrl),
    S3OutputUrl: __expectString(output.S3OutputUrl),
  } as any;
};

const deserializeAws_json1_1SeveritySummary = (output: any, context: __SerdeContext): SeveritySummary => {
  return {
    CriticalCount: __expectInt32(output.CriticalCount),
    HighCount: __expectInt32(output.HighCount),
    InformationalCount: __expectInt32(output.InformationalCount),
    LowCount: __expectInt32(output.LowCount),
    MediumCount: __expectInt32(output.MediumCount),
    UnspecifiedCount: __expectInt32(output.UnspecifiedCount),
  } as any;
};

const deserializeAws_json1_1StartAssociationsOnceResult = (
  output: any,
  context: __SerdeContext
): StartAssociationsOnceResult => {
  return {} as any;
};

const deserializeAws_json1_1StartAutomationExecutionResult = (
  output: any,
  context: __SerdeContext
): StartAutomationExecutionResult => {
  return {
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
  } as any;
};

const deserializeAws_json1_1StartChangeRequestExecutionResult = (
  output: any,
  context: __SerdeContext
): StartChangeRequestExecutionResult => {
  return {
    AutomationExecutionId: __expectString(output.AutomationExecutionId),
  } as any;
};

const deserializeAws_json1_1StartSessionResponse = (output: any, context: __SerdeContext): StartSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    StreamUrl: __expectString(output.StreamUrl),
    TokenValue: __expectString(output.TokenValue),
  } as any;
};

const deserializeAws_json1_1StatusUnchanged = (output: any, context: __SerdeContext): StatusUnchanged => {
  return {} as any;
};

const deserializeAws_json1_1StepExecution = (output: any, context: __SerdeContext): StepExecution => {
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
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
    Inputs: output.Inputs != null ? deserializeAws_json1_1NormalStringMap(output.Inputs, context) : undefined,
    IsCritical: __expectBoolean(output.IsCritical),
    IsEnd: __expectBoolean(output.IsEnd),
    MaxAttempts: __expectInt32(output.MaxAttempts),
    NextStep: __expectString(output.NextStep),
    OnFailure: __expectString(output.OnFailure),
    Outputs: output.Outputs != null ? deserializeAws_json1_1AutomationParameterMap(output.Outputs, context) : undefined,
    OverriddenParameters:
      output.OverriddenParameters != null
        ? deserializeAws_json1_1AutomationParameterMap(output.OverriddenParameters, context)
        : undefined,
    Response: __expectString(output.Response),
    ResponseCode: __expectString(output.ResponseCode),
    StepExecutionId: __expectString(output.StepExecutionId),
    StepName: __expectString(output.StepName),
    StepStatus: __expectString(output.StepStatus),
    TargetLocation:
      output.TargetLocation != null ? deserializeAws_json1_1TargetLocation(output.TargetLocation, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TimeoutSeconds: __expectLong(output.TimeoutSeconds),
    TriggeredAlarms:
      output.TriggeredAlarms != null
        ? deserializeAws_json1_1AlarmStateInformationList(output.TriggeredAlarms, context)
        : undefined,
    ValidNextSteps:
      output.ValidNextSteps != null
        ? deserializeAws_json1_1ValidNextStepList(output.ValidNextSteps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepExecutionList = (output: any, context: __SerdeContext): StepExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StopAutomationExecutionResult = (
  output: any,
  context: __SerdeContext
): StopAutomationExecutionResult => {
  return {} as any;
};

const deserializeAws_json1_1SubTypeCountLimitExceededException = (
  output: any,
  context: __SerdeContext
): SubTypeCountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? deserializeAws_json1_1TargetValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TargetInUseException = (output: any, context: __SerdeContext): TargetInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TargetLocation = (output: any, context: __SerdeContext): TargetLocation => {
  return {
    Accounts: output.Accounts != null ? deserializeAws_json1_1Accounts(output.Accounts, context) : undefined,
    ExecutionRoleName: __expectString(output.ExecutionRoleName),
    Regions: output.Regions != null ? deserializeAws_json1_1Regions(output.Regions, context) : undefined,
    TargetLocationAlarmConfiguration:
      output.TargetLocationAlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.TargetLocationAlarmConfiguration, context)
        : undefined,
    TargetLocationMaxConcurrency: __expectString(output.TargetLocationMaxConcurrency),
    TargetLocationMaxErrors: __expectString(output.TargetLocationMaxErrors),
  } as any;
};

const deserializeAws_json1_1TargetLocations = (output: any, context: __SerdeContext): TargetLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetLocation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TargetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1TargetMapValueList(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1TargetMaps = (output: any, context: __SerdeContext): Record<string, string[]>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetMap(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TargetMapValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TargetNotConnected = (output: any, context: __SerdeContext): TargetNotConnected => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TargetParameterList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Targets = (output: any, context: __SerdeContext): Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Target(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TargetValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TerminateSessionResponse = (
  output: any,
  context: __SerdeContext
): TerminateSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
  } as any;
};

const deserializeAws_json1_1TooManyTagsError = (output: any, context: __SerdeContext): TooManyTagsError => {
  return {} as any;
};

const deserializeAws_json1_1TooManyUpdates = (output: any, context: __SerdeContext): TooManyUpdates => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TotalSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TotalSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnlabelParameterVersionResult = (
  output: any,
  context: __SerdeContext
): UnlabelParameterVersionResult => {
  return {
    InvalidLabels:
      output.InvalidLabels != null
        ? deserializeAws_json1_1ParameterLabelList(output.InvalidLabels, context)
        : undefined,
    RemovedLabels:
      output.RemovedLabels != null
        ? deserializeAws_json1_1ParameterLabelList(output.RemovedLabels, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedCalendarException = (
  output: any,
  context: __SerdeContext
): UnsupportedCalendarException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedFeatureRequiredException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureRequiredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedInventoryItemContextException = (
  output: any,
  context: __SerdeContext
): UnsupportedInventoryItemContextException => {
  return {
    Message: __expectString(output.Message),
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_1UnsupportedInventorySchemaVersionException = (
  output: any,
  context: __SerdeContext
): UnsupportedInventorySchemaVersionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperatingSystem = (
  output: any,
  context: __SerdeContext
): UnsupportedOperatingSystem => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedParameterType = (
  output: any,
  context: __SerdeContext
): UnsupportedParameterType => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedPlatformType = (
  output: any,
  context: __SerdeContext
): UnsupportedPlatformType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UpdateAssociationResult = (
  output: any,
  context: __SerdeContext
): UpdateAssociationResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateAssociationStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateAssociationStatusResult => {
  return {
    AssociationDescription:
      output.AssociationDescription != null
        ? deserializeAws_json1_1AssociationDescription(output.AssociationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDocumentDefaultVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateDocumentDefaultVersionResult => {
  return {
    Description:
      output.Description != null
        ? deserializeAws_json1_1DocumentDefaultVersionDescription(output.Description, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDocumentMetadataResponse = (
  output: any,
  context: __SerdeContext
): UpdateDocumentMetadataResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDocumentResult = (output: any, context: __SerdeContext): UpdateDocumentResult => {
  return {
    DocumentDescription:
      output.DocumentDescription != null
        ? deserializeAws_json1_1DocumentDescription(output.DocumentDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateMaintenanceWindowResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowResult => {
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

const deserializeAws_json1_1UpdateMaintenanceWindowTargetResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowTargetResult => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    OwnerInformation: __expectString(output.OwnerInformation),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTargetId: __expectString(output.WindowTargetId),
  } as any;
};

const deserializeAws_json1_1UpdateMaintenanceWindowTaskResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowTaskResult => {
  return {
    AlarmConfiguration:
      output.AlarmConfiguration != null
        ? deserializeAws_json1_1AlarmConfiguration(output.AlarmConfiguration, context)
        : undefined,
    CutoffBehavior: __expectString(output.CutoffBehavior),
    Description: __expectString(output.Description),
    LoggingInfo:
      output.LoggingInfo != null ? deserializeAws_json1_1LoggingInfo(output.LoggingInfo, context) : undefined,
    MaxConcurrency: __expectString(output.MaxConcurrency),
    MaxErrors: __expectString(output.MaxErrors),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Targets: output.Targets != null ? deserializeAws_json1_1Targets(output.Targets, context) : undefined,
    TaskArn: __expectString(output.TaskArn),
    TaskInvocationParameters:
      output.TaskInvocationParameters != null
        ? deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters(output.TaskInvocationParameters, context)
        : undefined,
    TaskParameters:
      output.TaskParameters != null
        ? deserializeAws_json1_1MaintenanceWindowTaskParameters(output.TaskParameters, context)
        : undefined,
    WindowId: __expectString(output.WindowId),
    WindowTaskId: __expectString(output.WindowTaskId),
  } as any;
};

const deserializeAws_json1_1UpdateManagedInstanceRoleResult = (
  output: any,
  context: __SerdeContext
): UpdateManagedInstanceRoleResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateOpsItemResponse = (output: any, context: __SerdeContext): UpdateOpsItemResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateOpsMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateOpsMetadataResult => {
  return {
    OpsMetadataArn: __expectString(output.OpsMetadataArn),
  } as any;
};

const deserializeAws_json1_1UpdatePatchBaselineResult = (
  output: any,
  context: __SerdeContext
): UpdatePatchBaselineResult => {
  return {
    ApprovalRules:
      output.ApprovalRules != null ? deserializeAws_json1_1PatchRuleGroup(output.ApprovalRules, context) : undefined,
    ApprovedPatches:
      output.ApprovedPatches != null ? deserializeAws_json1_1PatchIdList(output.ApprovedPatches, context) : undefined,
    ApprovedPatchesComplianceLevel: __expectString(output.ApprovedPatchesComplianceLevel),
    ApprovedPatchesEnableNonSecurity: __expectBoolean(output.ApprovedPatchesEnableNonSecurity),
    BaselineId: __expectString(output.BaselineId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalFilters:
      output.GlobalFilters != null ? deserializeAws_json1_1PatchFilterGroup(output.GlobalFilters, context) : undefined,
    ModifiedDate:
      output.ModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    RejectedPatches:
      output.RejectedPatches != null ? deserializeAws_json1_1PatchIdList(output.RejectedPatches, context) : undefined,
    RejectedPatchesAction: __expectString(output.RejectedPatchesAction),
    Sources: output.Sources != null ? deserializeAws_json1_1PatchSourceList(output.Sources, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateResourceDataSyncResult = (
  output: any,
  context: __SerdeContext
): UpdateResourceDataSyncResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateServiceSettingResult = (
  output: any,
  context: __SerdeContext
): UpdateServiceSettingResult => {
  return {} as any;
};

const deserializeAws_json1_1ValidNextStepList = (output: any, context: __SerdeContext): string[] => {
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
