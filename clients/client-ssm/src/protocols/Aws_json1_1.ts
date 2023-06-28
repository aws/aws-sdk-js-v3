// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  Activation,
  AddTagsToResourceRequest,
  Alarm,
  AlarmConfiguration,
  AlreadyExistsException,
  AssociatedInstances,
  AssociateOpsItemRelatedItemRequest,
  AssociationAlreadyExists,
  AssociationDescription,
  AssociationDoesNotExist,
  AssociationExecution,
  AssociationExecutionDoesNotExist,
  AssociationExecutionFilter,
  AssociationExecutionTarget,
  AssociationExecutionTargetsFilter,
  AssociationLimitExceeded,
  AssociationStatus,
  AttachmentsSource,
  AutomationExecutionFilter,
  AutomationExecutionMetadata,
  AutomationExecutionNotFoundException,
  CancelCommandRequest,
  CancelMaintenanceWindowExecutionRequest,
  CreateActivationRequest,
  CreateAssociationBatchRequest,
  CreateAssociationBatchRequestEntry,
  CreateAssociationBatchResult,
  CreateAssociationRequest,
  CreateAssociationResult,
  CreateDocumentRequest,
  CreateDocumentResult,
  CreateMaintenanceWindowRequest,
  CreateOpsItemRequest,
  CreateOpsMetadataRequest,
  CreatePatchBaselineRequest,
  CreateResourceDataSyncRequest,
  DeleteActivationRequest,
  DeleteAssociationRequest,
  DeleteDocumentRequest,
  DeleteInventoryRequest,
  DeleteMaintenanceWindowRequest,
  DeleteOpsMetadataRequest,
  DeleteParameterRequest,
  DeleteParametersRequest,
  DeletePatchBaselineRequest,
  DeleteResourceDataSyncRequest,
  DeleteResourcePolicyRequest,
  DeregisterManagedInstanceRequest,
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowRequest,
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
  DescribeDocumentRequest,
  DescribeDocumentResult,
  DescribeEffectiveInstanceAssociationsRequest,
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
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsRequest,
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTasksRequest,
  DocumentAlreadyExists,
  DocumentDescription,
  DocumentLimitExceeded,
  DocumentRequires,
  DoesNotExistException,
  DuplicateInstanceId,
  EffectivePatch,
  IdempotentParameterMismatch,
  InstanceAssociationOutputLocation,
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
  LoggingInfo,
  MaintenanceWindowExecution,
  MaintenanceWindowExecutionTaskIdentity,
  MaintenanceWindowExecutionTaskInvocationIdentity,
  MaintenanceWindowFilter,
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
  RegistrationMetadataItem,
  RelatedOpsItem,
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
  ComplianceTypeCountLimitExceededException,
  CustomSchemaCountLimitExceededException,
  DescribeOpsItemsRequest,
  DescribeOpsItemsResponse,
  DescribeParametersRequest,
  DescribeParametersResult,
  DescribePatchBaselinesRequest,
  DescribePatchGroupsRequest,
  DescribePatchGroupStateRequest,
  DescribePatchPropertiesRequest,
  DescribeSessionsRequest,
  DescribeSessionsResponse,
  DisassociateOpsItemRelatedItemRequest,
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
  GetCommandInvocationRequest,
  GetConnectionStatusRequest,
  GetDefaultPatchBaselineRequest,
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDocumentRequest,
  GetDocumentResult,
  GetInventorySchemaRequest,
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
  GetParameterHistoryRequest,
  GetParameterHistoryResult,
  GetParameterRequest,
  GetParameterResult,
  GetParametersByPathRequest,
  GetParametersByPathResult,
  GetParametersRequest,
  GetParametersResult,
  GetPatchBaselineForPatchGroupRequest,
  GetPatchBaselineRequest,
  GetPatchBaselineResult,
  GetResourcePoliciesRequest,
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
  InvocationDoesNotExist,
  ItemContentMismatchException,
  ItemSizeLimitExceededException,
  LabelParameterVersionRequest,
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
  ListDocumentMetadataHistoryRequest,
  ListDocumentMetadataHistoryResponse,
  ListDocumentsRequest,
  ListDocumentsResult,
  ListDocumentVersionsRequest,
  ListDocumentVersionsResult,
  ListInventoryEntriesRequest,
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
  MaintenanceWindowAutomationParameters,
  MaintenanceWindowLambdaParameters,
  MaintenanceWindowRunCommandParameters,
  MaintenanceWindowStepFunctionsParameters,
  MaintenanceWindowTaskInvocationParameters,
  ModifyDocumentPermissionRequest,
  NotificationConfig,
  NotificationEvent,
  OpsFilter,
  OpsItem,
  OpsItemEventFilter,
  OpsItemEventSummary,
  OpsItemFilter,
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
  ParameterLimitExceeded,
  ParameterMaxVersionLimitExceeded,
  ParameterMetadata,
  ParameterPatternMismatchException,
  ParametersFilter,
  ParameterStringFilter,
  ParameterVersionLabelLimitExceeded,
  ParameterVersionNotFound,
  PoliciesLimitExceededException,
  PutComplianceItemsRequest,
  PutInventoryRequest,
  PutParameterRequest,
  PutResourcePolicyRequest,
  RegisterDefaultPatchBaselineRequest,
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowRequest,
  RemoveTagsFromResourceRequest,
  ResetServiceSettingRequest,
  ResetServiceSettingResult,
  ResourceComplianceSummaryItem,
  ResourceDataSyncItem,
  ResourcePolicyLimitExceededException,
  ResultAttribute,
  ResumeSessionRequest,
  SendAutomationSignalRequest,
  SendCommandRequest,
  SendCommandResult,
  ServiceSetting,
  ServiceSettingNotFound,
  Session,
  SessionFilter,
  StartAssociationsOnceRequest,
  StartAutomationExecutionRequest,
  StartChangeRequestExecutionRequest,
  StartSessionRequest,
  StopAutomationExecutionRequest,
  SubTypeCountLimitExceededException,
  TargetNotConnected,
  TerminateSessionRequest,
  TotalSizeLimitExceededException,
  UnlabelParameterVersionRequest,
  UnsupportedCalendarException,
  UnsupportedFeatureRequiredException,
  UnsupportedInventoryItemContextException,
  UnsupportedInventorySchemaVersionException,
  UnsupportedParameterType,
} from "../models/models_1";
import {
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
  UpdateDocumentMetadataRequest,
  UpdateDocumentRequest,
  UpdateDocumentResult,
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowTargetRequest,
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskResult,
  UpdateManagedInstanceRoleRequest,
  UpdateOpsItemRequest,
  UpdateOpsMetadataRequest,
  UpdatePatchBaselineRequest,
  UpdatePatchBaselineResult,
  UpdateResourceDataSyncRequest,
  UpdateServiceSettingRequest,
} from "../models/models_2";
import { SSMServiceException as __BaseException } from "../models/SSMServiceException";

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateOpsItemRelatedItemCommand
 */
