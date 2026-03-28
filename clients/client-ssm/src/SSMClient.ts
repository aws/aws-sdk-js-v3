// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultSSMHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import type {
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
} from "./commands/AssociateOpsItemRelatedItemCommand";
import type { CancelCommandCommandInput, CancelCommandCommandOutput } from "./commands/CancelCommandCommand";
import type {
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
} from "./commands/CancelMaintenanceWindowExecutionCommand";
import type { CreateActivationCommandInput, CreateActivationCommandOutput } from "./commands/CreateActivationCommand";
import type {
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
} from "./commands/CreateAssociationBatchCommand";
import type {
  CreateAssociationCommandInput,
  CreateAssociationCommandOutput,
} from "./commands/CreateAssociationCommand";
import type { CreateDocumentCommandInput, CreateDocumentCommandOutput } from "./commands/CreateDocumentCommand";
import type {
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
} from "./commands/CreateMaintenanceWindowCommand";
import type { CreateOpsItemCommandInput, CreateOpsItemCommandOutput } from "./commands/CreateOpsItemCommand";
import type {
  CreateOpsMetadataCommandInput,
  CreateOpsMetadataCommandOutput,
} from "./commands/CreateOpsMetadataCommand";
import type {
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
} from "./commands/CreatePatchBaselineCommand";
import type {
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
} from "./commands/CreateResourceDataSyncCommand";
import type { DeleteActivationCommandInput, DeleteActivationCommandOutput } from "./commands/DeleteActivationCommand";
import type {
  DeleteAssociationCommandInput,
  DeleteAssociationCommandOutput,
} from "./commands/DeleteAssociationCommand";
import type { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import type { DeleteInventoryCommandInput, DeleteInventoryCommandOutput } from "./commands/DeleteInventoryCommand";
import type {
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
} from "./commands/DeleteMaintenanceWindowCommand";
import type { DeleteOpsItemCommandInput, DeleteOpsItemCommandOutput } from "./commands/DeleteOpsItemCommand";
import type {
  DeleteOpsMetadataCommandInput,
  DeleteOpsMetadataCommandOutput,
} from "./commands/DeleteOpsMetadataCommand";
import type { DeleteParameterCommandInput, DeleteParameterCommandOutput } from "./commands/DeleteParameterCommand";
import type { DeleteParametersCommandInput, DeleteParametersCommandOutput } from "./commands/DeleteParametersCommand";
import type {
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
} from "./commands/DeletePatchBaselineCommand";
import type {
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
} from "./commands/DeleteResourceDataSyncCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
} from "./commands/DeregisterManagedInstanceCommand";
import type {
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import type {
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import type {
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import type {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "./commands/DescribeActivationsCommand";
import type {
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
} from "./commands/DescribeAssociationCommand";
import type {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "./commands/DescribeAssociationExecutionsCommand";
import type {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "./commands/DescribeAssociationExecutionTargetsCommand";
import type {
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "./commands/DescribeAutomationExecutionsCommand";
import type {
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "./commands/DescribeAutomationStepExecutionsCommand";
import type {
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "./commands/DescribeAvailablePatchesCommand";
import type { DescribeDocumentCommandInput, DescribeDocumentCommandOutput } from "./commands/DescribeDocumentCommand";
import type {
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
} from "./commands/DescribeDocumentPermissionCommand";
import type {
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import type {
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import type {
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "./commands/DescribeInstanceAssociationsStatusCommand";
import type {
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "./commands/DescribeInstanceInformationCommand";
import type {
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "./commands/DescribeInstancePatchesCommand";
import type {
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "./commands/DescribeInstancePatchStatesCommand";
import type {
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import type {
  DescribeInstancePropertiesCommandInput,
  DescribeInstancePropertiesCommandOutput,
} from "./commands/DescribeInstancePropertiesCommand";
import type {
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "./commands/DescribeInventoryDeletionsCommand";
import type {
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import type {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import type {
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import type {
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "./commands/DescribeMaintenanceWindowScheduleCommand";
import type {
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "./commands/DescribeMaintenanceWindowsCommand";
import type {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import type {
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "./commands/DescribeMaintenanceWindowTargetsCommand";
import type {
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowTasksCommand";
import type { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "./commands/DescribeOpsItemsCommand";
import type {
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "./commands/DescribeParametersCommand";
import type {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "./commands/DescribePatchBaselinesCommand";
import type {
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "./commands/DescribePatchGroupsCommand";
import type {
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "./commands/DescribePatchGroupStateCommand";
import type {
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "./commands/DescribePatchPropertiesCommand";
import type { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import type {
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
} from "./commands/DisassociateOpsItemRelatedItemCommand";
import type { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "./commands/GetAccessTokenCommand";
import type {
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
} from "./commands/GetAutomationExecutionCommand";
import type { GetCalendarStateCommandInput, GetCalendarStateCommandOutput } from "./commands/GetCalendarStateCommand";
import type {
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
} from "./commands/GetCommandInvocationCommand";
import type {
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
} from "./commands/GetConnectionStatusCommand";
import type {
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
} from "./commands/GetDefaultPatchBaselineCommand";
import type {
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
} from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import type { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import type {
  GetExecutionPreviewCommandInput,
  GetExecutionPreviewCommandOutput,
} from "./commands/GetExecutionPreviewCommand";
import type { GetInventoryCommandInput, GetInventoryCommandOutput } from "./commands/GetInventoryCommand";
import type {
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "./commands/GetInventorySchemaCommand";
import type {
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
} from "./commands/GetMaintenanceWindowCommand";
import type {
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionCommand";
import type {
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import type {
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import type {
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
} from "./commands/GetMaintenanceWindowTaskCommand";
import type { GetOpsItemCommandInput, GetOpsItemCommandOutput } from "./commands/GetOpsItemCommand";
import type { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput } from "./commands/GetOpsMetadataCommand";
import type { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "./commands/GetOpsSummaryCommand";
import type { GetParameterCommandInput, GetParameterCommandOutput } from "./commands/GetParameterCommand";
import type {
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "./commands/GetParameterHistoryCommand";
import type {
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "./commands/GetParametersByPathCommand";
import type { GetParametersCommandInput, GetParametersCommandOutput } from "./commands/GetParametersCommand";
import type { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput } from "./commands/GetPatchBaselineCommand";
import type {
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
} from "./commands/GetPatchBaselineForPatchGroupCommand";
import type {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import type {
  GetServiceSettingCommandInput,
  GetServiceSettingCommandOutput,
} from "./commands/GetServiceSettingCommand";
import type {
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
} from "./commands/LabelParameterVersionCommand";
import type { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import type {
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "./commands/ListAssociationVersionsCommand";
import type {
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "./commands/ListCommandInvocationsCommand";
import type { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand";
import type {
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "./commands/ListComplianceItemsCommand";
import type {
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "./commands/ListComplianceSummariesCommand";
import type {
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
} from "./commands/ListDocumentMetadataHistoryCommand";
import type { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand";
import type {
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "./commands/ListDocumentVersionsCommand";
import type {
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "./commands/ListInventoryEntriesCommand";
import type { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import type { ListNodesSummaryCommandInput, ListNodesSummaryCommandOutput } from "./commands/ListNodesSummaryCommand";
import type {
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
} from "./commands/ListOpsItemEventsCommand";
import type {
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "./commands/ListOpsItemRelatedItemsCommand";
import type { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "./commands/ListOpsMetadataCommand";
import type {
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "./commands/ListResourceComplianceSummariesCommand";
import type {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "./commands/ListResourceDataSyncCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
} from "./commands/ModifyDocumentPermissionCommand";
import type {
  PutComplianceItemsCommandInput,
  PutComplianceItemsCommandOutput,
} from "./commands/PutComplianceItemsCommand";
import type { PutInventoryCommandInput, PutInventoryCommandOutput } from "./commands/PutInventoryCommand";
import type { PutParameterCommandInput, PutParameterCommandOutput } from "./commands/PutParameterCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
} from "./commands/RegisterDefaultPatchBaselineCommand";
import type {
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import type {
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import type {
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import type {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import type {
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
} from "./commands/ResetServiceSettingCommand";
import type { ResumeSessionCommandInput, ResumeSessionCommandOutput } from "./commands/ResumeSessionCommand";
import type {
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
} from "./commands/SendAutomationSignalCommand";
import type { SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import type {
  StartAccessRequestCommandInput,
  StartAccessRequestCommandOutput,
} from "./commands/StartAccessRequestCommand";
import type {
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
} from "./commands/StartAssociationsOnceCommand";
import type {
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
} from "./commands/StartAutomationExecutionCommand";
import type {
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
} from "./commands/StartChangeRequestExecutionCommand";
import type {
  StartExecutionPreviewCommandInput,
  StartExecutionPreviewCommandOutput,
} from "./commands/StartExecutionPreviewCommand";
import type { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import type {
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
} from "./commands/StopAutomationExecutionCommand";
import type { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand";
import type {
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
} from "./commands/UnlabelParameterVersionCommand";
import type {
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
} from "./commands/UpdateAssociationCommand";
import type {
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
} from "./commands/UpdateAssociationStatusCommand";
import type { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import type {
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
} from "./commands/UpdateDocumentDefaultVersionCommand";
import type {
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
} from "./commands/UpdateDocumentMetadataCommand";
import type {
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
} from "./commands/UpdateMaintenanceWindowCommand";
import type {
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
} from "./commands/UpdateMaintenanceWindowTargetCommand";
import type {
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
} from "./commands/UpdateMaintenanceWindowTaskCommand";
import type {
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
} from "./commands/UpdateManagedInstanceRoleCommand";
import type { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput } from "./commands/UpdateOpsItemCommand";
import type {
  UpdateOpsMetadataCommandInput,
  UpdateOpsMetadataCommandOutput,
} from "./commands/UpdateOpsMetadataCommand";
import type {
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
} from "./commands/UpdatePatchBaselineCommand";
import type {
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
} from "./commands/UpdateResourceDataSyncCommand";
import type {
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
} from "./commands/UpdateServiceSettingCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddTagsToResourceCommandInput
  | AssociateOpsItemRelatedItemCommandInput
  | CancelCommandCommandInput
  | CancelMaintenanceWindowExecutionCommandInput
  | CreateActivationCommandInput
  | CreateAssociationBatchCommandInput
  | CreateAssociationCommandInput
  | CreateDocumentCommandInput
  | CreateMaintenanceWindowCommandInput
  | CreateOpsItemCommandInput
  | CreateOpsMetadataCommandInput
  | CreatePatchBaselineCommandInput
  | CreateResourceDataSyncCommandInput
  | DeleteActivationCommandInput
  | DeleteAssociationCommandInput
  | DeleteDocumentCommandInput
  | DeleteInventoryCommandInput
  | DeleteMaintenanceWindowCommandInput
  | DeleteOpsItemCommandInput
  | DeleteOpsMetadataCommandInput
  | DeleteParameterCommandInput
  | DeleteParametersCommandInput
  | DeletePatchBaselineCommandInput
  | DeleteResourceDataSyncCommandInput
  | DeleteResourcePolicyCommandInput
  | DeregisterManagedInstanceCommandInput
  | DeregisterPatchBaselineForPatchGroupCommandInput
  | DeregisterTargetFromMaintenanceWindowCommandInput
  | DeregisterTaskFromMaintenanceWindowCommandInput
  | DescribeActivationsCommandInput
  | DescribeAssociationCommandInput
  | DescribeAssociationExecutionTargetsCommandInput
  | DescribeAssociationExecutionsCommandInput
  | DescribeAutomationExecutionsCommandInput
  | DescribeAutomationStepExecutionsCommandInput
  | DescribeAvailablePatchesCommandInput
  | DescribeDocumentCommandInput
  | DescribeDocumentPermissionCommandInput
  | DescribeEffectiveInstanceAssociationsCommandInput
  | DescribeEffectivePatchesForPatchBaselineCommandInput
  | DescribeInstanceAssociationsStatusCommandInput
  | DescribeInstanceInformationCommandInput
  | DescribeInstancePatchStatesCommandInput
  | DescribeInstancePatchStatesForPatchGroupCommandInput
  | DescribeInstancePatchesCommandInput
  | DescribeInstancePropertiesCommandInput
  | DescribeInventoryDeletionsCommandInput
  | DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput
  | DescribeMaintenanceWindowExecutionTasksCommandInput
  | DescribeMaintenanceWindowExecutionsCommandInput
  | DescribeMaintenanceWindowScheduleCommandInput
  | DescribeMaintenanceWindowTargetsCommandInput
  | DescribeMaintenanceWindowTasksCommandInput
  | DescribeMaintenanceWindowsCommandInput
  | DescribeMaintenanceWindowsForTargetCommandInput
  | DescribeOpsItemsCommandInput
  | DescribeParametersCommandInput
  | DescribePatchBaselinesCommandInput
  | DescribePatchGroupStateCommandInput
  | DescribePatchGroupsCommandInput
  | DescribePatchPropertiesCommandInput
  | DescribeSessionsCommandInput
  | DisassociateOpsItemRelatedItemCommandInput
  | GetAccessTokenCommandInput
  | GetAutomationExecutionCommandInput
  | GetCalendarStateCommandInput
  | GetCommandInvocationCommandInput
  | GetConnectionStatusCommandInput
  | GetDefaultPatchBaselineCommandInput
  | GetDeployablePatchSnapshotForInstanceCommandInput
  | GetDocumentCommandInput
  | GetExecutionPreviewCommandInput
  | GetInventoryCommandInput
  | GetInventorySchemaCommandInput
  | GetMaintenanceWindowCommandInput
  | GetMaintenanceWindowExecutionCommandInput
  | GetMaintenanceWindowExecutionTaskCommandInput
  | GetMaintenanceWindowExecutionTaskInvocationCommandInput
  | GetMaintenanceWindowTaskCommandInput
  | GetOpsItemCommandInput
  | GetOpsMetadataCommandInput
  | GetOpsSummaryCommandInput
  | GetParameterCommandInput
  | GetParameterHistoryCommandInput
  | GetParametersByPathCommandInput
  | GetParametersCommandInput
  | GetPatchBaselineCommandInput
  | GetPatchBaselineForPatchGroupCommandInput
  | GetResourcePoliciesCommandInput
  | GetServiceSettingCommandInput
  | LabelParameterVersionCommandInput
  | ListAssociationVersionsCommandInput
  | ListAssociationsCommandInput
  | ListCommandInvocationsCommandInput
  | ListCommandsCommandInput
  | ListComplianceItemsCommandInput
  | ListComplianceSummariesCommandInput
  | ListDocumentMetadataHistoryCommandInput
  | ListDocumentVersionsCommandInput
  | ListDocumentsCommandInput
  | ListInventoryEntriesCommandInput
  | ListNodesCommandInput
  | ListNodesSummaryCommandInput
  | ListOpsItemEventsCommandInput
  | ListOpsItemRelatedItemsCommandInput
  | ListOpsMetadataCommandInput
  | ListResourceComplianceSummariesCommandInput
  | ListResourceDataSyncCommandInput
  | ListTagsForResourceCommandInput
  | ModifyDocumentPermissionCommandInput
  | PutComplianceItemsCommandInput
  | PutInventoryCommandInput
  | PutParameterCommandInput
  | PutResourcePolicyCommandInput
  | RegisterDefaultPatchBaselineCommandInput
  | RegisterPatchBaselineForPatchGroupCommandInput
  | RegisterTargetWithMaintenanceWindowCommandInput
  | RegisterTaskWithMaintenanceWindowCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetServiceSettingCommandInput
  | ResumeSessionCommandInput
  | SendAutomationSignalCommandInput
  | SendCommandCommandInput
  | StartAccessRequestCommandInput
  | StartAssociationsOnceCommandInput
  | StartAutomationExecutionCommandInput
  | StartChangeRequestExecutionCommandInput
  | StartExecutionPreviewCommandInput
  | StartSessionCommandInput
  | StopAutomationExecutionCommandInput
  | TerminateSessionCommandInput
  | UnlabelParameterVersionCommandInput
  | UpdateAssociationCommandInput
  | UpdateAssociationStatusCommandInput
  | UpdateDocumentCommandInput
  | UpdateDocumentDefaultVersionCommandInput
  | UpdateDocumentMetadataCommandInput
  | UpdateMaintenanceWindowCommandInput
  | UpdateMaintenanceWindowTargetCommandInput
  | UpdateMaintenanceWindowTaskCommandInput
  | UpdateManagedInstanceRoleCommandInput
  | UpdateOpsItemCommandInput
  | UpdateOpsMetadataCommandInput
  | UpdatePatchBaselineCommandInput
  | UpdateResourceDataSyncCommandInput
  | UpdateServiceSettingCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | AssociateOpsItemRelatedItemCommandOutput
  | CancelCommandCommandOutput
  | CancelMaintenanceWindowExecutionCommandOutput
  | CreateActivationCommandOutput
  | CreateAssociationBatchCommandOutput
  | CreateAssociationCommandOutput
  | CreateDocumentCommandOutput
  | CreateMaintenanceWindowCommandOutput
  | CreateOpsItemCommandOutput
  | CreateOpsMetadataCommandOutput
  | CreatePatchBaselineCommandOutput
  | CreateResourceDataSyncCommandOutput
  | DeleteActivationCommandOutput
  | DeleteAssociationCommandOutput
  | DeleteDocumentCommandOutput
  | DeleteInventoryCommandOutput
  | DeleteMaintenanceWindowCommandOutput
  | DeleteOpsItemCommandOutput
  | DeleteOpsMetadataCommandOutput
  | DeleteParameterCommandOutput
  | DeleteParametersCommandOutput
  | DeletePatchBaselineCommandOutput
  | DeleteResourceDataSyncCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeregisterManagedInstanceCommandOutput
  | DeregisterPatchBaselineForPatchGroupCommandOutput
  | DeregisterTargetFromMaintenanceWindowCommandOutput
  | DeregisterTaskFromMaintenanceWindowCommandOutput
  | DescribeActivationsCommandOutput
  | DescribeAssociationCommandOutput
  | DescribeAssociationExecutionTargetsCommandOutput
  | DescribeAssociationExecutionsCommandOutput
  | DescribeAutomationExecutionsCommandOutput
  | DescribeAutomationStepExecutionsCommandOutput
  | DescribeAvailablePatchesCommandOutput
  | DescribeDocumentCommandOutput
  | DescribeDocumentPermissionCommandOutput
  | DescribeEffectiveInstanceAssociationsCommandOutput
  | DescribeEffectivePatchesForPatchBaselineCommandOutput
  | DescribeInstanceAssociationsStatusCommandOutput
  | DescribeInstanceInformationCommandOutput
  | DescribeInstancePatchStatesCommandOutput
  | DescribeInstancePatchStatesForPatchGroupCommandOutput
  | DescribeInstancePatchesCommandOutput
  | DescribeInstancePropertiesCommandOutput
  | DescribeInventoryDeletionsCommandOutput
  | DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  | DescribeMaintenanceWindowExecutionTasksCommandOutput
  | DescribeMaintenanceWindowExecutionsCommandOutput
  | DescribeMaintenanceWindowScheduleCommandOutput
  | DescribeMaintenanceWindowTargetsCommandOutput
  | DescribeMaintenanceWindowTasksCommandOutput
  | DescribeMaintenanceWindowsCommandOutput
  | DescribeMaintenanceWindowsForTargetCommandOutput
  | DescribeOpsItemsCommandOutput
  | DescribeParametersCommandOutput
  | DescribePatchBaselinesCommandOutput
  | DescribePatchGroupStateCommandOutput
  | DescribePatchGroupsCommandOutput
  | DescribePatchPropertiesCommandOutput
  | DescribeSessionsCommandOutput
  | DisassociateOpsItemRelatedItemCommandOutput
  | GetAccessTokenCommandOutput
  | GetAutomationExecutionCommandOutput
  | GetCalendarStateCommandOutput
  | GetCommandInvocationCommandOutput
  | GetConnectionStatusCommandOutput
  | GetDefaultPatchBaselineCommandOutput
  | GetDeployablePatchSnapshotForInstanceCommandOutput
  | GetDocumentCommandOutput
  | GetExecutionPreviewCommandOutput
  | GetInventoryCommandOutput
  | GetInventorySchemaCommandOutput
  | GetMaintenanceWindowCommandOutput
  | GetMaintenanceWindowExecutionCommandOutput
  | GetMaintenanceWindowExecutionTaskCommandOutput
  | GetMaintenanceWindowExecutionTaskInvocationCommandOutput
  | GetMaintenanceWindowTaskCommandOutput
  | GetOpsItemCommandOutput
  | GetOpsMetadataCommandOutput
  | GetOpsSummaryCommandOutput
  | GetParameterCommandOutput
  | GetParameterHistoryCommandOutput
  | GetParametersByPathCommandOutput
  | GetParametersCommandOutput
  | GetPatchBaselineCommandOutput
  | GetPatchBaselineForPatchGroupCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetServiceSettingCommandOutput
  | LabelParameterVersionCommandOutput
  | ListAssociationVersionsCommandOutput
  | ListAssociationsCommandOutput
  | ListCommandInvocationsCommandOutput
  | ListCommandsCommandOutput
  | ListComplianceItemsCommandOutput
  | ListComplianceSummariesCommandOutput
  | ListDocumentMetadataHistoryCommandOutput
  | ListDocumentVersionsCommandOutput
  | ListDocumentsCommandOutput
  | ListInventoryEntriesCommandOutput
  | ListNodesCommandOutput
  | ListNodesSummaryCommandOutput
  | ListOpsItemEventsCommandOutput
  | ListOpsItemRelatedItemsCommandOutput
  | ListOpsMetadataCommandOutput
  | ListResourceComplianceSummariesCommandOutput
  | ListResourceDataSyncCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyDocumentPermissionCommandOutput
  | PutComplianceItemsCommandOutput
  | PutInventoryCommandOutput
  | PutParameterCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterDefaultPatchBaselineCommandOutput
  | RegisterPatchBaselineForPatchGroupCommandOutput
  | RegisterTargetWithMaintenanceWindowCommandOutput
  | RegisterTaskWithMaintenanceWindowCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetServiceSettingCommandOutput
  | ResumeSessionCommandOutput
  | SendAutomationSignalCommandOutput
  | SendCommandCommandOutput
  | StartAccessRequestCommandOutput
  | StartAssociationsOnceCommandOutput
  | StartAutomationExecutionCommandOutput
  | StartChangeRequestExecutionCommandOutput
  | StartExecutionPreviewCommandOutput
  | StartSessionCommandOutput
  | StopAutomationExecutionCommandOutput
  | TerminateSessionCommandOutput
  | UnlabelParameterVersionCommandOutput
  | UpdateAssociationCommandOutput
  | UpdateAssociationStatusCommandOutput
  | UpdateDocumentCommandOutput
  | UpdateDocumentDefaultVersionCommandOutput
  | UpdateDocumentMetadataCommandOutput
  | UpdateMaintenanceWindowCommandOutput
  | UpdateMaintenanceWindowTargetCommandOutput
  | UpdateMaintenanceWindowTaskCommandOutput
  | UpdateManagedInstanceRoleCommandOutput
  | UpdateOpsItemCommandOutput
  | UpdateOpsMetadataCommandOutput
  | UpdatePatchBaselineCommandOutput
  | UpdateResourceDataSyncCommandOutput
  | UpdateServiceSettingCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SSMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SSMClient class constructor that set the region, credentials and other options.
 */
export interface SSMClientConfig extends SSMClientConfigType {}

/**
 * @public
 */
export type SSMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SSMClient class. This is resolved and normalized from the {@link SSMClientConfig | constructor configuration interface}.
 */
export interface SSMClientResolvedConfig extends SSMClientResolvedConfigType {}

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
export class SSMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig
> {
  /**
   * The resolved configuration of SSMClient class. This is resolved and normalized from the {@link SSMClientConfig | constructor configuration interface}.
   */
  readonly config: SSMClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SSMClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultSSMHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SSMClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
