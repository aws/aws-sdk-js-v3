// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
} from "./commands/AssociateOpsItemRelatedItemCommand";
import { CancelCommandCommandInput, CancelCommandCommandOutput } from "./commands/CancelCommandCommand";
import {
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
} from "./commands/CancelMaintenanceWindowExecutionCommand";
import { CreateActivationCommandInput, CreateActivationCommandOutput } from "./commands/CreateActivationCommand";
import {
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
} from "./commands/CreateAssociationBatchCommand";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput } from "./commands/CreateAssociationCommand";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput } from "./commands/CreateDocumentCommand";
import {
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
} from "./commands/CreateMaintenanceWindowCommand";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput } from "./commands/CreateOpsItemCommand";
import { CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput } from "./commands/CreateOpsMetadataCommand";
import {
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
} from "./commands/CreatePatchBaselineCommand";
import {
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
} from "./commands/CreateResourceDataSyncCommand";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput } from "./commands/DeleteActivationCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "./commands/DeleteAssociationCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput } from "./commands/DeleteInventoryCommand";
import {
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
} from "./commands/DeleteMaintenanceWindowCommand";
import { DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput } from "./commands/DeleteOpsMetadataCommand";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput } from "./commands/DeleteParameterCommand";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput } from "./commands/DeleteParametersCommand";
import {
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
} from "./commands/DeletePatchBaselineCommand";
import {
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
} from "./commands/DeleteResourceDataSyncCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
} from "./commands/DeregisterManagedInstanceCommand";
import {
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import {
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import {
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "./commands/DescribeActivationsCommand";
import {
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
} from "./commands/DescribeAssociationCommand";
import {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "./commands/DescribeAssociationExecutionsCommand";
import {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "./commands/DescribeAssociationExecutionTargetsCommand";
import {
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "./commands/DescribeAutomationExecutionsCommand";
import {
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "./commands/DescribeAutomationStepExecutionsCommand";
import {
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "./commands/DescribeAvailablePatchesCommand";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput } from "./commands/DescribeDocumentCommand";
import {
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
} from "./commands/DescribeDocumentPermissionCommand";
import {
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import {
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import {
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "./commands/DescribeInstanceAssociationsStatusCommand";
import {
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "./commands/DescribeInstanceInformationCommand";
import {
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "./commands/DescribeInstancePatchesCommand";
import {
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "./commands/DescribeInstancePatchStatesCommand";
import {
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import {
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "./commands/DescribeInventoryDeletionsCommand";
import {
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import {
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import {
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "./commands/DescribeMaintenanceWindowScheduleCommand";
import {
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "./commands/DescribeMaintenanceWindowsCommand";
import {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import {
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "./commands/DescribeMaintenanceWindowTargetsCommand";
import {
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowTasksCommand";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "./commands/DescribeOpsItemsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand";
import {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "./commands/DescribePatchBaselinesCommand";
import {
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "./commands/DescribePatchGroupsCommand";
import {
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "./commands/DescribePatchGroupStateCommand";
import {
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "./commands/DescribePatchPropertiesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import {
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
} from "./commands/DisassociateOpsItemRelatedItemCommand";
import {
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
} from "./commands/GetAutomationExecutionCommand";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput } from "./commands/GetCalendarStateCommand";
import {
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
} from "./commands/GetCommandInvocationCommand";
import {
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
} from "./commands/GetConnectionStatusCommand";
import {
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
} from "./commands/GetDefaultPatchBaselineCommand";
import {
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
} from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import { GetInventoryCommandInput, GetInventoryCommandOutput } from "./commands/GetInventoryCommand";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "./commands/GetInventorySchemaCommand";
import {
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
} from "./commands/GetMaintenanceWindowCommand";
import {
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionCommand";
import {
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import {
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import {
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
} from "./commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput } from "./commands/GetOpsItemCommand";
import { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput } from "./commands/GetOpsMetadataCommand";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "./commands/GetOpsSummaryCommand";
import { GetParameterCommandInput, GetParameterCommandOutput } from "./commands/GetParameterCommand";
import {
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "./commands/GetParameterHistoryCommand";
import {
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "./commands/GetParametersByPathCommand";
import { GetParametersCommandInput, GetParametersCommandOutput } from "./commands/GetParametersCommand";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput } from "./commands/GetPatchBaselineCommand";
import {
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
} from "./commands/GetPatchBaselineForPatchGroupCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput } from "./commands/GetServiceSettingCommand";
import {
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
} from "./commands/LabelParameterVersionCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import {
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "./commands/ListAssociationVersionsCommand";
import {
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "./commands/ListCommandInvocationsCommand";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand";
import {
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "./commands/ListComplianceItemsCommand";
import {
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "./commands/ListComplianceSummariesCommand";
import {
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
} from "./commands/ListDocumentMetadataHistoryCommand";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand";
import {
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "./commands/ListDocumentVersionsCommand";
import {
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "./commands/ListInventoryEntriesCommand";
import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput } from "./commands/ListOpsItemEventsCommand";
import {
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "./commands/ListOpsItemRelatedItemsCommand";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "./commands/ListOpsMetadataCommand";
import {
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "./commands/ListResourceComplianceSummariesCommand";
import {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "./commands/ListResourceDataSyncCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
} from "./commands/ModifyDocumentPermissionCommand";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput } from "./commands/PutComplianceItemsCommand";
import { PutInventoryCommandInput, PutInventoryCommandOutput } from "./commands/PutInventoryCommand";
import { PutParameterCommandInput, PutParameterCommandOutput } from "./commands/PutParameterCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
} from "./commands/RegisterDefaultPatchBaselineCommand";
import {
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import {
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import {
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
} from "./commands/ResetServiceSettingCommand";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput } from "./commands/ResumeSessionCommand";
import {
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
} from "./commands/SendAutomationSignalCommand";
import { SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import {
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
} from "./commands/StartAssociationsOnceCommand";
import {
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
} from "./commands/StartAutomationExecutionCommand";
import {
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
} from "./commands/StartChangeRequestExecutionCommand";
import { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import {
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
} from "./commands/StopAutomationExecutionCommand";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand";
import {
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
} from "./commands/UnlabelParameterVersionCommand";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput } from "./commands/UpdateAssociationCommand";
import {
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
} from "./commands/UpdateAssociationStatusCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import {
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
} from "./commands/UpdateDocumentDefaultVersionCommand";
import {
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
} from "./commands/UpdateDocumentMetadataCommand";
import {
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
} from "./commands/UpdateMaintenanceWindowCommand";
import {
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
} from "./commands/UpdateMaintenanceWindowTargetCommand";
import {
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
} from "./commands/UpdateMaintenanceWindowTaskCommand";
import {
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
} from "./commands/UpdateManagedInstanceRoleCommand";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput } from "./commands/UpdateOpsItemCommand";
import { UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput } from "./commands/UpdateOpsMetadataCommand";
import {
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
} from "./commands/UpdatePatchBaselineCommand";
import {
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
} from "./commands/UpdateResourceDataSyncCommand";
import {
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
} from "./commands/UpdateServiceSettingCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

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
  | GetAutomationExecutionCommandInput
  | GetCalendarStateCommandInput
  | GetCommandInvocationCommandInput
  | GetConnectionStatusCommandInput
  | GetDefaultPatchBaselineCommandInput
  | GetDeployablePatchSnapshotForInstanceCommandInput
  | GetDocumentCommandInput
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
  | StartAssociationsOnceCommandInput
  | StartAutomationExecutionCommandInput
  | StartChangeRequestExecutionCommandInput
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
  | GetAutomationExecutionCommandOutput
  | GetCalendarStateCommandOutput
  | GetCommandInvocationCommandOutput
  | GetConnectionStatusCommandOutput
  | GetDefaultPatchBaselineCommandOutput
  | GetDeployablePatchSnapshotForInstanceCommandOutput
  | GetDocumentCommandOutput
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
  | StartAssociationsOnceCommandOutput
  | StartAutomationExecutionCommandOutput
  | StartChangeRequestExecutionCommandOutput
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

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type SSMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SSMClient class constructor that set the region, credentials and other options.
 */
export interface SSMClientConfig extends SSMClientConfigType {}

type SSMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SSMClient class. This is resolved and normalized from the {@link SSMClientConfig | constructor configuration interface}.
 */
export interface SSMClientResolvedConfig extends SSMClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure
 *    end-to-end management solution for hybrid cloud environments that enables safe and secure
 *    operations at scale.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p>
 *          <p class="title">
 *             <b>Related resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/what-is-systems-manager.html#systems-manager-capabilities">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
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

  constructor(configuration: SSMClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