export const se_AssociateOpsItemRelatedItemCommand = async (
  input: AssociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateOpsItemRelatedItem");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelCommandCommand
 */
export const se_CancelCommandCommand = async (
  input: CancelCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelCommand");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelMaintenanceWindowExecutionCommand
 */
export const se_CancelMaintenanceWindowExecutionCommand = async (
  input: CancelMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelMaintenanceWindowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateActivationCommand
 */
export const se_CreateActivationCommand = async (
  input: CreateActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateActivation");
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
  const headers: __HeaderBag = sharedHeaders("CreateAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAssociationBatchCommand
 */
export const se_CreateAssociationBatchCommand = async (
  input: CreateAssociationBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAssociationBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDocumentCommand
 */
export const se_CreateDocumentCommand = async (
  input: CreateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMaintenanceWindowCommand
 */
export const se_CreateMaintenanceWindowCommand = async (
  input: CreateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMaintenanceWindow");
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
  const headers: __HeaderBag = sharedHeaders("CreateOpsItem");
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
  const headers: __HeaderBag = sharedHeaders("CreateOpsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePatchBaselineCommand
 */
export const se_CreatePatchBaselineCommand = async (
  input: CreatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePatchBaseline");
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
  const headers: __HeaderBag = sharedHeaders("CreateResourceDataSync");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteActivationCommand
 */
export const se_DeleteActivationCommand = async (
  input: DeleteActivationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteActivation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssociationCommand
 */
export const se_DeleteAssociationCommand = async (
  input: DeleteAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDocumentCommand
 */
export const se_DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInventoryCommand
 */
export const se_DeleteInventoryCommand = async (
  input: DeleteInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInventory");
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
  const headers: __HeaderBag = sharedHeaders("DeleteMaintenanceWindow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOpsMetadataCommand
 */
export const se_DeleteOpsMetadataCommand = async (
  input: DeleteOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOpsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParameterCommand
 */
export const se_DeleteParameterCommand = async (
  input: DeleteParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteParameter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParametersCommand
 */
export const se_DeleteParametersCommand = async (
  input: DeleteParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteParameters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePatchBaselineCommand
 */
export const se_DeletePatchBaselineCommand = async (
  input: DeletePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceDataSyncCommand
 */
export const se_DeleteResourceDataSyncCommand = async (
  input: DeleteResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceDataSync");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterManagedInstanceCommand
 */
export const se_DeregisterManagedInstanceCommand = async (
  input: DeregisterManagedInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterManagedInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand
 */
export const se_DeregisterPatchBaselineForPatchGroupCommand = async (
  input: DeregisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterPatchBaselineForPatchGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand
 */
export const se_DeregisterTargetFromMaintenanceWindowCommand = async (
  input: DeregisterTargetFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterTargetFromMaintenanceWindow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand
 */
export const se_DeregisterTaskFromMaintenanceWindowCommand = async (
  input: DeregisterTaskFromMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterTaskFromMaintenanceWindow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeActivationsCommand
 */
export const se_DescribeActivationsCommand = async (
  input: DescribeActivationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeActivations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationCommand
 */
export const se_DescribeAssociationCommand = async (
  input: DescribeAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionsCommand
 */
export const se_DescribeAssociationExecutionsCommand = async (
  input: DescribeAssociationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssociationExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssociationExecutionTargetsCommand
 */
export const se_DescribeAssociationExecutionTargetsCommand = async (
  input: DescribeAssociationExecutionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssociationExecutionTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutomationExecutionsCommand
 */
export const se_DescribeAutomationExecutionsCommand = async (
  input: DescribeAutomationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutomationExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutomationStepExecutionsCommand
 */
export const se_DescribeAutomationStepExecutionsCommand = async (
  input: DescribeAutomationStepExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutomationStepExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAvailablePatchesCommand
 */
export const se_DescribeAvailablePatchesCommand = async (
  input: DescribeAvailablePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAvailablePatches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentCommand
 */
export const se_DescribeDocumentCommand = async (
  input: DescribeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentPermissionCommand
 */
export const se_DescribeDocumentPermissionCommand = async (
  input: DescribeDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDocumentPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand
 */
export const se_DescribeEffectiveInstanceAssociationsCommand = async (
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEffectiveInstanceAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand
 */
export const se_DescribeEffectivePatchesForPatchBaselineCommand = async (
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEffectivePatchesForPatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceAssociationsStatusCommand
 */
export const se_DescribeInstanceAssociationsStatusCommand = async (
  input: DescribeInstanceAssociationsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstanceAssociationsStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceInformationCommand
 */
export const se_DescribeInstanceInformationCommand = async (
  input: DescribeInstanceInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstanceInformation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchesCommand
 */
export const se_DescribeInstancePatchesCommand = async (
  input: DescribeInstancePatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstancePatches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesCommand
 */
export const se_DescribeInstancePatchStatesCommand = async (
  input: DescribeInstancePatchStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstancePatchStates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand
 */
export const se_DescribeInstancePatchStatesForPatchGroupCommand = async (
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstancePatchStatesForPatchGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInventoryDeletionsCommand
 */
export const se_DescribeInventoryDeletionsCommand = async (
  input: DescribeInventoryDeletionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInventoryDeletions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand
 */
export const se_DescribeMaintenanceWindowExecutionsCommand = async (
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand
 */
export const se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowExecutionTaskInvocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand
 */
export const se_DescribeMaintenanceWindowExecutionTasksCommand = async (
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowExecutionTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsCommand
 */
export const se_DescribeMaintenanceWindowsCommand = async (
  input: DescribeMaintenanceWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand
 */
export const se_DescribeMaintenanceWindowScheduleCommand = async (
  input: DescribeMaintenanceWindowScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand
 */
export const se_DescribeMaintenanceWindowsForTargetCommand = async (
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowsForTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand
 */
export const se_DescribeMaintenanceWindowTargetsCommand = async (
  input: DescribeMaintenanceWindowTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceWindowTasksCommand
 */
export const se_DescribeMaintenanceWindowTasksCommand = async (
  input: DescribeMaintenanceWindowTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceWindowTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOpsItemsCommand
 */
export const se_DescribeOpsItemsCommand = async (
  input: DescribeOpsItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOpsItems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParametersCommand
 */
export const se_DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeParameters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchBaselinesCommand
 */
export const se_DescribePatchBaselinesCommand = async (
  input: DescribePatchBaselinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePatchBaselines");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchGroupsCommand
 */
export const se_DescribePatchGroupsCommand = async (
  input: DescribePatchGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePatchGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchGroupStateCommand
 */
export const se_DescribePatchGroupStateCommand = async (
  input: DescribePatchGroupStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePatchGroupState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePatchPropertiesCommand
 */
export const se_DescribePatchPropertiesCommand = async (
  input: DescribePatchPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePatchProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSessionsCommand
 */
export const se_DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateOpsItemRelatedItemCommand
 */
export const se_DisassociateOpsItemRelatedItemCommand = async (
  input: DisassociateOpsItemRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateOpsItemRelatedItem");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutomationExecutionCommand
 */
export const se_GetAutomationExecutionCommand = async (
  input: GetAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAutomationExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCalendarStateCommand
 */
export const se_GetCalendarStateCommand = async (
  input: GetCalendarStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCalendarState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommandInvocationCommand
 */
export const se_GetCommandInvocationCommand = async (
  input: GetCommandInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCommandInvocation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectionStatusCommand
 */
export const se_GetConnectionStatusCommand = async (
  input: GetConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConnectionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDefaultPatchBaselineCommand
 */
export const se_GetDefaultPatchBaselineCommand = async (
  input: GetDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDefaultPatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand
 */
export const se_GetDeployablePatchSnapshotForInstanceCommand = async (
  input: GetDeployablePatchSnapshotForInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeployablePatchSnapshotForInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentCommand
 */
export const se_GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInventoryCommand
 */
export const se_GetInventoryCommand = async (
  input: GetInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInventory");
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
  const headers: __HeaderBag = sharedHeaders("GetInventorySchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowCommand
 */
export const se_GetMaintenanceWindowCommand = async (
  input: GetMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMaintenanceWindow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionCommand
 */
export const se_GetMaintenanceWindowExecutionCommand = async (
  input: GetMaintenanceWindowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMaintenanceWindowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand
 */
export const se_GetMaintenanceWindowExecutionTaskCommand = async (
  input: GetMaintenanceWindowExecutionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMaintenanceWindowExecutionTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand
 */
export const se_GetMaintenanceWindowExecutionTaskInvocationCommand = async (
  input: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMaintenanceWindowExecutionTaskInvocation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMaintenanceWindowTaskCommand
 */
export const se_GetMaintenanceWindowTaskCommand = async (
  input: GetMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMaintenanceWindowTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsItemCommand
 */
export const se_GetOpsItemCommand = async (
  input: GetOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOpsItem");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsMetadataCommand
 */
export const se_GetOpsMetadataCommand = async (
  input: GetOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOpsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpsSummaryCommand
 */
export const se_GetOpsSummaryCommand = async (
  input: GetOpsSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOpsSummary");
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
  const headers: __HeaderBag = sharedHeaders("GetParameter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParameterHistoryCommand
 */
export const se_GetParameterHistoryCommand = async (
  input: GetParameterHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParameterHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersCommand
 */
export const se_GetParametersCommand = async (
  input: GetParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParameters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersByPathCommand
 */
export const se_GetParametersByPathCommand = async (
  input: GetParametersByPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParametersByPath");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPatchBaselineCommand
 */
export const se_GetPatchBaselineCommand = async (
  input: GetPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPatchBaselineForPatchGroupCommand
 */
export const se_GetPatchBaselineForPatchGroupCommand = async (
  input: GetPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPatchBaselineForPatchGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceSettingCommand
 */
export const se_GetServiceSettingCommand = async (
  input: GetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceSetting");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LabelParameterVersionCommand
 */
export const se_LabelParameterVersionCommand = async (
  input: LabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("LabelParameterVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationsCommand
 */
export const se_ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationVersionsCommand
 */
export const se_ListAssociationVersionsCommand = async (
  input: ListAssociationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociationVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCommandInvocationsCommand
 */
export const se_ListCommandInvocationsCommand = async (
  input: ListCommandInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCommandInvocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCommandsCommand
 */
export const se_ListCommandsCommand = async (
  input: ListCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCommands");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceItemsCommand
 */
export const se_ListComplianceItemsCommand = async (
  input: ListComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComplianceItems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceSummariesCommand
 */
export const se_ListComplianceSummariesCommand = async (
  input: ListComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComplianceSummaries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentMetadataHistoryCommand
 */
export const se_ListDocumentMetadataHistoryCommand = async (
  input: ListDocumentMetadataHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocumentMetadataHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentsCommand
 */
export const se_ListDocumentsCommand = async (
  input: ListDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocuments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentVersionsCommand
 */
export const se_ListDocumentVersionsCommand = async (
  input: ListDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocumentVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInventoryEntriesCommand
 */
export const se_ListInventoryEntriesCommand = async (
  input: ListInventoryEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInventoryEntries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsItemEventsCommand
 */
export const se_ListOpsItemEventsCommand = async (
  input: ListOpsItemEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpsItemEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsItemRelatedItemsCommand
 */
export const se_ListOpsItemRelatedItemsCommand = async (
  input: ListOpsItemRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpsItemRelatedItems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOpsMetadataCommand
 */
export const se_ListOpsMetadataCommand = async (
  input: ListOpsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceComplianceSummariesCommand
 */
export const se_ListResourceComplianceSummariesCommand = async (
  input: ListResourceComplianceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceComplianceSummaries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceDataSyncCommand
 */
export const se_ListResourceDataSyncCommand = async (
  input: ListResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceDataSync");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyDocumentPermissionCommand
 */
export const se_ModifyDocumentPermissionCommand = async (
  input: ModifyDocumentPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyDocumentPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutComplianceItemsCommand
 */
export const se_PutComplianceItemsCommand = async (
  input: PutComplianceItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutComplianceItems");
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
  const headers: __HeaderBag = sharedHeaders("PutInventory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutParameterCommand
 */
export const se_PutParameterCommand = async (
  input: PutParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutParameter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDefaultPatchBaselineCommand
 */
export const se_RegisterDefaultPatchBaselineCommand = async (
  input: RegisterDefaultPatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDefaultPatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand
 */
export const se_RegisterPatchBaselineForPatchGroupCommand = async (
  input: RegisterPatchBaselineForPatchGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterPatchBaselineForPatchGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand
 */
export const se_RegisterTargetWithMaintenanceWindowCommand = async (
  input: RegisterTargetWithMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterTargetWithMaintenanceWindow");
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
  const headers: __HeaderBag = sharedHeaders("RegisterTaskWithMaintenanceWindow");
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
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetServiceSettingCommand
 */
export const se_ResetServiceSettingCommand = async (
  input: ResetServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetServiceSetting");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResumeSessionCommand
 */
export const se_ResumeSessionCommand = async (
  input: ResumeSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendAutomationSignalCommand
 */
export const se_SendAutomationSignalCommand = async (
  input: SendAutomationSignalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendAutomationSignal");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendCommandCommand
 */
export const se_SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendCommand");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAssociationsOnceCommand
 */
export const se_StartAssociationsOnceCommand = async (
  input: StartAssociationsOnceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAssociationsOnce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAutomationExecutionCommand
 */
export const se_StartAutomationExecutionCommand = async (
  input: StartAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAutomationExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartChangeRequestExecutionCommand
 */
export const se_StartChangeRequestExecutionCommand = async (
  input: StartChangeRequestExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartChangeRequestExecution");
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
  const headers: __HeaderBag = sharedHeaders("StartSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAutomationExecutionCommand
 */
export const se_StopAutomationExecutionCommand = async (
  input: StopAutomationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAutomationExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateSessionCommand
 */
export const se_TerminateSessionCommand = async (
  input: TerminateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnlabelParameterVersionCommand
 */
export const se_UnlabelParameterVersionCommand = async (
  input: UnlabelParameterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnlabelParameterVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAssociationCommand
 */
export const se_UpdateAssociationCommand = async (
  input: UpdateAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAssociationStatusCommand
 */
export const se_UpdateAssociationStatusCommand = async (
  input: UpdateAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAssociationStatus");
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
  const headers: __HeaderBag = sharedHeaders("UpdateDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDocumentDefaultVersionCommand
 */
export const se_UpdateDocumentDefaultVersionCommand = async (
  input: UpdateDocumentDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDocumentDefaultVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDocumentMetadataCommand
 */
export const se_UpdateDocumentMetadataCommand = async (
  input: UpdateDocumentMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDocumentMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowCommand
 */
export const se_UpdateMaintenanceWindowCommand = async (
  input: UpdateMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMaintenanceWindow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTargetCommand
 */
export const se_UpdateMaintenanceWindowTargetCommand = async (
  input: UpdateMaintenanceWindowTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMaintenanceWindowTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTaskCommand
 */
export const se_UpdateMaintenanceWindowTaskCommand = async (
  input: UpdateMaintenanceWindowTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMaintenanceWindowTask");
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
  const headers: __HeaderBag = sharedHeaders("UpdateManagedInstanceRole");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateOpsItemCommand
 */
export const se_UpdateOpsItemCommand = async (
  input: UpdateOpsItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOpsItem");
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
  const headers: __HeaderBag = sharedHeaders("UpdateOpsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePatchBaselineCommand
 */
export const se_UpdatePatchBaselineCommand = async (
  input: UpdatePatchBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePatchBaseline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResourceDataSyncCommand
 */
export const se_UpdateResourceDataSyncCommand = async (
  input: UpdateResourceDataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResourceDataSync");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceSettingCommand
 */
export const se_UpdateServiceSettingCommand = async (
  input: UpdateServiceSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceSetting");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelMaintenanceWindowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteActivationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeletePatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterManagedInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterTargetFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterTaskFromMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEffectiveInstanceAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeMaintenanceWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeMaintenanceWindowScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeMaintenanceWindowsForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeMaintenanceWindowTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeMaintenanceWindowTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePatchBaselinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePatchGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePatchGroupStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePatchPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateOpsItemRelatedItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCalendarStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCommandInvocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDeployablePatchSnapshotForInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInventorySchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetOpsSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: LabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListComplianceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListInventoryEntriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ModifyDocumentPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutComplianceItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterDefaultPatchBaselineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterPatchBaselineForPatchGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterTargetWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterTaskWithMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResumeSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendAutomationSignalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartAssociationsOnceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartChangeRequestExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopAutomationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UnlabelParameterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDocumentDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDocumentMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMaintenanceWindowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMaintenanceWindowTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateManagedInstanceRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateOpsItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateOpsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateResourceDataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateServiceSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedPlatformType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountIdList omitted.

// se_Accounts omitted.

// se_AddTagsToResourceRequest omitted.

// se_Alarm omitted.

// se_AlarmConfiguration omitted.

// se_AlarmList omitted.

// se_AssociateOpsItemRelatedItemRequest omitted.

// se_AssociationExecutionFilter omitted.

// se_AssociationExecutionFilterList omitted.

// se_AssociationExecutionTargetsFilter omitted.

// se_AssociationExecutionTargetsFilterList omitted.

// se_AssociationFilter omitted.

// se_AssociationFilterList omitted.

// se_AssociationIdList omitted.

/**
 * serializeAws_json1_1AssociationStatus
 */
const se_AssociationStatus = (input: AssociationStatus, context: __SerdeContext): any => {
  return take(input, {
    AdditionalInfo: [],
    Date: (_) => Math.round(_.getTime() / 1000),
    Message: [],
    Name: [],
  });
};

// se_AttachmentsSource omitted.

// se_AttachmentsSourceList omitted.

// se_AttachmentsSourceValues omitted.

// se_AutomationExecutionFilter omitted.

// se_AutomationExecutionFilterList omitted.

// se_AutomationExecutionFilterValueList omitted.

// se_AutomationParameterMap omitted.

// se_AutomationParameterValueList omitted.

// se_BaselineOverride omitted.

// se_CalendarNameOrARNList omitted.

// se_CancelCommandRequest omitted.

// se_CancelMaintenanceWindowExecutionRequest omitted.

// se_CloudWatchOutputConfig omitted.

// se_CommandFilter omitted.

// se_CommandFilterList omitted.

/**
 * serializeAws_json1_1ComplianceExecutionSummary
 */
const se_ComplianceExecutionSummary = (input: ComplianceExecutionSummary, context: __SerdeContext): any => {
  return take(input, {
    ExecutionId: [],
    ExecutionTime: (_) => Math.round(_.getTime() / 1000),
    ExecutionType: [],
  });
};

// se_ComplianceItemDetails omitted.

// se_ComplianceItemEntry omitted.

// se_ComplianceItemEntryList omitted.

// se_ComplianceResourceIdList omitted.

// se_ComplianceResourceTypeList omitted.

// se_ComplianceStringFilter omitted.

// se_ComplianceStringFilterList omitted.

// se_ComplianceStringFilterValueList omitted.

/**
 * serializeAws_json1_1CreateActivationRequest
 */
const se_CreateActivationRequest = (input: CreateActivationRequest, context: __SerdeContext): any => {
  return take(input, {
    DefaultInstanceName: [],
    Description: [],
    ExpirationDate: (_) => Math.round(_.getTime() / 1000),
    IamRole: [],
    RegistrationLimit: [],
    RegistrationMetadata: _json,
    Tags: _json,
  });
};

// se_CreateAssociationBatchRequest omitted.

// se_CreateAssociationBatchRequestEntries omitted.

// se_CreateAssociationBatchRequestEntry omitted.

// se_CreateAssociationRequest omitted.

// se_CreateDocumentRequest omitted.

/**
 * serializeAws_json1_1CreateMaintenanceWindowRequest
 */
const se_CreateMaintenanceWindowRequest = (input: CreateMaintenanceWindowRequest, context: __SerdeContext): any => {
  return take(input, {
    AllowUnassociatedTargets: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Cutoff: [],
    Description: [],
    Duration: [],
    EndDate: [],
    Name: [],
    Schedule: [],
    ScheduleOffset: [],
    ScheduleTimezone: [],
    StartDate: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateOpsItemRequest
 */
const se_CreateOpsItemRequest = (input: CreateOpsItemRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    ActualEndTime: (_) => Math.round(_.getTime() / 1000),
    ActualStartTime: (_) => Math.round(_.getTime() / 1000),
    Category: [],
    Description: [],
    Notifications: _json,
    OperationalData: _json,
    OpsItemType: [],
    PlannedEndTime: (_) => Math.round(_.getTime() / 1000),
    PlannedStartTime: (_) => Math.round(_.getTime() / 1000),
    Priority: [],
    RelatedOpsItems: _json,
    Severity: [],
    Source: [],
    Tags: _json,
    Title: [],
  });
};

// se_CreateOpsMetadataRequest omitted.

/**
 * serializeAws_json1_1CreatePatchBaselineRequest
 */
const se_CreatePatchBaselineRequest = (input: CreatePatchBaselineRequest, context: __SerdeContext): any => {
  return take(input, {
    ApprovalRules: _json,
    ApprovedPatches: _json,
    ApprovedPatchesComplianceLevel: [],
    ApprovedPatchesEnableNonSecurity: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    GlobalFilters: _json,
    Name: [],
    OperatingSystem: [],
    RejectedPatches: _json,
    RejectedPatchesAction: [],
    Sources: _json,
    Tags: _json,
  });
};

// se_CreateResourceDataSyncRequest omitted.

// se_DeleteActivationRequest omitted.

// se_DeleteAssociationRequest omitted.

// se_DeleteDocumentRequest omitted.

/**
 * serializeAws_json1_1DeleteInventoryRequest
 */
const se_DeleteInventoryRequest = (input: DeleteInventoryRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DryRun: [],
    SchemaDeleteOption: [],
    TypeName: [],
  });
};

// se_DeleteMaintenanceWindowRequest omitted.

// se_DeleteOpsMetadataRequest omitted.

// se_DeleteParameterRequest omitted.

// se_DeleteParametersRequest omitted.

// se_DeletePatchBaselineRequest omitted.

// se_DeleteResourceDataSyncRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeregisterManagedInstanceRequest omitted.

// se_DeregisterPatchBaselineForPatchGroupRequest omitted.

// se_DeregisterTargetFromMaintenanceWindowRequest omitted.

// se_DeregisterTaskFromMaintenanceWindowRequest omitted.

// se_DescribeActivationsFilter omitted.

// se_DescribeActivationsFilterList omitted.

// se_DescribeActivationsRequest omitted.

// se_DescribeAssociationExecutionsRequest omitted.

// se_DescribeAssociationExecutionTargetsRequest omitted.

// se_DescribeAssociationRequest omitted.

// se_DescribeAutomationExecutionsRequest omitted.

// se_DescribeAutomationStepExecutionsRequest omitted.

// se_DescribeAvailablePatchesRequest omitted.

// se_DescribeDocumentPermissionRequest omitted.

// se_DescribeDocumentRequest omitted.

// se_DescribeEffectiveInstanceAssociationsRequest omitted.

// se_DescribeEffectivePatchesForPatchBaselineRequest omitted.

// se_DescribeInstanceAssociationsStatusRequest omitted.

// se_DescribeInstanceInformationRequest omitted.

// se_DescribeInstancePatchesRequest omitted.

// se_DescribeInstancePatchStatesForPatchGroupRequest omitted.

// se_DescribeInstancePatchStatesRequest omitted.

// se_DescribeInventoryDeletionsRequest omitted.

// se_DescribeMaintenanceWindowExecutionsRequest omitted.

// se_DescribeMaintenanceWindowExecutionTaskInvocationsRequest omitted.

// se_DescribeMaintenanceWindowExecutionTasksRequest omitted.

// se_DescribeMaintenanceWindowScheduleRequest omitted.

// se_DescribeMaintenanceWindowsForTargetRequest omitted.

// se_DescribeMaintenanceWindowsRequest omitted.

// se_DescribeMaintenanceWindowTargetsRequest omitted.

// se_DescribeMaintenanceWindowTasksRequest omitted.

// se_DescribeOpsItemsRequest omitted.

// se_DescribeParametersRequest omitted.

// se_DescribePatchBaselinesRequest omitted.

// se_DescribePatchGroupsRequest omitted.

// se_DescribePatchGroupStateRequest omitted.

// se_DescribePatchPropertiesRequest omitted.

// se_DescribeSessionsRequest omitted.

// se_DisassociateOpsItemRelatedItemRequest omitted.

// se_DocumentFilter omitted.

// se_DocumentFilterList omitted.

// se_DocumentKeyValuesFilter omitted.

// se_DocumentKeyValuesFilterList omitted.

// se_DocumentKeyValuesFilterValues omitted.

// se_DocumentRequires omitted.

// se_DocumentRequiresList omitted.

// se_DocumentReviewCommentList omitted.

// se_DocumentReviewCommentSource omitted.

// se_DocumentReviews omitted.

// se_GetAutomationExecutionRequest omitted.

// se_GetCalendarStateRequest omitted.

// se_GetCommandInvocationRequest omitted.

// se_GetConnectionStatusRequest omitted.

// se_GetDefaultPatchBaselineRequest omitted.

// se_GetDeployablePatchSnapshotForInstanceRequest omitted.

// se_GetDocumentRequest omitted.

/**
 * serializeAws_json1_1GetInventoryRequest
 */
const se_GetInventoryRequest = (input: GetInventoryRequest, context: __SerdeContext): any => {
  return take(input, {
    Aggregators: (_) => se_InventoryAggregatorList(_, context),
    Filters: _json,
    MaxResults: [],
    NextToken: [],
    ResultAttributes: _json,
  });
};

// se_GetInventorySchemaRequest omitted.

// se_GetMaintenanceWindowExecutionRequest omitted.

// se_GetMaintenanceWindowExecutionTaskInvocationRequest omitted.

// se_GetMaintenanceWindowExecutionTaskRequest omitted.

// se_GetMaintenanceWindowRequest omitted.

// se_GetMaintenanceWindowTaskRequest omitted.

// se_GetOpsItemRequest omitted.

// se_GetOpsMetadataRequest omitted.

/**
 * serializeAws_json1_1GetOpsSummaryRequest
 */
const se_GetOpsSummaryRequest = (input: GetOpsSummaryRequest, context: __SerdeContext): any => {
  return take(input, {
    Aggregators: (_) => se_OpsAggregatorList(_, context),
    Filters: _json,
    MaxResults: [],
    NextToken: [],
    ResultAttributes: _json,
    SyncName: [],
  });
};

// se_GetParameterHistoryRequest omitted.

// se_GetParameterRequest omitted.

// se_GetParametersByPathRequest omitted.

// se_GetParametersRequest omitted.

// se_GetPatchBaselineForPatchGroupRequest omitted.

// se_GetPatchBaselineRequest omitted.

// se_GetResourcePoliciesRequest omitted.

// se_GetServiceSettingRequest omitted.

// se_InstanceAssociationOutputLocation omitted.

// se_InstanceIdList omitted.

// se_InstanceInformationFilter omitted.

// se_InstanceInformationFilterList omitted.

// se_InstanceInformationFilterValueSet omitted.

// se_InstanceInformationStringFilter omitted.

// se_InstanceInformationStringFilterList omitted.

// se_InstancePatchStateFilter omitted.

// se_InstancePatchStateFilterList omitted.

// se_InstancePatchStateFilterValues omitted.

/**
 * serializeAws_json1_1InventoryAggregator
 */
const se_InventoryAggregator = (input: InventoryAggregator, context: __SerdeContext): any => {
  return take(input, {
    Aggregators: (_) => se_InventoryAggregatorList(_, context),
    Expression: [],
    Groups: _json,
  });
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

// se_InventoryFilter omitted.

// se_InventoryFilterList omitted.

// se_InventoryFilterValueList omitted.

// se_InventoryGroup omitted.

// se_InventoryGroupList omitted.

// se_InventoryItem omitted.

// se_InventoryItemContentContext omitted.

// se_InventoryItemEntry omitted.

// se_InventoryItemEntryList omitted.

// se_InventoryItemList omitted.

// se_KeyList omitted.

// se_LabelParameterVersionRequest omitted.

// se_ListAssociationsRequest omitted.

// se_ListAssociationVersionsRequest omitted.

// se_ListCommandInvocationsRequest omitted.

// se_ListCommandsRequest omitted.

// se_ListComplianceItemsRequest omitted.

// se_ListComplianceSummariesRequest omitted.

// se_ListDocumentMetadataHistoryRequest omitted.

// se_ListDocumentsRequest omitted.

// se_ListDocumentVersionsRequest omitted.

// se_ListInventoryEntriesRequest omitted.

// se_ListOpsItemEventsRequest omitted.

// se_ListOpsItemRelatedItemsRequest omitted.

// se_ListOpsMetadataRequest omitted.

// se_ListResourceComplianceSummariesRequest omitted.

// se_ListResourceDataSyncRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_LoggingInfo omitted.

// se_MaintenanceWindowAutomationParameters omitted.

// se_MaintenanceWindowFilter omitted.

// se_MaintenanceWindowFilterList omitted.

// se_MaintenanceWindowFilterValues omitted.

/**
 * serializeAws_json1_1MaintenanceWindowLambdaParameters
 */
const se_MaintenanceWindowLambdaParameters = (
  input: MaintenanceWindowLambdaParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientContext: [],
    Payload: context.base64Encoder,
    Qualifier: [],
  });
};

// se_MaintenanceWindowRunCommandParameters omitted.

// se_MaintenanceWindowStepFunctionsParameters omitted.

/**
 * serializeAws_json1_1MaintenanceWindowTaskInvocationParameters
 */
const se_MaintenanceWindowTaskInvocationParameters = (
  input: MaintenanceWindowTaskInvocationParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    Automation: _json,
    Lambda: (_) => se_MaintenanceWindowLambdaParameters(_, context),
    RunCommand: _json,
    StepFunctions: _json,
  });
};

// se_MaintenanceWindowTaskParameters omitted.

// se_MaintenanceWindowTaskParameterValueExpression omitted.

// se_MaintenanceWindowTaskParameterValueList omitted.

// se_MetadataKeysToDeleteList omitted.

// se_MetadataMap omitted.

// se_MetadataValue omitted.

// se_ModifyDocumentPermissionRequest omitted.

// se_NotificationConfig omitted.

// se_NotificationEventList omitted.

/**
 * serializeAws_json1_1OpsAggregator
 */
const se_OpsAggregator = (input: OpsAggregator, context: __SerdeContext): any => {
  return take(input, {
    AggregatorType: [],
    Aggregators: (_) => se_OpsAggregatorList(_, context),
    AttributeName: [],
    Filters: _json,
    TypeName: [],
    Values: _json,
  });
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

// se_OpsAggregatorValueMap omitted.

// se_OpsFilter omitted.

// se_OpsFilterList omitted.

// se_OpsFilterValueList omitted.

// se_OpsItemDataValue omitted.

// se_OpsItemEventFilter omitted.

// se_OpsItemEventFilters omitted.

// se_OpsItemEventFilterValues omitted.

// se_OpsItemFilter omitted.

// se_OpsItemFilters omitted.

// se_OpsItemFilterValues omitted.

// se_OpsItemNotification omitted.

// se_OpsItemNotifications omitted.

// se_OpsItemOperationalData omitted.

// se_OpsItemOpsDataKeysList omitted.

// se_OpsItemRelatedItemsFilter omitted.

// se_OpsItemRelatedItemsFilters omitted.

// se_OpsItemRelatedItemsFilterValues omitted.

// se_OpsMetadataFilter omitted.

// se_OpsMetadataFilterList omitted.

// se_OpsMetadataFilterValueList omitted.

// se_OpsResultAttribute omitted.

// se_OpsResultAttributeList omitted.

// se_ParameterLabelList omitted.

// se_ParameterNameList omitted.

// se_Parameters omitted.

// se_ParametersFilter omitted.

// se_ParametersFilterList omitted.

// se_ParametersFilterValueList omitted.

// se_ParameterStringFilter omitted.

// se_ParameterStringFilterList omitted.

// se_ParameterStringFilterValueList omitted.

// se_ParameterValueList omitted.

// se_PatchFilter omitted.

// se_PatchFilterGroup omitted.

// se_PatchFilterList omitted.

// se_PatchFilterValueList omitted.

// se_PatchIdList omitted.

// se_PatchOrchestratorFilter omitted.

// se_PatchOrchestratorFilterList omitted.

// se_PatchOrchestratorFilterValues omitted.

// se_PatchRule omitted.

// se_PatchRuleGroup omitted.

// se_PatchRuleList omitted.

// se_PatchSource omitted.

// se_PatchSourceList omitted.

// se_PatchSourceProductList omitted.

/**
 * serializeAws_json1_1PutComplianceItemsRequest
 */
const se_PutComplianceItemsRequest = (input: PutComplianceItemsRequest, context: __SerdeContext): any => {
  return take(input, {
    ComplianceType: [],
    ExecutionSummary: (_) => se_ComplianceExecutionSummary(_, context),
    ItemContentHash: [],
    Items: _json,
    ResourceId: [],
    ResourceType: [],
    UploadType: [],
  });
};

// se_PutInventoryRequest omitted.

// se_PutParameterRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_Regions omitted.

// se_RegisterDefaultPatchBaselineRequest omitted.

// se_RegisterPatchBaselineForPatchGroupRequest omitted.

/**
 * serializeAws_json1_1RegisterTargetWithMaintenanceWindowRequest
 */
const se_RegisterTargetWithMaintenanceWindowRequest = (
  input: RegisterTargetWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    OwnerInformation: [],
    ResourceType: [],
    Targets: _json,
    WindowId: [],
  });
};

/**
 * serializeAws_json1_1RegisterTaskWithMaintenanceWindowRequest
 */
const se_RegisterTaskWithMaintenanceWindowRequest = (
  input: RegisterTaskWithMaintenanceWindowRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AlarmConfiguration: _json,
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CutoffBehavior: [],
    Description: [],
    LoggingInfo: _json,
    MaxConcurrency: [],
    MaxErrors: [],
    Name: [],
    Priority: [],
    ServiceRoleArn: [],
    Targets: _json,
    TaskArn: [],
    TaskInvocationParameters: (_) => se_MaintenanceWindowTaskInvocationParameters(_, context),
    TaskParameters: _json,
    TaskType: [],
    WindowId: [],
  });
};

// se_RegistrationMetadataItem omitted.

// se_RegistrationMetadataList omitted.

// se_RelatedOpsItem omitted.

// se_RelatedOpsItems omitted.

// se_RemoveTagsFromResourceRequest omitted.

// se_ResetServiceSettingRequest omitted.

// se_ResourceDataSyncAwsOrganizationsSource omitted.

// se_ResourceDataSyncDestinationDataSharing omitted.

// se_ResourceDataSyncOrganizationalUnit omitted.

// se_ResourceDataSyncOrganizationalUnitList omitted.

// se_ResourceDataSyncS3Destination omitted.

// se_ResourceDataSyncSource omitted.

// se_ResourceDataSyncSourceRegionList omitted.

// se_ResultAttribute omitted.

// se_ResultAttributeList omitted.

// se_ResumeSessionRequest omitted.

// se_Runbook omitted.

// se_Runbooks omitted.

// se_S3OutputLocation omitted.

// se_SendAutomationSignalRequest omitted.

// se_SendCommandRequest omitted.

// se_SessionFilter omitted.

// se_SessionFilterList omitted.

// se_SessionManagerParameters omitted.

// se_SessionManagerParameterValueList omitted.

// se_StartAssociationsOnceRequest omitted.

// se_StartAutomationExecutionRequest omitted.

/**
 * serializeAws_json1_1StartChangeRequestExecutionRequest
 */
const se_StartChangeRequestExecutionRequest = (
  input: StartChangeRequestExecutionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AutoApprove: [],
    ChangeDetails: [],
    ChangeRequestName: [],
    ClientToken: [],
    DocumentName: [],
    DocumentVersion: [],
    Parameters: _json,
    Runbooks: _json,
    ScheduledEndTime: (_) => Math.round(_.getTime() / 1000),
    ScheduledTime: (_) => Math.round(_.getTime() / 1000),
    Tags: _json,
  });
};

// se_StartSessionRequest omitted.

// se_StepExecutionFilter omitted.

// se_StepExecutionFilterList omitted.

// se_StepExecutionFilterValueList omitted.

// se_StopAutomationExecutionRequest omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_Target omitted.

// se_TargetLocation omitted.

// se_TargetLocations omitted.

// se_TargetMap omitted.

// se_TargetMaps omitted.

// se_TargetMapValueList omitted.

// se_Targets omitted.

// se_TargetValues omitted.

// se_TerminateSessionRequest omitted.

// se_UnlabelParameterVersionRequest omitted.

// se_UpdateAssociationRequest omitted.

/**
 * serializeAws_json1_1UpdateAssociationStatusRequest
 */
const se_UpdateAssociationStatusRequest = (input: UpdateAssociationStatusRequest, context: __SerdeContext): any => {
  return take(input, {
    AssociationStatus: (_) => se_AssociationStatus(_, context),
    InstanceId: [],
    Name: [],
  });
};

// se_UpdateDocumentDefaultVersionRequest omitted.

// se_UpdateDocumentMetadataRequest omitted.

// se_UpdateDocumentRequest omitted.

// se_UpdateMaintenanceWindowRequest omitted.

// se_UpdateMaintenanceWindowTargetRequest omitted.

/**
 * serializeAws_json1_1UpdateMaintenanceWindowTaskRequest
 */
const se_UpdateMaintenanceWindowTaskRequest = (
  input: UpdateMaintenanceWindowTaskRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AlarmConfiguration: _json,
    CutoffBehavior: [],
    Description: [],
    LoggingInfo: _json,
    MaxConcurrency: [],
    MaxErrors: [],
    Name: [],
    Priority: [],
    Replace: [],
    ServiceRoleArn: [],
    Targets: _json,
    TaskArn: [],
    TaskInvocationParameters: (_) => se_MaintenanceWindowTaskInvocationParameters(_, context),
    TaskParameters: _json,
    WindowId: [],
    WindowTaskId: [],
  });
};

// se_UpdateManagedInstanceRoleRequest omitted.

/**
 * serializeAws_json1_1UpdateOpsItemRequest
 */
const se_UpdateOpsItemRequest = (input: UpdateOpsItemRequest, context: __SerdeContext): any => {
  return take(input, {
    ActualEndTime: (_) => Math.round(_.getTime() / 1000),
    ActualStartTime: (_) => Math.round(_.getTime() / 1000),
    Category: [],
    Description: [],
    Notifications: _json,
    OperationalData: _json,
    OperationalDataToDelete: _json,
    OpsItemArn: [],
    OpsItemId: [],
    PlannedEndTime: (_) => Math.round(_.getTime() / 1000),
    PlannedStartTime: (_) => Math.round(_.getTime() / 1000),
    Priority: [],
    RelatedOpsItems: _json,
    Severity: [],
    Status: [],
    Title: [],
  });
};

// se_UpdateOpsMetadataRequest omitted.

// se_UpdatePatchBaselineRequest omitted.

// se_UpdateResourceDataSyncRequest omitted.

// se_UpdateServiceSettingRequest omitted.

// de_AccountIdList omitted.

// de_Accounts omitted.

// de_AccountSharingInfo omitted.

// de_AccountSharingInfoList omitted.

/**
 * deserializeAws_json1_1Activation
 */
const de_Activation = (output: any, context: __SerdeContext): Activation => {
  return take(output, {
    ActivationId: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultInstanceName: __expectString,
    Description: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Expired: __expectBoolean,
    IamRole: __expectString,
    RegistrationLimit: __expectInt32,
    RegistrationsCount: __expectInt32,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ActivationList
 */
const de_ActivationList = (output: any, context: __SerdeContext): Activation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Activation(entry, context);
    });
  return retVal;
};

// de_AddTagsToResourceResult omitted.

// de_Alarm omitted.

// de_AlarmConfiguration omitted.

// de_AlarmList omitted.

// de_AlarmStateInformation omitted.

// de_AlarmStateInformationList omitted.

// de_AlreadyExistsException omitted.

// de_AssociatedInstances omitted.

// de_AssociateOpsItemRelatedItemResponse omitted.

/**
 * deserializeAws_json1_1Association
 */
const de_Association = (output: any, context: __SerdeContext): Association => {
  return take(output, {
    AssociationId: __expectString,
    AssociationName: __expectString,
    AssociationVersion: __expectString,
    DocumentVersion: __expectString,
    InstanceId: __expectString,
    LastExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Overview: _json,
    ScheduleExpression: __expectString,
    ScheduleOffset: __expectInt32,
    TargetMaps: _json,
    Targets: _json,
  }) as any;
};

// de_AssociationAlreadyExists omitted.

/**
 * deserializeAws_json1_1AssociationDescription
 */
const de_AssociationDescription = (output: any, context: __SerdeContext): AssociationDescription => {
  return take(output, {
    AlarmConfiguration: _json,
    ApplyOnlyAtCronInterval: __expectBoolean,
    AssociationId: __expectString,
    AssociationName: __expectString,
    AssociationVersion: __expectString,
    AutomationTargetParameterName: __expectString,
    CalendarNames: _json,
    ComplianceSeverity: __expectString,
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentVersion: __expectString,
    InstanceId: __expectString,
    LastExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessfulExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateAssociationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Name: __expectString,
    OutputLocation: _json,
    Overview: _json,
    Parameters: _json,
    ScheduleExpression: __expectString,
    ScheduleOffset: __expectInt32,
    Status: (_: any) => de_AssociationStatus(_, context),
    SyncCompliance: __expectString,
    TargetLocations: _json,
    TargetMaps: _json,
    Targets: _json,
    TriggeredAlarms: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AssociationDescriptionList
 */
const de_AssociationDescriptionList = (output: any, context: __SerdeContext): AssociationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationDescription(entry, context);
    });
  return retVal;
};

// de_AssociationDoesNotExist omitted.

/**
 * deserializeAws_json1_1AssociationExecution
 */
const de_AssociationExecution = (output: any, context: __SerdeContext): AssociationExecution => {
  return take(output, {
    AlarmConfiguration: _json,
    AssociationId: __expectString,
    AssociationVersion: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DetailedStatus: __expectString,
    ExecutionId: __expectString,
    LastExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceCountByStatus: __expectString,
    Status: __expectString,
    TriggeredAlarms: _json,
  }) as any;
};

// de_AssociationExecutionDoesNotExist omitted.

/**
 * deserializeAws_json1_1AssociationExecutionsList
 */
const de_AssociationExecutionsList = (output: any, context: __SerdeContext): AssociationExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationExecutionTarget
 */
const de_AssociationExecutionTarget = (output: any, context: __SerdeContext): AssociationExecutionTarget => {
  return take(output, {
    AssociationId: __expectString,
    AssociationVersion: __expectString,
    DetailedStatus: __expectString,
    ExecutionId: __expectString,
    LastExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OutputSource: _json,
    ResourceId: __expectString,
    ResourceType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AssociationExecutionTargetsList
 */
const de_AssociationExecutionTargetsList = (output: any, context: __SerdeContext): AssociationExecutionTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationExecutionTarget(entry, context);
    });
  return retVal;
};

// de_AssociationLimitExceeded omitted.

/**
 * deserializeAws_json1_1AssociationList
 */
const de_AssociationList = (output: any, context: __SerdeContext): Association[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Association(entry, context);
    });
  return retVal;
};

// de_AssociationOverview omitted.

/**
 * deserializeAws_json1_1AssociationStatus
 */
const de_AssociationStatus = (output: any, context: __SerdeContext): AssociationStatus => {
  return take(output, {
    AdditionalInfo: __expectString,
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Name: __expectString,
  }) as any;
};

// de_AssociationStatusAggregatedCount omitted.

/**
 * deserializeAws_json1_1AssociationVersionInfo
 */
const de_AssociationVersionInfo = (output: any, context: __SerdeContext): AssociationVersionInfo => {
  return take(output, {
    ApplyOnlyAtCronInterval: __expectBoolean,
    AssociationId: __expectString,
    AssociationName: __expectString,
    AssociationVersion: __expectString,
    CalendarNames: _json,
    ComplianceSeverity: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentVersion: __expectString,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Name: __expectString,
    OutputLocation: _json,
    Parameters: _json,
    ScheduleExpression: __expectString,
    ScheduleOffset: __expectInt32,
    SyncCompliance: __expectString,
    TargetLocations: _json,
    TargetMaps: _json,
    Targets: _json,
  }) as any;
};

// de_AssociationVersionLimitExceeded omitted.

/**
 * deserializeAws_json1_1AssociationVersionList
 */
const de_AssociationVersionList = (output: any, context: __SerdeContext): AssociationVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationVersionInfo(entry, context);
    });
  return retVal;
};

// de_AttachmentContent omitted.

// de_AttachmentContentList omitted.

// de_AttachmentInformation omitted.

// de_AttachmentInformationList omitted.

// de_AutomationDefinitionNotApprovedException omitted.

// de_AutomationDefinitionNotFoundException omitted.

// de_AutomationDefinitionVersionNotFoundException omitted.

/**
 * deserializeAws_json1_1AutomationExecution
 */
const de_AutomationExecution = (output: any, context: __SerdeContext): AutomationExecution => {
  return take(output, {
    AlarmConfiguration: _json,
    AssociationId: __expectString,
    AutomationExecutionId: __expectString,
    AutomationExecutionStatus: __expectString,
    AutomationSubtype: __expectString,
    ChangeRequestName: __expectString,
    CurrentAction: __expectString,
    CurrentStepName: __expectString,
    DocumentName: __expectString,
    DocumentVersion: __expectString,
    ExecutedBy: __expectString,
    ExecutionEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureMessage: __expectString,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Mode: __expectString,
    OpsItemId: __expectString,
    Outputs: _json,
    Parameters: _json,
    ParentAutomationExecutionId: __expectString,
    ProgressCounters: _json,
    ResolvedTargets: _json,
    Runbooks: _json,
    ScheduledTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StepExecutions: (_: any) => de_StepExecutionList(_, context),
    StepExecutionsTruncated: __expectBoolean,
    Target: __expectString,
    TargetLocations: _json,
    TargetMaps: _json,
    TargetParameterName: __expectString,
    Targets: _json,
    TriggeredAlarms: _json,
  }) as any;
};

// de_AutomationExecutionLimitExceededException omitted.

/**
 * deserializeAws_json1_1AutomationExecutionMetadata
 */
const de_AutomationExecutionMetadata = (output: any, context: __SerdeContext): AutomationExecutionMetadata => {
  return take(output, {
    AlarmConfiguration: _json,
    AssociationId: __expectString,
    AutomationExecutionId: __expectString,
    AutomationExecutionStatus: __expectString,
    AutomationSubtype: __expectString,
    AutomationType: __expectString,
    ChangeRequestName: __expectString,
    CurrentAction: __expectString,
    CurrentStepName: __expectString,
    DocumentName: __expectString,
    DocumentVersion: __expectString,
    ExecutedBy: __expectString,
    ExecutionEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureMessage: __expectString,
    LogFile: __expectString,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Mode: __expectString,
    OpsItemId: __expectString,
    Outputs: _json,
    ParentAutomationExecutionId: __expectString,
    ResolvedTargets: _json,
    Runbooks: _json,
    ScheduledTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Target: __expectString,
    TargetMaps: _json,
    TargetParameterName: __expectString,
    Targets: _json,
    TriggeredAlarms: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AutomationExecutionMetadataList
 */
const de_AutomationExecutionMetadataList = (output: any, context: __SerdeContext): AutomationExecutionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutomationExecutionMetadata(entry, context);
    });
  return retVal;
};

// de_AutomationExecutionNotFoundException omitted.

// de_AutomationParameterMap omitted.

// de_AutomationParameterValueList omitted.

// de_AutomationStepNotFoundException omitted.

// de_CalendarNameOrARNList omitted.

// de_CancelCommandResult omitted.

// de_CancelMaintenanceWindowExecutionResult omitted.

// de_CategoryEnumList omitted.

// de_CategoryList omitted.

// de_CloudWatchOutputConfig omitted.

/**
 * deserializeAws_json1_1Command
 */
const de_Command = (output: any, context: __SerdeContext): Command => {
  return take(output, {
    AlarmConfiguration: _json,
    CloudWatchOutputConfig: _json,
    CommandId: __expectString,
    Comment: __expectString,
    CompletedCount: __expectInt32,
    DeliveryTimedOutCount: __expectInt32,
    DocumentName: __expectString,
    DocumentVersion: __expectString,
    ErrorCount: __expectInt32,
    ExpiresAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InstanceIds: _json,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    NotificationConfig: _json,
    OutputS3BucketName: __expectString,
    OutputS3KeyPrefix: __expectString,
    OutputS3Region: __expectString,
    Parameters: _json,
    RequestedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServiceRole: __expectString,
    Status: __expectString,
    StatusDetails: __expectString,
    TargetCount: __expectInt32,
    Targets: _json,
    TimeoutSeconds: __expectInt32,
    TriggeredAlarms: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CommandInvocation
 */
const de_CommandInvocation = (output: any, context: __SerdeContext): CommandInvocation => {
  return take(output, {
    CloudWatchOutputConfig: _json,
    CommandId: __expectString,
    CommandPlugins: (_: any) => de_CommandPluginList(_, context),
    Comment: __expectString,
    DocumentName: __expectString,
    DocumentVersion: __expectString,
    InstanceId: __expectString,
    InstanceName: __expectString,
    NotificationConfig: _json,
    RequestedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServiceRole: __expectString,
    StandardErrorUrl: __expectString,
    StandardOutputUrl: __expectString,
    Status: __expectString,
    StatusDetails: __expectString,
    TraceOutput: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CommandInvocationList
 */
const de_CommandInvocationList = (output: any, context: __SerdeContext): CommandInvocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Command(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommandPlugin
 */
const de_CommandPlugin = (output: any, context: __SerdeContext): CommandPlugin => {
  return take(output, {
    Name: __expectString,
    Output: __expectString,
    OutputS3BucketName: __expectString,
    OutputS3KeyPrefix: __expectString,
    OutputS3Region: __expectString,
    ResponseCode: __expectInt32,
    ResponseFinishDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResponseStartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StandardErrorUrl: __expectString,
    StandardOutputUrl: __expectString,
    Status: __expectString,
    StatusDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CommandPluginList
 */
const de_CommandPluginList = (output: any, context: __SerdeContext): CommandPlugin[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommandPlugin(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceExecutionSummary
 */
const de_ComplianceExecutionSummary = (output: any, context: __SerdeContext): ComplianceExecutionSummary => {
  return take(output, {
    ExecutionId: __expectString,
    ExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ComplianceItem
 */
const de_ComplianceItem = (output: any, context: __SerdeContext): ComplianceItem => {
  return take(output, {
    ComplianceType: __expectString,
    Details: _json,
    ExecutionSummary: (_: any) => de_ComplianceExecutionSummary(_, context),
    Id: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    Severity: __expectString,
    Status: __expectString,
    Title: __expectString,
  }) as any;
};

// de_ComplianceItemDetails omitted.

/**
 * deserializeAws_json1_1ComplianceItemList
 */
const de_ComplianceItemList = (output: any, context: __SerdeContext): ComplianceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComplianceItem(entry, context);
    });
  return retVal;
};

// de_ComplianceSummaryItem omitted.

// de_ComplianceSummaryItemList omitted.

// de_ComplianceTypeCountLimitExceededException omitted.

// de_CompliantSummary omitted.

// de_CreateActivationResult omitted.

// de_CreateAssociationBatchRequestEntry omitted.

/**
 * deserializeAws_json1_1CreateAssociationBatchResult
 */
const de_CreateAssociationBatchResult = (output: any, context: __SerdeContext): CreateAssociationBatchResult => {
  return take(output, {
    Failed: _json,
    Successful: (_: any) => de_AssociationDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAssociationResult
 */
const de_CreateAssociationResult = (output: any, context: __SerdeContext): CreateAssociationResult => {
  return take(output, {
    AssociationDescription: (_: any) => de_AssociationDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDocumentResult
 */
const de_CreateDocumentResult = (output: any, context: __SerdeContext): CreateDocumentResult => {
  return take(output, {
    DocumentDescription: (_: any) => de_DocumentDescription(_, context),
  }) as any;
};

// de_CreateMaintenanceWindowResult omitted.

// de_CreateOpsItemResponse omitted.

// de_CreateOpsMetadataResult omitted.

// de_CreatePatchBaselineResult omitted.

// de_CreateResourceDataSyncResult omitted.

// de_CustomSchemaCountLimitExceededException omitted.

// de_DeleteActivationResult omitted.

// de_DeleteAssociationResult omitted.

// de_DeleteDocumentResult omitted.

// de_DeleteInventoryResult omitted.

// de_DeleteMaintenanceWindowResult omitted.

// de_DeleteOpsMetadataResult omitted.

// de_DeleteParameterResult omitted.

// de_DeleteParametersResult omitted.

// de_DeletePatchBaselineResult omitted.

// de_DeleteResourceDataSyncResult omitted.

// de_DeleteResourcePolicyResponse omitted.

// de_DeregisterManagedInstanceResult omitted.

// de_DeregisterPatchBaselineForPatchGroupResult omitted.

// de_DeregisterTargetFromMaintenanceWindowResult omitted.

// de_DeregisterTaskFromMaintenanceWindowResult omitted.

/**
 * deserializeAws_json1_1DescribeActivationsResult
 */
const de_DescribeActivationsResult = (output: any, context: __SerdeContext): DescribeActivationsResult => {
  return take(output, {
    ActivationList: (_: any) => de_ActivationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionsResult
 */
const de_DescribeAssociationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionsResult => {
  return take(output, {
    AssociationExecutions: (_: any) => de_AssociationExecutionsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationExecutionTargetsResult
 */
const de_DescribeAssociationExecutionTargetsResult = (
  output: any,
  context: __SerdeContext
): DescribeAssociationExecutionTargetsResult => {
  return take(output, {
    AssociationExecutionTargets: (_: any) => de_AssociationExecutionTargetsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAssociationResult
 */
const de_DescribeAssociationResult = (output: any, context: __SerdeContext): DescribeAssociationResult => {
  return take(output, {
    AssociationDescription: (_: any) => de_AssociationDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutomationExecutionsResult
 */
const de_DescribeAutomationExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationExecutionsResult => {
  return take(output, {
    AutomationExecutionMetadataList: (_: any) => de_AutomationExecutionMetadataList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutomationStepExecutionsResult
 */
const de_DescribeAutomationStepExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAutomationStepExecutionsResult => {
  return take(output, {
    NextToken: __expectString,
    StepExecutions: (_: any) => de_StepExecutionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAvailablePatchesResult
 */
const de_DescribeAvailablePatchesResult = (output: any, context: __SerdeContext): DescribeAvailablePatchesResult => {
  return take(output, {
    NextToken: __expectString,
    Patches: (_: any) => de_PatchList(_, context),
  }) as any;
};

// de_DescribeDocumentPermissionResponse omitted.

/**
 * deserializeAws_json1_1DescribeDocumentResult
 */
const de_DescribeDocumentResult = (output: any, context: __SerdeContext): DescribeDocumentResult => {
  return take(output, {
    Document: (_: any) => de_DocumentDescription(_, context),
  }) as any;
};

// de_DescribeEffectiveInstanceAssociationsResult omitted.

/**
 * deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineResult
 */
const de_DescribeEffectivePatchesForPatchBaselineResult = (
  output: any,
  context: __SerdeContext
): DescribeEffectivePatchesForPatchBaselineResult => {
  return take(output, {
    EffectivePatches: (_: any) => de_EffectivePatchList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstanceAssociationsStatusResult
 */
const de_DescribeInstanceAssociationsStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceAssociationsStatusResult => {
  return take(output, {
    InstanceAssociationStatusInfos: (_: any) => de_InstanceAssociationStatusInfos(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstanceInformationResult
 */
const de_DescribeInstanceInformationResult = (
  output: any,
  context: __SerdeContext
): DescribeInstanceInformationResult => {
  return take(output, {
    InstanceInformationList: (_: any) => de_InstanceInformationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchesResult
 */
const de_DescribeInstancePatchesResult = (output: any, context: __SerdeContext): DescribeInstancePatchesResult => {
  return take(output, {
    NextToken: __expectString,
    Patches: (_: any) => de_PatchComplianceDataList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupResult
 */
const de_DescribeInstancePatchStatesForPatchGroupResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesForPatchGroupResult => {
  return take(output, {
    InstancePatchStates: (_: any) => de_InstancePatchStatesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstancePatchStatesResult
 */
const de_DescribeInstancePatchStatesResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancePatchStatesResult => {
  return take(output, {
    InstancePatchStates: (_: any) => de_InstancePatchStateList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInventoryDeletionsResult
 */
const de_DescribeInventoryDeletionsResult = (
  output: any,
  context: __SerdeContext
): DescribeInventoryDeletionsResult => {
  return take(output, {
    InventoryDeletions: (_: any) => de_InventoryDeletionsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionsResult
 */
const de_DescribeMaintenanceWindowExecutionsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionsResult => {
  return take(output, {
    NextToken: __expectString,
    WindowExecutions: (_: any) => de_MaintenanceWindowExecutionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsResult
 */
const de_DescribeMaintenanceWindowExecutionTaskInvocationsResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTaskInvocationsResult => {
  return take(output, {
    NextToken: __expectString,
    WindowExecutionTaskInvocationIdentities: (_: any) =>
      de_MaintenanceWindowExecutionTaskInvocationIdentityList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksResult
 */
const de_DescribeMaintenanceWindowExecutionTasksResult = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceWindowExecutionTasksResult => {
  return take(output, {
    NextToken: __expectString,
    WindowExecutionTaskIdentities: (_: any) => de_MaintenanceWindowExecutionTaskIdentityList(_, context),
  }) as any;
};

// de_DescribeMaintenanceWindowScheduleResult omitted.

// de_DescribeMaintenanceWindowsForTargetResult omitted.

// de_DescribeMaintenanceWindowsResult omitted.

// de_DescribeMaintenanceWindowTargetsResult omitted.

// de_DescribeMaintenanceWindowTasksResult omitted.

/**
 * deserializeAws_json1_1DescribeOpsItemsResponse
 */
const de_DescribeOpsItemsResponse = (output: any, context: __SerdeContext): DescribeOpsItemsResponse => {
  return take(output, {
    NextToken: __expectString,
    OpsItemSummaries: (_: any) => de_OpsItemSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeParametersResult
 */
const de_DescribeParametersResult = (output: any, context: __SerdeContext): DescribeParametersResult => {
  return take(output, {
    NextToken: __expectString,
    Parameters: (_: any) => de_ParameterMetadataList(_, context),
  }) as any;
};

// de_DescribePatchBaselinesResult omitted.

// de_DescribePatchGroupsResult omitted.

// de_DescribePatchGroupStateResult omitted.

// de_DescribePatchPropertiesResult omitted.

/**
 * deserializeAws_json1_1DescribeSessionsResponse
 */
const de_DescribeSessionsResponse = (output: any, context: __SerdeContext): DescribeSessionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Sessions: (_: any) => de_SessionList(_, context),
  }) as any;
};

// de_DisassociateOpsItemRelatedItemResponse omitted.

// de_DocumentAlreadyExists omitted.

// de_DocumentDefaultVersionDescription omitted.

/**
 * deserializeAws_json1_1DocumentDescription
 */
const de_DocumentDescription = (output: any, context: __SerdeContext): DocumentDescription => {
  return take(output, {
    ApprovedVersion: __expectString,
    AttachmentsInformation: _json,
    Author: __expectString,
    Category: _json,
    CategoryEnum: _json,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultVersion: __expectString,
    Description: __expectString,
    DisplayName: __expectString,
    DocumentFormat: __expectString,
    DocumentType: __expectString,
    DocumentVersion: __expectString,
    Hash: __expectString,
    HashType: __expectString,
    LatestVersion: __expectString,
    Name: __expectString,
    Owner: __expectString,
    Parameters: _json,
    PendingReviewVersion: __expectString,
    PlatformTypes: _json,
    Requires: _json,
    ReviewInformation: (_: any) => de_ReviewInformationList(_, context),
    ReviewStatus: __expectString,
    SchemaVersion: __expectString,
    Sha1: __expectString,
    Status: __expectString,
    StatusInformation: __expectString,
    Tags: _json,
    TargetType: __expectString,
    VersionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentIdentifier
 */
const de_DocumentIdentifier = (output: any, context: __SerdeContext): DocumentIdentifier => {
  return take(output, {
    Author: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    DocumentFormat: __expectString,
    DocumentType: __expectString,
    DocumentVersion: __expectString,
    Name: __expectString,
    Owner: __expectString,
    PlatformTypes: _json,
    Requires: _json,
    ReviewStatus: __expectString,
    SchemaVersion: __expectString,
    Tags: _json,
    TargetType: __expectString,
    VersionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentIdentifierList
 */
const de_DocumentIdentifierList = (output: any, context: __SerdeContext): DocumentIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentIdentifier(entry, context);
    });
  return retVal;
};

// de_DocumentLimitExceeded omitted.

/**
 * deserializeAws_json1_1DocumentMetadataResponseInfo
 */
const de_DocumentMetadataResponseInfo = (output: any, context: __SerdeContext): DocumentMetadataResponseInfo => {
  return take(output, {
    ReviewerResponse: (_: any) => de_DocumentReviewerResponseList(_, context),
  }) as any;
};

// de_DocumentParameter omitted.

// de_DocumentParameterList omitted.

// de_DocumentPermissionLimit omitted.

// de_DocumentRequires omitted.

// de_DocumentRequiresList omitted.

// de_DocumentReviewCommentList omitted.

// de_DocumentReviewCommentSource omitted.

/**
 * deserializeAws_json1_1DocumentReviewerResponseList
 */
const de_DocumentReviewerResponseList = (output: any, context: __SerdeContext): DocumentReviewerResponseSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentReviewerResponseSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentReviewerResponseSource
 */
const de_DocumentReviewerResponseSource = (output: any, context: __SerdeContext): DocumentReviewerResponseSource => {
  return take(output, {
    Comment: _json,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReviewStatus: __expectString,
    Reviewer: __expectString,
    UpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentVersionInfo
 */
const de_DocumentVersionInfo = (output: any, context: __SerdeContext): DocumentVersionInfo => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    DocumentFormat: __expectString,
    DocumentVersion: __expectString,
    IsDefaultVersion: __expectBoolean,
    Name: __expectString,
    ReviewStatus: __expectString,
    Status: __expectString,
    StatusInformation: __expectString,
    VersionName: __expectString,
  }) as any;
};

// de_DocumentVersionLimitExceeded omitted.

/**
 * deserializeAws_json1_1DocumentVersionList
 */
const de_DocumentVersionList = (output: any, context: __SerdeContext): DocumentVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentVersionInfo(entry, context);
    });
  return retVal;
};

// de_DoesNotExistException omitted.

// de_DuplicateDocumentContent omitted.

// de_DuplicateDocumentVersionName omitted.

// de_DuplicateInstanceId omitted.

/**
 * deserializeAws_json1_1EffectivePatch
 */
const de_EffectivePatch = (output: any, context: __SerdeContext): EffectivePatch => {
  return take(output, {
    Patch: (_: any) => de_Patch(_, context),
    PatchStatus: (_: any) => de_PatchStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EffectivePatchList
 */
const de_EffectivePatchList = (output: any, context: __SerdeContext): EffectivePatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EffectivePatch(entry, context);
    });
  return retVal;
};

// de_FailedCreateAssociation omitted.

// de_FailedCreateAssociationList omitted.

// de_FailureDetails omitted.

// de_FeatureNotAvailableException omitted.

/**
 * deserializeAws_json1_1GetAutomationExecutionResult
 */
const de_GetAutomationExecutionResult = (output: any, context: __SerdeContext): GetAutomationExecutionResult => {
  return take(output, {
    AutomationExecution: (_: any) => de_AutomationExecution(_, context),
  }) as any;
};

// de_GetCalendarStateResponse omitted.

// de_GetCommandInvocationResult omitted.

// de_GetConnectionStatusResponse omitted.

// de_GetDefaultPatchBaselineResult omitted.

// de_GetDeployablePatchSnapshotForInstanceResult omitted.

/**
 * deserializeAws_json1_1GetDocumentResult
 */
const de_GetDocumentResult = (output: any, context: __SerdeContext): GetDocumentResult => {
  return take(output, {
    AttachmentsContent: _json,
    Content: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    DocumentFormat: __expectString,
    DocumentType: __expectString,
    DocumentVersion: __expectString,
    Name: __expectString,
    Requires: _json,
    ReviewStatus: __expectString,
    Status: __expectString,
    StatusInformation: __expectString,
    VersionName: __expectString,
  }) as any;
};

// de_GetInventoryResult omitted.

// de_GetInventorySchemaResult omitted.

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionResult
 */
const de_GetMaintenanceWindowExecutionResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionResult => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    TaskIds: _json,
    WindowExecutionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationResult
 */
const de_GetMaintenanceWindowExecutionTaskInvocationResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionTaskInvocationResult => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionId: __expectString,
    InvocationId: __expectString,
    OwnerInformation: __expectString,
    Parameters: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    TaskExecutionId: __expectString,
    TaskType: __expectString,
    WindowExecutionId: __expectString,
    WindowTargetId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowExecutionTaskResult
 */
const de_GetMaintenanceWindowExecutionTaskResult = (
  output: any,
  context: __SerdeContext
): GetMaintenanceWindowExecutionTaskResult => {
  return take(output, {
    AlarmConfiguration: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Priority: __expectInt32,
    ServiceRole: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    TaskArn: __expectString,
    TaskExecutionId: __expectString,
    TaskParameters: _json,
    TriggeredAlarms: _json,
    Type: __expectString,
    WindowExecutionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowResult
 */
const de_GetMaintenanceWindowResult = (output: any, context: __SerdeContext): GetMaintenanceWindowResult => {
  return take(output, {
    AllowUnassociatedTargets: __expectBoolean,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Cutoff: __expectInt32,
    Description: __expectString,
    Duration: __expectInt32,
    Enabled: __expectBoolean,
    EndDate: __expectString,
    ModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NextExecutionTime: __expectString,
    Schedule: __expectString,
    ScheduleOffset: __expectInt32,
    ScheduleTimezone: __expectString,
    StartDate: __expectString,
    WindowId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMaintenanceWindowTaskResult
 */
const de_GetMaintenanceWindowTaskResult = (output: any, context: __SerdeContext): GetMaintenanceWindowTaskResult => {
  return take(output, {
    AlarmConfiguration: _json,
    CutoffBehavior: __expectString,
    Description: __expectString,
    LoggingInfo: _json,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Name: __expectString,
    Priority: __expectInt32,
    ServiceRoleArn: __expectString,
    Targets: _json,
    TaskArn: __expectString,
    TaskInvocationParameters: (_: any) => de_MaintenanceWindowTaskInvocationParameters(_, context),
    TaskParameters: _json,
    TaskType: __expectString,
    WindowId: __expectString,
    WindowTaskId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetOpsItemResponse
 */
const de_GetOpsItemResponse = (output: any, context: __SerdeContext): GetOpsItemResponse => {
  return take(output, {
    OpsItem: (_: any) => de_OpsItem(_, context),
  }) as any;
};

// de_GetOpsMetadataResult omitted.

// de_GetOpsSummaryResult omitted.

/**
 * deserializeAws_json1_1GetParameterHistoryResult
 */
const de_GetParameterHistoryResult = (output: any, context: __SerdeContext): GetParameterHistoryResult => {
  return take(output, {
    NextToken: __expectString,
    Parameters: (_: any) => de_ParameterHistoryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetParameterResult
 */
const de_GetParameterResult = (output: any, context: __SerdeContext): GetParameterResult => {
  return take(output, {
    Parameter: (_: any) => de_Parameter(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetParametersByPathResult
 */
const de_GetParametersByPathResult = (output: any, context: __SerdeContext): GetParametersByPathResult => {
  return take(output, {
    NextToken: __expectString,
    Parameters: (_: any) => de_ParameterList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetParametersResult
 */
const de_GetParametersResult = (output: any, context: __SerdeContext): GetParametersResult => {
  return take(output, {
    InvalidParameters: _json,
    Parameters: (_: any) => de_ParameterList(_, context),
  }) as any;
};

// de_GetPatchBaselineForPatchGroupResult omitted.

/**
 * deserializeAws_json1_1GetPatchBaselineResult
 */
const de_GetPatchBaselineResult = (output: any, context: __SerdeContext): GetPatchBaselineResult => {
  return take(output, {
    ApprovalRules: _json,
    ApprovedPatches: _json,
    ApprovedPatchesComplianceLevel: __expectString,
    ApprovedPatchesEnableNonSecurity: __expectBoolean,
    BaselineId: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GlobalFilters: _json,
    ModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OperatingSystem: __expectString,
    PatchGroups: _json,
    RejectedPatches: _json,
    RejectedPatchesAction: __expectString,
    Sources: _json,
  }) as any;
};

// de_GetResourcePoliciesResponse omitted.

// de_GetResourcePoliciesResponseEntries omitted.

// de_GetResourcePoliciesResponseEntry omitted.

/**
 * deserializeAws_json1_1GetServiceSettingResult
 */
const de_GetServiceSettingResult = (output: any, context: __SerdeContext): GetServiceSettingResult => {
  return take(output, {
    ServiceSetting: (_: any) => de_ServiceSetting(_, context),
  }) as any;
};

// de_HierarchyLevelLimitExceededException omitted.

// de_HierarchyTypeMismatchException omitted.

// de_IdempotentParameterMismatch omitted.

// de_IncompatiblePolicyException omitted.

// de_InstanceAggregatedAssociationOverview omitted.

// de_InstanceAssociation omitted.

// de_InstanceAssociationList omitted.

// de_InstanceAssociationOutputLocation omitted.

// de_InstanceAssociationOutputUrl omitted.

// de_InstanceAssociationStatusAggregatedCount omitted.

/**
 * deserializeAws_json1_1InstanceAssociationStatusInfo
 */
const de_InstanceAssociationStatusInfo = (output: any, context: __SerdeContext): InstanceAssociationStatusInfo => {
  return take(output, {
    AssociationId: __expectString,
    AssociationName: __expectString,
    AssociationVersion: __expectString,
    DetailedStatus: __expectString,
    DocumentVersion: __expectString,
    ErrorCode: __expectString,
    ExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionSummary: __expectString,
    InstanceId: __expectString,
    Name: __expectString,
    OutputUrl: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceAssociationStatusInfos
 */
const de_InstanceAssociationStatusInfos = (output: any, context: __SerdeContext): InstanceAssociationStatusInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceAssociationStatusInfo(entry, context);
    });
  return retVal;
};

// de_InstanceIdList omitted.

/**
 * deserializeAws_json1_1InstanceInformation
 */
const de_InstanceInformation = (output: any, context: __SerdeContext): InstanceInformation => {
  return take(output, {
    ActivationId: __expectString,
    AgentVersion: __expectString,
    AssociationOverview: _json,
    AssociationStatus: __expectString,
    ComputerName: __expectString,
    IPAddress: __expectString,
    IamRole: __expectString,
    InstanceId: __expectString,
    IsLatestVersion: __expectBoolean,
    LastAssociationExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastPingDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessfulAssociationExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PingStatus: __expectString,
    PlatformName: __expectString,
    PlatformType: __expectString,
    PlatformVersion: __expectString,
    RegistrationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceType: __expectString,
    SourceId: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceInformationList
 */
const de_InstanceInformationList = (output: any, context: __SerdeContext): InstanceInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancePatchState
 */
const de_InstancePatchState = (output: any, context: __SerdeContext): InstancePatchState => {
  return take(output, {
    BaselineId: __expectString,
    CriticalNonCompliantCount: __expectInt32,
    FailedCount: __expectInt32,
    InstallOverrideList: __expectString,
    InstalledCount: __expectInt32,
    InstalledOtherCount: __expectInt32,
    InstalledPendingRebootCount: __expectInt32,
    InstalledRejectedCount: __expectInt32,
    InstanceId: __expectString,
    LastNoRebootInstallOperationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MissingCount: __expectInt32,
    NotApplicableCount: __expectInt32,
    Operation: __expectString,
    OperationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OperationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OtherNonCompliantCount: __expectInt32,
    OwnerInformation: __expectString,
    PatchGroup: __expectString,
    RebootOption: __expectString,
    SecurityNonCompliantCount: __expectInt32,
    SnapshotId: __expectString,
    UnreportedNotApplicableCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InstancePatchStateList
 */
const de_InstancePatchStateList = (output: any, context: __SerdeContext): InstancePatchState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_InstancePatchState(entry, context);
    });
  return retVal;
};

// de_InternalServerError omitted.

// de_InvalidActivation omitted.

// de_InvalidActivationId omitted.

// de_InvalidAggregatorException omitted.

// de_InvalidAllowedPatternException omitted.

// de_InvalidAssociation omitted.

// de_InvalidAssociationVersion omitted.

// de_InvalidAutomationExecutionParametersException omitted.

// de_InvalidAutomationSignalException omitted.

// de_InvalidAutomationStatusUpdateException omitted.

// de_InvalidCommandId omitted.

// de_InvalidDeleteInventoryParametersException omitted.

// de_InvalidDeletionIdException omitted.

// de_InvalidDocument omitted.

// de_InvalidDocumentContent omitted.

// de_InvalidDocumentOperation omitted.

// de_InvalidDocumentSchemaVersion omitted.

// de_InvalidDocumentType omitted.

// de_InvalidDocumentVersion omitted.

// de_InvalidFilter omitted.

// de_InvalidFilterKey omitted.

// de_InvalidFilterOption omitted.

// de_InvalidFilterValue omitted.

// de_InvalidInstanceId omitted.

// de_InvalidInstanceInformationFilterValue omitted.

// de_InvalidInventoryGroupException omitted.

// de_InvalidInventoryItemContextException omitted.

// de_InvalidInventoryRequestException omitted.

// de_InvalidItemContentException omitted.

// de_InvalidKeyId omitted.

// de_InvalidNextToken omitted.

// de_InvalidNotificationConfig omitted.

// de_InvalidOptionException omitted.

// de_InvalidOutputFolder omitted.

// de_InvalidOutputLocation omitted.

// de_InvalidParameters omitted.

// de_InvalidPermissionType omitted.

// de_InvalidPluginName omitted.

// de_InvalidPolicyAttributeException omitted.

// de_InvalidPolicyTypeException omitted.

// de_InvalidResourceId omitted.

// de_InvalidResourceType omitted.

// de_InvalidResultAttributeException omitted.

// de_InvalidRole omitted.

// de_InvalidSchedule omitted.

// de_InvalidTag omitted.

// de_InvalidTarget omitted.

// de_InvalidTargetMaps omitted.

// de_InvalidTypeNameException omitted.

// de_InvalidUpdate omitted.

/**
 * deserializeAws_json1_1InventoryDeletionsList
 */
const de_InventoryDeletionsList = (output: any, context: __SerdeContext): InventoryDeletionStatusItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InventoryDeletionStatusItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InventoryDeletionStatusItem
 */
const de_InventoryDeletionStatusItem = (output: any, context: __SerdeContext): InventoryDeletionStatusItem => {
  return take(output, {
    DeletionId: __expectString,
    DeletionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionSummary: _json,
    LastStatus: __expectString,
    LastStatusMessage: __expectString,
    LastStatusUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TypeName: __expectString,
  }) as any;
};

// de_InventoryDeletionSummary omitted.

// de_InventoryDeletionSummaryItem omitted.

// de_InventoryDeletionSummaryItems omitted.

// de_InventoryItemAttribute omitted.

// de_InventoryItemAttributeList omitted.

// de_InventoryItemEntry omitted.

// de_InventoryItemEntryList omitted.

// de_InventoryItemSchema omitted.

// de_InventoryItemSchemaResultList omitted.

// de_InventoryResultEntity omitted.

// de_InventoryResultEntityList omitted.

// de_InventoryResultItem omitted.

// de_InventoryResultItemMap omitted.

// de_InvocationDoesNotExist omitted.

// de_ItemContentMismatchException omitted.

// de_ItemSizeLimitExceededException omitted.

// de_LabelParameterVersionResult omitted.

/**
 * deserializeAws_json1_1ListAssociationsResult
 */
const de_ListAssociationsResult = (output: any, context: __SerdeContext): ListAssociationsResult => {
  return take(output, {
    Associations: (_: any) => de_AssociationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAssociationVersionsResult
 */
const de_ListAssociationVersionsResult = (output: any, context: __SerdeContext): ListAssociationVersionsResult => {
  return take(output, {
    AssociationVersions: (_: any) => de_AssociationVersionList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCommandInvocationsResult
 */
const de_ListCommandInvocationsResult = (output: any, context: __SerdeContext): ListCommandInvocationsResult => {
  return take(output, {
    CommandInvocations: (_: any) => de_CommandInvocationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCommandsResult
 */
const de_ListCommandsResult = (output: any, context: __SerdeContext): ListCommandsResult => {
  return take(output, {
    Commands: (_: any) => de_CommandList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListComplianceItemsResult
 */
const de_ListComplianceItemsResult = (output: any, context: __SerdeContext): ListComplianceItemsResult => {
  return take(output, {
    ComplianceItems: (_: any) => de_ComplianceItemList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListComplianceSummariesResult omitted.

/**
 * deserializeAws_json1_1ListDocumentMetadataHistoryResponse
 */
const de_ListDocumentMetadataHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentMetadataHistoryResponse => {
  return take(output, {
    Author: __expectString,
    DocumentVersion: __expectString,
    Metadata: (_: any) => de_DocumentMetadataResponseInfo(_, context),
    Name: __expectString,
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDocumentsResult
 */
const de_ListDocumentsResult = (output: any, context: __SerdeContext): ListDocumentsResult => {
  return take(output, {
    DocumentIdentifiers: (_: any) => de_DocumentIdentifierList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDocumentVersionsResult
 */
const de_ListDocumentVersionsResult = (output: any, context: __SerdeContext): ListDocumentVersionsResult => {
  return take(output, {
    DocumentVersions: (_: any) => de_DocumentVersionList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListInventoryEntriesResult omitted.

/**
 * deserializeAws_json1_1ListOpsItemEventsResponse
 */
const de_ListOpsItemEventsResponse = (output: any, context: __SerdeContext): ListOpsItemEventsResponse => {
  return take(output, {
    NextToken: __expectString,
    Summaries: (_: any) => de_OpsItemEventSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListOpsItemRelatedItemsResponse
 */
const de_ListOpsItemRelatedItemsResponse = (output: any, context: __SerdeContext): ListOpsItemRelatedItemsResponse => {
  return take(output, {
    NextToken: __expectString,
    Summaries: (_: any) => de_OpsItemRelatedItemSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListOpsMetadataResult
 */
const de_ListOpsMetadataResult = (output: any, context: __SerdeContext): ListOpsMetadataResult => {
  return take(output, {
    NextToken: __expectString,
    OpsMetadataList: (_: any) => de_OpsMetadataList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListResourceComplianceSummariesResult
 */
const de_ListResourceComplianceSummariesResult = (
  output: any,
  context: __SerdeContext
): ListResourceComplianceSummariesResult => {
  return take(output, {
    NextToken: __expectString,
    ResourceComplianceSummaryItems: (_: any) => de_ResourceComplianceSummaryItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListResourceDataSyncResult
 */
const de_ListResourceDataSyncResult = (output: any, context: __SerdeContext): ListResourceDataSyncResult => {
  return take(output, {
    NextToken: __expectString,
    ResourceDataSyncItems: (_: any) => de_ResourceDataSyncItemList(_, context),
  }) as any;
};

// de_ListTagsForResourceResult omitted.

// de_LoggingInfo omitted.

// de_MaintenanceWindowAutomationParameters omitted.

/**
 * deserializeAws_json1_1MaintenanceWindowExecution
 */
const de_MaintenanceWindowExecution = (output: any, context: __SerdeContext): MaintenanceWindowExecution => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    WindowExecutionId: __expectString,
    WindowId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionList
 */
const de_MaintenanceWindowExecutionList = (output: any, context: __SerdeContext): MaintenanceWindowExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    AlarmConfiguration: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    TaskArn: __expectString,
    TaskExecutionId: __expectString,
    TaskType: __expectString,
    TriggeredAlarms: _json,
    WindowExecutionId: __expectString,
  }) as any;
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
      return de_MaintenanceWindowExecutionTaskIdentity(entry, context);
    });
  return retVal;
};

// de_MaintenanceWindowExecutionTaskIdList omitted.

/**
 * deserializeAws_json1_1MaintenanceWindowExecutionTaskInvocationIdentity
 */
const de_MaintenanceWindowExecutionTaskInvocationIdentity = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowExecutionTaskInvocationIdentity => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionId: __expectString,
    InvocationId: __expectString,
    OwnerInformation: __expectString,
    Parameters: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDetails: __expectString,
    TaskExecutionId: __expectString,
    TaskType: __expectString,
    WindowExecutionId: __expectString,
    WindowTargetId: __expectString,
  }) as any;
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
      return de_MaintenanceWindowExecutionTaskInvocationIdentity(entry, context);
    });
  return retVal;
};

// de_MaintenanceWindowIdentity omitted.

// de_MaintenanceWindowIdentityForTarget omitted.

// de_MaintenanceWindowIdentityList omitted.

/**
 * deserializeAws_json1_1MaintenanceWindowLambdaParameters
 */
const de_MaintenanceWindowLambdaParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowLambdaParameters => {
  return take(output, {
    ClientContext: __expectString,
    Payload: context.base64Decoder,
    Qualifier: __expectString,
  }) as any;
};

// de_MaintenanceWindowRunCommandParameters omitted.

// de_MaintenanceWindowsForTargetList omitted.

// de_MaintenanceWindowStepFunctionsParameters omitted.

// de_MaintenanceWindowTarget omitted.

// de_MaintenanceWindowTargetList omitted.

// de_MaintenanceWindowTask omitted.

/**
 * deserializeAws_json1_1MaintenanceWindowTaskInvocationParameters
 */
const de_MaintenanceWindowTaskInvocationParameters = (
  output: any,
  context: __SerdeContext
): MaintenanceWindowTaskInvocationParameters => {
  return take(output, {
    Automation: _json,
    Lambda: (_: any) => de_MaintenanceWindowLambdaParameters(_, context),
    RunCommand: _json,
    StepFunctions: _json,
  }) as any;
};

// de_MaintenanceWindowTaskList omitted.

// de_MaintenanceWindowTaskParameters omitted.

// de_MaintenanceWindowTaskParametersList omitted.

// de_MaintenanceWindowTaskParameterValueExpression omitted.

// de_MaintenanceWindowTaskParameterValueList omitted.

// de_MaxDocumentSizeExceeded omitted.

// de_MetadataMap omitted.

// de_MetadataValue omitted.

// de_ModifyDocumentPermissionResponse omitted.

// de_NonCompliantSummary omitted.

// de_NormalStringMap omitted.

// de_NotificationConfig omitted.

// de_NotificationEventList omitted.

// de_OpsEntity omitted.

// de_OpsEntityItem omitted.

// de_OpsEntityItemEntry omitted.

// de_OpsEntityItemEntryList omitted.

// de_OpsEntityItemMap omitted.

// de_OpsEntityList omitted.

/**
 * deserializeAws_json1_1OpsItem
 */
const de_OpsItem = (output: any, context: __SerdeContext): OpsItem => {
  return take(output, {
    ActualEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ActualStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Category: __expectString,
    CreatedBy: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedBy: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Notifications: _json,
    OperationalData: _json,
    OpsItemArn: __expectString,
    OpsItemId: __expectString,
    OpsItemType: __expectString,
    PlannedEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PlannedStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Priority: __expectInt32,
    RelatedOpsItems: _json,
    Severity: __expectString,
    Source: __expectString,
    Status: __expectString,
    Title: __expectString,
    Version: __expectString,
  }) as any;
};

// de_OpsItemAccessDeniedException omitted.

// de_OpsItemAlreadyExistsException omitted.

// de_OpsItemDataValue omitted.

/**
 * deserializeAws_json1_1OpsItemEventSummaries
 */
const de_OpsItemEventSummaries = (output: any, context: __SerdeContext): OpsItemEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpsItemEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemEventSummary
 */
const de_OpsItemEventSummary = (output: any, context: __SerdeContext): OpsItemEventSummary => {
  return take(output, {
    CreatedBy: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Detail: __expectString,
    DetailType: __expectString,
    EventId: __expectString,
    OpsItemId: __expectString,
    Source: __expectString,
  }) as any;
};

// de_OpsItemIdentity omitted.

// de_OpsItemInvalidParameterException omitted.

// de_OpsItemLimitExceededException omitted.

// de_OpsItemNotFoundException omitted.

// de_OpsItemNotification omitted.

// de_OpsItemNotifications omitted.

// de_OpsItemOperationalData omitted.

// de_OpsItemParameterNamesList omitted.

// de_OpsItemRelatedItemAlreadyExistsException omitted.

// de_OpsItemRelatedItemAssociationNotFoundException omitted.

/**
 * deserializeAws_json1_1OpsItemRelatedItemSummaries
 */
const de_OpsItemRelatedItemSummaries = (output: any, context: __SerdeContext): OpsItemRelatedItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpsItemRelatedItemSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemRelatedItemSummary
 */
const de_OpsItemRelatedItemSummary = (output: any, context: __SerdeContext): OpsItemRelatedItemSummary => {
  return take(output, {
    AssociationId: __expectString,
    AssociationType: __expectString,
    CreatedBy: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OpsItemId: __expectString,
    ResourceType: __expectString,
    ResourceUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OpsItemSummaries
 */
const de_OpsItemSummaries = (output: any, context: __SerdeContext): OpsItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpsItemSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpsItemSummary
 */
const de_OpsItemSummary = (output: any, context: __SerdeContext): OpsItemSummary => {
  return take(output, {
    ActualEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ActualStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Category: __expectString,
    CreatedBy: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OperationalData: _json,
    OpsItemId: __expectString,
    OpsItemType: __expectString,
    PlannedEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PlannedStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Priority: __expectInt32,
    Severity: __expectString,
    Source: __expectString,
    Status: __expectString,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OpsMetadata
 */
const de_OpsMetadata = (output: any, context: __SerdeContext): OpsMetadata => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedUser: __expectString,
    OpsMetadataArn: __expectString,
    ResourceId: __expectString,
  }) as any;
};

// de_OpsMetadataAlreadyExistsException omitted.

// de_OpsMetadataInvalidArgumentException omitted.

// de_OpsMetadataKeyLimitExceededException omitted.

// de_OpsMetadataLimitExceededException omitted.

/**
 * deserializeAws_json1_1OpsMetadataList
 */
const de_OpsMetadataList = (output: any, context: __SerdeContext): OpsMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpsMetadata(entry, context);
    });
  return retVal;
};

// de_OpsMetadataNotFoundException omitted.

// de_OpsMetadataTooManyUpdatesException omitted.

// de_OutputSource omitted.

/**
 * deserializeAws_json1_1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return take(output, {
    ARN: __expectString,
    DataType: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Selector: __expectString,
    SourceResult: __expectString,
    Type: __expectString,
    Value: __expectString,
    Version: __expectLong,
  }) as any;
};

// de_ParameterAlreadyExists omitted.

/**
 * deserializeAws_json1_1ParameterHistory
 */
const de_ParameterHistory = (output: any, context: __SerdeContext): ParameterHistory => {
  return take(output, {
    AllowedPattern: __expectString,
    DataType: __expectString,
    Description: __expectString,
    KeyId: __expectString,
    Labels: _json,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedUser: __expectString,
    Name: __expectString,
    Policies: _json,
    Tier: __expectString,
    Type: __expectString,
    Value: __expectString,
    Version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterHistoryList
 */
const de_ParameterHistoryList = (output: any, context: __SerdeContext): ParameterHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterHistory(entry, context);
    });
  return retVal;
};

// de_ParameterInlinePolicy omitted.

// de_ParameterLabelList omitted.

// de_ParameterLimitExceeded omitted.

/**
 * deserializeAws_json1_1ParameterList
 */
const de_ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parameter(entry, context);
    });
  return retVal;
};

// de_ParameterMaxVersionLimitExceeded omitted.

/**
 * deserializeAws_json1_1ParameterMetadata
 */
const de_ParameterMetadata = (output: any, context: __SerdeContext): ParameterMetadata => {
  return take(output, {
    AllowedPattern: __expectString,
    DataType: __expectString,
    Description: __expectString,
    KeyId: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedUser: __expectString,
    Name: __expectString,
    Policies: _json,
    Tier: __expectString,
    Type: __expectString,
    Version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterMetadataList
 */
const de_ParameterMetadataList = (output: any, context: __SerdeContext): ParameterMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterMetadata(entry, context);
    });
  return retVal;
};

// de_ParameterNameList omitted.

// de_ParameterNotFound omitted.

// de_ParameterPatternMismatchException omitted.

// de_ParameterPolicyList omitted.

// de_Parameters omitted.

// de_ParameterValueList omitted.

// de_ParameterVersionLabelLimitExceeded omitted.

// de_ParameterVersionNotFound omitted.

/**
 * deserializeAws_json1_1Patch
 */
const de_Patch = (output: any, context: __SerdeContext): Patch => {
  return take(output, {
    AdvisoryIds: _json,
    Arch: __expectString,
    BugzillaIds: _json,
    CVEIds: _json,
    Classification: __expectString,
    ContentUrl: __expectString,
    Description: __expectString,
    Epoch: __expectInt32,
    Id: __expectString,
    KbNumber: __expectString,
    Language: __expectString,
    MsrcNumber: __expectString,
    MsrcSeverity: __expectString,
    Name: __expectString,
    Product: __expectString,
    ProductFamily: __expectString,
    Release: __expectString,
    ReleaseDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Repository: __expectString,
    Severity: __expectString,
    Title: __expectString,
    Vendor: __expectString,
    Version: __expectString,
  }) as any;
};

// de_PatchAdvisoryIdList omitted.

// de_PatchBaselineIdentity omitted.

// de_PatchBaselineIdentityList omitted.

// de_PatchBugzillaIdList omitted.

/**
 * deserializeAws_json1_1PatchComplianceData
 */
const de_PatchComplianceData = (output: any, context: __SerdeContext): PatchComplianceData => {
  return take(output, {
    CVEIds: __expectString,
    Classification: __expectString,
    InstalledTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KBId: __expectString,
    Severity: __expectString,
    State: __expectString,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PatchComplianceDataList
 */
const de_PatchComplianceDataList = (output: any, context: __SerdeContext): PatchComplianceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PatchComplianceData(entry, context);
    });
  return retVal;
};

// de_PatchCVEIdList omitted.

// de_PatchFilter omitted.

// de_PatchFilterGroup omitted.

// de_PatchFilterList omitted.

// de_PatchFilterValueList omitted.

// de_PatchGroupList omitted.

// de_PatchGroupPatchBaselineMapping omitted.

// de_PatchGroupPatchBaselineMappingList omitted.

// de_PatchIdList omitted.

/**
 * deserializeAws_json1_1PatchList
 */
const de_PatchList = (output: any, context: __SerdeContext): Patch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Patch(entry, context);
    });
  return retVal;
};

// de_PatchPropertiesList omitted.

// de_PatchPropertyEntry omitted.

// de_PatchRule omitted.

// de_PatchRuleGroup omitted.

// de_PatchRuleList omitted.

// de_PatchSource omitted.

// de_PatchSourceList omitted.

// de_PatchSourceProductList omitted.

/**
 * deserializeAws_json1_1PatchStatus
 */
const de_PatchStatus = (output: any, context: __SerdeContext): PatchStatus => {
  return take(output, {
    ApprovalDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ComplianceLevel: __expectString,
    DeploymentStatus: __expectString,
  }) as any;
};

// de_PlatformTypeList omitted.

// de_PoliciesLimitExceededException omitted.

// de_ProgressCounters omitted.

// de_PutComplianceItemsResult omitted.

// de_PutInventoryResult omitted.

// de_PutParameterResult omitted.

// de_PutResourcePolicyResponse omitted.

// de_Regions omitted.

// de_RegisterDefaultPatchBaselineResult omitted.

// de_RegisterPatchBaselineForPatchGroupResult omitted.

// de_RegisterTargetWithMaintenanceWindowResult omitted.

// de_RegisterTaskWithMaintenanceWindowResult omitted.

// de_RelatedOpsItem omitted.

// de_RelatedOpsItems omitted.

// de_RemoveTagsFromResourceResult omitted.

/**
 * deserializeAws_json1_1ResetServiceSettingResult
 */
const de_ResetServiceSettingResult = (output: any, context: __SerdeContext): ResetServiceSettingResult => {
  return take(output, {
    ServiceSetting: (_: any) => de_ServiceSetting(_, context),
  }) as any;
};

// de_ResolvedTargets omitted.

/**
 * deserializeAws_json1_1ResourceComplianceSummaryItem
 */
const de_ResourceComplianceSummaryItem = (output: any, context: __SerdeContext): ResourceComplianceSummaryItem => {
  return take(output, {
    ComplianceType: __expectString,
    CompliantSummary: _json,
    ExecutionSummary: (_: any) => de_ComplianceExecutionSummary(_, context),
    NonCompliantSummary: _json,
    OverallSeverity: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    Status: __expectString,
  }) as any;
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
      return de_ResourceComplianceSummaryItem(entry, context);
    });
  return retVal;
};

// de_ResourceDataSyncAlreadyExistsException omitted.

// de_ResourceDataSyncAwsOrganizationsSource omitted.

// de_ResourceDataSyncConflictException omitted.

// de_ResourceDataSyncCountExceededException omitted.

// de_ResourceDataSyncDestinationDataSharing omitted.

// de_ResourceDataSyncInvalidConfigurationException omitted.

/**
 * deserializeAws_json1_1ResourceDataSyncItem
 */
const de_ResourceDataSyncItem = (output: any, context: __SerdeContext): ResourceDataSyncItem => {
  return take(output, {
    LastStatus: __expectString,
    LastSuccessfulSyncTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSyncStatusMessage: __expectString,
    LastSyncTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3Destination: _json,
    SyncCreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SyncLastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SyncName: __expectString,
    SyncSource: _json,
    SyncType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceDataSyncItemList
 */
const de_ResourceDataSyncItemList = (output: any, context: __SerdeContext): ResourceDataSyncItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceDataSyncItem(entry, context);
    });
  return retVal;
};

// de_ResourceDataSyncNotFoundException omitted.

// de_ResourceDataSyncOrganizationalUnit omitted.

// de_ResourceDataSyncOrganizationalUnitList omitted.

// de_ResourceDataSyncS3Destination omitted.

// de_ResourceDataSyncSourceRegionList omitted.

// de_ResourceDataSyncSourceWithState omitted.

// de_ResourceInUseException omitted.

// de_ResourceLimitExceededException omitted.

// de_ResourcePolicyConflictException omitted.

// de_ResourcePolicyInvalidParameterException omitted.

// de_ResourcePolicyLimitExceededException omitted.

// de_ResourcePolicyParameterNamesList omitted.

// de_ResumeSessionResponse omitted.

/**
 * deserializeAws_json1_1ReviewInformation
 */
const de_ReviewInformation = (output: any, context: __SerdeContext): ReviewInformation => {
  return take(output, {
    ReviewedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Reviewer: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReviewInformationList
 */
const de_ReviewInformationList = (output: any, context: __SerdeContext): ReviewInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReviewInformation(entry, context);
    });
  return retVal;
};

// de_Runbook omitted.

// de_Runbooks omitted.

// de_S3OutputLocation omitted.

// de_S3OutputUrl omitted.

// de_ScheduledWindowExecution omitted.

// de_ScheduledWindowExecutionList omitted.

// de_SendAutomationSignalResult omitted.

/**
 * deserializeAws_json1_1SendCommandResult
 */
const de_SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return take(output, {
    Command: (_: any) => de_Command(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceSetting
 */
const de_ServiceSetting = (output: any, context: __SerdeContext): ServiceSetting => {
  return take(output, {
    ARN: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedUser: __expectString,
    SettingId: __expectString,
    SettingValue: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ServiceSettingNotFound omitted.

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return take(output, {
    Details: __expectString,
    DocumentName: __expectString,
    EndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxSessionDuration: __expectString,
    OutputUrl: _json,
    Owner: __expectString,
    Reason: __expectString,
    SessionId: __expectString,
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Target: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionList
 */
const de_SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Session(entry, context);
    });
  return retVal;
};

// de_SessionManagerOutputUrl omitted.

// de_SeveritySummary omitted.

// de_StartAssociationsOnceResult omitted.

// de_StartAutomationExecutionResult omitted.

// de_StartChangeRequestExecutionResult omitted.

// de_StartSessionResponse omitted.

// de_StatusUnchanged omitted.

/**
 * deserializeAws_json1_1StepExecution
 */
const de_StepExecution = (output: any, context: __SerdeContext): StepExecution => {
  return take(output, {
    Action: __expectString,
    ExecutionEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureDetails: _json,
    FailureMessage: __expectString,
    Inputs: _json,
    IsCritical: __expectBoolean,
    IsEnd: __expectBoolean,
    MaxAttempts: __expectInt32,
    NextStep: __expectString,
    OnFailure: __expectString,
    Outputs: _json,
    OverriddenParameters: _json,
    Response: __expectString,
    ResponseCode: __expectString,
    StepExecutionId: __expectString,
    StepName: __expectString,
    StepStatus: __expectString,
    TargetLocation: _json,
    Targets: _json,
    TimeoutSeconds: __expectLong,
    TriggeredAlarms: _json,
    ValidNextSteps: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1StepExecutionList
 */
const de_StepExecutionList = (output: any, context: __SerdeContext): StepExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepExecution(entry, context);
    });
  return retVal;
};

// de_StopAutomationExecutionResult omitted.

// de_SubTypeCountLimitExceededException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Target omitted.

// de_TargetInUseException omitted.

// de_TargetLocation omitted.

// de_TargetLocations omitted.

// de_TargetMap omitted.

// de_TargetMaps omitted.

// de_TargetMapValueList omitted.

// de_TargetNotConnected omitted.

// de_TargetParameterList omitted.

// de_Targets omitted.

// de_TargetValues omitted.

// de_TerminateSessionResponse omitted.

// de_TooManyTagsError omitted.

// de_TooManyUpdates omitted.

// de_TotalSizeLimitExceededException omitted.

// de_UnlabelParameterVersionResult omitted.

// de_UnsupportedCalendarException omitted.

// de_UnsupportedFeatureRequiredException omitted.

// de_UnsupportedInventoryItemContextException omitted.

// de_UnsupportedInventorySchemaVersionException omitted.

// de_UnsupportedOperatingSystem omitted.

// de_UnsupportedParameterType omitted.

// de_UnsupportedPlatformType omitted.

/**
 * deserializeAws_json1_1UpdateAssociationResult
 */
const de_UpdateAssociationResult = (output: any, context: __SerdeContext): UpdateAssociationResult => {
  return take(output, {
    AssociationDescription: (_: any) => de_AssociationDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateAssociationStatusResult
 */
const de_UpdateAssociationStatusResult = (output: any, context: __SerdeContext): UpdateAssociationStatusResult => {
  return take(output, {
    AssociationDescription: (_: any) => de_AssociationDescription(_, context),
  }) as any;
};

// de_UpdateDocumentDefaultVersionResult omitted.

// de_UpdateDocumentMetadataResponse omitted.

/**
 * deserializeAws_json1_1UpdateDocumentResult
 */
const de_UpdateDocumentResult = (output: any, context: __SerdeContext): UpdateDocumentResult => {
  return take(output, {
    DocumentDescription: (_: any) => de_DocumentDescription(_, context),
  }) as any;
};

// de_UpdateMaintenanceWindowResult omitted.

// de_UpdateMaintenanceWindowTargetResult omitted.

/**
 * deserializeAws_json1_1UpdateMaintenanceWindowTaskResult
 */
const de_UpdateMaintenanceWindowTaskResult = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceWindowTaskResult => {
  return take(output, {
    AlarmConfiguration: _json,
    CutoffBehavior: __expectString,
    Description: __expectString,
    LoggingInfo: _json,
    MaxConcurrency: __expectString,
    MaxErrors: __expectString,
    Name: __expectString,
    Priority: __expectInt32,
    ServiceRoleArn: __expectString,
    Targets: _json,
    TaskArn: __expectString,
    TaskInvocationParameters: (_: any) => de_MaintenanceWindowTaskInvocationParameters(_, context),
    TaskParameters: _json,
    WindowId: __expectString,
    WindowTaskId: __expectString,
  }) as any;
};

// de_UpdateManagedInstanceRoleResult omitted.

// de_UpdateOpsItemResponse omitted.

// de_UpdateOpsMetadataResult omitted.

/**
 * deserializeAws_json1_1UpdatePatchBaselineResult
 */
const de_UpdatePatchBaselineResult = (output: any, context: __SerdeContext): UpdatePatchBaselineResult => {
  return take(output, {
    ApprovalRules: _json,
    ApprovedPatches: _json,
    ApprovedPatchesComplianceLevel: __expectString,
    ApprovedPatchesEnableNonSecurity: __expectBoolean,
    BaselineId: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GlobalFilters: _json,
    ModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OperatingSystem: __expectString,
    RejectedPatches: _json,
    RejectedPatchesAction: __expectString,
    Sources: _json,
  }) as any;
};

// de_UpdateResourceDataSyncResult omitted.

// de_UpdateServiceSettingResult omitted.

// de_ValidNextStepList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonSSM.${operation}`,
  };
}

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
