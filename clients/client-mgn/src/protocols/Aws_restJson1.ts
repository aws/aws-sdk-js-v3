// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  resolvedPath as __resolvedPath,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { ArchiveApplicationCommandInput, ArchiveApplicationCommandOutput } from "../commands/ArchiveApplicationCommand";
import { ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "../commands/ArchiveWaveCommand";
import {
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "../commands/AssociateApplicationsCommand";
import {
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "../commands/AssociateSourceServersCommand";
import {
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "../commands/ChangeServerLifeCycleStateCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "../commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "../commands/CreateReplicationConfigurationTemplateCommand";
import { CreateWaveCommandInput, CreateWaveCommandOutput } from "../commands/CreateWaveCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "../commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "../commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
import {
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "../commands/DeleteVcenterClientCommand";
import { DeleteWaveCommandInput, DeleteWaveCommandOutput } from "../commands/DeleteWaveCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "../commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import {
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "../commands/DescribeVcenterClientsCommand";
import {
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "../commands/DisassociateApplicationsCommand";
import {
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "../commands/DisassociateSourceServersCommand";
import {
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "../commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "../commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "../commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListExportErrorsCommandInput, ListExportErrorsCommandOutput } from "../commands/ListExportErrorsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListImportErrorsCommandInput, ListImportErrorsCommandOutput } from "../commands/ListImportErrorsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import {
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "../commands/ListSourceServerActionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "../commands/ListTemplateActionsCommand";
import { ListWavesCommandInput, ListWavesCommandOutput } from "../commands/ListWavesCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "../commands/MarkAsArchivedCommand";
import {
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "../commands/PutSourceServerActionCommand";
import { PutTemplateActionCommandInput, PutTemplateActionCommandOutput } from "../commands/PutTemplateActionCommand";
import {
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "../commands/RemoveSourceServerActionCommand";
import {
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "../commands/RemoveTemplateActionCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "../commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "../commands/StartCutoverCommand";
import { StartExportCommandInput, StartExportCommandOutput } from "../commands/StartExportCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "../commands/StartReplicationCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "../commands/StartTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "../commands/TerminateTargetInstancesCommand";
import {
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "../commands/UnarchiveApplicationCommand";
import { UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput } from "../commands/UnarchiveWaveCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "../commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "../commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "../commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "../commands/UpdateReplicationConfigurationTemplateCommand";
import {
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "../commands/UpdateSourceServerReplicationTypeCommand";
import { UpdateWaveCommandInput, UpdateWaveCommandOutput } from "../commands/UpdateWaveCommand";
import { MgnServiceException as __BaseException } from "../models/MgnServiceException";
import {
  AccessDeniedException,
  Application,
  ApplicationAggregatedStatus,
  ChangeServerLifeCycleStateSourceServerLifecycle,
  ConflictException,
  CPU,
  DataReplicationError,
  DataReplicationInfo,
  DataReplicationInfoReplicatedDisk,
  DataReplicationInitiation,
  DataReplicationInitiationStep,
  DescribeJobsRequestFilters,
  DescribeSourceServersRequestFilters,
  Disk,
  ErrorDetails,
  ExportErrorData,
  ExportTask,
  ExportTaskError,
  ExportTaskSummary,
  IdentificationHints,
  ImportErrorData,
  ImportTask,
  ImportTaskError,
  ImportTaskSummary,
  ImportTaskSummaryApplications,
  ImportTaskSummaryServers,
  ImportTaskSummaryWaves,
  InternalServerException,
  Job,
  JobLog,
  JobLogEventData,
  JobPostLaunchActionsLaunchStatus,
  LaunchConfigurationTemplate,
  LaunchedInstance,
  LaunchTemplateDiskConf,
  Licensing,
  LifeCycle,
  LifeCycleLastCutover,
  LifeCycleLastCutoverFinalized,
  LifeCycleLastCutoverInitiated,
  LifeCycleLastCutoverReverted,
  LifeCycleLastTest,
  LifeCycleLastTestFinalized,
  LifeCycleLastTestInitiated,
  LifeCycleLastTestReverted,
  LifeCycleState,
  ListApplicationsRequestFilters,
  ListExportsRequestFilters,
  ListImportsRequestFilters,
  ListWavesRequestFilters,
  NetworkInterface,
  OS,
  ParticipatingServer,
  PostLaunchActions,
  PostLaunchActionsStatus,
  ReplicationConfigurationReplicatedDisk,
  ReplicationConfigurationTemplate,
  ReplicationType,
  ResourceNotFoundException,
  S3BucketSource,
  ServiceQuotaExceededException,
  SourceProperties,
  SourceServer,
  SourceServerActionDocument,
  SourceServerActionsRequestFilters,
  SsmDocument,
  SsmExternalParameter,
  SsmParameterStoreParameter,
  TemplateActionDocument,
  TemplateActionsRequestFilters,
  ThrottlingException,
  UninitializedAccountException,
  ValidationException,
  ValidationExceptionField,
  VcenterClient,
  Wave,
  WaveAggregatedStatus,
} from "../models/models_0";

/**
 * serializeAws_restJson1ArchiveApplicationCommand
 */
export const se_ArchiveApplicationCommand = async (
  input: ArchiveApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ArchiveApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ArchiveWaveCommand
 */
export const se_ArchiveWaveCommand = async (
  input: ArchiveWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ArchiveWave";
  let body: any;
  body = JSON.stringify({
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateApplicationsCommand
 */
export const se_AssociateApplicationsCommand = async (
  input: AssociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AssociateApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationIDs != null && { applicationIDs: se_ApplicationIDs(input.applicationIDs, context) }),
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateSourceServersCommand
 */
export const se_AssociateSourceServersCommand = async (
  input: AssociateSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AssociateSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_AssociateSourceServersRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ChangeServerLifeCycleStateCommand
 */
export const se_ChangeServerLifeCycleStateCommand = async (
  input: ChangeServerLifeCycleStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ChangeServerLifeCycleState";
  let body: any;
  body = JSON.stringify({
    ...(input.lifeCycle != null && {
      lifeCycle: se_ChangeServerLifeCycleStateSourceServerLifecycle(input.lifeCycle, context),
    }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLaunchConfigurationTemplateCommand
 */
export const se_CreateLaunchConfigurationTemplateCommand = async (
  input: CreateLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateLaunchConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.associatePublicIpAddress != null && { associatePublicIpAddress: input.associatePublicIpAddress }),
    ...(input.bootMode != null && { bootMode: input.bootMode }),
    ...(input.copyPrivateIp != null && { copyPrivateIp: input.copyPrivateIp }),
    ...(input.copyTags != null && { copyTags: input.copyTags }),
    ...(input.enableMapAutoTagging != null && { enableMapAutoTagging: input.enableMapAutoTagging }),
    ...(input.largeVolumeConf != null && {
      largeVolumeConf: se_LaunchTemplateDiskConf(input.largeVolumeConf, context),
    }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: se_Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: se_PostLaunchActions(input.postLaunchActions, context),
    }),
    ...(input.smallVolumeConf != null && {
      smallVolumeConf: se_LaunchTemplateDiskConf(input.smallVolumeConf, context),
    }),
    ...(input.smallVolumeMaxSize != null && { smallVolumeMaxSize: input.smallVolumeMaxSize }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.targetInstanceTypeRightSizingMethod != null && {
      targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateReplicationConfigurationTemplateCommand
 */
export const se_CreateReplicationConfigurationTemplateCommand = async (
  input: CreateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.associateDefaultSecurityGroup != null && {
      associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
    }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.replicationServerInstanceType != null && {
      replicationServerInstanceType: input.replicationServerInstanceType,
    }),
    ...(input.replicationServersSecurityGroupsIDs != null && {
      replicationServersSecurityGroupsIDs: se_ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && { stagingAreaTags: se_TagsMap(input.stagingAreaTags, context) }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.useDedicatedReplicationServer != null && {
      useDedicatedReplicationServer: input.useDedicatedReplicationServer,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWaveCommand
 */
export const se_CreateWaveCommand = async (
  input: CreateWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateWave";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteJobCommand
 */
export const se_DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteJob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobID != null && { jobID: input.jobID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLaunchConfigurationTemplateCommand
 */
export const se_DeleteLaunchConfigurationTemplateCommand = async (
  input: DeleteLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteLaunchConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand
 */
export const se_DeleteReplicationConfigurationTemplateCommand = async (
  input: DeleteReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.replicationConfigurationTemplateID != null && {
      replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSourceServerCommand
 */
export const se_DeleteSourceServerCommand = async (
  input: DeleteSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteSourceServer";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVcenterClientCommand
 */
export const se_DeleteVcenterClientCommand = async (
  input: DeleteVcenterClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteVcenterClient";
  let body: any;
  body = JSON.stringify({
    ...(input.vcenterClientID != null && { vcenterClientID: input.vcenterClientID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWaveCommand
 */
export const se_DeleteWaveCommand = async (
  input: DeleteWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteWave";
  let body: any;
  body = JSON.stringify({
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeJobLogItemsCommand
 */
export const se_DescribeJobLogItemsCommand = async (
  input: DescribeJobLogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeJobLogItems";
  let body: any;
  body = JSON.stringify({
    ...(input.jobID != null && { jobID: input.jobID }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeJobsCommand
 */
export const se_DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_DescribeJobsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand
 */
export const se_DescribeLaunchConfigurationTemplatesCommand = async (
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeLaunchConfigurationTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.launchConfigurationTemplateIDs != null && {
      launchConfigurationTemplateIDs: se_LaunchConfigurationTemplateIDs(input.launchConfigurationTemplateIDs, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand
 */
export const se_DescribeReplicationConfigurationTemplatesCommand = async (
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/DescribeReplicationConfigurationTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.replicationConfigurationTemplateIDs != null && {
      replicationConfigurationTemplateIDs: se_ReplicationConfigurationTemplateIDs(
        input.replicationConfigurationTemplateIDs,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSourceServersCommand
 */
export const se_DescribeSourceServersCommand = async (
  input: DescribeSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_DescribeSourceServersRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeVcenterClientsCommand
 */
export const se_DescribeVcenterClientsCommand = async (
  input: DescribeVcenterClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeVcenterClients";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateApplicationsCommand
 */
export const se_DisassociateApplicationsCommand = async (
  input: DisassociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisassociateApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationIDs != null && { applicationIDs: se_ApplicationIDs(input.applicationIDs, context) }),
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateSourceServersCommand
 */
export const se_DisassociateSourceServersCommand = async (
  input: DisassociateSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisassociateSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_DisassociateSourceServersRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisconnectFromServiceCommand
 */
export const se_DisconnectFromServiceCommand = async (
  input: DisconnectFromServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisconnectFromService";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1FinalizeCutoverCommand
 */
export const se_FinalizeCutoverCommand = async (
  input: FinalizeCutoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FinalizeCutover";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLaunchConfigurationCommand
 */
export const se_GetLaunchConfigurationCommand = async (
  input: GetLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetLaunchConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetReplicationConfigurationCommand
 */
export const se_GetReplicationConfigurationCommand = async (
  input: GetReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1InitializeServiceCommand
 */
export const se_InitializeServiceCommand = async (
  input: InitializeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InitializeService";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListApplicationsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListExportErrorsCommand
 */
export const se_ListExportErrorsCommand = async (
  input: ListExportErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListExportErrors";
  let body: any;
  body = JSON.stringify({
    ...(input.exportID != null && { exportID: input.exportID }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListExports";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListExportsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImportErrorsCommand
 */
export const se_ListImportErrorsCommand = async (
  input: ListImportErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImportErrors";
  let body: any;
  body = JSON.stringify({
    ...(input.importID != null && { importID: input.importID }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImports";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListImportsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListSourceServerActionsCommand
 */
export const se_ListSourceServerActionsCommand = async (
  input: ListSourceServerActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListSourceServerActions";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SourceServerActionsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTemplateActionsCommand
 */
export const se_ListTemplateActionsCommand = async (
  input: ListTemplateActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTemplateActions";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_TemplateActionsRequestFilters(input.filters, context) }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListWavesCommand
 */
export const se_ListWavesCommand = async (
  input: ListWavesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListWaves";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListWavesRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1MarkAsArchivedCommand
 */
export const se_MarkAsArchivedCommand = async (
  input: MarkAsArchivedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MarkAsArchived";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutSourceServerActionCommand
 */
export const se_PutSourceServerActionCommand = async (
  input: PutSourceServerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutSourceServerAction";
  let body: any;
  body = JSON.stringify({
    ...(input.actionID != null && { actionID: input.actionID }),
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.active != null && { active: input.active }),
    ...(input.category != null && { category: input.category }),
    ...(input.description != null && { description: input.description }),
    ...(input.documentIdentifier != null && { documentIdentifier: input.documentIdentifier }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.externalParameters != null && {
      externalParameters: se_SsmDocumentExternalParameters(input.externalParameters, context),
    }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.order != null && { order: input.order }),
    ...(input.parameters != null && { parameters: se_SsmDocumentParameters(input.parameters, context) }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
    ...(input.timeoutSeconds != null && { timeoutSeconds: input.timeoutSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutTemplateActionCommand
 */
export const se_PutTemplateActionCommand = async (
  input: PutTemplateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutTemplateAction";
  let body: any;
  body = JSON.stringify({
    ...(input.actionID != null && { actionID: input.actionID }),
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.active != null && { active: input.active }),
    ...(input.category != null && { category: input.category }),
    ...(input.description != null && { description: input.description }),
    ...(input.documentIdentifier != null && { documentIdentifier: input.documentIdentifier }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.externalParameters != null && {
      externalParameters: se_SsmDocumentExternalParameters(input.externalParameters, context),
    }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.operatingSystem != null && { operatingSystem: input.operatingSystem }),
    ...(input.order != null && { order: input.order }),
    ...(input.parameters != null && { parameters: se_SsmDocumentParameters(input.parameters, context) }),
    ...(input.timeoutSeconds != null && { timeoutSeconds: input.timeoutSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveSourceServerActionCommand
 */
export const se_RemoveSourceServerActionCommand = async (
  input: RemoveSourceServerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RemoveSourceServerAction";
  let body: any;
  body = JSON.stringify({
    ...(input.actionID != null && { actionID: input.actionID }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveTemplateActionCommand
 */
export const se_RemoveTemplateActionCommand = async (
  input: RemoveTemplateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RemoveTemplateAction";
  let body: any;
  body = JSON.stringify({
    ...(input.actionID != null && { actionID: input.actionID }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RetryDataReplicationCommand
 */
export const se_RetryDataReplicationCommand = async (
  input: RetryDataReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RetryDataReplication";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartCutoverCommand
 */
export const se_StartCutoverCommand = async (
  input: StartCutoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartCutover";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_StartCutoverRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartExportCommand
 */
export const se_StartExportCommand = async (
  input: StartExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartExport";
  let body: any;
  body = JSON.stringify({
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3BucketOwner != null && { s3BucketOwner: input.s3BucketOwner }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartImportCommand
 */
export const se_StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartImport";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.s3BucketSource != null && { s3BucketSource: se_S3BucketSource(input.s3BucketSource, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartReplicationCommand
 */
export const se_StartReplicationCommand = async (
  input: StartReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartReplication";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartTestCommand
 */
export const se_StartTestCommand = async (
  input: StartTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartTest";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_StartTestRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TerminateTargetInstancesCommand
 */
export const se_TerminateTargetInstancesCommand = async (
  input: TerminateTargetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TerminateTargetInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_TerminateTargetInstancesRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UnarchiveApplicationCommand
 */
export const se_UnarchiveApplicationCommand = async (
  input: UnarchiveApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UnarchiveApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UnarchiveWaveCommand
 */
export const se_UnarchiveWaveCommand = async (
  input: UnarchiveWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UnarchiveWave";
  let body: any;
  body = JSON.stringify({
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationID != null && { applicationID: input.applicationID }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLaunchConfigurationCommand
 */
export const se_UpdateLaunchConfigurationCommand = async (
  input: UpdateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateLaunchConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.bootMode != null && { bootMode: input.bootMode }),
    ...(input.copyPrivateIp != null && { copyPrivateIp: input.copyPrivateIp }),
    ...(input.copyTags != null && { copyTags: input.copyTags }),
    ...(input.enableMapAutoTagging != null && { enableMapAutoTagging: input.enableMapAutoTagging }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: se_Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.name != null && { name: input.name }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: se_PostLaunchActions(input.postLaunchActions, context),
    }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
    ...(input.targetInstanceTypeRightSizingMethod != null && {
      targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLaunchConfigurationTemplateCommand
 */
export const se_UpdateLaunchConfigurationTemplateCommand = async (
  input: UpdateLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateLaunchConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.associatePublicIpAddress != null && { associatePublicIpAddress: input.associatePublicIpAddress }),
    ...(input.bootMode != null && { bootMode: input.bootMode }),
    ...(input.copyPrivateIp != null && { copyPrivateIp: input.copyPrivateIp }),
    ...(input.copyTags != null && { copyTags: input.copyTags }),
    ...(input.enableMapAutoTagging != null && { enableMapAutoTagging: input.enableMapAutoTagging }),
    ...(input.largeVolumeConf != null && {
      largeVolumeConf: se_LaunchTemplateDiskConf(input.largeVolumeConf, context),
    }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: se_Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: se_PostLaunchActions(input.postLaunchActions, context),
    }),
    ...(input.smallVolumeConf != null && {
      smallVolumeConf: se_LaunchTemplateDiskConf(input.smallVolumeConf, context),
    }),
    ...(input.smallVolumeMaxSize != null && { smallVolumeMaxSize: input.smallVolumeMaxSize }),
    ...(input.targetInstanceTypeRightSizingMethod != null && {
      targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateReplicationConfigurationCommand
 */
export const se_UpdateReplicationConfigurationCommand = async (
  input: UpdateReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.associateDefaultSecurityGroup != null && {
      associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
    }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.replicatedDisks != null && {
      replicatedDisks: se_ReplicationConfigurationReplicatedDisks(input.replicatedDisks, context),
    }),
    ...(input.replicationServerInstanceType != null && {
      replicationServerInstanceType: input.replicationServerInstanceType,
    }),
    ...(input.replicationServersSecurityGroupsIDs != null && {
      replicationServersSecurityGroupsIDs: se_ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && { stagingAreaTags: se_TagsMap(input.stagingAreaTags, context) }),
    ...(input.useDedicatedReplicationServer != null && {
      useDedicatedReplicationServer: input.useDedicatedReplicationServer,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand
 */
export const se_UpdateReplicationConfigurationTemplateCommand = async (
  input: UpdateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateReplicationConfigurationTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
    ...(input.associateDefaultSecurityGroup != null && {
      associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
    }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.replicationConfigurationTemplateID != null && {
      replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
    }),
    ...(input.replicationServerInstanceType != null && {
      replicationServerInstanceType: input.replicationServerInstanceType,
    }),
    ...(input.replicationServersSecurityGroupsIDs != null && {
      replicationServersSecurityGroupsIDs: se_ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && { stagingAreaTags: se_TagsMap(input.stagingAreaTags, context) }),
    ...(input.useDedicatedReplicationServer != null && {
      useDedicatedReplicationServer: input.useDedicatedReplicationServer,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSourceServerReplicationTypeCommand
 */
export const se_UpdateSourceServerReplicationTypeCommand = async (
  input: UpdateSourceServerReplicationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateSourceServerReplicationType";
  let body: any;
  body = JSON.stringify({
    ...(input.replicationType != null && { replicationType: input.replicationType }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWaveCommand
 */
export const se_UpdateWaveCommand = async (
  input: UpdateWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateWave";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.waveID != null && { waveID: input.waveID }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1ArchiveApplicationCommand
 */
export const de_ArchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ArchiveApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = de_ApplicationAggregatedStatus(data.applicationAggregatedStatus, context);
  }
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ArchiveApplicationCommandError
 */
const de_ArchiveApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ArchiveWaveCommand
 */
export const de_ArchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ArchiveWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = de_WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ArchiveWaveCommandError
 */
const de_ArchiveWaveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveWaveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1AssociateApplicationsCommand
 */
export const de_AssociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApplicationsCommandError
 */
const de_AssociateApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1AssociateSourceServersCommand
 */
export const de_AssociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSourceServersCommandError
 */
const de_AssociateSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ChangeServerLifeCycleStateCommand
 */
export const de_ChangeServerLifeCycleStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeServerLifeCycleStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ChangeServerLifeCycleStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ChangeServerLifeCycleStateCommandError
 */
const de_ChangeServerLifeCycleStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeServerLifeCycleStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = de_ApplicationAggregatedStatus(data.applicationAggregatedStatus, context);
  }
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateLaunchConfigurationTemplateCommand
 */
export const de_CreateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateLaunchConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associatePublicIpAddress != null) {
    contents.associatePublicIpAddress = __expectBoolean(data.associatePublicIpAddress);
  }
  if (data.bootMode != null) {
    contents.bootMode = __expectString(data.bootMode);
  }
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.enableMapAutoTagging != null) {
    contents.enableMapAutoTagging = __expectBoolean(data.enableMapAutoTagging);
  }
  if (data.largeVolumeConf != null) {
    contents.largeVolumeConf = de_LaunchTemplateDiskConf(data.largeVolumeConf, context);
  }
  if (data.launchConfigurationTemplateID != null) {
    contents.launchConfigurationTemplateID = __expectString(data.launchConfigurationTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = de_PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.smallVolumeConf != null) {
    contents.smallVolumeConf = de_LaunchTemplateDiskConf(data.smallVolumeConf, context);
  }
  if (data.smallVolumeMaxSize != null) {
    contents.smallVolumeMaxSize = __expectLong(data.smallVolumeMaxSize);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLaunchConfigurationTemplateCommandError
 */
const de_CreateLaunchConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand
 */
export const de_CreateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associateDefaultSecurityGroup != null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling != null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP != null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting != null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType != null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption != null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn != null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.replicationConfigurationTemplateID != null) {
    contents.replicationConfigurationTemplateID = __expectString(data.replicationConfigurationTemplateID);
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = de_ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = de_TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError
 */
const de_CreateReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateWaveCommand
 */
export const de_CreateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWaveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = de_WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWaveCommandError
 */
const de_CreateWaveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWaveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteJobCommand
 */
export const de_DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobCommandError
 */
const de_DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommand
 */
export const de_DeleteLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteLaunchConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommandError
 */
const de_DeleteLaunchConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand
 */
export const de_DeleteReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError
 */
const de_DeleteReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteSourceServerCommand
 */
export const de_DeleteSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteSourceServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSourceServerCommandError
 */
const de_DeleteSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteVcenterClientCommand
 */
export const de_DeleteVcenterClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVcenterClientCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteVcenterClientCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVcenterClientCommandError
 */
const de_DeleteVcenterClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVcenterClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteWaveCommand
 */
export const de_DeleteWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWaveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWaveCommandError
 */
const de_DeleteWaveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWaveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeJobLogItemsCommand
 */
export const de_DescribeJobLogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobLogItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_JobLogs(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobLogItemsCommandError
 */
const de_DescribeJobLogItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeJobsCommand
 */
export const de_DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_JobsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobsCommandError
 */
const de_DescribeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand
 */
export const de_DescribeLaunchConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLaunchConfigurationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_LaunchConfigurationTemplates(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommandError
 */
const de_DescribeLaunchConfigurationTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand
 */
export const de_DescribeReplicationConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReplicationConfigurationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ReplicationConfigurationTemplates(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError
 */
const de_DescribeReplicationConfigurationTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeSourceServersCommand
 */
export const de_DescribeSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_SourceServersList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSourceServersCommandError
 */
const de_DescribeSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeVcenterClientsCommand
 */
export const de_DescribeVcenterClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVcenterClientsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVcenterClientsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_VcenterClientList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVcenterClientsCommandError
 */
const de_DescribeVcenterClientsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVcenterClientsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DisassociateApplicationsCommand
 */
export const de_DisassociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateApplicationsCommandError
 */
const de_DisassociateApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DisassociateSourceServersCommand
 */
export const de_DisassociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSourceServersCommandError
 */
const de_DisassociateSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DisconnectFromServiceCommand
 */
export const de_DisconnectFromServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectFromServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisconnectFromServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectFromServiceCommandError
 */
const de_DisconnectFromServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectFromServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1FinalizeCutoverCommand
 */
export const de_FinalizeCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeCutoverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FinalizeCutoverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1FinalizeCutoverCommandError
 */
const de_FinalizeCutoverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeCutoverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1GetLaunchConfigurationCommand
 */
export const de_GetLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bootMode != null) {
    contents.bootMode = __expectString(data.bootMode);
  }
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.enableMapAutoTagging != null) {
    contents.enableMapAutoTagging = __expectBoolean(data.enableMapAutoTagging);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = de_PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchConfigurationCommandError
 */
const de_GetLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1GetReplicationConfigurationCommand
 */
export const de_GetReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associateDefaultSecurityGroup != null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling != null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP != null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting != null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType != null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption != null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn != null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.replicatedDisks != null) {
    contents.replicatedDisks = de_ReplicationConfigurationReplicatedDisks(data.replicatedDisks, context);
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = de_ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = de_TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReplicationConfigurationCommandError
 */
const de_GetReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1InitializeServiceCommand
 */
export const de_InitializeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_InitializeServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InitializeServiceCommandError
 */
const de_InitializeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ApplicationsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListExportErrorsCommand
 */
export const de_ListExportErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExportErrorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ExportErrors(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExportErrorsCommandError
 */
const de_ListExportErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ExportsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExportsCommandError
 */
const de_ListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListImportErrorsCommand
 */
export const de_ListImportErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImportErrorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ImportErrors(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImportErrorsCommandError
 */
const de_ListImportErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ImportList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImportsCommandError
 */
const de_ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListSourceServerActionsCommand
 */
export const de_ListSourceServerActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceServerActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSourceServerActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_SourceServerActionDocuments(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceServerActionsCommandError
 */
const de_ListSourceServerActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceServerActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListTemplateActionsCommand
 */
export const de_ListTemplateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplateActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_TemplateActionDocuments(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateActionsCommandError
 */
const de_ListTemplateActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListWavesCommand
 */
export const de_ListWavesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWavesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWavesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_WavesList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWavesCommandError
 */
const de_ListWavesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWavesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1MarkAsArchivedCommand
 */
export const de_MarkAsArchivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkAsArchivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MarkAsArchivedCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1MarkAsArchivedCommandError
 */
const de_MarkAsArchivedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkAsArchivedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1PutSourceServerActionCommand
 */
export const de_PutSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSourceServerActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutSourceServerActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actionID != null) {
    contents.actionID = __expectString(data.actionID);
  }
  if (data.actionName != null) {
    contents.actionName = __expectString(data.actionName);
  }
  if (data.active != null) {
    contents.active = __expectBoolean(data.active);
  }
  if (data.category != null) {
    contents.category = __expectString(data.category);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.documentIdentifier != null) {
    contents.documentIdentifier = __expectString(data.documentIdentifier);
  }
  if (data.documentVersion != null) {
    contents.documentVersion = __expectString(data.documentVersion);
  }
  if (data.externalParameters != null) {
    contents.externalParameters = de_SsmDocumentExternalParameters(data.externalParameters, context);
  }
  if (data.mustSucceedForCutover != null) {
    contents.mustSucceedForCutover = __expectBoolean(data.mustSucceedForCutover);
  }
  if (data.order != null) {
    contents.order = __expectInt32(data.order);
  }
  if (data.parameters != null) {
    contents.parameters = de_SsmDocumentParameters(data.parameters, context);
  }
  if (data.timeoutSeconds != null) {
    contents.timeoutSeconds = __expectInt32(data.timeoutSeconds);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutSourceServerActionCommandError
 */
const de_PutSourceServerActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSourceServerActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1PutTemplateActionCommand
 */
export const de_PutTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTemplateActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutTemplateActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actionID != null) {
    contents.actionID = __expectString(data.actionID);
  }
  if (data.actionName != null) {
    contents.actionName = __expectString(data.actionName);
  }
  if (data.active != null) {
    contents.active = __expectBoolean(data.active);
  }
  if (data.category != null) {
    contents.category = __expectString(data.category);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.documentIdentifier != null) {
    contents.documentIdentifier = __expectString(data.documentIdentifier);
  }
  if (data.documentVersion != null) {
    contents.documentVersion = __expectString(data.documentVersion);
  }
  if (data.externalParameters != null) {
    contents.externalParameters = de_SsmDocumentExternalParameters(data.externalParameters, context);
  }
  if (data.mustSucceedForCutover != null) {
    contents.mustSucceedForCutover = __expectBoolean(data.mustSucceedForCutover);
  }
  if (data.operatingSystem != null) {
    contents.operatingSystem = __expectString(data.operatingSystem);
  }
  if (data.order != null) {
    contents.order = __expectInt32(data.order);
  }
  if (data.parameters != null) {
    contents.parameters = de_SsmDocumentParameters(data.parameters, context);
  }
  if (data.timeoutSeconds != null) {
    contents.timeoutSeconds = __expectInt32(data.timeoutSeconds);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutTemplateActionCommandError
 */
const de_PutTemplateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTemplateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1RemoveSourceServerActionCommand
 */
export const de_RemoveSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceServerActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveSourceServerActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveSourceServerActionCommandError
 */
const de_RemoveSourceServerActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceServerActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1RemoveTemplateActionCommand
 */
export const de_RemoveTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTemplateActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveTemplateActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveTemplateActionCommandError
 */
const de_RemoveTemplateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTemplateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1RetryDataReplicationCommand
 */
export const de_RetryDataReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RetryDataReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RetryDataReplicationCommandError
 */
const de_RetryDataReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartCutoverCommand
 */
export const de_StartCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCutoverCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartCutoverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = de_Job(data.job, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartCutoverCommandError
 */
const de_StartCutoverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCutoverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartExportCommand
 */
export const de_StartExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exportTask != null) {
    contents.exportTask = de_ExportTask(data.exportTask, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartExportCommandError
 */
const de_StartExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartImportCommand
 */
export const de_StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importTask != null) {
    contents.importTask = de_ImportTask(data.importTask, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartImportCommandError
 */
const de_StartImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartReplicationCommand
 */
export const de_StartReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartReplicationCommandError
 */
const de_StartReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartTestCommand
 */
export const de_StartTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartTestCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = de_Job(data.job, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartTestCommandError
 */
const de_StartTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1TerminateTargetInstancesCommand
 */
export const de_TerminateTargetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateTargetInstancesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_TerminateTargetInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = de_Job(data.job, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1TerminateTargetInstancesCommandError
 */
const de_TerminateTargetInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateTargetInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UnarchiveApplicationCommand
 */
export const de_UnarchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnarchiveApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = de_ApplicationAggregatedStatus(data.applicationAggregatedStatus, context);
  }
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UnarchiveApplicationCommandError
 */
const de_UnarchiveApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UnarchiveWaveCommand
 */
export const de_UnarchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnarchiveWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = de_WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UnarchiveWaveCommandError
 */
const de_UnarchiveWaveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveWaveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = de_ApplicationAggregatedStatus(data.applicationAggregatedStatus, context);
  }
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateLaunchConfigurationCommand
 */
export const de_UpdateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLaunchConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bootMode != null) {
    contents.bootMode = __expectString(data.bootMode);
  }
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.enableMapAutoTagging != null) {
    contents.enableMapAutoTagging = __expectBoolean(data.enableMapAutoTagging);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = de_PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchConfigurationCommandError
 */
const de_UpdateLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommand
 */
export const de_UpdateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLaunchConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associatePublicIpAddress != null) {
    contents.associatePublicIpAddress = __expectBoolean(data.associatePublicIpAddress);
  }
  if (data.bootMode != null) {
    contents.bootMode = __expectString(data.bootMode);
  }
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.enableMapAutoTagging != null) {
    contents.enableMapAutoTagging = __expectBoolean(data.enableMapAutoTagging);
  }
  if (data.largeVolumeConf != null) {
    contents.largeVolumeConf = de_LaunchTemplateDiskConf(data.largeVolumeConf, context);
  }
  if (data.launchConfigurationTemplateID != null) {
    contents.launchConfigurationTemplateID = __expectString(data.launchConfigurationTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = de_PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.smallVolumeConf != null) {
    contents.smallVolumeConf = de_LaunchTemplateDiskConf(data.smallVolumeConf, context);
  }
  if (data.smallVolumeMaxSize != null) {
    contents.smallVolumeMaxSize = __expectLong(data.smallVolumeMaxSize);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommandError
 */
const de_UpdateLaunchConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateReplicationConfigurationCommand
 */
export const de_UpdateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associateDefaultSecurityGroup != null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling != null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP != null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting != null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType != null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption != null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn != null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.replicatedDisks != null) {
    contents.replicatedDisks = de_ReplicationConfigurationReplicatedDisks(data.replicatedDisks, context);
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = de_ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = de_TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationConfigurationCommandError
 */
const de_UpdateReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand
 */
export const de_UpdateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.associateDefaultSecurityGroup != null) {
    contents.associateDefaultSecurityGroup = __expectBoolean(data.associateDefaultSecurityGroup);
  }
  if (data.bandwidthThrottling != null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.createPublicIP != null) {
    contents.createPublicIP = __expectBoolean(data.createPublicIP);
  }
  if (data.dataPlaneRouting != null) {
    contents.dataPlaneRouting = __expectString(data.dataPlaneRouting);
  }
  if (data.defaultLargeStagingDiskType != null) {
    contents.defaultLargeStagingDiskType = __expectString(data.defaultLargeStagingDiskType);
  }
  if (data.ebsEncryption != null) {
    contents.ebsEncryption = __expectString(data.ebsEncryption);
  }
  if (data.ebsEncryptionKeyArn != null) {
    contents.ebsEncryptionKeyArn = __expectString(data.ebsEncryptionKeyArn);
  }
  if (data.replicationConfigurationTemplateID != null) {
    contents.replicationConfigurationTemplateID = __expectString(data.replicationConfigurationTemplateID);
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = de_ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = de_TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError
 */
const de_UpdateReplicationConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateSourceServerReplicationTypeCommand
 */
export const de_UpdateSourceServerReplicationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceServerReplicationTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSourceServerReplicationTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationID != null) {
    contents.applicationID = __expectString(data.applicationID);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.fqdnForActionFramework != null) {
    contents.fqdnForActionFramework = __expectString(data.fqdnForActionFramework);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = de_LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.userProvidedID != null) {
    contents.userProvidedID = __expectString(data.userProvidedID);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceServerReplicationTypeCommandError
 */
const de_UpdateSourceServerReplicationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceServerReplicationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateWaveCommand
 */
export const de_UpdateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectString(data.creationDateTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.lastModifiedDateTime != null) {
    contents.lastModifiedDateTime = __expectString(data.lastModifiedDateTime);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = de_WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWaveCommandError
 */
const de_UpdateWaveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWaveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.errors != null) {
    contents.errors = de_ConflictExceptionErrors(data.errors, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseLong(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.quotaValue != null) {
    contents.quotaValue = __expectInt32(data.quotaValue);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UninitializedAccountExceptionRes
 */
const de_UninitializedAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UninitializedAccountException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UninitializedAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.fieldList != null) {
    contents.fieldList = de_ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ActionIDs
 */
const se_ActionIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ApplicationIDs
 */
const se_ApplicationIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ApplicationIDsFilter
 */
const se_ApplicationIDsFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AssociateSourceServersRequestSourceServerIDs
 */
const se_AssociateSourceServersRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle
 */
const se_ChangeServerLifeCycleStateSourceServerLifecycle = (
  input: ChangeServerLifeCycleStateSourceServerLifecycle,
  context: __SerdeContext
): any => {
  return {
    ...(input.state != null && { state: input.state }),
  };
};

/**
 * serializeAws_restJson1DescribeJobsRequestFilters
 */
const se_DescribeJobsRequestFilters = (input: DescribeJobsRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.fromDate != null && { fromDate: input.fromDate }),
    ...(input.jobIDs != null && { jobIDs: se_DescribeJobsRequestFiltersJobIDs(input.jobIDs, context) }),
    ...(input.toDate != null && { toDate: input.toDate }),
  };
};

/**
 * serializeAws_restJson1DescribeJobsRequestFiltersJobIDs
 */
const se_DescribeJobsRequestFiltersJobIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DescribeSourceServersRequestApplicationIDs
 */
const se_DescribeSourceServersRequestApplicationIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DescribeSourceServersRequestFilters
 */
const se_DescribeSourceServersRequestFilters = (
  input: DescribeSourceServersRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationIDs != null && {
      applicationIDs: se_DescribeSourceServersRequestApplicationIDs(input.applicationIDs, context),
    }),
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.lifeCycleStates != null && { lifeCycleStates: se_LifeCycleStates(input.lifeCycleStates, context) }),
    ...(input.replicationTypes != null && { replicationTypes: se_ReplicationTypes(input.replicationTypes, context) }),
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
    }),
  };
};

/**
 * serializeAws_restJson1DescribeSourceServersRequestFiltersIDs
 */
const se_DescribeSourceServersRequestFiltersIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DisassociateSourceServersRequestSourceServerIDs
 */
const se_DisassociateSourceServersRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ImportIDsFilter
 */
const se_ImportIDsFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LaunchConfigurationTemplateIDs
 */
const se_LaunchConfigurationTemplateIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LaunchTemplateDiskConf
 */
const se_LaunchTemplateDiskConf = (input: LaunchTemplateDiskConf, context: __SerdeContext): any => {
  return {
    ...(input.iops != null && { iops: input.iops }),
    ...(input.throughput != null && { throughput: input.throughput }),
    ...(input.volumeType != null && { volumeType: input.volumeType }),
  };
};

/**
 * serializeAws_restJson1Licensing
 */
const se_Licensing = (input: Licensing, context: __SerdeContext): any => {
  return {
    ...(input.osByol != null && { osByol: input.osByol }),
  };
};

/**
 * serializeAws_restJson1LifeCycleStates
 */
const se_LifeCycleStates = (input: (LifeCycleState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListApplicationsRequestFilters
 */
const se_ListApplicationsRequestFilters = (input: ListApplicationsRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.applicationIDs != null && { applicationIDs: se_ApplicationIDsFilter(input.applicationIDs, context) }),
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.waveIDs != null && { waveIDs: se_WaveIDsFilter(input.waveIDs, context) }),
  };
};

/**
 * serializeAws_restJson1ListExportsRequestFilters
 */
const se_ListExportsRequestFilters = (input: ListExportsRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.exportIDs != null && { exportIDs: se_ListExportsRequestFiltersExportIDs(input.exportIDs, context) }),
  };
};

/**
 * serializeAws_restJson1ListExportsRequestFiltersExportIDs
 */
const se_ListExportsRequestFiltersExportIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListImportsRequestFilters
 */
const se_ListImportsRequestFilters = (input: ListImportsRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.importIDs != null && { importIDs: se_ImportIDsFilter(input.importIDs, context) }),
  };
};

/**
 * serializeAws_restJson1ListWavesRequestFilters
 */
const se_ListWavesRequestFilters = (input: ListWavesRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.waveIDs != null && { waveIDs: se_WaveIDsFilter(input.waveIDs, context) }),
  };
};

/**
 * serializeAws_restJson1PostLaunchActions
 */
const se_PostLaunchActions = (input: PostLaunchActions, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogGroupName != null && { cloudWatchLogGroupName: input.cloudWatchLogGroupName }),
    ...(input.deployment != null && { deployment: input.deployment }),
    ...(input.s3LogBucket != null && { s3LogBucket: input.s3LogBucket }),
    ...(input.s3OutputKeyPrefix != null && { s3OutputKeyPrefix: input.s3OutputKeyPrefix }),
    ...(input.ssmDocuments != null && { ssmDocuments: se_SsmDocuments(input.ssmDocuments, context) }),
  };
};

/**
 * serializeAws_restJson1ReplicationConfigurationReplicatedDisk
 */
const se_ReplicationConfigurationReplicatedDisk = (
  input: ReplicationConfigurationReplicatedDisk,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.iops != null && { iops: input.iops }),
    ...(input.isBootDisk != null && { isBootDisk: input.isBootDisk }),
    ...(input.stagingDiskType != null && { stagingDiskType: input.stagingDiskType }),
    ...(input.throughput != null && { throughput: input.throughput }),
  };
};

/**
 * serializeAws_restJson1ReplicationConfigurationReplicatedDisks
 */
const se_ReplicationConfigurationReplicatedDisks = (
  input: ReplicationConfigurationReplicatedDisk[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicationConfigurationReplicatedDisk(entry, context);
    });
};

/**
 * serializeAws_restJson1ReplicationConfigurationTemplateIDs
 */
const se_ReplicationConfigurationTemplateIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ReplicationServersSecurityGroupsIDs
 */
const se_ReplicationServersSecurityGroupsIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ReplicationTypes
 */
const se_ReplicationTypes = (input: (ReplicationType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3BucketSource
 */
const se_S3BucketSource = (input: S3BucketSource, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3BucketOwner != null && { s3BucketOwner: input.s3BucketOwner }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  };
};

/**
 * serializeAws_restJson1SourceServerActionsRequestFilters
 */
const se_SourceServerActionsRequestFilters = (
  input: SourceServerActionsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionIDs != null && { actionIDs: se_ActionIDs(input.actionIDs, context) }),
  };
};

/**
 * serializeAws_restJson1SsmDocument
 */
const se_SsmDocument = (input: SsmDocument, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.externalParameters != null && {
      externalParameters: se_SsmDocumentExternalParameters(input.externalParameters, context),
    }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.parameters != null && { parameters: se_SsmDocumentParameters(input.parameters, context) }),
    ...(input.ssmDocumentName != null && { ssmDocumentName: input.ssmDocumentName }),
    ...(input.timeoutSeconds != null && { timeoutSeconds: input.timeoutSeconds }),
  };
};

/**
 * serializeAws_restJson1SsmDocumentExternalParameters
 */
const se_SsmDocumentExternalParameters = (
  input: Record<string, SsmExternalParameter>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SsmExternalParameter(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SsmDocumentParameters
 */
const se_SsmDocumentParameters = (
  input: Record<string, SsmParameterStoreParameter[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SsmParameterStoreParameters(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SsmDocuments
 */
const se_SsmDocuments = (input: SsmDocument[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SsmDocument(entry, context);
    });
};

/**
 * serializeAws_restJson1SsmExternalParameter
 */
const se_SsmExternalParameter = (input: SsmExternalParameter, context: __SerdeContext): any => {
  return SsmExternalParameter.visit(input, {
    dynamicPath: (value) => ({ dynamicPath: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SsmParameterStoreParameter
 */
const se_SsmParameterStoreParameter = (input: SsmParameterStoreParameter, context: __SerdeContext): any => {
  return {
    ...(input.parameterName != null && { parameterName: input.parameterName }),
    ...(input.parameterType != null && { parameterType: input.parameterType }),
  };
};

/**
 * serializeAws_restJson1SsmParameterStoreParameters
 */
const se_SsmParameterStoreParameters = (input: SsmParameterStoreParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SsmParameterStoreParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1StartCutoverRequestSourceServerIDs
 */
const se_StartCutoverRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StartTestRequestSourceServerIDs
 */
const se_StartTestRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemplateActionsRequestFilters
 */
const se_TemplateActionsRequestFilters = (input: TemplateActionsRequestFilters, context: __SerdeContext): any => {
  return {
    ...(input.actionIDs != null && { actionIDs: se_ActionIDs(input.actionIDs, context) }),
  };
};

/**
 * serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs
 */
const se_TerminateTargetInstancesRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WaveIDsFilter
 */
const se_WaveIDsFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return {
    applicationAggregatedStatus:
      output.applicationAggregatedStatus != null
        ? de_ApplicationAggregatedStatus(output.applicationAggregatedStatus, context)
        : undefined,
    applicationID: __expectString(output.applicationID),
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    description: __expectString(output.description),
    isArchived: __expectBoolean(output.isArchived),
    lastModifiedDateTime: __expectString(output.lastModifiedDateTime),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    waveID: __expectString(output.waveID),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationAggregatedStatus
 */
const de_ApplicationAggregatedStatus = (output: any, context: __SerdeContext): ApplicationAggregatedStatus => {
  return {
    healthStatus: __expectString(output.healthStatus),
    lastUpdateDateTime: __expectString(output.lastUpdateDateTime),
    progressStatus: __expectString(output.progressStatus),
    totalSourceServers: __expectLong(output.totalSourceServers),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationsList
 */
const de_ApplicationsList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Application(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConflictExceptionErrors
 */
const de_ConflictExceptionErrors = (output: any, context: __SerdeContext): ErrorDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CPU
 */
const de_CPU = (output: any, context: __SerdeContext): CPU => {
  return {
    cores: __expectLong(output.cores),
    modelName: __expectString(output.modelName),
  } as any;
};

/**
 * deserializeAws_restJson1Cpus
 */
const de_Cpus = (output: any, context: __SerdeContext): CPU[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CPU(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataReplicationError
 */
const de_DataReplicationError = (output: any, context: __SerdeContext): DataReplicationError => {
  return {
    error: __expectString(output.error),
    rawError: __expectString(output.rawError),
  } as any;
};

/**
 * deserializeAws_restJson1DataReplicationInfo
 */
const de_DataReplicationInfo = (output: any, context: __SerdeContext): DataReplicationInfo => {
  return {
    dataReplicationError:
      output.dataReplicationError != null ? de_DataReplicationError(output.dataReplicationError, context) : undefined,
    dataReplicationInitiation:
      output.dataReplicationInitiation != null
        ? de_DataReplicationInitiation(output.dataReplicationInitiation, context)
        : undefined,
    dataReplicationState: __expectString(output.dataReplicationState),
    etaDateTime: __expectString(output.etaDateTime),
    lagDuration: __expectString(output.lagDuration),
    lastSnapshotDateTime: __expectString(output.lastSnapshotDateTime),
    replicatedDisks:
      output.replicatedDisks != null
        ? de_DataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataReplicationInfoReplicatedDisk
 */
const de_DataReplicationInfoReplicatedDisk = (
  output: any,
  context: __SerdeContext
): DataReplicationInfoReplicatedDisk => {
  return {
    backloggedStorageBytes: __expectLong(output.backloggedStorageBytes),
    deviceName: __expectString(output.deviceName),
    replicatedStorageBytes: __expectLong(output.replicatedStorageBytes),
    rescannedStorageBytes: __expectLong(output.rescannedStorageBytes),
    totalStorageBytes: __expectLong(output.totalStorageBytes),
  } as any;
};

/**
 * deserializeAws_restJson1DataReplicationInfoReplicatedDisks
 */
const de_DataReplicationInfoReplicatedDisks = (
  output: any,
  context: __SerdeContext
): DataReplicationInfoReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataReplicationInfoReplicatedDisk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataReplicationInitiation
 */
const de_DataReplicationInitiation = (output: any, context: __SerdeContext): DataReplicationInitiation => {
  return {
    nextAttemptDateTime: __expectString(output.nextAttemptDateTime),
    startDateTime: __expectString(output.startDateTime),
    steps: output.steps != null ? de_DataReplicationInitiationSteps(output.steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataReplicationInitiationStep
 */
const de_DataReplicationInitiationStep = (output: any, context: __SerdeContext): DataReplicationInitiationStep => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DataReplicationInitiationSteps
 */
const de_DataReplicationInitiationSteps = (output: any, context: __SerdeContext): DataReplicationInitiationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataReplicationInitiationStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Disk
 */
const de_Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    bytes: __expectLong(output.bytes),
    deviceName: __expectString(output.deviceName),
  } as any;
};

/**
 * deserializeAws_restJson1Disks
 */
const de_Disks = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Disk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1ExportErrorData
 */
const de_ExportErrorData = (output: any, context: __SerdeContext): ExportErrorData => {
  return {
    rawError: __expectString(output.rawError),
  } as any;
};

/**
 * deserializeAws_restJson1ExportErrors
 */
const de_ExportErrors = (output: any, context: __SerdeContext): ExportTaskError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportTaskError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportsList
 */
const de_ExportsList = (output: any, context: __SerdeContext): ExportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportTask
 */
const de_ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  return {
    creationDateTime: __expectString(output.creationDateTime),
    endDateTime: __expectString(output.endDateTime),
    exportID: __expectString(output.exportID),
    progressPercentage: __limitedParseFloat32(output.progressPercentage),
    s3Bucket: __expectString(output.s3Bucket),
    s3BucketOwner: __expectString(output.s3BucketOwner),
    s3Key: __expectString(output.s3Key),
    status: __expectString(output.status),
    summary: output.summary != null ? de_ExportTaskSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExportTaskError
 */
const de_ExportTaskError = (output: any, context: __SerdeContext): ExportTaskError => {
  return {
    errorData: output.errorData != null ? de_ExportErrorData(output.errorData, context) : undefined,
    errorDateTime: __expectString(output.errorDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1ExportTaskSummary
 */
const de_ExportTaskSummary = (output: any, context: __SerdeContext): ExportTaskSummary => {
  return {
    applicationsCount: __expectLong(output.applicationsCount),
    serversCount: __expectLong(output.serversCount),
    wavesCount: __expectLong(output.wavesCount),
  } as any;
};

/**
 * deserializeAws_restJson1IdentificationHints
 */
const de_IdentificationHints = (output: any, context: __SerdeContext): IdentificationHints => {
  return {
    awsInstanceID: __expectString(output.awsInstanceID),
    fqdn: __expectString(output.fqdn),
    hostname: __expectString(output.hostname),
    vmPath: __expectString(output.vmPath),
    vmWareUuid: __expectString(output.vmWareUuid),
  } as any;
};

/**
 * deserializeAws_restJson1ImportErrorData
 */
const de_ImportErrorData = (output: any, context: __SerdeContext): ImportErrorData => {
  return {
    applicationID: __expectString(output.applicationID),
    ec2LaunchTemplateID: __expectString(output.ec2LaunchTemplateID),
    rawError: __expectString(output.rawError),
    rowNumber: __expectLong(output.rowNumber),
    sourceServerID: __expectString(output.sourceServerID),
    waveID: __expectString(output.waveID),
  } as any;
};

/**
 * deserializeAws_restJson1ImportErrors
 */
const de_ImportErrors = (output: any, context: __SerdeContext): ImportTaskError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportTaskError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportList
 */
const de_ImportList = (output: any, context: __SerdeContext): ImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportTask
 */
const de_ImportTask = (output: any, context: __SerdeContext): ImportTask => {
  return {
    creationDateTime: __expectString(output.creationDateTime),
    endDateTime: __expectString(output.endDateTime),
    importID: __expectString(output.importID),
    progressPercentage: __limitedParseFloat32(output.progressPercentage),
    s3BucketSource: output.s3BucketSource != null ? de_S3BucketSource(output.s3BucketSource, context) : undefined,
    status: __expectString(output.status),
    summary: output.summary != null ? de_ImportTaskSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportTaskError
 */
const de_ImportTaskError = (output: any, context: __SerdeContext): ImportTaskError => {
  return {
    errorData: output.errorData != null ? de_ImportErrorData(output.errorData, context) : undefined,
    errorDateTime: __expectString(output.errorDateTime),
    errorType: __expectString(output.errorType),
  } as any;
};

/**
 * deserializeAws_restJson1ImportTaskSummary
 */
const de_ImportTaskSummary = (output: any, context: __SerdeContext): ImportTaskSummary => {
  return {
    applications:
      output.applications != null ? de_ImportTaskSummaryApplications(output.applications, context) : undefined,
    servers: output.servers != null ? de_ImportTaskSummaryServers(output.servers, context) : undefined,
    waves: output.waves != null ? de_ImportTaskSummaryWaves(output.waves, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportTaskSummaryApplications
 */
const de_ImportTaskSummaryApplications = (output: any, context: __SerdeContext): ImportTaskSummaryApplications => {
  return {
    createdCount: __expectLong(output.createdCount),
    modifiedCount: __expectLong(output.modifiedCount),
  } as any;
};

/**
 * deserializeAws_restJson1ImportTaskSummaryServers
 */
const de_ImportTaskSummaryServers = (output: any, context: __SerdeContext): ImportTaskSummaryServers => {
  return {
    createdCount: __expectLong(output.createdCount),
    modifiedCount: __expectLong(output.modifiedCount),
  } as any;
};

/**
 * deserializeAws_restJson1ImportTaskSummaryWaves
 */
const de_ImportTaskSummaryWaves = (output: any, context: __SerdeContext): ImportTaskSummaryWaves => {
  return {
    createdCount: __expectLong(output.createdCount),
    modifiedCount: __expectLong(output.modifiedCount),
  } as any;
};

/**
 * deserializeAws_restJson1IPsList
 */
const de_IPsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    endDateTime: __expectString(output.endDateTime),
    initiatedBy: __expectString(output.initiatedBy),
    jobID: __expectString(output.jobID),
    participatingServers:
      output.participatingServers != null ? de_ParticipatingServers(output.participatingServers, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1JobLog
 */
const de_JobLog = (output: any, context: __SerdeContext): JobLog => {
  return {
    event: __expectString(output.event),
    eventData: output.eventData != null ? de_JobLogEventData(output.eventData, context) : undefined,
    logDateTime: __expectString(output.logDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1JobLogEventData
 */
const de_JobLogEventData = (output: any, context: __SerdeContext): JobLogEventData => {
  return {
    conversionServerID: __expectString(output.conversionServerID),
    rawError: __expectString(output.rawError),
    sourceServerID: __expectString(output.sourceServerID),
    targetInstanceID: __expectString(output.targetInstanceID),
  } as any;
};

/**
 * deserializeAws_restJson1JobLogs
 */
const de_JobLogs = (output: any, context: __SerdeContext): JobLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobLog(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobPostLaunchActionsLaunchStatus
 */
const de_JobPostLaunchActionsLaunchStatus = (
  output: any,
  context: __SerdeContext
): JobPostLaunchActionsLaunchStatus => {
  return {
    executionID: __expectString(output.executionID),
    executionStatus: __expectString(output.executionStatus),
    failureReason: __expectString(output.failureReason),
    ssmDocument: output.ssmDocument != null ? de_SsmDocument(output.ssmDocument, context) : undefined,
    ssmDocumentType: __expectString(output.ssmDocumentType),
  } as any;
};

/**
 * deserializeAws_restJson1JobsList
 */
const de_JobsList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Job(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LaunchConfigurationTemplate
 */
const de_LaunchConfigurationTemplate = (output: any, context: __SerdeContext): LaunchConfigurationTemplate => {
  return {
    arn: __expectString(output.arn),
    associatePublicIpAddress: __expectBoolean(output.associatePublicIpAddress),
    bootMode: __expectString(output.bootMode),
    copyPrivateIp: __expectBoolean(output.copyPrivateIp),
    copyTags: __expectBoolean(output.copyTags),
    ec2LaunchTemplateID: __expectString(output.ec2LaunchTemplateID),
    enableMapAutoTagging: __expectBoolean(output.enableMapAutoTagging),
    largeVolumeConf:
      output.largeVolumeConf != null ? de_LaunchTemplateDiskConf(output.largeVolumeConf, context) : undefined,
    launchConfigurationTemplateID: __expectString(output.launchConfigurationTemplateID),
    launchDisposition: __expectString(output.launchDisposition),
    licensing: output.licensing != null ? de_Licensing(output.licensing, context) : undefined,
    mapAutoTaggingMpeID: __expectString(output.mapAutoTaggingMpeID),
    postLaunchActions:
      output.postLaunchActions != null ? de_PostLaunchActions(output.postLaunchActions, context) : undefined,
    smallVolumeConf:
      output.smallVolumeConf != null ? de_LaunchTemplateDiskConf(output.smallVolumeConf, context) : undefined,
    smallVolumeMaxSize: __expectLong(output.smallVolumeMaxSize),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    targetInstanceTypeRightSizingMethod: __expectString(output.targetInstanceTypeRightSizingMethod),
  } as any;
};

/**
 * deserializeAws_restJson1LaunchConfigurationTemplates
 */
const de_LaunchConfigurationTemplates = (output: any, context: __SerdeContext): LaunchConfigurationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LaunchConfigurationTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LaunchedInstance
 */
const de_LaunchedInstance = (output: any, context: __SerdeContext): LaunchedInstance => {
  return {
    ec2InstanceID: __expectString(output.ec2InstanceID),
    firstBoot: __expectString(output.firstBoot),
    jobID: __expectString(output.jobID),
  } as any;
};

/**
 * deserializeAws_restJson1LaunchTemplateDiskConf
 */
const de_LaunchTemplateDiskConf = (output: any, context: __SerdeContext): LaunchTemplateDiskConf => {
  return {
    iops: __expectLong(output.iops),
    throughput: __expectLong(output.throughput),
    volumeType: __expectString(output.volumeType),
  } as any;
};

/**
 * deserializeAws_restJson1Licensing
 */
const de_Licensing = (output: any, context: __SerdeContext): Licensing => {
  return {
    osByol: __expectBoolean(output.osByol),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycle
 */
const de_LifeCycle = (output: any, context: __SerdeContext): LifeCycle => {
  return {
    addedToServiceDateTime: __expectString(output.addedToServiceDateTime),
    elapsedReplicationDuration: __expectString(output.elapsedReplicationDuration),
    firstByteDateTime: __expectString(output.firstByteDateTime),
    lastCutover: output.lastCutover != null ? de_LifeCycleLastCutover(output.lastCutover, context) : undefined,
    lastSeenByServiceDateTime: __expectString(output.lastSeenByServiceDateTime),
    lastTest: output.lastTest != null ? de_LifeCycleLastTest(output.lastTest, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastCutover
 */
const de_LifeCycleLastCutover = (output: any, context: __SerdeContext): LifeCycleLastCutover => {
  return {
    finalized: output.finalized != null ? de_LifeCycleLastCutoverFinalized(output.finalized, context) : undefined,
    initiated: output.initiated != null ? de_LifeCycleLastCutoverInitiated(output.initiated, context) : undefined,
    reverted: output.reverted != null ? de_LifeCycleLastCutoverReverted(output.reverted, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastCutoverFinalized
 */
const de_LifeCycleLastCutoverFinalized = (output: any, context: __SerdeContext): LifeCycleLastCutoverFinalized => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastCutoverInitiated
 */
const de_LifeCycleLastCutoverInitiated = (output: any, context: __SerdeContext): LifeCycleLastCutoverInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastCutoverReverted
 */
const de_LifeCycleLastCutoverReverted = (output: any, context: __SerdeContext): LifeCycleLastCutoverReverted => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastTest
 */
const de_LifeCycleLastTest = (output: any, context: __SerdeContext): LifeCycleLastTest => {
  return {
    finalized: output.finalized != null ? de_LifeCycleLastTestFinalized(output.finalized, context) : undefined,
    initiated: output.initiated != null ? de_LifeCycleLastTestInitiated(output.initiated, context) : undefined,
    reverted: output.reverted != null ? de_LifeCycleLastTestReverted(output.reverted, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastTestFinalized
 */
const de_LifeCycleLastTestFinalized = (output: any, context: __SerdeContext): LifeCycleLastTestFinalized => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastTestInitiated
 */
const de_LifeCycleLastTestInitiated = (output: any, context: __SerdeContext): LifeCycleLastTestInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastTestReverted
 */
const de_LifeCycleLastTestReverted = (output: any, context: __SerdeContext): LifeCycleLastTestReverted => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    ips: output.ips != null ? de_IPsList(output.ips, context) : undefined,
    isPrimary: __expectBoolean(output.isPrimary),
    macAddress: __expectString(output.macAddress),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OS
 */
const de_OS = (output: any, context: __SerdeContext): OS => {
  return {
    fullString: __expectString(output.fullString),
  } as any;
};

/**
 * deserializeAws_restJson1ParticipatingServer
 */
const de_ParticipatingServer = (output: any, context: __SerdeContext): ParticipatingServer => {
  return {
    launchStatus: __expectString(output.launchStatus),
    launchedEc2InstanceID: __expectString(output.launchedEc2InstanceID),
    postLaunchActionsStatus:
      output.postLaunchActionsStatus != null
        ? de_PostLaunchActionsStatus(output.postLaunchActionsStatus, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
  } as any;
};

/**
 * deserializeAws_restJson1ParticipatingServers
 */
const de_ParticipatingServers = (output: any, context: __SerdeContext): ParticipatingServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParticipatingServer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PostLaunchActions
 */
const de_PostLaunchActions = (output: any, context: __SerdeContext): PostLaunchActions => {
  return {
    cloudWatchLogGroupName: __expectString(output.cloudWatchLogGroupName),
    deployment: __expectString(output.deployment),
    s3LogBucket: __expectString(output.s3LogBucket),
    s3OutputKeyPrefix: __expectString(output.s3OutputKeyPrefix),
    ssmDocuments: output.ssmDocuments != null ? de_SsmDocuments(output.ssmDocuments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PostLaunchActionsLaunchStatusList
 */
const de_PostLaunchActionsLaunchStatusList = (
  output: any,
  context: __SerdeContext
): JobPostLaunchActionsLaunchStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobPostLaunchActionsLaunchStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PostLaunchActionsStatus
 */
const de_PostLaunchActionsStatus = (output: any, context: __SerdeContext): PostLaunchActionsStatus => {
  return {
    postLaunchActionsLaunchStatusList:
      output.postLaunchActionsLaunchStatusList != null
        ? de_PostLaunchActionsLaunchStatusList(output.postLaunchActionsLaunchStatusList, context)
        : undefined,
    ssmAgentDiscoveryDatetime: __expectString(output.ssmAgentDiscoveryDatetime),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationReplicatedDisk
 */
const de_ReplicationConfigurationReplicatedDisk = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationReplicatedDisk => {
  return {
    deviceName: __expectString(output.deviceName),
    iops: __expectLong(output.iops),
    isBootDisk: __expectBoolean(output.isBootDisk),
    stagingDiskType: __expectString(output.stagingDiskType),
    throughput: __expectLong(output.throughput),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationReplicatedDisks
 */
const de_ReplicationConfigurationReplicatedDisks = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationConfigurationReplicatedDisk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationTemplate
 */
const de_ReplicationConfigurationTemplate = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationTemplate => {
  return {
    arn: __expectString(output.arn),
    associateDefaultSecurityGroup: __expectBoolean(output.associateDefaultSecurityGroup),
    bandwidthThrottling: __expectLong(output.bandwidthThrottling),
    createPublicIP: __expectBoolean(output.createPublicIP),
    dataPlaneRouting: __expectString(output.dataPlaneRouting),
    defaultLargeStagingDiskType: __expectString(output.defaultLargeStagingDiskType),
    ebsEncryption: __expectString(output.ebsEncryption),
    ebsEncryptionKeyArn: __expectString(output.ebsEncryptionKeyArn),
    replicationConfigurationTemplateID: __expectString(output.replicationConfigurationTemplateID),
    replicationServerInstanceType: __expectString(output.replicationServerInstanceType),
    replicationServersSecurityGroupsIDs:
      output.replicationServersSecurityGroupsIDs != null
        ? de_ReplicationServersSecurityGroupsIDs(output.replicationServersSecurityGroupsIDs, context)
        : undefined,
    stagingAreaSubnetId: __expectString(output.stagingAreaSubnetId),
    stagingAreaTags: output.stagingAreaTags != null ? de_TagsMap(output.stagingAreaTags, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    useDedicatedReplicationServer: __expectBoolean(output.useDedicatedReplicationServer),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationTemplates
 */
const de_ReplicationConfigurationTemplates = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationConfigurationTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReplicationServersSecurityGroupsIDs
 */
const de_ReplicationServersSecurityGroupsIDs = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1S3BucketSource
 */
const de_S3BucketSource = (output: any, context: __SerdeContext): S3BucketSource => {
  return {
    s3Bucket: __expectString(output.s3Bucket),
    s3BucketOwner: __expectString(output.s3BucketOwner),
    s3Key: __expectString(output.s3Key),
  } as any;
};

/**
 * deserializeAws_restJson1SourceProperties
 */
const de_SourceProperties = (output: any, context: __SerdeContext): SourceProperties => {
  return {
    cpus: output.cpus != null ? de_Cpus(output.cpus, context) : undefined,
    disks: output.disks != null ? de_Disks(output.disks, context) : undefined,
    identificationHints:
      output.identificationHints != null ? de_IdentificationHints(output.identificationHints, context) : undefined,
    lastUpdatedDateTime: __expectString(output.lastUpdatedDateTime),
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    os: output.os != null ? de_OS(output.os, context) : undefined,
    ramBytes: __expectLong(output.ramBytes),
    recommendedInstanceType: __expectString(output.recommendedInstanceType),
  } as any;
};

/**
 * deserializeAws_restJson1SourceServer
 */
const de_SourceServer = (output: any, context: __SerdeContext): SourceServer => {
  return {
    applicationID: __expectString(output.applicationID),
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo != null ? de_DataReplicationInfo(output.dataReplicationInfo, context) : undefined,
    fqdnForActionFramework: __expectString(output.fqdnForActionFramework),
    isArchived: __expectBoolean(output.isArchived),
    launchedInstance:
      output.launchedInstance != null ? de_LaunchedInstance(output.launchedInstance, context) : undefined,
    lifeCycle: output.lifeCycle != null ? de_LifeCycle(output.lifeCycle, context) : undefined,
    replicationType: __expectString(output.replicationType),
    sourceProperties:
      output.sourceProperties != null ? de_SourceProperties(output.sourceProperties, context) : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    userProvidedID: __expectString(output.userProvidedID),
    vcenterClientID: __expectString(output.vcenterClientID),
  } as any;
};

/**
 * deserializeAws_restJson1SourceServerActionDocument
 */
const de_SourceServerActionDocument = (output: any, context: __SerdeContext): SourceServerActionDocument => {
  return {
    actionID: __expectString(output.actionID),
    actionName: __expectString(output.actionName),
    active: __expectBoolean(output.active),
    category: __expectString(output.category),
    description: __expectString(output.description),
    documentIdentifier: __expectString(output.documentIdentifier),
    documentVersion: __expectString(output.documentVersion),
    externalParameters:
      output.externalParameters != null
        ? de_SsmDocumentExternalParameters(output.externalParameters, context)
        : undefined,
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    order: __expectInt32(output.order),
    parameters: output.parameters != null ? de_SsmDocumentParameters(output.parameters, context) : undefined,
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1SourceServerActionDocuments
 */
const de_SourceServerActionDocuments = (output: any, context: __SerdeContext): SourceServerActionDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceServerActionDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SourceServersList
 */
const de_SourceServersList = (output: any, context: __SerdeContext): SourceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceServer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SsmDocument
 */
const de_SsmDocument = (output: any, context: __SerdeContext): SsmDocument => {
  return {
    actionName: __expectString(output.actionName),
    externalParameters:
      output.externalParameters != null
        ? de_SsmDocumentExternalParameters(output.externalParameters, context)
        : undefined,
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    parameters: output.parameters != null ? de_SsmDocumentParameters(output.parameters, context) : undefined,
    ssmDocumentName: __expectString(output.ssmDocumentName),
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1SsmDocumentExternalParameters
 */
const de_SsmDocumentExternalParameters = (
  output: any,
  context: __SerdeContext
): Record<string, SsmExternalParameter> => {
  return Object.entries(output).reduce((acc: Record<string, SsmExternalParameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SsmExternalParameter(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SsmDocumentParameters
 */
const de_SsmDocumentParameters = (
  output: any,
  context: __SerdeContext
): Record<string, SsmParameterStoreParameter[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, SsmParameterStoreParameter[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_SsmParameterStoreParameters(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1SsmDocuments
 */
const de_SsmDocuments = (output: any, context: __SerdeContext): SsmDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SsmDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SsmExternalParameter
 */
const de_SsmExternalParameter = (output: any, context: __SerdeContext): SsmExternalParameter => {
  if (__expectString(output.dynamicPath) !== undefined) {
    return { dynamicPath: __expectString(output.dynamicPath) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SsmParameterStoreParameter
 */
const de_SsmParameterStoreParameter = (output: any, context: __SerdeContext): SsmParameterStoreParameter => {
  return {
    parameterName: __expectString(output.parameterName),
    parameterType: __expectString(output.parameterType),
  } as any;
};

/**
 * deserializeAws_restJson1SsmParameterStoreParameters
 */
const de_SsmParameterStoreParameters = (output: any, context: __SerdeContext): SsmParameterStoreParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SsmParameterStoreParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemplateActionDocument
 */
const de_TemplateActionDocument = (output: any, context: __SerdeContext): TemplateActionDocument => {
  return {
    actionID: __expectString(output.actionID),
    actionName: __expectString(output.actionName),
    active: __expectBoolean(output.active),
    category: __expectString(output.category),
    description: __expectString(output.description),
    documentIdentifier: __expectString(output.documentIdentifier),
    documentVersion: __expectString(output.documentVersion),
    externalParameters:
      output.externalParameters != null
        ? de_SsmDocumentExternalParameters(output.externalParameters, context)
        : undefined,
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    operatingSystem: __expectString(output.operatingSystem),
    order: __expectInt32(output.order),
    parameters: output.parameters != null ? de_SsmDocumentParameters(output.parameters, context) : undefined,
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateActionDocuments
 */
const de_TemplateActionDocuments = (output: any, context: __SerdeContext): TemplateActionDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateActionDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VcenterClient
 */
const de_VcenterClient = (output: any, context: __SerdeContext): VcenterClient => {
  return {
    arn: __expectString(output.arn),
    datacenterName: __expectString(output.datacenterName),
    hostname: __expectString(output.hostname),
    lastSeenDatetime: __expectString(output.lastSeenDatetime),
    sourceServerTags: output.sourceServerTags != null ? de_TagsMap(output.sourceServerTags, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    vcenterClientID: __expectString(output.vcenterClientID),
    vcenterUUID: __expectString(output.vcenterUUID),
  } as any;
};

/**
 * deserializeAws_restJson1VcenterClientList
 */
const de_VcenterClientList = (output: any, context: __SerdeContext): VcenterClient[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VcenterClient(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Wave
 */
const de_Wave = (output: any, context: __SerdeContext): Wave => {
  return {
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    description: __expectString(output.description),
    isArchived: __expectBoolean(output.isArchived),
    lastModifiedDateTime: __expectString(output.lastModifiedDateTime),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    waveAggregatedStatus:
      output.waveAggregatedStatus != null ? de_WaveAggregatedStatus(output.waveAggregatedStatus, context) : undefined,
    waveID: __expectString(output.waveID),
  } as any;
};

/**
 * deserializeAws_restJson1WaveAggregatedStatus
 */
const de_WaveAggregatedStatus = (output: any, context: __SerdeContext): WaveAggregatedStatus => {
  return {
    healthStatus: __expectString(output.healthStatus),
    lastUpdateDateTime: __expectString(output.lastUpdateDateTime),
    progressStatus: __expectString(output.progressStatus),
    replicationStartedDateTime: __expectString(output.replicationStartedDateTime),
    totalApplications: __expectLong(output.totalApplications),
  } as any;
};

/**
 * deserializeAws_restJson1WavesList
 */
const de_WavesList = (output: any, context: __SerdeContext): Wave[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Wave(entry, context);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
